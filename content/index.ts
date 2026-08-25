import type { PageContent } from "./types";
import type { RelatedLink } from "@/components/RelatedContent";
import {
  affinity, anchorFor, bridgeTargets, chainNeighbours, hubPillar,
} from "./taxonomy";

import { calculatorPages } from "./pages/calculators";
import { payScalePages } from "./pages/pay-scales";
import { leadershipPages } from "./pages/leadership";
import { pensionPages } from "./pages/pensions";
import { salaryPages } from "./pages/salaries";
import { policyPages } from "./pages/policy";
import { planningPages } from "./pages/planning";
import { utilityPages } from "./pages/utility";
import { extraPages } from "./pages/extras";
import { pensionExtras2Pages } from "./pages/pension-extras-2";

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
  ...pensionExtras2Pages,
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
/**
 * Semantic related-links resolver.
 *
 * Composition order encodes intent. Ascent first so every spoke consolidates
 * authority into its pillar, then sequential neighbours so families stay
 * browsable, then deliberate cross-hub bridges, then same-topic affinity.
 * Same-hub siblings only fill remaining slots.
 */
const MAX_RELATED = 6;

export function relatedFor(slug: string): RelatedLink[] {
  const page = bySlug.get(slug);
  if (!page) return [];

  const pillar = hubPillar[page.hub];

  const candidates: string[] = [
    // 1. ascent to the hub pillar
    ...(pillar && pillar !== slug ? [pillar] : []),
    // 2. sequential neighbours in any family this page belongs to
    ...chainNeighbours(slug),
    // 3. deliberate cross-hub journey bridges
    ...bridgeTargets(slug),
    // 4. explicit same-topic affinity
    ...(affinity[slug] ?? []),
    // 5. same-hub siblings as filler
    ...REGISTRY.filter((p) => p.hub === page.hub && p.slug !== slug).map((p) => p.slug),
  ];

  const seen = new Set<string>([slug]);
  const out: RelatedLink[] = [];
  for (const target of candidates) {
    if (seen.has(target)) continue;
    const t = bySlug.get(target);
    if (!t) continue;
    seen.add(target);
    out.push({
      slug: t.slug,
      title: anchorFor(t.slug, slug, t.title),
      blurb: t.metaDescription.slice(0, 110),
    });
    if (out.length >= MAX_RELATED) break;
  }
  return out;
}

/** Every spoke in a pillar's hub, for the on-page hub index. */
export function spokesFor(slug: string): RelatedLink[] {
  const page = bySlug.get(slug);
  if (!page || !page.isPillar) return [];
  return REGISTRY.filter((p) => p.hub === page.hub && p.slug !== slug).map((p) => ({
    slug: p.slug,
    title: p.title,
    blurb: p.metaDescription.slice(0, 110),
  }));
}

/**
 * Two or three in-content links surfaced mid-article. Contextual body links
 * carry more weight than a block in the footer, and rendering them from the
 * graph guarantees every page both emits and receives them.
 */
export function inlineLinksFor(slug: string): RelatedLink[] {
  const page = bySlug.get(slug);
  if (!page) return [];
  const pillar = hubPillar[page.hub];
  const pool = [
    ...bridgeTargets(slug),
    ...(affinity[slug] ?? []),
    ...chainNeighbours(slug),
    ...(pillar && pillar !== slug ? [pillar] : []),
  ];
  const seen = new Set<string>([slug]);
  const out: RelatedLink[] = [];
  for (const target of pool) {
    if (seen.has(target)) continue;
    const t = bySlug.get(target);
    if (!t) continue;
    seen.add(target);
    out.push({
      slug: t.slug,
      title: anchorFor(t.slug, slug + "-inline", t.title),
      blurb: t.metaDescription.slice(0, 90),
    });
    if (out.length >= 3) break;
  }
  return out;
}
