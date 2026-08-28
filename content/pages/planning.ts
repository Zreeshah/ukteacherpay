import type { PageContent } from "../types";

export const planningPages: PageContent[] = [
  // ---------------------------------------------------------------- PILLAR
  {
    slug: "teacher-financial-planning",
    isPillar: true,
    hub: "planning",
    title: "Teacher Financial Planning: The Complete Guide",
    metaTitle: "Teacher Financial Planning: A UK Guide for 2026/27",
    metaDescription:
      "Financial planning for UK teachers: how your payslip works, why your pension beats most investments, and planning for maternity, redundancy and career moves.",
    primaryKeyword: "teacher financial planning",
    secondaryKeywords: [
      "teachers money", "how much money does a teacher make", "how much money do teachers get",
      "how much do teachers make in a month", "financial planning for teachers", "teacher money management",
      "can teachers be rich", "teacher financial advice", "teacher mortgage loans",
      "teacher retirement age", "teacher savings plan", "teacher financial wellbeing",
    ],
    calculator: "none",
    intro:
      "Teaching gives you something most careers never will: a guaranteed, inflation-linked pension plus unusually strong protection against life's worst events — generous maternity terms, long occupational sick pay, and statutory redundancy calculated on age-weighted weeks. Good **teacher financial planning** starts by understanding those structural advantages properly, then builds ordinary discipline on top: knowing your true hourly rate, budgeting against twelve equal monthly payments, and timing big decisions like resignation or part-time working around the rules that govern them. This pillar page maps the whole landscape and hands you off to the detailed guides and calculators for each decision, in order.",
    keyTakeaways: [
      "The Teachers' Pension Scheme is the core asset: 1/57th accrual with CPI-plus-1.6% revaluation while you work.",
      "Your payslip runs through tax, 8% National Insurance, tiered pension contributions of 7.4% to 12.7%, and any student loan.",
      "Burgundy Book conditions give teachers stronger maternity and sick pay than almost any comparable profession.",
      "Twelve equal monthly payments mean summer holidays are paid — but resignation dates still control when income actually stops.",
      "Every major financial decision in teaching has a rule-bound best time; this guide shows where each one lives.",
    ],
    blocks: [
      { kind: "h2", text: "Start with what teaching already gives you" },
      { kind: "p", text: "Most financial advice assumes you must manufacture security from scratch: build an emergency fund, buy insurance, invest for retirement. Teaching pre-installs much of that architecture. The [Teachers' Pension Scheme](/teacher-pension/) replaces investment risk with a statutory guarantee; the Burgundy Book replaces income-risk during maternity and illness with contractual entitlements; and national pay scales replace negotiation anxiety with published numbers. Sound financial planning for teachers therefore begins with an audit of what you already hold." },
      { kind: "table", caption: "The built-in financial architecture of a teaching career", head: ["Layer", "What it provides", "Where to verify"], rows: [
        ["Teachers' Pension Scheme", "Career-average pension, CPI+1.6% active revaluation, 28.8% employer rate", "TPS annual benefit statement"],
        ["STPCD pay scale", "Published salary points, annual awards, progression framework", "Current STPCD"],
        ["Burgundy Book conditions", "Maternity scheme, sick pay scale, resignation dates", "Your contract and trust policy"],
        ["Statutory floor", "SMP/SSP minimums if occupational terms ever lapse", "GOV.UK guidance"],
      ]},

      { kind: "h2", text: "Know exactly what arrives in your bank account" },
      { kind: "p", text: "Gross salary overstates your resources by more than most teachers realise. From the 2026/27 M4 point of £40,940, three layers come out before spending money exists: income tax above the £12,570 personal allowance, National Insurance at 8% between £12,570 and £50,270, and pension contributions tiered from 7.4% upward based on full-time-equivalent salary. A student loan can take another slice depending on plan. The stack looks like this." },
      { kind: "table", caption: "Deduction stack at two common pay points (2026/27, rest of England)", head: ["Item", "M4 (£40,940)", "U3 (£52,835)"], rows: [
        ["Income tax (approx.)", "≈£5,674", "≈£10,106"],
        ["National Insurance at 8%/2%", "≈£2,270", "≈£3,325"],
        ["Pension contribution (tier)", "≈£3,521 (8.6%)", "≈£5,072 (9.6%)"],
        ["Plan 2 student loan (if any)", "≈£1,122", "≈£2,193"],
        ["Approximate monthly net", "≈£2,360", "≈£2,680"],
      ]},
      { kind: "p", text: "Run your own numbers in the [take-home pay calculator](/teacher-take-home-pay/) rather than relying on averages — tier cliffs and loan thresholds move individuals around far more than people expect. Part-time colleagues should use the [part-time version](/part-time-teacher-pay-calculator/) because TPS tiers assess full-time-equivalent salary, not actual pay." },

      { kind: "h2", text: "Treat the pension as your core investment" },
      { kind: "p", text: "Each year of membership banks 1/57th of pensionable pay as a guaranteed, inflation-linked annuity — and while you keep contributing, everything already banked grows at CPI plus 1.6%. No retail investment combines those guarantees. The arithmetic beats almost anything: a mid-career M6 teacher accruing roughly £823 a year of pension for a personal cost near £4,500 receives an employer top-up of 28.8% on top. Before directing spare cash anywhere else, confirm you are opted in, check whether past service includes final-salary segments via our [CARE versus final salary guide](/care-vs-final-salary-pension/), and model outcomes in the [pension calculator](/teacher-pension-calculator/)." },

      { kind: "h2", text: "Plan the predictable life events before they arrive" },
      { kind: "p", text: "Teaching's protections are generous but rule-bound, and each has a qualifying clock worth starting early." },
      { kind: "ul", items: [
        "**Maternity.** One year's aggregated service unlocks the full [Burgundy Book maternity scheme](/teacher-maternity-pay/) — 18 weeks of enhanced pay worth thousands over statutory alone.",
        "**Illness.** Sick pay scales from 25 working days at full pay in year one to 100 plus 100 half-pay days after four years; see the [sick pay guide](/teacher-sick-pay/) for the April-to-March mechanics.",
        "**Redundancy.** Statutory pay is age-weighted (0.5, 1, then 1.5 weeks per year of service) and capped at £780 a week; model scenarios in the [redundancy calculator](/teacher-redundancy-calculator/).",
        "**Career breaks and exits.** Resignation deadlines fall three times a year under Burgundy Book notice rules, and leaving costs pension growth more than salary.",
      ]},

      { kind: "h2", text: "Budget against twelve equal payments" },
      { kind: "p", text: "Teacher salaries divide across twelve months including holidays, which makes budgeting easier than freelance life but hides one trap: fixed commitments sized against net pay feel fine until September childcare invoices or Christmas land together. Build the budget on a normal month, ring-fence a holiday-month buffer, and treat any allowance (TLR, SEN) as variable rather than baseline income since schools can adjust individual payments within published ranges. The [budget planner](/teacher-budget-planner/) handles the month-by-month view." },

      { kind: "h2", text: "Time the big career decisions deliberately" },
      { kind: "p", text: "Four decisions dominate teacher finances, and each rewards timing. Moving part-time changes pension accrual immediately but keeps service building. Promotion into leadership resets every future calculation upward — the [leadership pay scale](/leadership-pay-scale/) shows the spine. Leaving teaching entirely freezes CARE benefits at CPI-only revaluation, which our [leaving teaching guide](/leaving-teaching/) quantifies as the real cost of exit. And retirement timing interacts with actuarial adjustments covered in the [early retirement guide](/teacher-early-retirement/). None of these should be decided by a bad term; all should be decided with numbers." },

      { kind: "h2", text: "A practical annual planning rhythm" },
      { kind: "p", text: "Financial planning sticks when it attaches to dates that already exist in school life. This calendar keeps every major check inside a normal working year without turning finance into a hobby." },
      { kind: "table", caption: "The teacher financial calendar", head: ["When", "Check"], rows: [
        ["September", "New pay point applied after the annual award and progression decisions"],
        ["October", "TPS benefit statement reviewed against expected accrual"],
        ["January", "Student loan plan status and budget refreshed for spring term costs"],
        ["April", "Sick-pay year reset noted; new tax-year thresholds applied"],
        ["Summer", "One deliberate scenario modelled: part-time, promotion or exit"],
      ]},
      { kind: "ol", items: [
        "**September:** verify your new pay point after the annual award and progression; challenge errors within the first month.",
        "**October:** check your TPS benefit statement against expectations; investigate gaps immediately.",
        "**January:** review student loan balance and plan status ahead of threshold changes; reassess budget against spring-term costs.",
        "**April:** note the sick-pay year reset and any tax-year changes; update salary figures in your records.",
        "**Summer:** run one deliberate scenario — part-time, promotion, or exit — so the option is priced before anyone offers it to you informally.",
      ]},

      { kind: "h2", text: "Can you build wealth on a teacher's salary?" },
      { kind: "p", text: "The most common money questions teachers search are blunt: how much do teachers actually make, and can you build anything on it? The honest answer starts with the monthly figure, not the annual one. A mid-scale M4 teacher clears roughly £2,360 a month after all deductions, rising towards £2,700 at U3, and the stability of that number is itself an asset — twelve identical payments make automation (standing orders into savings on payday) unusually reliable compared with variable-income careers. Wealth then compounds through the scheme rather than speculation: the pension contributions you barely notice are, in employer-matching terms, a 28.8% instant return no portfolio offers. See what your salary is really worth per hour in the [true hourly rate guide](/teacher-true-hourly-rate/), and remember that teachers also access ordinary tools — lifetime ISAs, fee-free index funds, and specialist teacher-friendly mortgage lenders that accept pro-rata and supply income." },

      { kind: "h2", text: "When to get professional advice" },
      { kind: "p", text: "Most of this page needs no paid adviser — only documents and arithmetic. But three situations genuinely justify regulated advice, and recognising them early saves both money and mistakes." },
      { kind: "p", text: "Three situations justify paying for regulated advice: pension transfers or early-access decisions involving final-salary segments, divorce settlements touching TPS benefits, and complex tax positions such as tapered allowances at senior leadership salaries. Everything else on this page is verifiable from public sources — STPCD, Burgundy Book, TPS documentation — and free tools cover the arithmetic. Beware advisers who lead by recommending you leave the Teachers' Pension Scheme; opt-out is rarely optimal for classroom salaries and the scheme's guarantees are nearly impossible to replicate privately. A useful filter: any adviser who cannot explain the 1/57th accrual rate and active revaluation in plain terms before discussing their products is not yet equipped to advise a teacher." },
    ],
    faq: [
      { question: "How should a teacher start financial planning?", answer: "Begin with three checks: confirm your place on the current pay scale, read your latest TPS benefit statement, and calculate your true monthly net pay after tax, National Insurance, pension and student loan. Then build a budget on that verified figure rather than gross salary." },
      { question: "Is the teachers' pension enough to retire on?", answer: "For a full career it provides substantial inflation-linked income — a teacher accruing £800+ a year of pension over 30 years reaches a six-figure annual entitlement alongside the State Pension. Use the pension calculators to model your own trajectory rather than relying on rules of thumb." },
      { question: "Do teachers earn enough to save money?", answer: "Many do once deductions are understood accurately. Mid-scale teachers outside London typically clear £2,300 to £2,600 a month; regional costs decide the rest. London weightings raise both pay and costs." },
      { question: "What financial protections do teachers have that other jobs don't?", answer: "Burgundy Book maternity and sick pay schemes exceed statutory minimums substantially, redundancy follows age-weighted statutory formulas, and the TPS guarantees benefits most private employers stopped offering decades ago." },
      { question: "Should I ever opt out of the teachers' pension?", answer: "Rarely. Opting out stops guaranteed CPI-linked accrual and forfeits the 28.8% employer contribution. Independent advice is essential before opting out, and for classroom salaries it is almost always a poor trade." },
      { question: "How does going part-time affect my finances?", answer: "Pay becomes pro-rata but TPS contribution tiers are assessed on full-time-equivalent salary, and accrual follows actual pensionable pay. Service continues, so the pension impact is smaller than the pay cut suggests." },
      { question: "When is the best time to resign from teaching?", answer: "Contractually you must hit one of three Burgundy Book notice dates — 30 November, 30 April or 31 August in most cases — with notice submitted up to three months earlier. Financially, avoid resigning mid-year unless you have modelled the income gap." },
      { question: "What happens to my pension if I leave teaching?", answer: "Benefits stay in the scheme and grow with CPI only, instead of CPI plus 1.6% while actively contributing. You can rejoin later and deferred benefits remain yours." },
      { question: "Do I need a financial adviser as a teacher?", answer: "Only for specific events: transfers involving final-salary service, divorce settlements, or senior salaries nearing tax taper territory. Routine budgeting, pension monitoring and scenario planning are all well served by free tools like ours plus the published documents cited at the foot of each guide." },
      { question: "How much do teachers make a month after deductions?", answer: "It depends on scale, location and loans, but typical 2026/27 figures are roughly £2,360 net per month at M4 (£40,940) and around £2,680 at U3 (£52,835) outside London, after tax, National Insurance, pension contributions and any Plan 2 loan. Calculate your own exact figure rather than relying on averages — tier cliffs move individuals significantly." },
      { question: "Can teachers be rich?", answer: "Teaching will not make anyone wealthy quickly, but it reliably builds six-figure pension entitlements over a full career, pays twelve stable months a year for disciplined saving and investing, and offers leadership pay up to £99,000+ for those who pursue it. The realistic path is pension-first wealth plus steady ISA investing, not windfalls." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "Teachers' Pension Scheme — member guides", url: "https://www.teacherspensions.co.uk/members.htm" },
      { label: "NEU — Burgundy Book conditions of service", url: "https://neu.org.uk/advice/your-rights-work/pay/burgundy-book" },
      { label: "HMRC — Rates and thresholds for employers 2026 to 2027", url: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" },
    ],
    updated: "2026-08-23",
  },

  // ------------------------------------------------------------ redundancy
  {
    slug: "teacher-redundancy-calculator",
    hub: "planning",
    title: "Teacher Redundancy Pay Calculator & Guide",
    metaTitle: "Teacher Redundancy Pay Calculator (UK 2026)",
    metaDescription:
      "Calculate teacher redundancy pay: the statutory formula, age-weighted weeks, the £780 cap, worked examples at real salaries, and how enhancements above statute work.",
    primaryKeyword: "teachers redundancy pay calculator",
    secondaryKeywords: [
      "teacher redundancy pay", "redundancy pay teachers", "teacher redundancy payments",
      "redundancy for teachers", "teacher redundancy calculator uk", "redundant teachers",
      "teacher voluntary redundancy", "can teachers be made redundant",
      "redundancy tax calculator", "tax on redundancy pay calculator",
      "redundancy payment calculator uk", "teachers redundancy pay calculator gov uk",
    ],
    calculator: "redundancy",
    intro:
      "Teachers get **statutory redundancy pay** like any other employee: a formula based on age, length of service and weekly pay, with a 20-year service cap and a £780-a-week ceiling on the weekly figure. The formula rewards long service heavily — a 58-year-old with 20 years of service walks away with more than six months of capped salary — while an early-career teacher gets comparatively little. Use the calculator on this page for your own numbers, then read the guide below for how the formula works line by line, three worked examples at realistic salaries and service lengths, where enhancements above statutory minimums come from, and what to check before signing any settlement.",
    keyTakeaways: [
      "Statutory redundancy pays 0.5 week per year of service under age 22, 1 week for ages 22–40, and 1.5 weeks for 41+.",
      "Service counts only up to 20 years, and weekly pay is capped at £780.",
      "The calculation works backwards through your service using your age in each year, so older long-servers gain most.",
      "Many maintained-school staff receive enhancements under discretionary payment regulations — check your employer's scheme.",
      "Notice pay is separate from redundancy pay and follows your contractual notice period.",
    ],
    blocks: [
      { kind: "h2", text: "Use the calculator" },
      { kind: "p", text: "Enter your age, total years of continuous local-authority teaching service, and your normal weekly pay (annual salary divided by 52 gives a good approximation). The tool reproduces the statutory formula exactly, including both caps. If your pay varies — part-time working, variable allowances — use your normal contractual weekly earnings rather than an average of unusual months, and keep payslips handy to evidence the figure if it is later disputed." },

      { kind: "h2", text: "How the statutory formula actually works" },
      { kind: "p", text: "Most people assume redundancy pay multiplies whole years of service by one rate. The real formula is more subtle: it walks **backwards through your years of service year by year**, asking how old you were during each of those years, and awards weeks per year accordingly." },
      { kind: "table", caption: "Weeks awarded per year of service, by age during that year", head: ["Your age during that service year", "Weeks awarded"], rows: [
        ["Under 22", "0.5"],
        ["22 to 40", "1.0"],
        ["41 and over", "1.5"],
      ]},
      { kind: "p", text: "Two caps apply on top. Service beyond **20 years** contributes nothing further, and the weekly pay figure used in the multiplication cannot exceed **£780** regardless of salary. Both caps mean very senior teachers' entitlements plateau rather than grow indefinitely." },
      { kind: "callout", tone: "info", title: "Why the backwards walk matters", text: "Because the formula looks at your age during each past service year, an older worker's most recent years score 1.5 weeks each. The practical effect is that age-weighting systematically favours experienced staff: two teachers with identical service length receive different totals purely because of when those years were accumulated." },

      { kind: "h2", text: "Worked example 1: mid-career teacher" },
      { kind: "p", text: "Take a teacher aged 45 with exactly 10 years of service, earning £900 a week (roughly M6 outside London after the 2026 award). Counting backwards from age 45: four of their service years were spent aged 41–44, scoring 1.5 weeks each, and six years were spent aged 35–40, scoring one week each." },
      { kind: "table", caption: "Age 45, 10 years' service, £900 weekly pay", head: ["Component", "Value"], rows: [
        ["Years at 1.5 weeks (aged 41–44)", "4 years → 6 weeks"],
        ["Years at 1 week (aged 35–40)", "6 years → 6 weeks"],
        ["Total weeks", "12 weeks"],
        ["Capped weekly pay", "£780 (actual £900 exceeds cap)"],
        ["Statutory redundancy pay", "£9,360"],
      ]},
      { kind: "p", text: "Without the weekly cap this teacher would receive £10,800, so the cap costs them £1,440 here. At lower salaries the cap never bites: someone earning £700 a week keeps their full weekly figure." },

      { kind: "h2", text: "Worked example 2: early-career teacher" },
      { kind: "p", text: "A teacher aged 30 with four years of service earns one week per service year — every year was spent between ages 26 and 29. On £700 a week the entitlement is simply 4 × £700 = **£2,800**. No caps engage. This is why redundancy lands hardest on early-career staff: modest totals coincide with the least savings, which is worth knowing before volunteering for restructuring rounds. Our [financial planning hub](/teacher-financial-planning/) covers building the buffer." },

      { kind: "h2", text: "Worked example 3: senior leader hitting both caps" },
      { kind: "table", caption: "Age 58, 25 years' service, £1,000 weekly pay", head: ["Component", "Value"], rows: [
        ["Service counted", "20 years (cap applies)"],
        ["Years at 1.5 weeks (ages 41–57)", "17 years → 25.5 weeks"],
        ["Years at 1 week (ages 38–40)", "3 years → 3 weeks"],
        ["Total weeks", "28.5 weeks"],
        ["Capped weekly pay", "£780"],
        ["Statutory redundancy pay", "£22,230"],
      ]},
      { kind: "p", text: "Five of this teacher's service years vanish entirely against the 20-year cap, and £220 of their actual weekly pay is ignored. Uncapped arithmetic would have paid £28,500; the statutory answer is £22,230." },

      { kind: "h2", text: "The process around the payment" },
      { kind: "p", text: "The lump sum is only one part of a lawful redundancy. Employers must consult collectively when proposing 20 or more dismissals within 90 days, select fairly using published criteria, and consider suitable alternative roles — declining reasonable alternatives can forfeit the payment entirely. Teachers facing restructuring should watch for three markers of good process: written selection criteria circulated in advance, genuine offers of vacancies elsewhere in the trust or authority, and a right to appeal against selection with reasons given in writing. ACAS guidance sets the procedural floor; union reps handle everything beyond it." },
      { kind: "table", caption: "Compulsory selection versus voluntary register", head: ["Consideration", "Compulsory selection", "Voluntary register"], rows: [
        ["Payment level", "Statutory plus contractual enhancements", "Sometimes enhanced further to encourage uptake"],
        ["Timing control", "Set by employer's timetable", "Often negotiable within the window"],
        ["Pension position", "Deferred benefits intact; possible early-access offers", "Same, plus room to negotiate strain costs"],
        ["Re-employment clawback risk", "Rare", "Common — check the clause before signing"],
      ]},

      { kind: "h2", text: "Enhancements: where teachers do better than statute" },
      { kind: "p", text: "Maintained schools often operate enhanced schemes under the discretionary payments regulations used by local authorities — commonly removing or raising the weekly cap, adding contractual weeks per year, or extending service counting beyond 20 years. Academy trusts set their own arrangements entirely, so two neighbouring schools can treat identical careers differently. Always request your employer's redundancy policy in writing before making any decision, and compare what it promises against the statutory floor modelled here. NASUWT and NEU publish guidance on typical local authority enhancements." },

      { kind: "h2", text: "What redundancy pay does not include" },
      { kind: "ul", items: [
        "**Notice pay.** You receive your contractual notice period separately — typically two to three months under [Burgundy Book-aligned terms](/teacher-resignation-deadlines/) — on top of the redundancy lump sum.",
        "**Holiday pay accrued.** Untaken leave entitlement must be paid out with final salary.",
        "**Pension.** Your TPS benefits remain intact and deferred; some employers offer early-release or pension-strain packages as part of negotiated exits, which our [early retirement guide](/teacher-early-retirement/) explains.",
      ]},
      { kind: "callout", tone: "warn", title: "Check the tax treatment", text: "Statutory redundancy pay is tax-free up to £30,000 of termination overall, but notice pay and holiday pay count as earnings. Enhanced packages can push total termination payments past the threshold, at which point tax applies to the excess. Get payroll's calculation in writing before signing anything." },

      { kind: "h2", text: "The tax treatment: what is tax-free and what is not" },
      { kind: "p", text: "Redundancy money gets unusually generous tax treatment, which surprises most people comparing it with normal earnings. The first **£30,000 of termination pay** is entirely free of income tax, and genuine redundancy compensation does not attract National Insurance either. The exemption covers statutory redundancy pay plus any contractual enhancement combined — so a £9,360 statutory payment sits far below the threshold untouched, while an enhanced package of £35,000 would see only the final £5,000 taxed as additional earnings." },
      { kind: "table", caption: "How each element of a termination package is taxed", head: ["Element", "Tax treatment"], rows: [
        ["Statutory redundancy pay", "Counts toward the £30,000 tax-free exemption; no National Insurance"],
        ["Enhancements above statute (ex-gratia)", "Also count toward the same £30,000 exemption"],
        ["Notice pay / PILON", "Normal earnings: income tax and National Insurance in full"],
        ["Untaken holiday pay", "Normal earnings: income tax and National Insurance in full"],
        ["Anything above £30,000 total", "Income tax at your marginal rate; no National Insurance"],
      ]},
      { kind: "p", text: "Two practical warnings follow. First, because notice and holiday pay count as earnings, they do not benefit from the exemption — payroll must separate them out correctly, so check the payslip breakdown rather than one blended figure. Second, if you are a higher-rate taxpayer in the year of exit, tax on the exempt-excess can push you across bands unexpectedly; asking HMRC or payroll for a PAYE calculation before spending anything avoids an unexpected bill later." },

      { kind: "h2", text: "Voluntary redundancy and restructuring reality" },
      { kind: "p", text: "Schools facing falling rolls or deficit budgets increasingly open voluntary registers before compulsory selection. Voluntary terms sometimes enhance the statutory package to encourage uptake — search interest in a teachers voluntary redundancy pay calculator spikes whenever a trust announces a register. Before volunteering: price your pension position, confirm whether the enhancement beats waiting for compulsory process, and check re-employment rules that can claw back payments if you return to the same employer within a set period. If you are weighing exit altogether, our [leaving teaching guide](/leaving-teaching/) compares resignation versus redundancy outcomes side by side." },
    ],
    faq: [
      { question: "Do teachers get redundancy pay?", answer: "Yes. Teachers employed by maintained schools qualify for statutory redundancy pay on the same formula as other employees, and many authorities add contractual enhancements. Academy trusts set their own terms." },
      { question: "How much is teacher redundancy pay?", answer: "It depends on age, service and pay. The formula awards 0.5 week per year under age 22, 1 week for ages 22–40 and 1.5 weeks for 41+, subject to a 20-year service cap and £780 weekly pay cap. A 45-year-old with 10 years' service on £900 a week receives £9,360." },
      { question: "Is there a government teacher redundancy calculator?", answer: "GOV.UK provides a general statutory redundancy calculator covering any employee, including teachers. This page's calculator reproduces the same statutory formula with the same caps." },
      { question: "Does the £780 weekly cap apply to teachers?", answer: "Yes. Weekly pay above £780 counts only as £780 when calculating statutory redundancy, whatever your salary point. Enhanced local schemes may remove this cap." },
      { question: "How many years of service count for teacher redundancy pay?", answer: "All continuous service counts up to a maximum of 20 years. Service beyond two decades adds nothing further to the statutory calculation." },
      { question: "Is teacher redundancy pay taxed?", answer: "Termination payments are free of income tax and National Insurance up to £30,000 combined. Notice pay and holiday pay are treated as normal earnings and count toward that limit." },
      { question: "Do I get notice pay as well as redundancy pay?", answer: "Yes. Contractual notice is paid separately from the redundancy lump sum, and untaken holiday must also be settled with your final pay." },
      { question: "What happens to my pension if I'm made redundant?", answer: "Your Teachers' Pension Scheme benefits stay in the scheme as deferred benefits growing with CPI. Some employers offer early access or strain-cost packages as part of negotiated exits — take advice before accepting." },
      { question: "Can I get voluntary redundancy as a teacher?", answer: "If your school or trust opens a voluntary register, terms are set by the employer and frequently enhance statutory minimums to encourage uptake. Compare the offer carefully against your statutory entitlement first." },
      { question: "Does moving schools affect my redundancy service count?", answer: "Continuous service with local authorities aggregates for statutory purposes, similar to sick-pay rules. Breaks or moves into academy employment can complicate continuity, so keep employment records." },
      { question: "How do I work out my weekly pay for redundancy?", answer: "Divide your annual contractual salary by 52 for a close approximation, including regular pensionable allowances such as TLR payments. Your employer's scheme may define the figure precisely, so ask for their written calculation." },
    ],
    sources: [
      { label: "GOV.UK — Redundancy pay and rights", url: "https://www.gov.uk/redundancy-your-rights" },
      { label: "GOV.UK — Calculate your statutory redundancy pay", url: "https://www.gov.uk/calculate-your-redundancy-pay" },
      { label: "ACAS — Redundancy pay and procedures", url: "https://www.acas.org.uk/redundancy" },
      { label: "NASUWT — Teachers and redundancy", url: "https://www.nasuwt.org.uk/advice/pay-pensions/" },
    ],
    updated: "2026-08-23",
  },

  // ------------------------------------------------------------ student loan
  {
    slug: "student-loan-repayment-calculator",
    hub: "planning",
    title: "Student Loan Repayment Calculator for Teachers",
    metaTitle: "Student Loan Repayment Calculator for Teachers",
    metaDescription:
      "See exactly what each student loan plan costs a UK teacher in 2026/27: Plan 1, 2, 4, 5 and postgraduate loan thresholds, monthly deductions and combined repayments.",
    primaryKeyword: "postgraduate loan repayment calculator",
    secondaryKeywords: [
      "postgraduate loan repayment", "masters loan repayment", "postgraduate loan repayments",
      "postgraduate student loan repayment calculator", "how much is student loan repayment",
      "how does student loan repayment work", "when do you repay student loan",
      "how are student loan repayments calculated", "plan 2 repayment threshold",
      "student loan repayment teachers", "combined student loan repayment",
      "when does my student loan get written off",
    ],
    calculator: "student-loan",
    intro:
      "Student loans behave like an extra 6% to 9% tax for most working teachers, and the postgraduate loan stacks on top of the undergraduate one. What you actually pay depends entirely on your plan's threshold — not your debt size — so a mid-scale teacher on Plan 2 pays around **£94 a month** while a colleague on the same salary repaying a postgraduate loan pays about **£100**, even if the latter borrowed a fraction as much. This guide sets out every plan's 2026/27 threshold, shows the exact monthly deduction at common teacher salaries, and explains write-off rules that decide whether you ever repay it all.",
    keyTakeaways: [
      "Repayment depends on income above your plan's threshold: 9% for Plans 1, 2, 4 and 5; 6% for the postgraduate loan.",
      "2026/27 thresholds: Plan 1 £26,065; Plan 2 £28,470; Plan 4 £32,745; Plan 5 £25,000; postgraduate £21,000.",
      "A teacher on M4 (£40,940) repays roughly £94 a month on Plan 2, or £193 with a combined undergraduate plus postgraduate loan — see the [pay scale context](/teacher-pay-scale/) for where those salaries sit.",
      "Write-off periods range from 25 years (Plan 1) to 40 years (Plan 5); many teachers never clear the balance.",
      "Overpayments happen when salary changes go unreported — reconcile against your own calculation once a year.",
    ],
    blocks: [
      { kind: "h2", text: "The five plans and their 2026/27 thresholds" },
      { kind: "p", text: "Your plan is set by where and when you studied, not by choice. English undergraduates who started from August 2023 sit on Plan 5; earlier starters are mostly on Plan 2; older or Northern Irish loans can be Plan 1; Scottish borrowers may hold Plan 4; and anyone taking a master's-funded postgraduate loan has a separate PGL running alongside." },
      { kind: "table", caption: "Repayment thresholds and rates, 2026/27 tax year", head: ["Plan", "Annual threshold", "Rate above threshold"], rows: [
        ["Plan 1", "£26,065", "9%"],
        ["Plan 2", "£28,470", "9%"],
        ["Plan 4 (Scotland)", "£32,745", "9%"],
        ["Plan 5", "£25,000", "9%"],
        ["Postgraduate Loan (PGL)", "£21,000", "6%"],
      ]},
      { kind: "callout", tone: "info", title: "Thresholds move every April", text: "Thresholds usually rise annually, which quietly cuts repayments for salaries near the line. Teachers who track the April changes understand their payslip; those who do not assume payroll errors. Our figures match HMRC's published rates for the current tax year." },

      { kind: "h2", text: "Use the calculator" },
      { kind: "p", text: "Select your plan or plans, enter your gross annual salary, and see the weekly, monthly and annual deduction. The tool applies the same thresholds and rates shown above, including the combined case where a postgraduate loan sits alongside your undergraduate plan." },

      { kind: "h2", text: "What teachers earn versus what they repay" },
      { kind: "p", text: "Teacher salaries now start high enough (£34,068 at M1 outside London for 2026/27) that nearly everyone with an outstanding loan repays something. The table shows annual repayment at three common scale points." },
      { kind: "table", caption: "Annual repayment by plan at teacher pay points (rest of England, 2026/27)", head: ["Pay point", "Plan 2", "Plan 5", "PGL"], rows: [
        ["M1 £34,068", "£503.82", "£816.12", "£784.08"],
        ["M4 £40,940", "£1,122.30", "£1,434.60", "£1,196.40"],
        ["U3 £52,835", "£2,192.85", "£2,505.15", "£1,910.10"],
      ]},
      { kind: "p", text: "Notice how Plan 5 always out-bills Plan 2 at identical salaries because its threshold sits £3,470 lower. For PGCE graduates carrying both an undergraduate loan and a postgraduate loan, deductions stack without offsetting: an M4 teacher with both plans pays £2,318.70 a year, about **£193 a month** — often the single largest discretionary-looking item on a young teacher's payslip after pension contributions. The [take-home pay calculator](/teacher-take-home-pay/) folds all of this into a full net figure." },

      { kind: "h2", text: "Combined loans: the PGCE double hit" },
      { kind: "p", text: "This is the scenario most PGCE graduates search for, and the one generic calculators handle worst. The two loans run independently: 9% above £28,470 for the degree, 6% above £21,000 for the master's component, both calculated on the same gross salary with no interaction between them." },
      { kind: "p", text: "Career changers who completed a salaried or fee-funded PGCE frequently hold Plan 2 plus PGL simultaneously. The two run independently: 9% above £28,470 for the degree, 6% above £21,000 for the master's component, calculated on the same gross salary. Because neither threshold offsets the other, combined repayments feel punitive early in teaching careers — but they also burn balances faster, which matters given the write-off clocks discussed below. If you are weighing whether a master's pays back at all, remember the question splits in two: the qualification's salary effect versus the loan levy attached to it. For most classroom teachers the write-off clock answers the second part before retirement." },

      { kind: "h2", text: "How the repayment is actually calculated" },
      { kind: "p", text: "Every plan uses the same three-line calculation, which explains why debt size never appears in it. Take your gross pay for the pay period, subtract that plan's annual threshold divided across the period, then apply the percentage to what remains." },
      { kind: "table", caption: "Worked line-by-line: Plan 2 teacher on £3,411.67 gross per month (M4 £40,940)", head: ["Step", "Arithmetic", "Result"], rows: [
        ["1. Monthly threshold allowance", "£28,470 ÷ 12", "£2,372.50"],
        ["2. Income above threshold", "£3,411.67 − £2,372.50", "£1,039.17"],
        ["3. Apply 9% rate", "£1,039.17 × 0.09", "£93.53 this month"],
        ["PGL line (if held)", "(£3,411.67 − £1,750) × 0.06", "£99.70 this month"],
      ]},
      { kind: "p", text: "Two consequences follow from this structure. Repayments flex automatically with overtime, TLR changes and part-time working because each payslip is assessed independently; and no payment is ever due in a month where gross pay falls below the threshold — there is nothing to catch up later. The same arithmetic runs annually for self-assessment taxpayers." },

      { kind: "h2", text: "Write-off rules decide everything" },
      { kind: "p", text: "For most classroom teachers the interesting number is not the monthly payment but whether the balance outlives the obligation to pay it." },
      { kind: "table", caption: "When each plan is written off", head: ["Plan", "Written off"], rows: [
        ["Plan 1", "25 years after the first April of repayment, or at 65"],
        ["Plan 2", "30 years after the first April of repayment"],
        ["Plan 4", "30 years after the first April of repayment"],
        ["Plan 5", "40 years after the first April of repayment"],
        ["Postgraduate Loan", "30 years after the first April of repayment"],
      ]},
      { kind: "p", text: "A teacher who finished a Plan 2 undergraduate degree at 22 starts the repayment clock almost immediately and reaches write-off at about 52 — meaning late-career salary growth never touches the loan. A Plan 5 borrower starting at the same age carries obligations until 62, capturing their highest-earning years instead. This asymmetry, more than interest rates, drives which plans cost a lifetime fortune versus a modest levy." },
      { kind: "callout", tone: "warn", title: "Interest still accrues", text: "Balances grow with inflation-linked interest while unpaid, so statements look worse even as payments continue. For long-horizon Plan 2 and Plan 5 borrowers this rarely changes rational behaviour — voluntary overpayment seldom beats investing elsewhere — but check our [financial planning guide](/teacher-financial-planning/) before making either commitment." },

      { kind: "h2", text: "How the money is actually collected" },
      { kind: "p", text: "PAYE employers receive a plan marker through HMRC's starter checklist or real-time information feed and deduct alongside income tax each pay period. Teachers paid across two jobs have each employer assess its own salary against the threshold, which can mean neither job triggers repayment even though combined income exceeds it — a quirk worth knowing for teachers mixing classroom work with tutoring. Self-employed assessment runs through self-assessment instead, using annual gross income." },
      { kind: "p", text: "Direct Debit only appears at the margins: when a balance approaches write-off, the Student Loans Company sometimes invites borrowers onto one so they stop paying unnecessarily — genuinely useful in the final two years of any plan. Everyone else stays on PAYE deduction whether they like it or not, which is why reconciling payslips annually matters more than choosing a method ever will." },

      { kind: "h2", text: "Overpayments, refunds and payslip errors" },
      { kind: "p", text: "Payroll deducts using whatever plan status HMRC holds, so new teachers commonly get deducted on the wrong plan, on two plans at once after a PGCE, or after already clearing a balance. Reconcile annually: calculate what you should have paid from the tables above, compare with payslips, and reclaim via the Student Loans Company where the difference runs the wrong way. Refunds also arise when a salary dipped below threshold part-year but cumulative PAYE deductions ignored that. If your teaching career involves supply stints between contracts, expect reconciliation to be an annual ritual rather than a one-off — agency payroll teams are the least reliable of all when plan status changes mid-year. Our [financial planning hub](/teacher-financial-planning/) slots this check into a wider annual calendar." },

      { kind: "h2", text: "Planning moves around student loans" },
      { kind: "ul", items: [
        "**Salary sacrifice beats bonus.** Pension contributions reduce the income used for repayment calculations, so extra pension saving effectively earns a 9% or 6% discount via reduced loan deductions.",
        "**Time promotions knowingly.** Crossing thresholds raises deductions immediately but not proportionally — a U3 promotion adds hundreds to annual repayment, worth knowing before accepting.",
        "**Keep plan evidence forever.** Repayment records feed write-off dates; lost history complicates final settlement claims.",
        "**Check bursary interactions.** Initial teacher training bursaries are generally not classed as earned income, so they do not trigger repayments during training.",
      ]},
    ],
    faq: [
      { question: "How much will I repay on a postgraduate loan?", answer: "6% of everything you earn above £21,000. On the 2026/27 M4 salary of £40,940 that is £1,196.40 a year, about £99.70 a month, regardless of how much you originally borrowed." },
      { question: "What is the Plan 2 repayment threshold?", answer: "£28,470 for the 2026/27 tax year. You repay 9% of gross income above that figure, taken through PAYE automatically once your employer is notified." },
      { question: "Do teachers pay both student loans after a PGCE?", answer: "Usually yes if they hold an undergraduate loan plus a postgraduate loan. The 9% and 6% deductions stack on the same salary without offsetting — an M4 teacher with both pays around £193 a month combined." },
      { question: "Is a student loan worth repaying early?", answer: "Often no. With 30- to 40-year write-off periods, many teachers never clear the balance, so voluntary overpayment can be money that would otherwise be forgiven. Model your specific career trajectory before overpaying." },
      { question: "When is my student loan written off?", answer: "Plan 1 ends 25 years after first repayment, Plans 2 and 4 after 30 years, the postgraduate loan after 30 years, and Plan 5 after 40 years — counted from the first April you were due to repay." },
      { question: "What is the Plan 5 threshold?", answer: "£25,000 for 2026/27, with 9% charged above it. Plan 5 applies to English undergraduates who started their course from August 2023." },
      { question: "Do bursaries count as income for student loan repayment?", answer: "Initial teacher training bursaries are generally not treated as earned income, so they do not generate repayments during training. Tax treatment differs, so confirm with the DfE funding provider." },
      { question: "Why was I repaid on the wrong plan?", answer: "Payroll relies on HMRC notification, which lags course completion and plan changes. Compare your payslip deduction against the correct threshold calculation and reclaim misdeductions from the Student Loans Company." },
      { question: "Does my pension contribution reduce my student loan repayment?", answer: "Yes indirectly — repayment uses gross salary after pension contributions are deducted, so higher pension saving lowers the income assessed. Salary-sacrifice arrangements maximise this effect." },
      { question: "Do Scottish teachers use different plans?", answer: "Scottish-domiciled students may hold Plan 4 with its higher £32,745 threshold. Where you work later does not change the plan — a Plan 4 holder teaching in England keeps Plan 4 terms." },
      { question: "When do I start repaying my student loan as a teacher?", answer: "From the first payslip after your course ends where gross earnings for the period exceed your plan's threshold — typically the start of your NQT/ECT year for PGCE graduates. The formal obligation begins the April after you leave the course, and deductions only apply while income sits above the line." },
    ],
    sources: [
      { label: "GOV.UK — Repaying your student loan", url: "https://www.gov.uk/repaying-your-student-loan" },
      { label: "Student Loans Company — repayment thresholds", url: "https://www.slc.co.uk/" },
      { label: "HMRC — Rates and thresholds for employers 2026 to 2027", url: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" },
      { label: "Get Into Teaching — fees and financial support", url: "https://getintoteaching.education.gov.uk/funding-and-support" },
    ],
    updated: "2026-08-23",
  },

  // ------------------------------------------------------------ leaving
  {
    slug: "leaving-teaching",
    hub: "planning",
    title: "Leaving Teaching: The Financial Guide",
    metaTitle: "Leaving Teaching: Money, Pension & Exit Guide 2026",
    metaDescription:
      "Leaving teaching? What happens to your Teachers' Pension, notice dates, holiday pay and references — plus the real cost of exit calculated before you resign.",
    primaryKeyword: "leaving teaching",
    secondaryKeywords: [
      "jobs for ex teachers", "careers after teaching", "alternative careers for teachers",
      "alternative jobs for teachers", "jobs for former teachers", "jobs ex teachers uk",
      "professions after teaching", "jobs for teachers leaving education",
      "work from home jobs for ex teachers uk", "companies looking for ex teachers uk",
      "leaving teaching uk", "leaving the teaching profession",
    ],
    calculator: "none",
    intro:
      "Most conversations about **leaving teaching** are emotional; very few are financial. That is backwards. Resignation is the moment every structural protection of a teaching career — scale progression, Burgundy Book conditions, active pension revaluation — stops working for you, and the cost is rarely visible until it compounds. This guide prices the decision honestly: what happens to your Teachers' Pension, which notice deadlines legally control your exit, what you are paid on the way out, and which of the popular 'alternative careers' actually replace the package rather than just the salary.",
    keyTakeaways: [
      "Deferred TPS benefits grow with CPI only, versus CPI plus 1.6% while contributing — leaving freezes your strongest asset.",
      "Resignation must hit one of three termly notice dates under Burgundy Book-aligned contracts; mid-year exits need agreement.",
      "Notice pay, untaken holiday and any allowances settle with final salary; redundancy pay (if applicable) is separate.",
      "A mid-career teacher who leaves typically sacrifices more in pension growth than they realise — model before deciding.",
      "Transferable careers exist, but few replicate the combined salary-plus-pension-plus-conditions package.",
    ],
    blocks: [
      { kind: "h2", text: "Before resigning, price what you are giving up" },
      { kind: "p", text: "The instinctive comparison is salary versus salary: £40,000 teaching against a £42,000 offer elsewhere feels like a gain. The honest comparison includes three components the new job probably lacks." },
      { kind: "table", caption: "The hidden package most offers don't match", head: ["Component", "Teaching value"], rows: [
        ["Employer pension contribution", "28.8% of salary into a guaranteed scheme"],
        ["Active revaluation", "Accrued pension grows CPI + 1.6% while you work"],
        ["Occupational protections", "Enhanced maternity, sick pay and notice terms"],
        ["Holiday structure", "13+ weeks of school holidays within salaried time"],
      ]},
      { kind: "callout", tone: "warn", title: "The pension gap is bigger than it looks", text: "A private employer paying 5% into a defined-contribution scheme contributes roughly £2,000 a year on a £40,000 salary. Your trust pays nearly £11,800 into the TPS on the same figure — and that is before considering the guarantee. Any move should be priced net of this difference." },

      { kind: "h2", text: "What actually happens to your pension" },
      { kind: "p", text: "Nothing dramatic, which surprises people. Your [Teachers' Pension](/teacher-pension/) stays exactly where it is: benefits already accrued remain yours, revalued annually by CPI once you leave active membership. The change is subtle but expensive over decades — active members enjoy an extra 1.6 percentage points of revaluation each year, so deferred benefits fall behind their active-grown counterparts by roughly a third over two decades. If you return to teaching later, service simply continues and deferred benefits catch up with active treatment again." },
      { kind: "p", text: "Two mistakes dominate. First, cashing out small pots or transferring to defined-contribution schemes without regulated advice — transfers out of guaranteed benefits require independent advice by law above £30,000, for good reason. Second, assuming a career break erases service: it does not, and our [early retirement guide](/teacher-early-retirement/) shows how preserved benefits interact with later retirement planning." },

      { kind: "h2", text: "Notice periods control your exit date" },
      { kind: "p", text: "Teachers cannot usually leave whenever they choose. Contracts aligned to Burgundy Book conditions specify resignation dates roughly three times a year, with leadership roles requiring longer notice. Missing the deadline means waiting months unless the employer agrees otherwise, and quitting without notice risks breach-of-contract consequences including costs if a school must cover your classes." },
      { kind: "table", caption: "Standard Burgundy Book-aligned resignation dates (classroom teachers)", head: ["To leave on", "Submit notice by"], rows: [
        ["31 December (end of autumn term)", "31 October"],
        ["30 April (end of spring term)", "Last day of February"],
        ["31 August (end of summer term)", "31 May"],
      ]},
      { kind: "p", text: "Headteachers, deputies and assistant heads owe three months' notice against equivalent exit dates, so their decision window opens earlier. Always check your own contract first: academy trusts can set different arrangements where they have not adopted national conditions. Our [resignation deadlines guide](/teacher-resignation-deadlines/) lists every date and edge case." },

      { kind: "h2", text: "The compounding cost, in numbers" },
      { kind: "table", caption: "Illustrative gap between active and deferred revaluation over time (£10,000 accrued pension today)", head: ["Years out", "Active growth (CPI + 1.6%)", "Deferred growth (CPI only)"], rows: [
        ["5 years at 3.6% vs 2.0%", "≈£11,934", "≈£11,040"],
        ["15 years at 3.6% vs 2.0%", "≈£16,998", "≈£13,459"],
        ["25 years at 3.6% vs 2.0%", "≈£24,210", "≈£16,406"],
      ]},
      { kind: "p", text: "At 2% assumed CPI, the same £10,000 of accrued pension grows roughly £7,800 more inside the scheme than outside across a 25-year absence — before counting any new accrual you forgo. The figures are illustrative because CPI varies, but the structural gap is fixed by scheme rules. For leavers within ten years of pension age, run the numbers through our [early retirement guide](/teacher-early-retirement/) before assuming resignation beats taking the benefits early." },

      { kind: "h2", text: "Quitting mid-year: the questions people ask too late" },
      { kind: "p", text: "Searches about quitting mid-year spike every January and May, and the answers are rarely satisfying. Without mutual agreement, a mid-year resignation breaches contract. With agreement, practical settlements vary: some schools waive notice entirely for a clean handover date, others require the full period, and a few agree garden leave. Income stops at your last day either way — there is no pay-through-the-holidays cushion once employment ends, so a June leaver's salary genuinely stops in June despite summer approaching." },
      { kind: "p", text: "Newly qualified teachers leaving after one year face the same contractual rules as everyone else; the difference is arithmetic, since minimal service means minimal pension value at stake but also minimal savings behind you. Check whether any training bursary clawback applies to your ITT funding agreement before handing in notice." },

      { kind: "h2", text: "What you are owed on the way out" },
      { kind: "ul", items: [
        "**Salary through your notice period**, paid normally through payroll.",
        "**Untaken annual leave** proportionate to the part of the year worked — teachers' leave is built into the calendar, but part-year leavers can accrue a balancing payment.",
        "**P60 and statement of pay** for mortgage and reference purposes.",
        "**Redundancy pay only if dismissed for redundancy** — resigning voluntarily forfeits statutory entitlement, so never resign from a role that was about to be made redundant.",
      ]},
      { kind: "callout", tone: "tip", title: "Never resign before checking redundancy status", text: "If restructuring is underway and your post might disappear, resigning converts a potential redundancy payment into nothing. Take union advice first; the sequencing matters legally and financially." },

      { kind: "h2", text: "Where leavers actually go" },
      { kind: "table", caption: "The most-searched ex-teacher destinations and what transfers", head: ["Destination", "Why teachers land there"], rows: [
        ["Corporate training / L&D", "Presentation, curriculum design and group management map directly onto the role"],
        ["Civil service and local government", "Policy, delivery and grading structures reward organised communicators; pay bands are published like scales"],
        ["Edtech and education publishing", "Subject expertise plus classroom credibility; often remote-friendly"],
        ["Tutoring and assessment (examiner work)", "Immediate income bridge using existing marking skills while you transition"],
        ["NHS roles (incl. nursing retraining)", "Structured progression and a pension comparable to TPS in spirit"],
        ["Finance and accountancy retraining", "Numerate graduates; AAT-to-ACA routes accept career changers"],
      ]},
      { kind: "p", text: "Skills translation matters less than candidates assume — employers read teaching as evidence of presentation, management and resilience — while pension absence matters more than they price in. When comparing offers, convert everything to total compensation using the [take-home pay calculator](/teacher-take-home-pay/) on the teaching side and equivalent modelling on the other." },
      { kind: "callout", tone: "info", title: "Companies actively recruit ex-teachers", text: "A whole recruitment segment exists specifically for leavers: tutoring agencies, edtech customer-education teams, exam boards recruiting examiners, civil service fast streams, and corporate L&D departments that treat QTS as a proxy for training skill. Searching 'companies looking for ex teachers UK' surfaces current schemes; the honest caveat is that these roles compete on flexibility and values-fit, not usually on matching a leadership-scale salary." },

      { kind: "h2", text: "Is leaving teaching a good idea?" },
      { kind: "p", text: "The honest answer is conditional. Leaving solves workload, behaviour and accountability problems immediately; it creates income-smoothing, pension-gap and identity problems gradually. People who plan the exit — six to twelve months of runway, a destination secured, pension position documented — report better outcomes than impulsive resigners across every forum study of the question. If the driver is burnout rather than the profession, note that [part-time working](/part-time-teacher-pay-calculator/), a transfer between schools, or a sabbatical resolves many cases at far lower financial cost. And if you are within sight of retirement, our [early retirement options](/teacher-early-retirement/) may beat resignation outright." },

      { kind: "h2", text: "A calm sequence for executing the decision" },
      { kind: "ol", items: [
        "Model twelve months of post-teaching income realistically, including the loss of twelve-equal-month payments.",
        "Document your TPS position: benefit statement, service record, any final-salary segments.",
        "Check bursary clawbacks, ongoing references and contractual notice obligations.",
        "Secure the destination or sufficient savings before submitting notice.",
        "Submit written notice timed to the correct deadline date, keeping copies.",
      ]},
    ],
    faq: [
      { question: "What happens to my teachers' pension if I leave teaching?", answer: "Your benefits stay in the scheme and continue growing with CPI each year instead of CPI plus 1.6%. You can return later and resume accrual, take benefits at normal pension age, or explore transfer options with regulated advice." },
      { question: "Can I quit teaching mid-year?", answer: "Only with your employer's agreement. Contracts aligned to Burgundy Book conditions set specific resignation dates; outside those, leaving early requires mutual consent or risks breach of contract." },
      { question: "Do I get paid through the holidays if I resign in summer?", answer: "If your employment ends on 31 August, no. Salary stops at your final day even though the holidays run on. Only continuing employees receive the August payment covering summer." },
      { question: "How much notice do teachers have to give?", answer: "Typically two months' notice for classroom posts (31 October, last day of February, or 31 May) to leave on 31 December, 30 April or 31 August, with three months for most leadership roles. Check your contract for exact terms." },
      { question: "Will I lose my pension if I leave after one year?", answer: "No. Even one year builds preserved benefits worth taking seriously — roughly £550 to £600 a year of index-linked pension for a starter salary — payable from normal pension age." },
      { question: "Can I go back to teaching after leaving?", answer: "Yes. Deferred members rejoin the TPS on returning, old and new service combine for retirement purposes, and most schools welcome experienced returners. Supply work offers a low-commitment way back." },
      { question: "Should I transfer my teachers' pension when I leave?", answer: "Rarely, without advice. Transfers exchange guaranteed inflation-linked benefits for uncertain pot values and require independent financial advice above £30,000 of transfer value. For most leavers, deferring inside the scheme wins." },
      { question: "What jobs do ex-teachers move into?", answer: "Common destinations include corporate training, edtech, education publishing, civil service roles, tutoring and complete retrainings such as nursing. Employers generally value the transferable skills highly." },
      { question: "Do I have to repay my PGCE bursary if I leave?", answer: "Bursaries carry training-period obligations rather than service commitments in most cases, but check your funding agreement — some scholarship and salaried routes attach conditions that early departure triggers." },
      { question: "Is leaving teaching a mistake?", answer: "It depends entirely on planning quality and personal fit. Planned exits with financial runways tend to succeed; impulsive resignations create avoidable hardship. Price the decision first, then move — the tables above are the deliberate starting point, not an afterthought. — this guide's tables are the starting point." },
    ],
    sources: [
      { label: "NEU — Notice periods and resignation", url: "https://neu.org.uk/advice/your-rights-work/contracts" },
      { label: "Teachers' Pension Scheme — leaving or retiring", url: "https://www.teacherspensions.co.uk/members.htm" },
      { label: "GOV.UK — Redundancy pay and rights", url: "https://www.gov.uk/redundancy-your-rights" },
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
    ],
    updated: "2026-08-23",
  },

  // ------------------------------------------------------------ resignation
  {
    slug: "teacher-resignation-deadlines",
    hub: "planning",
    title: "Teacher Resignation Deadlines 2026/27",
    metaTitle: "Teacher Resignation Deadlines & Notice Dates 2026/27",
    metaDescription:
      "Every teacher resignation deadline for 2026/27: the three exit dates, notice by 31 October, end of February or 31 May, plus leadership roles and academy variations.",
    primaryKeyword: "teacher resignation dates",
    secondaryKeywords: [
      "teacher notice period", "notice period for teachers", "notice period teachers",
      "how much notice do teachers have to give", "resignation dates for teachers",
      "teacher resignation dates 2026", "teachers notice period uk", "headteacher notice period",
      "period of notice for teachers", "teacher resignation deadlines",
      "deadline for teacher resignations", "resignation deadline for teachers",
    ],
    calculator: "resignation",
    intro:
      "Teachers cannot simply work a four-week notice like most employees. Contracts aligned to the **Burgundy Book** national conditions restrict exits to three fixed dates a year — 31 December, 30 April and 31 August — with written notice owed roughly two to three months earlier. Miss the window and your next realistic exit is months away, which is why teacher resignation deadlines generate such concentrated search interest each spring and autumn. This guide lists every date for classroom teachers and leadership posts, explains what counts as valid notice, and covers what happens when you need out at the wrong time.",
    keyTakeaways: [
      "Classroom teachers on national terms owe two months' notice against three exit dates per year.",
      "The deadlines: 31 October (leave 31 December), last day of February (leave 30 April), and 31 May (leave 31 August).",
      "Leadership posts typically owe three months' notice — headship decisions must come even earlier.",
      "Notice must be in writing; verbal resignations are generally not binding but cause confusion.",
      "Academies that have not adopted national conditions can set different arrangements — check your contract.",
    ],
    blocks: [
      { kind: "h2", text: "The deadlines at a glance" },
      { kind: "p", text: "For teachers employed under national conditions of service in England and Wales — the Burgundy Book framework incorporated into most maintained-school contracts — the table below is the one that matters. Submit formal written notice by the deadline and your employment ends on the corresponding date." },
      { kind: "table", caption: "Resignation deadlines for classroom teachers (national terms)", head: ["Hand notice in by", "Employment ends"], rows: [
        ["31 October", "31 December"],
        ["Last day of February (28 or 29)", "30 April"],
        ["31 May", "31 August"],
      ]},
      { kind: "p", text: "Note the asymmetry: the summer window runs a full three months rather than two, reflecting how schools recruit for September and how long hiring processes realistically take. That makes 31 May the single most consequential deadline of the year — it is both the last chance to leave cleanly for the summer AND the point by which September vacancies effectively close for candidates who also teach." },

      { kind: "h2", text: "Why the dates exist at all" },
      { kind: "p", text: "Fixed resignation windows look restrictive until you see them from the employer's side. Schools recruit whole cohorts at once, interview in spring for September starts, and cannot re-advertise a January vacancy mid-term without destabilising classes. The three-date structure synchronises teacher mobility with the recruitment calendar so that departures cluster where replacements can realistically be hired. Unions negotiated the windows precisely because at-will resignation would have made continuity of staffing impossible — and would have handed all leverage to employers in individual disputes." },

      { kind: "h2", text: "Leadership roles owe more notice" },
      { kind: "table", caption: "Resignation deadlines for heads, deputies and assistant heads", head: ["Hand notice in by", "Employment ends"], rows: [
        ["31 October", "31 January"],
        ["31 January", "30 April"],
        ["31 May", "31 August"],
      ]},
      { kind: "callout", tone: "warn", title: "Check which column applies to you", text: "The exact definition of posts carrying extended notice varies between employers and contracts. Some trusts apply three-month notice to all senior leaders including TLR holders with whole-school responsibilities. Your contract and job description settle it — not job title alone." },

      { kind: "h2", text: "Use the calculator" },
      { kind: "p", text: "Enter your intended leaving date or today's date, and the tool tells you which deadline applies, how long you have, and when your employment would actually end if you submitted notice now." },

      { kind: "h2", text: "What counts as valid notice" },
      { kind: "ul", items: [
        "**Written form.** Contracts require written notice; an email to the head works better than a conversation, and a signed letter beats both.",
        "**Addressed correctly.** Notice goes to the employing body — for academies that is the trust, not the governing board of your individual school.",
        "**Clear termination language.** 'I am considering resigning' binds nobody; 'I hereby give notice that my employment will terminate on [date]' does.",
        "**Kept copies.** Disputes about whether notice was validly given are surprisingly common; retain proof of delivery.",
      ]},
      { kind: "p", text: "One subtlety matters for teachers mid-capability process or facing disciplinary action: resignation does not extinguish investigations, which can conclude and be reported onward even after you leave. If exit negotiations overlap with proceedings, take union advice before submitting anything — sequencing protects both references and future DBS-sensitive applications far better than speed does." },
      { kind: "p", text: "Once valid notice lands, it can only be withdrawn with employer consent. Some schools agree readily; others treat withdrawal as renegotiation, particularly where recruitment has already begun." },

      { kind: "h2", text: "Missing the deadline: your options" },
      { kind: "p", text: "Life does not respect termly windows, so every school handles off-cycle requests. The routes out, from safest to riskiest:" },
      { kind: "ol", items: [
        "**Negotiated early release.** The employer agrees to waive part of your notice — common where a replacement exists or relationships are good.",
        "**Garden leave or settlement agreement.** Formal arrangements through HR, sometimes with a compromise clause; take advice before signing anything waiving rights.",
        "**Unpaid leave until the exit date.** Keeps the contract intact while you start elsewhere informally — rarely permitted where jobs conflict, occasionally agreed for study or caring reasons.",
        "**Walking out.** Breach of contract with real consequences: withheld references, claims for recruitment costs, and complications for future DBS-sensitive applications.",
      ]},

      { kind: "h2", text: "Resigning to move schools is different" },
      { kind: "p", text: "Most resignations are not exits at all but transfers, and the deadlines bite differently when you already hold an offer. A September-start job offer made in May fits neatly before the 31 May deadline; offers made after it force awkward conversations about January starts or delayed onboarding. New employers understand the constraint — every experienced school leader has lived it — so ask for start dates that respect your notice position rather than promising anything earlier in writing. If you are moving for part-time working or reduced responsibility rather than pay, run both versions through the [part-time pay calculator](/part-time-teacher-pay-calculator/) first." },

      { kind: "h2", text: "Timing money around the exit" },
      { kind: "p", text: "Resignation timing interacts with several financial threads covered elsewhere on this site. Leaving at 31 December versus 31 August changes holiday pay, pension accrual days and when your next salary starts — our [leaving teaching guide](/leaving-teaching/) prices the full package, and the pension consequences of going deferred live in the [pension guides](/teacher-pension/). If your reason for leaving is redundancy-adjacent restructuring, never resign before confirming entitlements, since voluntary resignation forfeits statutory redundancy pay entirely." },
      { kind: "table", caption: "What each exit date means for your money", head: ["Exit date", "Financial notes"], rows: [
        ["31 December", "Salary stops before winter; tax year splits across two employers; pension accrual covers autumn term only"],
        ["30 April", "Clean break near tax year end; spring holiday unpaid after exit; common date for April starters elsewhere"],
        ["31 August", "Full school year completed for pension accrual; but no August pay covering summer once employment ends"],
      ]},

      { kind: "h2", text: "Scotland, Wales and academy variations" },
      { kind: "p", text: "Wales mirrors the England framework closely through its own conditions document, so the same three dates broadly apply. Scottish teachers negotiate through SNCT machinery with its own notice rules — typically calendar-month notice depending on seniority rather than fixed termly dates. Northern Ireland runs separate arrangements again. Academy trusts that never adopted national conditions may lawfully set different notice periods, though most have copied the familiar structure precisely because it aligns recruitment with the school year. When in doubt, read your contract's termination clause before anything else." },

      { kind: "h2", text: "Writing the resignation itself" },
      { kind: "p", text: "Keep it short, dated, unambiguous and professional — the resignation letter is a contractual instrument, not an emotional farewell, and its only job is to lock in your exit date cleanly: your name, role, the statement that you are giving contractual notice, the intended termination date matching the deadline table, and a signature. You owe no explanation of your destination or reasons, and anything you write may be quoted back later. Hand it in early within the window rather than at 5pm on the deadline day — payroll cut-offs process terminations far more smoothly with a few weeks of lead time rather than days, and your reference depends less on the letter's wording than on how orderly the departure looked. If money is driving the decision at all, read our [financial planning hub](/teacher-financial-planning/) before the ink dries — resignation changes pension treatment from that day forward." },
    ],
    faq: [
      { question: "When are the teacher resignation deadlines?", answer: "Under national terms: 31 October to leave on 31 December, the last day of February to leave on 30 April, and 31 May to leave on 31 August." },
      { question: "How much notice do teachers have to give?", answer: "Classroom teachers on national terms give two months' notice, except the summer window which runs three months. Leadership posts typically owe three months across the board." },
      { question: "Can I quit teaching mid-year?", answer: "Only with employer agreement. Outside the fixed resignation dates, leaving requires negotiated early release; walking out without consent risks breach-of-contract claims." },
      { question: "What happens if I miss the resignation deadline?", answer: "Your next contractual exit moves months away unless your employer agrees to release you early. Negotiation, garden leave or unpaid leave are the practical middle routes." },
      { question: "Do I have to give a reason when resigning?", answer: "No. Valid written notice needs your name, role and intended termination date. Reasons are optional and cannot be demanded as a condition of accepting notice." },
      { question: "Is a verbal resignation valid?", answer: "Contracts require written notice, so a verbal statement generally has no legal effect. Be cautious anyway: heated moments in a head's office create disputes best avoided by saying nothing definitive in writing or otherwise." },
      { question: "Do academies use the same resignation dates?", answer: "Trusts that adopted national terms follow the same dates. Trusts that never did can set their own notice periods, so always check your specific contract first." },
      { question: "Can I withdraw my resignation after handing it in?", answer: "Only with your employer's consent. Once valid notice is accepted, withdrawal is a negotiation, and schools mid-recruitment sometimes decline." },
      { question: "When should headteachers hand in notice?", answer: "Three months ahead of the same exit dates: 31 October to leave 31 January, 31 January to leave 30 April, and 31 May to leave 31 August." },
      { question: "What should a teacher's resignation letter say?", answer: "Keep it minimal: your name, your post, an unambiguous statement of resignation, and the exact termination date permitted by your contract (one of the three Burgundy Book dates, or an agreed earlier release). Reasons are optional. Hand it in written, keep a dated copy, and ask for written acknowledgement so the notice clock is provable." },
      { question: "Does my salary stop on the exit date?", answer: "Yes — pay, pension contributions and benefits run to your final day. A 31 August leaver receives no August payment covering the summer, unlike colleagues still employed." },
    ],
    sources: [
      { label: "NEU — Notice periods and resignation advice", url: "https://neu.org.uk/advice/your-rights-work/contracts" },
      { label: "NASUWT — Resignation dates", url: "https://www.nasuwt.org.uk/advice/conditions-of-service/" },
      { label: "Burgundy Book — Conditions of Service for School Teachers (NEU library)", url: "https://neu.org.uk/latest/library/burgundy-book" },
      { label: "ACAS — Resignation and notice", url: "https://www.acas.org.uk/" },
    ],
    updated: "2026-08-23",
  },

  // ------------------------------------------------------------ budget
  {
    slug: "teacher-budget-planner",
    hub: "planning",
    title: "Teacher Budget Planner: Month by Month",
    metaTitle: "Teacher Budget Planner for UK Teachers (2026/27)",
    metaDescription:
      "A budget planner built for UK teachers: real take-home figures by pay point, twelve-equal-month salary mechanics, holiday buffers and term-time spending spikes.",
    primaryKeyword: "teacher budget planner",
    secondaryKeywords: [
      "teacher budget", "teacher budget template", "budgeting on a teacher salary",
      "first year teacher budget", "how to budget as a teacher", "teacher monthly budget",
      "budget planner uk", "free online budget planner uk", "budget calculator uk",
      "saving money as a teacher", "living on a teacher salary", "teacher spending plan",
    ],
    calculator: "budget",
    intro:
      "Generic budget advice fails teachers twice over: it ignores what teaching actually pays after deductions, and it ignores when in the year teachers actually spend money. A good **teacher budget planner** starts from your verified take-home pay at your exact scale point, then bends around the school calendar — September uniform and equipment costs, December's double event of Christmas and the longest stretch to payday, and summer months where salaries continue but childcare costs spike. This guide gives you the verified numbers first, then a working three-account structure, then the calendar traps that catch even experienced staff.",
    keyTakeaways: [
      "Budget from net pay, not gross: an M4 teacher keeps roughly £2,430 of £40,940 after all deductions.",
      "Twelve equal monthly payments mean holidays are paid — but only if you resist treating them as bonus months.",
      "Term-start months run 10–20% hotter than average; pre-fund them in August rather than absorbing the shock.",
      "Pension contributions are tiered on cliffs, so a small pay rise can raise contributions disproportionately.",
      "Track student loan deductions annually; misdeductions are common and refundable.",
    ],
    blocks: [
      { kind: "h2", text: "Start from verified take-home pay" },
      { kind: "p", text: "Every workable budget begins with one number: what actually lands in the bank. The deduction stack runs income tax above £12,570, National Insurance at 8% up to £50,270, tiered TPS pension contributions from 7.4%, and any student loan plan. Because tiers and thresholds create jumps, two teachers one point apart can keep noticeably different amounts." },
      { kind: "table", caption: "Approximate monthly net pay by scale point (2026/27, rest of England)", head: ["Pay point", "Gross annual", "Approx. monthly net*"], rows: [
        ["M1 (£34,068)", "£34,068", "≈£2,180"],
        ["M4 (£40,940)", "£40,940", "≈£2,430"],
        ["M6 (£46,939)", "£46,939", "≈£2,660"],
        ["U3 (£52,835)", "£52,835", "≈£2,900"],
        ["U3 with Plan 2 + PGL loans", "£52,835", "≈£2,740"],
      ]},
      { kind: "p", text: "*Indicative figures assuming no additional allowances; London weightings raise both gross and net. Run your own case through the [take-home pay calculator](/teacher-take-home-pay/) — the budget only works if the top line is right. Part-time colleagues should use the [part-time version](/part-time-teacher-pay-calculator/) because pension tiers assess full-time-equivalent pay." },

      { kind: "h2", text: "Use the planner" },
      { kind: "p", text: "Enter your net monthly income and your fixed costs, and the planner splits what remains into committed spending, flexible spending and savings targets using a structure designed around the school year rather than the tax year. Re-run it each September when your pay point changes, and after any allowance, loan or pension tier change — budgets are living documents, not one-time exercises." },

      { kind: "h2", text: "A percentage framework that survives term-time costs" },
      { kind: "p", text: "Percentage budgets like 50/30/20 fail teachers only when applied to gross salary or spread evenly across a year that is not evenly expensive. Applied to verified net pay and paired with a sinking fund for the three known spikes (September uniform and resources, December, summer childcare), the split works well." },
      { kind: "table", caption: "Example split on M4 net pay of about £2,360 per month", head: ["Bucket", "Share", "On ≈£2,360 net"], rows: [
        ["Fixed essentials (rent/mortgage, bills, food, transport)", "50–55%", "≈£1,180–£1,300"],
        ["Sinking fund for term-start and holiday spikes", "10%", "≈£236"],
        ["Savings and pension AVCs", "5–10%", "≈£120–£236"],
        ["Flexible spending, guilt-free", "25–30%", "≈£590–£700"],
      ]},
      { kind: "p", text: "The sinking-fund line is what makes the framework teacher-proof: money for known September costs accrues monthly from October onward instead of arriving as an annual shock. Run the exact figures through the [take-home pay calculator](/teacher-take-home-pay/) first so percentages apply to real numbers rather than estimates." },

      { kind: "h2", text: "The teacher spending calendar" },
      { kind: "p", text: "Teaching's costs are lumpy in predictable ways. Mapping them turns surprises into line items you funded months earlier." },
      { kind: "table", caption: "Where the pressure points fall across the school year", head: ["Month", "Typical pressure"], rows: [
        ["September", "Uniform, equipment, new-term resources; the single hottest month"],
        ["October–November", "Steady; best window for building the holiday buffer"],
        ["December", "Christmas collides with the long gap to January payday"],
        ["January", "Course fees, union subscriptions often restart, post-holiday squeeze"],
        ["April", "Tax-year changes shift net pay slightly; new thresholds apply"],
        ["July–August", "Childcare replaces school hours; holiday travel premiums"],
      ]},
      { kind: "callout", tone: "tip", title: "Pre-fund September in August", text: "Set aside the expected term-start costs during the summer while spending pressure is low. Teachers who smooth this way report September feeling like any other month within two years of adopting the habit." },

      { kind: "h2", text: "The three-account structure" },
      { kind: "p", text: "Simple beats clever for salaried workers with predictable income, and complexity is where budgets go to die. Route your net salary into a bills account covering fixed commitments — rent or mortgage, utilities, subscriptions, insurance — sized from three months of statements rather than memory. Sweep a fixed amount monthly into a sinking-fund account for the calendar items above plus car maintenance and annual bills. Whatever remains is genuinely spendable without guilt, which is the psychological trick that makes budgets survive contact with real life." },
      { kind: "p", text: "Two refinements earn their keep once the base structure works. Automate the sinking-fund sweep on payday rather than mid-month, because money left sitting in the current account gets spent — this single automation does more than any spreadsheet ever will. And review the bills account quarterly against actual statements: subscriptions drift upward, insurance auto-renewals creep, and mobile deals expire quietly. Fifteen minutes per quarter catches most of it before it becomes a December problem." },
      { kind: "table", caption: "Suggested allocation bands for a mid-scale teacher", head: ["Bucket", "Share of net pay", "Notes"], rows: [
        ["Fixed essentials", "50–60%", "Mortgage/rent dominates regional differences"],
        ["Committed flexibility", "10–15%", "Transport, food beyond basics, phone"],
        ["Sinking funds", "10%", "Term starts, holidays, annual bills, car"],
        ["Long-term savings", "5–10%", "Emergency fund first: three months of essentials"],
        ["Guilt-free spending", "Whatever remains", "Deliberately unallocated on purpose"],
      ]},

      { kind: "h2", text: "First-year teachers: the hardest budget year" },
      { kind: "p", text: "Searches for a first year teacher budget spike every August because NQT years combine starting salaries with moving costs, wardrobe build-outs and ITT bursary gaps between finishing study and first payday. Three moves de-risk it: confirm your start date against payroll cut-offs so you know exactly when money first arrives; price the commute honestly before signing contracts; and treat the first half-term as a bridge funded from savings rather than expecting October's payslip to cover July's outgoings. Bursary recipients should note that training funding generally stops before salary begins — the July-to-October gap is the trap, and it catches career changers hardest because they often left stable pay to retrain. Union subscriptions, professional fees and DBS-related costs also cluster in year one; none are large individually but together they can consume a month's discretionary spending." },

      { kind: "h2", text: "Emergency funds: how much teaching actually needs" },
      { kind: "p", text: "Standard advice says three to six months of essentials. Teachers can lean toward the lower end while employed on national terms because occupational sick pay cushions long illness far beyond most jobs, and statutory redundancy adds a floor in restructuring scenarios. But the fund matters more for specific gaps: the summer after an August resignation, arrears delays when pay awards process late, or agency supply dry spells between contracts. Size it deliberately against your actual employment risk profile rather than copying generic advice, and keep it in an instant-access account where a bad week cannot tempt you into touching it." },

      { kind: "h2", text: "Budgeting with variable pay elements" },
      { kind: "p", text: "Supply teachers, tutors and anyone juggling multiple income streams need a different architecture: budget fixed costs from the worst realistic month, sweep surplus months into the sinking fund rather than upgrading lifestyle, and keep tax reserves aside if any income arrives gross. Variable-income teachers also carry the reconciliation burden discussed above more heavily — agency payroll errors compound across months when nobody checks. The core planner still works; only the top line becomes conservative instead of exact." },

      { kind: "h2", text: "Deduction drift: the quiet budget killer" },
      { kind: "p", text: "Budgets built once decay silently as deductions move. Pension tier crossings change contributions disproportionately — cross a boundary and your entire salary attracts the higher rate. Union subscription renewals land in the New Year. Student loan thresholds shift every April, sometimes helpfully, sometimes not. Schedule one fifteen-minute review each April and September comparing actual net pay against your budgeted figure, and reconcile [student loan deductions](/student-loan-repayment-calculator/) annually since misdeductions are both surprisingly common and fully refundable once evidenced." },

      { kind: "h2", text: "When the budget says your salary is the problem" },
      { kind: "p", text: "If essentials exceed 65% of net pay even in cheap months, cutting coffees will not save you — the underlying arithmetic needs structural change, not micro-optimisation. In order of financial impact: progression and promotion move the whole curve upward; allowance posts such as TLRs add pensionable income; part-time trade-offs need modelling before agreeing, not after; and if the conclusion is leaving altogether, read our [leaving teaching guide](/leaving-teaching/) before resigning so notice dates and pension effects do not ambush you. The [financial planning hub](/teacher-financial-planning/) sequences all of these decisions." },
    ],
    faq: [
      { question: "How much should a teacher budget for per month?", answer: "Build from net pay, not gross: roughly £2,180 to £2,900 a month reaches most classroom teachers' accounts depending on scale point, region and deductions. Allocate 50–60% to essentials and pre-fund term-start costs from a sinking fund." },
      { question: "Are teachers paid during the summer holidays?", answer: "Yes — annual salaries divide into twelve equal monthly payments, so August pays normally for anyone still employed. Only daily-rate supply teachers go unpaid through breaks." },
      { question: "What is the best budget template for teachers?", answer: "One structured around the school year: a bills account, a sinking fund pre-loading September, December and summer pressures, and guilt-free remainder spending. Generic monthly templates miss term-start cost spikes entirely." },
      { question: "How do I budget as a first-year teacher?", answer: "Confirm your first payday date, bridge the bursary-to-salary gap with savings, price commuting before contract-signing, and keep fixed costs low for the opening year while scale progression lifts income quickly." },
      { question: "Why is my take-home pay lower than my colleague's at the same point?", answer: "Pension tier boundaries, student loan plans, union subscriptions and salary sacrifice elections all vary individually. Compare payslips line by line before concluding anything is wrong." },
      { question: "How much should teachers save each month?", answer: "Target 5–10% of net pay once an emergency fund covers three months of essentials. With guaranteed pensions already building, teachers can direct savings toward liquidity rather than long-term investment." },
      { question: "Do TLR payments count in my budget?", answer: "Treat them cautiously. Allowances are pensionable and usually stable, but individual payments sit within published ranges that schools can adjust, so budget core spending from scale salary alone." },
      { question: "What happens to my budget when I get a pay rise?", answer: "Check the pension tier first: crossing a boundary raises contributions on your entire salary, shrinking the net gain. Otherwise, allocate rises in advance — half to savings, half to living costs — before lifestyle absorbs them." },
      { question: "How do part-time teachers budget?", answer: "Pro-rata pay scales everything down but pension tiers assess full-time-equivalent salary, so deductions bite harder proportionally. Model the actual offer with a part-time calculator before accepting reduced days." },
      { question: "Is a teacher's salary enough to live on?", answer: "Outside London and the South East, mid-scale salaries support comfortable budgets for most household shapes. Inner London requires the weighting plus careful housing choices; the calculators on this site quantify both scenarios." },
    ],
    sources: [
      { label: "HMRC — Rates and thresholds for employers 2026 to 2027", url: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" },
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "Student Loans Company — repayment thresholds", url: "https://www.slc.co.uk/" },
      { label: "Teachers' Pension Scheme — contribution tiers", url: "https://www.teacherspensions.co.uk/members.htm" },
    ],
    updated: "2026-08-23",
  },

  // ------------------------------------------------------------ hourly rate
  {
    slug: "teacher-true-hourly-rate",
    hub: "planning",
    title: "Teacher True Hourly Rate: The Real Numbers",
    metaTitle: "Teacher True Hourly Rate: What You Really Earn Per Hour",
    metaDescription:
      "The teacher's true hourly rate explained: £27 to £42 per directed hour but far less against actual hours. Full maths at every pay point, plus what improves it.",
    primaryKeyword: "teacher hourly rate",
    secondaryKeywords: [
      "teacher hourly rate uk", "how much do teachers earn per hour", "teacher hourly wage",
      "teacher daily rate", "supply teacher hourly rate uk", "teacher salary divided by hours",
      "teacher pay per hour", "how much do teachers get paid per hour", "teaching hourly rate",
      "teacher overtime unpaid hours", "hourly rate vs salary teacher", "how to calculate teachers hourly rate",
    ],
    calculator: "hourly-rate",
    intro:
      "Divide a teacher's salary by a normal working year and the **teacher hourly rate** looks excellent: £27 to £42 an hour across the main and upper ranges, comfortably above most graduate roles. Divide instead by what teachers actually report working — typically 45 to 55 hour weeks during term time, once marking, planning and parents' evenings are counted — and the figure drops toward minimum-wage territory for early-career staff. Both numbers are true simultaneously, which is exactly why this page exists. Below you will find the full calculation at every pay point for 2026/27, the assumptions behind each version of the maths, how supply and part-time work change the divisor, and the levers that genuinely move your effective hourly rate rather than just your feelings about it.",
    keyTakeaways: [
      "Against the 1,265 directed hours in the STPCD, rates run from £26.93 (M1) to £41.77 (U3) for 2026/27.",
      "Against reported actual hours (50+ hour weeks), early-career effective rates fall near £13 to £15.",
      "The 13-week holiday structure means calendar-hour comparisons flatter teaching less than people assume.",
      "Unpaid workload is the only variable that moves your true hourly rate materially once you are on scale.",
      "Supply and part-time versions use different divisors entirely — the calculator handles each case.",
    ],
    blocks: [
      { kind: "h2", text: "Version one: the contractual hourly rate" },
      { kind: "p", text: "The STPCD limits directed time to 1,265 hours across roughly 195 days a year. Dividing salary by that contracted commitment gives the fairest like-for-like comparison with other salaried professions." },
      { kind: "table", caption: "Contractual hourly rate by pay point (2026/27, rest of England)", head: ["Pay point", "Annual salary", "Rate per directed hour"], rows: [
        ["M1", "£34,068", "£26.93"],
        ["M4", "£40,940", "£32.36"],
        ["M6", "£46,939", "£37.11"],
        ["U3", "£52,835", "£41.77"],
        ["L12 (indicative ≈£75,000)", "≈£75,000", "≈£59.29"],
      ]},
      { kind: "p", text: "On this basis teaching out-earns many graduate careers: an M4 teacher's contractual rate exceeds £32 an hour, comfortably above the median employee's effective rate, and London weightings push inner-London starting rates past £33 an hour before any allowances are counted. This is the number behind every 'teachers are well paid' argument, and it is not wrong — it is simply incomplete." },

      { kind: "h2", text: "Use the calculator" },
      { kind: "p", text: "Enter your salary and either contracted or realistic weekly hours; the calculator converts between annual, daily and hourly views using both the official directed-time divisor of 1,265 hours and your own honest-hours estimate, so you can see both versions side by side." },

      { kind: "h2", text: "Version two: the honest hours calculation" },
      { kind: "p", text: "Departmental workload surveys repeatedly find classroom teachers averaging around 50 hours a week, with early-career teachers reporting higher figures still — lesson preparation, marking, data entry and parental communication all sit outside directed time. Term time runs roughly 39 weeks; multiply and the annual reality approaches 2,000 working hours against the 1,265 contracted. The table shows what happens to both headline rates under three honest-hours scenarios." },
      { kind: "table", caption: "Effective rate against actual hours worked (39-week term time)", head: ["Weekly hours", "Annual hours", "M1 rate/hour", "M4 rate/hour"], rows: [
        ["40", "1,560", "£21.84", "£26.24"],
        ["50", "1,950", "£17.47", "£20.99"],
        ["60", "2,340", "£14.56", "£17.50"],
      ]},
      { kind: "callout", tone: "warn", title: "Both tables describe the same job", text: "Neither calculation is propaganda. The gap between them is unpaid workload, making unpaid workload the single largest controllable financial variable in a teaching career — worth more per hour than any annual pay award will realistically ever deliver." },

      { kind: "h2", text: "The holiday adjustment cuts both ways" },
      { kind: "p", text: "Defenders of the salary point out that 13 weeks of holiday amortises long term-time hours: spread 1,950 term-time hours across the full 52 weeks and the average falls to about 37.5 hours weekly — almost ordinary. That framing is legitimate for comparing lifestyles, but it quietly concedes the workload problem rather than solving it, because the intensity still lands somewhere: evenings, weekends and the exhaustion economics of half-term recovery. Compare teaching against careers offering four or five weeks of leave plus genuinely bounded hours, and the calendar-adjusted advantage narrows once more — which is why serious comparisons should always state which divisor they used." },

      { kind: "h2", text: "Daily rates: supply and cover work" },
      { kind: "p", text: "Daily-rated work divides the annual salary differently. The convention for day-to-day supply cover calculates 1/195th of the applicable scale point — an M4-equivalent supply day pays around £210 after the 2026 award, or roughly £32 an hour against a 6.5-hour day. Long-term supply placements typically move onto full scale terms after set periods under local agreements, restoring the salaried position but also the workload that comes with it. Unqualified teachers covering classes draw from the unqualified range instead, worth £18.76 to £28.85 per directed hour at 2026/27 values outside London." },

      { kind: "h2", text: "What actually improves your true hourly rate" },
      { kind: "p", text: "Once you are on scale, pay awards lift everyone equally and progression adds its step change, so the remaining lever is hours. Three approaches have evidence behind them." },
      { kind: "ol", items: [
        "**Departmental systems.** Shared schemes of work, centralised behaviour processes and rotating duties cut individual preparation load permanently rather than heroically.",
        "**Boundary design.** Fixed marking windows and email curfews trade marginal goodwill for large hourly gains; workload surveys show boundary-setters report lower total hours with no outcome penalty.",
        "**Structural moves.** Part-time patterns reprice the whole equation — run candidates through the [part-time pay calculator](/part-time-teacher-pay-calculator/) before assuming pro-rata means proportionate effort.",
      ]},

      { kind: "h2", text: "Part-time and pro-rata hourly rates" },
      { kind: "p", text: "Reduced timetables change the divisor more than the numerator in ways that surprise people. A 0.8 M4 teacher earns £32,752 but typically sheds whole days rather than 20% of every day's workload, so marking and planning compress into fewer sessions while meetings stay fixed. Whether part-time raises or lowers your effective hourly rate depends entirely on which activities disappear — model both patterns before negotiating, because schools rarely volunteer which tasks come off your list." },
      { kind: "table", caption: "M4 hourly rate by working pattern (illustrative)", head: ["Pattern", "Salary", "Assumed weekly hours", "Effective rate"], rows: [
        ["Full time", "£40,940", "50", "≈£21"],
        ["0.8 with full days shed", "£32,752", "40", "≈£21"],
        ["0.8 with duties compressed", "£32,752", "44", "≈£19"],
      ]},
      { kind: "p", text: "The lesson generalises: ask exactly which responsibilities reduce under any flexible-working proposal. Two offers with identical salaries can differ by several pounds per hour depending on what came off the timetable." },

      { kind: "h2", text: "How teaching compares when you adjust properly" },
      { kind: "p", text: "Fair comparisons use fully-loaded figures: salary plus employer pension contributions against realistic hours. On that basis an M4 teacher earning £40,940 with a 28.8% employer pension rate represents over £52,000 of annual compensation — against perhaps 1,900 genuine hours, close to £27 an hour all-in. A private-sector role paying £48,000 with 5% pension and 45-hour weeks across 47 working weeks lands near £23. Neither answer settles the career question, but both belong in it. Our [salary guides](/teacher-salary-uk/) break the comparison down by subject and phase." },

      { kind: "h2", text: "The leadership exception" },
      { kind: "p", text: "Leadership spines invert the usual pattern: salaries rise sharply but so do expectations, and headship famously consumes whatever hours exist. An L12 leader's £59 contractual hourly rate can evaporate against 60-hour realities — though leaders also control more of their own workload architecture than classroom teachers do, which changes what the honest-hours table shows. If promotion is on your radar, model both versions through our [leadership pay scale guide](/leadership-pay-scale/) and [financial planning hub](/teacher-financial-planning/) before accepting the extra responsibility." },

      { kind: "h2", text: "Side income and its limits" },
      { kind: "p", text: "Private tutoring is the obvious complement because it monetises the same skill at market rates — experienced tutors charge £30 to £50 an hour in most UK cities, comfortably above their own classroom rate. Three cautions apply. Check your contract's outside-work clause before advertising. Remember self-employed tutoring carries tax and National Insurance obligations from pound one. And watch the irony trap: adding ten tutoring hours to a 50-hour teaching week lowers your blended hourly rate across all work even as gross income rises, which is fine as a savings strategy and terrible as a lifestyle strategy." },
    ],
    faq: [
      { question: "What is a teacher's hourly rate in the UK?", answer: "Against contracted directed time, 2026/27 rates run from £26.93 at M1 to £41.77 at U3 outside London. Against typical actual hours of 50 per term-time week, early-career effective rates fall nearer £14 to £17." },
      { question: "How do you calculate a teacher's hourly rate?", answer: "Divide annual salary by 1,265 — the STPCD's limit on directed hours — for the contractual rate. For a personal effective rate, divide by your real annual hours: weekly hours worked times 39 term-time weeks." },
      { question: "Do teachers get paid for holidays?", answer: "Yes, salaries are paid across twelve equal months including all school holidays, so holiday time is fully paid even though term-time hours exceed contracted ones." },
      { question: "What is the daily rate for supply teachers?", answer: "Day-to-day supply cover conventionally pays 1/195th of the relevant scale point — roughly £210 a day at M4-equivalent after the 2026 award, before agency deductions where applicable." },
      { question: "How many hours do teachers actually work?", answer: "Government workload surveys consistently find classroom teachers averaging around 50 hours weekly, with variations by phase, subject and career stage. Early-career teachers typically report the longest hours." },
      { question: "Is teaching good value per hour compared with other jobs?", answer: "On contracted hours, yes — the rate beats most graduate roles. Against realistic hours the advantage narrows substantially for early-career staff and reverses at some workload levels. Total compensation including pensions improves teaching's position." },
      { question: "Does the hourly rate differ in London?", answer: "London weightings raise salaries by up to £7,600 at M1, lifting hourly rates proportionally — inner London M1 earns about £33 per directed hour versus £26.93 elsewhere." },
      { question: "What is the unqualified teacher hourly rate?", answer: "Unqualified teachers earn from the unqualified range (£23,731 to £36,493 outside London), worth roughly £18.76 to £28.85 per directed hour at 2026/27 values." },
      { question: "Can I negotiate a higher hourly rate as a teacher?", answer: "Not within national scale terms — points are fixed. Your levers are progression speed, allowance posts such as TLRs, moving region, or supply and tutoring rates negotiated independently of scale." },
      { question: "Why does my hourly rate matter if I'm salaried?", answer: "Because effective hourly rate is the clearest lens on workload decisions: declining one unpaid initiative saves more per hour than most pay awards add, and part-time or exit decisions should be priced per hour too." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "DfE — Teacher workload survey findings", url: "https://www.gov.uk/government/collections/research-and-statistics" },
      { label: "NEU — Pay scales England", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/pay-scales/pay-scales-england" },
      { label: "NASUWT — Working hours and directed time", url: "https://www.nasuwt.org.uk/advice/conditions-of-service/teachers-working-hours/" },
    ],
    updated: "2026-08-23",
  },
];
