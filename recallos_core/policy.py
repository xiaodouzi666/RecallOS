from __future__ import annotations

from typing import Optional


APPROVED_GUARANTEES = {
    "university_startup_fund",
    "government_guarantee",
    "approved_bank_guarantee",
}


def faulty_policy_decision(
    monthly_revenue: float,
    guarantee_type: Optional[str],
    risk_score: float,
) -> str:
    if monthly_revenue < 5000:
        return "rejected"
    if risk_score > 0.82:
        return "manual_review"
    return "pre_approved"


def corrected_policy_decision(
    monthly_revenue: float,
    guarantee_type: Optional[str],
    risk_score: float,
) -> str:
    if monthly_revenue < 5000:
        if guarantee_type in APPROVED_GUARANTEES:
            return "manual_review"
        if guarantee_type in {None, "", "none"}:
            return "rejected"
        return "manual_review"
    if risk_score > 0.82:
        return "manual_review"
    return "pre_approved"


def corrected_policy_reason(
    monthly_revenue: float,
    guarantee_type: Optional[str],
    risk_score: float,
) -> str:
    if monthly_revenue < 5000 and guarantee_type in APPROVED_GUARANTEES:
        return (
            "Applicant has an approved guarantee; corrected policy v7.2 "
            "requires manual review instead of automatic rejection."
        )
    if monthly_revenue < 5000 and guarantee_type in {None, "", "none"}:
        return (
            "Applicant revenue is below EUR 5,000 and no approved guarantee "
            "is present; rejection remains valid."
        )
    if monthly_revenue < 5000:
        return "Low revenue with unrecognized guarantee status requires manual review."
    if risk_score > 0.82:
        return "Risk score is above 0.82; corrected policy requires manual review."
    return "Applicant passes deterministic pre-approval checks under policy v7.2."
