# Prompt Log

## Prompt 1: Build RecallOS local prototype

Request: implement the provided RecallOS plan end to end, including seed data,
coded agents, mock API workflows, Maestro contracts, test plan, UI, certificate,
deck, and submission materials.

Integrated outputs:

- `scripts/generate_seed_data.py`
- `recallos_core/policy.py`
- `recallos_core/agents.py`
- `coded-agents/*/agent.py`
- `api-workflows/*/workflow.py`

## Prompt 2: Verify all frontend and backend

Request: carefully run the whole project from start to finish and make sure the
frontend and backend work.

Integrated outputs:

- `scripts/validate_all.py`
- Updated README validation instructions.
- Browser-verified Control Tower static UI.

## Prompt 3: Apply review recommendations

Request: continue modifying the project according to the review suggestions.

Integrated outputs:

- 10 Test Cloud-style verification checks.
- Rework timeline with failed, re-entered, rerun, and passed stages.
- Tamper-evident evidence manifest.
- Decision dependency graph.
- Deterministic recall risk score.
- Remediation idempotency, retry, rollback, and dry-run preview metadata.
- New Control Tower tabs: Dependency Graph, Evidence Chain, Risk & Exposure.

## Prompt 4: Submission hardening

Request: refresh outputs, package the project, and keep manual cloud steps
separate from local deliverables.

Integrated outputs:

- Final local package refreshed from the current `recallos/` tree.
- Presentation deck stored in `deck/RecallOS_Submission_Deck.pptx`.
- External submission artifacts still require owner action:
  - Demo video.
  - Public GitHub repository.
  - Devpost project page.
  - Live UiPath Automation Cloud deployment.

## Prompt 5: Audit and closure hardening

Request: apply the latest review suggestions before submission.

Integrated outputs:

- Evidence manifest covers the final closure timeline event.
- Certificate artifact hash semantics corrected.
- Explicit closure guard added and tested.
- TC-08 and TC-10 now verify explicit closure-blocking/guard state.
- Human review supports `approved`, `needs_more_evidence`, and `revise_plan`.
- API workflow contract normalized to `status`, `correlationId`, `result`,
  and `errors`.
- DBOM faulty-component matching supports prompt/model/agent/retrieval-index
  component types.
