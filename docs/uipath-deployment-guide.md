# UiPath Automation Cloud Deployment Guide

This repository contains the local reference implementation. The steps below
map it into a fully productized UiPath Automation Cloud implementation.

For the live hackathon submission evidence already captured, see
`docs/uipath-cloud-evidence.md`: package `Solution 1` version `1.0.0`,
deployment to `Shared / Solution 1`, process `Maestro BPMN`, and successful
Orchestrator job `7f3a8d31-355a-4c61-8eae-766ae7957be7`.

Video upload, Devpost video-link entry, and final Devpost submission remain
owner-account actions.

## 1. Orchestrator Setup

Create folder:

```text
RecallOS-Demo
```

Assets:

```text
CurrentPolicyVersion = credit-policy-v7.2
FaultyPolicyVersion = credit-policy-v7.1
MaxReentryCount = 2
EmailMode = draft_only
DemoMode = true
```

Queues:

```text
recall-replay-batch
remediation-actions
audit-events
```

Storage buckets:

```text
dbom-bundles
recall-certificates
demo-screenshots
```

## 2. Data Service Entities

Create entities that mirror:

- `AIDecisionRecallCase`
- `DecisionRecord`
- `DecisionBOM`
- `ReplayResult`
- `RemediationAction`
- `AuditEvent`

Load seed data from `seed-data/*.json`.

## 3. Coded Agents

Package the logic from:

- `coded-agents/blast-radius-agent/agent.py`
- `coded-agents/dbom-generator-agent/agent.py`
- `coded-agents/counterfactual-replay-agent/agent.py`
- `coded-agents/remediation-planner-agent/agent.py`

Each agent accepts JSON input and returns JSON output matching `maestro/stage-contracts.md`.

## 4. Agent Builder

Create four low-code agents using `agent-builder/prompts.md`:

- Recall Intake Agent
- Impact Classification Agent
- Customer Communication Agent
- Audit Summary Agent

Set JSON-only output and enable escalation for missing evidence or risky
communication language.

## 5. API Workflows

Create Studio Web API workflows using contracts in `api-workflows/contracts.md`:

- SearchDecisionsByComponent
- FreezeDownstreamActions
- RemediationExecution
- WriteAuditRegister

Return structured recoverable errors rather than silent failures.

## 6. Maestro Case

Use:

- `maestro/case-schema.json`
- `maestro/stage-contracts.md`
- `maestro/rules.md`

Configure stages in this order:

```text
Intake -> Fingerprint -> Blast Radius -> DBOM -> Freeze -> Replay
-> Impact and Plan -> Human Review -> Remediation -> Verification
-> Certificate -> Closure
```

Enable rework loops:

- Human asks for more evidence -> Blast Radius.
- Human rejects plan -> Remediation Plan.
- Test Cloud fails -> Remediation Plan if `reentryCount < 2`.
- Too many failures -> Senior Recall Board.

## 7. Test Cloud

Create the tests from `testcloud/test-cases.md`. The local unittest suite is
the reference oracle. The in-case verification emits TC-01 through TC-10 and
blocks closure until the gate passes.

## 8. Evidence, Risk, and Graph Artifacts

Store these JSON artifacts in Orchestrator storage buckets or Data Service:

- Evidence manifest from `computedFields.evidenceManifest`
- Decision dependency graph from `computedFields.decisionDependencyGraph`
- Risk scoring bundle from `computedFields.riskScoring`

The Recall Control Tower displays these in the Evidence Chain, Dependency
Graph, and Risk & Exposure tabs.

## 9. Demo Readiness

Before recording:

```bash
python3 scripts/generate_seed_data.py
python3 scripts/run_recall_case.py --write-app-data --simulate-first-test-failure
python3 -m unittest discover -s tests
```

Confirm Automation Cloud shows:

- Maestro case created.
- 64 affected decisions.
- DBOM bundle generated.
- 11 changed outcomes.
- Human approval.
- Remediation actions completed.
- Test Cloud verification passed.
- Certificate generated.
