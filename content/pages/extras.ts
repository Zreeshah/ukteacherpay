import type { PageContent } from "../types";

const UPDATED = "2026-08-23";

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
  // ---------------------------------------------------------------- 1
  {
    slug: "teacher-pension-scotland",
    hub: "pensions",
    title: "Teachers' Pension in Scotland (STPS)",
    metaTitle: "Teacher Pension Scotland 2026/27 — STPS Explained",
    metaDescription:
      "The Scottish Teachers' Pension Scheme explained: how STPS differs from the England and Wales TPS, who administers it, contribution tiers and Scottish tax.",
    primaryKeyword: "teacher pension scotland",
    secondaryKeywords: [
      "scottish teacher pension", "teacher pension scotland contributions",
      "scottish teachers pension scheme", "stps pension", "sppa teachers pension",
    ],
    calculator: "pension-care",
    calculatorPreset: { region: "scotland" },
    intro:
      "Teachers in Scotland are not in the same pension scheme as teachers in England and Wales. The Scottish Teachers' Pension Scheme is a separate scheme with its own administrator, its own regulations and its own contribution tiers — even though the underlying CARE structure looks almost identical.",
    keyTakeaways: [
      "Scotland has its own scheme, the STPS, administered by the Scottish Public Pensions Agency rather than Teachers' Pensions.",
      "The benefit structure mirrors the England and Wales scheme: career average, 1/57th accrual, revalued at CPI plus 1.6% while you are active.",
      "Scottish income tax rates apply to your pay, which changes your take-home even when the gross salary is the same.",
      "At SNCT main-scale salaries a Scottish teacher pays modestly more income tax than an equivalent English teacher, and the gap widens sharply above the Scottish higher-rate threshold.",
      "Moving between Scotland and England does not lose your service, but it does mean holding benefits in two separate schemes.",
    ],
    blocks: [
      { kind: "h2", text: "Scotland has a separate scheme, not a regional variant" },
      { kind: "p", text: "This is the single most misunderstood point about teacher pensions north of the border. The Scottish Teachers' Pension Scheme (STPS) is a legally distinct scheme. It is not a Scottish branch of the England and Wales Teachers' Pension Scheme." },
      { kind: "p", text: "The practical consequences show up the moment you need something done. Your annual benefit statement comes from a different body, your online account is on a different portal, and any transfer, estimate or retirement application goes to a different address." },
      { kind: "table", caption: "Who runs which scheme", head: ["", "England & Wales", "Scotland"], rows: [
        ["Scheme", "Teachers' Pension Scheme (TPS)", "Scottish Teachers' Pension Scheme (STPS)"],
        ["Administrator", "Teachers' Pensions", "Scottish Public Pensions Agency (SPPA)"],
        ["Responsible department", "Department for Education", "Scottish Government"],
        ["Pay scale used", "STPCD", "SNCT"],
        ["Income tax rates", "rUK rates", "Scottish rates"],
      ]},
      { kind: "callout", tone: "info", title: "Northern Ireland is different again", text: "Northern Ireland runs its own teachers' pension scheme through the Department of Education NI. Three separate schemes cover the UK's teachers, plus the Local Government Pension Scheme for most support staff." },

      { kind: "h2", text: "The benefit structure is almost identical" },
      { kind: "p", text: "Despite the separate administration, if you already understand how the England and Wales career average scheme works then you already understand the Scottish one. Both are career average revalued earnings (CARE) schemes built on the same design." },
      { kind: "ul", items: [
        "**Accrual rate of 1/57th.** Each year you bank 1/57th of that year's pensionable pay as guaranteed annual pension.",
        "**In-service revaluation of CPI plus 1.6%.** While you are actively contributing, everything you have already built up is uprated each year.",
        "**Deferred revaluation of CPI only.** Stop contributing and you lose the 1.6% enhancement on future revaluations.",
        "**Normal Pension Age linked to State Pension age.** For most teachers currently working that means 67.",
        "**Commutation at 12:1.** You can exchange annual pension for a tax-free lump sum at twelve pounds of cash per pound of pension surrendered.",
      ]},
      { kind: "p", text: "The mechanics of how benefits build up are covered in full in the [guide to how the teachers' pension works](/how-does-teacher-pension-work/), and that explanation applies to Scotland too." },

      { kind: "h2", text: "Contribution tiers in Scotland" },
      { kind: "p", text: "Both schemes use a tiered contribution structure where higher earners pay a higher percentage. The tier is assessed on your full-time equivalent salary, not on what a part-time teacher actually receives — the same trap that catches part-timers everywhere, explained in the [part-time pay calculator](/part-time-teacher-pay-calculator/)." },
      { kind: "callout", tone: "warn", title: "Check the current STPS tiers with SPPA", text: "The Scottish tiers are set separately from the England and Wales tiers by Scottish Government regulations. They have historically been close but they are not automatically identical, and either set can change independently. The calculator on this page applies the England and Wales tiers as a working approximation. For the definitive Scottish figures, check your SPPA annual statement or the SPPA website before making any decision." },
      { kind: "table", caption: "Tiered contribution structure (England and Wales tiers shown as reference)", head: ["Full-time equivalent salary", "Member contribution"], rows: [
        ["Up to £34,289", "7.4%"],
        ["£34,290 to £46,158", "8.6%"],
        ["£46,159 to £54,729", "9.6%"],
        ["£54,730 to £72,534", "10.2%"],
        ["£72,535 to £98,908", "11.7%"],
        ["£98,909 and above", "12.7%"],
      ]},
      { kind: "p", text: "Employer contributions are substantial in both schemes and represent the bulk of the funding. This is the single biggest reason opting out is almost always a poor decision, as set out in [is the teachers' pension any good](/is-teacher-pension-good/)." },

      { kind: "h2", text: "Where Scotland genuinely differs: income tax" },
      { kind: "p", text: "This is the difference that actually shows up in your bank account every month. Scotland sets its own income tax rates and bands on earned income, and they are not the same as the rest of the UK." },
      { kind: "p", text: "Scotland uses six bands rather than three. Lower earners pay slightly less through the 19% starter rate. Middle earners pay slightly more through the 21% intermediate rate. Higher earners pay noticeably more because the Scottish higher rate is 42% rather than 40%, and it starts at a lower income." },
      { kind: "table", caption: "Scottish income tax bands 2026/27, applied to taxable income after the personal allowance", head: ["Band", "Taxable income", "Rate"], rows: [
        ["Starter rate", "First £2,827", "19%"],
        ["Basic rate", "Up to £14,921", "20%"],
        ["Intermediate rate", "Up to £31,092", "21%"],
        ["Higher rate", "Up to £62,430", "42%"],
        ["Advanced rate", "Up to £112,570", "45%"],
        ["Top rate", "Above £112,570", "48%"],
      ]},

      { kind: "h2", text: "What Scottish tax costs a teacher in practice" },
      { kind: "p", text: "The table below takes each point of the SNCT main scale and compares the income tax a Scottish teacher pays against what the identical gross salary would attract under rUK rates. Both columns assume scheme membership and the standard personal allowance." },
      { kind: "table", caption: "Scottish teacher income tax versus rUK rates on the same salary, 2026/27 (calculated)", head: ["SNCT point", "Salary", "Scottish tax", "rUK tax on same salary", "Extra cost a year"], rows: [
        ["Point 1", "£34,539", "£3,812", "£3,800", "£13"],
        ["Point 2", "£36,426", "£4,174", "£4,145", "£30"],
        ["Point 3", "£38,361", "£4,546", "£4,498", "£47"],
        ["Point 4", "£42,336", "£5,309", "£5,225", "£84"],
        ["Point 5", "£45,468", "£5,910", "£5,798", "£112"],
        ["Point 6", "£48,516", "£6,434", "£6,258", "£177"],
        ["Chartered Teacher", "£52,539", "—", "—", "£977"],
      ]},
      { kind: "p", text: "The pattern is worth understanding. On the main scale the difference is small — between about £13 and £177 a year. It is real but it is not life-changing. The step up at Chartered Teacher level is much larger, roughly £977 a year, because £52,539 pushes a meaningful slice of income into the Scottish 42% higher rate while the same salary in England is still largely taxed at 20%." },
      { kind: "callout", tone: "tip", title: "The threshold is what matters, not the headline rate", text: "The Scottish higher rate is only two percentage points above the rUK higher rate. The bigger effect is that it bites at a lower income, so promotion into a senior post costs proportionally more in tax in Scotland than it does in England." },

      { kind: "h2", text: "Moving between Scotland and England" },
      { kind: "p", text: "Teachers move across the border in both directions and the pension consequences are manageable, but they are not automatic." },
      { kind: "ol", items: [
        "**Your existing service is safe.** Nothing you have already built up is lost when you move. It stays in the scheme where you earned it.",
        "**You join the new scheme from your first day.** You start accruing in the destination scheme immediately.",
        "**Your old benefits become deferred unless you transfer.** Deferred benefits are revalued at CPI only, without the 1.6% in-service enhancement.",
        "**A transfer may be possible.** Both schemes participate in public sector transfer arrangements, but the terms depend on timing and you normally have a limited window after joining.",
        "**Get an estimate before deciding.** A transfer is not automatically better. Two sets of deferred benefits can work out perfectly well.",
      ]},
      { kind: "p", text: "Because a transfer decision is genuinely finely balanced and irreversible, this is one of the situations where paid regulated advice can be worth the money. See [where to get teacher pension advice](/teacher-pension-advice/) for how to find it." },

      { kind: "h2", text: "Pay scales in Scotland" },
      { kind: "p", text: "Scotland uses the SNCT scale negotiated by the Scottish Negotiating Committee for Teachers, not the STPCD. The structures differ in an important way: Scotland has no Upper Pay Range and no threshold application. Instead the main scale runs to its maximum and experienced teachers can progress through the Chartered Teacher route." },
      { kind: "p", text: "There is also no London weighting equivalent, though remote and island authorities pay distant islands allowances. The full figures are in the [Scotland teacher pay scale guide](/teacher-pay-scale-scotland/)." },

      { kind: "h2", text: "Common mistakes Scottish teachers make" },
      { kind: "ul", items: [
        "**Contacting Teachers' Pensions instead of SPPA.** They cannot help with Scottish records.",
        "**Assuming English guidance applies exactly.** The benefit design matches, but the tiers, tax and administration do not.",
        "**Forgetting Scottish tax when comparing job offers.** A cross-border move at the same gross salary changes your net pay.",
        "**Leaving benefits deferred without checking.** Deferred benefits lose the 1.6% revaluation enhancement.",
        "**Ignoring the higher-rate threshold when taking promotion.** In Scotland the 42% band starts lower, so model the net gain first with the [pay rise calculator](/teacher-pay-rise-calculator/).",
      ]},
      { kind: "callout", tone: "warn", title: "This is guidance, not financial advice", text: "Figures here are calculated illustrations based on published rates. Your SPPA annual benefit statement is the authoritative record of your Scottish pension. For decisions about transfers, early retirement or leaving the scheme, take regulated advice." },
    ],
    faq: [
      { question: "Is the Scottish teachers' pension the same as the English one?", answer: "No. The Scottish Teachers' Pension Scheme is a legally separate scheme administered by the Scottish Public Pensions Agency, not by Teachers' Pensions. The benefit design is almost identical — career average, 1/57th accrual, CPI plus 1.6% revaluation while active — but the regulations, contribution tiers and administration are set separately by the Scottish Government." },
      { question: "Who administers the Scottish teachers' pension?", answer: "The Scottish Public Pensions Agency, usually shortened to SPPA. Teachers' Pensions, which handles England and Wales, cannot access or advise on Scottish records. Benefit statements, retirement applications and transfer requests all go to SPPA." },
      { question: "Do Scottish teachers pay more tax?", answer: "At main-scale salaries, slightly. On the SNCT scale the extra income tax compared with rUK rates ranges from roughly £13 a year at the bottom point to about £177 at the top of the main scale. The gap grows substantially at senior salaries because the Scottish higher rate of 42% starts at a lower income than the rUK 40% rate." },
      { question: "What is the accrual rate in the Scottish teachers' pension?", answer: "1/57th, the same as the England and Wales scheme. Each year you build 1/57th of that year's pensionable pay as guaranteed annual pension, and existing benefits are revalued at CPI plus 1.6% while you remain an active member." },
      { question: "What happens to my pension if I move from Scotland to England?", answer: "Your Scottish service stays in the STPS and your English service builds in the TPS. Nothing is lost. Your Scottish benefits become deferred and are revalued at CPI only rather than CPI plus 1.6%. A transfer between the schemes may be possible under public sector transfer arrangements, usually within a limited window after joining, but it is not always the better option." },
      { question: "Does Scotland have an Upper Pay Range?", answer: "No. The SNCT structure has no Upper Pay Range and no threshold application. The main scale runs to its maximum and experienced teachers can progress through the Chartered Teacher route instead." },
      { question: "Are the contribution tiers the same in Scotland?", answer: "The structure is the same — tiered bands assessed on full-time equivalent salary — but the specific bands are set separately by Scottish Government regulations and are not automatically identical to the England and Wales tiers. Check your SPPA statement for the definitive figures that apply to you." },
    ],
    sources: PENSION_SOURCES,
    updated: UPDATED,
  },

  // ---------------------------------------------------------------- 2
  {
    slug: "teacher-pension-advice",
    hub: "pensions",
    title: "Where to Get Teacher Pension Advice",
    metaTitle: "Pension Advice for Teachers — Where to Get Help 2026",
    metaDescription:
      "Where UK teachers can get trustworthy pension help: free government guidance, union services, regulated advisers, and the scam warning signs to watch for.",
    primaryKeyword: "pension advice for teachers",
    secondaryKeywords: [
      "teacher pension advice", "teachers pension advice",
      "teachers' pension lump sum advice", "teachers pension advice lump sum",
      "independent financial advice teachers pension", "tps advice",
      "teachers pension guidance", "moneyhelper teachers pension",
      "teachers pension financial adviser",
    ],
    calculator: "none",
    intro:
      "Most teachers never need to pay for pension advice. A lot of what feels complicated is answered free by the scheme administrator or by government-backed guidance. But there are a handful of genuinely irreversible decisions where paid regulated advice earns its fee — and a smaller number of situations where someone is trying to take your money.",
    keyTakeaways: [
      "Guidance is free and general; advice is paid, regulated and gives you a personal recommendation you can complain about if it is wrong.",
      "MoneyHelper and Pension Wise are government-backed and cost nothing.",
      "Teachers' Pensions and SPPA can explain your record and run estimates but are not permitted to advise you on what to do.",
      "Regulated advice is genuinely worth paying for on transfers, divorce settlements, annual allowance breaches and complex retirement timing.",
      "Any unsolicited approach offering to transfer, unlock or release your teachers' pension should be treated as a scam.",
    ],
    blocks: [
      { kind: "h2", text: "Guidance and advice are not the same thing" },
      { kind: "p", text: "This distinction matters more than it sounds, because it determines what protection you have if things go wrong." },
      { kind: "p", text: "**Guidance** explains how things work in general terms. It is usually free. Nobody looks at your full financial position and nobody tells you what you personally should do. **Advice** is a regulated activity. A firm authorised by the Financial Conduct Authority examines your circumstances and makes a personal recommendation, and is accountable for it." },
      { kind: "table", caption: "What you get from each route", head: ["", "Guidance", "Regulated advice"], rows: [
        ["Cost", "Usually free", "Typically several hundred to a few thousand pounds"],
        ["Personal recommendation", "No", "Yes"],
        ["Looks at your whole position", "No", "Yes"],
        ["FCA regulated", "Not generally", "Yes"],
        ["Complaint route if wrong", "Limited", "Financial Ombudsman Service"],
        ["Covered by FSCS", "No", "Usually"],
      ]},
      { kind: "callout", tone: "tip", title: "Start with the free options", text: "Work through the free routes first. Most teacher pension questions are answered without spending anything. Only escalate to paid advice once you have a specific decision that free guidance genuinely cannot resolve." },

      { kind: "h2", text: "Free option 1: the scheme administrator" },
      { kind: "p", text: "Teachers' Pensions in England and Wales, and SPPA in Scotland, hold your actual record. They are the right first call for anything factual." },
      { kind: "ul", items: [
        "**What service you have** and whether there are gaps.",
        "**Benefit statements** showing what you have built up so far.",
        "**Retirement estimates** at different ages, including reduction factors.",
        "**Whether your employer has been paying** the right contributions.",
        "**Forms and deadlines** for retirement, transfers and family benefits.",
      ]},
      { kind: "p", text: "What they cannot do is tell you what to do. They will not say whether you should retire early, whether to take the maximum lump sum, or whether AVCs suit you. That is regulated advice and they are not authorised to give it." },
      { kind: "callout", tone: "warn", title: "Check your record early, not at retirement", text: "Missing service is far easier to fix while the employer still exists and payroll records are retrievable. Reviewing your statement in your forties rather than the year you retire avoids a lot of avoidable pain." },

      { kind: "h2", text: "Free option 2: MoneyHelper and Pension Wise" },
      { kind: "p", text: "MoneyHelper is the government-backed money guidance service. It covers pensions, debt, budgeting and benefits, and is free and impartial. It is a genuinely good starting point for understanding concepts before you make decisions." },
      { kind: "p", text: "Pension Wise is the specific appointment service for people aged 50 and over with defined contribution pensions. It is free and government-backed. As a teacher your main scheme is defined benefit, so Pension Wise does not apply to your core teachers' pension — but it does apply if you hold an AVC pot, which is a defined contribution arrangement. If you have built up AVCs, as explained in the [AVC calculator guide](/teacher-avc-calculator/), a Pension Wise appointment is worth booking." },

      { kind: "h2", text: "Free option 3: your union" },
      { kind: "p", text: "The main teaching unions run pension services for members, and this is one of the more concrete benefits of membership." },
      { kind: "ul", items: [
        "**Pension helplines** staffed by people who know the teachers' scheme specifically.",
        "**Written guides** covering retirement, ill-health, part-time service and the McCloud remedy.",
        "**Casework support** when an employer has got your contributions or service record wrong.",
        "**Campaign information** on proposed changes to the scheme.",
      ]},
      { kind: "p", text: "Union pension officers tend to know the scheme far better than a general adviser, because they deal with nothing else. For scheme-specific questions they are often more useful than a paid generalist." },

      { kind: "h2", text: "When paid regulated advice is genuinely worth it" },
      { kind: "p", text: "There are a limited number of situations where a few hundred pounds of regulated advice can protect a decision worth tens of thousands." },
      { kind: "table", caption: "Situations that usually justify paid advice", head: ["Situation", "Why it matters"], rows: [
        ["Transferring out of the scheme", "Almost always a bad idea and irreversible. Advice is mandatory above a threshold value."],
        ["Cross-border transfer between TPS and STPS", "Finely balanced, time-limited, and hard to reverse."],
        ["Divorce and pension sharing", "The pension is often the largest asset. Valuation and sharing orders are technical."],
        ["Annual allowance breach", "Large pay rises late in a career can trigger unexpected tax charges."],
        ["Retirement timing with several income sources", "Coordinating pension, AVCs, ISAs and State Pension for tax efficiency."],
        ["Ill-health retirement", "Different tiers with very different outcomes and a difficult application."],
      ]},
      { kind: "p", text: "Conversely, you probably do not need paid advice simply to decide whether to take the standard lump sum or to understand your tier rate. Those are covered by free guidance and by pages like the [lump sum guide](/teacher-pension-lump-sum/) and [contributions guide](/teacher-pension-contributions/)." },

      { kind: "h2", text: "How to find and check an adviser" },
      { kind: "ol", items: [
        "**Confirm FCA authorisation.** Search the firm on the Financial Services Register before any meeting. If they are not on it, stop.",
        "**Look for defined benefit experience.** Public sector DB schemes are a specialism. Many advisers rarely touch them.",
        "**Ask how they are paid.** A flat fee for a specific piece of work is usually cleaner than an ongoing percentage of assets.",
        "**Get the fee in writing before starting.** Including what happens if you do not act on the recommendation.",
        "**Ask for the recommendation in writing.** A regulated adviser must provide a suitability report explaining their reasoning.",
        "**Keep everything.** If a complaint becomes necessary later, the paperwork is what matters.",
      ]},

      { kind: "h2", text: "Pension scams: the warning signs" },
      { kind: "p", text: "Defined benefit pensions are a target precisely because they are valuable. A teachers' pension worth a large transfer value attracts attention, and once it is gone it does not come back." },
      { kind: "callout", tone: "warn", title: "Treat any unsolicited approach as a scam", text: "Cold calls about pensions are banned in the UK. If someone contacts you out of the blue about your teachers' pension — by phone, text, email or social media — the correct response is to end the conversation. There is no legitimate reason for an unsolicited approach." },
      { kind: "ul", items: [
        "**Promises of guaranteed high returns.** No genuine investment guarantees returns. Your teachers' pension already provides a guarantee that a transfer would destroy.",
        "**Pressure and deadlines.** Manufactured urgency exists to stop you checking.",
        "**Offers to release cash before 55.** Other than in genuine ill health this is not legally possible and usually triggers punitive tax.",
        "**Unusual or overseas investments.** Storage pods, car parks, overseas property and green energy schemes are recurring themes.",
        "**Free pension reviews.** A common opening for an unsuitable transfer recommendation.",
        "**Courier collection of documents.** A tactic to prevent you taking time to reconsider.",
      ]},
      { kind: "p", text: "If you think you have been targeted, stop all contact, report it to Action Fraud, and speak to Teachers' Pensions or SPPA directly using contact details you have looked up yourself rather than any supplied to you." },

      { kind: "h2", text: "A sensible order to work through" },
      { kind: "ol", items: [
        "Read your latest annual benefit statement and check the service record is right.",
        "Model the outcome yourself with the [teachers' pension calculator](/teacher-pension-calculator/) to frame the question.",
        "Call the scheme administrator for anything factual about your record.",
        "Use MoneyHelper for general concepts, and Pension Wise if you hold AVCs and are over 50.",
        "Use your union helpline for scheme-specific questions.",
        "Only then pay for regulated advice, and only for a genuinely complex or irreversible decision.",
      ]},
      { kind: "callout", tone: "warn", title: "This page is guidance, not advice", text: "This site is independent guidance based on published scheme rules. It is not regulated financial advice and no personal recommendation is being made. For a recommendation about your own circumstances, use an FCA-authorised adviser." },
    ],
    faq: [
      { question: "Can Teachers' Pensions give me financial advice?", answer: "No. Teachers' Pensions and SPPA can explain your record, provide benefit statements and produce retirement estimates, but they are not authorised to give financial advice. They cannot tell you whether to retire early, take a lump sum or pay AVCs. For a personal recommendation you need an FCA-regulated adviser." },
      { question: "Is pension advice free for teachers?", answer: "Guidance is free from several sources: your scheme administrator for factual questions about your record, MoneyHelper for general government-backed guidance, and your union's pension service if you are a member. Regulated advice giving a personal recommendation is paid, typically several hundred to a few thousand pounds depending on complexity." },
      { question: "Do I need a financial adviser for my teachers' pension?", answer: "Usually not. Most questions are answered by free guidance. Paid advice is worth it for a small set of complex or irreversible decisions: transferring out, cross-border transfers, divorce settlements, annual allowance breaches, ill-health retirement, and coordinating retirement across several income sources." },
      { question: "Can I use Pension Wise as a teacher?", answer: "Pension Wise covers defined contribution pensions for people aged 50 and over. Your main teachers' pension is defined benefit, so it falls outside the service. However, if you hold an AVC pot alongside your main pension, that is a defined contribution arrangement and a free Pension Wise appointment does apply to it." },
      { question: "How do I check a financial adviser is legitimate?", answer: "Search the firm on the FCA's Financial Services Register before any meeting. Confirm they are authorised, check the permissions they hold, and use contact details from the register rather than any supplied to you. If a firm is not on the register, do not proceed." },
      { question: "What are the warning signs of a teachers' pension scam?", answer: "Unsolicited contact of any kind, since pension cold calling is banned. Also: guaranteed high returns, pressure to act quickly, offers to release cash before age 55, unusual or overseas investments, free pension reviews, and couriers sent to collect paperwork. Report suspected scams to Action Fraud." },
      { question: "Should I transfer my teachers' pension out?", answer: "For the overwhelming majority of teachers, no. Transferring out surrenders a guaranteed, inflation-linked pension backed by the government in exchange for investment risk you carry yourself. Regulated advice is legally required above a threshold transfer value, and most advisers recommend against it." },
    ],
    sources: PENSION_SOURCES,
    updated: UPDATED,
  },

  // ---------------------------------------------------------------- 3
  {
    slug: "care-vs-final-salary-pension",
    hub: "pensions",
    title: "CARE vs Final Salary Teachers' Pension",
    metaTitle: "Final Salary or Career Average? Teachers' Pension",
    metaDescription:
      "The two teachers' pension schemes compared: final salary 1/80ths and 1/60ths against CARE 1/57ths, who is in which, and how the McCloud remedy changed it.",
    primaryKeyword: "teachers pension final salary or career average",
    secondaryKeywords: [
      "teachers pension career average", "career average teachers pension",
      "teachers pension final salary vs career average",
      "when did teachers pension change to career average",
      "teachers career average pension", "career average pension",
      "teachers pension scheme career average",
      "how is career average teachers pension calculated",
      "mccloud remedy teachers pension", "teachers pension remedy period",
    ],
    calculator: "pension-care",
    intro:
      "Most teachers with more than a few years of service have benefits in two different schemes at once. Understanding which pot is which — and why the newer scheme is not automatically the worse one — is the difference between planning your retirement accurately and guessing.",
    keyTakeaways: [
      "Final salary calculates your pension from your salary at the end of your career; CARE builds it from what you earned each individual year.",
      "There are three benefit structures in play: 1/80ths with an automatic lump sum, 1/60ths, and CARE at 1/57ths.",
      "CARE has the most generous accrual rate of the three, so it is not simply a downgrade.",
      "The McCloud remedy rolled all service between April 2015 and March 2022 back into the legacy scheme.",
      "Everyone builds CARE benefits from 1 April 2022 onwards regardless of age.",
    ],
    blocks: [
      { kind: "h2", text: "The fundamental difference" },
      { kind: "p", text: "A final salary scheme works backwards from where you finish. It takes your salary at retirement, multiplies it by an accrual fraction, and multiplies that by your years of service. Your early career earnings are irrelevant — only the final figure and the length of service matter." },
      { kind: "p", text: "A career average scheme works forwards. Each year it takes what you actually earned that year, banks a slice of it as guaranteed pension, and then uprates that slice every year until you retire. Every year of your career contributes directly." },
      { kind: "callout", tone: "info", title: "Why the change happened", text: "Final salary schemes reward steep late-career promotion disproportionately. Two teachers contributing identical amounts over identical careers could end up with very different pensions purely because one was promoted in the final years. Career average was introduced across the public sector to distribute benefits more evenly." },

      { kind: "h2", text: "The three structures you might hold" },
      { kind: "p", text: "The teachers' scheme has had three benefit structures. Which ones you hold depends on when you first joined." },
      { kind: "table", caption: "The three teachers' pension benefit structures", head: ["Structure", "Accrual", "Normal Pension Age", "Automatic lump sum", "Based on"], rows: [
        ["Final salary, NPA 60", "1/80th", "60", "Yes — 3x annual pension", "Final salary"],
        ["Final salary, NPA 65", "1/60th", "65", "No", "Final salary"],
        ["Career average (CARE)", "1/57th", "State Pension age", "No", "Each year's pay"],
      ]},
      { kind: "ul", items: [
        "**Joined before 1 January 2007** — your legacy benefits are on the NPA 60 basis, accruing at 1/80th with an automatic tax-free lump sum of three times the annual pension.",
        "**Joined between 1 January 2007 and 31 March 2015** — your legacy benefits are on the NPA 65 basis, accruing at the more generous 1/60th but without an automatic lump sum.",
        "**Joined from 1 April 2015 onwards** — you have only ever been in CARE.",
      ]},

      { kind: "h2", text: "CARE has the best accrual rate" },
      { kind: "p", text: "This surprises people who assume the newer scheme must be worse. Looked at purely as an accrual fraction, CARE is the most generous of the three." },
      { kind: "table", caption: "Pension earned per year worked on a £52,835 salary (calculated)", head: ["Structure", "Fraction", "Annual pension earned per year of service"], rows: [
        ["Final salary NPA 60", "1/80th", "£660"],
        ["Final salary NPA 65", "1/60th", "£881"],
        ["CARE", "1/57th", "£927"],
      ]},
      { kind: "p", text: "The catch is that final salary applies its fraction to your **final** salary across all your years of service, including years when you were earning far less. CARE applies its better fraction to each year's actual pay, then relies on revaluation to keep early years from being eroded." },
      { kind: "p", text: "Which wins depends almost entirely on your career shape. A teacher whose pay rises steeply late on does better under final salary. A teacher with steady progression, or one who reaches the Upper Pay Range early and stays there, often does better under CARE." },

      { kind: "h2", text: "Revaluation is what makes CARE work" },
      { kind: "p", text: "The mechanism that stops CARE being eroded by inflation is annual revaluation. While you are an active contributing member, everything you have already banked is increased each year by CPI plus 1.6%." },
      { kind: "p", text: "That 1.6% enhancement is doing real work. It is the scheme's way of approximating the salary growth that a final salary scheme would have captured automatically." },
      { kind: "callout", tone: "warn", title: "Leaving the scheme costs you the 1.6%", text: "Deferred members get CPI only. Stop contributing and every year of accrued benefit grows more slowly for the rest of your working life. This is one of the strongest arguments against opting out, and it is covered further in [leaving teaching](/leaving-teaching/)." },
      { kind: "table", caption: "Twenty-year illustration, career ending on £52,835 (calculated)", head: ["Structure", "Assumptions", "Annual pension"], rows: [
        ["Final salary NPA 60", "20 years, 1/80th of £52,835", "£13,209 plus £39,626 automatic lump sum"],
        ["Final salary NPA 65", "20 years, 1/60th of £52,835", "£17,612"],
        ["CARE", "20 years, 3% salary growth, 3.6% revaluation", "£19,601"],
      ]},
      { kind: "p", text: "These are illustrations on stated assumptions, not entitlements. Change the salary growth or CPI assumption and the CARE figure moves substantially. Model your own numbers with the [teachers' pension calculator](/teacher-pension-calculator/)." },

      { kind: "h2", text: "The McCloud remedy" },
      { kind: "p", text: "In 2015 the public sector moved to career average, but with transitional protection that let members closest to retirement stay in their legacy scheme. The courts found that protection discriminated on grounds of age, because it was available based on how old you were." },
      { kind: "p", text: "The remedy applies to the **remedy period** of 1 April 2015 to 31 March 2022." },
      { kind: "ol", items: [
        "**All service in the remedy period was rolled back** into the legacy final salary scheme for everyone affected, regardless of age.",
        "**Members get a choice** about which scheme's benefits to take for that period, normally exercised at retirement when the actual figures are known.",
        "**From 1 April 2022 everyone is in CARE.** No exceptions and no further protection.",
        "**Contribution differences are reconciled** as part of the remedy where the two schemes charged different amounts.",
      ]},
      { kind: "callout", tone: "tip", title: "You choose at retirement, with real numbers", text: "For most affected members the choice between legacy and CARE benefits for the remedy period is made at retirement rather than now. That is deliberate — the right answer depends on your final salary, which nobody knows in advance. There is generally nothing you must do today." },

      { kind: "h2", text: "What mixed service looks like in practice" },
      { kind: "p", text: "A teacher who started in 2010 and is still teaching now holds several distinct slices of benefit, each with its own rules." },
      { kind: "table", caption: "Example: teacher who joined September 2010", head: ["Period", "Scheme", "Basis", "Payable in full at"], rows: [
        ["2010 to March 2015", "Legacy", "1/60th final salary", "65"],
        ["April 2015 to March 2022", "Remedy period — choice", "1/60th final salary or 1/57th CARE", "65 or State Pension age"],
        ["April 2022 onwards", "CARE", "1/57th career average", "State Pension age"],
      ]},
      { kind: "p", text: "Each slice has its own Normal Pension Age, which is why teachers can end up taking different parts of their pension at different times. Taking a slice before its own NPA triggers an actuarial reduction on that slice only — see [teacher early retirement](/teacher-early-retirement/) and [teacher pension age](/teacher-pension-age/)." },

      { kind: "h2", text: "Lump sums under each structure" },
      { kind: "p", text: "Only the NPA 60 final salary structure provides an automatic tax-free lump sum, at three times the annual pension. The 1/60th and CARE structures provide none by default." },
      { kind: "p", text: "All three allow you to create or increase a lump sum by commutation, exchanging £1 of annual pension for £12 of tax-free cash up to roughly a quarter of the capital value. Whether that is a good trade depends on how long you expect to draw the pension, as discussed in the [lump sum guide](/teacher-pension-lump-sum/)." },

      { kind: "h2", text: "Common misunderstandings" },
      { kind: "ul", items: [
        "**Thinking CARE replaced your old benefits.** It did not. Legacy benefits are preserved and paid on their own terms.",
        "**Assuming CARE is simply worse.** It has the best accrual fraction of the three structures.",
        "**Expecting one Normal Pension Age.** Different slices mature at different ages.",
        "**Thinking you must decide the McCloud choice now.** For most members it is made at retirement.",
        "**Forgetting revaluation stops enhancing if you leave.** Deferred benefits grow at CPI only.",
      ]},
      { kind: "callout", tone: "warn", title: "Illustrations, not entitlements", text: "Every figure on this page is calculated from published scheme rules on stated assumptions. Your annual benefit statement from Teachers' Pensions or SPPA is the authoritative record. This is guidance, not financial advice." },
      { kind: "h2", text: "When did the teachers' pension change to career average?" },
      { kind: "p", text: "The scheme moved from final salary to career average on 1 April 2015. That single date governs almost every question members have about which rules apply to them." },
      { kind: "table", caption: "Which section your service falls into", head: ["Period of service","Section","Accrual"], rows: [["Before 1 April 2015","Final salary","1/80th with 3x lump sum (NPA 60) or 1/60th (NPA 65)"],["1 Apr 2015 – 31 Mar 2022","McCloud remedy period — your choice at retirement","Final salary by default, CARE if you elect it"],["From 1 April 2022","CARE only","1/57th of each year's pay"]] },
      { kind: "p", text: "Teachers who were within ten years of Normal Pension Age in April 2012 originally kept full final salary protection. The McCloud judgment found that transitional protection discriminated on age, which is why the 2015–2022 window is now a choice for everyone rather than a protection for some." },
      { kind: "callout", tone: "info", title: "You choose at retirement, not now", text: "For the remedy period you do not have to decide anything today. Teachers' Pensions will issue a Remediable Service Statement comparing both options in cash terms when you come to retire, and you pick whichever is higher." },
    ],
    faq: [
      { question: "When did the teachers' pension change from final salary to career average?", answer: "On 1 April 2015. Service before that date stays in the final salary section, service from 1 April 2022 is career average, and the window between the two is covered by the McCloud remedy where you choose the better option at retirement." },
      { question: "Is final salary or career average better for teachers?", answer: "Final salary usually wins for teachers whose pay rises sharply late in their career, because the whole pension is based on that final figure. Career average often wins for teachers with flat pay, long part-time spells or early promotion, because every year is revalued at CPI plus 1.6% rather than being anchored to the end." },
      { question: "How is career average teachers' pension calculated?", answer: "Each year the scheme takes your pensionable pay, divides it by 57, and adds that amount to your pension as a guaranteed annual entitlement. The running total is then revalued every year by CPI plus 1.6% while you remain in active service." },
      { question: "Do I have to choose between final salary and career average now?", answer: "No. For the 2015 to 2022 remedy period the choice is made at retirement, when Teachers' Pensions send a Remediable Service Statement setting out both figures. You take whichever produces the higher benefit." },
      { question: "What is the difference between CARE and final salary?", answer: "Final salary calculates your pension from your salary at retirement multiplied by an accrual fraction and your years of service, so early career earnings do not matter. CARE banks a slice of each individual year's actual pay as guaranteed pension and revalues it annually, so every year of your career contributes directly." },
      { question: "Is the CARE pension worse than final salary?", answer: "Not automatically. CARE has the most generous accrual rate of the three teachers' structures at 1/57th, against 1/60th and 1/80th for the final salary bases. Final salary can still win for someone promoted steeply late in their career, because it applies its fraction to the higher final figure across all years of service." },
      { question: "What is the McCloud remedy?", answer: "The courts found that the 2015 transitional protection, which let older members stay in the legacy final salary scheme, discriminated on grounds of age. The remedy rolled all service between 1 April 2015 and 31 March 2022 back into the legacy scheme for everyone affected, and gives members a choice of which scheme's benefits to take for that period. From 1 April 2022 everyone accrues in CARE." },
      { question: "Do I need to make a McCloud choice now?", answer: "For most affected members, no. The choice between legacy and CARE benefits for the 2015 to 2022 remedy period is normally made at retirement, when your actual final salary is known and the two options can be compared with real figures rather than projections." },
      { question: "What is the accrual rate for teachers' CARE pension?", answer: "1/57th of each year's pensionable pay. On a £52,835 salary that is about £927 of guaranteed annual pension for that year's service, compared with £881 under the 1/60th final salary basis and £660 under 1/80th." },
      { question: "Do I still get an automatic lump sum?", answer: "Only if you have service on the pre-2007 NPA 60 final salary basis, which carries an automatic tax-free lump sum of three times the annual pension. The 1/60th and CARE structures provide no automatic lump sum, though you can create one by commutation at £12 of cash per £1 of annual pension surrendered." },
      { question: "Can I have benefits in both schemes?", answer: "Yes, and most teachers with more than a few years of service do. A teacher who joined before April 2015 typically holds legacy benefits, remedy period benefits with a choice attached, and CARE benefits from April 2022 onwards. Each slice has its own Normal Pension Age." },
      { question: "What is revaluation in the CARE scheme?", answer: "Each year the pension you have already built up is increased. While you are an actively contributing member the increase is CPI plus 1.6%. If you leave the scheme your benefits become deferred and are revalued at CPI only, losing the 1.6% enhancement for the rest of the period until retirement." },
    ],
    sources: PENSION_SOURCES,
    updated: UPDATED,
  },

  // ---------------------------------------------------------------- 4
  {
    slug: "teacher-pension-salary-sacrifice",
    hub: "pensions",
    title: "Is the Teachers' Pension Salary Sacrifice?",
    metaTitle: "Is Teachers' Pension Salary Sacrifice? No — Here's Why",
    metaDescription:
      "The Teachers' Pension is a net-pay arrangement, not salary sacrifice. What that means for your National Insurance, and what teachers actually lose as a result.",
    primaryKeyword: "is teacher pension salary sacrifice",
    secondaryKeywords: [
      "teachers pension salary sacrifice", "teacher pension net pay arrangement",
      "teachers pension national insurance",
    ],
    calculator: "none",
    intro:
      "No. The Teachers' Pension Scheme is a net-pay arrangement. It saves you income tax but it does not save you National Insurance — and that distinction costs a typical teacher a few hundred pounds a year compared with a true salary sacrifice arrangement.",
    keyTakeaways: [
      "The TPS is a net-pay arrangement, not salary sacrifice.",
      "Your contribution is deducted before income tax, so you get full relief at your marginal rate.",
      "National Insurance is still charged on your full gross pay, before the pension comes out.",
      "A true salary sacrifice arrangement would save an extra £200 to £360 a year in NI at typical teacher salaries.",
      "Some schools do offer genuine salary sacrifice for AVCs, cycle schemes and cars — those are separate from the main pension.",
    ],
    blocks: [
      { kind: "h2", text: "The short answer" },
      { kind: "p", text: "The Teachers' Pension Scheme operates a **net-pay arrangement**. Your contribution comes out of your gross pay before income tax is calculated, which means you get tax relief at your highest rate automatically with nothing to claim back." },
      { kind: "p", text: "But National Insurance is calculated on your gross pay **before** the pension deduction. Under a genuine salary sacrifice arrangement you would formally give up part of your contractual salary, which would reduce the figure NI is assessed on. The TPS does not work that way." },

      { kind: "h2", text: "Net pay versus salary sacrifice" },
      { kind: "table", caption: "How the two arrangements differ", head: ["", "Net-pay arrangement (TPS)", "Salary sacrifice"], rows: [
        ["Contractual salary", "Unchanged", "Formally reduced"],
        ["Income tax relief", "Yes, at marginal rate", "Yes, at marginal rate"],
        ["National Insurance saving", "No", "Yes"],
        ["Employer NI saving", "No", "Yes"],
        ["Affects mortgage salary figure", "No", "Potentially"],
        ["Affects statutory maternity pay", "No", "Potentially"],
      ]},
      { kind: "callout", tone: "info", title: "Why the order matters", text: "Income tax is charged on gross pay minus your pension contribution. National Insurance is charged on gross pay full stop. This is the single most common error in DIY payslip spreadsheets — see the [methodology page](/methodology/) for the exact calculation order." },

      { kind: "h2", text: "What it costs in real money" },
      { kind: "p", text: "The table below compares actual TPS treatment against a hypothetical salary sacrifice version at four pay points, using 2026/27 rates. The final column is what teachers lose because the scheme is not salary sacrifice." },
      { kind: "table", caption: "NI cost of net pay versus salary sacrifice, 2026/27 (calculated)", head: ["Salary", "Tier", "Contribution", "NI under TPS", "NI if sacrifice", "Extra NI paid"], rows: [
        ["£34,068 (M1)", "7.4%", "£2,521.03", "£1,719.84", "£1,518.16", "£201.68"],
        ["£40,940 (M4)", "8.6%", "£3,520.84", "£2,269.60", "£1,987.93", "£281.67"],
        ["£46,939 (M6)", "9.6%", "£4,506.14", "£2,749.52", "£2,389.03", "£360.49"],
        ["£52,835 (U3)", "9.6%", "£5,072.16", "£3,067.30", "£2,815.43", "£251.87"],
      ]},
      { kind: "p", text: "The loss peaks around M6 at roughly £360 a year and then falls at U3. That is not an error. Once your salary passes the upper earnings limit of £50,270, the top slice of pay attracts NI at only 2% rather than 8%, so sacrificing salary from that slice would save proportionally less. The tier rates driving the contribution column are set out in the [contributions guide](/teacher-pension-contributions/), and the full deduction picture at each pay point is in [teacher take-home pay](/teacher-take-home-pay/)." },
      { kind: "callout", tone: "tip", title: "It is a real cost but a small one", text: "Roughly £200 to £360 a year is worth knowing about, but it is dwarfed by the value of the scheme itself. Your employer contributes 28.8% of salary on top of what you pay. The NI treatment is a minor inefficiency, not a reason to reconsider membership." },

      { kind: "h2", text: "What teachers can access through salary sacrifice" },
      { kind: "p", text: "Although the main pension is not salary sacrifice, many schools and trusts do run genuine salary sacrifice schemes for other benefits. These are separate arrangements and they do save National Insurance." },
      { kind: "ul", items: [
        "**Cycle to work** — sacrifice salary for a bicycle, saving income tax and NI.",
        "**Electric car schemes** — increasingly common in larger trusts, with low benefit-in-kind rates.",
        "**Workplace nursery** — where the school partners with a provider.",
        "**Additional Voluntary Contributions** — some employers offer AVCs by salary sacrifice, though many run them as net pay too.",
      ]},
      { kind: "p", text: "If your employer offers AVCs by salary sacrifice, that genuinely is more efficient than paying them from net pay, because you save NI as well as income tax. Check with your payroll team which basis applies before assuming. The [AVC calculator](/teacher-avc-calculator/) shows what different contribution levels build up." },

      { kind: "h2", text: "The catch with salary sacrifice" },
      { kind: "p", text: "Salary sacrifice reduces your contractual pay, and that has consequences beyond the NI saving." },
      { kind: "ol", items: [
        "**Mortgage applications** may reference the reduced salary figure rather than your headline pay.",
        "**Statutory maternity pay** is calculated from actual earnings in the qualifying period, so heavy sacrifice can reduce it.",
        "**Some death-in-service and income protection benefits** are defined against contractual salary.",
        "**You cannot sacrifice below the National Minimum Wage**, which limits how much lower earners can use these schemes.",
      ]},
      { kind: "p", text: "For the main teachers' pension none of this arises, because your contractual salary is untouched. Your pensionable pay, your pay point and your death-in-service cover all reference the full figure." },

      { kind: "h2", text: "Checking your own payslip" },
      { kind: "p", text: "You can verify the treatment yourself in about a minute. Take your gross pay for the month, subtract £1,047.50 (the monthly personal allowance and NI threshold), and multiply by 8%. If that matches your NI line, NI is being charged on gross and you are on a net-pay arrangement." },
      { kind: "p", text: "If your NI figure is lower than that, something is being sacrificed somewhere — most likely a cycle scheme, car scheme or salary sacrifice AVC. Run your own numbers through the [teacher pay calculator](/teacher-pay-calculator/) to compare." },
    ],
    faq: [
      { question: "Is the Teachers' Pension salary sacrifice?", answer: "No. It is a net-pay arrangement. Your contribution is deducted from gross pay before income tax, giving full tax relief at your marginal rate, but National Insurance is still charged on your full gross pay before the pension is taken off." },
      { question: "Do teachers save National Insurance on pension contributions?", answer: "No. Because the scheme is a net-pay arrangement rather than salary sacrifice, National Insurance is assessed on gross pay. A teacher on M4 pays about £282 a year more in NI than they would under a true salary sacrifice arrangement." },
      { question: "What is a net-pay arrangement?", answer: "A pension arrangement where contributions are taken from gross pay before income tax is calculated. You receive tax relief at your marginal rate automatically with nothing to reclaim, but your contractual salary is unchanged so National Insurance is still charged on the full amount." },
      { question: "How much would salary sacrifice save a teacher?", answer: "Between roughly £200 and £360 a year at typical classroom teacher salaries. The saving peaks around M6 and falls slightly at Upper Pay Range level, because pay above the £50,270 upper earnings limit only attracts NI at 2% rather than 8%." },
      { question: "Can I ask my school to make my pension salary sacrifice?", answer: "No. The basis of the Teachers' Pension Scheme is set in the scheme regulations, not by individual employers. Your school cannot convert it to salary sacrifice. Employers can, however, offer salary sacrifice for other benefits such as cycle schemes, cars and in some cases AVCs." },
      { question: "Are teacher AVCs salary sacrifice?", answer: "It depends on your employer. Some schools and trusts offer AVCs by salary sacrifice, which saves National Insurance as well as income tax. Others run them as a net-pay deduction like the main scheme. Ask your payroll team which basis applies to you." },
      { question: "Does salary sacrifice affect my pension benefits?", answer: "For the main teachers' pension, no, because it is not salary sacrifice and your contractual pay is unchanged. If you use salary sacrifice for other benefits, check whether your employer defines pensionable pay before or after the sacrifice, as heavy sacrifice can in some arrangements reduce the pay your pension is based on." },
    ],
    sources: [
      { label: "HMRC — Rates and thresholds for employers 2026 to 2027", url: "https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" },
      { label: "HMRC — Salary sacrifice for employers", url: "https://www.gov.uk/guidance/salary-sacrifice-and-the-effects-on-paye" },
      { label: "Teachers' Pensions — member contribution tiers", url: "https://www.teacherspensions.co.uk/members/working-life/paying-in/contribution-tiers.aspx" },
    ],
    updated: UPDATED,
  },

  // ---------------------------------------------------------------- 5
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
      { kind: "p", text: "Almost all classroom teachers stay entirely within the basic rate band. A teacher would need a gross salary of roughly £54,000 before any income reached the 40% rate, once the pension deduction is taken into account. Leadership salaries do cross it — see the [leadership pay scale](/leadership-pay-scale/)." },
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
        ["K475", "£39,848", "£8,399", "£2,053"],
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
      { question: "How much income tax does a teacher pay?", answer: "A teacher on M3 earning £38,400 pays about £4,506 a year in income tax, after the pension contribution and personal allowance are deducted. On M1 at £34,068 it is roughly £3,795, and on U3 at £52,835 around £6,846. All assume the standard 1257L code and scheme membership." },
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

  // ---------------------------------------------------------------- 6
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
