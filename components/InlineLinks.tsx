import Link from "next/link";
import type { RelatedLink } from "./RelatedContent";

/** Contextual in-content links, rendered mid-article. */
export default function InlineLinks({ items }: { items: RelatedLink[] }) {
  if (items.length === 0) return null;
  return (
    <aside className="my-6 rounded-xl border border-accent-strong/25 bg-accent-strong/[0.04] p-5">
      <p className="text-sm font-semibold text-ink/70">Keep reading</p>
      <ul className="mt-2.5 space-y-2">
        {items.map((item) => (
          <li key={item.slug} className="text-sm">
            <Link
              href={`/${item.slug}/`}
              className="font-medium text-accent-strong underline underline-offset-2 hover:text-accent-deep"
            >
              {item.title}
            </Link>
            <span className="text-ink/60"> — {item.blurb}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
