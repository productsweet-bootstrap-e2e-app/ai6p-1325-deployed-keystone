---
title: Spot weekend rota gaps without manual refresh
id: RTV-101
status: intake
template_type: user-story
intake_state: refining
delivery_task_ids: []
created: 2026-09-15
updated: 2026-09-15
priority: high
owner: AI agent + user
tags:
  - weekend-coverage
  - rota
  - care-provider
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a Roster coordinator at a care provider, I want see unfilled weekend shifts in real time without reloading, so that Gaps that emerge when volunteers cancel Saturday morning are caught immediately, so coordinator has time to find cover before the shift starts.

## User Type

Roster coordinator at a care provider

## User Need

see unfilled weekend shifts in real time without reloading

## Expected Outcome

Gaps that emerge when volunteers cancel Saturday morning are caught immediately, so coordinator has time to find cover before the shift starts

## Problem Or Opportunity

Friday spreadsheet checks miss cancellations that arrive Saturday morning, leaving clients without cover until the shift starts

## Scope

R1: Weekend-only rota view (Fri–Sun shifts only). R2: Auto-refresh when a shift is dropped. R3: Clear visual highlight of unfilled slots. R4: In existing rota page only, no external notifications.

## Proposed Design / Approach

Add weekend rota tab/mode to existing page. Subscribe to shift-cancellation events and refresh in-page list. Highlight unfilled slots in distinct visual state.

## Verification Plan

- R1: Weekend view displays only Fri–Sun shifts.\n- R2: Unfilled shift appears in list within 5 seconds of cancellation (test verified).\n- R3: Unfilled slots display in visually distinct style.\n- R4: No notifications or alerts outside rota page.

## Questions

```yaml
- question: 'Saturday 6am cutoff: Does "no unfilled weekend shift discovered after Saturday 6am" mean the feature should stop working then, or that gaps discovered by 6am count as success (later discoveries as failure)? This affects how we scope weekend vs. whole-weekend coverage.'
  status: open
  thread: []
```

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
