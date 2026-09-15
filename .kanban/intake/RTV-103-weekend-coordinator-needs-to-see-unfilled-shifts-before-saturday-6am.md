---
title: Weekend coordinator needs to see unfilled shifts before Saturday 6am
id: RTV-103
status: intake
template_type: user-story
intake_state: refining
delivery_task_ids: []
created: 2026-09-15
updated: 2026-09-15
priority: high
owner: AI agent + user
source: weekend coordinator (direct)
tags:
  - rota
  - weekend
  - unfilled-shifts
  - care-operations
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a weekend roster coordinator at a small care provider, I want the existing rota page to show a weekend-only view of unfilled shifts that refreshes when someone drops a shift, so that no unfilled weekend shift is discovered after Saturday 6am.

## User Type

weekend roster coordinator at a small care provider

## User Need

the existing rota page to show a weekend-only view of unfilled shifts that refreshes when someone drops a shift

## Expected Outcome

no unfilled weekend shift is discovered after Saturday 6am

## Problem Or Opportunity

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Scope

**In scope:**
- R1: Weekend shifts only (Saturday and Sunday)
- R2: Existing rota page (modify existing page, not create a new page)
- R3: View updates/refreshes when shifts are dropped or filled

**Out of scope:**
- R4: Notifications
- R5: Weekday shifts
- R6: Changes to how shifts are entered

**Constraints:**
- R7: No new logins required

## Proposed Design / Approach

Add a weekend-only filter or view to the existing rota page displaying unfilled weekend shifts. Implement a refresh mechanism (polling or event-driven) to update the view when staff drop or fill shifts.

## Verification Plan

- R1: Only weekend (Saturday/Sunday) shifts are shown in the view
- R2: Feature is integrated into existing rota page with no new login required
- R3: View updates when shifts are dropped or filled
- R4: No notifications are implemented (feature limited to rota page display)
- R5: Weekday shifts are excluded from the view
- R6: Existing shift entry process is unchanged
- R7: Feature is accessible with existing user session
- Pilot: Starting with one unfilled Sunday shift, coordinator sees it flagged on Friday at 4pm
- Pilot: Unfilled indicator clears when the shift is filled

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
