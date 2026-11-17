import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Partners",
  description: "Our public profiles and Google-published teacher pay resources from UK Teacher Pay.",
  path: "/our-partners/",
});

const profiles = [
  {
    href: "https://gravatar.com/zreeshah",
    label: "Gravatar — Abuzar Naqvi",
    note: "Public Gravatar profile for Abuzar Naqvi, linking to UK Teacher Pay.",
  },
  {
    href: "https://www.thingiverse.com/alexmorganuk",
    label: "Thingiverse — Alex Morgan",
    note: "Public Thingiverse profile for Alex Morgan, linking to UK Teacher Pay.",
  },
  {
    href: "https://velog.io/@alexmorganuk",
    label: "Velog — Alex Morgan",
    note: "Public Velog profile for Alex Morgan, linking to UK Teacher Pay.",
  },
  {
    href: "https://www.wattpad.com/user/alexmorganuk",
    label: "Wattpad — Alex Morgan",
    note: "Public Wattpad profile for Alex Morgan, linking to UK Teacher Pay.",
  },
  {
    href: "https://wefunder.com/alexmorganuk",
    label: "Wefunder — Alex Morgan",
    note: "Public Wefunder profile for Alex Morgan, linking to UK Teacher Pay.",
  },
];

const googleResources = [
  {
    href: "https://drive.google.com/drive/folders/1pGTxAqBIzOIGRQDWl-ZrVa11tfDQN9CM",
    label: "Drive hub",
    note: "The shared Drive folder holding our teacher pay resources.",
  },
  {
    href: "https://docs.google.com/spreadsheets/d/1BSrjOKagD0odrP3jdRiFicNY_3wLnR5Too2bjd3vy9o/edit?usp=drivesdk",
    label: "Teacher pay data hub (Sheets)",
    note: "The spreadsheet hub for our teacher pay data.",
  },
  {
    href: "https://docs.google.com/document/d/1X3LufqKLmEF1nmZfpVDXQWhgzr97Y5REuhHSRWIIOSY/edit?usp=drivesdk",
    label: "Teacher pay calculator guide (Doc)",
    note: "Our guide to the teacher pay calculator.",
  },
  {
    href: "https://docs.google.com/document/d/1c9SL_-C7BwuFBhK0o7_kgjnDyGBtn1PivQY94Qx9dIc/edit?usp=drivesdk",
    label: "Main Pay Range M1–M6 guide (Doc)",
    note: "Our guide to the Main Pay Range, points M1 to M6.",
  },
  {
    href: "https://docs.google.com/document/d/1PwgaVZBgWy3IbECLpBWTUs5Lw6NqG0DHlP7NBPLjJyY/edit?usp=drivesdk",
    label: "Teachers' pension contributions guide (Doc)",
    note: "Our guide to Teachers' Pension contributions.",
  },
  {
    href: "https://docs.google.com/presentation/d/1GXiaFN75MmeCxlWmFwLJ7hJu6lPQo6NqXVnyuLQ4bsA/edit?usp=drivesdk",
    label: "Presentation (Slides)",
    note: "Our teacher pay presentation.",
  },
  {
    href: "https://calendar.google.com/calendar/u/0/r?cid=1ad4fa2bb017db56d5656a972956c84c9329731e93a7296af2430203720b0e58@group.calendar.google.com",
    label: "Pay award calendar",
    note: "Teacher pay award calendar published by UK Teacher Pay.",
  },
  {
    href: "https://drive.google.com/file/d/1_WwQY6UDJuRDjWjXQJR7aCLaUZtckrRo/view?usp=drivesdk",
    label: "UK pay regions map data (KML)",
    note: "Map data for UK teacher pay regions.",
  },
  {
    href: "https://docs.google.com/forms/d/1vP4sSf5upSZHxXjbI5EGIkNqDHKx7yfJQbhsPTGuKYg/edit?usp=drivesdk",
    label: "Intake form",
    note: "Contact and intake form published by UK Teacher Pay.",
  },
];

export default function OurPartnersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mt-5 max-w-3xl">
        <h1 className="text-3xl font-semibold sm:text-4xl">Our Partners</h1>
        <p className="mt-3 text-sm text-ink/55">Last updated 17 November 2026</p>
      </header>
      <article className="max-w-3xl">
        <p className="mt-3 text-lg text-ink/75">
          This page lists our own public profiles and Google documents published by UK Teacher Pay.
          It is a resource list, not an endorsement by, or a partnership with, the platforms named
          here — these are the places where our own public profiles and documents live.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Our profiles</h2>
          <div className="prose mt-3 max-w-3xl text-ink/80">
            <ul>
              {profiles.map((profile) => (
                <li key={profile.href}>
                  <a
                    className="font-medium text-accent-strong hover:underline"
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.label}
                  </a>{" "}
                  — {profile.note}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Our Google resources</h2>
          <div className="prose mt-3 max-w-3xl text-ink/80">
            <ul>
              {googleResources.map((resource) => (
                <li key={resource.href}>
                  <a
                    className="font-medium text-accent-strong hover:underline"
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.label}
                  </a>{" "}
                  — {resource.note}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">On this site</h2>
          <div className="prose mt-3 max-w-3xl text-ink/80">
            <ul>
              <li>
                <Link className="font-medium text-accent-strong hover:underline" href="/teacher-pay-calculator/">
                  Teacher pay calculator
                </Link>{" "}
                — work out take-home pay from STPCD pay scales.
              </li>
              <li>
                <Link className="font-medium text-accent-strong hover:underline" href="/main-pay-range/">
                  Main Pay Range
                </Link>{" "}
                — the Main Pay Range ladder, points M1 to M6.
              </li>
              <li>
                <Link className="font-medium text-accent-strong hover:underline" href="/teacher-pension-contributions/">
                  Teachers&apos; pension contributions
                </Link>{" "}
                — what you pay into Teachers&apos; Pensions and what your employer adds.
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}
