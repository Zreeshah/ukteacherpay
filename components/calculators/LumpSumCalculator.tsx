"use client";

import { useMemo, useState } from "react";
import { gbp } from "@/lib/format";

/**
 * TPS commutation. You exchange £1 of annual pension for £12 of tax-free cash,
 * capped by the HMRC 25%-of-capital-value rule (about 5.36x the annual pension
 * at a 12:1 factor). Final Salary members with an NPA of 60 also receive an
 * automatic lump sum of 3x pension on top.
 */
const FACTOR = 12;
const MAX_MULTIPLE = 5.36;

export default function LumpSumCalculator() {
  const [pension, setPension] = useState("18000");
  const [hasAuto, setHasAuto] = useState(false);
  const [wanted, setWanted] = useState("50");

  const r = useMemo(() => {
    const p = Math.max(0, Number(pension) || 0);
    const autoLump = hasAuto ? p * 3 : 0;
    const maxExtra = Math.max(0, p * MAX_MULTIPLE - autoLump);
    const pctWanted = Math.max(0, Math.min(100, Number(wanted) || 0)) / 100;
    const taken = maxExtra * pctWanted;
    const givenUp = taken / FACTOR;
    const residual = Math.max(0, p - givenUp);
    // Simple breakeven: how long to recoup the cash from the higher pension
    const breakeven = givenUp > 0 ? taken / givenUp : 0;
    return { p, autoLump, maxExtra, taken, givenUp, residual, totalCash: autoLump + taken, breakeven };
  }, [pension, hasAuto, wanted]);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <form className="card p-5" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-lg font-semibold">Your benefits</h2>
        <div className="mt-4 grid gap-4">
          <div>
            <label className="field-label" htmlFor="ls-pension">Annual pension before any lump sum (£)</label>
            <input id="ls-pension" className="field-input" inputMode="decimal" value={pension} onChange={(e) => setPension(e.target.value)} />
            <p className="mt-1 text-xs text-ink/55">Take this from your annual benefit statement.</p>
          </div>
          <label className="flex items-start gap-2.5 text-sm">
            <input type="checkbox" className="mt-0.5 h-4 w-4 accent-indigo-700" checked={hasAuto} onChange={(e) => setHasAuto(e.target.checked)} />
            <span>
              I have Final Salary service with a Normal Pension Age of 60
              <span className="block text-xs text-ink/55">Adds an automatic lump sum of 3x pension.</span>
            </span>
          </label>
          <div>
            <label className="field-label" htmlFor="ls-want">
              How much of the maximum extra cash do you want? ({wanted}%)
            </label>
            <input id="ls-want" type="range" min={0} max={100} step={5} className="mt-2 w-full accent-indigo-700" value={wanted} onChange={(e) => setWanted(e.target.value)} />
          </div>
        </div>
      </form>

      <div className="space-y-4">
        <div className="card number-box bg-ink p-6 text-white">
          <p className="text-sm text-white/70">Tax-free lump sum</p>
          <p className="safe-number-md mt-1 font-bold tabular text-accent">{gbp(r.totalCash)}</p>
          <p className="mt-1 text-sm text-white/70">
            leaving {gbp(r.residual)} a year of pension
          </p>
        </div>

        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-ink/10">
              <tr><td className="px-4 py-2.5 text-ink/80">Starting pension</td><td className="px-4 py-2.5 text-right tabular">{gbp(r.p)}</td></tr>
              {hasAuto && <tr><td className="px-4 py-2.5 text-ink/80">Automatic lump sum (3x)</td><td className="px-4 py-2.5 text-right tabular">{gbp(r.autoLump)}</td></tr>}
              <tr><td className="px-4 py-2.5 text-ink/80">Extra cash taken by commutation</td><td className="px-4 py-2.5 text-right tabular">{gbp(r.taken)}</td></tr>
              <tr><td className="px-4 py-2.5 text-ink/80">Pension given up</td><td className="px-4 py-2.5 text-right tabular">−{gbp(r.givenUp)}/yr</td></tr>
              <tr className="bg-accent-strong/5"><td className="px-4 py-2.5 font-semibold">Pension you keep</td><td className="px-4 py-2.5 text-right font-semibold tabular">{gbp(r.residual)}/yr</td></tr>
            </tbody>
          </table>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">Is it worth it?</h3>
          {r.givenUp > 0 ? (
            <p className="mt-2 text-sm text-ink/75">
              You are giving up {gbp(r.givenUp)} a year for {gbp(r.taken)} today.
              Ignoring inflation and tax, you would need about{" "}
              <strong>{r.breakeven.toFixed(0)} years</strong> of retirement to
              receive that money back through the higher pension. Because the
              pension rises with inflation each year and the cash does not, the
              real breakeven is longer than that.
            </p>
          ) : (
            <p className="mt-2 text-sm text-ink/75">
              You are taking no extra cash, so your full {gbp(r.p)} a year of
              inflation-linked pension stays intact.
            </p>
          )}
        </div>
        <p className="text-xs text-ink/55">
          Illustration only, using the standard 12:1 commutation factor and the
          HMRC 25% cap. The scheme publishes the definitive factors and your
          benefit statement is authoritative. Not financial advice.
        </p>
      </div>
    </div>
  );
}
