"""RecallOS core package.

The package keeps the demo deterministic: policy replay, blast-radius counts,
DBOM generation, remediation planning, and verification all share one source of
truth.
"""

from .policy import corrected_policy_decision, faulty_policy_decision

__all__ = ["corrected_policy_decision", "faulty_policy_decision"]
