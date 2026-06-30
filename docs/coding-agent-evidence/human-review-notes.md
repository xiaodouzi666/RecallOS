# Human Review Notes

## Deterministic Decisioning

Loan replay decisions remain deterministic. The code in `recallos_core/policy.py`
decides whether a historical decision changes. Agent-style prompts are reserved
for classification, explanation, drafting, and audit summaries.

## Draft-only Customer Communication

The Customer Communication Agent and remediation workflow create draft notices
only. No real email is sent.

## Evidence Chain

The evidence manifest hashes deterministic artifacts such as blast radius,
DBOM, replay, remediation, verification, timeline, and dependency graph. The
certificate includes the evidence manifest hash. The final certificate artifact
SHA-256 is stored in the case evidence manifest after the final file write.

## UiPath Cloud Boundary

Local files provide the reference implementation and deployment contracts.
Automation Cloud deployment evidence, Devpost submission, and demo video upload
were completed through the project-owner browser session.
