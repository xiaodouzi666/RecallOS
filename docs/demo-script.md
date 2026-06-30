# Five-Minute Demo Script

## 0:00-0:30 Problem

Enterprises are moving from AI assistants to AI agents that make operational
decisions. But when a faulty prompt, policy, model, or data source is found,
fixing the live agent is not enough. The wrong decisions already live in CRMs,
emails, tickets, approvals, and customer outcomes.

RecallOS is product recall for AI decisions.

## 0:30-1:00 Architecture

Show Maestro Case as the orchestration layer. Point to coded agents, Agent
Builder agents, API Workflows, RPA Robot, Test Cloud, and human review.

## 1:00-1:40 Fault Trigger

Internal audit detects `credit-policy-v7.1`. The Recall Intake Agent classifies
the incident as high severity and starts a Maestro case.

## 1:40-2:25 Blast Radius and DBOM

Show:

- 120 decisions scanned.
- 64 used the faulty component.
- Open `DEC-2026-00421`.
- Show its DBOM with policy, prompt, model, inputs, tool calls, retrieval index,
  and downstream impact.

## 2:25-3:10 Replay

Show `APP-1042`: originally `rejected`, corrected replay is `manual_review`
because the applicant had an approved university startup guarantee.

## 3:10-3:55 Human Review and Remediation

Human reviewers approve the plan. RecallOS updates LoanCore, CRM, Ticket,
EmailDraft, AuditRegister, and the legacy portal robot simulation.

## 3:55-4:30 Verification

Show Test Cloud verification. Mention the demo includes a failed gate that
re-enters remediation planning before passing.

## 4:30-5:00 Certificate

Show the AI Decision Recall Certificate. The case closes only after verification
and final approval.
