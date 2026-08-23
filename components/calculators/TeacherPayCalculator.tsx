"use client";

import { useMemo, useState } from "react";
import {
  allRegions,
  pointsForScale,
  regionLabel,
  scaleLabel,
  type Region,
  type ScaleId,
} from "@/data/teacher-pay-scales";
import { studentLoanPlans, type StudentLoanPlan } from "@/data/tax-rates";
import { calculateTakeHome } from "@/lib/payroll";
import { gbp, gbp2, pct } from "@/lib/format";

const SCALES: ScaleId[] = [
  "main",
  "upper",
  "unqualified",
  "lead-practitioner",
  "leadership",
];

const LOAN_PLANS: Exclude<StudentLoanPlan, "none">[] = [
  "plan1",
  "plan2",
  "plan4",
  "plan5",
];

export interface CalcPreset {
  region?: Region;
  scale?: ScaleId;
  point?: string;
  fraction?: number;
  lockScale?: boolean;
  lockRegion?: boolean;
}

export default function TeacherPayCalculator({
  preset = {},
}: {
  preset?: CalcPreset;
}) {
  const [region, setRegion] = useState<Region>(preset.region ?? "england");
  const [scale, setScale] = useState<ScaleId>(preset.scale ?? "main");
  const [pointId, setPointId] = useState<string>(preset.point ?? "M1");
  const [ftePercent, setFtePercent] = useState("100");
  const [tlr, setTlr] = useState("");
  const [sen, setSen] = useState("");
  const [inPension, setInPension] = useState(true);
  const [loan, setLoan] = useState<StudentLoanPlan>("none");
  const [postgrad, setPostgrad] = useState(false);
  const [avc, setAvc] = useState("");

  const points = useMemo(() => pointsForScale(scale, region), [scale, region]);

  const active = useMemo(() => {
    return points.find((p) => p.id === pointId) ?? points[0];
  }, [points, pointId]);

  const scotlandOrNi = region === "scotland" || region === "northern-ireland";
  const regime = region === "scotland" ? "scotland" : "ruk";
  const interpolatedScale = scale === "leadership" || scale === "lead-practitioner";

  const result = useMemo(() => {
    if (!active) return null;
    const fraction = Math.max(0, Math.min(150, Number(ftePercent) || 0)) / 100;
    return calculateTakeHome({
      fteSalary: active.salary,
      fraction,
      allowances: (Number(tlr) || 0) + (Number(sen) || 0),
      regime,
      inPension,
      studentLoan: loan,
      postgradLoan: postgrad,
      avcAnnual: (Number(avc) || 0) * 12,
    });
  }, [active, ftePercent, tlr, sen, regime, inPension, loan, postgrad, avc]);

  if (!active || !result) {
    return (
      <div className="card p-6">
        <p className="text-sm text-ink/70">
          {scaleLabel[scale]} is not published for {regionLabel[region]}. Choose
          another scale or region.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {SCALES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setScale(s)}
              className="rounded-lg border border-ink/15 px-3 py-1.5 text-sm hover:border-accent-strong"
            >
              {scaleLabel[s]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const rows: { label: string; annual: number; monthly: number; strong?: boolean; deduct?: boolean }[] = [
    { label: "Gross salary", annual: result.grossAnnual, monthly: result.grossAnnual / 12 },
    { label: `Teachers' Pension (${pct(result.pensionRate)})`, annual: result.pensionContribution, monthly: result.pensionContribution / 12, deduct: true },
  ];
  if (result.avc > 0) {
    rows.push({ label: "AVC contributions", annual: result.avc, monthly: result.avc / 12, deduct: true });
  }
  rows.push(
    { label: "Income tax", annual: result.incomeTax, monthly: result.incomeTax / 12, deduct: true },
    { label: "National Insurance", annual: result.nationalInsurance, monthly: result.nationalInsurance / 12, deduct: true },
  );
  if (result.studentLoanRepayment > 0) {
    rows.push({ label: "Student loan", annual: result.studentLoanRepayment, monthly: result.studentLoanRepayment / 12, deduct: true });
  }
  if (result.postgradRepayment > 0) {
    rows.push({ label: "Postgraduate loan", annual: result.postgradRepayment, monthly: result.postgradRepayment / 12, deduct: true });
  }
  rows.push({ label: "Take-home pay", annual: result.netAnnual, monthly: result.netMonthly, strong: true });

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      {/* ---------- Inputs ---------- */}
      <form className="card p-5" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-lg font-semibold">Your details</h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="tp-region">Region</label>
            <select
              id="tp-region"
              className="field-input"
              value={region}
              disabled={preset.lockRegion}
              onChange={(e) => {
                const next = e.target.value as Region;
                setRegion(next);
                const first = pointsForScale(scale, next)[0];
                if (first) setPointId(first.id);
              }}
            >
              {allRegions.map((r) => (
                <option key={r} value={r}>{regionLabel[r]}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="field-label" htmlFor="tp-scale">Pay scale</label>
            <select
              id="tp-scale"
              className="field-input"
              value={scale}
              disabled={preset.lockScale}
              onChange={(e) => {
                const next = e.target.value as ScaleId;
                setScale(next);
                const first = pointsForScale(next, region)[0];
                if (first) setPointId(first.id);
              }}
            >
              {SCALES.map((s) => (
                <option key={s} value={s}>{scaleLabel[s]}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="field-label" htmlFor="tp-point">Pay point</label>
            <select
              id="tp-point"
              className="field-input"
              value={active.id}
              onChange={(e) => setPointId(e.target.value)}
            >
              {points.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label} — {gbp(p.salary)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="field-label" htmlFor="tp-fte">
              Employment (% FTE)
            </label>
            <input
              id="tp-fte"
              className="field-input"
              inputMode="decimal"
              value={ftePercent}
              onChange={(e) => setFtePercent(e.target.value)}
            />
            <p className="mt-1 text-xs text-ink/55">
              0.6 FTE = 60. Three days a week is usually 0.6.
            </p>
          </div>

          <div>
            <label className="field-label" htmlFor="tp-tlr">TLR payment (£/yr)</label>
            <input
              id="tp-tlr"
              className="field-input"
              inputMode="decimal"
              placeholder="e.g. 3650"
              value={tlr}
              onChange={(e) => setTlr(e.target.value)}
            />
          </div>

          <div>
            <label className="field-label" htmlFor="tp-sen">SEN allowance (£/yr)</label>
            <input
              id="tp-sen"
              className="field-input"
              inputMode="decimal"
              placeholder="e.g. 2885"
              value={sen}
              onChange={(e) => setSen(e.target.value)}
            />
          </div>

          <div>
            <label className="field-label" htmlFor="tp-loan">Student loan plan</label>
            <select
              id="tp-loan"
              className="field-input"
              value={loan}
              onChange={(e) => setLoan(e.target.value as StudentLoanPlan)}
            >
              <option value="none">No student loan</option>
              {LOAN_PLANS.map((p) => (
                <option key={p} value={p}>
                  {studentLoanPlans[p].label} — over {gbp(studentLoanPlans[p].threshold)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="field-label" htmlFor="tp-avc">Monthly AVC (£)</label>
            <input
              id="tp-avc"
              className="field-input"
              inputMode="decimal"
              placeholder="0"
              value={avc}
              onChange={(e) => setAvc(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-4 space-y-2.5 border-t border-ink/10 pt-4">
          <label className="flex items-center gap-2.5 text-sm">
            <input
              type="checkbox"
              className="h-4 w-4 accent-indigo-700"
              checked={inPension}
              onChange={(e) => setInPension(e.target.checked)}
            />
            In the Teachers&apos; Pension Scheme
          </label>
          <label className="flex items-center gap-2.5 text-sm">
            <input
              type="checkbox"
              className="h-4 w-4 accent-indigo-700"
              checked={postgrad}
              onChange={(e) => setPostgrad(e.target.checked)}
            />
            Also repaying a Postgraduate Loan
          </label>
        </div>

        {scotlandOrNi && (
          <p className="mt-4 rounded-lg bg-amber-50 p-3 text-xs text-ink/75">
            {region === "scotland"
              ? "Scottish income tax rates are applied. Scotland uses the SNCT pay scale and the Scottish Teachers' Pension Scheme."
              : "Northern Ireland uses its own pay scale but rUK income tax rates."}
          </p>
        )}

        {interpolatedScale && (
          <p className="mt-4 rounded-lg bg-amber-50 p-3 text-xs text-ink/75">
            The STPCD publishes the first and last points of this range. The
            individual points in between are evenly interpolated and are
            indicative only — your school sets its own individual school range
            within the spine, so check your pay policy or payslip for the exact
            figure. Enter it as a custom salary if it differs.
          </p>
        )}
      </form>

      {/* ---------- Results ---------- */}
      <div className="space-y-4">
        <div className="card number-box bg-ink p-6 text-white">
          <p className="text-sm text-white/70">Estimated take-home pay</p>
          <p className="safe-number mt-1 font-bold tabular text-accent">
            {gbp(result.netMonthly)}
          </p>
          <p className="mt-1 text-sm text-white/70">
            per month · {gbp(result.netAnnual)} a year ·{" "}
            {gbp(result.netWeekly)} a week
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/15 pt-4 text-sm">
            <div>
              <p className="text-white/60">Gross</p>
              <p className="font-semibold tabular">{gbp(result.grossAnnual)}</p>
            </div>
            <div>
              <p className="text-white/60">Total deductions</p>
              <p className="font-semibold tabular">
                {gbp(result.totalDeductions)} ({pct(result.effectiveTaxRate, 0)})
              </p>
            </div>
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-paper text-left">
                <tr>
                  <th className="px-4 py-2.5 font-semibold">Component</th>
                  <th className="px-4 py-2.5 text-right font-semibold">Annual</th>
                  <th className="px-4 py-2.5 text-right font-semibold">Monthly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {rows.map((row) => (
                  <tr key={row.label} className={row.strong ? "bg-accent-strong/5" : ""}>
                    <td className={`px-4 py-2.5 ${row.strong ? "font-semibold" : "text-ink/80"}`}>
                      {row.label}
                    </td>
                    <td className={`px-4 py-2.5 text-right tabular ${row.strong ? "font-semibold" : ""}`}>
                      {row.deduct ? "−" : ""}{gbp2(row.annual)}
                    </td>
                    <td className={`px-4 py-2.5 text-right tabular ${row.strong ? "font-semibold" : ""}`}>
                      {row.deduct ? "−" : ""}{gbp2(row.monthly)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {result.taxBands.length > 0 && (
          <div className="card p-5">
            <h3 className="text-sm font-semibold">How your income tax is worked out</h3>
            <ul className="mt-2 space-y-1 text-sm text-ink/75">
              <li>
                Personal allowance: {gbp(result.personalAllowance)}
                {result.personalAllowance === 0 && " (fully tapered away)"}
              </li>
              {result.taxBands.map((b) => (
                <li key={b.label}>
                  {b.label} at {pct(b.rate, 0)} on {gbp(b.amount)} ={" "}
                  {gbp2(b.tax)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {inPension && (
          <div className="card p-5">
            <h3 className="text-sm font-semibold">Pension picture</h3>
            <p className="mt-2 text-sm text-ink/75">
              You pay {gbp(result.pensionContribution)} a year at the{" "}
              {pct(result.pensionRate)} tier. Your employer adds{" "}
              <strong>{gbp(result.employerPension)}</strong> at 28.8%, so the
              total going into your pension is{" "}
              <strong>
                {gbp(result.pensionContribution + result.employerPension)}
              </strong>{" "}
              a year.
            </p>
            <p className="mt-2 text-sm text-ink/75">
              This year you build roughly{" "}
              <strong>{gbp(result.pensionableEarnings / 57)}</strong> of
              guaranteed annual pension (1/57th of pensionable pay).
            </p>
          </div>
        )}

        <p className="text-xs text-ink/55">
          Estimate only. Assumes the standard 1257L tax code, no other taxable
          income and the net-pay pension arrangement most schools use. Your
          payslip is the authority.
        </p>
      </div>
    </div>
  );
}
