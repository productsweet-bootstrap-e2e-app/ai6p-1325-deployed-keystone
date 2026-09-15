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

Roster coordinator sees all unfilled weekend shifts in a dedicated view, refreshed automatically when someone drops a shift (no manual page reload). All weekend gaps are visible before Saturday 6am, giving the coordinator time to find cover before shifts start.", "scope":"R1: Weekend-only rota view (Friday 00:00 – Sunday 23:59 shifts). R2: Auto-refresh in-page when a shift is cancelled. R3: Display unfilled shifts (both newly-created-but-unassigned and cancelled shifts). R4: Clear visual highlight of unfilled slots in the weekend view. R5: In existing rota page only; no external notifications or alerts.", "verificationPlan":"- R1: Weekend view displays only Friday–Sunday shifts; no weekday shifts shown.\n- R2: When a volunteer cancels a shift on the rota, the weekend view refreshes to reflect the cancellation (no page reload needed).\n- R3: Both unfilled (never-assigned) and cancelled shifts appear in the list.\n- R4: Unfilled slots display in a visually distinct style (design TBD).\n- R5: No notifications, badges, or alerts appear outside the rota page.", "refinementNotes":"User confirmed: auto-refresh on shift drop, weekend view only in existing rota page. Saturday 6am cutoff introduced as success criterion (ambiguity: does it mean feature stops working then, or gaps found by 6am = success?). Visual design for 'distinct style' R4 is unspecified — may need design exploration or a follow-up with mockups."

## Problem Or Opportunity

Friday spreadsheet checks miss cancellations that arrive Saturday morning, leaving clients without cover until the shift starts

## Scope

R1: Weekend-only rota view (Fri–Sun shifts only). R2: Auto-refresh when a shift is dropped. R3: Clear visual highlight of unfilled slots. R4: In existing rota page only, no external notifications.

## Proposed Design / Approach

Add weekend rota tab/mode to existing page. Subscribe to shift-cancellation events and refresh in-page list. Highlight unfilled slots in distinct visual state.

## Verification Plan

- R1: Weekend view displays only Friday–Sunday shifts; no weekday shifts shown.\n- R2: When a volunteer cancels a shift on the rota, the weekend view refreshes to reflect the cancellation (no page reload needed).\n- R3: Both unfilled (never-assigned) and cancelled shifts appear in the list.\n- R4: Unfilled slots display in a visually distinct style (design TBD).\n- R5: No notifications, badges, or alerts appear outside the rota page."

## Questions

```yaml
- question: 'Saturday 6am cutoff: Does "no unfilled weekend shift discovered after Saturday 6am" mean the feature should stop working then, or that gaps discovered by 6am count as success (later discoveries as failure)? This affects how we scope weekend vs. whole-weekend coverage.'
  status: open
  thread: []
```

## Refinement Notes

**Refinement round 1 complete (2026-09-15):**\n\nUser clarified that the feature should:\n- Live in the existing rota page as a weekend-only view\n- Auto-refresh when volunteers cancel shifts (no manual reload)\n- Show both newly-posted-but-unassigned AND cancelled shifts\n- Use no external notifications\n- Achieve visibility of all weekend gaps by Saturday 6am\n\n**Story ready for backlog once:**\n1. Q0 (Saturday 6am cutoff) is answered: Does it mean coverage extends through Sunday 23:59, or the success window closes at 6am Saturday?\n2. Visual design for unfilled-slot highlight is specified (color, icon, label, or mockup).\n\n**No blocker for backlog creation:** The five requirements and verification checks are clear; design and deadline ambiguity can be resolved in parallel during implementation planning."
