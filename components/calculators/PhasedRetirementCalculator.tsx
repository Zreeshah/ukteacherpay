"use client";

import { useMemo, useState } from "react";
import { earlyRetirementFactor } from "@/lib/pension";
import { tpsScheme } from "@/data/tax-rates";
import { gbp, pct } from "@/lib/format";

/**
 * Phased Retirement Calculator
 *
 * A teacher reduces their role (e.g. from full-time to 0.6) and draws
 * pension on the "retired" portion while continuing to earn and accrue
 * on the remaining portion. If taken before NPA the retired slice
 * receives an actuarial reduction.
 */
export default function PhasedRetirementCalculator() {
  const [salary, setSalary] = useState("46939");
  const [accrued, setAccrued] = useState("12000");
  const [npa, setNpa] = useState("67");
  const [age, setAge] = useState("55");
  const [reduceTo, setReduceTo] = useState("60");

  const result = useMemo(() => {
    const fte = Math.max(0, Number(salary) || 0);
    const pension = Math.max(0, Number(accrued) || 0);
    const npaYr = Number(npa) || 67;
    const curAge = Number(age) || 55;
    const keepPct = Math.max(0, Math.min(100, Number(reduceTo) || 60)) / 100;
    const retirePct = 1 - keepPct;

    const yearsEarly = Math.max(0, npaYr - curAge);
    const factor = earlyRetirementFactor(yearsEarly);

    // Pension from retired portion
    const retiredPension = pension * retirePct;
    const reducedPension = retiredPension * factor;

    // Lump sum option on retired portion (12:1 commutation)
    const maxLump = retiredPension * 5.36;
    const pensionGivenUp = maxLump / 12;
    const pensionAfterLump = Math.max(0, reducedPension - pensionGivenUp * factor);

    // Ongoing salary from working portion
    const ongoingSalary = fte * keepPct;

    // Combined income
    const combinedNoLump = ongoingSalary + reducedPension;
    const combinedWithLump = ongoingSalary + pensionAfterLump;

    // New annual accrual on working portion
    const newAccrual = ongoingSalary * tpsScheme.accrualRate;

    return {
      retirePct,
      keepPct,
      yearsEarly,
      factor,
      retiredPension,
      reducedPension,
      maxLump,
      pensionAfterLump,
      ongoingSalary,
      combinedNoLump,
      combinedWithLump,
      newAccrual,
    };
  }, [salary, accrued, npa, age, reduceTo]);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      <form className="card p-5" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-lg font-semibold">Your phased retirement details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="pr-salary">Current FTE salary (£/yr)</label>
            <input id="pr-salary" className="field-input" inputMode="decimal" value={salary} onChange={(e) => setSalary(e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="pr-accrued">Accrued pension (£/yr)</label>
            <input id="pr-accrued" className="field-input" inputMode="decimal" value={accrued} onChange={(e) => setAccrued(e.target.value)} />
            <p className="mt-1 text-xs text-ink/55">
              The annual pension shown on your latest benefit statement.
            </p>
          </div>
          <div>
            <label className="field-label" htmlFor="pr-age">Your current age</label>
            <input id="pr-age" className="field-input" inputMode="numeric" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="pr-npa">Normal Pension Age</label>
            <input id="pr-npa" className="field-input" inputMode="numeric" value={npa} onChange={(e) => setNpa(e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="pr-reduce">Reduce role to (%)</label>
            <input id="pr-reduce" className="field-input" inputMode="numeric" value={reduceTo} onChange={(e) => setReduceTo(e.target.value)} />
            <p className="mt-1 text-xs text-ink/55">
              The percentage of your role you want to keep working.
              For example, 60 means you retire from 40% and keep working 60%.
            </p>
          </div>
        </div>
      </form>

      <div className="space-y-4">
        <div className="card number-box bg-ink p-6 text-white">
          <p className="text-sm text-white/70">Combined annual income</p>
          <p className="safe-number-md mt-1 font-bold tabular text-accent">{gbp(result.combinedNoLump)}</p>
          <p className="mt-1 text-sm text-white/70">salary + pension, before tax</p>

          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/15 pt-4 text-sm">
            <div>
              <p className="text-white/60">Ongoing salary ({pct(result.keepPct, 0)})</p>
              <p className="font-semibold tabular">{gbp(result.ongoingSalary)}</p>
            </div>
            <div>
              <p className="text-white/60">Pension drawn ({pct(result.retirePct, 0)})</p>
              <p className="font-semibold tabular">{gbp(result.reducedPension)}</p>
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
                <th className="px-4 py-2.5 font-semibold">Detail</th>
                <th className="px-4 py-2.5 text-right font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              <tr><td className="px-4 py-2.5 text-ink/80">Full accrued pension</td><td className="px-4 py-2.5 text-right tabular">{gbp(Number(accrued) || 0)}/yr</td></tr>
              <tr><td className="px-4 py-2.5 text-ink/80">Portion retired ({pct(result.retirePct, 0)})</td><td className="px-4 py-2.5 text-right tabular">{gbp(result.retiredPension)}/yr</td></tr>
              {result.yearsEarly > 0 && <tr><td className="px-4 py-2.5 text-ink/80">After actuarial reduction</td><td className="px-4 py-2.5 text-right tabular">{gbp(result.reducedPension)}/yr</td></tr>}
              <tr><td className="px-4 py-2.5 text-ink/80">Ongoing salary ({pct(result.keepPct, 0)})</td><td className="px-4 py-2.5 text-right tabular">{gbp(result.ongoingSalary)}/yr</td></tr>
              <tr className="font-semibold"><td className="px-4 py-2.5">Combined income</td><td className="px-4 py-2.5 text-right tabular">{gbp(result.combinedNoLump)}/yr</td></tr>
              <tr><td className="px-4 py-2.5 text-ink/80">Max lump sum on retired portion</td><td className="px-4 py-2.5 text-right tabular">{gbp(result.maxLump)}</td></tr>
              <tr><td className="px-4 py-2.5 text-ink/80">New accrual (working portion)</td><td className="px-4 py-2.5 text-right tabular">{gbp(result.newAccrual)}/yr</td></tr>
            </tbody>
          </table>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">Key points about phased retirement</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-ink/75">
            <li>You continue to build pension on the portion you keep working, at the same <strong>1/57th CARE accrual rate</strong>.</li>
            <li>The retired portion receives an <strong>actuarial reduction</strong> if taken before your Normal Pension Age.</li>
            <li>You can take a <strong>tax-free lump sum</strong> on the retired portion by commuting pension at 12:1.</li>
            <li>Your employer must agree to the reduced role — it is not an automatic entitlement.</li>
          </ul>
        </div>

        <p className="text-xs text-ink/55">
          Indicative projection only. Actuarial reduction factors are approximate — the scheme publishes exact factors. Not financial advice.
        </p>
      </div>
    </div>
  );
}
