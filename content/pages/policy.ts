import { teacherPaySources } from "@/data/teacher-pay-source-ledger";
import type { PageContent } from "../types";

export const policyPages: PageContent[] = [
  // ---------------------------------------------------------------- PILLAR
  {
    slug: "teacher-pay-rise",
    isPillar: true,
    hub: "policy",
    title: "Teacher Pay Rise: How Awards Work",
    metaTitle: "Teacher Pay Rise: How UK Pay Awards Work (2026/27)",
    metaDescription:
      "How teacher pay rises are decided: STRB recommendation, DfE decision, STPCD publication — plus what the 3.5% 2026/27 award is worth in cash at every point.",
    primaryKeyword: "teacher pay rise",
    secondaryKeywords: [
      "teachers pay rise", "teacher pay rise uk", "teacher pay rise pay scale",
      "when does the teacher pay rise start", "teacher pay rise september 2026",
      "when will teacher pay rise be announced", "dfe teacher pay rise",
      "school teachers pay award", "teacher pay increase", "teacher pay rise england",
      "teacher pay rise announcement 2026", "what month does the teacher pay rise start",
      "teacher pay rise wales", "will there be a teacher pay rise in 2026",
      "how much is the teacher pay rise",
    ],
    calculator: "pay-rise",
    intro:
      "A teacher pay rise does not arrive by accident or negotiation. It follows a fixed annual cycle: an independent review body takes evidence and recommends, the Secretary of State decides, and the new figures are published in the School Teachers' Pay and Conditions Document (STPCD), effective from 1 September. For 2026/27 that award was **3.5%**, applied to every pay point on the national scale. This guide explains who decides what, when the money actually lands in your payslip, why your personal increase is often bigger than the headline percentage, and what the award means in cash at each point of the [teacher pay scale](/teacher-pay-scale/).",
    keyTakeaways: [
      "The government accepted a 3.5% September 2026 award for advisory pay points, except for a 5% Rest-of-England UQ1 increase; the Pay Order is due in October 2026.",
      "Teacher pay awards run with the school year (1 September), not with the April tax year.",
      "Your own increase is usually larger than the headline figure because scale progression is applied on top of the award.",
      "The School Teachers' Review Body (STRB) recommends, but the Secretary of State makes the final decision and can depart from it.",
      "The 2026 settlement was multi-year: around 6.6% across 2026/27 and 2027/28 combined.",
      "Academies are not legally bound by the STPCD, though most mirror it in practice.",
    ],
    blocks: [
      { kind: "h2", text: "Who actually decides teacher pay" },
      { kind: "p", text: "Teacher pay in England is not settled across a bargaining table the way most public sector pay is. It runs through a review body process created by the School Teachers' Pay and Conditions Act 1991. Four bodies matter, and they have very different levels of power." },
      { kind: "table", caption: "Who does what in the teacher pay cycle", head: ["Body", "Role", "Binding?"], rows: [
        ["School Teachers' Review Body (STRB)", "Takes written and oral evidence from unions, government and employers, then recommends an award", "No — advisory only"],
        ["Secretary of State for Education", "Accepts, modifies or rejects the STRB recommendation", "Yes — makes the final decision"],
        ["Department for Education (DfE)", "Publishes the STPCD containing the new pay ranges", "Yes — statutory for maintained schools"],
        ["Your school or trust", "Applies the STPCD through its own pay policy and sets your individual pay point", "Sets your actual salary"],
      ]},
      { kind: "p", text: "The key asymmetry: the STRB's recommendation makes headlines every summer, but it has no legal force. The only number that matters is the one printed in the STPCD after the Secretary of State signs off. In recent years the government has accepted the recommendation in full, but the power to depart from it is real and has been used before — which is why union campaigns focus on the remit letter as much as the final report. We track the review body itself in our [STRB guide](/strb-pay-review-body/)." },

      { kind: "h2", text: "The annual pay round, step by step" },
      { kind: "p", text: "The cycle repeats every year on a predictable rhythm. Knowing where you are in it tells you when news is likely and when your payslip will change." },
      { kind: "ol", items: [
        "**Autumn — remit letter.** The Department for Education writes to the STRB setting out what it wants examined for the following year, usually alongside evidence from unions asking for far more.",
        "**Spring — evidence and report.** Unions, local authorities and the DfE submit written evidence; the STRB holds oral sessions and publishes its report, typically between March and May.",
        "**Early summer — government decision.** The Secretary of State accepts or amends the recommendation, usually announced in July alongside the funding settlement for schools.",
        "**Late August — STPCD published.** The new document lands shortly before the school year starts, giving maintained schools no discretion to delay.",
        "**September — first payslips.** The award takes effect from 1 September; some payroll teams apply it to the September payslip, others pay it as arrears in October.",
      ]},
      { kind: "callout", tone: "info", title: "School year, not tax year", text: "Unlike almost every other public sector award, teacher pay rises take effect on 1 September rather than 1 April. That means the award crosses two financial years, and your P60 for any given tax year blends two different salaries." },

      { kind: "h2", text: "The 2026/27 award: 3.5% from 1 September" },
      { kind: "p", text: "For 2026/27 the government accepted the STRB's recommendation of **3.5%** for all advisory points other than Rest-of-England UQ1, which receives **5%**. The Pay Order is due in October 2026, so these are government-accepted advisory points, not described here as in force before it is laid. Because the award is percentage-based, the cash value grows as you move up the scale. Here is what it means at the points most teachers occupy." },
      { kind: "table", caption: "What the 3.5% award is worth in cash (England, excluding London)", head: ["Pay point", "2025/26 salary", "2026/27 salary", "Cash increase"], rows: [
        ["M1", "£32,916", "£34,069", "+£1,152"],
        ["M4", "£39,556", "£40,941", "+£1,384"],
        ["M6", "£45,352", "£46,940", "+£1,587"],
        ["U3", "£51,058", "£52,835", "+£1,777"],
        ["L12 (indicative)", "≈£72,468", "≈£75,000", "+£2,500 approx"],
      ]},
      { kind: "p", text: "London fringe, outer London and inner London scales all received the same percentage uplift, so the cash value there is proportionally larger. To see the effect on your own take-home pay — including tax, National Insurance and pension — use the [teacher pay calculator](/teacher-pay-calculator/)." },
      { kind: "callout", tone: "tip", title: "Check you were moved to the right point", text: "The award applies to the scale itself, but your school decides whether you progress a point. If your September salary looks wrong against the published scale, ask your payroll team which point you have been placed on and request the pay policy decision in writing." },

      { kind: "h2", text: "Why your rise is bigger than the headline" },
      { kind: "p", text: "Most teachers receive two increases in the same September: the national award **and** movement up the scale. Teachers on the main pay range normally progress one point each year until they reach M6, subject to performance arrangements in the school's pay policy. The two stack multiplicatively." },
      { kind: "p", text: "Take a teacher moving from M3 to M4 in September 2026. M3 was £38,400 after last year's award; applying 3.5% gives £39,744, and the move to the new M4 point takes them to £40,941. Their actual rise is about **6.6%**, not 3.5%. This stacking effect is why many teachers feel the headline number understates their own experience — and why teachers already at the top of the upper pay range feel the opposite, since they get the flat award only unless they successfully apply for UPS progression or a leadership role." },
      { kind: "p", text: "Supply teachers, and anyone paid pro-rata on the daily rate calculated from the scale, see the same percentage flow through their day rate once the STPCD updates." },

      { kind: "h2", text: "Recent awards in context" },
      { kind: "p", text: "The size of the annual teacher pay increase has swung sharply over the last few years, driven by inflation, industrial action and recruitment problems. Context matters when you judge whether 3.5% is generous: cumulative awards below CPI left real pay well below its 2010 level even after the bigger settlements of 2023 and 2024." },
      { kind: "table", caption: "Recent teacher pay awards (England)", head: ["School year", "Award", "Notes"], rows: [
        ["2022/23", "5% (with £1,500 floor)", "Departure from STRB advice amid strike action"],
        ["2023/24", "6.5%", "STRB recommendation accepted in full"],
        ["2024/25", "5.5%", "STRB recommendation accepted in full"],
        ["2025/26", "4.0%", "Applied from 1 September 2025"],
        ["2026/27", "3.5%", "Part one of a two-year deal worth about 6.6% overall"],
      ]},
      { kind: "p", text: "The 2026 settlement was unusual because it covered more than one year: the government and unions described it as a two-year deal worth around 6.6% across 2026/27 and 2027/28 combined, which implies a further rise of roughly 3% in September 2027. The precise figure for 2027/28 will be confirmed when the next STPCD is drafted, so treat it as indicative until the document is signed." },

      { kind: "h2", text: "When the rise actually reaches your payslip" },
      { kind: "p", text: "Legally the new rates apply from **1 September**. Operationally, three things determine when you see the money:" },
      { kind: "ul", items: [
        "**Payroll cut-off dates.** If the STPCD is published after your school's payroll run closes, the September payslip may still show old figures.",
        "**Arrears payments.** Many schools backdate the difference into the October or November payslip as a separate line.",
        "**Your contract type.** Teachers paid in twelve equal monthly instalments see a clean uplift; those paid on variable or daily-rate contracts see it in the day rate.",
      ]},
      { kind: "p", text: "If November arrives and your salary still matches the old scale, chase it formally. Maintained schools have no discretion to postpone the award, and academy trusts that claim to follow the STPCD should honour it too. A quick comparison using the current [pay scale tables](/teacher-pay-scale/) is usually enough evidence to get it fixed." },

      { kind: "h2", text: "Wales, Scotland and Northern Ireland" },
      { kind: "p", text: "England's STRB process and Wales's IWPRB process are separate. Wales publishes its own advisory values and implementation updates, so do not infer Welsh pay from the England award. Scotland and Northern Ireland also negotiate separately through their own systems." },
      { kind: "p", text: "Practically, this means a 'UK teacher pay rise' headline is always really four stories. If you teach in England, only the STPCD figure matters for your contract if you work in a maintained school." },

      { kind: "h2", text: "Academies: bound in practice, not in law" },
      { kind: "p", text: "Academy trusts are not legally required to follow the STPCD. They must have a documented pay policy, and most choose to mirror the national ranges because deviating makes recruitment harder — but some use the flexibility to pay above scale for shortage subjects, to slow progression, or in rare cases to set their own structures entirely." },
      { kind: "p", text: "Two practical checks matter if you are in a trust. First, read the trust's pay policy for how it treats the annual award: some adopt it automatically, others reserve the decision to trustees each autumn. Second, check whether your contract references the Burgundy Book and STPCD explicitly; if it does, you have a contractual argument even where the statutory duty does not apply." },

      { kind: "h2", text: "What to do while you wait for the next round" },
      { kind: "p", text: "Between announcements, three moves protect your position better than watching the news. Check your placement on the scale against the published ranges each September, because errors are common and rarely corrected unless challenged. Model what the award does to your take-home pay rather than your gross salary — a £1,500 gross rise is worth roughly £90–£100 a month after deductions for a mid-scale teacher, depending on pension tier and student loan plan. And if you are within reach of the upper pay range or leadership spines, the award compounds those thresholds too, which changes the arithmetic of applying for promotion. Our [financial planning hub](/teacher-financial-planning/) walks through each of these decisions in order." },
    ],
    faq: [
      { question: "When does the teacher pay rise start?", answer: "The award takes effect on 1 September, the start of the school year. Depending on your school's payroll cut-off, it may appear on your September payslip or arrive as arrears in October or November." },
      { question: "When will the next teacher pay rise be announced?", answer: "In a typical year the STRB report and government decision arrive between March and July, and the updated STPCD is published in late August. The 2026/27 round was settled earlier than usual because it formed part of a two-year deal announced in summer 2026." },
      { question: "What is the teacher pay rise for 2026?", answer: "The government-accepted September 2026 advisory award is 3.5%, except for a 5% Rest-of-England UQ1 increase; the Pay Order is due in October 2026. On the England main scale that lifts M1 to £34,069 and M6 to £46,940." },
      { question: "Will there be a teacher pay rise in 2027?", answer: "Yes. The 2026 settlement was a two-year deal worth around 6.6% across both years, which implies a further award of roughly 3% in September 2027. The exact figure will be confirmed in the 2027/28 STPCD." },
      { question: "Why is my pay rise bigger than 3.5%?", answer: "Because scale progression stacks on top of the award. A teacher moving up one point on the main pay range in the same September receives the 3.5% award plus the point increase — typically 6% to 7% in total." },
      { question: "Do academies have to give the pay rise?", answer: "Not legally. Academies are exempt from the STPCD's pay provisions, but most trusts adopt the national award voluntarily and many reference it in employment contracts. Check your trust's pay policy." },
      { question: "Does the pay rise apply in Wales, Scotland and Northern Ireland?", answer: "Each nation has its own process. Wales's 2026/27 advisory figures come through the IWPRB and Welsh Government; Scotland and Northern Ireland also negotiate separately. Always check the relevant national publication." },
      { question: "Is the pay rise applied before or after tax?", answer: "Before. The award lifts your gross salary, and income tax, National Insurance and pension contributions are calculated on the new figure. Use a take-home calculator to see the net effect." },
      { question: "How much is the teacher pay rise per month after tax?", answer: "A mid-scale M4 teacher gains roughly £1,384 gross a year from the 2026/27 award, which is about £80–£90 extra take-home per month once tax, National Insurance and pension contributions are applied. The exact figure depends on your pension tier and student loan plan, so model your own position rather than relying on averages." },
      { question: "Do supply teachers get the pay rise?", answer: "Yes, where pay is linked to the national scale. Daily-rate supply cover calculated from the STPCD rises with the award, though agencies may take time to update their rates." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "GOV.UK — Teachers to benefit from multi-year pay deal", url: "https://www.gov.uk/government/news/teachers-to-benefit-from-multi-year-pay-deal" },
      { label: "School Teachers' Review Body (STRB) — reports and remit letters", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
      { label: "NEU — Teachers' pay award advice", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/teachers-pay-award" },
    ],
    updated: "2026-10-09",
  },
  // ------------------------------------------------------------ 2026/27
  {
    slug: "teacher-pay-rise-2026-27",
    hub: "policy",
    title: "Teacher Pay Rise 2026/27: The 3.5% Award",
    metaTitle: "Teacher Pay Rise 2026/27: 3.5% Award at Every Point",
    metaDescription:
      "The 2026/27 teacher pay rise was 3.5% from 1 September. See the cash increase at every pay point from M1 to U3, all London scales, and what it means after tax.",
    primaryKeyword: "teacher pay rise 2026",
    secondaryKeywords: [
      "teacher pay rise 2026-27", "teacher pay rise 26/27", "teacher pay rise 2026/27",
      "teachers pay rise 2026", "teacher pay scale 2026", "teacher pay scale 2026-27",
      "teacher pay scale 26 27", "teacher pay rise 2026 latest news",
      "teacher pay rise 2026 when will it be paid", "what is the teacher pay rise for 2026",
      "teacher pay award 2026", "new teacher pay scale 2026", "teachers pay rise 2026 uk",
    ],
    calculator: "pay-rise",
    intro:
      "The 2026/27 teacher pay rise was confirmed at **3.5%**, applied to every point of every range in the School Teachers' Pay and Conditions Document from 1 September 2026. It forms part one of a two-year deal worth around 6.6% in total. This page gives you the exact new figures — main scale, upper scale, unqualified range and leadership spine, across England's four regional bands — plus when the money arrives and what it looks like after tax.",
    keyTakeaways: [
      "England's government-accepted advisory award is 3.5% from September 2026, except for a 5% Rest-of-England UQ1 increase. Wales has a separate process.",
      "M1 rises to £34,069 and M6 to £46,940 in the rest of England; inner London M1 reaches £41,729.",
      "The award stacks with progression: moving up a point plus 3.5% typically delivers 6% to 7%.",
      "The settlement covers two years: around 6.6% combined across 2026/27 and 2027/28.",
      "Academies do not have to apply the STPCD, though most trusts choose to mirror it.",
    ],
    blocks: [
      { kind: "h2", text: "What was confirmed, and when" },
      { kind: "p", text: "The Department for Education accepted the School Teachers' Review Body's recommendation of a 3.5% increase and published government-accepted advisory pay points ahead of the new school year. The announcement was packaged as a multi-year deal: government communications described it as teachers benefiting from a two-year settlement worth roughly 6.6% across 2026/27 and 2027/28, which implies close to 3% more in September 2027. The 2026 Pay Order is due in October 2026; until it is laid, these are government-accepted advisory figures rather than points described here as in force." },
      { kind: "p", text: "If you want the mechanics behind the number — who recommends, who decides and why September rather than April — our [guide to how teacher pay rises work](/teacher-pay-rise/) covers the whole cycle." },

      { kind: "h2", text: "The new main pay scale for 2026/27" },
      { kind: "p", text: "Here is the full Main Pay Range for England outside London, with the previous year alongside so you can see exactly what changed." },
      { kind: "table", caption: "Main Pay Range 2025/26 vs 2026/27 (England, excluding London)", head: ["Point", "2025/26", "2026/27", "Increase"], rows: [
        ["M1", "£32,916", "£34,069", "+£1,152"],
        ["M2", "£34,823", "£36,042", "+£1,219"],
        ["M3", "£37,101", "£38,400", "+£1,299"],
        ["M4", "£39,556", "£40,941", "+£1,384"],
        ["M5", "£42,059", "£43,529", "+£1,470"],
        ["M6", "£45,352", "£46,940", "+£1,587"],
      ]},
      { kind: "p", text: "Every other range received the same percentage uplift. The [full pay scale tables](/teacher-pay-scale/) list all regions, including the fringe and London allowances." },

      { kind: "h2", text: "Upper Pay Range and Unqualified Teacher Range 2026/27" },
      { kind: "table", caption: "Upper and unqualified ranges, rest of England", head: ["Range", "2025/26", "2026/27"], rows: [
        ["U1", "£47,474", "£49,134"],
        ["U2", "£49,232", "£50,956"],
        ["U3", "£51,058", "£52,835"],
        ["Unqualified point 1", "£22,929", "£23,732"],
        ["Unqualified point 6", "£35,258", "£36,494"],
      ]},
      { kind: "callout", tone: "info", title: "Top-of-scale teachers get the flat award only", text: "Teachers already on U3 receive the 3.5% uplift without any progression movement. That makes the headline feel smaller at the top of the scale — unless you add a TLR, SEN allowance or move into leadership, all of which were uplifted too." },

      { kind: "h2", text: "London and the fringe: regional values of the 2026 award" },
      { kind: "p", text: "Because the award is a flat percentage, its cash value grows with the regional weighting. The table shows M1 and M6 across England's pay bands after the 2026 uplift." },
      { kind: "table", caption: "M1 and M6 by region, 2026/27", head: ["Region", "M1", "M6"], rows: [
        ["England (excluding London)", "£34,069", "£46,940"],
        ["London fringe", "£35,602", "£48,479"],
        ["Outer London", "£39,196", "£52,241"],
        ["Inner London", "£41,729", "£54,131"],
      ]},

      { kind: "h2", text: "When will the pay rise be paid?" },
      { kind: "p", text: "The new rates apply from **1 September 2026**. In practice, whether your September payslip reflects them depends on payroll cut-offs: many schools processed September before the STPCD was finalised, paying the difference as arrears in October or November instead. If your payslip still matches the old scale well into the autumn term, ask payroll which pay point you have been placed on and when arrears are scheduled — the [pay rise process guide](/teacher-pay-rise/) explains what to check." },

      { kind: "h2", text: "What 3.5% looks like after tax" },
      { kind: "p", text: "Gross increases shrink through income tax, National Insurance and pension contributions. A mid-scale teacher moving from £39,556 to £40,941 keeps roughly £70–£75 a month of the £1,384 gross rise, depending on their pension tier and student loan plan. The exact figure varies because the Teachers' Pension Scheme tiers are banded: if the rise or pensionable allowances push annualised actual earnings over a tier boundary, the marginal take-home gain is smaller for that year. The [take-home pay calculator](/teacher-take-home-pay/) applies your actual deductions." },

      { kind: "h2", text: "Progression on top of the award" },
      { kind: "p", text: "Most teachers on the main range progress one point each September subject to their school's performance arrangements. Combined with the 3.5% award, that compounds: an M3-to-M4 mover in 2026 gained about £1,299 from the award component alone and finished on a point £3,839 higher than the year before once progression was included — an effective rise near 10%. Check your school's pay policy for its progression criteria, because academy trusts set their own rules even when they adopt national rates." },

      { kind: "h2", text: "Wales, Scotland and Northern Ireland" },
      { kind: "p", text: "Wales, Scotland and Northern Ireland each have separate pay-setting processes. Do not treat the English government-accepted advisory points as their scales. If you work across borders or are comparing offers, compare against each nation's own published scale rather than assuming the English figures travel." },

      { kind: "h2", text: "Does the 2026 award change allowances?" },
      { kind: "p", text: "Yes. The published ranges for teaching and learning responsibility (TLR) payments and SEN allowances were uplifted with the award: TLR1 now spans £10,531 to £17,819 and SEN allowances run from £2,885 to £5,690. Whether your personal allowance rises depends on your school applying the uplift within the range — the specific payment sits inside those boundaries and is set by the pay policy, not automatically." },

      { kind: "h2", text: "How 3.5% compares with inflation" },
      { kind: "p", text: "Whether 3.5% feels like a real pay rise depends on prices. With CPI running near 2%, a 3.5% award is a genuine real-terms gain for the second year running, which reverses the pattern of 2022 and 2023 when awards trailed double-digit inflation and teacher pay fell sharply in real terms even as headline percentages hit records. Stacked across the recent rounds — 5.5%, then 4%, then 3.5% — cumulative pay has roughly kept pace with cumulative inflation since 2024, while remaining well below its 2010 level in real terms." },
      { kind: "p", text: "The practical takeaway is to judge your own trajectory rather than any single year. A teacher who was M4 in September 2024 and progressed each year has compounded three awards with three progression moves, and their salary has grown far faster than either the awards or inflation alone. Teachers at the top of the upper range have experienced only the flat awards, which is why retention arguments increasingly focus on what happens after M6 and U3." },

      { kind: "h2", text: "Part-time and supply teachers" },
      { kind: "p", text: "Part-time teachers on the national scale are paid the pro-rata point for their contracted hours, so the 3.5% uplift flows through automatically on the same terms as full-time colleagues. If you work 0.6 of a timetable on M4, your 2026/27 full-time-equivalent reference is £40,941 and your actual salary is 60% of it. TPS contribution tiers use the annual salary rate for the eligible employment, so actual pensionable earnings rather than the FTE reference determine the rate." },
      { kind: "p", text: "Supply teachers engaged through agencies on daily rates calculated from the STPCD should see day rates rise with the award once agencies update their systems — chasing this promptly matters, because backdated supply claims are harder to recover than salaried arrears. Directly employed cover supervisors and teachers on daily-rate contracts at maintained schools must be paid at least the statutory daily rate derived from the new scale." },

      { kind: "h2", text: "Planning around the next round" },
      { kind: "p", text: "With a multi-year deal in place, the 2027/28 figure is largely signposted rather than open. That makes this a good year to plan promotion moves deliberately: crossing into the upper pay range or the leadership spine compounds every future award. Our [financial planning hub](/teacher-financial-planning/) sets out how the pieces fit together, and the [leadership pay scale guide](/leadership-pay-scale/) shows what the L-spine pays." },
    ],
    faq: [
      { question: "What is the teacher pay rise for 2026?", answer: "The Government accepted a 3.5% award for England from 1 September 2026. The published England points are advisory until the relevant Pay Order is in force. On the rest-of-England main scale, M1 is £34,069 and M6 is £46,940." },
      { question: "When will the teacher pay rise be paid?", answer: "It takes effect from 1 September 2026. Some schools applied it to September payslips directly; others paid arrears in October or November depending on payroll cut-off dates." },
      { question: "Is there a teacher pay rise calculator for 2026/27?", answer: "Yes. Use the pay rise calculator on this site to see the 3.5% uplift applied to any pay point, including the effect on take-home pay after tax, National Insurance and pension contributions." },
      { question: "How much is M4 after the 2026 pay rise?", answer: "£40,941 in England outside London, up £1,384 from £39,556. Fringe, outer London and inner London figures are higher." },
      { question: "Will there be another pay rise in 2027?", answer: "The 2026 settlement was a two-year deal worth about 6.6% overall, implying roughly 3% for 2027/28. The exact figure will be confirmed in the next STPCD." },
      { question: "Do academies have to pay the 2026 rise?", answer: "Not legally. Academy trusts set their own pay policies, but most adopt the STPCD rates voluntarily. Check your trust's policy if your salary has not moved." },
      { question: "Did TLR and SEN allowances increase in 2026?", answer: "The published advisory ranges were uplifted: TLR1 runs £10,531 to £17,819 and SEN allowances £2,885 to £5,690. Your individual payment depends on your school's pay policy within those ranges." },
      { question: "Why is my pay rise bigger than 3.5%?", answer: "Because progression adds on top. Moving up a main scale point while receiving the award typically produces a total rise of 6% to 7%." },
      { question: "Does the 2026 pay rise apply in Scotland?", answer: "No. Scotland negotiates separately through the SNCT, so Scottish salaries follow a different agreement and timetable." },
      { question: "What if my school has not applied the 2026 pay rise?", answer: "Ask payroll in writing which point you have been placed on, whether the 2026 award has been implemented under the school's pay policy, and when any arrears will be paid. Academy trusts set their own policies, so check the trust policy before escalating." },
      { question: "Do part-time teachers get the full 3.5%?", answer: "Yes, proportionally. Part-time pay is calculated pro-rata from the scale point, so the percentage uplift applies to your full-time equivalent rate exactly as it does for full-time staff." },
    ],
    sources: [
      teacherPaySources.stpcd,
      teacherPaySources.governmentResponse2026,
      teacherPaySources.neuEngland2026,
      { label: "LGA — School teachers' pay 2026/27 and 2027/28", url: "https://www.local.gov.uk/our-support/workforce-and-hr-support/education-and-young-people/school-teachers-pay-2026-27-and-2027-28" },
    ],
    updated: "2026-10-09",
  },

  // ------------------------------------------------------------ 2025 archive
  {
    slug: "teacher-pay-rise-2025",
    hub: "policy",
    title: "Teacher Pay Rise 2025: The 4% Award",
    metaTitle: "Teacher Pay Rise 2025: What the 4% Award Paid",
    metaDescription:
      "The 2025 teacher pay rise was 4% from 1 September. See what every pay point paid in 2025/26, from M1 at £32,916 to U3 at £51,058, plus allowances and arrears rules.",
    primaryKeyword: "teacher pay rise 2025",
    secondaryKeywords: [
      "teacher pay rise 2025-26", "teacher pay rise 25/26", "teachers pay rise 2025",
      "when will teachers get their pay rise 2025", "teacher pay rise september 2025",
      "teacher pay scales 25/26", "teacher pay rise 2025 leadership scale",
      "teacher pay rise 2025 tlr", "scottish teacher pay rise 2025",
      "teacher pay rise 2025 when will it be paid", "teacher pay award 2025",
      "teacher pay rise 2025 wales", "what is the teacher pay rise for 2025",
    ],
    calculator: "none",
    intro:
      "The 2025 teacher pay rise was **4%**, applied to every point of the national scale from 1 September 2025 under the STPCD for 2025/26. It took a new M1 starter in England outside London to £32,916 and pushed the top of the upper range past £51,000 for the first time. This page is the archive of exactly what that award paid — every main scale point, the allowance ranges, how it compared with inflation, and what changed again in September 2026.",
    keyTakeaways: [
      "The 2025/26 award was 4%, effective 1 September 2025 for maintained schools in England and Wales.",
      "M1 moved to £32,916 and M6 to £45,352 in England outside London; U3 reached £51,058.",
      "TLR and SEN allowance ranges were uplifted with the award.",
      "The 4% followed 5.5% in 2024, keeping awards ahead of inflation for a second year.",
      "From September 2026 the scale rose another 3.5%, so 2025/26 figures are now historic.",
    ],
    blocks: [
      { kind: "h2", text: "What was confirmed for 2025" },
      { kind: "p", text: "In May 2025 the government accepted the School Teachers' Review Body's recommendation of a 4% increase for 2025/26, publishing the updated STPCD before the summer. The award applied to every range — main, upper, unqualified, lead practitioner and leadership — and to the published TLR and SEN allowance ranges. Wales adopted the same figure through its own negotiating machinery." },
      { kind: "p", text: "The decision came against a backdrop of improving but fragile recruitment: initial teacher training targets had been missed repeatedly, and unions argued that only sustained real-terms recovery would fix retention. The [STRB process](/strb-pay-review-body/) behind the recommendation takes evidence from all sides each spring." },

      { kind: "h2", text: "The 2025/26 main pay scale in full" },
      { kind: "table", caption: "Main Pay Range 2024/25 vs 2025/26 (England, excluding London)", head: ["Point", "2024/25", "2025/26", "Increase"], rows: [
        ["M1", "£31,650", "£32,916", "+£1,266"],
        ["M2", "£33,484", "£34,823", "+£1,339"],
        ["M3", "£35,674", "£37,101", "+£1,427"],
        ["M4", "£38,035", "£39,556", "+£1,521"],
        ["M5", "£40,441", "£42,059", "+£1,618"],
        ["M6", "£43,608", "£45,352", "+£1,744"],
      ]},
      { kind: "p", text: "These were the figures on payslips until the [2026/27 award of 3.5%](/teacher-pay-rise-2026-27/) replaced them in September 2026. If you are reconciling an old P60 or checking backdated pay, this is the table to use for the 2025/26 school year." },

      { kind: "h2", text: "Upper Pay Range and allowances in 2025/26" },
      { kind: "table", caption: "Upper range points and key allowances, 2025/26", head: ["Item", "2025/26 value"], rows: [
        ["U1", "£47,474"],
        ["U2", "£49,232"],
        ["U3", "£51,058"],
        ["TLR1 range", "£10,174 – £17,216"],
        ["TLR2 range", "£3,527 – £8,611"],
        ["SEN allowance range", "£2,787 – £5,497"],
      ]},
      { kind: "callout", tone: "info", title: "Allowance ranges move with the award", text: "The STPCD publishes minimum and maximum values for each allowance band. Schools set individual payments within those bands, so whether your own TLR rose by the full 4% depended on your school's pay policy decision, not just the uplift." },

      { kind: "h2", text: "When the money arrived" },
      { kind: "p", text: "The award was effective from **1 September 2025**. Most maintained schools applied it to the September or October payslip; where payroll cut-offs fell early, the difference appeared as an arrears line later in the autumn. Teachers joining in September 2025 started directly on the new points, which is why contract offers made in the summer quoted the old scale while first payslips used the new one — a common source of confusion that year." },
      { kind: "p", text: "Supply and part-time teachers saw the same percentage flow through day rates and pro-rata salaries respectively. Agency supply rates lagged more often than school payrolls did." },

      { kind: "h2", text: "How 4% compared with prices and other jobs" },
      { kind: "p", text: "With CPI around the Bank of England's target through most of 2025, a 4% award delivered a modest real-terms gain — the second consecutive year of real recovery after 2022 and 2023, when inflation far outstripped pay. Combined with the previous year's 5.5%, cumulative growth since September 2023 ran well ahead of cumulative inflation over the same period, though real teacher pay remained below its early-2010s level." },
      { kind: "p", text: "Against other graduate professions the picture stayed mixed: starting salaries improved sharply because of successive M1 increases, while experienced salaries still trailed private-sector comparators in many subjects, particularly maths and physics where bursaries and external competition bite hardest. Our [salary guides](/teacher-salary-uk/) break the comparisons down by subject and phase." },

      { kind: "h2", text: "Leadership pay in 2025/26" },
      { kind: "p", text: "The same 4% applied across the 43-point leadership spine, lifting the group range in England outside London to roughly £51,524 at L1 and £143,106 at L43. Because the spine endpoints move with each award, promotion decisions made in 2025 locked in higher baselines that every subsequent award compounds. The [leadership pay scale guide](/leadership-pay-scale/) lists the current published advisory points." },

      { kind: "h2", text: "Scotland and Northern Ireland diverged" },
      { kind: "p", text: "Scottish teachers negotiated separately through the SNCT, agreeing a different settlement structure and timetable — searches for a Scottish teacher pay rise 2025 spiked precisely because the Scottish deal did not mirror England's single percentage. Northern Ireland's process ran separately again and its scale remained lower throughout. If you taught across borders in 2025/26, your reference scale depended entirely on which employing authority paid you." },

      { kind: "h2", text: "Who the award covered" },
      { kind: "p", text: "The STPCD binds maintained schools in England directly and applies to qualified teachers, unqualified teachers on the unqualified range, and leadership posts. Teachers employed by academy trusts were covered only where the trust's pay policy adopted the national terms — the overwhelming majority did, but a handful of trusts used their exemption to run their own structures. Sixth-form college and nursery school teachers have their separate arrangements, which is why college pay news sometimes reports different percentages in the same year." },
      { kind: "p", text: "If you were mid-year in a role change — say promoted from UPS3 to an assistant headship in January 2026 — your 2025/26 salary blended two points from different ranges, both of which had already received the 4% uplift. Reconstructing those blended years is exactly the scenario where the archived tables above earn their keep." },

      { kind: "h2", text: "London weighting: regional values of the 2025 award" },
      { kind: "p", text: "The same percentage applied everywhere in England and Wales, but the cash value scaled with regional weighting. For anyone comparing offers across regions in 2025/26 — or checking what they were paid against what they should have been paid — these were the anchor points." },
      { kind: "table", caption: "M1 and M6 by region, 2025/26", head: ["Region", "M1", "M6"], rows: [
        ["England (excluding London)", "£32,916", "£45,352"],
        ["London fringe", "£34,377", "£47,331"],
        ["Outer London", "£37,870", "£50,475"],
        ["Inner London", "£40,317", "£52,300"],
      ]},
      { kind: "p", text: "The unqualified teacher range also rose 4%, from £22,929 to £23,732 at its lowest point and to £35,258 at the top. Higher-level teaching assistants comparing routes into teaching often used these figures as the entry benchmark for the qualified route." },

      { kind: "h2", text: "Common payrise problems after September 2025" },
      { kind: "ul", items: [
        "**Stuck on last year's point.** The most frequent error was payroll rolling forward the 2024/25 salary unchanged. Compare your payslip against the table above and query it in writing.",
        "**Progression refused without reasons.** Schools must apply their published pay policy; a bare refusal with no reference to the policy criteria is worth challenging through the school's appeals process.",
        "**Allowance not uplifted.** If your TLR sat at a fixed value while the published range moved up around it, ask whether the governing body intended to hold your payment flat in real terms.",
        "**Part-time pro-rata errors.** Check the FTE point first, then the fraction of hours; mistakes compound when both change in the same September.",
      ]},

      { kind: "h2", text: "What replaced the 2025 award" },
      { kind: "p", text: "From 1 September 2026 the 3.5% uplift superseded every figure on this page, and the settlement was packaged as a two-year deal covering 2027/28 as well. If you are planning forward, work from the current scale rather than these archived numbers — but keep the 2025/26 table handy for P60 checks, mortgage applications referencing prior years, and any backpay disputes that reach back into last year. Payroll teams occasionally need written evidence of historic scale values, and citing the STPCD directly settles most queries in one email. Keep a copy of your September 2025 contract letter alongside it, since that document fixes which pay point you were appointed to." },
    ],
    faq: [
      { question: "How much was the teacher pay rise in 2025?", answer: "4%. It was applied to every point of the national scale from 1 September 2025 under the 2025/26 STPCD." },
      { question: "What was M1 after the 2025 pay rise?", answer: "£32,916 per year in England outside London, up £1,266 from £31,650. Inner London M1 reached around £40,317 once regional weighting is included." },
      { question: "When was the 2025 teacher pay rise paid?", answer: "It took effect on 1 September 2025. Most schools reflected it in September or October payslips; some paid arrears later in the autumn depending on payroll cut-offs." },
      { question: "Was the 2025 pay rise the same in Scotland?", answer: "No. Scotland negotiates separately through the SNCT and agreed a different deal with its own timetable and percentages." },
      { question: "Did TLR payments rise in 2025?", answer: "The published TLR ranges were uplifted by 4% — TLR1 ran from £10,174 to £17,216. Whether an individual payment rose depended on the school's decision within the range." },
      { question: "Why do I need 2025/26 salary figures now?", answer: "For P60 reconciliation, mortgage and reference requests covering that year, and any backdated pay disputes. The current scale is 3.5% higher following the 2026 award." },
      { question: "Was the 2025 award above inflation?", answer: "Yes, marginally. With CPI near 2% to 3% during 2025, a 4% award produced a small real-terms gain, the second consecutive year of real recovery." },
      { question: "Did academies apply the 2025 award?", answer: "Not automatically. Academies are exempt from the STPCD's pay provisions, though most trusts mirrored the 4% voluntarily." },
      { question: "How does the 2025 award compare with 2026?", answer: "2025/26 paid 4%; 2026/27 pays 3.5% as the first part of a two-year deal worth about 6.6% overall." },
      { question: "Was the 2025 teacher pay rise the same in Wales?", answer: "Yes on the headline figure. Wales applied the same 4% uplift to its scale through the Welsh Negotiating Committee, so the published values matched England's, though Welsh terms of service can differ in other respects." },
      { question: "How do I check my P60 against the 2025 scale?", answer: "Find your pay point as of September 2025 in the table above and compare the annual gross figure with your P60 for 2025/26. Small differences come from allowances, overtime-adjacent payments or part-time fractions; large ones are worth querying with payroll." },
    ],
    sources: [
      { label: "STPCD 2025 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "GOV.UK — Teacher pay: everything you need to know about the 2025 pay award", url: "https://educationhub.blog.gov.uk/2025/05/teacher-pay-everything-you-need-to-know-about-the-2025-pay-award" },
      { label: "School Teachers' Review Body (STRB) — reports and remit letters", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
      { label: "NEU — Teachers' pay award advice", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/teachers-pay-award" },
    ],
    updated: "2026-08-23",
  },

  // ------------------------------------------------------------ four nations
  {
    slug: "teacher-pay-uk",
    hub: "policy",
    title: "Teacher Pay UK: How the Four Nations Compare",
    metaTitle: "Teacher Pay UK: Four Nations Compared (2026/27)",
    metaDescription:
      "Teacher pay across the UK for 2026/27: England's STPCD scale, London weightings, and how Wales, Scotland and Northern Ireland differ with real figures.",
    primaryKeyword: "teacher pay uk",
    secondaryKeywords: [
      "teacher salary uk", "teachers pay uk", "how much do teachers get paid uk",
      "teaching salary uk", "teachers pay scales uk", "uk teacher salary",
      "do teachers get paid in the summer", "how much do teachers earn uk",
      "teacher pay uk 2026", "teacher pay london", "teacher pay after tax",
      "qualified teacher salary uk", "average teacher salary uk", "teacher salary in uk per month",
      "teachers salary uk", "uk teacher salary",
    ],
    calculator: "take-home",
    intro:
      "There is no single 'teacher pay UK' figure. England and Wales share a national scale set by the STPCD, Scotland negotiates its own agreements through the SNCT, and Northern Ireland runs separate machinery with the lowest rates of the four. Where you teach changes your starting salary by thousands of pounds, and where you are in England adds a London premium of up to £7,600 at M1. This guide compares all four nations with 2026/27 figures, explains how deductions change take-home pay, and answers the practical questions — holidays, summer pay, monthly cycles — that sit behind most searches.",
    keyTakeaways: [
      "Qualified teacher pay starts at £34,069 (England/Wales outside London) but £41,729 in inner London.",
      "Scotland's main scale starts at £34,539 with a different structure and negotiating body.",
      "Northern Ireland remains the lowest-paying nation, from £32,188.",
      "Teachers' annual salaries are paid across twelve months, including school holidays.",
      "Take-home pay depends on tax, NI of 8%, pension contributions of 7.4% to 12%, and student loans.",
    ],
    blocks: [
      { kind: "h2", text: "The headline numbers by nation" },
      { kind: "p", text: "Each nation sets its own scale, so the fastest way to answer 'how much do teachers get paid in the UK' is to compare starting and top-of-main-scale salaries side by side." },
      { kind: "table", caption: "Main scale starting and top points by nation, 2026/27", head: ["Nation", "M1 start", "M6 top"], rows: [
        ["England (excl. London)", "£34,069", "£46,940"],
        ["Wales", "£34,069", "£46,940"],
        ["Inner London", "£41,729", "£54,131"],
        ["Scotland", "£34,539", "£48,516"],
        ["Northern Ireland", "£32,188", "£44,342"],
      ]},
      { kind: "p", text: "Above the main range the nations diverge further: England and Wales run an Upper Pay Range to £52,835 plus a leadership spine reaching £148,829, Scotland uses a chartered teacher route worth £52,539, and Northern Ireland tops its upper range at £50,085. Our [UK-wide pay scale tables](/teacher-pay-scale/) list every point." },

      { kind: "h2", text: "England: ranges, regions and progression" },
      { kind: "p", text: "English teacher pay is organised into ranges rather than fixed steps: schools place teachers anywhere within the Main Pay Range based on experience, then move them annually through their pay policy. The [salary guides](/teacher-salary-uk/) break down what each role actually earns. Three structural features matter more than the raw numbers." },
      { kind: "ul", items: [
        "**Four regional bands.** Fringe, outer London and inner London weightings compensate for cost of living; the gap is worth £7,660 at M1.",
        "**Performance-based progression.** Unlike Scotland's automatic scheme, English progression is conditional on meeting objectives set each year.",
        "**Academy discretion.** Trusts can depart from national terms entirely, though most mirror them.",
      ]},

      { kind: "h2", text: "Scotland, Wales and Northern Ireland" },
      { kind: "p", text: "Scottish teacher pay is negotiated between the Scottish Government and COSLA through the Scottish Negotiating Committee for Teachers. Progression there moves automatically through six main grade points, and the Chartered Teacher route provides classroom-based progression beyond the main scale without moving into management." },
      { kind: "p", text: "Wales has its own pay-setting process and publishes a distinct scale, so cross-border comparisons should use the current Wales table rather than apply an England percentage. Northern Ireland's employers negotiate separately." },

      { kind: "h2", text: "Do teachers get paid in the summer?" },
      { kind: "p", text: "Yes. Salaried teachers are paid a single annual amount divided into twelve equal monthly instalments, so holiday months — including the long summer break — are paid exactly like teaching months. The common misconception arises because supply teachers paid daily genuinely do not earn during holidays, and because part-year contract variations exist in some private settings. For salaried staff the only summer surprise should be normal." },
      { kind: "p", text: "One nuance matters for resignations: notice periods align to term-time dates under the Burgundy Book conditions of service, so leaving at February half term means your last payment covers up to that date rather than a full month. Our [resignation deadlines guide](/teacher-resignation-deadlines/) lists the exact dates." },

      { kind: "h2", text: "From gross salary to take-home pay" },
      { kind: "p", text: "Gross figures overstate what lands in the bank. A mid-career M4 teacher on £40,941 loses income tax, National Insurance at 8% on earnings above the threshold, and pension contributions tiered from 7.4% to 12%. Student loan repayments can remove another slice depending on plan and threshold. The table shows typical monthly take-home for three common situations." },
      { kind: "table", caption: "Indicative monthly take-home, rest of England 2026/27", head: ["Situation", "Gross salary", "Approx. monthly net"], rows: [
        ["M1, no student loan", "£34,069", "≈£2,180"],
        ["M4, Plan 2 loan", "£40,941", "≈£2,430"],
        ["U3, Plan 2 loan", "£52,835", "≈£2,900"],
      ]},
      { kind: "callout", tone: "info", title: "Pension tiers create cliffs", text: "TPS contribution tiers use annualised actual pensionable earnings for each eligible employment and jump at fixed boundaries. Crossing a boundary can raise contributions on your entire salary, not just the extra pounds. The [take-home pay calculator](/teacher-take-home-pay/) models your exact case." },

      { kind: "h2", text: "London weighting explained" },
      { kind: "p", text: "The four-band structure exists because recruitment economics differ radically across the country. Inner London's £41,729 starting salary sounds generous until housing costs are applied; the outer and fringe bands taper the premium as distance from the centre grows. Teachers comparing a fringe job against a suburban one should compare total packages — pensionable allowances like TLRs add to the gap, and travel costs eat into it differently at each band. The [part-time pay calculator](/part-time-teacher-pay-calculator/) handles pro-rata versions of these comparisons." },

      { kind: "h2", text: "Upper Pay Range across the nations" },
      { kind: "table", caption: "Upper range points U1 to U3 by nation, 2026/27", head: ["Nation", "U1", "U3"], rows: [
        ["England (excl. London)", "£49,134", "£52,835"],
        ["Inner London", "£59,649", "£64,683"],
        ["Wales", "£49,134", "£52,835"],
        ["Northern Ireland", "£46,589", "£50,085"],
      ]},
      { kind: "p", text: "Scotland has no direct equivalent: its teachers progress through main grade points automatically and access chartered teacher status instead. The absence of a performance-gated upper range is one of the structural differences union comparisons highlight most often." },

      { kind: "h2", text: "Supply, unqualified and independent-school pay" },
      { kind: "p", text: "Three groups sit outside the standard tables. Unqualified teachers in maintained schools are paid from the unqualified teacher range, which runs £23,732 to £36,494 outside London after the 2026 uplift — relevant to teaching assistants considering the qualified route. Daily-rate supply cover must be paid at least 1/195th of the applicable scale point for day-to-day cover in maintained schools; long-term supply placements typically move onto the scale proper after set periods under local agreements." },
      { kind: "p", text: "Independent schools sit outside the STPCD entirely. Some publish generous scales to attract subject specialists; others pay below state rates while offering smaller classes or subsidised housing. Because there is no floor, candidates should ask for the written scale rather than relying on advertised ranges. International schools complicate the picture further with tax-free packages in some jurisdictions that outperform UK gross figures substantially." },

      { kind: "h2", text: "How UK teacher pay has moved recently" },
      { kind: "p", text: "Pay rounds in all four nations respond to the same labour-market pressure: too few applicants and too many resignations. That is why the recent sequence of awards has been driven as much by recruitment data as by inflation figures, with the STRB citing vacancy statistics alongside cost-of-living evidence each spring." },
      { kind: "p", text: "Three consecutive awards — 5.5%, 4%, then 3.5% — rebuilt some lost ground after inflation shredded real pay in 2022 and 2023. Cumulatively they lifted M1 by roughly 14% between September 2023 and September 2026. The 2026 settlement was structured as a two-year deal, which gives schools unusual certainty for budgeting and gives teachers a rare forward view of their salary trajectory. Whether the recovery restores real pay to its pre-austerity level remains the central dispute between unions and government." },

      { kind: "h2", text: "Private and international comparisons" },
      { kind: "p", text: "Independent schools set pay freely; many match or beat the state scale, others trade salary for prestige or smaller classes. International schools quoting in sterling-equivalents frequently advertise packages 20% to 50% above UK scales, though benefits vary wildly and pension access usually differs. When comparing any offer against UK state pay, anchor on the STPCD point you currently hold and adjust for pension value — the guaranteed TPS benefit is worth far more than its headline contribution rate suggests, as our [pension guide](/teacher-pension/) quantifies." },
    ],
    faq: [
      { question: "How much do teachers get paid in the UK?", answer: "Starting salaries run from £32,188 in Northern Ireland to £41,729 in inner London for 2026/27. Most of England and Wales starts at £34,069, rising to £46,940 at the top of the main range." },
      { question: "Do teachers get paid during school holidays?", answer: "Yes. Salaried teachers receive their annual salary in twelve equal monthly payments, so summer and other holidays are fully paid. Only daily-rate supply work goes unpaid during breaks." },
      { question: "Which UK nation pays teachers the most?", answer: "Inner London pays the highest headline salaries, followed by outer London and the fringe. Scotland's scale edges out equivalent non-London England points at the top of the main range." },
      { question: "How much is a qualified teacher's salary after tax?", answer: "An M1 teacher on £34,069 keeps roughly £2,180 a month after tax, National Insurance and pension contributions. Higher points and student loans shift the figure; use a take-home calculator for precision." },
      { question: "Is Scottish teacher pay different from England?", answer: "Yes. Scotland negotiates through the SNCT with automatic progression through main grade points and a Chartered Teacher route, separate from England's performance-related system." },
      { question: "Do teachers in Wales earn the same as England?", answer: "No. Wales has its own IWPRB-negotiated advisory scale. For 2026/27, the Wales values and main-range labels differ from England's." },
      { question: "What is the highest teacher salary in the UK?", answer: "Classroom teachers top out around £52,835 to £64,683 depending on region. Leadership posts extend to £148,829 at L43 in England, with inner London heads reaching higher still." },
      { question: "Are teachers paid weekly or monthly?", answer: "Almost universally monthly, typically on the same date each month. Supply teachers engaged daily are the main exception, being paid per session worked." },
      { question: "Does the London weighting apply to pensions?", answer: "Yes. Regional weighting forms part of pensionable salary, so inner London teachers build slightly larger TPS benefits for the same service length." },
      { question: "What do unqualified teachers earn in the UK?", answer: "In England outside London, the unqualified range runs £23,732 to £36,494 for 2026/27. Inner London versions are higher, and many academies pay above the minimum range to attract staff." },
    ],
    sources: [
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "SNCT — Scottish Negotiating Committee for Teachers", url: "https://www.snct.org.uk/" },
      { label: "NEU — Pay scales England", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/pay-scales/pay-scales-england" },
      { label: "HMRC — Rates and thresholds for employers 2026 to 2027", url: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" },
    ],
    updated: "2026-08-23",
  },

  // ------------------------------------------------------------ maternity
  {
    slug: "teacher-maternity-pay",
    hub: "policy",
    title: "Teacher Maternity Pay: The Full Guide",
    metaTitle: "Teacher Maternity Pay: Burgundy Book Guide 2026",
    metaDescription:
      "Teacher maternity pay explained: the Burgundy Book scheme week by week, who qualifies, statutory rates from April 2026, the return-to-work rule, and worked examples.",
    primaryKeyword: "teacher maternity pay",
    secondaryKeywords: [
      "teacher maternity pay uk", "teacher maternity pay calculator", "maternity pay teachers",
      "teacher occupational maternity pay", "how much maternity pay do teachers get",
      "teacher maternity pay changes", "teacher maternity pay scotland",
      "burgundy book maternity pay", "teacher maternity leave uk",
      "do teachers get full maternity pay", "teacher maternity pay ni",
      "supply teacher maternity pay", "teachers maternity pay", "maternity leave for teachers",
    ],
    calculator: "maternity",
    intro:
      "This teacher maternity pay calculator and guide maps the two systems that matter: Statutory Maternity Pay (SMP) and the enhanced Burgundy Book scheme. Enter your actual annual salary and service position to see the gross weekly schedule for your route, then use the guide to check the service dates, notice and 13-week return condition before making financial plans.",
    keyTakeaways: [
      "On Burgundy Book terms, teachers who meet the service and return conditions receive 4 weeks at full pay, 2 at 90%, 12 at half pay plus SMP or Maternity Allowance, then SMP or Maternity Allowance to week 39.",
      "The occupational-service test is one continuous year as a teacher with one or more local authorities, measured at the beginning of the 11th week before the expected week of childbirth.",
      "SMP is a separate test: 26 weeks' continuous employment with the current employer by the end of the 15th week before the expected week of childbirth.",
      "From 6 April 2026, the standard SMP rate is £194.32 a week, or 90% of average weekly earnings if lower, after the first six weeks.",
      "To retain the enhanced half-pay element, Burgundy Book teachers normally need to return for the equivalent of 13 weeks. School holidays count.",
    ],
    blocks: [
      { kind: "h2", text: "The two layers: statutory and occupational" },
      { kind: "p", text: "SMP is the statutory floor for employees who meet its service and earnings tests. It is paid for up to 39 weeks: 90% of average weekly earnings for the first 6 weeks, then the lower of £194.32 a week or 90% of average weekly earnings for the next 33. The Burgundy Book is a separate occupational scheme. For eligible teachers it adds enhanced pay, but it does not replace SMP: the figures in the schedule are inclusive of SMP where SMP is due." },
      { kind: "callout", tone: "warn", title: "Check the terms that actually apply to you", text: "The Burgundy Book applies automatically in local-authority schools and is adopted by many academies. An academy policy, independent-school contract, agency-supply arrangement or a voluntary move into an academy can change how service is recognised. Use the calculator as a planning estimate, then confirm your written policy and service record with HR." },

      { kind: "h2", text: "Use the teacher maternity pay calculator first" },
      { kind: "p", text: "Enter your **actual annual contractual salary**, not your full-time equivalent if you work part time. Then answer the two service questions separately. This is important: a teacher can qualify for occupational Burgundy Book pay but not SMP after a recent move, or qualify for SMP without meeting the year of local-authority teacher service. The calculator shows the relevant schedule rather than assuming one answer fits every teacher." },
      { kind: "ul", items: [
        "**Full Burgundy Book plus SMP:** at least one year of qualifying local-authority teacher service and 26 weeks with the current employer.",
        "**Burgundy Book plus Maternity Allowance:** at least one year of qualifying teacher service but fewer than 26 weeks with the current employer. Maternity Allowance depends on a separate National Insurance record, so enter it only once DWP has confirmed the award.",
        "**SMP only:** 26 weeks with the current employer but less than one year of qualifying local-authority teacher service.",
        "**Maternity Allowance route:** neither service test is met. This calculator deliberately does not guess a Maternity Allowance award.",
      ]},

      { kind: "h2", text: "What the Burgundy Book pays, week by week" },
      { kind: "table", caption: "Burgundy Book maternity pay for teachers with one year's service", head: ["Weeks", "Duration", "Pay"], rows: [
        ["1 – 4", "4 weeks", "100% of a week's pay, inclusive of SMP"],
        ["5 – 6", "2 weeks", "90% of a week's pay, inclusive of SMP"],
        ["7 – 18", "12 weeks", "Half pay plus SMP, not exceeding full pay"],
        ["19 – 39", "21 weeks", "Statutory maternity pay only (£194.32/week)"],
        ["40 – 52", "13 weeks", "Unpaid"],
      ]},
      { kind: "p", text: "Maternity leave itself can run to 52 weeks — 26 weeks ordinary plus 26 weeks additional — regardless of service length. The pay simply runs out before the leave does, which is why budgeting for the unpaid stretch matters as much as knowing the headline entitlements." },

      { kind: "h2", text: "Who qualifies: the four categories" },
      { kind: "p", text: "Entitlement depends on two clocks with different measurement points. The Burgundy Book occupational test is one year of continuous service **as a teacher** with one or more local authorities at the beginning of the 11th week before the expected week of childbirth (EWC). The SMP test is 26 weeks' continuous employment with the current employer by the end of the 15th week before the EWC. Do not use one date as a shortcut for both." },
      { kind: "table", caption: "Eligibility categories and what each gets", head: ["Category", "Service position", "Entitlement"], rows: [
        ["1", "26+ weeks with current employer AND 1 year+ across LAs", "Full Burgundy Book plus SMP"],
        ["2", "Under 26 weeks current, but 1 year+ across LAs", "Burgundy Book with MA instead of SMP"],
        ["3", "26+ weeks current, under 1 year teaching", "SMP only"],
        ["4", "Under both thresholds", "Maternity Allowance only, if NI record qualifies"],
      ]},
      { kind: "p", text: "Continuity is about the actual service record, not simply the number of schools on your CV. A move between qualifying local-authority employments can preserve the occupational count where there is no break in service. A voluntary move into an academy may be treated differently from a TUPE transfer, depending on the trust policy. Agency supply workers normally need to test entitlement through the agency, and should not assume earlier permanent service creates an occupational entitlement there." },
      { kind: "callout", tone: "tip", title: "Get the service record in writing", text: "Before relying on the enhanced rate, ask HR to confirm both dates: your continuous-service date for Burgundy Book purposes and your 26-week SMP qualifying date. This is especially valuable after a school move, TUPE transfer, fixed-term contract or change of employer." },

      { kind: "h2", text: "Worked example: an M4 teacher" },
      { kind: "p", text: "Take a full-time teacher on M4 in the rest of England (£40,941 in 2026/27). A simple annual-salary ÷ 52 planning figure is about £787 a week. Payroll can use average earnings where salary has varied significantly in the 12 weeks before absence starts, so the calculator and table are budgeting tools, not a replacement for the employer's calculation." },
      { kind: "table", caption: "Indicative maternity pay at M4 (£40,941)", head: ["Phase", "Weekly amount", "Total"], rows: [
        ["Weeks 1–4, full pay", "≈£787", "≈£3,148"],
        ["Weeks 5–6, 90%", "≈£708", "≈£1,417"],
        ["Weeks 7–18, half pay + SMP", "≈£588", "≈£7,055"],
        ["Weeks 19–39, SMP only", "£194.32", "≈£4,081"],
        ["39-week total", "", "≈£15,700"],
      ]},
      { kind: "p", text: "Compare that with the SMP-only route, which is materially lower over the same 39 weeks at this salary. The difference explains why it is worth checking the two service dates before changing employer. Use the calculator above to change the salary and service answers, then ask HR to model your exact contractual case. The figures shown are gross; see [teacher take-home pay](/teacher-take-home-pay/) for how tax, National Insurance and pension contributions affect the payslip." },

      { kind: "h2", text: "Notifying your school and choosing a start date" },
      { kind: "p", text: "For the full Burgundy Book scheme, notify your employer by the **beginning of the 14th week before the EWC**, declare in writing that you intend to return after leave, and provide your MATB1. The statutory notification deadline is the end of the 15th week before the EWC. You can give notice of your intended maternity-leave start date 21 days before absence under the Burgundy Book, although giving at least 28 days where possible helps the school arrange cover." },
      { kind: "p", text: "Leave cannot start earlier than 11 weeks before the EWC, and it starts automatically if you are off sick with a pregnancy-related illness in the last four weeks. If your baby arrives early, leave begins the day after birth. Antenatal appointments are paid time off throughout, and you can work up to 10 keeping-in-touch (KIT) days during leave without ending it." },

      { kind: "h2", text: "The 13-week return rule and repayment trap" },
      { kind: "p", text: "Enhanced occupational pay carries a condition: return to teaching for at least **13 weeks** after your leave. School holidays count toward the 13 weeks. If you resign instead, you keep the first six weeks of pay and all SMP, but your employer can reclaim the twelve weeks of half pay — roughly £4,700 in the M4 example above. Employers have discretion to waive recovery, particularly where the reason you did not return was within their control, such as refusing a flexible working request or expiring a fixed-term contract." },
      { kind: "p", text: "Plan resignations against this rule deliberately. Giving notice during maternity leave interacts with normal resignation deadlines too — our [resignation dates guide](/teacher-resignation-deadlines/) covers the termly cut-offs, and our [leaving teaching guide](/leaving-teaching/) sets out the wider financial picture." },

      { kind: "h2", text: "Pension, tax and progression during leave" },
      { kind: "p", text: "Occupational and statutory maternity pay are earnings, so tax, National Insurance and pension contributions apply as appropriate. During pensionable family leave, the Teachers' Pension Scheme uses your normal contribution tier but applies it to the actual pensionable pay received; benefits continue to accrue as if normal pensionable earnings had been received. Unpaid leave is not pensionable. Pay progression and the precise right to return should be checked against the applicable pay policy and statutory rules rather than assumed from a calculator." },

      { kind: "h2", text: "Part-time teachers and returning flexibly" },
      { kind: "p", text: "Part-time entitlements use actual earnings, not a full-time equivalent: a 0.6 teacher applies the same schedule to the 0.6 salary. The return condition is also expressed as an equivalent period. The NEU explains that returning on a different part-time pattern may require the equivalent of 13 weeks at that new pattern, so confirm the arrangement before agreeing a phased return. The [part-time pay calculator](/part-time-teacher-pay-calculator/) shows what different working patterns pay, while the [teacher sick pay rules](/teacher-sick-pay/) help where pregnancy-related illness affects the final weeks at work." },

      { kind: "h2", text: "Scotland, Northern Ireland, academies and independent schools" },
      { kind: "p", text: "This calculator models the Burgundy Book and UK statutory pay route. Scottish teachers should use the SNCT and their employer's maternity policy, while Northern Ireland teachers should check the Education Authority or employing-school policy. Academy trusts and independent schools can provide different contractual enhancements. Do not transpose the Burgundy Book table to a different scheme merely because the school uses a similar pay scale." },
      { kind: "p", text: "If your employer has announced a future policy change, ask for the effective date and the written policy before budgeting around it. This page reports the scheme in force for the stated 2026/27 statutory rate, not an unconfirmed future entitlement." },
    ],
    faq: [
      { question: "How much maternity pay do teachers get?", answer: "It depends on the separate Burgundy Book and SMP service tests. A teacher meeting both receives 4 weeks at full pay, 2 at 90%, 12 at half pay plus SMP, then SMP to week 39. Use the calculator with your actual salary and service history for a gross estimate." },
      { question: "Do teachers get full maternity pay?", answer: "On the Burgundy Book route, the first four weeks are at 100% pay inclusive of SMP or Maternity Allowance. Pay then moves through 90% and half-pay-plus-SMP or MA phases before the statutory-only period. Your contract can provide different or better terms." },
      { question: "How much service do I need for teacher maternity pay?", answer: "For Burgundy Book occupational pay, you need one continuous year as a teacher with one or more local authorities at the beginning of the 11th week before your expected week of childbirth. SMP has a different test: 26 weeks with the current employer by the end of the 15th week before that week." },
      { question: "What happens to my maternity pay if I don't go back?", answer: "Your employer can reclaim the 12 weeks of half pay if you do not return for 13 weeks. You keep the first four weeks at full pay, the two weeks at 90%, and all statutory maternity pay." },
      { question: "When should I tell my school I'm pregnant?", answer: "For the full Burgundy Book scheme, notify your employer by the beginning of the 14th week before the expected week of childbirth, give your MATB1 and declare your intention to return. The statutory notification deadline is the end of the 15th week. Give notice as early as reasonably practicable if a deadline cannot be met." },
      { question: "Do supply teachers get maternity pay?", answer: "Supply teachers may qualify for statutory maternity pay through their agency if they meet the earnings and service tests, and Maternity Allowance otherwise. Occupational Burgundy Book pay rarely applies to agency supply." },
      { question: "Is teacher maternity pay different in Scotland?", answer: "Yes. Scottish terms come from the SNCT rather than the Burgundy Book. The structure is broadly similar but administered separately, so check the Scottish scheme directly." },
      { question: "Do I pay tax on teacher maternity pay?", answer: "Yes. Both occupational and statutory maternity pay are treated as earnings, with income tax and National Insurance deducted as normal while they last." },
      { question: "Does my pension continue during maternity leave?", answer: "During pensionable family leave, the Teachers' Pension Scheme applies your normal contribution tier to the actual pensionable pay received and benefits continue accruing as if normal pensionable earnings had been received. Unpaid leave is not pensionable." },
      { question: "Do teaching assistants get the same maternity pay?", answer: "Not usually. Teaching assistants are employed under local government Green Book terms rather than the Burgundy Book, so their occupational maternity schemes differ and are often less generous. The statutory maternity pay floor applies to both groups in the same way." },
      { question: "Can my school make me repay maternity pay?", answer: "Under the Burgundy Book, an employer can normally reclaim the 12 weeks of occupational half pay if you do not return for the equivalent of 13 weeks. You retain the first six weeks and any SMP or Maternity Allowance. The employer may have discretion to reduce or waive recovery." },
    ],
    sources: [
      { label: "NEU — The Burgundy Book maternity scheme for school teachers", url: "https://neu.org.uk/latest/library/burgundy-book-maternity-scheme-school-teachers" },
      { label: "GOV.UK — Statutory Maternity Pay and Leave", url: "https://www.gov.uk/maternity-pay-leave" },
      { label: "GOV.UK — Statutory Maternity Pay: pay", url: "https://www.gov.uk/maternity-pay-leave/pay" },
      { label: "Teachers' Pensions — Family leave and your pension", url: "https://www.teacherspensions.co.uk/members/working-life/life-events/family-leave.aspx" },
    ],
    updated: "2026-10-10",
  },

  // ------------------------------------------------------------ sick pay
  {
    slug: "teacher-sick-pay",
    hub: "policy",
    title: "Teacher Sick Pay: Entitlements Explained",
    metaTitle: "Teacher Sick Pay: Burgundy Book Entitlements Guide",
    metaDescription:
      "Teacher sick pay explained: the Burgundy Book sliding scale of full and half pay, how statutory sick pay fits in, holiday rules and what happens when pay runs out.",
    primaryKeyword: "teacher sick pay",
    secondaryKeywords: [
      "teacher sick pay uk", "teachers sick pay entitlement", "how much sick pay do teachers get",
      "burgundy book sick pay", "occupational sick pay teachers", "teacher sick leave",
      "do teachers get paid sick leave", "teacher sick pay calculator", "supply teacher sick pay",
      "statutory sick pay teachers", "teacher sick pay half pay", "long term sick teacher",
      "sick pay for teachers", "teacher sick pay entitlement uk", "how long can a teacher be off sick on full pay",
    ],
    calculator: "none",
    intro:
      "Teacher sick pay is among the most generous occupational schemes in UK employment — but it is a sliding scale tied to your length of service, it counts **working days** rather than calendar days, and it runs on an April-to-March year that surprises people every spring. Under the Burgundy Book conditions that cover most maintained-school teachers in England and Wales, a fourth-year teacher gets up to 100 working days at full pay plus 100 more at half pay. This guide sets out the full scale, how statutory sick pay interacts with it, what happens over holidays, and where academies and supply teachers stand.",
    keyTakeaways: [
      "Entitlement scales with aggregated service: 25/50 days (full/half) in year one, rising to 100/100 after four years.",
      "Only working days count against your entitlement — weekends, half-terms and summer do not reduce it.",
      "The sick pay year runs 1 April to 31 March, and entitlement is not refreshed until you return to work.",
      "Statutory Sick Pay sits inside full pay and is added on top of half pay, capped at 28 weeks.",
      "Service aggregates across local authorities — moving schools does not reset your clock.",
      "Academies, independent schools and agency supply can set their own terms.",
    ],
    blocks: [
      { kind: "h2", text: "The Burgundy Book sliding scale" },
      { kind: "p", text: "The Burgundy Book — the national Conditions of Service negotiated for teachers in England and Wales — sets minimum occupational sick pay based on your total aggregated teaching service with one or more local authorities. It counts teaching and non-teaching directed time days, so school closures and holidays are excluded." },
      { kind: "table", caption: "Burgundy Book sick pay by service length (working days)", head: ["Length of service", "Full pay", "Half pay"], rows: [
        ["First year", "25 days (half pay only after 4 calendar months' service)", "50 days"],
        ["Second year", "50 days", "50 days"],
        ["Third year", "75 days", "75 days"],
        ["Fourth and successive years", "100 days", "100 days"],
      ]},
      { kind: "p", text: "In rough month terms, a fourth-year teacher can receive six months at full pay followed by six months at half pay within a single sick-pay year. Employers have discretion to extend beyond these minima, and some local authority policies enhance them — check your contract. Because this scheme governs maintained schools, academy trusts and independent schools may set their own arrangements instead, though many choose to mirror Burgundy Book terms." },

      { kind: "h2", text: "How statutory sick pay fits underneath" },
      { kind: "p", text: "Statutory Sick Pay (SSP) is not extra money while you are on full pay — it forms part of your occupational entitlement. Where the scheme matters most is at **half pay**: SSP is paid on top of your half salary until you have received 28 weeks of it in one absence period. After SSP exhausts, you can apply for Employment and Support Allowance, and your employer must issue form SSP1 to support the claim." },
      { kind: "p", text: "This layering is particularly important for first-year teachers, whose occupational entitlement is thinnest: 25 working days at full pay, then up to 50 at half pay once four calendar months of service are complete. SSP keeps something flowing through much of that first year even as occupational pay tapers." },
      { kind: "table", caption: "Notification and evidence timeline", head: ["When", "What you must do"], rows: [
        ["Day 1 of absence", "Alert the school and indicate likely duration"],
        ["Calendar day 4", "Self-certificate form on return if still absent"],
        ["Calendar day 8", "Fit note from doctor required, repeated until fit"],
        ["Day 25 / 50 / 75 / 100", "Full pay expires depending on service length"],
        ["28 weeks", "SSP ends; employer issues SSP1 for ESA claim"],
      ]},

      { kind: "h2", text: "The April-to-March trap" },
      { kind: "p", text: "Occupational sick leave runs in fixed years from **1 April to 31 March**, unlike the school year. A teacher who falls ill in October uses their entitlement continuously through the following March — and crucially, someone still absent when April arrives does NOT get a fresh allocation. The new year's entitlement only unlocks once you have returned to work. An unsuccessful return followed by relapse restores the original entitlement rather than consuming a new one." },
      { kind: "callout", tone: "warn", title: "Plan phased returns carefully", text: "Because a failed return does not burn a new year's entitlement, but a successful return restarts the clock cleanly, timing matters. Take advice before choosing between extending absence to Easter or attempting a January return. Union reps see this scenario constantly and can model both paths against your remaining days." },

      { kind: "h2", text: "Holidays, part-time and moving schools" },
      { kind: "p", text: "Three structural quirks catch people out. First, **holidays protect you**: if you are on full or half pay when a holiday begins, pay continues through the break without consuming any entitlement — only working days count. Second, **part-time teachers** measure absence in school working days rather than personal workdays: a 0.6 teacher who is off sick receives their 0.6 salary for each of up to 100 school working days, which stretches real-time coverage far beyond 100 attendance days. Third, **service aggregates across local authorities**, so a move from one council to another does not reset the sliding scale; a break in continuity also has no effect on the aggregated count." },

      { kind: "h2", text: "Injury at work: the six-month rule" },
      { kind: "p", text: "Absence caused by an accident, injury or assault sustained in the course of duty attracts a separate, better provision: **full pay for up to six calendar months**, regardless of the ordinary sliding scale. This covers playground accidents, assaults by pupils and road traffic collisions on duty journeys. Documenting that an injury happened at work matters enormously here — report it formally on the day it happens, however minor it seems, because retrospective reclassification is difficult." },

      { kind: "h2", text: "What half pay looks like in cash" },
      { kind: "p", text: "The transition to half pay is the moment most people underestimate. Deductions do not halve neatly: pension contributions recalculate downward on the reduced salary, but fixed commitments stay put. These indicative monthly figures show the gap for a mid-scale teacher." },
      { kind: "table", caption: "Indicative monthly net pay during sickness (M4 £40,941, rest of England)", head: ["Phase", "Gross monthly", "Approx. net"], rows: [
        ["Full pay", "£3,412", "≈£2,430"],
        ["Half pay plus SSP", "£1,706 + £194/wk", "≈£1,560"],
        ["After entitlement ends", "£0 + ESA if eligible", "varies"],
      ]},

      { kind: "h2", text: "Long-term sickness and your contract" },
      { kind: "p", text: "Once full and half pay both expire within a sick-pay year, pay stops entirely even though employment continues. Schools should review positions before entitlement expires and consider ill-health retirement routes through the Teachers' Pension Scheme for serious long-term conditions — our [pension guides](/teacher-pension/) explain how early ill-health benefits differ from normal retirement. Capability procedures run separately from sick pay and should accommodate reasonable adjustments; being signed fit by your GP while the school delays a return meeting generally means medical suspension on full pay pending resolution." },

      { kind: "h2", text: "Supply teachers and other gaps" },
      { kind: "p", text: "Agency supply teachers are not covered by the Burgundy Book's sick provisions at all — entitlement depends entirely on the agency contract, and many offer statutory minimums only. Directly engaged daily supply sits similarly outside the scheme. Teachers in Scotland operate under SNCT arrangements with their own scale, and Northern Ireland runs separate machinery again. If you are comparing offers mid-career, sick pay rarely features in the decision until it suddenly matters, yet the gap between 25-day and 100-day entitlements represents thousands of pounds of income security." },

      { kind: "h2", text: "Budgeting around reduced pay" },
      { kind: "p", text: "Half pay arrives with full-size deductions relative to income: pension contributions recalculate on the reduced amount, but rent and mortgages do not. Anyone managing a long-term condition should model the cliff edges — the day full pay ends, the day half pay ends, and week 28 when SSP exhausts. Our [budget planner](/teacher-budget-planner/) handles variable-income planning, and the [financial planning hub](/teacher-financial-planning/) puts sick-pay risk alongside its siblings: redundancy risk, maternity tapering and unplanned career breaks. If your situation tips into leaving altogether, read the [leaving teaching guide](/leaving-teaching/) before you resign, because notice timing interacts with pay protection." },
    ],
    faq: [
      { question: "How much sick pay do teachers get?", answer: "Under Burgundy Book terms, entitlement rises with service: 25 working days at full pay plus 50 at half pay in your first year, climbing to 100 full and 100 half after four years of aggregated teaching service." },
      { question: "Do teachers get paid sick leave in the first year?", answer: "Yes, but modestly: 25 working days at full pay, and 50 days at half pay once you have completed four calendar months of service. Statutory Sick Pay continues on top during the half-pay phase." },
      { question: "Do school holidays count against teacher sick pay?", answer: "No. Only working days consume entitlement. If you are on sick pay when a holiday starts, pay continues through the break without using up your allowance." },
      { question: "What happens when teacher sick pay runs out?", answer: "After full and half pay expire within the April-to-March year, pay stops although employment continues. After 28 weeks SSP ends too, at which point Employment and Support Allowance becomes the route." },
      { question: "Does sick pay reset every year for teachers?", answer: "A new entitlement year starts each 1 April, but you must be back at work to access it. Someone still absent on 1 April continues on the previous year's exhausted entitlement." },
      { question: "Do supply teachers get sick pay?", answer: "Agency supply teachers are not covered by the Burgundy Book sick pay scheme. Any entitlement comes from the agency's own contract, which is often statutory minimum only." },
      { question: "Is teacher sick pay different in academies?", answer: "It can be. Academies and independent schools may set their own schemes, though many mirror the Burgundy Book. Check your trust's sick pay policy and your contract." },
      { question: "What happens if I am injured at work as a teacher?", answer: "Absence caused by a work accident, injury or assault carries a separate entitlement of full pay for up to six calendar months, independent of the ordinary sliding scale." },
      { question: "Does moving schools affect my teacher sick pay?", answer: "No. Aggregated teaching service across local authorities determines your place on the scale, so changing schools does not reset your entitlement." },
      { question: "How long can a teacher be off sick on full pay?", answer: "It depends on aggregated service: 25 working days of full pay in your first year, rising to 100 working days after four years. Only school working days count, so calendar coverage stretches across several months, and holidays on sick pay consume nothing." },
      { question: "Do I need a fit note for teacher sick pay?", answer: "From the eighth calendar day of absence onward. Before that, a self-certification form covers the absence when you return." },
    ],
    sources: [
      { label: "NEU — Teachers' sick pay and sick leave entitlement", url: "https://neu.org.uk/advice/your-rights-work/contracts/sick-leave/teachers-sick-pay-and-sick-leave-entitlement" },
      { label: "NASUWT — Sick leave and sick pay entitlement for teachers", url: "https://www.nasuwt.org.uk/advice/health-safety/sickness-absence/sick-leave-pay-entitlement-teachers-england-wales.html" },
      { label: "GOV.UK — Statutory Sick Pay", url: "https://www.gov.uk/statutory-sick-pay" },
      { label: "Burgundy Book — Conditions of Service for School Teachers (NEU library)", url: "https://neu.org.uk/latest/library/burgundy-book" },
    ],
    updated: "2026-08-23",
  },

  // ------------------------------------------------------------ STRB
  {
    slug: "strb-pay-review-body",
    hub: "policy",
    title: "STRB: The Pay Review Body Explained",
    metaTitle: "STRB Explained: School Teachers' Review Body",
    metaDescription:
      "What the School Teachers' Review Body does, who sits on it, how its recommendations became the 3.5% award, and how to read its reports and remit letters.",
    primaryKeyword: "strb",
    secondaryKeywords: [
      "school teachers review body", "strb teacher pay", "strb report",
      "strb teacher pay recommendation", "strb remit letter", "strb teacher pay 2026",
      "teachers pay review body", "strb pay award", "what is the strb",
      "strb evidence", "strb recommendation accepted", "teacher pay body",
      "strb teacher pay 2026", "school teachers review body 36th report",
    ],
    calculator: "none",
    intro:
      "The **School Teachers' Review Body (STRB)** is the independent committee whose recommendation sets the ceiling for every teacher pay round in England and Wales. It has no power to award a pay rise itself — it advises, the Secretary of State decides — yet its reports shape billions of pounds of school budgets and every teacher's September payslip. This guide explains what the STRB actually does, who sits on it, how evidence from unions and government turns into a recommendation, and how to find the documents behind each year's headline number.",
    keyTakeaways: [
      "The STRB is an advisory review body created under the School Teachers' Pay and Conditions Act 1991.",
      "It recommends pay awards; the Secretary of State for Education makes the final decision and can depart from it.",
      "Its remit letter from the DfE defines what each year's report must examine.",
      "Recent outcomes: 5.5% recommended and accepted for 2024/25, 4% for 2025/26, 3.5% for 2026/27.",
      "Reports, remit letters and evidence submissions are all published on GOV.UK.",
    ],
    blocks: [
      { kind: "h2", text: "What the STRB is — and is not" },
      { kind: "p", text: "Created by the School Teachers' Pay and Conditions Act 1991, the STRB exists to take the politics out of individual pay rounds by delegating analysis to an independent panel. It considers written and oral evidence, publishes a report with recommendations, and hands the decision back to ministers. Its remit covers the pay framework that maintained schools in England apply through the STPCD, with Wales running parallel machinery for its own schools. Three boundaries define its role." },
      { kind: "ul", items: [
        "**Advisory only.** Its recommendations bind nobody until the Secretary of State accepts them. Departures are rare since 2023, but legally routine.",
        "**England and Wales core terms.** It examines the pay and conditions framework reflected in the STPCD; devolved administrations elsewhere negotiate through separate bodies.",
        "**Scope set by ministers.** Each year's remit letter defines the questions — usually the size of the award, sometimes structural issues like allowances or leadership spines.",
      ]},
      { kind: "callout", tone: "info", title: "Review body, not regulator", text: "People often assume the STRB 'sets' teacher pay the way Ofqual regulates exams. It is closer to a standing commission of inquiry: influential, evidence-driven, and entirely dependent on government accepting its advice. Our [pay rise guide](/teacher-pay-rise/) shows where the STRB step fits in the full annual cycle." },

      { kind: "h2", text: "Who sits on the review body" },
      { kind: "p", text: "Members are appointed by ministers, typically serving three-year terms, drawn from backgrounds in education, employment relations, economics and public administration. The chair and members are expected to act independently once appointed, and the secretariat is provided by the Office of Manpower Economics rather than the Department for Education itself — a structural detail intended to keep evidence handling at arm's length from the department that also funds schools." },
      { kind: "table", caption: "Who feeds into an STRB report", head: ["Participant", "Contribution"], rows: [
        ["Teacher unions (NEU, NASUWT, ASCL, NAHT)", "Written and oral evidence on recruitment, retention and comparability"],
        ["Department for Education", "Evidence on affordability, funding and labour market data"],
        ["Local government employers", "Evidence on costs, workforce planning and regional variation"],
        ["Office of Manpower Economics", "Secretariat and analytical support"],
      ]},
      { kind: "p", text: "Composition matters because the panel's instincts shape how evidence is weighed. A body weighted toward economics reads vacancy data differently from one weighted toward school leadership experience. Successive chairs have tended to stress affordability alongside fairness, which is why union submissions increasingly front-load recruitment statistics — the argument that lands is the one framed in the terms the panel already uses. Teachers reading published evidence submissions will notice this dynamic throughout: both sides translate their case into retention economics, workforce planning language and comparability tables before the oral sessions begin." },

      { kind: "h2", text: "How one pay round works, end to end" },
      { kind: "ol", items: [
        "**Remit letter (autumn).** The DfE asks the STRB what to examine for the following September, often constraining the frame with affordability language before any evidence is heard.",
        "**Written evidence (winter).** Unions typically argue for catch-up plus inflation; the DfE models cost per percentage point against school budgets.",
        "**Oral sessions (spring).** Panel members question witnesses directly — the transcripts reveal where the arguments actually clash.",
        "**Report (spring/summer).** The STRB publishes analysis and a recommended percentage, sometimes with minority positions.",
        "**Decision (summer).** The Secretary of State accepts, modifies or rejects; the outcome lands in the STPCD weeks later.",
      ]},

      { kind: "h2", text: "Recent STRB outcomes" },
      { kind: "table", caption: "Recommendations versus decisions, recent rounds", head: ["School year", "STRB context", "Outcome"], rows: [
        ["2023/24", "Report amid strike action and record vacancy data", "6.5% recommended; accepted in full"],
        ["2024/25", "Continued retention pressure", "5.5% recommended; accepted in full"],
        ["2025/26", "Inflation normalising", "4% recommended; accepted in full"],
        ["2026/27", "Multi-year settlement negotiated alongside", "3.5% recommended; accepted as part one of a two-year deal"],
      ]},
      { kind: "p", text: "The pattern since 2023 matters: after years of governments departing from or capping recommendations, four consecutive acceptances rebuilt confidence in the process — while union evidence increasingly argues that cumulative awards still trail real-terms losses since 2010. Whether acceptance reflects independence or pre-negotiated settlements is precisely what union submissions dispute each spring." },

      { kind: "h2", text: "Why the multi-year 2026 deal changed the STRB's role" },
      { kind: "p", text: "The 2026 settlement broke the single-year pattern: government and unions agreed a two-year deal worth around 6.6% across 2026/27 and 2027/28, announced alongside the STRB process rather than purely through it. Multi-year arrangements reduce the review body's annual leverage because part of the answer arrives pre-agreed — the STRB's examination then focuses on implementation and the residual second-year figure. Watch whether future remit letters narrow accordingly." },
      { kind: "p", text: "For teachers, the practical effect is predictability rather than process. Knowing roughly what September 2027 brings makes medium-term decisions — mortgage applications, training commitments, promotion timings — easier to model a year ahead, because the second-year figure is signposted even before the STRB convenes. The trade-off, union critics argue, is that pre-agreed deals remove the annual moment of public pressure where recruitment evidence historically moved ministers." },

      { kind: "h2", text: "Where to find STRB documents" },
      { kind: "p", text: "Everything is published on GOV.UK under the School Teachers' Review Body: the remit letters, the union and employer evidence, oral evidence transcripts, the final reports, and the government's responses. Reports are numbered sequentially — the round covering 2026/27 is the **36th report**, so citing \"School Teachers' Review Body 36th Report: 2026\" finds it directly even when the blog coverage does not link it. Reading the response letter is often more revealing than the report itself, because it states explicitly whether each element was accepted and why. For the downstream effect on your own salary, our [2026/27 award breakdown](/teacher-pay-rise-2026-27/) translates the latest recommendation into figures at every pay point, and the archived [2025 round](/teacher-pay-rise-2025/) does the same for last year's 4%." },

      { kind: "h2", text: "How teachers can influence the process" },
      { kind: "p", text: "Individual teachers cannot submit directly, but union membership feeds the evidence base: pay surveys, workload data and resignation statistics submitted by NEU, NASUWT, ASCL and NAHT form the core of the retention argument each round. Headteacher associations' evidence carries particular weight on leadership spine issues — see our [leadership pay scale guide](/leadership-pay-scale/) for what those arguments are about — and local authority employers contribute the budget-side view. The most effective individual contribution remains completing union pay surveys accurately: vacancy and exit data drive more recommendations than anecdote ever will." },

      { kind: "h2", text: "Key dates in the annual calendar" },
      { kind: "table", caption: "The STRB year at a glance", head: ["When", "What happens"], rows: [
        ["Autumn term", "Remit letter issued; unions begin surveying members for evidence"],
        ["December – February", "Written evidence submitted by all parties"],
        ["March – April", "Oral evidence sessions held and transcribed"],
        ["Spring – early summer", "Report published with recommendations"],
        ["Summer", "Government response; STPCD drafted with the accepted figures"],
        ["Late August", "STPCD published ahead of 1 September implementation"],
      ]},
      { kind: "p", text: "Timing matters for payroll as well as news-watching: schools budget against the recommended figure before it is legally theirs, and late government responses squeeze the window between decision and implementation. When rounds run late, September arrears become more likely — worth remembering when checking your first payslip of the year against the published scale." },

      { kind: "h2", text: "Common misconceptions about the STRB" },
      { kind: "ul", items: [
        "\"**The STRB sets our pay.**\" No — it recommends; ministers decide and publish via the STPCD.",
        "\"**Its recommendation covers Scotland.**\" Scottish teacher pay runs through SNCT machinery entirely separately.",
        "\"**A rejected recommendation means no rise.**\" Government can substitute its own figure; only the STPCD number counts.",
        "\"**The STRB handles pensions too.**\" TPS scheme design sits outside its remit; see our [pension guides](/teacher-pension/) for those rules.",
      ]},
    ],
    faq: [
      { question: "What does STRB stand for?", answer: "The School Teachers' Review Body. It is the independent advisory committee that examines teacher pay and conditions in England and Wales and recommends annual pay awards to the Secretary of State." },
      { question: "Does the STRB decide teacher pay rises?", answer: "No. It recommends; the Secretary of State for Education makes the final decision and publishes it through the STPCD. Recent recommendations have been accepted in full." },
      { question: "When does the STRB report each year?", answer: "Typically between March and May, with the government response in early summer ahead of the STPCD publication in late August. Multi-year deals can shift this timetable." },
      { question: "What was the STRB recommendation for 2026?", answer: "3.5%, which the government accepted as part one of a two-year deal worth around 6.6% across 2026/27 and 2027/28 combined." },
      { question: "Can the government ignore the STRB?", answer: "Yes. Its recommendations are advisory. Governments departed from them several times historically, though every recommendation since 2023 has been accepted in full." },
      { question: "Does the STRB cover Scotland?", answer: "No. Scottish teacher pay is negotiated through the SNCT between the Scottish Government and councils. The STRB's remit covers England and Wales terms." },
      { question: "Where can I read STRB reports?", answer: "On GOV.UK, which publishes the remit letters, written and oral evidence, final reports and the government's responses each year." },
      { question: "Who gives evidence to the STRB?", answer: "The teacher unions (NEU, NASUWT, ASCL, NAHT), the Department for Education, and local government employers, supported by the Office of Manpower Economics as secretariat." },
      { question: "Is the STRB independent of the DfE?", answer: "Structurally yes: members are appointed for fixed terms and the secretariat sits with the Office of Manpower Economics. Critics note the DfE still writes each year's remit letter, framing what can be examined." },
      { question: "How does an STRB recommendation reach my payslip?", answer: "The Secretary of State accepts or amends it, publishes the figures in the STPCD in late August, and schools apply them from 1 September. Any payroll delay usually appears as arrears in October or November payslips." },
    ],
    sources: [
      { label: "GOV.UK — School Teachers' Review Body", url: "https://www.gov.uk/government/organisations/school-teachers-review-body" },
      { label: "STPCD 2026 — School Teachers' Pay and Conditions Document (DfE)", url: "https://www.gov.uk/government/publications/school-teachers-pay-and-conditions" },
      { label: "NEU — Teachers' pay award advice", url: "https://neu.org.uk/advice/your-rights-work/pay-advice/teachers-pay-award" },
      { label: "NASUWT — Pay Award England", url: "https://www.nasuwt.org.uk/advice/pay-pensions/pay-award/pay-award-england.html" },
    ],
    updated: "2026-08-23",
  },
];
