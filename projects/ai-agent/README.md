# Project 2 — Safe Enterprise AI Agent

Build an agent that can call a small set of enterprise tools through typed backend interfaces.

## Starter tool ideas
- Read-only customer or ticket lookup against mock data.
- Draft a support response without sending it.
- Summarize a deployment or incident record.
- Prepare an action proposal for human review.

## Required guardrails
- Tool allowlist; no arbitrary shell, SQL, or URL execution.
- Validate every argument against a strict schema.
- Enforce user permissions in Spring Boot for every tool call.
- Separate read-only tools from write actions.
- Require explicit human approval before consequential writes.
- Add budgets, timeouts, audit events, and a kill switch.

## Adversarial tests
Test prompt injection in retrieved content, forged tool arguments, unauthorized access, repeated calls, tool timeouts, and attempts to bypass approval.
