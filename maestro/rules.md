# Maestro Rules

## Rework Loops

### Loop A: Human asks for more evidence

```text
IF humanReviewOutcome == needs_more_evidence
THEN re-enter Stage 3 Blast Radius Analysis
```

### Loop B: Human rejects remediation plan

```text
IF humanReviewOutcome == revise_plan
THEN re-enter Stage 7 Impact Classification and Remediation Plan
```

### Loop C: Test Cloud fails

```text
IF regressionTestStatus == failed AND reentryCount < MaxReentryCount
THEN increment reentryCount
AND re-enter Stage 7 Impact Classification and Remediation Plan
```

### Loop D: Too many failures

```text
IF reentryCount >= MaxReentryCount
THEN escalate to Senior Recall Board
```

## SLA

| Scope | SLA |
| --- | --- |
| Case | 48 business hours |
| Intake | 1 hour |
| Blast Radius | 4 hours |
| Human Review | 8 hours |
| Remediation | 24 hours |
| Verification | 4 hours |

Demo mode can use two-minute stage SLAs for Human Review and Verification.

## Closure Guard

```text
caseStatus can become closed only when:
  regressionTestStatus == passed
  finalApprovalStatus == approved
  recallCertificateUri exists and the certificate artifact exists
  evidenceManifest.manifestSha256 exists
```

The local implementation records `closureGuardBeforeFinalApproval`,
`closureGuardAfterFinalApproval`, and `closureGuardFinal` so Test Cloud checks
can verify the guard explicitly rather than inferring it from timeline text.
