from __future__ import annotations

from copy import deepcopy
from typing import Any, Dict, List

from .data import index_by


def _contract_response(
    recall_id: str,
    result: Dict[str, Any],
    status: str = "completed",
    errors: List[Dict[str, Any]] | None = None,
) -> Dict[str, Any]:
    response = {
        "status": status,
        "correlationId": recall_id,
        "result": result,
        "errors": errors or [],
    }
    response.update(result)
    return response


def freeze_downstream_actions(
    downstream_actions: List[Dict[str, Any]],
    affected_decision_ids: list[str],
    recall_id: str,
) -> Dict[str, Any]:
    affected = set(affected_decision_ids)
    updated = []
    frozen_count = 0
    marked: set[str] = set()
    for action in downstream_actions:
        clone = deepcopy(action)
        if clone["decisionId"] in affected:
            marked.add(clone["decisionId"])
            clone["underRecall"] = True
            clone["recallId"] = recall_id
            if clone["email"]["draftExists"] and not clone["email"]["sent"]:
                clone["email"]["status"] = "frozen"
                frozen_count += 1
            clone["loanCore"]["holdReason"] = "AI_DECISION_RECALL"
        updated.append(clone)
    result = {
        "recallId": recall_id,
        "affectedRecordsMarked": len(marked),
        "missingDecisionIds": sorted(affected - marked),
        "pendingEmailDraftsFrozen": frozen_count,
        "downstreamActions": updated,
        "auditEvent": {
            "eventType": "freeze_downstream_actions",
            "recallId": recall_id,
            "recordCount": len(marked),
        },
    }
    return _contract_response(recall_id, result)


def execute_remediation(
    seed: Dict[str, Any],
    remediation_plan: Dict[str, Any],
    recall_id: str,
    prior_execution_state: Dict[str, Any] | None = None,
) -> Dict[str, Any]:
    prior_execution_state = prior_execution_state or {}
    downstream = deepcopy(
        prior_execution_state.get("downstreamActions", seed["downstream_actions"])
    )
    downstream_by_decision = index_by(downstream, "decisionId")
    email_drafts = deepcopy(prior_execution_state.get("emailDrafts", []))
    audit_events = deepcopy(prior_execution_state.get("auditEvents", []))
    completed = deepcopy(prior_execution_state.get("completed", []))
    skipped = []
    retry_events = deepcopy(prior_execution_state.get("retryEvents", []))
    seen_idempotency_keys = set(prior_execution_state.get("executedIdempotencyKeys", []))
    seen_idempotency_keys.update(
        item["idempotencyKey"]
        for item in completed
        if item.get("status") == "completed" and item.get("idempotencyKey")
    )

    for action in remediation_plan["actions"]:
        if action["idempotencyKey"] in seen_idempotency_keys:
            skipped.append(
                {
                    "actionId": action["actionId"],
                    "status": "skipped",
                    "reason": "duplicate_idempotency_key",
                    "idempotencyKey": action["idempotencyKey"],
                }
            )
            continue
        seen_idempotency_keys.add(action["idempotencyKey"])
        record = downstream_by_decision[action["decisionId"]]
        system = action["system"]
        attempts = 1
        if (
            system == "CRM"
            and action["applicationId"] == "APP-1042"
            and action.get("safeToRetry")
        ):
            retry_events.append(
                {
                    "actionId": action["actionId"],
                    "system": "CRM",
                    "attempt": 1,
                    "status": "failed",
                    "errorCode": "CRM_TIMEOUT",
                    "recoverable": True,
                    "nextStep": "retry_with_same_idempotency_key",
                }
            )
            attempts = 2
        if system == "LoanCore":
            record["loanCore"]["status"] = action["value"]
        elif system == "CRM":
            record["crm"]["status"] = action["value"]
            record["crm"]["reopenedAt"] = "2026-06-27T10:28:00+02:00"
        elif system == "TicketSystem":
            record["ticket"]["status"] = action["value"]
            record["ticket"]["internalNote"] = "Reopened by RecallOS AI recall workflow."
        elif system == "LegacyPortal":
            record["legacyPortal"]["status"] = action["value"]
        elif system == "EmailDraft":
            draft = {
                "draftId": f"DRAFT-{action['decisionId']}",
                "decisionId": action["decisionId"],
                "applicationId": action["applicationId"],
                "mode": "draft_only",
                "subject": "Update on your SME loan application review",
                "body": (
                    "We identified that your previous automatic decision may "
                    "have been affected by an incorrect policy rule. Your "
                    "application has been reopened for manual review. This is "
                    "not an approval notice."
                ),
            }
            if not any(existing["draftId"] == draft["draftId"] for existing in email_drafts):
                record["email"]["draftExists"] = True
                record["email"]["status"] = "draft_created"
                email_drafts.append(draft)
        elif system == "AuditRegister":
            if not any(event["actionId"] == action["actionId"] for event in audit_events):
                audit_events.append(
                    {
                        "auditEventId": f"AUD-{len(audit_events) + 1:03d}",
                        "recallId": recall_id,
                        "decisionId": action["decisionId"],
                        "actionId": action["actionId"],
                        "eventType": "ai_decision_recall_corrective_action",
                        "evidenceReference": action["evidenceReference"],
                        "idempotencyKey": action["idempotencyKey"],
                    }
                )
        completed.append(
            {
                "actionId": action["actionId"],
                "status": "completed",
                "attempts": attempts,
                "idempotencyKey": action["idempotencyKey"],
            }
        )

    completed_action_count = sum(1 for item in completed if item.get("status") == "completed")
    result = {
        "recallId": recall_id,
        "completedActions": completed_action_count,
        "skippedActions": len(skipped),
        "failedActions": 0,
        "retryCount": len(retry_events),
        "retryEvents": retry_events,
        "completed": completed,
        "skipped": skipped,
        "executedIdempotencyKeys": sorted(seen_idempotency_keys),
        "downstreamActions": list(downstream_by_decision.values()),
        "emailDrafts": email_drafts,
        "auditEvents": audit_events,
    }
    return _contract_response(recall_id, result)


def run_recall_verification(
    case: Dict[str, Any],
    remediation_status: Dict[str, Any],
    force_failure: bool = False,
) -> Dict[str, Any]:
    computed = case["computedFields"]
    replay_results = computed["replayBatchSummary"]["results"]
    dboms = computed["dbomBundle"]["dboms"]
    action_count = computed["remediationPlan"]["actionCount"]
    app_1042 = next((result for result in replay_results if result["applicationId"] == "APP-1042"), None)
    dec_380 = next((result for result in replay_results if result["decisionId"] == "DEC-2026-00380"), None)
    verification_failure_observed = bool(computed.get("verificationFailureObserved"))
    closure_blocked_by_failure = computed.get("closureBlockedByFailedVerification")
    pre_close_guard = computed.get("closureGuardBeforeFinalApproval", {})
    approved_guard = computed.get("closureGuardAfterFinalApproval", {})
    checks = [
        {
            "testId": "TC-01",
            "name": "Recall trigger creates case",
            "passed": bool(case.get("caseId")) and bool(case["inputFields"].get("recallId")),
        },
        {
            "testId": "TC-02",
            "name": "Blast radius is correct",
            "passed": computed["blastRadiusSummary"]["affectedCount"] == 64
            and "DEC-2026-00421" in computed["affectedDecisionIds"],
        },
        {
            "testId": "TC-03",
            "name": "DBOM contains faulty component",
            "passed": any(
                dbom["decisionId"] == "DEC-2026-00421"
                and dbom["decisionIngredients"]["policy"]["id"] == "credit-policy-v7.1"
                and dbom["faultyComponentMatched"]
                for dbom in dboms
            ),
        },
        {
            "testId": "TC-04",
            "name": "APP-1042 changes to manual_review",
            "passed": bool(app_1042)
            and app_1042["originalOutcome"] == "rejected"
            and app_1042["correctedOutcome"] == "manual_review",
        },
        {
            "testId": "TC-05",
            "name": "Normal low-revenue no-guarantee case remains rejected",
            "passed": bool(dec_380)
            and not dec_380["changed"]
            and dec_380["correctedOutcome"] == "rejected",
        },
        {
            "testId": "TC-06",
            "name": "Rework loop is configured and bounded",
            "passed": case.get("reentryCount", 0)
            <= case.get("maxReentryCount", case.get("sla", {}).get("maxReentryCount", 2)),
        },
        {
            "testId": "TC-07",
            "name": "Remediation execution updates systems",
            "passed": remediation_status["completedActions"] == action_count
            and remediation_status["failedActions"] == 0,
        },
        {
            "testId": "TC-08",
            "name": "Failed verification blocks closure",
            "passed": (
                closure_blocked_by_failure is True
                if verification_failure_observed
                else closure_blocked_by_failure in {False, None}
            ),
        },
        {
            "testId": "TC-09",
            "name": "Certificate can be generated",
            "passed": bool(computed.get("recallCertificateUri")),
        },
        {
            "testId": "TC-10",
            "name": "Closure guard requires approval, certificate, manifest, and passed verification",
            "passed": (
                bool(approved_guard.get("canClose"))
                and computed.get("finalApprovalStatus") == "approved"
                and computed.get("regressionTestStatus") == "passed"
                and bool(computed.get("recallCertificateUri"))
                and bool(computed.get("evidenceManifest", {}).get("manifestSha256"))
            )
            if approved_guard
            else (
                pre_close_guard.get("canClose") is False
                and "finalApprovalStatus" in pre_close_guard.get("missing", [])
            ),
        },
    ]
    if force_failure:
        checks.append(
            {
                "testId": "TC-DEMO-FAIL",
                "name": "Intentional demo failure before rework",
                "passed": False,
            }
        )
    passed = all(check["passed"] for check in checks)
    return {
        "status": "passed" if passed else "failed",
        "testSet": "RecallOS Test Cloud Verification",
        "checks": checks,
        "passedCount": sum(1 for check in checks if check["passed"]),
        "failedCount": sum(1 for check in checks if not check["passed"]),
    }
