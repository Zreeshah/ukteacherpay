import type { MetadataRoute } from "next";
import { allPages } from "@/content";
import { SITE_URL } from "@/lib/seo";
import { lastUpdated } from "@/data/tax-rates";

export const dynamic = "force-static";

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
  ];
}
