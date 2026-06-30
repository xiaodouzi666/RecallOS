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

- [x] Track selected: UiPath Maestro Case.
- [x] Public GitHub repository published.
- [x] Public GitHub repository linked on Devpost.
- [x] MIT license visible.
- [x] README complete.
- [x] Demo video rendered locally, under 5 minutes, with audio.
- [x] Demo video uploaded and linked on Devpost.
- [x] Presentation deck uploaded or linked.
- [x] Automation Cloud solution can be demonstrated.
- [ ] Product feedback form completed if pursuing bonus.

## Manual Steps Requiring Owner Access

- GitHub repository is published at `https://github.com/xiaodouzi666/RecallOS`.
- GitHub Pages is published from `main` / `/docs` at `https://xiaodouzi666.github.io/RecallOS/control-tower/`.
- UiPath Labs environment link added to Devpost project page: `https://staging.uipath.com/hackathon26_244/`.
- UiPath Automation Cloud package, deployment, and successful job evidence are captured in `docs/uipath-cloud-evidence.md`.
- Demo video is uploaded to YouTube at `https://youtu.be/f9GTKpnuK_I`.
- Devpost submission is published at `https://devpost.com/software/recallos-product-recall-for-ai-decisions`.
- Complete any optional UiPath product feedback form if pursuing the bonus award.
