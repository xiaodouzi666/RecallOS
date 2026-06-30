# Test Cases

## TC-01 Recall trigger creates case

Input: `faultyComponentId = credit-policy-v7.1`

Expected: Maestro case entity exists and the first stage is `Recall Trigger Intake`.

## TC-02 Blast radius is correct

Expected: `affectedCount = 64`; affected IDs include `DEC-2026-00421`.

## TC-03 DBOM contains faulty component

Expected: `DBOM-DEC-2026-00421` contains `credit-policy-v7.1` and `faultyComponentMatched = true`.

## TC-04 Counterfactual replay changes wrong rejection

Expected: `APP-1042` changes from `rejected` to `manual_review`.

## TC-05 Normal rejection remains rejection

Expected: a low-revenue applicant without an approved guarantee remains `rejected`.

## TC-06 Human rejection triggers rework

Input: `humanReviewOutcome = revise_plan`

Expected: case re-enters Remediation Plan stage and increments `reentryCount`.

## TC-07 Remediation execution updates systems

Expected: LoanCore status is `manual_review_required`, CRM is reopened, ticket is reopened, customer notice is draft-only, and audit event is written.

## TC-08 Test failure blocks closure

Input: `regressionTestStatus = failed`

Expected: `verificationFailureObserved = true`,
`closureBlockedByFailedVerification = true`, and the case re-enters
remediation planning before final closure.

## TC-09 Final certificate generated

Expected: certificate includes recall ID, faulty component, affected count, changed outcome count, approvals, remediation summary, and verification result.

## TC-10 End-to-end case closes only after approval

Expected: `closureGuardBeforeFinalApproval.canClose = false`; after certificate,
manifest, final approval, and passed verification are present,
`closureGuardAfterFinalApproval.canClose = true`, and only then can case status
become `closed`.
