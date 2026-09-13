---
title: "Coordinator: add weekend gap view to rota page"
id: RTV-055
status: backlog
template_type: implementation-task
parent_task_id: RTV-053
backlog_state: refining
created: 2026-09-13
updated: 2026-09-13
priority: high
owner: AI agent + user
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Coordinator can quickly see which Saturday and Sunday shifts are unfilled on the existing rota page.

## Scope

**R1.1:** Show unfilled shifts clearly on the rota page (new column, filter, or visual indicator). **R1.2:** Weekend shifts only (Saturday and Sunday). **R1.3:** Works with the existing rota data without schema changes. **Exclude:** Manual assignment UI, reminder automation, partner role descriptions.

## Proposed Design / Approach

Add a visual affordance (column highlight, badge, or filter toggle) to the existing rota view that surfaces empty weekend slots. Coordinator can scan and identify coverage gaps at a glance before the weekend.

## Verification Plan

- R1.1: Coordinator opens rota page and can identify which Saturday shifts are unfilled\n- R1.2: Coordinator opens rota page and can identify which Sunday shifts are unfilled\n- R1.3: Gap view does not require changes to the shift or volunteer data model
