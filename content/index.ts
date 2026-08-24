import type { PageContent } from "./types";
import type { RelatedLink } from "@/components/RelatedContent";

import { calculatorPages } from "./pages/calculators";
import { payScalePages } from "./pages/pay-scales";
import { leadershipPages } from "./pages/leadership";
import { pensionPages } from "./pages/pensions";
import { salaryPages } from "./pages/salaries";
import { policyPages } from "./pages/policy";
import { planningPages } from "./pages/planning";
import { utilityPages } from "./pages/utility";
import { extraPages } from "./pages/extras";

const REGISTRY: PageContent[] = [
  ...calculatorPages,
  ...payScalePages,
  ...leadershipPages,
  ...pensionPages,
  ...salaryPages,
  ...policyPages,
  ...planningPages,
  ...utilityPages,
  ...extraPages,
];

const bySlug = new Map(REGISTRY.map((p) => [p.slug, p]));

export function allPages(): PageContent[] {
  return REGISTRY;
}

export function getPage(slug: string): PageContent | undefined {
  return bySlug.get(slug);
}

export function pagesInHub(hub: PageContent["hub"]): PageContent[] {
  return REGISTRY.filter((p) => p.hub === hub);
}

export function pillarFor(hub: PageContent["hub"]): PageContent | undefined {
  return REGISTRY.find((p) => p.hub === hub && p.isPillar);
}

/**
 * Explicit internal-link map. Every page must resolve to at least 4 live
 * destinations so nothing is orphaned. Anything missing falls back to
 * hub siblings plus the hub pillar.
 */
export const relatedMap: Record<string, string[]> = {
  "teacher-pay-calculator": [
    "teacher-pay-scale", "part-time-teacher-pay-calculator",
    "teacher-pension", "teacher-take-home-pay", "teacher-salary-uk",
  ],
  "teacher-pay-scale": [
    "teacher-pay-calculator", "main-pay-range", "upper-pay-range",
    "leadership-pay-scale", "inner-london-teacher-pay-scale", "teacher-pay-rise",
  ],
  "teacher-pension": [
    "teacher-pension-calculator", "teacher-pension-contributions",
    "teacher-avc-calculator", "teacher-early-retirement", "teacher-pay-calculator",
  ],
  "teacher-salary-uk": [
    "teacher-pay-scale", "teacher-pay-calculator", "average-teacher-salary-uk",
    "primary-school-teacher-salary", "secondary-school-teacher-salary",
  ],
  "teacher-pay-rise": [
    "teacher-pay-scale", "teacher-pay-calculator", "teacher-pay-rise-2026-27",
    "teacher-salary-uk",
  ],
  "leadership-pay-scale": [
    "teacher-pay-scale", "head-teacher-salary", "deputy-head-teacher-salary",
    "lead-practitioner-pay-scale", "teacher-pay-calculator",
  ],
  "teacher-financial-planning": [
    "teacher-redundancy-calculator", "student-loan-repayment-calculator",
    "teacher-pension", "teacher-pay-calculator",
  ],
};

export function relatedFor(slug: string): RelatedLink[] {
  const page = bySlug.get(slug);
  if (!page) return [];

  const explicit = relatedMap[slug] ?? [];
  const siblings = REGISTRY.filter(
    (p) => p.hub === page.hub && p.slug !== slug,
  ).map((p) => p.slug);
  const pillar = pillarFor(page.hub);

  const ordered = [
    ...explicit,
    ...(pillar && pillar.slug !== slug ? [pillar.slug] : []),
    ...siblings,
  ];

  const seen = new Set<string>([slug]);
  const out: RelatedLink[] = [];
  for (const s of ordered) {
    if (seen.has(s)) continue;
    const target = bySlug.get(s);
    if (!target) continue;
    seen.add(s);
    out.push({
      slug: target.slug,
      title: target.title,
      blurb: target.metaDescription.slice(0, 110),
    });
    if (out.length >= 6) break;
  }
  return out;
}
