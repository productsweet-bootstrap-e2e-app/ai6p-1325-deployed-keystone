---
title: I want the welcome page to say something friendlier. B603B3065382
id: PS-VW38TF-039
status: intake
template_type: user-story
intake_state: awaiting-user-review
delivery_task_ids: []
created: 2026-09-12
updated: 2026-09-12
priority: medium
owner: shaun+deliverysmoke@payminty.com
source: manual-intake
created_by: 797ea448-a0b1-70bb-08ef-d146ad8ddf0b
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a visitor to the welcome page, I want the welcome message text to sound friendlier, so that the page feels warmer/more welcoming.

## User Type

Visitors to the welcome page (the user did not specify a narrower audience — no preference given between new vs returning visitors).

## User Need

The user wants only the welcome message copy changed to sound friendlier. They explicitly said they have no strong preference on exact wording or tone and are fine with the team picking whichever reads best. Scope is limited to the welcome message text — nothing else on the page.

## Expected Outcome

The user did not give a measurable success check — they said it's fine to judge by whichever wording "reads best." No baseline or evaluation method was specified; this is an open item (see Questions).

## Problem Or Opportunity

The current welcome page copy reads as not friendly enough, per the reporter's judgement. No specific example of current wording or evidence was provided.

## Scope

R1: Update the welcome page's welcome message text to a friendlier tone/wording, chosen at the implementer's discretion since the user expressed no preference. Excludes: any other page content, layout, imagery, or non-welcome-message copy.

## Proposed Design / Approach

R1: Locate the welcome page's welcome message copy in the codebase and replace it with a single friendlier-toned rewrite, keeping length/placement roughly consistent with the current design system's tone (see Do's/Don'ts — no need to change layout or components).

## Verification Plan

- R1: Confirm the welcome page renders the new, friendlier message text and no other page content changed.

## Questions

```yaml
- question: Since there's no specific success metric, should we treat "you approve the final wording on review" as the acceptance check, or do you want something else (e.g. user feedback) tracked after release?
  status: open
  thread:
    - role: user
      text: Since there's no specific success metric, should we treat "you approve the final wording on review" as the acceptance check, or do you want something else (e.g. user feedback) tracked after release?
```

## Refinement Notes

Reporter confirmed via 3 refinement questions (audience, tone, success) that they have no strong preference on wording/tone and want only the welcome message text changed — nothing else. They did not provide a measurable success criterion, so Expected Outcome is left as an open item pending owner sign-off on the final wording rather than a numeric/behavioral target.
