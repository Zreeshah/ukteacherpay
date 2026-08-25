import type { Metadata } from "next";

/**
 * Canonical origin. Must match the domain the site is actually served from,
 * otherwise every canonical tag points at a domain Google cannot fetch.
 *
 * Set NEXT_PUBLIC_SITE_URL in Vercel when a custom domain is attached.
 * Falls back to the Vercel production URL, then to the preview URL.
 */
const FALLBACK_URL = "https://uk-teacherpaycalculator.co.uk";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;
  return FALLBACK_URL;
}

export const SITE_URL = resolveSiteUrl();
export const SITE_NAME = "UK Teacher Pay";
export const SITE_TAGLINE = "Teacher Pay, Pension & Salary Calculators";
export const THEME_COLOR = "#f8fafc";

interface SeoFields {
  title: string;
  description: string;
  path: string;
}

export function pageMetadata({ title, description, path }: SeoFields): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_GB",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Free UK teacher pay, salary and pension calculators built on official STPCD and HMRC figures.",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/opengraph-image.png`,
      width: 1200,
      height: 630,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-GB",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function softwareAppJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
  };
}

export function faqPageJsonLd(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function articleJsonLd({
  headline,
  description,
  path,
  updated,
}: {
  headline: string;
  description: string;
  path: string;
  updated: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE_URL}${path}`,
    dateModified: updated,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
  };
}

export function datasetJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name,
    description,
    url: `${SITE_URL}${path}`,
    license: "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/",
    creator: { "@type": "Organization", name: SITE_NAME },
  };
}
