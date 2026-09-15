---
title: Show unfilled weekend shifts on rota
id: RTV-113
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

As a roster coordinator, I want a dedicated weekend-only view of unfilled shifts that refreshes automatically when someone drops a shift, so I can spot gaps fast and avoid client care gaps.

## User Type

roster coordinator at a care provider

## User Need

a dedicated weekend-only view showing only unfilled shifts, refreshed automatically when someone drops a shift

## Expected Outcome

The coordinator can spot gaps within minutes of a shift being dropped instead of scanning the whole spreadsheet manually, reducing missed-cover incidents on weekends.

## Problem Or Opportunity

Coordinators scan a shared spreadsheet on Friday afternoon, but late Saturday-morning drop-outs are often missed until the shift starts — resulting in uncovered client visits.

## Scope

R1: Show only weekend shifts (Saturday and Sunday) in the view.
R2: Display only unfilled shifts (shifts with no assigned staff member).
R3: Auto-refresh the view when a shift drops, without a manual page reload.
R4: Accessible from the existing rota page.
Exclusions: Does not include rota editing, scheduling new shifts, or multi-week forecasting.

## Proposed Design / Approach

Add a weekend-only view as a filter or sub-page within the existing rota interface. Implement server-side change detection (e.g., webhook or polling) to refresh the client list when a shift is marked unfilled. R1–R2 are UI; R3 requires backend change notification.

## Verification Plan

- R1: Verify the view displays only Saturday and Sunday shifts when loaded.
- R2: Verify filled shifts are hidden; unfilled shifts are highlighted.
- R3: Mark a shift as unfilled via the backend and verify the view updates within 30 seconds without a page reload.
- R4: Verify the weekend view is accessible via a link or tab on the main rota page.

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
