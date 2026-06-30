# RecallOS Test Cloud Verification Plan

RecallOS treats verification as a closure gate: the case cannot close until the
recall workflow, corrected policy replay, remediation actions, and certificate
generation pass.

## Test Set

| ID | Test | Expected Result |
| --- | --- | --- |
| TC-01 | Recall trigger creates case | Case is created with `Recall Trigger Intake` as the first stage. |
| TC-02 | Blast radius is correct | `affectedCount = 64` and `DEC-2026-00421` is included. |
| TC-03 | DBOM contains faulty component | DBOM for `DEC-2026-00421` includes `credit-policy-v7.1`. |
| TC-04 | Counterfactual replay changes wrong rejection | `APP-1042` changes from `rejected` to `manual_review`. |
| TC-05 | Normal rejection remains rejection | Low revenue without a guarantee remains `rejected`. |
| TC-06 | Human rejection triggers rework | `revise_plan` re-enters remediation planning and increments `reentryCount`. |
| TC-07 | Remediation execution updates systems | LoanCore, CRM, Ticket, EmailDraft, LegacyPortal, and AuditRegister are updated. |
| TC-08 | Test failure blocks closure | A failed verification gate sets `closureBlockedByFailedVerification = true`. |
| TC-09 | Final certificate generated | Certificate contains recall ID, faulty component, counts, approvals, and test status. |
| TC-10 | End-to-end case closes only after approval | Closure guard requires passed verification, final approval, certificate artifact, and manifest hash. |

## Local Verification Commands

```bash
python3 -m unittest discover -s tests
python3 scripts/validate_all.py
```

The local unittest suite includes 24 tests. The in-case verification gate emits
TC-01 through TC-10, matching the table above.

## UiPath Test Cloud Mapping

- TC-01 through TC-05 map to API workflow and coded-agent output validation.
- TC-06 and TC-08 map to Maestro rework loop validation.
- TC-07 maps to API workflow and RPA robot execution validation.
- TC-09 and TC-10 map to certificate generation and final compliance approval.
