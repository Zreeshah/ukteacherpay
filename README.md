# UK Teacher Pay

Free UK teacher pay, salary and pension calculators built on the STPCD 2026/27
pay scales and HMRC 2026/27 tax rates.

Static site: Next.js 16 (App Router, `output: "export"`), TypeScript, Tailwind CSS 4.
All calculators run client-side — no salary data is ever transmitted.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npx tsc --noEmit # type-check
```

### macOS note

Downloaded native binaries (`@next/swc`, Tailwind oxide, lightningcss) carry a
`com.apple.quarantine` flag that Gatekeeper blocks, which causes a
"<binary> Not Opened" popup on every build. `npm run unquarantine` strips it and
runs automatically via `postinstall`.

## Architecture

| Path | Purpose |
|---|---|
| `data/tax-rates.ts` | Single source of truth for tax year figures |
| `data/teacher-pay-scales.ts` | STPCD 2026/27 pay scales, all regions |
| `lib/payroll.ts` | Take-home pay engine (pension → tax → NI order) |
| `lib/pension.ts` | CARE projection, early retirement, redundancy |
| `content/pages/*.ts` | Typed content modules, one per topical hub |
| `content/index.ts` | Page registry + internal-link map |
| `app/[slug]/page.tsx` | Renders every content page |

### Calculation contract

Deductions are applied in this order, verified against live payroll benchmarks:

1. Pension — tiered on **full-time equivalent** salary, not actual part-time pay
2. Income tax — on `gross − pension − personal allowance`
3. National Insurance — on **gross** pay (TPS is net-pay, not salary sacrifice)
4. Student loan — on gross above the plan threshold

## Updating for a new year

1. `data/tax-rates.ts` — thresholds, bands, TPS tiers
2. `data/teacher-pay-scales.ts` — new STPCD figures
3. Update `lastUpdated` / `taxYearLabel`

## Licence

Content and code © UK Teacher Pay. Not financial advice.
