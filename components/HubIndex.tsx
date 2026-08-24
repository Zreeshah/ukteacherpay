import Link from "next/link";
import type { RelatedLink } from "./RelatedContent";

/**
 * Full spoke index rendered on pillar pages. Gives every spoke a direct
 * link from the strongest page in its cluster and creates a single-hop
 * crawl path to the whole hub.
 */
export default function HubIndex({
  items,
  hubLabel,
}: {
  items: RelatedLink[];
  hubLabel: string;
}) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="hub-index-heading" className="card p-6">
      <h2 id="hub-index-heading" className="text-xl font-semibold">
        Everything in {hubLabel}
      </h2>
      <p className="mt-1 text-sm text-ink/60">
        {items.length} guides and calculators in this section.
      </p>
      <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/${item.slug}/`}
              className="text-sm text-accent-strong hover:text-accent-deep hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
