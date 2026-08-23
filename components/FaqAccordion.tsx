import type { FaqItem } from "@/content/types";

// CSS-only accordion (details/summary) — no client JS
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="faq-heading" className="card p-6">
      <h2 id="faq-heading" className="text-xl font-semibold">
        Frequently asked questions
      </h2>
      <div className="mt-4 divide-y divide-ink/10">
        {items.map((item) => (
          <details key={item.question} className="group py-3">
            <summary className="cursor-pointer list-none font-medium">
              <span className="flex items-start justify-between gap-4">
                {item.question}
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-ink/40 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-2 text-ink/80">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
