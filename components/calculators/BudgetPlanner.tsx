"use client";

import { useMemo, useState } from "react";
import { calculateTakeHome } from "@/lib/payroll";
import { mainRange, upperRange } from "@/data/teacher-pay-scales";
import { gbp } from "@/lib/format";

const POINTS: { id: string; label: string; salary: number }[] = [
  ...mainRange.england.map((s, i) => ({ id: `M${i + 1}`, label: `M${i + 1}`, salary: s })),
  ...upperRange.england.map((s, i) => ({ id: `U${i + 1}`, label: `U${i + 1}`, salary: s })),
];

const CATEGORIES = [
  { key: "rent", label: "Rent or mortgage", def: 950 },
  { key: "bills", label: "Council tax & utilities", def: 260 },
  { key: "food", label: "Food & household", def: 320 },
  { key: "transport", label: "Travel & commuting", def: 180 },
  { key: "phone", label: "Phone, broadband, subscriptions", def: 70 },
  { key: "insurance", label: "Insurance", def: 55 },
  { key: "debt", label: "Debt repayments (excl. student loan)", def: 0 },
  { key: "childcare", label: "Childcare", def: 0 },
  { key: "personal", label: "Personal & social", def: 200 },
];

export default function BudgetPlanner() {
  const [point, setPoint] = useState("M3");
  const [fte, setFte] = useState("100");
  const [spend, setSpend] = useState<Record<string, string>>(
    Object.fromEntries(CATEGORIES.map((c) => [c.key, String(c.def)])),
  );

  const active = POINTS.find((p) => p.id === point) ?? POINTS[0];

  const result = useMemo(() => {
    const take = calculateTakeHome({
      fteSalary: active.salary,
      fraction: (Number(fte) || 100) / 100,
      regime: "ruk",
      inPension: true,
    });
    const monthlyNet = take.netMonthly;
    const totalSpend = CATEGORIES.reduce((s, c) => s + (Number(spend[c.key]) || 0), 0);
    const left = monthlyNet - totalSpend;
    return { take, monthlyNet, totalSpend, left, rate: left / monthlyNet };
  }, [active, fte, spend]);

  const set = (k: string, v: string) => setSpend((s) => ({ ...s, [k]: v }));

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <form className="card p-5" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-lg font-semibold">Your pay</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="bp-point">Pay point</label>
            <select id="bp-point" className="field-input" value={point} onChange={(e) => setPoint(e.target.value)}>
              {POINTS.map((p) => (
                <option key={p.id} value={p.id}>{p.label} — {gbp(p.salary)}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="field-label" htmlFor="bp-fte">Employment (% FTE)</label>
            <input id="bp-fte" className="field-input" inputMode="decimal" value={fte} onChange={(e) => setFte(e.target.value)} />
          </div>
        </div>

        <h2 className="mt-6 text-lg font-semibold">Monthly outgoings</h2>
        <div className="mt-3 space-y-2.5">
          {CATEGORIES.map((c) => (
            <div key={c.key} className="flex items-center gap-3">
              <label className="flex-1 text-sm text-ink/80" htmlFor={`bp-${c.key}`}>{c.label}</label>
              <div className="relative w-28">
                <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-sm text-ink/50">£</span>
                <input
                  id={`bp-${c.key}`}
                  className="w-full rounded-lg border border-ink/15 bg-white py-1.5 pl-6 pr-2 text-right text-sm outline-none focus:border-accent-strong focus:ring-2 focus:ring-accent-strong/20"
                  inputMode="decimal"
                  value={spend[c.key]}
                  onChange={(e) => set(c.key, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      </form>

      <div className="space-y-4">
        <div className={`card number-box p-6 text-white ${result.left >= 0 ? "bg-ink" : "bg-red-900"}`}>
          <p className="text-sm text-white/70">
            {result.left >= 0 ? "Left over each month" : "Short each month"}
          </p>
          <p className="safe-number-md mt-1 font-bold tabular text-accent">
            {gbp(Math.abs(result.left))}
          </p>
          <p className="mt-1 text-sm text-white/70">
            from {gbp(result.monthlyNet)} take-home
          </p>
        </div>

        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-ink/10">
              <tr><td className="px-4 py-2.5 text-ink/80">Gross salary</td><td className="px-4 py-2.5 text-right tabular">{gbp(result.take.grossAnnual)}</td></tr>
              <tr><td className="px-4 py-2.5 text-ink/80">Take-home (monthly)</td><td className="px-4 py-2.5 text-right tabular font-medium">{gbp(result.monthlyNet)}</td></tr>
              <tr><td className="px-4 py-2.5 text-ink/80">Total outgoings</td><td className="px-4 py-2.5 text-right tabular">−{gbp(result.totalSpend)}</td></tr>
              <tr className="bg-accent-strong/5"><td className="px-4 py-2.5 font-semibold">Remaining</td><td className="px-4 py-2.5 text-right font-semibold tabular">{gbp(result.left)}</td></tr>
            </tbody>
          </table>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">How this looks</h3>
          <p className="mt-2 text-sm text-ink/75">
            {result.left < 0
              ? `You are spending ${gbp(Math.abs(result.left))} a month more than you take home. The largest single category is ${CATEGORIES.reduce((a, b) => (Number(spend[a.key]) || 0) > (Number(spend[b.key]) || 0) ? a : b).label.toLowerCase()}.`
              : `You are keeping ${(result.rate * 100).toFixed(0)}% of your take-home pay. A common target is 20% towards savings, which would be ${gbp(result.monthlyNet * 0.2)} a month at this salary.`}
          </p>
          <p className="mt-2 text-sm text-ink/75">
            Remember teacher pay rises on 1 September, not in April, so a
            September budget review lines up with your pay award.
          </p>
        </div>
        <p className="text-xs text-ink/55">
          Assumes the standard tax code, Teachers&apos; Pension membership and no
          student loan. Nothing you type is stored.
        </p>
      </div>
    </div>
  );
}
