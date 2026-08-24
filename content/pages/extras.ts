import type { PageContent } from "../types";

const UPDATED = "2026-08-23";

const SOURCES = [
  { label: "Teachers' Pensions — member guides and contribution tiers", url: "https://www.teacherspensions.co.uk/members.htm" },
  { label: "Teachers' Pension Scheme Regulations 2014 (CARE rules)", url: "https://www.legislation.gov.uk/uksi/2014/876" },
  { label: "MoneyHelper — pensions guidance for teachers", url: "https://www.moneyhelper.org.uk/en/pensions-and-retirement" },
  { label: "NEU — Teachers' Pension Scheme advice", url: "https://neu.org.uk/advice/your-rights-work/pensions/teachers-pension-scheme" },
];

const PENSION_SOURCES = [
  { label: "Teachers' Pensions — member contribution tiers", url: "https://www.teacherspensions.co.uk/members/working-life/paying-in/contribution-tiers.aspx" },
  { label: "SPPA — Scottish Teachers' Pension Scheme", url: "https://pensions.gov.scot/teachers" },
  { label: "Teachers' Pension Scheme Regulations 2014", url: "https://www.legislation.gov.uk/uksi/2014/512/contents/made" },
  { label: "MoneyHelper — free and impartial pension guidance", url: "https://www.moneyhelper.org.uk/en/pensions-and-retirement" },
];

const TAX_SOURCES = [
  { label: "HMRC — Rates and thresholds for employers 2026 to 2027", url: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" },
  { label: "HMRC — Tax codes explained", url: "https://www.gov.uk/tax-codes" },
  { label: "Scottish Government — Income tax rates and bands", url: "https://www.gov.scot/policies/taxes/income-tax/" },
  { label: "STPCD 2026 — School Teachers' Pay and Conditions Document", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
];

export const extraPages: PageContent[] = [
  {
    slug: "teacher-pension-scotland",
    hub: "pensions",
    title: "Teacher Pension Scotland (STPS)",
    metaTitle: "Teacher Pension Scotland: STPS Guide",
    metaDescription:
      "Scottish teachers are in a different scheme: the STPS, run by SPPA. How it differs from the TPS in England, contributions, accrual and retirement ages.",
    primaryKeyword: "teacher pension scotland",
    secondaryKeywords: [
      "scottish teacher pension", "scottish teachers pension scheme",
      "stps pension", "sppa teachers pension", "teacher pension scotland contributions",
      "scottish teachers pension calculator", "teachers pension scotland vs england",
    ],
    calculator: "pension-care",
    intro:
      "Scottish teachers are not in the Teachers' Pension Scheme at all. The Scottish Teachers' Superannuation Scheme is a separate CARE scheme run by SPPA, with its own contribution structure, its own rules and the same 1/57th core. Here is what differs and what does not.",
    keyTakeaways: [
      "Scottish teachers are in the STPS, administered by SPPA in Dundee — not Teachers' Pensions.",
      "The core mechanics match: CARE with 1/57th accrual, CPI+1.6% active revaluation, NPA linked to State Pension age.",
      "Contribution bands are set separately by SPPA and differ from the England tiers — check your statement.",
      "Scottish income tax bands apply to your salary, and the 42% band starts lower than rUK's higher rate.",
      "Moving between Scotland and the rest of the UK is possible: service transfers between the schemes.",
    ],
    blocks: [
      { kind: "h2", text: "A different scheme, not a different deal" },
      { kind: "p", text: "Devolution split the teaching pension systems in 2010s administration terms: Scotland runs the **Scottish Teachers' Superannuation Scheme (STPS)** through the **Scottish Public Pensions Agency (SPPA)**, while England and Wales run the TPS through Teachers' Pensions. The design is deliberately similar — a CARE scheme with 1/57th accrual — but the administration, contribution bands and some rules are separate." },
      { kind: "table", caption: "STPS versus TPS at a glance", head: ["Feature", "STPS (Scotland)", "TPS (England & Wales)"], rows: [
        ["Administrator", "SPPA (Dundee)", "Teachers' Pensions"],
        ["Accrual", "1/57th", "1/57th"],
        ["Active revaluation", "CPI + 1.6%", "CPI + 1.6%"],
        ["NPA", "State Pension age", "State Pension age"],
        ["Contribution bands", "Set by SPPA, separate structure", "7.4% – 12.7%"],
        ["Minimum pension age", "55, aligned with UK-wide change to 57 in 2028", "55, rising to 57 in 2028"],
      ]},

      { kind: "h2", text: "Contributions: check your own band" },
      { kind: "p", text: "SPPA sets Scottish contribution bands separately from the England tiers, and they have historically differed in both thresholds and rates. The one thing this page will not do is invent a Scottish tier table — your SPPA statement and the SPPA contribution schedule are definitive." },
      { kind: "callout", tone: "warn", title: "Do not assume the England tiers", text: "The TPS tiers (7.4% to 12.7% at £34,289 / £46,158 / £54,729 boundaries) are England and Wales figures. Scottish bands have sat at different thresholds. Check the current SPPA schedule or your payslip before budgeting — the [pay scale Scotland page](/teacher-pay-scale-scotland/) covers the salary side." },

      { kind: "h2", text: "What Scottish income tax does to your pension contributions" },
      { kind: "p", text: "Pension contributions reduce your Scottish taxable income, and Scotland's bands start higher-rate tax earlier than the rest of the UK. Two practical effects:" },
      { kind: "ul", items: [
        "Teachers crossing into the Scottish 42% band get 42p of tax relief per pound contributed — stronger relief than English colleagues on the same salary.",
        "The Scottish starter and intermediate bands mean some teachers pay slightly more tax on the same STPCD salary, though on main-scale pay the difference is modest — the [Scotland pay page](/teacher-pay-scale-scotland/) quantifies it.",
      ]},

      { kind: "h2", text: "Retirement ages and early access" },
      { kind: "p", text: "The STPS follows the same structure: NPA linked to State Pension age for CARE benefits, minimum pension age 55 rising to 57 on 6 April 2028, and actuarial reductions for early payment. Phased and flexible retirement options exist in broadly similar form. As with contributions, the definitive factors are SPPA's — treat any England-published reduction table as indicative only." },

      { kind: "h2", text: "Moving between Scotland and England" },
      { kind: "p", text: "Teachers move across the border more than most professions assume, and the schemes handle it:" },
      { kind: "ul", items: [
        "**Service transfers** — STPS and TPS service can be transferred between the schemes when you move, preserving value under aggregation rules.",
        "**Deferred service stays put** — you can leave STPS service deferred in Scotland while accruing in the TPS, claiming each separately.",
        "**Election windows** — transfer elections have time limits after joining the new scheme, so raise it with the new administrator in your first term, not your last.",
      ]},
      { kind: "callout", tone: "info", title: "Chartered Teacher changes the salary input", text: "Scotland's Chartered Teacher route (currently £52,539) pays more than England's UPS3, which flows straight into bigger 1/57ths. The salary side is covered in the [Scottish pay scale guide](/teacher-pay-scale-scotland/); the pension side follows the same 1/57th mechanics." },

      { kind: "h2", text: "The projection caveat that matters most" },
      { kind: "p", text: "The [pension calculator](/teacher-pension-calculator/) models the shared CARE mechanics accurately for Scottish teachers — accrual, revaluation and retirement ages are the same. What it cannot model is the Scottish contribution band or any SPPA-specific factor. Use it for the pension projection; use SPPA's own tools and statements for contribution and reduction figures." },

      { kind: "h2", text: "Where Scottish teachers actually differ day to day" },
      { kind: "ol", items: [
        "Different administrator: SPPA, with its own portal, statements and timescales.",
        "Different contribution bands — check, do not assume.",
        "Different pay negotiation (SNCT) feeding different salary growth into projections.",
        "The same core pension promise: 1/57ths, inflation-linked, for life.",
      ]},
    ],
    faq: [
      { question: "Do Scottish teachers have the same pension as English teachers?", answer: "The core design matches: both are CARE schemes with 1/57th accrual, CPI+1.6% active revaluation and State-Pension-linked NPA. But Scotland runs the separate STPS through SPPA, with its own contribution bands and administration." },
      { question: "Who runs the Scottish teachers' pension?", answer: "The Scottish Public Pensions Agency (SPPA), based in Dundee, administers the Scottish Teachers' Superannuation Scheme. Statements, contribution schedules and retirement estimates all come from SPPA, not Teachers' Pensions." },
      { question: "What do Scottish teachers pay into their pension?", answer: "SPPA sets Scottish contribution bands separately from the England tiers, and they differ. Check the current SPPA schedule or your payslip — do not assume the England 7.4%-12.7% structure applies." },
      { question: "Can I transfer my teachers' pension between Scotland and England?", answer: "Yes. STPS and TPS service can transfer between the schemes when you move, and deferred service can stay where it is while you accrue elsewhere. Transfer elections have time limits after joining the new scheme, so raise it early." },
      { question: "When can Scottish teachers retire?", answer: "On the same structure as England: NPA linked to State Pension age for CARE benefits, with access from 55 rising to 57 on 6 April 2028, and actuarial reductions before NPA." },
      { question: "Is the Scottish teachers' pension still final salary?", answer: "No — post-2015 service is CARE (1/57th) in Scotland too, with pre-2015 service holding final salary protections broadly parallel to England, subject to the Scottish remedy implementation." },
    ],
    sources: [
      { label: "Scottish Public Pensions Agency — teachers' scheme", url: "https://www.gov.scot/policies/public-sector-pensions/" },
      { label: "SNCT Handbook — Scottish teachers' pay and conditions", url: "https://www.snct.org.uk/" },
      { label: "Teachers' Pensions — for comparison with the E&W scheme", url: "https://www.teacherspensions.co.uk/members.htm" },
    ],
    updated: UPDATED,
  },

  {
    slug: "teacher-pension-advice",
    hub: "pensions",
    title: "Teacher Pension Advice",
    metaTitle: "Teacher Pension Advice: Where To Get Help",
    metaDescription:
      "Where teachers can get pension help: free government guidance from Pension Wise and MoneyHelper, union services, and when a regulated adviser is worth paying.",
    primaryKeyword: "pension advice for teachers",
    secondaryKeywords: [
      "teacher pension advice", "teachers pension advice", "pension advice teachers",
      "financial advice for teachers pension", "teachers pension financial adviser",
      "pension wise teachers", "moneyhelper teachers pension",
      "independent financial advice teachers pension",
    ],
    calculator: "none",
    intro:
      "Teachers have unusual access to good pension help: free government guidance built around your exact scheme, union services included in membership, and regulated advisers who specialise in the TPS. Here is what each tier offers, what it costs, and when to escalate.",
    keyTakeaways: [
      "Start free: MoneyHelper and Pension Wise give government-backed guidance at no cost.",
      "Guidance explains options; only regulated advice recommends a specific course of action for you.",
      "NEU and NASUWT members have pension services included in subscription — most members never use them.",
      "TPS-specialist advisers exist and earn their fees around retirement decisions, annual allowance and McCloud elections.",
      "Any suggestion to transfer out of the TPS is a scam red flag until proven otherwise — check ScamSmart.",
    ],
    blocks: [
      { kind: "h2", text: "Guidance versus advice: the line that matters" },
      { kind: "p", text: "**Guidance** explains how the scheme works and what your options are. **Advice** recommends a specific action for your circumstances and carries regulatory protection — if the advice is wrong, you have recourse. The TPS questions that need genuine advice are concentrated in a handful of decisions: retirement timing, the lump sum election, McCloud elections, annual allowance management for senior leaders, and transfers." },

      { kind: "h2", text: "Free help: start here before paying anyone" },
      { kind: "table", caption: "Free pension help for teachers", head: ["Service", "What it does", "Best for"], rows: [
        ["MoneyHelper", "Government-backed guidance on pensions generally and the TPS specifically", "Understanding your options"],
        ["Pension Wise", "Pre-booked appointments for over-50s approaching access", "The retirement decision itself"],
        ["Teachers' Pensions", "Scheme facts, benefit statements, formal retirement estimates", "Your exact accrued figures"],
        ["Your union's pension service", "Member casework and scheme expertise", "Employer disputes, remedy questions"],
      ]},
      { kind: "p", text: "A Pension Wise appointment at 50-plus is free, 45-60 minutes, and specifically covers how to access defined-benefit pensions like yours. Teachers consistently rate it the highest-value free hour in the process." },

      { kind: "h2", text: "Union pension services" },
      { kind: "p", text: "NEU and NASUWT both operate pension member services with genuine TPS depth, included in subscription. They are particularly strong on the McCloud remedy — where members' remedy elections interact with final salary protections — and on employer-level disputes such as academy transitions out of the scheme. If you are in a union and have not used the pension desk, you are paying for it and leaving it unused." },

      { kind: "h2", text: "When to pay for a regulated adviser" },
      { kind: "p", text: "Four situations reliably justify adviser fees, which typically run £150-£300 per hour or a fixed project fee:" },
      { kind: "ul", items: [
        "**Retirement timing with mixed service** — final salary sections at 60/65 plus CARE at State Pension age create per-section optimisation problems that guidance cannot resolve.",
        "**Annual allowance problems** — senior leaders on the [leadership pay scale](/leadership-pay-scale/) with long service can breach the allowance without any action of their own, triggering tax charges that carry-forward can mitigate.",
        "**The lump sum decision at scale** — commutation on a large pension is an irreversible six-figure decision; the [lump sum maths](/teacher-pension-lump-sum/) is simple but the personal tax position is not.",
        "**Ill-health or divorce** — pension sharing on divorce and ill-health retirement both have specialist mechanics worth expert handling.",
      ]},
      { kind: "callout", tone: "tip", title: "Find a TPS-specialist, not a generalist", text: "Advisers who work regularly with teachers know the McCloud elections, the tier cliffs and the statement quirks. Search for chartered advisers advertising education-sector specialisms, check the FCA register, and expect them to ask for your benefit statement before quoting." },

      { kind: "h2", text: "The scam filter" },
      { kind: "p", text: "Teacher pension scams follow a script: cold contact, a free pension review, pressure toward transferring your guaranteed pension into an invested or overseas scheme, and urgency. The FCA's rules now require pension transfer advice to come from suitably qualified specialists precisely because of this pattern. Red flags:" },
      { kind: "ul", items: [
        "Unsolicited contact about your teachers' pension",
        "Claims that 'loopholes' can release your pension before 55",
        "Pressure to decide quickly, or offers to fill the paperwork for you",
        "Advisers not on the FCA register, or firms you cannot find on ScamSmart",
      ]},

      { kind: "h2", text: "A sensible escalation path" },
      { kind: "ol", items: [
        "Read the [scheme guide](/teacher-pension/) so you can judge the advice you receive.",
        "Get your **benefit statement** and a **formal retirement estimate** from Teachers' Pensions.",
        "Book **Pension Wise** if you are over 50 — free, specific, no sales.",
        "Use your **union pension service** for remedy and employer questions.",
        "Escalate to a **TPS-specialist regulated adviser** for the four decision types above.",
      ]},
    ],
    faq: [
      { question: "Where can teachers get free pension advice?", answer: "MoneyHelper provides free government-backed pension guidance, Pension Wise offers free appointments for over-50s approaching retirement, and Teachers' Pensions provides scheme facts and formal estimates. Union members also have pension services included in subscription." },
      { question: "Do teachers need a financial adviser for their pension?", answer: "Not for understanding the scheme — free guidance covers that. Paid advice earns its fee on specific decisions: mixed-service retirement timing, annual allowance tax management for senior leaders, large lump sum elections, divorce, and ill-health retirement." },
      { question: "How much does pension advice cost for teachers?", answer: "Typically £150-£300 per hour or a fixed project fee of £1,000-£3,000 for a full retirement plan. TPS-specialist advisers are worth the premium around remedy elections and per-section retirement maths." },
      { question: "What is Pension Wise and can teachers use it?", answer: "A free government guidance service for people over 50 with defined-benefit or defined-contribution pensions, including the TPS. Book a 45-60 minute appointment to walk through access options, tax and the choices ahead." },
      { question: "How do I check a pension adviser is legitimate?", answer: "Check the FCA register for the individual and firm, confirm pension transfer qualifications (G60, or the current equivalent), and cross-check the firm against the FCA ScamSmart warning list. Never proceed with unsolicited contact or pressure tactics." },
      { question: "Should I transfer out of the teachers' pension?", answer: "Almost never. Transfers out of guaranteed public-sector schemes are the classic scam target, and the TPS's employer contribution and index-linked guarantee are nearly impossible to replicate. Any transfer recommendation requires specialist regulated advice and a cooling-off process." },
    ],
    sources: [
      { label: "MoneyHelper — free pension guidance", url: "https://www.moneyhelper.org.uk/en/pensions-and-retirement" },
      { label: "Pension Wise — free appointments for over-50s", url: "https://www.moneyhelper.org.uk/en/pensions-and-retirement/pension-wise" },
      { label: "FCA register — check an adviser", url: "https://register.fca.org.uk/" },
      { label: "FCA ScamSmart", url: "https://www.fca.org.uk/scamsmart" },
    ],
    updated: UPDATED,
  },

  {
    slug: "care-vs-final-salary-pension",
    hub: "pensions",
    title: "CARE vs Final Salary Teachers' Pension",
    metaTitle: "CARE vs Final Salary: Teachers' Pension Schemes",
    metaDescription:
      "The Teachers' Pension's two systems compared: 1/57th CARE accrual against 1/80th and 1/60th final salary, who is in which, and how McCloud reshaped it.",
    primaryKeyword: "teachers pension final salary or career average",
    secondaryKeywords: [
      "care vs final salary", "teachers pension care scheme",
      "final salary teachers pension", "tps 2015 scheme",
      "teachers pension 1/57th", "teachers pension 1/80th",
      "mccloud remedy teachers pension", "career average teachers pension",
    ],
    calculator: "pension-care",
    intro:
      "The Teachers' Pension runs two systems side by side: the pre-2015 final salary sections and the career-average (CARE) scheme that replaced them. Most experienced teachers hold both, joined by the McCloud remedy. Here is how each accrues, who holds what, and which years pay best.",
    keyTakeaways: [
      "CARE builds 1/57th of each year's pay; final salary built 1/80th (with 3x lump sum) or 1/60th of final salary.",
      "Final salary value depends on your leaving salary; CARE value is locked in year by year with no final-salary risk.",
      "The McCloud remedy moved most members' 2015-2022 service back to final salary, with CARE from 2022.",
      "At retirement, members with a remedy choice pick whichever treatment pays more — usually final salary for the protected years.",
      "CARE's 1/57th is a faster headline accrual than 1/80th, but final salary had the automatic lump sum and lower NPA.",
    ],
    blocks: [
      { kind: "h2", text: "The two accrual systems" },
      { kind: "table", caption: "How each system builds pension", head: ["Feature", "NPA-60 final salary", "2007 final salary", "CARE (2015+)"], rows: [
        ["Accrual", "1/80th of final salary per year", "1/60th of final salary per year", "1/57th of each year's pay"],
        ["Lump sum", "Automatic 3x pension", "None automatic", "Optional via commutation"],
        ["NPA", "60", "65", "State Pension age"],
        ["Revaluation", "Post-retirement CPI (in payment)", "Post-retirement CPI", "CPI + 1.6% while active"],
        ["Value driver", "Your final average salary", "Your final average salary", "Each year's actual pay"],
      ]},
      { kind: "p", text: "The headline accrual comparison flatters CARE — 1/57th builds faster per year than 1/80th — but the final salary sections carried two structural gifts: the automatic lump sum and, for NPA-60 members, retirement five to seven years earlier without reduction." },

      { kind: "h2", text: "A worked comparison on the same salary" },
      { kind: "p", text: "Take a teacher whose final average salary is £46,939 (M6), comparing what **one year** of service buys under each system:" },
      { kind: "table", caption: "One year of service on a £46,939 final salary", head: ["System", "Pension built", "Lump sum", "Payable from"], rows: [
        ["NPA-60 final salary", "£587/yr", "£1,760 automatic", "60"],
        ["2007 final salary", "£782/yr", "—", "65"],
        ["CARE", "£823/yr (that year's pay)", "Via commutation only", "State Pension age"],
      ]},
      { kind: "callout", tone: "info", title: "The CARE figure uses that year's pay", text: "Final salary accrual is measured against your leaving salary; CARE against each year's actual pay. Early-career CARE years on M1-M2 pay build smaller slices than the same years would have under final salary — the reverse of the final-salary windfall enjoyed by anyone promoted late." },

      { kind: "h2", text: "Who holds what after McCloud" },
      { kind: "p", text: "The 2015 transition moved nearly everyone to CARE, which the Courts later ruled age-discriminatory — younger members moved while older members kept final salary protections. The **McCloud remedy** (implemented from October 2023) restored fairness by moving most members' 2015-2022 service back into their final salary scheme, with CARE resuming from 1 April 2022." },
      { kind: "p", text: "For affected members — broadly everyone in service at the transition — the remedy created a **choice at retirement**: calculate the 2015-2022 period under legacy final salary rules or under CARE, and take whichever pays more. The scheme applies the choice automatically in your favour when the figures are run." },
      { kind: "table", caption: "Who is in what, after the remedy", head: ["Member group", "2015-2022 service", "Post-2022 service"], rows: [
        ["In service before 2012", "Final salary (remedy applies)", "CARE"],
        ["Joined 2012-2014", "Final salary (remedy applies)", "CARE"],
        ["Joined from April 2015", "CARE (never in legacy)", "CARE"],
        ["Joined after April 2022", "—", "CARE only"],
      ]},

      { kind: "h2", text: "The practical differences that matter at retirement" },
      { kind: "ul", items: [
        "**Two retirement dates** — final salary sections can pay unreduced at 60 or 65 while CARE waits for State Pension age. Mixed-service members often phase: legacy section at 60, CARE later.",
        "**Two lump sum positions** — the automatic 3x applies only to NPA-60 service; CARE cash comes only from commutation.",
        "**Two reduction tables** — early payment reduces each section against its own NPA, so the blended cost of retiring at 60 is a mix.",
        "**One statement, two currencies** — your benefit statement shows each section separately. Always read them separately before any [retirement decision](/teacher-early-retirement/).",
      ]},

      { kind: "h2", text: "Which years were your best buy?" },
      { kind: "p", text: "Counter-intuitively, the most valuable years of a modern teacher's career are often the **last final salary years** — 2015-2022 for remedy members — because they convert a high late-career salary into a permanent pension with the automatic lump sum attached. CARE years buy full value too, but without the legacy sweeteners. This is why the remedy choice usually favours final salary treatment for protected members, and why the [pension age structure](/teacher-pension-age/) matters more for mixed-service members than for pure-CARE joiners." },

      { kind: "h2", text: "Checking your own position" },
      { kind: "ol", items: [
        "Your **benefit statement** separates final salary and CARE sections — read each on its own terms.",
        "Ask Teachers' Pensions for a **remedy statement** showing your 2015-2022 position under both calculations.",
        "For retirement estimates, request figures **per section** — blended numbers hide the phasing options.",
        "Model the CARE side with the [teachers' pension calculator](/teacher-pension-calculator/); use scheme estimates for the legacy sections.",
      ]},
    ],
    faq: [
      { question: "Is the teachers' pension final salary or career average?", answer: "Both, by period. Service from 2015 is career average (1/57th of each year's pay). Service before 2015 remains final salary — 1/80th with a 3x lump sum for the NPA-60 section, 1/60th for the 2007 section. After the McCloud remedy, most members' 2015-2022 service sits back in final salary." },
      { question: "What is the McCloud remedy in the teachers' pension?", answer: "The correction for age discrimination in the 2015 transition. Most members' 2015-2022 service was moved back to their final salary scheme, with CARE from 2022. At retirement, affected members receive the more valuable calculation of the two for the protected period." },
      { question: "Which is better, CARE or final salary?", answer: "Neither dominates. CARE builds faster per year (1/57th vs 1/80th) with no final-salary risk; final salary offered the automatic lump sum, lower NPA and a windfall for late promotions. For remedy members the scheme simply pays whichever calculation of 2015-2022 is worth more." },
      { question: "How does the teachers' pension 1/57th work?", answer: "Each year you build 1/57th of that year's pensionable pay as annual pension. On £46,939 (M6) that is £823 a year, revalued annually by CPI plus 1.6% while in service, paid for life from Normal Pension Age." },
      { question: "Do I still get a lump sum with the teachers' pension?", answer: "An automatic lump sum of 3x pension applies only to NPA-60 final salary service. CARE benefits have no automatic lump sum, but you can commute up to roughly 5.36x annual pension into tax-free cash at 12:1." },
      { question: "Why is my teachers' pension statement split into sections?", answer: "Because you hold benefits under different scheme rules with different NPAs, accrual rates and lump sum treatment. Each section pays on its own terms, so retirement planning needs the sections read separately — blended totals hide the phasing options." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  {
    slug: "teacher-pension-salary-sacrifice",
    hub: "pensions",
    title: "Is the Teachers' Pension Salary Sacrifice?",
    metaTitle: "Is the Teachers' Pension Salary Sacrifice? No — Here's Why",
    metaDescription:
      "The TPS is a net-pay arrangement, not salary sacrifice. What that means for your tax and National Insurance, what you save, and where salary sacrifice does exist.",
    primaryKeyword: "is teacher pension salary sacrifice",
    secondaryKeywords: [
      "teachers pension salary sacrifice", "teacher pension net pay arrangement",
      "teacher pension national insurance", "tps salary sacrifice",
      "teachers pension tax relief", "teacher pension ni savings",
    ],
    calculator: "none",
    intro:
      "No — the Teachers' Pension uses a net-pay arrangement. Your contributions save you income tax, but National Insurance is charged on your full gross pay. The difference is worth roughly £200-£360 a year to a typical teacher, and here is exactly why.",
    keyTakeaways: [
      "Net pay: contributions come out before income tax but National Insurance applies to gross pay.",
      "Salary sacrifice would save NI too — worth about 8% of the contribution at current rates.",
      "For an M4 teacher paying £3,521 a year, forgone NI relief is roughly £282 a year.",
      "The TPS cannot be salary sacrifice because it is statutory, not a contractual benefit.",
      "Real salary sacrifice exists for AVCs at some employers, plus cycle and childcare schemes.",
    ],
    blocks: [
      { kind: "h2", text: "The two arrangements, in one table" },
      { kind: "table", caption: "Net pay versus salary sacrifice", head: ["", "Net pay (the TPS)", "Salary sacrifice"], rows: [
        ["Income tax saved", "Yes — contributions deducted before tax", "Yes — pay reduced before tax"],
        ["National Insurance saved", "No — NI charged on gross pay", "Yes — NI charged on reduced pay"],
        ["How it works", "Scheme deducts contributions, then tax is calculated", "You contractually exchange salary for benefit"],
        ["Affects NI-based benefits", "No", "Can reduce State Pension and statutory payments"],
      ]},

      { kind: "h2", text: "What the difference costs you" },
      { kind: "p", text: "Under salary sacrifice, the money going into your pension would not have been taxed for National Insurance either. Employee NI is 8% between £12,570 and £50,270, then 2% above. The forgone saving on your TPS contributions:" },
      { kind: "table", caption: "Annual NI relief forgone by the net-pay arrangement (2026/27)", head: ["Pay point", "Your contribution", "NI you pay on it", "If it were salary sacrifice"], rows: [
        ["M1 (£34,068)", "£2,521", "£202", "£2,319"],
        ["M4 (£40,940)", "£3,521", "£282", "£3,239"],
        ["M6 (£46,939)", "£4,506", "£360", "£4,146"],
        ["U3 (£52,835)", "£5,072", "£357", "£4,715"],
      ]},
      { kind: "p", text: "Note the U3 figure falls slightly despite the bigger contribution: pay above the £50,270 upper earnings limit only attracts 2% NI, so each pound above that line costs just 2p in NI. The [take-home pay breakdown](/teacher-take-home-pay/) shows the full deduction stack." },

      { kind: "h2", text: "Why the TPS cannot be salary sacrifice" },
      { kind: "p", text: "Salary sacrifice requires you to contractually give up salary in exchange for a benefit. The Teachers' Pension is a **statutory scheme**: membership and contributions are set by regulations, not by your contract. Your employer cannot restructure your pay to convert TPS contributions into sacrifice, and the scheme rules fix the contribution basis. It is not an employer choice — it is how the legislation is built." },

      { kind: "h2", text: "Where teachers DO get salary sacrifice" },
      { kind: "ul", items: [
        "**Cycle to work schemes** — common in schools, saves NI on the rental cost.",
        "**Childcare via salary sacrifice** — largely replaced by the tax-free childcare scheme, but legacy arrangements persist.",
        "**Additional salary sacrifice AVCs** — some trusts and local authorities offer AVC arrangements structured as sacrifice, which DO save NI on the voluntary contributions. Check with payroll; the [AVC guide](/teacher-avc-calculator/) covers the mechanics.",
        "**Electric vehicle schemes** — increasingly offered by multi-academy trusts, with substantial NI savings on lease costs.",
      ]},
      { kind: "callout", tone: "tip", title: "The one worth checking this year", text: "If your trust offers a salary-sacrifice AVC arrangement, the NI saving is free money on money you might contribute anyway. A £200 monthly AVC saves a basic-rate taxpayer £40 income tax and, under sacrifice, another £16 NI per month — £672 a year of combined relief." },

      { kind: "h2", text: "Does net pay affect your State Pension?" },
      { kind: "p", text: "No. Because NI is charged on your full gross pay under net pay, your NI record builds exactly as if the pension did not exist. Under salary sacrifice, reduced gross pay would reduce NI credits and could weaken your State Pension entitlement and statutory payments like SMP. Net pay avoids that trap entirely — one genuine advantage of the arrangement." },

      { kind: "h2", text: "The bottom line" },
      { kind: "p", text: "The TPS gives you full income tax relief on contributions but no National Insurance relief, costing a typical classroom teacher £200-£360 a year versus a hypothetical sacrifice arrangement. It is a design feature of a statutory scheme, not a fault in your employer's payroll — and the [contributions guide](/teacher-pension-contributions/) shows the complete deduction picture." },
    ],
    faq: [
      { question: "Is the teachers' pension salary sacrifice?", answer: "No. The TPS operates a net-pay arrangement: contributions are deducted before income tax is calculated, but National Insurance is charged on your full gross pay. Salary sacrifice would save NI as well, which the statutory scheme does not do." },
      { question: "How much NI could I save if the teachers' pension were salary sacrifice?", answer: "Employee NI is 8% of contributions between £12,570 and £50,270 of pay, then 2% above. An M4 teacher paying £3,521 in contributions forgoes about £282 a year of NI relief; an M6 teacher about £360." },
      { question: "Why doesn't the teachers' pension save National Insurance?", answer: "Because it is a statutory scheme with contributions fixed by regulations, not a contractual benefit. Salary sacrifice requires you to contractually exchange salary for the benefit, which the scheme's legal structure does not permit." },
      { question: "Does paying into the teachers' pension affect my State Pension?", answer: "No — favourably, in fact. Because NI is charged on your full gross pay under net pay, your NI record and State Pension entitlement build exactly as if no pension deduction existed. Salary sacrifice arrangements can weaken NI-based entitlements." },
      { question: "Do teacher AVCs use salary sacrifice?", answer: "The standard Prudential AVC is net-pay like the main scheme, but some trusts and local authorities offer salary-sacrifice AVC arrangements that do save National Insurance. Ask your payroll which structure applies to you." },
      { question: "What salary sacrifice schemes can teachers use?", answer: "Commonly cycle to work, electric vehicle leases, and at some employers salary-sacrifice AVCs. Availability depends on your trust or local authority — payroll can confirm what is offered." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  {
    slug: "lgps-pension-calculator",
    hub: "pensions",
    title: "LGPS Pension Calculator for School Staff",
    metaTitle: "LGPS Pension Calculator: School Support Staff",
    metaDescription:
      "Project your LGPS pension: 1/49th accrual for teaching assistants and school support staff, contribution bands on actual pay, and the 50/50 option.",
    primaryKeyword: "lgps pension calculator",
    secondaryKeywords: [
      "lgps calculator", "local government pension scheme calculator",
      "teaching assistant pension", "lgps school support staff pension",
      "lgps 50/50 calculator", "ta pension calculator",
      "local government pension teachers assistant",
    ],
    calculator: "lgps",
    intro:
      "Teaching assistants, administrators and school support staff are usually in the Local Government Pension Scheme — a CARE scheme like the teachers' one, but building at 1/49th with contributions banded on your actual pay. Enter your figures to project it.",
    keyTakeaways: [
      "LGPS builds 1/49th of pay each year — a faster accrual than the teachers' 1/57th.",
      "Contribution bands run on your ACTUAL pay, so term-time and part-time staff genuinely pay lower rates.",
      "The 50/50 option halves contributions while keeping full death and ill-health cover.",
      "Your local pension fund administers it — there are around 90 separate funds across Great Britain.",
      "The State Pension is the parallel track: LGPS members build it alongside, unlike many teachers' assumptions.",
    ],
    blocks: [
      { kind: "h2", text: "Who this calculator is for" },
      { kind: "p", text: "School support staff — teaching assistants, HLTAs, admin and office staff, technicians, site staff — are typically enrolled in the **Local Government Pension Scheme** rather than the TPS. The LGPS is also a CARE scheme, but with different mechanics that produce meaningfully different outcomes:" },
      { kind: "table", caption: "LGPS versus TPS core mechanics", head: ["Feature", "LGPS", "TPS"], rows: [
        ["Accrual rate", "1/49th of pay per year", "1/57th of pay per year"],
        ["Contribution basis", "Bands on ACTUAL pensionable pay", "Bands on FTE salary"],
        ["Contribution range", "5.5% – 12.5% (2026/27 bands)", "7.4% – 12.7%"],
        ["Cheaper option", "50/50 section: half contributions, half accrual", "None — full rate or opt out"],
        ["Administrator", "≈90 local pension funds", "Teachers' Pensions (single)"],
      ]},

      { kind: "h2", text: "What 1/49th means in practice" },
      { kind: "p", text: "Each year of LGPS membership builds 1/49th of that year's pensionable pay. A teaching assistant earning £20,000 builds **£408 of annual pension per year** — against £351 for the same salary in the TPS. The faster accrual is the LGPS's structural advantage; the trade-off is that support-staff salaries are lower and term-time pro-rating shrinks the pensionable pay base." },
      { kind: "table", caption: "Annual pension built per year, by salary", head: ["Actual pensionable pay", "LGPS (1/49th)", "TPS equivalent (1/57th)"], rows: [
        ["£20,000", "£408", "£351"],
        ["£25,000", "£510", "£439"],
        ["£30,000", "£612", "£526"],
      ]},

      { kind: "h2", text: "The term-time trap" },
      { kind: "callout", tone: "warn", title: "Advertised salary is not your pensionable pay", text: "A TA job advertised at £25,000 FTE is usually paid pro-rated across 52 weeks even though you work 39. If your contract says £18,750 actual pay, that — not the advert figure — is your pensionable pay, and it is what your contribution band and accrual follow. The [teaching assistant salary guide](/teaching-assistant-salary/) works through the pro-rating." },

      { kind: "h2", text: "The 50/50 section" },
      { kind: "p", text: "The LGPS's best feature for lower-paid staff: you can elect to pay **half contributions for half accrual** (1/98th), while keeping the full death-in-service grant and ill-health protection. For a TA struggling through an expensive month, it halves the pension cost without touching the insurance value. You can move in and out of 50/50 freely — it is a payroll election, not a scheme exit." },
      { kind: "table", caption: "2026/27 LGPS contribution bands (England & Wales)", head: ["Actual pay band", "Full rate", "50/50 rate"], rows: [
        ["Up to £17,600", "5.5%", "2.75%"],
        ["£17,601 – £27,600", "5.8%", "2.9%"],
        ["£27,601 – £44,900", "6.5%", "3.25%"],
        ["£44,901 – £56,800", "6.8%", "3.4%"],
        ["£56,801 – £79,700", "8.5%", "4.25%"],
        ["Above £199,500", "12.5%", "6.25%"],
      ]},

      { kind: "h2", text: "Employer contributions: the quiet giant" },
      { kind: "p", text: "LGPS employer rates are set fund by fund by each local pension fund's valuation — commonly 16-23% for school staff. On a £22,000 salary, an employer rate of 19% puts £4,180 a year into your pension against your £1,430. Like the TPS's 28.8%, this is money that makes opting out close to indefensible." },

      { kind: "h2", text: "How a support-staff career projects" },
      { kind: "p", text: "A TA on £22,000 actual pensionable pay with 2% annual growth, working 30 years to 67, with 2% CPI revaluation, projects roughly **£15,000-£16,000 a year** of LGPS pension — before the full State Pension of £11,973 on top. The projection in the calculator above runs your own numbers through the same mechanics, including your accrued-to-date figure from your annual benefit statement." },

      { kind: "h2", text: "Checking and topping up" },
      { kind: "ol", items: [
        "Your **annual benefit statement** comes from your local pension fund, not Teachers' Pensions — find your fund via the LGPS member site.",
        "**Additional Voluntary Contributions** and **Additional Pension Contributions** (buying extra LGPS pension) are both available.",
        "**Back-payment of APCs** for past service is sometimes possible within windows.",
        "Check whether you are in **50/50** by accident — some staff elect it during a tight year and forget to switch back.",
      ]},
      { kind: "callout", tone: "info", title: "Mixed TPS and LGPS service is common", text: "Support staff who later qualify as teachers, or teachers who take TA roles between posts, often hold both schemes. The pensions do not merge — each pays separately from its own Normal Pension Age — but both count towards your overall retirement income picture." },
    ],
    faq: [
      { question: "What pension do teaching assistants get?", answer: "Most are in the LGPS: a CARE scheme building 1/49th of actual pensionable pay each year, with contributions from 5.5% banded on actual pay. A TA on £22,000 builds about £449 of annual pension per year worked, plus the State Pension." },
      { question: "How does the LGPS differ from the teachers' pension?", answer: "It builds faster (1/49th vs 1/57th), contribution bands use actual pay rather than full-time equivalent pay, rates run 5.5%-12.5%, and the 50/50 section halves contributions while keeping full death and ill-health cover." },
      { question: "What is the LGPS 50/50 section?", answer: "An election to pay half contributions in exchange for half accrual (1/98th), while keeping the full death-in-service grant and ill-health protection. You can switch in and out freely — useful for tight months without leaving the scheme." },
      { question: "Why is my pension based on less than my advertised salary?", answer: "Term-time contracts pro-rate the FTE salary across 52 weeks. A £25,000 FTE TA role typically pays about £18,750 actual, and that actual figure is your pensionable pay for both contributions and accrual." },
      { question: "Which pension fund am I in?", answer: "Your local authority's pension fund administers your LGPS membership — there are around 90 funds across Great Britain. Your payslip or employer HR can confirm the fund; statements come from the fund directly." },
      { question: "Can I have both LGPS and teachers' pension?", answer: "Yes, commonly — support staff who qualify as teachers, or teachers working TA hours, accrue in both. The pensions remain separate and pay from their own Normal Pension Ages, but both count towards your total retirement income." },
    ],
    sources: [
      { label: "LGPS member site — scheme guides and fund finder", url: "https://www.lgpsmember.org/" },
      { label: "LGPS 2026/27 contribution bands", url: "https://www.lgpsmember.org/members/paying.php" },
      { label: "MoneyHelper — Local Government Pension Scheme", url: "https://www.moneyhelper.org.uk/en/pensions-and-retirement" },
    ],
    updated: UPDATED,
  },

  {
    slug: "teacher-tax-calculator",
    hub: "calculator",
    title: "Teacher Tax Calculator and Tax Codes",
    metaTitle: "Teacher Tax Calculator 2026/27 — Tax Codes Explained",
    metaDescription:
      "Work out the income tax on a teacher's salary and understand your tax code. What 1257L, BR, D0 and K codes mean, and how to fix a wrong code with HMRC.",
    primaryKeyword: "teacher tax calculator",
    secondaryKeywords: [
      "teacher income tax", "teacher tax code", "teachers tax calculator uk",
      "teacher pay after tax", "1257l tax code teacher",
      "how much tax do teachers pay", "teacher income tax calculator",
      "teacher tax code explained", "teacher salary after tax calculator",
    ],
    calculator: "take-home",
    intro:
      "Income tax is usually the largest single deduction on a teacher's payslip, and it is the one most often wrong. This page explains exactly how your tax is calculated, what your tax code means, and what to do when the code is not right.",
    keyTakeaways: [
      "Income tax is charged on your salary after the pension contribution has been deducted, not on gross pay.",
      "The standard code 1257L gives you the full £12,570 personal allowance spread evenly across the year.",
      "A wrong tax code is common after changing schools, taking a second job or finishing supply work.",
      "A BR code on your main job costs an M3 teacher about £209 a month.",
      "Above £100,000 the personal allowance tapers away, creating an effective 60% marginal rate.",
    ],
    blocks: [
      { kind: "h2", text: "How a teacher's income tax is actually calculated" },
      { kind: "p", text: "There is a specific order, and the pension step is the one people miss. Income tax is not charged on your headline salary." },
      { kind: "ol", items: [
        "**Start with gross pay** — your pay point plus any TLR or SEN allowance.",
        "**Deduct your pension contribution** — this is why the pension gives full tax relief automatically.",
        "**Deduct your personal allowance** — normally £12,570, indicated by the 1257L code.",
        "**Apply the tax bands** to whatever is left.",
      ]},
      { kind: "table", caption: "Worked example: M3, rest of England, 2026/27", head: ["Step", "Working", "Amount"], rows: [
        ["Gross salary", "STPCD M3", "£38,400.00"],
        ["Less pension", "£38,400 × 8.6%", "−£3,302.40"],
        ["Less personal allowance", "1257L", "−£12,570.00"],
        ["Taxable income", "", "£22,527.60"],
        ["Income tax", "£22,527.60 × 20%", "£4,505.52"],
      ]},
      { kind: "p", text: "National Insurance follows a completely different rule — it is charged on the full £38,400 with no pension deduction. That difference is explained in full on the [salary sacrifice page](/teacher-pension-salary-sacrifice/)." },

      { kind: "h2", text: "Income tax bands for 2026/27" },
      { kind: "p", text: "England, Wales and Northern Ireland share one set of bands. Scotland sets its own." },
      { kind: "table", caption: "Income tax bands, England, Wales and Northern Ireland", head: ["Band", "Taxable income above allowance", "Rate"], rows: [
        ["Basic rate", "First £37,700", "20%"],
        ["Higher rate", "£37,701 to £112,570", "40%"],
        ["Additional rate", "Above £112,570", "45%"],
      ]},
      { kind: "p", text: "Almost all classroom teachers stay entirely within the basic rate band. A scheme member would need a gross salary of roughly £56,000 before any income reached the 40% rate, once the pension deduction is taken into account. Leadership salaries do cross it — see the [leadership pay scale](/leadership-pay-scale/)." },
      { kind: "p", text: "If you live in Scotland, six bands apply instead of three and the higher rate starts lower. Those figures and what they cost a teacher are set out in the [Scottish teachers' pension and tax guide](/teacher-pension-scotland/). For the resulting net figures at every pay point, see [teacher take-home pay](/teacher-take-home-pay/)." },

      { kind: "h2", text: "What your tax code means" },
      { kind: "p", text: "Your tax code tells your school's payroll how much tax-free pay to give you. The number is your annual allowance divided by ten; the letter describes your situation." },
      { kind: "table", caption: "Tax codes teachers commonly see", head: ["Code", "Meaning", "When you see it"], rows: [
        ["1257L", "Full £12,570 personal allowance", "The standard code for most teachers"],
        ["BR", "All income taxed at basic rate, no allowance", "Second job, or a new job before HMRC has your details"],
        ["D0", "All income taxed at higher rate", "A second job where the main job uses the higher band"],
        ["0T", "No allowance, bands applied normally", "New starter with no P45"],
        ["K___", "Negative allowance added to taxable pay", "Untaxed income or unpaid tax from a previous year"],
        ["1257L W1/M1", "Emergency code, each period taxed in isolation", "Recently started, awaiting full record"],
        ["S1257L", "Scottish rates apply", "You live in Scotland"],
        ["C1257L", "Welsh rates apply", "You live in Wales"],
      ]},
      { kind: "callout", tone: "info", title: "The S and C prefixes follow where you live", text: "Your tax code prefix depends on your home address, not the school's location. A teacher living in Scotland but working in England still pays Scottish income tax rates." },

      { kind: "h2", text: "What a wrong code actually costs" },
      { kind: "p", text: "This is why it is worth checking. The table shows the same M3 teacher on £38,400 under four different codes." },
      { kind: "table", caption: "Effect of tax code on monthly take-home, M3 £38,400 (calculated)", head: ["Tax code", "Taxable income", "Annual tax", "Monthly take-home"], rows: [
        ["1257L (correct)", "£22,528", "£4,506", "£2,377"],
        ["1185L", "£23,248", "£4,650", "£2,365"],
        ["BR", "£35,098", "£7,020", "£2,168"],
        ["K475", "£39,848", "£7,970", "£2,088"],
      ]},
      { kind: "p", text: "A BR code applied to a main teaching job costs about £209 a month. A K code can cost considerably more. Neither is necessarily an error — a K code often reflects genuinely owed tax — but both are worth understanding rather than ignoring." },

      { kind: "h2", text: "Why teachers get the wrong code" },
      { kind: "ul", items: [
        "**Changing schools mid-year** without the new employer receiving your P45 promptly.",
        "**Supply work alongside a permanent post**, where the second income gets a BR code.",
        "**Finishing supply and starting permanent work**, leaving HMRC with a stale picture.",
        "**Multiple agencies** during a supply period, each treated as a separate employment.",
        "**An estimated underpayment** from a previous year being collected through the code.",
        "**Taxable benefits** such as a school-provided car or health cover.",
      ]},
      { kind: "callout", tone: "warn", title: "Two jobs does not mean two allowances", text: "Your personal allowance is a single annual amount, not one per employment. If you teach and also examine, tutor or do supply, one employment gets the allowance and the other is normally taxed at BR. That is usually correct rather than a mistake." },

      { kind: "h2", text: "How to check and fix your code" },
      { kind: "ol", items: [
        "**Find your code** on your payslip, P60 or the HMRC app.",
        "**Check your Personal Tax Account** on GOV.UK, which shows how HMRC has built up the code.",
        "**Look at the employments listed.** Old supply agencies still showing as live is a common cause of a wrong code.",
        "**Confirm no phantom benefits** are included.",
        "**Report the change to HMRC** through your Personal Tax Account or by phone.",
        "**Wait for the coding notice.** HMRC issues a P2 to you and updates your school's payroll directly.",
      ]},
      { kind: "callout", tone: "tip", title: "Overpaid tax comes back automatically", text: "If your code is corrected within the same tax year, the refund normally arrives through payroll in the next pay run. If the year has ended, HMRC reconciles it afterwards and issues a P800. You do not usually need to claim." },

      { kind: "h2", text: "The 60% trap above £100,000" },
      { kind: "p", text: "Above £100,000 of adjusted net income your personal allowance is withdrawn at £1 for every £2 earned. Combined with 40% tax on the income itself, the effective marginal rate between £100,000 and £125,140 is 60%." },
      { kind: "table", caption: "Personal allowance taper (calculated)", head: ["Adjusted net income", "Personal allowance"], rows: [
        ["£100,000", "£12,570"],
        ["£110,000", "£7,570"],
        ["£120,000", "£2,570"],
        ["£125,140 and above", "£0"],
      ]},
      { kind: "p", text: "This affects only senior leaders in large schools and trusts. Where it does apply, additional pension contributions are one of the few ways to bring adjusted net income back below the threshold — but annual allowance limits then come into play, which is exactly the kind of decision worth taking [regulated advice](/teacher-pension-advice/) on." },

      { kind: "h2", text: "What teachers can claim tax relief on" },
      { kind: "p", text: "Tax relief on work expenses is narrower than staffroom rumour suggests, but a few genuine categories exist." },
      { kind: "ul", items: [
        "**Professional subscriptions** to bodies on HMRC's approved list, including most teaching unions in part.",
        "**Specialist clothing** where it is genuinely protective, such as lab coats or PE kit required by the school.",
        "**Mileage between school sites**, though not your ordinary commute.",
        "**Equipment you were required to buy** and were not reimbursed for.",
      ]},
      { kind: "callout", tone: "warn", title: "Beware refund agents", text: "Firms offering to reclaim teacher tax for a percentage typically claim things you could claim yourself free through your Personal Tax Account, and some make claims you cannot substantiate. You remain liable for anything wrongly claimed in your name." },
    ],
    faq: [
      { question: "What tax code should a teacher be on?", answer: "Most teachers should be on 1257L, giving the full £12,570 personal allowance. If you live in Scotland it will be S1257L and if you live in Wales C1257L. Different codes are not automatically wrong, but they are worth checking, particularly BR, 0T or any K code on your main teaching job." },
      { question: "How much income tax does a teacher pay?", answer: "A teacher on M3 earning £38,400 pays about £4,506 a year in income tax, after the pension contribution and personal allowance are deducted. On M1 at £34,068 it is roughly £3,795, and on U3 at £52,835 around £7,039. All assume the standard 1257L code and scheme membership." },
      { question: "Is teacher pension deducted before tax?", answer: "Yes. The pension contribution comes out of gross pay before income tax is calculated, so you get full relief at your marginal rate with nothing to claim. National Insurance works differently and is charged on your full gross pay." },
      { question: "Why is my tax code BR?", answer: "BR means all income from that employment is taxed at the basic rate with no personal allowance. It is correct for a second job where your allowance is already used by your main post. If BR is on your main teaching job it is usually wrong, and typically happens when a new employer has not received your P45." },
      { question: "What does a K tax code mean for a teacher?", answer: "A K code means your deductions exceed your personal allowance, so an amount is added to your taxable pay rather than subtracted. It usually reflects unpaid tax from a previous year or a taxable benefit. Check your Personal Tax Account to see what HMRC has included." },
      { question: "How do I change my tax code?", answer: "Contact HMRC through your Personal Tax Account on GOV.UK, the HMRC app, or by phone. Your school's payroll cannot change your code on request — they must apply whatever HMRC issues. Once corrected, HMRC updates payroll directly and any overpayment is normally refunded through your next pay run." },
      { question: "Do teachers pay tax on their pension contributions?", answer: "No. Contributions to the Teachers' Pension Scheme are deducted from gross pay before income tax, so you receive relief at your marginal rate automatically. You do pay National Insurance on that money, because the scheme is a net-pay arrangement rather than salary sacrifice." },
      { question: "Can teachers claim tax relief on union fees?", answer: "Partly. HMRC allows relief on the proportion of a professional subscription that relates to approved professional activity, for bodies on its approved list. Most teaching unions qualify in part. You can claim through your Personal Tax Account without paying an agent." },
    ],
    sources: TAX_SOURCES,
    updated: UPDATED,
  },
  {
    slug: "teacher-pay-rise-calculator",
    hub: "calculator",
    title: "Teacher Pay Rise Calculator",
    metaTitle: "Teacher Pay Rise Calculator — What a Pay Award Is Worth",
    metaDescription:
      "What a teacher pay award really adds to your take-home pay. Headline percentage versus net gain, pension tier effects and multi-year projections.",
    primaryKeyword: "teacher pay rise calculator",
    secondaryKeywords: [
      "teacher pay increase calculator", "what is my pay rise worth teacher",
      "teacher pay award calculator", "teacher salary increase calculator",
      "how much is a 3 percent raise teacher", "teacher pay rise net calculator",
      "pay award calculator", "teacher salary rise calculator",
    ],
    calculator: "pay-rise",
    intro:
      "A 3.5% pay award does not put 3.5% more in your bank account. Tax, National Insurance and pension all scale up with it, and if the rise pushes you over a pension tier boundary you can keep less than 40% of it. This page shows what an award is really worth.",
    keyTakeaways: [
      "Most teachers keep roughly 60% to 70% of a headline pay award after deductions.",
      "Crossing a pension tier boundary can cut that to under 40%, because the higher rate applies to your whole salary.",
      "An M1 teacher keeps just £449 of a £1,192 gross rise for exactly that reason.",
      "Pay awards apply from 1 September, not from the April tax year start.",
      "Scale progression stacks on top of the award, so early-career teachers see much larger real increases.",
    ],
    blocks: [
      { kind: "h2", text: "Why you never receive the headline percentage" },
      { kind: "p", text: "When a 3.5% award is announced, that 3.5% applies to your gross salary. Every deduction is a percentage of that same gross figure, so they all rise too." },
      { kind: "ul", items: [
        "**Income tax** takes 20% of the increase, or 40% if it crosses the higher-rate threshold.",
        "**National Insurance** takes 8% of it, or 2% above the upper earnings limit.",
        "**Pension** takes your tier rate, between 7.4% and 12.7%.",
      ]},
      { kind: "p", text: "For a basic-rate taxpayer in the 8.6% pension tier, that is roughly 36.6% of the increase gone before it reaches you — leaving about 63%." },
      { kind: "callout", tone: "info", title: "The pension share is not lost", text: "The portion going into your pension is not a deduction in the way tax is. It buys additional guaranteed retirement income, and your employer adds 28.8% on top. It reduces your take-home but it increases your total remuneration." },

      { kind: "h2", text: "What the 2026/27 award is actually worth" },
      { kind: "p", text: "The 2026/27 STPCD applied a 3.5% uplift from 1 September 2026. Here is what that meant in cash at four pay points." },
      { kind: "table", caption: "3.5% award: headline versus net gain, rest of England (calculated)", head: ["Point", "Old salary", "New salary", "Gross rise", "Net rise", "Kept", "Net per month"], rows: [
        ["M1", "£34,068", "£35,260", "£1,192", "£449", "38%", "£37"],
        ["M4", "£40,940", "£42,373", "£1,433", "£933", "65%", "£78"],
        ["M6", "£46,939", "£48,582", "£1,643", "£1,057", "64%", "£88"],
        ["U3", "£52,835", "£54,684", "£1,849", "£1,300", "70%", "£108"],
      ]},
      { kind: "callout", tone: "warn", title: "Why M1 keeps only 38%", text: "The 3.5% rise takes M1 from £34,068 to £35,260, crossing the pension tier boundary at £34,289. The contribution rate jumps from 7.4% to 8.6% — and the higher rate applies to the entire salary, not just the part above the threshold. The pension deduction rises by £511 on a £1,192 rise." },

      { kind: "h2", text: "The pension tier cliff edge" },
      { kind: "p", text: "This is the most important and least understood effect in teacher pay. The contribution tiers are not marginal bands like income tax. When you cross a boundary, the new higher percentage applies to your whole salary." },
      { kind: "table", caption: "Where the tier boundaries sit, 2026/27", head: ["Tier boundary", "Rate below", "Rate above", "Extra cost of crossing"], rows: [
        ["£34,289", "7.4%", "8.6%", "1.2% of your entire salary"],
        ["£46,158", "8.6%", "9.6%", "1.0% of your entire salary"],
        ["£54,729", "9.6%", "10.2%", "0.6% of your entire salary"],
        ["£72,534", "10.2%", "11.7%", "1.5% of your entire salary"],
        ["£98,908", "11.7%", "12.7%", "1.0% of your entire salary"],
      ]},
      { kind: "p", text: "The tier is assessed on your full-time equivalent salary, so part-time teachers cross boundaries at the same FTE points as full-timers even though their actual pay is lower. That mechanism is explained in the [part-time pay calculator](/part-time-teacher-pay-calculator/) and the [contributions guide](/teacher-pension-contributions/)." },

      { kind: "h2", text: "Progression matters more than the award" },
      { kind: "p", text: "For most teachers under about eight years into their career, moving up the pay scale delivers far more than the annual award — and the two stack." },
      { kind: "table", caption: "Award versus progression for an M3 teacher moving to M4 (calculated)", head: ["Component", "Effect on gross salary"], rows: [
        ["Starting point, M3 2025/26 basis", "£37,101"],
        ["3.5% award applied to the scale", "M3 becomes £38,400"],
        ["Progression M3 to M4", "M4 is £40,940"],
        ["Total gross increase", "£3,839"],
        ["Of which from the award", "£1,299"],
        ["Of which from progression", "£2,540"],
      ]},
      { kind: "p", text: "Progression is roughly twice the award in this example. The scale point figures come from the [main pay range guide](/main-pay-range/), and the 2025/26 comparison basis is derived by removing the 3.5% award." },
      { kind: "callout", tone: "tip", title: "Threshold is the biggest single jump", text: "Moving from M6 to U1 is a separate application, not automatic progression. Successfully crossing the threshold moves you from £46,939 to £49,134 — and unlocks the U1 to U3 range beyond it. See the [upper pay range guide](/upper-pay-range/)." },

      { kind: "h2", text: "Multi-year projections" },
      { kind: "p", text: "Future awards are not known in advance. Modelling a range is more useful than assuming one number. These projections start from M3 at £38,400 and hold the pay point constant, so they isolate the award effect." },
      { kind: "table", caption: "Projected gross salary from M3 £38,400 at three award rates (illustrative)", head: ["Annual award", "Year 1", "Year 2", "Year 3", "Year 4"], rows: [
        ["2%", "£38,400", "£39,168", "£39,951", "£40,750"],
        ["3%", "£38,400", "£39,552", "£40,739", "£41,961"],
        ["4%", "£38,400", "£39,936", "£41,533", "£43,195"],
      ]},
      { kind: "p", text: "The gap between a 2% and a 4% settlement compounds to nearly £2,450 of gross salary within four years. Over a full career the difference is substantial, which is why the annual STRB process matters — see [the STRB explained](/strb-pay-review-body/)." },

      { kind: "h2", text: "Timing: September, not April" },
      { kind: "p", text: "Teacher pay awards run with the school year from 1 September. Tax and National Insurance thresholds change on 6 April. Pension tier boundaries are also reviewed on the April cycle." },
      { kind: "p", text: "The practical result is that your September payslip shows the new salary against old thresholds, and your April payslip shows the same salary against new thresholds. Both months can produce an unexpected change in net pay for reasons unrelated to each other." },
      { kind: "callout", tone: "warn", title: "Watch for backdated awards", text: "Pay awards are sometimes confirmed after 1 September and paid as arrears. A backdated lump sum can push a single month's pay into a higher tax band under PAYE. It normally corrects itself over the rest of the year, but the one payslip can look alarming." },

      { kind: "h2", text: "How to sanity-check any percentage rise yourself" },
    { kind: "p", text: "You can approximate the take-home effect of any gross rise with a simple rule of thumb. For a basic-rate taxpayer in the 8.6% pension tier, multiply the gross rise by roughly 0.63 — so a £2,000 gross increase is worth about £1,260 a year or £105 a month in your account." },
    { kind: "ul", items: [
      "**Below £34,289 (7.4% tier):** keep about 64% of the rise.",
      "**£34,290 to £46,158 (8.6% tier):** keep about 63%.",
      "**£46,159 to £54,729 (9.6% tier):** keep about 62%.",
      "**Above £54,730 (10.2%+ tiers) and past the higher-rate threshold:** keep 50% to 60%, falling further as more of the rise lands in the 40% band.",
    ]},
    { kind: "p", text: "The rule of thumb breaks down whenever the rise crosses a tier boundary, which is exactly when you need the calculator most — the boundary effect applies the new rate to your whole salary, not just the extra pounds." },

    { kind: "h2", text: "Common mistakes when working out a pay rise" },
      { kind: "ul", items: [
        "**Multiplying take-home pay by the award percentage.** Deductions do not scale evenly because allowances and thresholds are fixed amounts.",
        "**Missing a pension tier crossing.** This is what turns a 65% retention into 38%.",
        "**Confusing the award with progression.** They are separate and they stack.",
        "**Assuming April.** Teacher awards start in September.",
        "**Comparing gross to gross across regions.** London weighting changes the base entirely — see the [pay scale tables](/teacher-pay-scale/).",
        "**Ignoring the pension gain.** A higher salary also increases the pension you build that year.",
      ]},
      { kind: "p", text: "For the detail of how each award was set and what it covered, see [teacher pay rise 2026/27](/teacher-pay-rise-2026-27/) and the [pay rise pillar guide](/teacher-pay-rise/). To see the full deduction breakdown at your new salary, use the [teacher pay calculator](/teacher-pay-calculator/)." },
    ],
    faq: [
      { question: "How much is a 3% pay rise for a teacher after tax?", answer: "As a rough guide, a basic-rate taxpayer keeps about 63% of it, so a 3% award on a £38,400 salary adds around £1,152 gross and roughly £726 net a year, or about £61 a month. If the rise crosses a pension tier boundary, keep noticeably less." },
    { question: "How much of a teacher pay rise do you actually keep?", answer: "Typically 60% to 70% after income tax, National Insurance and pension. If the rise crosses a pension tier boundary it can drop below 40%. An M1 teacher receiving the 3.5% award keeps only £449 of a £1,192 gross increase, because the rise pushes them into the 8.6% pension tier." },
      { question: "What was the teacher pay rise for 2026/27?", answer: "The 2026/27 STPCD applied a 3.5% uplift to all pay scales from 1 September 2026. In cash that is £1,192 on M1, £1,433 on M4 and £1,849 on U3, before deductions." },
      { question: "Why did my pay rise barely change my take-home pay?", answer: "Most likely you crossed a pension contribution tier boundary. Unlike income tax bands, the tiers are not marginal — when you cross one, the higher percentage applies to your entire salary, not just the amount above the threshold. Crossing the £34,289 boundary costs an extra 1.2% of your whole salary." },
      { question: "When do teacher pay rises take effect?", answer: "From 1 September, in line with the school year. This differs from tax and National Insurance thresholds, which change on 6 April. If an award is confirmed late it is usually backdated and paid as arrears." },
      { question: "Is pay scale progression the same as a pay rise?", answer: "No, and they stack. Progression moves you to the next point on your scale, normally annually subject to performance. The pay award lifts every point on every scale. For early-career teachers progression is usually worth about twice the annual award." },
      { question: "How do I calculate my new salary after a pay award?", answer: "Multiply your current pay point by the award percentage, or take the new figure directly from the updated STPCD tables. To see the take-home effect, enter the new salary in the calculator above — that applies the correct pension tier, which is the step most manual calculations get wrong." },
      { question: "Does a pay rise increase my pension?", answer: "Yes, in two ways. In a career average scheme you build 1/57th of each year's pensionable pay, so a higher salary means a bigger slice banked that year. Your employer also contributes 28.8% of the higher figure. The pension deduction from your take-home is not simply a loss." },
    ],
    sources: TAX_SOURCES,
    updated: UPDATED,
  },
];
