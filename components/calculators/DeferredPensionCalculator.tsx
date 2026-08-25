"use client";

import { useMemo, useState } from "react";
import { earlyRetirementFactor } from "@/lib/pension";
import { gbp, pct } from "@/lib/format";

/**
 * Deferred Pension Calculator
 *
 * For teachers who have LEFT the profession. Their accrued CARE pension
 * sits deferred and is revalued each year by CPI only (not CPI + 1.6%
 * which active members receive). At NPA the full amount is payable; if
 * taken early an actuarial reduction applies.
 */
export default function DeferredPensionCalculator() {
  const [deferred, setDeferred] = useState("6000");
  const [yearLeft, setYearLeft] = useState("2024");
  const [npa, setNpa] = useState("67");
  const [currentAge, setCurrentAge] = useState("35");
  const [cpi, setCpi] = useState("2.0");
  const [drawAge, setDrawAge] = useState("67");

  const result = useMemo(() => {
    const pension = Math.max(0, Number(deferred) || 0);
    const left = Number(yearLeft) || 2024;
    const npaAge = Number(npa) || 67;
    const age = Number(currentAge) || 35;
    const cpiRate = (Number(cpi) || 0) / 100;
    const draw = Number(drawAge) || npaAge;

    const yearsToNpa = Math.max(0, npaAge - age);
    const yearsToDraw = Math.max(0, draw - age);
    const currentYear = 2026;
    const yearsAlreadyDeferred = Math.max(0, currentYear - left);

    // Revalue from the year they left to now
    let revalued = pension * Math.pow(1 + cpiRate, yearsAlreadyDeferred);

    // Project forward to draw date
    const yearsForward = Math.max(0, yearsToDraw - 0); // from now
    const projectedAtDraw = revalued * Math.pow(1 + cpiRate, yearsForward);

    // Yearly projection table
    const rows: { year: number; age: number; value: number }[] = [];
    let val = revalued;
    for (let y = 0; y <= yearsForward; y++) {
      const thisAge = age + y;
      if (y === 0 || thisAge === draw || thisAge === npaAge || y === yearsForward || y % 5 === 0) {
        rows.push({ year: currentYear + y, age: thisAge, value: val });
      }
      val *= (1 + cpiRate);
    }

    // Early retirement reduction if drawing before NPA
    const yearsEarly = Math.max(0, npaAge - draw);
    const factor = earlyRetirementFactor(yearsEarly);
    const afterReduction = projectedAtDraw * factor;

    // Lump sum option
    const maxLump = afterReduction * 5.36;
    const pensionGivenUp = maxLump / 12;
    const pensionAfterLump = Math.max(0, afterReduction - pensionGivenUp);

    return {
      currentValue: revalued,
      projectedAtDraw,
      yearsEarly,
      factor,
      afterReduction,
      maxLump,
      pensionAfterLump,
      yearsToNpa,
      yearsToDraw,
      rows,
      drawAge: draw,
    };
  }, [deferred, yearLeft, npa, currentAge, cpi, drawAge]);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      <form className="card p-5" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-lg font-semibold">Your deferred pension details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="dp-amount">Deferred pension (£/yr)</label>
            <input id="dp-amount" className="field-input" inputMode="decimal" value={deferred} onChange={(e) => setDeferred(e.target.value)} />
            <p className="mt-1 text-xs text-ink/55">
              The annual pension on your deferred benefit statement at the date you left.
            </p>
          </div>
          <div>
            <label className="field-label" htmlFor="dp-left">Year you left teaching</label>
            <input id="dp-left" className="field-input" inputMode="numeric" value={yearLeft} onChange={(e) => setYearLeft(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="dp-age">Your current age</label>
            <input id="dp-age" className="field-input" inputMode="numeric" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="dp-npa">Normal Pension Age</label>
            <input id="dp-npa" className="field-input" inputMode="numeric" value={npa} onChange={(e) => setNpa(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="dp-cpi">Assumed CPI (%/yr)</label>
            <input id="dp-cpi" className="field-input" inputMode="decimal" value={cpi} onChange={(e) => setCpi(e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="dp-draw">Age you want to draw pension</label>
            <input id="dp-draw" className="field-input" inputMode="numeric" value={drawAge} onChange={(e) => setDrawAge(e.target.value)} />
            <p className="mt-1 text-xs text-ink/55">
              Earliest age 55 (rising to 57 from 2028). Drawing before NPA triggers an actuarial reduction.
            </p>
          </div>
        </div>
      </form>

      <div className="space-y-4">
        <div className="card number-box bg-ink p-6 text-white">
          <p className="text-sm text-white/70">Projected pension at age {result.drawAge}</p>
          <p className="safe-number-md mt-1 font-bold tabular text-accent">{gbp(result.afterReduction)}</p>
          <p className="mt-1 text-sm text-white/70">a year, for life, rising with CPI</p>

          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/15 pt-4 text-sm">
            <div>
              <p className="text-white/60">Estimated value today</p>
              <p className="font-semibold tabular">{gbp(result.currentValue)}</p>
            </div>
            <div>
              <p className="text-white/60">Value at NPA (unreduced)</p>
              <p className="font-semibold tabular">{gbp(result.projectedAtDraw / (result.yearsEarly > 0 ? result.factor : 1))}</p>
            </div>
          </div>

          {result.yearsEarly > 0 && (
            <div className="mt-3 border-t border-white/15 pt-3 text-sm">
              <p className="text-white/60">
                Actuarial reduction: {pct(1 - result.factor, 1)} ({result.yearsEarly} yr{result.yearsEarly !== 1 ? "s" : ""} before NPA)
              </p>
            </div>
          )}
        </div>

        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-paper text-left">
              <tr>
                <th className="px-4 py-2.5 font-semibold">Year</th>
                <th className="px-4 py-2.5 font-semibold">Age</th>
                <th className="px-4 py-2.5 text-right font-semibold">Revalued pension</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {result.rows.map((row) => (
                <tr key={row.year}>
                  <td className="px-4 py-2.5 text-ink/80">{row.year}</td>
                  <td className="px-4 py-2.5 text-ink/80">{row.age}</td>
                  <td className="px-4 py-2.5 text-right tabular">{gbp(row.value)}/yr</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">Lump sum option</h3>
          <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-ink/60">Max tax-free lump sum</p>
              <p className="font-semibold tabular">{gbp(result.maxLump)}</p>
            </div>
            <div>
              <p className="text-ink/60">Reduced annual pension</p>
              <p className="font-semibold tabular">{gbp(result.pensionAfterLump)}/yr</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-ink/55">
          Deferred benefits are revalued by CPI each April. Actual CPI varies year to year — the figure above uses a fixed assumption. Not financial advice.
        </p>
      </div>
    </div>
  );
}
