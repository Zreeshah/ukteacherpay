import type { Block } from "@/content/types";

function inline(text: string) {
  // Minimal inline formatting: **bold** and [label](/path)
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const token = m[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    } else {
      const label = token.slice(1, token.indexOf("]"));
      const href = token.slice(token.indexOf("(") + 1, -1);
      parts.push(
        <a
          key={key++}
          href={href}
          className="font-medium text-accent-strong underline underline-offset-2 hover:text-accent-deep"
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {label}
        </a>,
      );
    }
    last = m.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const calloutStyles = {
  info: "border-accent-strong/30 bg-accent-strong/5",
  tip: "border-emerald-600/30 bg-emerald-50",
  warn: "border-amber-500/40 bg-amber-50",
} as const;

export default function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "h2":
            return (
              <h2
                key={i}
                id={block.id ?? slugifyHeading(block.text)}
                className="scroll-mt-24 pt-2 text-2xl font-semibold"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={block.id ?? slugifyHeading(block.text)}
                className="scroll-mt-24 text-lg font-semibold"
              >
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-ink/80">
                {inline(block.text)}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-1.5 pl-5 text-ink/80">
                {block.items.map((item, j) => (
                  <li key={j}>{inline(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-1.5 pl-5 text-ink/80">
                {block.items.map((item, j) => (
                  <li key={j}>{inline(item)}</li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside
                key={i}
                className={`rounded-xl border p-4 ${calloutStyles[block.tone]}`}
              >
                <p className="text-sm font-semibold">{block.title}</p>
                <p className="mt-1 text-sm text-ink/80">{inline(block.text)}</p>
              </aside>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-accent-strong/40 pl-4 text-ink/75 italic"
              >
                {block.text}
                {block.source && (
                  <footer className="mt-1 text-sm not-italic text-ink/55">
                    — {block.source}
                  </footer>
                )}
              </blockquote>
            );
          case "table":
            return (
              <figure key={i} className="card overflow-hidden">
                {block.caption && (
                  <figcaption className="border-b border-ink/10 px-4 py-2.5 text-sm font-medium">
                    {block.caption}
                  </figcaption>
                )}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-paper text-left">
                      <tr>
                        {block.head.map((h) => (
                          <th key={h} className="px-4 py-2.5 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink/10">
                      {block.rows.map((row, r) => (
                        <tr key={r}>
                          {row.map((cell, c) => (
                            <td key={c} className="px-4 py-2.5 text-ink/80">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </figure>
            );
        }
      })}
    </div>
  );
}
