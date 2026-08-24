// Crawls the built static export and reports the real internal link graph.
// Run after `npm run build`.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
if (!existsSync(OUT)) {
  console.error("No ./out — run `npm run build` first.");
  process.exit(1);
}

function walk(dir) {
  const found = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) found.push(...walk(p));
    else if (e === "index.html") found.push(p);
  }
  return found;
}

const IGNORE = new Set(["404", "_not-found"]);
const files = walk(OUT);
const slugOf = (f) => f.replace(/^out\/?/, "").replace(/index\.html$/, "").replace(/\/$/, "") || "/";

const inbound = new Map();
const outbound = new Map();
for (const f of files) { const s2 = slugOf(f); if (!IGNORE.has(s2)) inbound.set(s2, new Set()); }

for (const f of files) {
  const src = slugOf(f);
  if (IGNORE.has(src)) continue;
  const html = readFileSync(f, "utf8");
  const body = html.replace(/<footer[\s\S]*?<\/footer>/gi, "").replace(/<header[\s\S]*?<\/header>/gi, "");
  const targets = new Set();
  for (const m of body.matchAll(/href="\/([a-z0-9\-]*)\/"/g)) {
    const t = m[1] || "/";
    if (t !== src && inbound.has(t)) targets.add(t);
  }
  outbound.set(src, targets);
  for (const t of targets) inbound.get(t).add(src);
}

const rows = [...inbound.entries()]
  .map(([slug, set]) => ({ slug, in: set.size, out: outbound.get(slug)?.size ?? 0 }))
  .sort((a, b) => a.in - b.in);

const MIN_IN = 3;
const MIN_OUT = 4;
const orphans = rows.filter((r) => r.in === 0 && r.slug !== "/");
const weak = rows.filter((r) => r.in > 0 && r.in < MIN_IN && r.slug !== "/");
const thin = rows.filter((r) => r.out < MIN_OUT && r.slug !== "/");

console.log(`Pages crawled: ${rows.length}`);
console.log(`Inbound  — min ${rows[0].in}, median ${rows[Math.floor(rows.length / 2)].in}, max ${rows[rows.length - 1].in}`);
console.log("");
console.log("10 weakest inbound:");
rows.slice(0, 10).forEach((r) => console.log(`  ${String(r.in).padStart(3)} in / ${String(r.out).padStart(3)} out  ${r.slug}`));
console.log("");
console.log("5 strongest inbound:");
rows.slice(-5).reverse().forEach((r) => console.log(`  ${String(r.in).padStart(3)} in / ${String(r.out).padStart(3)} out  ${r.slug}`));
console.log("");

let fail = false;
if (orphans.length) { console.log(`FAIL orphans (0 inbound): ${orphans.map((o) => o.slug).join(", ")}`); fail = true; }
else console.log("PASS no orphan pages");
if (weak.length) { console.log(`WARN below ${MIN_IN} inbound: ${weak.map((w) => `${w.slug}(${w.in})`).join(", ")}`); }
else console.log(`PASS every page has >= ${MIN_IN} inbound links`);
if (thin.length) { console.log(`WARN below ${MIN_OUT} outbound: ${thin.map((t) => `${t.slug}(${t.out})`).join(", ")}`); }
else console.log(`PASS every page has >= ${MIN_OUT} outbound links`);

process.exit(fail ? 1 : 0);
