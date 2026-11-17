import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Google Stacks",
  description:
    "Google-published resource hubs (Sheets directories and Blogger posts) for the calculator and service sites we run.",
  path: "/google-stacks/",
});

const stacks = [
  {
    site: "Linijka Online — linijka.onl (polski)",
    links: [
      {
        href: "https://docs.google.com/spreadsheets/d/1jJsSnIZtz3edRk8gFRwNIP-uN33Ioxthlk2lDzZdW-o/edit?usp=drivesdk",
        label: "Arkusz główny — Linijka Online",
        note: "Katalog arkusza Google z artykułami, prezentacją, formularzem, kalendarzem i mapą dla linijki online.",
      },
      {
        href: "https://theblacksheepcommunity.blogspot.com/2026/11/linijka-online-linijka-online.html",
        label: "Wpis na blogu — Linijka Online",
        note: "Wpis na blogu z przewodnikami po linijce online, kalibracji i pomiarach w centymetrach.",
      },
    ],
  },
  {
    site: "Linijka-Online.pl — linijka-online.pl (polski)",
    links: [
      {
        href: "https://docs.google.com/spreadsheets/d/12wkb3J-WF8MFhR1JnK7-YRb6Ji2DG7iEipMHLMhTmq8/edit?usp=drivesdk",
        label: "Arkusz główny — Linijka-Online.pl",
        note: "Katalog arkusza Google z artykułami, prezentacją, formularzem, kalendarzem i mapą dla wirtualnej linijki.",
      },
      {
        href: "https://theblacksheepcommunity.blogspot.com/2026/11/linijka-onlinepl-linijka-onlinepl.html",
        label: "Wpis na blogu — Linijka-Online.pl",
        note: "Wpis na blogu z przewodnikami po linijce w rzeczywistym rozmiarze.",
      },
    ],
  },
  {
    site: "Lineal Online — lineal.onl (Deutsch)",
    links: [
      {
        href: "https://docs.google.com/spreadsheets/d/1iGgANbtkakcGm7chu44JpU5Dgq3JuAPp7afEQK3po4g/edit?usp=drivesdk",
        label: "Master-Verzeichnis — Lineal Online",
        note: "Google-Tabellenverzeichnis mit Artikeln, Präsentation, Formular, Kalender und Karte für das Online-Lineal.",
      },
      {
        href: "https://theblacksheepcommunity.blogspot.com/2026/11/lineal-online-lineal-online.html",
        label: "Blogbeitrag — Lineal Online",
        note: "Blogbeitrag mit Anleitungen zum Lineal in Originalgröße und zur Kalibrierung.",
      },
    ],
  },
  {
    site: "NannyOra — nannyora.co.nz (English)",
    links: [
      {
        href: "https://docs.google.com/spreadsheets/d/1E5MNxrTglrtBTZs0CoMO-hj_G-uPFK918GfiV0s-Z54/edit?usp=drivesdk",
        label: "Master Stack Directory — NannyOra",
        note: "Google Sheets directory of the articles, presentation, form, calendar and map for Auckland nanny care.",
      },
      {
        href: "https://theblacksheepcommunity.blogspot.com/2026/11/nannyora-nannyora-nanny-auckland.html",
        label: "Blog post — NannyOra",
        note: "Blog post with guides to finding a verified nanny in Auckland.",
      },
    ],
  },
  {
    site: "Pile ou Face en Ligne — pile-ouface.fr (français)",
    links: [
      {
        href: "https://docs.google.com/spreadsheets/d/1OkhOKTCwhRthTHHS8d-DFmJbgUUaZb3T9CQxIL339aw/edit?usp=drivesdk",
        label: "Répertoire principal — Pile ou Face en Ligne",
        note: "Répertoire Google Sheets des articles, de la présentation, du formulaire, du calendrier et de la carte pour le simulateur de pile ou face.",
      },
      {
        href: "https://theblacksheepcommunity.blogspot.com/2026/11/pile-ou-face-en-ligne-pile-ou-face-en.html",
        label: "Article de blog — Pile ou Face en Ligne",
        note: "Article de blog avec des guides pour lancer une pièce en ligne.",
      },
    ],
  },
  {
    site: "Règle en Ligne — regle-enligne.onl (français)",
    links: [
      {
        href: "https://docs.google.com/spreadsheets/d/1do_pgoVgy4R57Botr_RLNmeJ5Md2wjzLZjMiMpdKJr4/edit?usp=drivesdk",
        label: "Répertoire principal — Règle en Ligne",
        note: "Répertoire Google Sheets des articles, de la présentation, du formulaire, du calendrier et de la carte pour la règle en ligne.",
      },
      {
        href: "https://theblacksheepcommunity.blogspot.com/2026/11/regle-en-ligne-regle-en-ligne.html",
        label: "Article de blog — Règle en Ligne",
        note: "Article de blog avec des guides pour la règle en centimètres et le calibrage.",
      },
    ],
  },
  {
    site: "Salary After Tax Calculator UK — salaryaftertaxcalculator.co.uk (English)",
    links: [
      {
        href: "https://docs.google.com/spreadsheets/d/18drymmeQRa8rOW6kvcRdIMqLIa72STSKgN53qvd3PW8/edit?usp=drivesdk",
        label: "Master Stack Directory — Salary After Tax Calculator UK",
        note: "Google Sheets directory of the articles, presentation, form, calendar and map for UK take-home pay.",
      },
      {
        href: "https://theblacksheepcommunity.blogspot.com/2026/11/salary-after-tax-calculator-uk-salary.html",
        label: "Blog post — Salary After Tax Calculator UK",
        note: "Blog post with guides to salary after tax, take-home pay and salary-to-hourly rates in the UK.",
      },
    ],
  },
  {
    site: "Online Ruler — online-ruler.onl (English)",
    links: [
      {
        href: "https://docs.google.com/spreadsheets/d/1q89OCg7Ahhqq1mllExhVClzCX0Ztg38_RcDOambfVYE/edit?usp=drivesdk",
        label: "Master Stack Directory — Online Ruler",
        note: "Google Sheets directory of the articles, presentation, form, calendar and map for the calibrated online ruler.",
      },
      {
        href: "https://theblacksheepcommunity.blogspot.com/2026/11/online-ruler-online-ruler.html",
        label: "Blog post — Online Ruler",
        note: "Blog post with guides to the real-size online ruler and screen calibration.",
      },
    ],
  },
];

export default function GoogleStacksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mt-5 max-w-3xl">
        <h1 className="text-3xl font-semibold sm:text-4xl">Google Stacks</h1>
        <p className="mt-3 text-sm text-ink/55">Last updated 18 November 2026</p>
      </header>
      <article className="max-w-3xl">
        <p className="mt-3 text-lg text-ink/75">
          This page lists the Google-published resource hubs for the calculator and service
          sites we run: a Sheets directory and a blog post for each one. It is a resource
          list, not an endorsement by, or a partnership with, Google or Blogger — these are
          the places where our own public documents live.
        </p>

        {stacks.map((stack) => (
          <section className="mt-8" key={stack.site}>
            <h2 className="text-2xl font-semibold">{stack.site}</h2>
            <div className="prose mt-3 max-w-3xl text-ink/80">
              <ul>
                {stack.links.map((link) => (
                  <li key={link.href}>
                    <a
                      className="font-medium text-accent-strong hover:underline"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>{" "}
                    — {link.note}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">On this site</h2>
          <div className="prose mt-3 max-w-3xl text-ink/80">
            <ul>
              <li>
                <Link className="font-medium text-accent-strong hover:underline" href="/our-partners/">
                  Our Partners
                </Link>{" "}
                — our public profiles and Google resources for UK Teacher Pay.
              </li>
              <li>
                <Link className="font-medium text-accent-strong hover:underline" href="/teacher-pay-calculator/">
                  Teacher pay calculator
                </Link>{" "}
                — work out take-home pay from STPCD pay scales.
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}
