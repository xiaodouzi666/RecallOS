# Final Submission Checklist

## Local Prototype

- [x] Seed data and truth tables generated.
- [x] Blast Radius Coded Agent.
- [x] DBOM Generator Coded Agent.
- [x] Counterfactual Replay Coded Agent.
- [x] Remediation Planner Coded Agent.
- [x] Mock API workflows.
- [x] Legacy portal robot simulation.
- [x] Recall Control Tower UI.
- [x] Certificate generation.
- [x] Rework loop simulation.
- [x] TC-01 through TC-10 verification checks.
- [x] Evidence manifest covers final timeline and stores certificate artifact hash.
- [x] Explicit closure guard for verification, final approval, certificate, and manifest.
- [x] Human review branches for approved, needs more evidence, and revise plan.
- [x] API workflow responses use status/correlationId/result/errors contract.
- [x] Decision dependency graph.
- [x] Risk score and exposure.
- [x] Remediation idempotency and dry-run preview metadata.
- [x] Local tests passing.

## UiPath Cloud

- [x] Automation Cloud tenant ready.
- [x] Solution package `Solution 1` version `1.0.0` published.
- [x] Package status is `Ready`.
- [x] Orchestrator runtime folder `Shared / Solution 1` created by deployment.
- [x] Process `Maestro BPMN` deployed.
- [x] Manual Orchestrator job completed successfully.
- [x] Successful-job screenshot captured in `docs/screenshots/uipath-successful-job.png`.
- [x] Local coded agents, mock API workflows, robot simulation, and Test Cloud-style gates are runnable and documented.
- [ ] Optional full productization: recreate every local contract as native Data Service entities, Agent Builder agents, API Workflows, queues, Action Center tasks, and Test Cloud assets.

## Devpost

- [ ] Track selected: UiPath Maestro Case.
- [x] Public GitHub repository published.
- [ ] Public GitHub repository linked on Devpost.
- [ ] MIT license visible.
- [ ] README complete.
- [ ] Demo video is under 5 minutes.
- [ ] Presentation deck uploaded or linked.
- [x] Automation Cloud solution can be demonstrated.
- [ ] Product feedback form completed if pursuing bonus.

## Manual Steps Requiring Owner Access

- GitHub repository is published at `https://github.com/xiaodouzi666/RecallOS`.
- GitHub Pages source is prepared as `main` / `/docs`; saving the setting publishes the Control Tower.
- UiPath Automation Cloud package, deployment, and successful job evidence are captured in `docs/uipath-cloud-evidence.md`.
- Record and upload the demo video.
- Fill the Devpost video link after upload and perform the final Devpost submit action.
- Complete any optional UiPath product feedback form if pursuing the bonus award.
