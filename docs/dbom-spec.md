# Decision Bill of Materials Specification

The Decision Bill of Materials is the core RecallOS evidence object. It answers:
which AI components, data inputs, retrieved documents, tool calls, and
downstream actions produced this historical business outcome?

## Bundle

```json
{
  "dbomBundleId": "DBOM-BUNDLE-RECALL-2026-001",
  "recallId": "RECALL-2026-001",
  "generatedAt": "2026-06-27T10:08:00+02:00",
  "dbomCount": 64,
  "dboms": []
}
```

## DBOM

```json
{
  "dbomId": "DBOM-DEC-2026-00421",
  "decisionId": "DEC-2026-00421",
  "applicationId": "APP-1042",
  "faultyComponentMatched": true,
  "decisionIngredients": {
    "agent": {
      "name": "SME Loan Eligibility Agent",
      "version": "loan-eligibility-agent-v2.3"
    },
    "policy": {
      "id": "credit-policy-v7.1",
      "hash": "sha256-demo-policy-v7-1"
    },
    "prompt": {
      "id": "prompt-2026-05-19",
      "hash": "sha256-demo-prompt-v1"
    },
    "model": "demo-llm",
    "retrievalIndex": "credit-policy-index-2026-05",
    "dataInputs": {
      "monthlyRevenue": 4200,
      "guaranteeType": "university_startup_fund",
      "companyAgeMonths": 64,
      "riskScore": 0.44
    },
    "toolCalls": ["RiskScoreAPI", "GuaranteeRegistryLookup"],
    "retrievedDocuments": ["credit-policy-v7.1-section-3.2"]
  },
  "downstreamImpact": {
    "emailSent": true,
    "emailDraftExists": true,
    "crmClosed": true,
    "ticketClosed": true,
    "legacyPortalClosed": true
  },
  "replayRequired": true,
  "humanReviewRequired": true
}
```

## Acceptance Criteria

- Every affected decision has exactly one DBOM.
- DBOM count equals blast radius affected count.
- `DEC-2026-00421` contains `credit-policy-v7.1`.
- Downstream impact includes AI trace and business-system impact.
- Evidence references can be cited in the final certificate.
