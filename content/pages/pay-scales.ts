import type { PageContent } from "../types";

const UPDATED = "2026-08-23";

const SOURCES = [
  { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
  { label: "STRB — School Teachers' Review Body reports", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
  { label: "HMRC — Rates and thresholds for employers 2026 to 2027", url: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" },
  { label: "Teachers' Pensions — member contribution tiers", url: "https://www.teacherspensions.co.uk/members/working-life/paying-in/contribution-tiers.aspx" },
];

const SOURCES_DEVOLVED = [
  { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
  { label: "SNCT — Scottish Negotiating Committee for Teachers handbook", url: "https://www.snct.org.uk/wiki/index.php?title=Main_Page" },
  { label: "Department of Education Northern Ireland — teachers' pay", url: "https://www.education-ni.gov.uk/articles/teachers-pay-and-conditions-service" },
  { label: "Welsh Government — school teachers' pay and conditions", url: "https://www.gov.wales/school-teachers-pay-and-conditions" },
];

export const payScalePages: PageContent[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. PILLAR
  // ─────────────────────────────────────────────────────────────────────────
  // 1. PILLAR
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-pay-scale",
    isPillar: true,
    hub: "pay-scales",
    title: "Teacher Pay Scale UK: Every 2026/27 Pay Point",
    metaTitle: "Teacher Pay Scale 2026/27: Every UK Pay Point & Region",
    metaDescription:
      "Every UK teacher pay scale point for 2026/27: main, upper and unqualified ranges across England, London, Wales, Scotland and NI, with progression rules.",
    primaryKeyword: "teacher pay scale",
    secondaryKeywords: [
      "teacher pay scales", "teachers pay scale", "teacher pay scale uk",
      "uk teacher pay scale", "teacher pay scale 2026", "teaching pay scales",
      "teacher payscale", "pay scale teachers", "new teacher pay scale",
      "school teacher pay scale", "m6 teacher salary", "teacher salary uk",
      "leadership pay scale",
    ],
    calculator: "pay-scale",
    intro:
      "Every statutory point on the UK teacher pay scale for 2026/27, in one place. These are the STPCD figures that took effect on 1 September 2026 after the 3.5% award, alongside the separate Scottish SNCT scale and Northern Ireland's own ranges. Pick your region below, or run any pay point through the calculator to see take-home pay.",
    keyTakeaways: [
      "The 2026/27 STPCD applied a 3.5% uplift to every pay point from 1 September 2026.",
      "Classroom teacher pay in England runs from £34,068 (M1, rest of England) to £64,683 (U3, inner London).",
      "England has four pay bands: rest of England, London fringe, outer London and inner London — worth up to £7,660 more at M1.",
      "Scotland uses the separate SNCT scale (£34,539 to £48,516 on the main scale) with no upper pay range; Northern Ireland runs lower at £32,188 to £44,342.",
      "Academies can set their own pay scales, but most still track the statutory STPCD points.",
    ],
    blocks: [
      { kind: "h2", text: "How the teacher pay scale is structured" },
      { kind: "p", text: "The teacher pay scale is not one ladder. It is a set of separate ranges, and which one you sit on depends on your qualification status and role rather than your length of service. Most searchers looking up teaching pay scales actually need to find their way to one of five ranges:" },
      { kind: "ul", items: [
        "**Unqualified Teacher Range (UQ1–UQ6)** — for teachers without QTS, including instructors and many trainees on employment-based routes.",
        "**Main Pay Range (M1–M6)** — the standard scale for qualified classroom teachers, normally progressing one point a year.",
        "**Upper Pay Range (U1–U3)** — for qualified teachers who passed through the threshold; three points, slower progression.",
        "**Lead Practitioner Range** — for teachers who stay in the classroom but take on whole-school teaching expertise.",
        "**Leadership Group (L1–L43)** — heads, deputies and assistant heads, on a 43-point spine.",
      ]},
      { kind: "p", text: "Every range has regional versions. England & Wales statutory rates apply outside London, then three London bands sit on top. Scotland and Northern Ireland negotiate entirely separate scales. This guide covers them all; the deep dives are on our pages for the [main pay range](/main-pay-range/), [upper pay range](/upper-pay-range/) and each London band." },

      { kind: "h2", text: "What changed for 2026/27" },
      { kind: "p", text: "The School Teachers' Review Body recommended, and the government accepted, a **3.5% pay award** applied to every point from 1 September 2026. Because the award was percentage-based, the cash value differs sharply by region: an inner London M1 rose far more in pounds than a rest-of-England M1, because the starting base was already higher." },
      { kind: "p", text: "For context across recent years, the pattern has been large awards in 2023 and 2024 followed by smaller ones, so a teacher who started in 2021 has seen their scale point rise materially faster than inflation over some stretches and fall behind over others. Our [teacher pay rise guide](/teacher-pay-rise/) tracks the full history and the arithmetic behind each award." },
      { kind: "callout", tone: "info", title: "Wales currently mirrors the STPCD", text: "Wales negotiates through the Independent Welsh Pay Review Body, but its current recommendation matches the STPCD figures exactly. If that ever diverges, we update the Wales page separately." },

      { kind: "h2", text: "Main Pay Range 2026/27: all regions" },
      { kind: "p", text: "The main pay range is where nearly every qualified teacher starts. Progression is normally automatic, one point per year based on performance management, so most teachers reach M6 within six years." },
      { kind: "table", caption: "Main Pay Range (M1–M6) 2026/27 by region", head: ["Point", "Rest of England", "London Fringe", "Outer London", "Inner London", "Scotland*", "N. Ireland"], rows: [
        ["M1", "£34,068", "£35,602", "£39,195", "£41,728", "£34,539", "£32,188"],
        ["M2", "£36,042", "£37,646", "£41,246", "£43,712", "£36,426", "£34,037"],
        ["M3", "£38,400", "£39,979", "£43,403", "£45,786", "£38,361", "£36,271"],
        ["M4", "£40,940", "£42,513", "£45,672", "£47,961", "£42,336", "£38,669"],
        ["M5", "£43,529", "£45,069", "£48,438", "£50,665", "£45,468", "£41,109"],
        ["M6", "£46,939", "£48,478", "£52,241", "£54,131", "£48,516", "£44,342"],
      ]},
      { kind: "p", text: "*Scotland's points are the nearest SNCT equivalents; the Scottish spine is negotiated separately and has its own structure. A full-time **M6 teacher salary is £46,939** in the rest of England — the figure most people mean by the top of the \"ordinary\" classroom scale. What that turns into after tax is covered in our take-home pay breakdowns." },

      { kind: "h2", text: "Upper Pay Range 2026/27" },
      { kind: "p", text: "Teachers who demonstrate sustained high-quality teaching cross the threshold onto the upper pay range. There are only three points, and movement along them is performance-based rather than automatic." },
      { kind: "table", caption: "Upper Pay Range (U1–U3) 2026/27 by region", head: ["Point", "Rest of England", "London Fringe", "Outer London", "Inner London", "N. Ireland"], rows: [
        ["U1", "£49,134", "£50,625", "£54,047", "£59,649", "£46,589"],
        ["U2", "£50,955", "£52,441", "£56,046", "£62,580", "£48,303"],
        ["U3", "£52,835", "£54,327", "£58,119", "£64,683", "£50,085"],
      ]},
      { kind: "p", text: "Scotland has no upper pay range; experienced teachers progress instead towards the Chartered Teacher grade at **£52,539**. The mechanics of crossing the threshold, and how schools justify refusing applications, are on the [upper pay range page](/upper-pay-range/)." },

      { kind: "h2", text: "Unqualified teachers and other ranges" },
      { kind: "p", text: "The unqualified teacher range starts far lower — **£23,731 (UQ1)** in the rest of England — but six points take it to **£36,493**, which overlaps the bottom of the qualified main range. Inner London unqualified teachers run from £29,335 to £42,429." },
      { kind: "table", caption: "Range minimums and maximums 2026/27, rest of England", head: ["Range", "Minimum", "Maximum"], rows: [
        ["Unqualified (UQ1–UQ6)", "£23,731", "£36,493"],
        ["Main (M1–M6)", "£34,068", "£46,939"],
        ["Upper (U1–U3)", "£49,134", "£52,835"],
        ["Lead Practitioner", "£53,847", "£81,860"],
        ["Leadership Group (L1–L43)", "£53,585", "£148,829"],
      ]},
      { kind: "p", text: "The leadership endpoints span an enormous distance because a two-form entry primary head and the head of a large secondary sit on the same national spine — each school publishes its own individual range within it. We map that in the [leadership pay scale guide](/leadership-pay-scale/)." },

      { kind: "h2", text: "Why London has four different teacher pay scales" },
      { kind: "p", text: "England's statutory scale is split into four areas to reflect the cost of living. At M1 the gap between the lowest and highest band is **£7,660 a year**; at U3 it widens to **£11,848**. The bands are defined by postcode, not by school type, so two schools a mile apart can pay differently." },
      { kind: "ul", items: [
        "**Inner London** — most central boroughs, the highest rates (£41,728 M1 start).",
        "**Outer London** — suburban boroughs (£39,195 M1 start).",
        "**London Fringe** — commuter belt edges like parts of Essex, Hertfordshire and Kent (£35,602 M1 start).",
        "**Rest of England** — everywhere else (£34,068 M1 start).",
      ]},
      { kind: "p", text: "Which band a specific borough falls into trips a lot of people up, so we keep dedicated tables for [inner London](/inner-london-teacher-pay-scale/), [outer London](/outer-london-teacher-pay-scale/) and the [fringe](/london-fringe-teacher-pay-scale/), plus a combined [London overview](/teacher-pay-scale-london/)." },

      { kind: "h2", text: "Allowances that sit on top of the scale" },
      { kind: "p", text: "Basic scale pay is rarely the whole story. Teaching and Learning Responsibility payments reward extra duties such as leading a subject or a key stage, and SEN allowances compensate for special educational needs work. Both are pensionable." },
      { kind: "table", caption: "Allowances 2026/27 (all England regions)", head: ["Allowance", "Minimum", "Maximum"], rows: [
        ["TLR 1 (significant sustained responsibility)", "£10,530", "£17,819"],
        ["TLR 2 (defined responsibility)", "£3,650", "£8,912"],
        ["TLR 3 (fixed-term focus)", "£727", "£3,600"],
        ["SEN allowance", "£2,885", "£5,689"],
      ]},

      { kind: "h2", text: "How progression up the scale actually works" },
      { kind: "ol", items: [
        "**Years 1–6:** you are normally moved up one main-range point each year, subject to your appraisal meeting the school's standards. Since 2013 this is not fully automatic — schools *can* withhold it — but in practice most teachers progress annually.",
        "**Crossing the threshold:** applying to move from M6 to U1 requires evidence of sustained high-quality teaching. Application windows and criteria are set by each school's pay policy.",
        "**U1 to U3:** discretionary, tied to continued high performance. Many teachers plateau at U1 or U2.",
        "**Beyond U3:** further earnings growth means TLRs, lead practitioner posts or moving into the leadership group.",
      ]},
      { kind: "callout", tone: "warn", title: "Part-time teachers progress too", text: "Working part-time does not freeze your position on the scale. You still advance a point each year; your pay is simply that point multiplied by your FTE fraction. The part-time calculator shows the interaction." },

      { kind: "h2", text: "Common mistakes when reading the pay scale" },
      { kind: "ul", items: [
        "**Comparing gross salaries across regions without tax** — higher London pay is partly clawed back by rent, not tax; income tax is identical across the UK for the same salary.",
        "**Assuming academies must use these figures** — they are statutory reference points for maintained schools; academies can diverge, though most don't materially.",
        "**Reading old blog posts** — pre-September 2026 articles show 2025/26 numbers. Always check the effective date; the difference is 3.5%.",
        "**Ignoring the FTE rule** — part-time pay is quoted pro-rata; job ads sometimes show full-time equivalents.",
        "**Confusing Scotland's structure** — there is no UPS in Scotland and the chartered grade works differently.",
      ]},
      { kind: "p", text: "If you want the wider picture beyond scale points — average actual earnings, subject and phase differences — see our [UK teacher salary guide](/teacher-salary-uk/)." },
    ],
    faq: [
      { question: "What is the teacher pay scale for 2026/27?", answer: "In England the main pay range runs from £34,068 (M1) to £46,939 (M6) in the rest of England, rising to £41,728–£54,131 in inner London. The upper pay range runs £49,134–£52,835 outside London. All points rose 3.5% on 1 September 2026." },
      { question: "What is an M6 teacher salary?", answer: "A full-time M6 teacher earns £46,939 in the rest of England, £48,478 on the London fringe, £52,241 in outer London and £54,131 in inner London for 2026/27. Scotland's top main-scale point is equivalent at £48,516 and Northern Ireland's at £44,342." },
      { question: "Do academies have to follow the teacher pay scale?", answer: "No. The STPCD ranges are statutory for maintained schools; academies and free schools can set their own pay policies. In practice most academies continue to track the statutory points, but some use them as reference points rather than fixed steps." },
      { question: "How often do teachers move up the pay scale?", answer: "Qualified teachers normally progress one main-range point per year for six years (M1 to M6), subject to passing appraisal. Movement onto and within the upper pay range is discretionary and performance-based, so many teachers stay longer on a single upper point." },
      { question: "Is the teacher pay scale the same in Scotland?", answer: "No. Scotland negotiates through the Scottish Negotiating Committee for Teachers. Its 2026/27 main scale runs £34,539 to £48,516, there is no upper pay range, and experienced teachers instead progress towards the Chartered Teacher grade at £52,539." },
      { question: "What is the highest classroom teacher salary without leadership?", answer: "On the mainstream scales, U3 in inner London at £64,683 is the highest standard classroom rate in the UK. Lead practitioner roles push higher — up to £92,043 in inner London — while remaining classroom-based." },
      { question: "Do teachers get paid more in London?", answer: "Yes. Inner London pays £7,660 more than the rest of England at M1 and £11,848 more at U3. Outer London and the fringe sit in between. The bands are set by the school's location, not where the teacher lives." },
      { question: "Are TLR payments added to basic scale salary?", answer: "Yes. TLR 1, 2 and 3 payments (£727 to £17,819 depending on tier) and SEN allowances (£2,885 to £5,689) are paid on top of scale salary, and both count as pensionable pay in the Teachers' Pension Scheme." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "STRB — School Teachers' Review Body reports", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
      { label: "NEU — Pay scales England", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/pay-scales/pay-scales-england" },
      { label: "SNCT — Scottish Negotiating Committee for Teachers handbook", url: "https://www.snct.org.uk/wiki/index.php?title=Main_Page" },
      { label: "Department of Education Northern Ireland — teachers' pay", url: "https://www.education-ni.gov.uk/articles/teachers-pay-and-conditions-service" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 2. 2026/27
  // ─────────────────────────────────────────────────────────────────────────
  // 2. 2026/27
  // ─────────────────────────────────────────────────────────────────────────
  // 2. 2026/27
  // ─────────────────────────────────────────────────────────────────────────
  // 2. 2026/27
  // ─────────────────────────────────────────────────────────────────────────
  // 2. 2026/27
  // ─────────────────────────────────────────────────────────────────────────
  // 2. 2026/27
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-pay-scale-2026-27",
    hub: "pay-scales",
    title: "Teacher Pay Scale 26/27: Confirmed Points & Award",
    metaTitle: "Teacher Pay Scale 26/27: All Confirmed 2026/27 Points",
    metaDescription:
      "All confirmed teacher pay points for 2026/27 after the 3.5% award: main and upper ranges by England band, what changed versus 2025/26 and when you get paid.",
    primaryKeyword: "teacher pay scale 26 27",
    secondaryKeywords: [
      "teacher pay scale 26/27", "teacher pay scale 2026-27", "teacher pay scale 2026",
      "teacher pay scale 2026/27", "new teacher pay scale", "teacher pay rise 2026",
      "teachers pay rise 2026", "teacher pay rise", "teachers pay rise",
      "teacher pay scales 25/26", "teacher pay scale uk", "pay scales teachers",
    ],
    calculator: "pay-scale",
    intro:
      "The 2026/27 teacher pay scale took effect on 1 September 2026, applying a 3.5% uplift to every STPCD pay point. This page lists every confirmed point for the main and upper ranges across all England pay bands, shows exactly how much each moved, and explains when the increase lands on your payslip.",
    keyTakeaways: [
      "The 2026/27 award is 3.5%, applied to every point of every range from 1 September 2026.",
      "The rest-of-England main range now runs £34,068 (M1) to £46,939 (M6).",
      "Inner London tops out at £64,683 for U3 classroom teachers — £11,848 above the same point in the rest of England.",
      "The cash value of 3.5% grows with seniority: about £1,152 at M1 but £1,804 at U3 in the rest of England.",
      "Wales currently mirrors the STPCD figures; Scotland and Northern Ireland run separate settlements.",
    ],
    blocks: [
      { kind: "h2", text: "What the 2026/27 award actually is" },
      { kind: "p", text: "The School Teachers' Review Body recommended a **3.5% pay award** for England's teachers in 2026/27, and the government accepted it in full. Because the award is percentage-based rather than a flat cash sum, its value scales with where you sit on the [teacher pay scale](/teacher-pay-scale/): an inner London U3 gains far more pounds than an unqualified teacher at the bottom of the range." },
      { kind: "p", text: "The uplift applies to statutory pay points, leadership spines, lead practitioner ranges and allowances alike — TLR minimums and maximums were uprated on the same basis." },
      { kind: "callout", tone: "info", title: "The award date matters more than the announcement date", text: "Your entitlement runs from 1 September 2026 regardless of when your school implements it. Maintained schools must apply it from September; academies follow their own pay policies, though nearly all mirror the STPCD." },

      { kind: "h2", text: "Every confirmed main pay range point for 2026/27" },
      { kind: "table", caption: "Main Pay Range 2026/27 — England and Wales", head: ["Point", "Rest of England", "London Fringe", "Outer London", "Inner London"], rows: [
        ["M1", "£34,068", "£35,602", "£39,195", "£41,728"],
        ["M2", "£36,042", "£37,646", "£41,246", "£43,712"],
        ["M3", "£38,400", "£39,979", "£43,403", "£45,786"],
        ["M4", "£40,940", "£42,513", "£45,672", "£47,961"],
        ["M5", "£43,529", "£45,069", "£48,438", "£50,665"],
        ["M6", "£46,939", "£48,478", "£52,241", "£54,131"],
      ]},
      { kind: "p", text: "These are the figures most searches for the \"new teacher pay scale\" are really asking about. A full-time newly qualified teacher in Birmingham or Manchester starts at **£34,068**; the same role in Hackney starts at **£41,728**." },

      { kind: "h2", text: "How much each point moved: 2025/26 versus 2026/27" },
      { kind: "p", text: "Dividing any current point by 1.035 recovers the previous year's figure (derived, not officially republished). The table shows what the 3.5% means in real cash for key points:" },
      { kind: "table", caption: "Cash effect of the 3.5% award at key points, rest of England (previous-year figures derived)", head: ["Point", "2026/27", "2025/26 (derived)", "Annual gain", "Monthly gain"], rows: [
        ["UQ1", "£23,731", "≈£22,928", "≈£803", "≈£67"],
        ["M1", "£34,068", "≈£32,916", "≈£1,152", "≈£96"],
        ["M4", "£40,940", "≈£39,556", "≈£1,384", "≈£115"],
        ["M6", "£46,939", "≈£45,352", "≈£1,587", "≈£132"],
        ["U3", "£52,835", "≈£51,048", "≈£1,787", "≈£149"],
      ]},
      { kind: "p", text: "The pattern repeats in every region: the higher your point, the larger the absolute gain. That is deliberate — percentage awards preserve relativities between regions and ranges." },

      { kind: "h2", text: "Upper pay range and allowances in 2026/27" },
      { kind: "table", caption: "Upper Pay Range 2026/27 — England", head: ["Point", "Rest of England", "London Fringe", "Outer London", "Inner London"], rows: [
        ["U1", "£49,134", "£50,625", "£54,047", "£59,649"],
        ["U2", "£50,955", "£52,441", "£56,046", "£62,580"],
        ["U3", "£52,835", "£54,327", "£58,119", "£64,683"],
      ]},
      { kind: "p", text: "Allowances rose on the same basis. TLR 1 payments now span **£10,530 to £17,819**, TLR 2 spans **£3,650 to £8,912**, and SEN allowances run **£2,885 to £5,689**. If you hold a fixed TLR amount written into your contract, check whether your school applied the percentage to your actual payment or merely updated the permitted range." },

      { kind: "h2", text: "When does the 2026/27 pay rise hit your payslip?" },
      { kind: "ol", items: [
        "**1 September 2026** — the legal effective date for maintained schools.",
        "**September or October payslip** — most local authority payroll cycles apply the new rates immediately; some lag one month and backdate automatically.",
        "**Backdating** — if implementation slips, you are owed the difference from September; it does not disappear.",
        "**Part-time staff** — the uplift applies to the scale point first, then your FTE fraction; the percentage gain is identical.",
      ]},
      { kind: "callout", tone: "tip", title: "Check your September payslip line by line", text: "The uplift should appear in basic salary *and* in pensionable pay, which quietly raises your Teachers' Pension accrual. Our take-home pay guide walks through what the gross gain looks like after tax, NI and pension contributions." },

      { kind: "h2", text: "Scotland, Wales and NI: different settlements" },
      { kind: "ul", items: [
        "**Wales** negotiates through the IWPRB but currently mirrors the STPCD figures, so the tables above apply.",
        "**Scotland** runs the SNCT negotiating machinery with its own spine: the main scale runs £34,539 to £48,516, with Chartered Teacher at £52,539.",
        "**Northern Ireland** remains lowest: £32,188 at the bottom of the main range rising to £44,342 at the top, with an upper range of £46,589 to £50,085.",
      ]},
      { kind: "p", text: "Because the devolved settlements are negotiated separately, the 3.5% headline is not guaranteed to match outside England and Wales. We keep dedicated pages for [Scotland](/teacher-pay-scale-scotland/) and [Northern Ireland](/ni-teacher-pay-scale/) so you can track each settlement separately." },

      { kind: "h2", text: "Common mistakes with the 26/27 figures" },
      { kind: "ul", items: [
        "**Using 25/26 blog posts** — dozens of ranking pages still show last year's numbers. Anything quoting an M1 start below £34,000 is out of date.",
        "**Assuming the award applies pro-rata across the year mid-term** — it applies to annual rate from 1 September, not blended.",
        "**Confusing the pay award with progression** — moving from M3 to M4 adds roughly £2,540 in the rest of England, far more than the 3.5% award itself. See our pay rise guide for the combined effect.",
        "**Forgetting the pension effect** — higher pensionable pay buys more CARE pension every year the higher rate applies.",
      ]},

      { kind: "h2", text: "Regional winners and losers of the percentage award" },
      { kind: "p", text: "A flat percentage treats every region proportionally, so cash gains rank exactly as salaries do. Dividing current points by 1.035 shows the derived prior-year figures and therefore the gain:" },
      { kind: "table", caption: "M1 cash gain from the 2026/27 award by region (prior-year figures derived)", head: ["Region", "2026/27 M1", "Gain"], rows: [
        ["Inner London", "£41,728", "≈£1,411"],
        ["Outer London", "£39,195", "≈£1,325"],
        ["London Fringe", "£35,602", "≈£1,204"],
        ["Rest of England & Wales", "£34,068", "≈£1,152"],
        ["Scotland", "£34,539", "separate settlement"],
        ["N. Ireland", "£32,188", "separate settlement"],
      ]},
      { kind: "callout", tone: "info", title: "Percentages preserve relativities by design", text: "Because everyone moves together, no region gains ground on another from the award itself. Regional gaps only shift when negotiating bodies settle different percentages — which is why devolved years matter." },
      { kind: "h2", text: "What the award does to your pension and protections" },
      { kind: "p", text: "Three quiet knock-on effects follow any scale uplift. First, pension accrual: each year builds 1/57th of pensionable pay, so a higher base buys permanently more CARE pension — worth checking against your next benefit statement. Second, occupational protections such as maternity and sick pay calculations reference recent salary, lifting those entitlements automatically. Third, overtime-style payments and cover paid at pro-rata scale rates rise with the same stroke. None of these require action from you, but all are worth verifying on your first post-September payslip. Our [take-home pay guide](/teacher-take-home-pay/) covers the tax side of the uplift, and the [pay rise calculator](/teacher-pay-rise/) models combined award-plus-progression years." },

      { kind: "h2", text: "Reading your first 26/27 payslip properly" },
      { kind: "p", text: "The September payslip carries more information than the headline rise. Work through it in order: confirm basic salary matches your scale point plus band; check any TLR was uplifted proportionally rather than left at its old cash value; verify pensionable pay moved with everything else; and confirm NI and tax codes look unchanged unless something else changed too. Teachers who audit once a year catch almost every payroll error that would otherwise persist silently. If you work part time, multiply the confirmed point by your FTE fraction before comparing with previous months — percentage checks beat absolute ones whenever hours vary." },
      { kind: "callout", tone: "tip", title: "Keep every September payslip", text: "A folder of annual payslips reconstructs your entire salary history for mortgages, references and pension reconciliation. Digital copies suffice; consistency does not." },
    ],
    faq: [
      { question: "What is the teacher pay scale for 26/27?", answer: "The 2026/27 STPCD main pay range runs from £34,068 (M1) to £46,939 (M6) in the rest of England, with inner London at £41,728 to £54,131. The upper range runs £49,134 to £52,835 outside London. Every point reflects a 3.5% uplift effective 1 September 2026." },
      { question: "How much is the teacher pay rise for 2026?", answer: "The award is 3.5%. In cash that is roughly £1,152 a year at M1, £1,587 at M6 and £1,787 at U3 in the rest of England, with proportionally larger gains in London. Previous-year comparisons shown alongside are derived by dividing by 1.035." },
      { question: "When will the 2026/27 teacher pay rise be paid?", answer: "It takes effect on 1 September 2026. Most teachers see it in their September or October payslip depending on the payroll cycle. Any delay must be backdated to September — the entitlement does not lapse." },
      { question: "Does the 3.5% award apply to Wales?", answer: "Yes in practice: the Independent Welsh Pay Review Body's current recommendation mirrors the STPCD figures exactly, so Welsh teachers are on identical points. Scotland and Northern Ireland negotiate separate settlements and their scales differ." },
      { question: "Do leadership pay ranges rise with the 2026/27 award?", answer: "Yes. The whole leadership group spine — L1 to L43 — was uprated 3.5%, so the England spine now runs from £53,585 to £148,829, with higher endpoints in each London band. Lead practitioner ranges rose on the same basis." },
      { question: "Is the new teacher pay scale the same in academies?", answer: "Not necessarily. Academies set their own pay policies, so the STPCD is a reference point rather than an obligation. Most trusts continue to track the statutory points, but your contract and trust policy govern what you are actually paid." },
      { question: "How much does an NQT or new teacher earn in 2026/27?", answer: "A full-time newly qualified teacher on M1 earns £34,068 in the rest of England, £35,602 on the fringe, £39,195 in outer London and £41,728 in inner London. Progression to M2 follows successful appraisal, normally after a year." },
      { question: "What was the teacher pay scale in 25/26 compared with now?", answer: "Every current point divided by 1.035 gives the 2025/26 figure: M1 was approximately £32,916 and M6 approximately £45,352 in the rest of England. Our dedicated 2025/26 page keeps the full archived tables for reference." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "STRB — School Teachers' Review Body reports", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
      { label: "Education Hub — teacher pay announcement (DfE)", url: "https://educationhub.blog.gov.uk/" },
      { label: "Local Government Association — school teachers' pay guidance", url: "https://www.local.gov.uk/our-support/workforce-and-hr-support/education-and-young-people/school-teachers-pay-2026-27-and-2027-28" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 3. MAIN PAY RANGE
  // ─────────────────────────────────────────────────────────────────────────
  // 3. MAIN PAY RANGE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "main-pay-range",
    hub: "pay-scales",
    title: "Main Pay Range 2026/27: M1–M6 Explained",
    metaTitle: "Teacher Main Pay Scale 2026/27: M1–M6 Salary Guide",
    metaDescription:
      "The 2026/27 main pay range: every M1–M6 point by region, how progression works each year, what an M6 salary pays and when schools can withhold an increment.",
    primaryKeyword: "teacher main pay scale",
    secondaryKeywords: [
      "m6 teacher salary", "main pay range teachers", "teachers main pay range",
      "main pay range", "new teacher pay scale", "teaching pay scale",
      "pay scale teachers", "teacher pay scale 2026", "school teacher pay scale",
    ],
    calculator: "pay-scale",
    intro:
      "The main pay range (MPR) is where every qualified classroom teacher starts and where most spend their first six years. This guide sets out every 2026/27 point by region, shows what each annual step adds in cash, explains how progression decisions actually work, and covers the edge cases — part-time fractions, withheld increments and moving off the range.",
    keyTakeaways: [
      "The 2026/27 main pay range runs £34,068 (M1) to £46,939 (M6) in the rest of England.",
      "Each annual step is worth roughly £2,000 to £3,400 — far more than the annual cost-of-living award.",
      "Progression is normally automatic subject to appraisal, but schools have been able to withhold it since 2013.",
      "An M6 teacher earns £54,131 in inner London versus £44,342 in Northern Ireland — nearly £10,000 apart.",
      "Part-time teachers still progress a point each year; pay is the point multiplied by their FTE fraction.",
    ],
    blocks: [
      { kind: "h2", text: "What the main pay range is (and who sits on it)" },
      { kind: "p", text: "The main pay range — six points labelled M1 to M6 — is the statutory salary structure for qualified classroom teachers who have not yet crossed the threshold onto the upper range. It replaced the old single spine in 2014 and applies across maintained schools in England and Wales. If you hold QTS and are not in a leadership or lead practitioner post, this is almost certainly your range." },
      { kind: "p", text: "The [full UK pay scale](/teacher-pay-scale/) stacks five ranges side by side; the MPR is the entry ladder. Unqualified staff sit separately on the unqualified range." },

      { kind: "h2", text: "The 2026/27 main pay range by region" },
      { kind: "table", caption: "Main Pay Range 2026/27 — every region", head: ["Point", "Rest of England", "London Fringe", "Outer London", "Inner London", "Wales", "N. Ireland"], rows: [
        ["M1", "£34,068", "£35,602", "£39,195", "£41,728", "£34,068", "£32,188"],
        ["M2", "£36,042", "£37,646", "£41,246", "£43,712", "£36,042", "£34,037"],
        ["M3", "£38,400", "£39,979", "£43,403", "£45,786", "£38,400", "£36,271"],
        ["M4", "£40,940", "£42,513", "£45,672", "£47,961", "£40,940", "£38,669"],
        ["M5", "£43,529", "£45,069", "£48,438", "£50,665", "£43,529", "£41,109"],
        ["M6", "£46,939", "£48,478", "£52,241", "£54,131", "£46,939", "£44,342"],
      ]},
      { kind: "p", text: "Scotland negotiates separately through the SNCT; its nearest equivalents run £34,539 to £48,516. Wales currently mirrors the England & Wales figures exactly." },

      { kind: "h2", text: "What each step from M1 to M6 is worth" },
      { kind: "p", text: "This is where the main range quietly outperforms most careers' early earnings. Annual progression steps are worth two to three times the typical cost-of-living award:" },
      { kind: "table", caption: "Annual gain per progression step, rest of England 2026/27", head: ["Step", "Salary change", "Gain", "Roughly monthly"], rows: [
        ["M1 → M2", "£34,068 → £36,042", "+£1,974", "+£164"],
        ["M2 → M3", "£36,042 → £38,400", "+£2,358", "+£197"],
        ["M3 → M4", "£38,400 → £40,940", "+£2,540", "+£212"],
        ["M4 → M5", "£40,940 → £43,529", "+£2,589", "+£216"],
        ["M5 → M6", "£43,529 → £46,939", "+£3,410", "+£284"],
      ]},
      { kind: "callout", tone: "info", title: "The M5→M6 jump is deliberately large", text: "The final step is worth over £3,400 — designed to reward completing six years and to make M6 retention competitive against the upper range below it." },

      { kind: "h2", text: "How much does an M6 teacher earn?" },
      { kind: "p", text: "A full-time **M6 teacher salary is £46,939** in the rest of England for 2026/27. Region changes that materially:" },
      { kind: "ul", items: [
        "**Inner London:** £54,131",
        "**Outer London:** £52,241",
        "**London fringe:** £48,478",
        "**Rest of England and Wales:** £46,939",
        "**Northern Ireland:** £44,342",
      ]},
      { kind: "p", text: "M6 is also the launchpad: from here you apply to cross the threshold onto the [upper pay range](/upper-pay-range/), add a TLR worth up to £17,819, or move into the [leadership group](/leadership-pay-scale/)." },

      { kind: "h2", text: "How progression up the range works" },
      { kind: "ol", items: [
        "**Appraisal cycle:** your objectives are set in autumn and reviewed the following autumn.",
        "**Recommendation:** the head recommends a point move if you meet the school's standards — normally one point per year.",
        "**Governing body decision:** the pay committee formalises it in the annual pay policy round.",
        "**Effective date:** increases typically run from 1 September alongside the national award.",
      ]},
      { kind: "p", text: "Since 2013 progression has not been strictly automatic: schools *may* withhold a move if appraisal evidence falls short. In practice full-year teachers overwhelmingly progress annually; the risk concentrates around long absence, capability processes and some academies with stricter policies." },

      { kind: "h2", text: "Part-time teachers on the main range" },
      { kind: "p", text: "Part-time pay is your scale point multiplied by your FTE fraction — a 0.6 FTE teacher on M4 earns £24,564 (£40,940 × 0.6, derived). Crucially, part-time status does not slow progression: you still advance a point each year while appraisal standards are met. The common mistake is assuming fractional contracts freeze you in place; they do not. Our part-time calculator handles the arithmetic for any fraction." },

      { kind: "h2", text: "Common mistakes with the main pay scale" },
      { kind: "ul", items: [
        "**Expecting automatic progression without any appraisal** — the process exists even when the outcome is routine.",
        "**Comparing M-points between nations** — Northern Ireland's M6 trails England's by £2,597; the labels match, the money does not.",
        "**Assuming supply or temporary posts always map to M-points** — day-rate supply conversions vary by agency.",
        "**Ignoring allowances** — many mid-range teachers out-earn their nominal point via TLRs; check our allowances tables on the pillar guide.",
      ]},

      { kind: "h2", text: "Your first decade mapped out" },
      { kind: "p", text: "Combining annual progression with threshold crossing gives a realistic earnings arc for the rest of England (before allowances and future awards):" },
      { kind: "table", caption: "Illustrative classroom career path, rest of England (current-year values)", head: ["Year", "Typical point", "Salary"], rows: [
        ["1", "M1", "£34,068"],
        ["2", "M2", "£36,042"],
        ["3", "M3", "£38,400"],
        ["5", "M5", "£43,529"],
        ["6", "M6", "£46,939"],
        ["7+", "U1 (threshold passed)", "£49,134"],
      ]},
      { kind: "p", text: "Each future September award lifts the whole path, so treat the table as today's snapshot of a rising staircase rather than fixed amounts. The [full pay scale guide](/teacher-pay-scale/) shows how TLRs and leadership posts bend the curve further upward." },
      { kind: "h2", text: "Absence, part years and progression edge cases" },
      { kind: "p", text: "Long absence raises the question teachers ask most: does it reset progression? There is no statutory blanket rule — schools apply their own pay policy, and many progress teachers regardless unless performance management itself was affected. Fixed-term contracts complicate matters differently: service counts toward experience credit, but a mid-year start often means joining the range part-way through the cycle. If you are moving from supply work, agencies should recognise your point position for qualifying placements. When in doubt, request your school's pay policy in writing before the appraisal round opens — ambiguity always resolves worse for the teacher who stayed silent. The [part-time calculator](/part-time-teacher-pay-calculator/) handles FTE interactions, and union reps remain the best resource for contested cases." },

      { kind: "h2", text: "Career changers: negotiating your entry point" },
      { kind: "p", text: "Not everyone starts at M1, and schools know it. Career-switchers bring evidenced experience — industry expertise for shortage subjects, youth-work backgrounds, prior teaching abroad. The STPCD lets governing bodies place such candidates above M1 in recognition of relevant experience, and strong applicants ask about placement explicitly at interview. Bring documentation: role descriptions, references quantifying responsibility, transcripts of partial training. The gap between an M1 start (£34,068) and an M3 start (£38,400) is over £4,300 recurring every year, so preparation compounds." },
      { kind: "h2", text: "Main range myths worth retiring" },
      { kind: "ul", items: [
        "**'Six years then stuck'** — threshold application exists precisely to continue the climb; thousands cross annually.",
        "**'Academies can pay anything'** — they can deviate, yet recruitment competition pins most trust policies near statutory values.",
        "**'Part-time freezes progression'** — fractions change pay, never position or pace.",
        "**'TLR replaces scale progress'** — allowances stack on top; they never substitute for your annual point move.",
        "**'Supply work erases history'** — qualifying placements count toward experience credit like any other service.",
      ]},
      { kind: "p", text: "Each myth costs real money somewhere. The antidote is boringly consistent: read your school's actual pay policy once, keep dated records, and compare both against the [statutory framework](/teacher-pay-scale/) every September." },

      { kind: "h2", text: "How the main range reads in job adverts versus reality" },
      { kind: "p", text: "Adverts quote ranges; contracts specify points. The gap between the two is where expectations break. When an ad says 'MPS/UPS', it signals openness to experienced applicants without committing to any point — so your placement case must come from your application, not their generosity. Strong candidates state their expected point plainly, attach the service record proving it, and ask one direct question at interview: 'Where would you place this experience on the range?' Schools respect precision because payroll needs exactly that precision anyway. Vague placements get discovered by November payslips and corrected grudgingly; documented placements survive audits untouched. Carry the habit forward annually too — reconfirm your recorded point every September against the current [scale tables](/teacher-pay-scale/) and note the answer somewhere durable." },
      { kind: "callout", tone: "tip", title: "One sentence worth sending", text: "'Could you confirm in writing my pay-point placement and band under the STPCD before I accept?' Costs nothing, prevents almost everything." },
    ],
    faq: [
      { question: "What is the main pay range for teachers in 2026/27?", answer: "Six points from M1 at £34,068 to M6 at £46,939 in the rest of England, rising to £41,728–£54,131 in inner London. Wales mirrors these figures; Scotland and Northern Ireland negotiate separate scales." },
      { question: "How much does an M6 teacher earn?", answer: "A full-time M6 teacher earns £46,939 in the rest of England for 2026/27, £52,241 in outer London and £54,131 in inner London. Monthly gross pay at the rest-of-England rate is roughly £3,912 before tax, pension and NI." },
      { question: "Do teachers automatically move up the main pay range?", answer: "Normally yes, one point per year following a satisfactory appraisal, since 2013 schools formally may withhold progression if standards are not met. Full-time teachers who complete the year and meet objectives almost always progress." },
      { question: "Can a school refuse my M-point increment?", answer: "It can, but only by applying its published pay policy criteria after appraisal. A refusal must follow due process — evidence, moderation and the right to appeal to the pay committee — not just a head's discretion." },
      { question: "Does part-time work affect progression through the main range?", answer: "No. You progress a point each year like anyone else; only your pay is pro-rated by your FTE fraction. A 0.6 FTE teacher on M4 earns £24,564 (derived from the £40,940 full-time point)." },
      { question: "How long do teachers stay on the main pay range?", answer: "Most reach M6 within six years of qualifying. From M6 you either remain a classroom teacher, apply to cross the threshold onto the upper range, or take on TLR or leadership responsibilities that raise pay further." },
      { question: "Is the main pay range different in Scotland?", answer: "Yes. Scotland uses the SNCT scale with nearest-equivalent points from £34,539 to £48,516, plus a Chartered Teacher grade at £52,539 instead of England's upper pay range structure." },
      { question: "Do TLR payments stack onto main range salary?", answer: "Yes. TLR 2 payments (£3,650–£8,912) and TLR 1 payments (£10,530–£17,819) are paid on top of your scale point and count as pensionable pay in the Teachers' Pension Scheme." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "STRB — School Teachers' Review Body reports", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
      { label: "Get Into Teaching — teacher pay (DfE)", url: "https://getintoteaching.education.gov.uk/life-as-a-teacher/pay-and-benefits/teacher-pay" },
      { label: "SNCT — Scottish Negotiating Committee for Teachers handbook", url: "https://www.snct.org.uk/wiki/index.php?title=Main_Page" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 4. UPPER PAY RANGE
  // ─────────────────────────────────────────────────────────────────────────
  // 4. UPPER PAY RANGE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "upper-pay-range",
    hub: "pay-scales",
    title: "Upper Pay Range 2026/27: U1–U3 and the Threshold",
    metaTitle: "UPS Teacher Pay Scale 2026/27: U1–U3 & Threshold Guide",
    metaDescription:
      "The upper pay range for 2026/27: every U1–U3 point by region, what UPS3 pays, how to cross the threshold and how movement within the range really works.",
    primaryKeyword: "ups teacher pay scale",
    secondaryKeywords: [
      "ups3 teacher salary", "ups3", "upper pay range teachers", "ups salary teacher",
      "ups 3 teacher salary", "ups 1 teacher salary", "teacher salary ups 3",
      "what is ups 3 teacher salary", "mps ups teacher salary", "upper pay scale",
    ],
    calculator: "pay-scale",
    intro:
      "The upper pay range (UPR) is where experienced classroom teachers land after crossing the threshold — three points, U1 to U3, worth up to £64,683 in inner London. This guide covers every 2026/27 point by region, what a UPS3 salary actually is, how threshold applications are judged, and the realities of moving between upper points.",
    keyTakeaways: [
      "The 2026/27 upper pay range runs £49,134 (U1) to £52,835 (U3) in the rest of England.",
      "Inner London tops out at £64,683 — the highest standard classroom salary in UK state schools.",
      "Crossing from M6 to U1 delivers an immediate £2,195 rise in the rest of England.",
      "Movement within the upper range is discretionary: many teachers stay years on a single point.",
      "Scotland has no UPS equivalent; Chartered Teacher at £52,539 plays the nearest role.",
    ],
    blocks: [
      { kind: "h2", text: "What the upper pay range is" },
      { kind: "p", text: "The upper pay range replaced the old Upper Pay Scale (hence \"UPS\") in 2014. It has just three points — U1, U2, U3 — and exists to reward sustained high-quality classroom teaching without forcing good teachers into management. Teachers on it keep every classroom duty of the [main pay range](/main-pay-range/) but at higher rates." },
      { kind: "p", text: "Searches for \"MPS/UPS\" reflect the combined spine schools reference in pay policies: main professional scale followed by upper scale." },

      { kind: "h2", text: "Upper pay range 2026/27 points by region" },
      { kind: "table", caption: "Upper Pay Range 2026/27 — England and Northern Ireland", head: ["Point", "Rest of England", "London Fringe", "Outer London", "Inner London", "N. Ireland"], rows: [
        ["U1", "£49,134", "£50,625", "£54,047", "£59,649", "£46,589"],
        ["U2", "£50,955", "£52,441", "£56,046", "£62,580", "£48,303"],
        ["U3", "£52,835", "£54,327", "£58,119", "£64,683", "£50,085"],
      ]},
      { kind: "p", text: "Wales currently matches the England figures. Scotland has no upper range at all — its experienced teachers progress towards the SNCT Chartered Teacher grade of £52,539 instead, which sits between England's U2 and U3 outside London." },

      { kind: "h2", text: "Crossing the threshold: M6 to U1" },
      { kind: "p", text: "Application happens through your school's threshold round, normally after your sixth year. The statutory bar is **sustained high-quality teaching** judged against your school's published criteria — typically two successful appraisal cycles plus evidence across teaching quality, outcomes and professional development." },
      { kind: "table", caption: "Immediate value of crossing the threshold, 2026/27", head: ["Region", "M6", "U1", "Gain"], rows: [
        ["Rest of England", "£46,939", "£49,134", "+£2,195"],
        ["London Fringe", "£48,478", "£50,625", "+£2,147"],
        ["Outer London", "£52,241", "£54,047", "+£1,806"],
        ["Inner London", "£54,131", "£59,649", "+£5,518"],
      ]},
      { kind: "callout", tone: "info", title: "Inner London's jump dwarfs everywhere else", text: "Because the inner-London UPR starts disproportionately high, crossing the threshold there is worth over £5,500 immediately — more than double the rest-of-England gain." },

      { kind: "h2", text: "How much does a UPS3 teacher earn?" },
      { kind: "p", text: "**UPS3 is £52,835** in the rest of England for 2026/27 — the figure behind most \"ups 3 teacher salary\" searches. Region by region:" },
      { kind: "ul", items: [
        "**Inner London:** £64,683",
        "**Outer London:** £58,119",
        "**London fringe:** £54,327",
        "**Rest of England:** £52,835",
        "**Northern Ireland:** £50,085",
      ]},
      { kind: "p", text: "Add a TLR 1 (£10,530–£17,819) or SEN allowance (£2,885–£5,689) and total pay can pass £70,000 while remaining a classroom role. The [leadership group](/leadership-pay-scale/) starts only slightly above U3, so many senior teachers out-earn junior leaders without leaving the classroom." },

      { kind: "h2", text: "Progression inside the upper range: the awkward truth" },
      { kind: "p", text: "Unlike the main range, movement between U1, U2 and U3 is fully discretionary. Schools publish criteria but there is no expectation of annual progress, and budget pressure makes many governing bodies cautious. Typical patterns:" },
      { kind: "ul", items: [
        "Teachers who cross late often sit on U1 for several years before any U2 move.",
        "U2 to U3 moves frequently coincide with taking on whole-school responsibilities informally.",
        "Changing school is the most reliable way to reset expectations — new employers re-assess against their own criteria and sometimes recruit directly to U3.",
        "Portability is guaranteed: you never go backwards onto the main range when you move schools.",
      ]},
      { kind: "callout", tone: "warn", title: "Refusals must still follow due process", text: "A school declining an upper-range move should give evidence-based reasons tied to its published policy, with a right of appeal. Silent roll-overs year after year are bad practice and challengeable through the grievance route." },

      { kind: "h2", text: "Edge cases: part-time, supply and career breaks" },
      { kind: "ul", items: [
        "**Part-time:** you apply for and hold upper-range status exactly as full-timers do; pay is pro-rated by FTE fraction.",
        "**Supply:** agencies should honour your UPR position for long-term placements matching your normal duties.",
        "**Career breaks:** your scale position is preserved; returning teachers do not restart on the main range.",
        "**Academies:** free to diverge, but almost all retain the U1–U3 structure with STPCD-aligned values.",
      ]},

      { kind: "h2", text: "Common mistakes with the upper pay scale" },
      { kind: "ul", items: [
        "**Assuming automatic annual progression** — that behaviour belongs to the main range only.",
        "**Waiting to be invited** — threshold applications usually require the teacher to trigger them in the autumn window.",
        "**Confusing UPS with Scotland's structure** — no UPS exists there; check the Scottish scale separately.",
        "**Forgetting pension effects** — upper-range pay builds 1/57th per year of CARE pension, so each upper point permanently raises retirement income too.",
      ]},

      { kind: "h2", text: "Evidence that actually wins threshold applications" },
      { kind: "ul", items: [
        "**Two cycles of appraisal outcomes** meeting or exceeding objectives — the baseline almost every policy names.",
        "**Book scrutiny and observation summaries** showing consistency across classes and year groups.",
        "**Outcome data** presented fairly, with context for cohort challenges rather than raw percentages alone.",
        "**Wider contribution evidence** — mentoring, curriculum development, whole-school projects.",
        "**CPD log** demonstrating sustained professional learning, not one-off courses.",
      ]},
      { kind: "callout", tone: "tip", title: "Build the file before the window opens", text: "Applications fail most often on thin evidence assembled in a fortnight. Collect artefacts continuously from your M5 year onward and the autumn application becomes formality rather than ordeal." },
      { kind: "h2", text: "What upper-range status means for your pension" },
      { kind: "p", text: "Each year on U3 builds £52,835 ÷ 57 ≈ £927 of annual pension in the rest of England (derived under the 1/57th rule), against £823 at M6. Over a decade the difference compounds into thousands of pounds of guaranteed lifetime income — a reason upper-range progression disputes deserve the same seriousness as salary itself. The [pension calculator](/teacher-pension-calculator/) projects these effects directly." },
      { kind: "h2", text: "Upper-range style pay across the four nations" },
      { kind: "table", caption: "Experienced classroom ceilings compared, 2026/27", head: ["Nation", "Mechanism", "Ceiling"], rows: [
        ["England & Wales", "Upper Pay Range", "£52,835 (U3)"],
        ["Inner London", "Upper Pay Range", "£64,683 (U3)"],
        ["Scotland", "Chartered Teacher", "£52,539"],
        ["Northern Ireland", "Upper range", "£50,085"],
      ]},

      { kind: "h2", text: "Appealing a threshold refusal, step by step" },
      { kind: "ol", items: [
        "**Request written reasons** tied to the school's published criteria — vague deflections are themselves grounds to push back.",
        "**Audit the evidence trail** — did observations actually happen at the required frequency? Missing process invalidates outcomes.",
        "**Assemble a counter-file** mirroring each criterion with artefacts from two appraisal cycles.",
        "**Submit through the formal appeal route** named in the pay policy, with deadlines diarised.",
        "**Bring representation** to the committee hearing; union caseworkers win these regularly on procedural gaps alone.",
      ]},
      { kind: "p", text: "Most successful appeals never reach a hearing — the written stage exposes the weakness and schools frequently re-open the round instead. Persistence costs patience, not confrontation." },
      { kind: "h2", text: "Upper-range status for part-timers and returners" },
      { kind: "p", text: "Three situations generate disproportionate confusion. Part-timers sometimes hear that upper-range applications expect 'full-time evidence volumes' — no such rule exists in statute; appraisal standards apply identically across FTE fractions. Returners after career breaks hold their UPR position permanently; nobody reverts to the main range for having lived a life. And fixed-term contracts cannot strip status either — a one-year post at U2 means exactly that. The [part-time calculator](/part-time-teacher-pay-calculator/) shows the pay mechanics, while our [main range guide](/main-pay-range/) covers the progression history that got you here. When schools blur these rules, cite the STPCD directly; status provisions are unambiguous." },

      { kind: "h2", text: "What upper-range teachers actually spend their extra money on" },
      { kind: "p", text: "Survey commentary aside, three uses dominate anecdotally among threshold-crossed teachers, and each carries planning value. Pension top-ups: some redirect part of the rise into additional voluntary contributions, compounding the scheme advantage — model whether AVCs or commutation suits you better with the [pension calculator](/teacher-pension-calculator/). Mortgage capacity: the step-change in verified salary unlocks borrowing bands that M6 alone misses, which is why lenders see upper-range applications as qualitatively different files. Career optionality: sustained UPR income funds part-time working patterns later, letting experienced teachers downshift fractionally while holding status. None of this appears in threshold guidance, yet all three explain why the fight for fair upper-range treatment matters beyond the immediate £2,000-odd rise. Treat crossing the threshold as infrastructure for your fifties, not a bonus for your thirties." },
    ],
    faq: [
      { question: "What is the UPS teacher pay scale for 2026/27?", answer: "Three points: U1 £49,134, U2 £50,955 and U3 £52,835 in the rest of England, rising to £59,649–£64,683 in inner London. All figures rose 3.5% on 1 September 2026. Wales mirrors them; Scotland has no equivalent range." },
      { question: "What is a UPS3 teacher salary?", answer: "A full-time UPS3 teacher earns £52,835 in the rest of England, £58,119 in outer London and £64,683 in inner London for 2026/27. TLR payments stack on top and are pensionable." },
      { question: "How do I move from M6 to the upper pay range?", answer: "Apply through your school's threshold round, normally after six years. You must show sustained high-quality teaching against published criteria — usually two successful appraisal cycles of evidence. Success moves you to U1 with an immediate pay rise of roughly £2,200 outside London." },
      { question: "Do teachers automatically progress from U1 to U3?", answer: "No. Unlike the main range, all upper-range progression is discretionary and performance-based. Many teachers remain on one point for years; moving schools is the most common trigger for a fresh assessment." },
      { question: "Can my school refuse my upper pay range application?", answer: "Yes, if you don't meet its published criteria, but the refusal must be evidence-based, linked to the pay policy, and open to appeal. Indefinite deferrals without reasons are challengeable via grievance." },
      { question: "Is there an upper pay range in Scotland?", answer: "No. Scotland's SNCT structure has no UPS. Experienced teachers instead work towards Chartered Teacher status, which pays £52,539 in 2026/27 — between England's U2 and U3 rates outside London." },
      { question: "Does part-time work affect the upper pay range?", answer: "Your UPR status is unaffected and you apply like anyone else. Salary is simply the relevant point multiplied by your FTE fraction, and progression decisions use the same appraisal standards." },
      { question: "Is UPS3 more than some leadership jobs pay?", answer: "Often yes at entry level. The leadership spine begins at £53,585 in the rest of England — barely above U3 — so experienced classroom teachers with a TLR 1 can out-earn assistant heads on lower leadership points." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "STRB — School Teachers' Review Body reports", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
      { label: "NEU — Pay scales England", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/pay-scales/pay-scales-england" },
      { label: "SNCT — Scottish Negotiating Committee for Teachers handbook", url: "https://www.snct.org.uk/wiki/index.php?title=Main_Page" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 5. UNQUALIFIED
  // ─────────────────────────────────────────────────────────────────────────
  // 5. UNQUALIFIED
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "unqualified-teacher-pay-scale",
    hub: "pay-scales",
    title: "Unqualified Teacher Pay Scale 2026/27: UQ1–UQ6",
    metaTitle: "Unqualified Teacher Pay Scale 2026/27: UQ1–UQ6 Rates",
    metaDescription:
      "Every unqualified teacher salary point for 2026/27: UQ1–UQ6 across England, London, Wales and NI, how placement works and how six points compare with qualified M1.",
    primaryKeyword: "unqualified teacher salary",
    secondaryKeywords: [
      "unqualified teacher pay scale", "unqualified teacher salary uk",
      "unqualified teacher salary wales", "unqualified teacher salary london",
      "what is the salary of an unqualified teacher", "basic salary for an unqualified teacher",
      "unqualified teacher salary inner london", "unqualified teacher scale 1 salary",
      "salary of an unqualified teacher",
    ],
    calculator: "pay-scale",
    intro:
      "Teachers without QTS sit on their own six-point range — UQ1 to UQ6 — running from £23,731 to £36,493 in the rest of England for 2026/27. This page lists every point in every region, explains who actually gets paid on this scale, and shows the surprising fact that its top point out-pays a first-year qualified teacher.",
    keyTakeaways: [
      "The 2026/27 unqualified range runs £23,731 (UQ1) to £36,493 (UQ6) in the rest of England.",
      "UQ6 (£36,493) pays more than M1 (£34,068) — experience without QTS can beat a newly qualified start.",
      "Inner London runs £29,335 to £42,429; Northern Ireland trails at £22,478 to £34,565.",
      "The range covers instructors, some trainees on employment-based routes and cover supervisors teaching whole classes.",
      "Six points allow meaningful progression, but schools decide placement and movement individually.",
    ],
    blocks: [
      { kind: "h2", text: "Who is paid on the unqualified teacher range?" },
      { kind: "p", text: "The STPCD requires schools to pay teachers **without qualified teacher status** from this range when they plan and deliver lessons to whole classes. In practice that means:" },
      { kind: "ul", items: [
        "**Instructors** — specialists such as engineers or musicians teaching their subject without QTS.",
        "**Employment-based trainees** — some salaried routes place candidates on the unqualified range during training.",
        "**Overseas-trained teachers** awaiting QTS assessment, within their time limit.",
        "**Cover supervisors and higher-level Teaching Assistants** taking whole classes, where the school chooses STPCD alignment.",
      ]},
      { kind: "p", text: "Support staff roles that do not involve planning and delivering whole lessons are usually paid on local government scales instead — often lower. The [full UK pay scale](/teacher-pay-scale/) puts this range in context beside the main and upper ranges." },

      { kind: "h2", text: "Unqualified teacher pay scale 2026/27 by region" },
      { kind: "table", caption: "Unqualified Teacher Range 2026/27 — every region", head: ["Point", "Rest of England", "London Fringe", "Outer London", "Inner London", "Wales", "N. Ireland"], rows: [
        ["UQ1", "£23,731", "£24,908", "£27,727", "£29,335", "£23,731", "£22,478"],
        ["UQ2", "£26,075", "£27,589", "£30,411", "£32,018", "£26,075", "£24,698"],
        ["UQ3", "£28,757", "£30,272", "£33,093", "£34,702", "£28,757", "£27,239"],
        ["UQ4", "£31,124", "£32,636", "£35,464", "£37,067", "£31,124", "£29,480"],
        ["UQ5", "£33,810", "£35,320", "£38,146", "£39,746", "£33,810", "£32,023"],
        ["UQ6", "£36,493", "£38,003", "£40,831", "£42,429", "£36,493", "£34,565"],
      ]},
      { kind: "p", text: "Scotland has no separate unqualified range in the same form; provisional registrants are paid on the main Scottish scale. The figures above answer the standard \"what is the salary of an unqualified teacher\" question for each part of the UK." },

      { kind: "h2", text: "The surprising overlap with qualified pay" },
      { kind: "p", text: "The top of the unqualified range deliberately overlaps the bottom of the qualified [main pay range](/main-pay-range/). A long-serving unqualified teacher on UQ6 out-earns a brand-new NQT on M1 by £2,425 in the rest of England:" },
      { kind: "table", caption: "Experienced unqualified versus newly qualified, rest of England 2026/27", head: ["Position", "Point", "Salary"], rows: [
        ["Unqualified, sixth year", "UQ6", "£36,493"],
        ["Qualified, first year (NQT-era M1)", "M1", "£34,068"],
        ["Qualified, third year", "M3", "£38,400"],
      ]},
      { kind: "p", text: "But the ceiling differs sharply: qualified teachers go on to £52,835+ at U3, while UQ6 is the end of the road without gaining QTS." },

      { kind: "h2", text: "How placement and progression work" },
      { kind: "p", text: "There is no automatic annual step-up entitlement like the main range's norm. Schools decide where on the six points to place a new appointment — typically based on relevant experience — and movement between points follows appraisal under the school's pay policy." },
      { kind: "ol", items: [
        "**Initial placement:** the school positions you between UQ1 and UQ6 considering prior relevant teaching or industry experience.",
        "**Annual review:** progression decisions mirror the qualified process — appraisal evidence, pay committee, September effective date.",
        "**Ceiling:** UQ6 is terminal unless you gain QTS.",
      ]},
      { kind: "callout", tone: "tip", title: "Ask where you have been placed before accepting", text: "Two instructors hired the same week can be years apart in pay purely through placement discretion. The difference between UQ2 and UQ4 is over £5,000 in every region." },

      { kind: "h2", text: "From unqualified to qualified: what changes" },
      { kind: "p", text: "Gaining QTS moves you onto the main range — but not necessarily upwards immediately. Moving from UQ6 (£36,493) to M1 (£34,068) would be a pay cut, so schools must place transferring teachers at least at their previous salary, which normally means M2 or M3 depending on experience credit. That protection makes training while working far less costly than most career-changers assume. Our guide to routes into teaching covers the funded options." },

      { kind: "h2", text: "Common mistakes around unqualified teacher salaries" },
      { kind: "ul", items: [
        "**Confusing TA pay with the UQ range** — teaching assistants on local authority scales earn less; only whole-class teachers trigger STPCD unqualified rates.",
        "**Assuming London weighting applies outside the defined boroughs** — check the exact band boundaries on our London pages.",
        "**Expecting the national award automatically in academies** — they set their own policies, though most align.",
        "**Ignoring pensionable status** — unqualified teachers employed as teachers on this range are in the Teachers' Pension Scheme, unlike most support staff roles.",
      ]},

      { kind: "h2", text: "Converting annual points into daily reality" },
      { kind: "p", text: "Directors of finance and agencies often quote day rates. Using the standard 195 teaching days, rest-of-England values convert approximately as follows (derived):" },
      { kind: "table", caption: "Approximate daily equivalents, rest of England (annual ÷ 195, derived)", head: ["Point", "Annual", "Roughly per day"], rows: [
        ["UQ1", "£23,731", "≈£122"],
        ["UQ3", "£28,757", "≈£147"],
        ["UQ6", "£36,493", "≈£187"],
        ["M1 (comparison)", "£34,068", "≈£175"],
      ]},
      { kind: "callout", tone: "warn", title: "Agency day rates differ from salary", text: "Agencies quote gross day rates covering their margin and holiday accrual. Comparing them directly with salaried points flatters the agency figure — normalise both before judging an offer." },
      { kind: "h2", text: "Building the case for placement above UQ1" },
      { kind: "p", text: "Schools weigh industry expertise, prior teaching experience and qualifications when placing unqualified staff. Come prepared: a portfolio of relevant delivery experience, references evidencing work with young people, and any partial teacher-training credits. The difference between UQ2 (£26,075) and UQ4 (£31,124) is nearly £5,000 — worth an hour of preparation at interview stage. Once placed, keep appraisal evidence flowing exactly as qualified colleagues do, because progression reviews follow parallel processes. And if you intend to train formally, ask about employment-based routes early: some schools fund QTS pathways for instructors they already value, converting your position onto the [main pay range](/main-pay-range/) at protected parity." },
      { kind: "h2", text: "Where unqualified pay sits across the four nations" },
      { kind: "p", text: "England and Wales share the figures above. Northern Ireland runs its lower equivalent from £22,478 to £34,565, while Scotland handles non-provisionally-registered staff through its own arrangements rather than a mirrored six-point range. The [regional pay map](/teacher-pay-map/) ranks every nation side by side." },

      { kind: "h2", text: "Payroll errors unqualified staff should hunt for" },
      { kind: "ul", items: [
        "**Wrong range entirely** — support-staff spine rates applied to whole-class teaching roles that legally warrant UQ points.",
        "**Pension enrolment missed** — teachers on the unqualified range belong in the Teachers' Pension Scheme, not just local government schemes.",
        "**Placement drift** — initial letters promising UQ3 with payroll quietly running UQ2.",
        "**Allowance omission** — SEN or responsibility payments agreed verbally then never entering the payroll record.",
      ]},
      { kind: "callout", tone: "warn", title: "Your contract letter is the anchor", text: "Whatever was promised at interview means little until it appears in a signed placement letter specifying point and band. Chase that document in week one; it decides every later argument." },
      { kind: "h2", text: "Interview questions that reveal placement intentions" },
      { kind: "p", text: "Schools rarely volunteer where on six points they intend to place you, so ask precisely. Useful formulations: 'Where on the unqualified range would this post be placed, and what evidence influences that decision?' followed by 'What would progression review look like in twelve months?' Vague answers predict vague payroll. Candidates holding instructor-level industry expertise should also ask whether recruitment or retention payments exist for shortage subjects — these stack onto the range separately and cost nothing to request. Finally, confirm pension scheme membership in writing; the difference between the Teachers' Pension Scheme and a local government scheme compounds over decades into the single largest financial variable of an unqualified teaching career. Our [pension hub](/teacher-pension/) explains the scheme difference in depth." },

      { kind: "h2", text: "Unqualified routes into specialist subjects" },
      { kind: "p", text: "The range exists partly because schools cannot staff everything with QTS holders. Computing instructors from industry, engineering specialists for design technology, native-speaker language assistants elevated to whole-class delivery, sports coaches running accredited PE programmes — all populate the UQ range legitimately. Their bargaining position improves yearly as shortages deepen, and smart candidates convert that leverage into structured development: negotiated QTS training funding, guaranteed placement points above UQ1, or fixed review dates tied to qualifications gained mid-contract. If a school benefits from your industry currency, say plainly what maintaining that currency costs and ask them to share it. The worst outcome of asking remains the salary already offered; the common outcome is a development clause that eventually moves you onto the [main range](/main-pay-range/) at protected parity — which is precisely how most successful instructor-to-teacher transitions we hear about actually ran." },
    ],
    faq: [
      { question: "What is the salary of an unqualified teacher in 2026/27?", answer: "Between £23,731 (UQ1) and £36,493 (UQ6) in the rest of England, £27,727–£40,831 in outer London and £29,335–£42,429 in inner London. Where you start within the six points depends on the school's assessment of your experience." },
      { question: "Can an unqualified teacher earn more than a qualified one?", answer: "At the start of careers, yes: UQ6 pays £36,493 against £34,068 for a first-year qualified teacher in the rest of England. But the qualified ceiling is far higher — upper range teachers reach £52,835 and beyond." },
      { question: "Do unqualified teachers get annual pay rises?", answer: "Not automatically in the way qualified teachers do. Schools set initial placement and then review progression annually under their pay policy. Movement up the six points depends on appraisal rather than simple length of service." },
      { question: "Is the unqualified teacher pay scale different in Wales?", answer: "No — Wales currently mirrors the England & Wales figures exactly, so the range runs £23,731 to £36,493 there too. Scotland uses its own structure and Northern Ireland's equivalent range is lower, at £22,478 to £34,565." },
      { question: "Are unqualified teachers in the Teachers' Pension Scheme?", answer: "When employed as teachers on the unqualified range, yes — membership applies just as for qualified staff. Cover supervisors or teaching assistants paid on support-staff scales are instead usually enrolled in the Local Government Pension Scheme." },
      { question: "What happens to my pay when I gain QTS?", answer: "Your school must transfer you to the main pay range at a point at least equal to your previous salary. An UQ6 teacher therefore normally lands on M2 or M3 rather than absorbing a cut down to M1." },
      { question: "How much does an unqualified teacher earn in inner London?", answer: "Between £29,335 (UQ1) and £42,429 (UQ6) for 2026/27. Outer London runs £27,727 to £40,831, and the fringe £24,908 to £38,003 — always check which band the school's postcode falls into." },
      { question: "Do academies use the unqualified teacher range?", answer: "They are not obliged to, since academies set their own pay policies. Most trusts continue to reference the statutory range, but some pay market-driven rates for hard-to-fill instructor posts." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "NEU — Pay scales England", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/pay-scales/pay-scales-england" },
      { label: "Get Into Teaching — teacher pay (DfE)", url: "https://getintoteaching.education.gov.uk/life-as-a-teacher/pay-and-benefits/teacher-pay" },
      { label: "Department of Education Northern Ireland — teachers' pay", url: "https://www.education-ni.gov.uk/articles/teachers-pay-and-conditions-service" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 6. INNER LONDON
  // ─────────────────────────────────────────────────────────────────────────
  // 6. INNER LONDON
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "inner-london-teacher-pay-scale",
    hub: "pay-scales",
    title: "Inner London Teacher Pay Scale 2026/27",
    metaTitle: "Inner London Teacher Pay Scale 2026/27: All Points",
    metaDescription:
      "Inner London teacher salaries for 2026/27: every M1–M6 and U1–U3 point, which boroughs qualify and how the premium compares with central London living costs.",
    primaryKeyword: "inner london teacher pay scale",
    secondaryKeywords: [
      "inner london teacher salary", "teacher salary london", "teacher pay scale london",
      "unqualified teacher salary inner london", "teacher pay scale uk",
      "teachers pay scale", "teacher pay rise 2026",
    ],
    calculator: "pay-scale",
    calculatorPreset: { region: "inner-london" },
    intro:
      "Inner London pays UK classroom teachers their highest statutory rates: £41,728 to £54,131 on the main range and up to £64,683 at U3 for 2026/27. This page lists every point, explains exactly which boroughs trigger the higher band, and puts the premium in context against the city's costs.",
    keyTakeaways: [
      "Inner London main range 2026/27: £41,728 (M1) to £54,131 (M6).",
      "Upper range tops out at £64,683 (U3) — the highest standard classroom rate in the UK.",
      "The premium over the rest of England runs from £7,660 at M1 to £11,848 at U3.",
      "Crossing the threshold inside London is worth £5,518 immediately — more than double anywhere else.",
      "Leadership endpoints reach £158,862 (L43) in inner London versus £148,829 elsewhere.",
    ],
    blocks: [
      { kind: "h2", text: "Which boroughs count as inner London?" },
      { kind: "p", text: "The STPCD defines inner London by the school's location using the old Inner London area plus a few adjustments. It includes Camden, City of London, Hackney, Hammersmith & Fulham, Haringey, Islington, Kensington & Chelsea, Lambeth, Lewisham, Newham, Southwark, Tower Hamlets, Wandsworth and Westminster. Schools just across a boundary can sit in [outer London](/outer-london-teacher-pay-scale/) — worth checking before accepting a job offer." },

      { kind: "h2", text: "Inner London main pay range 2026/27" },
      { kind: "table", caption: "Main Pay Range — inner London 2026/27 vs rest of England", head: ["Point", "Inner London", "Rest of England", "Premium"], rows: [
        ["M1", "£41,728", "£34,068", "+£7,660"],
        ["M2", "£43,712", "£36,042", "+£7,670"],
        ["M3", "£45,786", "£38,400", "+£7,386"],
        ["M4", "£47,961", "£40,940", "+£7,021"],
        ["M5", "£50,665", "£43,529", "+£7,136"],
        ["M6", "£54,131", "£46,939", "+£7,192"],
      ]},
      { kind: "p", text: "A newly qualified teacher starting in Tower Hamlets earns over £7,600 more than an identically qualified peer in Manchester — roughly £638 extra gross every month." },

      { kind: "h2", text: "Upper, unqualified and leadership rates" },
      { kind: "table", caption: "All inner London ranges 2026/27", head: ["Range", "Minimum", "Maximum"], rows: [
        ["Unqualified (UQ1–UQ6)", "£29,335", "£42,429"],
        ["Main (M1–M6)", "£41,728", "£54,131"],
        ["Upper (U1–U3)", "£59,649", "£64,683"],
        ["Lead Practitioner", "£64,023", "£92,043"],
        ["Leadership Group (L1–L43)", "£63,708", "£158,862"],
      ]},
      { kind: "p", text: "The lead practitioner maximum of **£92,043** deserves attention: classroom specialists in inner London can out-earn most assistant heads without leaving teaching." },

      { kind: "h2", text: "Why the threshold jump matters more here" },
      { kind: "p", text: "Moving from M6 (£54,131) to U1 (£59,649) delivers **£5,518** at once — the largest threshold gain anywhere in the country. The gap between the inner-London main-range ceiling and its upper-range floor is deliberately wide, reflecting recruitment competition for experienced teachers in the capital. The mechanics are identical to everywhere else, as set out in our [upper pay range guide](/upper-pay-range/)." },
      { kind: "callout", tone: "info", title: "Pension effects compound faster too", text: "Higher pensionable pay means each inner-London year builds more CARE pension: one year at M1 builds £732 of annual pension versus £598 in the rest of England (1/57th rule)." },

      { kind: "h2", text: "Does the premium survive London's costs?" },
      { kind: "p", text: "Honest answer: partially. Rent absorbs most of the gross difference for teachers renting alone in central zones; shared housing or outer-zone commutes change the arithmetic substantially. What the premium reliably does:" },
      { kind: "ul", items: [
        "**Raises every future calculation** — pensions, maternity pay, redundancy and part-time fractions all derive from your scale rate.",
        "**Compounds through progression** — each year's percentage uplift applies to a larger base.",
        "**Travels with you** — move out later and you transfer onto the new region's equivalent point without dropping ranges.",
      ]},
      { kind: "p", text: "For the wider trade-off picture, our [take-home pay guide](/teacher-take-home-pay/) shows what each point yields after tax and pension." },

      { kind: "h2", text: "Common mistakes with inner London pay" },
      { kind: "ul", items: [
        "**Assuming 'where I live' matters** — only the school's postcode sets the band, never the teacher's address.",
        "**Mixing up outer and inner boundaries** — some boroughs split historically; verify against current STPCD definitions, not old blog maps.",
        "**Comparing against national averages** — average teacher salary statistics blend regions and distort comparisons.",
        "**Overlooking academies' freedom** — rare, but some London trusts pay above-scale recruitment supplements instead.",
      ]},

      { kind: "h2", text: "Monthly gross pay at every inner London point" },
      { kind: "table", caption: "Monthly gross equivalents, inner London 2026/27 (annual ÷ 12, derived)", head: ["Point", "Annual", "Monthly gross"], rows: [
        ["M1", "£41,728", "≈£3,477"],
        ["M4", "£47,961", "≈£3,997"],
        ["M6", "£54,131", "≈£4,511"],
        ["U1", "£59,649", "≈£4,971"],
        ["U3", "£64,683", "≈£5,390"],
      ]},
      { kind: "h2", text: "Recruitment and retention payments" },
      { kind: "p", text: "Beyond the banded scales, the STPCD lets schools make recruitment and retention payments — one-off or time-limited sums for shortage subjects or hard-to-fill posts. Inner London schools use them heavily for physics, computing and maths roles. They are discretionary, pensionable in most cases, and worth raising explicitly at offer stage: many candidates never learn such payments existed until a colleague mentions theirs. Unlike TLRs they usually carry no ongoing responsibility, making them cleaner money — though always check clawback clauses tied to staying periods." },
      { kind: "h2", text: "The commuter strategy: earn inner, live outer" },
      { kind: "p", text: "A well-worn path maximises the premium while dodging zone 1–2 rents: teach in Tower Hamlets or Lambeth, live in Barking or Croydon. The salary follows the school; the rent follows the home. Teachers running this strategy capture most of the £7,000+ premium after transport costs, and the accumulated pension and salary history travels with them wherever they move next. Compare bands across the capital in our [combined London overview](/teacher-pay-scale-london/) and model specific offers with the [take-home pay guide](/teacher-take-home-pay/)." },

      { kind: "h2", text: "Three inner London careers, three different ledgers" },
      { kind: "ul", items: [
        "**The solo renter, M2 in Southwark:** £43,712 gross against zone-2 rents consumes most of the premium; the residual is lifestyle, not savings.",
        "**The flatshare, M1 in Hackney:** shared housing flips the maths — premium largely banked, deposit accelerating visibly.",
        "**The commuter from Barking, M5 in Islington:** outer-borough rents plus inner-band salary capture nearly the entire £7,100 gap after modest transport costs.",
      ]},
      { kind: "p", text: "Same scale, same effort, radically different outcomes — housing tenure dominates every other variable in whether London pays." },
      { kind: "h2", text: "Stacking allowances in London schools" },
      { kind: "p", text: "London's dense sixth-form and special-school provision creates allowance opportunities thinner elsewhere: TLR 2 payments for intervention leads, SEN allowances attached to designated units, and exam-season responsibility payments negotiated locally within statutory ranges. Because TLR and SEN ranges are national (£3,650–£8,912 and £2,885–£5,689 respectively for their tiers), their relative weight feels smaller against London bases — a £5,000 TLR 2 stretches further in Leeds than Lambeth. That argues for treating allowances as negotiation targets early rather than accepting whatever the job description lists. Full national allowance tables sit in our [UK pay scale guide](/teacher-pay-scale/)." },
      { kind: "h2", text: "When inner London is genuinely the wrong choice" },
      { kind: "p", text: "Honesty requires the counter-case: car-dependent lives, significant caring responsibilities needing space, health conditions aggravated by commuting density, or dual-teacher households unable to synchronise two inner-London timetables. For those profiles, [outer London's](/outer-london-teacher-pay-scale/) £5,100 premium with family housing frequently beats the inner figure after all variables resolve. The map rewards matching band to circumstances, never chasing the top line blindly — and the [regional comparison page](/teacher-pay-map/) widens the frame beyond the capital when the capital keeps losing the arithmetic." },

      { kind: "h2", text: "Inner London numbers after tax: setting honest expectations" },
      { kind: "p", text: "Gross premiums shrink through the tax system in ways worth pre-feeling. Income tax and National Insurance absorb roughly a third of each additional London pound at these salaries, and pension contributions take their tiered slice before spending money ever exists. The £7,600 entry premium therefore arrives as perhaps £4,500 of spendable difference against rest-of-England peers — still substantial, but the number to compare against rent gaps is the netted one, never the advertised one. Run both cities through the [take-home pay guide](/teacher-take-home-pay/) with identical assumptions and let the calculator arbitrate; intuition consistently overestimates gross differences and underestimates how uniformly the tax system flattens them. What survives flattening undiminished is pension accrual, since CARE builds on gross pensionable pay before tax touches anything — one more reason long-horizon thinkers tolerate thinner monthly margins in the capital than month-to-month comfort suggests." },
      { kind: "callout", tone: "info", title: "Net thinking changes decisions", text: "Teachers who compare net-versus-rent rather than gross-versus-gross report far fewer September surprises — and make calmer moving decisions in both directions." },

      { kind: "h2", text: "Inner London questions we answer weekly" },
      { kind: "ul", items: [
        "**Does my inner-London rate survive academy conversion?** Your contract terms carry over; most trusts then align to statutory values anyway, so practical change is rare.",
        "**Can I negotiate above U3?** Only via lead practitioner or leadership structures — classroom spine ceilings are fixed, but recruitment payments can supplement temporarily.",
        "**Do supply teachers get London rates?** Qualifying long-term placements should honour your band and point; day-rate agency work converts differently and needs normalising before comparison.",
        "**Is the premium reviewed?** Band values move with national awards; boundaries themselves rarely shift, which is why old maps stay dangerous.",
      ]},
    ],
    faq: [
      { question: "What is the inner London teacher pay scale for 2026/27?", answer: "The main range runs £41,728 (M1) to £54,131 (M6), the upper range £59,649 to £64,683, and the unqualified range £29,335 to £42,429. All points reflect the 3.5% award effective 1 September 2026." },
      { question: "How much more do inner London teachers earn?", answer: "Between £7,021 and £7,670 more per year than rest-of-England equivalents on the main range, widening to £11,848 at U3. The premium is set by the school's postcode, regardless of where the teacher lives." },
      { question: "Which boroughs are inner London for teacher pay?", answer: "Camden, City of London, Hackney, Hammersmith & Fulham, Haringey, Islington, Kensington & Chelsea, Lambeth, Lewisham, Newham, Southwark, Tower Hamlets, Wandsworth and Westminster. Borderline schools may fall into the outer London band instead." },
      { question: "Is it worth being a teacher in inner London financially?", answer: "It depends on housing. The £7,000+ premium is real but largely absorbed by central rents if living alone. It compounds through pensions and progression, and transfers out when you leave — so early-career stints in London carry lasting value." },
      { question: "What is the highest classroom teacher salary in inner London?", answer: "£64,683 at U3 on the standard ranges. Lead practitioner posts push this to £92,043 at the maximum, still without formal leadership responsibility." },
      { question: "Do unqualified teachers get the London premium?", answer: "Yes. The inner London unqualified range runs £29,335 (UQ1) to £42,429 (UQ6), several thousand pounds above every other region's equivalent points." },
      { question: "Does my pension build faster in inner London?", answer: "In cash terms yes: accrual is 1/57th of pensionable pay, so an inner London M1 year builds about £732 of annual pension against £598 outside London. Revaluation treats both identically thereafter." },
      { question: "What happens to my pay if I move from inner London to another region?", answer: "You transfer onto the same point in the destination region's scale — for example M4 drops from £47,961 to £40,940 moving out of London. Your position and progression history are preserved; only the regional rate changes." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "NEU — Pay scales (fringe, outer London and inner London)", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/pay-scales" },
      { label: "NASUWT — Pay Scales (Fringe, Outer London and Inner London)", url: "https://www.nasuwt.org.uk/advice/pay-pensions/pay-scales/pay-scales-fringe-outer-london-and-inner-london.html" },
      { label: "Teachers' Pensions — member guides", url: "https://www.teacherspensions.co.uk/members.htm" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 7. OUTER LONDON
  // ─────────────────────────────────────────────────────────────────────────
  // 7. OUTER LONDON
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "outer-london-teacher-pay-scale",
    hub: "pay-scales",
    title: "Outer London Teacher Pay Scale 2026/27",
    metaTitle: "Outer London Teacher Pay Scale 2026/27: All Points",
    metaDescription:
      "Outer London teacher salaries for 2026/27: every M1–M6 and U1–U3 point, which boroughs count as outer London and how the band compares with its neighbours.",
    primaryKeyword: "outer london teacher pay scale",
    secondaryKeywords: [
      "outer london teacher salary", "teacher pay scale london", "teacher salary london",
      "unqualified teacher salary outer london", "teachers pay scales", "teacher pay scale uk",
    ],
    calculator: "pay-scale",
    calculatorPreset: { region: "outer-london" },
    intro:
      "Outer London sits between the capital's two extremes: £39,195 to £52,241 on the main range for 2026/27, with U3 reaching £58,119. This page lists every point, maps out which boroughs fall in the band, and shows where the outer-London premium is genuinely worth more than its inner sibling once housing costs enter the picture.",
    keyTakeaways: [
      "Outer London main range 2026/27: £39,195 (M1) to £52,241 (M6).",
      "Upper range runs £54,047 (U1) to £58,119 (U3).",
      "The premium over the rest of England is roughly £5,100 at M1 and £5,300 at M6.",
      "Outer London trails inner London by £2,533 to £6,564 depending on the point.",
      "Unqualified teachers earn £27,727 to £40,831; leadership endpoints reach £153,041.",
    ],
    blocks: [
      { kind: "h2", text: "Which boroughs are outer London for pay purposes?" },
      { kind: "p", text: "The band covers the suburban ring of the STPCD's defined area — Barking & Dagenham, Barnet, Bexley, Brent, Bromley, Croydon, Ealing, Enfield, Greenwich, Harrow, Havering, Hillingdon, Hounslow, Kingston upon Thames, Merton, Redbridge, Richmond upon Thames, Sutton and Waltham Forest among them. Because boundaries follow administrative lines rather than commute times, a school two stops from an inner-London one can pay several thousand pounds less." },

      { kind: "h2", text: "Outer London main pay range 2026/27" },
      { kind: "table", caption: "Main Pay Range — outer London vs neighbours, 2026/27", head: ["Point", "Outer London", "Inner London", "Fringe"], rows: [
        ["M1", "£39,195", "£41,728", "£35,602"],
        ["M2", "£41,246", "£43,712", "£37,646"],
        ["M3", "£43,403", "£45,786", "£39,979"],
        ["M4", "£45,672", "£47,961", "£42,513"],
        ["M5", "£48,438", "£50,665", "£45,069"],
        ["M6", "£52,241", "£54,131", "£48,478"],
      ]},
      { kind: "p", text: "Against the rest of England (£34,068–£46,939), the outer-London premium runs from £5,127 at M1 to £5,302 at M6." },

      { kind: "h2", text: "Upper and other ranges" },
      { kind: "table", caption: "All outer London ranges 2026/27", head: ["Range", "Minimum", "Maximum"], rows: [
        ["Unqualified (UQ1–UQ6)", "£27,727", "£40,831"],
        ["Main (M1–M6)", "£39,195", "£52,241"],
        ["Upper (U1–U3)", "£54,047", "£58,119"],
        ["Lead Practitioner", "£58,119", "£86,136"],
        ["Leadership Group (L1–L43)", "£57,837", "£153,041"],
      ]},
      { kind: "p", text: "Note the overlap at £58,119: the top of the upper range equals the bottom of lead practitioner — a natural next step for classroom teachers who want progression without management. The [leadership spine](/leadership-pay-scale/) starts just below it." },

      { kind: "h2", text: "The value case versus inner London" },
      { kind: "p", text: "Outer London pays up to £6,564 less than inner London (at U3), but rents in boroughs like Bexley, Sutton or Havering often undercut central zones by far more than that. For many teachers the outer band is the sweet spot:" },
      { kind: "ul", items: [
        "**M1 comparison:** £39,195 here versus £34,068 outside London — a £5,127 uplift with materially cheaper housing than zones 1–2.",
        "**Threshold gain:** M6 to U1 adds £1,806 immediately (£52,241 → £54,047).",
        "**Family housing:** three-bedroom family rents in outer boroughs frequently cost less per month than the pay gap to inner London.",
      ]},
      { kind: "callout", tone: "info", title: "Band boundaries are about the school, not you", text: "Live in Essex, teach in Havering? You earn outer London rates. Live in Croydon, teach in Lambeth? You earn inner London rates. The school's postcode decides, always." },

      { kind: "h2", text: "Progression works identically here" },
      { kind: "p", text: "Nothing about the region changes progression mechanics: annual appraisal-based steps through the [main range](/main-pay-range/), threshold application onto the [upper range](/upper-pay-range/), and discretionary movement within it. The only variable is the cash value attached to each point." },

      { kind: "h2", text: "Common mistakes with the outer London scale" },
      { kind: "ul", items: [
        "**Assuming all 'London jobs' pay identically** — the three-band structure creates real differences within a single commute.",
        "**Using old boundary maps** — definitions have been stable for years but recycled blog posts sometimes mislabel fringe boroughs.",
        "**Forgetting the pension base effect** — higher regional pay builds proportionally more CARE pension every year.",
        "**Comparing gross without rent** — a like-for-like take-home comparison needs housing costs included; our calculators help with the tax side.",
      ]},

      { kind: "h2", text: "Monthly gross equivalents across the range" },
      { kind: "table", caption: "Monthly gross pay, outer London 2026/27 (annual ÷ 12, derived)", head: ["Point", "Annual", "Monthly gross"], rows: [
        ["M1", "£39,195", "≈£3,266"],
        ["M4", "£45,672", "≈£3,806"],
        ["M6", "£52,241", "≈£4,353"],
        ["U3", "£58,119", "≈£4,843"],
      ]},
      { kind: "h2", text: "Comparing two offers: a worked example" },
      { kind: "p", text: "Take an M4 teacher choosing between a Sutton school (outer London, £45,672) and an Islington school (inner London, £47,961). The gross gap is £2,289. Outer-borough one-bed rents typically undercut Islington by substantially more than that annually, so the Sutton post wins on pure cash — until you price the commute, the catchment of opportunities, and inner London's larger threshold jump five years later (£5,518 there versus £1,806). The rational comparison spans a decade, not a year: our [inner London guide](/inner-london-teacher-pay-scale/) quantifies the other side of that trade." },
      { kind: "h2", text: "Where outer London teachers come from" },
      { kind: "p", text: "The band's schools draw heavily from three talent flows: graduates priced out of inner-London renting, experienced teachers trading central salaries for family housing, and Essex-Kent-Surrey commuters who keep their outer-London rate while living outside the capital entirely. That third group explains persistent confusion at the boundary — Havering pays outer rates to someone whose postcode is RM, while neighbouring Brentwood in Essex sits on the [fringe scale](/london-fringe-teacher-pay-scale/). School location, never residence, decides. Verify the exact band during negotiation and get it written into the offer letter; payroll errors at band boundaries are common enough that our mailbag sees them weekly." },

      { kind: "h2", text: "Four outer Londons: reading the band properly" },
      { kind: "ul", items: [
        "**Eastern arc (Havering, Bexley, Barking & Dagenham):** cheapest family housing, Crossrail/Elizabeth-line improved access, popular with commuter strategists.",
        "**Northern crescent (Enfield, Barnet, Waltham Forest):** mixed; Barnet rents approach inner levels, Enfield stays accessible.",
        "**Western edge (Hillingdon, Ealing, Harrow):** airport and metro employment pulls rents up; Ealing especially behaves semi-inner.",
        "**Southern ring (Croydon, Sutton, Bromley):** the classic family-housing belt; strongest real-terms value in the band for many households.",
      ]},
      { kind: "p", text: "One band, four markets. Treat 'outer London teacher pay' as a floor, not a forecast, and price the specific postcode." },
      { kind: "h2", text: "Why outer London schools fight harder to keep you" },
      { kind: "p", text: "Outer-borough schools sit close enough to inner-London employers that mid-career teachers receive constant poaching pressure, yet far enough out that their own pipelines thin. Retention responses vary: some trusts deploy retention payments inside the statutory discretion, others accelerate upper-range movement decisions, and many lean on TLR creation. Teachers who understand this dynamic negotiate better — not aggressively, just knowingly. When an external offer arrives, present it factually to your current school alongside what the [threshold jump](/upper-pay-range/) would mean internally; the resulting counter-offer often resolves both loyalty and arithmetic simultaneously." },
      { kind: "h2", text: "The long game: outer London across a whole career" },
      { kind: "p", text: "Project the band forward rather than judging its entry discount. An outer-London M6 (£52,241) exceeds every rest-of-England classroom ceiling except none — even England's U3 tops out lower outside the capital. Add lead practitioner potential reaching £86,136 here, and the band supports entire senior careers without ever crossing into leadership. Combined with family-viable housing, that makes outer London the pragmatic maximum for many teachers: nearly-inner money, materially-inner rent, leadership-scale headroom. Compare the endpoints directly in our [UK regional map](/teacher-pay-map/) before deciding which trade suits your decade ahead." },

      { kind: "h2", text: "Outer London recruitment cycles and timing your move" },
      { kind: "p", text: "Band dynamics shape hiring rhythms. Outer-borough schools lose staff to inner-London poaching mostly between January resignation deadlines and May starts, so spring vacancies cluster where negotiating leverage flips toward candidates. Teachers targeting the band should time applications accordingly: February-March adverts carry the year's best combination of choice and urgency, while autumn rounds fill predictably from waiting lists. The same cycle affects internal progression conversations — upper-range decisions made in March budget rounds differ meaningfully from ones deferred to June austerity reviews. Understanding when your school's money decisions actually happen converts generic advice ('apply early') into specific calendar behaviour. Pair the timing insight with the band's structural advantages from earlier sections and outer London stops being a compromise between inner rates and national rates; it becomes its own deliberate strategy with its own calendar." },

      { kind: "h2", text: "Outer London edge cases worth pre-empting" },
      { kind: "p", text: "Three situations generate disproportionate confusion. All-through schools spanning borough boundaries inherit one band from their main site; check which building anchors your contract. Split-site secondaries with distant annexes occasionally trigger internal placement debates — your contract's named base settles it, so read that clause before assuming. And teachers transferring from fringe schools frequently misreport their own history, quoting fringe rates as outer rates in applications; payroll cross-checks catch this eventually, but self-auditing first spares everyone the awkward correction letter. None of these alter entitlements — they merely delay them when documents go unread. The remedy costs five minutes: keep your original placement letters scanned, confirm your current band annually against the STPCD lists, and treat any unexplained payslip drift as a query rather than a rounding story." },
    ],
    faq: [
      { question: "What is the outer London teacher pay scale for 2026/27?", answer: "The main range runs £39,195 (M1) to £52,241 (M6), the upper range £54,047 to £58,119, and unqualified points run £27,727 to £40,831. All figures include the 3.5% award effective 1 September 2026." },
      { question: "How much do outer London teachers earn compared to elsewhere?", answer: "Between roughly £5,100 and £5,300 more than rest-of-England equivalents on the main range, but £2,400 to £2,600 less than inner London. The fringe band sits another £3,400 or so below outer London." },
      { question: "Which boroughs count as outer London?", answer: "The suburban ring including Barnet, Brent, Bromley, Croydon, Ealing, Enfield, Greenwich, Harrow, Havering, Hillingdon, Hounslow, Kingston, Merton, Redbridge, Richmond, Sutton and Waltham Forest. Always verify against current STPCD definitions before accepting a post." },
      { question: "Is outer London teaching pay worth it compared to inner London?", answer: "Often yes after housing. You sacrifice up to £6,564 gross against inner London, but outer-borough rents typically undercut central ones by more than that, especially for family-sized homes." },
      { question: "What does a UPS3 teacher earn in outer London?", answer: "£58,119 for 2026/27 — the highest standard classroom rate outside inner London, and identical to the lead practitioner range minimum in this band." },
      { question: "Does the outer London weighting apply if I live outside London?", answer: "Yes. Only the school's location matters. Teaching in an outer London borough while living in Kent or Essex still entitles you to the full outer London rate." },
      { question: "Do allowances rise with the London band?", answer: "TLR and SEN allowance minimums and maximums are national values, not regional. A TLR 1 pays between £10,530 and £17,819 anywhere in England — schools choose where within that span your payment sits." },
      { question: "What happens if my school changes band?", answer: "Your rate follows the school's current band. Boundary redefinitions are rare, but academy conversions and relocations can effectively change which scale applies — check your contract's variation clause." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "NEU — Pay scales (fringe, outer London and inner London)", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/pay-scales" },
      { label: "NASUWT — Pay Scales (Fringe, Outer London and Inner London)", url: "https://www.nasuwt.org.uk/advice/pay-pensions/pay-scales/pay-scales-fringe-outer-london-and-inner-london.html" },
      { label: "STRB — School Teachers' Review Body reports", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 8. LONDON FRINGE
  // ─────────────────────────────────────────────────────────────────────────
  // 8. LONDON FRINGE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "london-fringe-teacher-pay-scale",
    hub: "pay-scales",
    title: "London Fringe Teacher Pay Scale 2026/27",
    metaTitle: "Fringe Teacher Pay Scale 2026/27: All Salary Points",
    metaDescription:
      "The London fringe teacher pay scale for 2026/27: every M1–M6 and U1–U3 point, which districts qualify and how the premium compares with other England bands.",
    primaryKeyword: "london fringe teacher pay scale",
    secondaryKeywords: [
      "fringe teacher pay scale", "teacher pay scale fringe", "teacher pay scale london fringe",
      "teacher pay scales fringe", "teacher fringe pay scale", "where is london fringe teacher pay scale",
      "london fringe teacher pay", "teacher pay scale 26 27 fringe",
    ],
    calculator: "pay-scale",
    calculatorPreset: { region: "fringe" },
    intro:
      "The London fringe is the quietest of the four England pay bands — and the one most often mislabelled. Fringe schools paid £35,602 to £48,478 on the main range in 2026/27, a modest premium over the rest of England for commuting-belt locations. This page lists every point and settles the perennial question: which places actually count as fringe?",
    keyTakeaways: [
      "Fringe main range 2026/27: £35,602 (M1) to £48,478 (M6).",
      "Upper range runs £50,625 (U1) to £54,327 (U3).",
      "The premium over the rest of England is a flat-ish £1,492–£1,539 across the main range.",
      "Fringe areas include parts of Essex, Hertfordshire, Kent, Surrey, Berkshire, Buckinghamshire and Sussex.",
      "Unqualified teachers earn £24,908 to £38,003; the leadership spine tops out at £150,301.",
    ],
    blocks: [
      { kind: "h2", text: "Where is the London fringe teacher pay area?" },
      { kind: "p", text: "The STPCD defines the fringe as districts within reasonable commuting distance of London that fall outside inner and outer London. Typical included areas are:" },
      { kind: "ul", items: [
        "**Essex:** Basildon, Brentwood, Castle Point, Chelmsford (parts), Epping Forest, Gravesham-adjacent Thurrock and more.",
        "**Hertfordshire:** Broxbourne, Dacorum, East Herts, Hertsmere, St Albans, Three Rivers, Watford, Welwyn Hatfield.",
        "**Kent:** Dartford and Gravesham.",
        "**Surrey, Berkshire and Buckinghamshire:** most districts east of a defined line, including Slough and Spelthorne.",
        "**West Sussex:** Crawley and parts of the north of the county.",
      ]},
      { kind: "p", text: "Because the definitions are district-based rather than postcode-radius-based, neighbouring streets can sit in different bands. The single most common fringe question — \"where is the london fringe teacher pay scale area?\" — is best answered by checking your specific district against the current STPCD list rather than relying on maps." },

      { kind: "h2", text: "Fringe main pay range 2026/27" },
      { kind: "table", caption: "Main Pay Range — fringe vs rest of England, 2026/27", head: ["Point", "Fringe", "Rest of England", "Premium"], rows: [
        ["M1", "£35,602", "£34,068", "+£1,534"],
        ["M2", "£37,646", "£36,042", "+£1,604"],
        ["M3", "£39,979", "£38,400", "+£1,579"],
        ["M4", "£42,513", "£40,940", "+£1,573"],
        ["M5", "£45,069", "£43,529", "+£1,540"],
        ["M6", "£48,478", "£46,939", "+£1,539"],
      ]},
      { kind: "p", text: "The premium is deliberately small — around £1,500 — reflecting locations where commuting to London is possible but housing is not yet priced at capital levels. Compare that with [outer London's](/outer-london-teacher-pay-scale/) £5,100+ or [inner London's](/inner-london-teacher-pay-scale/) £7,600+." },

      { kind: "h2", text: "Upper and other fringe ranges" },
      { kind: "table", caption: "All fringe ranges 2026/27", head: ["Range", "Minimum", "Maximum"], rows: [
        ["Unqualified (UQ1–UQ6)", "£24,908", "£38,003"],
        ["Main (M1–M6)", "£35,602", "£48,478"],
        ["Upper (U1–U3)", "£50,625", "£54,327"],
        ["Lead Practitioner", "£55,331", "£83,346"],
        ["Leadership Group (L1–L43)", "£55,060", "£150,301"],
      ]},
      { kind: "p", text: "Threshold progression from M6 (£48,478) to U1 (£50,625) adds **£2,147** immediately in the fringe band." },

      { kind: "h2", text: "Is the fringe premium worth it?" },
      { kind: "p", text: "Honest framing: £1,500 buys little directly, but the band exists because these districts straddle two markets. The rational comparison is not fringe versus rest of England on salary alone, but total position after commuting costs. A teacher living in Dartford and working in a fringe school typically pays far less rent than an outer-London colleague while keeping a similar commute time." },
      { kind: "callout", tone: "tip", title: "Job adverts sometimes misstate the band", text: "Schools occasionally advertise fringe rates as outer London or vice versa. Verify the district against the STPCD list before negotiating — the difference is worth £3,600 a year at M1." },

      { kind: "h2", text: "Progression on the fringe" },
      { kind: "p", text: "Identical mechanics to every other England band: appraisal-based annual steps through the [main pay range](/main-pay-range/), threshold application onto the [upper range](/upper-pay-range/), discretionary upper-range movement. Regional banding changes only the cash attached to each point, never your entitlements." },

      { kind: "h2", text: "Common mistakes with the fringe scale" },
      { kind: "ul", items: [
        "**Assuming 'near London' means fringe** — only listed districts qualify; Reading and Oxford do not, despite proximity arguments.",
        "**Confusing the fringe with outer boroughs** — Croydon is outer London; Dartford is fringe; the M25 has nothing to do with it.",
        "**Expecting the full London premium** — the fringe uplift is roughly a fifth of inner London's, by design.",
        "**Ignoring historic blog tables** — pre-2026 figures understate every point by 3.5%.",
      ]},

      { kind: "h2", text: "Three offers, three bands: a concrete comparison" },
      { kind: "p", text: "Consider identical M2 teachers in Gravesham (fringe, £37,646), Bexley (outer London, £41,246) and Leeds (rest of England, £36,042):" },
      { kind: "table", caption: "Same teacher, three locations (M2, 2026/27)", head: ["Location", "Band", "Salary", "vs Leeds"], rows: [
        ["Gravesham, Kent", "Fringe", "£37,646", "+£1,604"],
        ["Leeds", "Rest of England", "£36,042", "—"],
        ["Bexley, London", "Outer London", "£41,246", "+£5,204"],
      ]},
      { kind: "p", text: "Gravesham beats Leeds by £1,604 gross but trails Bexley, twenty minutes away, by £3,600. Housing costs partially reorder that league — which is precisely why the fringe exists as a distinct band rather than London simply extending outward." },
      { kind: "h2", text: "Getting the band verified before you sign" },
      { kind: "ol", items: [
        "**Ask the school directly** which STPCD band applies — they must know, and evasiveness is itself informative.",
        "**Cross-check the district** against the current STPCD definitions rather than third-party maps of uncertain vintage.",
        "**Get it in the offer letter** — band, point and any allowances, in writing.",
        "**Flag discrepancies immediately** — a payroll error discovered in month eighteen is recoverable but painful.",
      ]},
      { kind: "h2", text: "When the fringe is the rational choice" },
      { kind: "p", text: "Fringe rates suit teachers who want London's labour market without its housing market: deep choice of schools, city wages for regional rents, and commutes measured in one train line. They suit second earners optimising household geography, and career-changers training near the capital who cannot absorb inner-zone costs during the qualification year. What the fringe does not suit is anyone maximising salary — for that, the [outer London](/outer-london-teacher-pay-scale/) and [inner London](/inner-london-teacher-pay-scale/) bands pay thousands more for the willingness to live closer in. Match the band to the priority, not the reverse." },

      { kind: "h2", text: "Housing arithmetic: a worked fringe example" },
      { kind: "p", text: "Take two identical M4 teachers. Teacher A works in Watford (fringe, £42,513) and rents locally. Teacher B works in Ealing (outer London, £45,672) and rents there. The gross gap favours B by £3,159. But typical local one-bed rents historically run enough cheaper in Watford that the net positions converge or invert once commuting and council tax enter. Neither town is universally right — the exercise proves only that fringe decisions require local numbers, not band labels. Run your own candidate towns through rent aggregators alongside the [take-home pay guide](/teacher-take-home-pay/) before signing anything." },
      { kind: "h2", text: "Progression timing quirks on the fringe" },
      { kind: "ul", items: [
        "**Mid-year starters** often join during appraisal cycles already closed — clarify when your first progression decision lands.",
        "**Two-term contracts** complicate evidence volume for threshold applications later; log everything contemporaneously.",
        "**Cross-boundary moves** (fringe school to outer-London school) transfer point cleanly but re-price instantly upward — worth remembering when fringe employers stall.",
      ]},
      { kind: "p", text: "None of these differ in law from anywhere else; they simply occur more often where turnover runs high and boundaries sit close." },
      { kind: "h2", text: "The fringe district list, treated as a checklist" },
      { kind: "p", text: "Because district membership — not proximity feeling — decides pay, verify against the STPCD's own listing every time: Essex corridors including Basildon, Brentwood and Thurrock; the Hertfordshire belt from Watford through St Albans to Broxbourne; Kent's Dartford and Gravesham; Slough and Spelthorne across the Thames; Crawley north of Sussex; and assorted Buckinghamshire districts east of their defined line. Towns teachers assume are included frequently are not — Hemel Hempstead debates resurface yearly, Reading never qualified despite the commute, and Milton Keynes sits outside despite the trains. Where a district genuinely borders two bands, the [outer London](/outer-london-teacher-pay-scale/) comparison becomes the decisive question: is the extra £3,600 worth the address?" },

      { kind: "h2", text: "What fringe employers say about their own band" },
      { kind: "p", text: "Fringe-head teachers lobby periodically for boundary revisions, arguing commuter costs have converged with outer-London realities; their counterparts across the boundary resist expansions that would dilute their own recruitment edge. Teachers inherit whatever equilibrium currently holds, which is why district verification beats advocacy reading. Meanwhile, practical compensations appear locally: some fringe schools offer parking, quieter campuses, tighter communities and faster promotion pipelines than their London-side competitors — non-cash compensation that rarely features in salary comparisons yet materially shapes careers. When evaluating a fringe offer, weight those factors honestly against the £3,600 the next band inward would add, remembering that promotion speed itself is compensation: assistant-head posts arrive years sooner in smaller fringe schools than in oversubscribed capital secondaries. Total-career arithmetic, again, beats single-line salary arithmetic everywhere it is tried." },

      { kind: "h2", text: "Fringe progression stories we hear repeatedly" },
      { kind: "p", text: "The same three narratives recur in fringe mailbag correspondence. First, the stalled U2 teacher whose outer-London neighbour crossed to U3 two years earlier purely through school discretion differences — portability solved it via a well-timed application across the boundary. Second, the Dartford instructor who assumed fringe rates applied county-wide, accepted an underplacement, and recovered years of arrears once district rules were cited in writing. Third, the returning returner — career break, then re-entry — who feared losing threshold status and had preserved it all along without realising. Each resolves through documentation and statute, not negotiation luck. The pattern behind all three: fringe teachers underestimate how portable and protected their positions are, and overestimate how much local discretion can erode them. Read your policy, keep your papers, and the band does exactly what it says." },
    ],
    faq: [
      { question: "What is the London fringe teacher pay scale for 2026/27?", answer: "The main range runs £35,602 (M1) to £48,478 (M6), the upper range £50,625 to £54,327, and unqualified points £24,908 to £38,003. The figures include the 3.5% award effective 1 September 2026." },
      { question: "Where does the London fringe pay band apply?", answer: "To listed commuting-belt districts outside inner and outer London — including much of Essex and Hertfordshire, Dartford and Gravesham in Kent, Slough, Spelthorne, Crawley and other named districts in the STPCD. District boundaries, not postcodes or the M25, decide inclusion." },
      { question: "How much is the fringe premium?", answer: "About £1,500 a year across the main range — £1,534 at M1 rising to £1,539 at M6 over rest-of-England rates. Outer London pays roughly £3,600 more than the fringe at the bottom of the range." },
      { question: "Is Dartford in the London fringe for teacher pay?", answer: "Yes. Dartford and Gravesham are the two Kent districts in the fringe band, which is why searches about Gravesend's status appear so often. Neighbouring Kent districts remain on the national rates." },
      { question: "What does a UPS3 teacher earn on the fringe?", answer: "£54,327 for 2026/27 — above the rest-of-England figure of £52,835 but well below outer London's £58,119." },
      { question: "Do I get fringe pay if I live in Essex but teach elsewhere?", answer: "No. Your rate follows the school's location, not your home. Teaching in a non-fringe area while living in Basildon pays national rates; teaching in a fringe district while living anywhere pays fringe rates." },
      { question: "Can my school pay me outside the fringe range?", answer: "Maintained schools must use the statutory ranges but can place you flexibly within them and add recruitment or retention payments. Academies have wider freedom, though nearly all track the statutory points." },
      { question: "How close is fringe pay to outer London?", answer: "Noticeably below: £3,593 separates the bands at M1 and £3,763 at M6. That gap is the practical price of moving one band outward toward the capital." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "NEU — Pay scales (fringe, outer London and inner London)", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/pay-scales" },
      { label: "NASUWT — Pay Scales (Fringe, Outer London and Inner London)", url: "https://www.nasuwt.org.uk/advice/pay-pensions/pay-scales/pay-scales-fringe-outer-london-and-inner-london.html" },
      { label: "STRB — School Teachers' Review Body reports", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 9. LONDON OVERVIEW
  // ─────────────────────────────────────────────────────────────────────────
  // 9. LONDON OVERVIEW
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-pay-scale-london",
    hub: "pay-scales",
    title: "Teacher Pay Scale London 2026/27: All Three Bands",
    metaTitle: "Teacher Pay Scale London 2026/27: Inner, Outer, Fringe",
    metaDescription:
      "London teacher pay in one place for 2026/27: inner, outer and fringe rates side by side from M1 to U3, plus which boroughs sit in each pay band.",
    primaryKeyword: "teacher pay scale london",
    secondaryKeywords: [
      "london teacher pay scale", "teacher salary london", "inner london teacher pay scale",
      "outer london teacher pay scale", "teacher pay scales", "teachers pay rise 2026",
      "teacher pay scale uk",
    ],
    calculator: "pay-scale",
    intro:
      "London runs three separate teacher pay bands, not one. For 2026/27 that means an M1 teacher earns £41,728 in inner London, £39,195 in outer boroughs or £35,602 on the fringe — with the gap widening every step up the scale. This page puts all three side by side so you can compare offers across the city accurately.",
    keyTakeaways: [
      "Three bands, one city: inner (£41,728 M1 start), outer (£39,195) and fringe (£35,602).",
      "The inner-to-fringe gap at U3 is £10,356 — the largest regional spread in UK classroom teaching.",
      "Which band applies depends solely on the school's location, never the teacher's home address.",
      "Inner London U3 at £64,683 remains the highest standard classroom salary in the country.",
      "Allowances (TLR, SEN) are national values; only base pay varies by band.",
    ],
    blocks: [
      { kind: "h2", text: "The three London bands side by side" },
      { kind: "table", caption: "Teacher pay scale London 2026/27 — main range by band", head: ["Point", "Inner London", "Outer London", "Fringe"], rows: [
        ["M1", "£41,728", "£39,195", "£35,602"],
        ["M2", "£43,712", "£41,246", "£37,646"],
        ["M3", "£45,786", "£43,403", "£39,979"],
        ["M4", "£47,961", "£45,672", "£42,513"],
        ["M5", "£50,665", "£48,438", "£45,069"],
        ["M6", "£54,131", "£52,241", "£48,478"],
      ]},
      { kind: "table", caption: "Upper range by band, 2026/27", head: ["Point", "Inner London", "Outer London", "Fringe"], rows: [
        ["U1", "£59,649", "£54,047", "£50,625"],
        ["U2", "£62,580", "£56,046", "£52,441"],
        ["U3", "£64,683", "£58,119", "£54,327"],
      ]},
      { kind: "p", text: "For comparison, the rest of England runs £34,068–£46,939 on the main range — details in our national [teacher pay scale guide](/teacher-pay-scale/)." },

      { kind: "h2", text: "Which band does each borough get?" },
      { kind: "ul", items: [
        "**Inner London** — Camden, City, Hackney, Hammersmith & Fulham, Haringey, Islington, Kensington & Chelsea, Lambeth, Lewisham, Newham, Southwark, Tower Hamlets, Wandsworth, Westminster.",
        "**Outer London** — Barnet, Bexley, Brent, Bromley, Croydon, Ealing, Enfield, Greenwich, Harrow, Havering, Hillingdon, Hounslow, Kingston, Merton, Redbridge, Richmond, Sutton, Waltham Forest.",
        "**Fringe** — commuting-belt districts outside the capital: much of Essex and Hertfordshire, Dartford & Gravesham, Slough, Spelthorne, Crawley and other named districts.",
      ]},
      { kind: "p", text: "Each band has its own dedicated page with full tables and edge cases: [inner](/inner-london-teacher-pay-scale/), [outer](/outer-london-teacher-pay-scale/) and [fringe](/london-fringe-teacher-pay-scale/)." },

      { kind: "h2", text: "What the premium looks like over a career" },
      { kind: "p", text: "Band differences grow as you progress because they attach to every point:" },
      { kind: "table", caption: "Inner London premium vs rest of England across a career", head: ["Stage", "Rest of England", "Inner London", "Extra per year"], rows: [
        ["Starting (M1)", "£34,068", "£41,728", "+£7,660"],
        ["Sixth year (M6)", "£46,939", "£54,131", "+£7,192"],
        ["Threshold crossed (U1)", "£49,134", "£59,649", "+£10,515"],
        ["Top of classroom scale (U3)", "£52,835", "£64,683", "+£11,848"],
      ]},
      { kind: "p", text: "Over a typical six-year climb from M1 to M6, choosing inner London over the rest of England adds over £44,000 of cumulative gross salary (derived by summing the yearly premiums)." },

      { kind: "h2", text: "Do allowances vary across London?" },
      { kind: "p", text: "No. TLR payments (£727–£17,819 depending on tier) and SEN allowances (£2,885–£5,689) carry identical national minimums and maximums everywhere in England. A Brent head of department and a Leeds head of department can hold the same TLR 2 value while their base salaries differ by thousands." },

      { kind: "h2", text: "Rent versus premium: the honest ledger" },
      { kind: "ul", items: [
        "**Inner London:** the £7,600+ premium rarely survives zone 1–2 rents for solo renters, but shared housing or long-standing tenancies change the maths entirely.",
        "**Outer London:** the sweet spot for many — £5,100+ premium with family housing still within reach.",
        "**Fringe:** ~£1,500 premium, best viewed as compensation for commuting costs rather than a lifestyle bonus.",
      ]},
      { kind: "callout", tone: "info", title: "Pension effects last beyond London", text: "Every higher-paid year builds more CARE pension permanently: 1/57th of pensionable pay accrues annually, so six inner-London years leave you with roughly £900 a year more pension than the same years elsewhere." },

      { kind: "h2", text: "Common mistakes when comparing London teacher pay" },
      { kind: "ul", items: [
        "**Treating 'London weighting' as one number** — there are two different London rates plus the fringe.",
        "**Checking your own postcode** — irrelevant; only the school's location counts.",
        "**Comparing gross offers without rent data** — always net off expected housing before judging.",
        "**Forgetting academies** — most track statutory rates but some add supplements; ask for the actual pay policy.",
      ]},

      { kind: "h2", text: "Monthly gross pay across all three bands" },
      { kind: "table", caption: "Monthly gross by band (annual ÷ 12, derived)", head: ["Point", "Inner", "Outer", "Fringe"], rows: [
        ["M1", "≈£3,477", "≈£3,266", "≈£2,967"],
        ["M6", "≈£4,511", "≈£4,353", "≈£4,040"],
        ["U3", "≈£5,390", "≈£4,843", "≈£4,527"],
      ]},
      { kind: "h2", text: "Edge cases the band maps do not show" },
      { kind: "ul", items: [
        "**Two schools, one street** — boundary roads mean a crossroads can separate bands; verify each school individually.",
        "**Academy supplements** — some trusts add retention payments on top of whichever band applies, changing effective totals.",
        "**All-through and special schools** — same banding rules, but SEN allowances stack separately and are easy to miss in adverts.",
        "**Relocations** — a school physically moving can drag its staff onto a different band; check variation clauses.",
      ]},
      { kind: "h2", text: "The career value of London years" },
      { kind: "p", text: "Even teachers who leave the capital after a few years keep permanent residue: pension built on higher pensionable pay, salary-history anchoring for future negotiations, and experience in high-accountability environments that recruiters prize. A six-year inner London stretch from M1 to M6 accumulates over £44,000 of extra gross salary (derived by summing yearly premiums) plus correspondingly deeper pension accrual — value that transfers out when you do. Model your own version with the [part-time calculator](/part-time-teacher-pay-calculator/) or the standard [pay calculator](/teacher-pay-calculator/) above, then compare destination regions in the [UK pay map](/teacher-pay-map/)." },

      { kind: "h2", text: "Boundary questions answered plainly" },
      { kind: "ul", items: [
        "**Can a school straddle bands?** No — each school holds exactly one band determined by its location; departments within it share fate.",
        "**Do independent schools use these bands?** Not necessarily; the statutory system binds maintained schools and frames academies, while independents set their own scales entirely.",
        "**Does banding affect pension contributions?** Contribution tiers respond to salary level, so higher-band teachers reach higher tiers faster — worth pricing before dismissing London's tax drag.",
        "**Who polices misbanding?** Pay policy complaints route through governors and ultimately the Secretary of State's jurisdiction for maintained schools.",
      ]},
      { kind: "h2", text: "Allowances behave differently inside London budgets" },
      { kind: "p", text: "National allowance ranges mean a Brent head of year and a Hull counterpart can hold identical TLR 2 values while their base salaries differ by thousands — making London allowances proportionally smaller and proportionally easier for schools to be generous with simultaneously. Practically: London adverts carry more allowance stacking because base-pay competition saturates, and candidates should read packages as base-plus-stack rather than fixating on either line. Verify stacking totals against statutory ceilings (TLR tiers and SEN ranges from our [national tables](/teacher-pay-scale/)) since enthusiastic packages occasionally overshoot legal maxima, creating cleanup pain later." },
      { kind: "h2", text: "London versus the near-home counties alternative" },
      { kind: "p", text: "Teachers weighing London offers against staying put usually frame it as salary versus rent, missing the third column: optionality. Inner-London CVs accumulate accelerated responsibility exposure — bigger departments, sharper accountability, quicker TLR acquisition — that compounds into future earnings wherever you land. Two inner years followed by relocation frequently beats five suburban years on lifetime trajectories, even though the suburban path wins month-to-month comfort. There is no universal answer, but there is a correct spreadsheet: project both paths decade-long using the [pay calculator](/teacher-pay-calculator/), price housing honestly, then decide with numbers instead of folklore. Our [inner](/inner-london-teacher-pay-scale/) and [outer](/outer-london-teacher-pay-scale/) guides supply the band-specific inputs." },

      { kind: "h2", text: "A decade view: what banding does over time" },
      { kind: "p", text: "Single-year comparisons undersell how regional choices compound. Consider two teachers entering simultaneously, one inner-London, one rest-of-England, both progressing normally. By year six the Londoner has banked roughly £44,000 additional gross (derived by summing yearly premiums) plus proportionally deeper pension accrual on every pound. Should they then relocate outward, they carry the higher accrued pension forever while adopting the new region's rate — the premium converts from flow into stock at departure. The reverse path sacrifices nothing equivalent, since lower historical bases cannot be retro-funded. This asymmetry explains veteran advice to young teachers weighing capital offers: early high-band years are uniquely valuable in a way later ones are not, because revaluation locks them in permanently. Model your own variant with the [pay calculator](/teacher-pay-calculator/), then check pension consequences in the [pension hub](/teacher-pension/) before deciding timelines." },

      { kind: "h2", text: "London pay questions that never age" },
      { kind: "ul", items: [
        "**'I live in zone 4 — why no uplift?'** Because uplifts follow school location; residential zones are irrelevant by design.",
        "**'My advert quotes one salary for all bands — legal?'** Maintained schools must differentiate by band; blended adverts usually hide a table you should request.",
        "**'Do I lose London weighting on maternity leave?'** Occupational schemes calculate from recent salary including banding, so the premium flows through proportionally.",
        "**'Can banding change mid-tenure?'** Only if the school's location classification changes — vanishingly rare, but contract variation clauses cover it.",
      ]},
    ],
    faq: [
      { question: "What do teachers earn in London in 2026/27?", answer: "Main-range teachers earn £41,728–£54,131 in inner London, £39,195–£52,241 in outer London and £35,602–£48,478 on the fringe. Upper-range teachers reach up to £64,683 in inner London." },
      { question: "Why does London have three teacher pay bands?", answer: "The STPCD splits England into four regions to reflect cost-of-living differences. London's three bands price the capital's housing gradient: innermost pays most, the commuting fringe least, with outer boroughs between." },
      { question: "Do I get London pay if I live outside the city?", answer: "Yes, if your school is in a London band. Banding follows the school's location exclusively — many teachers living in Essex, Kent or Hertfordshire earn outer-London or fringe rates." },
      { question: "Is teaching in London worth more after rent?", answer: "It depends heavily on housing situation. Solo renting in central zones typically absorbs the entire premium; flat-sharing, outer-borough living or existing tenancies can leave a real surplus, especially in outer London." },
      { question: "How big is the gap between inner and outer London teacher pay?", answer: "£2,533 at M1 widening to about £6,564 at U3. Both bands sit well above the fringe, which trails outer London by roughly £3,600 at the bottom of the main range." },
      { question: "Do TLR payments differ across London bands?", answer: "No. TLR 1, 2 and 3 and SEN allowance ranges are set nationally. Only basic scale salary varies by region, so London's premium applies purely to the base point." },
      { question: "What happens if my school moves between bands?", answer: "Your rate tracks the school's current band under the STPCD definitions. Genuine boundary changes are rare; relocations and academy conversions are the practical triggers to watch in your contract." },
      { question: "Where can I see full tables for each band?", answer: "We keep dedicated pages for [inner London](/inner-london-teacher-pay-scale/), [outer London](/outer-london-teacher-pay-scale/) and the [fringe](/london-fringe-teacher-pay-scale/), each with unqualified, leadership and lead practitioner figures included." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "NEU — Pay scales (fringe, outer London and inner London)", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/pay-scales" },
      { label: "NASUWT — Pay Scales (Fringe, Outer London and Inner London)", url: "https://www.nasuwt.org.uk/advice/pay-pensions/pay-scales/pay-scales-fringe-outer-london-and-inner-london.html" },
      { label: "STRB — School Teachers' Review Body reports", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 10. WALES
  // ─────────────────────────────────────────────────────────────────────────
  // 10. WALES
  // ─────────────────────────────────────────────────────────────────────────
  // 10. WALES
  // ─────────────────────────────────────────────────────────────────────────
  // 10. WALES
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-pay-scale-wales",
    hub: "pay-scales",
    title: "Teacher Pay Scale Wales 2026/27: Full Tables",
    metaTitle: "Teacher Pay Scale Wales 2026/27: All Salary Points",
    metaDescription:
      "The Welsh teacher pay scale for 2026/27: every M1–M6 and U1–U3 point, how IWPRB negotiations work and what makes Welsh teaching pay genuinely distinct.",
    primaryKeyword: "teacher pay scale wales",
    secondaryKeywords: [
      "wales teacher pay scale", "welsh teacher salary", "unqualified teacher salary wales",
      "teachers pay scales", "teacher pay scale uk", "school teacher pay scale",
      "teacher pay rise 2026",
    ],
    calculator: "pay-scale",
    calculatorPreset: { region: "wales" },
    intro:
      "Welsh teachers currently earn exactly what the England & Wales STPCD specifies: £34,068 to £46,939 on the main range for 2026/27. But Wales is not simply a copy of England — it runs its own negotiating body, its own appraisal reforms and its own professional standards. This page gives you every figure plus the Welsh specifics that actually matter.",
    keyTakeaways: [
      "Welsh main range 2026/27 mirrors the STPCD: £34,068 (M1) to £46,939 (M6).",
      "Upper range matches too: £49,134 to £52,835, threshold mechanics included.",
      "Wales negotiates through the Independent Welsh Pay Review Body (IWPRB), not England's STRB.",
      "No London bands exist in Wales — one national scale covers the whole country.",
      "Leadership endpoints reach £148,829 (L43); lead practitioner £81,860.",
    ],
    blocks: [
      { kind: "h2", text: "How Welsh teacher pay is decided" },
      { kind: "p", text: "Since devolution of teachers' pay powers, Wales sets its own framework through the **Independent Welsh Pay Review Body**, which recommends annual awards to the Welsh Government. Crucially, its current recommendation mirrors the STPCD values — so the familiar England & Wales figures apply throughout Wales. Divergence remains possible in future rounds because the processes are separate." },
      { kind: "p", text: "For context on how the wider award cycle works across Britain, our [pay rise guide](/teacher-pay-rise/) tracks each year's settlement." },

      { kind: "h2", text: "Main pay range in Wales 2026/27" },
      { kind: "table", caption: "Main Pay Range — Wales 2026/27", head: ["Point", "Salary", "Compared with rest of England"], rows: [
        ["M1", "£34,068", "identical"],
        ["M2", "£36,042", "identical"],
        ["M3", "£38,400", "identical"],
        ["M4", "£40,940", "identical"],
        ["M5", "£43,529", "identical"],
        ["M6", "£46,939", "identical"],
      ]},
      { kind: "p", text: "A newly qualified teacher in Cardiff or Wrexham starts at the same £34,068 as one in Liverpool or Leeds — unlike Scotland (£34,539) or Northern Ireland (£32,188)." },

      { kind: "h2", text: "Upper, unqualified and leadership ranges" },
      { kind: "table", caption: "All Welsh ranges 2026/27", head: ["Range", "Minimum", "Maximum"], rows: [
        ["Unqualified (UQ1–UQ6)", "£23,731", "£36,493"],
        ["Main (M1–M6)", "£34,068", "£46,939"],
        ["Upper (U1–U3)", "£49,134", "£52,835"],
        ["Lead Practitioner", "£53,847", "£81,860"],
        ["Leadership Group (L1–L43)", "£53,585", "£148,829"],
      ]},
      { kind: "p", text: "Threshold progression from M6 to U1 adds **£2,195** immediately, exactly as in England — the [upper pay range rules](/upper-pay-range/) apply unchanged." },

      { kind: "h2", text: "What genuinely differs in Wales" },
      { kind: "ul", items: [
        "**Negotiating machinery** — the IWPRB can recommend different awards than the STRB; identical outcomes so far are coincidence of policy, not obligation.",
        "**Appraisal and standards** — Wales runs its own professional standards and induction arrangements, which feed pay decisions.",
        "**No regional banding** — no London-style zones; Anglesey and Monmouthshire pay identically.",
        "**Curriculum-driven roles** — new curriculum implementation has shifted some TLR usage patterns in Welsh schools.",
      ]},
      { kind: "callout", tone: "info", title: "Watch future IWPRB rounds", text: "Because recommendations are made separately, a future year could see Wales diverge. When that happens, this page updates independently of the English tables." },

      { kind: "h2", text: "Cost-of-living reality check" },
      { kind: "p", text: "Identical gross pay stretches differently across the border: Welsh average rents sit well below most English regions, meaning real-terms take-home value is higher in much of Wales. A teacher on M4 keeps more after housing in Swansea than an identically paid peer in most English cities — though rural transport costs offset part of that in some counties." },

      { kind: "h2", text: "Common mistakes about the Welsh pay scale" },
      { kind: "ul", items: [
        "**Assuming Wales follows whatever England does automatically** — separate body, separate decision, coincidentally aligned outcome.",
        "**Applying London banding logic** — none exists in Wales; national rates apply everywhere in the country.",
        "**Mixing up Scottish comparisons** — Scotland's SNCT structure differs fundamentally, including Chartered Teacher instead of UPS.",
        "**Reading English-only union pages** — several unions publish separate Welsh tables; check the document's scope before quoting figures.",
      ]},

      { kind: "h2", text: "Practitioner and leadership pay in Wales" },
      { kind: "table", caption: "Beyond-the-classroom ranges, Wales 2026/27", head: ["Range", "Minimum", "Maximum"], rows: [
        ["Lead Practitioner", "£53,847", "£81,860"],
        ["Leadership Group (L1–L43)", "£53,585", "£148,829"],
        ["TLR 1", "£10,530", "£17,819"],
        ["SEN allowance", "£2,885", "£5,689"],
      ]},
      { kind: "p", text: "These mirror England because the underlying framework is shared even as the negotiating machinery diverges. Our [leadership pay guide](/leadership-pay-scale/) unpacks how the 43-point spine translates into actual headship salaries." },
      { kind: "h2", text: "Cardiff, Swansea and rural Wales: same pay, different lives" },
      { kind: "p", text: "One national scale means geographic arbitrage within Wales runs purely through living costs. Cardiff rents approach English regional-city levels, eroding the advantage locally; Swansea and the valleys restore it; Powys and Gwynedd flip the calculus again with cheap housing but real transport costs and thinner school choice. Teachers prioritising property typically find mid and north Wales stretch an M4 salary furthest, while those needing dual-career households gravitate to the Cardiff-Newport corridor despite the squeeze. Neither pattern changes your payslip — both change what it buys." },
      { kind: "h2", text: "Induction and professional standards: the Welsh differences that touch pay" },
      { kind: "p", text: "Wales runs its own induction arrangements and professional standards framework, and its curriculum reform has shifted how schools deploy TLR payments for curriculum leadership. None of this alters statutory points, but it shapes the advisory landscape: Welsh union branches publish Wales-specific guidance, appraisal documentation differs, and pay-policy disputes resolve through Welsh frameworks. If you trained in England and are moving west, expect familiar numbers wrapped in unfamiliar paperwork — budget an afternoon for the administrative transition and lean on your new school's business manager, who will have processed exactly this migration before." },

      { kind: "h2", text: "How Welsh pay rounds actually unfold" },
      { kind: "p", text: "The annual rhythm runs: IWPRB evidence gathering through autumn and winter, recommendations to ministers in spring, Welsh Government response ahead of September implementation. Union consultations punctuate each phase, and because Wales watches English settlements closely, political pressure tends to converge outcomes — as this year's mirrored figures demonstrate. Teachers tracking negotiations should follow the Welsh Government's pay pages directly rather than inferring from English announcements; premature assumptions have embarrassed commentators in years when timelines diverged." },
      { kind: "h2", text: "Welsh-medium and rural dimensions" },
      { kind: "p", text: "Welsh-medium schools face persistent recruitment competition, and some employers respond with market-facing supplements within their discretion — though nothing national mirrors London banding. Rural geography cuts differently: Powys and Gwynedd posts pair cheap housing with genuine isolation costs, long drives and thinner specialist provision. Neither dynamic changes statutory points; both change effective compensation. Candidates weighing a move west should price fuel and childcare as seriously as rent, then compare the result against English alternatives in the [regional map](/teacher-pay-map/)." },
      { kind: "h2", text: "Paperwork when moving from England to Wales" },
      { kind: "ol", items: [
        "**Transfer scale history** — obtain a service record confirming points reached; Welsh schools honour equivalent placement.",
        "**Check pension continuity** — the Teachers' Pension Scheme covers Wales, so membership continues uninterrupted, unlike Scottish moves.",
        "**Re-read induction obligations** if newly qualified — Welsh induction differs structurally from English ECT arrangements.",
        "**Update union branch** — Welsh-specific advice materials replace English equivalents, including separate pay-policy guidance.",
      ]},
      { kind: "p", text: "Administratively lighter than a Scotland move precisely because pensions and statutory framework remain shared — the figures match, and so does the machinery underneath them. Our [Scotland guide](/teacher-pay-scale-scotland/) contrasts the heavier crossing." },

      { kind: "h2", text: "Reading Welsh payslips against English habits" },
      { kind: "p", text: "Transplanted English teachers expect Welsh payslips to mirror home formats and occasionally misread them. Look instead for these specifics: pensionable-pay lines that should include any TLR exactly as England treats them; contribution tiers keyed to the same FTE logic described across our pension guides; and local variations in how schools label scale codes, which vary by payroll provider more than by nation. Nothing here changes entitlements — Wales shares the statutory framework — but payroll software differences generate queries that look like errors and resolve as formatting. Before raising a discrepancy, compare two consecutive months: genuine errors persist identically, formatting artefacts fluctuate with payment timing. Persistent mismatches deserve formal query through the school's payroll route, citing your contract letter and the current [scale tables](/teacher-pay-scale/) together; the combination resolves nearly every first-pass dispute without escalation." },

      { kind: "h2", text: "Welsh pay myths, retired efficiently" },
      { kind: "ul", items: [
        "**'Wales follows England automatically'** — separate body, separate decision, currently matching outcome. Watch IWPRB rounds directly.",
        "**'Welsh teachers earn less'** — statutory figures match; only living-cost arithmetic differs, usually in Wales's favour outside Cardiff.",
        "**'There must be a Cardiff weighting'** — there is none; one scale serves Brecon and Bangor identically.",
        "**'Union tables differ between nations'** — they restow the same shared framework wherever jurisdictions overlap.",
      ]},

      { kind: "h2", text: "Wales quick answers" },
      { kind: "ul", items: [
        "**Same scale as England — really?** Really. IWPRB recommendations currently mirror STPCD values point for point.",
        "**Do Welsh schools pay recruitment supplements?** Some do within their discretion, especially for Welsh-medium and shortage-subject posts.",
        "**What breaks if I move mid-year?** Nothing structural; scale history transfers and pension continuity is automatic under the shared scheme.",
        "**Where do updates land first?** The Welsh Government pay pages, ahead of union restatements — check there each spring.",
      ]},
      { kind: "callout", tone: "tip", title: "One habit covers both nations", text: "Because figures currently match, teachers who move between England and Wales rarely need new tables - they need updated district knowledge and refreshed pay-policy documents instead. Verify both each September against the current publications." },
    ],
    faq: [
      { question: "What is the teacher pay scale in Wales for 2026/27?", answer: "Identical to the England & Wales STPCD: £34,068 to £46,939 on the main range and £49,134 to £52,835 on the upper range. Unqualified teachers earn £23,731 to £36,493." },
      { question: "Is Welsh teacher pay the same as England?", answer: "Currently yes, point for point. But the amounts are set by Wales's own Independent Welsh Pay Review Body, whose current recommendation happens to mirror the STPCD — future divergence is possible." },
      { question: "Who decides teacher pay rises in Wales?", answer: "The Independent Welsh Pay Review Body recommends awards to the Welsh Government, which decides the final settlement. This is separate from England's STRB process even though recent outcomes have matched." },
      { question: "Do Welsh schools pay London weighting?", answer: "No. Wales has a single national scale with no regional banding, so a teacher in Cardiff earns the same as one in Caernarfon at the same point." },
      { question: "What does an experienced teacher earn in Wales?", answer: "UPS3 classroom teachers earn £52,835. Lead practitioner roles reach up to £81,860, and the leadership spine tops out at £148,829 for the largest headship posts." },
      { question: "How does Welsh teacher pay compare with Scotland?", answer: "Scotland's nearest main-range equivalents run slightly higher (£34,539–£48,516 versus £34,068–£46,939) and include a Chartered Teacher grade at £52,539 in place of Wales's upper range structure." },
      { question: "Do unqualified teachers in Wales use the same range?", answer: "Yes — £23,731 (UQ1) to £36,493 (UQ6), mirroring the England & Wales figures, with placement and progression governed by school pay policies." },
      { question: "Are TLR payments different in Wales?", answer: "The statutory allowance ranges match England: TLR 1 pays £10,530–£17,819, TLR 2 £3,650–£8,912, TLR 3 £727–£3,600 and SEN allowances £2,885–£5,689, all pensionable." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "Welsh Government — school teachers' pay and conditions", url: "https://www.gov.wales/school-teachers-pay-and-conditions" },
      { label: "NASUWT — Pay Scales (Wales)", url: "https://www.nasuwt.org.uk/advice/pay-pensions/pay-scales/pay-scales-wales.html" },
      { label: "SNCT — Scottish Negotiating Committee for Teachers handbook (comparison)", url: "https://www.snct.org.uk/wiki/index.php?title=Main_Page" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-pay-scale-scotland",
    hub: "pay-scales",
    title: "Teacher Pay Scale Scotland 2026/27: SNCT Tables",
    metaTitle: "Teacher Pay Scale Scotland 2026/27: SNCT Salaries",
    metaDescription:
      "Scottish teacher pay for 2026/27: SNCT salary points from probationer to Chartered Teacher, and how Scotland differs structurally from the English STPCD system.",
    primaryKeyword: "teacher pay scale scotland",
    secondaryKeywords: [
      "scottish teacher pay scale", "teacher salary scotland", "eis teacher pay scale",
      "teachers pay scales", "teacher pay rise 2026", "school teacher pay scale",
    ],
    calculator: "pay-scale",
    calculatorPreset: { region: "scotland" },
    intro:
      "Scotland runs its own teaching world: a separate negotiating committee, a different scale structure and no upper pay range at all. For 2026/27 the SNCT main scale runs from £34,539 to £48,516, with Chartered Teacher status reaching £52,539. This page maps every figure and explains what makes the Scottish system genuinely distinct.",
    keyTakeaways: [
      "Scottish main scale 2026/27 runs £34,539 to £48,516 across six points.",
      "Chartered Teacher pays £52,539 — Scotland's route beyond the classroom ceiling instead of England's UPS.",
      "Pay is negotiated by the Scottish Negotiating Committee for Teachers (SNCT), not England's STRB.",
      "One national scale applies everywhere from Edinburgh to Shetland — no regional banding.",
      "Probationer teachers complete a paid induction year, unlike England's ECT two-year structure.",
    ],
    blocks: [
      { kind: "h2", text: "How Scottish teacher pay is negotiated" },
      { kind: "p", text: "The **Scottish Negotiating Committee for Teachers** brings together COSLA employers, the Scottish Government and unions including the EIS. Agreements land in the SNCT Handbook rather than any UK-wide document, so Scottish settlements can and do diverge from English ones. The EIS publishes current [salary scales](https://www.eis.org.uk/pay-and-conditions-of-service/salary-scales) each round." },

      { kind: "h2", text: "The Scottish main pay scale 2026/27" },
      { kind: "table", caption: "SNCT main scale 2026/27 vs England & Wales equivalents", head: ["Point", "Scotland", "England & Wales", "Difference"], rows: [
        ["1 (M1)", "£34,539", "£34,068", "+£471"],
        ["2 (M2)", "£36,426", "£36,042", "+£384"],
        ["3 (M3)", "£38,361", "£38,400", "−£39"],
        ["4 (M4)", "£42,336", "£40,940", "+£1,396"],
        ["5 (M5)", "£45,468", "£43,529", "+£1,939"],
        ["6 (M6)", "£48,516", "£46,939", "+£1,577"],
      ]},
      { kind: "p", text: "Point labels differ between systems, so treat the comparison as nearest-equivalent rather than exact mapping. The pattern matters: Scotland starts slightly ahead and pulls clearly in front mid-scale." },

      { kind: "h2", text: "Beyond point 6: Chartered Teacher, not UPS" },
      { kind: "p", text: "There is no upper pay range in Scotland. Experienced teachers who want progression without management pursue **Chartered Teacher** status, paying **£52,539** for 2026/27 — sitting between England's U2 (£50,955) and U3 (£52,835). The route involves sustained professional learning and accreditation rather than a single threshold application." },
      { kind: "table", caption: "Where Scotland sits against England's experienced rates", head: ["Stage", "Scotland", "England equivalent"], rows: [
        ["Top of main scale", "£48,516", "£46,939 (M6)"],
        ["Experienced classroom grade", "£52,539 (Chartered Teacher)", "£49,134–£52,835 (U1–U3)"],
      ]},

      { kind: "h2", text: "What else works differently in Scotland" },
      { kind: "ul", items: [
        "**One national scale** — no London-style zones; Glasgow and Galashiels pay identically.",
        "**Paid probation year** — new teachers complete a guaranteed induction year with salary, rather than England's two-year ECT period on the main range.",
        "**35-hour week agreement** — contractual hours differ from England's structures, changing the effective hourly picture.",
        "**Different union landscape** — the EIS dominates negotiation, versus NEU/NASUWT pluralism in England.",
      ]},
      { kind: "callout", tone: "info", title: "Pension differences exist too", text: "Scottish teachers are in the Scottish Teachers' Superannuation Scheme, administered separately from the TPS. Our pension guides cover the English scheme; check SPPA materials for Scottish specifics." },

      { kind: "h2", text: "Common mistakes when reading Scottish salaries" },
      { kind: "ul", items: [
        "**Mapping points 1-to-1 onto M-points** — the spines evolved separately and step sizes differ.",
        "**Expecting UPS terminology** — 'UPS' searches in a Scottish context usually mean Chartered Teacher questions.",
        "**Assuming England's pay award percentages apply** — each SNCT round settles independently.",
        "**Ignoring the probation year** — first-year earnings patterns differ fundamentally from England's ECT years.",
      ]},

      { kind: "h2", text: "Step values up the Scottish scale" },
      { kind: "table", caption: "Progression gains on the SNCT main scale, 2026/27", head: ["Step", "Salary change", "Gain"], rows: [
        ["1 → 2", "£34,539 → £36,426", "+£1,887"],
        ["2 → 3", "£36,426 → £38,361", "+£1,935"],
        ["3 → 4", "£38,361 → £42,336", "+£3,975"],
        ["4 → 5", "£42,336 → £45,468", "+£3,132"],
        ["5 → 6", "£45,468 → £48,516", "+£3,048"],
      ]},
      { kind: "callout", tone: "info", title: "The point 3 to 4 jump dwarfs the rest", text: "Nearly £4,000 separates points 3 and 4 — the Scottish spine concentrates reward mid-career rather than tapering evenly. Teachers approaching point 3 should treat the following year's appraisal as their highest-stakes of the main scale." },
      { kind: "h2", text: "The Chartered Teacher route in practice" },
      { kind: "p", text: "Chartered Teacher status is Scotland's answer to a question England answers with the UPS: how do excellent classroom teachers progress without becoming managers? The Scottish route demands sustained accredited professional learning beyond standard CLPL, assessed against national expectations rather than a single threshold application. It pays £52,539 for 2026/27 and carries genuine standing in Scottish schools. Weigh the investment honestly: it competes for the same evenings as depute-headship training, and unlike England's discretionary upper-range movement, Chartered Teacher accreditation travels with you nationally once earned." },
      { kind: "h2", text: "Moving between the Scottish and English systems" },
      { kind: "p", text: "Cross-border moves happen constantly, so the mechanics are well trodden. Your scale history transfers as experience credit rather than a literal point mapping — Scottish point 4 lands near English M4/M5 depending on the school's assessment. Pension schemes differ: the Scottish Teachers' Superannuation Scheme is administered separately from the Teachers' Pension Scheme covering England and Wales, so a mid-career border crossing creates two pots with different rules rather than one continuous record. Take scheme-specific advice before resigning either side; our [pension guides](/teacher-pension/) cover the English scheme's side of that conversation. Salary-wise, compare destinations using the [UK regional map](/teacher-pay-map/) rather than headline averages." },

      { kind: "h2", text: "Probationer-year finances, Scottish style" },
      { kind: "p", text: "Scotland's guaranteed induction year gives probationers salaried, supported teaching at the first SNCT point — £34,539 for 2026/27 — rather than England's two-year ECT structure with its appraisal intensivity. Financial planning differs accordingly: one known salary from day one simplifies budgeting, though temporary-post uncertainty after the induction year catches many new teachers off guard. Build the job-search into spring of the induction year itself. New teachers arriving from English ITT should also note pension enrolment starts immediately under the Scottish scheme, beginning a separate accrual record that matters enormously decades later." },
      { kind: "h2", text: "The SNCT calendar and when settlements land" },
      { kind: "p", text: "Scottish negotiations typically conclude with implementation alongside the April academic-financial year rather than England's September cycle — a structural difference that surprises south-of-the-border readers checking Scottish tables in autumn expecting movement. Interim arrangements and multi-year deals have occasionally shifted timing further. Practical implication: Scottish salary planning runs half a year offset from English comparisons, so align months carefully when benchmarking offers across the border using our [England tables](/teacher-pay-scale/) and [regional map](/teacher-pay-map/)." },
      { kind: "h2", text: "Leadership beyond the classroom spine" },
      { kind: "p", text: "Scotland structures promoted-post salaries around specific roles — principal teacher, faculty head, depute headteacher, headteacher — with duties-based definitions rather than England's generic 43-point leadership group. Progression therefore follows job changes more visibly than spine movement, and acting-up arrangements carry defined rates. Aspiring leaders should map expected vacancy flow in their subject and region early; Scottish promotion timing concentrates where faculties consolidate. None of this touches classroom-scale entitlements covered above, but it shapes the decade after point 6 — and the Chartered Teacher alternative remains the classroom-bound answer to that same decade." },
      { kind: "h2", text: "Island and remote realities" },
      { kind: "p", text: "One national scale means Shetland pays identically to Shawlands. Remote schools combat resulting recruitment gaps through discretionary inducements — relocation support, remote-allowance experiments, housing assistance via local authorities — varying dramatically by council. Teachers considering island posts should negotiate practicalities explicitly: housing availability dominates salary in those calculations, and councils hold differing schemes. The national uniformity cuts both ways: unmatched simplicity for most, unresolved friction for the periphery." },

      { kind: "h2", text: "Comparing Scottish offers: subject and scarcity effects" },
      { kind: "p", text: "National uniformity notwithstanding, Scottish schools deploy the same discretionary toolkit as anywhere else when scarcity bites. STEM vacancies in particular attract packages combining placement credit for industry experience, accelerated access to responsibility payments, and occasional relocation assistance via council schemes. Because the SNCT spine fixes classroom rates tightly, differentiation concentrates in those discretionary channels rather than base pay — meaning candidates who negotiate quietly and document carefully capture real value without disturbing collegiality. Bring evidence of prior relevant work, request written confirmation of placement decisions, and treat any verbal inducement as pending until contracted. The pattern will feel familiar to anyone who has read our England guides closely: statute sets the floor, discretion sets the deal, documentation decides the disputes. Scotland simply runs narrower discretion over a firmer floor, which cuts both ways depending on your negotiating appetite and subject area." },

      { kind: "h2", text: "Scottish scale questions answered briefly" },
      { kind: "ul", items: [
        "**'Why does point 4 jump so much?'** SNCT spine design concentrates reward at the mid-career step; plan appraisals accordingly.",
        "**'Do I keep UPS if moving north?'** There is no UPS to keep — experience transfers as credit toward Scottish placement instead.",
        "**'Is Chartered Teacher worth the study load?'** It is the only classroom-bound route past point 6 in Scotland, so the alternative is management.",
        "**'When do Scottish awards apply?'** Typically April-aligned rather than September — check each settlement's circular for its effective date.",
      ]},
    ],
    faq: [
      { question: "What is the teacher pay scale in Scotland for 2026/27?", answer: "The SNCT main scale runs from £34,539 at point 1 to £48,516 at point 6, with Chartered Teacher status at £52,539. One national scale applies across all of Scotland with no regional variations." },
      { question: "Do Scottish teachers earn more than English ones?", answer: "At the top of the main scale yes — £48,516 versus £46,939 — though the very start of the scale is within £500. Beyond the classroom ceiling, Chartered Teacher (£52,539) sits inside England's upper range span (£49,134–£52,835)." },
      { question: "Why does Scotland not have an upper pay scale?", answer: "The SNCT structure never adopted England's UPS model. Instead, experienced teachers progress towards Chartered Teacher accreditation, which rewards sustained professional learning rather than a threshold application after six years." },
      { question: "Who decides teacher pay in Scotland?", answer: "The Scottish Negotiating Committee for Teachers — employers (COSLA), the Scottish Government and teaching unions — agrees pay through collective bargaining recorded in the SNCT Handbook, entirely separately from England's STRB process." },
      { question: "What do newly qualified teachers earn in Scotland?", answer: "Probationer teachers start on the first SNCT point, £34,539 for 2026/27, completing a salaried induction year. In England the comparable first main-range point is £34,068 but within a two-year ECT framework." },
      { question: "Is there London weighting for Scottish teachers?", answer: "No remote-area or city weighting exists on the SNCT scale — one national rate applies from Dumfries to Lerwick. Housing cost differences between Scottish cities are far smaller than London's gradient in any case." },
      { question: "Which union represents Scottish teachers on pay?", answer: "The Educational Institute of Scotland (EIS) is the largest and sits on the SNCT, alongside other unions. Its published salary scales are the practical reference most Scottish teachers use each year." },
      { question: "Does the Scottish scale include leadership pay?", answer: "Yes — Scottish headship and depute posts sit on separate SNCT salary arrangements outside the classroom spine, structured differently from England's 43-point leadership group. Check the SNCT Handbook for current ranges." },
    ],
    sources: [
      { label: "SNCT — Scottish Negotiating Committee for Teachers handbook", url: "https://www.snct.org.uk/wiki/index.php?title=Main_Page" },
      { label: "EIS — Current Salary Scales", url: "https://www.eis.org.uk/pay-and-conditions-of-service/salary-scales" },
      { label: "SSTA — Salary Scales", url: "https://ssta.org.uk/salaryscales/" },
      { label: "STPCD 2026 (comparison figures)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 12. NORTHERN IRELAND
  // ─────────────────────────────────────────────────────────────────────────
  // 12. NORTHERN IRELAND
  // ─────────────────────────────────────────────────────────────────────────
  // 12. NORTHERN IRELAND
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "ni-teacher-pay-scale",
    hub: "pay-scales",
    title: "NI Teacher Pay Scale 2026/27: Northern Ireland Rates",
    metaTitle: "NI Teacher Pay Scale 2026/27: All Salary Points",
    metaDescription:
      "Northern Ireland teacher pay for 2026/27: every main and upper range point, how the Department of Education settlement works and honest NI comparisons.",
    primaryKeyword: "teacher pay scale ni",
    secondaryKeywords: [
      "ni teacher pay scale", "northern ireland teacher salary", "teacher salary northern ireland",
      "teachers pay scales", "school teacher pay scale", "teacher pay rise 2026",
    ],
    calculator: "pay-scale",
    calculatorPreset: { region: "northern-ireland" },
    intro:
      "Northern Ireland pays teachers on its own scale — the lowest headline rates in the UK, running £32,188 to £44,342 on the main range for 2026/27. But lower gross pay meets a lower cost of living, and the structure will feel familiar to anyone who knows England's system. This page lists every point and explains how the NI settlement actually works.",
    keyTakeaways: [
      "NI main range 2026/27 runs £32,188 (point 1) to £44,342 (point 6).",
      "Upper range: £46,589 to £50,085 — about £2,750 below English equivalents at each end.",
      "Pay is set by the Department of Education through its own pay negotiating machinery.",
      "Unqualified teachers earn £22,478 to £34,565.",
      "The gap to England narrows in percentage terms but never closes: point 6 trails by £2,597.",
    ],
    blocks: [
      { kind: "h2", text: "How teacher pay is set in Northern Ireland" },
      { kind: "p", text: "The **Department of Education (DE)** sets teachers' pay and conditions in Northern Ireland, informed by its own pay negotiating body rather than England's STRB or Scotland's SNCT. Awards historically track British settlements closely — the same pressures operate — but timing and percentages are decided independently, and implementation has sometimes lagged due to Stormont's stop-start functioning." },
      { kind: "p", text: "Employing authorities — the Education Authority for most schools, plus voluntary grammar and maintained sectors — apply the agreed scales." },

      { kind: "h2", text: "NI main pay range 2026/27" },
      { kind: "table", caption: "NI main range vs rest of England, 2026/27", head: ["Point", "N. Ireland", "Rest of England", "Gap"], rows: [
        ["1", "£32,188", "£34,068", "−£1,880"],
        ["2", "£34,037", "£36,042", "−£2,005"],
        ["3", "£36,271", "£38,400", "−£2,129"],
        ["4", "£38,669", "£40,940", "−£2,271"],
        ["5", "£41,109", "£43,529", "−£2,420"],
        ["6", "£44,342", "£46,939", "−£2,597"],
      ]},
      { kind: "p", text: "A newly qualified teacher in Belfast starts almost £1,900 below their Liverpool counterpart, and the absolute gap widens slightly with each step." },

      { kind: "h2", text: "Upper and unqualified ranges" },
      { kind: "table", caption: "All Northern Ireland ranges 2026/27", head: ["Range", "Minimum", "Maximum"], rows: [
        ["Unqualified", "£22,478", "£34,565"],
        ["Main (points 1–6)", "£32,188", "£44,342"],
        ["Upper", "£46,589", "£50,085"],
      ]},
      { kind: "p", text: "Crossing the threshold adds **£2,247** immediately (£44,342 → £46,589) — structurally identical to England's M6-to-U1 move described in our [upper pay range guide](/upper-pay-range/). Leadership arrangements exist separately through principal and vice-principal salary ranges set by school enrolment bands." },

      { kind: "h2", text: "Does the lower pay matter after living costs?" },
      { kind: "p", text: "Partially offset, not eliminated. Belfast rents run well below English regional cities in many categories, and overall price levels are lower, so real purchasing power narrows the gap substantially — though cross-border comparisons with the Republic add a further dimension for border-county teachers, since southern Irish salaries differ again entirely." },
      { kind: "callout", tone: "warn", title: "Watch pay-claim backdating", text: "NI settlements have sometimes been implemented later than September. When that happens, the award is normally backdated — check your first post-agreement payslip carefully if you work in NI schools." },

      { kind: "h2", text: "Progression and conditions" },
      { kind: "p", text: "Structure mirrors England: annual appraisal-linked progression through six main points, threshold application onto three upper points, allowances for responsibility posts. Differences concentrate in process rather than shape — separate union structures (UTU, NASUWT and others active locally), separate pension administration under the NI Teachers' Superannuation Scheme, and different induction arrangements." },

      { kind: "h2", text: "Common mistakes when comparing NI pay" },
      { kind: "ul", items: [
        "**Assuming UK-wide figures** — 'UK teacher salary' statistics blend four systems; NI drags the average down visibly.",
        "**Comparing gross without housing** — Belfast living costs soften much of the gap for owner-occupiers especially.",
        "**Confusing the Republic of Ireland's system** — entirely separate country, currency, scale and pension scheme.",
        "**Expecting London banding** — none exists; one scale covers all six counties.",
      ]},

      { kind: "h2", text: "Leadership pay beyond the classroom spine" },
      { kind: "p", text: "Northern Ireland structures leadership around principal and vice-principal groups tied to school enrolment bands rather than England's single 43-point leadership spine. Consequences follow: a large Belfast grammar and a small Fermanagh primary sit on deliberately different leadership scales, and cross-community school mergers occasionally trigger re-banding exercises that union reps watch closely. Classroom teachers feel none of this directly — the six main points and three upper points behave exactly like their English counterparts — but aspiring leaders should study the enrolment-band tables before assuming English-style L-point arithmetic transfers. It does not." },
      { kind: "h2", text: "The cost-of-living offset, honestly stated" },
      { kind: "p", text: "Lower gross pay buys more in Belfast than the raw numbers suggest: housing costs run well below most British cities, commuting expenses are modest, and childcare compares favourably with English urban rates. What the offset cannot erase is portability arithmetic — an NI-trained teacher moving to Manchester takes an immediate £1,880+ gross jump at M1-equivalent, while the reverse direction stings identically. Households split across that calculation should price five-year plans, not single years. The [UK regional map](/teacher-pay-map/) ranks every option side by side." },
      { kind: "h2", text: "Pay disputes and union representation in NI" },
      { kind: "p", text: "Northern Ireland's union landscape includes the Ulster Teachers' Union alongside NASUWT and others, negotiating jointly through NI machinery. Industrial action and pay campaigns have historically mirrored British timing loosely rather than precisely, and settlements sometimes arrive with retroactive effect — making payslip vigilance genuinely valuable here. Keep your own record of circular dates and applied rates for the first month after any announced award; retrospective corrections are routine but rely on someone noticing. Our [pay rise guide](/teacher-pay-rise/) tracks the British settlements that NI rounds typically shadow." },

      { kind: "h2", text: "Every NI range in one table" },
      { kind: "table", caption: "Complete Northern Ireland ranges, 2026/27", head: ["Range", "Minimum", "Maximum"], rows: [
        ["Unqualified", "£22,478", "£34,565"],
        ["Main (points 1–6)", "£32,188", "£44,342"],
        ["Upper", "£46,589", "£50,085"],
      ]},
      { kind: "p", text: "Compact by design: Northern Ireland runs fewer moving parts than Britain's band systems, with no regional variation and leadership handled through enrolment-banded groups described below." },
      { kind: "h2", text: "Mortgages, references and the NI rate" },
      { kind: "p", text: "Lower nominal salaries interact with lending in ways worth anticipating. Affordability assessments multiply income multiples, so NI teachers borrow against smaller headline figures even where repayment capacity resembles British peers — a friction worth discussing with lenders familiar with Education Authority pay scales, which are stable, verifiable and well regarded for security. Reference requests from cross-border or British employers likewise translate cleanly: your point position communicates precisely, letting receiving schools place you correctly on their own scales. Keep circulars and payslips archived; they function as the documentary spine of every future application." },
      { kind: "h2", text: "How NI negotiations coordinate with Britain" },
      { kind: "p", text: "Teachers' side bargaining in NI operates through joint negotiating machinery bringing unions together before engaging the employer and Department. Settlements frequently shadow British awards in size while trailing in timing, and Stormont's intermittent functioning has historically stretched implementation windows — hence the backdating vigilance flagged earlier. For teachers the practical playbook is simple: note announced British percentages as a leading indicator, await the NI circular as the binding instrument, then verify payslip application the following month. Our [pay rise guide](/teacher-pay-rise/) tracks British rounds; NI circulars complete the picture." },

      { kind: "h2", text: "NI teaching careers: the longer arc" },
      { kind: "p", text: "Entry competition in Northern Ireland runs famously fierce relative to place availability, shaping career arithmetic before salary even enters. Newly qualified teachers sometimes wait through substitute-work periods between permanent posts, which affects pension continuity and progression pacing in ways British readers rarely encounter. The financial counterweights are real though: substitution service counts toward experience, permanent appointments tend toward stability once secured, and lower living costs stretch interrupted incomes further than British equivalents would. Plan accordingly — maintain contemporaneous records of every substitute engagement, verify pension contributions for fractional periods, and treat the first permanent post as the career's true starting line. From there the familiar architecture applies: six main points climbed on appraisal evidence, threshold application onto the upper range, leadership via enrolment-banded groups. The [regional map](/teacher-pay-map/) shows what the same career draws elsewhere; NI's version trades headline size for stability once established." },

      { kind: "h2", text: "NI pay queries resolved in one line each" },
      { kind: "ul", items: [
        "**'Is there London-style banding?'** No — one national scale covers all six counties.",
        "**'Do NI teachers join the TPS?'** No — the NI scheme runs separately with its own administration.",
        "**'Are awards backdated if late?'** Historically yes; verify your first post-circular payslip regardless.",
        "**'Does substitute service count toward progression?'** It counts as service; permanent-post pacing still dominates long-term outcomes.",
      ]},

      { kind: "h2", text: "NI quick answers" },
      { kind: "ul", items: [
        "**Lowest in the UK?** On paper yes; after living costs the gap narrows substantially but never closes.",
        "**Upper range entry?** Threshold application after sustained good teaching, mirroring English mechanics exactly.",
        "**Pension continuity with Britain?** Separate scheme — take advice before crossing borders mid-career.",
        "**When do settlements apply?** Via DE circulars; timing has historically trailed British announcements sometimes with backdating.",
      ]},
    ],
    faq: [
      { question: "What is the teacher pay scale in Northern Ireland for 2026/27?", answer: "Six main-range points from £32,188 to £44,342, an upper range of £46,589 to £50,085, and an unqualified range of £22,478 to £34,565. One national scale applies across all of Northern Ireland." },
      { question: "Do Northern Ireland teachers earn less than those in England?", answer: "Yes, between roughly £1,880 and £2,600 less per year at equivalent main-range points, and about £2,750 less at both ends of the upper range. Lower living costs, particularly housing, offset part of the difference." },
      { question: "Who decides teacher pay in Northern Ireland?", answer: "The Department of Education sets pay and conditions through its own machinery, independent of England's STRB, Wales's IWPRB and Scotland's SNCT. Settlements usually track British awards closely but are decided separately." },
      { question: "Is there an upper pay scale in Northern Ireland?", answer: "Yes — three upper points running £46,589 to £50,085 for 2026/27, mirroring the English U1–U3 structure including threshold entry after sustained high-quality teaching." },
      { question: "What do unqualified teachers earn in Northern Ireland?", answer: "Between £22,478 and £34,565 across six points — the lowest unqualified rates in the UK, though also paired with the lowest typical housing costs." },
      { question: "How does NI teacher pay compare with the Republic of Ireland?", answer: "They are entirely separate systems: different country, currency, negotiating bodies and pension schemes. Cross-border comparisons need currency conversion and careful like-for-like role mapping, so treat any simple table with caution." },
      { question: "Do NI teachers get the same pension as English ones?", answer: "No single answer: benefits are similar in design but administered separately through the NI Teachers' Superannuation Scheme rather than the Teachers' Pension Scheme that covers England and Wales." },
      { question: "Are there London-style regional payments in Northern Ireland?", answer: "No. The scale is national — a teacher in Derry earns exactly what a teacher in Bangor earns at the same point, with no urban or remote-area supplements." },
    ],
    sources: [
      { label: "Department of Education Northern Ireland — teachers' pay and conditions", url: "https://www.education-ni.gov.uk/articles/teachers-pay-and-conditions-service" },
      { label: "Department of Education NI — pay circulars", url: "https://www.education-ni.gov.uk/articles/pay-circulars" },
      { label: "NASUWT — Pay Scales (Northern Ireland)", url: "https://www.nasuwt.org.uk/advice/pay-pensions/pay-scales/pay-scales-northern-ireland.html" },
      { label: "STPCD 2026 (comparison figures)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 13. NEU PAY SCALES
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "neu-teacher-pay-scales",
    hub: "pay-scales",
    title: "NEU Teacher Pay Scales 2026/27 Explained",
    metaTitle: "NEU Teacher Pay Scales 2026/27: Tables & Advice",
    metaDescription:
      "NEU published pay scales explained for 2026/27: what the union publishes each year, how its tables relate to the STPCD and where NEU pay advice earns its keep.",
    primaryKeyword: "neu teacher pay scales",
    secondaryKeywords: [
      "neu pay scales", "neu pay scale", "national education union pay scales",
      "teacher pay scales", "teachers pay rise 2026", "school teacher pay scale",
      "pay scale teachers",
    ],
    calculator: "pay-scale",
    intro:
      "The National Education Union publishes the most-used pay scale tables in English teaching — its 'Pay scales – England' page draws tens of thousands of visits every autumn. This guide explains what the NEU actually publishes, why its figures match the STPCD, and where union pay advice adds value beyond raw numbers.",
    keyTakeaways: [
      "NEU pay scale figures mirror the statutory STPCD points — £34,068 to £46,939 on the main range for 2026/27.",
      "The union republishes tables after each STRB settlement, typically around September.",
      "NEU pay advice extends beyond tables into progression disputes, threshold appeals and pay policy reviews.",
      "Union membership is not required to be paid statutory rates — they apply regardless.",
      "'NEU pay scales' searches mostly want one thing: this year's confirmed numbers.",
    ],
    blocks: [
      { kind: "h2", text: "What the NEU publishes each year" },
      { kind: "p", text: "After each annual settlement, the NEU refreshes its pay scales pages covering England, plus separate guidance for London bands and devolved nations. The core content is the statutory ranges themselves:" },
      { kind: "table", caption: "Core NEU-published rates 2026/27, rest of England", head: ["Range", "Minimum", "Maximum"], rows: [
        ["Main (M1–M6)", "£34,068", "£46,939"],
        ["Upper (U1–U3)", "£49,134", "£52,835"],
        ["Unqualified (UQ1–UQ6)", "£23,731", "£36,493"],
        ["Lead Practitioner", "£53,847", "£81,860"],
        ["Leadership (L1–L43)", "£53,585", "£148,829"],
      ]},
      { kind: "p", text: "These match our [full UK pay scale](/teacher-pay-scale/) exactly because both derive from the same statutory document — the union is restating STPCD values, not setting independent rates." },

      { kind: "h2", text: "Why so many teachers search NEU-branded terms" },
      { kind: "p", text: "\"Neu pay scales\" and \"national education union pay scales\" dominate search because the union's page historically ranked first and became the habit reference point. Teachers also conflate two things the union provides:" },
      { kind: "ul", items: [
        "**Scale tables** — public information, identical to statutory figures, no membership needed.",
        "**Pay advice** — members-only support for withheld increments, threshold refusals, TLR disputes and maternity/pay-policy issues.",
      ]},
      { kind: "p", text: "You are legally entitled to statutory rates whether or not you belong to any union. What membership buys is representation when those entitlements are contested." },

      { kind: "h2", text: "Where union pay advice genuinely helps" },
      { kind: "ul", items: [
        "**Withheld progression** — challenging an appraisal-based refusal through the appeal process.",
        "**Threshold applications** — reviewing evidence quality before submission windows close.",
        "**Pay policy gaps** — spotting where a school's policy conflicts with the STPCD.",
        "**Part-time FTE errors** — payroll mistakes are common and unions audit them effectively.",
      ]},
      { kind: "callout", tone: "info", title: "Other unions publish too", text: "NASUWT maintains parallel tables and the EIS covers Scotland. Figures agree wherever jurisdictions overlap — see our NASUWT scales explainer for the comparison." },

      { kind: "h2", text: "NEU figures versus this year's award" },
      { kind: "table", caption: "What changed in the NEU's 2026/27 tables", head: ["Range", "2025/26 position (derived)", "2026/27", "Change"], rows: [
        ["M1", "≈£32,916", "£34,068", "+3.5%"],
        ["M6", "≈£45,352", "£46,939", "+3.5%"],
        ["U3", "≈£51,048", "£52,835", "+3.5%"],
        ["TLR 2 minimum", "≈£3,527", "£3,650", "+3.5%"],
      ]},
      { kind: "p", text: "Every line moved by the uniform 3.5%, confirming the union simply uprated statutory values rather than negotiating separate amounts." },

      { kind: "h2", text: "Common questions about NEU pay scales" },
      { kind: "ul", items: [
        "**Are NEU rates binding on my school?** Only insofar as they restate the STPCD; maintained schools must comply with the statutory document itself.",
        "**Do academies follow NEU tables?** They follow their own policies, which overwhelmingly track the same numbers.",
        "**Does the union publish Scottish rates?** Scotland runs separately under SNCT machinery, led locally by the EIS.",
        "**When do new tables appear?** Typically shortly after the government confirms the STRB-recommended award, ahead of the September effective date.",
      ]},

      { kind: "h2", text: "Which union covers which nation" },
      { kind: "table", caption: "Union pay publication coverage at a glance", head: ["Union", "Heartland", "Publishes scales for"], rows: [
        ["NEU", "England & Wales", "England, London bands, Wales guidance"],
        ["NASUWT", "UK-wide", "England, London bands, Wales, NI"],
        ["EIS", "Scotland", "SNCT Scottish scales"],
        ["NAHT", "UK-wide leaders", "Leadership-focused materials"],
      ]},
      { kind: "p", text: "Overlap causes no conflict: wherever two unions publish the same jurisdiction, figures agree because both restate government rates. Choose membership on representation quality and workplace presence, never on the tables themselves — see our [NASUWT explainer](/nasuwt-teacher-pay-scales/) for the parallel set." },
      { kind: "h2", text: "How union pressure shapes the numbers" },
      { kind: "p", text: "Published tables are downstream of advocacy. Union consultation responses, pay campaigns and — in recent memory — industrial action have all pushed ministerial decisions on STRB-recommended awards. The 3.5% uplift now sitting in every 2026/27 table arrived through that machinery: recommended, negotiated, accepted, then republished by the unions as reference material. Understanding the pipeline matters for expectations: unions influence the *rate of change*, not the published values themselves, which is why their tables never differ from statutory figures yet their campaigns visibly move them year to year." },
      { kind: "h2", text: "Getting practical value from NEU pay resources" },
      { kind: "ol", items: [
        "**Download the current scales PDF** each autumn and discard the old one — stale copies cause most confusion.",
        "**Read your school's pay policy against them** — mismatches between policy language and statutory ranges are common findings.",
        "**Log your progression history** — dates, points, decisions — while records are fresh.",
        "**Escalate early** when something looks wrong; pay queries age badly and representation works better prospectively.",
      ],
      },
      { kind: "p", text: "Pair the union view with independent calculators: this site's [pay calculator](/teacher-pay-calculator/) turns any scale point into take-home figures, and the [pension contributions guide](/teacher-pension/) shows what each point quietly buys in retirement income." },

      { kind: "h2", text: "How STRB consultation actually absorbs union input" },
      { kind: "p", text: "Each cycle, the School Teachers' Review Body invites written evidence from government, unions and employers, takes oral sessions, then recommends award levels ministers accept, modify or reject. Unions file evidence built from member surveys on workload, retention and living costs; ministers weigh inflation, budgets and recruitment data. Published scales then encode whatever emerged. Understanding the pipeline reframes union membership economics: individual subscriptions fund collective infrastructure that moves the very tables this page describes — influence delivered upstream of publication, never visible in the tables themselves." },
      { kind: "h2", text: "An autumn checklist for school pay representatives" },
      { kind: "ol", items: [
        "**Refresh the scales display** in the staffroom the week new figures publish — stale posters breed stale expectations.",
        "**Cross-check the school pay policy amendment** against updated statutory language before governors ratify it.",
        "**Diary the appraisal window** and remind members evidence beats recollection.",
        "**Spot-check new joiners' placements** against their contracts; September churn breeds transcription errors.",
        "**Log threshold outcomes** school-wide to detect patterns worth raising collectively.",
      ]},
      { kind: "h2", text: "Worked micro-example: auditing one payslip against the tables" },
      { kind: "p", text: "Take an M3 teacher on the London fringe expecting £39,979. Monthly gross should read approximately £3,332 (£39,979 ÷ 12, derived). Suppose the payslip shows £3,290 — roughly £500 a year adrift. Likely culprits ranked by frequency: FTE fraction applied incorrectly, TLR uplifted wrongly across the award, pensionable-pay field lagging, or a stale pay-point code surviving a school reorganisation. Each traces to a specific correction request; none fixes itself. Ten minutes against the published tables converts quiet loss into recovered salary — the entire practical value of keeping scale references current. Deeper projection needs live tools: the [take-home guide](/teacher-take-home-pay/) and [pension calculator](/teacher-pension-calculator/) extend the check beyond gross." },

      { kind: "h2", text: "Common NEU-table misunderstandings, answered" },
      { kind: "ul", items: [
        "**'My school pays below the NEU figure'** — investigate whether an unqualified or lead-practitioner code is being misapplied before assuming breach.",
        "**'NEU says I get automatic increments'** — the union advocates annual progression; statute permits appraisal conditions. Policy wording decides.",
        "**'London figures apply to my zone-6 school'** — band follows borough lists, not TfL zones. Check the district, not the travelcard.",
        "**'The PDF differs from your site'** — archive copies circulate endlessly; compare publication dates before treating either as current.",
      ]},
      { kind: "p", text: "Every item above traces to scope confusion rather than genuine conflict between sources — the figures themselves never diverge from statutory values. Resolve scope first (which nation, which band, which year), and most table disagreements evaporate. Whatever survives that filter becomes a legitimate payroll query backed by both union and government references simultaneously, which is as strong as written positions get." },

      { kind: "h2", text: "When NEU advice and your payslip disagree" },
      { kind: "p", text: "Occasionally members arrive holding union guidance that seems contradicted by their payslip. Before escalating, sequence the check: confirm which year's tables you are both reading; confirm band and point from your contract rather than memory; confirm FTE treatment matches your working pattern; then compare month-over-month rather than single snapshots. Most contradictions dissolve at one of those four gates — stale PDFs and remembered points being the usual culprits. What survives is a genuine discrepancy worth formal query, and it arrives documented in a form payroll can act on immediately: table citation, contract citation, payslip figure, expected figure. That four-line structure resolves disputes faster than any tone could, and it works identically whether or not membership representation ever enters the thread." },
    ],
    faq: [
      { question: "What are the NEU teacher pay scales for 2026/27?", answer: "Identical to the statutory STPCD figures: main range £34,068–£46,939, upper range £49,134–£52,835 and unqualified range £23,731–£36,493 in the rest of England, with higher inner London equivalents." },
      { question: "Do I have to be an NEU member to use its pay scales?", answer: "No. The published tables restate statutory rates that apply to all teachers regardless of union membership. Membership matters for advice and representation when pay goes wrong, not for the numbers themselves." },
      { question: "Are NEU pay scales different from government rates?", answer: "No. The union republishes STPCD values after each settlement. Its influence operates through recommending award levels during the STRB consultation process, not through setting separate rates." },
      { question: "Can the NEU help if my school refuses a pay increment?", answer: "Yes — withheld progression is one of the most common pay disputes members raise. Support typically covers evidence review, formal appeal preparation and representation at governing body committees." },
      { question: "Does the NEU publish scales for Wales, Scotland and NI?", answer: "It publishes Wales guidance alongside England, but Scotland's SNCT system and Northern Ireland's DE-led process are covered mainly by their respective national unions, particularly the EIS north of the border." },
      { question: "When does the NEU update its pay scale tables?", answer: "Usually within weeks of the government confirming the annual award — most recently the 3.5% uplift effective 1 September 2026 — so autumn is when fresh figures land." },
      { question: "Is 'NEU pay scale' different from 'teacher main pay scale'?", answer: "No — both refer to the same statutory M1–M6 range. The branded phrasing just reflects where teachers habitually look the numbers up." },
      { question: "Which union should I join for pay protection?", answer: "That depends on your workplace and priorities; NEU, NASUWT and NAHT cover overlapping memberships. All provide pay dispute support — compare local presence and casework reputation rather than published tables, which are identical." },
    ],
    sources: [
      { label: "NEU — Pay scales England", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/pay-scales/pay-scales-england" },
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "STRB — School Teachers' Review Body reports", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
      { label: "EIS — Current Salary Scales", url: "https://www.eis.org.uk/pay-and-conditions-of-service/salary-scales" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 14. NASUWT PAY SCALES
  // ─────────────────────────────────────────────────────────────────────────
  // 14. NASUWT PAY SCALES
  // ─────────────────────────────────────────────────────────────────────────
  // 14. NASUWT PAY SCALES
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "nasuwt-teacher-pay-scales",
    hub: "pay-scales",
    title: "NASUWT Teacher Pay Scales 2026/27 Explained",
    metaTitle: "NASUWT Pay Scales 2026/27: Tables & Union Advice",
    metaDescription:
      "NASUWT pay scales explained for 2026/27: what the union publishes for each UK nation, how its tables compare with statutory figures and when NASUWT advice helps.",
    primaryKeyword: "nasuwt teacher pay scales",
    secondaryKeywords: [
      "nasuwt pay scales", "teacher pay scales", "teachers pay scale",
      "school teacher pay scale", "pay scale teachers", "teacher pay rise 2026",
    ],
    calculator: "pay-scale",
    intro:
      "NASUWT publishes some of the most detailed pay scale tables in UK education, with dedicated pages for England, London bands, Wales, Scotland and Northern Ireland. This guide unpacks what those tables contain for 2026/27, how they relate to the statutory STPCD figures, and where NASUWT's pay advice earns its keep.",
    keyTakeaways: [
      "NASUWT tables restate the statutory STPCD points — £34,068 to £46,939 on the main range for 2026/27.",
      "Separate NASUWT pages cover England, the three London bands, Wales, Northern Ireland and Scotland.",
      "Union advice adds value on pay disputes, not on the numbers, which are public statutory values.",
      "Anchored sections let members jump straight to qualified, unqualified or TLR rates.",
      "Membership is never required to receive statutory pay rates.",
    ],
    blocks: [
      { kind: "h2", text: "How NASUWT organises its pay scales" },
      { kind: "p", text: "Rather than one national page, NASUWT maintains separate publications per jurisdiction: **England**, **Fringe/Outer/Inner London**, **Wales**, **Northern Ireland** and **Scotland** via SNCT references. Each uses anchored headings — Qualified Teachers, Unqualified Teachers, TLRs — so readers jump directly to relevant rows." },
      { kind: "table", caption: "Core figures across NASUWT's England tables, 2026/27", head: ["Range", "Minimum", "Maximum"], rows: [
        ["Main (M1–M6)", "£34,068", "£46,939"],
        ["Upper (U1–U3)", "£49,134", "£52,835"],
        ["Unqualified (UQ1–UQ6)", "£23,731", "£36,493"],
        ["TLR 1", "£10,530", "£17,819"],
        ["SEN allowance", "£2,885", "£5,689"],
      ]},
      { kind: "p", text: "These match our [UK-wide pay scale](/teacher-pay-scale/) tables because both restate the same statutory document." },

      { kind: "h2", text: "NASUWT versus NEU tables" },
      { kind: "p", text: "Teachers often compare the two unions' publications. The numbers are identical wherever jurisdictions overlap — both derive from the STPCD. Differences lie in presentation:" },
      { kind: "ul", items: [
        "**Granularity** — NASUWT splits London bands onto a dedicated page; NEU folds them into its main England page.",
        "**Scope** — NASUWT publishes NI tables directly; NEU defers Scottish coverage to EIS materials.",
        "**Advice framing** — each wraps the same figures in different campaign commentary.",
      ]},
      { kind: "p", text: "Our [NEU pay scales explainer](/neu-teacher-pay-scales/) covers the parallel publication in detail." },

      { kind: "h2", text: "Where NASUWT pay advice matters" },
      { kind: "ul", items: [
        "**Pay policy audits** — checking your school's published policy against statutory obligations.",
        "**Threshold and upper-range disputes** — representation through appeal processes.",
        "**Allowance reviews** — challenging TLR values set below statutory minimums or cut without process.",
        "**Part-time pro-rating errors** — payroll mistakes around FTE fractions are routine and fixable.",
      ]},
      { kind: "callout", tone: "info", title: "Statutory rights need no membership", text: "Every rate in every table applies to eligible teachers automatically. Union membership buys expertise and representation when schools fall short — never access to the baseline numbers." },

      { kind: "h2", text: "Reading the 2026/27 update correctly" },
      { kind: "table", caption: "Movement into this year's NASUWT tables", head: ["Range", "Previous position (derived)", "2026/27", "Change"], rows: [
        ["M1", "≈£32,916", "£34,068", "+3.5%"],
        ["M6", "≈£45,352", "£46,939", "+3.5%"],
        ["Inner London U3", "≈£62,496", "£64,683", "+3.5%"],
      ]},
      { kind: "p", text: "Uniform uplifts confirm these are restated statutory values after the STRB settlement, effective 1 September 2026." },

      { kind: "h2", text: "Common mistakes when using union pay tables" },
      { kind: "ul", items: [
        "**Quoting last year's PDF** — union sites archive old circulars; check the document date before citing figures.",
        "**Mixing jurisdictions** — Welsh and English tables have coincidentally matched recently, but cite the right source anyway.",
        "**Assuming union tables override contracts** — your contract plus the statutory framework govern; tables are reference points.",
        "**Ignoring anchored sections** — most 'missing data' complaints come from scrolling past the anchor list.",
      ]},

      { kind: "h2", text: "Which document governs what" },
      { kind: "table", caption: "Authority map: who decides your pay and what to cite", head: ["Document", "Sets", "Use it for"], rows: [
        ["STPCD (statutory)", "Legal minimum ranges", "Enforceable entitlements"],
        ["School pay policy", "Local criteria and process", "Understanding your school's rules"],
        ["Union tables", "Reference restatement", "Quick lookup and verification"],
        ["Your contract", "Your specific terms", "What you personally can claim"],
      ]},
      { kind: "p", text: "Confusion between these layers drives most pay disputes into avoidable territory. The union tables never override anything — they mirror the statutory layer so you can check it quickly. Enforcement arguments cite the STPCD; process arguments cite the pay policy; personal claims cite the contract." },
      { kind: "h2", text: "A pay-dispute checklist built around the tables" },
      { kind: "ol", items: [
        "**Verify the point** — confirm which scale point and band your contract actually specifies.",
        "**Check the maths** — payroll errors cluster around FTE fractions, TLR stacking and September transitions.",
        "**Compare policy to statute** — flag any school criterion contradicting STPCD obligations.",
        "**Put it in writing early** — informal queries drift; dated letters start limitation clocks in your favour.",
        "**Bring representation** — union caseworkers resolve most issues at the first formal letter stage.",
      ]},
      { kind: "h2", text: "NASUWT-specific strengths worth knowing" },
      { kind: "p", text: "Members tend to cite three practical strengths: dedicated Northern Ireland tables that NEU does not mirror, granular London-band separation useful at boundary schools, and long-standing pay-policy audit resources aimed at school representatives. None changes what you are owed — statutory rights are universal — but faster diagnosis means faster resolution, and resolution speed is where pay disputes are actually won. Combine the union's tables with this site's independent tools: the [pay calculator](/teacher-pay-calculator/) converts any published point into take-home pay, and our [UK scale guide](/teacher-pay-scale/) keeps all four nations in one comparison." },

      { kind: "h2", text: "Walking NASUWT's section structure deliberately" },
      { kind: "p", text: "The anchored layout rewards a specific reading order: Qualified Teachers first for main and upper ranges, Unqualified Teachers for placement disputes, then the TLR section for allowance verification. Members jumping straight to a single number routinely miss adjacent rows that contextualise it — the U1 row beside M6 tells the threshold story better than either alone. Print conventions matter too: NASUWT tables distinguish England-only figures from UK-wide allowances, and conflating those scopes generates a steady trickle of confused enquiries to reps each September." },
      { kind: "h2", text: "Building a pay-policy review habit" },
      { kind: "ol", items: [
        "**Obtain the current policy annually** — schools amend quietly between ratification cycles.",
        "**Map each local criterion to its statutory counterpart**, flagging anything stricter than the STPCD requires.",
        "**Test thresholds against worked examples** — a criterion unanswerable for a real teacher is a criterion waiting to misfire.",
        "**Archive superseded versions** — disputes turn on which policy version governed which year.",
      ]},
      { kind: "p", text: "Twenty minutes each autumn converts the policy from a surprise generator into a known map." },
      { kind: "h2", text: "Where NASUWT and NEU casework styles differ" },
      { kind: "p", text: "Members compare unions constantly, so honest framing helps: NEU's scale lies in density — sheer workplace coverage producing rapid local escalation — while NASUWT's tradition emphasises structured casework discipline and detailed policy-audit resources. Individual outcomes depend far more on the assigned caseworker than brand, and sensible teachers choose on local reputation among colleagues facing similar issues. What no union changes: statutory entitlements themselves, identically restated across every table whichever logo heads the page. Verify numbers independently here anytime — the [full UK tables](/teacher-pay-scale/) update each settlement — then bring the dispute to whichever representative answers fastest in your building." },

      { kind: "h2", text: "Reading NASUWT tables alongside your own documents" },
      { kind: "p", text: "The productive sequence pairs external reference with internal paperwork. Start from your contract letter: it names point, band and allowances. Locate that point in the current NASUWT table to confirm the rate matches statutory value for your region. Then open last month's payslip and trace the chain — gross salary, pensionable pay, deductions — checking each against expectation. Divergence anywhere in the chain indicates either a legitimate change you forgot or an error someone else created; both deserve same-month queries. This fifteen-minute quarterly ritual surfaces virtually every pay problem while correction remains cheap, and it requires no membership, no dispute machinery and no confrontation — just the tables, your documents, and ten minutes of comparison. Keep dated notes of what you found; patterns across quarters tell you whether your payroll is sloppy, your memory generous, or something genuinely drifted." },

      { kind: "h2", text: "NASUWT resources beyond the headline tables" },
      { kind: "p", text: "Members often discover NASUWT's pay materials extend well past scale charts: model pay policies for governors, threshold-application frameworks, allowance-review checklists and briefing papers on specific STPCD clauses. These matter because disputes rarely turn on rates alone — they turn on process, and process documents are where union institutional memory concentrates. Non-members can still benefit indirectly: knowing such frameworks exist tells you what to request from your own school, what good governance looks like, and when your school's improvised process deviates from sector norms. Combine that structural literacy with independent verification tools — our [UK tables](/teacher-pay-scale/), [pay calculator](/teacher-pay-calculator/) and [take-home guide](/teacher-take-home-pay/) cover the numbers end — and you hold both halves of a complete pay-verification habit without needing to memorise anything." },

      { kind: "h2", text: "Three NASUWT-table habits worth copying" },
      { kind: "ul", items: [
        "**Date-stamp everything you save** — undated scale screenshots are the root of most autumn confusion.",
        "**Note the jurisdiction header before quoting figures** — England values differ from NI values even when layouts look identical.",
        "**Cross-check one anchor figure against an independent source each September** — our [UK tables](/teacher-pay-scale/) serve nicely — so errors surface immediately rather than compounding through a year of payslips.",
      ]},
      { kind: "p", text: "Habits this small feel trivial until the first contested payslip arrives, at which point they become evidence. Build them once; rely on them forever." },
    ],
    faq: [
      { question: "What are the NASUWT pay scales for 2026/27?", answer: "Identical to statutory STPCD values: £34,068–£46,939 on the main range, £49,134–£52,835 on the upper range, with TLR 1 payments of £10,530–£17,819, published separately for England, the London bands, Wales and Northern Ireland." },
      { question: "Are NASUWT pay scales different from NEU ones?", answer: "No — both unions republish the same statutory government rates. They differ only in presentation, page structure and the surrounding advice and campaigns." },
      { question: "Does NASUWT publish scales for all four UK nations?", answer: "Yes: dedicated pages cover England, the three London bands, Wales and Northern Ireland, with Scottish coverage referencing SNCT agreements where the EIS leads negotiation." },
      { question: "Do I need NASUWT membership to be paid these rates?", answer: "No. Statutory pay points apply to every eligible teacher regardless of union membership. Membership provides advice and representation when entitlements are disputed." },
      { question: "Can NASUWT help with a TLR dispute?", answer: "Yes. Allowance challenges — values below statutory minimums, unilateral cuts or missing review processes — are standard casework, typically starting with a policy audit letter to the school." },
      { question: "When does NASUWT refresh its pay tables?", answer: "After each government confirms the annual award. The latest refresh reflects the 3.5% uplift applied from 1 September 2026." },
      { question: "Why do NASUWT and government figures always match?", answer: "Because unions do not set pay. Their influence runs through consultation responses and negotiating bodies; the published tables simply restate whatever the statutory settlement turns out to be." },
      { question: "Where can I check my specific point against these tables?", answer: "Our calculator converts any M, U or UQ point into take-home pay by region, using exactly the figures published in both the STPCD and the union tables." },
    ],
    sources: [
      { label: "NASUWT — Pay Scales (England)", url: "https://www.nasuwt.org.uk/advice/pay-pensions/pay-scales/pay-scales-england.html" },
      { label: "NASUWT — Pay Scales (Fringe, Outer London and Inner London)", url: "https://www.nasuwt.org.uk/advice/pay-pensions/pay-scales/pay-scales-fringe-outer-london-and-inner-london.html" },
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "NEU — Pay scales England (comparison)", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/pay-scales/pay-scales-england" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 15. 2025/26 ARCHIVE
  // ─────────────────────────────────────────────────────────────────────────
  // 15. 2025/26 ARCHIVE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-pay-scale-2025-26",
    hub: "pay-scales",
    title: "Teacher Pay Scale 2025/26: Archived Tables & Context",
    metaTitle: "Teacher Pay Scale 2025: Archived 25/26 Tables & Context",
    metaDescription:
      "The 2025/26 teacher pay scale archived and reconstructed: derived points for every region, why old rates still matter legally and how to spot outdated pay content.",
    primaryKeyword: "teacher pay scale 2025",
    secondaryKeywords: [
      "teacher pay scale 25/26", "teacher pay scale 25 26", "teacher pay scale 2025-26",
      "teacher pay scales 25/26", "teacher pay scale 2026", "teachers pay rise 2026",
      "teacher pay scale uk", "pay scale teachers",
    ],
    calculator: "pay-scale",
    intro:
      "The 2025/26 teacher pay scale ran from £34,068 minus last year's award at the bottom of the main range through to £52,835 before uplifts at the top. This archive page explains how those figures relate to current rates, why millions of searches still hit them each autumn, and how to check whether an old salary reference is outdated.",
    keyTakeaways: [
      "Every current 2026/27 point divided by 1.035 recovers its 2025/26 predecessor (derived).",
      "M1 was approximately £32,916 in the rest of England for 2025/26; M6 approximately £45,352.",
      "Searches for 'teacher pay scale 2025' spike every autumn when new awards land.",
      "Old figures remain legally relevant for backdated claims, pension records and redundancy calculations.",
      "The 3.5% award replaced these numbers from 1 September 2026.",
    ],
    blocks: [
      { kind: "h2", text: "Why last year's pay scale still gets searched" },
      { kind: "p", text: "\"Teacher pay scale 2025\" draws steady traffic long after September because old figures keep doing real work:" },
      { kind: "ul", items: [
        "**Pension statements** lag by up to 18 months and quote prior-year salaries.",
        "**Backdated pay claims** need the historical rate that applied during each month.",
        "**Redundancy and maternity calculations** reference weeks worked under older rates.",
        "**Reference letters and mortgage applications** quote salary history.",
      ]},

      { kind: "h2", text: "Reconstructing 2025/26 from current figures" },
      { kind: "p", text: "Because awards apply as clean percentages, dividing any current point by 1.035 recovers the prior year exactly (derived values, rounded to the pound):" },
      { kind: "table", caption: "2025/26 main range, rest of England (derived from 2026/27 ÷ 1.035)", head: ["Point", "2025/26 (derived)", "2026/27"], rows: [
        ["M1", "≈£32,916", "£34,068"],
        ["M2", "≈£34,823", "£36,042"],
        ["M3", "≈£37,101", "£38,400"],
        ["M4", "≈£39,556", "£40,940"],
        ["M5", "≈£42,059", "£43,529"],
        ["M6", "≈£45,352", "£46,939"],
      ]},
      { kind: "table", caption: "Upper range and London extremes (derived)", head: ["Point", "Region", "2025/26 (derived)", "2026/27"], rows: [
        ["U1", "Rest of England", "≈£47,474", "£49,134"],
        ["U3", "Rest of England", "≈£51,048", "£52,835"],
        ["M1", "Inner London", "≈£40,317", "£41,728"],
        ["U3", "Inner London", "≈£62,496", "£64,683"],
      ]},
      { kind: "callout", tone: "warn", title: "Derived versus official", text: "These reconstructions are arithmetic derivations for context — official 2025/26 circulars remain the authoritative record for anything contractual." },

      { kind: "h2", text: "What changed between the two years" },
      { kind: "p", text: "Structure stayed constant: same ranges, same six main points, same three upper points, same four England bands. Only the values moved, by a uniform **3.5%** effective 1 September 2026. That consistency makes year-on-year comparison unusually clean — no range reshuffles to confuse matters. Our [current-year scale guide](/teacher-pay-scale/) carries the live tables." },

      { kind: "h2", text: "When old figures decide money today" },
      { kind: "ol", items: [
        "**Backdating:** if a school implemented the 2026 award late, the owed difference uses both years' rates month by month.",
        "**Pension accrual checks:** benefit statements quoting 2025/26 pay let you verify the 1/57th build was right.",
        "**Maternity and sick pay:** occupational schemes often average recent months spanning both rate years.",
        "**Redundancy:** statutory entitlements calculate weekly pay from the rate applying at termination dates.",
      ]},

      { kind: "h2", text: "How to spot outdated pay content online" },
      { kind: "ul", items: [
        "**Check the M1 anchor** — anything quoting below £34,068 for rest-of-England starts describes 2025/26 or earlier.",
        "**Look for the effective date** — credible pages state 'from 1 September' with the year.",
        "**Beware undated PDFs** — union archives keep every historical circular alive indefinitely.",
        "**Verify against two sources** — statutory document plus one major union's current tables should always agree.",
      ]},

      { kind: "h2", text: "Derived 2025/26 points across every region" },
      { kind: "p", text: "Extending the reconstruction to key points in all bands (each derived as current value ÷ 1.035):" },
      { kind: "table", caption: "Selected 2025/26 points by region (derived)", head: ["Point", "Rest of Eng.", "Fringe", "Outer Lon.", "Inner Lon.", "N. Ireland"], rows: [
        ["M1", "≈£32,916", "≈£34,398", "≈£37,870", "≈£40,317", "≈£31,099"],
        ["M6", "≈£45,352", "≈£46,839", "≈£50,473", "≈£52,301", "≈£42,843"],
        ["U3", "≈£51,048", "≈£52,490", "≈£56,153", "≈£62,496", "≈£48,392"],
      ]},
      { kind: "callout", tone: "warn", title: "Scotland and Wales caveat", text: "Wales mirrors the England derivation. Scotland settles independently, so its 2025/26 SNCT points cannot be reconstructed from current values with any confidence — consult SNCT archives instead." },
      { kind: "h2", text: "Reconciling a lagging pension statement" },
      { kind: "p", text: "Benefit statements trail reality by up to 18 months, quoting salaries from earlier rate years. Reconcile in three passes: locate the statement's reference period, pull the matching historical rates (the derived tables above serve for 2025/26), then verify the 1/57th build — pensionable pay divided by 57 — against the accrued figure. Discrepancies most often trace to non-pensionable payments mistakenly included or TLR changes landing mid-period. Errors found late still get corrected, but statements drive member decisions, so flag problems the week you spot them. The [pension calculator](/teacher-pension-calculator/) rebuilds the projection once your inputs are clean." },
      { kind: "h2", text: "Running a backdated pay claim" },
      { kind: "ol", items: [
        "**Establish entitlement dates** — which months ran on old rates after the new award's effective date.",
        "**Quantify per month** — old rate versus new rate, times months affected.",
        "**Check pension spillover** — backdated pay is pensionable, adding a contributions correction to pursue.",
        "**Submit in writing** to the payroll or HR route your pay policy names, attaching the arithmetic.",
        "**Escalate on silence** — unions escalate routinely after reasonable response windows close.",
      ]},
      { kind: "p", text: "Most backdating resolves at step two once payroll sees correct arithmetic in writing. The historical rates doing the work here are exactly why this archive page exists — and why the [current 26/27 tables](/teacher-pay-scale-2026-27/) now supersede them everywhere else." },

      { kind: "h2", text: "Monthly gross reconstruction for 2025/26" },
      { kind: "table", caption: "Selected monthly figures, rest of England (annual derived ÷ 12)", head: ["Point", "2025/26 annual (derived)", "Monthly"], rows: [
        ["M1", "≈£32,916", "≈£2,743"],
        ["M4", "≈£39,556", "≈£3,296"],
        ["M6", "≈£45,352", "≈£3,779"],
        ["U3", "≈£51,048", "≈£4,254"],
      ]},
      { kind: "p", text: "These conversions serve mortgage statements and referencing agencies still quoting prior-year figures — always flag them as derived when precision matters contractually." },
      { kind: "h2", text: "Placing 2025/26 in its sequence" },
      { kind: "p", text: "Single years mislead; sequences inform. Recent history has alternated larger consolidated awards with tighter ones, meaning teachers evaluating 'catch-up' claims need multi-year context rather than any single September. The durable lesson of the stretch containing 2025/26 is structural: percentage awards compound unevenly against inflation, so real-terms standing swung by seniority and region even while nominal salaries rose everywhere. Long-horizon planning should assume continued oscillation and stress-test finances against the tight years, not extrapolate the generous ones." },
      { kind: "h2", text: "Your personal pay archive: what to keep forever" },
      { kind: "ul", items: [
        "**Every contract and variation letter** — placement, band and allowances in writing, forever.",
        "**September payslips** — one per year anchors your award history.",
        "**Annual benefit statements** — pension reconciliation starts here and ages badly.",
        "**Appraisal outcomes** — progression evidence decays faster than any other record.",
        "**Circulars announcing awards** — the authoritative dates backdating arguments turn on.",
      ]},
      { kind: "p", text: "Digital folders suffice; completeness does not forgive gaps. Teachers with clean archives resolve disputes in weeks; teachers without them relive history through FOI requests. Pair the historical view with current projections via the [pay calculator](/teacher-pay-calculator/) and the [pension calculator](/teacher-pension-calculator/), and treat this archive page as the reference shelf behind both." },

      { kind: "h2", text: "Answering the questions old rates actually raise" },
      { kind: "ul", items: [
        "**'Was my increment backdated correctly?'** Compare applied monthly amounts against the derived prior-year rate for every affected month; partial backdating hides inside rounding until tabulated.",
        "**'Did my pension statement use the right salary?'** Match the statement's reference period to the corresponding year's rate, then divide by fifty-seven.",
        "**'What salary do I cite for my mortgage history?'** Lenders want documented reality — payslips from the period beat reconstructed figures, which serve only as sanity checks.",
        "**'Is this blog post outdated?'** Anchor-check against M1: below £34,068 for rest-of-England means pre-2026 content wearing today's clothes.",
      ]},
      { kind: "p", text: "Each answer depends on the same foundation — knowing precisely which rate applied when — which is exactly what this archive preserves. Bookmark it alongside the [current-year tables](/teacher-pay-scale-2026-27/) and the audit habits from our pillar [scale guide](/teacher-pay-scale/), and historical salary questions stop being archaeology." },

      { kind: "h2", text: "A worked reconciliation, start to finish" },
      { kind: "p", text: "Consider a concrete case: an M5 fringe teacher during the transition year. Their 2026 statement quotes pensionable pay of £45,069 — matching the derived 2025/26 fringe M5 value almost exactly once rounding settles, confirming the statement used prior-year rates correctly. Dividing by fifty-seven gives roughly £791 of annual pension built that year. Cross-checking the payslips shows twelve monthly contributions consistent with the applicable tier percentage applied to that same figure. Everything reconciles in fifteen minutes because each document was matched to its correct year's table. Now invert the failure mode: had the teacher compared against current-year rates, every line would look wrong and none would be. Matching document to date first, numbers second, is the entire discipline this archive exists to support." },

      { kind: "h2", text: "Who still needs this page" },
      { kind: "ul", items: [
        "**Teachers reconciling benefit statements** that quote prior-era salaries verbatim.",
        "**Anyone running a backdated-claim calculation** across the September boundary.",
        "**Returners verifying** that remembered salaries match recorded history before reference checks.",
        "**Content editors** pruning outdated pay claims from their own sites — anchor-check M1 first.",
      ]},
      { kind: "p", text: "If none of those describe you, the [current 2026/27 tables](/teacher-pay-scale-2026-27/) are where your numbers live now." },
    ],
    faq: [
      { question: "What was the teacher pay scale in 2025/26?", answer: "Derived by dividing current points by 1.035: M1 was approximately £32,916 and M6 approximately £45,352 in the rest of England, with inner London starting around £40,317. Official 2025/26 circulars hold the authoritative figures." },
      { question: "Why do people still search for the 2025 pay scale?", answer: "Old rates stay practically relevant for pension statement reconciliation, backdated pay claims, maternity averages, redundancy calculations and mortgage references — all common reasons to need historical figures." },
      { question: "How much did teachers' pay rise in September 2026?", answer: "A flat 3.5% applied to every point of every range. In cash terms roughly £1,152 a year at M1, £1,587 at M6 and £1,787 at U3 in the rest of England." },
      { question: "Is my school allowed to use 2025/26 rates now?", answer: "No for maintained schools — the STPCD requires updated rates from 1 September 2026. Delays must be corrected with backdating. Academies follow their own policies but face similar expectations in practice." },
      { question: "Does my pension use this year's or last year's salary?", answer: "Both, chronologically: each year builds 1/57th of that year's actual pensionable pay. Statements lag reality, so your latest statement probably quotes 2025/26-era salaries while you now earn more." },
      { question: "Where can I find official archived pay documents?", answer: "GOV.UK keeps superseded STPCD editions published, and unions archive their historical circulars. Match the document date to the tax year you need rather than trusting search snippets." },
      { question: "Did the scale structure change between 2025/26 and 2026/27?", answer: "No — identical ranges, points and regional bands. Only monetary values moved, which makes direct year-on-year comparisons straightforward." },
      { question: "Which page has the current 2026/27 figures?", answer: "Our dedicated [26/27 page](/teacher-pay-scale-2026-27/) lists every confirmed point by region, with the pillar [UK pay scale guide](/teacher-pay-scale/) covering all ranges and nations together." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "STRB — School Teachers' Review Body reports", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
      { label: "Teachers' Pensions — member guides", url: "https://www.teacherspensions.co.uk/members.htm" },
      { label: "NEU — Pay scales England", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/pay-scales/pay-scales-england" },
    ],
    updated: UPDATED,
  },
 // ─────────────────────────────────────────────────────────────────────────
  // 16. PAY BY REGION MAP
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-pay-map",
    hub: "pay-scales",
    title: "Teacher Pay by Region: The UK Map for 2026/27",
    metaTitle: "Teacher Pay Scale UK Map: Every Region Compared",
    metaDescription:
      "Compare UK teacher pay by region for 2026/27: starting salaries, classroom ceilings and leadership endpoints ranked from inner London to Northern Ireland.",
    primaryKeyword: "teacher pay scale uk",
    secondaryKeywords: [
      "uk teacher pay scale", "teacher pay scale london", "teacher pay scale wales",
      "teacher pay scale scotland", "teacher pay scale ni", "teachers pay scales",
      "teacher salary uk",
    ],
    calculator: "pay-scale",
    intro:
      "One job, seven different pay packets. A newly qualified teacher earns £41,728 in Hackney, £39,195 in Croydon, £35,602 in Dartford, £34,068 in Cardiff or Leeds, £34,539 in Glasgow and just £32,188 in Belfast. This regional map lays out every UK rate side by side so you can see exactly what geography does to a teaching career.",
    keyTakeaways: [
      "UK classroom pay spans £32,188 (NI) to £64,683 (inner London U3) in 2026/27.",
      "Four separate systems apply: STPCD England & Wales, SNCT Scotland and DE-led Northern Ireland.",
      "The inner-London premium over NI reaches £9,540 at M1 and £20,341 at U3.",
      "Scotland beats England & Wales at the top of the main scale but lacks an upper range.",
      "Regional choice compounds: pensions, maternity and redundancy all derive from your regional base.",
    ],
    blocks: [
      { kind: "h2", text: "The four pay systems behind the map" },
      { kind: "p", text: "The UK runs three negotiating systems across four visible bands. England and Wales share the STPCD, with Wales currently mirroring English values through its own IWPRB process. Scotland negotiates separately via the [SNCT](/teacher-pay-scale-scotland/), and Northern Ireland sets its own settlement through the Department of Education. Within England, the STPCD itself splits into four regional bands." },

      { kind: "h2", text: "Starting salaries across the UK" },
      { kind: "table", caption: "Newly qualified (M1-equivalent) pay by region, 2026/27", head: ["Rank", "Region", "Starting salary"], rows: [
        ["1", "Inner London", "£41,728"],
        ["2", "Outer London", "£39,195"],
        ["3", "London Fringe", "£35,602"],
        ["4", "Scotland", "£34,539"],
        ["5=", "England (rest of) & Wales", "£34,068"],
        ["7", "Northern Ireland", "£32,188"],
      ]},
      { kind: "p", text: "The spread at entry is **£9,540** between inner London and Northern Ireland — before either region's housing costs are considered." },

      { kind: "h2", text: "Where experienced classroom teachers earn most" },
      { kind: "table", caption: "Top of the standard classroom route by region, 2026/27", head: ["Region", "Top main point", "Experienced ceiling"], rows: [
        ["Inner London", "£54,131 (M6)", "£64,683 (U3)"],
        ["Outer London", "£52,241 (M6)", "£58,119 (U3)"],
        ["London Fringe", "£48,478 (M6)", "£54,327 (U3)"],
        ["Scotland", "£48,516 (pt 6)", "£52,539 (Chartered Teacher)"],
        ["Rest of England & Wales", "£46,939 (M6)", "£52,835 (U3)"],
        ["Northern Ireland", "£44,342 (pt 6)", "£50,085 (upper)"],
      ]},
      { kind: "p", text: "Scotland's position is interesting: it leads England & Wales on the main scale but its Chartered Teacher ceiling sits below England's U3 outside London. Details differ in our [Scottish](/teacher-pay-scale-scotland/) and [main range](/main-pay-range/) guides." },

      { kind: "h2", text: "Leadership endpoints by region" },
      { kind: "table", caption: "Leadership spine endpoints (L1–L43), 2026/27", head: ["Region", "L1 minimum", "L43 maximum"], rows: [
        ["Inner London", "£63,708", "£158,862"],
        ["Outer London", "£57,837", "£153,041"],
        ["London Fringe", "£55,060", "£150,301"],
        ["England (rest of) & Wales", "£53,585", "£148,829"],
      ]},
      { kind: "p", text: "Scotland and Northern Ireland run separate leadership arrangements outside this spine, structured around school size rather than a single national ladder — see our [leadership pay guide](/leadership-pay-scale/) for the England & Wales detail." },

      { kind: "h2", text: "Reading the map after living costs" },
      { kind: "p", text: "Gross rankings invert surprisingly often once housing enters:" },
      { kind: "ul", items: [
        "**Inner London:** highest gross, weakest real-terms position for solo renters in central zones.",
        "**Fringe:** modest premium (£1,500ish) but commuting-belt housing keeps effective value competitive.",
        "**Wales:** identical gross to rest-of-England with materially lower average rents — strong real-terms value.",
        "**Northern Ireland:** lowest gross but the cheapest major-housing market in these comparisons partially offsets it.",
      ]},
      { kind: "callout", tone: "tip", title: "Move early, bank the base", text: "Because pensions, maternity pay and redundancy entitlements all derive from regional salary history, early-career years in higher-paying regions leave permanent financial residue even after you move somewhere cheaper." },

      { kind: "h2", text: "Using the map for job decisions" },
      { kind: "ol", items: [
        "**Locate the school's exact band** — postcode decides, not city reputation; verify against STPCD district lists.",
        "**Compare ceilings, not starts** — a lower-starting region with faster progression can overtake within a decade.",
        "**Price housing simultaneously** — gross gaps understate or overstate reality depending on local rents.",
        "**Check pension portability** — moving between UK nations can mean different schemes, not just different rates.",
      ]},

      { kind: "h2", text: "Common mistakes when comparing regional teacher pay" },
      { kind: "ul", items: [
        "**Treating 'UK average teacher salary' as meaningful** — it blends incompatible systems and hides the £9,500+ entry spread.",
        "**Assuming London rules apply everywhere near London** — the fringe band exists precisely because they don't.",
        "**Forgetting Scotland's structure** — no UPS, Chartered Teacher instead, different pension scheme.",
        "**Ignoring allowances** — TLR values are national, so they dilute as a percentage of high-region salaries.",
      ]},

      { kind: "h2", text: "Part-time work interacts with region differently than you think" },
      { kind: "p", text: "Regional premiums multiply cleanly through fractional contracts: a 0.6 FTE teacher captures 60% of whichever regional point applies, so inner London part-timers gain the same proportional cushion as full-timers. Two second-order effects matter more. First, fixed costs ignore your fraction — travel and childcare spread across fewer earned pounds, amplifying regional differences for part-timers. Second, pension accrual scales with actual pensionable pay, so regional choice compounds through fractional careers just as through full ones. Run your own numbers in the [part-time calculator](/part-time-teacher-pay-calculator/) before assuming a cheaper region suits reduced hours." },
      { kind: "h2", text: "The commuter-belt anomaly" },
      { kind: "p", text: "Standard maps imply smooth gradients, but the fringe band creates cliffs. A Merton school (inner London, £41,728 at M1), a Croydon school (outer, £39,195) and a Crawley school (fringe, £35,602) sit within forty-five minutes of each other, spanning £6,126. Household strategies exploit these cliffs constantly — one partner teaching inner, the household living fringe-side — and explain persistent boundary-confusion searches. The lesson for job-seekers: never interpolate. Identify the exact band, price the exact commute, and treat everything between as unknowable until verified." },
      { kind: "h2", text: "Sample career paths across the map" },
      { kind: "table", caption: "Two decades, two strategies (current-year values, rest-of-path illustrative)", head: ["Stage", "London-first path", "Home-region path"], rows: [
        ["Entry (M1)", "£41,728 inner London", "£34,068 rest of England"],
        ["Year 6 (M6)", "£54,131", "£46,939"],
        ["Threshold (U1)", "£59,649", "£49,134"],
        ["After relocating to the same region", "transfers to local equivalent point", "stays on home scale"],
      ]},
      { kind: "p", text: "Both paths reach identical ceilings eventually if they converge on one region — but the London-first route banks years of higher pension accrual and salary history en route. The reverse order sacrifices less than commonly assumed, since relocation resets rate rather than rank. Whichever sequence you choose, verify each move against the [nation-by-nation guides](/teacher-pay-scale/) and protect the paper trail: contracts, pay policies and circulars are the currency of every future pay conversation, including the redundancy and pension conversations covered in our [planning hub](/teacher-salary-uk/)." },

      { kind: "h2", text: "Pension portability across the map" },
      { kind: "p", text: "Regional moves within England and Wales change rates, never schemes — the Teachers' Pension Scheme travels intact. Scotland departs from that: its superannuation scheme runs separately, so an Anglo-Scottish career produces two records under different rules rather than one continuous pot. Northern Ireland likewise administers independently. Practical consequence: cross-border moves deserve scheme-specific advice before resignation, since consolidation options narrow with distance. Within-scheme movers need only update records and watch contribution tiers recalibrate to the new regional salary." },
      { kind: "h2", text: "Questions that de-risk any cross-region move" },
      { kind: "ol", items: [
        "**Which exact band and point?** Written into the offer, not inferred from the town.",
        "**What placement will my service history earn?** Experience credit varies by school judgement.",
        "**Which pension scheme and what happens to my existing record?** Critical at national borders.",
        "**What allowances attach?** TLRs transfer by agreement, not automatically.",
        "**What does the destination's housing market actually cost?** Band premiums die against rents quickly.",
      ]},
      { kind: "h2", text: "The map as a career instrument, not trivia" },
      { kind: "p", text: "Used well, regional comparison shifts from pub-quiz material to planning tool. Early-career teachers optimise differently from mid-career ones: the former chase progression velocity and city opportunity, the latter price housing, schools for children and ageing-parent logistics. Both benefit from running scenarios before offers arrive rather than after — model candidate destinations through the [take-home guide](/teacher-take-home-pay/), test fractional plans in the [part-time calculator](/part-time-teacher-pay-calculator/), and revisit the nation pages ([Wales](/teacher-pay-scale-wales/), [Scotland](/teacher-pay-scale-scotland/), [NI](/ni-teacher-pay-scale/)) whenever life changes direction. Geography is the largest salary variable you control; treat it with the same rigour as qualification choices." },

      { kind: "h2", text: "Regional strategy for dual-teacher households" },
      { kind: "p", text: "Two-teacher households multiply map complexity productively. Identical regions double exposure — two inner-London salaries solve housing elegantly but synchronise redundancy risk poorly. Deliberate band-splitting works better for many couples: one partner holds the high-band post anchoring pensions and mortgage capacity while the other takes a lower-cost regional post closer to childcare logistics. Because TLR and allowance values run nationally, stacking potential travels intact between partners' choices, letting households optimise jointly rather than serially. The planning conversation deserves the same seriousness as any household financial decision: project both careers across a decade using the calculators, stress-test against part-time phases via the [fractional planner](/part-time-teacher-pay-calculator/), and revisit whenever either school situation shifts. Geography decisions taken jointly age far better than geography decisions absorbed silently — the map rewards couples who treat it as shared infrastructure rather than one partner's compromise." },
    ],
    faq: [
      { question: "Where do teachers get paid the most in the UK?", answer: "Inner London pays the highest statutory rates at every stage: £41,728 starting, rising to £64,683 at U3 and up to £158,862 on the leadership spine. Whether that survives central London housing costs is a separate question." },
      { question: "Where do teachers get paid the least?", answer: "Northern Ireland: £32,188 at entry and £44,342 at the top of the main range, roughly £1,900–£2,600 below rest-of-England equivalents. Lower living costs offset part of the gap." },
      { question: "Is teacher pay the same across the UK?", answer: "No. England and Wales share the STPCD figures (with four English regional bands), while Scotland and Northern Ireland each negotiate entirely separate scales through their own bodies." },
      { question: "How much more do London teachers earn than others?", answer: "Between £7,021 and £11,848 a year more than rest-of-England equivalents depending on point and band, with the fringe premium much smaller at around £1,500." },
      { question: "Does Scotland pay teachers more than England?", answer: "At the top of the main range yes — £48,516 versus £46,939 — though entry points differ by under £500 and Scotland has no upper range, capping experienced classroom pay at £52,539 via Chartered Teacher status." },
      { question: "Can I transfer my teaching salary if I move regions?", answer: "You transfer to the same point in the destination region's scale, taking whatever rate applies there. Between some nations the pension scheme differs too, which needs checking before any cross-border move." },
      { question: "Do TLR payments vary by region?", answer: "No. TLR and SEN allowance ranges are set nationally, so a £5,000 TLR 2 buys the same amount whether the school is in Sunderland or Sutton — only base scale pay varies geographically." },
      { question: "Which region offers the best real-terms teaching salary?", answer: "It depends on housing: outer London and Wales frequently win once rent enters the calculation, since their premiums or parity come with far cheaper accommodation than inner zones." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "SNCT — Scottish Negotiating Committee for Teachers handbook", url: "https://www.snct.org.uk/wiki/index.php?title=Main_Page" },
      { label: "Department of Education Northern Ireland — teachers' pay", url: "https://www.education-ni.gov.uk/articles/teachers-pay-and-conditions-service" },
      { label: "Welsh Government — school teachers' pay and conditions", url: "https://www.gov.wales/school-teachers-pay-and-conditions" },
    ],
    updated: UPDATED,
  },
];
