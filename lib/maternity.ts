export const SMP_STANDARD_WEEKLY_2026 = 194.32;

export type MaternityRoute =
  | "full-burgundy-smp"
  | "burgundy-with-ma"
  | "smp-only"
  | "ma-only";

export interface MaternityInput {
  annualSalary: number;
  burgundyBookApplies: boolean;
  hasOneYearTeachingService: boolean;
  has26WeeksCurrentEmployment: boolean;
  maternityAllowanceWeekly?: number;
}

export interface MaternityPeriod {
  label: string;
  weeks: number;
  weeklyAmount?: number;
  total?: number;
  note?: string;
}

export interface MaternityEstimate {
  route: MaternityRoute;
  weeklySalary: number;
  smpWeekly: number;
  periods: MaternityPeriod[];
  estimatedTotal?: number;
  knownOccupationalTotal: number;
  returnWeeksRequired: boolean;
  potentialHalfPayRepayment?: number;
}

function money(value: number) {
  return Math.round(value * 100) / 100;
}

/**
 * Models the published Burgundy Book and SMP schedules, not an employer's
 * individual payroll calculation. Maternity Allowance depends on the DWP award,
 * so it is included only when the user supplies that confirmed weekly amount.
 */
export function calculateMaternityPay(input: MaternityInput): MaternityEstimate {
  const weeklySalary = Math.max(0, input.annualSalary) / 52;
  const smpWeekly = Math.min(weeklySalary * 0.9, SMP_STANDARD_WEEKLY_2026);
  const hasOccupationalPay = input.burgundyBookApplies && input.hasOneYearTeachingService;
  const hasSmp = input.has26WeeksCurrentEmployment;
  const allowanceWeekly = input.maternityAllowanceWeekly && input.maternityAllowanceWeekly > 0
    ? Math.min(input.maternityAllowanceWeekly, weeklySalary)
    : undefined;

  if (hasOccupationalPay && hasSmp) {
    const halfPlusSmp = Math.min(weeklySalary, weeklySalary / 2 + smpWeekly);
    const periods = [
      { label: "Weeks 1–4: full pay", weeks: 4, weeklyAmount: weeklySalary },
      { label: "Weeks 5–6: 90% pay", weeks: 2, weeklyAmount: weeklySalary * 0.9 },
      { label: "Weeks 7–18: half pay plus SMP", weeks: 12, weeklyAmount: halfPlusSmp },
      { label: "Weeks 19–39: SMP", weeks: 21, weeklyAmount: smpWeekly },
    ].map((period) => ({ ...period, weeklyAmount: money(period.weeklyAmount), total: money(period.weeks * period.weeklyAmount) }));

    return {
      route: "full-burgundy-smp",
      weeklySalary: money(weeklySalary),
      smpWeekly: money(smpWeekly),
      periods,
      estimatedTotal: money(periods.reduce((sum, period) => sum + (period.total ?? 0), 0)),
      knownOccupationalTotal: money(4 * weeklySalary + 2 * weeklySalary * 0.9 + 12 * Math.max(0, halfPlusSmp - smpWeekly)),
      returnWeeksRequired: true,
      potentialHalfPayRepayment: money(12 * weeklySalary / 2),
    };
  }

  if (hasOccupationalPay) {
    const halfPlusAllowance = allowanceWeekly === undefined
      ? undefined
      : Math.min(weeklySalary, weeklySalary / 2 + allowanceWeekly);
    const periods: MaternityPeriod[] = [
      { label: "Weeks 1–4: full occupational pay", weeks: 4, weeklyAmount: money(weeklySalary), total: money(4 * weeklySalary) },
      { label: "Weeks 5–6: 90% occupational pay", weeks: 2, weeklyAmount: money(weeklySalary * 0.9), total: money(2 * weeklySalary * 0.9) },
      {
        label: "Weeks 7–18: half pay plus Maternity Allowance",
        weeks: 12,
        weeklyAmount: halfPlusAllowance === undefined ? undefined : money(halfPlusAllowance),
        total: halfPlusAllowance === undefined ? undefined : money(12 * halfPlusAllowance),
        note: allowanceWeekly === undefined ? "Enter your confirmed Maternity Allowance award to estimate this period." : undefined,
      },
      {
        label: "Weeks 19–39: Maternity Allowance",
        weeks: 21,
        weeklyAmount: allowanceWeekly === undefined ? undefined : money(allowanceWeekly),
        total: allowanceWeekly === undefined ? undefined : money(21 * allowanceWeekly),
        note: allowanceWeekly === undefined ? "Maternity Allowance depends on your National Insurance record and DWP award." : undefined,
      },
    ];
    const knownOccupationalTotal = money(4 * weeklySalary + 2 * weeklySalary * 0.9 + 12 * weeklySalary / 2);
    const estimatedTotal = periods.every((period) => period.total !== undefined)
      ? money(periods.reduce((sum, period) => sum + (period.total ?? 0), 0))
      : undefined;

    return {
      route: "burgundy-with-ma",
      weeklySalary: money(weeklySalary),
      smpWeekly: money(smpWeekly),
      periods,
      estimatedTotal,
      knownOccupationalTotal,
      returnWeeksRequired: true,
      potentialHalfPayRepayment: money(12 * weeklySalary / 2),
    };
  }

  if (hasSmp) {
    const periods = [
      { label: "Weeks 1–6: SMP at 90%", weeks: 6, weeklyAmount: weeklySalary * 0.9 },
      { label: "Weeks 7–39: SMP", weeks: 33, weeklyAmount: smpWeekly },
    ].map((period) => ({ ...period, weeklyAmount: money(period.weeklyAmount), total: money(period.weeks * period.weeklyAmount) }));

    return {
      route: "smp-only",
      weeklySalary: money(weeklySalary),
      smpWeekly: money(smpWeekly),
      periods,
      estimatedTotal: money(periods.reduce((sum, period) => sum + (period.total ?? 0), 0)),
      knownOccupationalTotal: 0,
      returnWeeksRequired: false,
    };
  }

  const periods: MaternityPeriod[] = [{
    label: "Weeks 1–39: Maternity Allowance, if awarded",
    weeks: 39,
    weeklyAmount: allowanceWeekly === undefined ? undefined : money(allowanceWeekly),
    total: allowanceWeekly === undefined ? undefined : money(39 * allowanceWeekly),
    note: allowanceWeekly === undefined ? "Enter your confirmed Maternity Allowance award to estimate it." : undefined,
  }];

  return {
    route: "ma-only",
    weeklySalary: money(weeklySalary),
    smpWeekly: money(smpWeekly),
    periods,
    estimatedTotal: periods[0].total,
    knownOccupationalTotal: 0,
    returnWeeksRequired: false,
  };
}
