# SEO-ready teacher pay infographics

These five SVGs use live 2026/27 figures from the corresponding UK Teacher Pay Calculator pages. SVG was selected deliberately: the data labels remain exact and readable, the files are compact, and the graphics are accessible to search engines and screen readers through their embedded `title` and `desc` elements.

| File | Suggested page placement | Recommended alt text |
|---|---|---|
| `headteacher-pay-school-group-flow-2026-27.svg` | Below the explanation of the school-group calculation | “Flow diagram showing how weighted pupil numbers determine school group and indicative headteacher salary ranges in England for 2026/27.” |
| `teacher-pay-scale-m1-u3-2026-27.svg` | Directly after the M1–U3 table | “England teacher pay scale from M1 at £34,068 to U3 at £52,835 in 2026/27, with London salary comparisons.” |
| `teacher-career-ladder-primary-to-leadership-2026-27.svg` | After the primary-teacher career-stage section; cross-link to leadership content | “Illustrative teacher career ladder from ECT Year 1 through classroom, assistant head, deputy head and headteacher pay in England for 2026/27.” |
| `uk-teacher-salary-four-nations-2026-27.svg` | Immediately after the four-nations comparison table | “UK teacher starting and top salary comparison for rest of England, inner London, Wales, Scotland and Northern Ireland in 2026/27.” |
| `neu-ni-teacher-pay-changes-2026-27.svg` | After the NEU rate-change table and linked from the Northern Ireland comparison | “NEU published teacher pay rate changes of 3.5 percent and the Northern Ireland versus rest-of-England pay gap in 2026/27.” |

## Publish checklist

- Serve each file with `Content-Type: image/svg+xml`; keep the vector source—do not rasterise it merely for the site.
- Use a descriptive `figcaption` below the graphic and retain the adjacent HTML data table. The table is the accessible, indexable source of truth.
- Add explicit dimensions to prevent layout shift: `width="1600" height="900"` or use `aspect-ratio: 16 / 9`.
- Lazy-load only graphics below the fold. Do not lazy-load a graphic that becomes the page’s LCP element.
- For social sharing, publish a separate 1200×630 PNG/WebP derivative if the social platform does not reliably render SVG. Keep the on-page SVG as the canonical image asset.
- Point any `ImageObject` schema at the deployed asset URL, not a local file path. Use the same alt text as its caption where appropriate.

Example image markup:

```html
<figure>
  <img src="/images/teacher-pay-scale-m1-u3-2026-27.svg"
       width="1600" height="900"
       alt="England teacher pay scale from M1 at £34,068 to U3 at £52,835 in 2026/27, with London salary comparisons.">
  <figcaption>Teacher pay scale in England for 2026/27. Figures are gross annual pay.</figcaption>
</figure>
```
