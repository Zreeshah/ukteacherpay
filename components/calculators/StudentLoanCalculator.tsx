"use client";

import { useMemo, useState } from "react";
import { studentLoanPlans, type StudentLoanPlan } from "@/data/tax-rates";
import { gbp, gbp2 } from "@/lib/format";

type Plan = Exclude<StudentLoanPlan, "none">;
const PLANS: Plan[] = ["plan1", "plan2", "plan4", "plan5", "postgrad"];

export default function StudentLoanCalculator() {
  const [salary, setSalary] = useState("38400");
  const [plan, setPlan] = useState<Plan>("plan2");
  const [hasPg, setHasPg] = useState(false);
  const [balance, setBalance] = useState("38000");

  const result = useMemo(() => {
    const s = Number(salary) || 0;
    const cfg = studentLoanPlans[plan];
    const ugAnnual = Math.max(0, (s - cfg.threshold) * cfg.rate);
    const pgCfg = studentLoanPlans.postgrad;
    const pgAnnual = hasPg ? Math.max(0, (s - pgCfg.threshold) * pgCfg.rate) : 0;
    // PAYE rounds each monthly deduction down to the nearest pound.
    const ugMonthly = Math.floor(ugAnnual / 12);
    const pgMonthly = Math.floor(pgAnnual / 12);
    const bal = Number(balance) || 0;
    const monthsToClear = ugMonthly > 0 ? Math.ceil(bal / ugMonthly) : null;
    return { ugAnnual, pgAnnual, ugMonthly, pgMonthly, total: ugMonthly + pgMonthly, monthsToClear, cfg };
  }, [salary, plan, hasPg, balance]);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <form className="card p-5" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-lg font-semibold">Your loan details</h2>
        <div className="mt-4 grid gap-4">
          <div>
            <label className="field-label" htmlFor="sl-salary">Annual salary (£)</label>
            <input id="sl-salary" className="field-input" inputMode="decimal" value={salary} onChange={(e) => setSalary(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="sl-plan">Repayment plan</label>
            <select id="sl-plan" className="field-input" value={plan} onChange={(e) => setPlan(e.target.value as Plan)}>
              {PLANS.map((p) => (
                <option key={p} value={p}>
                  {studentLoanPlans[p].label} — {gbp(studentLoanPlans[p].threshold)} threshold
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="field-label" htmlFor="sl-balance">Outstanding balance (£)</label>
            <input id="sl-balance" className="field-input" inputMode="decimal" value={balance} onChange={(e) => setBalance(e.target.value)} />
          </div>
          <label className="flex items-center gap-2.5 text-sm">
            <input type="checkbox" className="h-4 w-4 accent-indigo-700" checked={hasPg} onChange={(e) => setHasPg(e.target.checked)} />
            I also have a Postgraduate Loan
          </label>
        </div>
      </form>

      <div className="space-y-4">
        <div className="card number-box bg-ink p-6 text-white">
          <p className="text-sm text-white/70">Monthly payslip deduction</p>
          <p className="safe-number-md mt-1 font-bold tabular text-accent">{gbp(result.total)}</p>
          <p className="mt-1 text-sm text-white/70">
            {gbp(result.ugAnnual + result.pgAnnual)} a year
          </p>
        </div>

        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-paper text-left">
              <tr>
                <th className="px-4 py-2.5 font-semibold">Line on your payslip</th>
                <th className="px-4 py-2.5 text-right font-semibold">Monthly</th>
                <th className="px-4 py-2.5 text-right font-semibold">Annual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              <tr>
                <td className="px-4 py-2.5 text-ink/80">Student loan ({result.cfg.label})</td>
                <td className="px-4 py-2.5 text-right tabular">{gbp(result.ugMonthly)}</td>
                <td className="px-4 py-2.5 text-right tabular">{gbp2(result.ugAnnual)}</td>
              </tr>
              {hasPg && (
                <tr>
                  <td className="px-4 py-2.5 text-ink/80">Postgraduate loan</td>
                  <td className="px-4 py-2.5 text-right tabular">{gbp(result.pgMonthly)}</td>
                  <td className="px-4 py-2.5 text-right tabular">{gbp2(result.pgAnnual)}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">How this is worked out</h3>
          <p className="mt-2 text-sm text-ink/75">
            You repay {(result.cfg.rate * 100).toFixed(0)}% of everything you
            earn above {gbp(result.cfg.threshold)} a year. Below that threshold
            you pay nothing. PAYE rounds each monthly deduction down to the
            nearest pound.
          </p>
          {result.monthsToClear !== null && result.monthsToClear < 600 && (
            <p className="mt-2 text-sm text-ink/75">
              Ignoring interest, a {gbp(Number(balance) || 0)} balance would take
              about {Math.round(result.monthsToClear / 12)} years to clear at
              this salary. Interest will extend that.
            </p>
          )}
        </div>
        <p className="text-xs text-ink/55">
          Estimate only. Interest and any write-off date depend on your plan and
          when you started studying.
        </p>
      </div>
    </div>
  );
}
