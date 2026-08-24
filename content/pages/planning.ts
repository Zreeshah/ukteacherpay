import type { PageContent } from "../types";

const UPDATED = "2026-08-23";

const SOURCES = [
  { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
  { label: "Burgundy Book — Conditions of Service for School Teachers in England and Wales (NEU)", url: "https://neu.org.uk/advice/your-rights-work/pay/burgundy-book" },
  { label: "HMRC — Rates and thresholds for employers 2026 to 2027", url: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" },
  { label: "Teachers' Pensions — member guidance", url: "https://www.teacherspensions.co.uk/" },
];

const REDUNDANCY_SOURCES = [
  { label: "GOV.UK — Redundancy: your rights", url: "https://www.gov.uk/redundancy-your-rights" },
  { label: "GOV.UK — Calculate your statutory redundancy pay", url: "https://www.gov.uk/calculate-your-redundancy-pay" },
  { label: "Acas — Redundancy", url: "https://www.acas.org.uk/redundancy" },
  { label: "Burgundy Book — Conditions of Service for School Teachers in England and Wales (NEU)", url: "https://neu.org.uk/advice/your-rights-work/pay/burgundy-book" },
];

const LOAN_SOURCES = [
  { label: "GOV.UK — Repaying your student loan: what you pay", url: "https://www.gov.uk/repaying-your-student-loan/what-you-pay" },
  { label: "GOV.UK — Which repayment plan you are on", url: "https://www.gov.uk/repaying-your-student-loan/which-repayment-plan-you-are-on" },
  { label: "Student Loans Company", url: "https://www.gov.uk/government/organisations/student-loans-company" },
  { label: "HMRC — Rates and thresholds for employers 2026 to 2027", url: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" },
];

export const planningPages: PageContent[] = [
  // ---------------------------------------------------------------- PILLAR
  {
    slug: "teacher-financial-planning",
    isPillar: true,
    hub: "planning",
    title: "Financial Planning for Teachers",
    metaTitle: "Financial Planning for Teachers UK 2026/27",
    metaDescription:
      "Money guidance built around the teaching year: pay dates, summer pay, pension decisions, student loans, redundancy rights and budgeting on a teacher salary.",
    primaryKeyword: "teacher financial planning",
    secondaryKeywords: [
      "financial planning for teachers", "teacher money guide", "teacher finances uk",
      "teacher salary budgeting", "money advice for teachers",
    ],
    calculator: "none",
    intro:
      "Teaching has a financial rhythm that most money advice ignores: pay rises land in September, salary is spread across twelve months including August, and the pension is worth more than almost anything else on your payslip. This hub pulls together the planning that actually matters for teachers.",
    keyTakeaways: [
      "Your Teachers' Pension is usually the single most valuable part of your package, worth 28.8% of salary in employer contributions alone.",
      "Teacher pay rises take effect on 1 September, not in April, so plan around the school year.",
      "Salary is paid over twelve months including the summer, so August pay is not a bonus.",
      "Resignation dates are fixed by the Burgundy Book and leaving on 31 August protects your summer pay.",
      "Student loan repayments are a fixed percentage of income above a threshold, not a debt to clear at speed for most teachers.",
    ],
    blocks: [
      { kind: "h2", text: "The teaching financial year" },
      { kind: "p", text: "Teachers run on two calendars at once. The tax year starts in April, but almost everything about your pay runs from September. Getting these straight avoids a lot of confusion." },
      { kind: "table", caption: "Key dates in a teacher's financial year", head: ["When", "What happens"], rows: [
        ["1 September", "New pay scales take effect; scale progression applies"],
        ["September to November", "Pay award arrears often processed if the STPCD was confirmed late"],
        ["31 October", "Deadline to resign for a 31 December leaving date"],
        ["6 April", "New tax year: allowances, thresholds and student loan thresholds change"],
        ["Late February", "Deadline to resign for a 30 April leaving date"],
        ["31 May", "Deadline to resign for a 31 August leaving date"],
        ["31 August", "End of the teaching pay year"],
      ]},
      { kind: "p", text: "The resignation dates matter more than most teachers realise, which is why they have their own page: [teacher resignation deadlines](/teacher-resignation-deadlines/)." },

      { kind: "h2", text: "Start with what you actually earn" },
      { kind: "p", text: "Gross salary is a poor planning number. Between pension, income tax and National Insurance, a classroom teacher loses roughly a quarter of gross pay before anything reaches the bank." },
      { kind: "table", caption: "Monthly take-home, rest of England 2026/27, full time, in pension", head: ["Point", "Gross", "Monthly take-home"], rows: [
        ["M1", "£34,068", "£2,169"],
        ["M3", "£38,400", "£2,377"],
        ["M6", "£46,939", "£2,809"],
        ["U3", "£52,835", "£3,138"],
      ]},
      { kind: "p", text: "Work from the right-hand column. Run your own figures, including any TLR, part-time fraction or student loan, in the [teacher pay calculator](/teacher-pay-calculator/), then build a budget against the result using the [teacher budget planner](/teacher-budget-planner/)." },

      { kind: "h2", text: "The pension is the biggest decision you will make" },
      { kind: "p", text: "The Teachers' Pension Scheme is a career average defined benefit scheme. You build 1/57th of each year's pensionable pay as guaranteed, inflation-linked income for life, and your employer contributes 28.8% of your salary on top of your own contribution." },
      { kind: "p", text: "For a teacher on M4 earning £40,940, that employer contribution alone is worth about £11,790 a year. No other part of the package comes close." },
      { kind: "callout", tone: "warn", title: "Opting out is almost always the wrong answer", text: "Leaving the scheme raises take-home pay immediately, which is why it tempts people under cash-flow pressure. But you surrender the employer contribution entirely and stop building guaranteed income. If money is tight, look at every other lever first. The [teachers' pension guide](/teacher-pension/) explains what you would be giving up." },

      { kind: "h2", text: "Where teacher-specific planning differs" },
      { kind: "h3", text: "Summer pay is not extra" },
      { kind: "p", text: "Teachers are paid an annual salary in twelve equal instalments. August pay is a twelfth of your annual salary, not a holiday bonus. The practical implication is for people leaving: a resignation effective 31 August is paid through the summer, whereas leaving on 31 July is not." },
      { kind: "h3", text: "Pay rises compound with progression" },
      { kind: "p", text: "In September you may receive both the annual award and a scale point increase. A teacher moving M2 to M3 in September 2026 gained about £3,577 — roughly 10% — from the two combined. Plan around the [pay rise cycle](/teacher-pay-rise/) rather than expecting a flat annual uplift." },
      { kind: "h3", text: "Part-time changes more than your salary" },
      { kind: "p", text: "Reducing your fraction cuts pay proportionally but keeps your pension contribution tier at the full-time equivalent rate. It also reduces the pension you build. The [part-time teacher pay calculator](/part-time-teacher-pay-calculator/) shows both effects together." },

      { kind: "h2", text: "Protecting yourself against the downside" },
      { kind: "p", text: "Two risks are worth understanding before they arrive." },
      { kind: "ul", items: [
        "**Restructuring and redundancy.** Falling rolls and budget pressure have made staffing restructures more common. Statutory redundancy pay is modest; Burgundy Book and local authority terms are often better. See the [teacher redundancy calculator](/teacher-redundancy-calculator/).",
        "**Long-term sickness.** Occupational sick pay is generous but finite, running from 25 days full pay in year one to 100 days full pay plus 100 half pay from year four. Read [teacher sick pay](/teacher-sick-pay/) and check where you sit on the ladder.",
      ]},
      { kind: "p", text: "An emergency fund of three to six months of essential outgoings is the standard advice and it holds for teachers. The half-pay stage of sickness absence is precisely the scenario it exists for." },

      { kind: "h2", text: "Student loans: a payroll deduction, not a debt" },
      { kind: "p", text: "For most teachers a student loan behaves like an extra payroll tax rather than a conventional debt. You repay a fixed percentage of income above a threshold, the balance is written off after a set period, and overpaying rarely makes sense unless you are close to clearing it." },
      { kind: "p", text: "Work out what yours costs each month with the [student loan repayment calculator](/student-loan-repayment-calculator/), then treat that figure as a fixed deduction in your budget rather than as a balance to attack." },

      { kind: "h2", text: "Thinking about leaving" },
      { kind: "p", text: "If you are considering leaving teaching, the financial picture is more complicated than a salary comparison. Your pension becomes deferred and is revalued by CPI only rather than CPI plus 1.6%, which compounds into a substantial difference over a long period." },
      { kind: "p", text: "There are also fixed resignation dates to work around, and the timing interacts with summer pay. The [leaving teaching guide](/leaving-teaching/) works through the whole decision, including what a private sector salary would need to be to match your current package once the pension is priced in." },

      { kind: "h2", text: "Reviewing your position each September" },
      { kind: "p", text: "One annual review, timed to the pay year rather than the calendar year, catches almost everything that matters. Put it in the diary for the second week of September when your new pay has landed." },
      { kind: "ol", items: [
        "**Check the new gross rate** against the published scale for your point and region.",
        "**Confirm progression applied** if you were eligible, and that any TLR was uplifted.",
        "**Recalculate take-home** and update your budget against the new figure.",
        "**Check your pension tier** — a pay rise may have moved you into a higher contribution band.",
        "**Increase saving by part of the rise** before it is absorbed into everyday spending.",
        "**Review your emergency fund target**, which rises with your outgoings.",
      ]},

      { kind: "h2", text: "A sensible order of operations" },
      { kind: "ol", items: [
        "**Know your real take-home**, including allowances and any student loan.",
        "**Build a budget** against that number, not against gross salary.",
        "**Stay in the pension** unless there is an exceptional reason not to.",
        "**Build an emergency fund** of three to six months of essential costs.",
        "**Clear expensive debt** — credit cards and overdrafts, not student loans.",
        "**Then consider additional saving**, whether AVCs for pension or an ISA for flexibility.",
        "**Review every September** when your pay changes.",
      ]},
    ],
    faq: [
      { question: "Do teachers get paid during the summer holidays?", answer: "Yes. Teachers are paid an annual salary spread over twelve equal monthly instalments, which includes August. It is not additional pay for the holiday; it is a twelfth of your annual salary like every other month." },
      { question: "Is the teachers' pension worth staying in?", answer: "For almost everyone, yes. Your employer contributes 28.8% of salary on top of your own contribution, and you build guaranteed inflation-linked income for life. On a £40,940 salary the employer contribution alone is worth about £11,790 a year, which no alternative saving arrangement will match." },
      { question: "When do teachers get their pay rise?", answer: "On 1 September each year, when the new STPCD scales take effect. Many teachers also move up a scale point at the same time, so the two increases compound. If the STPCD is confirmed late, arrears usually appear in October or November." },
      { question: "Should teachers overpay their student loan?", answer: "Usually not. Repayments are a fixed percentage of income above a threshold and the balance is written off after a set period, so most teachers never repay the full amount. Overpaying only helps if you are close to clearing the balance before write-off." },
      { question: "How much emergency fund should a teacher have?", answer: "Three to six months of essential outgoings is the standard guidance and it suits teaching well. The specific risk it covers is the drop to half pay during long-term sickness absence, which can arrive with little warning." },
      { question: "What happens to my pension if I leave teaching?", answer: "Benefits already built up are preserved as a deferred pension provided you have at least two years' qualifying service. The important change is that deferred benefits are revalued by CPI alone rather than CPI plus 1.6%, which makes a significant difference over a long period." },
      { question: "Does going part time reduce my pension contribution rate?", answer: "No. The contribution tier is set by your full-time equivalent salary, so the percentage stays the same even though the cash amount falls with your pay. You also build proportionally less pension each year." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ------------------------------------------------------------ redundancy
  {
    slug: "teacher-redundancy-calculator",
    hub: "planning",
    title: "Teacher Redundancy Pay Calculator",
    metaTitle: "Teacher Redundancy Pay Calculator UK 2026/27",
    metaDescription:
      "Work out teacher redundancy pay: statutory entitlement by age and service, the weekly cap, enhanced Burgundy Book terms and the £30,000 tax-free threshold.",
    primaryKeyword: "teachers redundancy pay calculator",
    secondaryKeywords: [
      "teacher redundancy calculator", "teachers redundancy calculator",
      "teacher redundancy pay calculator", "redundancy calculator uk",
      "teacher redundancy pay", "school redundancy pay",
    ],
    calculator: "redundancy",
    intro:
      "Redundancy pay depends on your age, your length of service and your weekly pay. This calculator applies the statutory formula, shows the age-band breakdown behind the figure, and explains where enhanced teacher terms go further than the statutory minimum.",
    keyTakeaways: [
      "Statutory redundancy pay is 0.5, 1 or 1.5 weeks' pay per year of service depending on your age during each year.",
      "Only 20 years of service count and weekly pay is capped at £780 for the statutory calculation.",
      "The first £30,000 of a genuine redundancy payment is tax free.",
      "Many teachers are covered by enhanced terms that lift the cap or the service limit.",
      "Over 55 with two years' service, you may be able to take your pension unreduced instead of a redundancy payment.",
    ],
    blocks: [
      { kind: "h2", text: "How statutory redundancy pay is calculated" },
      { kind: "p", text: "The statutory calculation has three inputs and one formula. It counts each year of service and pays a multiple of a week's pay depending on how old you were during that year." },
      { kind: "table", caption: "Statutory redundancy multipliers", head: ["Your age during that year of service", "Weeks' pay per year"], rows: [
        ["Under 22", "0.5 weeks"],
        ["22 to 40", "1 week"],
        ["41 and over", "1.5 weeks"],
      ]},
      { kind: "p", text: "Two limits then apply. Only the most recent 20 years of service count, and a week's pay is capped at £780 for the statutory calculation regardless of what you actually earn. Both limits bite for experienced teachers, because almost every classroom teacher earns more than £780 a week." },
      { kind: "callout", tone: "info", title: "Where the cap bites", text: "£780 a week is £40,560 a year. A teacher on M4 or above is already over that, so the statutory calculation will understate their real weekly pay. That is exactly why enhanced terms matter." },

      { kind: "h2", text: "Worked examples" },
      { kind: "h3", text: "Example 1: mid-career teacher, below the cap" },
      { kind: "p", text: "Age 45, 12 years' service, weekly pay £700 (below the £780 cap)." },
      { kind: "table", caption: "Age 45, 12 years, £700 a week", head: ["Age band during service", "Years", "Weeks"], rows: [
        ["41 and over (ages 44 down to 41)", "4", "6.0"],
        ["22 to 40 (ages 40 down to 33)", "8", "8.0"],
        ["Total", "12", "14.0"],
        ["Payment", "14 × £700", "£9,800"],
      ]},
      { kind: "h3", text: "Example 2: long-serving teacher, above the cap" },
      { kind: "p", text: "Age 50, 20 years' service, M6 salary of £46,939 which is £902.67 a week — above the cap, so £780 is used." },
      { kind: "table", caption: "Age 50, 20 years, capped at £780 a week", head: ["Age band during service", "Years", "Weeks"], rows: [
        ["41 and over (ages 49 down to 41)", "9", "13.5"],
        ["22 to 40 (ages 40 down to 30)", "11", "11.0"],
        ["Total", "20", "24.5"],
        ["Payment", "24.5 × £780", "£19,110"],
      ]},
      { kind: "p", text: "Had the actual weekly pay of £902.67 been used, the payment would have been £22,115 — about £3,000 more. That gap is what enhanced terms typically close." },
      { kind: "h3", text: "Example 3: early-career teacher" },
      { kind: "p", text: "Age 30, 6 years' service, weekly pay £650. All six years fall in the 22 to 40 band, giving 6 weeks at £650, a payment of £3,900." },

      { kind: "h2", text: "Enhanced redundancy terms for teachers" },
      { kind: "p", text: "Many teachers do better than the statutory minimum. Local authorities and academy trusts commonly operate discretionary policies that improve on it in one or more ways." },
      { kind: "ul", items: [
        "**Using actual weekly pay** instead of the £780 statutory cap — usually the single most valuable enhancement.",
        "**Lifting the 20-year service limit** so all service counts.",
        "**Applying a multiplier** to the statutory calculation, for example 1.5 or 2 times.",
        "**Adding notice pay** where the notice period is not worked.",
      ]},
      { kind: "p", text: "These are discretionary, set out in your employer's redundancy policy rather than in law. Ask for the written policy as soon as a restructure is announced, and involve your union early. The calculator above has toggles to model both the uncapped weekly rate and the removal of the 20-year limit." },

      { kind: "h2", text: "Tax on redundancy pay" },
      { kind: "p", text: "The first £30,000 of a genuine redundancy payment is free of income tax and National Insurance. Anything above that is taxed as income in the year you receive it." },
      { kind: "table", caption: "What is and is not covered by the £30,000 exemption", head: ["Payment", "Tax treatment"], rows: [
        ["Statutory redundancy pay", "Counts towards the £30,000 exemption"],
        ["Enhanced redundancy pay", "Counts towards the £30,000 exemption"],
        ["Pay in lieu of notice", "Taxable in full as earnings"],
        ["Outstanding salary and holiday pay", "Taxable in full as earnings"],
        ["Amounts above £30,000", "Taxable as income"],
      ]},
      { kind: "callout", tone: "warn", title: "Watch the tax-year interaction", text: "A large payment can push you into the higher-rate band for that year, and above £100,000 it starts withdrawing your personal allowance. If your payment is substantial, check the position before agreeing a payment date — sometimes a date either side of 6 April makes a real difference." },

      { kind: "h2", text: "Redundancy and your teachers' pension" },
      { kind: "p", text: "Redundancy interacts with the pension in ways that are easy to miss and can be worth far more than the payment itself." },
      { kind: "h3", text: "Under 55" },
      { kind: "p", text: "Your accrued benefits become deferred. They are revalued by CPI only from that point, rather than CPI plus 1.6% while active. See [leaving teaching](/leaving-teaching/) for what that costs over time." },
      { kind: "h3", text: "Aged 55 or over" },
      { kind: "p", text: "If you are made redundant at 55 or above with at least two years' qualifying service, you may be able to take your benefits immediately. In some redundancy situations the employer can meet the cost of the actuarial reduction, meaning benefits are paid unreduced — a substantial benefit that is easy to overlook." },
      { kind: "p", text: "This is often worth more than the redundancy payment. Model the difference with the [teachers' pension calculator](/teacher-pension-calculator/) before agreeing anything, and take union advice." },
      { kind: "callout", tone: "info", title: "Minimum pension age is rising", text: "The minimum age for taking pension benefits is 55, rising to 57 on 6 April 2028. If your redundancy timing is near that boundary it is worth understanding how the change affects you." },

      { kind: "h2", text: "The redundancy process in schools" },
      { kind: "ol", items: [
        "**Formal consultation begins.** Collective consultation is required where 20 or more redundancies are proposed at one establishment.",
        "**Selection pool and criteria are set.** These must be objective and non-discriminatory. Challenge criteria that appear to target individuals.",
        "**Individual consultation meetings.** You are entitled to be accompanied by a union representative.",
        "**Suitable alternative employment is considered.** Employers must look for alternatives, including elsewhere in a multi-academy trust.",
        "**Notice is given.** Statutory minimum notice is one week per year of service up to twelve weeks, though teacher contracts usually specify longer.",
        "**Right of appeal.** Use it if the process or the selection appears flawed.",
      ]},
      { kind: "p", text: "Get your union involved at the first announcement, not at the individual meeting stage. Procedural challenges are far more effective early." },

      { kind: "h2", text: "What to do when a restructure is announced" },
      { kind: "p", text: "The weeks immediately after an announcement are when the outcome is most influenceable. Once selection criteria are agreed and applied, challenging them is much harder." },
      { kind: "ol", items: [
        "**Contact your union immediately**, before the first individual meeting.",
        "**Request the written redundancy policy** so you know whether enhanced terms apply.",
        "**Request the selection criteria and the pool definition** in writing, and check they are objective.",
        "**Get a pension estimate** from Teachers' Pensions, particularly if you are 55 or over.",
        "**Model your finances** for a period without salary using the [teacher budget planner](/teacher-budget-planner/).",
        "**Consider whether you would accept redeployment**, including elsewhere in a multi-academy trust.",
      ]},
      { kind: "p", text: "If the outcome is that you leave teaching altogether rather than move school, the longer-term pension consequences are set out in the [leaving teaching guide](/leaving-teaching/), and the fixed resignation dates on the [resignation deadlines](/teacher-resignation-deadlines/) page may still be relevant to your leaving date." },

      { kind: "h2", text: "Common mistakes" },
      { kind: "ul", items: [
        "**Accepting the statutory figure without asking about enhanced terms.** Always request the written redundancy policy.",
        "**Forgetting the pension option at 55 plus.** Unreduced early payment can dwarf the redundancy sum.",
        "**Assuming notice pay is tax free.** It is not — only genuine redundancy pay counts towards the £30,000.",
        "**Using gross annual pay divided by 52 without checking the cap.** The statutory calculation caps a week at £780.",
        "**Signing a settlement agreement without advice.** These are legally binding and require independent advice to be valid.",
      ]},
    ],
    faq: [
      { question: "How much redundancy pay do teachers get?", answer: "The statutory calculation gives 0.5, 1 or 1.5 weeks' pay per year of service depending on your age during each year, capped at 20 years of service and £780 a week. A teacher aged 45 with 12 years' service on £700 a week would receive £9,800. Many teachers receive more under enhanced employer terms." },
      { question: "Is teacher redundancy pay taxable?", answer: "The first £30,000 of a genuine redundancy payment is free of income tax and National Insurance. Anything above that is taxed as income. Pay in lieu of notice, outstanding salary and holiday pay are taxable in full and do not count towards the £30,000." },
      { question: "What is the maximum statutory redundancy pay?", answer: "The statutory maximum is 30 weeks' pay at the capped weekly rate — 20 years of service all falling in the 41-plus band at 1.5 weeks each. At the £780 cap that is £23,400." },
      { question: "Do teachers get enhanced redundancy pay?", answer: "Often, but it is discretionary rather than automatic. Common enhancements are using actual weekly pay instead of the £780 cap, removing the 20-year service limit, or applying a multiplier to the statutory figure. Ask your employer for the written redundancy policy." },
      { question: "Can I take my teachers' pension instead of redundancy?", answer: "If you are 55 or over with at least two years' qualifying service you may be able to take benefits immediately on redundancy, and in some cases the employer meets the cost of the actuarial reduction so they are paid unreduced. This can be worth considerably more than the redundancy payment itself." },
      { question: "How is a week's pay calculated for teacher redundancy?", answer: "Normally your gross annual salary divided by 52. For the statutory calculation that figure is then capped at £780 a week, which affects almost every teacher on M4 or above. Enhanced schemes often use the uncapped figure instead." },
      { question: "Does part-time service count for redundancy pay?", answer: "Yes. Part-time years count as full years of service. The difference is in the weekly pay figure, which is based on your actual part-time earnings rather than the full-time equivalent." },
      { question: "How long do I have to have worked to get redundancy pay?", answer: "Two years' continuous service is required for statutory redundancy pay. Below that there is no statutory entitlement, though an employer's discretionary policy may still provide something." },
    ],
    sources: REDUNDANCY_SOURCES,
    updated: UPDATED,
  },

  // ------------------------------------------------------------ student loan
  {
    slug: "student-loan-repayment-calculator",
    hub: "planning",
    title: "Student Loan Repayment Calculator",
    metaTitle: "Student Loan Repayment Calculator UK 2026/27 — Teachers",
    metaDescription:
      "Work out your monthly student loan deduction on a teacher salary. All five UK plans with 2026/27 thresholds, PAYE rounding and write-off periods explained.",
    primaryKeyword: "postgraduate loan repayment calculator",
    secondaryKeywords: [
      "student loan calculator uk", "teacher student loan repayment",
      "student loan repayment calculator", "plan 2 repayment calculator",
      "plan 5 student loan calculator", "student loan deduction calculator",
    ],
    calculator: "student-loan",
    intro:
      "Student loan repayments are a percentage of what you earn above a threshold, not a fixed instalment. This calculator shows the exact monthly deduction for your plan and salary, including the postgraduate loan which is charged separately and on top.",
    keyTakeaways: [
      "Undergraduate plans take 9% of income above the threshold; the Postgraduate Loan takes 6%.",
      "Thresholds for 2026/27 range from £21,000 for the Postgraduate Loan to £32,745 for Plan 4.",
      "A postgraduate loan is deducted in addition to an undergraduate plan, not instead of it.",
      "PAYE rounds each monthly deduction down to the nearest pound.",
      "Balances are written off after a set period, so most teachers never repay the full amount.",
    ],
    blocks: [
      { kind: "h2", text: "How student loan repayments work" },
      { kind: "p", text: "Repayments behave like an additional payroll deduction rather than a conventional loan. You pay a fixed percentage of everything you earn above your plan's threshold, taken automatically through PAYE. Earn below the threshold and you pay nothing." },
      { kind: "p", text: "Your balance and interest rate do not affect the monthly deduction at all. Only your income and your plan type matter." },
      { kind: "table", caption: "Repayment plans and thresholds 2026/27", head: ["Plan", "Annual threshold", "Rate", "Typically applies to"], rows: [
        ["Plan 1", "£26,065", "9%", "English/Welsh students who started before September 2012"],
        ["Plan 2", "£28,470", "9%", "English/Welsh students starting September 2012 to July 2023"],
        ["Plan 4", "£32,745", "9%", "Scottish students"],
        ["Plan 5", "£25,000", "9%", "English students starting from September 2023"],
        ["Postgraduate Loan", "£21,000", "6%", "Postgraduate master's and doctoral loans"],
      ]},
      { kind: "callout", tone: "info", title: "PGCE students: check carefully", text: "A PGCE is usually funded as an undergraduate-equivalent course, so it typically sits on the same plan as your first degree rather than on the Postgraduate Loan plan. A master's taken separately is different. If you are unsure, check your online repayment account rather than guessing." },

      { kind: "h2", text: "What it costs on a teacher salary" },
      { kind: "p", text: "These are monthly deductions on the rest-of-England pay scale, with PAYE rounding applied." },
      { kind: "table", caption: "Monthly deduction by pay point, Plan 2 (threshold £28,470)", head: ["Point", "Salary", "Annual repayment", "Monthly deduction"], rows: [
        ["M1", "£34,068", "£503.82", "£41"],
        ["M3", "£38,400", "£893.70", "£74"],
        ["M6", "£46,939", "£1,662.21", "£138"],
        ["U3", "£52,835", "£2,192.85", "£182"],
      ]},
      { kind: "p", text: "The plan you are on makes a substantial difference at the same salary, because the thresholds differ so widely." },
      { kind: "table", caption: "Same salary (M3, £38,400), different plans", head: ["Plan", "Threshold", "Annual", "Monthly"], rows: [
        ["Plan 1", "£26,065", "£1,110.15", "£92"],
        ["Plan 2", "£28,470", "£893.70", "£74"],
        ["Plan 4", "£32,745", "£508.95", "£42"],
        ["Plan 5", "£25,000", "£1,206.00", "£100"],
        ["Postgraduate Loan", "£21,000", "£1,044.00", "£87"],
      ]},

      { kind: "h2", text: "Having two loans at once" },
      { kind: "p", text: "If you have both an undergraduate loan and a Postgraduate Loan, you repay both simultaneously. They appear as separate lines on your payslip and the deductions are calculated independently against their own thresholds." },
      { kind: "p", text: "For a teacher on M3 with a Plan 2 loan and a Postgraduate Loan, that is £74 plus £87, a total of £161 a month. That is a meaningful reduction in take-home pay and it is worth including when you run the [teacher pay calculator](/teacher-pay-calculator/)." },

      { kind: "h2", text: "PAYE rounding and why your payslip differs" },
      { kind: "p", text: "PAYE calculates student loan deductions for each pay period and rounds down to the nearest whole pound. Over a year that saves a few pounds compared with an exact annual calculation." },
      { kind: "p", text: "It also means your deduction changes whenever your monthly pay changes. A month with backdated arrears or an extra payment will show a higher deduction, because the calculation is applied to that period's actual pay rather than to an annualised figure." },
      { kind: "callout", tone: "tip", title: "September arrears can spike your deduction", text: "When a pay award is backdated, the arrears land in a single month and the student loan deduction for that month is calculated on the higher figure. It evens out, but it can be an unwelcome surprise." },

      { kind: "h2", text: "When loans are written off" },
      { kind: "p", text: "Every plan has a write-off point, after which any remaining balance is cancelled. This is why most teachers should treat repayments as a deduction rather than a debt." },
      { kind: "table", caption: "Write-off periods by plan", head: ["Plan", "Written off"], rows: [
        ["Plan 1", "25 years after the April you became eligible to repay, or at age 65 for older loans"],
        ["Plan 2", "30 years after the April you became eligible to repay"],
        ["Plan 4", "30 years after the April you became eligible to repay"],
        ["Plan 5", "40 years after the April you became eligible to repay"],
        ["Postgraduate Loan", "30 years after the April you became eligible to repay"],
      ]},
      { kind: "p", text: "Plan 5 is the significant change: a 40-year term means a teacher who starts at 22 will be repaying until 62. On typical teacher salaries, full repayment before write-off is unlikely for most Plan 2 and Plan 5 borrowers." },

      { kind: "h2", text: "Should teachers overpay?" },
      { kind: "p", text: "Usually not. Voluntary overpayments are never refundable, and if your balance would have been written off anyway you have simply given away money." },
      { kind: "p", text: "The decision comes down to whether you are realistically going to clear the balance before write-off." },
      { kind: "ul", items: [
        "**Do not overpay** if your balance is large relative to your expected lifetime earnings — which describes most teachers on Plan 2 or Plan 5.",
        "**Consider overpaying** only if you are close to clearing the balance and well before the write-off date.",
        "**Prioritise other debt first.** Credit cards, overdrafts and personal loans all cost more than a student loan effectively costs most teachers.",
        "**Prioritise the pension.** Additional pension saving carries tax relief and, in the main scheme, an employer contribution. See [teacher AVCs](/teacher-avc-calculator/).",
      ]},

      { kind: "h2", text: "The cost of carrying two loans" },
      { kind: "p", text: "Teachers who did a separate master's alongside an undergraduate degree often carry both an undergraduate plan and a Postgraduate Loan. Combined, the two deductions become a substantial fixed cost." },
      { kind: "table", caption: "Plan 2 plus Postgraduate Loan, monthly deduction", head: ["Point", "Salary", "Plan 2", "PGL", "Combined"], rows: [
        ["M1", "£34,068", "£41", "£65", "£106"],
        ["M3", "£38,400", "£74", "£87", "£161"],
        ["M6", "£46,939", "£138", "£129", "£267"],
        ["U3", "£52,835", "£182", "£159", "£341"],
      ]},
      { kind: "p", text: "At U3 that is £341 a month, more than a tenth of take-home pay. It is worth building into your planning explicitly rather than treating it as background noise — include it when you run the [teacher pay calculator](/teacher-pay-calculator/) and when setting up a budget with the [teacher budget planner](/teacher-budget-planner/)." },

      { kind: "h2", text: "Practical points that catch teachers out" },
      { kind: "ul", items: [
        "**Part-time work below the threshold** means no repayments at all. A 0.5 teacher on M1 earns £17,034, well below every threshold.",
        "**Repayments continue during maternity leave** only if your pay stays above the threshold. On SMP alone it usually will not.",
        "**Leaving teaching mid-year** can mean you have overpaid across the year, and you can reclaim the excess from the Student Loans Company.",
        "**Working abroad** requires you to notify the Student Loans Company and repay directly, with thresholds adjusted for the country.",
        "**The final year** is the one to watch — set up a direct debit for the last two years to avoid overpaying through PAYE after the balance clears.",
      ]},
    ],
    faq: [
      { question: "How much is my student loan repayment on a teacher salary?", answer: "On Plan 2 with the £28,470 threshold, a teacher on M1 (£34,068) repays about £41 a month, on M3 (£38,400) about £74, and on U3 (£52,835) about £182. The exact figure depends on your plan, since thresholds range from £21,000 to £32,745." },
      { question: "Do I repay a postgraduate loan on top of my undergraduate loan?", answer: "Yes. They are calculated separately against their own thresholds and appear as two lines on your payslip. On M3 a Plan 2 loan costs £74 a month and a Postgraduate Loan a further £87, giving £161 in total." },
      { question: "Which student loan plan is a PGCE on?", answer: "A PGCE is usually funded as an undergraduate-equivalent course, so it normally falls under the same plan as your first degree rather than the Postgraduate Loan plan. Check your online repayment account to confirm, since the distinction changes the threshold significantly." },
      { question: "When is my student loan written off?", answer: "Plan 1 after 25 years, Plan 2 and Plan 4 after 30 years, Plan 5 after 40 years, and the Postgraduate Loan after 30 years, counted from the April you first became eligible to repay. Older Plan 1 loans may instead be written off at age 65." },
      { question: "Should teachers overpay their student loan?", answer: "Usually not. Overpayments are non-refundable and most teachers on Plan 2 or Plan 5 will never repay the full balance before it is written off. Overpaying only makes sense if you are close to clearing it well before the write-off date." },
      { question: "Do part-time teachers repay student loans?", answer: "Only if their actual pay exceeds the threshold. A teacher working 0.5 FTE on M1 earns £17,034, which is below every plan threshold, so no repayments are taken. Repayments restart automatically if pay rises above the threshold." },
      { question: "Why did my student loan deduction change this month?", answer: "PAYE calculates the deduction on each pay period's actual pay. A month containing backdated arrears, an extra payment or a pay rise will show a higher deduction. Deductions are also rounded down to the nearest pound each period." },
      { question: "Do I still repay during maternity leave?", answer: "Only while your pay remains above the threshold. During the full-pay and 90% stages you probably will, but once you drop to statutory maternity pay alone your income will usually be below the threshold and deductions stop." },
    ],
    sources: LOAN_SOURCES,
    updated: UPDATED,
  },

  // ------------------------------------------------------------ leaving
  {
    slug: "leaving-teaching",
    hub: "planning",
    title: "Leaving Teaching: The Financial Picture",
    metaTitle: "Leaving Teaching — Pension, Pay and Timing Guide",
    metaDescription:
      "What happens financially when you leave teaching: deferred pension revaluation, Burgundy Book resignation dates, summer pay and the salary you would need.",
    primaryKeyword: "leaving teaching",
    secondaryKeywords: [
      "leaving teaching profession", "quitting teaching", "leaving teaching pension",
      "resigning from teaching", "career change from teaching", "leave teaching uk",
    ],
    calculator: "none",
    intro:
      "Leaving teaching is rarely a straight salary comparison. Your pension changes how it is revalued, your resignation date is fixed by national conditions of service, and the timing determines whether you are paid through the summer. This guide covers the financial mechanics.",
    keyTakeaways: [
      "Deferred pension benefits are revalued by CPI only, not CPI plus 1.6% as while you are active.",
      "Resignation dates are fixed: 31 October, 28 February and 31 May for the three leaving dates.",
      "Leaving on 31 August means you are paid through the summer; leaving on 31 July does not.",
      "You need two years' qualifying service to keep a deferred pension.",
      "Once the pension is priced in, matching a teacher's package usually needs a noticeably higher private sector salary.",
    ],
    blocks: [
      { kind: "h2", text: "What happens to your pension" },
      { kind: "p", text: "This is the part with the largest long-term financial consequence, and it is the part most often overlooked." },
      { kind: "p", text: "With at least two years' qualifying service, the benefits you have built are preserved as a deferred pension. You do not lose them. What changes is how they grow between now and retirement." },
      { kind: "table", caption: "Active versus deferred revaluation", head: ["Status", "Annual revaluation"], rows: [
        ["Active member (still teaching)", "CPI + 1.6%"],
        ["Deferred member (left teaching)", "CPI only"],
      ]},
      { kind: "p", text: "That 1.6% gap compounds. Take a teacher with £10,000 of accrued annual pension, twenty years from retirement, assuming CPI of 2%." },
      { kind: "table", caption: "£10,000 accrued pension, 20 years to retirement, CPI 2%", head: ["Scenario", "Pension at retirement"], rows: [
        ["Stay in teaching (CPI + 1.6%)", "£20,286 a year"],
        ["Leave and defer (CPI only)", "£14,859 a year"],
        ["Difference", "£5,427 a year, for life"],
      ]},
      { kind: "callout", tone: "info", title: "You can restart it", text: "If you return to teaching later, you rejoin as an active member and your benefits resume active revaluation. Leaving is not irreversible, and many people return. Model the scenarios with the [teachers' pension calculator](/teacher-pension-calculator/)." },
      { kind: "p", text: "With less than two years' qualifying service you generally cannot keep a deferred pension, but you may be able to take a refund of your own contributions or transfer the value elsewhere." },

      { kind: "h2", text: "Resignation dates you cannot ignore" },
      { kind: "p", text: "Teaching has fixed resignation dates set out in the Burgundy Book. You cannot simply give a month's notice." },
      { kind: "table", caption: "Resignation deadlines for classroom teachers", head: ["To leave on", "Resign by"], rows: [
        ["31 December", "31 October"],
        ["30 April", "28 February (29 in a leap year)"],
        ["31 August", "31 May"],
      ]},
      { kind: "p", text: "Headteachers have longer notice periods. Full detail, including the head teacher dates and what happens if you miss a deadline, is on the [teacher resignation deadlines](/teacher-resignation-deadlines/) page." },

      { kind: "h2", text: "Why 31 August is the date that matters" },
      { kind: "p", text: "Teachers are paid an annual salary in twelve instalments, which includes the summer. If you leave on 31 August you are paid through July and August. If you leave on 31 July, you are not paid for August." },
      { kind: "p", text: "For a teacher on M4 that is roughly £2,515 of take-home pay lost by leaving a month earlier. Unless there is a compelling reason, the 31 August leaving date is almost always the right one." },
      { kind: "callout", tone: "warn", title: "Check what a new employer expects", text: "Non-teaching employers often expect a start date within four to eight weeks and may not understand fixed resignation dates. Raise it early in the recruitment process rather than after an offer." },

      { kind: "h2", text: "What salary would you actually need?" },
      { kind: "p", text: "Comparing gross salaries understates what teaching pays, because the employer pension contribution is worth 28.8% of salary and does not appear on your payslip." },
      { kind: "table", caption: "Total package value, rest of England 2026/27", head: ["Point", "Salary", "Employer pension (28.8%)", "Total package"], rows: [
        ["M1", "£34,068", "£9,812", "£43,880"],
        ["M3", "£38,400", "£11,059", "£49,459"],
        ["M6", "£46,939", "£13,518", "£60,457"],
        ["U3", "£52,835", "£15,216", "£68,051"],
      ]},
      { kind: "p", text: "A private sector role offering a typical 5% employer pension contribution would need a considerably higher salary to match. For an M6 teacher, matching £60,457 of total package at a 5% employer contribution requires a salary of roughly £57,578." },
      { kind: "p", text: "That is not the whole story either. A defined benefit pension carries no investment risk, which a defined contribution pot does. The comparison understates the security difference." },

      { kind: "h2", text: "The non-pension financial factors" },
      { kind: "ul", items: [
        "**Holiday.** Teachers get around 13 weeks against a typical 5 to 6 weeks. Costed against salary, that is a substantial difference in effective hourly rate — see [teacher hourly rate](/teacher-true-hourly-rate/).",
        "**Sick pay.** Up to 100 days full pay plus 100 half pay is far better than most private sector schemes.",
        "**Maternity pay.** The Burgundy Book scheme is more generous than statutory. See [teacher maternity pay](/teacher-maternity-pay/).",
        "**Job security.** Teaching is comparatively secure, though restructures do happen.",
        "**Progression certainty.** Pay scales are published and predictable, unlike discretionary private sector pay reviews.",
      ]},

      { kind: "h2", text: "A structured way to decide" },
      { kind: "ol", items: [
        "**Work out your true current package** — salary plus employer pension, plus a fair value for holiday and sick pay entitlement.",
        "**Get the deferred pension figure** from Teachers' Pensions so you know exactly what you would be preserving.",
        "**Model both scenarios** to retirement, including the revaluation difference.",
        "**Establish the salary you would need** in the new sector to be no worse off.",
        "**Consider partial options first** — reducing to part time, stepping off the leadership track, moving school, or taking a career break.",
        "**Check the timing** against resignation deadlines and the 31 August leaving date.",
        "**Only then decide.** The financial answer is one input, not the whole decision.",
      ]},

      { kind: "h2", text: "Timing the move around the tax year" },
      { kind: "p", text: "Leaving on 31 August places your final teaching pay in the tax year that began the previous April. If you then start a new role in September, both salaries fall in the same tax year, which is normally straightforward." },
      { kind: "p", text: "Two situations need more care. If you take a break before starting elsewhere, you may have overpaid tax through PAYE, since the system assumes your salary continues all year — you can usually reclaim it. And if you receive a lump sum such as a redundancy payment in the same year as a full salary, the combined figure may push you into the higher-rate band. The [teacher redundancy calculator](/teacher-redundancy-calculator/) explains the £30,000 exemption and how the rest is taxed." },

      { kind: "h2", text: "Alternatives worth considering first" },
      { kind: "p", text: "Leaving is not the only response to an unsustainable situation, and the alternatives preserve your pension position." },
      { kind: "ul", items: [
        "**Reducing your fraction.** Keeps active membership and pension accrual. See the [part-time teacher pay calculator](/part-time-teacher-pay-calculator/).",
        "**Moving school.** Workload varies enormously between schools with identical pay.",
        "**Stepping back from a TLR.** Loses the allowance but often removes the bulk of the workload.",
        "**A career break.** Some employers offer unpaid leave that keeps continuity of service.",
        "**Supply teaching.** Retains classroom work with more control, though usually without pension via an agency.",
      ]},
    ],
    faq: [
      { question: "What happens to my teachers' pension if I leave teaching?", answer: "With at least two years' qualifying service your benefits are preserved as a deferred pension. You keep everything built up, but revaluation drops from CPI plus 1.6% to CPI only. Over twenty years that difference can reduce the eventual pension by more than a quarter." },
      { question: "When can I resign from teaching?", answer: "Resignation dates are fixed by the Burgundy Book. Resign by 31 October to leave on 31 December, by 28 February to leave on 30 April, or by 31 May to leave on 31 August. Headteachers have longer notice periods." },
      { question: "Should I leave on 31 July or 31 August?", answer: "31 August, in almost every case. Teacher salary is paid over twelve months including the summer, so leaving on 31 August means you are paid for July and August. Leaving on 31 July forfeits August pay — roughly £2,515 of take-home for a teacher on M4." },
      { question: "What salary do I need to match my teaching package?", answer: "More than your current salary, because the employer pension contribution of 28.8% is not on your payslip. An M6 teacher on £46,939 has a total package of about £60,457. Matching that with a 5% employer pension contribution needs a salary of roughly £57,578." },
      { question: "Can I go back to teaching after leaving?", answer: "Yes. If you return you rejoin the Teachers' Pension Scheme as an active member and your existing benefits resume active revaluation at CPI plus 1.6%. Many people return after a period elsewhere." },
      { question: "What if I have less than two years' service?", answer: "You generally cannot keep a deferred pension. Instead you may be able to take a refund of your own contributions, or transfer the value to another scheme. The employer contributions are not refunded to you." },
      { question: "Do I lose my pension if I leave teaching?", answer: "No. Benefits already built up are preserved provided you have at least two years' qualifying service. They are payable from your Normal Pension Age. What changes is the rate at which they are revalued between leaving and retirement." },
      { question: "Is supply teaching a good alternative to leaving?", answer: "It keeps you in the classroom with more control over your hours, but pay is usually lower overall and agency work typically does not include Teachers' Pension membership. Direct engagement by a school or local authority is more likely to preserve pension access." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ------------------------------------------------------------ resignation
  {
    slug: "teacher-resignation-deadlines",
    hub: "planning",
    title: "Teacher Resignation Deadlines",
    metaTitle: "Teacher Resignation Dates 2026/27 — Burgundy Book",
    metaDescription:
      "Teacher resignation deadlines under the Burgundy Book: resign by 31 October, 28 February or 31 May to leave on 31 December, 30 April or 31 August.",
    primaryKeyword: "teacher resignation deadlines",
    secondaryKeywords: [
      "teacher resignation dates", "teacher notice period", "when to resign teaching",
      "burgundy book resignation dates", "teacher resignation deadline 31 may",
      "headteacher resignation dates",
    ],
    calculator: "resignation",
    intro:
      "Teachers cannot resign with a month's notice. National conditions of service set three fixed leaving dates a year with deadlines attached. Miss one and you normally wait until the next.",
    keyTakeaways: [
      "There are three leaving dates: 31 December, 30 April and 31 August.",
      "Classroom teachers must resign by 31 October, 28 February and 31 May respectively.",
      "Headteachers have longer notice: 30 September, 31 January and 30 April.",
      "The 31 August leaving date is the most valuable because it includes summer pay.",
      "Deadlines are contractual, so leaving earlier requires your employer's agreement.",
    ],
    blocks: [
      { kind: "h2", text: "The three resignation dates" },
      { kind: "p", text: "The Burgundy Book — the Conditions of Service for School Teachers in England and Wales — sets fixed dates for leaving a teaching post. They exist so that schools can recruit replacements in time for the start of a term, and they are contractual rather than advisory." },
      { kind: "table", caption: "Resignation deadlines for classroom teachers", head: ["Leaving date", "Resign by", "Notice given"], rows: [
        ["31 December", "31 October", "2 months"],
        ["30 April", "28 February (29 in a leap year)", "2 months"],
        ["31 August", "31 May", "3 months"],
      ]},
      { kind: "p", text: "The summer term deadline is longer because the leaving date falls after the summer holiday, giving schools time to recruit for September." },

      { kind: "h2", text: "Headteachers have different dates" },
      { kind: "p", text: "Headteachers give three months' notice for the autumn and spring leaving dates, and four months for the summer one, reflecting how much longer headteacher recruitment takes." },
      { kind: "table", caption: "Resignation deadlines for headteachers", head: ["Leaving date", "Resign by", "Notice given"], rows: [
        ["31 December", "30 September", "3 months"],
        ["30 April", "31 January", "3 months"],
        ["31 August", "30 April", "4 months"],
      ]},
      { kind: "p", text: "Deputy and assistant heads normally follow the classroom teacher dates unless their contract states otherwise. Check your individual contract — see the [leadership pay scale guide](/leadership-pay-scale/) for how leadership contracts differ more generally." },

      { kind: "h2", text: "Why 31 May is the most important date of the year" },
      { kind: "p", text: "The 31 May deadline is the one that catches people out, for two reasons." },
      { kind: "p", text: "First, it is the gateway to the 31 August leaving date, which is the only one that pays you through the summer. Teacher salary is spread over twelve months including July and August, so leaving on 31 August means you receive that pay. For a teacher on M4 in the rest of England, the difference between a 31 August and a 31 July departure is roughly £2,515 of take-home." },
      { kind: "p", text: "Second, most teaching vacancies for September are advertised between January and May. Missing 31 May usually means waiting until the following December to move, which is out of step with the recruitment cycle." },
      { kind: "callout", tone: "warn", title: "Give yourself margin", text: "Resign in writing well before the deadline and ask for written acknowledgement. A resignation that arrives on 1 June is late, and the school is within its rights to hold you to the following term." },

      { kind: "h2", text: "How to resign properly" },
      { kind: "ol", items: [
        "**Put it in writing.** Address the letter to the headteacher, or to the chair of governors if you are the head.",
        "**State the leaving date explicitly.** Write '31 August 2027', not 'the end of the summer term'.",
        "**Deliver it with proof.** Email plus a hard copy, and ask for written acknowledgement.",
        "**Do it before the deadline**, not on the day.",
        "**Keep a copy** of the letter and the acknowledgement.",
        "**Tell payroll if relevant** so your final pay and any outstanding entitlements are handled correctly.",
      ]},
      { kind: "p", text: "A resignation letter does not need to give reasons. A short, professional letter stating your intention and the leaving date is sufficient." },

      { kind: "h2", text: "Leaving outside the standard dates" },
      { kind: "p", text: "You can leave on a different date, but only by mutual agreement. Your employer is not obliged to release you early and can hold you to the contractual date." },
      { kind: "p", text: "In practice schools often do agree, particularly if a replacement is available or the departure is amicable. Factors that help:" },
      { kind: "ul", items: [
        "**A suitable replacement is already available**, which removes the school's main objection.",
        "**Your departure is at a natural break**, such as the end of a half term.",
        "**You offer flexibility**, for instance completing an exam class before leaving.",
        "**The relationship is good.** Early, honest conversations work better than presenting a fait accompli.",
      ]},
      { kind: "callout", tone: "warn", title: "Do not simply leave", text: "Walking out without agreement is a breach of contract. In principle an employer can sue for losses, though this is rare. The more realistic risk is a poor or factual-only reference, which matters in a sector where references are always taken up." },

      { kind: "h2", text: "Academies and independent schools" },
      { kind: "p", text: "Academies are not bound by the Burgundy Book. Most adopt the same dates because they recruit from the same pool and on the same cycle, but their contracts can specify something different." },
      { kind: "p", text: "Independent schools frequently use a full term's notice, which in practice can be longer than the Burgundy Book. Always check your own contract rather than assuming the national dates apply." },

      { kind: "h2", text: "Fixed-term contracts and probation" },
      { kind: "p", text: "Not every teaching contract follows the standard resignation dates, and assuming yours does can be an expensive mistake." },
      { kind: "ul", items: [
        "**Fixed-term contracts** normally end on their stated expiry date without either party resigning. If you want to leave earlier, the notice provisions in that specific contract apply.",
        "**Supply and short-term cover** through an agency is usually governed by the agency agreement, not the Burgundy Book, and notice is typically much shorter.",
        "**Probationary periods** in some contracts allow shorter notice on both sides during the initial months.",
        "**Early career teachers** follow the same resignation dates as other classroom teachers; induction status does not change them.",
      ]},
      { kind: "p", text: "If you are on a fixed-term contract that expires at the end of an academic year, check whether it ends on 31 August or 31 July. The difference is a month's pay, and it is not always what you would expect. Work out what that month is worth to you with the [teacher pay calculator](/teacher-pay-calculator/)." },

      { kind: "h2", text: "Planning your exit around the deadlines" },
      { kind: "p", text: "Working backwards from a September start elsewhere, the timeline is tighter than it looks." },
      { kind: "table", caption: "Timeline for a 31 August departure", head: ["When", "What to do"], rows: [
        ["January to March", "Search and apply for September posts"],
        ["March to May", "Interviews and offers"],
        ["Before 31 May", "Resign in writing and get acknowledgement"],
        ["June to July", "Handover, reference checks, pre-employment checks"],
        ["31 August", "Employment ends, paid through the summer"],
      ]},
      { kind: "p", text: "If you are leaving the profession rather than moving school, the same dates apply and the financial consequences are covered in the [leaving teaching guide](/leaving-teaching/). Either way, run your final pay position through the [teacher pay calculator](/teacher-pay-calculator/) so you know what to expect in your last months." },
    ],
    faq: [
      { question: "What are the teacher resignation deadlines?", answer: "Classroom teachers must resign by 31 October to leave on 31 December, by 28 February to leave on 30 April, or by 31 May to leave on 31 August. These dates come from the Burgundy Book and are contractual." },
      { question: "What is the resignation deadline for headteachers?", answer: "Headteachers give longer notice: 30 September for a 31 December departure, 31 January for 30 April, and 30 April for 31 August. Deputy and assistant heads usually follow the classroom teacher dates unless their contract says otherwise." },
      { question: "Can I leave teaching before the resignation deadline?", answer: "Only with your employer's agreement. The dates are contractual and a school can hold you to them. Many schools will agree to an earlier release if a replacement is available and the departure is amicable, but they are not obliged to." },
      { question: "Why is 31 May such an important date?", answer: "It is the deadline for leaving on 31 August, the only leaving date that pays you through the summer. It also aligns with the September recruitment cycle. Missing it usually means waiting until the December leaving date." },
      { question: "Do academies follow the same resignation dates?", answer: "They are not required to, since academies are not bound by the Burgundy Book. Most use the same dates because they recruit on the same cycle, but your contract governs. Independent schools often require a full term's notice instead." },
      { question: "What happens if I miss the resignation deadline?", answer: "You would normally have to stay until the next leaving date unless your employer agrees to release you early. It is worth asking, particularly if you can help find or hand over to a replacement." },
      { question: "Do I have to give a reason for resigning?", answer: "No. A short professional letter stating your intention to resign and your leaving date is sufficient. There is no obligation to explain your reasons." },
      { question: "Is 31 July or 31 August better to leave?", answer: "31 August. Teacher pay is spread across twelve months including the summer, so leaving on 31 August means you are paid for July and August. Leaving on 31 July gives up August pay, roughly £2,515 of take-home for a teacher on M4." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ------------------------------------------------------------ budget
  {
    slug: "teacher-budget-planner",
    hub: "planning",
    title: "Budget Planner for Teachers",
    metaTitle: "Teacher Budget Planner 2026/27 — Monthly Budget Guide",
    metaDescription:
      "Build a monthly budget on a teacher salary. A worked example on M3 take-home pay, plus the teaching-specific timing issues that break most budgets.",
    primaryKeyword: "teacher budget planner",
    secondaryKeywords: [
      "teacher budget", "budgeting on a teacher salary", "teacher monthly budget",
      "teacher money management", "budget planner teachers uk",
    ],
    calculator: "budget",
    intro:
      "Budgeting as a teacher has two advantages most people do not have: your income is predictable to the pound, and you know a year in advance roughly when it will rise. This guide builds a working monthly budget from a real take-home figure.",
    keyTakeaways: [
      "Budget from take-home pay, not gross — roughly a quarter of a teacher's salary goes in deductions.",
      "A teacher on M3 outside London has about £2,377 a month to work with.",
      "Pay rises land in September, so review your budget then rather than in January.",
      "August pay is a normal month's salary, not a bonus.",
      "The main budgeting risk in teaching is the drop to half pay during long-term sickness.",
    ],
    blocks: [
      { kind: "h2", text: "Start from the right number" },
      { kind: "p", text: "The single most common budgeting mistake is planning against gross salary. Between pension, income tax and National Insurance, roughly a quarter of a teacher's pay never reaches the bank." },
      { kind: "table", caption: "Gross versus take-home, rest of England 2026/27, full time, in pension", head: ["Point", "Gross", "Deductions", "Monthly take-home"], rows: [
        ["M1", "£34,068", "£8,036", "£2,169"],
        ["M3", "£38,400", "£9,874", "£2,377"],
        ["M6", "£46,939", "£13,228", "£2,809"],
        ["U3", "£52,835", "£15,178", "£3,138"],
      ]},
      { kind: "p", text: "Get your own figure from the [teacher pay calculator](/teacher-pay-calculator/), including any TLR, part-time fraction and student loan, before going further." },

      { kind: "h2", text: "A worked monthly budget on M3" },
      { kind: "p", text: "This example uses the M3 take-home figure of £2,377 a month. Treat it as a structure to adapt rather than a prescription — housing costs in particular vary enormously by region." },
      { kind: "table", caption: "Example monthly budget, £2,377 take-home", head: ["Category", "Amount", "Share"], rows: [
        ["Rent or mortgage", "£850", "36%"],
        ["Council tax", "£150", "6%"],
        ["Utilities and water", "£180", "8%"],
        ["Food and household", "£320", "13%"],
        ["Transport", "£180", "8%"],
        ["Phone and internet", "£60", "3%"],
        ["Insurance", "£50", "2%"],
        ["Union subscription", "£18", "1%"],
        ["Savings", "£300", "13%"],
        ["Everything else", "£269", "11%"],
        ["Total", "£2,377", "100%"],
      ]},
      { kind: "callout", tone: "tip", title: "Union subscription is a real line", text: "Most teachers pay union subscriptions monthly through direct debit. It is a small amount that people routinely forget to budget for, and it is worth including explicitly." },

      { kind: "h2", text: "Teaching-specific timing issues" },
      { kind: "h3", text: "September is your financial new year" },
      { kind: "p", text: "Pay rises take effect on 1 September, and many teachers also move up a scale point at the same time. Review your budget in September, not January. If the STPCD is confirmed late, arrears may arrive in October or November as a one-off larger payment — treat it as a saving opportunity rather than spending money." },
      { kind: "h3", text: "August is not a bonus" },
      { kind: "p", text: "Teachers are paid an annual salary in twelve equal instalments. August pay is one twelfth of your salary, exactly like every other month. The trap is treating it as spare because the holiday feels like unpaid time." },
      { kind: "h3", text: "The summer costs more" },
      { kind: "p", text: "Six weeks off usually means higher spending on childcare, travel and activities against unchanged income. Building a small summer fund from September onwards handles this far better than absorbing it in one month." },
      { kind: "h3", text: "September has extra costs too" },
      { kind: "p", text: "Classroom resources, new clothes and the general restart of routine all cluster in September, in the same month your pay changes. Plan for both." },

      { kind: "h2", text: "Building the buffer that actually matters" },
      { kind: "p", text: "The standard advice is three to six months of essential outgoings. For teachers there is a specific reason: the drop to half pay during long-term sickness absence." },
      { kind: "p", text: "Occupational sick pay is generous but it steps down. A teacher in their fourth year or beyond gets 100 working days at full pay, then 100 at half pay. On M3 that means income falling from about £2,377 to roughly £1,378 a month. See [teacher sick pay](/teacher-sick-pay/) for the full ladder." },
      { kind: "table", caption: "Emergency fund targets by pay point (essential costs only)", head: ["Point", "Monthly take-home", "3 months of essentials", "6 months"], rows: [
        ["M1", "£2,169", "≈ £4,900", "≈ £9,800"],
        ["M3", "£2,377", "≈ £5,400", "≈ £10,800"],
        ["M6", "£2,809", "≈ £6,300", "≈ £12,600"],
        ["U3", "£3,138", "≈ £7,100", "≈ £14,200"],
      ]},
      { kind: "callout", tone: "info", title: "Essentials, not total spend", text: "The targets above assume essential costs of roughly 75% of take-home. If your fixed costs are lower, your target is lower. The fund needs to cover rent, bills and food, not your full lifestyle." },

      { kind: "h2", text: "Three budgeting methods that suit teaching" },
      { kind: "p", text: "Because teacher income is unusually predictable, almost any method works. These three suit the September-to-August rhythm particularly well." },
      { kind: "ul", items: [
        "**Pay-yourself-first.** Move savings out on payday before anything else. It works well for teachers because pay lands on the same date every month and the amount rarely varies.",
        "**Two-account split.** Keep fixed costs in one account funded by standing order and spend from the other. What remains in the spending account is genuinely discretionary, with no mental arithmetic required.",
        "**Annual-then-monthly.** Total your yearly costs including the irregular ones — car insurance, professional subscriptions, Christmas, summer — divide by twelve and set that aside monthly. This is the method that stops the summer and September spikes derailing the year.",
      ]},
      { kind: "p", text: "Whichever you pick, base it on take-home rather than gross, and rebuild it each September rather than each January." },

      { kind: "h2", text: "Where to put money after the basics" },
      { kind: "ol", items: [
        "**Clear expensive debt first.** Credit cards and overdrafts cost far more than any realistic investment return.",
        "**Build the emergency fund** to at least three months of essentials.",
        "**Stay in the Teachers' Pension.** The employer contribution of 28.8% is the best return available anywhere on your payslip.",
        "**Then choose between AVCs and an ISA.** AVCs give tax relief and are locked until retirement; an ISA is flexible but without the relief. See [teacher AVCs](/teacher-avc-calculator/).",
        "**Do not prioritise student loan overpayment.** For most teachers the balance is written off before it is cleared. See the [student loan calculator](/student-loan-repayment-calculator/).",
      ]},

      { kind: "h2", text: "Budgets at other pay points" },
      { kind: "p", text: "The same proportional structure scales up, though in practice higher earners tend to increase saving rather than every category equally." },
      { kind: "table", caption: "Indicative allocation at three pay points", head: ["Category", "M3 (£2,377)", "M6 (£2,809)", "U3 (£3,138)"], rows: [
        ["Housing", "£850", "£1,011", "£1,130"],
        ["Food and household", "£320", "£365", "£408"],
        ["Bills and council tax", "£330", "£360", "£380"],
        ["Transport", "£180", "£200", "£220"],
        ["Savings", "£300", "£421", "£471"],
        ["Everything else", "£397", "£452", "£529"],
      ]},
      { kind: "p", text: "The most useful discipline as pay rises is to allocate a fixed share of each September increase to saving before adjusting anything else. A teacher moving from M5 to M6 gains roughly £154 a month in take-home; directing half of that to savings is barely noticeable in daily spending but compounds substantially over a career." },

      { kind: "h2", text: "Adjusting the budget for your circumstances" },
      { kind: "ul", items: [
        "**Part-time teachers** should budget from actual pay, remembering the pension percentage does not fall. Use the [part-time teacher pay calculator](/part-time-teacher-pay-calculator/).",
        "**London teachers** have higher pay but typically far higher housing costs, so the housing share of the budget is usually well above 36%.",
        "**Teachers with a TLR** should treat the allowance as pensionable, taxable income rather than as separate spending money.",
        "**Early career teachers** will see substantial rises for several consecutive years, which is the ideal time to increase saving rather than spending.",
        "**Those approaching retirement** should shift focus towards final pension modelling — see the [teachers' pension calculator](/teacher-pension-calculator/).",
      ]},
    ],
    faq: [
      { question: "How much does a teacher have to live on each month?", answer: "A teacher on M3 in the rest of England takes home about £2,377 a month from a £38,400 salary. On M1 it is roughly £2,169 and on U3 about £3,138. Deductions take roughly a quarter of gross pay." },
      { question: "Do teachers get paid in August?", answer: "Yes. Annual salary is paid in twelve equal monthly instalments including August. It is not additional pay for the holidays — it is one twelfth of your annual salary, the same as every other month." },
      { question: "When should teachers review their budget?", answer: "In September, when new pay scales take effect and many teachers also move up a scale point. That is the point at which your income actually changes, unlike the April tax year." },
      { question: "How much should a teacher save each month?", answer: "There is no single figure, but building three to six months of essential outgoings as an emergency fund is the priority. On M3 that means a target of roughly £5,400 to £10,800. The specific risk it covers is the drop to half pay during long-term sickness." },
      { question: "Should teachers pay into AVCs or an ISA?", answer: "AVCs give tax relief at your marginal rate but lock the money until retirement. An ISA is flexible but without relief. Clear expensive debt and build an emergency fund first; for money you are certain you will not need before retirement, AVCs are usually more efficient." },
      { question: "Why is my September pay different?", answer: "New pay scales take effect on 1 September and you may also have moved up a scale point. If the STPCD was confirmed late, your school may apply the new rate in a later month with backdated arrears, which makes that month unusually high." },
      { question: "How do part-time teachers budget differently?", answer: "Budget from actual pay rather than the full-time equivalent, and remember the pension contribution percentage does not fall with your hours — it is set by your full-time equivalent salary, so it takes a larger share of your actual earnings." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ------------------------------------------------------------ hourly rate
  {
    slug: "teacher-true-hourly-rate",
    hub: "planning",
    title: "A Teacher's True Hourly Rate",
    metaTitle: "Teacher Hourly Rate 2026/27 — Directed vs Actual Hours",
    metaDescription:
      "What teachers really earn per hour. Directed time gives £26.93 an hour on M1, but at self-reported actual hours the figure falls closer to £17.47.",
    primaryKeyword: "teacher hourly rate",
    secondaryKeywords: [
      "teacher hourly pay", "how much do teachers earn per hour",
      "teacher pay per hour uk", "teacher directed time hours", "teacher hourly rate calculator",
    ],
    calculator: "hourly-rate",
    intro:
      "Teachers are salaried, so there is no official hourly rate. But two figures can be calculated: pay divided by contractual directed time, and pay divided by the hours teachers actually report working. The gap between them is the honest answer to the question.",
    keyTakeaways: [
      "Directed time for a full-time teacher is 1,265 hours a year across 195 days.",
      "On directed hours, M1 works out at £26.93 an hour and U3 at £41.77.",
      "Teachers self-report working around 50 hours a week in term time, closer to 1,950 hours a year.",
      "On that basis M1 falls to about £17.47 an hour and U3 to £27.09.",
      "Directed time is a contractual limit on what can be directed, not a cap on total work.",
    ],
    blocks: [
      { kind: "h2", text: "What directed time actually is" },
      { kind: "p", text: "The STPCD specifies that a full-time teacher can be directed to work 1,265 hours across 195 days in a year. Those 195 days comprise 190 days of teaching plus 5 INSET days." },
      { kind: "p", text: "Directed time covers everything your headteacher can require you to do at a specified time and place: teaching, meetings, parents' evenings, INSET, briefings and duties." },
      { kind: "p", text: "Critically, it is not a limit on your total working time. The STPCD also requires teachers to work 'such reasonable additional hours as may be necessary' for planning, marking and preparation. Those hours are undirected and unlimited, which is the root of the whole issue." },
      { kind: "callout", tone: "info", title: "Directed time is a protection, not a target", text: "The 1,265 hours limit exists to stop schools scheduling teachers indefinitely. Your school should publish a directed time budget showing how it allocates the hours. If yours does not, that is worth raising." },

      { kind: "h2", text: "Hourly rate on directed time" },
      { kind: "p", text: "Dividing annual salary by 1,265 directed hours gives the contractual hourly rate." },
      { kind: "table", caption: "Hourly rate on directed time, rest of England 2026/27", head: ["Point", "Salary", "Rate per directed hour"], rows: [
        ["M1", "£34,068", "£26.93"],
        ["M2", "£36,042", "£28.49"],
        ["M3", "£38,400", "£30.36"],
        ["M4", "£40,940", "£32.36"],
        ["M5", "£43,529", "£34.41"],
        ["M6", "£46,939", "£37.11"],
        ["U1", "£49,134", "£38.84"],
        ["U2", "£50,955", "£40.28"],
        ["U3", "£52,835", "£41.77"],
      ]},
      { kind: "p", text: "On this measure teaching compares well with most graduate professions. The problem is that it describes only the directed portion of the job." },

      { kind: "h2", text: "Hourly rate on hours actually worked" },
      { kind: "p", text: "Successive DfE and union surveys have found full-time teachers self-reporting working weeks of around 50 hours in term time. Across 39 working weeks that is roughly 1,950 hours a year, before any holiday working." },
      { kind: "table", caption: "Hourly rate at approximately 1,950 actual hours", head: ["Point", "Salary", "Directed rate", "Actual-hours rate", "Difference"], rows: [
        ["M1", "£34,068", "£26.93", "£17.47", "−£9.46"],
        ["M3", "£38,400", "£30.36", "£19.69", "−£10.67"],
        ["M6", "£46,939", "£37.11", "£24.07", "−£13.04"],
        ["U3", "£52,835", "£41.77", "£27.09", "−£14.68"],
      ]},
      { kind: "callout", tone: "warn", title: "Treat the 1,950 figure as indicative", text: "Self-reported hours vary widely by phase, subject, role and school, and survey methods differ. The 50-hour week is a commonly reported average, not a precise measurement of your workload. Substitute your own honest estimate for a figure that means something to you." },

      { kind: "h2", text: "Working out your own figure" },
      { kind: "ol", items: [
        "**Log your hours for two typical weeks.** Include evening and weekend work, honestly.",
        "**Multiply by 39** for the teaching weeks in a year.",
        "**Add holiday working.** Most teachers do some, particularly in the summer before September and during exam marking periods.",
        "**Divide your gross salary** by the total.",
        "**Then repeat with take-home pay** for the figure that reflects what you actually receive.",
      ]},
      { kind: "p", text: "For a teacher on M3 taking home £28,526 a year and working 1,950 hours, the net hourly rate is £14.63. Get your own take-home figure from the [teacher pay calculator](/teacher-pay-calculator/)." },

      { kind: "h2", text: "How the comparison changes for part-time teachers" },
      { kind: "p", text: "Part-time teachers frequently have a worse hourly rate than their full-time colleagues, for a structural reason: pay is pro-rated precisely, but workload often is not." },
      { kind: "p", text: "A 0.6 teacher should be directed for 759 hours. But planning and marking do not scale down neatly, and attending full-staff meetings, INSET and parents' evenings regardless of fraction is common." },
      { kind: "table", caption: "0.6 teacher on M3 — directed versus realistic", head: ["Scenario", "Salary", "Hours", "Hourly rate"], rows: [
        ["Directed time properly pro-rated", "£23,040", "759", "£30.36"],
        ["Working 0.7 of a full-timer's actual hours", "£23,040", "1,365", "£16.88"],
      ]},
      { kind: "p", text: "If that describes your situation, it is a workload issue rather than a pay issue, and it is worth raising. The [part-time teacher pay calculator](/part-time-teacher-pay-calculator/) shows what your fraction should actually mean." },

      { kind: "h2", text: "The holiday question" },
      { kind: "p", text: "Any honest analysis has to address holidays. Teachers get around 13 weeks a year against a typical 5 to 6 weeks in other graduate roles." },
      { kind: "p", text: "The counter-arguments are that some holiday time is worked, that holidays cannot be taken flexibly, and that the intensity of term time is higher. All are true. But it is also true that a teacher working 1,950 hours is working fewer total hours than someone doing 45 hours a week for 46 weeks, which is 2,070." },
      { kind: "p", text: "The more useful conclusion is not that teaching is well or badly paid per hour, but that its hours are distributed very unevenly — long, intense terms against extended breaks. Whether that suits you is a personal question, and it is one of the main things to weigh if you are considering [leaving teaching](/leaving-teaching/)." },

      { kind: "h2", text: "The net hourly rate" },
      { kind: "p", text: "Gross hourly rates overstate what you actually receive. Running the same calculation on take-home pay gives a figure that is directly comparable to what you spend." },
      { kind: "table", caption: "Net hourly rate, rest of England 2026/27, in pension", head: ["Point", "Annual take-home", "Per directed hour", "Per actual hour"], rows: [
        ["M1", "£26,032", "£20.58", "£13.35"],
        ["M3", "£28,526", "£22.55", "£14.63"],
        ["M6", "£33,711", "£26.65", "£17.29"],
        ["U3", "£37,657", "£29.77", "£19.31"],
      ]},
      { kind: "p", text: "These net figures exclude the employer pension contribution of 28.8%, which is real value even though it never appears on your payslip. Adding it back lifts the effective rate considerably — which is precisely why a salary-only comparison with another sector is misleading, as set out in the [leaving teaching guide](/leaving-teaching/). Get your own take-home figure from the [teacher pay calculator](/teacher-pay-calculator/)." },

      { kind: "h2", text: "How teaching compares on total annual hours" },
      { kind: "p", text: "Weekly hours are the wrong unit for comparing teaching with other work, because the number of working weeks differs so much. Annual hours is the fairer comparison." },
      { kind: "table", caption: "Annual hours compared", head: ["Pattern", "Weeks worked", "Hours per week", "Annual hours"], rows: [
        ["Teacher, directed time only", "39", "32.4", "1,265"],
        ["Teacher, self-reported actual", "39", "50", "1,950"],
        ["Office role, 37.5 hours", "46", "37.5", "1,725"],
        ["Office role, 45 hours", "46", "45", "2,070"],
      ]},
      { kind: "p", text: "On these figures a teacher reporting 50-hour terms works fewer annual hours than someone doing 45-hour weeks year-round, and more than someone on a contained 37.5-hour week. Teaching is not uniquely long in total; it is uniquely concentrated." },

      { kind: "h2", text: "Using this constructively" },
      { kind: "ul", items: [
        "**Check your school's directed time budget.** Schools should publish how the 1,265 hours are allocated.",
        "**Track your actual hours** for a couple of weeks before making any argument about workload — evidence is far more persuasive than impression.",
        "**Compare like with like** when looking at other jobs: use total annual hours, not weekly hours.",
        "**Remember the total package.** Salary alone excludes the employer pension contribution of 28.8%, which is a substantial part of what teaching pays.",
        "**Raise workload through the right route.** Directed time disputes go through your union and your school's workload policy, not through pay.",
      ]},
    ],
    faq: [
      { question: "How much do teachers earn per hour?", answer: "On contractual directed time of 1,265 hours a year, a teacher on M1 earns £26.93 an hour and one on U3 earns £41.77. Measured against self-reported actual hours of around 1,950 a year, those figures fall to about £17.47 and £27.09." },
      { question: "What is directed time for teachers?", answer: "The 1,265 hours across 195 days that a full-time teacher can be directed to work by their headteacher. It covers teaching, meetings, parents' evenings, INSET and duties. It does not cover planning and marking, which are undirected." },
      { question: "How many hours do teachers actually work?", answer: "Surveys consistently find full-time teachers self-reporting around 50 hours a week in term time, which is roughly 1,950 hours a year before holiday working. Figures vary substantially by phase, subject, role and school." },
      { question: "Is 1,265 hours a limit on how much teachers work?", answer: "No. It limits only the hours a headteacher can direct you to work at a specified time and place. The STPCD also requires teachers to work reasonable additional hours for planning, marking and preparation, and those hours are not capped." },
      { question: "Do part-time teachers have a worse hourly rate?", answer: "Often, yes. Pay is pro-rated precisely, but planning, marking and attendance at whole-staff events frequently are not. A 0.6 teacher directed for the correct 759 hours has the same hourly rate as a full-timer; one working closer to 0.7 of the hours does not." },
      { question: "How do I calculate my own hourly rate?", answer: "Log your hours honestly for two typical weeks, multiply by 39 teaching weeks, add an estimate for holiday working, then divide your salary by the total. Repeat using take-home pay for the figure that reflects what you actually receive." },
      { question: "Does the long holiday make up for the hours?", answer: "It depends how you count. A teacher working 1,950 hours is working fewer total hours than someone doing 45 hours a week for 46 weeks. The real difference is distribution: teaching concentrates its hours into intense terms with extended breaks between them." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },
];
