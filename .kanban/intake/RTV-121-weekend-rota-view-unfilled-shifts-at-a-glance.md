---
title: "Weekend rota: view unfilled shifts at a glance"
id: RTV-121
status: intake
template_type: user-story
intake_state: refining
delivery_task_ids: []
created: 2026-09-15
updated: 2026-09-15
priority: high
owner: AI agent + user
tags:
  - rota
  - staffing
  - ui
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a roster coordinator, I want to see unfilled weekend shifts in one place so that I can quickly find and reassign cover without refreshing the page manually.

## User Type

roster coordinator at a small care provider

## User Need

see unfilled weekend shifts without manual page reloads

## Expected Outcome

A weekend-only filter on the existing rota page that lists all unfilled shifts; the view updates live when someone drops a shift

## Problem Or Opportunity

Currently the coordinator has to scan the full rota or manually refresh to spot weekend gaps, especially when someone drops a shift mid-week.

## Scope

R1: Add a 'Weekend Only' toggle/filter to the existing rota page
R2: Show only shifts with no assigned worker
R3: Update the view in real-time when a shift assignment changes or a worker drops a shift
R4: Exclude: weekday shifts, already-filled weekend shifts, historical rotas
R5: Constraint: Use existing rota data; no new data structure

## Proposed Design / Approach

Extend the rota page filter bar with a weekend-only toggle. When active, filter the display to (weekend AND unfilled). Wire the toggle to the existing shift-change event stream so updates flow without reload.

## Verification Plan

1. Toggle switches on; rota shows only Sat/Sun shifts with no assignee
2. Toggle switches off; rota returns to default view
3. When a live shift drop occurs, the weekend view updates without page reload
4. Weekday shifts do not appear in weekend-only view, even if unfilled
5. Already-filled weekend shifts do not appear in the view

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
