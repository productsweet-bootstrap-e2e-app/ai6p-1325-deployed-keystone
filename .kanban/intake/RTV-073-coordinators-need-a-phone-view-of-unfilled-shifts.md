---
title: Coordinators need a phone view of unfilled shifts
id: RTV-073
status: intake
template_type: user-story
intake_state: refining
delivery_task_ids: []
created: 2026-09-14
updated: 2026-09-14
priority: high
owner: unspecified
tags:
  - mobile
  - scheduling
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a Weekend shift coordinator, I want See a live, phone-friendly list of unfilled shifts the evening before each shift, so that Coordinators can spot gaps caused by last-minute drops and proactively reach out to fill them before the shift starts.

## User Type

Weekend shift coordinator

## User Need

See a live, phone-friendly list of unfilled shifts the evening before each shift

## Expected Outcome

Coordinators can spot gaps caused by last-minute drops and proactively reach out to fill them before the shift starts

## Problem Or Opportunity

Currently coordinators scan a shared spreadsheet on Friday afternoon. When someone drops a shift on Saturday morning, the gap often goes unnoticed until the shift starts, leaving critical roles empty.

## Scope

- R1: Provide a phone-optimized view showing unfilled shifts for the upcoming weekend
- R2: Display which shifts are open and how many volunteers are assigned vs. needed
- R3: Refresh the view when a volunteer drops a shift (live or manual refresh)
- Exclude: notifications, self-service shift claiming by volunteers, coordinator-to-volunteer messaging

## Proposed Design / Approach

Build a lightweight dashboard view accessible on mobile that queries the shift database and displays unfilled positions in reverse-chronological order (earliest shifts first). The view refreshes on page load and optionally polls for updates. MVP targets the weekend-only case with shifts for Saturday and Sunday.

## Verification Plan

- Coordinator can access the view on their phone and see all unfilled shifts for the upcoming weekend
- The view accurately reflects current assignment counts vs. shift targets
- When a volunteer drops a shift, the view reflects the change on the coordinator's next refresh
- The view is readable and actionable on a phone screen (responsive, clear typography, quick scan)

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
