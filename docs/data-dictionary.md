# Data Dictionary

## applications.json

| Field | Meaning |
| --- | --- |
| `applicationId` | SME loan application identifier |
| `applicantId` | Customer identifier |
| `companyName` | Demo company name |
| `monthlyRevenue` | Monthly revenue in EUR |
| `guaranteeType` | Guarantee source or `none` |
| `companyAgeMonths` | Company age at application time |
| `riskScore` | Deterministic risk input |
| `requestedAmount` | Requested loan amount in EUR |

## decisions.json

| Field | Meaning |
| --- | --- |
| `decisionId` | Historical AI decision identifier |
| `originalOutcome` | Original outcome under the historical policy |
| `originalReason` | Original policy explanation |
| `policyVersion` | Policy component used by the agent |
| `agentVersion` | Agent version used for the decision |
| `promptVersion` | Prompt version used for the decision |
| `model` | Model label for the demo trace |
| `retrievalIndex` | Retrieval index used by the decision |

## downstream_actions.json

| Field | Meaning |
| --- | --- |
| `loanCore.status` | Loan core system state |
| `crm.status` | CRM customer-case state |
| `ticket.status` | Support ticket state |
| `email.status` | Draft or sent email state |
| `legacyPortal.status` | Legacy register state |
| `customerFacingActionTaken` | Whether customer-facing action already happened |
| `immediateReopenRequired` | Whether remediation must reopen operational records |

## Truth Tables

- `expected_blast_radius.json`: 64 affected decisions.
- `expected_replay_results.json`: 11 changed outcomes.
- `expected_remediation_actions.json`: 44 remediation actions, including 7 LoanCore reopen actions and 5 customer notice drafts.
