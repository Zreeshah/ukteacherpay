import type { Block } from "@/content/types";
import { slugifyHeading } from "./Prose";

export default function TableOfContents({ blocks }: { blocks: Block[] }) {
  const headings = blocks.filter((b) => b.kind === "h2") as Extract<Block, { kind: "h2" }>[];
  if (headings.length < 3) return null;
  return (
    <nav aria-label="On this page" className="card p-5">
      <h2 className="text-sm font-semibold">On this page</h2>
      <ol className="mt-3 space-y-1.5 text-sm">
        {headings.map((h) => (
          <li key={h.text}>
            <a
              href={`#${h.id ?? slugifyHeading(h.text)}`}
              className="text-accent-strong hover:text-accent-deep hover:underline"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
