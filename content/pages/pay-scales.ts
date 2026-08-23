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
  {
    slug: "teacher-pay-scale",
    isPillar: true,
    hub: "pay-scales",
    title: "Teacher Pay Scales 2026/27",
    metaTitle: "Teacher Pay Scale 2026/27 — Every UK Pay Point & Region",
    metaDescription:
      "Complete UK teacher pay scales for 2026/27. Main, upper, unqualified, lead practitioner and leadership ranges for all four England regions, Wales, Scotland and NI.",
    primaryKeyword: "teacher pay scale",
    secondaryKeywords: [
      "teacher pay scales", "teacher pay scale uk", "uk teacher pay scale",
      "teacher pay scale 2026", "teacher pay scales 2026", "teachers pay scale",
      "teacher payscale", "school teacher pay scale",
    ],
    calculator: "pay-scale",
    intro:
      "Every statutory teacher pay point in the UK for 2026/27, in one place. These are the STPCD figures that took effect on 1 September 2026 after a 3.5% award, plus the separate Scottish and Northern Irish scales. Use the calculator to turn any pay point into a take-home figure.",
    keyTakeaways: [
      "The 2026/27 STPCD applied a 3.5% uplift to every pay point from 1 September 2026.",
      "Classroom teacher pay in England runs from £34,068 (M1, rest of England) to £64,683 (U3, inner London).",
      "England has four pay bands: rest of England, London fringe, outer London and inner London.",
      "Scotland uses the separate SNCT scale with no upper pay range; Northern Ireland has its own lower scale.",
      "Academies can set their own pay scales but the vast majority still track the STPCD points.",
    ],
    blocks: [
      { kind: "h2", text: "How the teacher pay scale is structured" },
      { kind: "p", text: "The teacher pay scale is not one ladder. It is a set of separate ranges, and which one you sit on depends on your qualification status and your role rather than your length of service." },
      { kind: "ul", items: [
        "**Unqualified Teacher Range (UQ1–UQ6)** — for teachers without QTS, including instructors and many trainees on employment-based routes.",
        "**Main Pay Range (M1–M6)** — the standard scale for qualified classroom teachers, normally progressing one point a year.",
        "**Upper Pay Range (U1–U3)** — for experienced teachers who have passed the threshold application.",
        "**Lead Practitioner Range** — for teachers whose main role is modelling and improving teaching practice across a school.",
        "**Leadership Group (L1–L43)** — assistant heads, deputy heads and headteachers, drawn from a 43-point spine.",
      ]},
      { kind: "p", text: "On top of your pay point you may receive allowances: a TLR for a defined responsibility, or an SEN allowance for specialist provision. Those are annual pound amounts added to your salary and they are pensionable. Full detail is on the [teacher pay calculator](/teacher-pay-calculator/)." },

      { kind: "h2", text: "Main Pay Range 2026/27 — all England regions" },
      { kind: "p", text: "This is the scale most classroom teachers are on. Progression up the range is normally annual, subject to satisfactory performance against your appraisal objectives." },
      { kind: "table", caption: "Main Pay Range (M1–M6), STPCD 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["M1", "£34,068", "£35,602", "£39,195", "£41,728"],
        ["M2", "£36,042", "£37,646", "£41,246", "£43,712"],
        ["M3", "£38,400", "£39,979", "£43,403", "£45,786"],
        ["M4", "£40,940", "£42,513", "£45,672", "£47,961"],
        ["M5", "£43,529", "£45,069", "£48,438", "£50,665"],
        ["M6", "£46,939", "£48,478", "£52,241", "£54,131"],
      ]},
      { kind: "p", text: "Moving from M1 to M6 is worth £12,871 in the rest of England — a 37.8% increase over roughly six years. The steps are not even: the M5 to M6 jump is the largest at £3,410, while M1 to M2 is only £1,974. See the [Main Pay Range guide](/main-pay-range/) for the progression rules." },

      { kind: "h2", text: "Upper Pay Range 2026/27" },
      { kind: "p", text: "The Upper Pay Range is not automatic. You have to apply to cross the threshold and demonstrate that you are a highly competent teacher whose achievements and contribution are substantial and sustained." },
      { kind: "table", caption: "Upper Pay Range (U1–U3), STPCD 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["U1", "£49,134", "£50,625", "£54,047", "£59,649"],
        ["U2", "£50,955", "£52,441", "£56,046", "£62,580"],
        ["U3", "£52,835", "£54,327", "£58,119", "£64,683"],
      ]},
      { kind: "callout", tone: "info", title: "The M6 to U1 step is smaller than you might expect", text: "Crossing the threshold from M6 to U1 in the rest of England is worth £2,195, a 4.7% rise. It is a smaller step than most moves up the main range, but it unlocks two further points and a higher ceiling. Read the process on the [Upper Pay Range page](/upper-pay-range/)." },

      { kind: "h2", text: "Unqualified Teacher Range 2026/27" },
      { kind: "p", text: "Teachers without QTS are paid on a separate six-point range. This covers instructors, overseas-trained teachers awaiting recognition, and many trainees on salaried employment-based routes." },
      { kind: "table", caption: "Unqualified Teacher Range, STPCD 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["UQ1", "£23,731", "£24,908", "£27,727", "£29,335"],
        ["UQ2", "£26,075", "£27,589", "£30,411", "£32,018"],
        ["UQ3", "£28,757", "£30,272", "£33,093", "£34,702"],
        ["UQ4", "£31,124", "£32,636", "£35,464", "£37,067"],
        ["UQ5", "£33,810", "£35,320", "£38,146", "£39,746"],
        ["UQ6", "£36,493", "£38,003", "£40,831", "£42,429"],
      ]},
      { kind: "p", text: "Gaining QTS does not automatically move you onto M1 at the equivalent salary. Your school decides where on the main range to place you, and it is common to land on M1 even from UQ4 or above. That can mean a pay cut on qualifying — worth negotiating before you accept. More detail on the [unqualified teacher pay scale page](/unqualified-teacher-pay-scale/)." },

      { kind: "h2", text: "Lead practitioner and leadership ranges" },
      { kind: "p", text: "Above the classroom ranges sit two further structures. Lead practitioners are paid on a range for expert teaching roles. The leadership group is a 43-point spine from which each school defines an individual school range for each leadership post." },
      { kind: "table", caption: "Lead practitioner and leadership ranges, STPCD 2026/27", head: ["Range", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["Lead practitioner", "£53,847 – £81,860", "£55,331 – £83,346", "£58,119 – £86,136", "£64,023 – £92,043"],
        ["Leadership (L1–L43)", "£53,585 – £148,829", "£55,060 – £150,301", "£57,837 – £153,041", "£63,708 – £158,862"],
      ]},
      { kind: "p", text: "The leadership spine is wide because it has to cover everything from an assistant head in a small primary to the headteacher of a large multi-form secondary. Your individual school range is a band of points within that spine, set by the governing body. See the [leadership pay scale guide](/leadership-pay-scale/)." },

      { kind: "h2", text: "TLR and SEN allowances 2026/27" },
      { kind: "p", text: "Allowances are paid on top of your pay point as annual cash amounts. They are pensionable, so they raise both your take-home pay and the pension you build up each year." },
      { kind: "table", caption: "STPCD allowance ranges 2026/27", head: ["Allowance", "Minimum", "Maximum", "Typical use"], rows: [
        ["TLR 1", "£10,530", "£17,819", "Head of a large department or faculty"],
        ["TLR 2", "£3,650", "£8,912", "Head of a smaller subject, head of year"],
        ["TLR 3", "£727", "£3,600", "Fixed-term project responsibility"],
        ["SEN allowance", "£2,885", "£5,689", "Specialist SEN provision or unit"],
      ]},
      { kind: "callout", tone: "warn", title: "TLR 3 is time-limited by design", text: "A TLR 3 is awarded for a fixed-term project and stops when that project ends. It counts as pensionable pay while you receive it, but it cannot be used for an ongoing responsibility and should not be treated as a permanent pay rise." },

      { kind: "h2", text: "Pay scales in Wales, Scotland and Northern Ireland" },
      { kind: "p", text: "Teacher pay is devolved, so the STPCD only covers England. The other three nations run their own arrangements." },
      { kind: "table", caption: "How the four nations compare on M1 and the top classroom point", head: ["Nation", "Starting point", "Top classroom point", "Notes"], rows: [
        ["England (rest of)", "£34,068", "£52,835 (U3)", "STPCD, four regional bands"],
        ["Wales", "£34,068", "£52,835 (U3)", "IWPRB, currently mirrors STPCD"],
        ["Scotland", "£34,539", "£52,539 (Chartered Teacher)", "SNCT scale, no upper pay range"],
        ["Northern Ireland", "£32,188", "£50,085 (U3)", "Separate NI scale, lowest starting point"],
      ]},
      { kind: "p", text: "Scotland is the outlier structurally. There is no threshold application and no upper pay range: teachers progress automatically to the top of the main grade, then can apply for the Chartered Teacher route. Details on the [Scotland pay scale page](/teacher-pay-scale-scotland/), [Wales page](/teacher-pay-scale-wales/) and [Northern Ireland page](/ni-teacher-pay-scale/)." },

      { kind: "h2", text: "How your pay point affects your pension contribution" },
      { kind: "p", text: "The Teachers' Pension Scheme charges a tiered contribution rate based on your full-time equivalent salary. Crossing a tier boundary can mean a pay rise costs you more than you expected in the month it lands." },
      { kind: "table", caption: "Pension tier by pay point, rest of England 2026/27", head: ["Point", "Salary", "Tier rate", "Annual contribution"], rows: [
        ["M1", "£34,068", "7.4%", "£2,521"],
        ["M2", "£36,042", "8.6%", "£3,100"],
        ["M3", "£38,400", "8.6%", "£3,302"],
        ["M6", "£46,939", "9.6%", "£4,506"],
        ["U3", "£52,835", "9.6%", "£5,072"],
      ]},
      { kind: "p", text: "Note the M1 to M2 step. Salary rises £1,974 but the tier moves from 7.4% to 8.6%, so the pension deduction rises by £579 — nearly 30% of the pay rise. That is not a mistake on your payslip. Full explanation on the [teacher pension contributions page](/teacher-pension-contributions/)." },

      { kind: "h2", text: "Common misunderstandings about teacher pay scales" },
      { kind: "ul", items: [
        "**Thinking academies must use these scales.** They do not have to, but most mirror them. Always check the school's own pay policy before accepting an offer.",
        "**Assuming progression is automatic.** Movement up the main range depends on satisfactory appraisal, and crossing to the upper range requires a formal application.",
        "**Confusing the pay award with progression.** The 3.5% award lifts every point on the scale; moving up a point is separate and additional.",
        "**Expecting a September award in April.** Teacher pay awards run with the school year from 1 September, not the April tax year.",
        "**Reading the leadership spine as a ladder.** Your individual school range is a narrow band within L1–L43, not the whole spine.",
        "**Forgetting London bands are separate scales.** London weighting is built into a higher scale, not paid as an add-on allowance.",
      ]},
    ],
    faq: [
      { question: "What is the teacher pay scale for 2026/27?", answer: "In the rest of England the main range runs from £34,068 (M1) to £46,939 (M6), and the upper range from £49,134 (U1) to £52,835 (U3). Inner London runs from £41,728 to £54,131 on the main range and up to £64,683 on U3. All points rose 3.5% from 1 September 2026." },
      { question: "How much does a teacher earn in the UK?", answer: "A newly qualified teacher starts at £34,068 outside London or £41,728 in inner London. An experienced classroom teacher at the top of the upper pay range earns £52,835 outside London or £64,683 in inner London. Leadership posts range from £53,585 to £158,862." },
      { question: "How many points are on the teacher pay scale?", answer: "The main range has six points (M1–M6), the upper range three (U1–U3) and the unqualified range six (UQ1–UQ6). The leadership group is a 43-point spine, and the lead practitioner range sits between the classroom and leadership structures." },
      { question: "Do all schools have to follow the teacher pay scale?", answer: "Maintained schools must follow the STPCD. Academies, free schools and independent schools can set their own pay scales, though most academies track the STPCD points closely to stay competitive in recruitment. Always check the individual school pay policy." },
      { question: "When did the 2026/27 teacher pay scales take effect?", answer: "1 September 2026, in line with the school year. Teacher pay awards do not follow the April tax year, so your first uplifted payslip is usually the September or October one, sometimes with back pay if the award was announced late." },
      { question: "What is the difference between the main and upper pay range?", answer: "The main range (M1–M6) is the standard scale for qualified classroom teachers with roughly annual progression. The upper range (U1–U3) is for experienced teachers who have passed a threshold application demonstrating substantial and sustained achievement. Movement to the upper range is not automatic." },
      { question: "Is teacher pay the same across the UK?", answer: "No. England and Wales share the STPCD figures. Scotland uses the separate SNCT scale, which starts slightly higher at £34,539 but has no upper pay range. Northern Ireland has its own scale with the lowest starting point at £32,188." },
      { question: "How much is the teacher pay rise for 2026/27?", answer: "3.5% on every point of every scale, applied from 1 September 2026. On M1 in the rest of England that is worth about £1,152 a year; on U3 it is about £1,787. See the [teacher pay rise guide](/teacher-pay-rise/) for the background." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. 2026/27
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-pay-scale-2026-27",
    hub: "pay-scales",
    title: "Teacher Pay Scale 26/27",
    metaTitle: "Teacher Pay Scale 26/27 — Full STPCD Tables & 3.5% Award",
    metaDescription:
      "The 2026/27 teacher pay scales in full. Every M, U and UQ point across all England regions, what the 3.5% award is worth in cash, and when it reached your payslip.",
    primaryKeyword: "teacher pay scale 26 27",
    secondaryKeywords: [
      "teacher pay scales 26/27", "teacher pay scale 2026-27", "teacher pay 26/27",
      "teacher pay scale 26 27 gov uk", "teacher pay scale 2026/27",
      "teacher pay scales 2026-27", "stpcd 2026",
    ],
    calculator: "pay-scale",
    intro:
      "The STPCD 2026 raised every teacher pay point by 3.5% from 1 September 2026. Here are the full 2026/27 tables, what the award is actually worth in cash on each point, and the detail that matters for your payslip.",
    keyTakeaways: [
      "A 3.5% award applied to every point on every scale from 1 September 2026.",
      "In cash terms the award is worth £1,152 on M1 and £1,787 on U3 in the rest of England.",
      "Because the uplift is a percentage, teachers on higher points gained more cash than those on lower points.",
      "Several pay points crossed a pension contribution tier boundary, reducing the net value of the rise.",
      "Academies are not bound by the award, though most passed it on in full.",
    ],
    blocks: [
      { kind: "h2", text: "The 2026/27 award at a glance" },
      { kind: "p", text: "The School Teachers' Review Body recommended, and the government accepted, a 3.5% uplift to all statutory pay and allowance ranges for the 2026/27 school year. It applied from 1 September 2026 and was not staged." },
      { kind: "table", caption: "What the 3.5% award is worth in cash, rest of England", head: ["Point", "2025/26 (derived)", "2026/27", "Cash increase"], rows: [
        ["M1", "£32,916", "£34,068", "+£1,152"],
        ["M2", "£34,823", "£36,042", "+£1,219"],
        ["M3", "£37,101", "£38,400", "+£1,299"],
        ["M4", "£39,556", "£40,940", "+£1,384"],
        ["M5", "£42,057", "£43,529", "+£1,472"],
        ["M6", "£45,352", "£46,939", "+£1,587"],
        ["U1", "£47,472", "£49,134", "+£1,662"],
        ["U2", "£49,232", "£50,955", "+£1,723"],
        ["U3", "£51,048", "£52,835", "+£1,787"],
      ]},
      { kind: "callout", tone: "info", title: "How the 2025/26 column was derived", text: "The 2025/26 figures shown here are calculated by removing the 3.5% award from the published 2026/27 points (dividing by 1.035). They may differ by a pound or two from the published 2025/26 tables because of rounding at each step. The archive page has the detail: [2025/26 pay scales](/teacher-pay-scale-2025-26/)." },

      { kind: "h2", text: "Main Pay Range 2026/27" },
      { kind: "table", caption: "Main Pay Range (M1–M6), 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["M1", "£34,068", "£35,602", "£39,195", "£41,728"],
        ["M2", "£36,042", "£37,646", "£41,246", "£43,712"],
        ["M3", "£38,400", "£39,979", "£43,403", "£45,786"],
        ["M4", "£40,940", "£42,513", "£45,672", "£47,961"],
        ["M5", "£43,529", "£45,069", "£48,438", "£50,665"],
        ["M6", "£46,939", "£48,478", "£52,241", "£54,131"],
      ]},

      { kind: "h2", text: "Upper Pay Range and Unqualified Range 2026/27" },
      { kind: "table", caption: "Upper Pay Range (U1–U3), 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["U1", "£49,134", "£50,625", "£54,047", "£59,649"],
        ["U2", "£50,955", "£52,441", "£56,046", "£62,580"],
        ["U3", "£52,835", "£54,327", "£58,119", "£64,683"],
      ]},
      { kind: "table", caption: "Unqualified Teacher Range, 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["UQ1", "£23,731", "£24,908", "£27,727", "£29,335"],
        ["UQ2", "£26,075", "£27,589", "£30,411", "£32,018"],
        ["UQ3", "£28,757", "£30,272", "£33,093", "£34,702"],
        ["UQ4", "£31,124", "£32,636", "£35,464", "£37,067"],
        ["UQ5", "£33,810", "£35,320", "£38,146", "£39,746"],
        ["UQ6", "£36,493", "£38,003", "£40,831", "£42,429"],
      ]},

      { kind: "h2", text: "Allowances and leadership ranges for 2026/27" },
      { kind: "p", text: "The 3.5% uplift applied to allowance ranges and the leadership spine as well as the classroom scales." },
      { kind: "table", caption: "Allowances and higher ranges, 2026/27, rest of England", head: ["Item", "2026/27 range"], rows: [
        ["TLR 1", "£10,530 – £17,819"],
        ["TLR 2", "£3,650 – £8,912"],
        ["TLR 3", "£727 – £3,600"],
        ["SEN allowance", "£2,885 – £5,689"],
        ["Lead practitioner", "£53,847 – £81,860"],
        ["Leadership (L1–L43)", "£53,585 – £148,829"],
      ]},

      { kind: "h2", text: "Why the award was worth less than 3.5% in your pocket" },
      { kind: "p", text: "A 3.5% headline rise does not become a 3.5% rise in take-home pay. Three things reduce it." },
      { kind: "ol", items: [
        "**Income tax and National Insurance** take roughly a third of any increase for a basic-rate taxpayer, more if the rise pushes you over £50,270.",
        "**The pension contribution rises with your salary**, because it is a percentage of pay.",
        "**Some points crossed a pension tier boundary.** M1 sat at 7.4% before the award and the new figure of £34,068 is still inside the 7.4% band, but points closer to a boundary moved up a tier and lost more.",
      ]},
      { kind: "p", text: "On M6 in the rest of England, the £1,587 gross award translates to roughly £860 of extra take-home pay across the year, once pension, tax and National Insurance are applied. Work out your own position with the [teacher pay calculator](/teacher-pay-calculator/)." },

      { kind: "h2", text: "Did every teacher get the 3.5%?" },
      { kind: "p", text: "Not automatically. Maintained schools must apply the STPCD, so teachers there received the uplift in full. Academies and free schools set their own pay policies. Most mirrored the award, but they are not legally required to, and a minority applied a lower figure or delayed it." },
      { kind: "p", text: "If you work in an academy and your September pay looks unchanged, check the trust's pay policy and speak to your union representative. The [NEU](/neu-teacher-pay-scales/) and [NASUWT](/nasuwt-teacher-pay-scales/) both publish the statutory tables for comparison." },
      { kind: "callout", tone: "tip", title: "Check for back pay", text: "When a pay award is confirmed after the start of the autumn term, schools apply it retrospectively to 1 September. If the award reached your payslip in October or November, look for a back-pay line covering the earlier months." },

      { kind: "h2", text: "How 2026/27 compares to recent years" },
      { kind: "p", text: "The 3.5% award continues a run of above-inflation-target settlements following the recruitment and retention pressures of the early 2020s. What matters for your long-term earnings is that percentage awards compound: a point on the scale that rose 3.5% this year rises 3.5% from the new, higher base next time." },
      { kind: "p", text: "It also feeds straight into your pension. Career average benefits are built as 1/57th of each year's pensionable pay, so a higher salary this year permanently increases the slice of pension you banked for 2026/27. See [how teacher pensions work](/teacher-pension/)." },

      { kind: "h2", text: "How the award was decided" },
      { kind: "p", text: "Teacher pay in England is not negotiated. It is set by the Secretary of State on the recommendation of the School Teachers' Review Body, an independent panel that takes written and oral evidence each year from the Department for Education, employer representatives and the teaching unions." },
      { kind: "ol", items: [
        "**The remit letter** is issued by the Secretary of State, usually in the autumn, setting out what the STRB is asked to consider.",
        "**Evidence is submitted** by the DfE, unions including the [NEU](/neu-teacher-pay-scales/) and [NASUWT](/nasuwt-teacher-pay-scales/), and employer bodies.",
        "**The STRB reports** with recommendations, typically in the spring or early summer.",
        "**The government responds**, accepting, modifying or rejecting the recommendation.",
        "**The STPCD is published** and the new figures apply from 1 September.",
      ]},
      { kind: "p", text: "The recurring friction point is funding. An award is only fully funded if the DfE increases school budgets to match; where it does not, schools must absorb part of the cost from existing budgets, which has knock-on effects on staffing and resources. This is why headline awards and school-level affordability are often discussed separately." },

      { kind: "h2", text: "Checking you actually received the award" },
      { kind: "p", text: "It is worth taking five minutes to verify rather than assuming payroll got it right, particularly if you also changed pay point or hours in September." },
      { kind: "ol", items: [
        "**Find your annual gross** on the September or October payslip and multiply the monthly figure by 12.",
        "**Identify your pay point and pay area** from your written pay statement.",
        "**Compare against the table above.** Remember TLR and SEN allowances sit on top of the pay point figure.",
        "**If part time, apply your FTE fraction** to the full-time figure before comparing — see the [part-time pay calculator](/part-time-teacher-pay-calculator/).",
        "**Look for a back-pay line** if the award arrived after September.",
        "**Raise anything unexplained** with your union representative before going to the school formally.",
      ]},
      { kind: "callout", tone: "tip", title: "Two changes in one month is where errors happen", text: "If you moved up a pay point and received the award in the same September, payroll has applied two separate changes at once. That is the most common point at which a mistake creeps in, so check the arithmetic carefully in a progression year." },
    ],
    faq: [
      { question: "What is the teacher pay scale for 26/27?", answer: "The 2026/27 main range in the rest of England runs M1 £34,068, M2 £36,042, M3 £38,400, M4 £40,940, M5 £43,529, M6 £46,939. The upper range is U1 £49,134, U2 £50,955, U3 £52,835. Inner, outer and fringe London have their own higher tables." },
      { question: "How much was the 2026/27 teacher pay rise?", answer: "3.5% on all statutory pay and allowance ranges, effective 1 September 2026. In cash that is about £1,152 on M1 and £1,787 on U3 in the rest of England." },
      { question: "When did the 26/27 pay scales start?", answer: "1 September 2026, the start of the school year. If your school applied it late you should have received back pay to that date." },
      { question: "Do academies have to pay the 26/27 scales?", answer: "No. Academies and free schools set their own pay policies and are not bound by the STPCD. Most matched the 3.5% award to stay competitive, but you should check your trust's published pay policy to confirm." },
      { question: "Why did my pay rise by less than 3.5%?", answer: "The 3.5% is a gross figure. Income tax, National Insurance and your pension contribution all take a share, so take-home typically rises by around 2% to 2.3%. If the rise pushed you into a higher pension tier or over the higher-rate tax threshold, the net gain is smaller again." },
      { question: "Did TLR payments rise in 2026/27?", answer: "Yes. The 3.5% uplift applied to allowance ranges too. TLR 1 is now £10,530 to £17,819, TLR 2 is £3,650 to £8,912 and the SEN allowance range is £2,885 to £5,689. Whether your individual payment rose depends on your school's pay policy." },
      { question: "Where can I find the official 26/27 pay scale document?", answer: "The School Teachers' Pay and Conditions Document 2026 is published by the Department for Education on GOV.UK. The STRB report that recommended the award is published by the School Teachers' Review Body. Both are linked in the sources below." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. MAIN PAY RANGE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "main-pay-range",
    hub: "pay-scales",
    title: "Main Pay Range M1–M6",
    metaTitle: "Teacher Main Pay Scale M1–M6 2026/27 — Salary & Progression",
    metaDescription:
      "The Main Pay Range explained. M1 to M6 salaries for 2026/27 across every England region, how annual progression works, and what each pay point is worth after tax.",
    primaryKeyword: "teacher main pay scale",
    secondaryKeywords: [
      "main pay scale teacher", "m1 teacher salary", "m3 pay scale",
      "m5 teacher salary", "m6 teacher salary", "main pay range teacher",
      "m2 teacher salary", "m4 teacher salary", "mps teacher pay",
    ],
    calculator: "pay-scale",
    calculatorPreset: { scale: "main" },
    intro:
      "The Main Pay Range is where almost every qualified classroom teacher starts and spends their first years. Six points, roughly one a year, taking you from £34,068 to £46,939 outside London. Here is what each point pays and how you actually move up it.",
    keyTakeaways: [
      "The main range has six points, M1 to M6, and normally takes about six years to climb.",
      "M1 pays £34,068 in the rest of England and £41,728 in inner London for 2026/27.",
      "Progression is annual but conditional on satisfactory performance, not automatic by service.",
      "The M5 to M6 step is the biggest single jump at £3,410 in the rest of England.",
      "Crossing from M1 to M2 moves you into a higher pension tier, so the net gain is smaller than the gross rise.",
    ],
    blocks: [
      { kind: "h2", text: "Main Pay Range salaries 2026/27" },
      { kind: "table", caption: "Main Pay Range (M1–M6), STPCD 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["M1", "£34,068", "£35,602", "£39,195", "£41,728"],
        ["M2", "£36,042", "£37,646", "£41,246", "£43,712"],
        ["M3", "£38,400", "£39,979", "£43,403", "£45,786"],
        ["M4", "£40,940", "£42,513", "£45,672", "£47,961"],
        ["M5", "£43,529", "£45,069", "£48,438", "£50,665"],
        ["M6", "£46,939", "£48,478", "£52,241", "£54,131"],
      ]},
      { kind: "p", text: "Wales uses the same figures as the rest of England. Scotland and Northern Ireland run separate scales — see the [Scotland](/teacher-pay-scale-scotland/) and [Northern Ireland](/ni-teacher-pay-scale/) pages." },

      { kind: "h2", text: "How much each step is worth" },
      { kind: "p", text: "The steps up the main range are deliberately uneven. They get larger as you climb, which front-loads the incentive to stay in the profession through the difficult early years." },
      { kind: "table", caption: "Step increases on the main range, rest of England 2026/27", head: ["Step", "Increase", "Percentage"], rows: [
        ["M1 → M2", "£1,974", "5.79%"],
        ["M2 → M3", "£2,358", "6.54%"],
        ["M3 → M4", "£2,540", "6.61%"],
        ["M4 → M5", "£2,589", "6.32%"],
        ["M5 → M6", "£3,410", "7.83%"],
        ["M1 → M6 total", "£12,871", "37.8%"],
      ]},
      { kind: "p", text: "On top of these steps, the annual pay award lifts the whole scale. In a year when you also move up a point, your salary can rise by 9% or more. See the [teacher pay rise guide](/teacher-pay-rise/)." },

      { kind: "h2", text: "How progression up the main range works" },
      { kind: "p", text: "This is the part that is most often misunderstood. Movement up the main pay range is not automatic and not a right based on years served. It is a decision made by the school each year." },
      { kind: "ol", items: [
        "**Appraisal objectives are set** at the start of the school year, usually in September or October.",
        "**Evidence is gathered** through the year: lesson observations, book scrutinies, pupil progress data, contribution to the wider school.",
        "**The appraisal review takes place**, typically in the summer term.",
        "**A pay recommendation is made** by your appraiser to the headteacher or a pay committee of governors.",
        "**The governing body decides** and the increase takes effect from 1 September.",
      ]},
      { kind: "callout", tone: "tip", title: "Keep your own evidence file", text: "If a pay recommendation is ever disputed, the burden of showing you met your objectives falls largely on the evidence available at review. Keeping your own running record of data, observations and contributions through the year makes that conversation far easier." },
      { kind: "p", text: "In practice, the large majority of teachers who meet their objectives progress each year. Schools must publish their pay policy setting out the criteria they apply, and you have a right to see it." },

      { kind: "h2", text: "What each main range point pays after deductions" },
      { kind: "p", text: "Gross salary is only half the picture. These are approximate monthly take-home figures for the rest of England, assuming full-time hours, membership of the Teachers' Pension Scheme, the standard 1257L tax code and no student loan." },
      { kind: "table", caption: "Approximate take-home pay by main range point, rest of England", head: ["Point", "Gross", "Pension tier", "Approx. monthly take-home"], rows: [
        ["M1", "£34,068", "7.4%", "£2,169"],
        ["M2", "£36,042", "8.6%", "£2,249"],
        ["M3", "£38,400", "8.6%", "£2,377"],
        ["M4", "£40,940", "8.6%", "£2,515"],
        ["M5", "£43,529", "8.6%", "£2,656"],
        ["M6", "£46,939", "9.6%", "£2,809"],
      ]},
      { kind: "p", text: "Add a student loan and each of those figures drops by roughly £45 to £140 a month depending on your plan. Model your own position on the [teacher pay calculator](/teacher-pay-calculator/) or read the [take-home pay breakdown](/teacher-take-home-pay/)." },

      { kind: "h2", text: "The M1 to M2 pension trap" },
      { kind: "p", text: "There is one step on the main range where the arithmetic works against you more than teachers expect. M1 in the rest of England sits at £34,068, just inside the 7.4% pension tier which ends at £34,289. M2 at £36,042 falls into the 8.6% tier." },
      { kind: "table", caption: "What actually happens moving M1 to M2", head: ["Line", "M1", "M2", "Change"], rows: [
        ["Gross salary", "£34,068", "£36,042", "+£1,974"],
        ["Pension tier", "7.4%", "8.6%", "+1.2 points"],
        ["Pension contribution", "£2,521", "£3,100", "+£579"],
        ["Approx. monthly take-home", "£2,169", "£2,249", "+£80"],
      ]},
      { kind: "p", text: "A gross rise of £1,974 becomes about £960 a year of extra take-home, because the higher pension tier absorbs £579 and tax and National Insurance take the rest. The money is not lost — it is buying you more guaranteed pension — but it explains why the September payslip can feel underwhelming. Full detail on [teacher pension contributions](/teacher-pension-contributions/)." },

      { kind: "h2", text: "Where you start on the main range" },
      { kind: "p", text: "Schools have discretion over the starting point for a new appointment. Most newly qualified teachers begin on M1, but there is nothing in the STPCD preventing a school from starting you higher." },
      { kind: "ul", items: [
        "**Prior teaching experience** in another school normally carries across, though the receiving school decides how much to recognise.",
        "**Relevant non-teaching experience** can justify a higher start, particularly for career changers in shortage subjects.",
        "**Shortage subjects** — maths, physics, chemistry, computing and modern languages — give you more negotiating room.",
        "**Moving from unqualified to qualified** does not guarantee a matching salary. A teacher on UQ5 (£33,810) placed on M1 (£34,068) gains only £258.",
      ]},
      { kind: "callout", tone: "warn", title: "Starting salary is negotiable, and the moment matters", text: "The point to negotiate is before you accept the offer. Once you are on a point, moving up faster than the normal annual step is much harder to argue for." },

      { kind: "h2", text: "What comes after M6" },
      { kind: "p", text: "M6 is the top of the main range. From there you have three routes: apply to cross the threshold onto the [Upper Pay Range](/upper-pay-range/), take on a TLR for a defined responsibility, or move towards the [leadership group](/leadership-pay-scale/) or a lead practitioner post." },
      { kind: "p", text: "Staying on M6 indefinitely is common and perfectly viable, but it means your pay only rises with the annual award. Over a career that is a substantial difference: M6 to U3 is a further £5,896 in the rest of England." },

      { kind: "h2", text: "The main pay range across the UK" },
      { kind: "p", text: "The six-point main range structure is used in England, Wales and Northern Ireland, but the values differ and Scotland works differently again." },
      { kind: "table", caption: "Main range start and end points by nation, 2026/27", head: ["Nation", "M1", "M6", "Progression"], rows: [
        ["England (rest of)", "£34,068", "£46,939", "Annual, appraisal-linked"],
        ["Wales", "£34,068", "£46,939", "Annual, appraisal-linked"],
        ["Scotland", "£34,539", "£48,516", "Automatic each year"],
        ["Northern Ireland", "£32,188", "£44,342", "Annual, appraisal-linked"],
      ]},
      { kind: "p", text: "Scotland is the notable outlier: progression to the top of the main grade is automatic with service rather than dependent on an annual pay decision, and the Scottish M6 figure is £1,577 above the England equivalent. See the [Scotland pay scale page](/teacher-pay-scale-scotland/), [Wales page](/teacher-pay-scale-wales/) and [Northern Ireland page](/ni-teacher-pay-scale/)." },
    ],
    faq: [
      { question: "What is M1 teacher salary in 2026/27?", answer: "M1 pays £34,068 in the rest of England, £35,602 in the London fringe, £39,195 in outer London and £41,728 in inner London. That is the standard starting salary for a newly qualified teacher." },
      { question: "What is M3 on the pay scale?", answer: "M3 is the third point of the Main Pay Range, normally reached in your third year of teaching. For 2026/27 it pays £38,400 in the rest of England, £39,979 in the fringe, £43,403 in outer London and £45,786 in inner London." },
      { question: "What is M5 teacher salary?", answer: "M5 pays £43,529 in the rest of England for 2026/27. In inner London it is £50,665, outer London £48,438 and the fringe £45,069. It is the fifth of six points on the main range." },
      { question: "What is M6 teacher salary?", answer: "M6 is the top of the Main Pay Range at £46,939 in the rest of England for 2026/27, rising to £54,131 in inner London. From M6 you can apply to cross the threshold onto the Upper Pay Range." },
      { question: "How long does it take to get from M1 to M6?", answer: "Normally six years, moving one point each September subject to satisfactory appraisal. It is not automatic — the governing body makes the decision each year based on a pay recommendation — but most teachers who meet their objectives progress annually." },
      { question: "Is main pay range progression automatic?", answer: "No. Progression depends on a successful appraisal and a pay recommendation approved by the governing body. Schools must publish a pay policy setting out the criteria. In practice most teachers meeting their objectives do progress each year." },
      { question: "Why did my pay barely change when I moved from M1 to M2?", answer: "M1 sits in the 7.4% pension tier and M2 in the 8.6% tier. The £1,974 gross rise triggers a £579 increase in pension contributions, and tax and National Insurance take more, leaving roughly £80 a month extra. The additional pension contribution buys extra guaranteed retirement income." },
      { question: "Can I start higher than M1?", answer: "Yes. Schools have discretion to appoint at any point on the range. Prior teaching experience, relevant industry experience and shortage-subject specialisms all strengthen the case. Negotiate before accepting the offer, because moving up faster afterwards is much harder." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. UPPER PAY RANGE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "upper-pay-range",
    hub: "pay-scales",
    title: "Upper Pay Range U1–U3",
    metaTitle: "UPS Teacher Pay Scale 2026/27 — U1, U2, U3 & Threshold",
    metaDescription:
      "The Upper Pay Range explained. UPS1 to UPS3 salaries for 2026/27, how the threshold application works, what evidence you need and when progression happens.",
    primaryKeyword: "ups teacher pay scale",
    secondaryKeywords: [
      "upper pay scale teacher", "ups1 teacher pay", "ups3 teacher salary",
      "u1 u2 u3 teacher pay", "upper pay range teacher", "ups2 teacher salary",
      "threshold teacher pay", "upper pay scale",
    ],
    calculator: "pay-scale",
    calculatorPreset: { scale: "upper" },
    intro:
      "The Upper Pay Range is the reward for sustained excellent teaching, but you have to apply for it. Three points, from £49,134 to £52,835 outside London. Here is what each pays and exactly what the threshold application involves.",
    keyTakeaways: [
      "The upper range has three points: U1 £49,134, U2 £50,955 and U3 £52,835 in the rest of England.",
      "You must apply to cross the threshold from M6 — it never happens automatically.",
      "The test is that your achievements and contribution are substantial and sustained.",
      "Progression within the upper range is usually every two years, not annually.",
      "Inner London U3 pays £64,683, the highest classroom teacher salary in the country.",
    ],
    blocks: [
      { kind: "h2", text: "Upper Pay Range salaries 2026/27" },
      { kind: "table", caption: "Upper Pay Range (U1–U3), STPCD 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["U1 (UPS1)", "£49,134", "£50,625", "£54,047", "£59,649"],
        ["U2 (UPS2)", "£50,955", "£52,441", "£56,046", "£62,580"],
        ["U3 (UPS3)", "£52,835", "£54,327", "£58,119", "£64,683"],
      ]},
      { kind: "p", text: "Note how much wider the inner London upper range is. Outside London, U1 to U3 spans £3,701. In inner London it spans £5,034, and inner London U3 sits £11,848 above the rest-of-England figure — the largest regional gap anywhere on the classroom scales. See the [inner London pay scale](/inner-london-teacher-pay-scale/)." },

      { kind: "h2", text: "How the threshold application works" },
      { kind: "p", text: "Crossing the threshold is a formal application you make yourself. It is not something your school does for you, and it is not triggered by reaching M6." },
      { kind: "ol", items: [
        "**Check you are eligible.** You must hold QTS and normally be at the top of the main pay range (M6).",
        "**Read your school's pay policy.** It sets the application window, the format and the evidence expected. Most schools run one round a year, usually in the summer term.",
        "**Write the application.** You are demonstrating two things: that you are a highly competent teacher, and that your achievements and contribution are substantial and sustained.",
        "**Submit within the window.** Late applications are routinely refused, and a missed window normally means waiting a full year.",
        "**Decision and effect.** If successful, you move to U1 from the following 1 September.",
      ]},
      { kind: "callout", tone: "info", title: "What substantial and sustained actually means", text: "Substantial means your impact goes beyond your own classroom — mentoring, leading an initiative, improving practice in others. Sustained means over a period, normally at least two years, not a single strong year. Schools interpret this through their own pay policy, so read yours before writing anything." },

      { kind: "h2", text: "Evidence that strengthens a threshold application" },
      { kind: "p", text: "Applications succeed on specific, evidenced impact rather than general statements about being a good teacher. The strongest ones show a clear line from something you did to something that improved." },
      { kind: "ul", items: [
        "**Pupil progress data** over at least two years, with your classes compared to school or national benchmarks.",
        "**Lesson observation and learning walk records** showing consistently strong practice.",
        "**Evidence of impact on colleagues** — mentoring an ECT, running CPD, coaching, leading a working party.",
        "**Curriculum or resource development** you led that others now use.",
        "**Contribution beyond the classroom** — intervention programmes, enrichment, transition work, parental engagement.",
        "**Appraisal records** showing objectives consistently met over the review period.",
      ]},
      { kind: "callout", tone: "tip", title: "Start collecting a year early", text: "The most common reason for a weak application is thin evidence, not weak teaching. If you expect to apply next summer, begin a folder now — data snapshots, observation notes, emails thanking you for CPD you ran. Reconstructing two years of impact from memory in April is far harder." },

      { kind: "h2", text: "Progression within the upper range" },
      { kind: "p", text: "Once you are on the upper range, movement to U2 and then U3 is slower than on the main range. Most school pay policies specify progression every two years rather than annually, subject to continued strong performance." },
      { kind: "table", caption: "Upper range steps, rest of England 2026/27", head: ["Step", "Increase", "Typical wait"], rows: [
        ["M6 → U1", "£2,195", "After successful threshold application"],
        ["U1 → U2", "£1,821", "Normally 2 years"],
        ["U2 → U3", "£1,880", "Normally 2 years"],
        ["M6 → U3 total", "£5,896", "Around 4–5 years"],
      ]},
      { kind: "p", text: "The steps are smaller in both cash and percentage terms than the main range. U1 to U2 is 3.7% against 5.8% to 6.6% for main range steps. The upper range is designed as recognition of a plateau of excellence rather than a development ladder." },

      { kind: "h2", text: "What the upper range pays after deductions" },
      { kind: "p", text: "All three upper range points in the rest of England fall in the 9.6% pension tier, so the contribution rate is stable across the range." },
      { kind: "table", caption: "Approximate take-home pay on the upper range, rest of England", head: ["Point", "Gross", "Pension tier", "Approx. monthly take-home"], rows: [
        ["U1", "£49,134", "9.6%", "£2,927"],
        ["U2", "£50,955", "9.6%", "£3,034"],
        ["U3", "£52,835", "9.6%", "£3,138"],
      ]},
      { kind: "callout", tone: "warn", title: "U2 crosses the higher-rate threshold", text: "U2 at £50,955 sits just above the £50,270 higher-rate threshold. Only the excess is taxed at 40%, and because your pension contribution is deducted before tax, most upper-range teachers outside London remain effectively basic-rate. In inner London, where U1 is £59,649, the higher rate bites properly." },

      { kind: "h2", text: "Is the threshold application worth it?" },
      { kind: "p", text: "Financially, yes, and by more than the headline suggests. The gap between M6 and U3 is £5,896 a year in the rest of England, but the effect compounds in three ways." },
      { kind: "ul", items: [
        "**Every future percentage award applies to a higher base.** A 3.5% award on U3 is worth £1,787 against £1,587 on M6.",
        "**Your pension grows faster.** Career average benefits accrue at 1/57th of pensionable pay each year, so a higher salary permanently increases each year's pension slice. See [how teacher pensions work](/teacher-pension/).",
        "**It is the normal precondition for lead practitioner and leadership posts.** Few schools appoint to those roles from the main range.",
      ]},
      { kind: "p", text: "Over a fifteen-year period on the upper range rather than M6, the salary difference alone exceeds £88,000 before compounding — and the additional pension accrual sits on top. Model the pension effect with the [teachers' pension calculator](/teacher-pension-calculator/)." },

      { kind: "h2", text: "Common reasons threshold applications fail" },
      { kind: "ul", items: [
        "**Evidence is only about your own classroom.** Substantial means impact on others, not just strong personal teaching.",
        "**Only one year of evidence.** Sustained normally means two years or more.",
        "**Assertions without data.** Saying results improved is weaker than showing the figures against a benchmark.",
        "**Missing the application window.** Schools run one round a year and rarely accept late submissions.",
        "**Not reading the school pay policy.** Criteria and formats vary between schools and trusts.",
        "**Assuming M6 plus time is enough.** Length of service on M6 is not itself a qualifying argument.",
      ]},
      { kind: "p", text: "If your application is refused you are entitled to written reasons and to use the school's pay appeal procedure. Your union can support you through it — both the [NEU](/neu-teacher-pay-scales/) and [NASUWT](/nasuwt-teacher-pay-scales/) publish guidance on threshold appeals." },
    ],
    faq: [
      { question: "What is UPS1 teacher pay in 2026/27?", answer: "UPS1 (U1) pays £49,134 in the rest of England, £50,625 in the London fringe, £54,047 in outer London and £59,649 in inner London for the 2026/27 school year." },
      { question: "What is UPS3 teacher salary?", answer: "UPS3 (U3) is the top of the Upper Pay Range at £52,835 in the rest of England for 2026/27. In inner London it pays £64,683, which is the highest classroom teacher salary in the country outside leadership and lead practitioner posts." },
      { question: "How do I get onto the upper pay range?", answer: "You apply to cross the threshold, normally once you are at M6. You must show you are a highly competent teacher and that your achievements and contribution are substantial and sustained. Your school pay policy sets the window, format and evidence required. It is never automatic." },
      { question: "How long does it take to go from U1 to U3?", answer: "Typically four to five years. Most school pay policies specify progression every two years within the upper range rather than annually, subject to continued strong performance, rather than the roughly annual steps on the main range." },
      { question: "What is the difference between M6 and U1?", answer: "M6 is the top of the Main Pay Range at £46,939 in the rest of England. U1 is the first point of the Upper Pay Range at £49,134, a step of £2,195. The difference is not just money: reaching U1 requires a successful threshold application demonstrating substantial and sustained achievement." },
      { question: "Can I apply for the threshold before reaching M6?", answer: "Normally you need to be at the top of the main pay range. Some school pay policies allow earlier applications in exceptional circumstances, so check your school's published policy. In practice the great majority of successful applications come from teachers on M6." },
      { question: "What happens if my threshold application is refused?", answer: "You are entitled to written reasons and can use the school's pay appeal procedure. Ask for specific feedback on which criteria were not met so you can target the evidence next time. Your union can support you through an appeal." },
      { question: "Is the upper pay range worth applying for?", answer: "Financially yes. The M6 to U3 gap is £5,896 a year in the rest of England, every future percentage award applies to a higher base, and your pension accrues faster because career average benefits are 1/57th of pensionable pay each year. It is also the normal precondition for lead practitioner and leadership posts." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. UNQUALIFIED
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "unqualified-teacher-pay-scale",
    hub: "pay-scales",
    title: "Unqualified Teacher Pay Scale",
    metaTitle: "Unqualified Teacher Pay Scale 2026/27 — UQ1 to UQ6 Salary",
    metaDescription:
      "Unqualified teacher salaries for 2026/27. Full UQ1 to UQ6 tables for every England region, who is paid on this scale, and what happens to your pay when you gain QTS.",
    primaryKeyword: "unqualified teacher pay scale",
    secondaryKeywords: [
      "unqualified teacher salary", "uqt payscale", "unqualified teacher salary uk",
      "unqualified teacher pay", "unqualified teacher pay scale 2026",
      "instructor pay scale teacher", "unqualified teacher range",
    ],
    calculator: "pay-scale",
    calculatorPreset: { scale: "unqualified" },
    intro:
      "Teachers without QTS are paid on a separate six-point range that runs from £23,731 to £36,493 in the rest of England. Here are the full 2026/27 tables, who this scale applies to, and the pay trap to watch for when you qualify.",
    keyTakeaways: [
      "The unqualified range has six points, UQ1 to UQ6, from £23,731 to £36,493 in the rest of England.",
      "It covers instructors, overseas-trained teachers awaiting QTS recognition and many salaried trainees.",
      "UQ6 (£36,493) pays more than M1 (£34,068), so gaining QTS can mean a pay cut if you are placed on M1.",
      "Progression is not automatic and depends on your school's pay policy.",
      "Unqualified teachers are still eligible for the Teachers' Pension Scheme.",
    ],
    blocks: [
      { kind: "h2", text: "Unqualified teacher pay scale 2026/27" },
      { kind: "p", text: "This is the full statutory range for all four England pay bands. Wales uses the same figures as the rest of England." },
      { kind: "table", caption: "Unqualified Teacher Range, STPCD 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["UQ1", "£23,731", "£24,908", "£27,727", "£29,335"],
        ["UQ2", "£26,075", "£27,589", "£30,411", "£32,018"],
        ["UQ3", "£28,757", "£30,272", "£33,093", "£34,702"],
        ["UQ4", "£31,124", "£32,636", "£35,464", "£37,067"],
        ["UQ5", "£33,810", "£35,320", "£38,146", "£39,746"],
        ["UQ6", "£36,493", "£38,003", "£40,831", "£42,429"],
      ]},
      { kind: "p", text: "Northern Ireland runs a separate lower scale from £22,478 to £34,565 — see the [Northern Ireland pay scale page](/ni-teacher-pay-scale/). Scotland does not use an equivalent unqualified range; probationers there enter the SNCT main grade directly." },

      { kind: "h2", text: "Who is paid on the unqualified teacher scale?" },
      { kind: "p", text: "The scale applies to anyone employed as a teacher who does not hold Qualified Teacher Status. That covers several quite different groups." },
      { kind: "ul", items: [
        "**Instructors** with specialist skills or vocational expertise but no QTS, common in music, technology and vocational subjects.",
        "**Overseas-trained teachers** working in England while their qualifications are recognised or while they complete an assessment route.",
        "**Salaried trainees** on employment-based routes such as School Direct salaried or a salaried apprenticeship, who are employed while training.",
        "**Cover supervisors promoted into teaching roles** in shortage situations, though this should be a temporary arrangement.",
        "**Teachers whose QTS has lapsed or been suspended**, pending resolution.",
      ]},
      { kind: "callout", tone: "info", title: "Unqualified does not mean untrained", text: "Many teachers on this scale are highly experienced specialists — a former engineer teaching design technology, or a professional musician teaching instrumental lessons. The label refers only to holding QTS, not to competence or experience." },

      { kind: "h2", text: "The QTS pay trap" },
      { kind: "p", text: "This is the single most important thing on this page. UQ6 in the rest of England pays £36,493. M1, the standard starting point for a qualified teacher, pays £34,068. Gaining QTS and being placed on M1 would be a pay cut of £2,425." },
      { kind: "table", caption: "Unqualified points compared to M1 and M2, rest of England 2026/27", head: ["Unqualified point", "Salary", "vs M1 (£34,068)", "vs M2 (£36,042)"], rows: [
        ["UQ3", "£28,757", "−£5,311", "−£7,285"],
        ["UQ4", "£31,124", "−£2,944", "−£4,918"],
        ["UQ5", "£33,810", "−£258", "−£2,232"],
        ["UQ6", "£36,493", "+£2,425", "+£451"],
      ]},
      { kind: "p", text: "There is nothing in the STPCD that requires a school to place a newly qualified teacher on M1. Schools have full discretion over the starting point on the main range, and your prior service in the school is a legitimate argument for a higher placement." },
      { kind: "callout", tone: "warn", title: "Negotiate placement before you qualify", text: "Raise the question of your main range starting point with your headteacher well before your QTS is awarded, not after. Once you have been placed on a point and accepted it, arguing for a correction is considerably harder. Ask for the agreed point in writing." },

      { kind: "h2", text: "Progression on the unqualified range" },
      { kind: "p", text: "Movement up the unqualified range works the same way as the main range: it is a decision made annually by the school through its pay policy, based on an appraisal recommendation, and it takes effect from 1 September." },
      { kind: "p", text: "In practice, progression is applied less consistently on this scale than on the main range. Some schools move unqualified staff up a point each year as a matter of course; others treat the range as a set of fixed rates for different roles and rarely move anyone. Your school's published pay policy is the document that governs this, and you are entitled to see it." },

      { kind: "h2", text: "Take-home pay on the unqualified range" },
      { kind: "p", text: "Five of the six points sit inside the 7.4% pension tier, which ends at £34,289. Only UQ6 crosses into the 8.6% tier." },
      { kind: "table", caption: "Approximate take-home pay, unqualified range, rest of England", head: ["Point", "Gross", "Pension tier", "Approx. monthly take-home"], rows: [
        ["UQ1", "£23,731", "7.4%", "£1,600"],
        ["UQ3", "£28,757", "7.4%", "£1,910"],
        ["UQ5", "£33,810", "7.4%", "£2,153"],
        ["UQ6", "£36,493", "8.6%", "£2,274"],
      ]},
      { kind: "p", text: "In inner London the same points pay considerably more: UQ1 is £29,335 (about £1,909 a month take-home) and UQ6 is £42,429 (about £2,596). Run your own figures on the [teacher pay calculator](/teacher-pay-calculator/)." },

      { kind: "h2", text: "Pensions and allowances for unqualified teachers" },
      { kind: "p", text: "Unqualified teachers employed in a maintained school or most academies are eligible for the Teachers' Pension Scheme on exactly the same terms as qualified colleagues. You build 1/57th of your pensionable pay each year and your employer contributes 28.8%." },
      { kind: "p", text: "You can also receive TLR and SEN allowances if you carry the relevant responsibility. There is no rule restricting TLRs to qualified teachers, though in practice they are less commonly awarded. Full detail on [teacher pension contributions](/teacher-pension-contributions/)." },

      { kind: "h2", text: "Routes from unqualified to qualified" },
      { kind: "ol", items: [
        "**Assessment Only** — if you already have substantial teaching experience, you can be assessed against the Teachers' Standards without further training. Usually the fastest route.",
        "**School Direct salaried** — you remain employed and paid while training, typically on the unqualified range.",
        "**Postgraduate teaching apprenticeship** — a salaried route lasting around a year.",
        "**Overseas qualification recognition** — teachers qualified in certain countries can apply for QTS directly.",
        "**Part-time or flexible PGCE** — leaves your employment status unchanged but takes longer.",
      ]},
      { kind: "p", text: "Which route makes sense depends heavily on how much classroom experience you already have. Assessment Only is by far the cheapest and quickest if you qualify for it, but it requires you to be teaching at the standard expected of a qualified teacher already." },

      { kind: "h2", text: "Part-time pay on the unqualified range" },
      { kind: "p", text: "Many unqualified teaching roles, particularly instructor posts in music and vocational subjects, are part time. Pay is pro-rated in exactly the same way as on the main range: the full-time figure for your point multiplied by your FTE fraction." },
      { kind: "table", caption: "Pro rata unqualified pay, rest of England 2026/27", head: ["Point", "Full time", "0.6 FTE", "0.5 FTE", "0.4 FTE"], rows: [
        ["UQ1", "£23,731", "£14,239", "£11,866", "£9,492"],
        ["UQ3", "£28,757", "£17,254", "£14,379", "£11,503"],
        ["UQ6", "£36,493", "£21,896", "£18,247", "£14,597"],
      ]},
      { kind: "p", text: "The same pension tier rule applies: your contribution rate follows the full-time equivalent salary, not your actual part-time earnings. A 0.5 FTE instructor on UQ6 pays the 8.6% rate based on the £36,493 FTE figure. Work through your own position on the [part-time teacher pay calculator](/part-time-teacher-pay-calculator/)." },
      { kind: "callout", tone: "warn", title: "Hourly-paid instructor work is different", text: "Some peripatetic music and sports instructors are engaged on hourly contracts rather than a fraction of the unqualified range. Those arrangements sit outside the STPCD pay points entirely and are often less favourable, particularly on holiday pay and pension access. Check which basis your contract uses." },
    ],
    faq: [
      { question: "What is the unqualified teacher pay scale for 2026/27?", answer: "In the rest of England it runs UQ1 £23,731, UQ2 £26,075, UQ3 £28,757, UQ4 £31,124, UQ5 £33,810, UQ6 £36,493. Inner London runs from £29,335 to £42,429, outer London from £27,727 to £40,831 and the fringe from £24,908 to £38,003." },
      { question: "How much does an unqualified teacher earn?", answer: "Between £23,731 and £36,493 in the rest of England for 2026/27, depending on the pay point. In inner London the range is £29,335 to £42,429. The exact point is set by your school through its pay policy." },
      { question: "Will my pay drop when I get QTS?", answer: "It can. UQ6 pays £36,493 in the rest of England while M1 pays £34,068, so being placed on M1 from UQ6 would be a £2,425 cut. Schools have discretion to place you higher on the main range, so negotiate your starting point before your QTS is awarded and get it in writing." },
      { question: "Do unqualified teachers get the Teachers' Pension?", answer: "Yes. Unqualified teachers in maintained schools and most academies are eligible for the Teachers' Pension Scheme on the same terms as qualified colleagues, building 1/57th of pensionable pay each year with a 28.8% employer contribution." },
      { question: "Is progression on the unqualified scale automatic?", answer: "No. It follows the same appraisal and pay policy process as the main range, decided annually by the school and effective from 1 September. Application is less consistent than on the main range, so check your school's published pay policy." },
      { question: "Can an unqualified teacher get a TLR?", answer: "Yes. There is no rule restricting TLR or SEN allowances to qualified teachers. If you carry a defined responsibility that meets the criteria in your school's pay policy, you can be paid an allowance, though in practice it is less common." },
      { question: "What is a UQT?", answer: "UQT stands for unqualified teacher — someone employed in a teaching role who does not hold Qualified Teacher Status. It covers instructors, overseas-trained teachers awaiting recognition and salaried trainees. They are paid on the separate unqualified teacher range." },
      { question: "How do I get QTS while working as an unqualified teacher?", answer: "The main routes are Assessment Only (fastest if you already teach at the required standard), School Direct salaried, or a postgraduate teaching apprenticeship. Overseas-qualified teachers from some countries can apply for QTS recognition directly." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6. INNER LONDON
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "inner-london-teacher-pay-scale",
    hub: "pay-scales",
    title: "Inner London Teacher Pay Scale",
    metaTitle: "Inner London Teacher Pay Scale 2026/27 — Full Salary Tables",
    metaDescription:
      "Inner London teacher pay scales for 2026/27. Every M, U and UQ point, which boroughs count as inner London, and how the premium compares to the rest of England.",
    primaryKeyword: "inner london teacher pay scale",
    secondaryKeywords: [
      "inner london pay scale", "teacher pay inner london", "inner london teacher salary",
      "m6 inner london", "ups1 inner london", "m3 inner london",
      "inner london pay scale teachers", "teacher pay scales inner london",
    ],
    calculator: "pay-scale",
    calculatorPreset: { region: "inner-london" },
    intro:
      "Inner London is the highest-paying teacher pay band in the country. M1 starts at £41,728 and U3 reaches £64,683 for 2026/27. Here are the full tables, which boroughs qualify, and what the premium is actually worth once tax and living costs are accounted for.",
    keyTakeaways: [
      "Inner London M1 pays £41,728, which is £7,660 more than the rest of England.",
      "Inner London U3 pays £64,683 — the highest classroom teacher salary in the UK.",
      "The premium is largest at the top of the upper range, worth £11,848 on U3.",
      "Inner London covers the central boroughs plus a handful of others defined in the STPCD.",
      "Higher pay pushes inner London teachers into higher pension tiers earlier than colleagues elsewhere.",
    ],
    blocks: [
      { kind: "h2", text: "Inner London teacher pay scales 2026/27" },
      { kind: "table", caption: "Inner London Main and Upper Pay Range, 2026/27", head: ["Point", "Inner London", "Rest of England", "Premium"], rows: [
        ["M1", "£41,728", "£34,068", "+£7,660"],
        ["M2", "£43,712", "£36,042", "+£7,670"],
        ["M3", "£45,786", "£38,400", "+£7,386"],
        ["M4", "£47,961", "£40,940", "+£7,021"],
        ["M5", "£50,665", "£43,529", "+£7,136"],
        ["M6", "£54,131", "£46,939", "+£7,192"],
        ["U1", "£59,649", "£49,134", "+£10,515"],
        ["U2", "£62,580", "£50,955", "+£11,625"],
        ["U3", "£64,683", "£52,835", "+£11,848"],
      ]},
      { kind: "p", text: "Notice the jump in the premium at U1. On the main range the inner London uplift is a fairly steady £7,000 to £7,700. On the upper range it widens sharply to over £10,000, making inner London by far the best-paid place in the country to be an experienced classroom teacher." },

      { kind: "h2", text: "Inner London unqualified teacher pay" },
      { kind: "table", caption: "Inner London Unqualified Teacher Range, 2026/27", head: ["Point", "Inner London", "Rest of England", "Premium"], rows: [
        ["UQ1", "£29,335", "£23,731", "+£5,604"],
        ["UQ2", "£32,018", "£26,075", "+£5,943"],
        ["UQ3", "£34,702", "£28,757", "+£5,945"],
        ["UQ4", "£37,067", "£31,124", "+£5,943"],
        ["UQ5", "£39,746", "£33,810", "+£5,936"],
        ["UQ6", "£42,429", "£36,493", "+£5,936"],
      ]},
      { kind: "p", text: "The unqualified premium is a consistent £5,900 or so across the range. Full detail on the [unqualified teacher pay scale page](/unqualified-teacher-pay-scale/)." },

      { kind: "h2", text: "Which areas count as inner London?" },
      { kind: "p", text: "The STPCD defines the inner London area for pay purposes. It is broadly the central boroughs, and it does not map exactly onto other definitions of inner London used for statistics or transport zones." },
      { kind: "p", text: "The inner London pay area covers the boroughs of Camden, Greenwich, Hackney, Hammersmith and Fulham, Islington, Kensington and Chelsea, Lambeth, Lewisham, Southwark, Tower Hamlets, Wandsworth and Westminster, plus the City of London. Parts of Haringey, Newham and Waltham Forest are also included under long-standing arrangements." },
      { kind: "callout", tone: "warn", title: "Check the pay area before you accept a job", text: "Borough boundaries and pay areas do not always align with intuition. A school a few streets away can be in the outer London band, a difference of over £2,500 on M1. The school's advert or pay policy should state the pay area explicitly — ask if it does not." },

      { kind: "h2", text: "Inner London pay after tax and pension" },
      { kind: "p", text: "Higher gross pay means a higher pension tier and more income taxed at the higher rate. Roughly two thirds of the inner London premium reaches your bank account." },
      { kind: "table", caption: "Approximate inner London take-home pay, 2026/27", head: ["Point", "Gross", "Pension tier", "Approx. monthly take-home"], rows: [
        ["M1", "£41,728", "8.6%", "£2,558"],
        ["M3", "£45,786", "8.6%", "£2,778"],
        ["M6", "£54,131", "9.6%", "£3,214"],
        ["U1", "£59,649", "10.2%", "£3,459"],
        ["U3", "£64,683", "10.2%", "£3,676"],
      ]},
      { kind: "p", text: "Inner London teachers hit the higher pension tiers considerably earlier than colleagues elsewhere. An inner London M4 teacher on £47,961 is already in the 9.6% tier, while a rest-of-England teacher does not reach it until M6. On the upper range inner London teachers pay 10.2%, a tier that rest-of-England classroom teachers never reach. See [teacher pension contributions](/teacher-pension-contributions/)." },

      { kind: "h2", text: "Is the inner London premium enough?" },
      { kind: "p", text: "The honest answer is that it depends entirely on housing. The £7,660 premium on M1 is worth roughly £4,800 after tax and pension, which is about £400 a month." },
      { kind: "p", text: "Average private rents in inner London boroughs typically exceed those in most of England by considerably more than £400 a month. For teachers who already own property or have low housing costs, the premium is a genuine gain. For those renting privately in a central borough, it frequently does not close the gap. This is a well-documented driver of the recruitment and retention pressure London schools face." },
      { kind: "callout", tone: "info", title: "The premium is worth more at the top", text: "Because the inner London uplift widens on the upper range, the case for staying in inner London strengthens as you progress. On U3 the premium is £11,848 gross — roughly £6,500 after deductions, or £540 a month." },

      { kind: "h2", text: "How inner London compares to the other London bands" },
      { kind: "table", caption: "M1 and U3 across all four England pay bands, 2026/27", head: ["Band", "M1", "U3", "Premium on M1"], rows: [
        ["Inner London", "£41,728", "£64,683", "+£7,660"],
        ["Outer London", "£39,195", "£58,119", "+£5,127"],
        ["London Fringe", "£35,602", "£54,327", "+£1,534"],
        ["Rest of England", "£34,068", "£52,835", "—"],
      ]},
      { kind: "p", text: "The step between inner and outer London on M1 is £2,533, and between outer London and the fringe it is £3,593. Compare all three side by side on the [London teacher pay scale page](/teacher-pay-scale-london/), or see the [outer London](/outer-london-teacher-pay-scale/) and [fringe](/london-fringe-teacher-pay-scale/) pages." },

      { kind: "h2", text: "Pension implications of inner London pay" },
      { kind: "p", text: "One genuine long-term advantage of inner London pay is the pension. Career average benefits accrue at 1/57th of your actual pensionable pay each year, so a higher salary permanently increases the pension you bank for that year." },
      { kind: "p", text: "An inner London teacher on U3 (£64,683) builds about £1,135 of annual pension in a single year, against £927 for a colleague on U3 in the rest of England. Over a decade that difference compounds meaningfully. Model it with the [teachers' pension calculator](/teacher-pension-calculator/)." },

      { kind: "h2", text: "Recruitment and retention payments in inner London" },
      { kind: "p", text: "Beyond the statutory pay scale, the STPCD allows schools to make discretionary recruitment and retention payments. These are used more heavily in inner London than anywhere else in the country because of the persistent difficulty in staffing shortage subjects." },
      { kind: "ul", items: [
        "**Recruitment and retention payments** are time-limited discretionary sums a school can pay to attract or keep a teacher. They are not pensionable unless the school specifies otherwise.",
        "**Shortage subject premiums** are common in maths, physics, chemistry, computing and modern languages.",
        "**Housing assistance schemes** operate in some boroughs, including key worker housing and deposit loan schemes.",
        "**Golden hellos and retention bonuses** appear in some trusts, typically paid after a qualifying period of service.",
      ]},
      { kind: "callout", tone: "warn", title: "Check whether extra payments are pensionable", text: "A £3,000 recruitment payment that is not pensionable is worth noticeably less over a career than £3,000 added to your pay point, because it does not feed into your 1/57th accrual. Ask explicitly whether any additional payment counts as pensionable pay before comparing offers." },

      { kind: "h2", text: "Career progression in inner London" },
      { kind: "p", text: "Inner London schools tend to have flatter age profiles and higher turnover than the national picture, which cuts both ways. Promotion opportunities arise more frequently, but the workforce is less experienced and mentoring capacity can be thinner." },
      { kind: "p", text: "Financially the progression case is strong. Moving from M6 (£54,131) to U3 (£64,683) in inner London is worth £10,552, compared with £5,896 for the same move in the rest of England. The threshold application is therefore disproportionately valuable in inner London — see the [Upper Pay Range guide](/upper-pay-range/) for how to make it." },
    ],
    faq: [
      { question: "What is the inner London teacher pay scale for 2026/27?", answer: "The main range runs M1 £41,728, M2 £43,712, M3 £45,786, M4 £47,961, M5 £50,665, M6 £54,131. The upper range is U1 £59,649, U2 £62,580, U3 £64,683. The unqualified range runs £29,335 to £42,429." },
      { question: "How much more do inner London teachers earn?", answer: "£7,660 more than the rest of England on M1, and £11,848 more on U3. The premium is fairly steady at around £7,000 to £7,700 across the main range, then widens sharply on the upper range." },
      { question: "What is M6 inner London?", answer: "M6 is the top of the Main Pay Range in inner London, paying £54,131 for 2026/27. That is £7,192 above the rest-of-England M6 figure of £46,939, and it sits in the 9.6% pension contribution tier." },
      { question: "What is UPS1 in inner London?", answer: "UPS1 (U1) in inner London pays £59,649 for 2026/27, which is £10,515 above the rest-of-England figure. It falls in the 10.2% pension tier, a tier that rest-of-England classroom teachers never reach." },
      { question: "Which boroughs are inner London for teacher pay?", answer: "Camden, Greenwich, Hackney, Hammersmith and Fulham, Islington, Kensington and Chelsea, Lambeth, Lewisham, Southwark, Tower Hamlets, Wandsworth, Westminster and the City of London, plus parts of Haringey, Newham and Waltham Forest. Always confirm the pay area with the school directly." },
      { question: "Is inner London teacher pay worth the cost of living?", answer: "It depends on housing. The M1 premium is about £400 a month after tax and pension, which is often less than the rent difference in a central borough. Teachers who own property or have low housing costs gain most. The premium improves substantially on the upper range." },
      { question: "What is M3 inner London?", answer: "M3 in inner London pays £45,786 for 2026/27, compared with £38,400 in the rest of England — a premium of £7,386. It sits in the 8.6% pension contribution tier." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. OUTER LONDON
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "outer-london-teacher-pay-scale",
    hub: "pay-scales",
    title: "Outer London Teacher Pay Scale",
    metaTitle: "Outer London Teacher Pay Scale 2026/27 — Salary Tables",
    metaDescription:
      "Outer London teacher pay scales for 2026/27. Full M, U and UQ tables, which boroughs qualify, and how outer London compares to inner London and the fringe.",
    primaryKeyword: "outer london teacher pay scale",
    secondaryKeywords: [
      "outer london pay scale teachers", "m6 outer london", "outer london teacher salary",
      "outer london pay scale", "teacher pay outer london",
    ],
    calculator: "pay-scale",
    calculatorPreset: { region: "outer-london" },
    intro:
      "Outer London sits between the inner London and fringe bands, paying £5,127 above the rest of England on M1. Here are the full 2026/27 tables, the boroughs covered, and how the band compares in both directions.",
    keyTakeaways: [
      "Outer London M1 pays £39,195, which is £5,127 above the rest of England.",
      "Outer London U3 pays £58,119, £5,284 above the rest-of-England figure.",
      "The band covers most of the suburban London boroughs outside the central core.",
      "The premium is roughly 15% on M1, falling to 10% on U3.",
      "Outer London teachers reach the 10.2% pension tier on U2 and U3.",
    ],
    blocks: [
      { kind: "h2", text: "Outer London teacher pay scales 2026/27" },
      { kind: "table", caption: "Outer London Main and Upper Pay Range, 2026/27", head: ["Point", "Outer London", "Rest of England", "Premium"], rows: [
        ["M1", "£39,195", "£34,068", "+£5,127"],
        ["M2", "£41,246", "£36,042", "+£5,204"],
        ["M3", "£43,403", "£38,400", "+£5,003"],
        ["M4", "£45,672", "£40,940", "+£4,732"],
        ["M5", "£48,438", "£43,529", "+£4,909"],
        ["M6", "£52,241", "£46,939", "+£5,302"],
        ["U1", "£54,047", "£49,134", "+£4,913"],
        ["U2", "£56,046", "£50,955", "+£5,091"],
        ["U3", "£58,119", "£52,835", "+£5,284"],
      ]},
      { kind: "p", text: "Unlike inner London, the outer London premium stays broadly flat at around £5,000 across the whole scale. In percentage terms that means the advantage shrinks as you progress: 15.0% on M1 but only 10.0% on U3." },

      { kind: "h2", text: "Outer London unqualified teacher pay" },
      { kind: "table", caption: "Outer London Unqualified Teacher Range, 2026/27", head: ["Point", "Outer London", "Rest of England", "Premium"], rows: [
        ["UQ1", "£27,727", "£23,731", "+£3,996"],
        ["UQ2", "£30,411", "£26,075", "+£4,336"],
        ["UQ3", "£33,093", "£28,757", "+£4,336"],
        ["UQ4", "£35,464", "£31,124", "+£4,340"],
        ["UQ5", "£38,146", "£33,810", "+£4,336"],
        ["UQ6", "£40,831", "£36,493", "+£4,338"],
      ]},

      { kind: "h2", text: "Which boroughs are outer London?" },
      { kind: "p", text: "The outer London pay area covers the suburban boroughs surrounding the inner London core. That includes Barking and Dagenham, Barnet, Bexley, Brent, Bromley, Croydon, Ealing, Enfield, Harrow, Havering, Hillingdon, Hounslow, Kingston upon Thames, Merton, Redbridge, Richmond upon Thames, Sutton, and the parts of Haringey, Newham and Waltham Forest not included in the inner London area." },
      { kind: "callout", tone: "tip", title: "Boundary schools are worth checking carefully", text: "Several boroughs are split between pay areas, and a school on the wrong side of a boundary can cost you £2,533 a year on M1. If you are applying in Haringey, Newham or Waltham Forest in particular, confirm the pay area in writing before accepting." },

      { kind: "h2", text: "Outer London take-home pay" },
      { kind: "table", caption: "Approximate outer London take-home pay, 2026/27", head: ["Point", "Gross", "Pension tier", "Approx. monthly take-home"], rows: [
        ["M1", "£39,195", "8.6%", "£2,420"],
        ["M6", "£52,241", "9.6%", "£3,103"],
        ["U3", "£58,119", "10.2%", "£3,392"],
      ]},
      { kind: "p", text: "Outer London M1 already sits in the 8.6% pension tier, unlike the rest of England where M1 remains at 7.4%. On U2 and U3 outer London teachers move into the 10.2% tier. Work out your exact figure with the [teacher pay calculator](/teacher-pay-calculator/)." },

      { kind: "h2", text: "Outer London compared to inner London and the fringe" },
      { kind: "table", caption: "The three London bands compared, 2026/27", head: ["Point", "Fringe", "Outer London", "Inner London"], rows: [
        ["M1", "£35,602", "£39,195", "£41,728"],
        ["M3", "£39,979", "£43,403", "£45,786"],
        ["M6", "£48,478", "£52,241", "£54,131"],
        ["U1", "£50,625", "£54,047", "£59,649"],
        ["U3", "£54,327", "£58,119", "£64,683"],
      ]},
      { kind: "p", text: "Moving from outer to inner London is worth £2,533 on M1 but £6,564 on U3, because the inner London upper range widens so much. For an experienced teacher the inner London band is disproportionately more valuable. See the [inner London page](/inner-london-teacher-pay-scale/) and the [full London comparison](/teacher-pay-scale-london/)." },

      { kind: "h2", text: "Is outer London the best value London band?" },
      { kind: "p", text: "For many teachers, yes. Outer London pays £5,127 more than the rest of England on M1 while housing costs in most outer boroughs are substantially below inner London levels. The premium-to-cost ratio is generally the most favourable of the three London bands." },
      { kind: "p", text: "The calculation shifts once you reach the upper range. An experienced teacher on U3 gains a further £6,564 by moving into inner London, which is a much larger step than the £2,533 available at M1. If you expect to spend most of your career on the upper range, inner London becomes financially compelling in a way it is not for an early-career teacher." },

      { kind: "h2", text: "Pension and long-term effect" },
      { kind: "p", text: "Outer London pay feeds into your pension in the same way as any other salary. Each year you build 1/57th of pensionable pay, so an outer London teacher on U3 (£58,119) banks about £1,020 of annual pension in that year against £927 for a rest-of-England colleague." },
      { kind: "p", text: "Over a twenty-year career on outer London rates rather than rest-of-England rates, the difference in accrued pension alone runs to several thousand pounds a year in retirement. Model it on the [teachers' pension calculator](/teacher-pension-calculator/) or read the [pension guide](/teacher-pension/)." },

      { kind: "h2", text: "Should you commute into inner London instead?" },
      { kind: "p", text: "This is a real decision for many outer London teachers, because an inner London post pays £2,533 more on M1 and £6,564 more on U3 while often being only a few stops further on the Tube." },
      { kind: "p", text: "The arithmetic depends on your pay point and your travel costs. On M1 the £2,533 gross premium is worth roughly £1,470 after tax, National Insurance and pension — about £122 a month. An annual travelcard extension into central London can absorb a large part of that, so the move is close to neutral for an early-career teacher." },
      { kind: "table", caption: "Outer to inner London move: gross gain by pay point", head: ["Point", "Outer London", "Inner London", "Gross gain"], rows: [
        ["M1", "£39,195", "£41,728", "+£2,533"],
        ["M6", "£52,241", "£54,131", "+£1,890"],
        ["U1", "£54,047", "£59,649", "+£5,602"],
        ["U3", "£58,119", "£64,683", "+£6,564"],
      ]},
      { kind: "p", text: "Notice the pattern. The gain actually narrows at M6 to £1,890, then jumps sharply once you reach the upper range. For a teacher on the upper pay range the £6,564 premium comfortably outweighs any realistic commuting cost. See the [inner London pay scale](/inner-london-teacher-pay-scale/)." },
      { kind: "callout", tone: "tip", title: "Time the move to your threshold application", text: "If you are approaching a threshold application, consider making it before moving to inner London rather than after. Crossing to U1 in inner London is worth £5,602 more than crossing in outer London, and arriving already on the upper range captures that immediately." },

      { kind: "h2", text: "Common outer London pay mistakes" },
      { kind: "ul", items: [
        "**Assuming all Greater London boroughs pay the same.** Inner and outer London are separate bands worth £2,533 apart on M1.",
        "**Not checking split boroughs.** Haringey, Newham and Waltham Forest contain both inner and outer London pay areas.",
        "**Expecting an allowance line on the payslip.** London weighting is built into a higher pay scale, not paid separately.",
        "**Overlooking the earlier pension tier.** Outer London M1 sits in the 8.6% tier while rest-of-England M1 is 7.4%, so part of the premium is absorbed.",
        "**Comparing gross rather than net.** The £5,127 M1 premium is worth roughly £3,000 after deductions — check with the [teacher pay calculator](/teacher-pay-calculator/).",
      ]},
    ],
    faq: [
      { question: "What is the outer London teacher pay scale for 2026/27?", answer: "The main range runs M1 £39,195, M2 £41,246, M3 £43,403, M4 £45,672, M5 £48,438, M6 £52,241. The upper range is U1 £54,047, U2 £56,046, U3 £58,119. The unqualified range runs £27,727 to £40,831." },
      { question: "What is M6 outer London?", answer: "M6 is the top of the Main Pay Range in outer London at £52,241 for 2026/27, which is £5,302 above the rest-of-England figure of £46,939. It sits in the 9.6% pension contribution tier." },
      { question: "Which boroughs count as outer London for teacher pay?", answer: "Barking and Dagenham, Barnet, Bexley, Brent, Bromley, Croydon, Ealing, Enfield, Harrow, Havering, Hillingdon, Hounslow, Kingston upon Thames, Merton, Redbridge, Richmond upon Thames and Sutton, plus the parts of Haringey, Newham and Waltham Forest outside the inner London area." },
      { question: "How much more is inner London than outer London?", answer: "£2,533 more on M1 and £6,564 more on U3. The gap is small early in your career and widens considerably on the upper range, because the inner London upper range is much more generous." },
      { question: "Is outer London teacher pay good value?", answer: "For early-career teachers it is often the best-value London band, because the £5,127 M1 premium comes with housing costs well below inner London. The balance shifts on the upper range, where inner London offers a further £6,564." },
      { question: "Do outer London teachers pay a higher pension rate?", answer: "Often yes, because the tier follows salary. Outer London M1 at £39,195 is in the 8.6% tier while rest-of-England M1 remains at 7.4%. On U2 and U3 outer London teachers reach the 10.2% tier." },
      { question: "Should I commute into inner London from an outer London area?", answer: "It depends on your pay point. On M1 the gain is £2,533 gross, roughly £122 a month after deductions, which an extended travelcard can largely absorb. On U3 the gain is £6,564, which comfortably outweighs realistic commuting costs. The move makes far more financial sense once you are on the upper pay range." },
      { question: "What is UPS1 in outer London?", answer: "U1 in outer London pays £54,047 for 2026/27, which is £4,913 above the rest-of-England figure of £49,134 but £5,602 below the inner London figure of £59,649. It sits in the 9.6% pension contribution tier." },
      { question: "Is London weighting paid separately in outer London?", answer: "No. London weighting is built into a higher pay scale rather than shown as a separate allowance line on your payslip. Your whole salary shifts up, which is why the premium is pensionable and taxable in the normal way." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. LONDON FRINGE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "london-fringe-teacher-pay-scale",
    hub: "pay-scales",
    title: "London Fringe Teacher Pay Scale",
    metaTitle: "Fringe Teacher Pay Scale 2026/27 — London Fringe Salaries",
    metaDescription:
      "London fringe teacher pay scales for 2026/27. Full salary tables, which Home Counties areas qualify for fringe pay, and how the small premium actually works.",
    primaryKeyword: "fringe teacher pay scale",
    secondaryKeywords: [
      "london fringe teacher pay scale", "fringe pay scale teachers",
      "london fringe pay scale", "fringe area teacher pay", "teacher pay fringe",
    ],
    calculator: "pay-scale",
    calculatorPreset: { region: "fringe" },
    intro:
      "The London fringe is the smallest of the four England pay bands, worth about £1,500 a year over the rest of England. It covers commuter areas in the Home Counties just outside Greater London. Here are the full 2026/27 tables and who qualifies.",
    keyTakeaways: [
      "Fringe M1 pays £35,602, only £1,534 above the rest of England.",
      "The fringe premium is roughly flat in cash terms across the whole scale.",
      "As a percentage the premium shrinks from 4.5% on M1 to 2.8% on U3.",
      "The band covers parts of Berkshire, Buckinghamshire, Essex, Hertfordshire, Kent and Surrey.",
      "Fringe M1 crosses into the 8.6% pension tier, unlike rest-of-England M1 at 7.4%.",
    ],
    blocks: [
      { kind: "h2", text: "London fringe pay scales 2026/27" },
      { kind: "table", caption: "London Fringe Main and Upper Pay Range, 2026/27", head: ["Point", "Fringe", "Rest of England", "Premium"], rows: [
        ["M1", "£35,602", "£34,068", "+£1,534"],
        ["M2", "£37,646", "£36,042", "+£1,604"],
        ["M3", "£39,979", "£38,400", "+£1,579"],
        ["M4", "£42,513", "£40,940", "+£1,573"],
        ["M5", "£45,069", "£43,529", "+£1,540"],
        ["M6", "£48,478", "£46,939", "+£1,539"],
        ["U1", "£50,625", "£49,134", "+£1,491"],
        ["U2", "£52,441", "£50,955", "+£1,486"],
        ["U3", "£54,327", "£52,835", "+£1,492"],
      ]},
      { kind: "p", text: "The fringe allowance is essentially a flat cash uplift of around £1,500 applied to every point. Because it does not scale with salary, its percentage value falls steadily: 4.5% on M1 down to 2.8% on U3." },

      { kind: "h2", text: "Fringe unqualified teacher pay" },
      { kind: "table", caption: "London Fringe Unqualified Teacher Range, 2026/27", head: ["Point", "Fringe", "Rest of England", "Premium"], rows: [
        ["UQ1", "£24,908", "£23,731", "+£1,177"],
        ["UQ3", "£30,272", "£28,757", "+£1,515"],
        ["UQ6", "£38,003", "£36,493", "+£1,510"],
      ]},

      { kind: "h2", text: "Which areas qualify for fringe pay?" },
      { kind: "p", text: "The fringe area is defined in the STPCD and covers districts immediately outside Greater London where commuting into the capital is common and housing costs are elevated." },
      { kind: "ul", items: [
        "**Berkshire** — Bracknell Forest, Slough, Windsor and Maidenhead.",
        "**Buckinghamshire** — South Bucks and Chiltern districts.",
        "**Essex** — Basildon, Brentwood, Epping Forest, Harlow and Thurrock.",
        "**Hertfordshire** — Broxbourne, Dacorum, Hertsmere, St Albans, Three Rivers, Watford and Welwyn Hatfield.",
        "**Kent** — Dartford, Gravesham and Sevenoaks.",
        "**Surrey** — the whole county.",
        "**West Sussex** — Crawley.",
      ]},
      { kind: "callout", tone: "warn", title: "Fringe boundaries are district-level, not county-level", text: "With the exception of Surrey, fringe status applies to specific districts rather than whole counties. A school in one part of Essex or Hertfordshire may qualify while a school twenty minutes away does not. Confirm with the school before accepting an offer." },

      { kind: "h2", text: "Fringe take-home pay" },
      { kind: "table", caption: "Approximate fringe take-home pay, 2026/27", head: ["Point", "Gross", "Pension tier", "Approx. monthly take-home"], rows: [
        ["M1", "£35,602", "8.6%", "£2,225"],
        ["M6", "£48,478", "9.6%", "£2,892"],
        ["U3", "£54,327", "9.6%", "£3,226"],
      ]},
      { kind: "callout", tone: "info", title: "The fringe M1 pension quirk", text: "Fringe M1 at £35,602 sits just above the 7.4% pension tier ceiling of £34,289, so fringe teachers pay 8.6% from their very first year while rest-of-England M1 teachers pay 7.4%. That claws back around £427 a year of the £1,534 premium." },

      { kind: "h2", text: "Is fringe pay worth it?" },
      { kind: "p", text: "The fringe premium is modest. On M1 the £1,534 gross uplift is worth roughly £820 after tax, National Insurance and the higher pension tier — about £68 a month." },
      { kind: "p", text: "That is unlikely to be decisive on its own. Where fringe areas genuinely compete is on the combination of a small pay uplift, housing costs below inner and outer London, and reasonable commuting access. For teachers who want London-adjacent living without London housing costs, the fringe band is a sensible middle ground rather than a significant financial draw." },

      { kind: "h2", text: "Fringe compared to the other bands" },
      { kind: "table", caption: "All four England pay bands on key points, 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["M1", "£34,068", "£35,602", "£39,195", "£41,728"],
        ["M6", "£46,939", "£48,478", "£52,241", "£54,131"],
        ["U3", "£52,835", "£54,327", "£58,119", "£64,683"],
      ]},
      { kind: "p", text: "Moving from a fringe school to an outer London school is worth £3,593 on M1 — more than twice the fringe premium itself. If you are already commuting into the fringe area, it is worth checking whether nearby outer London schools are within reach. Compare on the [London pay scale page](/teacher-pay-scale-london/) and the [outer London page](/outer-london-teacher-pay-scale/)." },

      { kind: "h2", text: "The fringe premium in context" },
      { kind: "p", text: "The fringe band was created to help schools on London's doorstep compete for staff who could otherwise commute into the capital for materially more money. Whether it succeeds is debatable, because the gap it has to close is large." },
      { kind: "table", caption: "What a fringe teacher gives up by not working in London, M1 2026/27", head: ["Alternative", "M1 salary", "Gain over fringe"], rows: [
        ["Fringe school", "£35,602", "—"],
        ["Outer London school", "£39,195", "+£3,593"],
        ["Inner London school", "£41,728", "+£6,126"],
      ]},
      { kind: "p", text: "A teacher living in Watford, St Albans or Dartford is typically within commuting distance of outer London schools. The £3,593 difference is more than twice the entire fringe premium, so for anyone willing to travel a little further the fringe band rarely represents the best available pay." },
      { kind: "p", text: "Where the fringe genuinely wins is on total quality of life: shorter commutes, schools with lower turnover, and housing costs well below inner London. Those are real benefits, but they are lifestyle arguments rather than pay arguments." },

      { kind: "h2", text: "Progression on the fringe scale" },
      { kind: "p", text: "Progression works exactly as it does elsewhere in England. You move up the main range annually subject to satisfactory appraisal, then apply to cross the threshold to the upper range." },
      { kind: "table", caption: "Fringe career progression, 2026/27", head: ["Stage", "Point", "Salary"], rows: [
        ["Starting out", "M1", "£35,602"],
        ["Mid main range", "M3", "£39,979"],
        ["Top of main range", "M6", "£48,478"],
        ["After threshold", "U1", "£50,625"],
        ["Top of upper range", "U3", "£54,327"],
      ]},
      { kind: "p", text: "The full journey from M1 to U3 on the fringe scale is worth £18,725, closely tracking the £18,767 available in the rest of England. Read how each stage works in the [Main Pay Range guide](/main-pay-range/) and the [Upper Pay Range guide](/upper-pay-range/)." },

      { kind: "h2", text: "Common fringe pay mistakes" },
      { kind: "ul", items: [
        "**Assuming a whole county qualifies.** Only Surrey is included in full; elsewhere fringe status applies district by district.",
        "**Thinking the fringe is part of London weighting proper.** It is a separate, much smaller band worth around £1,500 rather than £5,000 or £7,600.",
        "**Missing the pension tier effect.** Fringe M1 sits in the 8.6% tier while rest-of-England M1 is 7.4%, clawing back roughly £427 of the premium.",
        "**Not comparing nearby outer London schools**, which pay £3,593 more on M1.",
        "**Assuming your home address matters.** Pay area is determined by the school's location, not where you live.",
      ]},
    ],
    faq: [
      { question: "What is the London fringe teacher pay scale for 2026/27?", answer: "The main range runs M1 £35,602, M2 £37,646, M3 £39,979, M4 £42,513, M5 £45,069, M6 £48,478. The upper range is U1 £50,625, U2 £52,441, U3 £54,327." },
      { question: "How much is the London fringe allowance?", answer: "Around £1,500 a year, built into a higher pay scale rather than paid as a separate allowance. On M1 it is £1,534 and on U3 it is £1,492. The cash value is broadly flat across the scale, so its percentage value falls as you progress." },
      { question: "Which areas get London fringe teacher pay?", answer: "Parts of Berkshire, Buckinghamshire, Essex, Hertfordshire, Kent and West Sussex, plus the whole of Surrey. Fringe status applies at district level rather than county level, so confirm with the school directly." },
      { question: "Is the fringe premium worth it?", answer: "Financially it is modest — about £68 a month after tax, National Insurance and the higher pension tier on M1. Its real value is the combination of a small uplift with housing costs below inner and outer London and good commuting access." },
      { question: "Why do fringe teachers pay more pension on M1?", answer: "Fringe M1 at £35,602 sits above the 7.4% pension tier ceiling of £34,289, so fringe teachers pay 8.6% from year one. Rest-of-England M1 teachers on £34,068 remain in the 7.4% tier, which claws back roughly £427 of the fringe premium." },
      { question: "Is Surrey a London fringe area for teacher pay?", answer: "Yes. Surrey is the one county included in full in the fringe area. Elsewhere fringe status applies only to specified districts within the county." },
      { question: "Should I work in outer London instead of the fringe?", answer: "Financially, usually yes if it is commutable. An outer London school pays £3,593 more on M1 than a fringe school, which is more than twice the entire fringe premium. Many fringe towns such as Watford, St Albans and Dartford are within reasonable reach of outer London boroughs." },
      { question: "What is the top of the fringe pay scale?", answer: "U3 at £54,327 for classroom teachers. Lead practitioners in the fringe area can reach £83,346, and the fringe leadership spine runs from £55,060 to £150,301 for the largest headships." },
      { question: "Does fringe pay apply to all of Hertfordshire and Essex?", answer: "No. Only specified districts qualify. In Hertfordshire that includes Broxbourne, Dacorum, Hertsmere, St Albans, Three Rivers, Watford and Welwyn Hatfield; in Essex it includes Basildon, Brentwood, Epping Forest, Harlow and Thurrock. Schools elsewhere in those counties are on rest-of-England pay." },
      { question: "How much is fringe pay after tax?", answer: "A fringe teacher on M1 (£35,602) takes home roughly £2,225 a month, against about £2,169 for a rest-of-England colleague on M1 — a difference of around £68 a month once tax, National Insurance and the higher pension tier are applied." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 9. LONDON COMPARISON
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-pay-scale-london",
    hub: "pay-scales",
    title: "London Teacher Pay Scales Compared",
    metaTitle: "Teacher Pay Scale London 2026/27 — Inner, Outer & Fringe",
    metaDescription:
      "All three London teacher pay bands compared for 2026/27. Inner, outer and fringe salaries side by side, which boroughs fall where, and what each premium is worth.",
    primaryKeyword: "teacher pay scale london",
    secondaryKeywords: [
      "london teacher pay scale", "teacher salary london", "teachers pay london",
      "teacher payscale london", "london teacher salary", "teacher pay scales london",
    ],
    calculator: "pay-scale",
    calculatorPreset: { region: "inner-london" },
    intro:
      "London has three separate teacher pay bands and the difference between them is substantial — up to £10,356 a year on the same pay point. This page puts all three side by side against the rest of England so you can see exactly where a school sits.",
    keyTakeaways: [
      "London has three pay bands: inner, outer and fringe, plus the rest of England baseline.",
      "On M1 the spread runs from £34,068 outside London to £41,728 in inner London.",
      "On U3 the spread is much wider, from £52,835 to £64,683 — a gap of £11,848.",
      "Inner London is disproportionately generous on the upper pay range.",
      "Pay band is set by school location, not by where you live.",
    ],
    blocks: [
      { kind: "h2", text: "All London pay bands compared 2026/27" },
      { kind: "table", caption: "Main Pay Range across all four bands, 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["M1", "£34,068", "£35,602", "£39,195", "£41,728"],
        ["M2", "£36,042", "£37,646", "£41,246", "£43,712"],
        ["M3", "£38,400", "£39,979", "£43,403", "£45,786"],
        ["M4", "£40,940", "£42,513", "£45,672", "£47,961"],
        ["M5", "£43,529", "£45,069", "£48,438", "£50,665"],
        ["M6", "£46,939", "£48,478", "£52,241", "£54,131"],
      ]},
      { kind: "table", caption: "Upper Pay Range across all four bands, 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["U1", "£49,134", "£50,625", "£54,047", "£59,649"],
        ["U2", "£50,955", "£52,441", "£56,046", "£62,580"],
        ["U3", "£52,835", "£54,327", "£58,119", "£64,683"],
      ]},

      { kind: "h2", text: "What each London premium is worth" },
      { kind: "table", caption: "Premium over rest of England, 2026/27", head: ["Band", "M1 premium", "M1 %", "U3 premium", "U3 %"], rows: [
        ["Fringe", "+£1,534", "4.5%", "+£1,492", "2.8%"],
        ["Outer London", "+£5,127", "15.0%", "+£5,284", "10.0%"],
        ["Inner London", "+£7,660", "22.5%", "+£11,848", "22.4%"],
      ]},
      { kind: "p", text: "This table reveals the most important structural fact about London teacher pay. The fringe and outer London premiums are essentially flat cash amounts, so their percentage value erodes as you progress. Inner London is the only band where the premium scales with salary, holding at roughly 22% from M1 all the way to U3." },
      { kind: "callout", tone: "info", title: "Inner London rewards experience disproportionately", text: "If you plan a long classroom career and expect to reach the upper pay range, inner London is worth far more than the M1 figures suggest. The gap between outer and inner London grows from £2,533 on M1 to £6,564 on U3." },

      { kind: "h2", text: "Which band does a school fall into?" },
      { kind: "p", text: "Pay band is determined by the location of the school, not where you live. A teacher living in Kent who works in Westminster is paid inner London rates; a teacher living in Camden who works in Bromley is paid outer London rates." },
      { kind: "ul", items: [
        "**Inner London** — Camden, Greenwich, Hackney, Hammersmith and Fulham, Islington, Kensington and Chelsea, Lambeth, Lewisham, Southwark, Tower Hamlets, Wandsworth, Westminster, City of London, plus parts of Haringey, Newham and Waltham Forest.",
        "**Outer London** — the remaining Greater London boroughs including Barnet, Bexley, Brent, Bromley, Croydon, Ealing, Enfield, Harrow, Hillingdon, Hounslow, Kingston, Merton, Redbridge, Richmond and Sutton.",
        "**Fringe** — specified districts in Berkshire, Buckinghamshire, Essex, Hertfordshire, Kent and West Sussex, plus all of Surrey.",
      ]},

      { kind: "h2", text: "Take-home pay across the London bands" },
      { kind: "table", caption: "Approximate monthly take-home pay by band, 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["M1", "£2,169", "£2,225", "£2,420", "£2,558"],
        ["M6", "£2,809", "£2,892", "£3,103", "£3,214"],
        ["U3", "£3,138", "£3,226", "£3,392", "£3,676"],
      ]},
      { kind: "p", text: "The gross gaps compress once tax, National Insurance and pension are applied. The £7,660 inner London M1 premium becomes about £389 a month, and the £11,848 U3 premium becomes about £538 a month. Model your own position on the [teacher pay calculator](/teacher-pay-calculator/)." },

      { kind: "h2", text: "Choosing between London bands" },
      { kind: "p", text: "The right band depends on career stage, housing situation and commuting tolerance. A few practical decision points." },
      { kind: "ol", items: [
        "**Early career, renting privately.** Outer London usually offers the best ratio of premium to housing cost. The £5,127 M1 premium is meaningful and outer borough rents are well below central ones.",
        "**Early career, living at home or with low housing costs.** Inner London maximises cash income with no offsetting cost.",
        "**Experienced, on the upper range.** Inner London becomes strongly favourable — the U3 premium over outer London alone is £6,564.",
        "**Wanting London-adjacent life.** The fringe offers a small uplift with substantially lower housing costs, though check whether an outer London school is reachable, since that is worth £3,593 more on M1.",
        "**Approaching retirement.** Higher pay in your final years increases each year's pension accrual, so a move into a higher band late in your career still adds to your pension.",
      ]},

      { kind: "h2", text: "London pay and your pension" },
      { kind: "p", text: "Career average benefits build at 1/57th of pensionable pay each year, so higher London pay permanently increases the pension banked for each year worked in the capital." },
      { kind: "table", caption: "Annual pension accrued in one year on U3, by band", head: ["Band", "U3 salary", "Pension built that year"], rows: [
        ["Rest of England", "£52,835", "£927"],
        ["Fringe", "£54,327", "£953"],
        ["Outer London", "£58,119", "£1,020"],
        ["Inner London", "£64,683", "£1,135"],
      ]},
      { kind: "p", text: "An inner London teacher builds £208 more annual pension per year worked than a rest-of-England colleague on the same pay point. Across twenty years that is a materially larger retirement income. See the [teachers' pension calculator](/teacher-pension-calculator/) and the [pension guide](/teacher-pension/)." },

      { kind: "h2", text: "Leadership pay in London" },
      { kind: "p", text: "The London bands apply to leadership posts too, and the cash differences are larger because the underlying salaries are higher." },
      { kind: "table", caption: "Leadership group spine endpoints by band, 2026/27", head: ["Band", "L1", "L43"], rows: [
        ["Rest of England", "£53,585", "£148,829"],
        ["Fringe", "£55,060", "£150,301"],
        ["Outer London", "£57,837", "£153,041"],
        ["Inner London", "£63,708", "£158,862"],
      ]},
      { kind: "p", text: "An inner London headteacher at the top of the spine can earn £10,033 more than a counterpart in the rest of England. See the [leadership pay scale guide](/leadership-pay-scale/)." },

      { kind: "h2", text: "Recruitment and retention in London schools" },
      { kind: "p", text: "London pays more precisely because it struggles to recruit and keep teachers. Understanding that context helps explain why additional payments are more common in the capital than anywhere else." },
      { kind: "ul", items: [
        "**Discretionary recruitment and retention payments** are permitted under the STPCD and used widely in London, particularly for shortage subjects.",
        "**Shortage subject premiums** concentrate in maths, physics, chemistry, computing and modern languages.",
        "**Key worker housing schemes** operate in a number of boroughs, though availability is limited relative to demand.",
        "**Faster promotion** is common because turnover creates vacancies, so London teachers often reach leadership posts earlier.",
      ]},
      { kind: "callout", tone: "warn", title: "Always ask whether extra payments are pensionable", text: "Recruitment and retention payments are frequently non-pensionable and time-limited. A £3,000 non-pensionable payment is worth less over a career than £3,000 built into your pay point, because it does not feed your 1/57th pension accrual. Get the answer in writing before comparing offers." },

      { kind: "h2", text: "Common mistakes comparing London pay" },
      { kind: "ul", items: [
        "**Comparing gross rather than net.** The £7,660 inner London M1 premium is worth about £389 a month after deductions.",
        "**Assuming your postcode sets your band.** The school's location determines the pay area, not your home address.",
        "**Treating Greater London as one band.** Inner and outer London differ by £2,533 on M1 and £6,564 on U3.",
        "**Forgetting split boroughs.** Haringey, Newham and Waltham Forest contain both inner and outer pay areas.",
        "**Judging inner London on M1 alone.** The premium roughly holds at 22% throughout, so it is far more valuable on the upper range than the starting figures suggest.",
        "**Ignoring the pension effect.** Higher London pay permanently increases each year's accrual — see the [teacher pension guide](/teacher-pension/).",
      ]},
    ],
    faq: [
      { question: "How much do teachers get paid in London?", answer: "It depends on the band. Inner London runs from £41,728 (M1) to £64,683 (U3), outer London from £39,195 to £58,119, and the fringe from £35,602 to £54,327 for 2026/27. All three are above the rest-of-England range of £34,068 to £52,835." },
      { question: "What is the difference between inner and outer London teacher pay?", answer: "£2,533 on M1 and £6,564 on U3. The gap is modest early in your career and widens considerably on the upper pay range, because the inner London upper range is much more generous." },
      { question: "Is London teacher pay based on where I live or work?", answer: "Where you work. The pay band is set by the location of the school, so a teacher living outside London who works in Westminster receives inner London pay, and a teacher living in a central borough who works in Bromley receives outer London pay." },
      { question: "Which London teacher pay band is best value?", answer: "For early-career teachers, outer London usually offers the best balance of premium and housing cost. For experienced teachers on the upper pay range, inner London is clearly strongest because the premium reaches £11,848 on U3." },
      { question: "How much is London weighting for teachers?", answer: "London weighting is not paid as a separate allowance. It is built into higher pay scales. In effect it is worth £1,534 (fringe), £5,127 (outer London) or £7,660 (inner London) on M1 for 2026/27." },
      { question: "Do London teachers pay more into their pension?", answer: "They pay the same percentage tiers, but higher salaries push London teachers into higher tiers sooner. Inner London upper-range teachers pay 10.2%, a tier that rest-of-England classroom teachers never reach." },
      { question: "What is the highest teacher salary in London?", answer: "For classroom teachers it is inner London U3 at £64,683. Lead practitioners in inner London can reach £92,043, and the inner London leadership spine tops out at £158,862 for the largest headships." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 10. WALES
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-pay-scale-wales",
    hub: "pay-scales",
    title: "Teacher Pay Scale Wales",
    metaTitle: "Teacher Pay Scale Wales 2026/27 — Full Salary Tables",
    metaDescription:
      "Welsh teacher pay scales for 2026/27. Full main, upper and unqualified ranges, how the IWPRB sets pay in Wales, and how Welsh salaries compare to England.",
    primaryKeyword: "teacher pay scale wales",
    secondaryKeywords: [
      "wales teacher pay scale", "teacher pay wales", "welsh teacher pay scale",
      "teacher salary wales", "teachers pay wales", "iwprb pay scale",
    ],
    calculator: "pay-scale",
    calculatorPreset: { region: "wales" },
    intro:
      "Teacher pay in Wales is devolved and set on the recommendation of the Independent Welsh Pay Review Body. For 2026/27 the Welsh scales mirror the England figures, running from £34,068 on M1 to £52,835 on U3.",
    keyTakeaways: [
      "Teacher pay in Wales is devolved and set by the Welsh Government on IWPRB advice.",
      "For 2026/27 Welsh pay points match the rest-of-England STPCD figures exactly.",
      "Wales has no London weighting bands — one national scale applies throughout.",
      "Welsh teachers are in the same Teachers' Pension Scheme as English colleagues.",
      "Wales uses rUK income tax rates, so take-home pay matches England on the same salary.",
    ],
    blocks: [
      { kind: "h2", text: "Welsh teacher pay scales 2026/27" },
      { kind: "p", text: "One national scale applies across Wales. There is no equivalent of London weighting, so a teacher in Cardiff is on the same point value as a teacher in Anglesey." },
      { kind: "table", caption: "Wales Main and Upper Pay Range, 2026/27", head: ["Point", "Salary", "Pension tier"], rows: [
        ["M1", "£34,068", "7.4%"],
        ["M2", "£36,042", "8.6%"],
        ["M3", "£38,400", "8.6%"],
        ["M4", "£40,940", "8.6%"],
        ["M5", "£43,529", "8.6%"],
        ["M6", "£46,939", "9.6%"],
        ["U1", "£49,134", "9.6%"],
        ["U2", "£50,955", "9.6%"],
        ["U3", "£52,835", "9.6%"],
      ]},
      { kind: "table", caption: "Wales Unqualified Teacher Range, 2026/27", head: ["Point", "Salary"], rows: [
        ["UQ1", "£23,731"],
        ["UQ2", "£26,075"],
        ["UQ3", "£28,757"],
        ["UQ4", "£31,124"],
        ["UQ5", "£33,810"],
        ["UQ6", "£36,493"],
      ]},

      { kind: "h2", text: "How teacher pay is set in Wales" },
      { kind: "p", text: "Responsibility for teacher pay and conditions transferred to the Welsh Government in September 2018. Since then the Independent Welsh Pay Review Body has advised Welsh Ministers, who publish the School Teachers' Pay and Conditions (Wales) Document." },
      { kind: "p", text: "In practice the IWPRB has recommended awards matching the STRB recommendations for England each year, so the headline figures have stayed aligned. That alignment is a policy choice rather than a legal requirement, and the two could diverge in future." },
      { kind: "callout", tone: "info", title: "Same numbers, different document", text: "Welsh teachers are covered by the School Teachers' Pay and Conditions (Wales) Document, not the STPCD. The pay figures currently match, but conditions of service provisions can differ, so always check the Welsh document for anything beyond salary." },

      { kind: "h2", text: "Leadership and allowances in Wales" },
      { kind: "table", caption: "Wales higher ranges and allowances, 2026/27", head: ["Item", "Range"], rows: [
        ["Lead practitioner", "£53,847 – £81,860"],
        ["Leadership (L1–L43)", "£53,585 – £148,829"],
        ["TLR 1", "£10,530 – £17,819"],
        ["TLR 2", "£3,650 – £8,912"],
        ["TLR 3", "£727 – £3,600"],
        ["SEN allowance", "£2,885 – £5,689"],
      ]},

      { kind: "h2", text: "Welsh-medium teaching and additional payments" },
      { kind: "p", text: "Wales has a national target to grow Welsh-medium education, and demand for teachers who can teach through the medium of Welsh consistently outstrips supply, particularly in secondary shortage subjects." },
      { kind: "p", text: "There is no statutory Welsh-language allowance in the pay document. In practice, local authorities and consortia run incentive schemes, and schools use their discretion over starting points on the main range to attract Welsh-speaking candidates. If you can teach through Welsh, that is genuine negotiating leverage on your starting pay point." },

      { kind: "h2", text: "Take-home pay for Welsh teachers" },
      { kind: "p", text: "Wales has the power to vary income tax rates but has so far kept them aligned with England and Northern Ireland. That means take-home pay on a given salary is identical to England." },
      { kind: "table", caption: "Approximate take-home pay in Wales, 2026/27", head: ["Point", "Gross", "Approx. monthly take-home"], rows: [
        ["M1", "£34,068", "£2,169"],
        ["M3", "£38,400", "£2,377"],
        ["M6", "£46,939", "£2,809"],
        ["U3", "£52,835", "£3,138"],
      ]},
      { kind: "p", text: "Run your own figures, including student loan and part-time hours, on the [teacher pay calculator](/teacher-pay-calculator/)." },

      { kind: "h2", text: "How Wales compares to the rest of the UK" },
      { kind: "table", caption: "Starting and top classroom pay across the four nations, 2026/27", head: ["Nation", "Starting point", "Top classroom point"], rows: [
        ["Wales", "£34,068", "£52,835 (U3)"],
        ["England (rest of)", "£34,068", "£52,835 (U3)"],
        ["Scotland", "£34,539", "£52,539 (Chartered Teacher)"],
        ["Northern Ireland", "£32,188", "£50,085 (U3)"],
      ]},
      { kind: "p", text: "Wales matches England exactly and sits above Northern Ireland at every point. Scotland starts £471 higher but has a different structure with no threshold application. See the [Scotland page](/teacher-pay-scale-scotland/) and [Northern Ireland page](/ni-teacher-pay-scale/)." },
      { kind: "p", text: "Because Wales has no London weighting, the comparison shifts for teachers near the border. A teacher in Wrexham or Newport earns £34,068 on M1, while a school across the border in a fringe area would pay £35,602. Cross-border moves are worth checking on the [fringe pay scale page](/london-fringe-teacher-pay-scale/)." },

      { kind: "h2", text: "Pensions for Welsh teachers" },
      { kind: "p", text: "Welsh teachers are members of the same Teachers' Pension Scheme as their English colleagues, administered on the same terms. Contribution tiers, the 1/57th accrual rate and the 28.8% employer contribution are all identical." },
      { kind: "p", text: "That also means service moves seamlessly between England and Wales. Teaching in Cardiff then Bristol builds a single continuous pension record. See the [teacher pension guide](/teacher-pension/) or model your benefits with the [pension calculator](/teacher-pension-calculator/)." },

      { kind: "h2", text: "Career progression in Wales" },
      { kind: "p", text: "The Welsh structure mirrors England: a six-point main range, a threshold application, and a three-point upper range, with progression normally annual and subject to satisfactory appraisal." },
      { kind: "table", caption: "Welsh teacher career progression, 2026/27", head: ["Stage", "Point", "Salary", "Typical timing"], rows: [
        ["Newly qualified", "M1", "£34,068", "Year 1"],
        ["Establishing", "M3", "£38,400", "Year 3"],
        ["Experienced", "M6", "£46,939", "Year 6"],
        ["Post-threshold", "U1", "£49,134", "Year 7 onward"],
        ["Top of scale", "U3", "£52,835", "Around year 11"],
      ]},
      { kind: "p", text: "Wales operates its own professional standards and induction arrangements through the Education Workforce Council, which registers teachers in Wales. Registration is mandatory and separate from any English arrangement, so a teacher moving from England to Wales must register with the EWC before taking up post." },
      { kind: "p", text: "Detail on how each stage works is in the [Main Pay Range guide](/main-pay-range/) and the [Upper Pay Range guide](/upper-pay-range/)." },

      { kind: "h2", text: "Teaching near the England–Wales border" },
      { kind: "p", text: "For teachers living near the border the pay comparison is unusually simple, because Wales and the rest of England currently pay identical figures. A teacher in Wrexham and a teacher in Chester on the same pay point earn the same salary." },
      { kind: "p", text: "That makes the decision turn on non-pay factors: which employing authority, which set of professional standards and registration requirements, Welsh-language expectations, and school-level factors. The one financial caveat is that pay is separately determined in each nation, so today's alignment is not guaranteed to persist." },
      { kind: "callout", tone: "info", title: "Pension service crosses the border cleanly", text: "Because Wales and England share the Teachers' Pension Scheme, moving across the border mid-career has no effect on your pension record. That is not true of a move to Scotland or Northern Ireland, both of which run separate schemes requiring a transfer request." },

      { kind: "h2", text: "Common questions about Welsh teacher pay" },
      { kind: "ul", items: [
        "**Is there a Cardiff weighting?** No. Wales has a single national scale with no regional variation at all.",
        "**Do Welsh teachers pay different income tax?** No. Wales has the power to vary rates but has kept them aligned with England and Northern Ireland.",
        "**Are the pay figures guaranteed to match England?** No. Alignment is a policy choice by the Welsh Government on IWPRB advice, and the two could diverge in future.",
        "**Do academies exist in Wales?** No. Wales did not adopt the academies programme, so almost all schools are maintained and must follow the Welsh pay document.",
        "**Is Welsh-language ability paid extra?** Not statutorily, but it is genuine leverage when negotiating your starting point on the main range.",
      ]},
    ],
    faq: [
      { question: "What is the teacher pay scale in Wales for 2026/27?", answer: "The main range runs M1 £34,068 to M6 £46,939 and the upper range U1 £49,134 to U3 £52,835. The unqualified range is £23,731 to £36,493. One national scale applies across the whole of Wales." },
      { question: "Is teacher pay in Wales the same as England?", answer: "For 2026/27 the figures are identical to the rest of England. Pay is devolved and set separately by the Welsh Government on IWPRB advice, so alignment is a policy choice rather than a requirement, and the two could diverge in future." },
      { question: "Does Wales have London weighting for teachers?", answer: "No. Wales has a single national pay scale with no regional weighting. A teacher in Cardiff is paid the same point value as a teacher in rural Powys." },
      { question: "Who sets teacher pay in Wales?", answer: "The Welsh Government, advised by the Independent Welsh Pay Review Body. Responsibility transferred from Westminster in September 2018. Pay is published in the School Teachers' Pay and Conditions (Wales) Document." },
      { question: "Do Welsh teachers get extra for teaching in Welsh?", answer: "There is no statutory Welsh-language allowance. Local authorities and consortia run incentive schemes, and schools often use their discretion over the starting point on the main range to attract Welsh-speaking candidates, so it is worth negotiating." },
      { question: "Are Welsh teachers in the same pension scheme?", answer: "Yes. Welsh teachers are members of the Teachers' Pension Scheme on identical terms to England, with the same contribution tiers, 1/57th accrual rate and 28.8% employer contribution. Service transfers seamlessly between England and Wales." },
      { question: "How does Welsh teacher pay compare to Scotland?", answer: "Scotland starts slightly higher at £34,539 against £34,068 in Wales, but Scotland has no upper pay range. The top Welsh classroom point (U3, £52,835) is marginally above the Scottish Chartered Teacher rate of £52,539." },
    ],
    sources: SOURCES_DEVOLVED,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 11. SCOTLAND
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-pay-scale-scotland",
    hub: "pay-scales",
    title: "Teacher Pay Scale Scotland",
    metaTitle: "Teacher Pay Scale Scotland 2026/27 — SNCT Salary Tables",
    metaDescription:
      "Scottish teacher pay scales for 2026/27. The SNCT main grade, Chartered Teacher route, how Scottish income tax affects take-home pay, and how Scotland compares to England.",
    primaryKeyword: "teacher pay scale scotland",
    secondaryKeywords: [
      "scottish teacher pay scale", "teacher pay scotland", "snct pay scale",
      "teacher salary scotland", "scotland teacher pay", "eis teacher pay scale",
      "chartered teacher scotland",
    ],
    calculator: "pay-scale",
    calculatorPreset: { region: "scotland" },
    intro:
      "Scotland runs a completely separate teacher pay system through the SNCT. There is no threshold application and no upper pay range — progression to the top of the main grade is automatic. Here are the 2026/27 figures and how Scottish income tax changes the picture.",
    keyTakeaways: [
      "Scotland uses the SNCT scale, not the STPCD, with a starting point of £34,539.",
      "There is no upper pay range and no threshold application — progression is automatic.",
      "The main grade tops out at £48,516, with a Chartered Teacher route at £52,539.",
      "Scottish income tax has six bands, so take-home pay differs from England on the same salary.",
      "Scottish teachers are in the Scottish Teachers' Pension Scheme, which mirrors the English scheme closely.",
    ],
    blocks: [
      { kind: "h2", text: "Scottish teacher pay scale 2026/27" },
      { kind: "table", caption: "SNCT Main Grade scale, 2026/27", head: ["Point", "Salary", "Pension tier"], rows: [
        ["M1 (probationer year onward)", "£34,539", "8.6%"],
        ["M2", "£36,426", "8.6%"],
        ["M3", "£38,361", "8.6%"],
        ["M4", "£42,336", "8.6%"],
        ["M5", "£45,468", "8.6%"],
        ["M6 (top of main grade)", "£48,516", "9.6%"],
      ]},
      { kind: "table", caption: "Chartered Teacher, 2026/27", head: ["Grade", "Salary"], rows: [
        ["Chartered Teacher", "£52,539"],
      ]},
      { kind: "p", text: "One national scale applies throughout Scotland. There is no regional weighting equivalent to the London bands, though some island and remote authorities pay a distant islands allowance on top." },

      { kind: "h2", text: "How Scottish progression differs from England" },
      { kind: "p", text: "This is the single biggest structural difference between the two systems, and it works strongly in Scotland's favour for classroom teachers." },
      { kind: "ul", items: [
        "**Progression is automatic.** Scottish teachers move up one point each year on the main grade without an appraisal-linked pay decision.",
        "**No threshold application.** There is no equivalent of crossing to the upper pay range. Every teacher reaches the top of the main grade with service.",
        "**Probation is a full year in post.** The Teacher Induction Scheme guarantees a one-year training post to eligible Scottish graduates.",
        "**Chartered Teacher is a separate voluntary route** for experienced teachers who want to stay in the classroom rather than move into management.",
      ]},
      { kind: "callout", tone: "info", title: "Automatic progression is worth real money", text: "An English teacher can be held at a pay point after an unsatisfactory appraisal, and crossing to the upper range requires a successful application that some teachers never make. In Scotland every teacher reaches £48,516 with six years of service. Over a career the certainty is significant." },

      { kind: "h2", text: "Scottish income tax and teacher take-home pay" },
      { kind: "p", text: "Scotland sets its own income tax rates on earned income. There are six bands rather than three, and the rates diverge from the rest of the UK in both directions depending on your salary." },
      { kind: "table", caption: "Scottish income tax bands 2026/27 (on income above the personal allowance)", head: ["Band", "Rate"], rows: [
        ["Starter rate", "19%"],
        ["Basic rate", "20%"],
        ["Intermediate rate", "21%"],
        ["Higher rate", "42%"],
        ["Advanced rate", "45%"],
        ["Top rate", "48%"],
      ]},
      { kind: "p", text: "For teachers on the main grade the practical difference is small. A Scottish teacher on M1 pays about £13 a year more income tax than someone on the same salary in England. By the top of the main grade the gap widens to around £177 a year, and a Chartered Teacher pays roughly £977 more." },
      { kind: "table", caption: "Approximate Scottish take-home pay, 2026/27", head: ["Point", "Gross", "Approx. monthly take-home", "Extra tax vs rUK"], rows: [
        ["M1", "£34,539", "£2,167", "+£13/yr"],
        ["M3", "£38,361", "£2,371", "+£47/yr"],
        ["M6", "£48,516", "£2,879", "+£177/yr"],
        ["Chartered Teacher", "£52,539", "£3,039", "+£977/yr"],
      ]},
      { kind: "callout", tone: "warn", title: "The higher rate starts earlier in Scotland", text: "The Scottish higher rate of 42% begins at a lower income than the 40% rUK higher rate. That is why the gap widens sharply for Chartered Teachers and promoted staff, even though lower-paid Scottish teachers pay marginally less on the first slice of income." },

      { kind: "h2", text: "Scotland compared to England point by point" },
      { kind: "table", caption: "Scottish main grade vs rest of England, 2026/27", head: ["Point", "Scotland", "Rest of England", "Difference"], rows: [
        ["M1", "£34,539", "£34,068", "+£471"],
        ["M2", "£36,426", "£36,042", "+£384"],
        ["M3", "£38,361", "£38,400", "−£39"],
        ["M4", "£42,336", "£40,940", "+£1,396"],
        ["M5", "£45,468", "£43,529", "+£1,939"],
        ["M6", "£48,516", "£46,939", "+£1,577"],
      ]},
      { kind: "p", text: "Scotland pays more at almost every point on the main scale, and notably more at M4 and M5. The comparison at the top of the classroom scale is closer: Scotland's Chartered Teacher rate of £52,539 sits just below the rest-of-England U3 figure of £52,835, and well below inner London U3 at £64,683." },
      { kind: "p", text: "The fair overall summary is that Scotland pays classroom teachers better in the early and middle career and offers certainty of progression, while England offers a higher ceiling for experienced teachers, especially in London. Compare with the [England pay scales](/teacher-pay-scale/) and [inner London](/inner-london-teacher-pay-scale/)." },

      { kind: "h2", text: "The Chartered Teacher route" },
      { kind: "p", text: "The Chartered Teacher programme exists so experienced teachers can be rewarded for classroom expertise without moving into management. It is a voluntary route requiring further professional learning accredited by the GTCS." },
      { kind: "p", text: "At £52,539 it pays £4,023 above the top of the main grade. Unlike the English upper pay range it is a single rate rather than a three-point scale, and it requires completion of an accredited programme rather than an evidence-based application to your own school." },

      { kind: "h2", text: "Pensions for Scottish teachers" },
      { kind: "p", text: "Scottish teachers belong to the Scottish Teachers' Pension Scheme, which is separate in administration but closely mirrors the English and Welsh scheme: career average benefits, a 1/57th accrual rate and tiered member contributions." },
      { kind: "p", text: "Service transfers between the Scottish and English schemes are possible but are not automatic and are not always advantageous. If you are moving between Scotland and England mid-career, request a transfer value quotation and take advice before deciding. See the [teacher pension guide](/teacher-pension/)." },

      { kind: "h2", text: "Unions and pay negotiation in Scotland" },
      { kind: "p", text: "Pay is negotiated through the Scottish Negotiating Committee for Teachers, a tripartite body of the Scottish Government, COSLA representing local authorities, and the teaching unions. The EIS is the largest teaching union in Scotland and holds the majority of the teachers' side seats." },
      { kind: "p", text: "This tripartite structure differs from England, where the STRB makes recommendations to the Secretary of State and unions have no seat at the decision table. In Scotland the unions are formal negotiating partners. Compare with how the [NEU](/neu-teacher-pay-scales/) and [NASUWT](/nasuwt-teacher-pay-scales/) engage with the English process." },

      { kind: "h2", text: "Moving between Scotland and England" },
      { kind: "p", text: "A move in either direction involves more than a salary comparison, because the two systems differ in registration, progression and pensions." },
      { kind: "ol", items: [
        "**Registration.** Teaching in Scotland requires GTCS registration; teaching in England does not use an equivalent register. Allow time for this before a start date.",
        "**Pay point placement.** Scottish service is normally recognised on the English main range, but the receiving school decides the point, so negotiate before accepting.",
        "**Progression model changes.** Moving to England means progression becomes appraisal-linked rather than automatic, and reaching the upper range requires a [threshold application](/upper-pay-range/).",
        "**Pension transfer.** Service does not combine automatically between the Scottish and English schemes. Request a transfer value quotation and take advice before deciding.",
        "**Income tax changes** on the day you become resident in the other nation, not on the day you change job.",
      ]},
      { kind: "callout", tone: "tip", title: "Do not assume a transfer is worth it", text: "Transferring pension service between the Scottish and English schemes is sometimes advantageous and sometimes not, depending on the transfer value offered and your years of service. Get the quotation in writing and compare it against leaving the benefits preserved in the original scheme." },
    ],
    faq: [
      { question: "What is the teacher pay scale in Scotland for 2026/27?", answer: "The SNCT main grade runs from £34,539 at M1 to £48,516 at M6, with automatic annual progression. The Chartered Teacher rate is £52,539. One national scale applies across Scotland." },
      { question: "Do Scottish teachers earn more than English teachers?", answer: "On the main grade, generally yes. Scotland pays more at almost every point, notably £1,939 more at M5. But Scotland has no upper pay range, so the top of the English classroom scale (U3 at £52,835, or £64,683 in inner London) exceeds the Scottish Chartered Teacher rate of £52,539." },
      { question: "Is there an upper pay range in Scotland?", answer: "No. Scotland has no threshold application and no upper pay range. Teachers progress automatically to the top of the main grade, then may choose the voluntary Chartered Teacher route, which requires accredited professional learning." },
      { question: "Is teacher pay progression automatic in Scotland?", answer: "Yes. Scottish teachers move up one point on the main grade each year with service, without the appraisal-linked pay decision used in England. That certainty is one of the main structural advantages of the Scottish system." },
      { question: "How does Scottish income tax affect teacher pay?", answer: "Scotland has six income tax bands from 19% to 48%, and the higher rate of 42% starts at a lower income than the rUK 40% rate. A Scottish teacher on M1 pays about £13 a year more than an English colleague on the same salary; a Chartered Teacher pays roughly £977 more." },
      { question: "What is a Chartered Teacher in Scotland?", answer: "A voluntary route allowing experienced teachers to be rewarded for classroom expertise without moving into management. It requires accredited professional learning and pays £52,539 for 2026/27, which is £4,023 above the top of the main grade." },
      { question: "Are Scottish teachers in the same pension scheme as England?", answer: "No, they are in the Scottish Teachers' Pension Scheme. It is administered separately but closely mirrors the English scheme with career average benefits, a 1/57th accrual rate and tiered contributions. Transfers between the schemes are possible but need advice." },
      { question: "Who negotiates teacher pay in Scotland?", answer: "The Scottish Negotiating Committee for Teachers, a tripartite body of the Scottish Government, COSLA and the teaching unions, with the EIS holding most teachers' side seats. Unlike England, unions are formal negotiating partners rather than consultees." },
    ],
    sources: SOURCES_DEVOLVED,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 12. NORTHERN IRELAND
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "ni-teacher-pay-scale",
    hub: "pay-scales",
    title: "Northern Ireland Teacher Pay Scale",
    metaTitle: "NI Teacher Pay Scale 2026/27 — Northern Ireland Salaries",
    metaDescription:
      "Northern Ireland teacher pay scales for 2026/27. Full main, upper and unqualified ranges, how NI pay is negotiated, and how it compares to England, Wales and Scotland.",
    primaryKeyword: "teacher pay scale ni",
    secondaryKeywords: [
      "ni teacher pay scale", "northern ireland teacher pay",
      "teacher salary northern ireland", "teachers pay ni", "ni teachers pay scale",
    ],
    calculator: "pay-scale",
    calculatorPreset: { region: "northern-ireland" },
    intro:
      "Northern Ireland runs its own teacher pay scale, negotiated through the Teachers' Negotiating Committee. It is the lowest of the four UK nations, starting at £32,188 on M1 — £1,880 below England and Wales.",
    keyTakeaways: [
      "NI M1 pays £32,188, the lowest starting salary of the four UK nations.",
      "The main range tops out at £44,342 and the upper range at £50,085.",
      "NI teachers are typically £1,880 to £2,750 behind England and Wales at each point.",
      "There is no regional weighting — one scale covers all of Northern Ireland.",
      "NI uses rUK income tax rates and has its own separate teachers' pension scheme.",
    ],
    blocks: [
      { kind: "h2", text: "Northern Ireland teacher pay scale 2026/27" },
      { kind: "table", caption: "NI Main and Upper Pay Range, 2026/27", head: ["Point", "Salary", "Pension tier"], rows: [
        ["M1", "£32,188", "7.4%"],
        ["M2", "£34,037", "7.4%"],
        ["M3", "£36,271", "8.6%"],
        ["M4", "£38,669", "8.6%"],
        ["M5", "£41,109", "8.6%"],
        ["M6", "£44,342", "8.6%"],
        ["U1", "£46,589", "9.6%"],
        ["U2", "£48,303", "9.6%"],
        ["U3", "£50,085", "9.6%"],
      ]},
      { kind: "table", caption: "NI Unqualified Teacher Range, 2026/27", head: ["Point", "Salary"], rows: [
        ["UQ1", "£22,478"],
        ["UQ2", "£24,698"],
        ["UQ3", "£27,239"],
        ["UQ4", "£29,480"],
        ["UQ5", "£32,023"],
        ["UQ6", "£34,565"],
      ]},

      { kind: "h2", text: "How Northern Ireland compares to the rest of the UK" },
      { kind: "table", caption: "NI vs England and Wales, 2026/27", head: ["Point", "Northern Ireland", "England / Wales", "Gap"], rows: [
        ["M1", "£32,188", "£34,068", "−£1,880"],
        ["M3", "£36,271", "£38,400", "−£2,129"],
        ["M6", "£44,342", "£46,939", "−£2,597"],
        ["U1", "£46,589", "£49,134", "−£2,545"],
        ["U3", "£50,085", "£52,835", "−£2,750"],
      ]},
      { kind: "p", text: "The gap widens as you progress, from £1,880 on M1 to £2,750 on U3. Against inner London the difference is far larger: an NI teacher on U3 earns £14,598 less than an inner London colleague on the same point. See the [inner London pay scale](/inner-london-teacher-pay-scale/)." },
      { kind: "callout", tone: "info", title: "Cost of living offsets some of the gap", text: "Housing costs in Northern Ireland are consistently among the lowest in the UK. In real terms the gap against the rest of England is considerably narrower than the headline salary difference suggests, though it remains a genuine gap against Wales, which has similar housing costs and pays the England rates." },

      { kind: "h2", text: "How NI teacher pay is negotiated" },
      { kind: "p", text: "Pay and conditions in Northern Ireland are agreed through the Teachers' Negotiating Committee, which brings together the employing authorities, the Department of Education and the recognised teaching unions." },
      { kind: "p", text: "The process has historically been slower than in England, and periods without a functioning Executive at Stormont have delayed settlements more than once. Teachers in Northern Ireland have on several occasions received awards months or years in arrears, with substantial back-pay settlements when agreement was finally reached." },

      { kind: "h2", text: "Progression on the NI scale" },
      { kind: "p", text: "Structurally the NI scale mirrors England: a six-point main range, a threshold application, and a three-point upper range. Progression up the main range is normally annual subject to satisfactory performance." },
      { kind: "p", text: "Northern Ireland also retains a distinct school system with controlled, maintained, integrated and voluntary grammar sectors. Pay scales apply across all of them, though the employing authority differs. Read more about how progression works in the [Main Pay Range guide](/main-pay-range/) and the [Upper Pay Range guide](/upper-pay-range/)." },

      { kind: "h2", text: "Take-home pay in Northern Ireland" },
      { kind: "p", text: "Northern Ireland uses the same income tax rates and thresholds as England and Wales, so take-home pay on a given salary is identical. The lower gross figures are what drive the difference." },
      { kind: "table", caption: "Approximate NI take-home pay, 2026/27", head: ["Point", "Gross", "Pension tier", "Approx. monthly take-home"], rows: [
        ["M1", "£32,188", "7.4%", "£2,066"],
        ["M6", "£44,342", "8.6%", "£2,700"],
        ["U3", "£50,085", "9.6%", "£2,978"],
      ]},
      { kind: "p", text: "One small consolation: because NI salaries are lower, teachers stay in lower pension contribution tiers for longer. An NI teacher on M6 pays 8.6% while an England and Wales colleague on M6 pays 9.6%. Work out your figures on the [teacher pay calculator](/teacher-pay-calculator/)." },

      { kind: "h2", text: "Pensions for Northern Ireland teachers" },
      { kind: "p", text: "Northern Ireland operates its own Teachers' Pension Scheme, administered by the Department of Education, separate from the England and Wales scheme though built on the same career average model with a 1/57th accrual rate." },
      { kind: "p", text: "If you move between Northern Ireland and Great Britain, your service does not automatically combine. You would need to request a transfer value and consider whether transferring is beneficial. Take advice before deciding — see the [teacher pension guide](/teacher-pension/) for how the underlying benefits work." },

      { kind: "h2", text: "Working in NI versus moving to Great Britain" },
      { kind: "p", text: "The salary gap is real but it is not the whole calculation. Points worth weighing if you are considering a move." },
      { kind: "ul", items: [
        "**Housing costs** in Northern Ireland are substantially lower than in most of England, and dramatically lower than London.",
        "**The pay gap compounds through your pension**, because career average benefits are a proportion of actual pay each year.",
        "**Pension service does not transfer automatically** between the NI and GB schemes.",
        "**Wales is the cleanest comparison** — similar housing costs to much of NI but England-level pay.",
        "**Qualifications are recognised** across the UK, so a move does not require requalification.",
      ]},

      { kind: "h2", text: "Progression and promotion in Northern Ireland" },
      { kind: "p", text: "The NI structure mirrors England closely: a six-point main range, a threshold application, and a three-point upper range, plus separate leadership arrangements." },
      { kind: "table", caption: "NI teacher career progression, 2026/27", head: ["Stage", "Point", "Salary", "Gap vs England"], rows: [
        ["Newly qualified", "M1", "£32,188", "−£1,880"],
        ["Establishing", "M3", "£36,271", "−£2,129"],
        ["Top of main range", "M6", "£44,342", "−£2,597"],
        ["Post-threshold", "U1", "£46,589", "−£2,545"],
        ["Top of upper range", "U3", "£50,085", "−£2,750"],
      ]},
      { kind: "p", text: "Northern Ireland retains a selective system alongside controlled, maintained, integrated and Irish-medium sectors. The statutory pay scale applies across all of them, but the employing authority differs, which affects who handles your contract and appraisal." },
      { kind: "p", text: "Teachers in Northern Ireland must register with the General Teaching Council for Northern Ireland. Registration is separate from the English and Welsh arrangements, and from the GTCS in Scotland." },

      { kind: "h2", text: "The lower pension tier advantage" },
      { kind: "p", text: "There is one genuine, if modest, upside to the lower NI pay scale. Because pension contribution tiers are set by salary, NI teachers sit in lower tiers than colleagues elsewhere on the equivalent pay point." },
      { kind: "table", caption: "Pension tier comparison on equivalent points, 2026/27", head: ["Point", "NI salary", "NI tier", "England salary", "England tier"], rows: [
        ["M2", "£34,037", "7.4%", "£36,042", "8.6%"],
        ["M6", "£44,342", "8.6%", "£46,939", "9.6%"],
        ["U3", "£50,085", "9.6%", "£52,835", "9.6%"],
      ]},
      { kind: "p", text: "An NI teacher on M6 pays 8.6% where an England colleague on M6 pays 9.6%. That narrows the take-home gap slightly — though it also means a smaller pension is being built, since accrual is a proportion of actual pay. Read more on [teacher pension contributions](/teacher-pension-contributions/)." },
      { kind: "callout", tone: "info", title: "Lower contributions are not a straightforward win", text: "Paying less into the pension because you earn less is not the same as being better off. Your 1/57th accrual each year is based on actual pensionable pay, so the lower NI salary produces a permanently smaller pension as well as a smaller contribution." },
    ],
    faq: [
      { question: "What is the teacher pay scale in Northern Ireland for 2026/27?", answer: "The main range runs M1 £32,188 to M6 £44,342, and the upper range U1 £46,589 to U3 £50,085. The unqualified range is £22,478 to £34,565. One scale applies across all of Northern Ireland." },
      { question: "Why is teacher pay lower in Northern Ireland?", answer: "Pay is devolved and negotiated separately through the Teachers' Negotiating Committee. Settlements have historically been lower and slower than in England, partly because of budget constraints and periods without a functioning Executive at Stormont." },
      { question: "How much less do NI teachers earn than English teachers?", answer: "£1,880 less on M1, widening to £2,750 less on U3 compared with the rest of England. Against inner London the gap on U3 is £14,598." },
      { question: "Does Northern Ireland have London weighting equivalents?", answer: "No. One national scale applies across the whole of Northern Ireland with no regional variation." },
      { question: "Are NI teachers in the same pension scheme as England?", answer: "No. Northern Ireland has its own Teachers' Pension Scheme administered by the Department of Education. It uses the same career average model with a 1/57th accrual rate, but service does not automatically combine with the England and Wales scheme if you move." },
      { question: "Do NI teachers pay the same income tax?", answer: "Yes. Northern Ireland uses the same income tax rates and thresholds as England and Wales, so take-home pay on a given salary is identical. Only the gross salary differs." },
      { question: "Is it worth moving from NI to England to teach?", answer: "It depends heavily on housing. The salary gap is £1,880 to £2,750 a year against the rest of England, but housing costs in Northern Ireland are among the lowest in the UK. Wales is the cleanest comparison, offering England-level pay with housing costs closer to NI." },
      { question: "Do I need to register with a teaching council in Northern Ireland?", answer: "Yes. Teachers in Northern Ireland must register with the General Teaching Council for Northern Ireland. That registration is separate from arrangements in England and Wales and from the GTCS in Scotland, so a cross-border move requires registering with the relevant body first." },
      { question: "Is there an upper pay range in Northern Ireland?", answer: "Yes. Northern Ireland mirrors the English structure with a six-point main range, a threshold application and a three-point upper range running from £46,589 to £50,085 for 2026/27." },
    ],
    sources: SOURCES_DEVOLVED,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 13. NEU
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "neu-teacher-pay-scales",
    hub: "pay-scales",
    title: "NEU Teacher Pay Scales",
    metaTitle: "NEU Teacher Pay Scales 2026/27 — Union Tables Explained",
    metaDescription:
      "The NEU pay scales for 2026/27 explained. What the union publishes, how its tables relate to the statutory STPCD figures, and what to do if your school pays less.",
    primaryKeyword: "neu teacher pay scales",
    secondaryKeywords: [
      "neu pay scales", "neu teacher pay", "national education union pay scale",
      "neu pay scale 2026", "neu salary scales",
    ],
    calculator: "pay-scale",
    intro:
      "The National Education Union publishes its own pay scale tables each year. They are a restatement of the statutory STPCD figures rather than a separate set of rates — here is what that means in practice and how to use them.",
    keyTakeaways: [
      "NEU pay tables restate the statutory STPCD figures; they are not separate union rates.",
      "The 2026/27 figures the NEU publishes match the STPCD exactly for maintained schools.",
      "The NEU also publishes academy guidance, because academies can set their own scales.",
      "Union tables are useful evidence if your school appears to be underpaying.",
      "The NEU is a consultee to the STRB process, not a negotiating partner as in Scotland.",
    ],
    blocks: [
      { kind: "h2", text: "What the NEU pay scales actually are" },
      { kind: "p", text: "There is a common misconception that the NEU sets or negotiates its own pay rates. It does not. Teacher pay in England is set by the Secretary of State on the recommendation of the School Teachers' Review Body, and published in the STPCD." },
      { kind: "p", text: "What the NEU publishes each September is a member-friendly restatement of those statutory figures, usually laid out more clearly than the STPCD itself and with commentary on what the award means in real terms. The numbers are identical to the [statutory pay scales](/teacher-pay-scale/)." },

      { kind: "h2", text: "The 2026/27 figures as published" },
      { kind: "table", caption: "Main Pay Range 2026/27 (statutory figures as restated by unions)", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["M1", "£34,068", "£35,602", "£39,195", "£41,728"],
        ["M2", "£36,042", "£37,646", "£41,246", "£43,712"],
        ["M3", "£38,400", "£39,979", "£43,403", "£45,786"],
        ["M4", "£40,940", "£42,513", "£45,672", "£47,961"],
        ["M5", "£43,529", "£45,069", "£48,438", "£50,665"],
        ["M6", "£46,939", "£48,478", "£52,241", "£54,131"],
      ]},
      { kind: "table", caption: "Upper Pay Range 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["U1", "£49,134", "£50,625", "£54,047", "£59,649"],
        ["U2", "£50,955", "£52,441", "£56,046", "£62,580"],
        ["U3", "£52,835", "£54,327", "£58,119", "£64,683"],
      ]},

      { kind: "h2", text: "Why academy members need the union tables most" },
      { kind: "p", text: "For teachers in maintained schools the statutory figures are legally binding, so the union tables are simply a convenient reference. For academy and free school staff they matter far more." },
      { kind: "p", text: "Academies are not bound by the STPCD. They set their own pay policies and can pay above, at, or below the statutory points. Most track the STPCD closely for recruitment reasons, but not all pass on the full annual award. The union tables give members a clear benchmark to compare their trust's pay policy against." },
      { kind: "callout", tone: "tip", title: "If your academy pay looks wrong", text: "Ask for a copy of the trust's pay policy — you are entitled to see it. Compare your point against the statutory table above. If there is a gap, raise it with your union representative before going to the headteacher, so you go in with the correct comparison and know what the policy actually permits." },

      { kind: "h2", text: "How the NEU influences pay" },
      { kind: "p", text: "The NEU is the largest education union in the UK. Its role in the pay process is as a consultee: it submits written and oral evidence to the STRB each year, arguing for a particular award level, and campaigns publicly around the outcome." },
      { kind: "p", text: "It is not a negotiating partner in the way unions are in Scotland, where the EIS sits on the SNCT and pay is genuinely negotiated. In England the STRB makes a recommendation and the Secretary of State decides. This structural difference is one reason Scottish pay settlements have sometimes diverged from English ones — see the [Scotland pay scale page](/teacher-pay-scale-scotland/)." },

      { kind: "h2", text: "What the union tables do not cover" },
      { kind: "ul", items: [
        "**Your individual school range** if you are in the leadership group. The spine is statutory but your specific range is set by governors — see the [leadership pay scale guide](/leadership-pay-scale/).",
        "**The value of your TLR.** The STPCD sets minimum and maximum ranges; your school decides the amount within them.",
        "**Independent school pay.** Independent schools are entirely outside the statutory framework.",
        "**Take-home pay.** Union tables show gross salary only. Use the [teacher pay calculator](/teacher-pay-calculator/) for what actually reaches your account.",
        "**Pension contribution tiers**, which are set by the Teachers' Pension Scheme separately — see [teacher pension contributions](/teacher-pension-contributions/).",
      ]},

      { kind: "h2", text: "Using the tables to check your pay" },
      { kind: "ol", items: [
        "**Find your pay point on your payslip or September pay statement.** It should state the scale and point, for example M4 or U2.",
        "**Identify your school's pay area.** Rest of England, fringe, outer London or inner London. It is the school's location that counts, not where you live.",
        "**Look up the statutory figure** in the table above and compare it with the annual gross salary on your payslip.",
        "**Add any TLR or SEN allowance separately.** These sit on top of the pay point and will make your gross higher than the table figure.",
        "**Check the pro rata calculation if you are part time.** Your gross should be the full-time figure multiplied by your FTE fraction — see the [part-time pay calculator](/part-time-teacher-pay-calculator/).",
        "**If there is still a discrepancy, speak to your union rep** before raising it formally.",
      ]},
      { kind: "callout", tone: "warn", title: "Check the effective date before assuming an error", text: "Awards apply from 1 September but sometimes reach payroll in October or November with back pay. If your September payslip shows the old figure, check the following month before raising a query." },

      { kind: "h2", text: "Raising a pay query" },
      { kind: "p", text: "If the tables and your payslip do not agree, there is a sensible order in which to deal with it. Most discrepancies turn out to be administrative rather than deliberate." },
      { kind: "ol", items: [
        "**Gather the evidence.** Your written pay statement, the relevant payslips, and the statutory figure for your point and pay area.",
        "**Identify the likely cause.** The usual suspects are a late award, an unapplied progression decision, an incorrect FTE fraction or a missing allowance.",
        "**Speak to your union representative first.** They will know whether other staff are affected, which usually indicates a payroll issue rather than an individual one.",
        "**Raise it informally** with the school business manager or headteacher. Most errors are resolved at this stage.",
        "**Escalate formally** through the school's pay appeal or grievance procedure if it is not resolved.",
      ]},
      { kind: "p", text: "Underpayments should normally be corrected with back pay to the date the error began. Keep your September pay statement each year, because reconstructing a pay history from payslips alone is considerably harder." },

      { kind: "h2", text: "Beyond pay scales: what else the union publishes" },
      { kind: "ul", items: [
        "**Directed time guidance** — the 1,265-hour annual limit for full-time teachers and how it should be pro-rated.",
        "**Pay policy model documents** that representatives use when negotiating with academy trusts.",
        "**Threshold application guidance** for teachers applying to the [Upper Pay Range](/upper-pay-range/).",
        "**Pension guidance**, including on the McCloud remedy — see the [teacher pension guide](/teacher-pension/).",
        "**Part-time working advice**, including pro rata pay and directed time — see the [part-time pay calculator](/part-time-teacher-pay-calculator/).",
      ]},
    ],
    faq: [
      { question: "What are the NEU pay scales for 2026/27?", answer: "The NEU publishes the statutory STPCD figures: M1 £34,068 to M6 £46,939 and U1 £49,134 to U3 £52,835 in the rest of England, with higher tables for the fringe, outer London and inner London. They are not separate union rates." },
      { question: "Does the NEU set teacher pay?", answer: "No. Teacher pay in England is set by the Secretary of State on the recommendation of the School Teachers' Review Body and published in the STPCD. The NEU submits evidence to the STRB and campaigns on pay, but it is a consultee rather than a negotiating partner." },
      { question: "Are NEU pay scales different from the STPCD?", answer: "No. The NEU tables restate the statutory STPCD figures in a clearer format with commentary. The numbers are identical for maintained schools." },
      { question: "Do academies have to follow NEU pay scales?", answer: "Academies are not bound by the STPCD or by union tables. They set their own pay policies and can pay above or below the statutory points. Most track them closely for recruitment reasons, but you should check your trust's published pay policy." },
      { question: "What should I do if my school pays less than the NEU scale?", answer: "In a maintained school the statutory figures are binding, so a shortfall is likely an error worth raising. In an academy, first check the trust's pay policy, since it may lawfully differ. Either way, speak to your union representative before raising it formally." },
      { question: "Is the NEU the same as the NUT?", answer: "The NEU was formed in 2017 from the merger of the National Union of Teachers and the Association of Teachers and Lecturers. It is now the largest education union in the UK, representing teachers and support staff." },
      { question: "How do I raise a pay query with my school?", answer: "Gather your written pay statement, payslips and the statutory figure for your point and pay area. Speak to your union representative first, since they will know whether other staff are affected. Then raise it informally with the school business manager or headteacher, and escalate through the pay appeal procedure only if it is unresolved." },
      { question: "Will underpaid salary be backdated?", answer: "Normally yes. Where an error is established, correction is usually backdated to the point the error began. Keeping your annual September pay statement makes establishing that date much easier than reconstructing it from payslips." },
      { question: "Does the NEU publish pay scales for Wales and Scotland?", answer: "The NEU organises in England and Wales and publishes tables for both. For Scotland the EIS is the largest union and sits on the SNCT, which negotiates Scottish pay directly rather than through a review body." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 14. NASUWT
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "nasuwt-teacher-pay-scales",
    hub: "pay-scales",
    title: "NASUWT Teacher Pay Scales",
    metaTitle: "NASUWT Teacher Pay Scales 2026/27 — Union Tables",
    metaDescription:
      "NASUWT pay scales for 2026/27. What the union publishes, how the tables relate to the statutory STPCD figures, and how to check your own pay point is correct.",
    primaryKeyword: "nasuwt teacher pay scales",
    secondaryKeywords: [
      "nasuwt pay scales", "nasuwt teacher pay", "nasuwt salary scales",
      "nasuwt pay scale 2026", "nasuwt pay",
    ],
    calculator: "pay-scale",
    intro:
      "NASUWT publishes annual pay tables for its members covering all four UK nations. Like other union tables they restate statutory figures rather than setting separate rates. Here is what they contain and how to use them to check your pay.",
    keyTakeaways: [
      "NASUWT tables restate statutory pay figures; the union does not set separate rates.",
      "NASUWT publishes tables for all four UK nations, which is useful for cross-border comparison.",
      "The 2026/27 England figures match the STPCD exactly.",
      "Union tables are the standard evidence base for a pay query or grievance.",
      "NASUWT gives evidence to the STRB in England and sits on negotiating bodies elsewhere.",
    ],
    blocks: [
      { kind: "h2", text: "What NASUWT publishes" },
      { kind: "p", text: "NASUWT produces pay scale guidance each year covering England, Wales, Scotland and Northern Ireland. Because the union organises across all four nations, its tables are among the more useful single sources for comparing pay between them." },
      { kind: "p", text: "As with the NEU, these are restatements of statutory figures. Pay in England is set by the Secretary of State on STRB advice; NASUWT reproduces those figures with member guidance attached." },

      { kind: "h2", text: "England pay scales 2026/27" },
      { kind: "table", caption: "England statutory pay scales 2026/27", head: ["Point", "Rest of England", "Fringe", "Outer London", "Inner London"], rows: [
        ["M1", "£34,068", "£35,602", "£39,195", "£41,728"],
        ["M3", "£38,400", "£39,979", "£43,403", "£45,786"],
        ["M6", "£46,939", "£48,478", "£52,241", "£54,131"],
        ["U1", "£49,134", "£50,625", "£54,047", "£59,649"],
        ["U3", "£52,835", "£54,327", "£58,119", "£64,683"],
      ]},

      { kind: "h2", text: "Four-nation comparison" },
      { kind: "p", text: "This is where NASUWT's multi-nation coverage is genuinely useful. Teacher pay differs substantially across the UK." },
      { kind: "table", caption: "Starting and top classroom pay by nation, 2026/27", head: ["Nation", "Starting salary", "Top classroom point", "Structure"], rows: [
        ["England (rest of)", "£34,068", "£52,835 (U3)", "STPCD, threshold application"],
        ["England (inner London)", "£41,728", "£64,683 (U3)", "STPCD, four pay bands"],
        ["Wales", "£34,068", "£52,835 (U3)", "IWPRB, mirrors STPCD"],
        ["Scotland", "£34,539", "£52,539 (Chartered)", "SNCT, automatic progression"],
        ["Northern Ireland", "£32,188", "£50,085 (U3)", "TNC, lowest scale"],
      ]},
      { kind: "p", text: "For full detail see the [Wales](/teacher-pay-scale-wales/), [Scotland](/teacher-pay-scale-scotland/) and [Northern Ireland](/ni-teacher-pay-scale/) pages." },

      { kind: "h2", text: "How NASUWT differs from the NEU on pay" },
      { kind: "p", text: "Both unions give evidence to the STRB in England and both publish member pay guidance. The practical differences are organisational rather than in the figures themselves." },
      { kind: "ul", items: [
        "**NASUWT organises across all four nations** and sits on the negotiating machinery in Scotland and Northern Ireland as well as giving STRB evidence in England.",
        "**NASUWT is a teachers-only union.** The NEU also represents support staff following its merger with ATL.",
        "**Campaigning emphasis differs**, with NASUWT historically placing more weight on workload and pupil behaviour alongside pay.",
      ]},
      { kind: "p", text: "On the actual pay figures there is no difference. Both publish the same statutory numbers, and the [NEU tables](/neu-teacher-pay-scales/) show identical amounts." },

      { kind: "h2", text: "Checking your pay against the tables" },
      { kind: "ol", items: [
        "**Confirm your pay point** from your payslip or September pay statement.",
        "**Confirm your school's pay area** — it is the school location that determines the band, not your home address.",
        "**Compare your annual gross** against the statutory figure, remembering that TLR and SEN allowances sit on top.",
        "**If part time, check the pro rata arithmetic** — gross should be the full-time figure times your FTE fraction.",
        "**Check the effective date.** Awards apply from 1 September but may arrive in October or November payroll with back pay.",
      ]},
      { kind: "callout", tone: "tip", title: "Keep your September pay statement", text: "Schools should issue a written pay statement each year setting out your pay point and any allowances. It is the cleanest evidence if a discrepancy emerges later, and far easier than reconstructing your pay history from payslips." },

      { kind: "h2", text: "When union tables matter most" },
      { kind: "p", text: "Three situations where having the statutory figures to hand genuinely changes the outcome." },
      { kind: "ul", items: [
        "**Starting a new job.** Schools have discretion over your starting point on the main range. Knowing the full table strengthens negotiation, particularly in shortage subjects.",
        "**Moving from unqualified to qualified status.** UQ6 (£36,493) pays more than M1 (£34,068), so placement matters — see the [unqualified teacher pay scale](/unqualified-teacher-pay-scale/).",
        "**Working in an academy.** Trusts set their own policies. The statutory table is your benchmark for whether the trust is keeping pace.",
      ]},

      { kind: "h2", text: "Beyond the headline figures" },
      { kind: "p", text: "Union tables show gross salary only. Two things they do not tell you matter just as much for your finances." },
      { kind: "p", text: "The first is take-home pay, which depends on your pension tier, tax code and any student loan. Use the [teacher pay calculator](/teacher-pay-calculator/) for that. The second is pension accrual: each year you build 1/57th of pensionable pay as guaranteed retirement income, so your pay point today shapes your income decades from now. See the [teacher pension guide](/teacher-pension/)." },

      { kind: "h2", text: "Common pay problems members bring to unions" },
      { kind: "p", text: "Pay casework tends to cluster around a small number of recurring issues. Recognising yours early makes it much easier to resolve." },
      { kind: "table", caption: "Frequent teacher pay issues and where to start", head: ["Issue", "Typical cause", "First step"], rows: [
        ["Award not applied in September", "Late payroll implementation", "Check the next payslip for back pay"],
        ["Progression refused", "Appraisal objectives judged unmet", "Request written reasons; check pay policy"],
        ["Threshold application refused", "Evidence judged insufficient", "Request feedback; consider pay appeal"],
        ["Part-time pay looks wrong", "Incorrect FTE fraction applied", "Check contract fraction against payslip"],
        ["TLR not pro-rated", "Allowance not scaled to fraction", "Compare against school pay policy"],
        ["Pay cut on gaining QTS", "Placed on M1 from a higher UQ point", "Negotiate placement before QTS is awarded"],
      ]},
      { kind: "p", text: "The last of these is the one most easily prevented. UQ6 pays £36,493 while M1 pays £34,068, so placement on qualifying genuinely matters — see the [unqualified teacher pay scale](/unqualified-teacher-pay-scale/)." },

      { kind: "h2", text: "Pay appeals" },
      { kind: "p", text: "Every school must have a pay appeal procedure, set out in its pay policy. If a pay decision goes against you, you are entitled to written reasons and to appeal." },
      { kind: "ol", items: [
        "**Request written reasons** for the decision as soon as it is communicated.",
        "**Check the timescale.** Appeal windows are typically short, often ten working days.",
        "**Read the pay policy criteria** and address them directly rather than arguing general merit.",
        "**Involve your union representative early**, ideally before submitting.",
        "**Present evidence against each criterion** the decision cited as unmet.",
      ]},
      { kind: "callout", tone: "tip", title: "Appeal on the criteria, not on fairness", text: "Appeals succeed when they demonstrate that published criteria were met, or that the policy was not followed correctly. Arguments based on length of service or general effort rarely succeed, because neither is normally a criterion in the pay policy." },
    ],
    faq: [
      { question: "What are the NASUWT pay scales for 2026/27?", answer: "NASUWT publishes the statutory figures: in the rest of England M1 £34,068 to M6 £46,939 and U1 £49,134 to U3 £52,835, with higher tables for the fringe, outer London and inner London, plus separate tables for Wales, Scotland and Northern Ireland." },
      { question: "Does NASUWT negotiate teacher pay?", answer: "In England NASUWT submits evidence to the STRB, which recommends to the Secretary of State — so it is a consultee rather than a negotiator. In Scotland and Northern Ireland it sits on the formal negotiating machinery alongside other unions." },
      { question: "Are NASUWT and NEU pay scales the same?", answer: "Yes. Both restate the same statutory STPCD figures. The differences between the unions are organisational and in campaigning emphasis, not in the pay numbers they publish." },
      { question: "Does NASUWT cover Scotland and Northern Ireland?", answer: "Yes. NASUWT organises across all four UK nations and publishes pay tables for each, which makes its guidance useful for comparing pay across borders." },
      { question: "How do I check my pay is correct?", answer: "Find your pay point on your payslip, confirm your school's pay area, and compare your annual gross with the statutory table, remembering that TLR and SEN allowances are added on top. If part time, check the pro rata calculation. Speak to your union rep if a gap remains." },
      { question: "Do I have to be in a union to use these pay scales?", answer: "No. The underlying figures are published by the Department for Education in the STPCD and are freely available. Union tables simply present them more clearly with member guidance attached." },
      { question: "How do I appeal a pay decision?", answer: "Request written reasons as soon as the decision is communicated, check the appeal window in your school's pay policy (often around ten working days), and address the published criteria directly rather than arguing general merit. Involve your union representative before submitting." },
      { question: "What is the most common teacher pay error?", answer: "Incorrect pro-rating for part-time staff and allowances not being scaled to the FTE fraction. The other frequent issue is a pay cut on gaining QTS, where a teacher on UQ6 (£36,493) is placed on M1 (£34,068) without negotiation." },
      { question: "Can my school refuse to move me up the pay scale?", answer: "Yes, if the appraisal criteria in its published pay policy were not met. The decision must follow that policy, you are entitled to written reasons, and you can use the pay appeal procedure. Length of service alone is not normally a qualifying criterion." },
      { question: "Does NASUWT publish leadership pay scales?", answer: "Yes, it publishes the statutory leadership spine endpoints. Your individual school range within that spine is set by the governing body rather than nationally, so union tables show the spine rather than your specific range." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 15. 2025/26 ARCHIVE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-pay-scale-2025-26",
    hub: "pay-scales",
    title: "Teacher Pay Scale 2025/26",
    metaTitle: "Teacher Pay Scale 2025 — 2025/26 Tables & 2026/27 Compared",
    metaDescription:
      "The 2025/26 teacher pay scales archived, with a full comparison against the current 2026/27 figures so you can see exactly what the 3.5% award changed.",
    primaryKeyword: "teacher pay scale 2025",
    secondaryKeywords: [
      "teacher pay scales 2025", "teacher pay scale 25/26", "2025 teacher pay scales",
      "teacher pay scale 2025-26", "teacher pay 25/26", "teacher pay scales 2025-26",
    ],
    calculator: "none",
    intro:
      "The 2025/26 pay scales were superseded on 1 September 2026 by a 3.5% award. This archive page keeps the previous figures available and sets them against the current ones, which is useful for back-pay checks, pension records and understanding what changed.",
    keyTakeaways: [
      "The 2025/26 scales applied from 1 September 2025 to 31 August 2026.",
      "They were replaced by the 2026/27 scales, which added 3.5% to every point.",
      "M1 rose from about £32,916 to £34,068, an increase of roughly £1,152.",
      "If you are checking pay for the 2025/26 school year, these are the figures that applied.",
      "For anything from 1 September 2026 onward, use the current 2026/27 tables.",
    ],
    blocks: [
      { kind: "callout", tone: "warn", title: "These figures are no longer current", text: "The 2025/26 scales stopped applying on 31 August 2026. If you are checking a current payslip you need the [2026/27 pay scales](/teacher-pay-scale-2026-27/) instead. Use this page only for the 2025/26 school year." },

      { kind: "h2", text: "2025/26 main and upper pay ranges" },
      { kind: "p", text: "These figures are derived by removing the 3.5% award from the published 2026/27 points. They may differ by a pound or two from the originally published tables because the STPCD rounds at each step." },
      { kind: "table", caption: "2025/26 Main and Upper Pay Range, rest of England (derived)", head: ["Point", "2025/26", "2026/27", "Increase"], rows: [
        ["M1", "£32,916", "£34,068", "+£1,152"],
        ["M2", "£34,823", "£36,042", "+£1,219"],
        ["M3", "£37,101", "£38,400", "+£1,299"],
        ["M4", "£39,556", "£40,940", "+£1,384"],
        ["M5", "£42,057", "£43,529", "+£1,472"],
        ["M6", "£45,352", "£46,939", "+£1,587"],
        ["U1", "£47,472", "£49,134", "+£1,662"],
        ["U2", "£49,232", "£50,955", "+£1,723"],
        ["U3", "£51,048", "£52,835", "+£1,787"],
      ]},

      { kind: "h2", text: "2025/26 inner London figures" },
      { kind: "table", caption: "2025/26 Main Pay Range, inner London (derived)", head: ["Point", "2025/26", "2026/27", "Increase"], rows: [
        ["M1", "£40,317", "£41,728", "+£1,411"],
        ["M2", "£42,234", "£43,712", "+£1,478"],
        ["M3", "£44,238", "£45,786", "+£1,548"],
        ["M4", "£46,339", "£47,961", "+£1,622"],
        ["M5", "£48,952", "£50,665", "+£1,713"],
        ["M6", "£52,300", "£54,131", "+£1,831"],
      ]},
      { kind: "p", text: "Because the award was a flat percentage, teachers on higher points and in higher-paying regions received more in cash. An inner London M6 teacher gained £1,831 against £1,152 for an M1 teacher outside London. See the [inner London pay scale](/inner-london-teacher-pay-scale/) for current figures." },

      { kind: "h2", text: "Why you might still need the 2025/26 figures" },
      { kind: "ul", items: [
        "**Checking back pay.** If an award was applied late, you may need both years' figures to verify a settlement.",
        "**Pension records.** Career average benefits are built from each year's actual pensionable pay, so your 2025/26 salary permanently affects your pension. See [how teacher pensions work](/teacher-pension/).",
        "**Mortgage and lending applications** that ask for historic income.",
        "**Pay disputes** spanning more than one school year.",
        "**Comparing multi-year progression** — separating the annual award from movement up the scale.",
      ]},

      { kind: "h2", text: "Separating the award from progression" },
      { kind: "p", text: "A common confusion when looking back at payslips is disentangling two separate increases. If you moved up a pay point in September 2026 and also received the 3.5% award, your salary rose twice." },
      { kind: "table", caption: "A teacher moving M3 to M4 in September 2026", head: ["Component", "Amount", "Explanation"], rows: [
        ["2025/26 salary on M3", "£37,101", "Previous year figure"],
        ["Effect of 3.5% award on M3", "+£1,299", "M3 becomes £38,400"],
        ["Effect of moving M3 to M4", "+£2,540", "M4 2026/27 is £40,940"],
        ["Total increase", "+£3,839", "10.3% year on year"],
      ]},
      { kind: "p", text: "That is why September payslips can show a large jump in a progression year. Both effects land at once because the pay award and pay point changes share the same 1 September effective date. More on this in the [Main Pay Range guide](/main-pay-range/)." },

      { kind: "h2", text: "What the 3.5% award was actually worth" },
      { kind: "p", text: "The headline percentage overstates the effect on take-home pay. Income tax, National Insurance and the pension contribution all take a share of any increase." },
      { kind: "p", text: "For a basic-rate taxpayer in the Teachers' Pension Scheme, roughly 55% to 60% of a gross award reaches the bank account. The £1,587 award on M6 translates to around £860 of extra annual take-home. Model your own with the [teacher pay calculator](/teacher-pay-calculator/)." },
      { kind: "callout", tone: "info", title: "The rest is not lost", text: "The portion absorbed by your pension contribution buys additional guaranteed retirement income. A higher salary in 2025/26 and 2026/27 permanently increased the pension slice you banked for those years, because career average benefits accrue as 1/57th of each year's pensionable pay." },

      { kind: "h2", text: "Where to find the current figures" },
      { kind: "p", text: "For anything from 1 September 2026 onward, use the current tables. The [teacher pay scale hub](/teacher-pay-scale/) has every scale and region, and the [2026/27 page](/teacher-pay-scale-2026-27/) covers what changed in the current award. Regional detail is on the [London](/teacher-pay-scale-london/), [Wales](/teacher-pay-scale-wales/) and [Scotland](/teacher-pay-scale-scotland/) pages." },

      { kind: "h2", text: "2025/26 allowances and higher ranges" },
      { kind: "p", text: "Allowances and the leadership spine were uplifted by the same 3.5% in 2026/27, so the 2025/26 figures can be derived the same way." },
      { kind: "table", caption: "2025/26 allowances, rest of England (derived)", head: ["Allowance", "2025/26", "2026/27"], rows: [
        ["TLR 1", "£10,174 – £17,216", "£10,530 – £17,819"],
        ["TLR 2", "£3,527 – £8,610", "£3,650 – £8,912"],
        ["TLR 3", "£702 – £3,478", "£727 – £3,600"],
        ["SEN allowance", "£2,787 – £5,497", "£2,885 – £5,689"],
      ]},
      { kind: "p", text: "Whether your individual TLR rose with the range depends on your school's pay policy. Ranges are statutory but the specific amount within them is a school decision, so some teachers saw no change to their allowance even though the range moved." },

      { kind: "h2", text: "Reading a multi-year pay history" },
      { kind: "p", text: "If you are reconstructing several years of pay — for a mortgage application, a pension query or a dispute — it helps to separate the two drivers deliberately." },
      { kind: "ol", items: [
        "**Note your pay point for each school year**, running September to August rather than April to March.",
        "**Look up the statutory figure** for that point in that year's tables.",
        "**Add any allowances** separately, since TLR and SEN sit on top of the pay point.",
        "**Apply your FTE fraction** for any year you worked part time.",
        "**Reconcile against P60s**, remembering that a P60 covers April to March and therefore spans two school years.",
      ]},
      { kind: "callout", tone: "warn", title: "School years and tax years do not align", text: "This is the single most common source of confusion when checking historic pay. A P60 for the year ending April 2026 covers five months of the 2025/26 pay scales and seven months of the previous year's. Neither annual salary figure will match the P60 exactly." },

      { kind: "h2", text: "Why the 2025/26 figures still matter for your pension" },
      { kind: "p", text: "Under the career average scheme, each year is banked separately. The pension you earned in 2025/26 was calculated as 1/57th of your actual pensionable pay that year, and it is not recalculated when your salary later rises." },
      { kind: "table", caption: "Pension built in 2025/26 versus 2026/27, rest of England", head: ["Point", "2025/26 pay", "Pension built", "2026/27 pay", "Pension built"], rows: [
        ["M1", "£32,916", "£578", "£34,068", "£598"],
        ["M6", "£45,352", "£796", "£46,939", "£823"],
        ["U3", "£51,048", "£896", "£52,835", "£927"],
      ]},
      { kind: "p", text: "Those slices are then revalued each year while you remain in service, so an early-career year still grows in value over time. Model the cumulative effect with the [teachers' pension calculator](/teacher-pension-calculator/)." },
    ],
    faq: [
      { question: "What was the teacher pay scale for 2025/26?", answer: "In the rest of England the main range ran from about £32,916 (M1) to £45,352 (M6), and the upper range from about £47,472 (U1) to £51,048 (U3). These figures are derived by removing the 3.5% award from the current 2026/27 points." },
      { question: "How much was the 2026/27 pay rise compared to 2025/26?", answer: "3.5% on every point, applied from 1 September 2026. In cash that was about £1,152 on M1 and £1,787 on U3 in the rest of England, with larger cash increases in London where salaries are higher." },
      { question: "Are the 2025/26 pay scales still valid?", answer: "No. They applied from 1 September 2025 to 31 August 2026 and were superseded by the 2026/27 scales. Use them only for checking that school year." },
      { question: "Why does my September 2026 payslip show such a big increase?", answer: "If you also moved up a pay point, two increases landed at once because both take effect on 1 September. A teacher moving M3 to M4 gained £1,299 from the award and £2,540 from progression — £3,839 in total, or 10.3%." },
      { question: "Do old pay scales affect my pension?", answer: "Yes. The Teachers' Pension Scheme builds career average benefits as 1/57th of each year's actual pensionable pay, so your 2025/26 salary permanently forms part of your pension. It is not recalculated on later, higher salaries." },
      { question: "Where can I find official 2025/26 pay scales?", answer: "The School Teachers' Pay and Conditions Document 2025 is archived on GOV.UK, and both the NEU and NASUWT retain historic pay tables. The figures on this page are derived from the current STPCD by removing the 3.5% award." },
      { question: "Why does my P60 not match either year's pay scale?", answer: "Because school years and tax years do not align. A P60 for the year ending April 2026 covers five months on the 2025/26 scales and seven months on the previous year's, so it will not match either annual salary figure exactly." },
      { question: "Did TLR payments change in 2025/26?", answer: "The TLR ranges were uplifted along with the pay scales. Whether your individual payment changed depends on your school's pay policy, because the STPCD sets minimum and maximum ranges while the specific amount within them is a school decision." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 16. PAY MAP
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "teacher-pay-map",
    hub: "pay-scales",
    title: "Teacher Pay by Region in England",
    metaTitle: "Teacher Pay by Region 2026/27 — England Regional Averages",
    metaDescription:
      "Average teacher pay across the ten English regions for 2026/27. See where teachers earn most, how statutory bands differ from actual averages, and what drives the gap.",
    primaryKeyword: "teacher pay by region",
    secondaryKeywords: [
      "teacher pay map", "average teacher salary by region", "teacher pay regional",
      "teacher salary by region uk", "regional teacher pay england",
    ],
    calculator: "none",
    intro:
      "Statutory pay bands only tell you the minimum. Actual average teacher pay varies across England by more than £7,000, driven by workforce experience, leadership density and London weighting. Here is the regional picture and what sits behind it.",
    keyTakeaways: [
      "Average classroom teacher pay ranges from £44,088 in Yorkshire and the Humber to £51,502 in inner London.",
      "The gap between the highest and lowest regions is £7,414.",
      "Outside London, regional averages cluster tightly between £44,088 and £45,286.",
      "The North East has the highest average outside London, ahead of the South East.",
      "Averages differ from statutory bands because they reflect workforce composition, not just pay scales.",
    ],
    blocks: [
      { kind: "h2", text: "Average classroom teacher pay by region" },
      { kind: "p", text: "These are average classroom teacher salaries from the DfE School Workforce Census. They cover qualified classroom teachers and exclude leadership posts." },
      { kind: "table", caption: "Average classroom teacher pay by English region", head: ["Rank", "Region", "Average pay"], rows: [
        ["1", "Inner London", "£51,502"],
        ["2", "Outer London", "£49,360"],
        ["3", "North East", "£45,286"],
        ["4", "East of England", "£44,702"],
        ["5", "South West", "£44,694"],
        ["6", "North West", "£44,620"],
        ["7", "East Midlands", "£44,453"],
        ["8", "South East", "£44,438"],
        ["9", "West Midlands", "£44,174"],
        ["10", "Yorkshire and the Humber", "£44,088"],
      ]},
      { kind: "callout", tone: "info", title: "Two surprises in this table", text: "The North East has the highest average outside London despite having no regional weighting, and the South East ranks eighth despite high housing costs. Both are explained by workforce composition rather than pay rates." },

      { kind: "h2", text: "Why averages differ from statutory pay scales" },
      { kind: "p", text: "It would be easy to read this table as showing that the North East pays teachers better than the South East. It does not. Both are on the same rest-of-England statutory scale. What differs is who is teaching there." },
      { kind: "ul", items: [
        "**Workforce experience profile.** A region with more long-serving teachers on the upper pay range shows a higher average, even on identical pay scales.",
        "**Recruitment and retention patterns.** Regions with high turnover employ more early-career teachers on lower points, pulling the average down.",
        "**Leadership density.** Small schools have proportionally more leadership posts per teacher, which lifts the overall figure where blended averages are used.",
        "**Fringe area coverage.** Parts of the South East fall inside the London fringe band, and parts do not, so the regional average blends two pay bands.",
        "**Part-time patterns.** Regions with higher part-time working can show lower averages if figures are not fully FTE-adjusted.",
      ]},
      { kind: "p", text: "The North East's position is largely a retention story: it has one of the most experienced teaching workforces in England, with more teachers on the upper pay range. The South East, by contrast, competes with London for staff and loses experienced teachers to higher-paying boroughs, leaving a younger workforce on lower points." },

      { kind: "h2", text: "Statutory bands versus regional averages" },
      { kind: "table", caption: "Statutory M1 and U3 against regional averages", head: ["Area", "Statutory M1", "Statutory U3", "Actual average"], rows: [
        ["Inner London", "£41,728", "£64,683", "£51,502"],
        ["Outer London", "£39,195", "£58,119", "£49,360"],
        ["Rest of England", "£34,068", "£52,835", "£44,088 – £45,286"],
      ]},
      { kind: "p", text: "Every regional average sits between the M1 and U3 statutory points, which is what you would expect: the average teacher is somewhere in the middle of their career. Outside London the averages cluster around M5 to M6 equivalent. Compare with the [full pay scale tables](/teacher-pay-scale/)." },

      { kind: "h2", text: "Real-terms pay after housing costs" },
      { kind: "p", text: "Nominal pay is only half the picture. Once regional housing costs are taken into account the ranking changes substantially, and in some analyses it inverts." },
      { kind: "p", text: "Inner London's £51,502 average is roughly 17% above the lowest region in cash terms, but private rents in central boroughs commonly run at double or more the level in the North East or Yorkshire. On a cost-adjusted basis the northern regions frequently come out ahead, which is a well-documented factor in London's teacher retention difficulties." },
      { kind: "callout", tone: "warn", title: "Treat cost-adjusted comparisons carefully", text: "Real-terms adjustments depend heavily on which price index and which housing measure is used. They are useful for direction of travel rather than precise ranking, and your own position depends far more on whether you rent, own or have a mortgage fixed years ago." },

      { kind: "h2", text: "What this means if you are choosing where to teach" },
      { kind: "ol", items: [
        "**Compare statutory bands first, not averages.** Your salary is set by your pay point and your school's pay area, not by the regional average.",
        "**Check the pay area, not the region.** A school in Surrey is on fringe pay; a school in Sussex is usually not. See the [fringe pay scale page](/london-fringe-teacher-pay-scale/).",
        "**Weigh housing costs against the premium.** The inner London M1 premium is about £389 a month after deductions, which rarely closes a central London rent gap.",
        "**Think about your career stage.** Inner London is disproportionately generous on the upper pay range — see the [London comparison](/teacher-pay-scale-london/).",
        "**Factor in the pension.** Higher pay permanently increases each year's accrual, so a higher-paying region compounds into retirement. Model it with the [pension calculator](/teacher-pension-calculator/).",
      ]},

      { kind: "h2", text: "Regional pay and your pension" },
      { kind: "p", text: "Because career average benefits build at 1/57th of pensionable pay each year, working in a higher-paying region permanently increases the pension banked for those years." },
      { kind: "table", caption: "Annual pension built in one year at regional average pay", head: ["Region", "Average pay", "Pension built that year"], rows: [
        ["Inner London", "£51,502", "£904"],
        ["Outer London", "£49,360", "£866"],
        ["North East", "£45,286", "£794"],
        ["Yorkshire and the Humber", "£44,088", "£773"],
      ]},
      { kind: "p", text: "An inner London teacher builds £131 more annual pension per year worked than a colleague in Yorkshire on the regional average. Across a full career that difference is substantial and it does not disappear if you later move region — each year's accrual is banked at the pay you actually received. See the [teacher pension guide](/teacher-pension/)." },

      { kind: "h2", text: "Regional recruitment pressures" },
      { kind: "p", text: "Average pay is partly a symptom of how easy or hard a region finds it to keep teachers. Two patterns show up consistently in the workforce data." },
      { kind: "ul", items: [
        "**High-turnover regions show lower averages** because they employ proportionally more early-career teachers on lower pay points. London and the South East both fit this pattern despite paying the most per point.",
        "**Stable regions show higher averages** because more of their workforce has reached the upper pay range. The North East is the clearest example.",
        "**Shortage subjects distort local figures**, since schools use discretionary recruitment payments and higher starting points to fill maths, physics, chemistry and computing posts.",
        "**Coastal and rural areas** often struggle to recruit despite being on the same statutory scale as nearby cities, because the candidate pool is smaller.",
      ]},
      { kind: "callout", tone: "info", title: "A low regional average is not bad news for you", text: "Because the statutory scale is identical across the rest of England, a low regional average usually signals a younger workforce rather than worse pay. If anything it can mean faster promotion opportunities, since vacancies arise more often." },

      { kind: "h2", text: "Using regional data when job hunting" },
      { kind: "ol", items: [
        "**Start with the pay area, not the region.** Only the four statutory bands change your salary — see the [pay scale hub](/teacher-pay-scale/).",
        "**Ask whether the school pays above the statutory point** for shortage subjects. Many do, and it is rarely advertised.",
        "**Check whether the employer is a maintained school or an academy trust**, since trusts set their own pay policies.",
        "**Weigh housing costs properly**, using actual rents or prices in the specific area rather than regional averages.",
        "**Think several years ahead.** Inner London's advantage grows substantially once you reach the upper pay range — see the [London comparison](/teacher-pay-scale-london/).",
      ]},
    ],
    faq: [
      { question: "Which region pays teachers the most in England?", answer: "Inner London, with an average classroom teacher salary of £51,502, followed by outer London at £49,360. Outside London the North East has the highest average at £45,286." },
      { question: "Why does the North East have higher average teacher pay than the South East?", answer: "Both are on the same rest-of-England statutory scale, so the difference is workforce composition rather than pay rates. The North East has a more experienced, more stable teaching workforce with more teachers on the upper pay range, while the South East loses experienced staff to London and employs more early-career teachers." },
      { question: "What is the average teacher salary in England?", answer: "Outside London, regional averages for classroom teachers cluster between £44,088 and £45,286. Inner London averages £51,502 and outer London £49,360. These are averages across all experience levels, not starting salaries." },
      { question: "Do teachers get paid differently in different regions?", answer: "Only through the four statutory pay bands: rest of England, London fringe, outer London and inner London. Outside those bands the statutory pay scale is identical everywhere in England. Regional averages differ because of workforce experience, not different rates." },
      { question: "Is teacher pay higher in the North or the South?", answer: "In cash terms London dominates, but outside London the picture is remarkably flat, with only about £1,200 between the highest and lowest regional averages. Adjusted for housing costs, northern regions often come out ahead of the South East." },
      { question: "How much does regional pay affect my pension?", answer: "Directly. Career average benefits build at 1/57th of actual pensionable pay each year, so an inner London teacher on the regional average builds £904 of annual pension in a year against £773 for a colleague in Yorkshire. Each year's accrual is banked at the pay you received." },
    ],
    sources: [
      { label: "DfE — School Workforce in England statistics", url: "https://explore-education-statistics.service.gov.uk/find-statistics/school-workforce-in-england" },
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "ONS — Regional and sub-regional productivity and price levels", url: "https://www.ons.gov.uk/economy/economicoutputandproductivity" },
    ],
    updated: UPDATED,
  },
];
