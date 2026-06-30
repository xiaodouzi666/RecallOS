window.RECALLOS_SNAPSHOT = {
  "summary": {
    "recallId": "RECALL-2026-001",
    "caseStatus": "closed",
    "totalScanned": 120,
    "affectedCount": 64,
    "changedOutcomeCount": 11,
    "highRiskCount": 11,
    "customerFacingHighRiskCount": 7,
    "remediationCompleted": 44,
    "remediationTotal": 44,
    "verification": "passed",
    "manifestHash": "db577616de91",
    "criticalRiskCount": 6,
    "potentialExposure": 282500
  },
  "case": {
    "caseId": "CASE-RECALL-2026-001",
    "caseStatus": "closed",
    "currentStage": "Case Closed",
    "inputFields": {
      "recallId": "RECALL-2026-001",
      "triggerSource": "InternalAudit",
      "faultyComponentType": "policy",
      "faultyComponentId": "credit-policy-v7.1",
      "correctedComponentId": "credit-policy-v7.2",
      "businessDomain": "SME lending",
      "incidentSummary": "Policy v7.1 incorrectly auto-rejected guaranteed low-revenue applicants",
      "detectedAt": "2026-06-27T10:00:00+02:00",
      "initiatedBy": "Model Risk Audit Team"
    },
    "computedFields": {
      "verificationFailureObserved": true,
      "closureBlockedByFailedVerification": true,
      "intakeClassification": {
        "triggerType": "faulty_policy",
        "severity": "high",
        "businessDomain": "SME lending",
        "requiresImmediateFreeze": true,
        "requiresComplianceReview": true,
        "summary": "Policy v7.1 incorrectly auto-rejected guaranteed low-revenue applicants."
      },
      "componentFingerprint": {
        "id": "credit-policy-v7.1",
        "type": "policy",
        "hash": "sha256-demo-policy-v7-1",
        "status": "faulty",
        "clause": "If monthly revenue < EUR 5,000, reject automatically.",
        "usedByAgents": [
          "loan-eligibility-agent-v2.3"
        ],
        "relatedPrompt": "prompt-2026-05-19",
        "relatedRetrievalIndex": "credit-policy-index-2026-05",
        "componentGroup": "policies",
        "fingerprintGeneratedAt": "2026-06-27T10:02:00+02:00"
      },
      "blastRadiusSummary": {
        "recallId": "RECALL-2026-001",
        "totalScanned": 120,
        "affectedCount": 64,
        "affectedDecisionIds": [
          "DEC-2026-00380",
          "DEC-2026-00381",
          "DEC-2026-00382",
          "DEC-2026-00383",
          "DEC-2026-00384",
          "DEC-2026-00385",
          "DEC-2026-00386",
          "DEC-2026-00387",
          "DEC-2026-00388",
          "DEC-2026-00389",
          "DEC-2026-00390",
          "DEC-2026-00391",
          "DEC-2026-00392",
          "DEC-2026-00393",
          "DEC-2026-00394",
          "DEC-2026-00395",
          "DEC-2026-00396",
          "DEC-2026-00397",
          "DEC-2026-00398",
          "DEC-2026-00399",
          "DEC-2026-00400",
          "DEC-2026-00401",
          "DEC-2026-00402",
          "DEC-2026-00403",
          "DEC-2026-00404",
          "DEC-2026-00405",
          "DEC-2026-00406",
          "DEC-2026-00407",
          "DEC-2026-00408",
          "DEC-2026-00409",
          "DEC-2026-00410",
          "DEC-2026-00411",
          "DEC-2026-00412",
          "DEC-2026-00413",
          "DEC-2026-00414",
          "DEC-2026-00415",
          "DEC-2026-00416",
          "DEC-2026-00417",
          "DEC-2026-00418",
          "DEC-2026-00419",
          "DEC-2026-00420",
          "DEC-2026-00421",
          "DEC-2026-00422",
          "DEC-2026-00423",
          "DEC-2026-00424",
          "DEC-2026-00425",
          "DEC-2026-00426",
          "DEC-2026-00427",
          "DEC-2026-00428",
          "DEC-2026-00429",
          "DEC-2026-00430",
          "DEC-2026-00431",
          "DEC-2026-00432",
          "DEC-2026-00433",
          "DEC-2026-00434",
          "DEC-2026-00435",
          "DEC-2026-00436",
          "DEC-2026-00437",
          "DEC-2026-00438",
          "DEC-2026-00439",
          "DEC-2026-00440",
          "DEC-2026-00441",
          "DEC-2026-00442",
          "DEC-2026-00443"
        ],
        "componentUsagePattern": {
          "policyVersions": [
            "credit-policy-v7.1"
          ],
          "agentVersions": [
            "loan-eligibility-agent-v2.3"
          ],
          "promptVersions": [
            "prompt-2026-05-19"
          ],
          "modelVersions": [
            "demo-llm"
          ],
          "retrievalIndexes": [
            "credit-policy-index-2026-05"
          ]
        },
        "riskPreview": {
          "autoRejected": 23,
          "customerFacingActionsAlreadyTaken": 7,
          "emailAlreadySent": 5
        },
        "confidence": 0.98,
        "missingEvidenceWarnings": []
      },
      "affectedDecisionIds": [
        "DEC-2026-00380",
        "DEC-2026-00381",
        "DEC-2026-00382",
        "DEC-2026-00383",
        "DEC-2026-00384",
        "DEC-2026-00385",
        "DEC-2026-00386",
        "DEC-2026-00387",
        "DEC-2026-00388",
        "DEC-2026-00389",
        "DEC-2026-00390",
        "DEC-2026-00391",
        "DEC-2026-00392",
        "DEC-2026-00393",
        "DEC-2026-00394",
        "DEC-2026-00395",
        "DEC-2026-00396",
        "DEC-2026-00397",
        "DEC-2026-00398",
        "DEC-2026-00399",
        "DEC-2026-00400",
        "DEC-2026-00401",
        "DEC-2026-00402",
        "DEC-2026-00403",
        "DEC-2026-00404",
        "DEC-2026-00405",
        "DEC-2026-00406",
        "DEC-2026-00407",
        "DEC-2026-00408",
        "DEC-2026-00409",
        "DEC-2026-00410",
        "DEC-2026-00411",
        "DEC-2026-00412",
        "DEC-2026-00413",
        "DEC-2026-00414",
        "DEC-2026-00415",
        "DEC-2026-00416",
        "DEC-2026-00417",
        "DEC-2026-00418",
        "DEC-2026-00419",
        "DEC-2026-00420",
        "DEC-2026-00421",
        "DEC-2026-00422",
        "DEC-2026-00423",
        "DEC-2026-00424",
        "DEC-2026-00425",
        "DEC-2026-00426",
        "DEC-2026-00427",
        "DEC-2026-00428",
        "DEC-2026-00429",
        "DEC-2026-00430",
        "DEC-2026-00431",
        "DEC-2026-00432",
        "DEC-2026-00433",
        "DEC-2026-00434",
        "DEC-2026-00435",
        "DEC-2026-00436",
        "DEC-2026-00437",
        "DEC-2026-00438",
        "DEC-2026-00439",
        "DEC-2026-00440",
        "DEC-2026-00441",
        "DEC-2026-00442",
        "DEC-2026-00443"
      ],
      "dbomBundleUri": "storage://dbom-bundles/DBOM-BUNDLE-RECALL-2026-001.json",
      "dbomBundle": {
        "dbomBundleId": "DBOM-BUNDLE-RECALL-2026-001",
        "recallId": "RECALL-2026-001",
        "generatedAt": "2026-06-27T10:08:00+02:00",
        "dbomCount": 64,
        "dboms": [
          {
            "dbomId": "DBOM-DEC-2026-00380",
            "decisionId": "DEC-2026-00380",
            "applicationId": "APP-1001",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 3780,
                "guaranteeType": "none",
                "companyAgeMonths": 13,
                "riskScore": 0.448
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00380",
              "application:APP-1001",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00380"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00381",
            "decisionId": "DEC-2026-00381",
            "applicationId": "APP-1002",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 3960,
                "guaranteeType": "none",
                "companyAgeMonths": 16,
                "riskScore": 0.476
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00381",
              "application:APP-1002",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00381"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00382",
            "decisionId": "DEC-2026-00382",
            "applicationId": "APP-1003",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4140,
                "guaranteeType": "none",
                "companyAgeMonths": 19,
                "riskScore": 0.504
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00382",
              "application:APP-1003",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00382"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00383",
            "decisionId": "DEC-2026-00383",
            "applicationId": "APP-1004",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4320,
                "guaranteeType": "none",
                "companyAgeMonths": 22,
                "riskScore": 0.532
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00383",
              "application:APP-1004",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00383"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00384",
            "decisionId": "DEC-2026-00384",
            "applicationId": "APP-1005",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 3600,
                "guaranteeType": "none",
                "companyAgeMonths": 25,
                "riskScore": 0.56
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00384",
              "application:APP-1005",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00384"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00385",
            "decisionId": "DEC-2026-00385",
            "applicationId": "APP-1006",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 3780,
                "guaranteeType": "none",
                "companyAgeMonths": 28,
                "riskScore": 0.42
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00385",
              "application:APP-1006",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00385"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00386",
            "decisionId": "DEC-2026-00386",
            "applicationId": "APP-1007",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4100,
                "guaranteeType": "government_guarantee",
                "companyAgeMonths": 31,
                "riskScore": 0.497
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": true,
              "emailDraftExists": true,
              "crmClosed": true,
              "ticketClosed": true,
              "legacyPortalClosed": true
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00386",
              "application:APP-1007",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00386"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00387",
            "decisionId": "DEC-2026-00387",
            "applicationId": "APP-1008",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4140,
                "guaranteeType": "none",
                "companyAgeMonths": 34,
                "riskScore": 0.476
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00387",
              "application:APP-1008",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00387"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00388",
            "decisionId": "DEC-2026-00388",
            "applicationId": "APP-1009",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4320,
                "guaranteeType": "none",
                "companyAgeMonths": 37,
                "riskScore": 0.504
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00388",
              "application:APP-1009",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00388"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00389",
            "decisionId": "DEC-2026-00389",
            "applicationId": "APP-1010",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 3600,
                "guaranteeType": "none",
                "companyAgeMonths": 40,
                "riskScore": 0.532
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00389",
              "application:APP-1010",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00389"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00390",
            "decisionId": "DEC-2026-00390",
            "applicationId": "APP-1011",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 3780,
                "guaranteeType": "none",
                "companyAgeMonths": 43,
                "riskScore": 0.56
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00390",
              "application:APP-1011",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00390"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00391",
            "decisionId": "DEC-2026-00391",
            "applicationId": "APP-1012",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 3960,
                "guaranteeType": "none",
                "companyAgeMonths": 46,
                "riskScore": 0.42
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00391",
              "application:APP-1012",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00391"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00392",
            "decisionId": "DEC-2026-00392",
            "applicationId": "APP-1013",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4820,
                "guaranteeType": "government_guarantee",
                "companyAgeMonths": 49,
                "riskScore": 0.434
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": true,
              "emailDraftExists": true,
              "crmClosed": true,
              "ticketClosed": true,
              "legacyPortalClosed": true
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00392",
              "application:APP-1013",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00392"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00393",
            "decisionId": "DEC-2026-00393",
            "applicationId": "APP-1014",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4320,
                "guaranteeType": "none",
                "companyAgeMonths": 52,
                "riskScore": 0.476
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00393",
              "application:APP-1014",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00393"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00394",
            "decisionId": "DEC-2026-00394",
            "applicationId": "APP-1015",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 8640,
                "guaranteeType": "none",
                "companyAgeMonths": 55,
                "riskScore": 0.84
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00394",
              "application:APP-1015",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00394"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00395",
            "decisionId": "DEC-2026-00395",
            "applicationId": "APP-1016",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 6400,
                "guaranteeType": "none",
                "companyAgeMonths": 58,
                "riskScore": 0.858
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00395",
              "application:APP-1016",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00395"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00396",
            "decisionId": "DEC-2026-00396",
            "applicationId": "APP-1017",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 6720,
                "guaranteeType": "none",
                "companyAgeMonths": 61,
                "riskScore": 0.876
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00396",
              "application:APP-1017",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00396"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00397",
            "decisionId": "DEC-2026-00397",
            "applicationId": "APP-1018",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4580,
                "guaranteeType": "university_startup_fund",
                "companyAgeMonths": 64,
                "riskScore": 0.35
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": true,
              "ticketClosed": true,
              "legacyPortalClosed": true
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00397",
              "application:APP-1018",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00397"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00398",
            "decisionId": "DEC-2026-00398",
            "applicationId": "APP-1019",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 7360,
                "guaranteeType": "none",
                "companyAgeMonths": 67,
                "riskScore": 0.912
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00398",
              "application:APP-1019",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00398"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00399",
            "decisionId": "DEC-2026-00399",
            "applicationId": "APP-1020",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 7680,
                "guaranteeType": "none",
                "companyAgeMonths": 70,
                "riskScore": 0.84
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00399",
              "application:APP-1020",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00399"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00400",
            "decisionId": "DEC-2026-00400",
            "applicationId": "APP-1021",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 8000,
                "guaranteeType": "none",
                "companyAgeMonths": 73,
                "riskScore": 0.858
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00400",
              "application:APP-1021",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00400"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00401",
            "decisionId": "DEC-2026-00401",
            "applicationId": "APP-1022",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 8320,
                "guaranteeType": "none",
                "companyAgeMonths": 76,
                "riskScore": 0.876
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00401",
              "application:APP-1022",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00401"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00402",
            "decisionId": "DEC-2026-00402",
            "applicationId": "APP-1023",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 8640,
                "guaranteeType": "none",
                "companyAgeMonths": 79,
                "riskScore": 0.894
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00402",
              "application:APP-1023",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00402"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00403",
            "decisionId": "DEC-2026-00403",
            "applicationId": "APP-1024",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4460,
                "guaranteeType": "university_startup_fund",
                "companyAgeMonths": 10,
                "riskScore": 0.476
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": true,
              "emailDraftExists": true,
              "crmClosed": true,
              "ticketClosed": true,
              "legacyPortalClosed": true
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00403",
              "application:APP-1024",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00403"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00404",
            "decisionId": "DEC-2026-00404",
            "applicationId": "APP-1025",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 6720,
                "guaranteeType": "none",
                "companyAgeMonths": 13,
                "riskScore": 0.84
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00404",
              "application:APP-1025",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00404"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00405",
            "decisionId": "DEC-2026-00405",
            "applicationId": "APP-1026",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 7040,
                "guaranteeType": "none",
                "companyAgeMonths": 16,
                "riskScore": 0.858
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00405",
              "application:APP-1026",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00405"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00406",
            "decisionId": "DEC-2026-00406",
            "applicationId": "APP-1027",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 10900,
                "guaranteeType": "none",
                "companyAgeMonths": 19,
                "riskScore": 0.341
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00406",
              "application:APP-1027",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00406"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00407",
            "decisionId": "DEC-2026-00407",
            "applicationId": "APP-1028",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 11310,
                "guaranteeType": "approved_bank_guarantee",
                "companyAgeMonths": 22,
                "riskScore": 0.372
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00407",
              "application:APP-1028",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00407"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00408",
            "decisionId": "DEC-2026-00408",
            "applicationId": "APP-1029",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 11720,
                "guaranteeType": "none",
                "companyAgeMonths": 25,
                "riskScore": 0.403
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00408",
              "application:APP-1029",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00408"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00409",
            "decisionId": "DEC-2026-00409",
            "applicationId": "APP-1030",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 12130,
                "guaranteeType": "none",
                "companyAgeMonths": 28,
                "riskScore": 0.434
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00409",
              "application:APP-1030",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00409"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00410",
            "decisionId": "DEC-2026-00410",
            "applicationId": "APP-1031",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4460,
                "guaranteeType": "government_guarantee",
                "companyAgeMonths": 31,
                "riskScore": 0.434
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": true,
              "ticketClosed": true,
              "legacyPortalClosed": true
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00410",
              "application:APP-1031",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00410"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00411",
            "decisionId": "DEC-2026-00411",
            "applicationId": "APP-1032",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 12950,
                "guaranteeType": "approved_bank_guarantee",
                "companyAgeMonths": 34,
                "riskScore": 0.496
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00411",
              "application:APP-1032",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00411"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00412",
            "decisionId": "DEC-2026-00412",
            "applicationId": "APP-1033",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 13360,
                "guaranteeType": "none",
                "companyAgeMonths": 37,
                "riskScore": 0.527
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00412",
              "application:APP-1033",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00412"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00413",
            "decisionId": "DEC-2026-00413",
            "applicationId": "APP-1034",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 6800,
                "guaranteeType": "none",
                "companyAgeMonths": 40,
                "riskScore": 0.558
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00413",
              "application:APP-1034",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00413"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00414",
            "decisionId": "DEC-2026-00414",
            "applicationId": "APP-1035",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 7210,
                "guaranteeType": "none",
                "companyAgeMonths": 43,
                "riskScore": 0.589
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00414",
              "application:APP-1035",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00414"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00415",
            "decisionId": "DEC-2026-00415",
            "applicationId": "APP-1036",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4220,
                "guaranteeType": "university_startup_fund",
                "companyAgeMonths": 46,
                "riskScore": 0.35
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": true,
              "emailDraftExists": true,
              "crmClosed": true,
              "ticketClosed": true,
              "legacyPortalClosed": true
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00415",
              "application:APP-1036",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00415"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00416",
            "decisionId": "DEC-2026-00416",
            "applicationId": "APP-1037",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 8030,
                "guaranteeType": "none",
                "companyAgeMonths": 49,
                "riskScore": 0.651
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00416",
              "application:APP-1037",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00416"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00417",
            "decisionId": "DEC-2026-00417",
            "applicationId": "APP-1038",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 8440,
                "guaranteeType": "none",
                "companyAgeMonths": 52,
                "riskScore": 0.682
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00417",
              "application:APP-1038",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00417"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00418",
            "decisionId": "DEC-2026-00418",
            "applicationId": "APP-1039",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 8850,
                "guaranteeType": "none",
                "companyAgeMonths": 55,
                "riskScore": 0.31
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00418",
              "application:APP-1039",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00418"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00419",
            "decisionId": "DEC-2026-00419",
            "applicationId": "APP-1040",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 9260,
                "guaranteeType": "approved_bank_guarantee",
                "companyAgeMonths": 58,
                "riskScore": 0.341
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00419",
              "application:APP-1040",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00419"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00420",
            "decisionId": "DEC-2026-00420",
            "applicationId": "APP-1041",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 9670,
                "guaranteeType": "none",
                "companyAgeMonths": 61,
                "riskScore": 0.372
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00420",
              "application:APP-1041",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00420"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00421",
            "decisionId": "DEC-2026-00421",
            "applicationId": "APP-1042",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": true,
              "emailDraftExists": true,
              "crmClosed": true,
              "ticketClosed": true,
              "legacyPortalClosed": true
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00421",
              "application:APP-1042",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00421"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00422",
            "decisionId": "DEC-2026-00422",
            "applicationId": "APP-1043",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 10490,
                "guaranteeType": "none",
                "companyAgeMonths": 67,
                "riskScore": 0.434
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00422",
              "application:APP-1043",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00422"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00423",
            "decisionId": "DEC-2026-00423",
            "applicationId": "APP-1044",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 10900,
                "guaranteeType": "approved_bank_guarantee",
                "companyAgeMonths": 70,
                "riskScore": 0.465
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00423",
              "application:APP-1044",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00423"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00424",
            "decisionId": "DEC-2026-00424",
            "applicationId": "APP-1045",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 11310,
                "guaranteeType": "none",
                "companyAgeMonths": 73,
                "riskScore": 0.496
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00424",
              "application:APP-1045",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00424"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00425",
            "decisionId": "DEC-2026-00425",
            "applicationId": "APP-1046",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 11720,
                "guaranteeType": "none",
                "companyAgeMonths": 76,
                "riskScore": 0.527
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00425",
              "application:APP-1046",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00425"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00426",
            "decisionId": "DEC-2026-00426",
            "applicationId": "APP-1047",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 12130,
                "guaranteeType": "none",
                "companyAgeMonths": 79,
                "riskScore": 0.558
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00426",
              "application:APP-1047",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00426"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00427",
            "decisionId": "DEC-2026-00427",
            "applicationId": "APP-1048",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4820,
                "guaranteeType": "university_startup_fund",
                "companyAgeMonths": 10,
                "riskScore": 0.413
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00427",
              "application:APP-1048",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00427"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00428",
            "decisionId": "DEC-2026-00428",
            "applicationId": "APP-1049",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 12950,
                "guaranteeType": "none",
                "companyAgeMonths": 13,
                "riskScore": 0.62
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00428",
              "application:APP-1049",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00428"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00429",
            "decisionId": "DEC-2026-00429",
            "applicationId": "APP-1050",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 13360,
                "guaranteeType": "none",
                "companyAgeMonths": 16,
                "riskScore": 0.651
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00429",
              "application:APP-1050",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00429"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00430",
            "decisionId": "DEC-2026-00430",
            "applicationId": "APP-1051",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 6800,
                "guaranteeType": "none",
                "companyAgeMonths": 19,
                "riskScore": 0.682
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00430",
              "application:APP-1051",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00430"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00431",
            "decisionId": "DEC-2026-00431",
            "applicationId": "APP-1052",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 7210,
                "guaranteeType": "approved_bank_guarantee",
                "companyAgeMonths": 22,
                "riskScore": 0.31
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00431",
              "application:APP-1052",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00431"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00432",
            "decisionId": "DEC-2026-00432",
            "applicationId": "APP-1053",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4580,
                "guaranteeType": "approved_bank_guarantee",
                "companyAgeMonths": 25,
                "riskScore": 0.518
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00432",
              "application:APP-1053",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00432"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00433",
            "decisionId": "DEC-2026-00433",
            "applicationId": "APP-1054",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 8030,
                "guaranteeType": "none",
                "companyAgeMonths": 28,
                "riskScore": 0.372
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00433",
              "application:APP-1054",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00433"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00434",
            "decisionId": "DEC-2026-00434",
            "applicationId": "APP-1055",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 8440,
                "guaranteeType": "none",
                "companyAgeMonths": 31,
                "riskScore": 0.403
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00434",
              "application:APP-1055",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00434"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00435",
            "decisionId": "DEC-2026-00435",
            "applicationId": "APP-1056",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 8850,
                "guaranteeType": "approved_bank_guarantee",
                "companyAgeMonths": 34,
                "riskScore": 0.434
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00435",
              "application:APP-1056",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00435"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00436",
            "decisionId": "DEC-2026-00436",
            "applicationId": "APP-1057",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 9260,
                "guaranteeType": "none",
                "companyAgeMonths": 37,
                "riskScore": 0.465
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00436",
              "application:APP-1057",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00436"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00437",
            "decisionId": "DEC-2026-00437",
            "applicationId": "APP-1058",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 9670,
                "guaranteeType": "none",
                "companyAgeMonths": 40,
                "riskScore": 0.496
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00437",
              "application:APP-1058",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00437"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00438",
            "decisionId": "DEC-2026-00438",
            "applicationId": "APP-1059",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4460,
                "guaranteeType": "approved_bank_guarantee",
                "companyAgeMonths": 43,
                "riskScore": 0.455
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00438",
              "application:APP-1059",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00438"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00439",
            "decisionId": "DEC-2026-00439",
            "applicationId": "APP-1060",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 10490,
                "guaranteeType": "approved_bank_guarantee",
                "companyAgeMonths": 46,
                "riskScore": 0.558
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00439",
              "application:APP-1060",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00439"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00440",
            "decisionId": "DEC-2026-00440",
            "applicationId": "APP-1061",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 10900,
                "guaranteeType": "none",
                "companyAgeMonths": 49,
                "riskScore": 0.589
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00440",
              "application:APP-1061",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00440"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00441",
            "decisionId": "DEC-2026-00441",
            "applicationId": "APP-1062",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 11310,
                "guaranteeType": "none",
                "companyAgeMonths": 52,
                "riskScore": 0.62
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00441",
              "application:APP-1062",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00441"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00442",
            "decisionId": "DEC-2026-00442",
            "applicationId": "APP-1063",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 11720,
                "guaranteeType": "none",
                "companyAgeMonths": 55,
                "riskScore": 0.651
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": false,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": false,
            "evidenceReferences": [
              "decision:DEC-2026-00442",
              "application:APP-1063",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00442"
            ]
          },
          {
            "dbomId": "DBOM-DEC-2026-00443",
            "decisionId": "DEC-2026-00443",
            "applicationId": "APP-1064",
            "faultyComponent": {
              "type": "policy",
              "id": "credit-policy-v7.1",
              "matched": true
            },
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
                "monthlyRevenue": 4220,
                "guaranteeType": "government_guarantee",
                "companyAgeMonths": 58,
                "riskScore": 0.371
              },
              "toolCalls": [
                "RiskScoreAPI",
                "GuaranteeRegistryLookup"
              ],
              "retrievedDocuments": [
                "credit-policy-v7.1-section-3.2",
                "sme-lending-risk-controls-2026-01"
              ]
            },
            "downstreamImpact": {
              "emailSent": false,
              "emailDraftExists": true,
              "crmClosed": false,
              "ticketClosed": false,
              "legacyPortalClosed": false
            },
            "replayRequired": true,
            "humanReviewRequired": true,
            "evidenceReferences": [
              "decision:DEC-2026-00443",
              "application:APP-1064",
              "policy:credit-policy-v7.1",
              "policy:credit-policy-v7.1",
              "downstream:DOWN-DEC-2026-00443"
            ]
          }
        ]
      },
      "freezeExecutionStatus": {
        "status": "completed",
        "correlationId": "RECALL-2026-001",
        "result": {
          "recallId": "RECALL-2026-001",
          "affectedRecordsMarked": 64,
          "missingDecisionIds": [],
          "pendingEmailDraftsFrozen": 18,
          "downstreamActions": [
            {
              "downstreamActionId": "DOWN-DEC-2026-00380",
              "decisionId": "DEC-2026-00380",
              "applicationId": "APP-1001",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00381",
              "decisionId": "DEC-2026-00381",
              "applicationId": "APP-1002",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00382",
              "decisionId": "DEC-2026-00382",
              "applicationId": "APP-1003",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00383",
              "decisionId": "DEC-2026-00383",
              "applicationId": "APP-1004",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00384",
              "decisionId": "DEC-2026-00384",
              "applicationId": "APP-1005",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00385",
              "decisionId": "DEC-2026-00385",
              "applicationId": "APP-1006",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00386",
              "decisionId": "DEC-2026-00386",
              "applicationId": "APP-1007",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "closed"
              },
              "ticket": {
                "status": "closed"
              },
              "email": {
                "sent": true,
                "draftExists": true,
                "status": "sent"
              },
              "legacyPortal": {
                "status": "closed"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00387",
              "decisionId": "DEC-2026-00387",
              "applicationId": "APP-1008",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00388",
              "decisionId": "DEC-2026-00388",
              "applicationId": "APP-1009",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00389",
              "decisionId": "DEC-2026-00389",
              "applicationId": "APP-1010",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00390",
              "decisionId": "DEC-2026-00390",
              "applicationId": "APP-1011",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00391",
              "decisionId": "DEC-2026-00391",
              "applicationId": "APP-1012",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00392",
              "decisionId": "DEC-2026-00392",
              "applicationId": "APP-1013",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "closed"
              },
              "ticket": {
                "status": "closed"
              },
              "email": {
                "sent": true,
                "draftExists": true,
                "status": "sent"
              },
              "legacyPortal": {
                "status": "closed"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00393",
              "decisionId": "DEC-2026-00393",
              "applicationId": "APP-1014",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00394",
              "decisionId": "DEC-2026-00394",
              "applicationId": "APP-1015",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00395",
              "decisionId": "DEC-2026-00395",
              "applicationId": "APP-1016",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00396",
              "decisionId": "DEC-2026-00396",
              "applicationId": "APP-1017",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00397",
              "decisionId": "DEC-2026-00397",
              "applicationId": "APP-1018",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "closed"
              },
              "ticket": {
                "status": "closed"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "closed"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00398",
              "decisionId": "DEC-2026-00398",
              "applicationId": "APP-1019",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00399",
              "decisionId": "DEC-2026-00399",
              "applicationId": "APP-1020",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00400",
              "decisionId": "DEC-2026-00400",
              "applicationId": "APP-1021",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00401",
              "decisionId": "DEC-2026-00401",
              "applicationId": "APP-1022",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00402",
              "decisionId": "DEC-2026-00402",
              "applicationId": "APP-1023",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00403",
              "decisionId": "DEC-2026-00403",
              "applicationId": "APP-1024",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "closed"
              },
              "ticket": {
                "status": "closed"
              },
              "email": {
                "sent": true,
                "draftExists": true,
                "status": "sent"
              },
              "legacyPortal": {
                "status": "closed"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00404",
              "decisionId": "DEC-2026-00404",
              "applicationId": "APP-1025",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00405",
              "decisionId": "DEC-2026-00405",
              "applicationId": "APP-1026",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00406",
              "decisionId": "DEC-2026-00406",
              "applicationId": "APP-1027",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00407",
              "decisionId": "DEC-2026-00407",
              "applicationId": "APP-1028",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00408",
              "decisionId": "DEC-2026-00408",
              "applicationId": "APP-1029",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00409",
              "decisionId": "DEC-2026-00409",
              "applicationId": "APP-1030",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00410",
              "decisionId": "DEC-2026-00410",
              "applicationId": "APP-1031",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "closed"
              },
              "ticket": {
                "status": "closed"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "closed"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00411",
              "decisionId": "DEC-2026-00411",
              "applicationId": "APP-1032",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00412",
              "decisionId": "DEC-2026-00412",
              "applicationId": "APP-1033",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00413",
              "decisionId": "DEC-2026-00413",
              "applicationId": "APP-1034",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00414",
              "decisionId": "DEC-2026-00414",
              "applicationId": "APP-1035",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00415",
              "decisionId": "DEC-2026-00415",
              "applicationId": "APP-1036",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "closed"
              },
              "ticket": {
                "status": "closed"
              },
              "email": {
                "sent": true,
                "draftExists": true,
                "status": "sent"
              },
              "legacyPortal": {
                "status": "closed"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00416",
              "decisionId": "DEC-2026-00416",
              "applicationId": "APP-1037",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00417",
              "decisionId": "DEC-2026-00417",
              "applicationId": "APP-1038",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00418",
              "decisionId": "DEC-2026-00418",
              "applicationId": "APP-1039",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00419",
              "decisionId": "DEC-2026-00419",
              "applicationId": "APP-1040",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00420",
              "decisionId": "DEC-2026-00420",
              "applicationId": "APP-1041",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00421",
              "decisionId": "DEC-2026-00421",
              "applicationId": "APP-1042",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "closed"
              },
              "ticket": {
                "status": "closed"
              },
              "email": {
                "sent": true,
                "draftExists": true,
                "status": "sent"
              },
              "legacyPortal": {
                "status": "closed"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00422",
              "decisionId": "DEC-2026-00422",
              "applicationId": "APP-1043",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00423",
              "decisionId": "DEC-2026-00423",
              "applicationId": "APP-1044",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00424",
              "decisionId": "DEC-2026-00424",
              "applicationId": "APP-1045",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00425",
              "decisionId": "DEC-2026-00425",
              "applicationId": "APP-1046",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00426",
              "decisionId": "DEC-2026-00426",
              "applicationId": "APP-1047",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00427",
              "decisionId": "DEC-2026-00427",
              "applicationId": "APP-1048",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00428",
              "decisionId": "DEC-2026-00428",
              "applicationId": "APP-1049",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00429",
              "decisionId": "DEC-2026-00429",
              "applicationId": "APP-1050",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00430",
              "decisionId": "DEC-2026-00430",
              "applicationId": "APP-1051",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00431",
              "decisionId": "DEC-2026-00431",
              "applicationId": "APP-1052",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00432",
              "decisionId": "DEC-2026-00432",
              "applicationId": "APP-1053",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00433",
              "decisionId": "DEC-2026-00433",
              "applicationId": "APP-1054",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00434",
              "decisionId": "DEC-2026-00434",
              "applicationId": "APP-1055",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00435",
              "decisionId": "DEC-2026-00435",
              "applicationId": "APP-1056",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00436",
              "decisionId": "DEC-2026-00436",
              "applicationId": "APP-1057",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00437",
              "decisionId": "DEC-2026-00437",
              "applicationId": "APP-1058",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00438",
              "decisionId": "DEC-2026-00438",
              "applicationId": "APP-1059",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00439",
              "decisionId": "DEC-2026-00439",
              "applicationId": "APP-1060",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00440",
              "decisionId": "DEC-2026-00440",
              "applicationId": "APP-1061",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00441",
              "decisionId": "DEC-2026-00441",
              "applicationId": "APP-1062",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00442",
              "decisionId": "DEC-2026-00442",
              "applicationId": "APP-1063",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00443",
              "decisionId": "DEC-2026-00443",
              "applicationId": "APP-1064",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00444",
              "decisionId": "DEC-2026-00444",
              "applicationId": "APP-1065",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00445",
              "decisionId": "DEC-2026-00445",
              "applicationId": "APP-1066",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00446",
              "decisionId": "DEC-2026-00446",
              "applicationId": "APP-1067",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00447",
              "decisionId": "DEC-2026-00447",
              "applicationId": "APP-1068",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00448",
              "decisionId": "DEC-2026-00448",
              "applicationId": "APP-1069",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00449",
              "decisionId": "DEC-2026-00449",
              "applicationId": "APP-1070",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00450",
              "decisionId": "DEC-2026-00450",
              "applicationId": "APP-1071",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00451",
              "decisionId": "DEC-2026-00451",
              "applicationId": "APP-1072",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00452",
              "decisionId": "DEC-2026-00452",
              "applicationId": "APP-1073",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00453",
              "decisionId": "DEC-2026-00453",
              "applicationId": "APP-1074",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00454",
              "decisionId": "DEC-2026-00454",
              "applicationId": "APP-1075",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00455",
              "decisionId": "DEC-2026-00455",
              "applicationId": "APP-1076",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00456",
              "decisionId": "DEC-2026-00456",
              "applicationId": "APP-1077",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00457",
              "decisionId": "DEC-2026-00457",
              "applicationId": "APP-1078",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00458",
              "decisionId": "DEC-2026-00458",
              "applicationId": "APP-1079",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00459",
              "decisionId": "DEC-2026-00459",
              "applicationId": "APP-1080",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00460",
              "decisionId": "DEC-2026-00460",
              "applicationId": "APP-1081",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00461",
              "decisionId": "DEC-2026-00461",
              "applicationId": "APP-1082",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00462",
              "decisionId": "DEC-2026-00462",
              "applicationId": "APP-1083",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00463",
              "decisionId": "DEC-2026-00463",
              "applicationId": "APP-1084",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00464",
              "decisionId": "DEC-2026-00464",
              "applicationId": "APP-1085",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00465",
              "decisionId": "DEC-2026-00465",
              "applicationId": "APP-1086",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00466",
              "decisionId": "DEC-2026-00466",
              "applicationId": "APP-1087",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00467",
              "decisionId": "DEC-2026-00467",
              "applicationId": "APP-1088",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00468",
              "decisionId": "DEC-2026-00468",
              "applicationId": "APP-1089",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00469",
              "decisionId": "DEC-2026-00469",
              "applicationId": "APP-1090",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00470",
              "decisionId": "DEC-2026-00470",
              "applicationId": "APP-1091",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00471",
              "decisionId": "DEC-2026-00471",
              "applicationId": "APP-1092",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00472",
              "decisionId": "DEC-2026-00472",
              "applicationId": "APP-1093",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00473",
              "decisionId": "DEC-2026-00473",
              "applicationId": "APP-1094",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00474",
              "decisionId": "DEC-2026-00474",
              "applicationId": "APP-1095",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00475",
              "decisionId": "DEC-2026-00475",
              "applicationId": "APP-1096",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00476",
              "decisionId": "DEC-2026-00476",
              "applicationId": "APP-1097",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00477",
              "decisionId": "DEC-2026-00477",
              "applicationId": "APP-1098",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00478",
              "decisionId": "DEC-2026-00478",
              "applicationId": "APP-1099",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00479",
              "decisionId": "DEC-2026-00479",
              "applicationId": "APP-1100",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00480",
              "decisionId": "DEC-2026-00480",
              "applicationId": "APP-1101",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00481",
              "decisionId": "DEC-2026-00481",
              "applicationId": "APP-1102",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00482",
              "decisionId": "DEC-2026-00482",
              "applicationId": "APP-1103",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00483",
              "decisionId": "DEC-2026-00483",
              "applicationId": "APP-1104",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00484",
              "decisionId": "DEC-2026-00484",
              "applicationId": "APP-1105",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00485",
              "decisionId": "DEC-2026-00485",
              "applicationId": "APP-1106",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00486",
              "decisionId": "DEC-2026-00486",
              "applicationId": "APP-1107",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00487",
              "decisionId": "DEC-2026-00487",
              "applicationId": "APP-1108",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00488",
              "decisionId": "DEC-2026-00488",
              "applicationId": "APP-1109",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00489",
              "decisionId": "DEC-2026-00489",
              "applicationId": "APP-1110",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00490",
              "decisionId": "DEC-2026-00490",
              "applicationId": "APP-1111",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00491",
              "decisionId": "DEC-2026-00491",
              "applicationId": "APP-1112",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00492",
              "decisionId": "DEC-2026-00492",
              "applicationId": "APP-1113",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00493",
              "decisionId": "DEC-2026-00493",
              "applicationId": "APP-1114",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00494",
              "decisionId": "DEC-2026-00494",
              "applicationId": "APP-1115",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00495",
              "decisionId": "DEC-2026-00495",
              "applicationId": "APP-1116",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00496",
              "decisionId": "DEC-2026-00496",
              "applicationId": "APP-1117",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00497",
              "decisionId": "DEC-2026-00497",
              "applicationId": "APP-1118",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00498",
              "decisionId": "DEC-2026-00498",
              "applicationId": "APP-1119",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00499",
              "decisionId": "DEC-2026-00499",
              "applicationId": "APP-1120",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            }
          ],
          "auditEvent": {
            "eventType": "freeze_downstream_actions",
            "recallId": "RECALL-2026-001",
            "recordCount": 64
          }
        },
        "errors": [],
        "recallId": "RECALL-2026-001",
        "affectedRecordsMarked": 64,
        "missingDecisionIds": [],
        "pendingEmailDraftsFrozen": 18,
        "auditEvent": {
          "eventType": "freeze_downstream_actions",
          "recallId": "RECALL-2026-001",
          "recordCount": 64
        }
      },
      "replayBatchSummary": {
        "replayBatchId": "REPLAY-RECALL-2026-001",
        "recallId": "RECALL-2026-001",
        "totalReplayed": 64,
        "changedOutcomeCount": 11,
        "highRiskChangedOutcomeCount": 11,
        "results": [
          {
            "decisionId": "DEC-2026-00380",
            "applicationId": "APP-1001",
            "applicantId": "CUST-1801",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "rejected",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00381",
            "applicationId": "APP-1002",
            "applicantId": "CUST-1802",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "rejected",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00382",
            "applicationId": "APP-1003",
            "applicantId": "CUST-1803",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "rejected",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00383",
            "applicationId": "APP-1004",
            "applicantId": "CUST-1804",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "rejected",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00384",
            "applicationId": "APP-1005",
            "applicantId": "CUST-1805",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "rejected",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00385",
            "applicationId": "APP-1006",
            "applicantId": "CUST-1806",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "rejected",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00386",
            "applicationId": "APP-1007",
            "applicantId": "CUST-1807",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "manual_review",
            "changed": true,
            "changeType": "harmful_auto_rejection",
            "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "reopen_for_manual_review",
            "severity": "high"
          },
          {
            "decisionId": "DEC-2026-00387",
            "applicationId": "APP-1008",
            "applicantId": "CUST-1808",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "rejected",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00388",
            "applicationId": "APP-1009",
            "applicantId": "CUST-1809",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "rejected",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00389",
            "applicationId": "APP-1010",
            "applicantId": "CUST-1810",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "rejected",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00390",
            "applicationId": "APP-1011",
            "applicantId": "CUST-1811",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "rejected",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00391",
            "applicationId": "APP-1012",
            "applicantId": "CUST-1812",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "rejected",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00392",
            "applicationId": "APP-1013",
            "applicantId": "CUST-1813",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "manual_review",
            "changed": true,
            "changeType": "harmful_auto_rejection",
            "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "reopen_for_manual_review",
            "severity": "high"
          },
          {
            "decisionId": "DEC-2026-00393",
            "applicationId": "APP-1014",
            "applicantId": "CUST-1814",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "rejected",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00394",
            "applicationId": "APP-1015",
            "applicantId": "CUST-1815",
            "originalOutcome": "manual_review",
            "originalReason": "Risk or policy threshold requires manual review",
            "correctedOutcome": "manual_review",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Risk score is above 0.82; corrected policy requires manual review.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00395",
            "applicationId": "APP-1016",
            "applicantId": "CUST-1816",
            "originalOutcome": "manual_review",
            "originalReason": "Risk or policy threshold requires manual review",
            "correctedOutcome": "manual_review",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Risk score is above 0.82; corrected policy requires manual review.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00396",
            "applicationId": "APP-1017",
            "applicantId": "CUST-1817",
            "originalOutcome": "manual_review",
            "originalReason": "Risk or policy threshold requires manual review",
            "correctedOutcome": "manual_review",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Risk score is above 0.82; corrected policy requires manual review.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00397",
            "applicationId": "APP-1018",
            "applicantId": "CUST-1818",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "manual_review",
            "changed": true,
            "changeType": "harmful_auto_rejection",
            "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "reopen_for_manual_review",
            "severity": "high"
          },
          {
            "decisionId": "DEC-2026-00398",
            "applicationId": "APP-1019",
            "applicantId": "CUST-1819",
            "originalOutcome": "manual_review",
            "originalReason": "Risk or policy threshold requires manual review",
            "correctedOutcome": "manual_review",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Risk score is above 0.82; corrected policy requires manual review.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00399",
            "applicationId": "APP-1020",
            "applicantId": "CUST-1820",
            "originalOutcome": "manual_review",
            "originalReason": "Risk or policy threshold requires manual review",
            "correctedOutcome": "manual_review",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Risk score is above 0.82; corrected policy requires manual review.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00400",
            "applicationId": "APP-1021",
            "applicantId": "CUST-1821",
            "originalOutcome": "manual_review",
            "originalReason": "Risk or policy threshold requires manual review",
            "correctedOutcome": "manual_review",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Risk score is above 0.82; corrected policy requires manual review.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00401",
            "applicationId": "APP-1022",
            "applicantId": "CUST-1822",
            "originalOutcome": "manual_review",
            "originalReason": "Risk or policy threshold requires manual review",
            "correctedOutcome": "manual_review",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Risk score is above 0.82; corrected policy requires manual review.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00402",
            "applicationId": "APP-1023",
            "applicantId": "CUST-1823",
            "originalOutcome": "manual_review",
            "originalReason": "Risk or policy threshold requires manual review",
            "correctedOutcome": "manual_review",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Risk score is above 0.82; corrected policy requires manual review.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00403",
            "applicationId": "APP-1024",
            "applicantId": "CUST-1824",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "manual_review",
            "changed": true,
            "changeType": "harmful_auto_rejection",
            "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "reopen_for_manual_review",
            "severity": "high"
          },
          {
            "decisionId": "DEC-2026-00404",
            "applicationId": "APP-1025",
            "applicantId": "CUST-1825",
            "originalOutcome": "manual_review",
            "originalReason": "Risk or policy threshold requires manual review",
            "correctedOutcome": "manual_review",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Risk score is above 0.82; corrected policy requires manual review.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00405",
            "applicationId": "APP-1026",
            "applicantId": "CUST-1826",
            "originalOutcome": "manual_review",
            "originalReason": "Risk or policy threshold requires manual review",
            "correctedOutcome": "manual_review",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Risk score is above 0.82; corrected policy requires manual review.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00406",
            "applicationId": "APP-1027",
            "applicantId": "CUST-1827",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00407",
            "applicationId": "APP-1028",
            "applicantId": "CUST-1828",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00408",
            "applicationId": "APP-1029",
            "applicantId": "CUST-1829",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00409",
            "applicationId": "APP-1030",
            "applicantId": "CUST-1830",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00410",
            "applicationId": "APP-1031",
            "applicantId": "CUST-1831",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "manual_review",
            "changed": true,
            "changeType": "harmful_auto_rejection",
            "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "reopen_for_manual_review",
            "severity": "high"
          },
          {
            "decisionId": "DEC-2026-00411",
            "applicationId": "APP-1032",
            "applicantId": "CUST-1832",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00412",
            "applicationId": "APP-1033",
            "applicantId": "CUST-1833",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00413",
            "applicationId": "APP-1034",
            "applicantId": "CUST-1834",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00414",
            "applicationId": "APP-1035",
            "applicantId": "CUST-1835",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00415",
            "applicationId": "APP-1036",
            "applicantId": "CUST-1836",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "manual_review",
            "changed": true,
            "changeType": "harmful_auto_rejection",
            "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "reopen_for_manual_review",
            "severity": "high"
          },
          {
            "decisionId": "DEC-2026-00416",
            "applicationId": "APP-1037",
            "applicantId": "CUST-1837",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00417",
            "applicationId": "APP-1038",
            "applicantId": "CUST-1838",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00418",
            "applicationId": "APP-1039",
            "applicantId": "CUST-1839",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00419",
            "applicationId": "APP-1040",
            "applicantId": "CUST-1840",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00420",
            "applicationId": "APP-1041",
            "applicantId": "CUST-1841",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00421",
            "applicationId": "APP-1042",
            "applicantId": "CUST-1842",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "manual_review",
            "changed": true,
            "changeType": "harmful_auto_rejection",
            "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "reopen_for_manual_review",
            "severity": "high"
          },
          {
            "decisionId": "DEC-2026-00422",
            "applicationId": "APP-1043",
            "applicantId": "CUST-1843",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00423",
            "applicationId": "APP-1044",
            "applicantId": "CUST-1844",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00424",
            "applicationId": "APP-1045",
            "applicantId": "CUST-1845",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00425",
            "applicationId": "APP-1046",
            "applicantId": "CUST-1846",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00426",
            "applicationId": "APP-1047",
            "applicantId": "CUST-1847",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00427",
            "applicationId": "APP-1048",
            "applicantId": "CUST-1848",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "manual_review",
            "changed": true,
            "changeType": "harmful_auto_rejection",
            "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "reopen_for_manual_review",
            "severity": "high"
          },
          {
            "decisionId": "DEC-2026-00428",
            "applicationId": "APP-1049",
            "applicantId": "CUST-1849",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00429",
            "applicationId": "APP-1050",
            "applicantId": "CUST-1850",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00430",
            "applicationId": "APP-1051",
            "applicantId": "CUST-1851",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00431",
            "applicationId": "APP-1052",
            "applicantId": "CUST-1852",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00432",
            "applicationId": "APP-1053",
            "applicantId": "CUST-1853",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "manual_review",
            "changed": true,
            "changeType": "harmful_auto_rejection",
            "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "reopen_for_manual_review",
            "severity": "high"
          },
          {
            "decisionId": "DEC-2026-00433",
            "applicationId": "APP-1054",
            "applicantId": "CUST-1854",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00434",
            "applicationId": "APP-1055",
            "applicantId": "CUST-1855",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00435",
            "applicationId": "APP-1056",
            "applicantId": "CUST-1856",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00436",
            "applicationId": "APP-1057",
            "applicantId": "CUST-1857",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00437",
            "applicationId": "APP-1058",
            "applicantId": "CUST-1858",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00438",
            "applicationId": "APP-1059",
            "applicantId": "CUST-1859",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "manual_review",
            "changed": true,
            "changeType": "harmful_auto_rejection",
            "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "reopen_for_manual_review",
            "severity": "high"
          },
          {
            "decisionId": "DEC-2026-00439",
            "applicationId": "APP-1060",
            "applicantId": "CUST-1860",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00440",
            "applicationId": "APP-1061",
            "applicantId": "CUST-1861",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00441",
            "applicationId": "APP-1062",
            "applicantId": "CUST-1862",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00442",
            "applicationId": "APP-1063",
            "applicantId": "CUST-1863",
            "originalOutcome": "pre_approved",
            "originalReason": "Applicant passed deterministic pre-approval checks",
            "correctedOutcome": "pre_approved",
            "changed": false,
            "changeType": "unchanged",
            "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "no_action",
            "severity": "low"
          },
          {
            "decisionId": "DEC-2026-00443",
            "applicationId": "APP-1064",
            "applicantId": "CUST-1864",
            "originalOutcome": "rejected",
            "originalReason": "Monthly revenue below EUR 5,000",
            "correctedOutcome": "manual_review",
            "changed": true,
            "changeType": "harmful_auto_rejection",
            "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
            "policyClauseReference": "credit-policy-v7.2-section-3.2",
            "recommendedAction": "reopen_for_manual_review",
            "severity": "high"
          }
        ]
      },
      "riskScoring": {
        "scoredDecisionCount": 64,
        "bandCounts": {
          "critical": 6,
          "high": 1,
          "medium": 4,
          "low": 53
        },
        "potentialExposure": 282500,
        "topRisks": [
          {
            "decisionId": "DEC-2026-00386",
            "applicationId": "APP-1007",
            "applicantId": "CUST-1807",
            "riskScore": 100,
            "riskBand": "critical",
            "drivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 32500,
            "potentialExposure": 32500
          },
          {
            "decisionId": "DEC-2026-00392",
            "applicationId": "APP-1013",
            "applicantId": "CUST-1813",
            "riskScore": 100,
            "riskBand": "critical",
            "drivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 17500,
            "potentialExposure": 17500
          },
          {
            "decisionId": "DEC-2026-00403",
            "applicationId": "APP-1024",
            "applicantId": "CUST-1824",
            "riskScore": 100,
            "riskBand": "critical",
            "drivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 15000,
            "potentialExposure": 15000
          },
          {
            "decisionId": "DEC-2026-00415",
            "applicationId": "APP-1036",
            "applicantId": "CUST-1836",
            "riskScore": 100,
            "riskBand": "critical",
            "drivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 15000,
            "potentialExposure": 15000
          },
          {
            "decisionId": "DEC-2026-00421",
            "applicationId": "APP-1042",
            "applicantId": "CUST-1842",
            "riskScore": 100,
            "riskBand": "critical",
            "drivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 30000,
            "potentialExposure": 30000
          },
          {
            "decisionId": "DEC-2026-00410",
            "applicationId": "APP-1031",
            "applicantId": "CUST-1831",
            "riskScore": 80,
            "riskBand": "critical",
            "drivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 32500,
            "potentialExposure": 32500
          },
          {
            "decisionId": "DEC-2026-00397",
            "applicationId": "APP-1018",
            "applicantId": "CUST-1818",
            "riskScore": 70,
            "riskBand": "high",
            "drivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "no_human_touchpoint"
            ],
            "requestedAmount": 30000,
            "potentialExposure": 30000
          },
          {
            "decisionId": "DEC-2026-00427",
            "applicationId": "APP-1048",
            "applicantId": "CUST-1848",
            "riskScore": 55,
            "riskBand": "medium",
            "drivers": [
              "changed_outcome",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 15000,
            "potentialExposure": 15000
          },
          {
            "decisionId": "DEC-2026-00432",
            "applicationId": "APP-1053",
            "applicantId": "CUST-1853",
            "riskScore": 55,
            "riskBand": "medium",
            "drivers": [
              "changed_outcome",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 27500,
            "potentialExposure": 27500
          },
          {
            "decisionId": "DEC-2026-00438",
            "applicationId": "APP-1059",
            "applicantId": "CUST-1859",
            "riskScore": 55,
            "riskBand": "medium",
            "drivers": [
              "changed_outcome",
              "high_requested_amount",
              "no_human_touchpoint"
            ],
            "requestedAmount": 42500,
            "potentialExposure": 42500
          },
          {
            "decisionId": "DEC-2026-00443",
            "applicationId": "APP-1064",
            "applicantId": "CUST-1864",
            "riskScore": 55,
            "riskBand": "medium",
            "drivers": [
              "changed_outcome",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 25000,
            "potentialExposure": 25000
          },
          {
            "decisionId": "DEC-2026-00387",
            "applicationId": "APP-1008",
            "applicantId": "CUST-1808",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 35000,
            "potentialExposure": 0
          }
        ],
        "scoresByDecision": {
          "DEC-2026-00386": {
            "decisionId": "DEC-2026-00386",
            "applicationId": "APP-1007",
            "applicantId": "CUST-1807",
            "riskScore": 100,
            "riskBand": "critical",
            "drivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 32500,
            "potentialExposure": 32500
          },
          "DEC-2026-00392": {
            "decisionId": "DEC-2026-00392",
            "applicationId": "APP-1013",
            "applicantId": "CUST-1813",
            "riskScore": 100,
            "riskBand": "critical",
            "drivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 17500,
            "potentialExposure": 17500
          },
          "DEC-2026-00403": {
            "decisionId": "DEC-2026-00403",
            "applicationId": "APP-1024",
            "applicantId": "CUST-1824",
            "riskScore": 100,
            "riskBand": "critical",
            "drivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 15000,
            "potentialExposure": 15000
          },
          "DEC-2026-00415": {
            "decisionId": "DEC-2026-00415",
            "applicationId": "APP-1036",
            "applicantId": "CUST-1836",
            "riskScore": 100,
            "riskBand": "critical",
            "drivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 15000,
            "potentialExposure": 15000
          },
          "DEC-2026-00421": {
            "decisionId": "DEC-2026-00421",
            "applicationId": "APP-1042",
            "applicantId": "CUST-1842",
            "riskScore": 100,
            "riskBand": "critical",
            "drivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 30000,
            "potentialExposure": 30000
          },
          "DEC-2026-00410": {
            "decisionId": "DEC-2026-00410",
            "applicationId": "APP-1031",
            "applicantId": "CUST-1831",
            "riskScore": 80,
            "riskBand": "critical",
            "drivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 32500,
            "potentialExposure": 32500
          },
          "DEC-2026-00397": {
            "decisionId": "DEC-2026-00397",
            "applicationId": "APP-1018",
            "applicantId": "CUST-1818",
            "riskScore": 70,
            "riskBand": "high",
            "drivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "no_human_touchpoint"
            ],
            "requestedAmount": 30000,
            "potentialExposure": 30000
          },
          "DEC-2026-00427": {
            "decisionId": "DEC-2026-00427",
            "applicationId": "APP-1048",
            "applicantId": "CUST-1848",
            "riskScore": 55,
            "riskBand": "medium",
            "drivers": [
              "changed_outcome",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 15000,
            "potentialExposure": 15000
          },
          "DEC-2026-00432": {
            "decisionId": "DEC-2026-00432",
            "applicationId": "APP-1053",
            "applicantId": "CUST-1853",
            "riskScore": 55,
            "riskBand": "medium",
            "drivers": [
              "changed_outcome",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 27500,
            "potentialExposure": 27500
          },
          "DEC-2026-00438": {
            "decisionId": "DEC-2026-00438",
            "applicationId": "APP-1059",
            "applicantId": "CUST-1859",
            "riskScore": 55,
            "riskBand": "medium",
            "drivers": [
              "changed_outcome",
              "high_requested_amount",
              "no_human_touchpoint"
            ],
            "requestedAmount": 42500,
            "potentialExposure": 42500
          },
          "DEC-2026-00443": {
            "decisionId": "DEC-2026-00443",
            "applicationId": "APP-1064",
            "applicantId": "CUST-1864",
            "riskScore": 55,
            "riskBand": "medium",
            "drivers": [
              "changed_outcome",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 25000,
            "potentialExposure": 25000
          },
          "DEC-2026-00387": {
            "decisionId": "DEC-2026-00387",
            "applicationId": "APP-1008",
            "applicantId": "CUST-1808",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 35000,
            "potentialExposure": 0
          },
          "DEC-2026-00388": {
            "decisionId": "DEC-2026-00388",
            "applicationId": "APP-1009",
            "applicantId": "CUST-1809",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 37500,
            "potentialExposure": 0
          },
          "DEC-2026-00389": {
            "decisionId": "DEC-2026-00389",
            "applicationId": "APP-1010",
            "applicantId": "CUST-1810",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 40000,
            "potentialExposure": 0
          },
          "DEC-2026-00390": {
            "decisionId": "DEC-2026-00390",
            "applicationId": "APP-1011",
            "applicantId": "CUST-1811",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 42500,
            "potentialExposure": 0
          },
          "DEC-2026-00399": {
            "decisionId": "DEC-2026-00399",
            "applicationId": "APP-1020",
            "applicantId": "CUST-1820",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 35000,
            "potentialExposure": 0
          },
          "DEC-2026-00400": {
            "decisionId": "DEC-2026-00400",
            "applicationId": "APP-1021",
            "applicantId": "CUST-1821",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 37500,
            "potentialExposure": 0
          },
          "DEC-2026-00401": {
            "decisionId": "DEC-2026-00401",
            "applicationId": "APP-1022",
            "applicantId": "CUST-1822",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 40000,
            "potentialExposure": 0
          },
          "DEC-2026-00402": {
            "decisionId": "DEC-2026-00402",
            "applicationId": "APP-1023",
            "applicantId": "CUST-1823",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 42500,
            "potentialExposure": 0
          },
          "DEC-2026-00411": {
            "decisionId": "DEC-2026-00411",
            "applicationId": "APP-1032",
            "applicantId": "CUST-1832",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 35000,
            "potentialExposure": 0
          },
          "DEC-2026-00412": {
            "decisionId": "DEC-2026-00412",
            "applicationId": "APP-1033",
            "applicantId": "CUST-1833",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 37500,
            "potentialExposure": 0
          },
          "DEC-2026-00413": {
            "decisionId": "DEC-2026-00413",
            "applicationId": "APP-1034",
            "applicantId": "CUST-1834",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 40000,
            "potentialExposure": 0
          },
          "DEC-2026-00414": {
            "decisionId": "DEC-2026-00414",
            "applicationId": "APP-1035",
            "applicantId": "CUST-1835",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 42500,
            "potentialExposure": 0
          },
          "DEC-2026-00423": {
            "decisionId": "DEC-2026-00423",
            "applicationId": "APP-1044",
            "applicantId": "CUST-1844",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 35000,
            "potentialExposure": 0
          },
          "DEC-2026-00424": {
            "decisionId": "DEC-2026-00424",
            "applicationId": "APP-1045",
            "applicantId": "CUST-1845",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 37500,
            "potentialExposure": 0
          },
          "DEC-2026-00425": {
            "decisionId": "DEC-2026-00425",
            "applicationId": "APP-1046",
            "applicantId": "CUST-1846",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 40000,
            "potentialExposure": 0
          },
          "DEC-2026-00426": {
            "decisionId": "DEC-2026-00426",
            "applicationId": "APP-1047",
            "applicantId": "CUST-1847",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 42500,
            "potentialExposure": 0
          },
          "DEC-2026-00435": {
            "decisionId": "DEC-2026-00435",
            "applicationId": "APP-1056",
            "applicantId": "CUST-1856",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 35000,
            "potentialExposure": 0
          },
          "DEC-2026-00436": {
            "decisionId": "DEC-2026-00436",
            "applicationId": "APP-1057",
            "applicantId": "CUST-1857",
            "riskScore": 25,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 37500,
            "potentialExposure": 0
          },
          "DEC-2026-00380": {
            "decisionId": "DEC-2026-00380",
            "applicationId": "APP-1001",
            "applicantId": "CUST-1801",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 17500,
            "potentialExposure": 0
          },
          "DEC-2026-00381": {
            "decisionId": "DEC-2026-00381",
            "applicationId": "APP-1002",
            "applicantId": "CUST-1802",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 20000,
            "potentialExposure": 0
          },
          "DEC-2026-00382": {
            "decisionId": "DEC-2026-00382",
            "applicationId": "APP-1003",
            "applicantId": "CUST-1803",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 22500,
            "potentialExposure": 0
          },
          "DEC-2026-00383": {
            "decisionId": "DEC-2026-00383",
            "applicationId": "APP-1004",
            "applicantId": "CUST-1804",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 25000,
            "potentialExposure": 0
          },
          "DEC-2026-00384": {
            "decisionId": "DEC-2026-00384",
            "applicationId": "APP-1005",
            "applicantId": "CUST-1805",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 27500,
            "potentialExposure": 0
          },
          "DEC-2026-00385": {
            "decisionId": "DEC-2026-00385",
            "applicationId": "APP-1006",
            "applicantId": "CUST-1806",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 30000,
            "potentialExposure": 0
          },
          "DEC-2026-00391": {
            "decisionId": "DEC-2026-00391",
            "applicationId": "APP-1012",
            "applicantId": "CUST-1812",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 15000,
            "potentialExposure": 0
          },
          "DEC-2026-00393": {
            "decisionId": "DEC-2026-00393",
            "applicationId": "APP-1014",
            "applicantId": "CUST-1814",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 20000,
            "potentialExposure": 0
          },
          "DEC-2026-00394": {
            "decisionId": "DEC-2026-00394",
            "applicationId": "APP-1015",
            "applicantId": "CUST-1815",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 22500,
            "potentialExposure": 0
          },
          "DEC-2026-00395": {
            "decisionId": "DEC-2026-00395",
            "applicationId": "APP-1016",
            "applicantId": "CUST-1816",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 25000,
            "potentialExposure": 0
          },
          "DEC-2026-00396": {
            "decisionId": "DEC-2026-00396",
            "applicationId": "APP-1017",
            "applicantId": "CUST-1817",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 27500,
            "potentialExposure": 0
          },
          "DEC-2026-00404": {
            "decisionId": "DEC-2026-00404",
            "applicationId": "APP-1025",
            "applicantId": "CUST-1825",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 17500,
            "potentialExposure": 0
          },
          "DEC-2026-00405": {
            "decisionId": "DEC-2026-00405",
            "applicationId": "APP-1026",
            "applicantId": "CUST-1826",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 20000,
            "potentialExposure": 0
          },
          "DEC-2026-00406": {
            "decisionId": "DEC-2026-00406",
            "applicationId": "APP-1027",
            "applicantId": "CUST-1827",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 22500,
            "potentialExposure": 0
          },
          "DEC-2026-00407": {
            "decisionId": "DEC-2026-00407",
            "applicationId": "APP-1028",
            "applicantId": "CUST-1828",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 25000,
            "potentialExposure": 0
          },
          "DEC-2026-00408": {
            "decisionId": "DEC-2026-00408",
            "applicationId": "APP-1029",
            "applicantId": "CUST-1829",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 27500,
            "potentialExposure": 0
          },
          "DEC-2026-00409": {
            "decisionId": "DEC-2026-00409",
            "applicationId": "APP-1030",
            "applicantId": "CUST-1830",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 30000,
            "potentialExposure": 0
          },
          "DEC-2026-00416": {
            "decisionId": "DEC-2026-00416",
            "applicationId": "APP-1037",
            "applicantId": "CUST-1837",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 17500,
            "potentialExposure": 0
          },
          "DEC-2026-00419": {
            "decisionId": "DEC-2026-00419",
            "applicationId": "APP-1040",
            "applicantId": "CUST-1840",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 25000,
            "potentialExposure": 0
          },
          "DEC-2026-00420": {
            "decisionId": "DEC-2026-00420",
            "applicationId": "APP-1041",
            "applicantId": "CUST-1841",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 27500,
            "potentialExposure": 0
          },
          "DEC-2026-00422": {
            "decisionId": "DEC-2026-00422",
            "applicationId": "APP-1043",
            "applicantId": "CUST-1843",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 32500,
            "potentialExposure": 0
          },
          "DEC-2026-00428": {
            "decisionId": "DEC-2026-00428",
            "applicationId": "APP-1049",
            "applicantId": "CUST-1849",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 17500,
            "potentialExposure": 0
          },
          "DEC-2026-00429": {
            "decisionId": "DEC-2026-00429",
            "applicationId": "APP-1050",
            "applicantId": "CUST-1850",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 20000,
            "potentialExposure": 0
          },
          "DEC-2026-00430": {
            "decisionId": "DEC-2026-00430",
            "applicationId": "APP-1051",
            "applicantId": "CUST-1851",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 22500,
            "potentialExposure": 0
          },
          "DEC-2026-00431": {
            "decisionId": "DEC-2026-00431",
            "applicationId": "APP-1052",
            "applicantId": "CUST-1852",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 25000,
            "potentialExposure": 0
          },
          "DEC-2026-00433": {
            "decisionId": "DEC-2026-00433",
            "applicationId": "APP-1054",
            "applicantId": "CUST-1854",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 30000,
            "potentialExposure": 0
          },
          "DEC-2026-00434": {
            "decisionId": "DEC-2026-00434",
            "applicationId": "APP-1055",
            "applicantId": "CUST-1855",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 32500,
            "potentialExposure": 0
          },
          "DEC-2026-00437": {
            "decisionId": "DEC-2026-00437",
            "applicationId": "APP-1058",
            "applicantId": "CUST-1858",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "high_requested_amount",
              "no_human_touchpoint"
            ],
            "requestedAmount": 40000,
            "potentialExposure": 0
          },
          "DEC-2026-00439": {
            "decisionId": "DEC-2026-00439",
            "applicationId": "APP-1060",
            "applicantId": "CUST-1860",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 15000,
            "potentialExposure": 0
          },
          "DEC-2026-00440": {
            "decisionId": "DEC-2026-00440",
            "applicationId": "APP-1061",
            "applicantId": "CUST-1861",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 17500,
            "potentialExposure": 0
          },
          "DEC-2026-00441": {
            "decisionId": "DEC-2026-00441",
            "applicationId": "APP-1062",
            "applicantId": "CUST-1862",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 20000,
            "potentialExposure": 0
          },
          "DEC-2026-00442": {
            "decisionId": "DEC-2026-00442",
            "applicationId": "APP-1063",
            "applicantId": "CUST-1863",
            "riskScore": 15,
            "riskBand": "low",
            "drivers": [
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requestedAmount": 22500,
            "potentialExposure": 0
          },
          "DEC-2026-00398": {
            "decisionId": "DEC-2026-00398",
            "applicationId": "APP-1019",
            "applicantId": "CUST-1819",
            "riskScore": 5,
            "riskBand": "low",
            "drivers": [
              "no_human_touchpoint"
            ],
            "requestedAmount": 32500,
            "potentialExposure": 0
          },
          "DEC-2026-00417": {
            "decisionId": "DEC-2026-00417",
            "applicationId": "APP-1038",
            "applicantId": "CUST-1838",
            "riskScore": 5,
            "riskBand": "low",
            "drivers": [
              "no_human_touchpoint"
            ],
            "requestedAmount": 20000,
            "potentialExposure": 0
          },
          "DEC-2026-00418": {
            "decisionId": "DEC-2026-00418",
            "applicationId": "APP-1039",
            "applicantId": "CUST-1839",
            "riskScore": 5,
            "riskBand": "low",
            "drivers": [
              "no_human_touchpoint"
            ],
            "requestedAmount": 22500,
            "potentialExposure": 0
          }
        }
      },
      "impactClassification": {
        "highRiskCount": 11,
        "mediumRiskCount": 0,
        "lowRiskCount": 53,
        "customerFacingHighRiskCount": 7,
        "emailCorrectionDraftCount": 5,
        "buckets": {
          "high": [
            {
              "decisionId": "DEC-2026-00386",
              "applicationId": "APP-1007",
              "bucket": "high",
              "customerFacingActionTaken": true,
              "emailSent": true,
              "recommendedAction": "reopen_for_manual_review"
            },
            {
              "decisionId": "DEC-2026-00392",
              "applicationId": "APP-1013",
              "bucket": "high",
              "customerFacingActionTaken": true,
              "emailSent": true,
              "recommendedAction": "reopen_for_manual_review"
            },
            {
              "decisionId": "DEC-2026-00397",
              "applicationId": "APP-1018",
              "bucket": "high",
              "customerFacingActionTaken": true,
              "emailSent": false,
              "recommendedAction": "reopen_for_manual_review"
            },
            {
              "decisionId": "DEC-2026-00403",
              "applicationId": "APP-1024",
              "bucket": "high",
              "customerFacingActionTaken": true,
              "emailSent": true,
              "recommendedAction": "reopen_for_manual_review"
            },
            {
              "decisionId": "DEC-2026-00410",
              "applicationId": "APP-1031",
              "bucket": "high",
              "customerFacingActionTaken": true,
              "emailSent": false,
              "recommendedAction": "reopen_for_manual_review"
            },
            {
              "decisionId": "DEC-2026-00415",
              "applicationId": "APP-1036",
              "bucket": "high",
              "customerFacingActionTaken": true,
              "emailSent": true,
              "recommendedAction": "reopen_for_manual_review"
            },
            {
              "decisionId": "DEC-2026-00421",
              "applicationId": "APP-1042",
              "bucket": "high",
              "customerFacingActionTaken": true,
              "emailSent": true,
              "recommendedAction": "reopen_for_manual_review"
            },
            {
              "decisionId": "DEC-2026-00427",
              "applicationId": "APP-1048",
              "bucket": "high",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "reopen_for_manual_review"
            },
            {
              "decisionId": "DEC-2026-00432",
              "applicationId": "APP-1053",
              "bucket": "high",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "reopen_for_manual_review"
            },
            {
              "decisionId": "DEC-2026-00438",
              "applicationId": "APP-1059",
              "bucket": "high",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "reopen_for_manual_review"
            },
            {
              "decisionId": "DEC-2026-00443",
              "applicationId": "APP-1064",
              "bucket": "high",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "reopen_for_manual_review"
            }
          ],
          "medium": [],
          "low": [
            {
              "decisionId": "DEC-2026-00380",
              "applicationId": "APP-1001",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00381",
              "applicationId": "APP-1002",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00382",
              "applicationId": "APP-1003",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00383",
              "applicationId": "APP-1004",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00384",
              "applicationId": "APP-1005",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00385",
              "applicationId": "APP-1006",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00387",
              "applicationId": "APP-1008",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00388",
              "applicationId": "APP-1009",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00389",
              "applicationId": "APP-1010",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00390",
              "applicationId": "APP-1011",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00391",
              "applicationId": "APP-1012",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00393",
              "applicationId": "APP-1014",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00394",
              "applicationId": "APP-1015",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00395",
              "applicationId": "APP-1016",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00396",
              "applicationId": "APP-1017",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00398",
              "applicationId": "APP-1019",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00399",
              "applicationId": "APP-1020",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00400",
              "applicationId": "APP-1021",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00401",
              "applicationId": "APP-1022",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00402",
              "applicationId": "APP-1023",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00404",
              "applicationId": "APP-1025",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00405",
              "applicationId": "APP-1026",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00406",
              "applicationId": "APP-1027",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00407",
              "applicationId": "APP-1028",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00408",
              "applicationId": "APP-1029",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00409",
              "applicationId": "APP-1030",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00411",
              "applicationId": "APP-1032",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00412",
              "applicationId": "APP-1033",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00413",
              "applicationId": "APP-1034",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00414",
              "applicationId": "APP-1035",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00416",
              "applicationId": "APP-1037",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00417",
              "applicationId": "APP-1038",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00418",
              "applicationId": "APP-1039",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00419",
              "applicationId": "APP-1040",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00420",
              "applicationId": "APP-1041",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00422",
              "applicationId": "APP-1043",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00423",
              "applicationId": "APP-1044",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00424",
              "applicationId": "APP-1045",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00425",
              "applicationId": "APP-1046",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00426",
              "applicationId": "APP-1047",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00428",
              "applicationId": "APP-1049",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00429",
              "applicationId": "APP-1050",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00430",
              "applicationId": "APP-1051",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00431",
              "applicationId": "APP-1052",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00433",
              "applicationId": "APP-1054",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00434",
              "applicationId": "APP-1055",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00435",
              "applicationId": "APP-1056",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00436",
              "applicationId": "APP-1057",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00437",
              "applicationId": "APP-1058",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00439",
              "applicationId": "APP-1060",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00440",
              "applicationId": "APP-1061",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00441",
              "applicationId": "APP-1062",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            },
            {
              "decisionId": "DEC-2026-00442",
              "applicationId": "APP-1063",
              "bucket": "low",
              "customerFacingActionTaken": false,
              "emailSent": false,
              "recommendedAction": "no_action"
            }
          ]
        }
      },
      "remediationPlan": {
        "remediationPlanId": "PLAN-RECALL-2026-001",
        "recallId": "RECALL-2026-001",
        "requiresHumanApproval": true,
        "actionCount": 44,
        "summary": {
          "loanCoreReopenActions": 7,
          "crmReopenActions": 7,
          "ticketReopenActions": 7,
          "emailDraftActions": 5,
          "legacyPortalActions": 7,
          "auditRegisterActions": 11
        },
        "dryRunPreview": {
          "mode": "dry_run",
          "wouldUpdateLoanCore": 7,
          "wouldReopenCrmRecords": 7,
          "wouldReopenTickets": 7,
          "wouldCreateEmailDrafts": 5,
          "wouldUpdateLegacyPortal": 7,
          "wouldWriteAuditEvents": 11,
          "blockedActions": [
            {
              "system": "Email",
              "reason": "draft_only_until_final_business_approval"
            }
          ]
        },
        "actions": [
          {
            "decisionId": "DEC-2026-00386",
            "applicationId": "APP-1007",
            "applicantId": "CUST-1807",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LoanCore",
            "action": "set_status",
            "value": "manual_review_required",
            "owner": "SME Lending Ops",
            "actionId": "ACT-001",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:LoanCore:set_status"
          },
          {
            "decisionId": "DEC-2026-00386",
            "applicationId": "APP-1007",
            "applicantId": "CUST-1807",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "CRM",
            "action": "reopen_customer_case",
            "value": "reopened_due_to_ai_recall",
            "owner": "Customer Operations",
            "actionId": "ACT-002",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:CRM:reopen_customer_case"
          },
          {
            "decisionId": "DEC-2026-00386",
            "applicationId": "APP-1007",
            "applicantId": "CUST-1807",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "TicketSystem",
            "action": "reopen_ticket",
            "value": "reopened",
            "owner": "Support Operations",
            "actionId": "ACT-003",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:TicketSystem:reopen_ticket"
          },
          {
            "decisionId": "DEC-2026-00386",
            "applicationId": "APP-1007",
            "applicantId": "CUST-1807",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LegacyPortal",
            "action": "update_register",
            "value": "AI_RECALL_REOPENED",
            "owner": "RPA Robot",
            "actionId": "ACT-004",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:LegacyPortal:update_register"
          },
          {
            "decisionId": "DEC-2026-00386",
            "applicationId": "APP-1007",
            "applicantId": "CUST-1807",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": false,
            "rollbackAction": "delete_draft_if_not_sent",
            "system": "EmailDraft",
            "action": "draft_customer_notice",
            "value": "draft_only",
            "owner": "Business Owner",
            "actionId": "ACT-005",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:EmailDraft:draft_customer_notice"
          },
          {
            "decisionId": "DEC-2026-00386",
            "applicationId": "APP-1007",
            "applicantId": "CUST-1807",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "append_reversal_audit_event",
            "system": "AuditRegister",
            "action": "write_ai_recall_event",
            "value": "corrective_action_evidence",
            "owner": "Compliance",
            "actionId": "ACT-006",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:AuditRegister:write_ai_recall_event"
          },
          {
            "decisionId": "DEC-2026-00392",
            "applicationId": "APP-1013",
            "applicantId": "CUST-1813",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LoanCore",
            "action": "set_status",
            "value": "manual_review_required",
            "owner": "SME Lending Ops",
            "actionId": "ACT-007",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:LoanCore:set_status"
          },
          {
            "decisionId": "DEC-2026-00392",
            "applicationId": "APP-1013",
            "applicantId": "CUST-1813",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "CRM",
            "action": "reopen_customer_case",
            "value": "reopened_due_to_ai_recall",
            "owner": "Customer Operations",
            "actionId": "ACT-008",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:CRM:reopen_customer_case"
          },
          {
            "decisionId": "DEC-2026-00392",
            "applicationId": "APP-1013",
            "applicantId": "CUST-1813",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "TicketSystem",
            "action": "reopen_ticket",
            "value": "reopened",
            "owner": "Support Operations",
            "actionId": "ACT-009",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:TicketSystem:reopen_ticket"
          },
          {
            "decisionId": "DEC-2026-00392",
            "applicationId": "APP-1013",
            "applicantId": "CUST-1813",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LegacyPortal",
            "action": "update_register",
            "value": "AI_RECALL_REOPENED",
            "owner": "RPA Robot",
            "actionId": "ACT-010",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:LegacyPortal:update_register"
          },
          {
            "decisionId": "DEC-2026-00392",
            "applicationId": "APP-1013",
            "applicantId": "CUST-1813",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": false,
            "rollbackAction": "delete_draft_if_not_sent",
            "system": "EmailDraft",
            "action": "draft_customer_notice",
            "value": "draft_only",
            "owner": "Business Owner",
            "actionId": "ACT-011",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:EmailDraft:draft_customer_notice"
          },
          {
            "decisionId": "DEC-2026-00392",
            "applicationId": "APP-1013",
            "applicantId": "CUST-1813",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "append_reversal_audit_event",
            "system": "AuditRegister",
            "action": "write_ai_recall_event",
            "value": "corrective_action_evidence",
            "owner": "Compliance",
            "actionId": "ACT-012",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:AuditRegister:write_ai_recall_event"
          },
          {
            "decisionId": "DEC-2026-00403",
            "applicationId": "APP-1024",
            "applicantId": "CUST-1824",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LoanCore",
            "action": "set_status",
            "value": "manual_review_required",
            "owner": "SME Lending Ops",
            "actionId": "ACT-013",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:LoanCore:set_status"
          },
          {
            "decisionId": "DEC-2026-00403",
            "applicationId": "APP-1024",
            "applicantId": "CUST-1824",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "CRM",
            "action": "reopen_customer_case",
            "value": "reopened_due_to_ai_recall",
            "owner": "Customer Operations",
            "actionId": "ACT-014",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:CRM:reopen_customer_case"
          },
          {
            "decisionId": "DEC-2026-00403",
            "applicationId": "APP-1024",
            "applicantId": "CUST-1824",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "TicketSystem",
            "action": "reopen_ticket",
            "value": "reopened",
            "owner": "Support Operations",
            "actionId": "ACT-015",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:TicketSystem:reopen_ticket"
          },
          {
            "decisionId": "DEC-2026-00403",
            "applicationId": "APP-1024",
            "applicantId": "CUST-1824",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LegacyPortal",
            "action": "update_register",
            "value": "AI_RECALL_REOPENED",
            "owner": "RPA Robot",
            "actionId": "ACT-016",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:LegacyPortal:update_register"
          },
          {
            "decisionId": "DEC-2026-00403",
            "applicationId": "APP-1024",
            "applicantId": "CUST-1824",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": false,
            "rollbackAction": "delete_draft_if_not_sent",
            "system": "EmailDraft",
            "action": "draft_customer_notice",
            "value": "draft_only",
            "owner": "Business Owner",
            "actionId": "ACT-017",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:EmailDraft:draft_customer_notice"
          },
          {
            "decisionId": "DEC-2026-00403",
            "applicationId": "APP-1024",
            "applicantId": "CUST-1824",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "append_reversal_audit_event",
            "system": "AuditRegister",
            "action": "write_ai_recall_event",
            "value": "corrective_action_evidence",
            "owner": "Compliance",
            "actionId": "ACT-018",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:AuditRegister:write_ai_recall_event"
          },
          {
            "decisionId": "DEC-2026-00415",
            "applicationId": "APP-1036",
            "applicantId": "CUST-1836",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LoanCore",
            "action": "set_status",
            "value": "manual_review_required",
            "owner": "SME Lending Ops",
            "actionId": "ACT-019",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:LoanCore:set_status"
          },
          {
            "decisionId": "DEC-2026-00415",
            "applicationId": "APP-1036",
            "applicantId": "CUST-1836",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "CRM",
            "action": "reopen_customer_case",
            "value": "reopened_due_to_ai_recall",
            "owner": "Customer Operations",
            "actionId": "ACT-020",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:CRM:reopen_customer_case"
          },
          {
            "decisionId": "DEC-2026-00415",
            "applicationId": "APP-1036",
            "applicantId": "CUST-1836",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "TicketSystem",
            "action": "reopen_ticket",
            "value": "reopened",
            "owner": "Support Operations",
            "actionId": "ACT-021",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:TicketSystem:reopen_ticket"
          },
          {
            "decisionId": "DEC-2026-00415",
            "applicationId": "APP-1036",
            "applicantId": "CUST-1836",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LegacyPortal",
            "action": "update_register",
            "value": "AI_RECALL_REOPENED",
            "owner": "RPA Robot",
            "actionId": "ACT-022",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:LegacyPortal:update_register"
          },
          {
            "decisionId": "DEC-2026-00415",
            "applicationId": "APP-1036",
            "applicantId": "CUST-1836",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": false,
            "rollbackAction": "delete_draft_if_not_sent",
            "system": "EmailDraft",
            "action": "draft_customer_notice",
            "value": "draft_only",
            "owner": "Business Owner",
            "actionId": "ACT-023",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:EmailDraft:draft_customer_notice"
          },
          {
            "decisionId": "DEC-2026-00415",
            "applicationId": "APP-1036",
            "applicantId": "CUST-1836",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "append_reversal_audit_event",
            "system": "AuditRegister",
            "action": "write_ai_recall_event",
            "value": "corrective_action_evidence",
            "owner": "Compliance",
            "actionId": "ACT-024",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:AuditRegister:write_ai_recall_event"
          },
          {
            "decisionId": "DEC-2026-00421",
            "applicationId": "APP-1042",
            "applicantId": "CUST-1842",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LoanCore",
            "action": "set_status",
            "value": "manual_review_required",
            "owner": "SME Lending Ops",
            "actionId": "ACT-025",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:LoanCore:set_status"
          },
          {
            "decisionId": "DEC-2026-00421",
            "applicationId": "APP-1042",
            "applicantId": "CUST-1842",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "CRM",
            "action": "reopen_customer_case",
            "value": "reopened_due_to_ai_recall",
            "owner": "Customer Operations",
            "actionId": "ACT-026",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:CRM:reopen_customer_case"
          },
          {
            "decisionId": "DEC-2026-00421",
            "applicationId": "APP-1042",
            "applicantId": "CUST-1842",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "TicketSystem",
            "action": "reopen_ticket",
            "value": "reopened",
            "owner": "Support Operations",
            "actionId": "ACT-027",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:TicketSystem:reopen_ticket"
          },
          {
            "decisionId": "DEC-2026-00421",
            "applicationId": "APP-1042",
            "applicantId": "CUST-1842",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LegacyPortal",
            "action": "update_register",
            "value": "AI_RECALL_REOPENED",
            "owner": "RPA Robot",
            "actionId": "ACT-028",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:LegacyPortal:update_register"
          },
          {
            "decisionId": "DEC-2026-00421",
            "applicationId": "APP-1042",
            "applicantId": "CUST-1842",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": false,
            "rollbackAction": "delete_draft_if_not_sent",
            "system": "EmailDraft",
            "action": "draft_customer_notice",
            "value": "draft_only",
            "owner": "Business Owner",
            "actionId": "ACT-029",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:EmailDraft:draft_customer_notice"
          },
          {
            "decisionId": "DEC-2026-00421",
            "applicationId": "APP-1042",
            "applicantId": "CUST-1842",
            "riskLevel": "high",
            "riskScore": 100,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "email_sent",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "append_reversal_audit_event",
            "system": "AuditRegister",
            "action": "write_ai_recall_event",
            "value": "corrective_action_evidence",
            "owner": "Compliance",
            "actionId": "ACT-030",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:AuditRegister:write_ai_recall_event"
          },
          {
            "decisionId": "DEC-2026-00410",
            "applicationId": "APP-1031",
            "applicantId": "CUST-1831",
            "riskLevel": "high",
            "riskScore": 80,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00410",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LoanCore",
            "action": "set_status",
            "value": "manual_review_required",
            "owner": "SME Lending Ops",
            "actionId": "ACT-031",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:LoanCore:set_status"
          },
          {
            "decisionId": "DEC-2026-00410",
            "applicationId": "APP-1031",
            "applicantId": "CUST-1831",
            "riskLevel": "high",
            "riskScore": 80,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00410",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "CRM",
            "action": "reopen_customer_case",
            "value": "reopened_due_to_ai_recall",
            "owner": "Customer Operations",
            "actionId": "ACT-032",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:CRM:reopen_customer_case"
          },
          {
            "decisionId": "DEC-2026-00410",
            "applicationId": "APP-1031",
            "applicantId": "CUST-1831",
            "riskLevel": "high",
            "riskScore": 80,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00410",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "TicketSystem",
            "action": "reopen_ticket",
            "value": "reopened",
            "owner": "Support Operations",
            "actionId": "ACT-033",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:TicketSystem:reopen_ticket"
          },
          {
            "decisionId": "DEC-2026-00410",
            "applicationId": "APP-1031",
            "applicantId": "CUST-1831",
            "riskLevel": "high",
            "riskScore": 80,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00410",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LegacyPortal",
            "action": "update_register",
            "value": "AI_RECALL_REOPENED",
            "owner": "RPA Robot",
            "actionId": "ACT-034",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:LegacyPortal:update_register"
          },
          {
            "decisionId": "DEC-2026-00410",
            "applicationId": "APP-1031",
            "applicantId": "CUST-1831",
            "riskLevel": "high",
            "riskScore": 80,
            "riskBand": "critical",
            "riskDrivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00410",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "append_reversal_audit_event",
            "system": "AuditRegister",
            "action": "write_ai_recall_event",
            "value": "corrective_action_evidence",
            "owner": "Compliance",
            "actionId": "ACT-035",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:AuditRegister:write_ai_recall_event"
          },
          {
            "decisionId": "DEC-2026-00397",
            "applicationId": "APP-1018",
            "applicantId": "CUST-1818",
            "riskLevel": "high",
            "riskScore": 70,
            "riskBand": "high",
            "riskDrivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00397",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LoanCore",
            "action": "set_status",
            "value": "manual_review_required",
            "owner": "SME Lending Ops",
            "actionId": "ACT-036",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:LoanCore:set_status"
          },
          {
            "decisionId": "DEC-2026-00397",
            "applicationId": "APP-1018",
            "applicantId": "CUST-1818",
            "riskLevel": "high",
            "riskScore": 70,
            "riskBand": "high",
            "riskDrivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00397",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "CRM",
            "action": "reopen_customer_case",
            "value": "reopened_due_to_ai_recall",
            "owner": "Customer Operations",
            "actionId": "ACT-037",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:CRM:reopen_customer_case"
          },
          {
            "decisionId": "DEC-2026-00397",
            "applicationId": "APP-1018",
            "applicantId": "CUST-1818",
            "riskLevel": "high",
            "riskScore": 70,
            "riskBand": "high",
            "riskDrivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00397",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "TicketSystem",
            "action": "reopen_ticket",
            "value": "reopened",
            "owner": "Support Operations",
            "actionId": "ACT-038",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:TicketSystem:reopen_ticket"
          },
          {
            "decisionId": "DEC-2026-00397",
            "applicationId": "APP-1018",
            "applicantId": "CUST-1818",
            "riskLevel": "high",
            "riskScore": 70,
            "riskBand": "high",
            "riskDrivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00397",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "restore_previous_status",
            "system": "LegacyPortal",
            "action": "update_register",
            "value": "AI_RECALL_REOPENED",
            "owner": "RPA Robot",
            "actionId": "ACT-039",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:LegacyPortal:update_register"
          },
          {
            "decisionId": "DEC-2026-00397",
            "applicationId": "APP-1018",
            "applicantId": "CUST-1818",
            "riskLevel": "high",
            "riskScore": 70,
            "riskBand": "high",
            "riskDrivers": [
              "changed_outcome",
              "crm_closed",
              "ticket_closed",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00397",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "append_reversal_audit_event",
            "system": "AuditRegister",
            "action": "write_ai_recall_event",
            "value": "corrective_action_evidence",
            "owner": "Compliance",
            "actionId": "ACT-040",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:AuditRegister:write_ai_recall_event"
          },
          {
            "decisionId": "DEC-2026-00427",
            "applicationId": "APP-1048",
            "applicantId": "CUST-1848",
            "riskLevel": "high",
            "riskScore": 55,
            "riskBand": "medium",
            "riskDrivers": [
              "changed_outcome",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00427",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "append_reversal_audit_event",
            "system": "AuditRegister",
            "action": "write_ai_recall_event",
            "value": "corrective_action_evidence",
            "owner": "Compliance",
            "actionId": "ACT-041",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00427:AuditRegister:write_ai_recall_event"
          },
          {
            "decisionId": "DEC-2026-00432",
            "applicationId": "APP-1053",
            "applicantId": "CUST-1853",
            "riskLevel": "high",
            "riskScore": 55,
            "riskBand": "medium",
            "riskDrivers": [
              "changed_outcome",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00432",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "append_reversal_audit_event",
            "system": "AuditRegister",
            "action": "write_ai_recall_event",
            "value": "corrective_action_evidence",
            "owner": "Compliance",
            "actionId": "ACT-042",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00432:AuditRegister:write_ai_recall_event"
          },
          {
            "decisionId": "DEC-2026-00438",
            "applicationId": "APP-1059",
            "applicantId": "CUST-1859",
            "riskLevel": "high",
            "riskScore": 55,
            "riskBand": "medium",
            "riskDrivers": [
              "changed_outcome",
              "high_requested_amount",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00438",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "append_reversal_audit_event",
            "system": "AuditRegister",
            "action": "write_ai_recall_event",
            "value": "corrective_action_evidence",
            "owner": "Compliance",
            "actionId": "ACT-043",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00438:AuditRegister:write_ai_recall_event"
          },
          {
            "decisionId": "DEC-2026-00443",
            "applicationId": "APP-1064",
            "applicantId": "CUST-1864",
            "riskLevel": "high",
            "riskScore": 55,
            "riskBand": "medium",
            "riskDrivers": [
              "changed_outcome",
              "older_than_7_days",
              "no_human_touchpoint"
            ],
            "requiresHumanApproval": true,
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00443",
            "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
            "status": "pending",
            "attempt": 0,
            "maxAttempts": 3,
            "safeToRetry": true,
            "rollbackAction": "append_reversal_audit_event",
            "system": "AuditRegister",
            "action": "write_ai_recall_event",
            "value": "corrective_action_evidence",
            "owner": "Compliance",
            "actionId": "ACT-044",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00443:AuditRegister:write_ai_recall_event"
          }
        ],
        "reworkNote": "Re-entered planning after failed verification; idempotent actions were safe to retry."
      },
      "humanReviewOutcome": {
        "recallOwner": "approved",
        "businessOwner": "approved",
        "complianceReviewer": "approved",
        "scenario": "approved",
        "notes": "Proceed with draft-only customer communication and audit registration."
      },
      "remediationExecutionStatus": {
        "status": "completed",
        "correlationId": "RECALL-2026-001",
        "result": {
          "recallId": "RECALL-2026-001",
          "completedActions": 44,
          "skippedActions": 44,
          "failedActions": 0,
          "retryCount": 1,
          "retryEvents": [
            {
              "actionId": "ACT-026",
              "system": "CRM",
              "attempt": 1,
              "status": "failed",
              "errorCode": "CRM_TIMEOUT",
              "recoverable": true,
              "nextStep": "retry_with_same_idempotency_key"
            }
          ],
          "completed": [
            {
              "actionId": "ACT-001",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:LoanCore:set_status"
            },
            {
              "actionId": "ACT-002",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-003",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-004",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-005",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:EmailDraft:draft_customer_notice"
            },
            {
              "actionId": "ACT-006",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-007",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:LoanCore:set_status"
            },
            {
              "actionId": "ACT-008",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-009",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-010",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-011",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:EmailDraft:draft_customer_notice"
            },
            {
              "actionId": "ACT-012",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-013",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:LoanCore:set_status"
            },
            {
              "actionId": "ACT-014",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-015",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-016",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-017",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:EmailDraft:draft_customer_notice"
            },
            {
              "actionId": "ACT-018",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-019",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:LoanCore:set_status"
            },
            {
              "actionId": "ACT-020",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-021",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-022",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-023",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:EmailDraft:draft_customer_notice"
            },
            {
              "actionId": "ACT-024",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-025",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:LoanCore:set_status"
            },
            {
              "actionId": "ACT-026",
              "status": "completed",
              "attempts": 2,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-027",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-028",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-029",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:EmailDraft:draft_customer_notice"
            },
            {
              "actionId": "ACT-030",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-031",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:LoanCore:set_status"
            },
            {
              "actionId": "ACT-032",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-033",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-034",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-035",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-036",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:LoanCore:set_status"
            },
            {
              "actionId": "ACT-037",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-038",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-039",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-040",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-041",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00427:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-042",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00432:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-043",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00438:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-044",
              "status": "completed",
              "attempts": 1,
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00443:AuditRegister:write_ai_recall_event"
            }
          ],
          "skipped": [
            {
              "actionId": "ACT-001",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:LoanCore:set_status"
            },
            {
              "actionId": "ACT-002",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-003",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-004",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-005",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:EmailDraft:draft_customer_notice"
            },
            {
              "actionId": "ACT-006",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-007",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:LoanCore:set_status"
            },
            {
              "actionId": "ACT-008",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-009",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-010",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-011",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:EmailDraft:draft_customer_notice"
            },
            {
              "actionId": "ACT-012",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-013",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:LoanCore:set_status"
            },
            {
              "actionId": "ACT-014",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-015",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-016",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-017",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:EmailDraft:draft_customer_notice"
            },
            {
              "actionId": "ACT-018",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-019",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:LoanCore:set_status"
            },
            {
              "actionId": "ACT-020",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-021",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-022",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-023",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:EmailDraft:draft_customer_notice"
            },
            {
              "actionId": "ACT-024",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-025",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:LoanCore:set_status"
            },
            {
              "actionId": "ACT-026",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-027",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-028",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-029",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:EmailDraft:draft_customer_notice"
            },
            {
              "actionId": "ACT-030",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-031",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:LoanCore:set_status"
            },
            {
              "actionId": "ACT-032",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-033",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-034",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-035",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-036",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:LoanCore:set_status"
            },
            {
              "actionId": "ACT-037",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:CRM:reopen_customer_case"
            },
            {
              "actionId": "ACT-038",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:TicketSystem:reopen_ticket"
            },
            {
              "actionId": "ACT-039",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:LegacyPortal:update_register"
            },
            {
              "actionId": "ACT-040",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-041",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00427:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-042",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00432:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-043",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00438:AuditRegister:write_ai_recall_event"
            },
            {
              "actionId": "ACT-044",
              "status": "skipped",
              "reason": "duplicate_idempotency_key",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00443:AuditRegister:write_ai_recall_event"
            }
          ],
          "executedIdempotencyKeys": [
            "RECALL-2026-001:DEC-2026-00386:AuditRegister:write_ai_recall_event",
            "RECALL-2026-001:DEC-2026-00386:CRM:reopen_customer_case",
            "RECALL-2026-001:DEC-2026-00386:EmailDraft:draft_customer_notice",
            "RECALL-2026-001:DEC-2026-00386:LegacyPortal:update_register",
            "RECALL-2026-001:DEC-2026-00386:LoanCore:set_status",
            "RECALL-2026-001:DEC-2026-00386:TicketSystem:reopen_ticket",
            "RECALL-2026-001:DEC-2026-00392:AuditRegister:write_ai_recall_event",
            "RECALL-2026-001:DEC-2026-00392:CRM:reopen_customer_case",
            "RECALL-2026-001:DEC-2026-00392:EmailDraft:draft_customer_notice",
            "RECALL-2026-001:DEC-2026-00392:LegacyPortal:update_register",
            "RECALL-2026-001:DEC-2026-00392:LoanCore:set_status",
            "RECALL-2026-001:DEC-2026-00392:TicketSystem:reopen_ticket",
            "RECALL-2026-001:DEC-2026-00397:AuditRegister:write_ai_recall_event",
            "RECALL-2026-001:DEC-2026-00397:CRM:reopen_customer_case",
            "RECALL-2026-001:DEC-2026-00397:LegacyPortal:update_register",
            "RECALL-2026-001:DEC-2026-00397:LoanCore:set_status",
            "RECALL-2026-001:DEC-2026-00397:TicketSystem:reopen_ticket",
            "RECALL-2026-001:DEC-2026-00403:AuditRegister:write_ai_recall_event",
            "RECALL-2026-001:DEC-2026-00403:CRM:reopen_customer_case",
            "RECALL-2026-001:DEC-2026-00403:EmailDraft:draft_customer_notice",
            "RECALL-2026-001:DEC-2026-00403:LegacyPortal:update_register",
            "RECALL-2026-001:DEC-2026-00403:LoanCore:set_status",
            "RECALL-2026-001:DEC-2026-00403:TicketSystem:reopen_ticket",
            "RECALL-2026-001:DEC-2026-00410:AuditRegister:write_ai_recall_event",
            "RECALL-2026-001:DEC-2026-00410:CRM:reopen_customer_case",
            "RECALL-2026-001:DEC-2026-00410:LegacyPortal:update_register",
            "RECALL-2026-001:DEC-2026-00410:LoanCore:set_status",
            "RECALL-2026-001:DEC-2026-00410:TicketSystem:reopen_ticket",
            "RECALL-2026-001:DEC-2026-00415:AuditRegister:write_ai_recall_event",
            "RECALL-2026-001:DEC-2026-00415:CRM:reopen_customer_case",
            "RECALL-2026-001:DEC-2026-00415:EmailDraft:draft_customer_notice",
            "RECALL-2026-001:DEC-2026-00415:LegacyPortal:update_register",
            "RECALL-2026-001:DEC-2026-00415:LoanCore:set_status",
            "RECALL-2026-001:DEC-2026-00415:TicketSystem:reopen_ticket",
            "RECALL-2026-001:DEC-2026-00421:AuditRegister:write_ai_recall_event",
            "RECALL-2026-001:DEC-2026-00421:CRM:reopen_customer_case",
            "RECALL-2026-001:DEC-2026-00421:EmailDraft:draft_customer_notice",
            "RECALL-2026-001:DEC-2026-00421:LegacyPortal:update_register",
            "RECALL-2026-001:DEC-2026-00421:LoanCore:set_status",
            "RECALL-2026-001:DEC-2026-00421:TicketSystem:reopen_ticket",
            "RECALL-2026-001:DEC-2026-00427:AuditRegister:write_ai_recall_event",
            "RECALL-2026-001:DEC-2026-00432:AuditRegister:write_ai_recall_event",
            "RECALL-2026-001:DEC-2026-00438:AuditRegister:write_ai_recall_event",
            "RECALL-2026-001:DEC-2026-00443:AuditRegister:write_ai_recall_event"
          ],
          "downstreamActions": [
            {
              "downstreamActionId": "DOWN-DEC-2026-00380",
              "decisionId": "DEC-2026-00380",
              "applicationId": "APP-1001",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00381",
              "decisionId": "DEC-2026-00381",
              "applicationId": "APP-1002",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00382",
              "decisionId": "DEC-2026-00382",
              "applicationId": "APP-1003",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00383",
              "decisionId": "DEC-2026-00383",
              "applicationId": "APP-1004",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00384",
              "decisionId": "DEC-2026-00384",
              "applicationId": "APP-1005",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00385",
              "decisionId": "DEC-2026-00385",
              "applicationId": "APP-1006",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00386",
              "decisionId": "DEC-2026-00386",
              "applicationId": "APP-1007",
              "loanCore": {
                "status": "manual_review_required",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "reopened_due_to_ai_recall",
                "reopenedAt": "2026-06-27T10:28:00+02:00"
              },
              "ticket": {
                "status": "reopened",
                "internalNote": "Reopened by RecallOS AI recall workflow."
              },
              "email": {
                "sent": true,
                "draftExists": true,
                "status": "draft_created"
              },
              "legacyPortal": {
                "status": "AI_RECALL_REOPENED"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00387",
              "decisionId": "DEC-2026-00387",
              "applicationId": "APP-1008",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00388",
              "decisionId": "DEC-2026-00388",
              "applicationId": "APP-1009",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00389",
              "decisionId": "DEC-2026-00389",
              "applicationId": "APP-1010",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00390",
              "decisionId": "DEC-2026-00390",
              "applicationId": "APP-1011",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00391",
              "decisionId": "DEC-2026-00391",
              "applicationId": "APP-1012",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00392",
              "decisionId": "DEC-2026-00392",
              "applicationId": "APP-1013",
              "loanCore": {
                "status": "manual_review_required",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "reopened_due_to_ai_recall",
                "reopenedAt": "2026-06-27T10:28:00+02:00"
              },
              "ticket": {
                "status": "reopened",
                "internalNote": "Reopened by RecallOS AI recall workflow."
              },
              "email": {
                "sent": true,
                "draftExists": true,
                "status": "draft_created"
              },
              "legacyPortal": {
                "status": "AI_RECALL_REOPENED"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00393",
              "decisionId": "DEC-2026-00393",
              "applicationId": "APP-1014",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00394",
              "decisionId": "DEC-2026-00394",
              "applicationId": "APP-1015",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00395",
              "decisionId": "DEC-2026-00395",
              "applicationId": "APP-1016",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00396",
              "decisionId": "DEC-2026-00396",
              "applicationId": "APP-1017",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00397",
              "decisionId": "DEC-2026-00397",
              "applicationId": "APP-1018",
              "loanCore": {
                "status": "manual_review_required",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "reopened_due_to_ai_recall",
                "reopenedAt": "2026-06-27T10:28:00+02:00"
              },
              "ticket": {
                "status": "reopened",
                "internalNote": "Reopened by RecallOS AI recall workflow."
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "AI_RECALL_REOPENED"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00398",
              "decisionId": "DEC-2026-00398",
              "applicationId": "APP-1019",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00399",
              "decisionId": "DEC-2026-00399",
              "applicationId": "APP-1020",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00400",
              "decisionId": "DEC-2026-00400",
              "applicationId": "APP-1021",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00401",
              "decisionId": "DEC-2026-00401",
              "applicationId": "APP-1022",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00402",
              "decisionId": "DEC-2026-00402",
              "applicationId": "APP-1023",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00403",
              "decisionId": "DEC-2026-00403",
              "applicationId": "APP-1024",
              "loanCore": {
                "status": "manual_review_required",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "reopened_due_to_ai_recall",
                "reopenedAt": "2026-06-27T10:28:00+02:00"
              },
              "ticket": {
                "status": "reopened",
                "internalNote": "Reopened by RecallOS AI recall workflow."
              },
              "email": {
                "sent": true,
                "draftExists": true,
                "status": "draft_created"
              },
              "legacyPortal": {
                "status": "AI_RECALL_REOPENED"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00404",
              "decisionId": "DEC-2026-00404",
              "applicationId": "APP-1025",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00405",
              "decisionId": "DEC-2026-00405",
              "applicationId": "APP-1026",
              "loanCore": {
                "status": "manual_review",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00406",
              "decisionId": "DEC-2026-00406",
              "applicationId": "APP-1027",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00407",
              "decisionId": "DEC-2026-00407",
              "applicationId": "APP-1028",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00408",
              "decisionId": "DEC-2026-00408",
              "applicationId": "APP-1029",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00409",
              "decisionId": "DEC-2026-00409",
              "applicationId": "APP-1030",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00410",
              "decisionId": "DEC-2026-00410",
              "applicationId": "APP-1031",
              "loanCore": {
                "status": "manual_review_required",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "reopened_due_to_ai_recall",
                "reopenedAt": "2026-06-27T10:28:00+02:00"
              },
              "ticket": {
                "status": "reopened",
                "internalNote": "Reopened by RecallOS AI recall workflow."
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "AI_RECALL_REOPENED"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00411",
              "decisionId": "DEC-2026-00411",
              "applicationId": "APP-1032",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00412",
              "decisionId": "DEC-2026-00412",
              "applicationId": "APP-1033",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00413",
              "decisionId": "DEC-2026-00413",
              "applicationId": "APP-1034",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00414",
              "decisionId": "DEC-2026-00414",
              "applicationId": "APP-1035",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00415",
              "decisionId": "DEC-2026-00415",
              "applicationId": "APP-1036",
              "loanCore": {
                "status": "manual_review_required",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "reopened_due_to_ai_recall",
                "reopenedAt": "2026-06-27T10:28:00+02:00"
              },
              "ticket": {
                "status": "reopened",
                "internalNote": "Reopened by RecallOS AI recall workflow."
              },
              "email": {
                "sent": true,
                "draftExists": true,
                "status": "draft_created"
              },
              "legacyPortal": {
                "status": "AI_RECALL_REOPENED"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00416",
              "decisionId": "DEC-2026-00416",
              "applicationId": "APP-1037",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00417",
              "decisionId": "DEC-2026-00417",
              "applicationId": "APP-1038",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00418",
              "decisionId": "DEC-2026-00418",
              "applicationId": "APP-1039",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00419",
              "decisionId": "DEC-2026-00419",
              "applicationId": "APP-1040",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00420",
              "decisionId": "DEC-2026-00420",
              "applicationId": "APP-1041",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00421",
              "decisionId": "DEC-2026-00421",
              "applicationId": "APP-1042",
              "loanCore": {
                "status": "manual_review_required",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "reopened_due_to_ai_recall",
                "reopenedAt": "2026-06-27T10:28:00+02:00"
              },
              "ticket": {
                "status": "reopened",
                "internalNote": "Reopened by RecallOS AI recall workflow."
              },
              "email": {
                "sent": true,
                "draftExists": true,
                "status": "draft_created"
              },
              "legacyPortal": {
                "status": "AI_RECALL_REOPENED"
              },
              "customerFacingActionTaken": true,
              "immediateReopenRequired": true,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00422",
              "decisionId": "DEC-2026-00422",
              "applicationId": "APP-1043",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00423",
              "decisionId": "DEC-2026-00423",
              "applicationId": "APP-1044",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00424",
              "decisionId": "DEC-2026-00424",
              "applicationId": "APP-1045",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00425",
              "decisionId": "DEC-2026-00425",
              "applicationId": "APP-1046",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00426",
              "decisionId": "DEC-2026-00426",
              "applicationId": "APP-1047",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00427",
              "decisionId": "DEC-2026-00427",
              "applicationId": "APP-1048",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00428",
              "decisionId": "DEC-2026-00428",
              "applicationId": "APP-1049",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00429",
              "decisionId": "DEC-2026-00429",
              "applicationId": "APP-1050",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00430",
              "decisionId": "DEC-2026-00430",
              "applicationId": "APP-1051",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00431",
              "decisionId": "DEC-2026-00431",
              "applicationId": "APP-1052",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00432",
              "decisionId": "DEC-2026-00432",
              "applicationId": "APP-1053",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00433",
              "decisionId": "DEC-2026-00433",
              "applicationId": "APP-1054",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00434",
              "decisionId": "DEC-2026-00434",
              "applicationId": "APP-1055",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00435",
              "decisionId": "DEC-2026-00435",
              "applicationId": "APP-1056",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00436",
              "decisionId": "DEC-2026-00436",
              "applicationId": "APP-1057",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00437",
              "decisionId": "DEC-2026-00437",
              "applicationId": "APP-1058",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00438",
              "decisionId": "DEC-2026-00438",
              "applicationId": "APP-1059",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00439",
              "decisionId": "DEC-2026-00439",
              "applicationId": "APP-1060",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00440",
              "decisionId": "DEC-2026-00440",
              "applicationId": "APP-1061",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00441",
              "decisionId": "DEC-2026-00441",
              "applicationId": "APP-1062",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00442",
              "decisionId": "DEC-2026-00442",
              "applicationId": "APP-1063",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00443",
              "decisionId": "DEC-2026-00443",
              "applicationId": "APP-1064",
              "loanCore": {
                "status": "closed_rejected",
                "holdReason": "AI_DECISION_RECALL"
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": true,
                "status": "frozen"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": true,
              "recallId": "RECALL-2026-001"
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00444",
              "decisionId": "DEC-2026-00444",
              "applicationId": "APP-1065",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00445",
              "decisionId": "DEC-2026-00445",
              "applicationId": "APP-1066",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00446",
              "decisionId": "DEC-2026-00446",
              "applicationId": "APP-1067",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00447",
              "decisionId": "DEC-2026-00447",
              "applicationId": "APP-1068",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00448",
              "decisionId": "DEC-2026-00448",
              "applicationId": "APP-1069",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00449",
              "decisionId": "DEC-2026-00449",
              "applicationId": "APP-1070",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00450",
              "decisionId": "DEC-2026-00450",
              "applicationId": "APP-1071",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00451",
              "decisionId": "DEC-2026-00451",
              "applicationId": "APP-1072",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00452",
              "decisionId": "DEC-2026-00452",
              "applicationId": "APP-1073",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00453",
              "decisionId": "DEC-2026-00453",
              "applicationId": "APP-1074",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00454",
              "decisionId": "DEC-2026-00454",
              "applicationId": "APP-1075",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00455",
              "decisionId": "DEC-2026-00455",
              "applicationId": "APP-1076",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00456",
              "decisionId": "DEC-2026-00456",
              "applicationId": "APP-1077",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00457",
              "decisionId": "DEC-2026-00457",
              "applicationId": "APP-1078",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00458",
              "decisionId": "DEC-2026-00458",
              "applicationId": "APP-1079",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00459",
              "decisionId": "DEC-2026-00459",
              "applicationId": "APP-1080",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00460",
              "decisionId": "DEC-2026-00460",
              "applicationId": "APP-1081",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00461",
              "decisionId": "DEC-2026-00461",
              "applicationId": "APP-1082",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00462",
              "decisionId": "DEC-2026-00462",
              "applicationId": "APP-1083",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00463",
              "decisionId": "DEC-2026-00463",
              "applicationId": "APP-1084",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00464",
              "decisionId": "DEC-2026-00464",
              "applicationId": "APP-1085",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00465",
              "decisionId": "DEC-2026-00465",
              "applicationId": "APP-1086",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00466",
              "decisionId": "DEC-2026-00466",
              "applicationId": "APP-1087",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00467",
              "decisionId": "DEC-2026-00467",
              "applicationId": "APP-1088",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00468",
              "decisionId": "DEC-2026-00468",
              "applicationId": "APP-1089",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00469",
              "decisionId": "DEC-2026-00469",
              "applicationId": "APP-1090",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00470",
              "decisionId": "DEC-2026-00470",
              "applicationId": "APP-1091",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00471",
              "decisionId": "DEC-2026-00471",
              "applicationId": "APP-1092",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00472",
              "decisionId": "DEC-2026-00472",
              "applicationId": "APP-1093",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00473",
              "decisionId": "DEC-2026-00473",
              "applicationId": "APP-1094",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00474",
              "decisionId": "DEC-2026-00474",
              "applicationId": "APP-1095",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00475",
              "decisionId": "DEC-2026-00475",
              "applicationId": "APP-1096",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00476",
              "decisionId": "DEC-2026-00476",
              "applicationId": "APP-1097",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00477",
              "decisionId": "DEC-2026-00477",
              "applicationId": "APP-1098",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00478",
              "decisionId": "DEC-2026-00478",
              "applicationId": "APP-1099",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00479",
              "decisionId": "DEC-2026-00479",
              "applicationId": "APP-1100",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00480",
              "decisionId": "DEC-2026-00480",
              "applicationId": "APP-1101",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00481",
              "decisionId": "DEC-2026-00481",
              "applicationId": "APP-1102",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00482",
              "decisionId": "DEC-2026-00482",
              "applicationId": "APP-1103",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00483",
              "decisionId": "DEC-2026-00483",
              "applicationId": "APP-1104",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00484",
              "decisionId": "DEC-2026-00484",
              "applicationId": "APP-1105",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00485",
              "decisionId": "DEC-2026-00485",
              "applicationId": "APP-1106",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00486",
              "decisionId": "DEC-2026-00486",
              "applicationId": "APP-1107",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00487",
              "decisionId": "DEC-2026-00487",
              "applicationId": "APP-1108",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00488",
              "decisionId": "DEC-2026-00488",
              "applicationId": "APP-1109",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00489",
              "decisionId": "DEC-2026-00489",
              "applicationId": "APP-1110",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00490",
              "decisionId": "DEC-2026-00490",
              "applicationId": "APP-1111",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00491",
              "decisionId": "DEC-2026-00491",
              "applicationId": "APP-1112",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00492",
              "decisionId": "DEC-2026-00492",
              "applicationId": "APP-1113",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00493",
              "decisionId": "DEC-2026-00493",
              "applicationId": "APP-1114",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00494",
              "decisionId": "DEC-2026-00494",
              "applicationId": "APP-1115",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00495",
              "decisionId": "DEC-2026-00495",
              "applicationId": "APP-1116",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00496",
              "decisionId": "DEC-2026-00496",
              "applicationId": "APP-1117",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00497",
              "decisionId": "DEC-2026-00497",
              "applicationId": "APP-1118",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00498",
              "decisionId": "DEC-2026-00498",
              "applicationId": "APP-1119",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            },
            {
              "downstreamActionId": "DOWN-DEC-2026-00499",
              "decisionId": "DEC-2026-00499",
              "applicationId": "APP-1120",
              "loanCore": {
                "status": "pre_approved",
                "holdReason": null
              },
              "crm": {
                "status": "open"
              },
              "ticket": {
                "status": "none"
              },
              "email": {
                "sent": false,
                "draftExists": false,
                "status": "none"
              },
              "legacyPortal": {
                "status": "not_required"
              },
              "customerFacingActionTaken": false,
              "immediateReopenRequired": false,
              "underRecall": false,
              "recallId": null
            }
          ],
          "emailDrafts": [
            {
              "draftId": "DRAFT-DEC-2026-00386",
              "decisionId": "DEC-2026-00386",
              "applicationId": "APP-1007",
              "mode": "draft_only",
              "subject": "Update on your SME loan application review",
              "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
            },
            {
              "draftId": "DRAFT-DEC-2026-00392",
              "decisionId": "DEC-2026-00392",
              "applicationId": "APP-1013",
              "mode": "draft_only",
              "subject": "Update on your SME loan application review",
              "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
            },
            {
              "draftId": "DRAFT-DEC-2026-00403",
              "decisionId": "DEC-2026-00403",
              "applicationId": "APP-1024",
              "mode": "draft_only",
              "subject": "Update on your SME loan application review",
              "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
            },
            {
              "draftId": "DRAFT-DEC-2026-00415",
              "decisionId": "DEC-2026-00415",
              "applicationId": "APP-1036",
              "mode": "draft_only",
              "subject": "Update on your SME loan application review",
              "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
            },
            {
              "draftId": "DRAFT-DEC-2026-00421",
              "decisionId": "DEC-2026-00421",
              "applicationId": "APP-1042",
              "mode": "draft_only",
              "subject": "Update on your SME loan application review",
              "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
            }
          ],
          "auditEvents": [
            {
              "auditEventId": "AUD-001",
              "recallId": "RECALL-2026-001",
              "decisionId": "DEC-2026-00386",
              "actionId": "ACT-006",
              "eventType": "ai_decision_recall_corrective_action",
              "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:AuditRegister:write_ai_recall_event"
            },
            {
              "auditEventId": "AUD-002",
              "recallId": "RECALL-2026-001",
              "decisionId": "DEC-2026-00392",
              "actionId": "ACT-012",
              "eventType": "ai_decision_recall_corrective_action",
              "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:AuditRegister:write_ai_recall_event"
            },
            {
              "auditEventId": "AUD-003",
              "recallId": "RECALL-2026-001",
              "decisionId": "DEC-2026-00403",
              "actionId": "ACT-018",
              "eventType": "ai_decision_recall_corrective_action",
              "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:AuditRegister:write_ai_recall_event"
            },
            {
              "auditEventId": "AUD-004",
              "recallId": "RECALL-2026-001",
              "decisionId": "DEC-2026-00415",
              "actionId": "ACT-024",
              "eventType": "ai_decision_recall_corrective_action",
              "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:AuditRegister:write_ai_recall_event"
            },
            {
              "auditEventId": "AUD-005",
              "recallId": "RECALL-2026-001",
              "decisionId": "DEC-2026-00421",
              "actionId": "ACT-030",
              "eventType": "ai_decision_recall_corrective_action",
              "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:AuditRegister:write_ai_recall_event"
            },
            {
              "auditEventId": "AUD-006",
              "recallId": "RECALL-2026-001",
              "decisionId": "DEC-2026-00410",
              "actionId": "ACT-035",
              "eventType": "ai_decision_recall_corrective_action",
              "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00410",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:AuditRegister:write_ai_recall_event"
            },
            {
              "auditEventId": "AUD-007",
              "recallId": "RECALL-2026-001",
              "decisionId": "DEC-2026-00397",
              "actionId": "ACT-040",
              "eventType": "ai_decision_recall_corrective_action",
              "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00397",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:AuditRegister:write_ai_recall_event"
            },
            {
              "auditEventId": "AUD-008",
              "recallId": "RECALL-2026-001",
              "decisionId": "DEC-2026-00427",
              "actionId": "ACT-041",
              "eventType": "ai_decision_recall_corrective_action",
              "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00427",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00427:AuditRegister:write_ai_recall_event"
            },
            {
              "auditEventId": "AUD-009",
              "recallId": "RECALL-2026-001",
              "decisionId": "DEC-2026-00432",
              "actionId": "ACT-042",
              "eventType": "ai_decision_recall_corrective_action",
              "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00432",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00432:AuditRegister:write_ai_recall_event"
            },
            {
              "auditEventId": "AUD-010",
              "recallId": "RECALL-2026-001",
              "decisionId": "DEC-2026-00438",
              "actionId": "ACT-043",
              "eventType": "ai_decision_recall_corrective_action",
              "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00438",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00438:AuditRegister:write_ai_recall_event"
            },
            {
              "auditEventId": "AUD-011",
              "recallId": "RECALL-2026-001",
              "decisionId": "DEC-2026-00443",
              "actionId": "ACT-044",
              "eventType": "ai_decision_recall_corrective_action",
              "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00443",
              "idempotencyKey": "RECALL-2026-001:DEC-2026-00443:AuditRegister:write_ai_recall_event"
            }
          ]
        },
        "errors": [],
        "recallId": "RECALL-2026-001",
        "completedActions": 44,
        "skippedActions": 44,
        "failedActions": 0,
        "retryCount": 1,
        "retryEvents": [
          {
            "actionId": "ACT-026",
            "system": "CRM",
            "attempt": 1,
            "status": "failed",
            "errorCode": "CRM_TIMEOUT",
            "recoverable": true,
            "nextStep": "retry_with_same_idempotency_key"
          }
        ],
        "completed": [
          {
            "actionId": "ACT-001",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:LoanCore:set_status"
          },
          {
            "actionId": "ACT-002",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-003",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-004",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-005",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:EmailDraft:draft_customer_notice"
          },
          {
            "actionId": "ACT-006",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-007",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:LoanCore:set_status"
          },
          {
            "actionId": "ACT-008",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-009",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-010",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-011",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:EmailDraft:draft_customer_notice"
          },
          {
            "actionId": "ACT-012",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-013",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:LoanCore:set_status"
          },
          {
            "actionId": "ACT-014",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-015",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-016",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-017",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:EmailDraft:draft_customer_notice"
          },
          {
            "actionId": "ACT-018",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-019",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:LoanCore:set_status"
          },
          {
            "actionId": "ACT-020",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-021",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-022",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-023",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:EmailDraft:draft_customer_notice"
          },
          {
            "actionId": "ACT-024",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-025",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:LoanCore:set_status"
          },
          {
            "actionId": "ACT-026",
            "status": "completed",
            "attempts": 2,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-027",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-028",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-029",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:EmailDraft:draft_customer_notice"
          },
          {
            "actionId": "ACT-030",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-031",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:LoanCore:set_status"
          },
          {
            "actionId": "ACT-032",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-033",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-034",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-035",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-036",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:LoanCore:set_status"
          },
          {
            "actionId": "ACT-037",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-038",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-039",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-040",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-041",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00427:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-042",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00432:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-043",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00438:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-044",
            "status": "completed",
            "attempts": 1,
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00443:AuditRegister:write_ai_recall_event"
          }
        ],
        "skipped": [
          {
            "actionId": "ACT-001",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:LoanCore:set_status"
          },
          {
            "actionId": "ACT-002",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-003",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-004",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-005",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:EmailDraft:draft_customer_notice"
          },
          {
            "actionId": "ACT-006",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-007",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:LoanCore:set_status"
          },
          {
            "actionId": "ACT-008",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-009",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-010",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-011",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:EmailDraft:draft_customer_notice"
          },
          {
            "actionId": "ACT-012",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-013",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:LoanCore:set_status"
          },
          {
            "actionId": "ACT-014",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-015",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-016",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-017",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:EmailDraft:draft_customer_notice"
          },
          {
            "actionId": "ACT-018",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-019",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:LoanCore:set_status"
          },
          {
            "actionId": "ACT-020",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-021",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-022",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-023",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:EmailDraft:draft_customer_notice"
          },
          {
            "actionId": "ACT-024",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-025",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:LoanCore:set_status"
          },
          {
            "actionId": "ACT-026",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-027",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-028",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-029",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:EmailDraft:draft_customer_notice"
          },
          {
            "actionId": "ACT-030",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-031",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:LoanCore:set_status"
          },
          {
            "actionId": "ACT-032",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-033",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-034",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-035",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-036",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:LoanCore:set_status"
          },
          {
            "actionId": "ACT-037",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:CRM:reopen_customer_case"
          },
          {
            "actionId": "ACT-038",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:TicketSystem:reopen_ticket"
          },
          {
            "actionId": "ACT-039",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:LegacyPortal:update_register"
          },
          {
            "actionId": "ACT-040",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-041",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00427:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-042",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00432:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-043",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00438:AuditRegister:write_ai_recall_event"
          },
          {
            "actionId": "ACT-044",
            "status": "skipped",
            "reason": "duplicate_idempotency_key",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00443:AuditRegister:write_ai_recall_event"
          }
        ],
        "executedIdempotencyKeys": [
          "RECALL-2026-001:DEC-2026-00386:AuditRegister:write_ai_recall_event",
          "RECALL-2026-001:DEC-2026-00386:CRM:reopen_customer_case",
          "RECALL-2026-001:DEC-2026-00386:EmailDraft:draft_customer_notice",
          "RECALL-2026-001:DEC-2026-00386:LegacyPortal:update_register",
          "RECALL-2026-001:DEC-2026-00386:LoanCore:set_status",
          "RECALL-2026-001:DEC-2026-00386:TicketSystem:reopen_ticket",
          "RECALL-2026-001:DEC-2026-00392:AuditRegister:write_ai_recall_event",
          "RECALL-2026-001:DEC-2026-00392:CRM:reopen_customer_case",
          "RECALL-2026-001:DEC-2026-00392:EmailDraft:draft_customer_notice",
          "RECALL-2026-001:DEC-2026-00392:LegacyPortal:update_register",
          "RECALL-2026-001:DEC-2026-00392:LoanCore:set_status",
          "RECALL-2026-001:DEC-2026-00392:TicketSystem:reopen_ticket",
          "RECALL-2026-001:DEC-2026-00397:AuditRegister:write_ai_recall_event",
          "RECALL-2026-001:DEC-2026-00397:CRM:reopen_customer_case",
          "RECALL-2026-001:DEC-2026-00397:LegacyPortal:update_register",
          "RECALL-2026-001:DEC-2026-00397:LoanCore:set_status",
          "RECALL-2026-001:DEC-2026-00397:TicketSystem:reopen_ticket",
          "RECALL-2026-001:DEC-2026-00403:AuditRegister:write_ai_recall_event",
          "RECALL-2026-001:DEC-2026-00403:CRM:reopen_customer_case",
          "RECALL-2026-001:DEC-2026-00403:EmailDraft:draft_customer_notice",
          "RECALL-2026-001:DEC-2026-00403:LegacyPortal:update_register",
          "RECALL-2026-001:DEC-2026-00403:LoanCore:set_status",
          "RECALL-2026-001:DEC-2026-00403:TicketSystem:reopen_ticket",
          "RECALL-2026-001:DEC-2026-00410:AuditRegister:write_ai_recall_event",
          "RECALL-2026-001:DEC-2026-00410:CRM:reopen_customer_case",
          "RECALL-2026-001:DEC-2026-00410:LegacyPortal:update_register",
          "RECALL-2026-001:DEC-2026-00410:LoanCore:set_status",
          "RECALL-2026-001:DEC-2026-00410:TicketSystem:reopen_ticket",
          "RECALL-2026-001:DEC-2026-00415:AuditRegister:write_ai_recall_event",
          "RECALL-2026-001:DEC-2026-00415:CRM:reopen_customer_case",
          "RECALL-2026-001:DEC-2026-00415:EmailDraft:draft_customer_notice",
          "RECALL-2026-001:DEC-2026-00415:LegacyPortal:update_register",
          "RECALL-2026-001:DEC-2026-00415:LoanCore:set_status",
          "RECALL-2026-001:DEC-2026-00415:TicketSystem:reopen_ticket",
          "RECALL-2026-001:DEC-2026-00421:AuditRegister:write_ai_recall_event",
          "RECALL-2026-001:DEC-2026-00421:CRM:reopen_customer_case",
          "RECALL-2026-001:DEC-2026-00421:EmailDraft:draft_customer_notice",
          "RECALL-2026-001:DEC-2026-00421:LegacyPortal:update_register",
          "RECALL-2026-001:DEC-2026-00421:LoanCore:set_status",
          "RECALL-2026-001:DEC-2026-00421:TicketSystem:reopen_ticket",
          "RECALL-2026-001:DEC-2026-00427:AuditRegister:write_ai_recall_event",
          "RECALL-2026-001:DEC-2026-00432:AuditRegister:write_ai_recall_event",
          "RECALL-2026-001:DEC-2026-00438:AuditRegister:write_ai_recall_event",
          "RECALL-2026-001:DEC-2026-00443:AuditRegister:write_ai_recall_event"
        ],
        "emailDrafts": [
          {
            "draftId": "DRAFT-DEC-2026-00386",
            "decisionId": "DEC-2026-00386",
            "applicationId": "APP-1007",
            "mode": "draft_only",
            "subject": "Update on your SME loan application review",
            "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
          },
          {
            "draftId": "DRAFT-DEC-2026-00392",
            "decisionId": "DEC-2026-00392",
            "applicationId": "APP-1013",
            "mode": "draft_only",
            "subject": "Update on your SME loan application review",
            "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
          },
          {
            "draftId": "DRAFT-DEC-2026-00403",
            "decisionId": "DEC-2026-00403",
            "applicationId": "APP-1024",
            "mode": "draft_only",
            "subject": "Update on your SME loan application review",
            "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
          },
          {
            "draftId": "DRAFT-DEC-2026-00415",
            "decisionId": "DEC-2026-00415",
            "applicationId": "APP-1036",
            "mode": "draft_only",
            "subject": "Update on your SME loan application review",
            "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
          },
          {
            "draftId": "DRAFT-DEC-2026-00421",
            "decisionId": "DEC-2026-00421",
            "applicationId": "APP-1042",
            "mode": "draft_only",
            "subject": "Update on your SME loan application review",
            "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
          }
        ],
        "auditEvents": [
          {
            "auditEventId": "AUD-001",
            "recallId": "RECALL-2026-001",
            "decisionId": "DEC-2026-00386",
            "actionId": "ACT-006",
            "eventType": "ai_decision_recall_corrective_action",
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:AuditRegister:write_ai_recall_event"
          },
          {
            "auditEventId": "AUD-002",
            "recallId": "RECALL-2026-001",
            "decisionId": "DEC-2026-00392",
            "actionId": "ACT-012",
            "eventType": "ai_decision_recall_corrective_action",
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:AuditRegister:write_ai_recall_event"
          },
          {
            "auditEventId": "AUD-003",
            "recallId": "RECALL-2026-001",
            "decisionId": "DEC-2026-00403",
            "actionId": "ACT-018",
            "eventType": "ai_decision_recall_corrective_action",
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:AuditRegister:write_ai_recall_event"
          },
          {
            "auditEventId": "AUD-004",
            "recallId": "RECALL-2026-001",
            "decisionId": "DEC-2026-00415",
            "actionId": "ACT-024",
            "eventType": "ai_decision_recall_corrective_action",
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:AuditRegister:write_ai_recall_event"
          },
          {
            "auditEventId": "AUD-005",
            "recallId": "RECALL-2026-001",
            "decisionId": "DEC-2026-00421",
            "actionId": "ACT-030",
            "eventType": "ai_decision_recall_corrective_action",
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:AuditRegister:write_ai_recall_event"
          },
          {
            "auditEventId": "AUD-006",
            "recallId": "RECALL-2026-001",
            "decisionId": "DEC-2026-00410",
            "actionId": "ACT-035",
            "eventType": "ai_decision_recall_corrective_action",
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00410",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:AuditRegister:write_ai_recall_event"
          },
          {
            "auditEventId": "AUD-007",
            "recallId": "RECALL-2026-001",
            "decisionId": "DEC-2026-00397",
            "actionId": "ACT-040",
            "eventType": "ai_decision_recall_corrective_action",
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00397",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:AuditRegister:write_ai_recall_event"
          },
          {
            "auditEventId": "AUD-008",
            "recallId": "RECALL-2026-001",
            "decisionId": "DEC-2026-00427",
            "actionId": "ACT-041",
            "eventType": "ai_decision_recall_corrective_action",
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00427",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00427:AuditRegister:write_ai_recall_event"
          },
          {
            "auditEventId": "AUD-009",
            "recallId": "RECALL-2026-001",
            "decisionId": "DEC-2026-00432",
            "actionId": "ACT-042",
            "eventType": "ai_decision_recall_corrective_action",
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00432",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00432:AuditRegister:write_ai_recall_event"
          },
          {
            "auditEventId": "AUD-010",
            "recallId": "RECALL-2026-001",
            "decisionId": "DEC-2026-00438",
            "actionId": "ACT-043",
            "eventType": "ai_decision_recall_corrective_action",
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00438",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00438:AuditRegister:write_ai_recall_event"
          },
          {
            "auditEventId": "AUD-011",
            "recallId": "RECALL-2026-001",
            "decisionId": "DEC-2026-00443",
            "actionId": "ACT-044",
            "eventType": "ai_decision_recall_corrective_action",
            "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00443",
            "idempotencyKey": "RECALL-2026-001:DEC-2026-00443:AuditRegister:write_ai_recall_event"
          }
        ]
      },
      "recallCertificateUri": "storage://recall-certificates/AI_Decision_Recall_Certificate.md",
      "closureGuardBeforeFinalApproval": {
        "canClose": false,
        "checks": {
          "regressionTestStatus": true,
          "finalApprovalStatus": false,
          "certificateExists": true,
          "evidenceManifest": true
        },
        "missing": [
          "finalApprovalStatus"
        ]
      },
      "regressionTestStatus": "passed",
      "testCloudVerification": {
        "status": "passed",
        "testSet": "RecallOS Test Cloud Verification",
        "checks": [
          {
            "testId": "TC-01",
            "name": "Recall trigger creates case",
            "passed": true
          },
          {
            "testId": "TC-02",
            "name": "Blast radius is correct",
            "passed": true
          },
          {
            "testId": "TC-03",
            "name": "DBOM contains faulty component",
            "passed": true
          },
          {
            "testId": "TC-04",
            "name": "APP-1042 changes to manual_review",
            "passed": true
          },
          {
            "testId": "TC-05",
            "name": "Normal low-revenue no-guarantee case remains rejected",
            "passed": true
          },
          {
            "testId": "TC-06",
            "name": "Rework loop is configured and bounded",
            "passed": true
          },
          {
            "testId": "TC-07",
            "name": "Remediation execution updates systems",
            "passed": true
          },
          {
            "testId": "TC-08",
            "name": "Failed verification blocks closure",
            "passed": true
          },
          {
            "testId": "TC-09",
            "name": "Certificate can be generated",
            "passed": true
          },
          {
            "testId": "TC-10",
            "name": "Closure guard requires approval, certificate, manifest, and passed verification",
            "passed": true
          }
        ],
        "passedCount": 10,
        "failedCount": 0
      },
      "decisionDependencyGraph": {
        "graphId": "GRAPH-RECALL-2026-001",
        "nodes": [
          {
            "id": "credit-policy-v7.1",
            "label": "Faulty policy",
            "type": "policy",
            "risk": "faulty"
          },
          {
            "id": "prompt-2026-05-19",
            "label": "Prompt",
            "type": "prompt"
          },
          {
            "id": "loan-eligibility-agent-v2.3",
            "label": "Loan agent",
            "type": "agent"
          },
          {
            "id": "credit-policy-index-2026-05",
            "label": "Retrieval index",
            "type": "retrieval_index"
          },
          {
            "id": "affected-decisions",
            "label": "64 affected decisions",
            "type": "decision_cluster"
          },
          {
            "id": "changed-outcomes",
            "label": "11 changed outcomes",
            "type": "impact_cluster"
          },
          {
            "id": "customer-facing",
            "label": "7 customer-facing cases",
            "type": "business_impact"
          },
          {
            "id": "DEC-2026-00421",
            "label": "Hero decision",
            "type": "decision",
            "severity": "high"
          },
          {
            "id": "APP-1042",
            "label": "Hero application",
            "type": "application"
          }
        ],
        "edges": [
          {
            "from": "credit-policy-v7.1",
            "to": "prompt-2026-05-19",
            "relationship": "referenced_by"
          },
          {
            "from": "prompt-2026-05-19",
            "to": "loan-eligibility-agent-v2.3",
            "relationship": "used_by"
          },
          {
            "from": "credit-policy-index-2026-05",
            "to": "loan-eligibility-agent-v2.3",
            "relationship": "retrieved_by"
          },
          {
            "from": "loan-eligibility-agent-v2.3",
            "to": "affected-decisions",
            "relationship": "produced"
          },
          {
            "from": "affected-decisions",
            "to": "changed-outcomes",
            "relationship": "replayed_into"
          },
          {
            "from": "changed-outcomes",
            "to": "customer-facing",
            "relationship": "requires_remediation"
          },
          {
            "from": "credit-policy-v7.1",
            "to": "DEC-2026-00421",
            "relationship": "used_by"
          },
          {
            "from": "DEC-2026-00421",
            "to": "APP-1042",
            "relationship": "decided"
          }
        ],
        "summary": {
          "affectedDecisions": 64,
          "changedOutcomes": 11,
          "customerFacingRemediations": 7
        }
      },
      "evidenceManifest": {
        "recallId": "RECALL-2026-001",
        "manifestVersion": "1.0",
        "artifacts": {
          "blastRadius": {
            "sha256": "9ff0fc6b7d6394804182a4df88fc8857089a5e99d893153ae5a509a6f210aeb0",
            "uri": "storage://case-snapshots/blastRadius.json"
          },
          "affectedDecisionIds": {
            "sha256": "d10a1f16bdfa96b8193b16031f5362e5f0ffece2dbcf76dadf8761191bbaaffc",
            "uri": "storage://case-snapshots/affectedDecisionIds.json"
          },
          "dbomBundle": {
            "sha256": "8660e1b42d129066a6532bce8540b5e95e39977c49a0ed3c45da7e0be6a872ef",
            "uri": "storage://case-snapshots/dbomBundle.json"
          },
          "replayBatch": {
            "sha256": "3104df03f86f33c6aeafc4f44aa37aea3aa47c35e74d83bf21906a8d3d49c1f5",
            "uri": "storage://case-snapshots/replayBatch.json"
          },
          "impactClassification": {
            "sha256": "574c8b38c3ba5a54200f8a0a53a969b1ad5a5f2aea5e5406a92c786b586311f4",
            "uri": "storage://case-snapshots/impactClassification.json"
          },
          "riskScoring": {
            "sha256": "643842d07d98dc596f8b1901b0af9ab6ccf473001ab5294844254e615abd3f0a",
            "uri": "storage://case-snapshots/riskScoring.json"
          },
          "remediationPlan": {
            "sha256": "7e0103b475a0d387ab8a001ab8bf53d9e5e3648dbfb52eba3d171b421a0c7fcc",
            "uri": "storage://case-snapshots/remediationPlan.json"
          },
          "remediationExecution": {
            "sha256": "d6836cbefe7fbd4836235079b54201a3b5024c321f15bba5f065c825d6b5e445",
            "uri": "storage://case-snapshots/remediationExecution.json"
          },
          "testCloudVerification": {
            "sha256": "ffddaee2195fbf7596ded8adb598c659c744958f4b817f93c73458cab822b014",
            "uri": "storage://case-snapshots/testCloudVerification.json"
          },
          "caseTimeline": {
            "sha256": "5ca260b084d7f7e8b8f01f9f75c037caa7622421ad9dbd84b7e7e56e69af9437",
            "uri": "storage://case-snapshots/caseTimeline.json"
          },
          "dependencyGraph": {
            "sha256": "9ee1afa1568e9bcd685a7635c846ee13d353d7884ac3ed22e49f5547f1bedaeb",
            "uri": "storage://case-snapshots/dependencyGraph.json"
          },
          "closureGuard": {
            "sha256": "34db8915ef05e7b53c5c1067b1167930fa5293c020b15326e847856c0f3bdaca",
            "uri": "storage://case-snapshots/closureGuard.json"
          }
        },
        "manifestSha256": "db577616de91aeb0afc71520e881a30f3ee6a08b889ed0cd16dc6382a3d43530",
        "certificateArtifactSha256": "c94adfc00c5286f8266247a4778b8cb9ac5a9fb9d7e20fdec0257153abc43069",
        "certificateArtifactUri": "storage://recall-certificates/AI_Decision_Recall_Certificate.md"
      },
      "finalApprovalStatus": "approved",
      "closureGuardAfterFinalApproval": {
        "canClose": true,
        "checks": {
          "regressionTestStatus": true,
          "finalApprovalStatus": true,
          "certificateExists": true,
          "evidenceManifest": true
        },
        "missing": []
      },
      "closureGuardFinal": {
        "canClose": true,
        "checks": {
          "regressionTestStatus": true,
          "finalApprovalStatus": true,
          "certificateExists": true,
          "evidenceManifest": true
        },
        "missing": []
      }
    },
    "timeline": [
      {
        "stage": "Recall Trigger Intake",
        "status": "completed",
        "note": "Recall Intake Agent classified severity high."
      },
      {
        "stage": "Faulty Component Fingerprint",
        "status": "completed",
        "note": "credit-policy-v7.1 fingerprint matched."
      },
      {
        "stage": "Blast Radius Analysis",
        "status": "completed",
        "note": "64 historical decisions matched faulty policy."
      },
      {
        "stage": "DBOM Generation",
        "status": "completed",
        "note": "Generated Decision Bill of Materials bundle."
      },
      {
        "stage": "Freeze Downstream Actions",
        "status": "completed",
        "note": "Affected records marked under AI recall."
      },
      {
        "stage": "Counterfactual Replay",
        "status": "completed",
        "note": "11 harmful auto-rejections changed to manual review."
      },
      {
        "stage": "Impact Classification & Remediation Plan",
        "status": "completed",
        "note": "Human-approved plan created."
      },
      {
        "stage": "Human Review",
        "status": "completed",
        "note": "Recall Owner, Business Owner, and Compliance approved."
      },
      {
        "stage": "Remediation Execution",
        "status": "completed",
        "note": "Mock enterprise systems updated."
      },
      {
        "stage": "Recall Verification",
        "status": "failed",
        "note": "Intentional Test Cloud gate failed and blocked case closure."
      },
      {
        "stage": "Impact Classification & Remediation Plan",
        "status": "re-entered",
        "note": "Remediation plan revised after failed verification."
      },
      {
        "stage": "Remediation Execution",
        "status": "rerun",
        "note": "Idempotent remediation rerun completed."
      },
      {
        "stage": "Recall Verification",
        "status": "completed",
        "note": "Test Cloud gate passed."
      },
      {
        "stage": "Recall Certificate & Closure",
        "status": "completed",
        "note": "Audit certificate generated and case closed."
      }
    ],
    "maxReentryCount": 2,
    "sla": {
      "caseSlaHours": 48,
      "maxReentryCount": 2,
      "stageSla": {
        "Intake": "1h",
        "Blast Radius": "4h",
        "Human Review": "8h",
        "Remediation": "24h",
        "Verification": "4h"
      },
      "demoModeStageSlaMinutes": 2
    },
    "reentryCount": 1
  },
  "affectedDecisions": [
    {
      "decisionId": "DEC-2026-00380",
      "applicationId": "APP-1001",
      "applicantId": "CUST-1801",
      "companyName": "Harbor Foods 001",
      "monthlyRevenue": 3780,
      "guaranteeType": "none",
      "originalOutcome": "rejected",
      "correctedOutcome": "rejected",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00381",
      "applicationId": "APP-1002",
      "applicantId": "CUST-1802",
      "companyName": "Cedar Robotics 002",
      "monthlyRevenue": 3960,
      "guaranteeType": "none",
      "originalOutcome": "rejected",
      "correctedOutcome": "rejected",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00382",
      "applicationId": "APP-1003",
      "applicantId": "CUST-1803",
      "companyName": "Brightline Clinic 003",
      "monthlyRevenue": 4140,
      "guaranteeType": "none",
      "originalOutcome": "rejected",
      "correctedOutcome": "rejected",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00383",
      "applicationId": "APP-1004",
      "applicantId": "CUST-1804",
      "companyName": "Canal Logistics 004",
      "monthlyRevenue": 4320,
      "guaranteeType": "none",
      "originalOutcome": "rejected",
      "correctedOutcome": "rejected",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00384",
      "applicationId": "APP-1005",
      "applicantId": "CUST-1805",
      "companyName": "Apex Labs 005",
      "monthlyRevenue": 3600,
      "guaranteeType": "none",
      "originalOutcome": "rejected",
      "correctedOutcome": "rejected",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00385",
      "applicationId": "APP-1006",
      "applicantId": "CUST-1806",
      "companyName": "Bluefield Studio 006",
      "monthlyRevenue": 3780,
      "guaranteeType": "none",
      "originalOutcome": "rejected",
      "correctedOutcome": "rejected",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00386",
      "applicationId": "APP-1007",
      "applicantId": "CUST-1807",
      "companyName": "Signal Foods 007",
      "monthlyRevenue": 4100,
      "guaranteeType": "government_guarantee",
      "originalOutcome": "rejected",
      "correctedOutcome": "manual_review",
      "severity": "high",
      "riskScore": 100,
      "riskBand": "critical",
      "riskDrivers": [
        "changed_outcome",
        "email_sent",
        "crm_closed",
        "ticket_closed",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": true,
      "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
      "crmStatus": "reopened_due_to_ai_recall",
      "ticketStatus": "reopened",
      "emailStatus": "draft_created"
    },
    {
      "decisionId": "DEC-2026-00387",
      "applicationId": "APP-1008",
      "applicantId": "CUST-1808",
      "companyName": "Northstar Robotics 008",
      "monthlyRevenue": 4140,
      "guaranteeType": "none",
      "originalOutcome": "rejected",
      "correctedOutcome": "rejected",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00388",
      "applicationId": "APP-1009",
      "applicantId": "CUST-1809",
      "companyName": "Harbor Clinic 009",
      "monthlyRevenue": 4320,
      "guaranteeType": "none",
      "originalOutcome": "rejected",
      "correctedOutcome": "rejected",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00389",
      "applicationId": "APP-1010",
      "applicantId": "CUST-1810",
      "companyName": "Cedar Logistics 010",
      "monthlyRevenue": 3600,
      "guaranteeType": "none",
      "originalOutcome": "rejected",
      "correctedOutcome": "rejected",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00390",
      "applicationId": "APP-1011",
      "applicantId": "CUST-1811",
      "companyName": "Brightline Labs 011",
      "monthlyRevenue": 3780,
      "guaranteeType": "none",
      "originalOutcome": "rejected",
      "correctedOutcome": "rejected",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00391",
      "applicationId": "APP-1012",
      "applicantId": "CUST-1812",
      "companyName": "Canal Studio 012",
      "monthlyRevenue": 3960,
      "guaranteeType": "none",
      "originalOutcome": "rejected",
      "correctedOutcome": "rejected",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00392",
      "applicationId": "APP-1013",
      "applicantId": "CUST-1813",
      "companyName": "Apex Foods 013",
      "monthlyRevenue": 4820,
      "guaranteeType": "government_guarantee",
      "originalOutcome": "rejected",
      "correctedOutcome": "manual_review",
      "severity": "high",
      "riskScore": 100,
      "riskBand": "critical",
      "riskDrivers": [
        "changed_outcome",
        "email_sent",
        "crm_closed",
        "ticket_closed",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": true,
      "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
      "crmStatus": "reopened_due_to_ai_recall",
      "ticketStatus": "reopened",
      "emailStatus": "draft_created"
    },
    {
      "decisionId": "DEC-2026-00393",
      "applicationId": "APP-1014",
      "applicantId": "CUST-1814",
      "companyName": "Bluefield Robotics 014",
      "monthlyRevenue": 4320,
      "guaranteeType": "none",
      "originalOutcome": "rejected",
      "correctedOutcome": "rejected",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant revenue is below EUR 5,000 and no approved guarantee is present; rejection remains valid.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00394",
      "applicationId": "APP-1015",
      "applicantId": "CUST-1815",
      "companyName": "Signal Clinic 015",
      "monthlyRevenue": 8640,
      "guaranteeType": "none",
      "originalOutcome": "manual_review",
      "correctedOutcome": "manual_review",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Risk score is above 0.82; corrected policy requires manual review.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00395",
      "applicationId": "APP-1016",
      "applicantId": "CUST-1816",
      "companyName": "Northstar Logistics 016",
      "monthlyRevenue": 6400,
      "guaranteeType": "none",
      "originalOutcome": "manual_review",
      "correctedOutcome": "manual_review",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Risk score is above 0.82; corrected policy requires manual review.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00396",
      "applicationId": "APP-1017",
      "applicantId": "CUST-1817",
      "companyName": "Harbor Labs 017",
      "monthlyRevenue": 6720,
      "guaranteeType": "none",
      "originalOutcome": "manual_review",
      "correctedOutcome": "manual_review",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Risk score is above 0.82; corrected policy requires manual review.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00397",
      "applicationId": "APP-1018",
      "applicantId": "CUST-1818",
      "companyName": "Cedar Studio 018",
      "monthlyRevenue": 4580,
      "guaranteeType": "university_startup_fund",
      "originalOutcome": "rejected",
      "correctedOutcome": "manual_review",
      "severity": "high",
      "riskScore": 70,
      "riskBand": "high",
      "riskDrivers": [
        "changed_outcome",
        "crm_closed",
        "ticket_closed",
        "no_human_touchpoint"
      ],
      "changed": true,
      "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
      "crmStatus": "reopened_due_to_ai_recall",
      "ticketStatus": "reopened",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00398",
      "applicationId": "APP-1019",
      "applicantId": "CUST-1819",
      "companyName": "Brightline Foods 019",
      "monthlyRevenue": 7360,
      "guaranteeType": "none",
      "originalOutcome": "manual_review",
      "correctedOutcome": "manual_review",
      "severity": "low",
      "riskScore": 5,
      "riskBand": "low",
      "riskDrivers": [
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Risk score is above 0.82; corrected policy requires manual review.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00399",
      "applicationId": "APP-1020",
      "applicantId": "CUST-1820",
      "companyName": "Canal Robotics 020",
      "monthlyRevenue": 7680,
      "guaranteeType": "none",
      "originalOutcome": "manual_review",
      "correctedOutcome": "manual_review",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Risk score is above 0.82; corrected policy requires manual review.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00400",
      "applicationId": "APP-1021",
      "applicantId": "CUST-1821",
      "companyName": "Apex Clinic 021",
      "monthlyRevenue": 8000,
      "guaranteeType": "none",
      "originalOutcome": "manual_review",
      "correctedOutcome": "manual_review",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Risk score is above 0.82; corrected policy requires manual review.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00401",
      "applicationId": "APP-1022",
      "applicantId": "CUST-1822",
      "companyName": "Bluefield Logistics 022",
      "monthlyRevenue": 8320,
      "guaranteeType": "none",
      "originalOutcome": "manual_review",
      "correctedOutcome": "manual_review",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Risk score is above 0.82; corrected policy requires manual review.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00402",
      "applicationId": "APP-1023",
      "applicantId": "CUST-1823",
      "companyName": "Signal Labs 023",
      "monthlyRevenue": 8640,
      "guaranteeType": "none",
      "originalOutcome": "manual_review",
      "correctedOutcome": "manual_review",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Risk score is above 0.82; corrected policy requires manual review.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00403",
      "applicationId": "APP-1024",
      "applicantId": "CUST-1824",
      "companyName": "Northstar Studio 024",
      "monthlyRevenue": 4460,
      "guaranteeType": "university_startup_fund",
      "originalOutcome": "rejected",
      "correctedOutcome": "manual_review",
      "severity": "high",
      "riskScore": 100,
      "riskBand": "critical",
      "riskDrivers": [
        "changed_outcome",
        "email_sent",
        "crm_closed",
        "ticket_closed",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": true,
      "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
      "crmStatus": "reopened_due_to_ai_recall",
      "ticketStatus": "reopened",
      "emailStatus": "draft_created"
    },
    {
      "decisionId": "DEC-2026-00404",
      "applicationId": "APP-1025",
      "applicantId": "CUST-1825",
      "companyName": "Harbor Foods 025",
      "monthlyRevenue": 6720,
      "guaranteeType": "none",
      "originalOutcome": "manual_review",
      "correctedOutcome": "manual_review",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Risk score is above 0.82; corrected policy requires manual review.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00405",
      "applicationId": "APP-1026",
      "applicantId": "CUST-1826",
      "companyName": "Cedar Robotics 026",
      "monthlyRevenue": 7040,
      "guaranteeType": "none",
      "originalOutcome": "manual_review",
      "correctedOutcome": "manual_review",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Risk score is above 0.82; corrected policy requires manual review.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00406",
      "applicationId": "APP-1027",
      "applicantId": "CUST-1827",
      "companyName": "Brightline Clinic 027",
      "monthlyRevenue": 10900,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00407",
      "applicationId": "APP-1028",
      "applicantId": "CUST-1828",
      "companyName": "Canal Logistics 028",
      "monthlyRevenue": 11310,
      "guaranteeType": "approved_bank_guarantee",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00408",
      "applicationId": "APP-1029",
      "applicantId": "CUST-1829",
      "companyName": "Apex Labs 029",
      "monthlyRevenue": 11720,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00409",
      "applicationId": "APP-1030",
      "applicantId": "CUST-1830",
      "companyName": "Bluefield Studio 030",
      "monthlyRevenue": 12130,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00410",
      "applicationId": "APP-1031",
      "applicantId": "CUST-1831",
      "companyName": "Signal Foods 031",
      "monthlyRevenue": 4460,
      "guaranteeType": "government_guarantee",
      "originalOutcome": "rejected",
      "correctedOutcome": "manual_review",
      "severity": "high",
      "riskScore": 80,
      "riskBand": "critical",
      "riskDrivers": [
        "changed_outcome",
        "crm_closed",
        "ticket_closed",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": true,
      "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
      "crmStatus": "reopened_due_to_ai_recall",
      "ticketStatus": "reopened",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00411",
      "applicationId": "APP-1032",
      "applicantId": "CUST-1832",
      "companyName": "Northstar Robotics 032",
      "monthlyRevenue": 12950,
      "guaranteeType": "approved_bank_guarantee",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00412",
      "applicationId": "APP-1033",
      "applicantId": "CUST-1833",
      "companyName": "Harbor Clinic 033",
      "monthlyRevenue": 13360,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00413",
      "applicationId": "APP-1034",
      "applicantId": "CUST-1834",
      "companyName": "Cedar Logistics 034",
      "monthlyRevenue": 6800,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00414",
      "applicationId": "APP-1035",
      "applicantId": "CUST-1835",
      "companyName": "Brightline Labs 035",
      "monthlyRevenue": 7210,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00415",
      "applicationId": "APP-1036",
      "applicantId": "CUST-1836",
      "companyName": "Canal Studio 036",
      "monthlyRevenue": 4220,
      "guaranteeType": "university_startup_fund",
      "originalOutcome": "rejected",
      "correctedOutcome": "manual_review",
      "severity": "high",
      "riskScore": 100,
      "riskBand": "critical",
      "riskDrivers": [
        "changed_outcome",
        "email_sent",
        "crm_closed",
        "ticket_closed",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": true,
      "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
      "crmStatus": "reopened_due_to_ai_recall",
      "ticketStatus": "reopened",
      "emailStatus": "draft_created"
    },
    {
      "decisionId": "DEC-2026-00416",
      "applicationId": "APP-1037",
      "applicantId": "CUST-1837",
      "companyName": "Apex Foods 037",
      "monthlyRevenue": 8030,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00417",
      "applicationId": "APP-1038",
      "applicantId": "CUST-1838",
      "companyName": "Bluefield Robotics 038",
      "monthlyRevenue": 8440,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 5,
      "riskBand": "low",
      "riskDrivers": [
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00418",
      "applicationId": "APP-1039",
      "applicantId": "CUST-1839",
      "companyName": "Signal Clinic 039",
      "monthlyRevenue": 8850,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 5,
      "riskBand": "low",
      "riskDrivers": [
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00419",
      "applicationId": "APP-1040",
      "applicantId": "CUST-1840",
      "companyName": "Northstar Logistics 040",
      "monthlyRevenue": 9260,
      "guaranteeType": "approved_bank_guarantee",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00420",
      "applicationId": "APP-1041",
      "applicantId": "CUST-1841",
      "companyName": "Harbor Labs 041",
      "monthlyRevenue": 9670,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00421",
      "applicationId": "APP-1042",
      "applicantId": "CUST-1842",
      "companyName": "Cedar Studio 042",
      "monthlyRevenue": 4200,
      "guaranteeType": "university_startup_fund",
      "originalOutcome": "rejected",
      "correctedOutcome": "manual_review",
      "severity": "high",
      "riskScore": 100,
      "riskBand": "critical",
      "riskDrivers": [
        "changed_outcome",
        "email_sent",
        "crm_closed",
        "ticket_closed",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": true,
      "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
      "crmStatus": "reopened_due_to_ai_recall",
      "ticketStatus": "reopened",
      "emailStatus": "draft_created"
    },
    {
      "decisionId": "DEC-2026-00422",
      "applicationId": "APP-1043",
      "applicantId": "CUST-1843",
      "companyName": "Brightline Foods 043",
      "monthlyRevenue": 10490,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00423",
      "applicationId": "APP-1044",
      "applicantId": "CUST-1844",
      "companyName": "Canal Robotics 044",
      "monthlyRevenue": 10900,
      "guaranteeType": "approved_bank_guarantee",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00424",
      "applicationId": "APP-1045",
      "applicantId": "CUST-1845",
      "companyName": "Apex Clinic 045",
      "monthlyRevenue": 11310,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00425",
      "applicationId": "APP-1046",
      "applicantId": "CUST-1846",
      "companyName": "Bluefield Logistics 046",
      "monthlyRevenue": 11720,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00426",
      "applicationId": "APP-1047",
      "applicantId": "CUST-1847",
      "companyName": "Signal Labs 047",
      "monthlyRevenue": 12130,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00427",
      "applicationId": "APP-1048",
      "applicantId": "CUST-1848",
      "companyName": "Northstar Studio 048",
      "monthlyRevenue": 4820,
      "guaranteeType": "university_startup_fund",
      "originalOutcome": "rejected",
      "correctedOutcome": "manual_review",
      "severity": "high",
      "riskScore": 55,
      "riskBand": "medium",
      "riskDrivers": [
        "changed_outcome",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": true,
      "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00428",
      "applicationId": "APP-1049",
      "applicantId": "CUST-1849",
      "companyName": "Harbor Foods 049",
      "monthlyRevenue": 12950,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00429",
      "applicationId": "APP-1050",
      "applicantId": "CUST-1850",
      "companyName": "Cedar Robotics 050",
      "monthlyRevenue": 13360,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00430",
      "applicationId": "APP-1051",
      "applicantId": "CUST-1851",
      "companyName": "Brightline Clinic 051",
      "monthlyRevenue": 6800,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00431",
      "applicationId": "APP-1052",
      "applicantId": "CUST-1852",
      "companyName": "Canal Logistics 052",
      "monthlyRevenue": 7210,
      "guaranteeType": "approved_bank_guarantee",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00432",
      "applicationId": "APP-1053",
      "applicantId": "CUST-1853",
      "companyName": "Apex Labs 053",
      "monthlyRevenue": 4580,
      "guaranteeType": "approved_bank_guarantee",
      "originalOutcome": "rejected",
      "correctedOutcome": "manual_review",
      "severity": "high",
      "riskScore": 55,
      "riskBand": "medium",
      "riskDrivers": [
        "changed_outcome",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": true,
      "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00433",
      "applicationId": "APP-1054",
      "applicantId": "CUST-1854",
      "companyName": "Bluefield Studio 054",
      "monthlyRevenue": 8030,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00434",
      "applicationId": "APP-1055",
      "applicantId": "CUST-1855",
      "companyName": "Signal Foods 055",
      "monthlyRevenue": 8440,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00435",
      "applicationId": "APP-1056",
      "applicantId": "CUST-1856",
      "companyName": "Northstar Robotics 056",
      "monthlyRevenue": 8850,
      "guaranteeType": "approved_bank_guarantee",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00436",
      "applicationId": "APP-1057",
      "applicantId": "CUST-1857",
      "companyName": "Harbor Clinic 057",
      "monthlyRevenue": 9260,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 25,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00437",
      "applicationId": "APP-1058",
      "applicantId": "CUST-1858",
      "companyName": "Cedar Logistics 058",
      "monthlyRevenue": 9670,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "high_requested_amount",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00438",
      "applicationId": "APP-1059",
      "applicantId": "CUST-1859",
      "companyName": "Brightline Labs 059",
      "monthlyRevenue": 4460,
      "guaranteeType": "approved_bank_guarantee",
      "originalOutcome": "rejected",
      "correctedOutcome": "manual_review",
      "severity": "high",
      "riskScore": 55,
      "riskBand": "medium",
      "riskDrivers": [
        "changed_outcome",
        "high_requested_amount",
        "no_human_touchpoint"
      ],
      "changed": true,
      "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    },
    {
      "decisionId": "DEC-2026-00439",
      "applicationId": "APP-1060",
      "applicantId": "CUST-1860",
      "companyName": "Canal Studio 060",
      "monthlyRevenue": 10490,
      "guaranteeType": "approved_bank_guarantee",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00440",
      "applicationId": "APP-1061",
      "applicantId": "CUST-1861",
      "companyName": "Apex Foods 061",
      "monthlyRevenue": 10900,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00441",
      "applicationId": "APP-1062",
      "applicantId": "CUST-1862",
      "companyName": "Bluefield Robotics 062",
      "monthlyRevenue": 11310,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00442",
      "applicationId": "APP-1063",
      "applicantId": "CUST-1863",
      "companyName": "Signal Clinic 063",
      "monthlyRevenue": 11720,
      "guaranteeType": "none",
      "originalOutcome": "pre_approved",
      "correctedOutcome": "pre_approved",
      "severity": "low",
      "riskScore": 15,
      "riskBand": "low",
      "riskDrivers": [
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": false,
      "reason": "Applicant passes deterministic pre-approval checks under policy v7.2.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "none"
    },
    {
      "decisionId": "DEC-2026-00443",
      "applicationId": "APP-1064",
      "applicantId": "CUST-1864",
      "companyName": "Northstar Logistics 064",
      "monthlyRevenue": 4220,
      "guaranteeType": "government_guarantee",
      "originalOutcome": "rejected",
      "correctedOutcome": "manual_review",
      "severity": "high",
      "riskScore": 55,
      "riskBand": "medium",
      "riskDrivers": [
        "changed_outcome",
        "older_than_7_days",
        "no_human_touchpoint"
      ],
      "changed": true,
      "reason": "Applicant has an approved guarantee; corrected policy v7.2 requires manual review instead of automatic rejection.",
      "crmStatus": "open",
      "ticketStatus": "none",
      "emailStatus": "frozen"
    }
  ],
  "selectedDecisionId": "DEC-2026-00421",
  "dbomsByDecision": {
    "DEC-2026-00380": {
      "dbomId": "DBOM-DEC-2026-00380",
      "decisionId": "DEC-2026-00380",
      "applicationId": "APP-1001",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 3780,
          "guaranteeType": "none",
          "companyAgeMonths": 13,
          "riskScore": 0.448
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00380",
        "application:APP-1001",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00380"
      ]
    },
    "DEC-2026-00381": {
      "dbomId": "DBOM-DEC-2026-00381",
      "decisionId": "DEC-2026-00381",
      "applicationId": "APP-1002",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 3960,
          "guaranteeType": "none",
          "companyAgeMonths": 16,
          "riskScore": 0.476
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00381",
        "application:APP-1002",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00381"
      ]
    },
    "DEC-2026-00382": {
      "dbomId": "DBOM-DEC-2026-00382",
      "decisionId": "DEC-2026-00382",
      "applicationId": "APP-1003",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4140,
          "guaranteeType": "none",
          "companyAgeMonths": 19,
          "riskScore": 0.504
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00382",
        "application:APP-1003",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00382"
      ]
    },
    "DEC-2026-00383": {
      "dbomId": "DBOM-DEC-2026-00383",
      "decisionId": "DEC-2026-00383",
      "applicationId": "APP-1004",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4320,
          "guaranteeType": "none",
          "companyAgeMonths": 22,
          "riskScore": 0.532
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00383",
        "application:APP-1004",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00383"
      ]
    },
    "DEC-2026-00384": {
      "dbomId": "DBOM-DEC-2026-00384",
      "decisionId": "DEC-2026-00384",
      "applicationId": "APP-1005",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 3600,
          "guaranteeType": "none",
          "companyAgeMonths": 25,
          "riskScore": 0.56
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00384",
        "application:APP-1005",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00384"
      ]
    },
    "DEC-2026-00385": {
      "dbomId": "DBOM-DEC-2026-00385",
      "decisionId": "DEC-2026-00385",
      "applicationId": "APP-1006",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 3780,
          "guaranteeType": "none",
          "companyAgeMonths": 28,
          "riskScore": 0.42
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00385",
        "application:APP-1006",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00385"
      ]
    },
    "DEC-2026-00386": {
      "dbomId": "DBOM-DEC-2026-00386",
      "decisionId": "DEC-2026-00386",
      "applicationId": "APP-1007",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4100,
          "guaranteeType": "government_guarantee",
          "companyAgeMonths": 31,
          "riskScore": 0.497
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": true,
        "emailDraftExists": true,
        "crmClosed": true,
        "ticketClosed": true,
        "legacyPortalClosed": true
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00386",
        "application:APP-1007",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00386"
      ]
    },
    "DEC-2026-00387": {
      "dbomId": "DBOM-DEC-2026-00387",
      "decisionId": "DEC-2026-00387",
      "applicationId": "APP-1008",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4140,
          "guaranteeType": "none",
          "companyAgeMonths": 34,
          "riskScore": 0.476
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00387",
        "application:APP-1008",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00387"
      ]
    },
    "DEC-2026-00388": {
      "dbomId": "DBOM-DEC-2026-00388",
      "decisionId": "DEC-2026-00388",
      "applicationId": "APP-1009",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4320,
          "guaranteeType": "none",
          "companyAgeMonths": 37,
          "riskScore": 0.504
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00388",
        "application:APP-1009",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00388"
      ]
    },
    "DEC-2026-00389": {
      "dbomId": "DBOM-DEC-2026-00389",
      "decisionId": "DEC-2026-00389",
      "applicationId": "APP-1010",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 3600,
          "guaranteeType": "none",
          "companyAgeMonths": 40,
          "riskScore": 0.532
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00389",
        "application:APP-1010",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00389"
      ]
    },
    "DEC-2026-00390": {
      "dbomId": "DBOM-DEC-2026-00390",
      "decisionId": "DEC-2026-00390",
      "applicationId": "APP-1011",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 3780,
          "guaranteeType": "none",
          "companyAgeMonths": 43,
          "riskScore": 0.56
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00390",
        "application:APP-1011",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00390"
      ]
    },
    "DEC-2026-00391": {
      "dbomId": "DBOM-DEC-2026-00391",
      "decisionId": "DEC-2026-00391",
      "applicationId": "APP-1012",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 3960,
          "guaranteeType": "none",
          "companyAgeMonths": 46,
          "riskScore": 0.42
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00391",
        "application:APP-1012",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00391"
      ]
    },
    "DEC-2026-00392": {
      "dbomId": "DBOM-DEC-2026-00392",
      "decisionId": "DEC-2026-00392",
      "applicationId": "APP-1013",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4820,
          "guaranteeType": "government_guarantee",
          "companyAgeMonths": 49,
          "riskScore": 0.434
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": true,
        "emailDraftExists": true,
        "crmClosed": true,
        "ticketClosed": true,
        "legacyPortalClosed": true
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00392",
        "application:APP-1013",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00392"
      ]
    },
    "DEC-2026-00393": {
      "dbomId": "DBOM-DEC-2026-00393",
      "decisionId": "DEC-2026-00393",
      "applicationId": "APP-1014",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4320,
          "guaranteeType": "none",
          "companyAgeMonths": 52,
          "riskScore": 0.476
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00393",
        "application:APP-1014",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00393"
      ]
    },
    "DEC-2026-00394": {
      "dbomId": "DBOM-DEC-2026-00394",
      "decisionId": "DEC-2026-00394",
      "applicationId": "APP-1015",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 8640,
          "guaranteeType": "none",
          "companyAgeMonths": 55,
          "riskScore": 0.84
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00394",
        "application:APP-1015",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00394"
      ]
    },
    "DEC-2026-00395": {
      "dbomId": "DBOM-DEC-2026-00395",
      "decisionId": "DEC-2026-00395",
      "applicationId": "APP-1016",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 6400,
          "guaranteeType": "none",
          "companyAgeMonths": 58,
          "riskScore": 0.858
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00395",
        "application:APP-1016",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00395"
      ]
    },
    "DEC-2026-00396": {
      "dbomId": "DBOM-DEC-2026-00396",
      "decisionId": "DEC-2026-00396",
      "applicationId": "APP-1017",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 6720,
          "guaranteeType": "none",
          "companyAgeMonths": 61,
          "riskScore": 0.876
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00396",
        "application:APP-1017",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00396"
      ]
    },
    "DEC-2026-00397": {
      "dbomId": "DBOM-DEC-2026-00397",
      "decisionId": "DEC-2026-00397",
      "applicationId": "APP-1018",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4580,
          "guaranteeType": "university_startup_fund",
          "companyAgeMonths": 64,
          "riskScore": 0.35
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": true,
        "ticketClosed": true,
        "legacyPortalClosed": true
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00397",
        "application:APP-1018",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00397"
      ]
    },
    "DEC-2026-00398": {
      "dbomId": "DBOM-DEC-2026-00398",
      "decisionId": "DEC-2026-00398",
      "applicationId": "APP-1019",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 7360,
          "guaranteeType": "none",
          "companyAgeMonths": 67,
          "riskScore": 0.912
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00398",
        "application:APP-1019",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00398"
      ]
    },
    "DEC-2026-00399": {
      "dbomId": "DBOM-DEC-2026-00399",
      "decisionId": "DEC-2026-00399",
      "applicationId": "APP-1020",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 7680,
          "guaranteeType": "none",
          "companyAgeMonths": 70,
          "riskScore": 0.84
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00399",
        "application:APP-1020",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00399"
      ]
    },
    "DEC-2026-00400": {
      "dbomId": "DBOM-DEC-2026-00400",
      "decisionId": "DEC-2026-00400",
      "applicationId": "APP-1021",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 8000,
          "guaranteeType": "none",
          "companyAgeMonths": 73,
          "riskScore": 0.858
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00400",
        "application:APP-1021",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00400"
      ]
    },
    "DEC-2026-00401": {
      "dbomId": "DBOM-DEC-2026-00401",
      "decisionId": "DEC-2026-00401",
      "applicationId": "APP-1022",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 8320,
          "guaranteeType": "none",
          "companyAgeMonths": 76,
          "riskScore": 0.876
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00401",
        "application:APP-1022",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00401"
      ]
    },
    "DEC-2026-00402": {
      "dbomId": "DBOM-DEC-2026-00402",
      "decisionId": "DEC-2026-00402",
      "applicationId": "APP-1023",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 8640,
          "guaranteeType": "none",
          "companyAgeMonths": 79,
          "riskScore": 0.894
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00402",
        "application:APP-1023",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00402"
      ]
    },
    "DEC-2026-00403": {
      "dbomId": "DBOM-DEC-2026-00403",
      "decisionId": "DEC-2026-00403",
      "applicationId": "APP-1024",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4460,
          "guaranteeType": "university_startup_fund",
          "companyAgeMonths": 10,
          "riskScore": 0.476
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": true,
        "emailDraftExists": true,
        "crmClosed": true,
        "ticketClosed": true,
        "legacyPortalClosed": true
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00403",
        "application:APP-1024",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00403"
      ]
    },
    "DEC-2026-00404": {
      "dbomId": "DBOM-DEC-2026-00404",
      "decisionId": "DEC-2026-00404",
      "applicationId": "APP-1025",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 6720,
          "guaranteeType": "none",
          "companyAgeMonths": 13,
          "riskScore": 0.84
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00404",
        "application:APP-1025",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00404"
      ]
    },
    "DEC-2026-00405": {
      "dbomId": "DBOM-DEC-2026-00405",
      "decisionId": "DEC-2026-00405",
      "applicationId": "APP-1026",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 7040,
          "guaranteeType": "none",
          "companyAgeMonths": 16,
          "riskScore": 0.858
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00405",
        "application:APP-1026",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00405"
      ]
    },
    "DEC-2026-00406": {
      "dbomId": "DBOM-DEC-2026-00406",
      "decisionId": "DEC-2026-00406",
      "applicationId": "APP-1027",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 10900,
          "guaranteeType": "none",
          "companyAgeMonths": 19,
          "riskScore": 0.341
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00406",
        "application:APP-1027",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00406"
      ]
    },
    "DEC-2026-00407": {
      "dbomId": "DBOM-DEC-2026-00407",
      "decisionId": "DEC-2026-00407",
      "applicationId": "APP-1028",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 11310,
          "guaranteeType": "approved_bank_guarantee",
          "companyAgeMonths": 22,
          "riskScore": 0.372
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00407",
        "application:APP-1028",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00407"
      ]
    },
    "DEC-2026-00408": {
      "dbomId": "DBOM-DEC-2026-00408",
      "decisionId": "DEC-2026-00408",
      "applicationId": "APP-1029",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 11720,
          "guaranteeType": "none",
          "companyAgeMonths": 25,
          "riskScore": 0.403
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00408",
        "application:APP-1029",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00408"
      ]
    },
    "DEC-2026-00409": {
      "dbomId": "DBOM-DEC-2026-00409",
      "decisionId": "DEC-2026-00409",
      "applicationId": "APP-1030",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 12130,
          "guaranteeType": "none",
          "companyAgeMonths": 28,
          "riskScore": 0.434
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00409",
        "application:APP-1030",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00409"
      ]
    },
    "DEC-2026-00410": {
      "dbomId": "DBOM-DEC-2026-00410",
      "decisionId": "DEC-2026-00410",
      "applicationId": "APP-1031",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4460,
          "guaranteeType": "government_guarantee",
          "companyAgeMonths": 31,
          "riskScore": 0.434
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": true,
        "ticketClosed": true,
        "legacyPortalClosed": true
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00410",
        "application:APP-1031",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00410"
      ]
    },
    "DEC-2026-00411": {
      "dbomId": "DBOM-DEC-2026-00411",
      "decisionId": "DEC-2026-00411",
      "applicationId": "APP-1032",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 12950,
          "guaranteeType": "approved_bank_guarantee",
          "companyAgeMonths": 34,
          "riskScore": 0.496
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00411",
        "application:APP-1032",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00411"
      ]
    },
    "DEC-2026-00412": {
      "dbomId": "DBOM-DEC-2026-00412",
      "decisionId": "DEC-2026-00412",
      "applicationId": "APP-1033",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 13360,
          "guaranteeType": "none",
          "companyAgeMonths": 37,
          "riskScore": 0.527
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00412",
        "application:APP-1033",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00412"
      ]
    },
    "DEC-2026-00413": {
      "dbomId": "DBOM-DEC-2026-00413",
      "decisionId": "DEC-2026-00413",
      "applicationId": "APP-1034",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 6800,
          "guaranteeType": "none",
          "companyAgeMonths": 40,
          "riskScore": 0.558
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00413",
        "application:APP-1034",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00413"
      ]
    },
    "DEC-2026-00414": {
      "dbomId": "DBOM-DEC-2026-00414",
      "decisionId": "DEC-2026-00414",
      "applicationId": "APP-1035",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 7210,
          "guaranteeType": "none",
          "companyAgeMonths": 43,
          "riskScore": 0.589
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00414",
        "application:APP-1035",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00414"
      ]
    },
    "DEC-2026-00415": {
      "dbomId": "DBOM-DEC-2026-00415",
      "decisionId": "DEC-2026-00415",
      "applicationId": "APP-1036",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4220,
          "guaranteeType": "university_startup_fund",
          "companyAgeMonths": 46,
          "riskScore": 0.35
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": true,
        "emailDraftExists": true,
        "crmClosed": true,
        "ticketClosed": true,
        "legacyPortalClosed": true
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00415",
        "application:APP-1036",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00415"
      ]
    },
    "DEC-2026-00416": {
      "dbomId": "DBOM-DEC-2026-00416",
      "decisionId": "DEC-2026-00416",
      "applicationId": "APP-1037",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 8030,
          "guaranteeType": "none",
          "companyAgeMonths": 49,
          "riskScore": 0.651
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00416",
        "application:APP-1037",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00416"
      ]
    },
    "DEC-2026-00417": {
      "dbomId": "DBOM-DEC-2026-00417",
      "decisionId": "DEC-2026-00417",
      "applicationId": "APP-1038",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 8440,
          "guaranteeType": "none",
          "companyAgeMonths": 52,
          "riskScore": 0.682
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00417",
        "application:APP-1038",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00417"
      ]
    },
    "DEC-2026-00418": {
      "dbomId": "DBOM-DEC-2026-00418",
      "decisionId": "DEC-2026-00418",
      "applicationId": "APP-1039",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 8850,
          "guaranteeType": "none",
          "companyAgeMonths": 55,
          "riskScore": 0.31
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00418",
        "application:APP-1039",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00418"
      ]
    },
    "DEC-2026-00419": {
      "dbomId": "DBOM-DEC-2026-00419",
      "decisionId": "DEC-2026-00419",
      "applicationId": "APP-1040",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 9260,
          "guaranteeType": "approved_bank_guarantee",
          "companyAgeMonths": 58,
          "riskScore": 0.341
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00419",
        "application:APP-1040",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00419"
      ]
    },
    "DEC-2026-00420": {
      "dbomId": "DBOM-DEC-2026-00420",
      "decisionId": "DEC-2026-00420",
      "applicationId": "APP-1041",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 9670,
          "guaranteeType": "none",
          "companyAgeMonths": 61,
          "riskScore": 0.372
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00420",
        "application:APP-1041",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00420"
      ]
    },
    "DEC-2026-00421": {
      "dbomId": "DBOM-DEC-2026-00421",
      "decisionId": "DEC-2026-00421",
      "applicationId": "APP-1042",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": true,
        "emailDraftExists": true,
        "crmClosed": true,
        "ticketClosed": true,
        "legacyPortalClosed": true
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00421",
        "application:APP-1042",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00421"
      ]
    },
    "DEC-2026-00422": {
      "dbomId": "DBOM-DEC-2026-00422",
      "decisionId": "DEC-2026-00422",
      "applicationId": "APP-1043",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 10490,
          "guaranteeType": "none",
          "companyAgeMonths": 67,
          "riskScore": 0.434
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00422",
        "application:APP-1043",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00422"
      ]
    },
    "DEC-2026-00423": {
      "dbomId": "DBOM-DEC-2026-00423",
      "decisionId": "DEC-2026-00423",
      "applicationId": "APP-1044",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 10900,
          "guaranteeType": "approved_bank_guarantee",
          "companyAgeMonths": 70,
          "riskScore": 0.465
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00423",
        "application:APP-1044",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00423"
      ]
    },
    "DEC-2026-00424": {
      "dbomId": "DBOM-DEC-2026-00424",
      "decisionId": "DEC-2026-00424",
      "applicationId": "APP-1045",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 11310,
          "guaranteeType": "none",
          "companyAgeMonths": 73,
          "riskScore": 0.496
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00424",
        "application:APP-1045",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00424"
      ]
    },
    "DEC-2026-00425": {
      "dbomId": "DBOM-DEC-2026-00425",
      "decisionId": "DEC-2026-00425",
      "applicationId": "APP-1046",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 11720,
          "guaranteeType": "none",
          "companyAgeMonths": 76,
          "riskScore": 0.527
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00425",
        "application:APP-1046",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00425"
      ]
    },
    "DEC-2026-00426": {
      "dbomId": "DBOM-DEC-2026-00426",
      "decisionId": "DEC-2026-00426",
      "applicationId": "APP-1047",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 12130,
          "guaranteeType": "none",
          "companyAgeMonths": 79,
          "riskScore": 0.558
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00426",
        "application:APP-1047",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00426"
      ]
    },
    "DEC-2026-00427": {
      "dbomId": "DBOM-DEC-2026-00427",
      "decisionId": "DEC-2026-00427",
      "applicationId": "APP-1048",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4820,
          "guaranteeType": "university_startup_fund",
          "companyAgeMonths": 10,
          "riskScore": 0.413
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00427",
        "application:APP-1048",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00427"
      ]
    },
    "DEC-2026-00428": {
      "dbomId": "DBOM-DEC-2026-00428",
      "decisionId": "DEC-2026-00428",
      "applicationId": "APP-1049",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 12950,
          "guaranteeType": "none",
          "companyAgeMonths": 13,
          "riskScore": 0.62
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00428",
        "application:APP-1049",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00428"
      ]
    },
    "DEC-2026-00429": {
      "dbomId": "DBOM-DEC-2026-00429",
      "decisionId": "DEC-2026-00429",
      "applicationId": "APP-1050",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 13360,
          "guaranteeType": "none",
          "companyAgeMonths": 16,
          "riskScore": 0.651
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00429",
        "application:APP-1050",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00429"
      ]
    },
    "DEC-2026-00430": {
      "dbomId": "DBOM-DEC-2026-00430",
      "decisionId": "DEC-2026-00430",
      "applicationId": "APP-1051",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 6800,
          "guaranteeType": "none",
          "companyAgeMonths": 19,
          "riskScore": 0.682
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00430",
        "application:APP-1051",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00430"
      ]
    },
    "DEC-2026-00431": {
      "dbomId": "DBOM-DEC-2026-00431",
      "decisionId": "DEC-2026-00431",
      "applicationId": "APP-1052",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 7210,
          "guaranteeType": "approved_bank_guarantee",
          "companyAgeMonths": 22,
          "riskScore": 0.31
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00431",
        "application:APP-1052",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00431"
      ]
    },
    "DEC-2026-00432": {
      "dbomId": "DBOM-DEC-2026-00432",
      "decisionId": "DEC-2026-00432",
      "applicationId": "APP-1053",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4580,
          "guaranteeType": "approved_bank_guarantee",
          "companyAgeMonths": 25,
          "riskScore": 0.518
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00432",
        "application:APP-1053",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00432"
      ]
    },
    "DEC-2026-00433": {
      "dbomId": "DBOM-DEC-2026-00433",
      "decisionId": "DEC-2026-00433",
      "applicationId": "APP-1054",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 8030,
          "guaranteeType": "none",
          "companyAgeMonths": 28,
          "riskScore": 0.372
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00433",
        "application:APP-1054",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00433"
      ]
    },
    "DEC-2026-00434": {
      "dbomId": "DBOM-DEC-2026-00434",
      "decisionId": "DEC-2026-00434",
      "applicationId": "APP-1055",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 8440,
          "guaranteeType": "none",
          "companyAgeMonths": 31,
          "riskScore": 0.403
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00434",
        "application:APP-1055",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00434"
      ]
    },
    "DEC-2026-00435": {
      "dbomId": "DBOM-DEC-2026-00435",
      "decisionId": "DEC-2026-00435",
      "applicationId": "APP-1056",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 8850,
          "guaranteeType": "approved_bank_guarantee",
          "companyAgeMonths": 34,
          "riskScore": 0.434
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00435",
        "application:APP-1056",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00435"
      ]
    },
    "DEC-2026-00436": {
      "dbomId": "DBOM-DEC-2026-00436",
      "decisionId": "DEC-2026-00436",
      "applicationId": "APP-1057",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 9260,
          "guaranteeType": "none",
          "companyAgeMonths": 37,
          "riskScore": 0.465
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00436",
        "application:APP-1057",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00436"
      ]
    },
    "DEC-2026-00437": {
      "dbomId": "DBOM-DEC-2026-00437",
      "decisionId": "DEC-2026-00437",
      "applicationId": "APP-1058",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 9670,
          "guaranteeType": "none",
          "companyAgeMonths": 40,
          "riskScore": 0.496
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00437",
        "application:APP-1058",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00437"
      ]
    },
    "DEC-2026-00438": {
      "dbomId": "DBOM-DEC-2026-00438",
      "decisionId": "DEC-2026-00438",
      "applicationId": "APP-1059",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4460,
          "guaranteeType": "approved_bank_guarantee",
          "companyAgeMonths": 43,
          "riskScore": 0.455
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00438",
        "application:APP-1059",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00438"
      ]
    },
    "DEC-2026-00439": {
      "dbomId": "DBOM-DEC-2026-00439",
      "decisionId": "DEC-2026-00439",
      "applicationId": "APP-1060",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 10490,
          "guaranteeType": "approved_bank_guarantee",
          "companyAgeMonths": 46,
          "riskScore": 0.558
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00439",
        "application:APP-1060",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00439"
      ]
    },
    "DEC-2026-00440": {
      "dbomId": "DBOM-DEC-2026-00440",
      "decisionId": "DEC-2026-00440",
      "applicationId": "APP-1061",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 10900,
          "guaranteeType": "none",
          "companyAgeMonths": 49,
          "riskScore": 0.589
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00440",
        "application:APP-1061",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00440"
      ]
    },
    "DEC-2026-00441": {
      "dbomId": "DBOM-DEC-2026-00441",
      "decisionId": "DEC-2026-00441",
      "applicationId": "APP-1062",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 11310,
          "guaranteeType": "none",
          "companyAgeMonths": 52,
          "riskScore": 0.62
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00441",
        "application:APP-1062",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00441"
      ]
    },
    "DEC-2026-00442": {
      "dbomId": "DBOM-DEC-2026-00442",
      "decisionId": "DEC-2026-00442",
      "applicationId": "APP-1063",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 11720,
          "guaranteeType": "none",
          "companyAgeMonths": 55,
          "riskScore": 0.651
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": false,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": false,
      "evidenceReferences": [
        "decision:DEC-2026-00442",
        "application:APP-1063",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00442"
      ]
    },
    "DEC-2026-00443": {
      "dbomId": "DBOM-DEC-2026-00443",
      "decisionId": "DEC-2026-00443",
      "applicationId": "APP-1064",
      "faultyComponent": {
        "type": "policy",
        "id": "credit-policy-v7.1",
        "matched": true
      },
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
          "monthlyRevenue": 4220,
          "guaranteeType": "government_guarantee",
          "companyAgeMonths": 58,
          "riskScore": 0.371
        },
        "toolCalls": [
          "RiskScoreAPI",
          "GuaranteeRegistryLookup"
        ],
        "retrievedDocuments": [
          "credit-policy-v7.1-section-3.2",
          "sme-lending-risk-controls-2026-01"
        ]
      },
      "downstreamImpact": {
        "emailSent": false,
        "emailDraftExists": true,
        "crmClosed": false,
        "ticketClosed": false,
        "legacyPortalClosed": false
      },
      "replayRequired": true,
      "humanReviewRequired": true,
      "evidenceReferences": [
        "decision:DEC-2026-00443",
        "application:APP-1064",
        "policy:credit-policy-v7.1",
        "policy:credit-policy-v7.1",
        "downstream:DOWN-DEC-2026-00443"
      ]
    }
  },
  "remediationPlan": {
    "remediationPlanId": "PLAN-RECALL-2026-001",
    "recallId": "RECALL-2026-001",
    "requiresHumanApproval": true,
    "actionCount": 44,
    "summary": {
      "loanCoreReopenActions": 7,
      "crmReopenActions": 7,
      "ticketReopenActions": 7,
      "emailDraftActions": 5,
      "legacyPortalActions": 7,
      "auditRegisterActions": 11
    },
    "dryRunPreview": {
      "mode": "dry_run",
      "wouldUpdateLoanCore": 7,
      "wouldReopenCrmRecords": 7,
      "wouldReopenTickets": 7,
      "wouldCreateEmailDrafts": 5,
      "wouldUpdateLegacyPortal": 7,
      "wouldWriteAuditEvents": 11,
      "blockedActions": [
        {
          "system": "Email",
          "reason": "draft_only_until_final_business_approval"
        }
      ]
    },
    "actions": [
      {
        "decisionId": "DEC-2026-00386",
        "applicationId": "APP-1007",
        "applicantId": "CUST-1807",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LoanCore",
        "action": "set_status",
        "value": "manual_review_required",
        "owner": "SME Lending Ops",
        "actionId": "ACT-001",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:LoanCore:set_status"
      },
      {
        "decisionId": "DEC-2026-00386",
        "applicationId": "APP-1007",
        "applicantId": "CUST-1807",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "CRM",
        "action": "reopen_customer_case",
        "value": "reopened_due_to_ai_recall",
        "owner": "Customer Operations",
        "actionId": "ACT-002",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:CRM:reopen_customer_case"
      },
      {
        "decisionId": "DEC-2026-00386",
        "applicationId": "APP-1007",
        "applicantId": "CUST-1807",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "TicketSystem",
        "action": "reopen_ticket",
        "value": "reopened",
        "owner": "Support Operations",
        "actionId": "ACT-003",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:TicketSystem:reopen_ticket"
      },
      {
        "decisionId": "DEC-2026-00386",
        "applicationId": "APP-1007",
        "applicantId": "CUST-1807",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LegacyPortal",
        "action": "update_register",
        "value": "AI_RECALL_REOPENED",
        "owner": "RPA Robot",
        "actionId": "ACT-004",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:LegacyPortal:update_register"
      },
      {
        "decisionId": "DEC-2026-00386",
        "applicationId": "APP-1007",
        "applicantId": "CUST-1807",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": false,
        "rollbackAction": "delete_draft_if_not_sent",
        "system": "EmailDraft",
        "action": "draft_customer_notice",
        "value": "draft_only",
        "owner": "Business Owner",
        "actionId": "ACT-005",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:EmailDraft:draft_customer_notice"
      },
      {
        "decisionId": "DEC-2026-00386",
        "applicationId": "APP-1007",
        "applicantId": "CUST-1807",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "append_reversal_audit_event",
        "system": "AuditRegister",
        "action": "write_ai_recall_event",
        "value": "corrective_action_evidence",
        "owner": "Compliance",
        "actionId": "ACT-006",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:AuditRegister:write_ai_recall_event"
      },
      {
        "decisionId": "DEC-2026-00392",
        "applicationId": "APP-1013",
        "applicantId": "CUST-1813",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LoanCore",
        "action": "set_status",
        "value": "manual_review_required",
        "owner": "SME Lending Ops",
        "actionId": "ACT-007",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:LoanCore:set_status"
      },
      {
        "decisionId": "DEC-2026-00392",
        "applicationId": "APP-1013",
        "applicantId": "CUST-1813",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "CRM",
        "action": "reopen_customer_case",
        "value": "reopened_due_to_ai_recall",
        "owner": "Customer Operations",
        "actionId": "ACT-008",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:CRM:reopen_customer_case"
      },
      {
        "decisionId": "DEC-2026-00392",
        "applicationId": "APP-1013",
        "applicantId": "CUST-1813",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "TicketSystem",
        "action": "reopen_ticket",
        "value": "reopened",
        "owner": "Support Operations",
        "actionId": "ACT-009",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:TicketSystem:reopen_ticket"
      },
      {
        "decisionId": "DEC-2026-00392",
        "applicationId": "APP-1013",
        "applicantId": "CUST-1813",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LegacyPortal",
        "action": "update_register",
        "value": "AI_RECALL_REOPENED",
        "owner": "RPA Robot",
        "actionId": "ACT-010",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:LegacyPortal:update_register"
      },
      {
        "decisionId": "DEC-2026-00392",
        "applicationId": "APP-1013",
        "applicantId": "CUST-1813",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": false,
        "rollbackAction": "delete_draft_if_not_sent",
        "system": "EmailDraft",
        "action": "draft_customer_notice",
        "value": "draft_only",
        "owner": "Business Owner",
        "actionId": "ACT-011",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:EmailDraft:draft_customer_notice"
      },
      {
        "decisionId": "DEC-2026-00392",
        "applicationId": "APP-1013",
        "applicantId": "CUST-1813",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "append_reversal_audit_event",
        "system": "AuditRegister",
        "action": "write_ai_recall_event",
        "value": "corrective_action_evidence",
        "owner": "Compliance",
        "actionId": "ACT-012",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:AuditRegister:write_ai_recall_event"
      },
      {
        "decisionId": "DEC-2026-00403",
        "applicationId": "APP-1024",
        "applicantId": "CUST-1824",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LoanCore",
        "action": "set_status",
        "value": "manual_review_required",
        "owner": "SME Lending Ops",
        "actionId": "ACT-013",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:LoanCore:set_status"
      },
      {
        "decisionId": "DEC-2026-00403",
        "applicationId": "APP-1024",
        "applicantId": "CUST-1824",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "CRM",
        "action": "reopen_customer_case",
        "value": "reopened_due_to_ai_recall",
        "owner": "Customer Operations",
        "actionId": "ACT-014",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:CRM:reopen_customer_case"
      },
      {
        "decisionId": "DEC-2026-00403",
        "applicationId": "APP-1024",
        "applicantId": "CUST-1824",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "TicketSystem",
        "action": "reopen_ticket",
        "value": "reopened",
        "owner": "Support Operations",
        "actionId": "ACT-015",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:TicketSystem:reopen_ticket"
      },
      {
        "decisionId": "DEC-2026-00403",
        "applicationId": "APP-1024",
        "applicantId": "CUST-1824",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LegacyPortal",
        "action": "update_register",
        "value": "AI_RECALL_REOPENED",
        "owner": "RPA Robot",
        "actionId": "ACT-016",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:LegacyPortal:update_register"
      },
      {
        "decisionId": "DEC-2026-00403",
        "applicationId": "APP-1024",
        "applicantId": "CUST-1824",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": false,
        "rollbackAction": "delete_draft_if_not_sent",
        "system": "EmailDraft",
        "action": "draft_customer_notice",
        "value": "draft_only",
        "owner": "Business Owner",
        "actionId": "ACT-017",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:EmailDraft:draft_customer_notice"
      },
      {
        "decisionId": "DEC-2026-00403",
        "applicationId": "APP-1024",
        "applicantId": "CUST-1824",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "append_reversal_audit_event",
        "system": "AuditRegister",
        "action": "write_ai_recall_event",
        "value": "corrective_action_evidence",
        "owner": "Compliance",
        "actionId": "ACT-018",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:AuditRegister:write_ai_recall_event"
      },
      {
        "decisionId": "DEC-2026-00415",
        "applicationId": "APP-1036",
        "applicantId": "CUST-1836",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LoanCore",
        "action": "set_status",
        "value": "manual_review_required",
        "owner": "SME Lending Ops",
        "actionId": "ACT-019",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:LoanCore:set_status"
      },
      {
        "decisionId": "DEC-2026-00415",
        "applicationId": "APP-1036",
        "applicantId": "CUST-1836",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "CRM",
        "action": "reopen_customer_case",
        "value": "reopened_due_to_ai_recall",
        "owner": "Customer Operations",
        "actionId": "ACT-020",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:CRM:reopen_customer_case"
      },
      {
        "decisionId": "DEC-2026-00415",
        "applicationId": "APP-1036",
        "applicantId": "CUST-1836",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "TicketSystem",
        "action": "reopen_ticket",
        "value": "reopened",
        "owner": "Support Operations",
        "actionId": "ACT-021",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:TicketSystem:reopen_ticket"
      },
      {
        "decisionId": "DEC-2026-00415",
        "applicationId": "APP-1036",
        "applicantId": "CUST-1836",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LegacyPortal",
        "action": "update_register",
        "value": "AI_RECALL_REOPENED",
        "owner": "RPA Robot",
        "actionId": "ACT-022",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:LegacyPortal:update_register"
      },
      {
        "decisionId": "DEC-2026-00415",
        "applicationId": "APP-1036",
        "applicantId": "CUST-1836",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": false,
        "rollbackAction": "delete_draft_if_not_sent",
        "system": "EmailDraft",
        "action": "draft_customer_notice",
        "value": "draft_only",
        "owner": "Business Owner",
        "actionId": "ACT-023",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:EmailDraft:draft_customer_notice"
      },
      {
        "decisionId": "DEC-2026-00415",
        "applicationId": "APP-1036",
        "applicantId": "CUST-1836",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "append_reversal_audit_event",
        "system": "AuditRegister",
        "action": "write_ai_recall_event",
        "value": "corrective_action_evidence",
        "owner": "Compliance",
        "actionId": "ACT-024",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:AuditRegister:write_ai_recall_event"
      },
      {
        "decisionId": "DEC-2026-00421",
        "applicationId": "APP-1042",
        "applicantId": "CUST-1842",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LoanCore",
        "action": "set_status",
        "value": "manual_review_required",
        "owner": "SME Lending Ops",
        "actionId": "ACT-025",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:LoanCore:set_status"
      },
      {
        "decisionId": "DEC-2026-00421",
        "applicationId": "APP-1042",
        "applicantId": "CUST-1842",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "CRM",
        "action": "reopen_customer_case",
        "value": "reopened_due_to_ai_recall",
        "owner": "Customer Operations",
        "actionId": "ACT-026",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:CRM:reopen_customer_case"
      },
      {
        "decisionId": "DEC-2026-00421",
        "applicationId": "APP-1042",
        "applicantId": "CUST-1842",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "TicketSystem",
        "action": "reopen_ticket",
        "value": "reopened",
        "owner": "Support Operations",
        "actionId": "ACT-027",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:TicketSystem:reopen_ticket"
      },
      {
        "decisionId": "DEC-2026-00421",
        "applicationId": "APP-1042",
        "applicantId": "CUST-1842",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LegacyPortal",
        "action": "update_register",
        "value": "AI_RECALL_REOPENED",
        "owner": "RPA Robot",
        "actionId": "ACT-028",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:LegacyPortal:update_register"
      },
      {
        "decisionId": "DEC-2026-00421",
        "applicationId": "APP-1042",
        "applicantId": "CUST-1842",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": false,
        "rollbackAction": "delete_draft_if_not_sent",
        "system": "EmailDraft",
        "action": "draft_customer_notice",
        "value": "draft_only",
        "owner": "Business Owner",
        "actionId": "ACT-029",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:EmailDraft:draft_customer_notice"
      },
      {
        "decisionId": "DEC-2026-00421",
        "applicationId": "APP-1042",
        "applicantId": "CUST-1842",
        "riskLevel": "high",
        "riskScore": 100,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "append_reversal_audit_event",
        "system": "AuditRegister",
        "action": "write_ai_recall_event",
        "value": "corrective_action_evidence",
        "owner": "Compliance",
        "actionId": "ACT-030",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:AuditRegister:write_ai_recall_event"
      },
      {
        "decisionId": "DEC-2026-00410",
        "applicationId": "APP-1031",
        "applicantId": "CUST-1831",
        "riskLevel": "high",
        "riskScore": 80,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00410",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LoanCore",
        "action": "set_status",
        "value": "manual_review_required",
        "owner": "SME Lending Ops",
        "actionId": "ACT-031",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:LoanCore:set_status"
      },
      {
        "decisionId": "DEC-2026-00410",
        "applicationId": "APP-1031",
        "applicantId": "CUST-1831",
        "riskLevel": "high",
        "riskScore": 80,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00410",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "CRM",
        "action": "reopen_customer_case",
        "value": "reopened_due_to_ai_recall",
        "owner": "Customer Operations",
        "actionId": "ACT-032",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:CRM:reopen_customer_case"
      },
      {
        "decisionId": "DEC-2026-00410",
        "applicationId": "APP-1031",
        "applicantId": "CUST-1831",
        "riskLevel": "high",
        "riskScore": 80,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00410",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "TicketSystem",
        "action": "reopen_ticket",
        "value": "reopened",
        "owner": "Support Operations",
        "actionId": "ACT-033",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:TicketSystem:reopen_ticket"
      },
      {
        "decisionId": "DEC-2026-00410",
        "applicationId": "APP-1031",
        "applicantId": "CUST-1831",
        "riskLevel": "high",
        "riskScore": 80,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00410",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LegacyPortal",
        "action": "update_register",
        "value": "AI_RECALL_REOPENED",
        "owner": "RPA Robot",
        "actionId": "ACT-034",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:LegacyPortal:update_register"
      },
      {
        "decisionId": "DEC-2026-00410",
        "applicationId": "APP-1031",
        "applicantId": "CUST-1831",
        "riskLevel": "high",
        "riskScore": 80,
        "riskBand": "critical",
        "riskDrivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00410",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "append_reversal_audit_event",
        "system": "AuditRegister",
        "action": "write_ai_recall_event",
        "value": "corrective_action_evidence",
        "owner": "Compliance",
        "actionId": "ACT-035",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:AuditRegister:write_ai_recall_event"
      },
      {
        "decisionId": "DEC-2026-00397",
        "applicationId": "APP-1018",
        "applicantId": "CUST-1818",
        "riskLevel": "high",
        "riskScore": 70,
        "riskBand": "high",
        "riskDrivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00397",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LoanCore",
        "action": "set_status",
        "value": "manual_review_required",
        "owner": "SME Lending Ops",
        "actionId": "ACT-036",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:LoanCore:set_status"
      },
      {
        "decisionId": "DEC-2026-00397",
        "applicationId": "APP-1018",
        "applicantId": "CUST-1818",
        "riskLevel": "high",
        "riskScore": 70,
        "riskBand": "high",
        "riskDrivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00397",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "CRM",
        "action": "reopen_customer_case",
        "value": "reopened_due_to_ai_recall",
        "owner": "Customer Operations",
        "actionId": "ACT-037",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:CRM:reopen_customer_case"
      },
      {
        "decisionId": "DEC-2026-00397",
        "applicationId": "APP-1018",
        "applicantId": "CUST-1818",
        "riskLevel": "high",
        "riskScore": 70,
        "riskBand": "high",
        "riskDrivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00397",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "TicketSystem",
        "action": "reopen_ticket",
        "value": "reopened",
        "owner": "Support Operations",
        "actionId": "ACT-038",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:TicketSystem:reopen_ticket"
      },
      {
        "decisionId": "DEC-2026-00397",
        "applicationId": "APP-1018",
        "applicantId": "CUST-1818",
        "riskLevel": "high",
        "riskScore": 70,
        "riskBand": "high",
        "riskDrivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00397",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "restore_previous_status",
        "system": "LegacyPortal",
        "action": "update_register",
        "value": "AI_RECALL_REOPENED",
        "owner": "RPA Robot",
        "actionId": "ACT-039",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:LegacyPortal:update_register"
      },
      {
        "decisionId": "DEC-2026-00397",
        "applicationId": "APP-1018",
        "applicantId": "CUST-1818",
        "riskLevel": "high",
        "riskScore": 70,
        "riskBand": "high",
        "riskDrivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00397",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "append_reversal_audit_event",
        "system": "AuditRegister",
        "action": "write_ai_recall_event",
        "value": "corrective_action_evidence",
        "owner": "Compliance",
        "actionId": "ACT-040",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:AuditRegister:write_ai_recall_event"
      },
      {
        "decisionId": "DEC-2026-00427",
        "applicationId": "APP-1048",
        "applicantId": "CUST-1848",
        "riskLevel": "high",
        "riskScore": 55,
        "riskBand": "medium",
        "riskDrivers": [
          "changed_outcome",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00427",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "append_reversal_audit_event",
        "system": "AuditRegister",
        "action": "write_ai_recall_event",
        "value": "corrective_action_evidence",
        "owner": "Compliance",
        "actionId": "ACT-041",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00427:AuditRegister:write_ai_recall_event"
      },
      {
        "decisionId": "DEC-2026-00432",
        "applicationId": "APP-1053",
        "applicantId": "CUST-1853",
        "riskLevel": "high",
        "riskScore": 55,
        "riskBand": "medium",
        "riskDrivers": [
          "changed_outcome",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00432",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "append_reversal_audit_event",
        "system": "AuditRegister",
        "action": "write_ai_recall_event",
        "value": "corrective_action_evidence",
        "owner": "Compliance",
        "actionId": "ACT-042",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00432:AuditRegister:write_ai_recall_event"
      },
      {
        "decisionId": "DEC-2026-00438",
        "applicationId": "APP-1059",
        "applicantId": "CUST-1859",
        "riskLevel": "high",
        "riskScore": 55,
        "riskBand": "medium",
        "riskDrivers": [
          "changed_outcome",
          "high_requested_amount",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00438",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "append_reversal_audit_event",
        "system": "AuditRegister",
        "action": "write_ai_recall_event",
        "value": "corrective_action_evidence",
        "owner": "Compliance",
        "actionId": "ACT-043",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00438:AuditRegister:write_ai_recall_event"
      },
      {
        "decisionId": "DEC-2026-00443",
        "applicationId": "APP-1064",
        "applicantId": "CUST-1864",
        "riskLevel": "high",
        "riskScore": 55,
        "riskBand": "medium",
        "riskDrivers": [
          "changed_outcome",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requiresHumanApproval": true,
        "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00443",
        "rollbackNote": "Restore previous mock-system status and append reversal audit event.",
        "status": "pending",
        "attempt": 0,
        "maxAttempts": 3,
        "safeToRetry": true,
        "rollbackAction": "append_reversal_audit_event",
        "system": "AuditRegister",
        "action": "write_ai_recall_event",
        "value": "corrective_action_evidence",
        "owner": "Compliance",
        "actionId": "ACT-044",
        "idempotencyKey": "RECALL-2026-001:DEC-2026-00443:AuditRegister:write_ai_recall_event"
      }
    ],
    "reworkNote": "Re-entered planning after failed verification; idempotent actions were safe to retry."
  },
  "emailDrafts": [
    {
      "draftId": "DRAFT-DEC-2026-00386",
      "decisionId": "DEC-2026-00386",
      "applicationId": "APP-1007",
      "mode": "draft_only",
      "subject": "Update on your SME loan application review",
      "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
    },
    {
      "draftId": "DRAFT-DEC-2026-00392",
      "decisionId": "DEC-2026-00392",
      "applicationId": "APP-1013",
      "mode": "draft_only",
      "subject": "Update on your SME loan application review",
      "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
    },
    {
      "draftId": "DRAFT-DEC-2026-00403",
      "decisionId": "DEC-2026-00403",
      "applicationId": "APP-1024",
      "mode": "draft_only",
      "subject": "Update on your SME loan application review",
      "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
    },
    {
      "draftId": "DRAFT-DEC-2026-00415",
      "decisionId": "DEC-2026-00415",
      "applicationId": "APP-1036",
      "mode": "draft_only",
      "subject": "Update on your SME loan application review",
      "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
    },
    {
      "draftId": "DRAFT-DEC-2026-00421",
      "decisionId": "DEC-2026-00421",
      "applicationId": "APP-1042",
      "mode": "draft_only",
      "subject": "Update on your SME loan application review",
      "body": "We identified that your previous automatic decision may have been affected by an incorrect policy rule. Your application has been reopened for manual review. This is not an approval notice."
    }
  ],
  "auditEvents": [
    {
      "auditEventId": "AUD-001",
      "recallId": "RECALL-2026-001",
      "decisionId": "DEC-2026-00386",
      "actionId": "ACT-006",
      "eventType": "ai_decision_recall_corrective_action",
      "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00386",
      "idempotencyKey": "RECALL-2026-001:DEC-2026-00386:AuditRegister:write_ai_recall_event"
    },
    {
      "auditEventId": "AUD-002",
      "recallId": "RECALL-2026-001",
      "decisionId": "DEC-2026-00392",
      "actionId": "ACT-012",
      "eventType": "ai_decision_recall_corrective_action",
      "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00392",
      "idempotencyKey": "RECALL-2026-001:DEC-2026-00392:AuditRegister:write_ai_recall_event"
    },
    {
      "auditEventId": "AUD-003",
      "recallId": "RECALL-2026-001",
      "decisionId": "DEC-2026-00403",
      "actionId": "ACT-018",
      "eventType": "ai_decision_recall_corrective_action",
      "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00403",
      "idempotencyKey": "RECALL-2026-001:DEC-2026-00403:AuditRegister:write_ai_recall_event"
    },
    {
      "auditEventId": "AUD-004",
      "recallId": "RECALL-2026-001",
      "decisionId": "DEC-2026-00415",
      "actionId": "ACT-024",
      "eventType": "ai_decision_recall_corrective_action",
      "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00415",
      "idempotencyKey": "RECALL-2026-001:DEC-2026-00415:AuditRegister:write_ai_recall_event"
    },
    {
      "auditEventId": "AUD-005",
      "recallId": "RECALL-2026-001",
      "decisionId": "DEC-2026-00421",
      "actionId": "ACT-030",
      "eventType": "ai_decision_recall_corrective_action",
      "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00421",
      "idempotencyKey": "RECALL-2026-001:DEC-2026-00421:AuditRegister:write_ai_recall_event"
    },
    {
      "auditEventId": "AUD-006",
      "recallId": "RECALL-2026-001",
      "decisionId": "DEC-2026-00410",
      "actionId": "ACT-035",
      "eventType": "ai_decision_recall_corrective_action",
      "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00410",
      "idempotencyKey": "RECALL-2026-001:DEC-2026-00410:AuditRegister:write_ai_recall_event"
    },
    {
      "auditEventId": "AUD-007",
      "recallId": "RECALL-2026-001",
      "decisionId": "DEC-2026-00397",
      "actionId": "ACT-040",
      "eventType": "ai_decision_recall_corrective_action",
      "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00397",
      "idempotencyKey": "RECALL-2026-001:DEC-2026-00397:AuditRegister:write_ai_recall_event"
    },
    {
      "auditEventId": "AUD-008",
      "recallId": "RECALL-2026-001",
      "decisionId": "DEC-2026-00427",
      "actionId": "ACT-041",
      "eventType": "ai_decision_recall_corrective_action",
      "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00427",
      "idempotencyKey": "RECALL-2026-001:DEC-2026-00427:AuditRegister:write_ai_recall_event"
    },
    {
      "auditEventId": "AUD-009",
      "recallId": "RECALL-2026-001",
      "decisionId": "DEC-2026-00432",
      "actionId": "ACT-042",
      "eventType": "ai_decision_recall_corrective_action",
      "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00432",
      "idempotencyKey": "RECALL-2026-001:DEC-2026-00432:AuditRegister:write_ai_recall_event"
    },
    {
      "auditEventId": "AUD-010",
      "recallId": "RECALL-2026-001",
      "decisionId": "DEC-2026-00438",
      "actionId": "ACT-043",
      "eventType": "ai_decision_recall_corrective_action",
      "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00438",
      "idempotencyKey": "RECALL-2026-001:DEC-2026-00438:AuditRegister:write_ai_recall_event"
    },
    {
      "auditEventId": "AUD-011",
      "recallId": "RECALL-2026-001",
      "decisionId": "DEC-2026-00443",
      "actionId": "ACT-044",
      "eventType": "ai_decision_recall_corrective_action",
      "evidenceReference": "DBOM-BUNDLE-RECALL-2026-001#DBOM-DEC-2026-00443",
      "idempotencyKey": "RECALL-2026-001:DEC-2026-00443:AuditRegister:write_ai_recall_event"
    }
  ],
  "riskScoring": {
    "scoredDecisionCount": 64,
    "bandCounts": {
      "critical": 6,
      "high": 1,
      "medium": 4,
      "low": 53
    },
    "potentialExposure": 282500,
    "topRisks": [
      {
        "decisionId": "DEC-2026-00386",
        "applicationId": "APP-1007",
        "applicantId": "CUST-1807",
        "riskScore": 100,
        "riskBand": "critical",
        "drivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 32500,
        "potentialExposure": 32500
      },
      {
        "decisionId": "DEC-2026-00392",
        "applicationId": "APP-1013",
        "applicantId": "CUST-1813",
        "riskScore": 100,
        "riskBand": "critical",
        "drivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 17500,
        "potentialExposure": 17500
      },
      {
        "decisionId": "DEC-2026-00403",
        "applicationId": "APP-1024",
        "applicantId": "CUST-1824",
        "riskScore": 100,
        "riskBand": "critical",
        "drivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 15000,
        "potentialExposure": 15000
      },
      {
        "decisionId": "DEC-2026-00415",
        "applicationId": "APP-1036",
        "applicantId": "CUST-1836",
        "riskScore": 100,
        "riskBand": "critical",
        "drivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 15000,
        "potentialExposure": 15000
      },
      {
        "decisionId": "DEC-2026-00421",
        "applicationId": "APP-1042",
        "applicantId": "CUST-1842",
        "riskScore": 100,
        "riskBand": "critical",
        "drivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 30000,
        "potentialExposure": 30000
      },
      {
        "decisionId": "DEC-2026-00410",
        "applicationId": "APP-1031",
        "applicantId": "CUST-1831",
        "riskScore": 80,
        "riskBand": "critical",
        "drivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 32500,
        "potentialExposure": 32500
      },
      {
        "decisionId": "DEC-2026-00397",
        "applicationId": "APP-1018",
        "applicantId": "CUST-1818",
        "riskScore": 70,
        "riskBand": "high",
        "drivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "no_human_touchpoint"
        ],
        "requestedAmount": 30000,
        "potentialExposure": 30000
      },
      {
        "decisionId": "DEC-2026-00427",
        "applicationId": "APP-1048",
        "applicantId": "CUST-1848",
        "riskScore": 55,
        "riskBand": "medium",
        "drivers": [
          "changed_outcome",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 15000,
        "potentialExposure": 15000
      },
      {
        "decisionId": "DEC-2026-00432",
        "applicationId": "APP-1053",
        "applicantId": "CUST-1853",
        "riskScore": 55,
        "riskBand": "medium",
        "drivers": [
          "changed_outcome",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 27500,
        "potentialExposure": 27500
      },
      {
        "decisionId": "DEC-2026-00438",
        "applicationId": "APP-1059",
        "applicantId": "CUST-1859",
        "riskScore": 55,
        "riskBand": "medium",
        "drivers": [
          "changed_outcome",
          "high_requested_amount",
          "no_human_touchpoint"
        ],
        "requestedAmount": 42500,
        "potentialExposure": 42500
      },
      {
        "decisionId": "DEC-2026-00443",
        "applicationId": "APP-1064",
        "applicantId": "CUST-1864",
        "riskScore": 55,
        "riskBand": "medium",
        "drivers": [
          "changed_outcome",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 25000,
        "potentialExposure": 25000
      },
      {
        "decisionId": "DEC-2026-00387",
        "applicationId": "APP-1008",
        "applicantId": "CUST-1808",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 35000,
        "potentialExposure": 0
      }
    ],
    "scoresByDecision": {
      "DEC-2026-00386": {
        "decisionId": "DEC-2026-00386",
        "applicationId": "APP-1007",
        "applicantId": "CUST-1807",
        "riskScore": 100,
        "riskBand": "critical",
        "drivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 32500,
        "potentialExposure": 32500
      },
      "DEC-2026-00392": {
        "decisionId": "DEC-2026-00392",
        "applicationId": "APP-1013",
        "applicantId": "CUST-1813",
        "riskScore": 100,
        "riskBand": "critical",
        "drivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 17500,
        "potentialExposure": 17500
      },
      "DEC-2026-00403": {
        "decisionId": "DEC-2026-00403",
        "applicationId": "APP-1024",
        "applicantId": "CUST-1824",
        "riskScore": 100,
        "riskBand": "critical",
        "drivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 15000,
        "potentialExposure": 15000
      },
      "DEC-2026-00415": {
        "decisionId": "DEC-2026-00415",
        "applicationId": "APP-1036",
        "applicantId": "CUST-1836",
        "riskScore": 100,
        "riskBand": "critical",
        "drivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 15000,
        "potentialExposure": 15000
      },
      "DEC-2026-00421": {
        "decisionId": "DEC-2026-00421",
        "applicationId": "APP-1042",
        "applicantId": "CUST-1842",
        "riskScore": 100,
        "riskBand": "critical",
        "drivers": [
          "changed_outcome",
          "email_sent",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 30000,
        "potentialExposure": 30000
      },
      "DEC-2026-00410": {
        "decisionId": "DEC-2026-00410",
        "applicationId": "APP-1031",
        "applicantId": "CUST-1831",
        "riskScore": 80,
        "riskBand": "critical",
        "drivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 32500,
        "potentialExposure": 32500
      },
      "DEC-2026-00397": {
        "decisionId": "DEC-2026-00397",
        "applicationId": "APP-1018",
        "applicantId": "CUST-1818",
        "riskScore": 70,
        "riskBand": "high",
        "drivers": [
          "changed_outcome",
          "crm_closed",
          "ticket_closed",
          "no_human_touchpoint"
        ],
        "requestedAmount": 30000,
        "potentialExposure": 30000
      },
      "DEC-2026-00427": {
        "decisionId": "DEC-2026-00427",
        "applicationId": "APP-1048",
        "applicantId": "CUST-1848",
        "riskScore": 55,
        "riskBand": "medium",
        "drivers": [
          "changed_outcome",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 15000,
        "potentialExposure": 15000
      },
      "DEC-2026-00432": {
        "decisionId": "DEC-2026-00432",
        "applicationId": "APP-1053",
        "applicantId": "CUST-1853",
        "riskScore": 55,
        "riskBand": "medium",
        "drivers": [
          "changed_outcome",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 27500,
        "potentialExposure": 27500
      },
      "DEC-2026-00438": {
        "decisionId": "DEC-2026-00438",
        "applicationId": "APP-1059",
        "applicantId": "CUST-1859",
        "riskScore": 55,
        "riskBand": "medium",
        "drivers": [
          "changed_outcome",
          "high_requested_amount",
          "no_human_touchpoint"
        ],
        "requestedAmount": 42500,
        "potentialExposure": 42500
      },
      "DEC-2026-00443": {
        "decisionId": "DEC-2026-00443",
        "applicationId": "APP-1064",
        "applicantId": "CUST-1864",
        "riskScore": 55,
        "riskBand": "medium",
        "drivers": [
          "changed_outcome",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 25000,
        "potentialExposure": 25000
      },
      "DEC-2026-00387": {
        "decisionId": "DEC-2026-00387",
        "applicationId": "APP-1008",
        "applicantId": "CUST-1808",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 35000,
        "potentialExposure": 0
      },
      "DEC-2026-00388": {
        "decisionId": "DEC-2026-00388",
        "applicationId": "APP-1009",
        "applicantId": "CUST-1809",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 37500,
        "potentialExposure": 0
      },
      "DEC-2026-00389": {
        "decisionId": "DEC-2026-00389",
        "applicationId": "APP-1010",
        "applicantId": "CUST-1810",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 40000,
        "potentialExposure": 0
      },
      "DEC-2026-00390": {
        "decisionId": "DEC-2026-00390",
        "applicationId": "APP-1011",
        "applicantId": "CUST-1811",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 42500,
        "potentialExposure": 0
      },
      "DEC-2026-00399": {
        "decisionId": "DEC-2026-00399",
        "applicationId": "APP-1020",
        "applicantId": "CUST-1820",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 35000,
        "potentialExposure": 0
      },
      "DEC-2026-00400": {
        "decisionId": "DEC-2026-00400",
        "applicationId": "APP-1021",
        "applicantId": "CUST-1821",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 37500,
        "potentialExposure": 0
      },
      "DEC-2026-00401": {
        "decisionId": "DEC-2026-00401",
        "applicationId": "APP-1022",
        "applicantId": "CUST-1822",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 40000,
        "potentialExposure": 0
      },
      "DEC-2026-00402": {
        "decisionId": "DEC-2026-00402",
        "applicationId": "APP-1023",
        "applicantId": "CUST-1823",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 42500,
        "potentialExposure": 0
      },
      "DEC-2026-00411": {
        "decisionId": "DEC-2026-00411",
        "applicationId": "APP-1032",
        "applicantId": "CUST-1832",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 35000,
        "potentialExposure": 0
      },
      "DEC-2026-00412": {
        "decisionId": "DEC-2026-00412",
        "applicationId": "APP-1033",
        "applicantId": "CUST-1833",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 37500,
        "potentialExposure": 0
      },
      "DEC-2026-00413": {
        "decisionId": "DEC-2026-00413",
        "applicationId": "APP-1034",
        "applicantId": "CUST-1834",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 40000,
        "potentialExposure": 0
      },
      "DEC-2026-00414": {
        "decisionId": "DEC-2026-00414",
        "applicationId": "APP-1035",
        "applicantId": "CUST-1835",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 42500,
        "potentialExposure": 0
      },
      "DEC-2026-00423": {
        "decisionId": "DEC-2026-00423",
        "applicationId": "APP-1044",
        "applicantId": "CUST-1844",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 35000,
        "potentialExposure": 0
      },
      "DEC-2026-00424": {
        "decisionId": "DEC-2026-00424",
        "applicationId": "APP-1045",
        "applicantId": "CUST-1845",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 37500,
        "potentialExposure": 0
      },
      "DEC-2026-00425": {
        "decisionId": "DEC-2026-00425",
        "applicationId": "APP-1046",
        "applicantId": "CUST-1846",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 40000,
        "potentialExposure": 0
      },
      "DEC-2026-00426": {
        "decisionId": "DEC-2026-00426",
        "applicationId": "APP-1047",
        "applicantId": "CUST-1847",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 42500,
        "potentialExposure": 0
      },
      "DEC-2026-00435": {
        "decisionId": "DEC-2026-00435",
        "applicationId": "APP-1056",
        "applicantId": "CUST-1856",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 35000,
        "potentialExposure": 0
      },
      "DEC-2026-00436": {
        "decisionId": "DEC-2026-00436",
        "applicationId": "APP-1057",
        "applicantId": "CUST-1857",
        "riskScore": 25,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 37500,
        "potentialExposure": 0
      },
      "DEC-2026-00380": {
        "decisionId": "DEC-2026-00380",
        "applicationId": "APP-1001",
        "applicantId": "CUST-1801",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 17500,
        "potentialExposure": 0
      },
      "DEC-2026-00381": {
        "decisionId": "DEC-2026-00381",
        "applicationId": "APP-1002",
        "applicantId": "CUST-1802",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 20000,
        "potentialExposure": 0
      },
      "DEC-2026-00382": {
        "decisionId": "DEC-2026-00382",
        "applicationId": "APP-1003",
        "applicantId": "CUST-1803",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 22500,
        "potentialExposure": 0
      },
      "DEC-2026-00383": {
        "decisionId": "DEC-2026-00383",
        "applicationId": "APP-1004",
        "applicantId": "CUST-1804",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 25000,
        "potentialExposure": 0
      },
      "DEC-2026-00384": {
        "decisionId": "DEC-2026-00384",
        "applicationId": "APP-1005",
        "applicantId": "CUST-1805",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 27500,
        "potentialExposure": 0
      },
      "DEC-2026-00385": {
        "decisionId": "DEC-2026-00385",
        "applicationId": "APP-1006",
        "applicantId": "CUST-1806",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 30000,
        "potentialExposure": 0
      },
      "DEC-2026-00391": {
        "decisionId": "DEC-2026-00391",
        "applicationId": "APP-1012",
        "applicantId": "CUST-1812",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 15000,
        "potentialExposure": 0
      },
      "DEC-2026-00393": {
        "decisionId": "DEC-2026-00393",
        "applicationId": "APP-1014",
        "applicantId": "CUST-1814",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 20000,
        "potentialExposure": 0
      },
      "DEC-2026-00394": {
        "decisionId": "DEC-2026-00394",
        "applicationId": "APP-1015",
        "applicantId": "CUST-1815",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 22500,
        "potentialExposure": 0
      },
      "DEC-2026-00395": {
        "decisionId": "DEC-2026-00395",
        "applicationId": "APP-1016",
        "applicantId": "CUST-1816",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 25000,
        "potentialExposure": 0
      },
      "DEC-2026-00396": {
        "decisionId": "DEC-2026-00396",
        "applicationId": "APP-1017",
        "applicantId": "CUST-1817",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 27500,
        "potentialExposure": 0
      },
      "DEC-2026-00404": {
        "decisionId": "DEC-2026-00404",
        "applicationId": "APP-1025",
        "applicantId": "CUST-1825",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 17500,
        "potentialExposure": 0
      },
      "DEC-2026-00405": {
        "decisionId": "DEC-2026-00405",
        "applicationId": "APP-1026",
        "applicantId": "CUST-1826",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 20000,
        "potentialExposure": 0
      },
      "DEC-2026-00406": {
        "decisionId": "DEC-2026-00406",
        "applicationId": "APP-1027",
        "applicantId": "CUST-1827",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 22500,
        "potentialExposure": 0
      },
      "DEC-2026-00407": {
        "decisionId": "DEC-2026-00407",
        "applicationId": "APP-1028",
        "applicantId": "CUST-1828",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 25000,
        "potentialExposure": 0
      },
      "DEC-2026-00408": {
        "decisionId": "DEC-2026-00408",
        "applicationId": "APP-1029",
        "applicantId": "CUST-1829",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 27500,
        "potentialExposure": 0
      },
      "DEC-2026-00409": {
        "decisionId": "DEC-2026-00409",
        "applicationId": "APP-1030",
        "applicantId": "CUST-1830",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 30000,
        "potentialExposure": 0
      },
      "DEC-2026-00416": {
        "decisionId": "DEC-2026-00416",
        "applicationId": "APP-1037",
        "applicantId": "CUST-1837",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 17500,
        "potentialExposure": 0
      },
      "DEC-2026-00419": {
        "decisionId": "DEC-2026-00419",
        "applicationId": "APP-1040",
        "applicantId": "CUST-1840",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 25000,
        "potentialExposure": 0
      },
      "DEC-2026-00420": {
        "decisionId": "DEC-2026-00420",
        "applicationId": "APP-1041",
        "applicantId": "CUST-1841",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 27500,
        "potentialExposure": 0
      },
      "DEC-2026-00422": {
        "decisionId": "DEC-2026-00422",
        "applicationId": "APP-1043",
        "applicantId": "CUST-1843",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 32500,
        "potentialExposure": 0
      },
      "DEC-2026-00428": {
        "decisionId": "DEC-2026-00428",
        "applicationId": "APP-1049",
        "applicantId": "CUST-1849",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 17500,
        "potentialExposure": 0
      },
      "DEC-2026-00429": {
        "decisionId": "DEC-2026-00429",
        "applicationId": "APP-1050",
        "applicantId": "CUST-1850",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 20000,
        "potentialExposure": 0
      },
      "DEC-2026-00430": {
        "decisionId": "DEC-2026-00430",
        "applicationId": "APP-1051",
        "applicantId": "CUST-1851",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 22500,
        "potentialExposure": 0
      },
      "DEC-2026-00431": {
        "decisionId": "DEC-2026-00431",
        "applicationId": "APP-1052",
        "applicantId": "CUST-1852",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 25000,
        "potentialExposure": 0
      },
      "DEC-2026-00433": {
        "decisionId": "DEC-2026-00433",
        "applicationId": "APP-1054",
        "applicantId": "CUST-1854",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 30000,
        "potentialExposure": 0
      },
      "DEC-2026-00434": {
        "decisionId": "DEC-2026-00434",
        "applicationId": "APP-1055",
        "applicantId": "CUST-1855",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 32500,
        "potentialExposure": 0
      },
      "DEC-2026-00437": {
        "decisionId": "DEC-2026-00437",
        "applicationId": "APP-1058",
        "applicantId": "CUST-1858",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "high_requested_amount",
          "no_human_touchpoint"
        ],
        "requestedAmount": 40000,
        "potentialExposure": 0
      },
      "DEC-2026-00439": {
        "decisionId": "DEC-2026-00439",
        "applicationId": "APP-1060",
        "applicantId": "CUST-1860",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 15000,
        "potentialExposure": 0
      },
      "DEC-2026-00440": {
        "decisionId": "DEC-2026-00440",
        "applicationId": "APP-1061",
        "applicantId": "CUST-1861",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 17500,
        "potentialExposure": 0
      },
      "DEC-2026-00441": {
        "decisionId": "DEC-2026-00441",
        "applicationId": "APP-1062",
        "applicantId": "CUST-1862",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 20000,
        "potentialExposure": 0
      },
      "DEC-2026-00442": {
        "decisionId": "DEC-2026-00442",
        "applicationId": "APP-1063",
        "applicantId": "CUST-1863",
        "riskScore": 15,
        "riskBand": "low",
        "drivers": [
          "older_than_7_days",
          "no_human_touchpoint"
        ],
        "requestedAmount": 22500,
        "potentialExposure": 0
      },
      "DEC-2026-00398": {
        "decisionId": "DEC-2026-00398",
        "applicationId": "APP-1019",
        "applicantId": "CUST-1819",
        "riskScore": 5,
        "riskBand": "low",
        "drivers": [
          "no_human_touchpoint"
        ],
        "requestedAmount": 32500,
        "potentialExposure": 0
      },
      "DEC-2026-00417": {
        "decisionId": "DEC-2026-00417",
        "applicationId": "APP-1038",
        "applicantId": "CUST-1838",
        "riskScore": 5,
        "riskBand": "low",
        "drivers": [
          "no_human_touchpoint"
        ],
        "requestedAmount": 20000,
        "potentialExposure": 0
      },
      "DEC-2026-00418": {
        "decisionId": "DEC-2026-00418",
        "applicationId": "APP-1039",
        "applicantId": "CUST-1839",
        "riskScore": 5,
        "riskBand": "low",
        "drivers": [
          "no_human_touchpoint"
        ],
        "requestedAmount": 22500,
        "potentialExposure": 0
      }
    }
  },
  "evidenceManifest": {
    "recallId": "RECALL-2026-001",
    "manifestVersion": "1.0",
    "artifacts": {
      "blastRadius": {
        "sha256": "9ff0fc6b7d6394804182a4df88fc8857089a5e99d893153ae5a509a6f210aeb0",
        "uri": "storage://case-snapshots/blastRadius.json"
      },
      "affectedDecisionIds": {
        "sha256": "d10a1f16bdfa96b8193b16031f5362e5f0ffece2dbcf76dadf8761191bbaaffc",
        "uri": "storage://case-snapshots/affectedDecisionIds.json"
      },
      "dbomBundle": {
        "sha256": "8660e1b42d129066a6532bce8540b5e95e39977c49a0ed3c45da7e0be6a872ef",
        "uri": "storage://case-snapshots/dbomBundle.json"
      },
      "replayBatch": {
        "sha256": "3104df03f86f33c6aeafc4f44aa37aea3aa47c35e74d83bf21906a8d3d49c1f5",
        "uri": "storage://case-snapshots/replayBatch.json"
      },
      "impactClassification": {
        "sha256": "574c8b38c3ba5a54200f8a0a53a969b1ad5a5f2aea5e5406a92c786b586311f4",
        "uri": "storage://case-snapshots/impactClassification.json"
      },
      "riskScoring": {
        "sha256": "643842d07d98dc596f8b1901b0af9ab6ccf473001ab5294844254e615abd3f0a",
        "uri": "storage://case-snapshots/riskScoring.json"
      },
      "remediationPlan": {
        "sha256": "7e0103b475a0d387ab8a001ab8bf53d9e5e3648dbfb52eba3d171b421a0c7fcc",
        "uri": "storage://case-snapshots/remediationPlan.json"
      },
      "remediationExecution": {
        "sha256": "d6836cbefe7fbd4836235079b54201a3b5024c321f15bba5f065c825d6b5e445",
        "uri": "storage://case-snapshots/remediationExecution.json"
      },
      "testCloudVerification": {
        "sha256": "ffddaee2195fbf7596ded8adb598c659c744958f4b817f93c73458cab822b014",
        "uri": "storage://case-snapshots/testCloudVerification.json"
      },
      "caseTimeline": {
        "sha256": "5ca260b084d7f7e8b8f01f9f75c037caa7622421ad9dbd84b7e7e56e69af9437",
        "uri": "storage://case-snapshots/caseTimeline.json"
      },
      "dependencyGraph": {
        "sha256": "9ee1afa1568e9bcd685a7635c846ee13d353d7884ac3ed22e49f5547f1bedaeb",
        "uri": "storage://case-snapshots/dependencyGraph.json"
      },
      "closureGuard": {
        "sha256": "34db8915ef05e7b53c5c1067b1167930fa5293c020b15326e847856c0f3bdaca",
        "uri": "storage://case-snapshots/closureGuard.json"
      }
    },
    "manifestSha256": "db577616de91aeb0afc71520e881a30f3ee6a08b889ed0cd16dc6382a3d43530",
    "certificateArtifactSha256": "c94adfc00c5286f8266247a4778b8cb9ac5a9fb9d7e20fdec0257153abc43069",
    "certificateArtifactUri": "storage://recall-certificates/AI_Decision_Recall_Certificate.md"
  },
  "dependencyGraph": {
    "graphId": "GRAPH-RECALL-2026-001",
    "nodes": [
      {
        "id": "credit-policy-v7.1",
        "label": "Faulty policy",
        "type": "policy",
        "risk": "faulty"
      },
      {
        "id": "prompt-2026-05-19",
        "label": "Prompt",
        "type": "prompt"
      },
      {
        "id": "loan-eligibility-agent-v2.3",
        "label": "Loan agent",
        "type": "agent"
      },
      {
        "id": "credit-policy-index-2026-05",
        "label": "Retrieval index",
        "type": "retrieval_index"
      },
      {
        "id": "affected-decisions",
        "label": "64 affected decisions",
        "type": "decision_cluster"
      },
      {
        "id": "changed-outcomes",
        "label": "11 changed outcomes",
        "type": "impact_cluster"
      },
      {
        "id": "customer-facing",
        "label": "7 customer-facing cases",
        "type": "business_impact"
      },
      {
        "id": "DEC-2026-00421",
        "label": "Hero decision",
        "type": "decision",
        "severity": "high"
      },
      {
        "id": "APP-1042",
        "label": "Hero application",
        "type": "application"
      }
    ],
    "edges": [
      {
        "from": "credit-policy-v7.1",
        "to": "prompt-2026-05-19",
        "relationship": "referenced_by"
      },
      {
        "from": "prompt-2026-05-19",
        "to": "loan-eligibility-agent-v2.3",
        "relationship": "used_by"
      },
      {
        "from": "credit-policy-index-2026-05",
        "to": "loan-eligibility-agent-v2.3",
        "relationship": "retrieved_by"
      },
      {
        "from": "loan-eligibility-agent-v2.3",
        "to": "affected-decisions",
        "relationship": "produced"
      },
      {
        "from": "affected-decisions",
        "to": "changed-outcomes",
        "relationship": "replayed_into"
      },
      {
        "from": "changed-outcomes",
        "to": "customer-facing",
        "relationship": "requires_remediation"
      },
      {
        "from": "credit-policy-v7.1",
        "to": "DEC-2026-00421",
        "relationship": "used_by"
      },
      {
        "from": "DEC-2026-00421",
        "to": "APP-1042",
        "relationship": "decided"
      }
    ],
    "summary": {
      "affectedDecisions": 64,
      "changedOutcomes": 11,
      "customerFacingRemediations": 7
    }
  },
  "certificateMarkdown": "# AI Decision Recall Certificate\n\nRecall ID: RECALL-2026-001\nFaulty Component: credit-policy-v7.1\nCorrected Component: credit-policy-v7.2\nBusiness Domain: SME lending\n\n## 1. Trigger\nInternal audit detected incorrect automatic rejection logic in credit-policy-v7.1.\n\n## 2. Blast Radius\n- Total decisions scanned: 120\n- Decisions using faulty component: 64\n- Changed outcomes after replay: 11\n- High-risk customer-facing cases: 7\n\n## 3. Decision Bill of Materials\nDBOM bundle: DBOM-BUNDLE-RECALL-2026-001\nEvidence references are available for every affected decision, including DEC-2026-00421.\n\n## 4. Counterfactual Replay\nCorrected policy replay completed. APP-1042 changed from rejected to manual_review because the applicant has an approved university startup guarantee.\n\n## 5. Human Review\nRecall Owner: approved\nBusiness Owner: approved\nCompliance Reviewer: approved\n\n## 6. Remediation\n- LoanCore reopen actions: 7\n- CRM reopen actions: 7\n- Ticket reopen actions: 7\n- Customer notice drafts: 5\n- Legacy portal robot updates: 7\n- Audit register events: 11\n\n## 7. Verification\nTest Cloud recall verification: passed\nRegression tests: passed\n\n## 8. Tamper-evident Evidence Chain\nEvidence manifest SHA-256: db577616de91aeb0afc71520e881a30f3ee6a08b889ed0cd16dc6382a3d43530\nCertificate artifact URI: storage://recall-certificates/AI_Decision_Recall_Certificate.md\nCertificate artifact SHA-256 is stored in the case evidence manifest after final file write.\n\n## 9. Remaining Risk\nNo unresolved high-risk affected decisions remain in the mock systems.\nCustomer communication is draft-only pending final business communication approval.\n"
};
