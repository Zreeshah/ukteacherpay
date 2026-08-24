import { tpsScheme } from "@/data/tax-rates";
import { tpsRate } from "@/lib/payroll";

export interface CareInput {
  currentSalary: number;
  yearsToRetirement: number;
  /** Already-accrued CARE pension (annual amount) */
  accruedPension?: number;
  /** Assumed annual salary growth */
  salaryGrowth?: number;
  /** Assumed CPI used for in-service revaluation */
  cpi?: number;
  /** Average part-time fraction over the remaining career */
  fraction?: number;
}

export interface CareResult {
  accrualRate: number;
  projectedPension: number;
  accruedStart: number;
  earnedFromNow: number;
  totalContributions: number;
  employerContributions: number;
  maxLumpSum: number;
  reducedPensionWithMaxLumpSum: number;
  yearlyRows: {
    year: number;
    salary: number;
    accrued: number;
    memberContribution: number;
  }[];
}

/**
 * Career Average Revalued Earnings (CARE) projection.
 * Each year you build 1/57th of that year's pensionable pay.
 * Accrued benefits are revalued each year by CPI + 1.6% while you are active.
 */
export function projectCarePension(input: CareInput): CareResult {
  const salaryGrowth = input.salaryGrowth ?? 0.02;
  const cpi = input.cpi ?? 0.02;
  const fraction = input.fraction ?? 1;
  const years = Math.max(0, Math.round(input.yearsToRetirement));
  const revaluation = cpi + tpsScheme.activeRevaluation;

  let accrued = input.accruedPension ?? 0;
  let salary = input.currentSalary;
  let totalContributions = 0;
  let employerContributions = 0;
  const yearlyRows: CareResult["yearlyRows"] = [];

  for (let y = 1; y <= years; y++) {
    const pensionablePay = salary * fraction;
    const earned = pensionablePay * tpsScheme.accrualRate;
    // Revalue the existing pot, then add this year's slice.
    accrued = accrued * (1 + revaluation) + earned;

    const memberRate = tpsRate(salary);
    const memberContribution = pensionablePay * memberRate;
    totalContributions += memberContribution;
    employerContributions += pensionablePay * tpsScheme.employerContribution;

    yearlyRows.push({
      year: y,
      salary: pensionablePay,
      accrued,
      memberContribution,
    });

    salary = salary * (1 + salaryGrowth);
  }

  // TPS commutation: give up £1 of annual pension for £12 of tax-free lump sum,
  // capped by the HMRC 25%-of-capital-value rule. For 12:1 commutation that
  // works out at approximately 5.36 x the annual pension.
  const COMMUTATION_FACTOR = 12;
  const maxLump = accrued * 5.36;
  const pensionGivenUp = maxLump / COMMUTATION_FACTOR;

  return {
    accrualRate: tpsScheme.accrualRate,
    projectedPension: accrued,
    accruedStart: input.accruedPension ?? 0,
    earnedFromNow: accrued - (input.accruedPension ?? 0),
    totalContributions,
    employerContributions,
    maxLumpSum: maxLump,
    reducedPensionWithMaxLumpSum: Math.max(0, accrued - pensionGivenUp),
    yearlyRows,
  };
}

/**
 * Actuarial reduction for taking benefits before Normal Pension Age.
 * These are indicative factors — the scheme publishes exact factors.
 */
export const earlyRetirementFactors: Record<number, number> = {
  0: 1,
  1: 0.95,
  2: 0.9,
  3: 0.855,
  4: 0.813,
  5: 0.773,
  6: 0.736,
  7: 0.701,
  8: 0.668,
  9: 0.637,
  10: 0.608,
};

export function earlyRetirementFactor(yearsEarly: number): number {
  const y = Math.max(0, Math.min(10, Math.round(yearsEarly)));
  return earlyRetirementFactors[y] ?? 0.608;
}

export interface RedundancyInput {
  age: number;
  yearsService: number;
  weeklyPay: number;
}

/** Statutory redundancy pay — capped week and 20-year service limit. */
export const STAT_WEEKLY_CAP = 780;

export function statutoryRedundancy(input: RedundancyInput) {
  const cappedWeekly = Math.min(input.weeklyPay, STAT_WEEKLY_CAP);
  const service = Math.min(20, Math.floor(input.yearsService));
  let weeks = 0;
  // Work backwards from current age over each year of service.
  for (let i = 0; i < service; i++) {
    const ageInThatYear = input.age - 1 - i;
    if (ageInThatYear >= 41) weeks += 1.5;
    else if (ageInThatYear >= 22) weeks += 1;
    else weeks += 0.5;
  }
  return {
    weeks,
    cappedWeekly,
    statutoryTotal: weeks * cappedWeekly,
    uncappedTotal: weeks * input.weeklyPay,
    serviceCounted: service,
  };
}
