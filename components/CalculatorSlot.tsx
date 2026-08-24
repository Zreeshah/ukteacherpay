import type { CalculatorKind } from "@/content/types";
import TeacherPayCalculator, { type CalcPreset } from "./calculators/TeacherPayCalculator";
import PensionCalculator from "./calculators/PensionCalculator";
import RedundancyCalculator from "./calculators/RedundancyCalculator";
import StudentLoanCalculator from "./calculators/StudentLoanCalculator";
import AvcCalculator from "./calculators/AvcCalculator";
import BudgetPlanner from "./calculators/BudgetPlanner";
import HourlyRateCalculator from "./calculators/HourlyRateCalculator";
import LumpSumCalculator from "./calculators/LumpSumCalculator";
import ResignationDeadline from "./calculators/ResignationDeadline";
import LgpsCalculator from "./calculators/LgpsCalculator";

export default function CalculatorSlot({
  kind,
  preset,
}: {
  kind: CalculatorKind;
  preset?: CalcPreset;
}) {
  switch (kind) {
    case "take-home":
    case "pay-scale":
    case "part-time":
    case "pay-rise":
      return <TeacherPayCalculator preset={preset} />;
    case "pension-care":
    case "early-retirement":
      return <PensionCalculator />;
    case "avc":
      return <AvcCalculator />;
    case "redundancy":
      return <RedundancyCalculator />;
    case "student-loan":
      return <StudentLoanCalculator />;
    case "budget":
      return <BudgetPlanner />;
    case "hourly-rate":
      return <HourlyRateCalculator />;
    case "lump-sum":
      return <LumpSumCalculator />;
    case "resignation":
      return <ResignationDeadline />;
    case "lgps":
      return <LgpsCalculator />;
    default:
      return null;
  }
}
