import type { PageContent } from "../types";

const UPDATED = "2026-08-26";

const SOURCES = [
  { label: "Teachers' Pensions — phased retirement guidance", url: "https://www.teacherspensions.co.uk/members/working-life/phased-retirement.htm" },
  { label: "Teachers' Pensions — deferred members hub", url: "https://www.teacherspensions.co.uk/members/deferred-members.htm" },
  { label: "Teachers' Pensions — breaks in service", url: "https://www.teacherspensions.co.uk/members/working-life/break-in-service.htm" },
  { label: "Teachers' Pension Scheme Regulations 2014", url: "https://www.legislation.gov.uk/uksi/2014/876" },
  { label: "NEU — Teachers' Pension Scheme advice", url: "https://neu.org.uk/advice/your-rights-work/pensions/teachers-pension-scheme" },
];

export const pensionExtras2Pages: PageContent[] = [
  // ────────────────────────────────────────── phased retirement
  {
    slug: "teacher-phased-retirement",
    hub: "pensions",
    title: "Teachers' Pension Phased Retirement Explained",
    metaTitle: "Teachers' Pension Phased Retirement Calculator",
    metaDescription:
      "How phased retirement works in the Teachers' Pension Scheme: reduce your role, draw part of your pension, keep accruing. Free calculator and guide.",
    primaryKeyword: "teachers pension phased retirement",
    secondaryKeywords: [
      "teachers pensions phased retirement", "teachers pension phased retirement lump sum",
      "phased retirement teachers pension", "teacher pension phased retirement calculator",
      "phased retirement tps", "part time phased retirement teacher",
      "tps phased retirement", "npa phased retirement",
      "teachers pension scheme phased retirement", "phased retirement and pension accrual",
    ],
    calculator: "phased-retirement",
    intro:
      "Phased retirement lets you draw part of your Teachers' Pension while continuing to work — and accrue new pension — on a reduced basis. Instead of an abrupt stop at 67, you step down gradually: retire from, say, 40% of your role, draw pension on that slice, and keep teaching the remaining 60%. The calculator above models exactly what that looks like in pounds, and this guide covers the rules, the actuarial reductions, the lump sum mechanics, and the practical steps to get your employer to agree.",
    keyTakeaways: [
      "Phased retirement lets you draw pension on the retired portion of your role while continuing to work and accrue on the rest.",
      "You can take phased retirement from age 55 (rising to 57 from 2028), but taking pension before your NPA triggers an actuarial reduction.",
      "The retired portion is subject to the same early-retirement reduction factors as full early retirement — roughly 5% per year before NPA.",
      "You continue to build new pension at 1/57th on the salary you keep earning.",
      "A tax-free lump sum is available on the retired portion, commuted at the standard 12:1 rate.",
      "Your employer must agree — phased retirement requires a genuine reduction in your contracted role, not just fewer hours.",
    ],
    blocks: [
      { kind: "h2", text: "How phased retirement works in the TPS" },
      { kind: "p", text: "In a standard retirement you leave your job, your accrual stops, and your entire pension comes into payment. Phased retirement splits those events: you retire from a portion of your role and draw a matching portion of your accrued pension, while the rest of your contract — and your pension membership — continues." },
      { kind: "p", text: "The key mechanism is that Teachers' Pensions treats the transition as two separate things happening at once. On the retired portion, you become a pensioner. On the remaining portion, you stay an active member building at [1/57th of your continuing salary](/teacher-pension-contributions/). The two can coexist because the TPS regulations allow partial crystallisation of benefits." },
      { kind: "callout", tone: "info", title: "Minimum reduction", text: "Teachers' Pensions requires a genuine reduction of at least 20% in your pensionable salary or hours for phased retirement to apply. A token reduction of one or two hours a week will not qualify." },

      { kind: "h2", text: "Who is phased retirement for?" },
      { kind: "p", text: "Phased retirement suits teachers who want to wind down gradually rather than face the cliff edge of full retirement. Common scenarios include:" },
      { kind: "ul", items: [
        "A head teacher at 60 who wants to step back from full-time leadership but keep teaching two or three days a week.",
        "A teacher at 55 whose health makes full-time work difficult, but who is not ready — or cannot afford — to stop entirely.",
        "Anyone who wants to start drawing pension early to clear a mortgage, while keeping some salary and continuing to build new benefits.",
        "A teacher whose partner is already retired and who wants to share more time together without losing all earned income.",
      ]},
      { kind: "p", text: "If you simply want to reduce your hours without drawing any pension yet, that is a part-time arrangement, not phased retirement. Use the [part-time teacher pay calculator](/part-time-teacher-pay-calculator/) to model that instead." },

      { kind: "h2", text: "The actuarial reduction on early phased retirement" },
      { kind: "p", text: "If you take phased retirement before your Normal Pension Age, the retired portion of your pension is reduced by an actuarial factor — just as it would be for full early retirement. The factors are approximately 5% per year before NPA, compounding:" },
      { kind: "table", caption: "Indicative actuarial reduction factors by years before NPA", head: ["Years before NPA", "Pension retained", "Reduction"], rows: [
        ["0 (at NPA)", "100%", "None"],
        ["1", "95.0%", "5.0%"],
        ["2", "90.0%", "10.0%"],
        ["3", "85.5%", "14.5%"],
        ["5", "77.3%", "22.7%"],
        ["7", "70.1%", "29.9%"],
        ["10", "60.8%", "39.2%"],
        ["12 (age 55 with NPA 67)", "~56%", "~44%"],
      ]},
      { kind: "callout", tone: "warn", title: "The reduction is permanent", text: "An actuarial reduction is not a temporary penalty — it reduces your pension for life. A 30% reduction at age 60 means 30% less every year until you die. Model the numbers carefully before committing." },
      { kind: "p", text: "The [early retirement page](/teacher-early-retirement/) explains the full reduction mechanics and gives more worked examples." },

      { kind: "h2", text: "Worked example: stepping down from full-time at age 60" },
      { kind: "p", text: "Sarah is 60, on UPS 3 (£52,835), with £15,000 annual accrued pension and NPA 67. She wants to reduce to a 0.6 contract." },
      { kind: "table", caption: "Sarah's phased retirement at 60", head: ["Component", "Calculation", "Annual amount"], rows: [
        ["Accrued pension (total)", "—", "£15,000"],
        ["Retired portion (40%)", "£15,000 × 0.40", "£6,000"],
        ["Actuarial reduction (7 yrs early)", "£6,000 × 0.701", "£4,206"],
        ["Ongoing salary (60%)", "£52,835 × 0.60", "£31,701"],
        ["Combined income", "£4,206 + £31,701", "£35,907"],
        ["New annual accrual", "£31,701 × 1/57", "£556"],
      ]},
      { kind: "p", text: "Sarah's combined income is £35,907 — less than her current £52,835, but she works three days a week and draws pension income. She also continues building £556 of new pension each year on the working portion." },
      { kind: "p", text: "If Sarah waits until NPA (67) to take the remaining 60%, there is no reduction on that portion. Alternatively she could take a second phased retirement at 63, 64, or 65 with a smaller reduction." },

      { kind: "h2", text: "The lump sum option on phased retirement" },
      { kind: "p", text: "You can commute part of the retired pension portion into a tax-free lump sum, using the same 12:1 factor as a full retirement. For every £1 of annual pension you give up, you receive £12 as a one-off payment. The maximum lump sum is approximately 5.36 times your annual pension on the retired portion." },
      { kind: "p", text: "Using Sarah's example above: her reduced pension of £4,206 gives a maximum lump sum of about £22,544. Taking the full lump sum would reduce her ongoing pension from the retired portion to approximately £2,327 per year. The [lump sum calculator](/teacher-pension-lump-sum/) can model the trade-off." },

      { kind: "h2", text: "How to apply for phased retirement" },
      { kind: "ol", items: [
        "Discuss with your head teacher or governing body at least a term before your intended date. Phased retirement requires a genuine contractual change — your employer must agree to the reduced role.",
        "Confirm the new contracted hours or FTE fraction in writing. The reduction must be at least 20% of your pensionable salary.",
        "Complete the phased retirement application through your employer. They submit the notification to Teachers' Pensions.",
        "Teachers' Pensions issues your benefit statement showing the pension payable on the retired portion and any actuarial reduction.",
        "On the agreed date your pension payments begin on the retired portion, and your payroll switches to the reduced salary.",
      ]},
      { kind: "callout", tone: "tip", title: "Timing matters", text: "Apply well before the end of a term — Teachers' Pensions typically needs at least 4 months to process a phased retirement application. Missing the window means delaying by a whole term." },

      { kind: "h2", text: "Tax implications of phased retirement" },
      { kind: "p", text: "Your pension income and your ongoing salary are both taxable. Because they are added together for income tax purposes, you may find that a large combined income pushes you into a higher tax bracket. Use the [teacher tax calculator](/teacher-tax-calculator/) to model your new position." },
      { kind: "p", text: "The lump sum is tax-free provided it stays within the standard allowances. Since April 2024, the tax-free lump sum is capped at £268,275 across your lifetime — most teachers will not hit this, but it is worth checking if you have other pension pots." },

      { kind: "h2", text: "Phased retirement vs part-time working vs full early retirement" },
      { kind: "table", caption: "Comparing your options for winding down", head: ["Option", "Pension drawn?", "Still accruing?", "Employer agreement?"], rows: [
        ["Part-time reduction", "No", "Yes (on reduced salary)", "Yes"],
        ["Phased retirement", "Yes (retired portion)", "Yes (working portion)", "Yes"],
        ["Full early retirement", "Yes (all)", "No", "No (you resign)"],
        ["Flexible retirement (LGPS)", "Yes (partial)", "Yes", "Yes"],
      ]},
      { kind: "p", text: "For support staff on the LGPS rather than TPS, the equivalent is called flexible retirement. The [LGPS pension calculator](/lgps-pension-calculator/) covers the differences." },

      { kind: "h2", text: "Common mistakes with phased retirement" },
      { kind: "ul", items: [
        "Assuming it is automatic — your employer can refuse if they need the full-time role filled.",
        "Forgetting that the actuarial reduction is permanent, not temporary.",
        "Not checking the combined tax position — salary plus pension can push you into the 40% bracket.",
        "Applying too late — allow at least 4 months before the intended start date.",
        "Confusing phased retirement with simply going part-time — they are different under the TPS regulations.",
      ]},
    ],
    faq: [
      { question: "Can I take phased retirement at 55?", answer: "Yes, from age 55 (rising to 57 from 2028), but the retired portion will receive a significant actuarial reduction — roughly 39% for retiring 12 years before NPA 67." },
      { question: "How many times can I take phased retirement?", answer: "You can take phased retirement more than once. For example, you could reduce from 100% to 60% at age 60, then from 60% to 40% at age 63, drawing pension on each retired tranche separately." },
      { question: "Does phased retirement affect my State Pension?", answer: "No. The State Pension is based on your National Insurance record, not your TPS membership. Phased retirement does not reduce your NI contributions as long as you earn above the lower earnings limit." },
      { question: "Can I take a lump sum with phased retirement?", answer: "Yes. You can commute part of the retired portion into a tax-free lump sum at the standard 12:1 rate, just as you would with a full retirement." },
      { question: "What happens to the pension I keep building?", answer: "New pension accrued on the working portion continues to build at 1/57th of your reduced salary, revalued at CPI + 1.6% each year. When you fully retire, this second tranche comes into payment." },
      { question: "Can my employer refuse phased retirement?", answer: "Yes. Phased retirement requires a genuine contractual change to your role, so your employer must agree. They may refuse if they cannot accommodate the reduced hours or if it would adversely affect the school." },
      { question: "Is phased retirement the same as flexible retirement?", answer: "No. Phased retirement is the TPS term; flexible retirement is the LGPS equivalent for support staff. The mechanics are similar but the schemes have different accrual rates and rules." },
      { question: "What if I change my mind after phased retirement?", answer: "Once pension is in payment on the retired portion, you cannot reverse it. You could increase your working hours again (subject to employer agreement), but the pension already crystallised stays in payment." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ────────────────────────────────────────── deferred pension
  {
    slug: "teacher-deferred-pension",
    hub: "pensions",
    title: "Deferred Teachers' Pension: What Happens If You Leave",
    metaTitle: "Deferred Teachers' Pension Calculator & Guide",
    metaDescription:
      "What happens to your teachers' pension if you leave teaching: deferred benefits, CPI revaluation, drawing early and lump sum options. Free calculator.",
    primaryKeyword: "teachers pension deferred benefits",
    secondaryKeywords: [
      "deferred teacher pension", "deferred pension teaching",
      "teachers pension deferred member", "what happens to teachers pension if you leave",
      "teacher pension if you leave teaching", "deferred pension revaluation",
      "teachers pension frozen", "deferred pension calculator teacher",
      "how much is my deferred teacher pension worth", "teacher deferred pension growth",
    ],
    calculator: "deferred-pension",
    intro:
      "If you leave teaching before your Normal Pension Age, the pension you have already built does not disappear — it becomes a **deferred benefit** that sits in the Teachers' Pension Scheme, revaluing each year by CPI until you are old enough to draw it. The question every teacher leaving the profession asks is: what will it actually be worth by then? The calculator above answers that. This guide covers the revaluation rules, your options for drawing early, the lump sum trade-off, and the critical difference between deferred and active revaluation rates.",
    keyTakeaways: [
      "Your accrued pension stays in the TPS when you leave — it is not lost, frozen or transferred automatically.",
      "Deferred benefits are revalued each year by CPI only, not the CPI + 1.6% that active members receive.",
      "Over 30 years, the difference between CPI and CPI + 1.6% revaluation can mean 30–40% less pension at retirement.",
      "You can draw deferred benefits from age 55 (rising to 57 from 2028), but an actuarial reduction applies before NPA.",
      "If you return to teaching, you rejoin the TPS and resume active membership — your deferred benefits transfer back to active status.",
    ],
    blocks: [
      { kind: "h2", text: "What is a deferred pension?" },
      { kind: "p", text: "A deferred pension is the benefit you have already earned in the Teachers' Pension Scheme but are not yet old enough to draw. When you leave teaching — whether by resignation, redundancy, or moving to a non-eligible role — Teachers' Pensions reclassifies you as a **deferred member**. Your accrued pension is preserved in the scheme and continues to grow, but at a slower rate than if you stayed." },
      { kind: "p", text: "This is fundamentally different from a defined contribution pot. There is no investment risk, no fund value that rises and falls with markets. Your deferred pension is a guaranteed annual income, payable for life from the date you choose to draw it." },

      { kind: "h2", text: "How deferred revaluation works" },
      { kind: "p", text: "While you are paying into the TPS, your accrued pension is revalued by **CPI + 1.6%** each year. The moment you leave, that changes to **CPI only**. The 1.6% top-up vanishes, and over decades the compounding difference is substantial." },
      { kind: "table", caption: "Revaluation comparison: £5,000 accrued pension over time", head: ["Years deferred", "Active (CPI + 1.6%)", "Deferred (CPI only)", "Difference"], rows: [
        ["5", "£5,967", "£5,520", "£447"],
        ["10", "£7,120", "£6,095", "£1,025"],
        ["15", "£8,496", "£6,729", "£1,767"],
        ["20", "£10,138", "£7,430", "£2,708"],
        ["25", "£12,097", "£8,203", "£3,894"],
        ["30", "£14,435", "£9,057", "£5,378"],
      ]},
      { kind: "p", text: "At 2% CPI over 30 years, the same £5,000 of pension grows to £14,435 for an active member but only £9,057 for a deferred member — a gap of £5,378 per year, every year, for life. This is the real cost of leaving the profession early. The [pension calculator](/teacher-pension-calculator/) can project your specific scenario." },

      { kind: "h2", text: "Drawing your deferred pension early" },
      { kind: "p", text: "You do not have to wait until NPA. Deferred benefits can be drawn from age 55 (rising to 57 from April 2028), but an **actuarial reduction** applies for each year you draw before your NPA. The reduction is permanent — it reduces your pension for the rest of your life." },
      { kind: "table", caption: "Actuarial reduction on deferred benefits drawn early", head: ["Draw at age", "Years before NPA 67", "Pension retained", "On £8,000 deferred"], rows: [
        ["67 (NPA)", "0", "100%", "£8,000/yr"],
        ["65", "2", "90.0%", "£7,200/yr"],
        ["63", "4", "81.3%", "£6,504/yr"],
        ["60", "7", "70.1%", "£5,608/yr"],
        ["57", "10", "60.8%", "£4,864/yr"],
        ["55", "12", "~56%", "~£4,480/yr"],
      ]},
      { kind: "p", text: "For a deeper breakdown of early retirement mechanics, see the [early retirement guide](/teacher-early-retirement/)." },

      { kind: "h2", text: "The lump sum option for deferred members" },
      { kind: "p", text: "When you draw your deferred pension — whether at NPA or earlier — you can exchange part of it for a tax-free lump sum at the standard 12:1 commutation rate. For every £1 of annual pension you give up, you receive £12 as a one-off payment." },
      { kind: "p", text: "The maximum lump sum is approximately 5.36 times your annual pension. On £8,000 of deferred pension that works out at about £42,880 as a lump sum, reducing the ongoing pension to around £4,427 per year. The [lump sum calculator](/teacher-pension-lump-sum/) can model the exact trade-off." },

      { kind: "h2", text: "What if you return to teaching?" },
      { kind: "p", text: "If you rejoin a TPS-eligible post, you re-enter the scheme as an active member. Your deferred benefits are linked back to your active record and resume receiving the higher CPI + 1.6% revaluation on everything — including the pension that was deferred during your absence." },
      { kind: "p", text: "This means there is no permanent penalty for leaving and returning, beyond the lost accrual during the gap and the lower revaluation rate during the deferred years. The [career break impact calculator](/teacher-pension-career-break/) quantifies this gap precisely." },
      { kind: "callout", tone: "tip", title: "Even a short return helps", text: "Returning to a TPS-eligible role for even a few years before NPA restores the active revaluation rate on all your benefits. If you are within a few years of retirement and considering a return, the pension uplift alone can be worth thousands." },

      { kind: "h2", text: "Transferring your deferred pension" },
      { kind: "p", text: "You can request a Cash Equivalent Transfer Value (CETV) from Teachers' Pensions and transfer your deferred benefits to another pension scheme. However, this is almost never recommended for TPS members:" },
      { kind: "ul", items: [
        "The TPS is a guaranteed, inflation-linked pension — a CETV converts it into a money-purchase pot with investment risk.",
        "Transfer values for unfunded public sector schemes are calculated conservatively, so the CETV is typically much less than the lifetime value of the pension.",
        "Since April 2015, transfers of benefits worth more than £30,000 require independent financial advice by law.",
        "Scam transfer offers targeting teachers are common — always check the FCA register.",
      ]},
      { kind: "p", text: "For most teachers, keeping the deferred pension in the TPS is the right answer. If you want professional advice, the [pension advice guide](/teacher-pension-advice/) covers what to look for." },

      { kind: "h2", text: "Death benefits for deferred members" },
      { kind: "p", text: "If you die as a deferred member, the TPS pays a lump sum of 2.25 times your deferred pension to your nominated beneficiaries (or estate). There is no adult survivor pension for CARE-only deferred members — that benefit applies only to final salary service or active members." },
      { kind: "p", text: "This is a significant difference from active membership, where a surviving spouse or partner receives a pension. If your dependants rely on you financially, life insurance outside the TPS is worth considering while you are a deferred member. The [death in service guide](/teacher-pension-death-in-service/) explains the full picture." },

      { kind: "h2", text: "How to check your deferred pension" },
      { kind: "ol", items: [
        "Log in to your Teachers' Pensions account at teacherspensions.co.uk.",
        "Navigate to My Benefits — your deferred benefit statement shows the annual pension at the date you left.",
        "The revalued figure (what it is worth now) should appear on your annual statement, usually issued each autumn.",
        "If you cannot access your account, call Teachers' Pensions on 0345 6066166 with your TPS reference number.",
      ]},

      { kind: "h2", text: "Deferred pension and the State Pension" },
      { kind: "p", text: "Your deferred TPS pension is completely separate from the State Pension. The State Pension is based on your National Insurance record — you need 35 qualifying years for the full amount. Leaving teaching does not affect NI years already credited, but a long career break without NI contributions could create gaps." },
      { kind: "p", text: "Check your State Pension forecast at gov.uk/check-state-pension to see whether you have any gaps worth filling with voluntary contributions. The [pension age guide](/teacher-pension-age/) explains how the two pensions interact." },
    ],
    faq: [
      { question: "Is my deferred teacher pension frozen?", answer: "No. A deferred pension is not frozen — it increases each year by CPI. The term 'frozen pension' usually refers to overseas state pensions. Your TPS deferred pension keeps pace with inflation, just without the extra 1.6% active members receive." },
      { question: "How much is my deferred teacher pension worth?", answer: "Check your annual benefit statement on the Teachers' Pensions website for the revalued figure. Alternatively, use the calculator above with your original deferred amount and the year you left to project forward." },
      { question: "Can I draw my deferred pension at 55?", answer: "Yes, from age 55 (rising to 57 from April 2028). An actuarial reduction of roughly 5% per year before your NPA applies, so at 55 with NPA 67 you would receive approximately 56% of the full amount." },
      { question: "What happens if I die with a deferred pension?", answer: "A lump sum of 2.25 times your deferred pension is paid to your nominated beneficiaries. There is no adult survivor pension for CARE-only deferred members." },
      { question: "Should I transfer my deferred teacher pension?", answer: "Almost certainly not. The TPS is a guaranteed, inflation-linked pension that would be extremely expensive to replicate privately. Transfers worth over £30,000 require independent financial advice by law." },
      { question: "Can I pay into the TPS to fill the gap?", answer: "No. You cannot make voluntary contributions to the TPS while you are a deferred member. You can only accrue new TPS benefits by returning to a TPS-eligible teaching post." },
      { question: "Does my deferred pension affect Universal Credit?", answer: "A deferred pension that is not yet in payment does not count as income for Universal Credit purposes. Once you start drawing it, the pension income is treated as unearned income." },
      { question: "What if I rejoin the TPS after years away?", answer: "Your deferred benefits are linked back to your active record and resume receiving the higher CPI + 1.6% revaluation. There is no penalty — you simply missed the accrual and the higher revaluation rate during the gap." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },

  // ────────────────────────────────────────── career break
  {
    slug: "teacher-pension-career-break",
    hub: "pensions",
    title: "How a Career Break Affects Your Teachers' Pension",
    metaTitle: "Career Break & Teachers' Pension: Impact Guide",
    metaDescription:
      "How a career break affects your teachers' pension: lost accrual, deferred revaluation, rejoining rules, maternity and unpaid leave. Free calculator.",
    primaryKeyword: "teacher pension career break",
    secondaryKeywords: [
      "career break teaching pension", "maternity leave teacher pension",
      "teachers pension unpaid leave", "does career break affect teachers pension",
      "teacher pension gap years", "pension contributions during career break",
      "rejoining teachers pension scheme", "teachers pension break in service",
      "part time teaching pension impact", "teacher pension service break rules",
    ],
    calculator: "career-break",
    intro:
      "Taking a career break from teaching is one of the biggest pension decisions you will make — not because the rules are complicated, but because the cost hides in the compounding. Every year you are out of the TPS, you lose 1/57th of accrual **and** your existing pension drops from CPI + 1.6% revaluation to CPI only. Over a three-year break starting at M6, that gap compounds to roughly £3,000–£4,000 less pension per year at retirement. The calculator above shows your exact position, and this guide covers the rules for every type of break: unpaid leave, maternity, career breaks, and leaving teaching entirely.",
    keyTakeaways: [
      "During an unpaid career break you stop accruing new pension — no contributions, no 1/57th added to your pot.",
      "Your existing pension becomes deferred and revalues at CPI only, losing the extra 1.6% active members receive.",
      "A 3-year break for a mid-career teacher on M6 typically costs £3,000–£4,000 less annual pension at retirement.",
      "Maternity and adoption leave are partially protected — you continue accruing during paid maternity leave.",
      "When you return, you rejoin the TPS immediately and your benefits resume the higher CPI + 1.6% revaluation rate.",
      "The contributions you save during the break partially offset the pension loss — the calculator shows both sides.",
    ],
    blocks: [
      { kind: "h2", text: "What happens to your pension during a career break" },
      { kind: "p", text: "When you take an unpaid career break, two things happen to your Teachers' Pension:" },
      { kind: "ol", items: [
        "**Accrual stops.** You are no longer paying contributions, so you do not build any new pension. Each year out costs you 1/57th of that year's pensionable pay in lost annual pension.",
        "**Revaluation drops.** Your existing accrued pension switches from the active revaluation rate (CPI + 1.6%) to the deferred rate (CPI only). The 1.6% top-up you lose each year compounds over your remaining career.",
      ]},
      { kind: "p", text: "The first cost is obvious: miss three years of service, lose three years of pension building. The second cost is hidden and usually larger: the compounding effect of 1.6% less revaluation each year, applied to your entire existing pot, adds up significantly over two or three decades." },
      { kind: "p", text: "For a detailed look at how deferred revaluation works, see the [deferred pension guide](/teacher-deferred-pension/)." },

      { kind: "h2", text: "How much does a career break actually cost?" },
      { kind: "p", text: "The cost depends on your salary, how much pension you have already built, how long the break is, and how many years remain to retirement. Here are three representative scenarios:" },
      { kind: "table", caption: "Pension impact of career breaks at different career stages (2% CPI, 2.5% salary growth)", head: ["Scenario", "Break", "Pension without break", "Pension with break", "Annual gap"], rows: [
        ["ECT on M2 (£35,674), £2,000 accrued, 35 yrs to NPA", "2 years", "£41,200", "£38,900", "£2,300"],
        ["Mid-career on M6 (£46,939), £8,000 accrued, 25 yrs to NPA", "3 years", "£36,800", "£33,100", "£3,700"],
        ["Experienced on UPS 2 (£50,587), £12,000 accrued, 20 yrs to NPA", "5 years", "£33,500", "£27,600", "£5,900"],
      ]},
      { kind: "callout", tone: "info", title: "The gap is not just lost accrual", text: "Lost accrual (the 1/57th you miss each year) typically accounts for about 40% of the pension gap. The remaining 60% comes from the lower revaluation rate on your existing pot during the break years. This is why the impact grows steeply for teachers with more accrued pension." },
      { kind: "p", text: "Run your own numbers in the calculator above, or compare with the full-career projection from the [pension calculator](/teacher-pension-calculator/)." },

      { kind: "h2", text: "Maternity, adoption and shared parental leave" },
      { kind: "p", text: "Maternity and adoption leave are treated differently from an unpaid career break:" },
      { kind: "table", caption: "Pension treatment during different types of leave", head: ["Leave type", "Pension accrual", "Your contributions", "Employer contributions"], rows: [
        ["Ordinary Maternity Leave (26 weeks)", "Yes — full accrual", "Based on pay received", "Based on full-time salary"],
        ["Additional Maternity Leave (paid)", "Yes — full accrual", "Based on pay received", "Based on full-time salary"],
        ["Additional Maternity Leave (unpaid)", "No accrual", "None", "None"],
        ["Shared Parental Leave (paid)", "Yes — full accrual", "Based on pay received", "Based on full-time salary"],
        ["Unpaid parental leave", "No accrual", "None", "None"],
        ["Career break (unpaid)", "No accrual", "None", "None"],
      ]},
      { kind: "p", text: "During paid maternity leave your pension contributions are based on the pay you actually receive (which may be statutory maternity pay or occupational maternity pay under Burgundy Book). Your employer continues to contribute based on your full-time salary. This means your pension accrual continues at the full rate even though your cash contributions may be lower." },
      { kind: "p", text: "The [maternity pay guide](/teacher-maternity-pay/) covers the Burgundy Book entitlements and the exact pay schedule." },

      { kind: "h2", text: "Sick leave and the pension" },
      { kind: "p", text: "Full-pay sick leave continues your TPS membership as normal — contributions and accrual both continue at the full rate. Half-pay sick leave also continues membership, but your contributions and accrual are based on the reduced pay. Only once you exhaust sick pay entitlement and move to unpaid absence does accrual stop entirely." },
      { kind: "p", text: "The [sick pay guide](/teacher-sick-pay/) explains the Burgundy Book entitlement tiers." },

      { kind: "h2", text: "What happens when you return from a career break" },
      { kind: "p", text: "When you return to a TPS-eligible teaching post, you rejoin the scheme immediately. There is no waiting period, no re-qualification, and no penalty. Your deferred benefits are linked back to your active record and resume receiving the higher CPI + 1.6% revaluation from that point." },
      { kind: "p", text: "You do not get back the 1/57th accrual you missed during the break — those years are permanently lost. But the higher revaluation rate on your existing pot resumes, which partially closes the gap over time." },
      { kind: "callout", tone: "tip", title: "Buying added pension", text: "If you want to replace lost service, the TPS offers an Added Pension facility. You can buy up to £8,366.52 of additional annual pension (2026/27 limit) through regular payroll deductions or a lump sum. The cost depends on your age — younger teachers get a much better deal. This is separate from AVCs, which are invested in the market. See the [AVC guide](/teacher-avc-calculator/) for the investment route." },

      { kind: "h2", text: "Career break vs part-time working: the pension comparison" },
      { kind: "p", text: "Some teachers consider reducing to part-time rather than taking a full break, precisely because of the pension impact. The comparison is worth making explicit:" },
      { kind: "table", caption: "Pension impact: 3-year break vs 3 years at 0.5 FTE (M6, £8,000 accrued, 25 yrs to NPA)", head: ["Metric", "Full break", "0.5 FTE for 3 years"], rows: [
        ["Accrual during period", "None", "3 × (£46,939 × 0.5 × 1/57) = £1,235 total"],
        ["Revaluation rate", "CPI only (2%)", "CPI + 1.6% (3.6%) — still active"],
        ["Contributions saved", "~£12,100", "~£6,050 saved vs full-time"],
        ["Pension gap vs full-time", "~£3,700/yr", "~£1,400/yr"],
      ]},
      { kind: "p", text: "Going to 0.5 FTE for three years costs about £1,400 a year less pension at retirement compared with full-time — roughly a third of the £3,700 gap from a full break. The [part-time pay calculator](/part-time-teacher-pay-calculator/) can model the take-home side." },

      { kind: "h2", text: "How to protect your pension during a career break" },
      { kind: "ul", items: [
        "**Keep the break short.** Every year out compounds the loss. If you can return after one or two years instead of three, the difference is meaningful.",
        "**Return even briefly.** Re-entering the TPS for even one year before a longer break restores the active revaluation rate on your entire pot for that year.",
        "**Consider part-time rather than full break.** Even a 0.2 FTE role maintains active membership and the higher revaluation rate.",
        "**Buy added pension on return.** The TPS Added Pension facility lets you replace some of the lost accrual. The younger you are when you buy, the cheaper it is.",
        "**Check your State Pension.** A long career break can create NI gaps. Fill them with voluntary Class 3 contributions if needed — check at gov.uk/check-state-pension.",
        "**Consider AVCs on return.** If buying added pension is too expensive, the [AVC route](/teacher-avc-calculator/) lets you invest through the TPS via Prudential.",
      ]},

      { kind: "h2", text: "Career breaks and the annual allowance" },
      { kind: "p", text: "When you return from a career break and resume contributing, your pension input amount for that year may be higher than normal if your salary has increased during the break. This is unlikely to trigger the £60,000 annual allowance for most teachers, but if you are on a leadership salary and return after a significant pay rise, it is worth checking. The [pension contributions guide](/teacher-pension-contributions/) covers the annual allowance." },
    ],
    faq: [
      { question: "Does a career break affect my teachers' pension?", answer: "Yes. You stop accruing new pension and your existing pension revalues at CPI only (not CPI + 1.6%). A typical 3-year break costs £3,000–£4,000 less annual pension at retirement." },
      { question: "Do I keep my pension if I leave teaching?", answer: "Yes. Your accrued pension stays in the TPS as a deferred benefit, revaluing by CPI each year until you draw it. It is never lost." },
      { question: "Is maternity leave a career break for pension purposes?", answer: "Paid maternity leave is not a break — you continue accruing pension. Only the unpaid portion of Additional Maternity Leave (if any) stops accrual." },
      { question: "Can I buy back the pension I missed during a career break?", answer: "You cannot buy back service directly, but you can purchase Added Pension (up to £8,366.52/yr in 2026/27) to boost your benefits. The cost depends on your age at purchase." },
      { question: "How long can I be on a career break and still rejoin the TPS?", answer: "There is no time limit. Whether you leave for 2 years or 20, you can rejoin the TPS immediately on returning to a TPS-eligible post." },
      { question: "Does unpaid leave affect my pension?", answer: "Yes. Any unpaid leave — whether a career break, unpaid parental leave, or unpaid sick leave — stops pension accrual and switches your pot to deferred revaluation." },
      { question: "Should I opt out of the TPS to save money?", answer: "Almost never. The employer contribution alone (28.8%) makes the TPS extremely valuable. Even if cashflow is tight, staying in part-time is almost always better than opting out entirely." },
      { question: "What about supply teaching during a career break?", answer: "If you work as a supply teacher through an agency, you may not be enrolled in the TPS — many agencies use other pension schemes. Direct supply work for a school that offers TPS membership would maintain your active status." },
    ],
    sources: SOURCES,
    updated: UPDATED,
  },
];
