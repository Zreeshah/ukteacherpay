import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorSlot from "@/components/CalculatorSlot";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import Prose from "@/components/Prose";
import RelatedContent from "@/components/RelatedContent";
import InlineLinks from "@/components/InlineLinks";
import HubIndex from "@/components/HubIndex";
import TableOfContents from "@/components/TableOfContents";
import { allPages, getPage, inlineLinksFor, relatedFor, spokesFor } from "@/content";
import { hubs } from "@/content/types";
import { lastUpdatedLabel } from "@/data/tax-rates";
import {
  articleJsonLd, faqPageJsonLd, pageMetadata, softwareAppJsonLd,
} from "@/lib/seo";
import type { CalcPreset } from "@/components/calculators/TeacherPayCalculator";

export function generateStaticParams() {
  return allPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}/`,
  });
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  const hub = hubs[page.hub];
  const crumbs = page.isPillar
    ? [{ name: hub.label, path: `/${page.slug}/` }]
    : [
        { name: hub.label, path: `/${hub.pillarSlug}/` },
        { name: page.title, path: `/${page.slug}/` },
      ];

  const related = relatedFor(page.slug);
  const inline = inlineLinksFor(page.slug);
  const spokes = spokesFor(page.slug);

  // Split the article so contextual links land mid-content rather than
  // being stranded at the bottom where they carry less weight.
  const h2s = page.blocks.map((b, i) => (b.kind === "h2" ? i : -1)).filter((i) => i >= 0);
  const splitAt = h2s.length >= 3 ? h2s[2] : -1;
  const head = splitAt > 0 ? page.blocks.slice(0, splitAt) : page.blocks;
  const tail = splitAt > 0 ? page.blocks.slice(splitAt) : [];
  const hasCalc = page.calculator !== "none";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs items={crumbs} />

      <header className="mt-5 max-w-3xl">
        <h1 className="text-3xl font-semibold sm:text-4xl">{page.title}</h1>
        <p className="mt-3 text-lg text-ink/75">{page.intro}</p>
        <p className="mt-3 text-sm text-ink/55">
          Updated {lastUpdatedLabel} · STPCD 2026/27 pay scales · 2026/27 tax year
        </p>
      </header>

      {hasCalc && (
        <section className="mt-8" aria-label="Calculator">
          <CalculatorSlot
            kind={page.calculator}
            preset={page.calculatorPreset as CalcPreset | undefined}
          />
        </section>
      )}

      {page.keyTakeaways.length > 0 && (
        <section className="card mt-8 max-w-3xl p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/60">
            Key takeaways
          </h2>
          <ul className="mt-3 space-y-2 text-ink/80">
            {page.keyTakeaways.map((t) => (
              <li key={t} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
        <article className="max-w-3xl">
          <Prose blocks={head} />
          {tail.length > 0 && (
            <>
              <InlineLinks items={inline} />
              <Prose blocks={tail} />
            </>
          )}
          <div className="mt-10 space-y-8">
            {page.isPillar && <HubIndex items={spokes} hubLabel={hub.label} />}
            <FaqAccordion items={page.faq} />
            {page.sources.length > 0 && (
              <section className="card p-5">
                <h2 className="text-sm font-semibold">Sources</h2>
                <ul className="mt-2 space-y-1 text-sm">
                  {page.sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-strong hover:underline"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <RelatedContent items={related} />
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-20 space-y-4">
            <TableOfContents blocks={page.blocks} />
          </div>
        </aside>
      </div>

      <JsonLd
        data={articleJsonLd({
          headline: page.title,
          description: page.metaDescription,
          path: `/${page.slug}/`,
          updated: page.updated,
        })}
      />
      {page.faq.length > 0 && <JsonLd data={faqPageJsonLd(page.faq)} />}
      {hasCalc && (
        <JsonLd
          data={softwareAppJsonLd({
            name: page.title,
            description: page.metaDescription,
            path: `/${page.slug}/`,
          })}
        />
      )}
    </div>
  );
}
