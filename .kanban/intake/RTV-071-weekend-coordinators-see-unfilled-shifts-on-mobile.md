---
title: Weekend coordinators see unfilled shifts on mobile
id: RTV-071
status: intake
template_type: user-story
intake_state: refining
delivery_task_ids: []
created: 2026-09-14
updated: 2026-09-14
priority: high
owner: unassigned
source: Product owner feedback
tags:
  - weekend-coordination
  - mobile
  - volunteer-shift
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Coordinators currently scan a shared spreadsheet on Friday afternoon. Gaps are missed when someone drops a shift on Saturday morning and nobody notices until the shift starts. We need a weekend-only mobile view listing unfilled shifts in real time.

## User Type

weekend coordinator

## User Need

to see which weekend shifts are still open on my phone, so I can fill gaps before the shift starts

## Expected Outcome

Unfilled shifts are visible in real time on a mobile-friendly weekend view, updated whenever someone drops a shift. Coordinators stop scanning a shared spreadsheet and no longer miss same-day cancellations.

## Problem Or Opportunity

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Scope

R1: Weekend-only view showing all unfilled shifts for Saturday and Sunday.\nR2: Mobile-friendly layout optimized for phone screens.\nR3: Real-time updates when a shift is dropped or cancelled.\nR4: No push notifications.\nR5: No changes to how shifts are entered or weekday shift management.\nR6: Access from the evening before through the end of each shift.

## Proposed Design / Approach

Create a new 'Weekend Coordinator' mobile view:\n- Dedicated page/modal accessible from coordinator dashboard\n- Displays only Saturday and Sunday shifts with status = unfilled\n- Refreshes on-demand (manual or automatic poll)\n- Clear visual differentiation: empty slots listed first, filled shifts not shown\n- One-tap claim/assign flow if coordinators can also fill shifts from this view

## Verification Plan

1. Coordinator can load the weekend view on a mobile device\n2. View displays all unfilled Saturday–Sunday shifts for the upcoming weekend\n3. When a shift is dropped (cancelled) on Saturday/Sunday, the view updates within 30 seconds\n4. View is accessible from Friday evening onwards\n5. Weekday shifts do not appear\n6. No browser notifications or push alerts are triggered\n7. Shift entry and weekday management workflows are unchanged

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
