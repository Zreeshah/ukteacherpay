import type { PageContent } from "../types";

const UPDATED = "2026-08-23";

export const utilityPages: PageContent[] = [
  {
    slug: "methodology",
    hub: "calculator",
    title: "How We Calculate Teacher Pay",
    metaTitle: "How We Calculate — Methodology & Data Sources",
    metaDescription:
      "The exact formulas, rates and data sources behind every calculator on this site, including the order deductions are applied and known limitations.",
    primaryKeyword: "how teacher pay is calculated",
    secondaryKeywords: ["teacher pay calculation method", "teacher salary formula"],
    calculator: "none",
    intro:
      "Every figure on this site comes from published sources. This page sets out exactly how each calculation works so you can check it yourself.",
    keyTakeaways: [
      "Pay scales come from the STPCD 2026/27, tax rates from HMRC and contribution tiers from Teachers' Pensions.",
      "Deductions are applied in a specific order: pension first, then income tax on the remainder, with National Insurance charged on gross pay.",
      "All calculations run in your browser. Nothing you type is sent to a server or stored.",
    ],
    blocks: [
      { kind: "h2", text: "The order deductions are applied" },
      { kind: "p", text: "This order matters, and getting it wrong is the most common reason a homemade spreadsheet disagrees with a payslip." },
      { kind: "ol", items: [
        "**Gross pay** is the pay-point salary multiplied by your FTE fraction, plus any pro-rated TLR and SEN allowances.",
        "**Pension** is deducted first, at the tier rate set by your full-time equivalent salary.",
        "**Income tax** is charged on gross pay minus the pension contribution, minus your personal allowance.",
        "**National Insurance** is charged on **gross** pay — the pension is not deducted first, because the TPS is a net-pay arrangement, not salary sacrifice.",
        "**Student loan** repayments are charged on gross pay above the plan threshold.",
      ]},
      { kind: "h2", text: "Income tax" },
      { kind: "p", text: "For England, Wales and Northern Ireland we apply the personal allowance of £12,570, then 20% on the next £37,700, 40% up to £125,140 and 45% above. Above £100,000 the personal allowance tapers by £1 for every £2 of income, which the calculator applies automatically." },
      { kind: "p", text: "For Scotland we apply the six Scottish bands, from the 19% starter rate to the 48% top rate." },
      { kind: "h2", text: "National Insurance" },
      { kind: "p", text: "Class 1 employee National Insurance at 8% between £12,570 and £50,270, then 2% above the upper earnings limit." },
      { kind: "h2", text: "Teachers' Pension" },
      { kind: "p", text: "The contribution tier is set by the full-time equivalent salary including allowances, not by actual part-time earnings. Employer contributions are 28.8%. Pension built up each year is 1/57th of pensionable pay, revalued at CPI plus 1.6% while you remain in active service." },
      { kind: "h2", text: "Known limitations" },
      { kind: "ul", items: [
        "We assume the standard 1257L tax code unless stated otherwise.",
        "Salary sacrifice arrangements for childcare, cycle schemes or cars are not modelled.",
        "Leadership pay points between the published L1 and L43 endpoints are interpolated and shown as indicative.",
        "Pension projections use assumptions you control; they are not a statement of entitlement.",
        "Actuarial reduction factors shown are indicative. The scheme publishes the definitive factors.",
      ]},
      { kind: "callout", tone: "warn", title: "This is guidance, not advice", text: "Nothing here is financial, legal or tax advice. For decisions about retirement or leaving the scheme, speak to a regulated adviser and check your official benefit statement." },
    ],
    faq: [
      { question: "Why does my payslip differ from this calculator?", answer: "The usual causes are a non-standard tax code, salary sacrifice deductions, a mid-year pay point change, or an adjustment for underpaid tax from a previous year. The calculator assumes a clean 1257L code and no other income." },
      { question: "Is my data stored?", answer: "No. Every calculation runs in your browser. Nothing you enter is transmitted or saved." },
      { question: "How often is the data updated?", answer: "Pay scales are updated each September when the new STPCD is published, and tax rates each April at the start of the tax year." },
    ],
    sources: [
      { label: "STPCD 2026 (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "HMRC rates and thresholds 2026 to 2027", url: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" },
      { label: "Teachers' Pensions contribution tiers", url: "https://www.teacherspensions.co.uk/members/working-life/paying-in/contribution-tiers.aspx" },
    ],
    updated: UPDATED,
  },
  {
    slug: "about",
    hub: "calculator",
    title: "About UK Teacher Pay",
    metaTitle: "About — Free UK Teacher Pay & Pension Calculators",
    metaDescription:
      "Independent, free calculators and reference data for UK teachers, built on official STPCD and HMRC figures with no sign-up and no data collection.",
    primaryKeyword: "about uk teacher pay",
    secondaryKeywords: [],
    calculator: "none",
    intro:
      "Free, independent pay and pension tools for teachers across the UK. No accounts, no data collection, no paywall.",
    keyTakeaways: [
      "Every calculation runs in your browser — nothing you type leaves your device.",
      "All figures trace back to the STPCD, HMRC and Teachers' Pensions.",
      "Pay scales are refreshed each September and tax rates each April.",
    ],
    blocks: [
      { kind: "h2", text: "Why this site exists" },
      { kind: "p", text: "Teacher pay is more complicated than it should be. Four regional pay bands in England alone, separate systems in Scotland and Northern Ireland, a tiered pension whose rate depends on a salary you might not actually earn, and allowances that are pro-rated in ways nobody explains clearly." },
      { kind: "p", text: "Most salary calculators are built for the private sector and get the teacher-specific parts wrong — particularly the pension tier and the order deductions are applied. This site is built specifically around the STPCD." },
      { kind: "h2", text: "How we keep it accurate" },
      { kind: "ul", items: [
        "Pay scales are taken directly from the published STPCD each year.",
        "Tax and National Insurance thresholds come from HMRC.",
        "Pension tiers and scheme rules come from Teachers' Pensions.",
        "Every page lists its sources so you can check the underlying figures.",
        "The [methodology page](/methodology/) sets out every formula in full.",
      ]},
      { kind: "h2", text: "Privacy" },
      { kind: "p", text: "There are no accounts and no forms that store your salary. All calculators run entirely in your browser. We cannot see what you type." },
    ],
    faq: [
      { question: "Is this site free?", answer: "Yes, completely. There is no paywall, no sign-up and no premium tier." },
      { question: "Is this financial advice?", answer: "No. It is independent guidance based on published figures. For decisions about retirement, leaving the pension scheme or major financial changes, speak to a regulated financial adviser." },
      { question: "Who is it for?", answer: "Classroom teachers, leadership, unqualified teachers, supply teachers and support staff across England, Wales, Scotland and Northern Ireland." },
    ],
    sources: [],
    updated: UPDATED,
  },
  {
    slug: "sources",
    hub: "calculator",
    title: "Data Sources",
    metaTitle: "Data Sources — Official References We Use",
    metaDescription:
      "Every official source behind the pay scales, tax rates, pension tiers and conditions of service figures used across this site.",
    primaryKeyword: "teacher pay data sources",
    secondaryKeywords: [],
    calculator: "none",
    intro: "Every figure on this site traces back to one of these published sources.",
    keyTakeaways: [
      "Pay scales come from the STPCD, published annually by the Department for Education.",
      "Tax and National Insurance figures come from HMRC.",
      "Pension rules and contribution tiers come from Teachers' Pensions and the scheme regulations.",
    ],
    blocks: [
      { kind: "h2", text: "Pay and conditions" },
      { kind: "ul", items: [
        "School Teachers' Pay and Conditions Document (STPCD) 2026 — statutory pay scales and allowances for England and Wales.",
        "School Teachers' Review Body (STRB) 36th Report — the recommendations behind the 2026/27 award.",
        "Burgundy Book — Conditions of Service for School Teachers in England and Wales, covering sick pay, maternity pay and resignation dates.",
        "SNCT Handbook — the Scottish Negotiating Committee for Teachers pay scale.",
      ]},
      { kind: "h2", text: "Tax and National Insurance" },
      { kind: "ul", items: [
        "HMRC — Rates and thresholds for employers 2026 to 2027.",
        "Scottish Government — Scottish income tax rates and bands 2026/27.",
        "Student Loans Company — repayment thresholds and plan rules.",
      ]},
      { kind: "h2", text: "Pensions" },
      { kind: "ul", items: [
        "Teachers' Pensions — member contribution tiers and scheme guides.",
        "Teachers' Pension Scheme Regulations 2014 — the CARE scheme rules.",
        "Government Actuary's Department — actuarial factors for early and late retirement.",
      ]},
      { kind: "h2", text: "Workforce statistics" },
      { kind: "ul", items: [
        "DfE School Workforce in England — regional average pay and workforce composition.",
        "ONS — regional price levels and earnings data.",
      ]},
    ],
    faq: [
      { question: "How current is the data?", answer: "Pay scales reflect the STPCD 2026/27 effective from 1 September 2026. Tax figures reflect the 2026/27 tax year from 6 April 2026." },
      { question: "What if an official figure changes?", answer: "Pay scales are reviewed each September and tax rates each April. If a figure here disagrees with an official source, the official source is correct." },
    ],
    sources: [
      { label: "STPCD 2026 (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "HMRC rates and thresholds 2026 to 2027", url: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" },
      { label: "Teachers' Pensions", url: "https://www.teacherspensions.co.uk/" },
      { label: "Student loan repayment", url: "https://www.gov.uk/repaying-your-student-loan/what-you-pay" },
      { label: "DfE School Workforce in England", url: "https://explore-education-statistics.service.gov.uk/find-statistics/school-workforce-in-england" },
    ],
    updated: UPDATED,
  },
  {
    slug: "privacy",
    hub: "calculator",
    title: "Privacy Policy",
    metaTitle: "Privacy Policy",
    metaDescription:
      "How this site handles data. Calculators run entirely in your browser and no salary information is collected, transmitted or stored.",
    primaryKeyword: "privacy policy",
    secondaryKeywords: [],
    calculator: "none",
    intro: "Short version: calculators run in your browser and we do not collect what you type.",
    keyTakeaways: [
      "No accounts, no logins, no salary data collected.",
      "All calculations happen locally in your browser.",
    ],
    blocks: [
      { kind: "h2", text: "What we collect" },
      { kind: "p", text: "Nothing you enter into a calculator. Every calculation runs client-side in your browser and the values never leave your device." },
      { kind: "h2", text: "Analytics and advertising" },
      { kind: "p", text: "We may use privacy-respecting analytics to understand which pages are useful, and advertising partners may set cookies. These never receive the figures you type into calculators." },
      { kind: "h2", text: "Your rights" },
      { kind: "p", text: "Because we do not hold personal data about you, there is nothing to request, correct or delete. You can block cookies in your browser settings at any time." },
    ],
    faq: [
      { question: "Do you store my salary?", answer: "No. Calculator inputs stay in your browser and are never transmitted to us." },
      { question: "Do you use cookies?", answer: "Analytics and advertising partners may set cookies. Calculator inputs are never included in that data." },
    ],
    sources: [],
    updated: UPDATED,
  },
];
