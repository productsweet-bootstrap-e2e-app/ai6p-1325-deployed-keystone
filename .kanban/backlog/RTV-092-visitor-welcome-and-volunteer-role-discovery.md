---
title: Visitor welcome and volunteer role discovery
id: RTV-092
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

Multi-stage epic: home-page welcome copy for first-time visitors (stage 1), a volunteer roles listing page (stage 2), future stubs for partner-provided role descriptions and email reminders.

## Stages

```yaml
- stage_id: welcome-copy
  title: Home-page welcome copy (stage 1)
  status: designed
  summary: Deliver clear, welcoming copy on the home page that explains the site's purpose to first-time visitors and invites them to explore volunteer roles.
  child_task_ids:
    - RTV-094
  depends_on_stage: []
  exit_criteria: Home page displays the new welcome copy above the fold; copy is readable, grammatically correct, and explains the site's purpose in 1–2 sentences.
- stage_id: roles-page
  title: Volunteer roles listing page (stage 2)
  status: designed
  summary: Build a dedicated page that lists available volunteer roles with clear titles and static descriptions. The page is discoverable from the home page.
  child_task_ids:
    - RTV-095
  depends_on_stage:
    - welcome-copy
  exit_criteria: Roles page is live and reachable from the home page; at least one volunteer role is displayed with a clear title and description; page layout and copy are accessible.
- stage_id: future-enhancements
  title: Partner content and email reminders (future)
  status: stub
  summary: 'Future: Integrate partner-provided role descriptions and email reminders. Deferred pending confirmation of partner access and API availability.'
  child_task_ids: []
  depends_on_stage:
    - roles-page
```

## Questions

```yaml
- question: How will you measure whether first-time visitors actually understand the site's purpose? You mentioned asking five visitors during a pilot weekend — is that the agreed discovery plan, and who owns running that measurement?
  status: open
  thread: []
```
