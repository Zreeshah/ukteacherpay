"use client";

import { useMemo, useState } from "react";
import { gbp } from "@/lib/format";

export default function AvcCalculator() {
  const [age, setAge] = useState("40");
  const [retire, setRetire] = useState("67");
  const [monthly, setMonthly] = useState("100");
  const [growth, setGrowth] = useState("5");
  const [band, setBand] = useState("20");

  const result = useMemo(() => {
    const years = Math.max(0, Number(retire) - Number(age));
    const m = Number(monthly) || 0;
    const r = (Number(growth) || 0) / 100 / 12;
    const n = years * 12;
    const pot = r > 0 ? m * ((Math.pow(1 + r, n) - 1) / r) : m * n;
    const paidIn = m * n;
    const relief = Number(band) / 100;
    const netCost = m * (1 - relief);
    return { years, pot, paidIn, growthAmount: pot - paidIn, netCost, taxFreeCash: pot * 0.25 };
  }, [age, retire, monthly, growth, band]);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <form className="card p-5" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-lg font-semibold">Your AVC plan</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="avc-age">Current age</label>
            <input id="avc-age" className="field-input" inputMode="numeric" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="avc-retire">Retirement age</label>
            <input id="avc-retire" className="field-input" inputMode="numeric" value={retire} onChange={(e) => setRetire(e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="avc-monthly">Monthly contribution (£)</label>
            <input id="avc-monthly" type="range" min={0} max={1000} step={10} className="mt-2 w-full accent-indigo-700" value={monthly} onChange={(e) => setMonthly(e.target.value)} />
            <input id="avc-monthly-num" className="field-input" inputMode="decimal" value={monthly} onChange={(e) => setMonthly(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="avc-growth">Assumed growth (%/yr)</label>
            <select id="avc-growth" className="field-input" value={growth} onChange={(e) => setGrowth(e.target.value)}>
              <option value="3">Cautious — 3%</option>
              <option value="5">Medium — 5%</option>
              <option value="7">Adventurous — 7%</option>
            </select>
          </div>
          <div>
            <label className="field-label" htmlFor="avc-band">Your tax band</label>
            <select id="avc-band" className="field-input" value={band} onChange={(e) => setBand(e.target.value)}>
              <option value="20">Basic rate — 20%</option>
              <option value="40">Higher rate — 40%</option>
              <option value="45">Additional rate — 45%</option>
            </select>
          </div>
        </div>
      </form>

      <div className="space-y-4">
        <div className="card number-box bg-ink p-6 text-white">
          <p className="text-sm text-white/70">Projected AVC pot at {retire}</p>
          <p className="safe-number-md mt-1 font-bold tabular text-accent">{gbp(result.pot)}</p>
          <p className="mt-1 text-sm text-white/70">after {result.years} years of saving</p>
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/15 pt-4 text-sm">
            <div>
              <p className="text-white/60">You pay in</p>
              <p className="font-semibold tabular">{gbp(result.paidIn)}</p>
            </div>
            <div>
              <p className="text-white/60">Investment growth</p>
              <p className="font-semibold tabular">{gbp(result.growthAmount)}</p>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">What it actually costs you</h3>
          <p className="mt-2 text-sm text-ink/75">
            Because AVCs get tax relief at your marginal rate, a{" "}
            <strong>{gbp(Number(monthly) || 0)}</strong> monthly contribution
            reduces your take-home pay by only about{" "}
            <strong>{gbp(result.netCost)}</strong>.
          </p>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">At retirement</h3>
          <p className="mt-2 text-sm text-ink/75">
            Up to 25% of the pot — around{" "}
            <strong>{gbp(result.taxFreeCash)}</strong> — can normally be taken as
            tax-free cash. The rest is taxed as income when you draw it.
          </p>
        </div>
        <p className="text-xs text-ink/55">
          Illustration only, in today&apos;s money terms before charges. AVC pots
          are invested and can fall as well as rise — unlike your main TPS
          pension, which is guaranteed. This is not financial advice.
        </p>
      </div>
    </div>
  );
}
