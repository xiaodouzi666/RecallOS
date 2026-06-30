from __future__ import annotations

from pathlib import Path
from typing import Any, Dict

from .agents import (
    CORRECTED_COMPONENT_ID,
    FAULTY_COMPONENT_ID,
    RECALL_ID,
    classify_impacts,
    component_fingerprint,
    generate_dbom_bundle,
    plan_remediation,
    run_blast_radius,
    run_counterfactual_replay,
)
from .data import ensure_dir, index_by, write_json
from .evidence import build_evidence_manifest, sha256_text
from .risk import score_recall_risk
from .workflows import execute_remediation, freeze_downstream_actions, run_recall_verification


def intake_classification() -> Dict[str, Any]:
    return {
        "triggerType": "faulty_policy",
        "severity": "high",
        "businessDomain": "SME lending",
        "requiresImmediateFreeze": True,
        "requiresComplianceReview": True,
        "summary": "Policy v7.1 incorrectly auto-rejected guaranteed low-revenue applicants.",
    }


def evaluate_closure_guard(case: Dict[str, Any], cert_path: Path) -> Dict[str, Any]:
    computed = case["computedFields"]
    checks = {
        "regressionTestStatus": computed.get("regressionTestStatus") == "passed",
        "finalApprovalStatus": computed.get("finalApprovalStatus") == "approved",
        "certificateExists": cert_path.exists(),
        "evidenceManifest": bool(computed.get("evidenceManifest", {}).get("manifestSha256")),
    }
    missing = [name for name, passed in checks.items() if not passed]
    return {
        "canClose": not missing,
        "checks": checks,
        "missing": missing,
    }


def can_close_case(case: Dict[str, Any], cert_path: Path) -> bool:
    return evaluate_closure_guard(case, cert_path)["canClose"]


def build_case_evidence_manifest(
    recall_id: str,
    case: Dict[str, Any],
    dependency_graph: Dict[str, Any],
) -> Dict[str, Any]:
    computed = case["computedFields"]
    artifacts = {
        "blastRadius": computed["blastRadiusSummary"],
        "affectedDecisionIds": {"ids": computed["affectedDecisionIds"]},
        "dbomBundle": computed["dbomBundle"],
        "replayBatch": computed["replayBatchSummary"],
        "impactClassification": computed["impactClassification"],
        "riskScoring": computed["riskScoring"],
        "remediationPlan": computed["remediationPlan"],
        "remediationExecution": computed["remediationExecutionStatus"],
        "testCloudVerification": computed["testCloudVerification"],
        "caseTimeline": {"timeline": case["timeline"]},
        "dependencyGraph": dependency_graph,
        "closureGuard": {
            "beforeFinalApproval": computed.get("closureGuardBeforeFinalApproval"),
            "afterFinalApproval": computed.get("closureGuardAfterFinalApproval"),
            "final": computed.get("closureGuardFinal"),
            "blockedByFailedVerification": computed.get("closureBlockedByFailedVerification"),
        },
    }
    return build_evidence_manifest(recall_id, artifacts)


def build_case(
    seed: Dict[str, Any],
    output_dir: Path,
    simulate_first_test_failure: bool = False,
    human_review_scenario: str = "approved",
) -> Dict[str, Any]:
    ensure_dir(output_dir)
    recall_id = RECALL_ID
    case = {
        "caseId": "CASE-RECALL-2026-001",
        "caseStatus": "created",
        "currentStage": "Recall Trigger Intake",
        "inputFields": {
            "recallId": recall_id,
            "triggerSource": "InternalAudit",
            "faultyComponentType": "policy",
            "faultyComponentId": FAULTY_COMPONENT_ID,
            "correctedComponentId": CORRECTED_COMPONENT_ID,
            "businessDomain": "SME lending",
            "incidentSummary": "Policy v7.1 incorrectly auto-rejected guaranteed low-revenue applicants",
            "detectedAt": "2026-06-27T10:00:00+02:00",
            "initiatedBy": "Model Risk Audit Team",
        },
        "computedFields": {},
        "timeline": [],
        "maxReentryCount": 2,
        "sla": {
            "caseSlaHours": 48,
            "maxReentryCount": 2,
            "stageSla": {
                "Intake": "1h",
                "Blast Radius": "4h",
                "Human Review": "8h",
                "Remediation": "24h",
                "Verification": "4h",
            },
            "demoModeStageSlaMinutes": 2,
        },
        "reentryCount": 0,
    }
    if human_review_scenario not in {"approved", "needs_more_evidence", "revise_plan"}:
        raise ValueError(f"Unsupported human review scenario: {human_review_scenario}")
    case["computedFields"]["verificationFailureObserved"] = False
    case["computedFields"]["closureBlockedByFailedVerification"] = False

    def complete(stage: str, status: str = "completed", note: str = "") -> None:
        case["timeline"].append({"stage": stage, "status": status, "note": note})
        case["currentStage"] = stage

    case["computedFields"]["intakeClassification"] = intake_classification()
    complete("Recall Trigger Intake", note="Recall Intake Agent classified severity high.")

    case["computedFields"]["componentFingerprint"] = component_fingerprint(
        seed["components"], FAULTY_COMPONENT_ID
    )
    complete("Faulty Component Fingerprint", note="credit-policy-v7.1 fingerprint matched.")

    blast_request = {
        "recallId": recall_id,
        "faultyComponentType": "policy",
        "faultyComponentId": FAULTY_COMPONENT_ID,
        "timeWindowStart": "2026-06-01",
        "timeWindowEnd": "2026-06-27",
    }
    blast = run_blast_radius(seed, blast_request)
    case["computedFields"]["blastRadiusSummary"] = blast
    case["computedFields"]["affectedDecisionIds"] = blast["affectedDecisionIds"]
    complete("Blast Radius Analysis", note="64 historical decisions matched faulty policy.")

    dbom_bundle = generate_dbom_bundle(
        seed,
        blast["affectedDecisionIds"],
        recall_id,
        case["inputFields"]["faultyComponentType"],
        case["inputFields"]["faultyComponentId"],
    )
    dbom_path = output_dir / "dbom-bundles" / f"{dbom_bundle['dbomBundleId']}.json"
    write_json(dbom_path, dbom_bundle)
    case["computedFields"]["dbomBundleUri"] = (
        f"storage://dbom-bundles/{dbom_bundle['dbomBundleId']}.json"
    )
    case["computedFields"]["dbomBundle"] = dbom_bundle
    complete("DBOM Generation", note="Generated Decision Bill of Materials bundle.")

    freeze = freeze_downstream_actions(seed["downstream_actions"], blast["affectedDecisionIds"], recall_id)
    seed_after_freeze = {**seed, "downstream_actions": freeze["downstreamActions"]}
    case["computedFields"]["freezeExecutionStatus"] = {
        key: value for key, value in freeze.items() if key != "downstreamActions"
    }
    complete("Freeze Downstream Actions", note="Affected records marked under AI recall.")

    replay = run_counterfactual_replay(seed_after_freeze, blast["affectedDecisionIds"], recall_id)
    case["computedFields"]["replayBatchSummary"] = replay
    complete("Counterfactual Replay", note="11 harmful auto-rejections changed to manual review.")

    risk = score_recall_risk(seed_after_freeze, replay["results"], seed_after_freeze["downstream_actions"])
    case["computedFields"]["riskScoring"] = risk

    impact = classify_impacts(replay, seed_after_freeze["downstream_actions"])
    case["computedFields"]["impactClassification"] = impact
    remediation_plan = plan_remediation(
        replay,
        seed_after_freeze["downstream_actions"],
        dbom_bundle["dbomBundleId"],
        risk["scoresByDecision"],
    )
    case["computedFields"]["remediationPlan"] = remediation_plan
    complete("Impact Classification & Remediation Plan", note="Human-approved plan created.")

    if human_review_scenario == "needs_more_evidence":
        case["computedFields"]["humanReviewOutcome"] = {
            "recallOwner": "needs_more_evidence",
            "businessOwner": "pending",
            "complianceReviewer": "pending",
            "notes": "Recall Owner requested expanded blast-radius evidence before approval.",
        }
        case["reentryCount"] += 1
        complete("Human Review", "failed", "Recall Owner requested more evidence.")
        case["computedFields"]["blastRadiusSummary"]["evidenceExpansionNote"] = (
            "Human review requested expanded component lineage and downstream sample evidence."
        )
        complete(
            "Blast Radius Analysis",
            "re-entered",
            "Expanded evidence packet attached for human review.",
        )
    elif human_review_scenario == "revise_plan":
        case["computedFields"]["humanReviewOutcome"] = {
            "recallOwner": "approved",
            "businessOwner": "revise_plan",
            "complianceReviewer": "pending",
            "notes": "Business Owner requested a revised remediation plan before approval.",
        }
        case["reentryCount"] += 1
        complete("Human Review", "failed", "Business Owner requested remediation plan revision.")
        case["computedFields"]["remediationPlan"]["revisionNote"] = (
            "Plan revised to keep customer communications draft-only until final business release."
        )
        complete(
            "Impact Classification & Remediation Plan",
            "re-entered",
            "Human review requested a revised remediation plan.",
        )

    case["computedFields"]["humanReviewOutcome"] = {
        "recallOwner": "approved",
        "businessOwner": "approved",
        "complianceReviewer": "approved",
        "scenario": human_review_scenario,
        "notes": "Proceed with draft-only customer communication and audit registration.",
    }
    complete("Human Review", note="Recall Owner, Business Owner, and Compliance approved.")

    remediation_status = execute_remediation(seed_after_freeze, remediation_plan, recall_id)
    case["computedFields"]["remediationExecutionStatus"] = {
        key: value for key, value in remediation_status.items() if key != "downstreamActions"
    }
    complete("Remediation Execution", note="Mock enterprise systems updated.")

    cert_path = output_dir / "certificates" / "AI_Decision_Recall_Certificate.md"
    ensure_dir(cert_path.parent)
    case["computedFields"]["recallCertificateUri"] = (
        "storage://recall-certificates/AI_Decision_Recall_Certificate.md"
    )
    case["computedFields"]["closureGuardBeforeFinalApproval"] = evaluate_closure_guard(
        case, cert_path
    )

    verification = run_recall_verification(
        case, remediation_status, force_failure=simulate_first_test_failure
    )
    if verification["status"] == "failed":
        case["computedFields"]["verificationFailureObserved"] = True
        case["computedFields"]["closureBlockedByFailedVerification"] = True
        case["reentryCount"] += 1
        complete(
            "Recall Verification",
            "failed",
            "Intentional Test Cloud gate failed and blocked case closure.",
        )
        case["computedFields"]["remediationPlan"]["reworkNote"] = (
            "Re-entered planning after failed verification; idempotent actions were safe to retry."
        )
        complete(
            "Impact Classification & Remediation Plan",
            "re-entered",
            "Remediation plan revised after failed verification.",
        )
        remediation_status = execute_remediation(
            seed_after_freeze,
            remediation_plan,
            recall_id,
            prior_execution_state=remediation_status,
        )
        case["computedFields"]["remediationExecutionStatus"] = {
            key: value for key, value in remediation_status.items() if key != "downstreamActions"
        }
        complete("Remediation Execution", "rerun", "Idempotent remediation rerun completed.")
        case["computedFields"]["closureGuardBeforeFinalApproval"] = evaluate_closure_guard(
            case, cert_path
        )
        verification = run_recall_verification(case, remediation_status, force_failure=False)
    case["computedFields"]["regressionTestStatus"] = verification["status"]
    case["computedFields"]["testCloudVerification"] = verification
    complete("Recall Verification", note=f"Test Cloud gate {verification['status']}.")

    dependency_graph = build_dependency_graph(case)
    case["computedFields"]["decisionDependencyGraph"] = dependency_graph
    case["computedFields"]["evidenceManifest"] = build_case_evidence_manifest(
        recall_id, case, dependency_graph
    )
    draft_certificate = generate_certificate_markdown(case)
    cert_path.write_text(draft_certificate, encoding="utf-8")
    case["computedFields"]["closureGuardBeforeFinalApproval"] = evaluate_closure_guard(
        case, cert_path
    )
    case["computedFields"]["finalApprovalStatus"] = "approved"
    case["computedFields"]["closureGuardAfterFinalApproval"] = evaluate_closure_guard(
        case, cert_path
    )
    if not can_close_case(case, cert_path):
        raise RuntimeError("Closure guard failed; case cannot be closed.")
    case["caseStatus"] = "closed"
    case["currentStage"] = "Case Closed"
    complete("Recall Certificate & Closure", note="Audit certificate generated and case closed.")
    case["currentStage"] = "Case Closed"
    case["computedFields"]["closureGuardFinal"] = evaluate_closure_guard(case, cert_path)
    case["computedFields"]["testCloudVerification"] = run_recall_verification(
        case, remediation_status, force_failure=False
    )

    dependency_graph = build_dependency_graph(case)
    case["computedFields"]["decisionDependencyGraph"] = dependency_graph
    certificate_markdown = generate_certificate_markdown(case)
    cert_path.write_text(certificate_markdown, encoding="utf-8")
    evidence_manifest = build_case_evidence_manifest(recall_id, case, dependency_graph)
    evidence_manifest["certificateArtifactSha256"] = sha256_text(certificate_markdown)
    evidence_manifest["certificateArtifactUri"] = case["computedFields"]["recallCertificateUri"]
    case["computedFields"]["evidenceManifest"] = evidence_manifest
    certificate_markdown = generate_certificate_markdown(case)
    cert_path.write_text(certificate_markdown, encoding="utf-8")
    case["computedFields"]["evidenceManifest"]["certificateArtifactSha256"] = sha256_text(
        certificate_markdown
    )

    snapshot = build_dashboard_snapshot(case, seed_after_freeze, remediation_status, certificate_markdown)
    write_json(output_dir / "recall_case_RECALL-2026-001.json", case)
    write_json(output_dir / "dashboard_snapshot.json", snapshot)
    write_json(output_dir / "mock_system_state.json", remediation_status)
    return {"case": case, "snapshot": snapshot, "remediationStatus": remediation_status}


def build_dashboard_snapshot(
    case: Dict[str, Any],
    seed: Dict[str, Any],
    remediation_status: Dict[str, Any],
    certificate_markdown: str,
) -> Dict[str, Any]:
    decisions_by_id = index_by(seed["decisions"], "decisionId")
    applications_by_id = index_by(seed["applications"], "applicationId")
    dboms_by_decision = {
        dbom["decisionId"]: dbom
        for dbom in case["computedFields"]["dbomBundle"]["dboms"]
    }
    replay_by_decision = {
        result["decisionId"]: result
        for result in case["computedFields"]["replayBatchSummary"]["results"]
    }
    downstream_by_decision = index_by(remediation_status["downstreamActions"], "decisionId")
    affected_rows = []
    for decision_id in case["computedFields"]["affectedDecisionIds"]:
        decision = decisions_by_id[decision_id]
        application = applications_by_id[decision["applicationId"]]
        replay = replay_by_decision[decision_id]
        downstream = downstream_by_decision[decision_id]
        affected_rows.append(
            {
                "decisionId": decision_id,
                "applicationId": decision["applicationId"],
                "applicantId": application["applicantId"],
                "companyName": application["companyName"],
                "monthlyRevenue": application["monthlyRevenue"],
                "guaranteeType": application["guaranteeType"],
                "originalOutcome": replay["originalOutcome"],
                "correctedOutcome": replay["correctedOutcome"],
                "severity": replay["severity"],
                "riskScore": case["computedFields"]["riskScoring"]["scoresByDecision"][decision_id][
                    "riskScore"
                ],
                "riskBand": case["computedFields"]["riskScoring"]["scoresByDecision"][decision_id][
                    "riskBand"
                ],
                "riskDrivers": case["computedFields"]["riskScoring"]["scoresByDecision"][decision_id][
                    "drivers"
                ],
                "changed": replay["changed"],
                "reason": replay["reason"],
                "crmStatus": downstream["crm"]["status"],
                "ticketStatus": downstream["ticket"]["status"],
                "emailStatus": downstream["email"]["status"],
            }
        )
    summary = {
        "recallId": case["inputFields"]["recallId"],
        "caseStatus": case["caseStatus"],
        "totalScanned": case["computedFields"]["blastRadiusSummary"]["totalScanned"],
        "affectedCount": case["computedFields"]["blastRadiusSummary"]["affectedCount"],
        "changedOutcomeCount": case["computedFields"]["replayBatchSummary"]["changedOutcomeCount"],
        "highRiskCount": case["computedFields"]["impactClassification"]["highRiskCount"],
        "customerFacingHighRiskCount": case["computedFields"]["impactClassification"]["customerFacingHighRiskCount"],
        "remediationCompleted": case["computedFields"]["remediationExecutionStatus"]["completedActions"],
        "remediationTotal": case["computedFields"]["remediationPlan"]["actionCount"],
        "verification": case["computedFields"]["regressionTestStatus"],
        "manifestHash": case["computedFields"]["evidenceManifest"]["manifestSha256"][:12],
        "criticalRiskCount": case["computedFields"]["riskScoring"]["bandCounts"]["critical"],
        "potentialExposure": case["computedFields"]["riskScoring"]["potentialExposure"],
    }
    return {
        "summary": summary,
        "case": case,
        "affectedDecisions": affected_rows,
        "selectedDecisionId": "DEC-2026-00421",
        "dbomsByDecision": dboms_by_decision,
        "remediationPlan": case["computedFields"]["remediationPlan"],
        "emailDrafts": remediation_status["emailDrafts"],
        "auditEvents": remediation_status["auditEvents"],
        "riskScoring": case["computedFields"]["riskScoring"],
        "evidenceManifest": case["computedFields"]["evidenceManifest"],
        "dependencyGraph": case["computedFields"]["decisionDependencyGraph"],
        "certificateMarkdown": certificate_markdown,
    }


def build_dependency_graph(case: Dict[str, Any]) -> Dict[str, Any]:
    affected_count = case["computedFields"]["blastRadiusSummary"]["affectedCount"]
    changed_count = case["computedFields"]["replayBatchSummary"]["changedOutcomeCount"]
    customer_facing = case["computedFields"]["impactClassification"]["customerFacingHighRiskCount"]
    nodes = [
        {"id": "credit-policy-v7.1", "label": "Faulty policy", "type": "policy", "risk": "faulty"},
        {"id": "prompt-2026-05-19", "label": "Prompt", "type": "prompt"},
        {"id": "loan-eligibility-agent-v2.3", "label": "Loan agent", "type": "agent"},
        {"id": "credit-policy-index-2026-05", "label": "Retrieval index", "type": "retrieval_index"},
        {"id": "affected-decisions", "label": f"{affected_count} affected decisions", "type": "decision_cluster"},
        {"id": "changed-outcomes", "label": f"{changed_count} changed outcomes", "type": "impact_cluster"},
        {"id": "customer-facing", "label": f"{customer_facing} customer-facing cases", "type": "business_impact"},
        {"id": "DEC-2026-00421", "label": "Hero decision", "type": "decision", "severity": "high"},
        {"id": "APP-1042", "label": "Hero application", "type": "application"},
    ]
    edges = [
        {"from": "credit-policy-v7.1", "to": "prompt-2026-05-19", "relationship": "referenced_by"},
        {"from": "prompt-2026-05-19", "to": "loan-eligibility-agent-v2.3", "relationship": "used_by"},
        {"from": "credit-policy-index-2026-05", "to": "loan-eligibility-agent-v2.3", "relationship": "retrieved_by"},
        {"from": "loan-eligibility-agent-v2.3", "to": "affected-decisions", "relationship": "produced"},
        {"from": "affected-decisions", "to": "changed-outcomes", "relationship": "replayed_into"},
        {"from": "changed-outcomes", "to": "customer-facing", "relationship": "requires_remediation"},
        {"from": "credit-policy-v7.1", "to": "DEC-2026-00421", "relationship": "used_by"},
        {"from": "DEC-2026-00421", "to": "APP-1042", "relationship": "decided"},
    ]
    return {
        "graphId": f"GRAPH-{case['inputFields']['recallId']}",
        "nodes": nodes,
        "edges": edges,
        "summary": {
            "affectedDecisions": affected_count,
            "changedOutcomes": changed_count,
            "customerFacingRemediations": customer_facing,
        },
    }


def generate_certificate_markdown(case: Dict[str, Any]) -> str:
    blast = case["computedFields"]["blastRadiusSummary"]
    replay = case["computedFields"]["replayBatchSummary"]
    impact = case["computedFields"]["impactClassification"]
    plan = case["computedFields"]["remediationPlan"]
    manifest = case["computedFields"].get("evidenceManifest", {})
    manifest_hash = manifest.get("manifestSha256", "pending")
    certificate_uri = case["computedFields"].get("recallCertificateUri", "pending")
    human_review = case["computedFields"].get("humanReviewOutcome", {})
    return f"""# AI Decision Recall Certificate

Recall ID: {case['inputFields']['recallId']}
Faulty Component: {case['inputFields']['faultyComponentId']}
Corrected Component: {case['inputFields']['correctedComponentId']}
Business Domain: {case['inputFields']['businessDomain']}

## 1. Trigger
Internal audit detected incorrect automatic rejection logic in credit-policy-v7.1.

## 2. Blast Radius
- Total decisions scanned: {blast['totalScanned']}
- Decisions using faulty component: {blast['affectedCount']}
- Changed outcomes after replay: {replay['changedOutcomeCount']}
- High-risk customer-facing cases: {impact['customerFacingHighRiskCount']}

## 3. Decision Bill of Materials
DBOM bundle: {case['computedFields']['dbomBundle']['dbomBundleId']}
Evidence references are available for every affected decision, including DEC-2026-00421.

## 4. Counterfactual Replay
Corrected policy replay completed. APP-1042 changed from rejected to manual_review because the applicant has an approved university startup guarantee.

## 5. Human Review
Recall Owner: {human_review.get('recallOwner', 'pending')}
Business Owner: {human_review.get('businessOwner', 'pending')}
Compliance Reviewer: {human_review.get('complianceReviewer', 'pending')}

## 6. Remediation
- LoanCore reopen actions: {plan['summary']['loanCoreReopenActions']}
- CRM reopen actions: {plan['summary']['crmReopenActions']}
- Ticket reopen actions: {plan['summary']['ticketReopenActions']}
- Customer notice drafts: {plan['summary']['emailDraftActions']}
- Legacy portal robot updates: {plan['summary']['legacyPortalActions']}
- Audit register events: {plan['summary']['auditRegisterActions']}

## 7. Verification
Test Cloud recall verification: {case['computedFields'].get('regressionTestStatus', 'pending')}
Regression tests: {case['computedFields'].get('regressionTestStatus', 'pending')}

## 8. Tamper-evident Evidence Chain
Evidence manifest SHA-256: {manifest_hash}
Certificate artifact URI: {certificate_uri}
Certificate artifact SHA-256 is stored in the case evidence manifest after final file write.

## 9. Remaining Risk
No unresolved high-risk affected decisions remain in the mock systems.
Customer communication is draft-only pending final business communication approval.
"""
