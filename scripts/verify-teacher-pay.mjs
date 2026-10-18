import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const Module = require("node:module");
const ts = require("typescript");
const root = path.resolve(import.meta.dirname, "..");

const originalResolve = Module._resolveFilename;
Module._resolveFilename = function resolveTeacherPayAlias(request, parent, isMain, options) {
  if (request.startsWith("@/")) {
    return originalResolve(path.join(root, request.slice(2)), parent, isMain, options);
  }
  return originalResolve(request, parent, isMain, options);
};

require.extensions[".ts"] = function compileTypeScript(module, filename) {
  const source = fs.readFileSync(filename, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    fileName: filename,
  });
  module._compile(output.outputText, filename);
};

const { leadershipSpine, pointsForScale } = require(path.join(root, "data/teacher-pay-scales.ts"));
const { studentLoanPlans, tpsScheme } = require(path.join(root, "data/tax-rates.ts"));
const { calculateTakeHome, tpsRate } = require(path.join(root, "lib/payroll.ts"));
const { calculateMaternityPay, SMP_STANDARD_WEEKLY_2026 } = require(path.join(root, "lib/maternity.ts"));
const { leadershipPages } = require(path.join(root, "content/pages/leadership.ts"));
const { policyPages } = require(path.join(root, "content/pages/policy.ts"));
const { planningPages } = require(path.join(root, "content/pages/planning.ts"));

const rateCases = [
  [36198.99, 0.074], [36199, 0.089], [48727.99, 0.089], [48728, 0.099],
  [57776.99, 0.099], [57777, 0.105], [76572.99, 0.105], [76573, 0.116],
  [104413.99, 0.116], [104414, 0.12],
];
for (const [salary, expected] of rateCases) {
  assert.equal(tpsRate(salary), expected, `TPS tier at £${salary}`);
}

const partTime = calculateTakeHome({ fteSalary: 53586, fraction: 0.6 });
assert.equal(partTime.grossAnnual, 32151.6, "part-time gross pay");
assert.equal(partTime.pensionRate, 0.074, "part-time L1 must use actual pensionable earnings");
assert.ok(
  Math.abs(partTime.pensionContribution - 2379.2184) < 0.000001,
  "part-time TPS contribution",
);
assert.ok(
  Math.abs(partTime.employerPension - (partTime.pensionableEarnings * tpsScheme.employerContribution)) < 0.000001,
  "employer contribution must use the published TPS rate",
);

const partTimeWithAllowance = calculateTakeHome({ fteSalary: 40000, allowances: 4000, fraction: 0.6 });
assert.equal(partTimeWithAllowance.grossAnnual, 26400, "part-time allowance must be pro-rated with salary");
assert.equal(partTimeWithAllowance.pensionableEarnings, 26400, "pensionable allowance must be included in TPS earnings");
assert.equal(partTimeWithAllowance.pensionRate, 0.074, "allowance scenario TPS tier");
assert.equal(partTimeWithAllowance.pensionContribution, 1953.6, "pension contribution must include the pro-rated allowance");

assert.deepEqual(
  Object.fromEntries(Object.entries(studentLoanPlans).map(([plan, config]) => [plan, config.threshold])),
  { plan1: 26900, plan2: 29385, plan4: 33795, plan5: 25000, postgrad: 21000 },
  "2026/27 student-loan thresholds",
);
const m1Plan2 = calculateTakeHome({ fteSalary: 34069, studentLoan: "plan2" });
assert.equal(m1Plan2.studentLoanRepayment, 421.56, "M1 Plan 2 annual repayment");
assert.ok(
  Math.abs(m1Plan2.netAnnual - 25610.8352) < 0.000001,
  "M1 Plan 2 take-home must include the current repayment threshold",
);

const studentLoanPage = planningPages.find((page) => page.slug === "student-loan-repayment-calculator");
const studentLoanThresholdTable = studentLoanPage?.blocks.find(
  (block) => block.kind === "table" && block.caption === "Repayment thresholds and rates, 2026/27 tax year",
);
assert.deepEqual(studentLoanThresholdTable?.rows, [
  ["Plan 1", "£26,900", "9%"],
  ["Plan 2", "£29,385", "9%"],
  ["Plan 4 (Scotland)", "£33,795", "9%"],
  ["Plan 5", "£25,000", "9%"],
  ["Postgraduate Loan (PGL)", "£21,000", "6%"],
], "student-loan guide thresholds must match the calculator data");
const studentLoanFaq = studentLoanPage?.faq.find((item) => item.question === "Does my pension contribution reduce my student loan repayment?");
assert.match(studentLoanFaq?.answer ?? "", /^No for ordinary Teachers’ Pensions net-pay contributions/, "student-loan guide must not treat net-pay pension contributions as reducing repayment");

for (const [region, expected] of Object.entries({
  england: [53586, 70275, 148829],
  fringe: [55060, 71759, 150301],
  "outer-london": [57837, 74530, 153042],
  "inner-london": [63709, 80411, 158863],
  wales: [54524, 71507, 151434],
})) {
  const spine = leadershipSpine(region);
  assert.equal(spine.length, 43, `${region} leadership point count`);
  assert.deepEqual([spine[0], spine[11], spine[42]], expected, `${region} selected official leadership points`);
}

assert.deepEqual(
  pointsForScale("main", "wales").map((point) => [point.id, point.salary]),
  [["M2", 34912], ["M3", 37717], ["M4", 40623], ["M5", 43821], ["M6", 48226]],
  "Wales main-range labels and values",
);
assert.equal(pointsForScale("leadership", "wales")[11]?.salary, 71507, "Wales L12");
assert.equal(pointsForScale("lead-practitioner", "wales")[17]?.salary, 83295, "Wales LP18");

assert.equal(SMP_STANDARD_WEEKLY_2026, 194.32, "2026/27 SMP standard weekly rate");
const maternityFull = calculateMaternityPay({
  annualSalary: 40941,
  burgundyBookApplies: true,
  hasOneYearTeachingService: true,
  has26WeeksCurrentEmployment: true,
});
assert.equal(maternityFull.route, "full-burgundy-smp", "full Burgundy Book route");
assert.equal(maternityFull.periods.length, 4, "full route period count");
assert.equal(maternityFull.periods[2].weeklyAmount, 587.98, "half pay plus SMP capped below full pay");
assert.equal(maternityFull.potentialHalfPayRepayment, 4723.96, "half-pay repayment estimate");

const maternitySmpOnly = calculateMaternityPay({
  annualSalary: 40941,
  burgundyBookApplies: true,
  hasOneYearTeachingService: false,
  has26WeeksCurrentEmployment: true,
});
assert.equal(maternitySmpOnly.route, "smp-only", "SMP-only route");
assert.equal(maternitySmpOnly.periods[0].weeklyAmount, 708.59, "first six SMP weeks at 90%");

const maternityMa = calculateMaternityPay({
  annualSalary: 40941,
  burgundyBookApplies: false,
  hasOneYearTeachingService: false,
  has26WeeksCurrentEmployment: false,
});
assert.equal(maternityMa.route, "ma-only", "Maternity Allowance route");
assert.equal(maternityMa.estimatedTotal, undefined, "do not guess Maternity Allowance");

const maternityPage = policyPages.find((page) => page.slug === "teacher-maternity-pay");
assert.equal(maternityPage?.calculator, "maternity", "maternity guide must retain the calculator on its existing URL");

const assistantHead = leadershipPages.find((page) => page.slug === "assistant-head-teacher-salary");
assert.ok(assistantHead, "assistant-head page exists");
const regionalTable = assistantHead.blocks.find(
  (block) => block.kind === "table" && block.caption === "Common assistant-head spine points by region, 2026/27",
);
assert.deepEqual(regionalTable?.rows, [
  ["L4", "£57,699", "£59,185", "£61,955", "£67,832"],
  ["L6", "£60,619", "£62,102", "£64,871", "£70,754"],
  ["L8", "£63,688", "£65,166", "£67,940", "£73,824"],
  ["L10", "£66,956", "£68,435", "£71,207", "£77,086"],
  ["L12", "£70,275", "£71,759", "£74,530", "£80,411"],
  ["L14", "£73,827", "£75,310", "£78,074", "£83,960"],
], "assistant-head regional table must match source data");

console.log("Teacher-pay and maternity verification passed.");
