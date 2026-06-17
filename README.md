# ai6p-1325-deployed-keystone

A Eleventy 3 site, bootstrapped by Product Sweet (AI6P-249).

- **Live:** https://main.d2vhavssbhm34g.amplifyapp.com
- **Framework:** Eleventy 3
- **Hosting:** AWS Amplify (account `352438994403`)
- **Managed by:** Product Sweet bootstrap (AI6P-249)

## Local development

```bash
npm ci
npm run dev      # local dev server with watch
npm run build    # produce _site/ (deployable static output)
npm run preview  # serve the built output locally
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy-low.yml`, which builds
the site and triggers an AWS Amplify `RELEASE` job to the low environment.
Higher environments are promoted by the `promote-<env>.yml` workflows —
dispatched by the Product Sweet webapp with the reviewed commit pinned, never
on push. PRs are gated by the always-on `.github/workflows/pr-gate.yml` (the
single required status check). It classifies the diff in-job: changes only
under `.agent/`, `.kanban/`, or a root `*.md` run a fast content lane (lint +
typecheck + test, no build); anything else runs the full build lane.
