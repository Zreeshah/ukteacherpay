import type { PageContent } from "../types";

const UPDATED = "2026-08-23";

const SOURCES = [
  { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
  { label: "School Teachers' Review Body (STRB) — reports and remit letters", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
  { label: "Burgundy Book — Conditions of Service for School Teachers in England and Wales (NEU)", url: "https://neu.org.uk/advice/your-rights-work/pay/burgundy-book" },
  { label: "HMRC — Rates and thresholds for employers 2026 to 2027", url: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" },
];

const MATERNITY_SOURCES = [
  { label: "Burgundy Book — Conditions of Service for School Teachers in England and Wales (NEU)", url: "https://neu.org.uk/advice/your-rights-work/pay/burgundy-book" },
  { label: "GOV.UK — Statutory Maternity Pay and Leave: employer guide", url: "https://www.gov.uk/employers-maternity-pay-leave" },
  { label: "GOV.UK — Maternity pay and leave", url: "https://www.gov.uk/maternity-pay-leave" },
  { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
];

export const policyPages: PageContent[] = [
  // ---------------------------------------------------------------- PILLAR
  {
    slug: "teacher-pay-rise",
    isPillar: true,
    hub: "policy",
    title: "Teacher Pay Rise: How Awards Work",
    metaTitle: "Teacher Pay Rise 2026/27 — How UK Pay Awards Work",
    metaDescription:
      "How teacher pay rises are decided: the STRB recommendation, the DfE decision, the STPCD, and what the 3.5% 2026/27 award means in cash at every pay point.",
    primaryKeyword: "teacher pay rise",
    secondaryKeywords: [
      "teachers pay rise", "teacher pay rise pay scale", "teacher pay award",
      "teacher pay increase", "school teachers pay award", "teachers pay increase uk",
    ],
    calculator: "pay-rise",
    intro:
      "Teacher pay rises follow a fixed annual cycle: an independent review body recommends, the government decides, and the new figures land in the STPCD from 1 September. This guide explains each stage, what the 2026/27 award of 3.5% is worth in cash, and why your own rise is often bigger than the headline percentage.",
    keyTakeaways: [
      "The 2026/27 STPCD award was 3.5%, applied to every pay point from 1 September 2026.",
      "Teacher pay awards run with the school year from 1 September, not from the April tax year like most public sector pay.",
      "Your own increase is usually larger than the headline figure because scale progression is applied on top of the award.",
      "The School Teachers' Review Body recommends, but the Secretary of State makes the final decision and can depart from the recommendation.",
      "Academies are not legally bound by the STPCD, though most mirror it in practice.",
    ],
    blocks: [
      { kind: "h2", text: "Who actually decides teacher pay" },
      { kind: "p", text: "Teacher pay in England is not negotiated at the bargaining table the way most public sector pay is. It is set through a review body process created by the School Teachers' Pay and Conditions Act 1991. Four bodies matter." },
      { kind: "table", caption: "Who does what in the teacher pay cycle", head: ["Body", "Role", "Binding?"], rows: [
        ["School Teachers' Review Body (STRB)", "Takes evidence and recommends an award", "No — advisory only"],
        ["Secretary of State for Education", "Accepts, modifies or rejects the recommendation", "Yes — makes the decision"],
        ["Department for Education", "Publishes the STPCD with the new figures", "Yes — statutory for maintained schools"],
        ["Individual school or trust", "Applies the STPCD through its own pay policy", "Sets your actual pay point"],
      ]},
      { kind: "p", text: "Unions submit written and oral evidence to the STRB but do not negotiate the outcome directly. That is why industrial action over pay is aimed at the government rather than at employers. Read more about the process in the [STRB explainer](/strb-pay-review-body/)." },

      { kind: "h2", text: "The annual pay round, step by step" },
      { kind: "ol", items: [
        "**Remit letter (usually autumn).** The Secretary of State writes to the STRB setting out what it should consider, including any affordability constraints.",
        "**Written evidence (December to January).** The DfE, unions and employer bodies submit evidence on recruitment, retention, workload and affordability.",
        "**Oral evidence (late winter).** The STRB questions the parties directly.",
        "**Report to the Secretary of State (spring).** The STRB delivers its recommendations. The report is not public at this point.",
        "**Government response and consultation (summer).** The Secretary of State publishes the report alongside a response, then consults on a draft STPCD.",
        "**STPCD published (late summer).** Final figures are confirmed.",
        "**Award takes effect 1 September.** New pay scales apply from the start of the school year.",
      ]},
      { kind: "callout", tone: "warn", title: "Why your September payslip is often wrong", text: "The STPCD is frequently confirmed only weeks before it takes effect, and payroll teams cannot always process it in time. Backdated arrears in October or November are common. Check that your arrears cover the full period from 1 September." },

      { kind: "h2", text: "Recent teacher pay awards" },
      { kind: "p", text: "The last few years have seen unusually large headline awards, driven by inflation and a persistent recruitment shortfall in shortage subjects." },
      { kind: "table", caption: "Headline STPCD pay awards by year", head: ["School year", "Headline award", "Context"], rows: [
        ["2023/24", "6.5%", "Followed sustained industrial action over pay"],
        ["2024/25", "5.5%", "Accepted in full by government"],
        ["2025/26", "4.0%", "Partially funded, schools asked to absorb some cost"],
        ["2026/27", "3.5%", "Current award, effective 1 September 2026"],
      ]},
      { kind: "p", text: "The detail of the current award, including the cash increase at every point, is set out in the [2026/27 pay rise guide](/teacher-pay-rise-2026-27/). The previous year is archived in the [2025/26 pay rise page](/teacher-pay-rise-2025/)." },

      { kind: "h2", text: "Why your rise is usually bigger than the headline" },
      { kind: "p", text: "The headline award uplifts the whole scale. Most classroom teachers also move up a point on the scale in the same September, and those two increases compound." },
      { kind: "p", text: "Take a teacher finishing their second year on M2. In September they move to M3 and the 3.5% award applies to the new scale." },
      { kind: "table", caption: "Combined effect of progression and the 3.5% award", head: ["Stage", "Salary", "Increase"], rows: [
        ["M2 on the 2025/26 scale (derived)", "£34,823", "—"],
        ["M3 on the 2025/26 scale (derived)", "£37,101", "+£2,278 from progression"],
        ["M3 on the 2026/27 scale", "£38,400", "+£1,299 from the award"],
        ["Total increase", "", "+£3,577 (10.3%)"],
      ]},
      { kind: "callout", tone: "info", title: "Derived prior-year figures", text: "The 2025/26 figures above are derived by removing the 3.5% award from the published 2026/27 scale. They illustrate the mechanics rather than reproducing the official prior-year document." },

      { kind: "h2", text: "What a pay rise does to your take-home pay" },
      { kind: "p", text: "A 3.5% gross rise does not become a 3.5% rise in your bank account. Three things reduce it." },
      { kind: "ul", items: [
        "**Income tax** takes 20% of the increase for most teachers, or 40% above £50,270.",
        "**National Insurance** takes another 8%, dropping to 2% above £50,270.",
        "**Pension contributions** take 7.4% to 12.7% depending on your tier — and a pay rise can push you into a higher tier.",
      ]},
      { kind: "p", text: "The tier effect is the one people miss. Crossing a contribution boundary means the higher rate applies to your whole salary, not just the part above the threshold. Model your own figures with the [teacher pay calculator](/teacher-pay-calculator/)." },
      { kind: "table", caption: "TPS contribution tier boundaries 2026/27", head: ["Full-time equivalent salary", "Rate"], rows: [
        ["Up to £34,289", "7.4%"],
        ["£34,290 to £46,158", "8.6%"],
        ["£46,159 to £54,729", "9.6%"],
        ["£54,730 to £72,534", "10.2%"],
        ["£72,535 to £98,908", "11.7%"],
        ["£98,909 and above", "12.7%"],
      ]},

      { kind: "h2", text: "Funding: why an award can still mean cuts" },
      { kind: "p", text: "A pay award is only fully positive for schools if it is fully funded. When the government funds part of an award and expects schools to absorb the rest from existing budgets, the practical result is pressure on staffing, resources and support roles." },
      { kind: "p", text: "This matters to individual teachers because unfunded awards tend to show up as larger classes, fewer TAs, and restructures. If your school is consulting on staffing changes, the [teacher redundancy calculator](/teacher-redundancy-calculator/) explains what statutory and enhanced terms would look like." },

      { kind: "h2", text: "Academies, free schools and the STPCD" },
      { kind: "p", text: "Academies and free schools are not legally required to follow the STPCD. Their funding agreements give them freedom over pay and conditions." },
      { kind: "p", text: "In practice most mirror the national framework, because departing from it makes recruitment harder and unsettles existing staff. But there is real variation: some trusts pay above the scale for shortage subjects, some have their own scales with different point values, and some have removed the Upper Pay Range threshold process entirely. Always check your own trust's pay policy against the [national pay scale tables](/teacher-pay-scale/)." },

      { kind: "h2", text: "Common misunderstandings about teacher pay rises" },
      { kind: "ul", items: [
        "**Thinking the award applies in April.** Teacher pay runs 1 September to 31 August. April is the tax year, not the pay year.",
        "**Assuming progression is automatic.** Movement up the Main Pay Range depends on satisfactory performance under your school's pay policy, and crossing to the Upper Pay Range requires a threshold application.",
        "**Expecting the headline percentage in your bank account.** After tax, NI and pension, a 3.5% gross rise is typically worth around 2.2% to 2.4% net.",
        "**Believing academies must match the award.** They usually do, but they are not obliged to.",
        "**Forgetting allowances.** TLR and SEN allowance ranges are uplifted by the award too, but your individual allowance only rises if your school applies the uplift to your specific payment.",
      ]},
    ],
    faq: [
      { question: "What is the teacher pay rise for 2026/27?", answer: "The 2026/27 STPCD award was 3.5%, applied to every point on every pay scale from 1 September 2026. On M1 in the rest of England that lifted pay from a derived £32,916 to £34,068, an increase of about £1,152." },
      { question: "When does the teacher pay rise take effect?", answer: "From 1 September each year, in line with the school year rather than the April tax year. Because the STPCD is often confirmed late, many teachers receive backdated arrears in October or November." },
      { question: "Who decides teacher pay rises?", answer: "The School Teachers' Review Body recommends an award after taking evidence from the DfE, unions and employers. The Secretary of State for Education then decides whether to accept it. The final figures are published in the STPCD, which is statutory for maintained schools." },
      { question: "Do academies have to give the same pay rise?", answer: "No. Academies and free schools set their own pay and conditions under their funding agreements. Most follow the STPCD closely because it helps recruitment and retention, but they are not legally required to." },
      { question: "Why is my pay rise less than the headline percentage?", answer: "Income tax, National Insurance and pension contributions all take a share. A 3.5% gross award is typically worth around 2.2% to 2.4% in take-home pay. If the rise pushes you into a higher pension contribution tier, the net gain is smaller again." },
      { question: "Does the pay award increase TLR payments too?", answer: "The published TLR and SEN allowance ranges are uplifted with the award. Whether your individual payment rises depends on your school applying the uplift to your specific allowance, which is set within the range by your pay policy." },
      { question: "Do I get both a pay rise and scale progression?", answer: "Yes, if you are eligible for progression. They are separate and they compound. A teacher moving from M2 to M3 in September 2026 gained about £2,278 from progression and a further £1,299 from the 3.5% award." },
      { question: "How do I find out my new salary after a pay rise?", answer: "Look up your pay point on the current scale in the pay scale tables, then check the take-home figure using the pay calculator. Your September payslip should show the new rate; if it does not, ask payroll when arrears will be processed." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ------------------------------------------------------------ 2026/27
  {
    slug: "teacher-pay-rise-2026-27",
    hub: "policy",
    title: "Teacher Pay Rise 2026/27: The 3.5% Award",
    metaTitle: "Teacher Pay Rise 2026/27 — 3.5% Award Explained",
    metaDescription:
      "The 2026/27 teacher pay award was 3.5% from 1 September 2026. See the cash increase at every pay point from M1 to U3, plus what it is worth after tax.",
    primaryKeyword: "teacher pay rise 2026",
    secondaryKeywords: [
      "teachers pay rise 2026", "teacher pay rise 2026-27", "teacher pay rise 26/27",
      "teacher pay rise 2026/27", "teacher pay award 2026", "teacher pay increase 2026",
    ],
    calculator: "pay-rise",
    intro:
      "Every pay point rose by 3.5% from 1 September 2026. This page shows exactly what that is worth in cash on each point of the main and upper ranges, what it looks like after deductions, and who gained most.",
    keyTakeaways: [
      "The award is 3.5% on every point of every scale, effective 1 September 2026.",
      "M1 in the rest of England rose by about £1,152 to £34,068; U3 rose by about £1,787 to £52,835.",
      "In take-home terms, a 3.5% gross rise is worth roughly 2.2% to 2.4% after tax, NI and pension.",
      "Because the award is a flat percentage, teachers on higher points gained more in cash.",
      "TLR and SEN allowance ranges were uplifted by the same 3.5%.",
    ],
    blocks: [
      { kind: "h2", text: "What the 2026/27 award actually is" },
      { kind: "p", text: "The STPCD 2026 applied a 3.5% uplift to every point on every teacher pay scale in England, effective from 1 September 2026. It is a flat percentage rather than a targeted or tapered award, so every teacher received the same proportional increase regardless of grade or region." },
      { kind: "p", text: "That design has a predictable consequence: in cash terms the award is worth far more at the top of the scale than the bottom. A U3 teacher gained about £635 a year more than an M1 teacher from the same 3.5%." },

      { kind: "h2", text: "Cash increase at every main and upper pay point" },
      { kind: "p", text: "These figures are for the rest of England. The 2025/26 column is derived by removing the 3.5% award from the published 2026/27 scale, so it shows the mechanics of the uplift rather than reproducing the official prior-year document." },
      { kind: "table", caption: "2026/27 pay award by point — rest of England", head: ["Point", "2025/26 (derived)", "2026/27", "Cash rise"], rows: [
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
      { kind: "p", text: "London-weighted scales rose by the same 3.5%, so the cash increases there are larger again. Inner London M1 rose to £41,728. Full regional tables are in the [teacher pay scale guide](/teacher-pay-scale/)." },

      { kind: "h2", text: "What the rise is worth after deductions" },
      { kind: "p", text: "The gross increase is not what reaches your account. For a basic-rate teacher, roughly 20% goes in income tax, 8% in National Insurance and 7.4% to 9.6% in pension contributions." },
      { kind: "table", caption: "Gross rise versus net gain, rest of England", head: ["Point", "Gross rise", "Approx. net gain", "Net per month"], rows: [
        ["M1", "+£1,152", "≈ £745", "≈ £62"],
        ["M3", "+£1,299", "≈ £822", "≈ £69"],
        ["M6", "+£1,587", "≈ £985", "≈ £82"],
        ["U3", "+£1,787", "≈ £1,110", "≈ £93"],
      ]},
      { kind: "callout", tone: "info", title: "Net figures are approximate", text: "Net gain depends on your tax code, pension tier and any student loan. A teacher repaying a Plan 2 loan loses a further 9% of the increase. Run your exact numbers in the [teacher pay calculator](/teacher-pay-calculator/)." },

      { kind: "h2", text: "The pension tier trap" },
      { kind: "p", text: "A pay rise can push you across a Teachers' Pension contribution boundary. When that happens the higher rate applies to your entire salary, not just the amount above the threshold, so a small gross rise can produce a surprisingly small net gain." },
      { kind: "p", text: "The 2026/27 award pushed M6 in the rest of England from £45,352 to £46,939, crossing the £46,158 boundary between the 8.6% and 9.6% tiers." },
      { kind: "table", caption: "M6 crossing the 9.6% tier boundary", head: ["Line", "2025/26 (derived)", "2026/27"], rows: [
        ["Gross salary", "£45,352", "£46,939"],
        ["Pension tier", "8.6%", "9.6%"],
        ["Pension contribution", "£3,900", "£4,506"],
        ["Extra pension cost", "", "+£606"],
      ]},
      { kind: "p", text: "The teacher still gains overall, and the extra contribution buys more guaranteed pension. But the net gain is noticeably smaller than for a colleague who did not cross a boundary. The mechanics are explained in the [teachers' pension guide](/teacher-pension/)." },

      { kind: "h2", text: "The award across the four England regions" },
      { kind: "p", text: "Because the award is a flat percentage, the cash value rises with the regional weighting. An inner London teacher on U3 gained £400 a year more than a colleague on the same point in the rest of England." },
      { kind: "table", caption: "Cash increase by region and point, 2026/27", head: ["Region", "M1", "M6", "U3"], rows: [
        ["Rest of England", "+£1,152", "+£1,587", "+£1,787"],
        ["London fringe", "+£1,204", "+£1,639", "+£1,837"],
        ["Outer London", "+£1,325", "+£1,767", "+£1,965"],
        ["Inner London", "+£1,411", "+£1,831", "+£2,187"],
      ]},
      { kind: "p", text: "That widening gap is deliberate policy rather than an accident of arithmetic: London weighting exists to address recruitment pressure in the capital, and a percentage award preserves its relative value. Regional tables are set out in full on the [inner London pay scale](/inner-london-teacher-pay-scale/) and [outer London pay scale](/outer-london-teacher-pay-scale/) pages." },

      { kind: "h2", text: "Part-time teachers and the award" },
      { kind: "p", text: "Part-time teachers receive the same 3.5%, applied to their pro-rated salary. The percentage is identical; the cash is scaled to the fraction worked." },
      { kind: "table", caption: "3.5% award on M3, rest of England, by fraction", head: ["Fraction", "2025/26 (derived)", "2026/27", "Cash rise"], rows: [
        ["1.0", "£37,101", "£38,400", "+£1,299"],
        ["0.8", "£29,681", "£30,720", "+£1,039"],
        ["0.6", "£22,261", "£23,040", "+£779"],
      ]},
      { kind: "p", text: "One quirk is worth knowing. Because the pension contribution tier is set by the full-time equivalent salary rather than actual pay, a part-time teacher can be pushed into a higher tier by an award even though their actual earnings remain modest. The [part-time teacher pay calculator](/part-time-teacher-pay-calculator/) shows the combined effect." },

      { kind: "h2", text: "Allowances in 2026/27" },
      { kind: "p", text: "TLR and SEN allowance ranges were uplifted by 3.5% along with the pay scales." },
      { kind: "table", caption: "STPCD allowance ranges 2026/27", head: ["Allowance", "Minimum", "Maximum"], rows: [
        ["TLR 1", "£10,530", "£17,819"],
        ["TLR 2", "£3,650", "£8,912"],
        ["TLR 3 (fixed term)", "£727", "£3,600"],
        ["SEN allowance", "£2,885", "£5,689"],
      ]},
      { kind: "callout", tone: "warn", title: "Your allowance may not have risen", text: "The published range moved up, but your individual TLR is a specific figure set by your school's pay policy within that range. Schools are not automatically required to uplift every individual allowance. If yours is unchanged, ask your pay committee to confirm the reason." },

      { kind: "h2", text: "Who gained most from the 2026/27 award" },
      { kind: "ul", items: [
        "**Teachers who also progressed a point.** Progression plus the award compounds into a double-digit increase.",
        "**Inner London teachers.** The same 3.5% on a higher base is worth more in cash.",
        "**Leadership grades.** A 3.5% award on the leadership spine is worth thousands. See the [leadership pay scale](/leadership-pay-scale/).",
        "**Teachers below the pension tier boundaries.** They kept more of the increase because their contribution rate did not change.",
      ]},

      { kind: "h2", text: "What to check on your payslip" },
      { kind: "ol", items: [
        "**The gross monthly figure** should be the new annual rate divided by 12 from September onwards.",
        "**Arrears** if the new rate was applied late. These should cover the whole period from 1 September.",
        "**Your pension tier** if the rise crossed a boundary — the deduction percentage should have changed.",
        "**Your allowances** if you hold a TLR or SEN allowance.",
        "**Your pay point** if you were also due progression. Both changes should appear.",
      ]},
    ],
    faq: [
      { question: "How much is the teacher pay rise for 2026/27?", answer: "3.5% on every pay point, effective 1 September 2026. In cash that is about £1,152 on M1 in the rest of England and about £1,787 on U3. London-weighted scales rose by the same percentage on a higher base." },
      { question: "What is M1 teacher pay in 2026/27?", answer: "£34,068 in the rest of England, £35,602 in the London fringe, £39,195 in outer London and £41,728 in inner London. All four figures include the 3.5% award applied from 1 September 2026." },
      { question: "How much extra will I actually take home?", answer: "Roughly 63% to 68% of the gross increase, depending on your pension tier and whether you repay a student loan. On M3 a £1,299 gross rise is worth about £822 a year, or £69 a month." },
      { question: "Did TLR payments go up in 2026/27?", answer: "The published TLR ranges were uplifted by 3.5%. Whether your individual payment increased depends on your school's pay policy, since your specific allowance is set within the range rather than fixed by the STPCD." },
      { question: "Why did my pension contribution jump more than my salary?", answer: "You probably crossed a contribution tier boundary. The 2026/27 award pushed M6 in the rest of England past £46,158, moving it from the 8.6% tier to the 9.6% tier. The higher rate then applies to your whole salary." },
      { question: "When will I receive my pay rise arrears?", answer: "If your school applied the new scale late, arrears are usually processed in October or November. They should cover the full period from 1 September. Check the arrears line on your payslip against the number of months owed." },
      { question: "Do teachers in Wales get the same 3.5%?", answer: "Wales sets pay through the Independent Welsh Pay Review Body, which is a separate process, though Welsh figures currently mirror the STPCD scale. Scotland and Northern Ireland negotiate separately and have their own scales." },
      { question: "Is the 2026/27 award fully funded?", answer: "Funding arrangements are set out alongside the award in the government's response to the STRB report. Where an award is only partly funded, schools have to absorb the balance from existing budgets, which can affect staffing decisions." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ------------------------------------------------------------ 2025 archive
  {
    slug: "teacher-pay-rise-2025",
    hub: "policy",
    title: "Teacher Pay Rise 2025/26 (Archive)",
    metaTitle: "Teacher Pay Rise 2025/26 — 4% Award Archive",
    metaDescription:
      "Archive of the 2025/26 teacher pay award of 4%, how it compared with the 3.5% award for 2026/27, and what both did to pay scales and take-home pay.",
    primaryKeyword: "teacher pay rise 2025",
    secondaryKeywords: [
      "teachers pay rise 2025", "teacher pay award 2025", "teacher pay rise 25/26",
      "2025 teacher pay rise", "teacher pay increase 2025",
    ],
    calculator: "none",
    intro:
      "The 2025/26 award was 4%, applied from 1 September 2025. It has since been superseded by the 3.5% award for 2026/27. This archive explains what the 2025/26 award did and how the two years compare.",
    keyTakeaways: [
      "The 2025/26 STPCD award was 4%, effective 1 September 2025.",
      "It has been superseded — current pay is governed by the 2026/27 STPCD and its 3.5% award.",
      "Awards have stepped down each year since 2023/24: 6.5%, then 5.5%, then 4%, then 3.5%.",
      "Over the two years 2025/26 and 2026/27 combined, scales rose by about 7.6% compounded.",
      "If you are checking a historic payslip or an arrears calculation, use the year that applied at the time.",
    ],
    blocks: [
      { kind: "h2", text: "The 2025/26 award in summary" },
      { kind: "p", text: "The School Teachers' Review Body recommended, and the government accepted, a 4% uplift to all pay and allowance ranges for the 2025/26 school year. It took effect on 1 September 2025 and applied to every point on every scale in England." },
      { kind: "p", text: "A notable feature was funding. The award was only partly funded by additional grant, with schools expected to meet part of the cost from existing budgets through efficiency savings. That prompted significant concern from school leaders about the impact on staffing." },
      { kind: "callout", tone: "info", title: "This page is an archive", text: "Current pay is set by the STPCD 2026/27. For the figures that apply now, see the [2026/27 pay rise guide](/teacher-pay-rise-2026-27/) and the [current pay scale tables](/teacher-pay-scale/)." },

      { kind: "h2", text: "How the recent awards compare" },
      { kind: "p", text: "Teacher pay awards have stepped down steadily since the peak of the 2022 to 2023 inflation period." },
      { kind: "table", caption: "Headline STPCD awards, 2023/24 to 2026/27", head: ["School year", "Award", "Effective from"], rows: [
        ["2023/24", "6.5%", "1 September 2023"],
        ["2024/25", "5.5%", "1 September 2024"],
        ["2025/26", "4.0%", "1 September 2025"],
        ["2026/27", "3.5%", "1 September 2026"],
      ]},
      { kind: "p", text: "Compounded, those four awards lifted the scale by just over 21%. Whether that represents a real-terms improvement depends on which inflation measure and which start date you use — a point unions and government have consistently disagreed on." },

      { kind: "h2", text: "The two-year picture: 2025/26 and 2026/27" },
      { kind: "p", text: "For a teacher who stayed on the same pay point across both years, the combined effect of 4% followed by 3.5% is a compounded increase of about 7.6%." },
      { kind: "table", caption: "Combined effect on the main and upper ranges (rest of England, derived)", head: ["Point", "Before 2025/26 award", "After 2026/27 award", "Two-year rise"], rows: [
        ["M1", "£31,650", "£34,068", "+£2,418"],
        ["M3", "£35,674", "£38,400", "+£2,726"],
        ["M6", "£43,607", "£46,939", "+£3,332"],
        ["U3", "£49,084", "£52,835", "+£3,751"],
      ]},
      { kind: "callout", tone: "warn", title: "Derived figures", text: "The starting column is derived by removing both awards from the current published scale. Treat it as illustrative of the compounding effect rather than as a reproduction of a historic STPCD table. Always use the STPCD for the relevant year when checking a historic payslip." },

      { kind: "h2", text: "What 4% was worth in cash" },
      { kind: "p", text: "A percentage award always delivers more cash at the top of the scale. Applying 4% to the derived 2024/25 figures shows the spread across the main and upper ranges." },
      { kind: "table", caption: "Indicative cash effect of the 4% award, rest of England", head: ["Point", "Before", "After", "Cash rise"], rows: [
        ["M1", "£31,650", "£32,916", "+£1,266"],
        ["M3", "£35,674", "£37,101", "+£1,427"],
        ["M6", "£43,607", "£45,352", "+£1,745"],
        ["U3", "£49,084", "£51,048", "+£1,964"],
      ]},
      { kind: "p", text: "A U3 teacher therefore gained around £698 a year more than an M1 colleague from the same award. Combined with the 3.5% that followed, the two years widened the cash gap between the bottom and top of the classroom scale by well over £1,000. Current figures are on the [teacher pay scale](/teacher-pay-scale/) page." },

      { kind: "h2", text: "Why the award year matters for arrears" },
      { kind: "p", text: "If you are checking a back-pay calculation, the award that applies is the one in force during the period being paid, not the current one. Teacher pay years run 1 September to 31 August, which does not align with the April tax year." },
      { kind: "p", text: "That creates a common source of confusion: a payslip in, say, October 2026 could contain September 2026 pay at the new rate plus arrears relating to an earlier period at the old rate, all taxed in the 2026/27 tax year." },
      { kind: "ol", items: [
        "**Identify the period** the arrears cover.",
        "**Find the award in force** during that period from the table above.",
        "**Apply the scale for that year** to your pay point at the time.",
        "**Subtract what you were actually paid** to get the gross arrears.",
        "**Remember tax is charged in the year of payment**, not the year the pay related to.",
      ]},

      { kind: "h2", text: "What changed structurally, and what did not" },
      { kind: "p", text: "Both the 2025/26 and 2026/27 awards were straightforward percentage uplifts. Neither restructured the pay framework." },
      { kind: "ul", items: [
        "**The Main Pay Range** kept six points, M1 to M6.",
        "**The Upper Pay Range** kept three points, U1 to U3, still accessed through a threshold application.",
        "**The four England regional bands** were unchanged: rest of England, fringe, outer London and inner London.",
        "**The leadership spine** kept its 43 points. See the [leadership pay scale](/leadership-pay-scale/).",
        "**Allowance structures** were unchanged, with TLR 1, TLR 2, TLR 3 and the SEN allowance all simply uplifted.",
      ]},

      { kind: "h2", text: "Why the award stepped down from 4% to 3.5%" },
      { kind: "p", text: "The direction of travel across the four most recent awards tracks two things: falling headline inflation, and a tightening of the funding envelope signalled in successive remit letters to the review body." },
      { kind: "p", text: "When inflation peaked, the case for a large award was straightforward — real-terms pay was falling quickly and recruitment was deteriorating. As inflation subsided, the review body's recommendations moderated with it. At the same time, remit letters increasingly framed affordability as a constraint, which narrows the range of recommendations the panel is realistically able to make. The mechanics of that process are set out in the [STRB explainer](/strb-pay-review-body/)." },
      { kind: "ul", items: [
        "**Inflation fell** across the period, reducing the real-terms erosion the award needed to offset.",
        "**Funding constraints tightened**, with schools expected to absorb a greater share of each award.",
        "**Recruitment pressure persisted** in shortage subjects, which is why targeted incentives grew in importance alongside the headline award.",
        "**The review body's remit narrowed**, with affordability assumptions stated more explicitly.",
      ]},

      { kind: "h2", text: "What the 2025/26 award did not change" },
      { kind: "p", text: "It is worth being clear about the limits of a percentage uplift. The 2025/26 award raised every figure but left the underlying architecture of teacher pay untouched." },
      { kind: "p", text: "Teachers still had to make a threshold application to pass M6 and access the [upper pay range](/upper-pay-range/). The four regional bands still produced the same relative gaps. And the leadership spine retained the structure described on the [leadership pay scale](/leadership-pay-scale/) page. Structural reform of any of these would require a specific recommendation and a decision to implement it, which neither the 2025/26 nor the 2026/27 round produced." },

      { kind: "h2", text: "Checking a historic payslip" },
      { kind: "p", text: "If you are reconstructing an earlier year, work from the gross annual figure for your pay point in that year and apply the tax rules for the relevant tax year. Pension contribution tiers are also revised periodically, so use the tier table for the correct year rather than the current one." },
      { kind: "p", text: "For current-year checks, the [teacher pay calculator](/teacher-pay-calculator/) applies the 2026/27 scales and tax rules. For an overview of how pay is structured across the UK, see [teacher pay in the UK](/teacher-pay-uk/)." },
    ],
    faq: [
      { question: "What was the teacher pay rise for 2025/26?", answer: "4%, applied to all pay and allowance ranges from 1 September 2025. It was partly funded by additional grant, with schools expected to meet part of the cost from existing budgets." },
      { question: "Is the 2025/26 award still in force?", answer: "No. It was superseded by the 2026/27 STPCD, which applied a further 3.5% from 1 September 2026. Current pay should be checked against the 2026/27 scales." },
      { question: "How much have teacher pay scales risen since 2023?", answer: "Compounding the four awards of 6.5%, 5.5%, 4% and 3.5% gives an increase of just over 21% between the 2022/23 and 2026/27 scales." },
      { question: "Which award applies to my arrears payment?", answer: "The award in force during the period the arrears cover, not the current one. Teacher pay years run 1 September to 31 August. Tax is charged in the year the payment is made, which may be a different year." },
      { question: "Did the 2025/26 award change the pay structure?", answer: "No. It was a straight percentage uplift. The Main Pay Range kept six points, the Upper Pay Range three, the four England regional bands were unchanged and the leadership spine kept its 43 points." },
      { question: "Were teacher pay rises above inflation?", answer: "That depends on the inflation measure and the comparison period chosen, which is precisely why unions and government reached different conclusions. Against CPI in the same school year, the recent awards were broadly around or slightly above inflation; measured from 2010 the real-terms picture is considerably less favourable." },
      { question: "Where can I find the official 2025/26 pay scales?", answer: "In the STPCD 2025, published by the Department for Education on GOV.UK. Historic versions of the document remain available there and are the authoritative source for any historic pay check." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ------------------------------------------------------------ four nations
  {
    slug: "teacher-pay-uk",
    hub: "policy",
    title: "Teacher Pay in the UK: Four Systems",
    metaTitle: "Teacher Pay UK 2026/27 — How the Four Nations Differ",
    metaDescription:
      "Teacher pay is set separately in England, Wales, Scotland and Northern Ireland. Compare the four pay systems, their scales and starting salaries for 2026/27.",
    primaryKeyword: "teacher pay uk",
    secondaryKeywords: [
      "teachers pay uk", "uk teacher pay", "teacher pay england wales scotland",
      "teacher pay four nations", "how is teacher pay set uk",
    ],
    calculator: "take-home",
    intro:
      "There is no single UK teacher pay system. England, Wales, Scotland and Northern Ireland each set pay through different bodies, with different scale structures and different starting salaries. This guide compares all four.",
    keyTakeaways: [
      "Each nation sets teacher pay separately: STRB in England, IWPRB in Wales, SNCT in Scotland, TNC in Northern Ireland.",
      "Scotland has a genuinely different structure with a shorter main grade and no Upper Pay Range.",
      "Wales currently mirrors the STPCD figures but runs its own review process.",
      "Northern Ireland pay sits below the other three nations at most points.",
      "Scottish teachers also pay Scottish income tax rates, which changes take-home pay independently of the salary.",
    ],
    blocks: [
      { kind: "h2", text: "Four nations, four pay systems" },
      { kind: "p", text: "Education is devolved across the UK, and so is teacher pay. Each nation has its own machinery for setting it, and the outcomes have diverged." },
      { kind: "table", caption: "How teacher pay is set in each UK nation", head: ["Nation", "Body", "Mechanism", "Structure"], rows: [
        ["England", "School Teachers' Review Body (STRB)", "Independent review body, minister decides", "M1–M6, U1–U3, four regional bands"],
        ["Wales", "Independent Welsh Pay Review Body (IWPRB)", "Independent review body, Welsh minister decides", "Mirrors STPCD structure"],
        ["Scotland", "Scottish Negotiating Committee for Teachers (SNCT)", "Tripartite collective bargaining", "Main grade plus Chartered Teacher route"],
        ["Northern Ireland", "Teachers' Negotiating Committee (TNC)", "Collective bargaining", "Own scale, similar shape to STPCD"],
      ]},
      { kind: "p", text: "The key structural difference is Scotland, which negotiates rather than uses a review body, and which has no Upper Pay Range. Full tables for each are in the [teacher pay scale guide](/teacher-pay-scale/)." },

      { kind: "h2", text: "Starting salaries compared" },
      { kind: "p", text: "The first point of the main scale is the fairest comparison across nations, since it is the entry rate for a qualified teacher." },
      { kind: "table", caption: "Main scale point 1, 2026/27", head: ["Nation / region", "Starting salary"], rows: [
        ["Inner London", "£41,728"],
        ["Outer London", "£39,195"],
        ["London fringe", "£35,602"],
        ["Scotland", "£34,539"],
        ["England (rest)", "£34,068"],
        ["Wales", "£34,068"],
        ["Northern Ireland", "£32,188"],
      ]},
      { kind: "p", text: "Scotland's starting salary is slightly ahead of the rest of England. Northern Ireland sits lowest, around £1,880 below England outside London." },

      { kind: "h2", text: "Top of the classroom scale compared" },
      { kind: "p", text: "The ceiling for a classroom teacher without leadership responsibility tells a different story, because the routes differ." },
      { kind: "table", caption: "Top classroom rate, 2026/27", head: ["Nation / region", "Top of scale", "Route"], rows: [
        ["Inner London", "£64,683", "U3"],
        ["Outer London", "£58,119", "U3"],
        ["London fringe", "£54,327", "U3"],
        ["England (rest)", "£52,835", "U3"],
        ["Wales", "£52,835", "U3"],
        ["Scotland", "£52,539", "Chartered Teacher"],
        ["Northern Ireland", "£50,085", "UPS3"],
      ]},
      { kind: "callout", tone: "info", title: "Scotland reaches the top faster", text: "Scottish teachers progress through six main grade points to £48,516 without a threshold application, then can pursue the Chartered Teacher route. In England, reaching U3 requires crossing the Upper Pay Range threshold, which is an application process rather than automatic progression." },

      { kind: "h2", text: "Progression: the biggest practical difference" },
      { kind: "h3", text: "England and Wales" },
      { kind: "p", text: "Six main range points, then a threshold application to access the three-point Upper Pay Range. Progression on the main range depends on satisfactory performance under the school's pay policy, and the threshold application requires evidence of sustained high performance. The mechanics are covered in the [upper pay range guide](/upper-pay-range/)." },
      { kind: "h3", text: "Scotland" },
      { kind: "p", text: "Six main grade points with annual progression subject to satisfactory service, reaching the maximum in six years. There is no threshold application and no Upper Pay Range. Further progression means moving into the Chartered Teacher route or into promoted posts." },
      { kind: "h3", text: "Northern Ireland" },
      { kind: "p", text: "A structure similar to England with a main scale and an upper scale, but with its own point values negotiated through the Teachers' Negotiating Committee." },

      { kind: "h2", text: "Tax makes Scotland different again" },
      { kind: "p", text: "Salary is only half the picture. Scotland sets its own income tax rates and bands, with six rates rather than three. For most teachers the practical effect is a slightly higher tax bill than an equivalent salary elsewhere in the UK." },
      { kind: "table", caption: "Income tax structure, 2026/27", head: ["Regime", "Number of rates", "Lowest rate", "Highest rate"], rows: [
        ["England, Wales & Northern Ireland", "3", "20%", "45%"],
        ["Scotland", "6", "19%", "48%"],
      ]},
      { kind: "p", text: "The [teacher pay calculator](/teacher-pay-calculator/) applies Scottish rates automatically when you select Scotland, so you can compare like for like on take-home rather than gross." },

      { kind: "h2", text: "Pensions across the nations" },
      { kind: "p", text: "England and Wales share the Teachers' Pension Scheme. Scotland has the Scottish Teachers' Pension Scheme and Northern Ireland has its own arrangement. All three are career average defined benefit schemes with broadly similar design, and service generally transfers between them." },
      { kind: "p", text: "That matters if you move nation mid-career. Transfers are usually possible but the terms depend on the schemes involved, so get a written quotation before committing. See the [teachers' pension guide](/teacher-pension/) for how CARE benefits build up." },

      { kind: "h2", text: "Allowances and responsibility payments" },
      { kind: "p", text: "All four nations pay something extra for responsibility beyond classroom teaching, but the structures differ enough that direct comparison is difficult." },
      { kind: "table", caption: "Responsibility payment structures", head: ["Nation", "Structure"], rows: [
        ["England", "TLR 1, TLR 2, TLR 3 and a separate SEN allowance, each with a published range"],
        ["Wales", "Mirrors the STPCD TLR and SEN structure"],
        ["Scotland", "Promoted posts with their own salary points rather than allowances added to a classroom salary"],
        ["Northern Ireland", "TLR-style allowances negotiated separately through the TNC"],
      ]},
      { kind: "p", text: "Scotland's approach is structurally different and often clearer: rather than a classroom salary plus an allowance, a principal teacher holds a distinct post with its own scale. In England the same responsibility is expressed as a pay point plus a TLR, which means two teachers doing comparable jobs in different schools can be paid quite differently depending on how each school's pay policy sets the allowance within the published range." },

      { kind: "h2", text: "Moving between the four nations" },
      { kind: "p", text: "Teachers move across the UK regularly, and the practical obstacles are usually about qualification recognition and pay point placement rather than pay levels." },
      { kind: "ol", items: [
        "**Check qualification recognition.** Qualified teacher status is generally recognised across the UK, but registration bodies differ — Scotland requires registration with the General Teaching Council for Scotland.",
        "**Expect pay point negotiation.** There is no automatic mapping between scales. Your new employer decides your starting point, and experience elsewhere in the UK should be recognised but the specific point is negotiable.",
        "**Get a pension transfer quotation** before you move. Service generally transfers, but the terms depend on the schemes involved.",
        "**Factor in the tax difference** if moving to or from Scotland, since Scottish rates apply based on where you live rather than where you work.",
        "**Compare take-home, not gross.** Use the [teacher pay calculator](/teacher-pay-calculator/) with the correct nation selected.",
      ]},

      { kind: "h2", text: "Which nation pays best?" },
      { kind: "p", text: "On gross salary alone, inner London is far ahead of everywhere else, but housing costs absorb most of the difference. Excluding London, the ranking is Scotland marginally ahead at entry, England and Wales level, and Northern Ireland behind." },
      { kind: "p", text: "The more useful comparison is career-long. Scotland reaches its classroom maximum in six years without an application process, whereas an English teacher needs a successful threshold application to pass £46,939. For a teacher who does not want a leadership role, that is a meaningful structural advantage. Compare typical earnings by role in the [UK teacher salary guide](/teacher-salary-uk/)." },
    ],
    faq: [
      { question: "Is teacher pay the same across the UK?", answer: "No. England, Wales, Scotland and Northern Ireland each set teacher pay separately through different bodies. Starting salaries in 2026/27 range from £32,188 in Northern Ireland to £34,539 in Scotland, before London weighting is considered." },
      { question: "Which UK nation pays teachers the most?", answer: "Inner London pays most in cash terms at £41,728 to start and £64,683 at the top of the classroom scale. Outside London, Scotland has a slightly higher starting salary than England and Wales, and Northern Ireland is lowest." },
      { question: "Does Wales use the same pay scale as England?", answer: "Welsh figures currently mirror the STPCD scale, but Wales sets pay through its own Independent Welsh Pay Review Body. The two systems can diverge in future because the decisions are made separately." },
      { question: "Why does Scotland not have an Upper Pay Range?", answer: "Scotland's structure reaches its main grade maximum after six years of annual progression, without a threshold application. Further classroom progression is through the Chartered Teacher route instead of an upper scale." },
      { question: "Do Scottish teachers pay more tax?", answer: "Usually a little more. Scotland has six income tax rates from 19% to 48%, against three from 20% to 45% elsewhere in the UK. For most teacher salaries the difference is modest but it does reduce the advantage of Scotland's slightly higher starting salary." },
      { question: "Can I transfer my teacher pension between UK nations?", answer: "Generally yes. England and Wales share the Teachers' Pension Scheme, while Scotland and Northern Ireland run their own schemes with similar career average designs. Transfers are usually possible, but request a written quotation before you commit." },
      { question: "Which nation reaches the top of the pay scale fastest?", answer: "Scotland. Six annual progression steps take a teacher to £48,516 without an application process. In England a teacher must complete six main range points and then pass the Upper Pay Range threshold to progress further." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ------------------------------------------------------------ maternity
  {
    slug: "teacher-maternity-pay",
    hub: "policy",
    title: "Teacher Maternity Pay Explained",
    metaTitle: "Teacher Maternity Pay 2026/27 — Burgundy Book Guide",
    metaDescription:
      "Teacher maternity pay under the Burgundy Book: 4 weeks full pay, 2 weeks at 90%, 12 weeks half pay plus SMP, then 21 weeks SMP, plus the return-to-work rule.",
    primaryKeyword: "teacher maternity pay",
    secondaryKeywords: [
      "teachers maternity pay", "maternity pay teachers uk", "teacher maternity leave pay",
      "burgundy book maternity pay", "teacher maternity pay calculator", "school teacher maternity pay",
    ],
    calculator: "none",
    intro:
      "Most teachers get considerably more than statutory maternity pay. The Burgundy Book sets out an occupational scheme worth 4 weeks at full pay, 2 weeks at 90%, 12 weeks at half pay plus SMP, then 21 weeks of SMP. This guide explains each stage and the return-to-work condition attached to it.",
    keyTakeaways: [
      "Teachers with a year's service usually qualify for occupational maternity pay, which is far more generous than SMP alone.",
      "The Burgundy Book pattern is 4 weeks full pay, 2 weeks at 90%, 12 weeks half pay plus SMP, then 21 weeks SMP.",
      "The 12 weeks of half pay are conditional on returning to work for at least 13 weeks, or they become repayable.",
      "You keep building Teachers' Pension benefits on the pay you actually receive during maternity leave.",
      "Academies are not bound by the Burgundy Book, so check your own contract.",
    ],
    blocks: [
      { kind: "h2", text: "Two schemes, one leave period" },
      { kind: "p", text: "Teacher maternity pay comes from two overlapping sources. The statutory scheme applies to almost all employees in the UK. The occupational scheme, set out in the Burgundy Book, is the teacher-specific enhancement layered on top." },
      { kind: "p", text: "The Burgundy Book — formally the Conditions of Service for School Teachers in England and Wales — is a collective agreement between local authority employers and the teaching unions. Maintained schools follow it. Academies and independent schools are not bound by it, though many mirror it." },
      { kind: "callout", tone: "warn", title: "Check your contract first", text: "If you work in an academy or free school, your maternity terms come from your own contract, not the Burgundy Book. Some trusts match it exactly, some offer more, some offer statutory only. Ask HR for the written policy before you plan your finances." },

      { kind: "h2", text: "Who qualifies for occupational maternity pay" },
      { kind: "p", text: "To receive the full Burgundy Book package you normally need at least one year of continuous service with one or more local authorities at the eleventh week before the expected week of childbirth." },
      { kind: "ul", items: [
        "**At least one year's continuous service** at the 11th week before your expected week of childbirth.",
        "**Continuity can span employers** where service is with local authorities covered by the agreement.",
        "**Less than a year's service** means you fall back on Statutory Maternity Pay if you meet its separate qualifying tests.",
        "**Part-time teachers qualify** on the same basis, with pay calculated on their actual salary.",
      ]},

      { kind: "h2", text: "The Burgundy Book maternity pay pattern" },
      { kind: "p", text: "The occupational scheme runs for 39 paid weeks in four stages." },
      { kind: "table", caption: "Teacher occupational maternity pay, Burgundy Book", head: ["Stage", "Weeks", "Pay", "Conditional?"], rows: [
        ["1", "First 4 weeks", "Full pay (less any SMP)", "No"],
        ["2", "Next 2 weeks", "90% of average weekly earnings", "No"],
        ["3", "Next 12 weeks", "Half pay plus SMP", "Yes — return-to-work rule"],
        ["4", "Next 21 weeks", "SMP standard rate only", "No"],
        ["—", "Final 13 weeks", "Unpaid", "—"],
      ]},
      { kind: "p", text: "Maternity leave itself can run to 52 weeks. Only the first 39 are paid; the last 13 are unpaid. During stage 3 the combined half pay plus SMP must not exceed your normal full pay — where it would, the occupational element is reduced so the total equals full pay." },

      { kind: "h2", text: "The 13-week return-to-work condition" },
      { kind: "p", text: "This is the part that causes the most difficulty, and it applies only to the 12 weeks of half pay in stage 3." },
      { kind: "p", text: "Those 12 weeks are paid on the understanding that you return to work as a teacher for at least 13 weeks after your maternity leave ends. If you do not return, or you return and leave before completing 13 weeks, the half-pay element becomes repayable. The first 6 weeks and the SMP weeks are never repayable." },
      { kind: "table", caption: "What is repayable if you do not return", head: ["Element", "Repayable?"], rows: [
        ["4 weeks full pay", "No"],
        ["2 weeks at 90%", "No"],
        ["12 weeks half pay (occupational element)", "Yes"],
        ["SMP throughout", "No"],
      ]},
      { kind: "callout", tone: "tip", title: "Part-time return counts", text: "The 13 weeks is about returning to teaching service, not about returning full time. Coming back on a reduced fraction normally satisfies the condition. If you are considering that, the [part-time teacher pay calculator](/part-time-teacher-pay-calculator/) shows what different fractions pay." },

      { kind: "h2", text: "Statutory Maternity Pay in detail" },
      { kind: "p", text: "SMP runs for 39 weeks and sits underneath the occupational scheme. To qualify you need at least 26 weeks' continuous service by the qualifying week and average weekly earnings at or above the lower earnings limit." },
      { kind: "ul", items: [
        "**First 6 weeks:** 90% of your average weekly earnings, with no cap.",
        "**Remaining 33 weeks:** the standard weekly rate, or 90% of average weekly earnings if that is lower. The standard rate for 2026/27 is £194.32 a week.",
        "**Tax and NI apply** to SMP in the normal way.",
        "**Pension contributions continue** on the pay you actually receive.",
      ]},
      { kind: "p", text: "Because the standard SMP rate is far below a teacher's normal pay, the occupational enhancement in the first 18 weeks is where nearly all the value sits. Always confirm the current statutory rate on GOV.UK before budgeting, as it is reviewed annually." },

      { kind: "h2", text: "What happens to your pension" },
      { kind: "p", text: "You continue to build Teachers' Pension benefits during paid maternity leave, and your contributions are taken from the pay you actually receive rather than your normal salary. Your employer continues to pay its 28.8% contribution on your notional full pay." },
      { kind: "p", text: "During the unpaid final 13 weeks you do not build benefits by default, but you can usually elect to pay contributions to cover the gap. Whether that is worth doing depends on how close you are to retirement and how the missing accrual affects your projection — model it with the [teachers' pension calculator](/teacher-pension-calculator/)." },

      { kind: "h2", text: "Maternity pay and your pay point" },
      { kind: "p", text: "Maternity leave does not stop your pay point progressing. If you would have moved up the scale on 1 September while on leave, that progression should still apply, and your maternity pay should be recalculated from that date onwards where the higher rate is relevant." },
      { kind: "p", text: "The same is true of the annual pay award. A teacher on maternity leave across a 1 September is entitled to the uplifted rate for the remainder of their leave. If your pay did not change in September while you were on leave, query it — see the [pay rise guide](/teacher-pay-rise/) for the dates involved and the [teacher pay scale tables](/teacher-pay-scale/) for the figures that should apply." },

      { kind: "h2", text: "Practical planning: the cash-flow shape" },
      { kind: "p", text: "The hardest part financially is not the total but the shape. Pay is close to normal for six weeks, drops sharply for twelve, then falls to statutory only." },
      { kind: "p", text: "For a teacher on M4 in the rest of England earning £40,940, monthly gross runs roughly like this: full pay for the first month, a mix in the second, then around half pay plus SMP through the middle of the leave, then about £842 a month of SMP alone." },
      { kind: "ol", items: [
        "**Build a buffer before stage 3 begins.** The drop from 90% to half pay is the largest single step down.",
        "**Check whether your school pays leave in equal instalments.** Some smooth the payments across the leave period, which changes the cash-flow profile considerably.",
        "**Remember the summer.** Leave that spans August interacts with the way teacher pay is spread over twelve months.",
        "**Factor in childcare costs** starting before you return, since many settings require a deposit and notice period.",
        "**Use the [teacher budget planner](/teacher-budget-planner/)** to map the months against your fixed outgoings.",
      ]},

      { kind: "h2", text: "Keeping in touch days and returning" },
      { kind: "p", text: "You can work up to ten Keeping in Touch days during maternity leave without ending your leave or losing SMP. They are optional on both sides — neither you nor the school can insist. Pay for KIT days is a matter for agreement with your employer, and many schools pay at normal daily rate." },
      { kind: "p", text: "When you return, you have the right to go back to the same job if your leave was 26 weeks or less. After that, you are entitled to the same job unless it is not reasonably practicable, in which case a suitable alternative on no less favourable terms. Requests to return part time should be handled through the flexible working procedure." },
    ],
    faq: [
      { question: "How much maternity pay do teachers get?", answer: "Teachers with at least a year's service usually receive 4 weeks at full pay, 2 weeks at 90% of average weekly earnings, 12 weeks at half pay plus SMP, and then 21 weeks of SMP at the standard rate. That is 39 paid weeks in total, with up to 13 further unpaid weeks available." },
      { question: "Do I have to pay back teacher maternity pay if I do not return?", answer: "Only the occupational half-pay element covering weeks 7 to 18. The first 6 weeks and all SMP are never repayable. The half pay becomes repayable if you do not return to teaching for at least 13 weeks after your leave ends." },
      { question: "Does returning part time count towards the 13 weeks?", answer: "Yes. The condition is about returning to teaching service, not about returning to your previous hours. Coming back on a reduced fraction normally satisfies it, though you should confirm the position in writing with your employer." },
      { question: "How long do I need to have worked to get teacher maternity pay?", answer: "For the full Burgundy Book package, at least one year of continuous service at the eleventh week before your expected week of childbirth. For SMP alone, at least 26 weeks' continuous service by the qualifying week plus average earnings at or above the lower earnings limit." },
      { question: "Do academies have to pay Burgundy Book maternity pay?", answer: "No. Academies and free schools set their own terms through individual contracts. Many mirror the Burgundy Book, some improve on it and some offer statutory minimums only. Ask HR for the written maternity policy." },
      { question: "Does maternity leave affect my teachers' pension?", answer: "During paid leave you continue to build benefits, paying contributions on the pay you actually receive while your employer contributes on your notional full pay. During the unpaid final 13 weeks accrual stops by default, but you can usually elect to pay contributions to cover the gap." },
      { question: "Can I take Keeping in Touch days as a teacher?", answer: "Yes, up to ten during maternity leave without ending your leave or affecting SMP. They are voluntary for both you and the school, and pay for them is a matter for agreement with your employer." },
      { question: "How is teacher maternity pay calculated for part-time staff?", answer: "On your actual salary rather than the full-time equivalent. A part-time teacher qualifies on the same service basis and receives the same four-stage pattern, calculated against their own pay." },
    ],
    sources: MATERNITY_SOURCES,
    updated: UPDATED,
  },

  // ------------------------------------------------------------ sick pay
  {
    slug: "teacher-sick-pay",
    hub: "policy",
    title: "Teacher Sick Pay Entitlement",
    metaTitle: "Teacher Sick Pay 2026/27 — Burgundy Book Entitlement",
    metaDescription:
      "Teacher sick pay under the Burgundy Book rises with service, from 25 days full pay in year one to 100 days full pay and 100 days half pay after four years.",
    primaryKeyword: "teacher sick pay",
    secondaryKeywords: [
      "teachers sick pay", "teacher sick pay entitlement", "burgundy book sick pay",
      "sick pay for teachers uk", "teacher sickness absence pay", "how long do teachers get sick pay",
    ],
    calculator: "none",
    intro:
      "Teacher sick pay is service-related and considerably better than the statutory minimum. Under the Burgundy Book it climbs from 25 working days at full pay in your first year to 100 days full pay plus 100 days half pay from your fourth year onwards.",
    keyTakeaways: [
      "Sick pay entitlement rises with length of service over your first four years.",
      "From year four you are entitled to 100 working days at full pay and 100 at half pay.",
      "Entitlement is counted over a rolling twelve-month period, not per absence.",
      "Half pay plus Statutory Sick Pay must not exceed your normal full pay.",
      "Academies set their own sick pay terms, though most follow the Burgundy Book pattern.",
    ],
    blocks: [
      { kind: "h2", text: "The Burgundy Book sick pay ladder" },
      { kind: "p", text: "Teacher sick pay is set out in the Conditions of Service for School Teachers in England and Wales, universally known as the Burgundy Book. Entitlement is expressed in working days and increases with completed service." },
      { kind: "table", caption: "Occupational sick pay entitlement by length of service", head: ["Service", "Full pay", "Half pay"], rows: [
        ["During the first year", "25 working days", "50 working days (after 4 months' service)"],
        ["During the second year", "50 working days", "50 working days"],
        ["During the third year", "75 working days", "75 working days"],
        ["Fourth and subsequent years", "100 working days", "100 working days"],
      ]},
      { kind: "p", text: "At the top of the ladder that is 200 working days of paid sickness absence, which is roughly a full school year given 195 school days. It is one of the more generous occupational sick pay schemes in the public sector." },
      { kind: "callout", tone: "info", title: "Working days, not calendar days", text: "Entitlement is counted in working days. School holidays do not consume your entitlement, though a continuous absence that spans a holiday does continue as a single period of sickness for other purposes." },

      { kind: "h2", text: "How the rolling year works" },
      { kind: "p", text: "Your entitlement is not reset by each new absence. It is assessed against the total sickness absence you have had in the preceding twelve months, counted on a rolling basis." },
      { kind: "p", text: "That means a teacher who has already taken 60 days of sick leave in the last year, and who is in their fourth year or beyond, has 40 days of full pay left rather than a fresh 100. Schools calculate this at the point each absence begins." },
      { kind: "ol", items: [
        "**Identify your service band** from the table above.",
        "**Count the working days of sickness absence** in the twelve months immediately before the current absence started.",
        "**Subtract that from your full-pay entitlement** to find what remains at full pay.",
        "**Once full pay is exhausted**, the half-pay entitlement begins, calculated the same way.",
        "**When both are exhausted**, pay stops, though Statutory Sick Pay may still be payable if you have not used your 28 weeks.",
      ]},

      { kind: "h2", text: "Half pay and Statutory Sick Pay together" },
      { kind: "p", text: "When you move onto half pay, Statutory Sick Pay is usually payable alongside it. The two are added together, but the combined total must not exceed your normal full pay. Where it would, the occupational element is reduced so that the total equals full pay rather than exceeding it." },
      { kind: "p", text: "SSP itself runs for a maximum of 28 weeks in a period of incapacity and is paid at a flat weekly rate, so on a teacher's salary it makes only a modest difference to the half-pay figure." },

      { kind: "h2", text: "What half pay actually means for your budget" },
      { kind: "p", text: "Half pay is a sharp drop, and because deductions do not halve proportionally, the effect on take-home is not exactly half." },
      { kind: "table", caption: "Full pay versus half pay, rest of England 2026/27, in pension", head: ["Point", "Full annual", "Full monthly take-home", "Half annual", "Approx. half-pay monthly take-home"], rows: [
        ["M1", "£34,068", "£2,169", "£17,034", "£1,244"],
        ["M3", "£38,400", "£2,377", "£19,200", "£1,378"],
        ["M6", "£46,939", "£2,809", "£23,470", "£1,646"],
        ["U3", "£52,835", "£3,138", "£26,418", "£1,829"],
      ]},
      { kind: "callout", tone: "tip", title: "Take-home falls by less than half", text: "Because the personal allowance and the National Insurance threshold are fixed amounts, a teacher on half pay keeps a higher percentage of it. On M3 half pay is 50% of gross but about 58% of normal take-home. Model your own position with the [teacher pay calculator](/teacher-pay-calculator/)." },

      { kind: "h2", text: "Pension while you are off sick" },
      { kind: "p", text: "During full-pay sickness absence your pension builds up exactly as normal. During half pay you continue to build benefits, and importantly the Teachers' Pension Scheme treats reduced-pay sickness absence favourably: your accrual is generally based on the pay you would have received rather than the reduced amount." },
      { kind: "p", text: "During unpaid sickness absence, accrual stops unless you elect to pay contributions to cover the period. If you are approaching retirement, a long unpaid absence can matter more than it first appears — see the [teachers' pension guide](/teacher-pension/) for how CARE accrual works year by year." },

      { kind: "h2", text: "Long-term absence and ill-health retirement" },
      { kind: "p", text: "If absence looks likely to be permanent, ill-health retirement may become relevant. The Teachers' Pension Scheme has two tiers, depending on whether you are judged permanently unable to teach or permanently unable to undertake any gainful employment." },
      { kind: "p", text: "This is a separate process from sick pay and involves medical evidence assessed by the scheme rather than by your school. Applications can be made while still employed or after leaving. If you are in this position, take union advice early, because the timing of an application relative to leaving service can materially affect the outcome." },

      { kind: "h2", text: "Absence that is not ordinary sickness" },
      { kind: "p", text: "Several kinds of absence are treated separately from the sick pay ladder, and conflating them costs teachers entitlement." },
      { kind: "ul", items: [
        "**Pregnancy-related illness** in the four weeks before the expected week of childbirth triggers the start of maternity leave rather than consuming sick pay. See [teacher maternity pay](/teacher-maternity-pay/).",
        "**Injury sustained at work** may fall under separate injury allowance provisions rather than the ordinary sick pay ladder.",
        "**Disability-related absence** may require reasonable adjustments under the Equality Act, which can include discounting some absence from triggers.",
        "**Medical and dental appointments** should generally not be recorded as sickness absence where they can be arranged outside directed time.",
      ]},
      { kind: "p", text: "If a long absence is affecting your financial position, model the half-pay scenario against your outgoings using the [teacher budget planner](/teacher-budget-planner/) before it arrives rather than after." },

      { kind: "h2", text: "Common questions schools get wrong" },
      { kind: "ul", items: [
        "**Counting calendar days instead of working days.** Entitlement is in working days.",
        "**Resetting entitlement each September.** It is a rolling twelve-month calculation, not a school-year one.",
        "**Forgetting the four-month rule in year one.** Half pay in the first year only becomes available after four months' service.",
        "**Paying half pay plus SSP above full pay.** The combined figure is capped at normal full pay.",
        "**Treating pregnancy-related absence as ordinary sickness.** Pregnancy-related absence in the last four weeks before the expected week of childbirth triggers the start of maternity leave — see [teacher maternity pay](/teacher-maternity-pay/).",
      ]},
    ],
    faq: [
      { question: "How much sick pay do teachers get?", answer: "It depends on service. In the first year it is 25 working days at full pay and, after four months' service, 50 at half pay. This rises to 50 and 50 in year two, 75 and 75 in year three, and 100 working days full pay plus 100 half pay from the fourth year onwards." },
      { question: "Is teacher sick pay counted per absence or per year?", answer: "Per rolling twelve-month period. Your entitlement at the start of an absence is reduced by the sickness absence you have already taken in the previous twelve months, so it does not reset with each new episode." },
      { question: "Do school holidays count against sick pay entitlement?", answer: "No. Entitlement is counted in working days, so holidays do not consume it. A continuous absence spanning a holiday still counts as one period of sickness for other purposes such as medical certification." },
      { question: "What happens when teacher sick pay runs out?", answer: "Once both full pay and half pay are exhausted, occupational sick pay stops. Statutory Sick Pay may still be payable if you have not used the 28-week maximum. At that stage your school will normally begin a formal capability or ill-health process." },
      { question: "Do teachers get Statutory Sick Pay as well as half pay?", answer: "Usually yes, but the two combined cannot exceed your normal full pay. Where they would, the occupational element is reduced so the total equals full pay." },
      { question: "Does sick leave affect my teachers' pension?", answer: "Full-pay absence has no effect. During half pay you continue to build benefits, and the scheme generally bases accrual on the pay you would have received rather than the reduced amount. Unpaid absence stops accrual unless you elect to pay contributions." },
      { question: "Do academies follow Burgundy Book sick pay?", answer: "They are not required to. Academies and free schools set their own terms contractually. Most follow the Burgundy Book pattern because it aids recruitment, but you should check your own contract and staff handbook." },
      { question: "How much is half pay for a teacher on M3?", answer: "Half of £38,400 is £19,200 gross. After deductions that is roughly £1,378 a month, against about £2,377 on full pay. Take-home falls by less than half because the personal allowance and NI threshold are fixed amounts." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ------------------------------------------------------------ STRB
  {
    slug: "strb-pay-review-body",
    hub: "policy",
    title: "The STRB: School Teachers' Review Body",
    metaTitle: "STRB Explained — School Teachers' Review Body",
    metaDescription:
      "What the School Teachers' Review Body is, how the annual teacher pay round works from remit letter to STPCD, and how teachers and unions can influence it.",
    primaryKeyword: "strb",
    secondaryKeywords: [
      "school teachers review body", "strb report", "strb pay recommendation",
      "teacher pay review body", "strb remit letter", "how is teacher pay decided",
    ],
    calculator: "none",
    intro:
      "The School Teachers' Review Body is the independent panel that recommends teacher pay awards in England each year. It cannot set pay itself — the Secretary of State decides — but its report shapes the outcome and is the main formal route through which evidence reaches ministers.",
    keyTakeaways: [
      "The STRB is an advisory body created by the School Teachers' Pay and Conditions Act 1991.",
      "It recommends; the Secretary of State for Education decides and can depart from the recommendation.",
      "The annual cycle runs from an autumn remit letter to an STPCD effective the following 1 September.",
      "It covers England only. Wales, Scotland and Northern Ireland have their own arrangements.",
      "Unions, employers and individuals can submit evidence, and the reports are published.",
    ],
    blocks: [
      { kind: "h2", text: "What the STRB is" },
      { kind: "p", text: "The School Teachers' Review Body is an independent panel established under the School Teachers' Pay and Conditions Act 1991. Its members are appointed by the Secretary of State and typically bring backgrounds in economics, human resources, industrial relations and education." },
      { kind: "p", text: "It exists because teacher pay in England is not collectively bargained. Instead of unions and employers negotiating a settlement, both sides submit evidence to an independent panel, which then recommends to government. The model is shared with other public sector workforces including the NHS, police and armed forces." },
      { kind: "table", caption: "What the STRB can and cannot do", head: ["Can", "Cannot"], rows: [
        ["Recommend pay uplifts to scales and allowances", "Set pay directly"],
        ["Recommend structural changes to pay ranges", "Amend the STPCD itself"],
        ["Comment on recruitment, retention and workload", "Compel the government to act"],
        ["Take and publish evidence", "Negotiate a settlement with unions"],
      ]},

      { kind: "h2", text: "The annual pay round in detail" },
      { kind: "p", text: "The cycle is fixed and runs roughly a year from start to implementation." },
      { kind: "table", caption: "The STRB annual cycle", head: ["Stage", "Typical timing", "What happens"], rows: [
        ["Remit letter", "Autumn", "Secretary of State sets the questions and any constraints"],
        ["Written evidence", "December to January", "DfE, unions and employer bodies submit"],
        ["Oral evidence", "Late winter", "Parties are questioned by the panel"],
        ["Report submitted", "Spring", "Recommendations go to the Secretary of State, not yet public"],
        ["Government response", "Summer", "Report published alongside the decision"],
        ["Statutory consultation", "Summer", "Draft STPCD circulated for comment"],
        ["STPCD published", "Late summer", "Final figures confirmed"],
        ["Award in force", "1 September", "New scales apply"],
      ]},
      { kind: "callout", tone: "warn", title: "The timetable frequently slips", text: "Reports have often been published later than planned, leaving schools setting budgets without knowing the pay award and payroll teams unable to implement it by September. Backdated arrears are a routine consequence — see [how pay awards work](/teacher-pay-rise/)." },

      { kind: "h2", text: "The remit letter is the most important document" },
      { kind: "p", text: "The remit letter sets the boundaries of the entire exercise. It tells the STRB what to consider, and crucially it usually signals what the government believes is affordable." },
      { kind: "p", text: "Where a remit letter states an affordability assumption, the panel is being asked to work within it. That is why unions scrutinise remit letters so closely: a constrained remit narrows the range of plausible recommendations long before any evidence is heard." },
      { kind: "ul", items: [
        "**Scope** — which grades and allowances are in play.",
        "**Affordability guidance** — what the government considers deliverable within existing budgets.",
        "**Specific questions** — for example on recruitment in shortage subjects or on starting salaries.",
        "**Timetable** — when the report is expected.",
      ]},

      { kind: "h2", text: "What evidence the panel considers" },
      { kind: "p", text: "The STRB weighs a standard set of factors, and its reports work systematically through them." },
      { kind: "ul", items: [
        "**Recruitment and retention** — initial teacher training targets, vacancy rates, leaving rates, and how these vary by subject and region.",
        "**Comparative earnings** — how teacher pay compares with graduate professions competing for the same people.",
        "**Affordability** — what school budgets can absorb and what additional funding is available.",
        "**Workload and working conditions** — increasingly prominent, since pay alone does not explain retention patterns.",
        "**The wider economy** — inflation, labour market conditions and public sector pay policy.",
      ]},
      { kind: "p", text: "Shortage subjects receive particular attention because the recruitment picture varies enormously by specialism. That evidence base underpins targeted incentives — see the [maths teacher salary guide](/maths-teacher-salary/) for how retention payments work in practice." },

      { kind: "h2", text: "How to influence the process" },
      { kind: "p", text: "Most teachers engage through their union, which is the most effective route because union submissions carry institutional weight and are built from large-scale member surveys." },
      { kind: "ol", items: [
        "**Respond to your union's pay survey.** These directly feed the evidence submissions.",
        "**Read the published report.** It sets out precisely what the panel found persuasive, which is useful for understanding what evidence actually moves the outcome.",
        "**Respond to the statutory consultation** on the draft STPCD, which is open to anyone.",
        "**Engage with your school's pay policy.** The STPCD sets the framework, but your school decides how it is applied — including progression criteria and allowance levels.",
        "**Raise recruitment evidence locally.** Vacancy and retention data from real schools is exactly what the panel asks for.",
      ]},

      { kind: "h2", text: "England only" },
      { kind: "p", text: "The STRB's remit covers England alone. The other three UK nations use different machinery, which is why pay has diverged across the UK." },
      { kind: "table", caption: "Pay-setting machinery across the UK", head: ["Nation", "Body", "Type"], rows: [
        ["England", "School Teachers' Review Body", "Independent review body"],
        ["Wales", "Independent Welsh Pay Review Body", "Independent review body"],
        ["Scotland", "Scottish Negotiating Committee for Teachers", "Collective bargaining"],
        ["Northern Ireland", "Teachers' Negotiating Committee", "Collective bargaining"],
      ]},
      { kind: "p", text: "The practical difference is significant. In Scotland and Northern Ireland, unions negotiate an outcome directly with employers and government. In England and Wales they submit evidence and ministers decide. A fuller comparison is in [teacher pay in the UK](/teacher-pay-uk/)." },

      { kind: "h2", text: "Why a review body rather than negotiation" },
      { kind: "p", text: "The review body model was introduced for teachers in 1991, replacing a collective bargaining arrangement that had broken down. The rationale offered at the time was that an independent panel could weigh evidence dispassionately and remove pay from annual confrontation." },
      { kind: "p", text: "Whether it has achieved that is contested. Supporters point to a transparent, evidence-led process with published reasoning. Critics note that the panel's remit is set by one of the parties, that its recommendations are not binding, and that industrial action over pay has continued regardless — which suggests the model has not removed conflict so much as relocated it." },
      { kind: "table", caption: "Review body versus collective bargaining", head: ["", "Review body", "Collective bargaining"], rows: [
        ["Who decides", "Government, after a recommendation", "The parties, by agreement"],
        ["Evidence", "Published and scrutinised", "Usually private"],
        ["Union role", "Submit evidence", "Negotiate directly"],
        ["Outcome binding", "Only once in the STPCD", "Binding once agreed"],
        ["Used for teachers in", "England, Wales", "Scotland, Northern Ireland"],
      ]},
      { kind: "p", text: "The practical consequence for an individual teacher in England is that your pay is decided by a minister, not by your employer, which is why campaigning on pay is directed at government while workload disputes are handled with your school. Compare the arrangements across the UK in [teacher pay in the UK](/teacher-pay-uk/)." },

      { kind: "h2", text: "Reading an STRB report" },
      { kind: "p", text: "The reports are long but well structured, and they are the single best source on the state of the teaching labour market. If you read only part of one, read the recruitment and retention chapter and the recommendations." },
      { kind: "p", text: "Two things are worth watching. First, whether the panel says the award should be fully funded — that framing signals concern about school budgets. Second, whether recommendations are targeted at particular grades, which usually indicates a specific labour market problem the panel wants addressed. For what the current award means in practice, see the [2026/27 pay rise breakdown](/teacher-pay-rise-2026-27/)." },
    ],
    faq: [
      { question: "What does STRB stand for?", answer: "The School Teachers' Review Body. It is an independent panel established under the School Teachers' Pay and Conditions Act 1991 that recommends teacher pay awards in England to the Secretary of State for Education." },
      { question: "Does the STRB set teacher pay?", answer: "No. It recommends. The Secretary of State for Education decides whether to accept, modify or reject the recommendation, and the final figures are published in the STPCD, which is statutory for maintained schools in England." },
      { question: "When does the STRB report each year?", answer: "It normally reports to the Secretary of State in spring, with publication alongside the government response in the summer. The resulting award takes effect from 1 September. The timetable frequently slips, which is why backdated arrears are common." },
      { question: "Can the government ignore the STRB?", answer: "Yes. The recommendations are advisory. Governments have previously accepted them in full, accepted them in part, and staged implementation. Departing from a recommendation is politically costly but legally straightforward." },
      { question: "Does the STRB cover Scotland, Wales and Northern Ireland?", answer: "No, England only. Wales has the Independent Welsh Pay Review Body. Scotland uses the Scottish Negotiating Committee for Teachers and Northern Ireland the Teachers' Negotiating Committee, both of which are collective bargaining arrangements rather than review bodies." },
      { question: "How can I submit evidence to the STRB?", answer: "Individuals do not usually submit directly. The practical routes are responding to your union's pay survey, which feeds its formal submission, and responding to the statutory consultation on the draft STPCD, which is open to anyone." },
      { question: "What is a remit letter?", answer: "The letter from the Secretary of State that opens each pay round. It tells the STRB what to consider and usually indicates what the government regards as affordable, which effectively sets the boundaries of the recommendation before evidence is heard." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },
];
