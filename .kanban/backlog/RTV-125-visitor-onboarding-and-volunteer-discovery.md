---
title: Visitor onboarding and volunteer discovery
id: RTV-125
status: backlog
template_type: implementation-task
kind: epic
backlog_state: refining
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

Help first-time visitors understand the site's purpose and give volunteers a clear path to available roles.

## User Type

first-time visitors and potential volunteers

## User Need

understand what the site is for and what volunteer roles are available

## Expected Outcome

A visitor landing on the home page sees clear purpose copy explaining the site; volunteers can navigate to a roles page listing available opportunities

## Scope

Stage 1: Home-page purpose copy explaining the site's mission. Stage 2: Volunteer roles page listing 2-4 available roles with brief descriptions. Stage 3 (stub): Discovery on partner-provided content and email reminders (decision pending pilot feedback).

## Proposed Design / Approach

Stage 1: Write and integrate accessible, welcoming copy on the home page that explains the site's purpose. Stage 2: Create a dedicated roles page listing roles the platform supports. Stage 3: Defer until pilot weekend shows whether partner integrations are needed.

## Verification Plan

1. Visitor lands on home page and sees purpose statement within above-the-fold area
2. Purpose statement clearly explains what the site is for in plain language
3. Volunteer can navigate to roles page from home page
4. Roles page lists 2-4 roles with title and brief description for each
5. All pages meet accessibility standards

## Refinement Notes

Partner access and email reminder approach are not confirmed; keep those out of scope until the pilot weekend.

## Stages

```yaml
- stage_id: home-page-purpose
  title: Home-page purpose copy
  status: designed
  summary: Write and integrate clear, accessible copy on the home page that explains the site's purpose to first-time visitors. This is the entry point for visitor understanding.
  child_task_ids:
    - RTV-129
  depends_on_stage: []
  exit_criteria: Purpose statement is live above the fold, explains the site's mission in plain language, meets accessibility standards, and includes a link to the roles page.
```
