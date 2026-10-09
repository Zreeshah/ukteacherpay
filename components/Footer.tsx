import Link from "next/link";
import { hubs } from "@/content/types";
import { taxYearLabel } from "@/data/tax-rates";
import { SITE_NAME } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(hubs).map((hub) => (
            <div key={hub.id}>
              <h2 className="text-sm font-semibold">{hub.label}</h2>
              <p className="mt-1 text-sm text-ink/60">{hub.blurb}</p>
              <Link
                href={`/${hub.pillarSlug}/`}
                className="mt-2 inline-block text-sm font-medium text-accent-strong hover:text-accent-deep"
              >
                Explore {hub.label.toLowerCase()}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-ink/10 pt-6 text-sm text-ink/60">
          <p>
            {SITE_NAME} publishes free calculators and reference data for UK
            teachers. Figures use the {taxYearLabel} tax year and STPCD{" "}
            {taxYearLabel} pay scales. Each guide shows its own review date.
          </p>
          <p className="mt-2">
            This site is independent guidance, not financial advice. Always
            check your own payslip, contract and the official scheme rules
            before making decisions.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/about/" className="hover:text-ink">About</Link>
            <Link href="/methodology/" className="hover:text-ink">How we calculate</Link>
            <Link href="/sources/" className="hover:text-ink">Sources</Link>
            <Link href="/privacy/" className="hover:text-ink">Privacy</Link>
            <Link href="/contact/" className="hover:text-ink">Contact</Link>
            <Link href="/editorial-policy/" className="hover:text-ink">Editorial policy</Link>
            <Link href="/disclaimer/" className="hover:text-ink">Disclaimer</Link>
            <Link href="/terms/" className="hover:text-ink">Terms</Link>
            <Link href="/corrections/" className="hover:text-ink">Corrections</Link>
            <span>© {new Date().getFullYear()} {SITE_NAME}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
