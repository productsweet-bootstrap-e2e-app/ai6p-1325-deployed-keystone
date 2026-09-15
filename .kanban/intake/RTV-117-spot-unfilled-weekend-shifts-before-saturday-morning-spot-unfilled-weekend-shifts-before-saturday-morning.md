---
title: Spot unfilled weekend shifts before Saturday morning", "Spot unfilled weekend shifts before Saturday morning
id: RTV-117
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

As a roster coordinator at a care provider, I want to see unfilled weekend shifts on Friday afternoon, before any Saturday morning drops happen, so that zero unfilled weekend shifts discovered after Saturday 6am during the pilot weekend; coordinators review the weekend view on Friday at 4pm and see gaps flagged.

## User Type

roster coordinator at a care provider

## User Need

to see unfilled weekend shifts on Friday afternoon, before any Saturday morning drops happen

## Expected Outcome

zero unfilled weekend shifts discovered after Saturday 6am during the pilot weekend; coordinators review the weekend view on Friday at 4pm and see gaps flagged

## Problem Or Opportunity

Coordinators currently scan a shared spreadsheet on Friday afternoon, but it reflects only the previous Shiftly export. When volunteers drop shifts on Saturday morning, gaps are missed until the shift starts and a client goes without cover.

## Scope

R1: Display all weekend shifts (Saturday and Sunday) in a coordinator-facing view. R2: Flag shifts with no volunteer assigned. R3: Reflect Shiftly drops within one export cycle (frequency TBD with Shiftly partnership). Exclusions: no automatic re-assignment; no contacting volunteers; no changes to Shiftly configuration.

## Proposed Design / Approach

Map each requirement to a deliverable: (R1) Build a weekend shift view that ingests the weekly Shiftly CSV export; (R2) Compute and highlight unfilled shift cells on that view; (R3) Verify that a Saturday morning drop (simulated or real) appears within one export cycle on the view. First deliverable: a minimal weekend view showing all Sat/Sun shifts and their assignments, ready for Friday 4pm review. Dependency order: view structure first, then gap flagging, then export sync validation.

## Verification Plan

- R1: All Saturday and Sunday shifts from the weekly export are rendered in the view with shift ID, time, and current assignment status.\n- R2: Shifts with no assigned volunteer are visually flagged (e.g., highlighted, badged, or in a separate section).\n- R3: A volunteer drop recorded in Shiftly is reflected as unfilled in the view no later than one export cycle after the drop.

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Source: care provider weekend rota coordination. Key constraint: volunteers' availability lives exclusively in Shiftly; we receive only a weekly CSV export and cannot make direct API calls or control Shiftly's export frequency. Coordinators must review the view on Friday afternoon; post-Friday gaps must still be visible on Saturday morning. Verify Shiftly export schedule and CSV schema before scoping view build.
