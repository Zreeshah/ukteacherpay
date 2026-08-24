import type { PageContent } from "../types";

const UPDATED = "2026-08-23";

const SOURCES = [
  { label: "Teachers' Pensions — member guides and contribution tiers", url: "https://www.teacherspensions.co.uk/members.htm" },
  { label: "Teachers' Pension Scheme Regulations 2014 (CARE rules)", url: "https://www.legislation.gov.uk/uksi/2014/876" },
  { label: "MoneyHelper — pensions guidance for teachers", url: "https://www.moneyhelper.org.uk/en/pensions-and-retirement" },
  { label: "NEU — Teachers' Pension Scheme advice", url: "https://neu.org.uk/advice/your-rights-work/pensions/teachers-pension-scheme" },
];

export const pensionPages: PageContent[] = [
  {
    slug: "teacher-pension",
    isPillar: true,
    hub: "pensions",
    title: "Teachers' Pension Scheme Explained",
    metaTitle: "Teachers' Pension Explained: TPS Guide 2026/27",
    metaDescription:
      "How the Teachers' Pension Scheme works in 2026/27: CARE accrual at 1/57th, contribution tiers, revaluation, NPA, the lump sum and what you actually get.",
    primaryKeyword: "teachers pension",
    secondaryKeywords: [
      "teacher pension", "teachers pension scheme", "teacher pension uk",
      "uk teachers pension", "teachers pension explained", "tps pensions",
      "teacher pensions uk", "how does teachers pension work",
      "what pension do teachers get", "teachers retirement pension",
    ],
    calculator: "pension-care",
    intro:
      "The Teachers' Pension Scheme is one of the most valuable parts of being a teacher — a guaranteed, inflation-linked pension for life that most private-sector workers can only imitate with risky investments. This guide explains exactly how it works, what you pay, what you get, and the decisions that make the biggest difference.",
    keyTakeaways: [
      "The TPS is a career-average (CARE) scheme: each year you build 1/57th of your pensionable pay as guaranteed annual pension.",
      "Your contribution rate runs from 7.4% to 12.7%, set by your full-time equivalent salary — and your employer adds 28.8% on top.",
      "Benefits already built are revalued every year by CPI plus 1.6% while you are working, so they hold their value in real terms.",
      "A mid-career teacher on M6 at age 40 with 27 years left is on track for roughly £45,900 a year at 67, plus a lump sum option.",
      "The scheme is not salary sacrifice: you get income tax relief on contributions but pay National Insurance on your full gross pay.",
    ],
    blocks: [
      { kind: "h2", text: "What kind of pension is the Teachers' Pension?" },
      { kind: "p", text: "Since 2015 the Teachers' Pension Scheme has been a **career-average revalued earnings** scheme, usually shortened to CARE. The older final salary arrangements still exist for service built up before then, and many experienced teachers have both — more on that in the [CARE vs final salary comparison](/care-vs-final-salary-pension/)." },
      { kind: "p", text: "In a CARE scheme you do not worry about your final salary, promotion timing or the classic final-salary traps. Every single year stands on its own: you build a slice of pension based on that year's pay, and it is yours forever, adjusted for inflation." },
      { kind: "h3", text: "The 1/57th rule" },
      { kind: "p", text: "For every year of membership you earn **1/57th of your pensionable pay** as annual pension. On the 2026/27 M4 point of £40,940, one year of membership builds £40,940 ÷ 57 = **£718 a year of pension, for life**." },
      { kind: "p", text: "That sounds small until you stack the years up. Twenty-five years of service at that level builds around £18,000 a year before any revaluation — on top of the State Pension." },
      { kind: "table", caption: "What one year of membership builds, by pay point (2026/27, rest of England)", head: ["Pay point", "Pensionable pay", "Annual pension earned (1/57th)"], rows: [
        ["M1", "£34,068", "£598"],
        ["M4", "£40,940", "£718"],
        ["M6", "£46,939", "£823"],
        ["U3", "£52,835", "£927"],
        ["L12 (indicative)", "≈£75,000", "≈£1,316"],
      ]},
      { kind: "callout", tone: "info", title: "Pensionable pay is wider than basic salary", text: "TLR payments and SEN allowances count as pensionable pay. So does most overtime-paid activity in the further education version of the scheme. Bonuses that are not pensionable in most private schemes are rare in teaching anyway — but allowances are the quiet pension-builder most teachers forget." },

      { kind: "h2", text: "How your pension keeps its value: revaluation" },
      { kind: "p", text: "Every year, the pension you have already built is increased by the Consumer Prices Index plus **1.6%** while you are still paying in. This is the mechanism that makes the scheme genuinely valuable — your accrued benefits are protected in real terms without you taking any investment risk." },
      { kind: "table", caption: "What revaluation does to £5,000 of accrued pension over 20 years", head: ["Status", "Revaluation", "Value after 20 years"], rows: [
        ["Still paying in (active)", "CPI + 1.6% (3.6% at 2% CPI)", "£10,143"],
        ["Left teaching (deferred)", "CPI only (2%)", "£7,430"],
      ]},
      { kind: "p", text: "The same £5,000 of pension grows **£2,713 more** if you stay in the scheme than if you leave it and let it sit deferred. That gap is the real cost of opting out, before you even count the employer contributions you stop receiving." },

      { kind: "h2", text: "What you pay in: the contribution tiers" },
      { kind: "p", text: "Member contributions are tiered between 7.4% and 12.7% of pensionable pay. The tier is set by your **full-time equivalent** salary — the headline figure for your pay point — not what you actually receive if you work part time. This catches out a lot of part-time teachers, and it matters enough that we have a dedicated [contributions guide](/teacher-pension-contributions/)." },
      { kind: "table", caption: "TPS member contribution tiers 2026/27", head: ["Full-time equivalent salary", "Rate", "Example annual cost"], rows: [
        ["Up to £34,289", "7.4%", "M1 (£34,068) pays £2,521"],
        ["£34,289 – £46,158", "8.6%", "M6 (£46,939) pays £4,506"],
        ["£46,158 – £54,729", "9.6%", "U3 (£52,835) pays £5,072"],
        ["£54,729 – £72,534", "10.2%", "L12 (≈£60,000) pays £6,120"],
        ["£72,534 – £98,908", "11.7%", "L20 (≈£75,000) pays £8,775"],
        ["Above £98,908", "12.7%", "—"],
      ]},
      { kind: "callout", tone: "warn", title: "The tiers are cliffs, not slopes", text: "Earn £1 more than a tier boundary and the higher rate applies to your entire salary, not just the extra pound. A pay rise that crosses a boundary can hand more to the pension than it adds to your take-home pay in that year. The [pay rise calculator](/teacher-pay-rise-calculator/) shows the cliff edges." },

      { kind: "h2", text: "What your employer pays in" },
      { kind: "p", text: "Your employer contributes **28.8%** of pensionable pay on top of your own contribution. On M4 that is £11,791 a year — money that never touches your bank account but buys guaranteed pension that would cost far more to replicate privately." },
      { kind: "p", text: "For context, the auto-enrolment minimum in a private-sector workplace pension is 3% employer contribution. The TPS employer rate is nearly ten times that. When people ask [whether the teachers' pension is any good](/is-teacher-pension-good/), this is the first number to reach for." },

      { kind: "h2", text: "When can you take it?" },
      { kind: "p", text: "Your Normal Pension Age in the CARE scheme is linked to your State Pension age, so for most teachers now in their 20s to 40s that means 67 or 68. Final salary service has its own NPA — 60 for the pre-2007 section and 65 for the 2007 section." },
      { kind: "ul", items: [
        "**Minimum pension age is 55**, rising to 57 on 6 April 2028. You can take benefits from then, but taking them before NPA triggers an actuarial reduction.",
        "**Flexible retirement** lets you draw some benefits while continuing to teach, including returning after retirement under the 2023 changes.",
        "**Ill-health retirement** pays enhanced benefits if you cannot work, with tiers depending on how likely you are to return.",
        "The full detail of reductions and options is in our [early retirement guide](/teacher-early-retirement/) and the [pension age explainer](/teacher-pension-age/).",
      ]},

      { kind: "h2", text: "A worked example: what a career actually builds" },
      { kind: "p", text: "Take a teacher who is 40 now, on M6 (£46,939), planning to teach until 67 — 27 more years. Assuming 2% annual pay growth and 2% CPI:" },
      { kind: "table", caption: "Projection for an M6 teacher, age 40 to 67 (2% pay growth, 2% CPI)", head: ["Measure", "Amount"], rows: [
        ["Annual pension at 67", "≈£45,900"],
        ["Total member contributions over the period", "≈£172,500"],
        ["Total employer contributions", "≈£477,800"],
        ["Maximum tax-free lump sum available", "≈£246,000"],
        ["Pension if maximum lump sum taken", "≈£25,200 a year"],
      ]},
      { kind: "callout", tone: "tip", title: "Model it with your own numbers", text: "The [teachers' pension calculator](/teacher-pension-calculator/) above runs your own salary, age and service through the same mechanics. Your annual benefit statement is the authoritative starting point for the pension you have already built." },
      { kind: "p", text: "Part-time careers build proportionally less but lose nothing else. A 0.6 FTE teacher on M4 across a 30-year career builds roughly **£29,000 a year** of pension on the same assumptions — and every one of those years counts fully towards qualifying service." },

      { kind: "h2", text: "The tax-free lump sum" },
      { kind: "p", text: "You can exchange some annual pension for one-off tax-free cash at a rate of **£12 of cash for every £1 of annual pension given up**, capped at roughly 25% of the capital value of your benefits — about 5.36 times your annual pension in practice." },
      { kind: "p", text: "Members with final salary service at NPA 60 also receive an **automatic lump sum of three times** that section's pension, separate from any commutation. The [lump sum calculator](/teacher-pension-lump-sum/) lets you test the trade-off and see the breakeven." },

      { kind: "h2", text: "What happens if you leave teaching" },
      { kind: "p", text: "Your pension does not disappear. It becomes **deferred**: it stops growing at CPI plus 1.6% and grows at CPI only, and you can claim it from your NPA (or earlier with reductions). You can also transfer it to another scheme, though transfers out of public service schemes have become far less attractive since the 2022 valuation changes." },
      { kind: "p", text: "If you are considering leaving, read the [leaving teaching financial guide](/leaving-teaching/) before you resign — the revaluation difference alone is worth thousands, and the [resignation deadline tool](/teacher-resignation-deadlines/) will keep you on the right side of the Burgundy Book dates." },

      { kind: "h2", text: "Common questions and misconceptions" },
      { kind: "p", text: "The scheme generates an enormous amount of confusion, much of it around the McCloud remedy (the correction for age-discrimination in the 2015 transition), what happens to contributions during maternity leave, and how the tiers interact with part-time pay. We cover each in depth: the [contributions guide](/teacher-pension-contributions/), the [CARE vs final salary comparison](/care-vs-final-salary-pension/), and the [Scottish scheme differences](/teacher-pension-scotland/)." },
    ],
    faq: [
      { question: "How does the teachers' pension work?", answer: "It is a career-average scheme. Each year you build 1/57th of your pensionable pay as guaranteed annual pension. Already-built benefits are revalued each year by CPI plus 1.6% while you are in service. You take it from your Normal Pension Age, or earlier with an actuarial reduction, and you can exchange pension for tax-free lump sum at 12:1." },
      { question: "How much do teachers pay into their pension?", answer: "Between 7.4% and 12.7% of pensionable pay, tiered by full-time equivalent salary. A teacher on M1 pays 7.4% (£2,521 a year), on M6 9.6% (£4,506), and on U3 9.6% (£5,072). The employer adds 28.8% on top of whatever you pay." },
      { question: "What pension do teachers actually get?", answer: "It depends on service and pay history. A teacher on M6 at 40 with 27 years to retirement is on track for roughly £45,900 a year at 67 on modest assumptions, plus a lump sum option worth up to about £246,000. Your annual benefit statement shows your own accrued figure." },
      { question: "Is the teachers' pension final salary or career average?", answer: "Service from 2015 is career average (CARE). Service before 2015 remains final salary: 1/80th accrual with a 3x automatic lump sum for the NPA-60 section, or 1/60th for the 2007 section. Many teachers have both, with the McCloud remedy affecting which years sit where." },
      { question: "Do teachers pay National Insurance on their pension contributions?", answer: "Yes. The TPS is a net-pay arrangement, not salary sacrifice. Contributions come out before income tax is calculated but National Insurance is charged on your full gross pay. That is why pension contributions save you income tax but not NI." },
      { question: "What happens to my teachers' pension if I leave teaching?", answer: "It becomes deferred. It stops growing at CPI plus 1.6% and grows at CPI only until you claim it from Normal Pension Age. You can take it earlier with actuarial reductions, or in limited cases transfer it. Staying in service is worth roughly 1.6% a year extra growth on everything you have built." },
      { question: "Can I take my teachers' pension at 55?", answer: "Currently yes, from 55 — rising to 57 on 6 April 2028. Taking benefits before your Normal Pension Age applies an actuarial reduction of roughly 5% per year early, and you must usually have left scheme employment or moved to flexible retirement to draw them." },
      { question: "Is the teachers' pension better than a private pension?", answer: "For guaranteed lifetime income, almost always yes: a 28.8% employer contribution, inflation-linked payments for life, and no investment risk. A private defined-contribution pot would typically need to be very large to buy the same guaranteed income. The trade-offs are flexibility and that you cannot pass the whole pension on — death benefits are more limited than a private pot." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  {
    slug: "teacher-pension-calculator",
    hub: "pensions",
    title: "Teachers' Pension Calculator",
    metaTitle: "Teachers' Pension Calculator: Project Your TPS",
    metaDescription:
      "Project your Teachers' Pension: enter your salary, age and pension built so far to see your annual pension at retirement, lump sum options and early retirement reductions.",
    primaryKeyword: "teachers pension calculator",
    secondaryKeywords: [
      "teacher pension calculator uk", "tps calculator", "tps pension calculator",
      "teachers pension scheme calculator", "calculate teachers pension",
      "teacher pensions calculator", "pension calculator teacher",
      "teachers pensions calculator", "teachers' pension calculator",
    ],
    calculator: "pension-care",
    intro:
      "Enter your current salary, your age and the pension you have already built up — both shown on your annual benefit statement — and this calculator projects your Teachers' Pension at any retirement age, including the actuarial cost of retiring early and the lump sum trade-off.",
    keyTakeaways: [
      "Your benefit statement's 'pension built so far' figure is the starting point — everything else is projection.",
      "Each further year adds 1/57th of that year's pensionable pay, revalued to retirement at CPI plus 1.6%.",
      "Retiring before your Normal Pension Age cuts the pension by roughly 5% per year early.",
      "The maximum lump sum is about 5.36 times your annual pension; taking it reduces the pension by £1 for every £12 taken.",
      "Projections use assumptions you control — 2% CPI and 2% pay growth are sensible neutral starting points.",
    ],
    blocks: [
      { kind: "h2", text: "How to use this calculator" },
      { kind: "p", text: "You need three numbers, all on your **annual benefit statement** from Teachers' Pensions: your current full-time equivalent salary, your age, and the pension you have already built up. Everything else — growth rates, retirement age, CPI — is a projection assumption you can change." },
      { kind: "ol", items: [
        "**Salary** — your current FTE pay, including pensionable TLR and SEN allowances.",
        "**Pension already built** — the total accrued pension figure on your latest statement, not the annual build.",
        "**Your age and target retirement age** — the gap drives both the extra accrual and any early-retirement reduction.",
        "**Average % FTE from now** — set this below 100 if you plan to work part time for the rest of your career.",
      ]},
      { kind: "callout", tone: "info", title: "Statements lag by up to 18 months", text: "Benefit statements are typically produced a year or more in arrears. If your salary has risen since your statement date, enter today's salary rather than the statement figure — the calculator projects forward from what you enter." },

      { kind: "h2", text: "What the calculator assumes" },
      { kind: "p", text: "The projection mechanics are the scheme's own: 1/57th accrual each year, revaluation of the accrued pot at CPI plus 1.6% while active, and tiered member contributions on your FTE salary. What the calculator cannot know is the future — so you set:" },
      { kind: "ul", items: [
        "**Pay growth** — 2% is a neutral assumption matching recent STPCD awards; the 2026/27 award was 3.5%.",
        "**CPI** — 2% is the Bank of England target. Higher CPI increases your projected pension because revaluation is CPI-linked.",
        "**Part-time fraction** — the average FTE you expect to work for the rest of your career.",
      ]},
      { kind: "p", text: "Because revaluation (CPI + 1.6%) exceeds typical pay growth, the projected pension holds its real value even in flat-salary scenarios. Higher CPI assumptions raise the projected figure in money-of-the-day terms." },

      { kind: "h2", text: "Worked example: M6 teacher, age 40" },
      { kind: "p", text: "A teacher on M6 (£46,939), age 40, with £12,000 already accrued, retiring at 67 with 2% pay growth and 2% CPI:" },
      { kind: "table", caption: "Projection output for the example inputs", head: ["Output", "Value"], rows: [
        ["Years of further accrual", "27"],
        ["Pension at 67", "≈£45,900 a year"],
        ["Of which already accrued", "≈£23,300"],
        ["Added by future service", "≈£22,600"],
        ["Member contributions over the period", "≈£172,500"],
        ["Employer contributions (28.8%)", "≈£477,800"],
      ]},
      { kind: "p", text: "Retiring three years early at 64 applies an indicative reduction of about 14.5%, taking the pension to roughly £39,200 a year — a cut that lasts for life. The [early retirement guide](/teacher-early-retirement/) has the full reduction table." },

      { kind: "h2", text: "Reading the results honestly" },
      { kind: "p", text: "Three caveats keep a projection honest. First, it assumes **continuous membership** — maternity leave, unpaid leave and career breaks change the path. Second, it uses **today's scheme rules**; contribution tiers, accrual rates and NPA have all changed before and will again. Third, the actuarial reductions shown are **indicative** — the scheme publishes the definitive factors and applies them at the point of retirement." },
      { kind: "callout", tone: "warn", title: "Your statement beats any calculator", text: "For the pension you have already earned, your annual benefit statement is definitive. For decisions — when to retire, whether to take the lump sum, AVCs versus commutation — speak to a regulated adviser. This tool is guidance, not advice." },

      { kind: "h2", text: "Common questions this calculator answers" },
      { kind: "p", text: "Most teachers use it for four decisions: whether retiring at 60 versus 67 is affordable, what working part-time until retirement does to the final figure, whether the [maximum lump sum](/teacher-pension-lump-sum/) is worth taking, and how much a mid-career pay rise — say moving to the [leadership pay scale](/leadership-pay-scale/) — adds to the eventual pension. Each year of higher pay adds 1/57th of the higher figure, permanently." },
    ],
    faq: [
      { question: "How do I calculate my teachers' pension?", answer: "Multiply each year's pensionable pay by 1/57th, revalue the running total each year at CPI plus 1.6% while in service, and sum across your career. In practice, take the accrued pension from your annual benefit statement and add projected future years — which is what this calculator does." },
      { question: "What is the teachers' pension calculator uk teachers actually need?", answer: "One that models the CARE mechanics properly: 1/57th accrual, CPI+1.6% revaluation, tiered contributions on FTE salary, and early-retirement reductions. Generic pension calculators assume a pot of money and investment returns, which is the wrong model for the TPS." },
      { question: "How accurate is a TPS pension projection?", answer: "The mechanics are exact to scheme rules; the assumptions are not. Pay growth and CPI are unknowns. Treat the output as a realistic range rather than a promise, and check your annual benefit statement for the definitive accrued figure." },
      { question: "Does the calculator include my final salary service?", answer: "Enter your total accrued pension from your statement, which includes final salary and CARE sections combined at their respective values. For detailed modelling of mixed service, the scheme's own official calculator handles the section split precisely." },
      { question: "What happens if I work part-time until retirement?", answer: "Set the average FTE field below 100. Each year builds 1/57th of your actual pensionable pay, so a 0.6 FTE teacher accrues 60% of the full-time figure for each of those years, with no other penalty." },
      { question: "Can I calculate my pension if I plan to retire at 60?", answer: "Yes — set your target retirement age to 60. The calculator applies the indicative actuarial reduction for the years taken before Normal Pension Age, so you can compare 60 against 65 and 67 side by side." },
      { question: "Where do I find the pension I have already built up?", answer: "On your annual benefit statement from Teachers' Pensions, in the online member portal. Statements are usually produced annually and can lag your current salary by up to 18 months — enter today's salary for the projection." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  {
    slug: "teacher-pension-contributions",
    hub: "pensions",
    title: "Teacher Pension Contributions",
    metaTitle: "Teacher Pension Contributions: Tiers & Costs 2026/27",
    metaDescription:
      "What teachers pay into the TPS in 2026/27: every contribution tier from 7.4% to 12.7%, how the FTE salary rule works for part-timers, and the 28.8% employer rate.",
    primaryKeyword: "teacher pension contributions",
    secondaryKeywords: [
      "how much do teachers pay into pension", "teacher pension percentage",
      "teacher pension contribution rates", "teacher pension employer contributions",
      "tps pension contributions", "what percentage is teacher pension",
      "pension contributions teachers", "how much do teachers contribute to pension",
      "teaching pension contributions", "how much is teacher pension contribution",
    ],
    calculator: "none",
    intro:
      "Teachers pay between 7.4% and 12.7% of pensionable pay into the TPS, tiered by full-time equivalent salary — and the employer adds 28.8% on top. Here is every tier, what it costs at each pay point, and the FTE rule that surprises part-time teachers.",
    keyTakeaways: [
      "Contribution tiers run 7.4%, 8.6%, 9.6%, 10.2%, 11.7% and 12.7% across six salary bands.",
      "The tier is set by full-time equivalent salary, so part-time teachers pay the same percentage as full-timers on their pay point.",
      "Tiers are cliffs: crossing a boundary applies the higher rate to your whole salary for that year.",
      "The employer pays 28.8% — on M4 that is £11,791 a year on top of your own £3,521.",
      "Contributions attract income tax relief through net pay, but not National Insurance relief.",
    ],
    blocks: [
      { kind: "h2", text: "The 2026/27 contribution tiers" },
      { kind: "p", text: "Member contributions are banded across six tiers. The band is assessed on your **annual rate of pensionable pay** — the full-time equivalent figure for your pay point, including pensionable allowances." },
      { kind: "table", caption: "TPS member contribution tiers 2026/27", head: ["FTE salary band", "Contribution rate"], rows: [
        ["Up to £34,289", "7.4%"],
        ["£34,289 – £46,158", "8.6%"],
        ["£46,158 – £54,729", "9.6%"],
        ["£54,729 – £72,534", "10.2%"],
        ["£72,534 – £98,908", "11.7%"],
        ["Above £98,908", "12.7%"],
      ]},
      { kind: "table", caption: "What each main pay point actually pays (rest of England, 2026/27)", head: ["Point", "FTE salary", "Tier", "Annual contribution", "Monthly"], rows: [
        ["M1", "£34,068", "7.4%", "£2,521", "£210"],
        ["M2", "£36,042", "8.6%", "£3,100", "£258"],
        ["M3", "£38,400", "8.6%", "£3,302", "£275"],
        ["M4", "£40,940", "8.6%", "£3,521", "£293"],
        ["M5", "£43,529", "8.6%", "£3,743", "£312"],
        ["M6", "£46,939", "9.6%", "£4,506", "£376"],
        ["U1", "£49,134", "9.6%", "£4,717", "£393"],
        ["U3", "£52,835", "9.6%", "£5,072", "£423"],
      ]},

      { kind: "h2", text: "How much do teachers pay into their pension, in total?" },
      { kind: "p", text: "Across a full-time classroom career the member pays in five figures a year at the top end but far more typical is the M4 figure: **£3,521 a year**, or £293 a month. Against that, the employer pays £11,791 — so for every £1 you contribute, roughly £3.35 goes in on your behalf." },
      { kind: "table", caption: "Member vs employer contributions at key pay points", head: ["Point", "You pay", "Employer pays (28.8%)", "Total into the scheme"], rows: [
        ["M1", "£2,521", "£9,812", "£12,333"],
        ["M4", "£3,521", "£11,791", "£15,312"],
        ["M6", "£4,506", "£13,518", "£18,024"],
        ["U3", "£5,072", "£15,216", "£20,288"],
      ]},
      { kind: "callout", tone: "info", title: "Why the percentages look odd", text: "The tier rates are not round numbers because they are set actuarially to fund the benefits. The 2019 valuation set the current structure, and the employer rate of 28.8% was confirmed in the 2020 valuation. Rates change only after formal scheme valuations, not annually." },

      { kind: "h2", text: "The FTE rule that catches part-time teachers" },
      { kind: "p", text: "This is the single most misunderstood part of teacher pension contributions. The tier is set by your **full-time equivalent** salary — what your pay point pays a full-timer — regardless of how many days you actually work." },
      { kind: "table", caption: "A 0.6 FTE teacher on U3: what they actually pay", head: ["Basis", "Salary", "Tier", "Annual contribution"], rows: [
        ["What actually happens (FTE basis)", "£52,835", "9.6%", "£3,042 (9.6% of £31,701 actual pay)"],
        ["What people expect (actual pay basis)", "£31,701", "7.4%", "£2,346"],
        ["Difference", "", "", "£696 a year more"],
      ]},
      { kind: "p", text: "The cash amount is always a percentage of what you are actually paid — the FTE figure only selects the tier. The rationale is fairness of accrual: part-time and full-time teachers on the same pay point build pension at the same rate per pound earned, so they pay the same rate per pound too. The full mechanics are in the [part-time pay guide](/part-time-teacher-pay-calculator/)." },

      { kind: "h2", text: "The tier cliff edges" },
      { kind: "p", text: "Because the rate applies to your whole salary, crossing a boundary changes your contribution on every pound. The 2026/27 boundaries at £34,289 and £46,158 both sit inside the main pay range, which is why the jump from M1 to M2 costs more than the raw pay rise suggests." },
      { kind: "table", caption: "Net effect of the M1 to M2 pay rise crossing the 8.6% boundary", head: ["", "M1", "M2", "Change"], rows: [
        ["Gross salary", "£34,068", "£36,042", "+£1,974"],
        ["Pension contribution", "£2,521", "£3,100", "+£579"],
        ["Take-home increase", "", "", "≈+£1,050 a year"],
      ]},
      { kind: "callout", tone: "tip", title: "Check the boundary before September", text: "If a pay award or promotion is likely to move you across a tier boundary, the extra pension you buy is substantial — the higher rate buys career-average benefits for life. The [pay rise calculator](/teacher-pay-rise-calculator/) shows the net effect of any specific rise." },

      { kind: "h2", text: "Tax relief: what you actually save" },
      { kind: "p", text: "Contributions are taken under **net pay arrangements**: your pension comes out before income tax is calculated, so you never pay tax on the money you contribute. A higher-rate taxpayer on U3 effectively pays £3,043 for £5,072 of pension saving." },
      { kind: "p", text: "What net pay does **not** save is National Insurance, which is charged on gross pay before the pension is deducted. This is the practical difference between the TPS and a salary-sacrifice arrangement — set out fully in the [salary sacrifice explainer](/teacher-pension-salary-sacrifice/)." },

      { kind: "h2", text: "Paying in more: AVCs and the 50/50 option" },
      { kind: "p", text: "Beyond the tiered contributions there are two ways to pay in more. **AVCs** — run with Prudential — build a separate invested pot on top of your guaranteed pension; the [AVC calculator](/teacher-avc-calculator/) projects one. The **50/50 section**, available in the LGPS but not the TPS, halves contributions for support staff in exchange for half accrual." },
      { kind: "p", text: "Within the TPS itself there is no option to reduce contributions — it is the full tier or opting out entirely, and opting out forfeits the 28.8% employer contribution, which is almost never a rational trade." },
    ],
    faq: [
      { question: "How much do teachers pay into their pension?", answer: "Between 7.4% and 12.7% of pensionable pay depending on a six-tier band structure. A teacher on M1 pays £2,521 a year, on M4 £3,521, on M6 £4,506 and on U3 £5,072. The employer adds 28.8% of salary on top of every member contribution." },
      { question: "What percentage is the teacher pension contribution?", answer: "The rate is 7.4% on FTE salaries up to £34,289, 8.6% to £46,158, 9.6% to £54,729, 10.2% to £72,534, 11.7% to £98,908 and 12.7% above. The band follows your full-time equivalent salary, not your actual pay if you work part time." },
      { question: "Do part-time teachers pay less into the pension?", answer: "They pay a lower cash amount because the percentage applies to their actual pay, but the tier percentage is selected by their full-time equivalent salary. A 0.6 FTE teacher on U3 pays 9.6% of their actual earnings, not 7.4%." },
      { question: "How much does the government contribute to teachers' pensions?", answer: "Employers — local authorities for maintained schools, trusts for academies — pay 28.8% of pensionable pay. On a £40,940 salary that is £11,791 a year, roughly £3.35 for every £1 the teacher contributes." },
      { question: "Do teacher pension contributions reduce my tax?", answer: "Yes, fully, through the net-pay arrangement: contributions are deducted before income tax is calculated. They do not reduce National Insurance, which is charged on gross pay — the key difference from salary sacrifice." },
      { question: "Why did my pension contribution jump this year?", answer: "Almost certainly a pay rise or allowance moved your full-time equivalent salary across a tier boundary. The higher rate then applies to your entire salary, so the contribution rises by more than the pay rise itself. The pension you buy for it rises too." },
      { question: "Are TLR payments pensionable for contributions?", answer: "Yes. TLR 1, TLR 2 and SEN allowances all count as pensionable pay, increasing both the contribution you pay and the 1/57th of pension you build each year. TLR 3 is pensionable while it is paid but is fixed-term by design." },
      { question: "Can I opt out of teacher pension contributions?", answer: "You can opt out, but it forfeits the 28.8% employer contribution and the CPI+1.6% revaluation on everything you have built. For most teachers staying in is worth several thousand pounds a year in employer money alone. Take regulated advice before leaving a defined-benefit scheme." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },
  {
    slug: "teacher-avc-calculator",
    hub: "pensions",
    title: "Teachers' AVC Calculator",
    metaTitle: "Teachers' AVC Calculator: Project Your Pot",
    metaDescription:
      "Project your Teachers' AVC pot: monthly contributions, growth assumptions and tax relief, plus how AVCs compare with buying extra pension or commutation.",
    primaryKeyword: "avc calculator",
    secondaryKeywords: [
      "teachers avc calculator", "avc teachers pension", "teacher avc",
      "additional voluntary contributions teachers", "tps avc calculator",
      "teachers pension avc calculator", "avc pension calculator",
      "prudential avc calculator",
    ],
    calculator: "avc",
    intro:
      "AVCs are the flexible top-up to your guaranteed Teachers' Pension: you pay in monthly, tax relief cuts the real cost, and the pot grows invested. This calculator projects the pot at retirement and shows what it actually costs you each month.",
    keyTakeaways: [
      "AVCs are invested, so the pot can fall as well as rise — unlike your main TPS pension, which is guaranteed.",
      "Tax relief at your marginal rate means a £100 monthly contribution costs a basic-rate payer £80 and a higher-rate payer £60.",
      "Up to 25% of the pot can usually be taken tax-free at retirement, alongside your TPS lump sum options.",
      "AVCs can be started, stopped and changed at any time — unlike buying extra pension, which is fixed at purchase.",
      "The Prudential-run scheme is the TPS's official AVC provider; the pot sits outside the guaranteed scheme.",
    ],
    blocks: [
      { kind: "h2", text: "What an AVC actually is" },
      { kind: "p", text: "Additional Voluntary Contributions are a personal pension pot running alongside your Teachers' Pension. You choose a monthly amount, it is invested, and at retirement you can take up to 25% tax-free with the rest taxed as income. The guaranteed pension keeps building exactly as before — AVCs are purely on top." },
      { kind: "p", text: "The TPS's official AVC arrangement is administered by Prudential, which is why searches for the [Prudential AVC](/prudential-avc-teachers/) and this calculator tend to mean the same thing. You can also use any private pension as your top-up vehicle; the maths in this calculator applies to all of them." },

      { kind: "h2", text: "What it really costs you each month" },
      { kind: "p", text: "AVC contributions get tax relief at your marginal rate, deducted at source through payroll for most members. The headline amount is not what leaves your bank account:" },
      { kind: "table", caption: "Real monthly cost of contributions by tax band", head: ["Contribution", "Basic rate (20%)", "Higher rate (40%)", "Additional rate (45%)"], rows: [
        ["£50", "£40", "£30", "£27.50"],
        ["£100", "£80", "£60", "£55"],
        ["£200", "£160", "£120", "£110"],
        ["£300", "£240", "£180", "£165"],
      ]},
      { kind: "callout", tone: "tip", title: "Higher-rate relief needs a check", text: "Net-pay arrangements give basic-rate relief automatically. Higher-rate relief is also handled through net pay for most teachers because the contribution reduces adjusted net income — but Scottish taxpayers crossing band boundaries should check their situation, and additional-rate taxpayers may need to claim via self-assessment." },

      { kind: "h2", text: "What a pot of that size buys" },
      { kind: "p", text: "A projected pot is only useful next to what it can do at retirement. Three comparisons matter:" },
      { kind: "ul", items: [
        "**Against commutation** — taking the [maximum TPS lump sum](/teacher-pension-lump-sum/) costs £1 of annual pension per £12. An AVC pot gives you cash without touching the guaranteed pension.",
        "**Against an annuity** — at current rates a £50,000 pot buys roughly £2,500-£3,000 a year of single-life annuity, versus the TPS's guaranteed index-linked payments.",
        "**Against flexibility** — the AVC pot can pass to beneficiaries on death, unlike most of the TPS pension.",
      ]},

      { kind: "h2", text: "AVCs versus buying extra pension" },
      { kind: "p", text: "The TPS periodically offers **Additional Pension** purchases — fixed amounts of guaranteed annual pension for a fixed price, quoted through My Pension Online. The trade-offs against AVCs:" },
      { kind: "table", caption: "Extra pension versus AVCs", head: ["Feature", "Buy extra pension", "AVCs"], rows: [
        ["What you get", "Guaranteed annual pension, index-linked", "Invested pot, value varies"],
        ["Flexibility", "Fixed at purchase; elections within 12 months of quote", "Change or stop any time"],
        ["Risk", "None", "Investment risk"],
        ["Tax-free cash", "Via commutation rules", "Up to 25% of the pot"],
        ["Inheritance", "Limited", "Full pot passes to beneficiaries"],
      ]},

      { kind: "h2", text: "How much should a teacher contribute?" },
      { kind: "p", text: "A common framework: aim for total retirement saving of 12-15% of salary including your TPS contribution. With the TPS already taking 7.4-12.7%, most teachers are well inside that range without AVCs. The cases where AVCs earn their place are specific: higher-rate taxpayers with spare monthly income, teachers who opted out of the pension entirely and need to rebuild something, and late starters closing a gap in the final 10-15 years when tax relief is most valuable." },
      { kind: "callout", tone: "warn", title: "Check the annual allowance first", text: "The TPS is generous enough that senior leaders can breach the pension annual allowance through no action of their own, which triggers a tax charge. Adding AVCs on top increases the risk. If you are a head or deputy on the [leadership pay scale](/leadership-pay-scale/), check your Total Pension Input Amount before committing." },

      { kind: "h2", text: "Accessing the pot" },
      { kind: "p", text: "AVCs can normally be accessed from age 55 (rising to 57 on 6 April 2028), independently of when you draw your TPS pension. That flexibility — taking the pot at 57 while teaching until 67 — is one of the quiet advantages over commutation, which only becomes available when you claim the scheme pension." },
    ],
    faq: [
      { question: "What is a teachers' AVC?", answer: "Additional Voluntary Contributions: a personal invested pension pot running alongside your guaranteed Teachers' Pension. You choose the monthly amount, tax relief reduces the real cost, and up to 25% of the pot can be taken tax-free at retirement." },
      { question: "How much should I pay into AVCs as a teacher?", answer: "There is no single answer, but with the TPS already taking 7.4-12.7% of salary, most teachers are saving adequately. AVCs make most sense for higher-rate taxpayers with surplus income, or teachers closing a retirement savings gap in their final 10-15 years." },
      { question: "Is the teachers' AVC with Prudential?", answer: "Yes, Prudential administers the TPS's official AVC arrangement. You manage the pot through Prudential's online service. You can alternatively use any private pension as your top-up vehicle." },
      { question: "Can I lose money in a teachers' AVC?", answer: "Yes. Unlike your main TPS pension, AVCs are invested and the pot can fall as well as rise, particularly close to retirement. Most providers offer lifestyling that automatically reduces risk as you approach your target retirement date." },
      { question: "When can I take my teachers' AVC?", answer: "Normally from age 55, rising to 57 on 6 April 2028 — independently of when you claim your TPS pension. Up to 25% is tax-free; the rest is taxed as income when drawn." },
      { question: "Are AVCs better than buying extra teacher pension?", answer: "They trade certainty against flexibility. Buying extra pension gives guaranteed index-linked income with no risk; AVCs give flexibility, tax-free cash and inheritance benefits, with investment risk. Higher-rate taxpayers often get more from AVC tax relief; risk-averse savers often prefer guaranteed pension." },
      { question: "Do AVCs reduce my student loan repayments?", answer: "No. Student loan repayments are calculated on gross pay before any pension deduction, including AVCs. AVCs reduce your taxable pay for income tax purposes but not the repayment threshold calculation." },
      { question: "How is the AVC pot taxed at retirement?", answer: "Up to 25% tax-free, usually as a single cash sum. The remaining 75% is taxed as income when you draw it, which can interact with your TPS pension income — large drawings can push you into higher-rate tax in retirement." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  {
    slug: "prudential-avc-teachers",
    hub: "pensions",
    title: "Prudential Teachers' AVC Guide",
    metaTitle: "Prudential Teachers' AVC: Scheme Guide & Login",
    metaDescription:
      "How the Prudential Teachers' AVC works: contributions, funds, charges, where to log in, and how the pot sits alongside your guaranteed TPS pension.",
    primaryKeyword: "prudential avc",
    secondaryKeywords: [
      "teachers avc login", "prudential teachers avc", "prudential avc login",
      "teachers avc prudential", "tps avc prudential", "prudential pension teachers",
      "avc prudential teachers pension",
    ],
    calculator: "avc",
    intro:
      "Prudential runs the official AVC arrangement for the Teachers' Pension Scheme. Here is how the account works day to day: where you log in, what your money is invested in, what it costs, and the decisions worth reviewing once a year.",
    keyTakeaways: [
      "The TPS AVC arrangement is administered by Prudential on behalf of the scheme — it is not a separate TPS benefit.",
      "You manage contributions, fund choice and beneficiaries through Prudential's online service, not through Teachers' Pensions.",
      "Default funds lifestyle automatically, reducing investment risk as you approach your target retirement date.",
      "Annual charges on default funds are typically around the 0.5-1% mark — worth checking against your statement.",
      "The pot is flexible: change or pause contributions at any time, and take it from 55 (57 from April 2028).",
    ],
    blocks: [
      { kind: "h2", text: "What Prudential provides" },
      { kind: "p", text: "When the TPS wanted to offer members a top-up vehicle, it contracted Prudential to administer it. The arrangement is sometimes described as if it were part of the scheme; it is not. Your guaranteed pension is administered by Teachers' Pensions under scheme regulations. The AVC is a personal pot with Prudential, governed by pension tax rules rather than TPS rules." },
      { kind: "p", text: "That distinction matters in three ways: the AVC pot can fall in value (your TPS pension cannot), the pot passes fully to your beneficiaries on death (most of your TPS pension does not), and you can access the pot independently of your scheme pension." },

      { kind: "h2", text: "Where to log in and manage the account" },
      { kind: "p", text: "AVC accounts are managed through Prudential's own online service — separate from your Teachers' Pensions My Pension Online account. Through it you can:" },
      { kind: "ul", items: [
        "Change your monthly contribution or make one-off payments",
        "Switch investment funds or check your lifestyling path",
        "Update beneficiaries and nominate expressions of wish",
        "View charges, statements and projections",
      ]},
      { kind: "callout", tone: "info", title: "Two logins, two organisations", text: "A common confusion: teachers avc login searches usually want Prudential's member site, not Teachers' Pensions. If you cannot find your AVC, check whether you are logged into the wrong portal. Contribution changes start with your employer's payroll, so allow a payroll cycle for them to take effect." },

      { kind: "h2", text: "Contributions and how they are taken" },
      { kind: "p", text: "Contributions are deducted through payroll alongside your TPS contributions, which is what makes the tax relief automatic under net pay. You set the amount with Prudential; your employer's payroll applies it. One-off payments from bonuses or redundancy money are also possible and get the same treatment." },
      { kind: "table", caption: "What monthly contributions cost after tax relief", head: ["Gross contribution", "Basic rate cost", "Higher rate cost"], rows: [
        ["£50", "£40", "£30"],
        ["£100", "£80", "£60"],
        ["£250", "£200", "£150"],
      ]},

      { kind: "h2", text: "Investment funds and charges" },
      { kind: "p", text: "Prudential offers a range of funds, with a default **lifestyling** option that automatically shifts from growth assets to lower-risk assets as you approach your selected retirement date. Key things to check on your statement:" },
      { kind: "ul", items: [
        "**Annual management charge** — typically around 0.5-1% on default funds. Every 0.5% of charges over 20 years costs roughly 9% of the final pot.",
        "**Your target retirement date** — lifestyling de-risks against it. If you plan to draw at 57 but the target says 67, you are taking more risk for longer than intended.",
        "**Fund performance net of charges** — compare against a low-cost global tracker over the same period.",
      ]},

      { kind: "h2", text: "Taking the money" },
      { kind: "p", text: "From age 55 (57 from 6 April 2028) the pot offers the standard flexibilities: 25% tax-free cash, drawdown, annuity purchase, or any combination. Because the pot is separate from the TPS, you can take it while still teaching — a common pattern is drawing the tax-free cash at 57 to clear a mortgage while the guaranteed pension keeps building until 67." },

      { kind: "h2", text: "The annual review worth doing" },
      { kind: "p", text: "Once a year, check four things: contribution level against your budget, fund charges against alternatives, target retirement date against your actual plan, and beneficiary nominations. Fifteen minutes. The [AVC calculator](/teacher-avc-calculator/) projects what the current setup is on track to produce." },
      { kind: "callout", tone: "warn", title: "Transfers out need care", text: "If an adviser suggests transferring your AVC pot elsewhere — particularly into an overseas scheme or an exotic structure — treat it as a red flag and get second advice. Pension scam losses concentrate exactly here. The FCA's ScamSmart service lists the known warning signs." },
    ],
    faq: [
      { question: "How do I log in to my teachers' AVC account?", answer: "Through Prudential's online service, which is separate from Teachers' Pensions' My Pension Online portal. If you have lost your credentials, Prudential's member support can reset them — have your scheme reference handy." },
      { question: "Is the Prudential AVC part of the Teachers' Pension Scheme?", answer: "No. Prudential administers the official AVC arrangement on the TPS's behalf, but the pot is a personal pension governed by standard pension tax rules, not scheme regulations. It is invested, can fall in value, and passes to beneficiaries on death." },
      { question: "What charges does the Prudential teachers' AVC have?", answer: "Charges vary by fund; default funds typically sit around 0.5-1% a year. Check your annual statement for your exact figure — over 20 years each extra 0.5% of charges costs roughly 9% of your final pot." },
      { question: "Can I change or stop my AVC contributions?", answer: "Yes, at any time, through Prudential. Changes route through your employer's payroll, so allow a payroll cycle. You can also make one-off payments at any point." },
      { question: "When can I access my Prudential AVC pot?", answer: "From age 55, rising to 57 on 6 April 2028 — independently of your TPS pension. Up to 25% is tax-free, with the remainder taxed as income when drawn." },
      { question: "What happens to my teachers' AVC if I die?", answer: "The pot passes to your nominated beneficiaries, typically free of inheritance tax if death is before 75. Keep your expression of wish form current — without one, the trustees decide who receives it." },
      { question: "Should I transfer my Prudential AVC elsewhere?", answer: "Usually not without strong, regulated advice. Low-cost workplace AVC arrangements are hard to beat, and transfers are the classic vector for pension scams. Check any adviser is FCA-regulated and use ScamSmart before proceeding." },
    ],
    sources: [
      ...SOURCES,
      { label: "FCA ScamSmart pension warning list", url: "https://www.fca.org.uk/scamsmart" },
    ],
    updated: UPDATED,
  },

  {
    slug: "teacher-early-retirement",
    hub: "pensions",
    title: "Teacher Early Retirement",
    metaTitle: "Teacher Early Retirement: TPS Reductions & Costs",
    metaDescription:
      "Taking your Teachers' Pension early: actuarial reductions by year, the cost of retiring at 55, 57 or 60, flexible retirement options and the 2028 minimum age change.",
    primaryKeyword: "teachers pension early retirement",
    secondaryKeywords: [
      "teacher pension early retirement", "early retirement teachers pension",
      "teachers early retirement", "teacher early retirement calculator",
      "retire early teacher", "actuarial reduction teachers pension",
      "teachers pension early retirement calculator", "flexible retirement teachers",
    ],
    calculator: "early-retirement",
    intro:
      "You can take your Teachers' Pension from age 55 — 57 from April 2028 — but every year before your Normal Pension Age costs roughly 5% of the pension, permanently. Here is exactly what early retirement costs at each age, and the flexible options that soften the blow.",
    keyTakeaways: [
      "Minimum pension age is 55, rising to 57 on 6 April 2028 for most members.",
      "Taking benefits early applies an actuarial reduction of roughly 5% for each year before NPA.",
      "On a £20,000 pension, retiring 5 years early cuts it to about £15,460 — for life.",
      "Flexible retirement lets you draw some pension while continuing to teach, reducing or avoiding reductions.",
      "Final salary sections have their own NPAs (60 or 65), so mixed-service members face different maths per section.",
    ],
    blocks: [
      { kind: "h2", text: "The cost of retiring early, year by year" },
      { kind: "p", text: "Taking your pension before your Normal Pension Age triggers an **actuarial reduction** — the scheme pays you for longer, so each payment is smaller. The reduction is roughly 5% per year early, compounding. These figures are indicative; the scheme publishes the definitive factors applied at retirement." },
      { kind: "table", caption: "Indicative reduction on a £20,000 pension, by years taken early", head: ["Years early", "Pension", "Reduction"], rows: [
        ["0 (at NPA)", "£20,000", "—"],
        ["1", "£19,000", "−5%"],
        ["2", "£18,000", "−10%"],
        ["3", "£17,100", "−14.5%"],
        ["4", "£16,260", "−18.7%"],
        ["5", "£15,460", "−22.7%"],
        ["7", "£14,020", "−30%"],
        ["10", "£12,160", "−39%"],
      ]},
      { kind: "callout", tone: "warn", title: "The reduction is permanent", text: "This is not a temporary reduction until State Pension age kicks in. A pension taken 5 years early pays £15,460 every year for life, against £20,000 had you waited. Over a 25-year retirement that is £113,500 of lost income." },

      { kind: "h2", text: "Your Normal Pension Age determines the maths" },
      { kind: "p", text: "The reduction is measured against your NPA, which varies by section of the scheme:" },
      { kind: "table", caption: "Normal Pension Ages by scheme section", head: ["Section", "NPA", "Earliest access (from Apr 2028)"], rows: [
        ["CARE (post-2015)", "Linked to State Pension age (67-68)", "57"],
        ["Final salary 2007 section", "65", "57"],
        ["Final salary NPA-60 section", "60", "57"],
      ]},
      { kind: "p", text: "A teacher with pre-2015 NPA-60 service who retires at 60 takes that section **without reduction**, while their CARE section takes a heavy cut. Mixed-service members should get a breakdown per section from their benefit statement before making any decision — the blended headline number hides very different section economics." },

      { kind: "h2", text: "Flexible retirement: the middle path" },
      { kind: "p", text: "Since 2023 the scheme allows **flexible retirement**: draw part of your pension while continuing to work, including returning to teaching after fully retiring. The rules:" },
      { kind: "ul", items: [
        "You must reduce your pensionable pay by at least 20% — through going part-time, or stepping down a pay range.",
        "You can draw up to 75% of your pension in three instalments over 12 months, with the remainder paid as a regular pension.",
        "Reductions still apply to benefits taken before NPA, but drawing while working can spread or reduce the effective cost.",
        "Phased drawdown — taking a slice, working on, taking another — often beats a single full draw at 55.",
      ]},
      { kind: "callout", tone: "tip", title: "The phased pattern most teachers land on", text: "Reduce to 0.8 or 0.6 FTE at 58-60, draw a first instalment to bridge the income gap, then fully retire at NPA. The salary reduction is smaller than the pension reduction would have been, and the pension keeps accruing on the remaining service." },

      { kind: "h2", text: "The April 2028 minimum age change" },
      { kind: "p", text: "The minimum pension age rises from 55 to **57 on 6 April 2028**, with transitional protection for members who had an existing right to take benefits at 55 written into their scheme rules. For most teachers the practical effect is simple: born after April 1973, plan around 57, not 55." },
      { kind: "p", text: "The change also affects when AVC pots can be accessed, since personal pension minimum ages align with the scheme's. Anyone planning a 55 retirement needs to check their exact position against the transitional rules." },

      { kind: "h2", text: "What early retirement actually costs: a worked example" },
      { kind: "p", text: "A teacher with a projected £28,000 pension at NPA 67, weighing retirement at 60:" },
      { kind: "table", caption: "Retiring at 60 versus 67 on a £28,000 projected pension", head: ["", "Retire at 60", "Retire at 67"], rows: [
        ["Reduction (7 years early)", "−30%", "None"],
        ["Annual pension", "£19,600", "£28,000"],
        ["Income to age 87", "£529,200", "£560,000"],
        ["Base pension still rising with CPI", "£19,600", "£28,000"],
      ]},
      { kind: "p", text: "The totals converge over long retirements, but the £8,400 annual difference compounds against you every year of your 60s — precisely the decade when health and energy make early years most valuable. There is no universally right answer, which is why the [pension calculator](/teacher-pension-calculator/) models your own numbers and regulated advice earns its fee at this decision point." },

      { kind: "h2", text: "Practical steps before you decide" },
      { kind: "ol", items: [
        "Request a **benefit statement** showing your accrued pension and per-section NPAs.",
        "Ask Teachers' Pensions for a **formal estimate** at your target ages — estimates use the real factors, not indicative ones.",
        "Check whether **flexible retirement** at reduced hours beats full retirement at the same date.",
        "Model the interaction with your **State Pension** claim age and any [AVC pot](/teacher-avc-calculator/).",
        "Take **regulated advice** — this decision is irreversible and the numbers involved are large.",
      ]},
    ],
    faq: [
      { question: "Can teachers retire at 55?", answer: "Currently yes — minimum pension age is 55, rising to 57 on 6 April 2028. Taking benefits before your Normal Pension Age applies an actuarial reduction of roughly 5% per year early, permanently. You must also have left pensionable service or moved to flexible retirement to draw them." },
      { question: "How much pension do I lose if I retire early?", answer: "Roughly 5% for each year before Normal Pension Age. On a £20,000 pension: about £18,000 two years early, £17,100 three years early, £15,460 five years early. These are indicative — the scheme applies its published factors at the point of retirement." },
      { question: "What is the teachers' pension early retirement reduction?", answer: "It is an actuarial adjustment reflecting that the scheme pays for longer. Indicatively 95% of the pension for one year early down to about 61% for ten years early. Final salary sections reduce against their own NPAs of 60 or 65, so mixed-service members see different reductions per section." },
      { question: "Can I retire early and keep teaching?", answer: "Yes, through flexible retirement. Draw up to 75% of your pension in instalments while reducing your pensionable pay by at least 20% — going part-time or stepping down. Reductions still apply before NPA, but phasing the drawdown often reduces the total cost." },
      { question: "Does the 2028 minimum pension age change affect me?", answer: "If you were born after April 1973 and have no transitional protection, your minimum pension age becomes 57 on 6 April 2028. Members with an existing right to benefits at 55 in their scheme rules may keep it — check your scheme guide or statement." },
      { question: "Is it better to retire at 60 or 67?", answer: "Financially, 67 wins: no reduction, a larger pension, more accrual years. But the value of retirement years in your 60s is real. Flexible retirement at reduced hours from 60 often captures much of the lifestyle benefit at a fraction of the pension cost." },
      { question: "How do I get an accurate early retirement estimate?", answer: "Request a formal estimate from Teachers' Pensions for your target retirement dates. Estimates apply the actual published factors rather than indicative ones, and break the figures down by scheme section — essential for mixed-service members." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  {
    slug: "teacher-pension-age",
    hub: "pensions",
    title: "Teacher Pension Age & Retirement Ages",
    metaTitle: "Teacher Pension Age: NPA & When Teachers Retire",
    metaDescription:
      "When can teachers retire? CARE Normal Pension Age is linked to State Pension age, final salary sections sit at 60 and 65, and minimum access is 55 rising to 57.",
    primaryKeyword: "teacher retirement age",
    secondaryKeywords: [
      "when can teachers retire", "teacher pension age", "teacher retirement age uk",
      "what age do teachers retire uk", "what age can teachers retire",
      "average teacher retirement age uk", "teachers retirement age",
      "teachers pension normal pension age", "when can i retire teacher pension",
    ],
    calculator: "none",
    intro:
      "There is no single teacher retirement age. Your CARE pension links to your State Pension age, final salary service sits at 60 or 65, and you can access everything from 55 — 57 from April 2028 — with reductions. Here is how the ages fit together.",
    keyTakeaways: [
      "CARE Normal Pension Age equals your State Pension age — 67 for most teachers now in service.",
      "Final salary sections keep their own NPAs: 60 for pre-2007 service, 65 for the 2007 section.",
      "Minimum pension age is 55, rising to 57 on 6 April 2028, with reductions before NPA.",
      "The average teacher retirement age sits in the early 60s — earlier than NPA, at the cost of actuarial reductions.",
      "Mixed-service teachers have different ages per section, so the statement breakdown matters.",
    ],
    blocks: [
      { kind: "h2", text: "The ages that apply to you" },
      { kind: "p", text: "Three different ages govern your pension, and confusing them causes most retirement-planning errors:" },
      { kind: "table", caption: "The three ages that matter", head: ["Age", "What it is", "Typical value"], rows: [
        ["Minimum pension age", "Earliest you can draw benefits (with reductions)", "55, rising to 57 in April 2028"],
        ["Normal Pension Age", "Age at which benefits pay unreduced", "State Pension age for CARE; 60 or 65 for final salary sections"],
        ["State Pension age", "When the state pension starts", "67 for anyone born after April 1960"],
      ]},

      { kind: "h2", text: "Normal Pension Age in the CARE scheme" },
      { kind: "p", text: "Your post-2015 benefits have an NPA equal to your **State Pension age**. For teachers currently in their 20s to 40s that means 67, rising to 68 for younger cohorts under current legislation. The link means the scheme age moves automatically whenever Parliament changes the State Pension age — a structural feature worth knowing before planning a fixed retirement date." },

      { kind: "h2", text: "Final salary sections: 60 and 65" },
      { kind: "p", text: "Service before 2015 keeps the old structures. The **NPA-60 section** — generally service before 2007 — pays unreduced from 60, with the 1/80th accrual and automatic 3x lump sum. The **2007 section** pays from 65 on 1/60th accrual without the automatic lump sum. When you can retire depends on which sections your statement shows, and the [CARE vs final salary comparison](/care-vs-final-salary-pension/) sets out how they interact." },

      { kind: "h2", text: "When teachers actually retire" },
      { kind: "p", text: "School workforce data consistently shows teachers retiring in their early 60s — earlier than NPA, which means most retiring teachers accept an actuarial reduction. The [early retirement guide](/teacher-early-retirement/) prices those reductions year by year. The pattern is less 'retire at NPA' and more 'reduce hours at 58-60, phase out by 63-65'." },
      { kind: "callout", tone: "info", title: "The average hides two very different groups", text: "Some teachers retire early through ill-health or burnout — for them the reduction is an unwelcome tax on necessity. Others retire early deliberately with the reduction priced in. The planning differs completely: the first group needs to know about ill-health retirement tiers, the second about flexible retirement." },

      { kind: "h2", text: "Working past NPA" },
      { kind: "p", text: "There is no upper limit. Teaching past your NPA accrues more pension at 1/57th with no reduction — in fact late-career service is the cheapest pension you ever buy, because there is no revaluation period between earning and drawing it. Teachers who continue to 70 can add five figures of annual pension in the final years, particularly on the [leadership pay scale](/leadership-pay-scale/)." },

      { kind: "h2", text: "The State Pension on top" },
      { kind: "p", text: "Most teachers qualify for the full new State Pension given sufficient National Insurance records — currently £230.25 a week for 2026/27, index-linked. It starts at State Pension age regardless of when you draw the TPS, and it is worth remembering when comparing retirement at 60 against 67: the gap years are funded by the reduced TPS pension alone." },

      { kind: "h2", text: "Checking your own position" },
      { kind: "ol", items: [
        "Your **benefit statement** lists your NPA per section and your accrued pension against each.",
        "Your **State Pension forecast** on GOV.UK shows your SPA and entitlement projection.",
        "The [teachers' pension calculator](/teacher-pension-calculator/) projects total income at any target age.",
        "For mixed-service members, a **formal estimate** from Teachers' Pensions beats any self-calculation.",
      ]},
    ],
    faq: [
      { question: "What age can teachers retire?", answer: "From 55 currently, rising to 57 on 6 April 2028, with actuarial reductions before Normal Pension Age. Unreduced payment starts at your NPA — State Pension age for CARE service, 60 or 65 for final salary sections." },
      { question: "What is the teachers' pension Normal Pension Age?", answer: "For CARE (post-2015) service, your NPA equals your State Pension age — 67 for most current teachers. Pre-2007 final salary service has an NPA of 60, and the 2007 section has an NPA of 65." },
      { question: "What is the average teacher retirement age in the UK?", answer: "Most teachers retire in their early 60s, typically 60-63 — earlier than NPA, meaning most accept an actuarial reduction. The common pattern is reducing hours from around 58-60 and phasing into full retirement." },
      { question: "When can teachers retire at 60 without reduction?", answer: "If they hold NPA-60 final salary service (generally service before 2007), that section pays unreduced from 60. CARE service drawn at 60 still takes a reduction against its State-Pension-linked NPA, so mixed-service members see different outcomes per section." },
      { question: "Does the teacher pension age change to 68?", answer: "For current younger teachers, likely yes: CARE NPA is linked to State Pension age, which is legislated to rise to 68 for those born after April 1977 under current plans. The link means scheme NPA moves automatically with future SPA changes." },
      { question: "Can I take my teachers' pension at 57?", answer: "From 6 April 2028, 57 becomes the minimum pension age. Benefits taken before NPA carry reductions of roughly 5% per year early. Flexible retirement rules also allow drawing while continuing to teach at reduced hours." },
      { question: "Is there a maximum teacher retirement age?", answer: "No. You can keep teaching and accruing at 1/57th indefinitely. Late-career service is the most efficient pension you ever buy because there is no revaluation lag between earning and drawing the benefit." },
    ],
    sources: [
      ...SOURCES,
      { label: "GOV.UK — State Pension age timetables", url: "https://www.gov.uk/state-pension-age" },
    ],
    updated: UPDATED,
  },

  {
    slug: "how-does-teacher-pension-work",
    hub: "pensions",
    title: "How Does the Teachers' Pension Work?",
    metaTitle: "How Does the Teachers' Pension Work? Plain English",
    metaDescription:
      "The Teachers' Pension in plain English: what goes in, how 1/57ths build up, revaluation, what you get out, and the five decisions that shape it.",
    primaryKeyword: "how does teachers pension work",
    secondaryKeywords: [
      "how does teacher pension work", "how do teachers pensions work",
      "teachers pension explained", "how does a teachers pension work",
      "how does the teachers pension work", "teachers pension how it works",
      "teacher pension scheme explained", "understanding teachers pension",
    ],
    calculator: "pension-care",
    intro:
      "Strip away the jargon and the Teachers' Pension is simple: you pay in a slice of salary each month, you build 1/57th of your pay as pension every year, the government tops it up generously, and it pays you an inflation-proofed income for life. Here is the whole machine, explained.",
    keyTakeaways: [
      "Every year of teaching builds 1/57th of your pensionable pay as permanent annual pension.",
      "Your pot is not invested — it is a promise backed by the scheme, so there is no market risk.",
      "Already-built pension grows at CPI plus 1.6% every year you keep teaching.",
      "The employer pays 28.8% of your salary in, on top of your 7.4-12.7%.",
      "Five decisions shape the outcome: staying in, going part-time knowingly, allowances, retirement age and the lump sum.",
    ],
    blocks: [
      { kind: "h2", text: "The whole system in one paragraph" },
      { kind: "p", text: "Each month, a percentage of your salary (7.4-12.7% depending on your pay band) goes to the scheme, and your employer adds 28.8%. Each year, the scheme credits you with 1/57th of your pensionable pay as an annual pension amount. Every year, everything you have earned so far is increased by inflation plus 1.6%. When you retire, the total is paid to you every year for life, rising with inflation. That is the entire engine." },

      { kind: "h2", text: "The four moving parts" },
      { kind: "h3", text: "1. Accrual: earning 1/57th each year" },
      { kind: "p", text: "In the 2026/27 school year, a teacher on M4 (£40,940) earns £718 of annual pension. A teacher on U3 (£52,835) earns £927. A headteacher on £90,000 earns £1,579. The amount is fixed by that year's pay — no forecasts, no investment returns, no luck." },
      { kind: "h3", text: "2. Revaluation: your earned pension grows" },
      { kind: "p", text: "Last year's pension, and every year before it, is uprated by CPI plus 1.6% while you remain in service. Earn £700 of pension in year one and by year five it has grown to around £800 without you doing anything. Leave the scheme and the uplift drops to CPI only — the quiet cost of quitting." },
      { kind: "h3", text: "3. Contributions: what it costs you" },
      { kind: "p", text: "Your contribution is a percentage of salary, tiered from 7.4% to 12.7%. It comes out before income tax (so you get full tax relief) but after nothing else — National Insurance is charged on your full gross pay. The [contributions guide](/teacher-pension-contributions/) has every band and worked cost." },
      { kind: "h3", text: "4. Payment: what you get out" },
      { kind: "p", text: "From your Normal Pension Age, the accumulated total is paid every year for life, rising each April with CPI. You can start earlier with reductions, exchange some pension for tax-free cash at 12:1, and pass limited benefits to a spouse or children after death." },

      { kind: "h2", text: "Why it is not a pot of money" },
      { kind: "p", text: "The biggest conceptual jump from private pensions: there is no pot with your name on it. Your contributions today pay current pensioners, and the promise of your future pension is backed by the scheme's long-term funding and ultimately the government. That is why there is no investment risk, no crash risk, and no sequence-of-returns problem — and why the scheme's value is measured in guaranteed income, not a balance figure." },
      { kind: "table", caption: "TPS versus a typical private workplace pension", head: ["Feature", "Teachers' Pension", "Typical DC workplace scheme"], rows: [
        ["What you build", "Guaranteed annual pension", "A pot of investments"],
        ["Employer contribution", "28.8%", "3-6% typical"],
        ["Investment risk", "None", "Entirely yours"],
        ["Inflation protection", "Automatic, CPI-linked", "Depends on how you draw"],
        ["How long it lasts", "For life", "Until the pot runs out"],
      ]},

      { kind: "h2", text: "The five decisions that shape your pension" },
      { kind: "ol", items: [
        "**Staying in.** Opting out stops your 1/57ths and forfeits the 28.8% employer contribution. Almost never sensible.",
        "**Taking allowances.** TLR and SEN payments are pensionable — a TLR 2 of £5,000 builds an extra £88 of pension every year you hold it.",
        "**Going part-time knowingly.** You build proportionally less but the [part-time mechanics](/part-time-teacher-pay-calculator/) are fair: same tier per pound, full service credit.",
        "**When you retire.** Each year before NPA costs roughly 5% permanently; each year past it buys full-price pension. See [pension ages](/teacher-pension-age/).",
        "**The lump sum.** Exchanging pension for cash at 12:1 suits some retirees and shortchanges others. The [lump sum calculator](/teacher-pension-lump-sum/) shows the breakeven.",
      ]},

      { kind: "h2", text: "What happens in the awkward cases" },
      { kind: "ul", items: [
        "**Maternity leave** — paid and statutory maternity leave counts as service at full rate for the first period; unpaid portions can be bought back.",
        "**Career breaks** — pension freezes at CPI-only growth until you return, and you can buy back the missing years within set windows.",
        "**Supply and part-year work** — pensionable pay is annualised per engagement; supply teachers via agencies often miss out entirely, which is a genuine gap in the [supply pay picture](/supply-teacher-pay/).",
        "**Moving to an academy** — most trusts continue TPS membership, but some do not. Check before signing; a switch to a DC pension is a large behind-the-scenes pay cut.",
      ]},

      { kind: "h2", text: "The jargon decoder" },
      { kind: "table", caption: "TPS terms translated", head: ["Term", "Plain English"], rows: [
        ["CARE", "Career average revalued earnings — the 1/57th system"],
        ["Accrual rate", "How much pension one year buys (1/57th)"],
        ["Revaluation", "The annual inflation-plus uplift on what you have earned"],
        ["NPA", "Normal Pension Age — when it pays without reduction"],
        ["Actuarial reduction", "The permanent discount for taking it early"],
        ["Commutation", "Swapping pension for tax-free cash at £12 per £1"],
        ["McCloud remedy", "The correction restoring pre-2015 protections to affected members"],
        ["Deferred member", "Someone who left teaching with pension still owed to them"],
      ]},
      { kind: "p", text: "With the mechanics clear, the [teachers' pension calculator](/teacher-pension-calculator/) turns them into a number for your own career, and the [pillar guide](/teacher-pension/) covers the scheme in full depth." },
    ],
    faq: [
      { question: "How does the teachers' pension work in simple terms?", answer: "You pay in 7.4-12.7% of salary, your employer adds 28.8%, and each year you build 1/57th of your pay as annual pension. Everything you have earned grows by inflation plus 1.6% yearly. At retirement it pays an inflation-linked income for life, with an optional lump sum." },
      { question: "Is the teachers' pension invested in the stock market?", answer: "No. It is a defined-benefit promise, not a pot of investments. Your benefit is defined by the 1/57th formula and backed by the scheme, so there is no market risk to your pension — the trade-off is less flexibility and limited inheritance." },
      { question: "Do teachers get a good pension?", answer: "By the standard of workplace pensions, exceptionally: the 28.8% employer rate is roughly ten times the auto-enrolment minimum, benefits are index-linked for life, and there is no investment risk. The honest caveats are contribution costs of up to 12.7% and limited death benefits." },
      { question: "What happens to my teachers' pension when I die?", answer: "A death grant of 3x annual pension applies in the first years of retirement (and while in service), plus a survivor's pension for spouse or nominated partner, and children's pensions. The [death in service guide](/teacher-pension-death-in-service/) has the figures and nomination steps." },
      { question: "How many years do you need to teach to get a pension?", answer: "There is no minimum service length — every year builds 1/57ths that are yours even if you leave teaching entirely after two years. Very short careers produce small pensions, but nothing is forfeited." },
      { question: "Do teachers pay into the pension automatically?", answer: "Yes, membership is automatic for most teachers in maintained schools and many academies, with a genuine opt-out available. Supply teachers engaged through agencies are the big exception — they usually are not enrolled at all unless they ask." },
      { question: "What is the McCloud remedy in simple terms?", answer: "A correction for age discrimination in the 2015 scheme transition. Most older members were moved to CARE when younger members were not. The remedy rolls affected members back to final salary for 2015-2022 and moves them to CARE from 2022, with most choosing the more valuable option at retirement." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  {
    slug: "average-teacher-pension-uk",
    hub: "pensions",
    title: "Average Teacher Pension in the UK",
    metaTitle: "Average Teacher Pension UK: Realistic Figures",
    metaDescription:
      "What teachers actually receive in retirement: average TPS pensions in payment, realistic projections by career length, and how the State Pension tops it up.",
    primaryKeyword: "average teacher pension uk",
    secondaryKeywords: [
      "average teacher pension", "how much pension do teachers get uk",
      "what pension do teachers get", "how much is teacher pension",
      "average teachers pension uk", "teacher pension average uk",
      "how much do teachers get in pension", "typical teachers pension",
    ],
    calculator: "pension-care",
    intro:
      "The honest answer to 'what is the average teacher pension': most retiring teachers today draw somewhere between £10,000 and £20,000 a year from the TPS, with long-serving career teachers on modern salaries projecting £25,000-£45,000. Here is what drives the spread, and where you are likely to land.",
    keyTakeaways: [
      "Pensions in payment skew low because most were built on old, lower salaries — new-career projections are far higher.",
      "A full 40-year career at modern pay points projects £40,000-£70,000 a year depending on progression.",
      "A 25-30 year career at M4-M6 projects roughly £18,000-£30,000 a year.",
      "The State Pension adds £11,973 a year (2026/27) on top for anyone with full NI records.",
      "Part-time years reduce the pension in proportion — a 0.6 FTE career builds 60% of the full-time equivalent.",
    ],
    blocks: [
      { kind: "h2", text: "Why 'average' is a slippery number" },
      { kind: "p", text: "Published averages of pensions in payment mix two populations: teachers who built their pensions on salaries a fraction of today's, and recent retirees whose final decades were on modern pay. The average in-payment figure therefore understates what a teacher retiring **today** on a full career of modern salaries will receive. Treat in-payment averages as a floor, not a forecast." },

      { kind: "h2", text: "Realistic projections by career shape" },
      { kind: "p", text: "These projections use the scheme mechanics — 1/57th accrual, CPI+1.6% active revaluation, 2% pay growth, 2% CPI — computed against the real 2026/27 pay points:" },
      { kind: "table", caption: "Projected annual pension at 67 by career shape", head: ["Career", "Path", "Projected pension"], rows: [
        ["Full career, steady", "M1 start, reaches M6, 40 years", "≈£71,200"],
        ["Full career, modest", "M1 start, stays mid-scale, 38 years", "≈£52,000-£58,000"],
        ["Mid-career start", "On M6 at 40, teaches to 67 (27y)", "≈£45,900"],
        ["Standard 30-year", "M1-M6 progression, 30 years", "≈£33,000-£38,000"],
        ["Part-time heavy", "0.6 FTE on M4, 30 years", "≈£29,000"],
        ["Late joiner", "Qualified at 35, M5 by 67, 30 years", "≈£30,000-£34,000"],
      ]},
      { kind: "callout", tone: "info", title: "Why the revaluation assumption matters", text: "These figures assume CPI of 2% with the scheme's CPI+1.6% active revaluation. If CPI averages higher, the money-of-the-day pension is higher — the real-terms value is what stays constant. Projections are ranges, not promises." },

      { kind: "h2", text: "What current pensioners actually receive" },
      { kind: "p", text: "Teachers' Pensions' published data shows average pensions in payment for teacher retirees clustering in the £9,000-£14,000 range, with long-serving members above that. Three forces pull the average down: historic salaries were much lower, many members took breaks or part-time years, and a large share of members take benefits early with reductions. A teacher today completing a full career on modern pay will land well above the in-payment average." },

      { kind: "h2", text: "The State Pension on top" },
      { kind: "table", caption: "Total retirement income for a full-career teacher retiring at 67", head: ["Component", "Annual amount"], rows: [
        ["TPS pension (30-year career, M-scale)", "≈£35,000"],
        ["State Pension (full, 2026/27 rate)", "£11,973"],
        ["Total guaranteed income", "≈£47,000"],
        ["Plus optional lump sum (up to ~5.36x pension)", "up to ≈£187,000"],
      ]},
      { kind: "p", text: "Against median UK household retirement income of roughly £27,000, a full-career teacher's guaranteed package is comfortably above average — before any [AVC pot](/teacher-avc-calculator/) or private savings." },

      { kind: "h2", text: "What pulls a pension down" },
      { kind: "ul", items: [
        "**Early retirement** — roughly 5% off per year before NPA; five years early costs about 23%.",
        "**Part-time years** — proportional accrual, fairly applied but cumulative: a decade at 0.5 builds half a decade's worth.",
        "**Supply teaching via agencies** — agency-engaged supply teachers are frequently not enrolled at all; years vanish silently.",
        "**Opting out spells** — lost employer contributions plus CPI-only revaluation on everything already built.",
        "**Non-pensionable pay** — most one-off payments and some allowances never touch the 1/57ths.",
      ]},

      { kind: "h2", text: "How to push your projection up" },
      { kind: "ol", items: [
        "Hold pensionable [TLR allowances](/teacher-pay-scale/) — every pensionable pound builds 1/57th of pension, permanently.",
        "Work past NPA if you can — late-career years are full-price pension with zero revaluation lag.",
        "Buy back missing years (maternity, breaks) within the windows — back-payments are usually priced generously.",
        "Check agency supply arrangements and ask about pensionable engagement.",
        "Model it: the [teachers' pension calculator](/teacher-pension-calculator/) turns your statement figures into a projection.",
      ]},
    ],
    faq: [
      { question: "How much pension does the average teacher get?", answer: "Pensions currently in payment average roughly £9,000-£14,000 a year because most were built on older, lower salaries. A teacher completing a full career on modern pay projects far higher: roughly £33,000-£45,000 a year for 27-40 years of service, before the State Pension." },
      { question: "How much pension do teachers get in the UK?", answer: "It depends on career length and pay. Each year builds 1/57th of pensionable pay: an M4 teacher earns £718 of annual pension per year worked. Thirty years at that level builds roughly £21,000 before revaluation uplifts, and the full State Pension adds £11,973 on top." },
      { question: "What is a good teachers' pension at retirement?", answer: "A full-career teacher retiring today on modern salaries should regard £30,000-£45,000 of TPS pension plus the full State Pension as a normal outcome. Combined guaranteed income around £45,000-£55,000 is achievable without any private savings." },
      { question: "Do teachers get the State Pension as well?", answer: "Yes, separately, if they have enough National Insurance years — most do. The full new State Pension pays £11,973 a year in 2026/27, index-linked, starting at State Pension age regardless of when you draw the TPS." },
      { question: "Why are teachers' pensions in payment so low compared to projections?", answer: "In-payment figures reflect careers built on much lower historic salaries, frequent part-time years, and early-retirement reductions. They are a floor, not a forecast: modern full-career projections are substantially higher." },
      { question: "How much pension will I get after 20 years of teaching?", answer: "Roughly 20/57ths of your average revalued pay. On steady M4-M5 pay that projects to about £17,000-£22,000 a year at NPA, plus proportionate State Pension. The [calculator](/teacher-pension-calculator/) gives a figure for your actual statement data." },
      { question: "Does part-time teaching halve your pension?", answer: "It reduces it in proportion to the fraction worked. A 0.6 FTE teacher builds 60% of the full-time accrual for those years, with no other penalty — service still counts fully and the tier structure is identical per pound earned." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  {
    slug: "is-teacher-pension-good",
    hub: "pensions",
    title: "Is the Teachers' Pension Any Good?",
    metaTitle: "Is the Teachers' Pension Good? An Honest Assessment",
    metaDescription:
      "An honest assessment of the Teachers' Pension: where it genuinely beats private pensions, the fair criticisms, and the cases where opting out almost makes sense.",
    primaryKeyword: "are teachers pensions good",
    secondaryKeywords: [
      "is teacher pension good", "is a teachers pension good",
      "is the teachers pension worth it", "teachers pension worth it",
      "should i opt out of teachers pension", "teachers pension review",
      "teacher pension compared to private pension",
    ],
    calculator: "none",
    intro:
      "Short answer: yes — the Teachers' Pension is one of the best workplace pensions in the country, and opting out is almost always a financial mistake. But 'good' deserves scrutiny: here is where the scheme genuinely wins, where the criticisms are fair, and the narrow cases where leaving is defensible.",
    keyTakeaways: [
      "The 28.8% employer contribution is roughly ten times the auto-enrolment minimum — the single strongest argument.",
      "Guaranteed, CPI-linked income for life with zero investment risk is something private pots cannot replicate cheaply.",
      "The fair criticisms: contributions up to 12.7% are expensive, death benefits are limited, and flexibility is poor.",
      "Opting out forfeits employer money and downgrades revaluation on everything already built — almost never rational.",
      "The scheme's generosity is why senior leaders must watch the pension annual allowance tax charge.",
    ],
    blocks: [
      { kind: "h2", text: "The case for: four numbers that settle it" },
      { kind: "table", caption: "TPS versus a typical private workplace pension", head: ["Measure", "Teachers' Pension", "Typical private DC"], rows: [
        ["Employer contribution", "28.8%", "3-6%"],
        ["What £100/month buys at 67 (30y)", "≈£6,300/yr guaranteed, index-linked", "A pot of ≈£60-75k, no guarantee"],
        ["Investment risk", "None", "Entirely yours"],
        ["Running out of money", "Impossible", "A real risk in drawdown"],
      ]},
      { kind: "p", text: "The employer contribution alone is decisive. A teacher on M4 receives £11,791 of employer money into the scheme every year. Replicating a guaranteed £20,000-a-year index-linked pension through a private pot would typically need a fund of £400,000-£500,000 at current annuity rates — and you would carry all the investment risk getting there." },

      { kind: "h2", text: "The fair criticisms" },
      { kind: "h3", text: "Contributions are expensive" },
      { kind: "p", text: "Paying up to 12.7% of salary is a real cost, particularly for part-time teachers whose tier is set on FTE pay. The counter-argument is that the contribution buys benefits worth far more than a private equivalent — but the cash-flow reality on a tight month is genuine, and the [tier cliff edges](/teacher-pension-contributions/) can swallow an entire pay rise." },
      { kind: "h3", text: "Death benefits are limited" },
      { kind: "p", text: "A private pot passes to your family whole. The TPS pays a death grant (3x pension in early retirement years), a survivor's pension typically around half of yours, and children's pensions. For a teacher who dies shortly after retiring with no spouse, the scheme can return far less than was contributed. Families for whom inheritance matters should hold [AVCs](/teacher-avc-calculator/) or ISAs alongside." },
      { kind: "h3", text: "Flexibility is poor" },
      { kind: "p", text: "You cannot pause contributions in a hard month (it is all or nothing), cannot take a pension holiday, and cannot access anything before the minimum age. Private pots allow all three. The scheme's answer is the 50/50-style flexibility existing only in the LGPS — not available to teachers." },
      { kind: "h3", text: "The rules keep moving" },
      { kind: "p", text: "NPA linked to State Pension age, the 2015 transition, the McCloud remedy running a decade: members have absorbed repeated structural change. The protections have generally held, but planning a retirement date around current rules carries genuine legislative risk." },

      { kind: "h2", text: "The cases where opting out is argued — and why they usually fail" },
      { kind: "table", caption: "Common opt-out arguments examined", head: ["The argument", "The reality"], rows: [
        ["'I need the money now'", "Opting out on M4 gives £3,521/yr gross — about £230/month net. It also forfeits £11,791 of employer money and CPI+1.6% growth on everything built."],
        ["'I'll invest it myself'", "To match the guarantee you must beat a 28.8% head start, then replicate index-linked income for life. Historically implausible for most savers."],
        ["'I won't live long enough'", "True for some; unknowable in advance. The survivor's pension partially covers it. Longevity insurance is exactly what you cannot buy cheaply at 65."],
        ["'I'm leaving teaching anyway'", "Deferred benefits still grow at CPI. Leaving the scheme entirely is different from leaving teaching — deferred membership costs nothing and keeps the guarantee."],
      ]},
      { kind: "callout", tone: "warn", title: "If you have opted out, look at rejoining", text: "Rejoining restarts 1/57ths and restores the employer contribution. There are limits on how much can be built in any year, but for most members under NPA the arithmetic strongly favours rejoining. Take regulated advice, but take it soon — every year out is a year of 28.8% forfeited." },

      { kind: "h2", text: "Who the scheme is genuinely not ideal for" },
      { kind: "ul", items: [
        "**Very high earners** — the annual allowance tax charge can claw back the benefit for senior leaders with long service; this needs specific advice, not blanket rules.",
        "**Severe ill-health with short life expectancy** — though the scheme's own ill-health retirement tiers are designed for exactly this and are often overlooked.",
        "**Those who cannot tolerate any contribution at all** — for whom the honest answer is a smaller private pension rather than nothing.",
      ]},

      { kind: "h2", text: "The verdict" },
      { kind: "p", text: "Measured on guaranteed retirement income per pound of member contribution, the Teachers' Pension beats essentially every alternative available to UK workers. Its weaknesses — cost, rigidity, limited inheritance — are real but are the standard trade-offs of defined-benefit security. For the overwhelming majority of teachers the question is not whether the scheme is good, but how to [maximise what you get from it](/teacher-pension/): allowances, buy-backs, retirement timing and the lump sum decision." },
    ],
    faq: [
      { question: "Are teachers' pensions good?", answer: "Yes — among the best workplace pensions available. The 28.8% employer contribution, guaranteed CPI-linked income for life and absence of investment risk outweigh the genuine downsides of high contributions, poor flexibility and limited death benefits for most members." },
      { question: "Is the teachers' pension worth it compared to investing myself?", answer: "For almost everyone, yes. You start with a 28.8% employer contribution, take no investment risk, and receive index-linked income for life. Replicating a £20,000 guaranteed pension privately typically needs a £400,000-£500,000 pot at current annuity rates." },
      { question: "Should I opt out of the teachers' pension?", answer: "Almost never. Opting out on M4 gains about £230 a month net but forfeits £11,791 a year of employer contribution and downgrades revaluation on your entire accrued pension. Take regulated advice before leaving a defined-benefit scheme." },
      { question: "What are the downsides of the teachers' pension?", answer: "Contributions reach 12.7% of salary with no partial option, benefits cannot be accessed before minimum pension age, death benefits are limited compared with a private pot, and the rules have changed repeatedly — NPA is linked to State Pension age, so it can move." },
      { question: "Do teachers get their pension contributions back if they leave?", answer: "Not as a refund in the normal case — leaving teaching makes you a deferred member with the pension intact, growing at CPI. Refunds of contributions exist only for very short service periods under specific rules, and are almost always worth less than keeping the deferred pension." },
      { question: "Is the teachers' pension better than a private pension?", answer: "For guaranteed lifetime income, substantially better. Private pots win on flexibility, inheritance and access age. The strongest private-pension argument — employer matching — is dwarfed by the TPS's 28.8% rate. Most advisers recommend treating the TPS as the foundation and private savings as the flexible layer." },
      { question: "Why do some financial advisers say to leave the teachers' pension?", answer: "Be careful: advice to exit defined-benefit schemes is a known scam pattern and the FCA has acted on it repeatedly. There are narrow cases (very large pension inputs triggering annual allowance charges, specific inheritance needs) where restructuring is defensible — those require FCA-regulated, specialist advice, never a cold call." },
    ],
    sources: [
      ...SOURCES,
      { label: "FCA ScamSmart — pension transfer warnings", url: "https://www.fca.org.uk/scamsmart" },
    ],
    updated: UPDATED,
  },

  {
    slug: "teacher-pension-lump-sum",
    hub: "pensions",
    title: "Teachers' Pension Lump Sum",
    metaTitle: "Teachers' Pension Lump Sum: Commutation Explained",
    metaDescription:
      "The TPS tax-free lump sum: the automatic 3x payment, commutation at 12:1, the 25% cap, the breakeven maths, and how to decide whether to take it.",
    primaryKeyword: "teachers pension lump sum",
    secondaryKeywords: [
      "teacher pension lump sum", "teachers pension lump sum calculator",
      "tax free lump sum teachers pension", "tps lump sum",
      "teachers pension commutation", "lump sum or pension teachers",
      "teachers pension tax free cash",
    ],
    calculator: "lump-sum",
    intro:
      "The TPS can pay you a large tax-free cash sum at retirement: automatic 3x pension for NPA-60 final salary service, plus the option to exchange annual pension for cash at £12 per £1. Here is how the maths works, where the cap bites, and how to decide.",
    keyTakeaways: [
      "NPA-60 final salary service pays an automatic lump sum of 3x that section's pension — no election needed.",
      "Commutation exchanges £1 of annual pension for £12 of tax-free cash, capped at roughly 25% of capital value.",
      "The maximum total lump sum works out at about 5.36 times your annual pension.",
      "The breakeven on commutation is roughly 12 years — take the cash and you are ahead until then.",
      "Lump sums are tax-free; the exchanged pension would have been taxable income, which improves the real-terms case.",
    ],
    blocks: [
      { kind: "h2", text: "Two different lump sums" },
      { kind: "p", text: "Confusing these causes most of the muddle around retirement planning:" },
      { kind: "table", caption: "Automatic lump sum versus commutation", head: ["", "Automatic lump sum", "Commutation (extra cash)"], rows: [
        ["Who gets it", "NPA-60 final salary members", "Anyone, by election"],
        ["Size", "3x that section's annual pension", "Up to the 25% cap"],
        ["Costs pension?", "No — it was always part of the benefit", "Yes: £1/yr per £12 taken"],
        ["Election needed", "No", "Yes, at retirement"],
      ]},

      { kind: "h2", text: "How commutation works" },
      { kind: "p", text: "At retirement you may give up annual pension in exchange for tax-free cash at a fixed rate: **£12 of cash for every £1 of annual pension surrendered**. The exchange is permanent — the pension reduction lasts for life and the cash is fixed. HMRC caps tax-free lump sums at 25% of the capital value of your benefits, which at 12:1 commutation works out at approximately **5.36 times your annual pension**." },
      { kind: "table", caption: "Commutation options on a £24,000 pension", head: ["Cash taken", "Pension given up", "Pension remaining"], rows: [
        ["£0", "£0", "£24,000"],
        ["£43,000 (25%)", "£3,583", "£20,417"],
        ["£64,300 (max ≈5.36x)", "£5,358", "£18,642"],
      ]},

      { kind: "h2", text: "The breakeven maths" },
      { kind: "p", text: "Take £12 today or £1 every year for life: the crossover is at **12 years**. Retire at 67 and live to 79, and commutation merely swaps like for like. Live to 85 and the untouched pension has paid £18,000 more than the cash route. Two refinements cut both ways:" },
      { kind: "ul", items: [
        "**Tax favours the cash** — the lump sum is tax-free, while the surrendered pension would have been taxed at your marginal rate, often 20%. The real-terms breakeven stretches to roughly 15 years.",
        "**Inflation favours the pension** — the retained pension rises with CPI every year; the cash does not. In real terms the breakeven shortens again.",
      ]},
      { kind: "callout", tone: "tip", title: "Run your own numbers", text: "The [lump sum calculator](/teacher-pension-lump-sum/) above applies the 12:1 rate and the cap to your projected pension, and shows the breakeven at your chosen take-up level." },

      { kind: "h2", text: "When taking the lump sum makes sense" },
      { kind: "ul", items: [
        "**Clearing expensive debt** — clearing a mortgage or loans beats the pension yield almost always, especially while rates are elevated.",
        "**Early retirement bridging** — cash funds the years before State Pension age, reducing how much reduced pension you need to draw.",
        "**No surviving-dependant plans** — the exchanged pension dies with you; the cash is yours to spend or leave.",
        "**Investment opportunity with capacity for loss** — rare, and it needs honest risk assessment.",
      ]},

      { kind: "h2", text: "When keeping the pension wins" },
      { kind: "ul", items: [
        "**Longevity in the family** — retiring at 67 with parents alive into their 90s tilts hard toward keeping pension.",
        "**A surviving partner** — a spouse or nominated partner's pension is calculated on your pension at death; commutation shrinks it.",
        "**No pressing use for the cash** — cash earning 4% while the pension 'earns' 8.3% (1/12) plus inflation linkage is a poor trade.",
        "**Higher-rate tax in retirement** — if other income already pushes you to 40%, the surrendered pension was worth £15 of net income per £12, not £12.",
      ]},

      { kind: "h2", text: "The interaction with your tax position" },
      { kind: "p", text: "The lump sum itself is tax-free, but what you do with it is not always: large cash sums sitting in savings generate taxable interest, and drawing an AVC pot in the same year can push you over thresholds. Spreading the [AVC tax-free cash](/teacher-avc-calculator/) and the TPS lump sum across tax years is a standard planning move worth discussing with an adviser." },

      { kind: "h2", text: "How to elect" },
      { kind: "p", text: "You make the commutation election when you claim benefits, on the retirement application through My Pension Online. The scheme provides a formal quote showing exactly what each level of cash does to your pension — always request estimates at several take-up levels rather than deciding on projections alone, since the definitive factors can differ from the indicative ones used in calculators." },
    ],
    faq: [
      { question: "Do teachers get a lump sum with their pension?", answer: "Members with NPA-60 final salary service receive an automatic lump sum of 3x that section's pension. Everyone can additionally commute pension for tax-free cash at £12 per £1, up to roughly 5.36 times the annual pension under the HMRC 25% cap." },
      { question: "How much lump sum do teachers get?", answer: "It depends on service. An NPA-60 final salary pension of £10,000 carries an automatic £30,000 lump sum. Commutation on a £24,000 pension can add up to about £128,000 of tax-free cash at the maximum, reducing the pension to roughly £13,400." },
      { question: "Is the teachers' pension lump sum tax free?", answer: "Yes, up to the HMRC lifetime allowance-style 25% cap on capital value. Cash taken within the cap is tax-free; the exchanged pension reduction is permanent." },
      { question: "Should I take the maximum lump sum from my teachers' pension?", answer: "It depends on longevity, tax position, debts and family. The breakeven is about 12-15 years. Taking the maximum suits those clearing debt or bridging early retirement; keeping pension suits longer life expectancies and surviving partners." },
      { question: "How is the teachers' pension lump sum calculated?", answer: "The automatic element is 3x the NPA-60 section's annual pension. Commutation exchanges pension at £12 cash per £1 of pension, limited so the total tax-free cash does not exceed about 25% of the capital value of your benefits — approximately 5.36x annual pension." },
      { question: "Does taking the lump sum reduce my survivors' pension?", answer: "Yes. Survivor benefits are calculated on the pension you are receiving at death, so commutation reduces what a spouse or nominated partner would receive. This is one of the strongest arguments against maximum commutation for members with dependants." },
      { question: "Can I take a lump sum and keep working?", answer: "Through flexible retirement, yes — drawing benefits while working at reduced pensionable pay. The lump sum options apply to the benefits you draw, and phased drawdown lets you take cash in stages across tax years." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  {
    slug: "teacher-pension-death-in-service",
    hub: "pensions",
    title: "Teachers' Pension Death in Service",
    metaTitle: "Teachers' Pension Death in Service: What's Paid",
    metaDescription:
      "Teachers' Pension death benefits: the 3x salary death grant, survivor pensions for partners and children, and how to nominate who receives them.",
    primaryKeyword: "teacher death in service",
    secondaryKeywords: [
      "teacher pension death in service", "teachers death in service",
      "teachers pension death benefits", "teachers pension death grant",
      "teacher death in service benefit", "teachers pension survivor pension",
      "teachers pension when you die",
    ],
    calculator: "none",
    intro:
      "If you die while paying into the Teachers' Pension, the scheme pays a lump sum of three times your annual pensionable pay plus ongoing pensions for your partner and children. Here is exactly what is paid, to whom, and the nomination step most teachers skip.",
    keyTakeaways: [
      "Death in service pays a lump sum of 3x annual pensionable pay — £122,820 on M4.",
      "A long-term partner can receive a survivor's pension even if you are not married, if nominated and eligibility tests are met.",
      "Children's pensions pay until 18, or 23 if in full-time education.",
      "The lump sum does not automatically go to your estate — an expression of wish form directs it.",
      "Death after retirement pays a survivor's pension and, in the first years, a guaranteed-period lump sum.",
    ],
    blocks: [
      { kind: "h2", text: "The death grant: 3x pensionable pay" },
      { kind: "p", text: "For members who die in service, the scheme pays a lump sum of **three times the annual rate of pensionable pay**. The figures at 2026/27 pay points:" },
      { kind: "table", caption: "Death in service grant by pay point (rest of England, 2026/27)", head: ["Pay point", "Pensionable pay", "Death grant"], rows: [
        ["M1", "£34,068", "£102,204"],
        ["M4", "£40,940", "£122,820"],
        ["M6", "£46,939", "£140,817"],
        ["U3", "£52,835", "£158,505"],
        ["L12 (indicative ≈£75,000)", "≈£75,000", "≈£225,000"],
      ]},
      { kind: "p", text: "The grant is paid at the trustees' discretion — which is why the expression of wish nomination matters more than most teachers realise. It is normally free of inheritance tax because it is paid at the trustees' discretion rather than through the estate." },

      { kind: "h2", text: "Survivor pensions for a spouse or partner" },
      { kind: "p", text: "A surviving spouse, civil partner or nominated long-term partner receives an ongoing pension, not just the lump sum:" },
      { kind: "table", caption: "Survivor pensions on death in service", head: ["Beneficiary", "Pension"], rows: [
        ["Spouse or civil partner", "1/160th of final average pensionable pay per year of CARE service (enhanced as if you had worked to NPA)"],
        ["Nominated partner", "Same basis, subject to interdependency assessment and nomination"],
        ["Children", "Up to 1/2 of the adult survivor pension, split; paid to 18, or 23 in full-time education"],
      ]},
      { kind: "p", text: "The enhancement is the quiet generosity: the survivor pension is calculated as if you had continued teaching to Normal Pension Age, not just to your actual age at death. For a teacher dying at 40 with a young family, that enhancement can double or triple what raw service would suggest." },

      { kind: "h2", text: "Unmarried partners: the eligibility tests" },
      { kind: "p", text: "An unmarried partner can receive a survivor pension, but must usually satisfy an **interdependency test** — evidence of financial dependence or a long-term committed relationship such as shared finances, a mortgage, or children together. Two practical steps prevent almost all of the heartbreak cases:" },
      { kind: "ol", items: [
        "File a **nomination of partner** with Teachers' Pensions — do not assume cohabitation is enough.",
        "Keep the nomination current after relationship changes; an out-of-date nomination sends the survivor pension to a former partner.",
      ]},
      { kind: "callout", tone: "warn", title: "The nomination most teachers never file", text: "Scheme data consistently shows large numbers of members with no expression of wish on file. Without it, the trustees must investigate and distribute at their discretion — adding months of delay during the worst weeks of a family's life. Ten minutes on My Pension Online fixes it." },

      { kind: "h2", text: "Death after retirement" },
      { kind: "p", text: "Death benefits continue after you retire, in two forms. A **survivor's pension** continues for your spouse or nominated partner for life. And if you die within a **guaranteed period** (10 years for most post-2007 benefits), the remaining payments for that period are paid as a lump sum. Members who took maximum commutation should note the survivor pension is calculated on the reduced pension — one of the [lump sum trade-offs](/teacher-pension-lump-sum/)." },

      { kind: "h2", text: "Death in service versus private cover" },
      { kind: "p", text: "For most teachers, the 3x grant plus enhanced survivor pensions make separate death-in-service insurance unnecessary. Where private cover still earns its place: single parents wanting a larger lump sum for housing, members with dependants who do not qualify under the partner rules, and anyone whose mortgage exceeds the grant. The grant is also only 3x **pensionable** pay — non-pensionable earnings are invisible to it." },

      { kind: "h2", text: "Your action list" },
      { kind: "ol", items: [
        "Log in to **My Pension Online** and check your expression of wish nomination today.",
        "File a **partner nomination** if you are unmarried — the default rules do not assume cohabitees qualify.",
        "Review nominations after **marriages, divorces, births and bereavements**.",
        "Tell your nominees the policy exists and where the paperwork is — a benefit nobody knows about pays nobody.",
      ]},
    ],
    faq: [
      { question: "How much is teachers' death in service?", answer: "A lump sum of three times your annual pensionable pay — £102,204 on M1, £122,820 on M4 and £140,817 on M6 at 2026/27 pay points — plus ongoing survivor pensions for a spouse, nominated partner and children." },
      { question: "Does my partner get my teachers' pension if I die?", answer: "A spouse or civil partner automatically qualifies for a survivor pension. An unmarried partner can qualify if you have nominated them and the scheme's interdependency tests are met — financial dependence or a long-term committed relationship. Nomination is essential." },
      { question: "What happens to my teachers' pension if I die before retiring?", answer: "The scheme pays the 3x pay death grant as a lump sum, plus a survivor's pension calculated as if you had worked to Normal Pension Age, plus children's pensions where applicable. The lump sum goes at the trustees' discretion, guided by your expression of wish form." },
      { question: "Is the teachers' death in service grant taxable?", answer: "The lump sum is normally free of inheritance tax because it is paid at the trustees' discretion rather than through your estate, and it is not income tax on the recipient. Survivor pensions are taxable income for whoever receives them." },
      { question: "How do I nominate who gets my teachers' death benefit?", answer: "Complete the expression of wish form through My Pension Online. Review it after any major life event — marriage, divorce, children, bereavement. Without a nomination, distribution is at trustee discretion and can take months longer." },
      { question: "Do children get a teachers' pension if a parent dies?", answer: "Yes — children's pensions of up to half the adult survivor rate, split between children, paid until age 18 or 23 if in full-time education, with provisions for disabled children continuing beyond that." },
      { question: "Does death in service cover supply teachers?", answer: "Only if they are actually enrolled in the TPS for that engagement. Agency supply teachers are frequently not enrolled at all, which means no death in service cover from the scheme — one more reason the [supply pay arrangements](/supply-teacher-pay/) matter beyond salary." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

];
