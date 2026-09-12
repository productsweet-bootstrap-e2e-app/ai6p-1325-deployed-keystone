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

Build a minimal read-only HTML view using the existing Eleventy template structure (src/_layouts/base.njk, src/index.njk). Create a new page (e.g., src/shifts-pilot.njk) that:

**Requirement R1 → Deliverable mapping:**
- R1a (Display Sunday shifts only): Render a hardcoded list of upcoming Sunday shifts in YYYY-MM-DD format
- R1b (Sort by start time): Order shifts chronologically by start time (HH:MM format)
- R1c (Show shift details): Display shift name, start time, end time, and fill status (filled/unfilled badge)

**Requirement R2 → Deliverable mapping:**
- R2a (Accuracy): Use ≥5 synthetic test shifts (mix of filled and unfilled) as hardcoded data in the template
- R2b (No false positives): Verify each test shift is tagged correctly before shipment; design visual hierarchy so filled/unfilled are unmistakable

**Requirement R3 → Deliverable mapping:**
- R3a (No production data): Do not query any database or external service
- R3b (No integrations): No volunteer auth, no notification hooks, no integration points
- R3c (Read-only): No action buttons, no scheduling interface, no data modification

**Technical approach:**
- Create shifts-pilot.njk with hardcoded test data array and simple Eleventy templating loops (no JavaScript)
- Use Product Sweet design tokens from .agent/design-tokens.json for typography, color, spacing
- Render days-of-week headers (Sunday header only) with shifts sorted by start time beneath
- Design a simple status badge component (filled = green, unfilled = red) grounded in design-tokens
- Commit to a feature branch, run ci:verify to confirm static build succeeds, open PR for human review
- No live data, no coordinator interaction, no deployment to production

## Verification Plan

- R1a: Pilot displays only Sunday shifts (no Saturday, no other days)
- R1b: Shifts within each day are sorted by start time (earliest to latest)
- R1c: Pilot displays at least 5 test shifts with name, start time, end time, and fill status
- R2a: Each synthetic test shift marked unfilled displays the unfilled status
- R2b: Each synthetic test shift marked filled displays the filled status
- R2c: No filled shift is ever incorrectly flagged as unfilled (no false positives)
- R3a: No SQL queries, no API calls, no database transactions
- R3b: No volunteer contact integrations or notification systems invoked
- R3c: No action buttons, no data-modification endpoints, read-only display only

## Refinement Notes

Linked implementation task for RTV-003 intake story. Stage 1 child of epic RTV-009. Grounded in existing Eleventy template structure: src/_layouts/base.njk, src/index.njk. Creates new src/shifts-pilot.njk with hardcoded test data. No database queries, no partner data, no live volunteer records. All unknowns held as open questions on discovery task RTV-013.

## Problem Or Opportunity

Volunteer shift coordination is manual and reactive. Coordinators manually review rosters to identify unfilled weekend shifts, making it hard to reach out early to volunteers. The Sunday pilot removes this friction by providing a dedicated read-only view of upcoming Sunday shifts with clear fill-status indicators. Success is binary: 100% accuracy on synthetic test data before considering any live integration.
