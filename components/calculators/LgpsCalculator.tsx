"use client";

import { useMemo, useState } from "react";
import { gbp, pct } from "@/lib/format";

/**
 * Local Government Pension Scheme (LGPS) — the scheme for school support
 * staff: teaching assistants, admin, technicians, caretakers. It is a CARE
 * scheme like the TPS but builds at 1/49th rather than 1/57th, and member
 * contributions are banded on ACTUAL pensionable pay, not FTE pay.
 *
 * Bands are the England & Wales 2026/27 structure.
 */
const LGPS_BANDS: { upTo: number | null; rate: number }[] = [
  { upTo: 17600, rate: 0.055 },
  { upTo: 27600, rate: 0.058 },
  { upTo: 44900, rate: 0.065 },
  { upTo: 56800, rate: 0.068 },
  { upTo: 79700, rate: 0.085 },
  { upTo: 112900, rate: 0.095 },
  { upTo: 133000, rate: 0.105 },
  { upTo: 199500, rate: 0.112 },
  { upTo: null, rate: 0.125 },
];

const ACCRUAL = 1 / 49;

function lgpsRate(actualPay: number): number {
  for (const b of LGPS_BANDS) if (b.upTo === null || actualPay <= b.upTo) return b.rate;
  return 0.125;
}

export default function LgpsCalculator() {
  const [pay, setPay] = useState("22000");
  const [years, setYears] = useState("20");
  const [accrued, setAccrued] = useState("0");
  const [growth, setGrowth] = useState("2.5");
  const [cpi, setCpi] = useState("2.0");
  const [termTime, setTermTime] = useState(true);

  const r = useMemo(() => {
    const basePay = Math.max(0, Number(pay) || 0);
    const n = Math.max(0, Math.round(Number(years) || 0));
    const g = (Number(growth) || 0) / 100;
    const rev = (Number(cpi) || 0) / 100;

    let accruedPension = Math.max(0, Number(accrued) || 0);
    let salary = basePay;
    let totalMember = 0;
    const rows: { year: number; pay: number; rate: number; added: number; total: number }[] = [];

    for (let y = 1; y <= n; y++) {
      const rate = lgpsRate(salary);
      const added = salary * ACCRUAL;
      accruedPension = accruedPension * (1 + rev) + added;
      totalMember += salary * rate;
      if (y <= 3 || y === n) rows.push({ year: y, pay: salary, rate, added, total: accruedPension });
      salary *= 1 + g;
    }

    return {
      rate: lgpsRate(basePay),
      annualBuild: basePay * ACCRUAL,
      projected: accruedPension,
      totalMember,
      employer: totalMember * (0.20 / lgpsRate(basePay)),
      rows,
    };
  }, [pay, years, accrued, growth, cpi]);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      <form className="card p-5" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-lg font-semibold">Your LGPS details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="lg-pay">Actual pensionable pay (£/yr)</label>
            <input id="lg-pay" className="field-input" inputMode="decimal" value={pay} onChange={(e) => setPay(e.target.value)} />
            <p className="mt-1 text-xs text-ink/55">
              Your real pay, not the full-time equivalent. For term-time staff
              this is the pro-rated figure on your payslip.
            </p>
          </div>
          <div>
            <label className="field-label" htmlFor="lg-years">Years still to work</label>
            <input id="lg-years" className="field-input" inputMode="numeric" value={years} onChange={(e) => setYears(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="lg-accrued">Pension already built (£/yr)</label>
            <input id="lg-accrued" className="field-input" inputMode="decimal" value={accrued} onChange={(e) => setAccrued(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="lg-growth">Pay growth (%/yr)</label>
            <input id="lg-growth" className="field-input" inputMode="decimal" value={growth} onChange={(e) => setGrowth(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="lg-cpi">CPI revaluation (%/yr)</label>
            <input id="lg-cpi" className="field-input" inputMode="decimal" value={cpi} onChange={(e) => setCpi(e.target.value)} />
          </div>
        </div>
        <label className="mt-4 flex items-start gap-2.5 border-t border-ink/10 pt-4 text-sm">
          <input type="checkbox" className="mt-0.5 h-4 w-4 accent-indigo-700" checked={termTime} onChange={(e) => setTermTime(e.target.checked)} />
          <span>
            I work term time only
            <span className="block text-xs text-ink/55">
              Reminder to enter your actual pro-rated pay above, not the FTE advert figure.
            </span>
          </span>
        </label>
      </form>

      <div className="space-y-4">
        <div className="card number-box bg-ink p-6 text-white">
          <p className="text-sm text-white/70">Projected LGPS pension</p>
          <p className="safe-number-md mt-1 font-bold tabular text-accent">{gbp(r.projected)}</p>
          <p className="mt-1 text-sm text-white/70">a year, for life, rising with inflation</p>
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/15 pt-4 text-sm">
            <div>
              <p className="text-white/60">Your contribution rate</p>
              <p className="font-semibold tabular">{pct(r.rate)}</p>
            </div>
            <div>
              <p className="text-white/60">Built each year</p>
              <p className="font-semibold tabular">{gbp(r.annualBuild)}</p>
            </div>
          </div>
        </div>

        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-paper text-left">
              <tr>
                <th className="px-4 py-2.5 font-semibold">Year</th>
                <th className="px-4 py-2.5 text-right font-semibold">Pay</th>
                <th className="px-4 py-2.5 text-right font-semibold">Rate</th>
                <th className="px-4 py-2.5 text-right font-semibold">Pension built</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {r.rows.map((row) => (
                <tr key={row.year}>
                  <td className="px-4 py-2.5 text-ink/80">{row.year}</td>
                  <td className="px-4 py-2.5 text-right tabular">{gbp(row.pay)}</td>
                  <td className="px-4 py-2.5 text-right tabular">{pct(row.rate)}</td>
                  <td className="px-4 py-2.5 text-right tabular">{gbp(row.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">How LGPS differs from the Teachers&apos; Pension</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-ink/75">
            <li>Builds at <strong>1/49th</strong> of pay each year, against 1/57th in the TPS — a faster accrual rate.</li>
            <li>Contribution bands use your <strong>actual</strong> pay, not the full-time equivalent. Part-time and term-time staff genuinely pay a lower rate.</li>
            <li>You can halve your contributions through the <strong>50/50 section</strong> and still keep full death and ill-health cover.</li>
            <li>Administered by your local pension fund, not Teachers&apos; Pensions.</li>
          </ul>
        </div>
        <p className="text-xs text-ink/55">
          Projection only, using the England &amp; Wales 2026/27 band structure.
          Your fund sets the definitive bands and your annual benefit statement
          is authoritative. Not financial advice.
        </p>
      </div>
    </div>
  );
}
