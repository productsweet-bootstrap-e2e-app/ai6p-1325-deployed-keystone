---
title: AI6P-2585 live round 4710XZ — see unfilled weekend shifts
id: RTV-030
status: intake
template_type: user-story
intake_state: refining
delivery_task_ids: []
created: 2026-09-13
updated: 2026-09-13
priority: medium
owner: e9ee54a8-2051-701f-f33b-a473412979a7
source: AI6P-2585 live-sacrificial round (disposable fixture)
created_by: e9ee54a8-2051-701f-f33b-a473412979a7
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a roster coordinator I want to see which weekend shifts are still unfilled so I stop finding out on Monday morning.

## User Type

Roster coordinators at a small care provider

## User Need

A view of the coming weekend's unfilled shifts, refreshed when someone drops a shift

## Expected Outcome

No unfilled weekend shift is discovered after the weekend has started

## Problem Or Opportunity

Roster coordinators do not have a dedicated view of unfilled weekend shifts before the weekend begins. This means coordinators may only discover staffing gaps on Monday morning, when it is too late to fill the shifts and care delivery is at risk.

## Scope

Just the weekend view for now. Weekday shifts, notifications and any change to how shifts are entered are out.

## Proposed Design / Approach

Build a "Weekend Unfilled Shifts" view accessible to roster coordinators. The view displays all shifts scheduled for Saturday and Sunday that have no assigned caregiver. The data is loaded when the coordinator opens the view and displayed as a simple list or table. This is a read-only view; shift reassignment remains in the existing roster tools.\n\nFirst deliverable: a working weekend view that loads and displays unfilled shifts correctly by Saturday 6am, ahead of the weekend start.

## Verification Plan

- R1: The view shows all unfilled shifts scheduled for the coming Saturday and Sunday
- R2: The view is accessible to roster coordinators and loads by Saturday 6am
- R3: Coordinators are able to review unfilled shifts before the weekend begins (Saturday 6am check)

## Questions

```yaml
- question: What is the acceptable refresh cadence for the weekend view once it is loaded? Should it refresh in real-time when a shift is dropped, or is every few minutes acceptable?
  status: answered
  thread:
    - role: user
      text: What is the acceptable refresh cadence for the weekend view once it is loaded? Should it refresh in real-time when a shift is dropped, or is every few minutes acceptable?
    - role: agent
      text: For the first slice, periodic refresh (every few minutes) is sufficient — coordinators need visibility before the weekend starts, not real-time updates to every drop. Implement with a reasonable default (e.g., refresh on open or every 5 minutes); real-time can follow as a future enhancement if the team identifies it matters in practice.
- question: What is the baseline for "no unfilled weekend shift is discovered after the weekend has started"? Is this currently zero unfilled shifts discovered post-weekend (i.e., no current incidents) or an unknown baseline that needs measurement? And what is the target — zero incidents going forward, or a different threshold? How will success be measured and verified after the feature ships?
  status: open
  thread:
    - role: user
      text: What is the baseline for "no unfilled weekend shift is discovered after the weekend has started"? Is this currently zero unfilled shifts discovered post-weekend (i.e., no current incidents) or an unknown baseline that needs measurement? And what is the target — zero incidents going forward, or a different threshold? How will success be measured and verified after the feature ships?
```

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
