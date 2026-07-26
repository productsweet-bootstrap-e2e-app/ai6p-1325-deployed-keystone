// Harness check seeded by the AI6P-2113 backfill (AI6P-2182).
//
// Deliberately asserts nothing about this project's components — it was added by
// a backfill that has never seen your code. Its job is to prove the harness
// itself works: vitest resolves, the jsdom environment is real, and the DOM
// matchers are loaded.
//
// **It fails if the DOM environment is missing.** A suite misconfigured to run
// under Node would otherwise exit 0 having run nothing, and the gate would go
// green for the wrong reason.
//
// A test file is also required for the gate to be green at all: `vitest run`
// exits non-zero when no test matches, so deleting this without replacing it
// turns your required check red.
//
// **What jsdom cannot do:** there is no layout engine. Clipping, overflow,
// scrolling, element size and position all read as zero. Assert on content,
// roles and behaviour; verify anything geometric in a real browser.
import { describe, expect, it } from 'vitest';

describe('test harness', () => {
  it('runs in a DOM environment', () => {
    expect(typeof document).toBe('object');
    const el = document.createElement('div');
    // Asserted against the DOM realm's own constructor, not the test realm's
    // `Object` — jsdom elements live in a separate realm, so a cross-realm
    // check can be false while the DOM works perfectly.
    expect(el).toBeInstanceOf(window.HTMLElement);
    expect(el.tagName).toBe('DIV');
  });

  it('has the jest-dom matchers loaded', () => {
    const el = document.createElement('span');
    el.textContent = 'ready';
    document.body.appendChild(el);
    expect(el).toBeInTheDocument();
  });
});
