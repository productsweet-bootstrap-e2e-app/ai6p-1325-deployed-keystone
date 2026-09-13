---
title: Add mission copy to home page
id: RTV-060
status: backlog
template_type: implementation-task
parent_task_id: RTV-058
backlog_state: refining
created: 2026-09-13
updated: 2026-09-13
priority: high
owner: AI agent + user
tags: []
depends_on: []
related_files:
  - src/index.njk
  - src/_layouts/base.njk
comments: 0
attachments: 0
---
## Summary

Update the home page with a clear two-sentence mission statement explaining the site's purpose to first-time visitors

## Problem Or Opportunity

First-time visitors landing on the home page cannot immediately understand what the site is for or why they should use it

## Scope

R1: Add the exact copy provided to the home page
R2: Copy placement is visible in the page's hero or above-the-fold section
R3: No other home page elements change
R4: Copy is: 'We help a small care provider fill its weekend volunteer shifts. Pick a role, see what is needed this weekend, and put your name down.'

## Proposed Design / Approach

1. Open `src/index.njk` and locate the `<main>` section.\n2. Replace or augment the existing `<h1>` to integrate the mission copy: 'We help a small care provider fill its weekend volunteer shifts. Pick a role, see what is needed this weekend, and put your name down.'\n3. Preserve all other elements and styling.\n4. Test the page locally and on mobile to verify above-the-fold placement and readability.\n5. Commit with message referencing RTV-060.\nArchitecture: No changes to the C4 model; this is content-only modification to an existing home page."

## Verification Plan

- Verify the exact mission copy appears in the rendered home page HTML.\n- Confirm copy is visible above-the-fold on desktop (1280x720) and mobile (375x667) viewports.\n- Ensure no other home page elements or styling have changed.\n- Run the site build to confirm no Eleventy errors are introduced."

## Evidence Or Reproduction Clues

Current home page (`src/index.njk`) displays a welcome message 'Hello and welcome — we're so glad you found us.' and a note about Product Sweet bootstrap. This does not explain the site's mission to first-time visitors. The base layout (`src/_layouts/base.njk`) is a minimal HTML scaffold with no navigation or styling rules defined locally, suggesting the site uses a simple Eleventy 11ty templating setup."

## Impact

First-time visitors will immediately see the site's purpose, reducing friction for new volunteers who land on the home page without prior context. This supports Stage 1 exit criteria by establishing clear, above-the-fold communication."
