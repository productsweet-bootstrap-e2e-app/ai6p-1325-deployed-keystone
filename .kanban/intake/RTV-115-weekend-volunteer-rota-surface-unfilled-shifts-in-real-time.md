---
title: "Weekend volunteer rota: surface unfilled shifts in real time"
id: RTV-115
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

Weekend roster coordinators need to catch unfilled weekend shifts early so they have time to find cover. Today they have to manually scan the full rota; this story introduces a dedicated weekend-only view listing unfilled shifts, updating in real time when a shift is filled or dropped.

## User Type

Roster coordinator at a care provider

## User Need

to spot unfilled weekend shifts in a dedicated weekend view that updates when someone drops a shift

## Expected Outcome

Starting state: one unfilled Sunday shift. Coordinator opens the rota on Friday at 4pm and sees the gap flagged. Once it is filled, the flag clears. Success check: no unfilled weekend shift goes undetected after Saturday 6am during the pilot weekend.

## Problem Or Opportunity

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Scope

R1: New weekend-only view in the rota UI that lists all unfilled weekend shifts
R2: List automatically refreshes when someone fills or drops a weekend shift
R3: Coordinator accesses the view from the existing rota page

Exclusions:
E1: Partial fills (e.g., 1 of 2 needed): not included in first delivery
E2: Skill or qualification requirement checks: out of scope
E3: Mobile app: desktop web only

## Proposed Design / Approach

R1 → Add a dedicated "Weekend Gaps" filter/tab to the existing rota interface that queries and displays shifts with status=unfilled and day=Saturday|Sunday
R2 → Integrate WebSocket subscription or real-time polling to refresh the gaps list when a shift status changes
R3 → Surface this as a new tab or button in the rota page header

## Verification Plan

- Weekend view is accessible from the rota page
- Weekend view displays all unfilled Saturday and Sunday shifts
- When a shift is marked filled, it disappears from the weekend gaps list within 2 seconds
- When a shift is marked unfilled/dropped, it appears in the weekend gaps list within 2 seconds
- View remains accessible and responsive during normal rota usage

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
