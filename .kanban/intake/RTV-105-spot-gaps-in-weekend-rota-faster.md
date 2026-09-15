---
title: Spot gaps in weekend rota faster
id: RTV-105
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

As a volunteer at a small care provider, I want to see unfilled shifts in the weekend rota so I can pick up cover when shifts need filling.

## User Type

Volunteer at a small care provider

## User Need

to see unfilled shifts in the weekend rota and pick up cover, especially when gaps appear at the last minute

## Expected Outcome

Gaps are visible to me without searching, so I can spot opportunities to pick up extra shifts and help cover when volunteers drop out

## Problem Or Opportunity

When volunteers drop shifts on Saturday morning, the coordinator scrambles to find cover, but gaps are not visible to other volunteers who might be available to pick them up. Willing volunteers miss the chance to help.

## Scope

Focus on visibility of unfilled shifts to volunteers in weekend coverage. The solution must surface gaps quickly so volunteers can respond to same-day or next-day cancellations.

## Proposed Design / Approach

TBD — awaiting design decision on how gaps will be surfaced.

## Verification Plan

- A volunteer can see all currently unfilled weekend shifts without manually tracking coordinator messages or calls
- When a shift is cancelled or drops, the gap appears to other volunteers within X minutes
- Volunteers can pick up a gap from the visibility tool without additional coordinator steps
- No false positives (confirmed shifts are never marked as available for pickup)

## Questions

```yaml
- question: What is the acceptable latency for gap discovery after a volunteer cancels a Saturday shift? (e.g. real-time alert, within 5 minutes, by X am on Saturday morning?)
  status: open
  thread: []
```

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
