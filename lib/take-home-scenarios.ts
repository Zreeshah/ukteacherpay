import { calculateTakeHome, type TakeHomeInput, type TakeHomeResult } from "@/lib/payroll";

export interface ThreeYearProjection {
  year: number;
  fteSalary: number;
  result: TakeHomeResult;
}

/**
 * Shows a what-if using current-year tax and TPS rules. It is not a forecast of
 * future awards or thresholds, which are not published in the calculator data.
 */
export function projectTakeHome(
  input: TakeHomeInput,
  annualBasePayChange: number,
  years = 3,
): ThreeYearProjection[] {
  const annualChange = Math.max(-1, annualBasePayChange);
  return Array.from({ length: years }, (_, index) => {
    const year = index + 1;
    const fteSalary = input.fteSalary * (1 + annualChange) ** year;
    return {
      year,
      fteSalary,
      result: calculateTakeHome({ ...input, fteSalary }),
    };
  });
}
