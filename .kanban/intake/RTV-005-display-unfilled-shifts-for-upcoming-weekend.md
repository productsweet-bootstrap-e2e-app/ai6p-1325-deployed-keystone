---
title: Display unfilled shifts for upcoming weekend
id: RTV-005
status: intake
template_type: user-story
intake_state: closed
delivery_task_ids: []
created: 2026-09-11
updated: 2026-09-12
priority: high
close_reason: other
close_note: AI6P-2545 disposable browser verification finished; cancel fixture, no implementation delivered.
owner: AI agent + user
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a local volunteer coordinator, I want a read-only list of unfilled shifts for the upcoming Saturday and Sunday, grouped by day and sorted by start time, so I can use our existing manual outreach.

## User Type

Local volunteer coordinator

## User Need

Read-only list of unfilled shifts for the upcoming Saturday and Sunday, grouped by day and sorted by start time

## Expected Outcome

Enable manual outreach using existing roster. Baseline and target are unknown; product owner will count missed and scheduled shifts from the existing roster during the first pilot weekend before agreeing an improvement target.

## Problem Or Opportunity

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Scope

R1: List displays all deliberately unfilled shifts in the test data for upcoming Saturday and Sunday only.\nR2: Shifts are grouped by day (Saturday, then Sunday).\nR3: Within each day, shifts are sorted by start time ascending.\nR4: Each shift row shows: shift ID, volunteer role, day, start time, end time.\nR5: Filled shifts never appear in the list.\nR6: Use only synthetic local test data.\nR7: Read-only display only; exclude authentication, notifications, partner integrations, production data access and scheduling changes.

## Proposed Design / Approach

R1–R5: Single small task. Build a read-only view component that queries test data, filters to unfilled shifts, groups by day, sorts by start time, and renders the shift rows with the specified fields. Deliver as a deployable component or page route with test data hardcoded.\nR6: Seed test data with a mix of filled and unfilled shifts across both days; ensure coverage of at least two different roles and multiple start times per day to verify sorting.\nR7: No auth layer, API integrations or data mutations on happy path.

## Verification Plan

- Every deliberately unfilled test shift appears exactly once in the output.\n- Filled shifts (status='filled' or equivalent) never appear.\n- Shifts are grouped visually or structurally by day.\n- Within each day, shifts are ordered by start time ascending (earlier times first).\n- Each shift row displays shift ID, volunteer role, day, start time, end time and no other fields (especially not location or volunteer names).\n- Test data is local and synthetic, not production or external.\n- The view is read-only (no edit controls, no API writes on the rendered component).

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
