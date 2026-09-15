---
title: Spot unfilled weekend shifts at a glance
id: RTV-107
status: intake
template_type: user-story
intake_state: refining
delivery_task_ids: []
created: 2026-09-15
updated: 2026-09-15
priority: medium
owner: AI agent + user
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a roster coordinator at a care provider, I want to see unfilled weekend shifts listed in real time when gaps open up, so that I can respond without checking manually.">

## User Type

Roster coordinators at a care provider

## User Need

see unfilled weekend shifts listed in real time when gaps open up

## Expected Outcome

Measure: the coordinator will audit two weekends of actual rota data and establish a baseline of unfilled shifts today; goal is to ensure every gap the system sees is visible immediately after a volunteer drops a shift, so the coordinator can respond without checking manually.

## Problem Or Opportunity

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Scope

R1: Weekend-only view of the existing rota page\nR2: List only unfilled (vacant) shifts in that view\nR3: Auto-refresh when someone drops a shift, without manual reload\nR4: Exclude: changes to weekday scheduling, alerting volunteers, or bulk-import of shifts

## Proposed Design / Approach

First deliverable: Weekend-only filter on the rota view listing all currently unfilled shifts, refreshing on shift-drop events. Success measure: the coordinator can open the rota and see every unfilled weekend shift in one place within 2 seconds of a volunteer dropping one.

## Verification Plan

- R1: Rota page has a weekend-only view toggle or filter\n- R2: The weekend view lists only shifts with no assigned volunteer\n- R3: The list updates automatically within 5 seconds of a shift being dropped via the app\n- Baseline audit: Coordinator counts unfilled weekend shifts over two consecutive weekends and documents the count

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
