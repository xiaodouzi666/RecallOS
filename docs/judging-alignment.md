# Judging Alignment

| Criterion | RecallOS evidence |
| --- | --- |
| Business impact | Reduces customer harm and audit gaps after faulty AI decisions. |
| Platform usage | Maestro, Agent Builder, Coded Agents, API Workflows, Robot, Test Cloud, Orchestrator, Data Service. |
| Technical execution | Deterministic policy replay, DBOM evidence, rework loop, verification gate, typed JSON contracts. |
| Completeness | Local prototype runs end to end, tests pass, docs include cloud deployment mapping. |
| Creativity | Frames AI governance as product recall for historical AI decisions. |
| Presentation | Concrete story centered on `APP-1042 / DEC-2026-00421`. |
| Coding agents bonus | Codex used to scaffold code, tests, docs, demo UI, and submission artifacts with human review. |

## Track 1 Fit

The project is dynamic, exception-heavy, long-running, and human-in-the-loop.
It requires orchestration across agents, robots, API workflows, people, state,
audit evidence, and closure gates. Maestro is the natural control plane.

## Differentiators

- Decision Bill of Materials for each historical business decision.
- Counterfactual replay that does not outsource financial decisions to an LLM.
- Rework loop for failed verification or rejected human review.
- Certificate that packages corrective action evidence.
