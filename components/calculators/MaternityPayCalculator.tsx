"use client";

import { useMemo, useState } from "react";
import { calculateMaternityPay } from "@/lib/maternity";
import { gbp, gbp2 } from "@/lib/format";

const routeLabels = {
  "full-burgundy-smp": "Burgundy Book occupational pay plus SMP",
  "burgundy-with-ma": "Burgundy Book occupational pay plus Maternity Allowance",
  "smp-only": "Statutory Maternity Pay (SMP) only",
  "ma-only": "Maternity Allowance may apply",
} as const;

export default function MaternityPayCalculator() {
  const [annualSalary, setAnnualSalary] = useState("40941");
  const [burgundyBookApplies, setBurgundyBookApplies] = useState(true);
  const [oneYearService, setOneYearService] = useState(true);
  const [currentEmployment, setCurrentEmployment] = useState(true);
  const [maternityAllowance, setMaternityAllowance] = useState("");

  const result = useMemo(() => calculateMaternityPay({
    annualSalary: Number(annualSalary) || 0,
    burgundyBookApplies,
    hasOneYearTeachingService: oneYearService,
    has26WeeksCurrentEmployment: currentEmployment,
    maternityAllowanceWeekly: Number(maternityAllowance) || undefined,
  }), [annualSalary, burgundyBookApplies, oneYearService, currentEmployment, maternityAllowance]);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      <form className="card p-5" onSubmit={(event) => event.preventDefault()}>
        <h2 className="text-lg font-semibold">Your maternity pay details</h2>
        <p className="mt-1 text-sm text-ink/65">Use your current annual contractual salary. This is a gross-pay estimate before tax, NI and pension deductions.</p>

        <div className="mt-4">
          <label className="field-label" htmlFor="mp-salary">Annual contractual salary (£)</label>
          <input id="mp-salary" className="field-input" inputMode="decimal" value={annualSalary} onChange={(event) => setAnnualSalary(event.target.value)} />
          <p className="mt-1 text-xs text-ink/55">For part-time work, enter your actual pro-rata annual salary, not the full-time equivalent.</p>
        </div>

        <fieldset className="mt-5 space-y-3 border-t border-ink/10 pt-4">
          <legend className="text-sm font-semibold">Which terms and service tests apply?</legend>
          <label className="mt-3 flex items-start gap-2.5 text-sm">
            <input type="checkbox" className="mt-0.5 h-4 w-4 accent-indigo-700" checked={burgundyBookApplies} onChange={(event) => setBurgundyBookApplies(event.target.checked)} />
            <span><strong>Burgundy Book terms apply</strong><br /><span className="text-ink/60">Usually automatic in local-authority schools. Many academies adopt it, but check your trust policy.</span></span>
          </label>
          <label className="flex items-start gap-2.5 text-sm">
            <input type="checkbox" className="mt-0.5 h-4 w-4 accent-indigo-700" checked={oneYearService} onChange={(event) => setOneYearService(event.target.checked)} />
            <span><strong>One year&apos;s continuous teacher service with one or more local authorities</strong><br /><span className="text-ink/60">Measured at the beginning of the 11th week before the expected week of childbirth.</span></span>
          </label>
          <label className="flex items-start gap-2.5 text-sm">
            <input type="checkbox" className="mt-0.5 h-4 w-4 accent-indigo-700" checked={currentEmployment} onChange={(event) => setCurrentEmployment(event.target.checked)} />
            <span><strong>At least 26 weeks&apos; continuous employment with this employer</strong><br /><span className="text-ink/60">Measured by the end of the 15th week before the expected week of childbirth. This is the SMP test.</span></span>
          </label>
        </fieldset>

        {(!currentEmployment || (!burgundyBookApplies && !oneYearService)) && (
          <div className="mt-4">
            <label className="field-label" htmlFor="mp-ma">Confirmed Maternity Allowance per week (£, optional)</label>
            <input id="mp-ma" className="field-input" inputMode="decimal" placeholder="Enter only if DWP has confirmed it" value={maternityAllowance} onChange={(event) => setMaternityAllowance(event.target.value)} />
            <p className="mt-1 text-xs text-ink/55">Maternity Allowance depends on your National Insurance record, so this calculator does not guess an award.</p>
          </div>
        )}
      </form>

      <div className="space-y-4">
        <div className="card number-box bg-ink p-6 text-white">
          <p className="text-sm text-white/70">Estimated entitlement route</p>
          <p className="mt-1 text-xl font-bold text-accent">{routeLabels[result.route]}</p>
          {result.estimatedTotal !== undefined ? (
            <>
              <p className="safe-number-md mt-4 font-bold tabular">{gbp2(result.estimatedTotal)}</p>
              <p className="mt-1 text-sm text-white/70">estimated gross pay across the first 39 weeks</p>
            </>
          ) : (
            <p className="mt-4 text-sm text-white/75">Enter a confirmed Maternity Allowance award above to complete the 39-week total.</p>
          )}
        </div>

        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-paper text-left"><tr><th className="px-4 py-2.5 font-semibold">Maternity-pay period</th><th className="px-4 py-2.5 text-right font-semibold">Weekly</th><th className="px-4 py-2.5 text-right font-semibold">Total</th></tr></thead>
              <tbody className="divide-y divide-ink/10">
                {result.periods.map((period) => <tr key={period.label}>
                  <td className="px-4 py-3 text-ink/80"><span className="block">{period.label}</span>{period.note && <span className="mt-1 block text-xs text-ink/55">{period.note}</span>}</td>
                  <td className="px-4 py-3 text-right tabular">{period.weeklyAmount === undefined ? "Check award" : gbp2(period.weeklyAmount)}</td>
                  <td className="px-4 py-3 text-right tabular">{period.total === undefined ? "Check award" : gbp2(period.total)}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>

        {result.returnWeeksRequired && <div className="card border border-amber-200 bg-amber-50 p-5">
          <h3 className="text-sm font-semibold">Important: the 13-week return condition</h3>
          <p className="mt-2 text-sm text-ink/75">To retain the full Burgundy Book occupational entitlement, you must return to work for the equivalent of 13 weeks. If you do not, your employer can normally reclaim the 12 weeks&apos; half-pay occupational element, estimated here at <strong>{gbp(result.potentialHalfPayRepayment ?? 0)}</strong>. You keep the first six weeks&apos; pay and any SMP or Maternity Allowance.</p>
        </div>}

        <p className="px-1 text-xs leading-relaxed text-ink/55">Planning estimate only. It assumes a stable salary and expresses pay in weekly equivalents. Where salary varies significantly, Burgundy Book pay is based on average salary in the 12 weeks before absence starts. Your employer&apos;s policy, tax code and contractual pay cycle determine your actual payslips.</p>
      </div>
    </div>
  );
}
