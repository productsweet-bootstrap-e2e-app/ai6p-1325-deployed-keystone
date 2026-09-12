---
title: Build Sunday pilot view with synthetic test data
id: RTV-011
status: backlog
template_type: implementation-task
parent_task_id: RTV-009
source_intake_id: RTV-003
backlog_state: refining
created: 2026-09-12
updated: 2026-09-12
priority: medium
owner: You (product owner)
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Display upcoming Sunday shifts with fill status using hard-coded test data. Read-only view shows shift name, time, and filled/unfilled indicator sorted by start time. Verify no false positives and no production data access.

## Scope

- R1: Display read-only view of upcoming Sunday shifts with fill status using synthetic test data
- R1: Sort shifts by start time
- R2: Correctly identify unfilled test shifts with no false positives
- R3: Exclude: production data, volunteer notifications, authentication, partner integrations, coordinator action buttons

## Proposed Design / Approach

Build minimal view with hard-coded test data (≥5 shifts). Display shift name, time, and fill status. No database queries, no real volunteer data, no integration points. Coordinator manually uses existing outreach process to follow up on unfilled shifts. Independent of partner data—validates concept with 100% controlled test data.

## Verification Plan

- R1: Pilot displays only upcoming Sunday shifts
- R1: Shifts are sorted by start time
- R1: Pilot displays at least 5 test shifts with name, time, and unfilled/filled status
- R2: Each test shift marked unfilled is correctly identified as unfilled
- R2: Each test shift marked filled is never flagged as unfilled
- R2: No false positives (filled shifts are never flagged as unfilled)
- R3: No production data is accessed or displayed
- R3: No volunteer contact or notification systems are invoked

## Refinement Notes

Linked implementation task for RTV-003. Covers stage_sunday_pilot deliverable. Hard-coded test data only; no partner data integration; no live volunteer records.
