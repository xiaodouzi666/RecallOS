# API Workflow Contracts

All workflows accept and return JSON. Every successful response includes
`status`, `correlationId`, `result`, and `errors`.

```json
{
  "status": "completed",
  "correlationId": "RECALL-2026-001",
  "result": {},
  "errors": []
}
```

## Error Contract

```json
{
  "status": "failed",
  "correlationId": "RECALL-2026-001",
  "result": {},
  "errors": [
    {
      "errorCode": "CRM_TIMEOUT",
      "recoverable": true,
      "recommendedAction": "retry_or_escalate"
    }
  ]
}
```

## SearchDecisionsByComponent

Input:

```json
{
  "faultyComponentType": "policy",
  "faultyComponentId": "credit-policy-v7.1",
  "timeWindowStart": "2026-06-01",
  "timeWindowEnd": "2026-06-27"
}
```

Expected output: `affectedCount = 64`.

## FreezeDownstreamActions

Input:

```json
{
  "recallId": "RECALL-2026-001",
  "affectedDecisionIds": ["DEC-2026-00421"]
}
```

Expected output: records are marked `underRecall = true`; pending email drafts
are frozen.

## RemediationExecution

Input: remediation plan from `seed-data/expected_remediation_actions.json`.

Expected output:

- LoanCore status updated to `manual_review_required`.
- CRM reopened.
- Ticket reopened.
- Email notice draft created.
- Legacy portal register updated.
- Audit events written.

## WriteAuditRegister

Input:

```json
{
  "recallId": "RECALL-2026-001",
  "decisionId": "DEC-2026-00421",
  "certificateUri": "certificates/AI_Decision_Recall_Certificate.md"
}
```

Expected output: audit event reference.
