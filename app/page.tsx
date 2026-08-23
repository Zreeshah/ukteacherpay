import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TeacherPayCalculator from "@/components/calculators/TeacherPayCalculator";
import { allPages, pillarFor } from "@/content";
import { hubs, type HubId } from "@/content/types";
import { lastUpdatedLabel, taxYearLabel } from "@/data/tax-rates";
import { mainRange, upperRange } from "@/data/teacher-pay-scales";
import { gbp } from "@/lib/format";
import { pageMetadata, softwareAppJsonLd, SITE_NAME } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `Teacher Pay Calculator UK ${taxYearLabel} — Take-Home Pay & Pay Scales`,
  description:
    "Free UK teacher pay calculator using STPCD 2026/27 pay scales and 2026/27 tax rates. See take-home pay after pension, tax, NI and student loan for any pay point.",
  path: "/",
});

const HUB_ORDER: HubId[] = [
  "calculator", "pay-scales", "leadership", "pensions", "salaries", "policy", "planning",
];

export default function Home() {
  const pages = allPages();

  return (
    <div>
      {/* Hero + calculator */}
      <section className="border-b border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent-strong">
              STPCD {taxYearLabel} · Updated {lastUpdatedLabel}
            </p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Teacher Pay Calculator {taxYearLabel}
            </h1>
            <p className="mt-3 text-lg text-ink/75">
              Work out exactly what you take home. Choose your pay scale, region
              and hours to see your salary after pension, income tax, National
              Insurance and student loan — with every deduction shown line by
              line.
            </p>
          </div>

          <div className="mt-8">
            <TeacherPayCalculator />
          </div>
        </div>
      </section>

      {/* Quick pay reference */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">
          Teacher pay scales at a glance
        </h2>
        <p className="mt-2 max-w-2xl text-ink/70">
          The {taxYearLabel} STPCD figures for the rest of England. A 3.5% award
          was applied from 1 September 2026.{" "}
          <Link href="/teacher-pay-scale/" className="font-medium text-accent-strong hover:underline">
            See every region and scale
          </Link>
          .
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Main Pay Range", points: mainRange.england, prefix: "M", href: "/main-pay-range/" },
            { label: "Upper Pay Range", points: upperRange.england, prefix: "U", href: "/upper-pay-range/" },
          ].map((scale) => (
            <div key={scale.label} className="card p-5">
              <h3 className="font-semibold">{scale.label}</h3>
              <dl className="mt-3 space-y-1.5 text-sm">
                {scale.points.map((salary, i) => (
                  <div key={i} className="flex justify-between">
                    <dt className="text-ink/60">{scale.prefix}{i + 1}</dt>
                    <dd className="tabular font-medium">{gbp(salary)}</dd>
                  </div>
                ))}
              </dl>
              <Link href={scale.href} className="mt-3 inline-block text-sm font-medium text-accent-strong hover:underline">
                Full guide
              </Link>
            </div>
          ))}
          <div className="card p-5">
            <h3 className="font-semibold">Where the money goes</h3>
            <p className="mt-3 text-sm text-ink/70">
              On M1 (£34,068) a teacher pays £2,521 in pension, £3,795 in income
              tax and £1,720 in National Insurance — taking home about{" "}
              <strong>£2,169 a month</strong>.
            </p>
            <p className="mt-3 text-sm text-ink/70">
              Your employer adds another 28.8% of salary into your pension on top.
            </p>
            <Link href="/teacher-take-home-pay/" className="mt-3 inline-block text-sm font-medium text-accent-strong hover:underline">
              Take-home pay by pay point
            </Link>
          </div>
        </div>
      </section>

      {/* Hubs */}
      <section id="explore" className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Explore by topic</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HUB_ORDER.map((id) => {
              const hub = hubs[id];
              const pillar = pillarFor(id);
              const count = pages.filter((p) => p.hub === id).length;
              if (!pillar) return null;
              return (
                <Link
                  key={id}
                  href={`/${pillar.slug}/`}
                  className="card block p-5 transition hover:border-accent-strong/40 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-accent-strong">{hub.label}</h3>
                  <p className="mt-1.5 text-sm text-ink/70">{hub.blurb}</p>
                  <p className="mt-3 text-xs text-ink/50">
                    {count} {count === 1 ? "page" : "pages"}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* All pages index */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Every calculator and guide</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {HUB_ORDER.map((id) => {
            const inHub = pages.filter((p) => p.hub === id);
            if (inHub.length === 0) return null;
            return (
              <div key={id}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/55">
                  {hubs[id].label}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {inHub.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/${p.slug}/`} className="text-ink/80 hover:text-accent-strong hover:underline">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <JsonLd
        data={softwareAppJsonLd({
          name: `${SITE_NAME} Teacher Pay Calculator`,
          description:
            "Calculate UK teacher take-home pay from STPCD pay scales including pension, tax, National Insurance and student loan.",
          path: "/",
        })}
      />
    </div>
  );
}
