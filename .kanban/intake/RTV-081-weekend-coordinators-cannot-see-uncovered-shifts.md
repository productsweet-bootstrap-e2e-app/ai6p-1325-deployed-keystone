---
title: Weekend coordinators cannot see uncovered shifts
id: RTV-081
status: intake
template_type: user-story
intake_state: refining
delivery_task_ids: []
created: 2026-09-15
updated: 2026-09-15
priority: high
owner: AI agent + user
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Weekend coordinators checking their phones Friday evenings cannot see which shifts are uncovered, so gaps go unfilled into Saturday.

## User Type

Weekend shift coordinators using mobile

## User Need

View unfilled weekend shifts on their phone Friday evening, with real-time updates when shifts are dropped

## Expected Outcome

Pilot weekend: one unfilled Sunday shift flagged in Friday 4pm weekend view; when filled, flag clears; no unfilled weekend shift undiscovered after Saturday 6am

## Problem Or Opportunity

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Scope

R1: Weekend-only view on mobile showing all shifts for Sat–Sun of the next weekend
R2: Each shift displays coverage status (filled / unfilled)
R3: Unfilled shifts are flagged visually
R4: View refreshes when a volunteer drops a shift (no manual refresh required)
R5: No notifications; visibility through the view alone

## Proposed Design / Approach

Build a weekend-view mobile surface that queries the shift-status data and displays unfilled shifts with visual flags. The view should refresh in real-time via shift-drop events.

## Verification Plan

- R1: Weekend view displays all shifts for Sat–Sun of the next weekend
- R2: Coverage status is correctly read from the shift-status data
- R3: Unfilled shift is flagged in UI (visual method TBD)
- R4: View reflects a dropped shift within 5 seconds of the drop event
- R5: No alert notifications are sent to coordinators

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
