# Coding Agent Evidence

RecallOS used Codex as the coding agent for implementation support. The
generated work was reviewed, edited, tested, and integrated into the prototype.

## Integrated Contributions

| Area | Files |
| --- | --- |
| Coded agent scaffolding | `coded-agents/*/agent.py`, `recallos_core/agents.py` |
| Verification | `tests/test_recallos.py`, `scripts/validate_all.py`, `testcloud/test-cases.md` |
| API workflow contracts | `api-workflows/*/workflow.py`, `api-workflows/contracts.md` |
| Evidence and auditability | `recallos_core/evidence.py`, certificate generation, Evidence Chain UI |
| Risk scoring | `recallos_core/risk.py`, Risk & Exposure UI |
| Frontend | `app/index.html`, `app/styles.css`, `app/app.js` |
| Documentation | `README.md`, `docs/*`, `maestro/*` |

## Human Oversight

- Deterministic code, not LLM output, decides replay outcomes.
- Generated code was run through `python3 -m unittest discover -s tests`.
- `python3 scripts/validate_all.py` validates the end-to-end local backend.
- Browser smoke tests validated desktop and mobile frontend behavior.
- No real customer emails, banking APIs, or production systems are used.

## Evidence Files

- `prompt-log.md`: representative prompts and resulting modules.
- `session-summary.md`: work sessions and outputs.
- `session-export.md`: text export suitable for repository submission.
- `human-review-notes.md`: review and safety decisions.
