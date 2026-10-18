import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const CONTACT_EMAIL = "thisisabuzarnaqvi@gmail.com";

type TrustSlug = "contact" | "editorial-policy" | "disclaimer" | "terms" | "corrections" | "privacy";

const pageMeta: Record<TrustSlug, { title: string; description: string }> = {
  contact: {
    title: "Contact UK Teacher Pay",
    description: "Contact the UK Teacher Pay Editorial Team with a correction, source update or general question.",
  },
  "editorial-policy": {
    title: "Editorial Policy",
    description: "How UK Teacher Pay researches, checks, updates and corrects its teacher pay and pension guidance.",
  },
  disclaimer: {
    title: "Disclaimer",
    description: "Important information about the limits of the calculators and guidance on UK Teacher Pay.",
  },
  terms: {
    title: "Terms of Use",
    description: "Terms governing use of the free calculators and reference guides published by UK Teacher Pay.",
  },
  corrections: {
    title: "Corrections & Changelog",
    description: "Our corrections policy and a dated record of material factual and technical updates.",
  },
  privacy: {
    title: "Privacy & Cookie Policy",
    description: "How UK Teacher Pay handles calculator inputs, contact messages, cookies, advertising and UK GDPR rights.",
  },
};

export function trustMetadata(slug: TrustSlug): Metadata {
  const page = pageMeta[slug];
  return pageMetadata({ title: page.title, description: page.description, path: `/${slug}/` });
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="prose mt-3 max-w-3xl text-ink/80">{children}</div>
    </section>
  );
}

function ContactPage() {
  return (
    <>
      <p className="mt-3 max-w-3xl text-lg text-ink/75">
        Send a source update, correction request or general question to the UK Teacher Pay Editorial Team.
      </p>
      <Section title="Email">
        <p>
          <a className="font-medium text-accent-strong hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </p>
        <p>We read every message. Please include the page URL and an official source where you are reporting a factual issue.</p>
      </Section>
      <Section title="Contact form">
        <p>This form opens your email app. It does not send your message through this website or store your calculator inputs.</p>
        <form action={`mailto:${CONTACT_EMAIL}`} method="post" encType="text/plain" className="card mt-5 space-y-4 p-5 not-prose">
          <div>
            <label className="block text-sm font-medium" htmlFor="contact-name">Name</label>
            <input className="mt-1 w-full rounded-md border border-ink/20 bg-white px-3 py-2" id="contact-name" name="name" autoComplete="name" required />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="contact-email">Email address</label>
            <input className="mt-1 w-full rounded-md border border-ink/20 bg-white px-3 py-2" id="contact-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="contact-message">Message</label>
            <textarea className="mt-1 min-h-32 w-full rounded-md border border-ink/20 bg-white px-3 py-2" id="contact-message" name="message" required />
          </div>
          <button type="submit" className="rounded-md bg-accent-strong px-4 py-2 text-sm font-semibold text-white hover:bg-accent-deep">Open email app</button>
        </form>
      </Section>
    </>
  );
}

function EditorialPolicyPage() {
  return (
    <>
      <p className="mt-3 max-w-3xl text-lg text-ink/75">Our aim is to make UK teacher pay, pension and tax information easier to check and use.</p>
      <Section title="Editorial standards">
        <p>We prioritise primary sources, including the School Teachers&apos; Pay and Conditions Document, HMRC, Teachers&apos; Pensions, government departments and the relevant devolved administrations. We distinguish official figures from estimates, assumptions and illustrative examples.</p>
        <p>Calculators are built to show their assumptions. Where a calculation cannot reflect a reader&apos;s full circumstances, we say so rather than present an estimate as a payslip or entitlement.</p>
      </Section>
      <Section title="Review and updates">
        <p>We review pay scales when new rates take effect, normally in September, and tax thresholds at the start of each tax year. We also update a page when an authoritative source changes or a material error is identified.</p>
      </Section>
      <Section title="Authorship and independence">
        <p>Content is published under the UK Teacher Pay Editorial Team, which is responsible for the site&apos;s source checking, calculator maintenance and correction record. We do not invent author, reviewer or credential claims, and we do not imply that a page has been written or reviewed by a teacher or adviser unless that is specifically evidenced on the page.</p>
        <p>This site is independent and is not affiliated with the Department for Education, HMRC, Teachers&apos; Pensions, a school, a union or an employer.</p>
      </Section>
      <Section title="Corrections">
        <p>Readers can report a possible error through our <Link href="/contact/">contact page</Link>. We assess the cited source, correct a substantiated material issue and add a dated entry to the <Link href="/corrections/">Corrections &amp; Changelog</Link>. If a claim is ambiguous or no longer supportable, we qualify or remove it rather than silently preserving it.</p>
      </Section>
    </>
  );
}

function DisclaimerPage() {
  return (
    <>
      <p className="mt-3 max-w-3xl text-lg text-ink/75">The site provides free educational tools and reference guidance, not personalised professional advice.</p>
      <Section title="Estimates, not entitlements">
        <p>Calculator results are estimates based on the stated assumptions. They cannot account for every tax code, payroll adjustment, contractual term, pension history, salary-sacrifice arrangement or individual circumstance. Your employer, payslip, pension statement and the applicable official rules remain authoritative.</p>
      </Section>
      <Section title="No professional advice">
        <p>Nothing on this site is financial, tax, legal, employment, pension, investment or regulated advice. Get appropriately qualified advice before making a decision about retirement, a pension transfer, tax, employment rights or a significant financial commitment.</p>
      </Section>
      <Section title="External sources and links">
        <p>We link to official sources where possible, but those sites control their own content and availability. Rates, rules and policies can change after we publish; always check the current source and your own contract.</p>
      </Section>
    </>
  );
}

function TermsPage() {
  return (
    <>
      <p className="mt-3 max-w-3xl text-lg text-ink/75">These terms explain the permitted use of the free tools and guidance on UK Teacher Pay.</p>
      <Section title="Using the site">
        <p>You may use the calculators and reference pages for personal, educational and internal workplace purposes. You must not use the site to submit unlawful material, interfere with its operation, scrape it at a rate that harms availability, or misrepresent the site&apos;s figures as your own official calculation.</p>
      </Section>
      <Section title="Intellectual property">
        <p>Unless a source says otherwise, the site&apos;s original text, design, calculator implementation and branding are protected by applicable intellectual-property law. You may quote a short extract with a clear link back to the original page. Official source material remains subject to its own licensing terms.</p>
      </Section>
      <Section title="Availability and liability">
        <p>We work to keep the site available and accurate, but do not guarantee uninterrupted access or that every estimate will fit every circumstance. Use the site subject to the <Link href="/disclaimer/">Disclaimer</Link>. Nothing in these terms excludes a liability that cannot lawfully be excluded.</p>
      </Section>
      <Section title="Contact">
        <p>For a question about these terms, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </Section>
    </>
  );
}

function CorrectionsPage() {
  return (
    <>
      <p className="mt-3 max-w-3xl text-lg text-ink/75">We correct material factual and technical errors promptly and keep a dated public record of substantive changes.</p>
      <Section title="How to report an error">
        <p>Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or use the <Link href="/contact/">contact form</Link>. Please include the affected URL, what appears incorrect and a primary source where available. We assess source quality and update the page or explain why we have not changed it.</p>
      </Section>
      <Section title="Correction record">
        <ul>
          <li><strong>19 October 2026:</strong> Corrected 2026/27 student-loan thresholds across the teacher-pay and loan calculators, the take-home table and the supporting guide: Plan 1 £26,900, Plan 2 £29,385 and Plan 4 £33,795. Recalculated the affected examples and clarified that ordinary Teachers&apos; Pensions net-pay contributions do not reduce student-loan repayment.</li>
          <li><strong>9 October 2026:</strong> Published the editorial policy, corrections process, contact, privacy, disclaimer and terms pages.</li>
          <li><strong>28 August 2026:</strong> Added Scotland-specific safeguards and limitations to the pension calculator so England and Wales contribution assumptions are not presented as Scottish figures.</li>
          <li><strong>26 August 2026:</strong> Corrected page metadata lengths where rendered descriptions could exceed the intended snippet budget.</li>
          <li><strong>24 August 2026:</strong> Corrected the canonical-origin configuration after identifying an earlier non-live fallback domain.</li>
        </ul>
      </Section>
      <Section title="What we log">
        <p>We log corrections that materially affect an official figure, calculation, legal or policy explanation, source attribution, indexability or a reader&apos;s likely decision. Each entry identifies the date, what changed and the affected subject. Routine typography, layout and minor wording edits are not normally listed.</p>
      </Section>
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <p className="mt-3 max-w-3xl text-lg text-ink/75">This policy explains how UK Teacher Pay handles personal data, cookies and advertising. Effective 9 October 2026.</p>
      <Section title="Controller and contact">
        <p>The data controller for this website is <strong>Muhammad Abuzar, trading as UK Teacher Pay</strong>. For privacy questions or to exercise a data-protection right, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </Section>
      <Section title="Calculator inputs">
        <p>Calculator inputs are processed in your browser. We do not transmit, store or use the pay, pension, tax or other values you enter in a calculator.</p>
      </Section>
      <Section title="Contact messages and technical data">
        <p>If you email us or use the mailto form, your email provider processes the details you choose to send. We use that information to respond, handle a correction request and keep an appropriate record of the exchange. Our hosting and service providers may also process limited technical data, such as IP address, device or browser information and server logs, to deliver and secure the site.</p>
        <p>Our lawful bases under UK GDPR are legitimate interests for operating, securing and improving the site and responding to messages, and consent where required for non-essential cookies or similar technologies.</p>
      </Section>
      <Section title="Cookies, analytics and advertising">
        <p>We do not use calculator inputs for advertising. Google and other third-party vendors may use cookies or similar technologies to serve and measure ads on this site. If we use analytics, it is used to understand aggregate page use and is not designed to receive calculator inputs. Google&apos;s explanation of how data is used on partner sites is available at <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google&apos;s partner-sites page</a>.</p>
        <p>You can manage Google ad personalisation at <a href="https://g.co/adsettings" target="_blank" rel="noopener noreferrer">g.co/adsettings</a> and opt out of many participating interest-based advertising programmes at <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info</a>. You can also manage cookies through your browser settings. Non-essential cookies require consent where PECR applies.</p>
      </Section>
      <Section title="Sharing and international transfers">
        <p>We do not sell calculator inputs or contact details. Data may be processed by providers that host the site, deliver email or serve advertising. Some providers, including Google, may process data outside the UK; their services may rely on recognised transfer safeguards or an adequacy arrangement.</p>
      </Section>
      <Section title="Retention and your rights">
        <p>We keep contact correspondence only as long as needed to respond, maintain a correction record or meet a legal obligation. You may have rights to access, correct, erase, restrict or object to processing, and to withdraw consent where processing relies on consent. To make a request, email us using the address above.</p>
        <p>If you are unhappy with our response, you may complain to the <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">Information Commissioner&apos;s Office</a>.</p>
      </Section>
    </>
  );
}

export default function TrustPage({ slug }: { slug: TrustSlug }) {
  const page = pageMeta[slug];
  const content: Record<TrustSlug, ReactNode> = {
    contact: <ContactPage />,
    "editorial-policy": <EditorialPolicyPage />,
    disclaimer: <DisclaimerPage />,
    terms: <TermsPage />,
    corrections: <CorrectionsPage />,
    privacy: <PrivacyPage />,
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mt-5 max-w-3xl">
        <h1 className="text-3xl font-semibold sm:text-4xl">{page.title}</h1>
        <p className="mt-3 text-sm text-ink/55">Last updated {slug === "editorial-policy" || slug === "corrections" ? "19 October 2026" : "9 October 2026"}</p>
      </header>
      <article className="max-w-3xl">{content[slug]}</article>
    </div>
  );
}
