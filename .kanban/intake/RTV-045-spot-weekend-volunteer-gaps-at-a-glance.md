---
title: Spot weekend volunteer gaps at a glance
id: RTV-045
status: intake
template_type: user-story
intake_state: refining
delivery_task_ids: []
created: 2026-09-13
updated: 2026-09-13
priority: high
owner: AI agent + user
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a Roster coordinator at a small care provider, I want A weekend-only view in the rota page that shows unfilled shifts and auto-updates when someone drops a shift, so that I can spot gaps before a client goes without cover.

## User Type

Roster coordinator at a small care provider

## User Need

A weekend-only view in the rota page that shows unfilled shifts and auto-updates when someone drops a shift

## Expected Outcome

No unfilled weekend shift is discovered after Saturday 6am. This is verified by the coordinator confirming they spotted all gaps from the weekend gap view before the shift started.

## Problem Or Opportunity

Currently, coordinators scan the shared spreadsheet on Friday afternoon. Gaps are missed when someone drops a shift on Saturday morning and nobody notices until the shift starts — a client goes without cover.

## Scope

R1: Display all unfilled volunteer shifts for the upcoming weekend
R2: Auto-update the view when a shift is dropped (no manual reload required)
R3: Show weekend shifts only (exclude weekday shifts)

Exclusions: No notifications, no changes to the shift entry process, no weekday shifts

## Proposed Design / Approach

**First deliverable:** Add a weekend-gap view component to the existing rota page that queries and displays all unfilled volunteer shifts for the upcoming Saturday and Sunday (R1, R3).

**Second deliverable:** Wire the weekend-gap view to subscribe to shift-drop events, so when a volunteer drops a shift, the view auto-refreshes without requiring a manual page reload (R2).

**Dependencies:** Assumes the rota page, shift data model, and shift-drop event stream already exist in the codebase. If any of these are missing, scope will need to expand.

## Verification Plan

- R1: Weekend view displays all unfilled volunteer shifts for the upcoming Saturday and Sunday
- R2: When a volunteer drops a shift during the weekend, the view updates without requiring manual page reload
- R3: View displays weekend shifts only; weekday shifts are not shown
- Weekend view is accessible from the rota page
- Coordinator reports gaps discovered through this view before 6am Saturday

## Questions

```yaml
- question: Does this codebase already have a rota/roster page we'd extend with a weekend-gap view, or are we building the rota system from scratch?
  status: open
  thread:
    - role: agent
      text: The story is approved to proceed as a first slice. Implementation will assume the rota page and shift-drop events exist; if they don't, scope will be flagged during task creation and the team will confirm dependencies before work begins.
```

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
