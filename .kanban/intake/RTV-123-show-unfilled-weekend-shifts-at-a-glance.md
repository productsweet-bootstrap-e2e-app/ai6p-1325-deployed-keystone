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

As a volunteer, I want to see which weekend shifts are unfilled and pick them up when someone drops out, so that I can help cover gaps and contribute when needed.

## User Type

Volunteers

## User Need

See which weekend shifts are unfilled in real time and pick them up when someone drops a shift

## Expected Outcome

Volunteers can view unfilled weekend shifts and claim cover shifts as soon as gaps appear, without waiting for a coordinator to notify them

## Problem Or Opportunity

Currently, volunteers don't see when weekend shifts become unfilled, so they have no opportunity to proactively pick up cover. Coordinators must manually reach out to find coverage, creating delays and missed opportunities for volunteers who want to help.

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
