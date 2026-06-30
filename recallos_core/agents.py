from __future__ import annotations

from copy import deepcopy
from datetime import datetime
from typing import Any, Dict, Iterable, List

from .data import index_by
from .policy import corrected_policy_decision, corrected_policy_reason


FAULTY_COMPONENT_ID = "credit-policy-v7.1"
CORRECTED_COMPONENT_ID = "credit-policy-v7.2"
RECALL_ID = "RECALL-2026-001"


def _parse_date(value: str) -> datetime:
    normalized = value.replace("Z", "+00:00")
    return datetime.fromisoformat(normalized)


def _decision_in_window(decision: Dict[str, Any], start: str | None, end: str | None) -> bool:
    decided_at = _parse_date(decision["decisionTime"])
    if start and decided_at < _parse_date(f"{start}T00:00:00+00:00"):
        return False
    if end and decided_at > _parse_date(f"{end}T23:59:59+00:00"):
        return False
    return True


def _normalize_component_type(component_type: str) -> str:
    aliases = {
        "agentVersion": "agent",
        "agent_version": "agent",
        "retrievalIndex": "retrieval_index",
        "retrieval-index": "retrieval_index",
        "retrieval": "retrieval_index",
    }
    return aliases.get(component_type, component_type)


def _component_match(decision: Dict[str, Any], component_type: str, component_id: str) -> bool:
    component_type = _normalize_component_type(component_type)
    field_by_type = {
        "policy": "policyVersion",
        "prompt": "promptVersion",
        "model": "model",
        "agent": "agentVersion",
        "retrieval_index": "retrievalIndex",
    }
    field = field_by_type.get(component_type)
    return bool(field and decision.get(field) == component_id)


def component_fingerprint(components: Dict[str, Any], component_id: str) -> Dict[str, Any]:
    for group_name, records in components.items():
        for record in records:
            if record["id"] == component_id:
                fingerprint = deepcopy(record)
                fingerprint["componentGroup"] = group_name
                fingerprint["fingerprintGeneratedAt"] = "2026-06-27T10:02:00+02:00"
                return fingerprint
    return {
        "id": component_id,
        "found": False,
        "componentGroup": "unknown",
        "fingerprintGeneratedAt": "2026-06-27T10:02:00+02:00",
    }


def run_blast_radius(seed: Dict[str, Any], request: Dict[str, Any]) -> Dict[str, Any]:
    decisions = seed["decisions"]
    downstream_by_decision = index_by(seed["downstream_actions"], "decisionId")
    component_type = _normalize_component_type(request.get("faultyComponentType", "policy"))
    component_id = request["faultyComponentId"]
    start = request.get("timeWindowStart")
    end = request.get("timeWindowEnd")

    scanned = [decision for decision in decisions if _decision_in_window(decision, start, end)]
    affected = [
        decision
        for decision in scanned
        if _component_match(decision, component_type, component_id)
    ]
    affected_ids = [decision["decisionId"] for decision in affected]
    customer_facing = [
        decision
        for decision in affected
        if downstream_by_decision[decision["decisionId"]].get("customerFacingActionTaken")
    ]
    auto_rejected = [decision for decision in affected if decision["originalOutcome"] == "rejected"]

    warnings: list[str] = []
    if component_type not in {"policy", "prompt", "model", "agent", "retrieval_index"}:
        warnings.append(f"Unsupported component type: {component_type}")
    if not affected:
        warnings.append("No historical decisions matched the faulty component fingerprint.")

    return {
        "recallId": request.get("recallId", RECALL_ID),
        "totalScanned": len(scanned),
        "affectedCount": len(affected),
        "affectedDecisionIds": affected_ids,
        "componentUsagePattern": {
            "policyVersions": sorted({decision["policyVersion"] for decision in affected}),
            "agentVersions": sorted({decision["agentVersion"] for decision in affected}),
            "promptVersions": sorted({decision["promptVersion"] for decision in affected}),
            "modelVersions": sorted({decision["model"] for decision in affected}),
            "retrievalIndexes": sorted({decision["retrievalIndex"] for decision in affected}),
        },
        "riskPreview": {
            "autoRejected": len(auto_rejected),
            "customerFacingActionsAlreadyTaken": len(customer_facing),
            "emailAlreadySent": sum(
                1
                for decision in affected
                if downstream_by_decision[decision["decisionId"]]["email"]["sent"]
            ),
        },
        "confidence": 0.98 if affected else 0.0,
        "missingEvidenceWarnings": warnings,
    }


def generate_dbom_bundle(
    seed: Dict[str, Any],
    decision_ids: Iterable[str],
    recall_id: str = RECALL_ID,
    faulty_component_type: str = "policy",
    faulty_component_id: str = FAULTY_COMPONENT_ID,
) -> Dict[str, Any]:
    applications_by_id = index_by(seed["applications"], "applicationId")
    decisions_by_id = index_by(seed["decisions"], "decisionId")
    downstream_by_decision = index_by(seed["downstream_actions"], "decisionId")
    dboms: list[Dict[str, Any]] = []
    normalized_component_type = _normalize_component_type(faulty_component_type)

    for decision_id in decision_ids:
        decision = decisions_by_id[decision_id]
        application = applications_by_id[decision["applicationId"]]
        downstream = downstream_by_decision[decision_id]
        faulty_matched = _component_match(
            decision,
            normalized_component_type,
            faulty_component_id,
        )
        dboms.append(
            {
                "dbomId": f"DBOM-{decision_id}",
                "decisionId": decision_id,
                "applicationId": decision["applicationId"],
                "faultyComponent": {
                    "type": normalized_component_type,
                    "id": faulty_component_id,
                    "matched": faulty_matched,
                },
                "faultyComponentMatched": faulty_matched,
                "decisionIngredients": {
                    "agent": {
                        "name": "SME Loan Eligibility Agent",
                        "version": decision["agentVersion"],
                    },
                    "policy": {
                        "id": decision["policyVersion"],
                        "hash": decision["policyHash"],
                    },
                    "prompt": {
                        "id": decision["promptVersion"],
                        "hash": decision["promptHash"],
                    },
                    "model": decision["model"],
                    "retrievalIndex": decision["retrievalIndex"],
                    "dataInputs": {
                        "monthlyRevenue": application["monthlyRevenue"],
                        "guaranteeType": application["guaranteeType"],
                        "companyAgeMonths": application["companyAgeMonths"],
                        "riskScore": application["riskScore"],
                    },
                    "toolCalls": ["RiskScoreAPI", "GuaranteeRegistryLookup"],
                    "retrievedDocuments": [
                        f"{decision['policyVersion']}-section-3.2",
                        "sme-lending-risk-controls-2026-01",
                    ],
                },
                "downstreamImpact": {
                    "emailSent": downstream["email"]["sent"],
                    "emailDraftExists": downstream["email"]["draftExists"],
                    "crmClosed": downstream["crm"]["status"] == "closed",
                    "ticketClosed": downstream["ticket"]["status"] == "closed",
                    "legacyPortalClosed": downstream["legacyPortal"]["status"] == "closed",
                },
                "replayRequired": faulty_matched,
                "humanReviewRequired": faulty_matched
                and decision["originalOutcome"] == "rejected",
                "evidenceReferences": [
                    f"decision:{decision_id}",
                    f"application:{decision['applicationId']}",
                    f"policy:{decision['policyVersion']}",
                    f"{normalized_component_type}:{faulty_component_id}",
                    f"downstream:{downstream['downstreamActionId']}",
                ],
            }
        )

    return {
        "dbomBundleId": f"DBOM-BUNDLE-{recall_id}",
        "recallId": recall_id,
        "generatedAt": "2026-06-27T10:08:00+02:00",
        "dbomCount": len(dboms),
        "dboms": dboms,
    }


def run_counterfactual_replay(
    seed: Dict[str, Any],
    decision_ids: Iterable[str],
    recall_id: str = RECALL_ID,
) -> Dict[str, Any]:
    applications_by_id = index_by(seed["applications"], "applicationId")
    decisions_by_id = index_by(seed["decisions"], "decisionId")
    results: list[Dict[str, Any]] = []

    for decision_id in decision_ids:
        decision = decisions_by_id[decision_id]
        application = applications_by_id[decision["applicationId"]]
        corrected = corrected_policy_decision(
            application["monthlyRevenue"],
            application["guaranteeType"],
            application["riskScore"],
        )
        changed = corrected != decision["originalOutcome"]
        if changed and decision["originalOutcome"] == "rejected":
            change_type = "harmful_auto_rejection"
            recommended_action = "reopen_for_manual_review"
            severity = "high"
        elif changed:
            change_type = "changed_outcome"
            recommended_action = "manual_review"
            severity = "medium"
        else:
            change_type = "unchanged"
            recommended_action = "no_action"
            severity = "low"

        results.append(
            {
                "decisionId": decision_id,
                "applicationId": application["applicationId"],
                "applicantId": application["applicantId"],
                "originalOutcome": decision["originalOutcome"],
                "originalReason": decision["originalReason"],
                "correctedOutcome": corrected,
                "changed": changed,
                "changeType": change_type,
                "reason": corrected_policy_reason(
                    application["monthlyRevenue"],
                    application["guaranteeType"],
                    application["riskScore"],
                ),
                "policyClauseReference": "credit-policy-v7.2-section-3.2",
                "recommendedAction": recommended_action,
                "severity": severity,
            }
        )

    changed_results = [result for result in results if result["changed"]]
    return {
        "replayBatchId": f"REPLAY-{recall_id}",
        "recallId": recall_id,
        "totalReplayed": len(results),
        "changedOutcomeCount": len(changed_results),
        "highRiskChangedOutcomeCount": sum(
            1 for result in changed_results if result["severity"] == "high"
        ),
        "results": results,
    }


def classify_impacts(
    replay_batch: Dict[str, Any],
    downstream_actions: List[Dict[str, Any]],
) -> Dict[str, Any]:
    downstream_by_decision = index_by(downstream_actions, "decisionId")
    buckets = {"high": [], "medium": [], "low": []}
    for result in replay_batch["results"]:
        downstream = downstream_by_decision[result["decisionId"]]
        if result["changed"] and result["originalOutcome"] == "rejected":
            bucket = "high"
        elif result["changed"]:
            bucket = "medium"
        else:
            bucket = "low"
        entry = {
            "decisionId": result["decisionId"],
            "applicationId": result["applicationId"],
            "bucket": bucket,
            "customerFacingActionTaken": downstream["customerFacingActionTaken"],
            "emailSent": downstream["email"]["sent"],
            "recommendedAction": result["recommendedAction"],
        }
        buckets[bucket].append(entry)

    return {
        "highRiskCount": len(buckets["high"]),
        "mediumRiskCount": len(buckets["medium"]),
        "lowRiskCount": len(buckets["low"]),
        "customerFacingHighRiskCount": sum(
            1 for entry in buckets["high"] if entry["customerFacingActionTaken"]
        ),
        "emailCorrectionDraftCount": sum(
            1 for entry in buckets["high"] if entry["emailSent"]
        ),
        "buckets": buckets,
    }


def plan_remediation(
    replay_batch: Dict[str, Any],
    downstream_actions: List[Dict[str, Any]],
    dbom_bundle_id: str,
    risk_scores: Dict[str, Dict[str, Any]] | None = None,
) -> Dict[str, Any]:
    downstream_by_decision = index_by(downstream_actions, "decisionId")
    action_templates: list[Dict[str, Any]] = []
    risk_scores = risk_scores or {}

    replay_results = sorted(
        replay_batch["results"],
        key=lambda item: (
            -risk_scores.get(item["decisionId"], {}).get("riskScore", 0),
            item["decisionId"],
        ),
    )

    for result in replay_results:
        if not result["changed"]:
            continue
        downstream = downstream_by_decision[result["decisionId"]]
        risk = risk_scores.get(result["decisionId"], {})
        base = {
            "decisionId": result["decisionId"],
            "applicationId": result["applicationId"],
            "applicantId": result["applicantId"],
            "riskLevel": result["severity"],
            "riskScore": risk.get("riskScore"),
            "riskBand": risk.get("riskBand", result["severity"]),
            "riskDrivers": risk.get("drivers", []),
            "requiresHumanApproval": True,
            "evidenceReference": f"{dbom_bundle_id}#DBOM-{result['decisionId']}",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": True,
            "rollbackAction": "restore_previous_status",
        }
        if downstream["immediateReopenRequired"]:
            action_templates.extend(
                [
                    {
                        **base,
                        "system": "LoanCore",
                        "action": "set_status",
                        "value": "manual_review_required",
                        "owner": "SME Lending Ops",
                    },
                    {
                        **base,
                        "system": "CRM",
                        "action": "reopen_customer_case",
                        "value": "reopened_due_to_ai_recall",
                        "owner": "Customer Operations",
                    },
                    {
                        **base,
                        "system": "TicketSystem",
                        "action": "reopen_ticket",
                        "value": "reopened",
                        "owner": "Support Operations",
                    },
                    {
                        **base,
                        "system": "LegacyPortal",
                        "action": "update_register",
                        "value": "AI_RECALL_REOPENED",
                        "owner": "RPA Robot",
                    },
                ]
            )
        if downstream["email"]["sent"]:
            action_templates.append(
                {
                    **base,
                    "system": "EmailDraft",
                    "action": "draft_customer_notice",
                    "value": "draft_only",
                    "owner": "Business Owner",
                    "safeToRetry": False,
                    "rollbackAction": "delete_draft_if_not_sent",
                }
            )
        action_templates.append(
            {
                **base,
                "system": "AuditRegister",
                "action": "write_ai_recall_event",
                "value": "corrective_action_evidence",
                "owner": "Compliance",
                "rollbackAction": "append_reversal_audit_event",
            }
        )

    actions = []
    for index, action in enumerate(action_templates, start=1):
        action_id = f"ACT-{index:03d}"
        action = {**action, "actionId": action_id}
        action["idempotencyKey"] = (
            f"{replay_batch['recallId']}:{action['decisionId']}:{action['system']}:{action['action']}"
        )
        actions.append(action)

    summary = {
        "loanCoreReopenActions": sum(1 for a in actions if a["system"] == "LoanCore"),
        "crmReopenActions": sum(1 for a in actions if a["system"] == "CRM"),
        "ticketReopenActions": sum(1 for a in actions if a["system"] == "TicketSystem"),
        "emailDraftActions": sum(1 for a in actions if a["system"] == "EmailDraft"),
        "legacyPortalActions": sum(1 for a in actions if a["system"] == "LegacyPortal"),
        "auditRegisterActions": sum(1 for a in actions if a["system"] == "AuditRegister"),
    }
    return {
        "remediationPlanId": f"PLAN-{replay_batch['recallId']}",
        "recallId": replay_batch["recallId"],
        "requiresHumanApproval": True,
        "actionCount": len(actions),
        "summary": summary,
        "dryRunPreview": {
            "mode": "dry_run",
            "wouldUpdateLoanCore": summary["loanCoreReopenActions"],
            "wouldReopenCrmRecords": summary["crmReopenActions"],
            "wouldReopenTickets": summary["ticketReopenActions"],
            "wouldCreateEmailDrafts": summary["emailDraftActions"],
            "wouldUpdateLegacyPortal": summary["legacyPortalActions"],
            "wouldWriteAuditEvents": summary["auditRegisterActions"],
            "blockedActions": [
                {
                    "system": "Email",
                    "reason": "draft_only_until_final_business_approval",
                }
            ],
        },
        "actions": actions,
    }
