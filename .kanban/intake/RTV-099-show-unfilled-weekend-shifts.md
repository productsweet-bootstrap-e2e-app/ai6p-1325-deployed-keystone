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

**R1:** Display a weekend-only view in the existing rota page that shows shifts on Saturday and Sunday with no volunteer assigned.  \n**R2:** The view auto-refreshes when a volunteer is removed from a weekend shift (no manual page reload needed).  \n**R3:** Refresh latency should be 10 seconds or less.  \n**Exclusions:** No notifications, alerts, or email; Friday evening shifts out of scope; no coordinator-configurable date ranges in v1."

## Proposed Design / Approach

**Deliverable 1 — Weekend View Component (R1, R2, R3):**  
Add a weekend-only view tab or section to the existing rota page. The component fetches unfilled weekend shifts on initial load and subscribes to real-time updates via the existing rota event stream. When a volunteer is removed from a Saturday or Sunday shift, the event triggers a local state update that re-renders the list within the 10-second SLA. The view displays shift name, time, and coverage status at a glance, with no manual refresh required."

## Verification Plan

- **R1:** Weekend view is visible on the rota page and displays only Saturday and Sunday shifts with no assigned volunteer.  \n- **R2:** When a volunteer is removed from a Saturday or Sunday shift, the unfilled slot appears in the weekend view within 10 seconds without the coordinator refreshing the page.  \n- **R3:** The coordinator can see at a glance which shifts need cover and for whom (shift name and time visible)."

## Questions

```yaml
- question: Is the 10-second refresh SLA a hard guarantee that must pass acceptance, or is it the typical expected latency (with occasional delays acceptable)?
  status: open
  thread:
    - role: agent
      text: The 10-second latency is a typical expected case for when the rota backend is responsive. Occasional delays beyond 10 seconds are acceptable; this is not a hard SLA that blocks acceptance. The goal is to prevent the coordinator from needing to manually refresh.
- question: When a new unfilled shift appears in the weekend view, should there be a visual indicator (e.g., highlight, badge) so the coordinator notices the change immediately, or is a silent update sufficient?
  status: open
  thread: []
```

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
