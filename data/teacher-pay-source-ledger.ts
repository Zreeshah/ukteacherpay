/**
 * Authoritative sources for figures used in teacher-pay calculators and content.
 *
 * Keep factual data, calculator rules and page copy aligned to these records.
 * Do not infer a missing regional scale from England or interpolate pay points.
 */
export const teacherPaySources = {
  strb2026: {
    label: "STRB 36th Report 2026",
    url: "https://www.gov.uk/government/publications/school-teachers-review-body-36th-report-2026",
  },
  governmentResponse2026: {
    label: "Department for Education — Teacher Workforce statement (1 July 2026)",
    url: "https://questions-statements.parliament.uk/written-statements/detail/2026-07-01/hcws171",
  },
  stpcd: {
    label: "DfE — School teachers' pay and conditions",
    url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions",
  },
  neuEngland2026: {
    label: "NEU — Pay scales England (2026/27 advisory points)",
    url: "https://neu.org.uk/advice/your-rights-work/pay-advice/pay-scales/pay-scales-england",
  },
  tpsMemberContributions2026: {
    label: "Teachers' Pensions — member contribution tiers 2026/27",
    url: "https://www.teacherspensions.co.uk/employers/managing-members/contributions/calculating-contributions",
    jurisdiction: "England and Wales TPS eligible employments",
    effectiveFrom: "2026-04-01",
    status: "in force",
    sourceChecked: "2026-10-19",
  },
  studentLoanRepayment2026: {
    label: "HMRC — student loan and postgraduate loan repayment guidance for employers",
    url: "https://www.gov.uk/guidance/special-rules-for-student-loans",
    jurisdiction: "UK payroll",
    effectiveFrom: "2026-04-06",
    status: "in force",
    sourceChecked: "2026-10-19",
    affectedPages: ["teacher-pay-calculator", "teacher-take-home-pay", "student-loan-repayment-calculator"],
  },
  tpsEmployerContributions2026: {
    label: "Teachers' Pensions — calculating contributions",
    url: "https://www.teacherspensions.co.uk/employers/managing-members/contributions/calculating-contributions",
    jurisdiction: "England and Wales TPS eligible employments",
    effectiveFrom: "2026-04-01",
    status: "in force",
    sourceChecked: "2026-10-19",
  },
  niPayCirculars: {
    label: "Department of Education NI — pay circulars",
    url: "https://www.education-ni.gov.uk/articles/pay-circulars",
  },
  snct: {
    label: "SNCT — Scottish Negotiating Committee for Teachers",
    url: "https://www.snct.org.uk/",
  },
  nasuwtWales: {
    label: "NASUWT — pay scales Wales",
    url: "https://www.nasuwt.org.uk/advice/pay-pensions/pay-scales/pay-scales-wales.html",
  },
} as const;

export const teacherPayDataStatus = {
  england2026: "Government accepted 3.5% award from 1 September 2026; published England points are advisory until the relevant Pay Order is in force.",
  walesLeadership2026: "NASUWT publishes advisory 2026/27 Welsh leadership points. Use those point-by-point figures, never England's spine.",
  tps2026: "Member tiers apply from 1 April 2026 and use the annual salary rate for each eligible employment, including pro-rated pensionable earnings.",
} as const;
