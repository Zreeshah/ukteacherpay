import type { MetadataRoute } from "next";
import { allPages } from "@/content";
import { SITE_URL } from "@/lib/seo";
import { lastUpdated } from "@/data/tax-rates";

export const dynamic = "force-static";

const trustPages = ["contact", "editorial-policy", "disclaimer", "terms", "corrections", "privacy"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = allPages();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: lastUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...pages.map((p) => ({
      url: `${SITE_URL}/${p.slug}/`,
      lastModified: p.updated,
      changeFrequency: (p.isPillar ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: p.isPillar ? 0.9 : 0.7,
    })),
    ...trustPages.map((slug) => ({
      url: `${SITE_URL}/${slug}/`,
      lastModified: "2026-10-09",
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
