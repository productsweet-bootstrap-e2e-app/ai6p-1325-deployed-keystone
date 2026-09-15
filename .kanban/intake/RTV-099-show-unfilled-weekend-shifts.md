---
title: Show unfilled weekend shifts
id: RTV-099
status: intake
template_type: user-story
intake_state: refining
delivery_task_ids: []
created: 2026-09-15
updated: 2026-09-15
priority: high
owner: roster-coordinator
tags:
  - rota
  - weekend
  - urgent
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a roster coordinators at a care provider, I want see unfilled weekend shifts in one place without manual refresh, so that when a volunteer drops a shift on Saturday morning, the unfilled slot appears on screen live so the coordinator can act immediately and find cover before service starts.

## User Type

roster coordinators at a care provider

## User Need

see unfilled weekend shifts in one place without manual refresh

## Expected Outcome

when a volunteer drops a shift on Saturday morning, the unfilled slot appears on screen live so the coordinator can act immediately and find cover before service starts

## Problem Or Opportunity

Today the coordinator scans a shared spreadsheet on Friday afternoon. Gaps are missed when someone drops a shift on Saturday morning and nobody notices until the shift starts — a client goes without cover.

## Scope

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Proposed Design / Approach

Add a weekend-only view in the existing rota page that lists only unfilled shifts. The view auto-refreshes when someone cancels, so no manual reload is needed.

## Verification Plan

- When a volunteer is removed from a Saturday or Sunday shift, the unfilled slot appears in the weekend view within 10 seconds
- The coordinator can see at a glance which shifts need cover and who they are for
- The view updates live without the coordinator refreshing the page

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
