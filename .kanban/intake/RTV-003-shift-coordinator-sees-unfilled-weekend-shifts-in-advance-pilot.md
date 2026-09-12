---
title: Shift coordinator sees unfilled weekend shifts in advance (pilot)
id: RTV-003
status: intake
template_type: user-story
intake_state: ready-for-dev
delivery_task_ids: []
created: 2026-09-11
updated: 2026-09-12
priority: medium
owner: You (product owner)
tags:
  - pilot
  - volunteer-coordination
  - weekend-shifts
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a Shift coordinator, I want to see which shifts are unfilled at a glance so I can reach out to volunteers in advance, so that I have a read-only pilot that correctly identifies unfilled test shifts without false positives.

## User Type

Shift coordinator

## User Need

See which shifts are unfilled at a glance so I can reach out to volunteers in advance

## Expected Outcome

A working read-only pilot that correctly identifies unfilled test shifts without false positives. No production data, no notifications, no volunteer auth required. Success is binary and falsifiable: every deliberately unfilled shift is flagged, every filled shift is left alone. Baseline missed-shift count and improvement target are unknown until the product owner measures the current baseline using the existing manual roster during the first pilot weekend. Post-pilot impact evaluation (whether the pilot reduces missed shifts in practice) will be scheduled after launch.

## Problem Or Opportunity

Volunteer shift coordination is manual and reactive. The coordinator lacks advance visibility into which shifts lack coverage, making it hard to reach out early and reduce last-minute gaps.

## Scope

- R1: Display a read-only view of upcoming Saturday and Sunday shifts with fill status using synthetic test data
- R1: Group shifts by day (Saturday / Sunday) and sort by start time within each day
- R2: Correctly identify unfilled test shifts with no false positives (every unfilled shift flagged, every filled shift left alone)
- R3: Exclude: production data, volunteer notifications, authentication, partner integrations, scheduling/rescheduling functions, coordinator action buttons

## Proposed Design / Approach

Build a minimal read-only pilot with hard-coded test data.

**First Deliverable (covers all requirements):**
- Display a static weekly list of upcoming Saturday and Sunday shifts (R1)
- Group shifts by day (Saturday / Sunday) and sort by start time within each day (R1)
- Show shift name, time, and fill status (unfilled / filled) for each shift (R1)
- Use hard-coded synthetic test data with at least 5 test shifts to verify correctness (R1, R2)
- Verify no false positives: every unfilled shift is flagged, every filled shift is left alone (R2)
- Access only hard-coded data; do not query production systems or volunteer records (R3)
- Provide read-only display only; no coordinator action buttons, notifications, or integration with outreach systems (R3)

The coordinator can manually use the existing outreach and scheduling processes to follow up on unfilled shifts identified in the pilot. Defer filtering, live data, and integration to later stages if the pilot validates the approach.

## Verification Plan

- R1: Pilot displays only upcoming Saturday and Sunday shifts
- R1: Shifts are grouped by day (Saturday / Sunday) and sorted by start time within each day
- R1: Pilot displays at least 5 test shifts with name, time, and unfilled/filled status
- R2: Each test shift marked unfilled is correctly identified as unfilled
- R2: Each test shift marked filled is never flagged as unfilled
- R2: No false positives (filled shifts are never flagged as unfilled)
- R3: No production data is accessed or displayed
- R3: No volunteer contact or notification systems are invoked

## Questions

```yaml
- id: review-1789171200000-0
  question: How should the weekly list be grouped or sorted? By day (Mon–Sun), by volunteer role, by time, or another pattern?
  status: answered
  thread:
    - role: user
      text: How should the weekly list be grouped or sorted? By day (Mon–Sun), by volunteer role, by time, or another pattern?
    - role: user
      text: Upcoming Saturday and Sunday only, grouped by day and sorted by start time.
- id: review-1789171200000-1
  question: What should the coordinator do once they identify an unfilled shift in this pilot? (Manual outreach only, or is there a next step we should design?)
  status: answered
  thread:
    - role: user
      text: What should the coordinator do once they identify an unfilled shift in this pilot? (Manual outreach only, or is there a next step we should design?)
    - role: user
      text: Keep the existing manual outreach and scheduling process; this pilot only shows the list.
- id: review-1789171200000-2
  question: You mentioned measuring the current missed-shift baseline before agreeing on a numerical improvement target. What's the method or timeline for that measurement, and who owns it?
  status: answered
  thread:
    - role: user
      text: You mentioned measuring the current missed-shift baseline before agreeing on a numerical improvement target. What's the method or timeline for that measurement, and who owns it?
    - role: user
      text: I, the product owner, will count missed and scheduled shifts using the existing manual roster during the first pilot weekend. Baseline and improvement target are unknown until this measurement.
```

## Refinement Notes

Source: AI6P-2545 disposable pilot from local volunteer group. Answers incorporated: (1) Display upcoming Saturday and Sunday only, grouped by day and sorted by start time; (2) Coordinator uses existing manual outreach and scheduling process—no integration needed; (3) Product owner will measure missed-shift baseline during first pilot weekend using existing manual roster. Baseline count and improvement target are unknown until measurement. Post-pilot impact evaluation scheduled separately from delivery acceptance.
