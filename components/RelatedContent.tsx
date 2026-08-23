import Link from "next/link";

export interface RelatedLink {
  slug: string;
  title: string;
  blurb: string;
}

export default function RelatedContent({ items }: { items: RelatedLink[] }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-xl font-semibold">
        Related tools and guides
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/${item.slug}/`}
            className="card block p-4 transition hover:border-accent-strong/40 hover:shadow-sm"
          >
            <p className="font-medium text-accent-strong">{item.title}</p>
            <p className="mt-1 text-sm text-ink/70">{item.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
