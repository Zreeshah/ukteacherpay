import type { HubId } from "./types";

/**
 * Semantic internal-linking model.
 *
 * Link equity is distributed by intent, not by array order. Four mechanisms
 * combine, in priority order:
 *
 *  1. ASCENT    — every spoke links up to its hub pillar.
 *  2. CHAIN     — ordered families (regions, pay points, career stages) link
 *                 to their immediate neighbours, forming a browsable sequence.
 *  3. BRIDGE    — deliberate cross-hub links that follow a real user journey
 *                 (e.g. "I know my pay scale" -> "what do I take home?").
 *  4. AFFINITY  — explicit same-topic pairings that are not sequential.
 *
 * A validation pass (scripts/link-audit.mjs) enforces a minimum inbound count
 * so no page is orphaned and no page hoards equity.
 */

/** Ordered families. Each page links to its previous and next neighbour. */
export const chains: Record<string, string[]> = {
  // England regional pay ladder, ordered low to high cost-of-living
  regions: [
    "teacher-pay-scale",
    "london-fringe-teacher-pay-scale",
    "outer-london-teacher-pay-scale",
    "inner-london-teacher-pay-scale",
    "teacher-pay-scale-london",
  ],
  // Devolved nations
  nations: [
    "teacher-pay-scale",
    "teacher-pay-scale-wales",
    "teacher-pay-scale-scotland",
    "ni-teacher-pay-scale",
  ],
  // Career progression by scale
  scaleLadder: [
    "unqualified-teacher-pay-scale",
    "main-pay-range",
    "upper-pay-range",
    "lead-practitioner-pay-scale",
    "leadership-pay-scale",
  ],
  // Leadership seniority
  leadershipLadder: [
    "lead-practitioner-pay-scale",
    "assistant-head-teacher-salary",
    "deputy-head-teacher-salary",
    "head-teacher-salary",
    "how-to-move-up-leadership-pay-scale",
  ],
  // Career stage
  careerStage: [
    "teacher-starting-salary",
    "primary-school-teacher-salary",
    "secondary-school-teacher-salary",
    "average-teacher-salary-uk",
    "teacher-salary-uk",
  ],
  // Subject specialisms
  subjects: [
    "maths-teacher-salary",
    "english-teacher-salary",
    "sen-teacher-salary",
    "pe-teacher-salary",
    "music-teacher-salary",
    "art-teacher-salary",
  ],
  // Non-STPCD sectors
  sectors: [
    "supply-teacher-pay",
    "teaching-assistant-salary",
    "private-school-teacher-salary",
    "college-teacher-salary",
    "nursery-teacher-salary",
  ],
  // Pension lifecycle, joining through to death benefits
  pensionLifecycle: [
    "how-does-teacher-pension-work",
    "teacher-pension-contributions",
    "care-vs-final-salary-pension",
    "teacher-pension-age",
    "teacher-early-retirement",
    "teacher-pension-lump-sum",
    "teacher-pension-death-in-service",
  ],
  // Topping up your pension
  pensionTopUp: [
    "teacher-avc-calculator",
    "prudential-avc-teachers",
    "teacher-pension-salary-sacrifice",
    "teacher-pension-advice",
  ],
  // Pay award timeline
  payAwards: [
    "teacher-pay-rise",
    "teacher-pay-rise-2026-27",
    "teacher-pay-rise-2025",
    "strb-pay-review-body",
  ],
  // Calculators by task
  calculators: [
    "teacher-pay-calculator",
    "part-time-teacher-pay-calculator",
    "teacher-tax-calculator",
    "teacher-pay-rise-calculator",
    "teacher-take-home-pay",
  ],
  // Money decisions
  planningJourney: [
    "teacher-financial-planning",
    "teacher-budget-planner",
    "student-loan-repayment-calculator",
    "teacher-redundancy-calculator",
    "teacher-resignation-deadlines",
    "leaving-teaching",
  ],
};

/**
 * Cross-hub journeys. `from` pages gain a link to `to`, expressing why a
 * reader on one page would want the other.
 */
export interface Bridge {
  from: string[];
  to: string;
  reason: string;
}

export const bridges: Bridge[] = [
  // Pay scale -> what it means in your pocket
  {
    from: [
      "teacher-pay-scale", "main-pay-range", "upper-pay-range",
      "unqualified-teacher-pay-scale", "inner-london-teacher-pay-scale",
      "outer-london-teacher-pay-scale", "london-fringe-teacher-pay-scale",
      "teacher-pay-scale-wales", "teacher-pay-scale-scotland",
      "ni-teacher-pay-scale", "leadership-pay-scale",
    ],
    to: "teacher-pay-calculator",
    reason: "Turn this pay point into a take-home figure",
  },
  // Salary guide -> the underlying scale
  {
    from: [
      "teacher-salary-uk", "average-teacher-salary-uk",
      "primary-school-teacher-salary", "secondary-school-teacher-salary",
      "teacher-starting-salary", "maths-teacher-salary", "sen-teacher-salary",
      "pe-teacher-salary", "english-teacher-salary", "music-teacher-salary",
      "art-teacher-salary",
    ],
    to: "teacher-pay-scale",
    reason: "See the statutory pay scale behind these figures",
  },
  // Anyone paid -> pension
  {
    from: [
      "teacher-pay-calculator", "teacher-take-home-pay",
      "part-time-teacher-pay-calculator", "teacher-salary-uk",
      "leadership-pay-scale", "leaving-teaching",
    ],
    to: "teacher-pension",
    reason: "Understand the pension coming out of your pay",
  },
  // Pension pages -> model it
  {
    from: [
      "teacher-pension", "how-does-teacher-pension-work",
      "teacher-pension-contributions", "care-vs-final-salary-pension",
      "teacher-pension-age", "average-teacher-pension-uk",
      "is-teacher-pension-good",
    ],
    to: "teacher-pension-calculator",
    reason: "Project your own pension",
  },
  // Pay rise -> recalculate
  {
    from: ["teacher-pay-rise", "teacher-pay-rise-2026-27", "teacher-pay-rise-2025"],
    to: "teacher-pay-rise-calculator",
    reason: "Work out what the award is worth to you",
  },
  // Money worries -> planning hub
  {
    from: [
      "teacher-take-home-pay", "teacher-budget-planner",
      "student-loan-repayment-calculator", "teacher-redundancy-calculator",
      "teacher-true-hourly-rate", "teacher-sick-pay", "teacher-maternity-pay",
    ],
    to: "teacher-financial-planning",
    reason: "More money guidance for teachers",
  },
  // Part-time / sector -> salary hub
  {
    from: [
      "part-time-teacher-pay-calculator", "supply-teacher-pay",
      "teaching-assistant-salary", "private-school-teacher-salary",
      "college-teacher-salary", "nursery-teacher-salary",
      "teacher-true-hourly-rate",
    ],
    to: "teacher-salary-uk",
    reason: "Compare with what teachers earn across the UK",
  },
  // Leaving / redundancy -> pension consequences
  {
    from: ["leaving-teaching", "teacher-redundancy-calculator", "teacher-resignation-deadlines"],
    to: "teacher-early-retirement",
    reason: "What happens to your pension if you go early",
  },
  // Scotland cluster
  {
    from: ["teacher-pay-scale-scotland"],
    to: "teacher-pension-scotland",
    reason: "The separate Scottish pension scheme",
  },
  { from: ["teacher-pension-scotland"], to: "teacher-pay-scale-scotland", reason: "The SNCT pay scale" },
  // Tax
  {
    from: ["teacher-take-home-pay", "teacher-pay-calculator", "teacher-pay-rise-calculator"],
    to: "teacher-tax-calculator",
    reason: "Check your tax code is right",
  },
  // Trust pages
  {
    from: ["teacher-pay-calculator", "teacher-pension-calculator", "teacher-pay-scale"],
    to: "methodology",
    reason: "How these figures are calculated",
  },
];

/** Non-sequential same-topic pairings. */
export const affinity: Record<string, string[]> = {
  "teacher-pay-scale-2026-27": ["teacher-pay-scale-2025-26", "teacher-pay-rise-2026-27", "teacher-pay-scale"],
  "teacher-pay-scale-2025-26": ["teacher-pay-scale-2026-27", "teacher-pay-rise-2025"],
  "neu-teacher-pay-scales": ["nasuwt-teacher-pay-scales", "teacher-pay-scale", "strb-pay-review-body"],
  "nasuwt-teacher-pay-scales": ["neu-teacher-pay-scales", "teacher-pay-scale", "teacher-pay-rise"],
  "teacher-pay-map": ["average-teacher-salary-uk", "inner-london-teacher-pay-scale", "teacher-pay-scale"],
  "average-teacher-salary-uk": ["teacher-pay-map", "teacher-salary-uk"],
  "teacher-maternity-pay": ["teacher-sick-pay", "part-time-teacher-pay-calculator"],
  "teacher-sick-pay": ["teacher-maternity-pay", "teacher-resignation-deadlines"],
  "teacher-true-hourly-rate": ["part-time-teacher-pay-calculator", "teacher-take-home-pay"],
  "is-teacher-pension-good": ["average-teacher-pension-uk", "teacher-pension-salary-sacrifice", "teacher-avc-calculator"],
  "teacher-pension-advice": ["teacher-pension-calculator", "is-teacher-pension-good"],
  "teacher-tax-calculator": ["teacher-take-home-pay", "teacher-pay-calculator"],
  "teacher-financial-planning": ["teacher-budget-planner", "teacher-take-home-pay", "teacher-pension"],
  "about": ["methodology", "sources"],
  "sources": ["methodology", "about"],
  "methodology": ["sources", "about"],
  "privacy": ["about", "methodology"],
  "teaching-assistant-salary": ["lgps-pension-calculator", "supply-teacher-pay", "teacher-salary-uk"],
  "private-school-teacher-salary": ["teacher-salary-uk", "teacher-pension"],
  "nursery-teacher-salary": ["teacher-starting-salary", "teacher-salary-uk"],
  "pe-teacher-salary": ["secondary-school-teacher-salary", "teacher-salary-uk"],
  "care-vs-final-salary-pension": ["teacher-pension", "teacher-pension-age", "lgps-pension-calculator"],
  "lgps-pension-calculator": ["teaching-assistant-salary", "teacher-pension", "teacher-pension-scotland"],
  "teacher-pension-scotland": ["teacher-pension", "teacher-pay-scale-scotland", "lgps-pension-calculator"],
};

/**
 * Anchor-text variants. Rotating these avoids the same exact-match anchor
 * pointing at a page from every source, which reads as manipulation.
 */
export const anchorVariants: Record<string, string[]> = {
  "teacher-pay-calculator": [
    "teacher pay calculator",
    "work out your take-home pay",
    "calculate your salary after deductions",
  ],
  "teacher-pay-scale": [
    "teacher pay scales",
    "the STPCD pay scales",
    "every teacher pay point",
  ],
  "teacher-pension": [
    "the Teachers' Pension Scheme",
    "how the teachers' pension works",
    "teacher pension guide",
  ],
  "teacher-pension-calculator": [
    "teachers' pension calculator",
    "project your pension",
  ],
  "teacher-salary-uk": [
    "UK teacher salaries",
    "what teachers earn across the UK",
  ],
  "teacher-financial-planning": [
    "financial planning for teachers",
    "money guidance for teachers",
  ],
  "teacher-pay-rise": ["teacher pay rises", "how pay awards work"],
  "leadership-pay-scale": ["leadership pay scale", "leadership group pay"],
  "methodology": ["how we calculate these figures", "our methodology"],
};

/** Deterministic anchor pick so output is stable between builds. */
export function anchorFor(target: string, source: string, fallback: string): string {
  const variants = anchorVariants[target];
  if (!variants || variants.length === 0) return fallback;
  let hash = 0;
  for (let i = 0; i < source.length; i++) hash = (hash * 31 + source.charCodeAt(i)) >>> 0;
  return variants[hash % variants.length];
}

/** Neighbours of a page across every chain it appears in. */
export function chainNeighbours(slug: string): string[] {
  const out: string[] = [];
  for (const seq of Object.values(chains)) {
    const i = seq.indexOf(slug);
    if (i === -1) continue;
    if (i > 0) out.push(seq[i - 1]);
    if (i < seq.length - 1) out.push(seq[i + 1]);
  }
  return out;
}

export function bridgeTargets(slug: string): string[] {
  return bridges.filter((b) => b.from.includes(slug)).map((b) => b.to);
}

export const hubPillar: Record<HubId, string> = {
  calculator: "teacher-pay-calculator",
  "pay-scales": "teacher-pay-scale",
  leadership: "leadership-pay-scale",
  pensions: "teacher-pension",
  salaries: "teacher-salary-uk",
  policy: "teacher-pay-rise",
  planning: "teacher-financial-planning",
};
