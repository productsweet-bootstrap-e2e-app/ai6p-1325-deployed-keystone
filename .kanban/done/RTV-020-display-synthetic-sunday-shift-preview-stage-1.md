---
title: Display synthetic Sunday shift preview (Stage 1)
id: RTV-020
status: done
template_type: implementation-task
created: 2026-09-12
updated: 2026-09-12
priority: high
close_reason: other
close_note: Cancelled owned AI6P-2545 verification fixture; no implementation or successful delivery claimed.
owner: you
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Implement read-only preview component showing 5 synthetic Sunday shifts with role, start time, and fill-status flags. No names, notifications, or signup actions.

## Scope

R1. Render table/list with 5 hardcoded synthetic shift rows
R2. Columns: role, start time, fill status (e.g., "0/2", "2/2")
R3. Visual flag for unfilled rows (0 volunteers signed up)
R4. Visual flag for filled rows (capacity met or ≥~80% threshold)
R5. Preview is read-only; no edit inputs or interactive controls
R6. No volunteer names, notifications, or signup buttons in the UI

## Proposed Design / Approach

- Create synthetic_shifts.json fixture with 5 sample Sunday shifts (e.g., 9:00 AM Greeter 0/2, 11:00 AM Usher 2/2, 1:00 PM Greeter 1/2, etc.)
- Build ShiftPreview read-only component with CSS classes for status flags (.unfilled, .filled)
- Connect to fixture via props/data attributes
- Apply Product Sweet design system (tonal backgrounds, no 1px borders, left-aligned text)
- Integrate into volunteer dashboard or dedicated route

## Verification Plan

1. Five synthetic shift rows render without errors
2. Role column displays correct role text (e.g., "Greeter", "Usher")
3. Start time column displays in readable format (e.g., "9:00 AM")
4. Fill status shows count/target (e.g., "0/2", "2/2")
5. Unfilled rows (count=0) have visual flag (highlight, icon, or badge per design system)
6. Filled rows (count ≥ target) have visual flag
7. Component is read-only; DOM inspection confirms no edit inputs or signup buttons
8. No volunteer names visible in any column
9. No notification, alert, or authentication UI present
