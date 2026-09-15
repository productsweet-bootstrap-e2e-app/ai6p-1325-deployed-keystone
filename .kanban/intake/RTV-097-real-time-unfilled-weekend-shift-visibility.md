---
title: Real-time unfilled weekend shift visibility
id: RTV-097
status: intake
template_type: user-story
intake_state: refining
delivery_task_ids: []
created: 2026-09-15
updated: 2026-09-15
priority: high
owner: unassigned
tags:
  - rota
  - weekend
  - coverage
  - visibility
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a Roster coordinator at a care provider, I want see unfilled weekend shifts in the rota page without manual reload when someone drops a shift, so that Coordinator discovers gaps immediately when they occur, instead of discovering them when a shift is due to start.

## User Type

Roster coordinator at a care provider

## User Need

see unfilled weekend shifts in the rota page without manual reload when someone drops a shift

## Expected Outcome

Coordinator discovers gaps immediately when they occur, instead of discovering them when a shift is due to start

## Problem Or Opportunity

Today the coordinator tracks gaps by scanning a shared spreadsheet on Friday afternoon. When a volunteer drops a shift on Saturday morning, the gap goes unseen until the shift is due to start — a client has no cover.

## Scope

Display unfilled weekend shifts only (Saturday and Sunday). Update the view automatically when a shift is dropped. Weekend-only filtering in the existing rota page. No notifications or out-of-page alerts.

## Proposed Design / Approach

Add a real-time unfilled-shift view to the weekend rota page. Filter the shift list by weekend date and filled/unfilled status. Refresh the view when a shift-drop event occurs.

## Verification Plan

- A coordinator can load the weekend rota view and see all unfilled shifts listed
- When a coordinator drops a shift in the system, the unfilled-shift list updates within the rota page without a manual reload
- The coordinator can use the weekend view on Saturday morning and see any shifts dropped overnight

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
