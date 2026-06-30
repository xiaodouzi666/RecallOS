#!/usr/bin/env python3
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from recallos_core.agents import (  # noqa: E402
    RECALL_ID,
    generate_dbom_bundle,
    plan_remediation,
    run_blast_radius,
    run_counterfactual_replay,
)
from recallos_core.data import ensure_dir, write_json  # noqa: E402
from recallos_core.policy import corrected_policy_decision, faulty_policy_decision  # noqa: E402
from recallos_core.risk import score_recall_risk  # noqa: E402


CHANGED_INDICES = {7, 13, 18, 24, 31, 36, 42, 48, 53, 59, 64}
IMMEDIATE_REOPEN_INDICES = {7, 13, 18, 24, 31, 36, 42}
EMAIL_SENT_INDICES = {7, 13, 24, 36, 42}
NO_GUARANTEE_REJECT_INDICES = {1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14}
HIGH_RISK_MANUAL_REVIEW_INDICES = {15, 16, 17, 19, 20, 21, 22, 23, 25, 26}
APPROVED_GUARANTEES = [
    "university_startup_fund",
    "government_guarantee",
    "approved_bank_guarantee",
]


def company_name(i: int) -> str:
    prefixes = [
        "Northstar",
        "Harbor",
        "Cedar",
        "Brightline",
        "Canal",
        "Apex",
        "Bluefield",
        "Signal",
    ]
    suffixes = ["Studio", "Foods", "Robotics", "Clinic", "Logistics", "Labs"]
    return f"{prefixes[i % len(prefixes)]} {suffixes[i % len(suffixes)]} {i:03d}"


def build_records() -> tuple[list[dict], list[dict], dict, list[dict]]:
    applications = []
    decisions = []
    downstream_actions = []
    components = {
        "policies": [
            {
                "id": "credit-policy-v7.1",
                "type": "policy",
                "hash": "sha256-demo-policy-v7-1",
                "status": "faulty",
                "clause": "If monthly revenue < EUR 5,000, reject automatically.",
                "usedByAgents": ["loan-eligibility-agent-v2.3"],
                "relatedPrompt": "prompt-2026-05-19",
                "relatedRetrievalIndex": "credit-policy-index-2026-05",
            },
            {
                "id": "credit-policy-v7.2",
                "type": "policy",
                "hash": "sha256-demo-policy-v7-2",
                "status": "corrected",
                "clause": "Low revenue applicants with approved guarantees go to manual review.",
                "usedByAgents": ["loan-eligibility-agent-v2.4"],
                "relatedPrompt": "prompt-2026-06-27",
                "relatedRetrievalIndex": "credit-policy-index-2026-06",
            },
        ],
        "prompts": [
            {
                "id": "prompt-2026-05-19",
                "hash": "sha256-demo-prompt-v1",
                "status": "used_with_faulty_policy",
            },
            {
                "id": "prompt-2026-06-27",
                "hash": "sha256-demo-prompt-v2",
                "status": "corrected_context",
            },
        ],
        "models": [
            {"id": "demo-llm", "provider": "demo", "riskTier": "controlled_demo"}
        ],
        "agents": [
            {
                "id": "loan-eligibility-agent-v2.3",
                "name": "SME Loan Eligibility Agent",
                "status": "used_faulty_policy",
            },
            {
                "id": "loan-eligibility-agent-v2.4",
                "name": "SME Loan Eligibility Agent",
                "status": "corrected",
            },
        ],
        "retrieval_indexes": [
            {
                "id": "credit-policy-index-2026-05",
                "status": "contains_faulty_clause",
            },
            {
                "id": "credit-policy-index-2026-06",
                "status": "corrected",
            },
        ],
    }

    for i in range(1, 121):
        app_id = f"APP-{1000 + i}"
        decision_id = f"DEC-2026-{379 + i:05d}"
        applicant_id = f"CUST-{1800 + i}"
        policy_version = "credit-policy-v7.1" if i <= 64 else "credit-policy-v7.2"
        prompt_version = "prompt-2026-05-19" if i <= 64 else "prompt-2026-06-27"
        agent_version = "loan-eligibility-agent-v2.3" if i <= 64 else "loan-eligibility-agent-v2.4"
        retrieval_index = "credit-policy-index-2026-05" if i <= 64 else "credit-policy-index-2026-06"

        if i in CHANGED_INDICES:
            monthly_revenue = 4100 + (i % 7) * 120
            guarantee_type = APPROVED_GUARANTEES[i % len(APPROVED_GUARANTEES)]
            risk_score = round(0.35 + (i % 9) * 0.021, 3)
        elif i in NO_GUARANTEE_REJECT_INDICES:
            monthly_revenue = 3600 + (i % 5) * 180
            guarantee_type = "none"
            risk_score = round(0.42 + (i % 6) * 0.028, 3)
        elif i in HIGH_RISK_MANUAL_REVIEW_INDICES:
            monthly_revenue = 6400 + (i % 8) * 320
            guarantee_type = "none"
            risk_score = round(0.84 + (i % 5) * 0.018, 3)
        else:
            monthly_revenue = 6800 + (i % 17) * 410
            guarantee_type = "none" if i % 4 else "approved_bank_guarantee"
            risk_score = round(0.31 + (i % 13) * 0.031, 3)

        if app_id == "APP-1042":
            monthly_revenue = 4200
            guarantee_type = "university_startup_fund"
            risk_score = 0.44

        if policy_version == "credit-policy-v7.1":
            original_outcome = faulty_policy_decision(monthly_revenue, guarantee_type, risk_score)
        else:
            original_outcome = corrected_policy_decision(monthly_revenue, guarantee_type, risk_score)

        if original_outcome == "rejected":
            original_reason = "Monthly revenue below EUR 5,000"
        elif original_outcome == "manual_review":
            original_reason = "Risk or policy threshold requires manual review"
        else:
            original_reason = "Applicant passed deterministic pre-approval checks"

        applications.append(
            {
                "applicationId": app_id,
                "applicantId": applicant_id,
                "companyName": company_name(i),
                "businessObject": "sme_loan_application",
                "monthlyRevenue": monthly_revenue,
                "guaranteeType": guarantee_type,
                "companyAgeMonths": 10 + (i * 3) % 72,
                "riskScore": risk_score,
                "requestedAmount": 15000 + (i % 12) * 2500,
                "country": "NL" if i % 3 else "DE",
                "submittedAt": f"2026-06-{1 + (i % 20):02d}T09:{i % 60:02d}:00Z",
            }
        )
        decisions.append(
            {
                "decisionId": decision_id,
                "applicationId": app_id,
                "applicantId": applicant_id,
                "businessObject": "sme_loan_application",
                "decisionTime": f"2026-06-{1 + (i % 20):02d}T10:{i % 60:02d}:00Z",
                "originalOutcome": original_outcome,
                "originalReason": original_reason,
                "policyVersion": policy_version,
                "policyHash": "sha256-demo-policy-v7-1"
                if policy_version == "credit-policy-v7.1"
                else "sha256-demo-policy-v7-2",
                "agentVersion": agent_version,
                "promptVersion": prompt_version,
                "promptHash": "sha256-demo-prompt-v1" if i <= 64 else "sha256-demo-prompt-v2",
                "model": "demo-llm",
                "retrievalIndex": retrieval_index,
                "humanTouchpoints": [],
                "recallStatus": "candidate_for_replay" if i <= 64 else "not_in_recall_scope",
            }
        )
        email_sent = i in EMAIL_SENT_INDICES
        immediate_reopen = i in IMMEDIATE_REOPEN_INDICES
        downstream_actions.append(
            {
                "downstreamActionId": f"DOWN-{decision_id}",
                "decisionId": decision_id,
                "applicationId": app_id,
                "loanCore": {
                    "status": "closed_rejected"
                    if original_outcome == "rejected"
                    else original_outcome,
                    "holdReason": None,
                },
                "crm": {"status": "closed" if immediate_reopen else "open"},
                "ticket": {"status": "closed" if immediate_reopen else "none"},
                "email": {
                    "sent": email_sent,
                    "draftExists": original_outcome == "rejected",
                    "status": "sent" if email_sent else ("draft_ready" if original_outcome == "rejected" else "none"),
                },
                "legacyPortal": {"status": "closed" if immediate_reopen else "not_required"},
                "customerFacingActionTaken": immediate_reopen,
                "immediateReopenRequired": immediate_reopen,
                "underRecall": False,
                "recallId": None,
            }
        )

    return applications, decisions, components, downstream_actions


def main() -> None:
    seed_dir = ROOT / "seed-data"
    ensure_dir(seed_dir)
    applications, decisions, components, downstream_actions = build_records()
    seed = {
        "applications": applications,
        "decisions": decisions,
        "components": components,
        "downstream_actions": downstream_actions,
    }
    for filename, payload in [
        ("applications.json", applications),
        ("decisions.json", decisions),
        ("components.json", components),
        ("downstream_actions.json", downstream_actions),
    ]:
        write_json(seed_dir / filename, payload)

    blast = run_blast_radius(
        seed,
        {
            "recallId": RECALL_ID,
            "faultyComponentType": "policy",
            "faultyComponentId": "credit-policy-v7.1",
            "timeWindowStart": "2026-06-01",
            "timeWindowEnd": "2026-06-27",
        },
    )
    replay = run_counterfactual_replay(seed, blast["affectedDecisionIds"], RECALL_ID)
    dbom = generate_dbom_bundle(seed, blast["affectedDecisionIds"], RECALL_ID)
    risk = score_recall_risk(seed, replay["results"], downstream_actions)
    plan = plan_remediation(
        replay,
        downstream_actions,
        dbom["dbomBundleId"],
        risk["scoresByDecision"],
    )
    write_json(seed_dir / "expected_blast_radius.json", blast)
    write_json(seed_dir / "expected_replay_results.json", replay)
    write_json(seed_dir / "expected_remediation_actions.json", plan)
    print(
        "Generated seed data: "
        f"{len(decisions)} decisions, "
        f"{blast['affectedCount']} affected, "
        f"{replay['changedOutcomeCount']} changed, "
        f"{plan['summary']['loanCoreReopenActions']} immediate reopen."
    )


if __name__ == "__main__":
    main()
