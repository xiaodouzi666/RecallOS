# Product Brief

## Product

RecallOS: Product Recall for AI Decisions.

## Track

UiPath AgentHack Track 1: UiPath Maestro Case.

## Problem

Enterprises increasingly let AI agents make or execute operational decisions.
When a prompt, policy, model, data source, or agent version is later found to be
wrong, fixing the live agent is not enough. Historical decisions have already
changed CRM states, customer emails, support tickets, approvals, and audit
records.

## Solution

RecallOS starts a governed Maestro case when a faulty AI component is detected.
It scans historical decisions, generates Decision Bills of Materials, freezes
downstream actions, replays decisions under corrected deterministic policy
logic, routes human approval, executes remediation across enterprise systems,
verifies the fix, and generates an AI Decision Recall Certificate.

## Demo Domain

Northstar SME Lending uses an AI agent to pre-screen small-business loan
applications. Internal audit finds that `credit-policy-v7.1` incorrectly
auto-rejected low-revenue applicants with approved guarantees.

## Memorable Category

Product recall for AI decisions.

## Design Principles

- Deterministic code decides replay outcomes.
- LLM-style agents classify, explain, draft, and summarize.
- Dangerous actions are draft-only or human-approved.
- Every affected decision has evidence.
- Test Cloud verification is a closure gate.
