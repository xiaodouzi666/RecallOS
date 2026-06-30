# Maestro Stage Contracts

## Stage 1: Recall Trigger Intake

Writes `intakeClassification`.

Completion condition:

```text
intakeClassification.severity exists
faultyComponentId exists
requiresImmediateFreeze decided
```

## Stage 2: Faulty Component Fingerprint

Writes `componentFingerprint`.

Completion condition:

```text
componentFingerprint.id == credit-policy-v7.1
componentFingerprint.hash exists
```

## Stage 3: Blast Radius Analysis

Writes `blastRadiusSummary` and `affectedDecisionIds`.

Completion condition:

```text
affectedDecisionIds.length == 64
blastRadiusSummary.affectedCount == 64
```

No-impact branch:

```text
affectedDecisionIds.length == 0 -> No Impact Closure
```

## Stage 4: DBOM Generation

Writes `dbomBundleUri`.

Completion condition:

```text
dbom count == affectedDecisionIds.length
```

## Stage 5: Freeze Downstream Actions

Writes `freezeExecutionStatus`.

Completion condition:

```text
freezeExecutionStatus.status == completed
```

Recoverable failure:

```json
{
  "errorCode": "CRM_TIMEOUT",
  "recoverable": true,
  "recommendedAction": "retry_or_escalate"
}
```

## Stage 6: Counterfactual Replay

Writes `replayBatchSummary`.

Completion condition:

```text
replayBatchSummary.totalReplayed == 64
replayBatchSummary.changedOutcomeCount == 11
```

## Stage 7: Impact Classification and Remediation Plan

Writes `impactClassification` and `remediationPlan`.

Completion condition:

```text
impactClassification.highRiskCount == 11
remediationPlan.actions.length == 44
```

## Stage 8: Human Review

Writes `humanReviewOutcome`.

Completion condition:

```text
humanReviewOutcome in approved, needs_more_evidence, revise_plan
```

## Stage 9: Remediation Execution

Writes `remediationExecutionStatus`.

Completion condition:

```text
completedActions == remediationPlan.actions.length
failedActions == 0
```

## Stage 10: Recall Verification

Writes `regressionTestStatus`.

Completion condition:

```text
regressionTestStatus == passed
```

Failed gate:

```text
regressionTestStatus == failed -> re-enter Remediation Plan if reentryCount < 2
```

## Stage 11: Recall Certificate and Closure

Writes `recallCertificateUri` and `finalApprovalStatus`.

Completion condition:

```text
recallCertificateUri exists
finalApprovalStatus == approved
caseStatus == closed
```
