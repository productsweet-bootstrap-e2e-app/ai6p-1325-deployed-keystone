---
title: Weekend rota gaps are visibly flagged", so coordinators catch unfilled shifts before Saturday
id: RTV-109
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

As a roster coordinator, I want unfilled weekend shifts flagged visibly in the weekend view, so that I catch gaps before Saturday and have time to find cover.

## User Type

Roster coordinator at a small care provider

## User Need

to spot unfilled weekend shifts at a glance when planning cover

## Expected Outcome

Baseline: currently discovered unfilled shifts after Saturday 6am. Target: all unfilled shifts flagged and visible by Friday 4pm. Success = no unfilled weekend shift discovered after Saturday 6am during the pilot weekend.

## Problem Or Opportunity

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Scope

R1: Display a visual flag or indicator on unfilled weekend shifts (Saturday & Sunday only) in the weekend rota view.\nR2: Flag must clear automatically once a shift is assigned.\nR3: Weekend view is read-only in scope — no changes to shift entry, notifications, or weekday display.

## Proposed Design / Approach

Add a visual treatment (e.g., highlight, icon badge, or empty-slot marker) to empty shift cells in the existing weekend view. Populate the flag based on assignment status already tracked in the roster data. On shift assignment, re-render the weekend view to clear the flag.

## Verification Plan

- An unfilled Saturday or Sunday shift displays a clear visual flag when the weekend view is opened.\n- The flag is visible by Friday 4pm (coordinator workflow timing).\n- Once a volunteer is assigned to the shift, the flag disappears on the next view refresh.\n- During a pilot weekend (specific weekend TBD), no unfilled weekend shift goes undetected after Saturday 6am.

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
