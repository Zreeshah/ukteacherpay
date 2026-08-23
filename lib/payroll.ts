import {
  employeeNi,
  incomeTax,
  rukBands,
  scotlandBands,
  studentLoanPlans,
  tpsTiers,
  type Band,
  type StudentLoanPlan,
  type TaxRegime,
} from "@/data/tax-rates";

export interface TakeHomeInput {
  /** Full-time equivalent annual salary (the pay-scale figure) */
  fteSalary: number;
  /** Part-time fraction, 1 = full time, 0.6 = three days a week */
  fraction?: number;
  /** Extra allowances paid on top (TLR, SEN). Pro-rated with the fraction. */
  allowances?: number;
  regime?: TaxRegime;
  /** Whether the member is in the Teachers' Pension Scheme */
  inPension?: boolean;
  studentLoan?: StudentLoanPlan;
  /** Additional postgraduate loan alongside an undergraduate plan */
  postgradLoan?: boolean;
  /** Extra voluntary contributions (AVC) as an annual amount */
  avcAnnual?: number;
}

export interface BandBreakdown {
  label: string;
  rate: number;
  amount: number;
  tax: number;
}

export interface TakeHomeResult {
  fteSalary: number;
  fraction: number;
  grossAnnual: number;
  pensionableEarnings: number;
  pensionRate: number;
  pensionContribution: number;
  avc: number;
  taxableIncome: number;
  personalAllowance: number;
  incomeTax: number;
  taxBands: BandBreakdown[];
  nationalInsurance: number;
  studentLoanRepayment: number;
  postgradRepayment: number;
  totalDeductions: number;
  netAnnual: number;
  netMonthly: number;
  netWeekly: number;
  grossMonthly: number;
  effectiveTaxRate: number;
  employerPension: number;
}

/** TPS tier is set by the FTE salary rate, not actual part-time pay. */
export function tpsRate(fteSalary: number): number {
  for (const tier of tpsTiers) {
    if (tier.upTo === null || fteSalary <= tier.upTo) return tier.rate;
  }
  return tpsTiers[tpsTiers.length - 1].rate;
}

export function personalAllowanceFor(grossAnnual: number): number {
  const { personalAllowance, taperThreshold } = incomeTax;
  if (grossAnnual <= taperThreshold) return personalAllowance;
  const reduction = Math.floor((grossAnnual - taperThreshold) / 2);
  return Math.max(0, personalAllowance - reduction);
}

function taxFromBands(taxable: number, bands: Band[]): BandBreakdown[] {
  const out: BandBreakdown[] = [];
  let remaining = taxable;
  let lower = 0;
  for (const band of bands) {
    if (remaining <= 0) break;
    const cap = band.upTo === null ? Infinity : band.upTo;
    const width = cap - lower;
    const amount = Math.max(0, Math.min(remaining, width));
    if (amount > 0) {
      out.push({
        label: band.label,
        rate: band.rate,
        amount,
        tax: amount * band.rate,
      });
      remaining -= amount;
    }
    lower = cap;
  }
  return out;
}

export function calculateNi(grossAnnual: number): number {
  const { mainRate, additionalRate, primaryThreshold, upperEarningsLimit } =
    employeeNi;
  if (grossAnnual <= primaryThreshold) return 0;
  const mainBand =
    Math.min(grossAnnual, upperEarningsLimit) - primaryThreshold;
  const upperBand = Math.max(0, grossAnnual - upperEarningsLimit);
  return mainBand * mainRate + upperBand * additionalRate;
}

export function studentLoanFor(
  grossAnnual: number,
  plan: StudentLoanPlan,
): number {
  if (plan === "none") return 0;
  const cfg = studentLoanPlans[plan];
  if (!cfg) return 0;
  return Math.max(0, (grossAnnual - cfg.threshold) * cfg.rate);
}

export function calculateTakeHome(input: TakeHomeInput): TakeHomeResult {
  const fraction = input.fraction ?? 1;
  const fteSalary = Math.max(0, input.fteSalary);
  const allowances = Math.max(0, input.allowances ?? 0);
  const regime = input.regime ?? "ruk";
  const inPension = input.inPension ?? true;
  const avc = Math.max(0, input.avcAnnual ?? 0);

  // Allowances are pro-rated alongside salary for part-time staff.
  const grossAnnual = (fteSalary + allowances) * fraction;

  const rate = inPension ? tpsRate(fteSalary + allowances) : 0;
  const pensionableEarnings = grossAnnual;
  const pensionContribution = pensionableEarnings * rate;

  // Pension and AVC come out before income tax but after NI is assessed.
  const taxableGross = Math.max(0, grossAnnual - pensionContribution - avc);
  const allowance = personalAllowanceFor(taxableGross);
  const taxableIncome = Math.max(0, taxableGross - allowance);
  const bands = regime === "scotland" ? scotlandBands : rukBands;
  const taxBands = taxFromBands(taxableIncome, bands);
  const incomeTaxDue = taxBands.reduce((sum, b) => sum + b.tax, 0);

  // NI is calculated on gross pay before pension relief (TPS is not salary sacrifice).
  const ni = calculateNi(grossAnnual);

  const slPlan = input.studentLoan ?? "none";
  const studentLoanRepayment = studentLoanFor(grossAnnual, slPlan);
  const postgradRepayment = input.postgradLoan
    ? studentLoanFor(grossAnnual, "postgrad")
    : 0;

  const totalDeductions =
    pensionContribution +
    avc +
    incomeTaxDue +
    ni +
    studentLoanRepayment +
    postgradRepayment;
  const netAnnual = grossAnnual - totalDeductions;

  return {
    fteSalary,
    fraction,
    grossAnnual,
    pensionableEarnings,
    pensionRate: rate,
    pensionContribution,
    avc,
    taxableIncome,
    personalAllowance: allowance,
    incomeTax: incomeTaxDue,
    taxBands,
    nationalInsurance: ni,
    studentLoanRepayment,
    postgradRepayment,
    totalDeductions,
    netAnnual,
    netMonthly: netAnnual / 12,
    netWeekly: netAnnual / 52,
    grossMonthly: grossAnnual / 12,
    effectiveTaxRate: grossAnnual > 0 ? totalDeductions / grossAnnual : 0,
    employerPension: inPension ? pensionableEarnings * 0.288 : 0,
  };
}
