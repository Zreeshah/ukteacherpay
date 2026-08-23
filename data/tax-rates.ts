// Single source of truth for UK tax-year figures used by every calculator.
// A tax-year update should touch this file only.
//
// Sources:
//  - HMRC rates and thresholds 2026 to 2027
//  - Scottish Government income tax rates 2026/27
//  - Student Loans Company repayment thresholds 2026/27
//  - Teachers' Pension Scheme member contribution tiers from April 2026

export const taxYearLabel = "2026/27";
export const stpcdYearLabel = "2026/27";
export const lastUpdated = "2026-08-23";
export const lastUpdatedLabel = "August 2026";

export type TaxRegime = "ruk" | "scotland";

export interface Band {
  /** Upper bound of this band measured in TAXABLE income (after allowance). null = no limit */
  upTo: number | null;
  rate: number;
  label: string;
}

/** England, Wales & Northern Ireland */
export const rukBands: Band[] = [
  { upTo: 37700, rate: 0.2, label: "Basic rate" },
  { upTo: 112570, rate: 0.4, label: "Higher rate" },
  { upTo: null, rate: 0.45, label: "Additional rate" },
];

/** Scotland (Scottish rates apply to non-savings, non-dividend income) */
export const scotlandBands: Band[] = [
  { upTo: 2827, rate: 0.19, label: "Starter rate" },
  { upTo: 14921, rate: 0.2, label: "Basic rate" },
  { upTo: 31092, rate: 0.21, label: "Intermediate rate" },
  { upTo: 62430, rate: 0.42, label: "Higher rate" },
  { upTo: 112570, rate: 0.45, label: "Advanced rate" },
  { upTo: null, rate: 0.48, label: "Top rate" },
];

export const incomeTax = {
  personalAllowance: 12570,
  /** Allowance is withdrawn £1 for every £2 above this figure */
  taperThreshold: 100000,
};

export const employeeNi = {
  mainRate: 0.08,
  additionalRate: 0.02,
  primaryThreshold: 12570,
  upperEarningsLimit: 50270,
};

export type StudentLoanPlan =
  | "none"
  | "plan1"
  | "plan2"
  | "plan4"
  | "plan5"
  | "postgrad";

export const studentLoanPlans: Record<
  Exclude<StudentLoanPlan, "none">,
  { label: string; threshold: number; rate: number }
> = {
  plan1: { label: "Plan 1", threshold: 26065, rate: 0.09 },
  plan2: { label: "Plan 2", threshold: 28470, rate: 0.09 },
  plan4: { label: "Plan 4 (Scotland)", threshold: 32745, rate: 0.09 },
  plan5: { label: "Plan 5", threshold: 25000, rate: 0.09 },
  postgrad: { label: "Postgraduate Loan", threshold: 21000, rate: 0.06 },
};

/**
 * Teachers' Pension Scheme member contribution tiers.
 * Tiers are assessed on the ANNUAL FULL-TIME EQUIVALENT salary rate,
 * not on actual part-time earnings.
 */
export const tpsTiers: { upTo: number | null; rate: number }[] = [
  { upTo: 34289, rate: 0.074 },
  { upTo: 46158, rate: 0.086 },
  { upTo: 54729, rate: 0.096 },
  { upTo: 72534, rate: 0.102 },
  { upTo: 98908, rate: 0.117 },
  { upTo: null, rate: 0.127 },
];

export const tpsScheme = {
  /** CARE accrual rate — 1/57th of pensionable earnings each year */
  accrualRate: 1 / 57,
  /** Revaluation of accrued CARE benefits: CPI + 1.6% while in active service */
  activeRevaluation: 0.016,
  employerContribution: 0.288,
  normalPensionAgeNote:
    "Normal Pension Age in the career average (CARE) scheme is linked to your State Pension age.",
};

export const rateRows: { label: string; value: string }[] = [
  { label: "Personal Allowance", value: "£12,570" },
  { label: "Basic rate (rUK)", value: "20%" },
  { label: "Higher rate (rUK)", value: "40%" },
  { label: "Additional rate (rUK)", value: "45%" },
  { label: "Employee NI main rate", value: "8%" },
  { label: "NI primary threshold", value: "£12,570" },
  { label: "NI upper earnings limit", value: "£50,270" },
  { label: "TPS employee tiers", value: "7.4% – 12.7%" },
  { label: "TPS employer contribution", value: "28.8%" },
  { label: "CARE accrual rate", value: "1/57th" },
];
