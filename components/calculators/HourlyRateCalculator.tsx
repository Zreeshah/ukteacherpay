"use client";

import { useMemo, useState } from "react";
import { calculateTakeHome } from "@/lib/payroll";
import { mainRange, upperRange } from "@/data/teacher-pay-scales";
import { gbp, gbp2 } from "@/lib/format";

const POINTS = [
  ...mainRange.england.map((s, i) => ({ id: `M${i + 1}`, salary: s })),
  ...upperRange.england.map((s, i) => ({ id: `U${i + 1}`, salary: s })),
];

/** Statutory directed time for a full-time teacher in England. */
const DIRECTED_HOURS = 1265;
const TEACHING_WEEKS = 39;

export default function HourlyRateCalculator() {
  const [point, setPoint] = useState("M3");
  const [fte, setFte] = useState("100");
  const [actualWeekly, setActualWeekly] = useState("50");
  const [holidayWeeks, setHolidayWeeks] = useState("3");

  const active = POINTS.find((p) => p.id === point) ?? POINTS[0];

  const r = useMemo(() => {
    const fraction = (Number(fte) || 100) / 100;
    const take = calculateTakeHome({ fteSalary: active.salary, fraction, inPension: true });
    const gross = take.grossAnnual;
    const net = take.netAnnual;

    const directed = DIRECTED_HOURS * fraction;
    const weekly = Number(actualWeekly) || 0;
    const extraWeeks = Number(holidayWeeks) || 0;
    const actualHours = weekly * TEACHING_WEEKS * fraction + extraWeeks * 20;

    return {
      gross, net, directed, actualHours,
      directedGross: directed > 0 ? gross / directed : 0,
      actualGross: actualHours > 0 ? gross / actualHours : 0,
      actualNet: actualHours > 0 ? net / actualHours : 0,
      gap: actualHours - directed,
    };
  }, [active, fte, actualWeekly, holidayWeeks]);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <form className="card p-5" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-lg font-semibold">Your hours</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="hr-point">Pay point</label>
            <select id="hr-point" className="field-input" value={point} onChange={(e) => setPoint(e.target.value)}>
              {POINTS.map((p) => <option key={p.id} value={p.id}>{p.id} — {gbp(p.salary)}</option>)}
            </select>
          </div>
          <div>
            <label className="field-label" htmlFor="hr-fte">Employment (% FTE)</label>
            <input id="hr-fte" className="field-input" inputMode="decimal" value={fte} onChange={(e) => setFte(e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="hr-weekly">Hours you actually work per week</label>
            <input id="hr-weekly" className="field-input" inputMode="decimal" value={actualWeekly} onChange={(e) => setActualWeekly(e.target.value)} />
            <p className="mt-1 text-xs text-ink/55">Include planning, marking and evenings.</p>
          </div>
          <div>
            <label className="field-label" htmlFor="hr-hol">Weeks worked in holidays</label>
            <input id="hr-hol" className="field-input" inputMode="decimal" value={holidayWeeks} onChange={(e) => setHolidayWeeks(e.target.value)} />
            <p className="mt-1 text-xs text-ink/55">Counted at 20 hours a week.</p>
          </div>
        </div>
      </form>

      <div className="space-y-4">
        <div className="card number-box bg-ink p-6 text-white">
          <p className="text-sm text-white/70">Your real hourly rate, after deductions</p>
          <p className="safe-number-md mt-1 font-bold tabular text-accent">{gbp2(r.actualNet)}</p>
          <p className="mt-1 text-sm text-white/70">
            based on {Math.round(r.actualHours).toLocaleString()} hours a year
          </p>
        </div>

        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-paper text-left">
              <tr><th className="px-4 py-2.5 font-semibold">Basis</th><th className="px-4 py-2.5 text-right font-semibold">Hours</th><th className="px-4 py-2.5 text-right font-semibold">Per hour</th></tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              <tr>
                <td className="px-4 py-2.5 text-ink/80">Directed time (contractual)</td>
                <td className="px-4 py-2.5 text-right tabular">{Math.round(r.directed).toLocaleString()}</td>
                <td className="px-4 py-2.5 text-right tabular">{gbp2(r.directedGross)}</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 text-ink/80">Hours you actually work (gross)</td>
                <td className="px-4 py-2.5 text-right tabular">{Math.round(r.actualHours).toLocaleString()}</td>
                <td className="px-4 py-2.5 text-right tabular">{gbp2(r.actualGross)}</td>
              </tr>
              <tr className="bg-accent-strong/5">
                <td className="px-4 py-2.5 font-semibold">Actual hours, after deductions</td>
                <td className="px-4 py-2.5 text-right tabular font-semibold">{Math.round(r.actualHours).toLocaleString()}</td>
                <td className="px-4 py-2.5 text-right tabular font-semibold">{gbp2(r.actualNet)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">What the gap means</h3>
          <p className="mt-2 text-sm text-ink/75">
            You are working about{" "}
            <strong>{Math.round(r.gap).toLocaleString()} hours</strong> beyond
            your {Math.round(r.directed).toLocaleString()} directed hours. That
            unpaid time drops your effective gross rate from{" "}
            {gbp2(r.directedGross)} to {gbp2(r.actualGross)} an hour.
          </p>
        </div>
        <p className="text-xs text-ink/55">
          Directed time is 1,265 hours a year for a full-time teacher in
          England, pro-rated for part-time. Planning and marking sit outside
          directed time, which is exactly why the two rates diverge.
        </p>
      </div>
    </div>
  );
}
