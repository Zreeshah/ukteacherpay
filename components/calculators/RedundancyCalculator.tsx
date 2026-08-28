"use client";

import { useMemo, useState } from "react";
import { STAT_WEEKLY_CAP } from "@/lib/pension";
import { gbp, gbp2 } from "@/lib/format";

export default function RedundancyCalculator() {
  const [age, setAge] = useState("45");
  const [service, setService] = useState("12");
  const [weekly, setWeekly] = useState("700");
  const [capped, setCapped] = useState(true);
  const [liftServiceCap, setLiftServiceCap] = useState(false);

  const result = useMemo(() => {
    const a = Number(age) || 0;
    const s = Number(service) || 0;
    const w = Number(weekly) || 0;
    const serviceYears = liftServiceCap ? s : Math.min(20, s);
    let weeks = 0;
    let under22 = 0;
    let mid = 0;
    let over41 = 0;
    for (let i = 0; i < Math.floor(serviceYears); i++) {
      const ageThen = a - 1 - i;
      if (ageThen >= 41) { weeks += 1.5; over41 += 1.5; }
      else if (ageThen >= 22) { weeks += 1; mid += 1; }
      else { weeks += 0.5; under22 += 0.5; }
    }
    const rate = capped ? Math.min(w, STAT_WEEKLY_CAP) : w;
    return {
      weeks, under22, mid, over41,
      rate,
      total: weeks * rate,
      counted: Math.floor(serviceYears),
      taxable: Math.max(0, weeks * rate - 30000),
    };
  }, [age, service, weekly, capped, liftServiceCap]);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <form className="card p-5" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-lg font-semibold">Your redundancy details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="rc-age">Your age</label>
            <input id="rc-age" className="field-input" inputMode="numeric" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="rc-service">Full years of service</label>
            <input id="rc-service" className="field-input" inputMode="numeric" value={service} onChange={(e) => setService(e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="rc-weekly">Gross weekly pay (£)</label>
            <input id="rc-weekly" className="field-input" inputMode="decimal" value={weekly} onChange={(e) => setWeekly(e.target.value)} />
            <p className="mt-1 text-xs text-ink/55">
              Annual salary ÷ 52. Statutory pay caps this at {gbp(STAT_WEEKLY_CAP)} a week.
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-2.5 border-t border-ink/10 pt-4">
          <label className="flex items-center gap-2.5 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-indigo-700" checked={capped} onChange={(e) => setCapped(e.target.checked)} />
            Apply the statutory weekly cap ({gbp(STAT_WEEKLY_CAP)})
          </label>
          <label className="flex items-center gap-2.5 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-indigo-700" checked={liftServiceCap} onChange={(e) => setLiftServiceCap(e.target.checked)} />
            Lift the 20-year service cap (enhanced employer terms)
          </label>
        </div>
      </form>

      <div className="space-y-4">
        <div className="card number-box bg-ink p-6 text-white">
          <p className="text-sm text-white/70">Estimated redundancy payment</p>
          <p className="safe-number-md mt-1 font-bold tabular text-accent">{gbp2(result.total)}</p>
          <p className="mt-1 text-sm text-white/70">
            {result.weeks} weeks&apos; pay at {gbp2(result.rate)} a week
          </p>
        </div>

        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-paper text-left">
              <tr>
                <th className="px-4 py-2.5 font-semibold">Age band during service</th>
                <th className="px-4 py-2.5 text-right font-semibold">Weeks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              <tr><td className="px-4 py-2.5 text-ink/80">Under 22 — half a week per year</td><td className="px-4 py-2.5 text-right tabular">{result.under22}</td></tr>
              <tr><td className="px-4 py-2.5 text-ink/80">22 to 40 — one week per year</td><td className="px-4 py-2.5 text-right tabular">{result.mid}</td></tr>
              <tr><td className="px-4 py-2.5 text-ink/80">41 and over — one and a half weeks per year</td><td className="px-4 py-2.5 text-right tabular">{result.over41}</td></tr>
              <tr className="bg-accent-strong/5"><td className="px-4 py-2.5 font-semibold">Total ({result.counted} years counted)</td><td className="px-4 py-2.5 text-right font-semibold tabular">{result.weeks}</td></tr>
            </tbody>
          </table>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">Tax position</h3>
          <p className="mt-2 text-sm text-ink/75">
            The first £30,000 of a genuine redundancy payment is tax free.
            {result.taxable > 0
              ? ` About ${gbp2(result.taxable)} of this payment would be taxable.`
              : " This payment falls entirely within the tax-free allowance."}
          </p>
        </div>
        <p className="text-xs text-ink/55">
          Statutory minimum estimate. Many teachers are covered by the Burgundy
          Book or a local authority scheme that pays more. Check your contract.
        </p>
      </div>
    </div>
  );
}
