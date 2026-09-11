---
title: Shift coordinator sees unfilled weekend shifts in advance (pilot)
id: RTV-003
status: intake
template_type: user-story
intake_state: refining
delivery_task_ids: []
created: 2026-09-11
updated: 2026-09-11
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

As a Shift coordinator, I want See which shifts are unfilled at a glance so I can reach out to volunteers in advance, so that A read-only pilot that correctly identifies unfilled test shifts without false positives. No production data, no notifications, no volunteer auth required. Success is binary: every deliberately unfilled shift is flagged, every filled shift is left alone..

## User Type

Shift coordinator

## User Need

See which shifts are unfilled at a glance so I can reach out to volunteers in advance

## Expected Outcome

A read-only pilot that correctly identifies unfilled test shifts without false positives. No production data, no notifications, no volunteer auth required. Success is binary: every deliberately unfilled shift is flagged, every filled shift is left alone.

## Problem Or Opportunity

Volunteer shift coordination is manual and reactive. The coordinator lacks advance visibility into which shifts lack coverage, making it hard to reach out early and reduce last-minute gaps.

## Scope

R1: Display a read-only view of weekend shifts with fill status using synthetic test data\nR2: Correctly identify unfilled test shifts (no false positives)\nR3: Exclude: production data, volunteer notifications, authentication, partner integrations, scheduling/rescheduling functions

## Proposed Design / Approach

Build a minimal read-only pilot with hard-coded test data. The coordinator can verify the concept works before we agree on production scope. First deliverable: static weekly list showing shift name, time, and fill status. Defer grouping, filtering, and real data integration to later stages if the pilot validates the approach.

## Verification Plan

- R1: Pilot displays at least 5 test shifts with name, time, and unfilled/filled status\n- R2: Each test shift marked unfilled is correctly identified as unfilled\n- R2: Each test shift marked filled is never flagged as unfilled\n- R3: No production data is accessed or displayed</anificationPlan>
<parameter name="source">AI6P-2545 disposable pilot: local volunteer group

## Questions

```yaml
- question: How should the weekly list be grouped or sorted? By day (Mon–Sun), by volunteer role, by time, or another pattern?
  status: open
  thread:
    - role: user
      text: How should the weekly list be grouped or sorted? By day (Mon–Sun), by volunteer role, by time, or another pattern?
- question: What should the coordinator do once they identify an unfilled shift in this pilot? (Manual outreach only, or is there a next step we should design?)
  status: open
  thread:
    - role: user
      text: What should the coordinator do once they identify an unfilled shift in this pilot? (Manual outreach only, or is there a next step we should design?)
- question: You mentioned measuring the current missed-shift baseline before agreeing on a numerical improvement target. What's the method or timeline for that measurement, and who owns it?
  status: open
  thread:
    - role: user
      text: You mentioned measuring the current missed-shift baseline before agreeing on a numerical improvement target. What's the method or timeline for that measurement, and who owns it?
```

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
