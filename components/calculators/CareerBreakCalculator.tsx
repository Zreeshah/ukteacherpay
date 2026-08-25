"use client";

import { useMemo, useState } from "react";
import { tpsScheme } from "@/data/tax-rates";
import { tpsRate } from "@/lib/payroll";
import { gbp, pct } from "@/lib/format";

/**
 * Career Break Impact Calculator
 *
 * Shows the pension difference between an unbroken career and one with
 * a gap. During the break: no accrual, deferred revaluation (CPI only).
 * After the break: resume CARE accrual at CPI + 1.6%.
 */
export default function CareerBreakCalculator() {
  const [salary, setSalary] = useState("36413");
  const [accrued, setAccrued] = useState("3000");
  const [breakYears, setBreakYears] = useState("3");
  const [yearsAfter, setYearsAfter] = useState("20");
  const [growth, setGrowth] = useState("2.5");
  const [cpi, setCpi] = useState("2.0");

  const result = useMemo(() => {
    const pay = Math.max(0, Number(salary) || 0);
    const startPension = Math.max(0, Number(accrued) || 0);
    const gap = Math.max(0, Math.round(Number(breakYears) || 0));
    const after = Math.max(0, Math.round(Number(yearsAfter) || 0));
    const g = (Number(growth) || 0) / 100;
    const cpiRate = (Number(cpi) || 0) / 100;
    const activeReval = cpiRate + tpsScheme.activeRevaluation;
    const totalYears = gap + after;

    // --- Scenario A: Full career (no break) ---
    let fullPension = startPension;
    let fullSalary = pay;
    let fullContribs = 0;
    for (let y = 0; y < totalYears; y++) {
      const earned = fullSalary * tpsScheme.accrualRate;
      fullPension = fullPension * (1 + activeReval) + earned;
      fullContribs += fullSalary * tpsRate(fullSalary);
      fullSalary *= (1 + g);
    }

    // --- Scenario B: Career with a break ---
    let breakPension = startPension;
    let breakSalary = pay;
    let breakContribs = 0;

    // During the break: deferred revaluation (CPI only), no accrual
    for (let y = 0; y < gap; y++) {
      breakPension *= (1 + cpiRate);
      // Salary still grows in the market (for when they return)
      breakSalary *= (1 + g);
    }

    // After the break: resume active service
    for (let y = 0; y < after; y++) {
      const earned = breakSalary * tpsScheme.accrualRate;
      breakPension = breakPension * (1 + activeReval) + earned;
      breakContribs += breakSalary * tpsRate(breakSalary);
      breakSalary *= (1 + g);
    }

    const pensionGap = fullPension - breakPension;
    const monthlyGap = pensionGap / 12;
    const contribsSaved = fullContribs - breakContribs;

    return {
      fullPension,
      breakPension,
      pensionGap,
      monthlyGap,
      fullContribs,
      breakContribs,
      contribsSaved,
      totalYears,
      gap,
      after,
      pctLost: fullPension > 0 ? pensionGap / fullPension : 0,
    };
  }, [salary, accrued, breakYears, yearsAfter, growth, cpi]);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      <form className="card p-5" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-lg font-semibold">Career break details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="cb-salary">Current FTE salary (£/yr)</label>
            <input id="cb-salary" className="field-input" inputMode="decimal" value={salary} onChange={(e) => setSalary(e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="cb-accrued">Pension already built (£/yr)</label>
            <input id="cb-accrued" className="field-input" inputMode="decimal" value={accrued} onChange={(e) => setAccrued(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="cb-break">Break length (years)</label>
            <input id="cb-break" className="field-input" inputMode="numeric" value={breakYears} onChange={(e) => setBreakYears(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="cb-after">Years working after break</label>
            <input id="cb-after" className="field-input" inputMode="numeric" value={yearsAfter} onChange={(e) => setYearsAfter(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="cb-growth">Salary growth (%/yr)</label>
            <input id="cb-growth" className="field-input" inputMode="decimal" value={growth} onChange={(e) => setGrowth(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="cb-cpi">CPI assumption (%/yr)</label>
            <input id="cb-cpi" className="field-input" inputMode="decimal" value={cpi} onChange={(e) => setCpi(e.target.value)} />
          </div>
        </div>
      </form>

      <div className="space-y-4">
        <div className="card number-box bg-ink p-6 text-white">
          <p className="text-sm text-white/70">Pension gap from a {result.gap}-year break</p>
          <p className="safe-number-md mt-1 font-bold tabular text-accent">{gbp(result.pensionGap)}</p>
          <p className="mt-1 text-sm text-white/70">less pension each year ({gbp(result.monthlyGap)}/month)</p>

          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/15 pt-4 text-sm">
            <div>
              <p className="text-white/60">Without break</p>
              <p className="font-semibold tabular">{gbp(result.fullPension)}/yr</p>
            </div>
            <div>
              <p className="text-white/60">With {result.gap}-yr break</p>
              <p className="font-semibold tabular">{gbp(result.breakPension)}/yr</p>
            </div>
          </div>

          <div className="mt-3 border-t border-white/15 pt-3 text-sm">
            <p className="text-white/60">
              Pension reduction: {pct(result.pctLost)} · Contributions saved during break: {gbp(result.contribsSaved)}
            </p>
          </div>
        </div>

        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-paper text-left">
              <tr>
                <th className="px-4 py-2.5 font-semibold">Scenario</th>
                <th className="px-4 py-2.5 text-right font-semibold">Annual pension</th>
                <th className="px-4 py-2.5 text-right font-semibold">Contributions paid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              <tr>
                <td className="px-4 py-2.5 text-ink/80">No break ({result.totalYears} yrs service)</td>
                <td className="px-4 py-2.5 text-right tabular">{gbp(result.fullPension)}</td>
                <td className="px-4 py-2.5 text-right tabular">{gbp(result.fullContribs)}</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 text-ink/80">With {result.gap}-yr break ({result.after} yrs after)</td>
                <td className="px-4 py-2.5 text-right tabular">{gbp(result.breakPension)}</td>
                <td className="px-4 py-2.5 text-right tabular">{gbp(result.breakContribs)}</td>
              </tr>
              <tr className="font-semibold">
                <td className="px-4 py-2.5">Difference</td>
                <td className="px-4 py-2.5 text-right tabular text-red-600">−{gbp(result.pensionGap)}/yr</td>
                <td className="px-4 py-2.5 text-right tabular text-green-700">+{gbp(result.contribsSaved)} saved</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">What happens during a break</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-ink/75">
            <li>You stop accruing new pension — no contributions, no 1/57th added.</li>
            <li>Your existing pension becomes <strong>deferred</strong> and revalues at <strong>CPI only</strong> (not the CPI + 1.6% that active members receive).</li>
            <li>When you return to teaching, you rejoin the TPS and resume accruing at the full <strong>CPI + 1.6%</strong> active rate on new accruals.</li>
            <li>The gap reduces your lifetime pension but you also save on contributions during the break.</li>
          </ul>
        </div>

        <p className="text-xs text-ink/55">
          Indicative comparison only. Actual revaluation uses the September CPI figure applied the following April. Not financial advice.
        </p>
      </div>
    </div>
  );
}
