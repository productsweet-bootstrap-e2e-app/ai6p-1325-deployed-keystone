---
title: Warmer welcome message on front page for new visitors
id: PS-VW38TF-012
status: intake
template_type: user-story
intake_state: ready-for-dev
delivery_task_ids: []
created: 2026-07-20
updated: 2026-07-20
priority: medium
owner: AI agent + user
source: "Product owner feedback: front page feels bland"
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a First-time prospective customers landing on the front page, I want To feel welcomed by the copy/messaging on the front page rather than a plain, generic title, so that Opening the front page greets new visitors with a warm welcome message instead of the current plain title.

## User Type

First-time prospective customers landing on the front page

## User Need

To feel welcomed by the copy/messaging on the front page rather than a plain, generic title

## Expected Outcome

Opening the front page greets new visitors with a warm welcome message instead of the current plain title

## Problem Or Opportunity

New, first-time visitors currently land on a plain, generic front-page title with no welcoming tone. This is a missed opportunity to make a warm first impression and set expectations for the product's character.

## Scope

In scope: replacing the current plain front-page title/copy with a warm, friendly welcome message aimed at first-time visitors. Out of scope: any changes to opening-hours display (dropped from this story per product owner — may be raised separately later) and any other front-page content or layout changes.

## Proposed Design / Approach

Draft a couple of friendly, warm-toned welcome message options for the front-page hero/title area, for the product owner to pick from. Once a wording is chosen, replace the existing plain title with the selected message. No functional/data changes expected — this is a copy change to existing front-page markup.

## Verification Plan

- Confirm the front page displays the chosen warm welcome message in place of the previous plain title.
- Confirm the message reads naturally to a first-time visitor (informal review/read-through, not automated).
- Confirm no other front-page content, layout, or functionality was affected.

## Questions

```yaml
- question: The welcome-message change and the "show opening hours" idea look like two separate pieces of work (different copy vs. different data/source). Should opening hours be split into its own intake item, or do you want both delivered together in this one story? (No strong recommendation either way — your call, but splitting keeps each easier to verify.)
  status: answered
  thread:
    - role: user
      text: The welcome-message change and the "show opening hours" idea look like two separate pieces of work (different copy vs. different data/source). Should opening hours be split into its own intake item, or do you want both delivered together in this one story? (No strong recommendation either way — your call, but splitting keeps each easier to verify.)
    - role: agent
      text: 'User: dropping opening hours from this story — scope is welcome message only.'
- question: 'For the warm welcome message: do you have example wording or a tone in mind (e.g. friendly/casual vs. professional/warm), or should the team draft options for you to pick from? No strong recommendation — this shapes the Proposed Approach.'
  status: answered
  thread:
    - role: user
      text: 'For the warm welcome message: do you have example wording or a tone in mind (e.g. friendly/casual vs. professional/warm), or should the team draft options for you to pick from? No strong recommendation — this shapes the Proposed Approach.'
    - role: agent
      text: 'User: wants the team to draft a couple of options, friendly and warm tone.'
- question: 'If opening hours are included: where should the hours data come from (typed in once, or pulled from an existing source of truth like a settings page), and do hours ever change (e.g. holidays)? No recommendation — need your input to scope this correctly.'
  status: answered
  thread:
    - role: user
      text: 'If opening hours are included: where should the hours data come from (typed in once, or pulled from an existing source of truth like a settings page), and do hours ever change (e.g. holidays)? No recommendation — need your input to scope this correctly.'
    - role: agent
      text: Moot — opening hours dropped from scope per user.
```

## Refinement Notes

Refined 2026-07-20: product owner confirmed scope is welcome-message copy only — opening hours idea raised in the same conversation was explicitly dropped from this story (may become a separate intake item later). Product owner asked for a couple of friendly/warm wording options to choose from, rather than supplying exact copy themselves.
