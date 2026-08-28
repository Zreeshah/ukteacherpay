"use client";

import { useMemo, useState } from "react";
import type { Region } from "@/data/teacher-pay-scales";
import { projectCarePension, earlyRetirementFactor } from "@/lib/pension";
import { gbp, pct } from "@/lib/format";

export default function PensionCalculator({ region = "england" }: { region?: Region }) {
  const isScotland = region === "scotland";
  const [salary, setSalary] = useState("46939");
  const [age, setAge] = useState("40");
  const [npa, setNpa] = useState("67");
  const [accrued, setAccrued] = useState("8000");
  const [fraction, setFraction] = useState("100");
  const [cpi, setCpi] = useState("2.0");
  const [growth, setGrowth] = useState("3.0");
  const [retireAt, setRetireAt] = useState("67");

  const years = Math.max(0, Number(npa) - Number(age));
  const result = useMemo(
    () =>
      projectCarePension({
        currentSalary: Number(salary) || 0,
        yearsToRetirement: years,
        accruedPension: Number(accrued) || 0,
        salaryGrowth: (Number(growth) || 0) / 100,
        cpi: (Number(cpi) || 0) / 100,
        fraction: (Number(fraction) || 100) / 100,
      }),
    [salary, years, accrued, growth, cpi, fraction],
  );

  const yearsEarly = Math.max(0, Number(npa) - Number(retireAt));
  const factor = earlyRetirementFactor(yearsEarly);
  const reduced = result.projectedPension * factor;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      <form className="card p-5" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-lg font-semibold">Your pension details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { id: "salary", label: "Current FTE salary (£)", v: salary, set: setSalary },
            { id: "accrued", label: "Pension already built up (£/yr)", v: accrued, set: setAccrued },
            { id: "age", label: "Your age now", v: age, set: setAge },
            { id: "npa", label: "Normal Pension Age", v: npa, set: setNpa },
            { id: "fraction", label: "Average % FTE from now", v: fraction, set: setFraction },
            { id: "growth", label: "Salary growth (%/yr)", v: growth, set: setGrowth },
            { id: "cpi", label: "CPI assumption (%/yr)", v: cpi, set: setCpi },
            { id: "retireAt", label: "Age you want to retire", v: retireAt, set: setRetireAt },
          ].map((f) => (
            <div key={f.id}>
              <label className="field-label" htmlFor={`pc-${f.id}`}>{f.label}</label>
              <input
                id={`pc-${f.id}`}
                className="field-input"
                inputMode="decimal"
                value={f.v}
                onChange={(e) => f.set(e.target.value)}
              />
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink/55">
          Your annual benefit statement shows the pension you have already built
          up. Enter that in &ldquo;pension already built up&rdquo;.
          {isScotland && " This projection uses shared CARE mechanics; Scottish contribution bands are not modelled."}
        </p>
      </form>

      <div className="space-y-4">
        <div className="card number-box bg-ink p-6 text-white">
          <p className="text-sm text-white/70">
            Projected pension at age {npa}
          </p>
          <p className="safe-number-md mt-1 font-bold tabular text-accent">
            {gbp(result.projectedPension)}
          </p>
          <p className="mt-1 text-sm text-white/70">
            a year, for life, rising with inflation
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/15 pt-4 text-sm">
            <div>
              <p className="text-white/60">Already built up</p>
              <p className="font-semibold tabular">{gbp(result.accruedStart)}</p>
            </div>
            <div>
              <p className="text-white/60">Added over {years} more years</p>
              <p className="font-semibold tabular">{gbp(result.earnedFromNow)}</p>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">If you retire at {retireAt}</h3>
          {yearsEarly > 0 ? (
            <p className="mt-2 text-sm text-ink/75">
              Taking benefits {yearsEarly} year{yearsEarly === 1 ? "" : "s"}{" "}
              early applies an actuarial reduction of about{" "}
              <strong>{pct(1 - factor, 1)}</strong>. Your pension would be
              roughly <strong>{gbp(reduced)}</strong> a year instead of{" "}
              {gbp(result.projectedPension)} — a reduction that lasts for life.
            </p>
          ) : (
            <p className="mt-2 text-sm text-ink/75">
              Retiring at your Normal Pension Age means no actuarial reduction.
              You would receive the full {gbp(result.projectedPension)} a year.
            </p>
          )}
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">Tax-free lump sum options</h3>
          <p className="mt-2 text-sm text-ink/75">
            You can exchange pension for cash at £12 of lump sum for every £1 of
            annual pension given up, up to roughly 25% of the value of your
            benefits.
          </p>
          <ul className="mt-2 space-y-1 text-sm text-ink/75">
            <li>Maximum lump sum: <strong>{gbp(result.maxLumpSum)}</strong></li>
            <li>
              Pension left after taking it:{" "}
              <strong>{gbp(result.reducedPensionWithMaxLumpSum)}</strong> a year
            </li>
          </ul>
        </div>

        {isScotland ? (
          <div className="card p-5">
            <h3 className="text-sm font-semibold">Scottish contribution note</h3>
            <p className="mt-2 text-sm text-ink/75">
              This tool projects the shared CARE accrual and revaluation mechanics.
              It does not estimate Scottish Teachers&apos; Pension Scheme contribution
              bands or employer rates. Check SPPA for those figures.
            </p>
          </div>
        ) : (
          <div className="card p-5">
            <h3 className="text-sm font-semibold">What you and your employer pay in</h3>
            <ul className="mt-2 space-y-1 text-sm text-ink/75">
              <li>Your contributions over {years} years: <strong>{gbp(result.totalContributions)}</strong></li>
              <li>Employer contributions at 28.8%: <strong>{gbp(result.employerContributions)}</strong></li>
            </ul>
          </div>
        )}

        <p className="text-xs text-ink/55">
          Projection only. {isScotland ? "SPPA" : "Teachers' Pensions"} publishes the
          official actuarial factors and your benefit statement is definitive.
          Assumes continuous membership and the CARE scheme.
        </p>
      </div>
    </div>
  );
}
