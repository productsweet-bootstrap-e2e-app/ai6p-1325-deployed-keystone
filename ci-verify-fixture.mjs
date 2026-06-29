// AI6P-1577 S6b — fixture CI: a deterministic ~6-min PASS so repo.run-ci exercises
// the full re-entrant poll loop (≈8-9 polls) and the autonomous 1200s budget, then
// returns a green verdict. NOT a real ci:verify — this branch exists only to prove
// the isolated CI runner end-to-end on a sacrificial repo.
const SECONDS = 360;
console.log(`[s6b-fixture] ci:verify start — will pass in ${SECONDS}s`);
const start = Date.now();
let ticks = 0;
const t = setInterval(() => {
  ticks += 1;
  process.stdout.write(`[s6b-fixture] heartbeat ${ticks} (+${Math.round((Date.now()-start)/1000)}s)\n`);
}, 30000);
setTimeout(() => {
  clearInterval(t);
  console.log(`[s6b-fixture] ci:verify PASS after ${Math.round((Date.now()-start)/1000)}s`);
  process.exit(0);
}, SECONDS * 1000);
