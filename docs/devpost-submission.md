# Devpost Submission Draft

## Title

RecallOS: Product Recall for AI Decisions

## Short Description

RecallOS uses UiPath Maestro Case to recall historical business decisions
affected by faulty AI agents, prompts, policies, models, or data sources. It
generates Decision Bills of Materials, calculates blast radius, replays
decisions under corrected logic, routes human review, executes remediation
across enterprise systems, verifies fixes with Test Cloud, and produces an
audit-ready AI Decision Recall Certificate.

## Inspiration

Enterprises are moving from AI assistants to AI agents that make and execute
operational decisions. But when a faulty AI component is discovered, most tools
focus on fixing the model or monitoring the system. RecallOS focuses on the
forgotten question: what about the decisions that already happened?

## What It Does

RecallOS starts a governed recall case when a faulty AI component is detected.
It scans historical decision records, builds DBOMs, freezes downstream actions,
replays decisions under corrected logic, identifies harmed or high-risk
outcomes, routes human approvals, performs remediation through UiPath robots and
API workflows, validates the fix through Test Cloud, and closes the case with an
audit certificate.

## How We Built It

We built the prototype around UiPath Maestro Case as the control plane. Coded
agents perform blast-radius analysis, DBOM generation, deterministic replay, and
remediation planning. Agent Builder agents handle intake, impact explanation,
customer communication drafting, and audit summaries. API Workflows mock
LoanCore, CRM, Ticket, EmailDraft, and AuditRegister integrations. A robot
simulation updates a legacy portal compliance register. Test Cloud-style tests
gate closure.

## UiPath Components

- UiPath Maestro Case
- UiPath Agent Builder
- UiPath Coded Agents
- UiPath API Workflows
- UiPath RPA Robot
- UiPath Test Cloud
- UiPath Orchestrator
- UiPath Data Service / Data Fabric
- UiPath for Coding Agents

## Challenges

The biggest design challenge was keeping the demo both enterprise-realistic and
deterministic. We avoided letting an LLM decide loan outcomes. Instead, coded
policy replay makes the decision, while agents explain, classify, and draft.

## Accomplishments

- Created a new DBOM evidence object for AI decision recalls.
- Built deterministic seed data with stable truth metrics.
- Implemented four coded agents and mock workflows.
- Added rework loop behavior and verification gates.
- Produced a certificate that summarizes corrective action evidence.

## What Is Next

- Deploy the full case into Automation Cloud.
- Replace mock systems with real connectors.
- Add richer DBOM graph exploration.
- Expand recall patterns beyond lending to HR, insurance, procurement, and grant decisions.
