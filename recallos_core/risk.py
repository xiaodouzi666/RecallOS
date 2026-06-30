from __future__ import annotations

from datetime import datetime, timezone
from typing import Any, Dict, Iterable, List

from .data import index_by


def _decision_age_days(decision_time: str) -> int:
    decided_at = datetime.fromisoformat(decision_time.replace("Z", "+00:00"))
    anchor = datetime(2026, 6, 27, tzinfo=timezone.utc)
    return max(0, (anchor - decided_at).days)


def risk_band(score: int) -> str:
    if score >= 80:
        return "critical"
    if score >= 60:
        return "high"
    if score >= 35:
        return "medium"
    return "low"


def score_decision(
    replay_result: Dict[str, Any],
    decision: Dict[str, Any],
    application: Dict[str, Any],
    downstream: Dict[str, Any],
) -> Dict[str, Any]:
    score = 0
    drivers: list[str] = []

    if replay_result["changed"]:
        score += 40
        drivers.append("changed_outcome")
    if downstream["email"]["sent"]:
        score += 20
        drivers.append("email_sent")
    if downstream["crm"]["status"] == "closed":
        score += 15
        drivers.append("crm_closed")
    if downstream["ticket"]["status"] == "closed":
        score += 10
        drivers.append("ticket_closed")
    if application["requestedAmount"] >= 35000:
        score += 10
        drivers.append("high_requested_amount")
    if _decision_age_days(decision["decisionTime"]) > 7:
        score += 10
        drivers.append("older_than_7_days")
    if not decision.get("humanTouchpoints"):
        score += 5
        drivers.append("no_human_touchpoint")

    score = min(score, 100)
    return {
        "decisionId": replay_result["decisionId"],
        "applicationId": replay_result["applicationId"],
        "applicantId": replay_result["applicantId"],
        "riskScore": score,
        "riskBand": risk_band(score),
        "drivers": drivers,
        "requestedAmount": application["requestedAmount"],
        "potentialExposure": application["requestedAmount"]
        if replay_result["changed"]
        else 0,
    }


def score_recall_risk(
    seed: Dict[str, Any],
    replay_results: Iterable[Dict[str, Any]],
    downstream_actions: List[Dict[str, Any]],
) -> Dict[str, Any]:
    decisions_by_id = index_by(seed["decisions"], "decisionId")
    applications_by_id = index_by(seed["applications"], "applicationId")
    downstream_by_decision = index_by(downstream_actions, "decisionId")

    scored = []
    for result in replay_results:
        decision = decisions_by_id[result["decisionId"]]
        application = applications_by_id[result["applicationId"]]
        downstream = downstream_by_decision[result["decisionId"]]
        scored.append(score_decision(result, decision, application, downstream))

    scored.sort(key=lambda item: (-item["riskScore"], item["decisionId"]))
    band_counts = {"critical": 0, "high": 0, "medium": 0, "low": 0}
    for item in scored:
        band_counts[item["riskBand"]] += 1

    return {
        "scoredDecisionCount": len(scored),
        "bandCounts": band_counts,
        "potentialExposure": sum(item["potentialExposure"] for item in scored),
        "topRisks": scored[:12],
        "scoresByDecision": {item["decisionId"]: item for item in scored},
    }
