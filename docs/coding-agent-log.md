# Use of UiPath for Coding Agents

## Coding Agent

Codex was used as the coding agent in this workspace.

## What It Helped Build

- Python scaffolding for coded agents and shared core logic.
- Deterministic seed-data generator.
- Mock API workflow entrypoints.
- Test Cloud-style local verification suite.
- Recall Control Tower static UI.
- README, docs, Maestro contracts, and submission materials.
- Presentation deck source and deliverables.

## Human Oversight

- Generated code was reviewed before execution.
- Financial replay outcomes are deterministic and test-covered.
- No production systems, customer data, or external sends were used.
- Customer communication remains draft-only.

## Representative Prompts

- Build an end-to-end UiPath AgentHack prototype for RecallOS.
- Generate deterministic seed data with 120 decisions, 64 affected, 11 changed,
  and 7 immediate reopen cases.
- Implement coded agents for blast radius, DBOM, replay, and remediation.
- Produce judging-aligned docs, demo script, and submission checklist.

## Evidence

- Source files under `coded-agents/`, `recallos_core/`, `api-workflows/`, and
  `tests/`.
- Local test run: `python3 -m unittest discover -s tests` passed.
- Browser verification: static Control Tower rendered with no console errors.
