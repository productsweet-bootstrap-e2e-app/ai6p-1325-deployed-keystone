---
title: Show unfilled weekend shifts at a glance
id: RTV-123
status: intake
template_type: user-story
intake_state: refining
delivery_task_ids: []
created: 2026-09-15
updated: 2026-09-15
priority: medium
owner: AI agent + user
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a Roster coordinators, I want See which weekend shifts are unfilled before the weekend starts, refreshed when someone drops a shift, so that Weekend-only rota view showing all unfilled shifts, updated automatically when shifts are dropped—no manual reload needed.

## User Type

Roster coordinators

## User Need

See which weekend shifts are unfilled before the weekend starts, refreshed when someone drops a shift

## Expected Outcome

Weekend-only rota view showing all unfilled shifts, updated automatically when shifts are dropped—no manual reload needed

## Problem Or Opportunity

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Scope

- R1: Weekend-only view showing only unfilled shifts for Saturdays and Sundays\n- R2: View refreshes automatically when a shift is dropped\n- R3: No change to how shifts are entered or managed\n- R4: No notifications or weekday shifts in scope

## Proposed Design / Approach

Add a new 'Weekend Gaps' section to the existing rota page that filters for Saturday–Sunday unfilled slots and subscribes to drop-shift events to refresh without page reload.

## Verification Plan

- Verify the weekend-only view displays only Saturday and Sunday shifts\n- Verify unfilled shifts are highlighted or clearly listed\n- Verify the view refreshes automatically when a coordinator marks a shift as dropped\n- Verify weekday shifts do not appear\n- Verify no notifications are sent

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
