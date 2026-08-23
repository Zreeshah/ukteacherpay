import {
  mainRange, upperRange, unqualifiedRange, regionShort,
  type Region, type ScaleId,
} from "@/data/teacher-pay-scales";
import { gbp } from "@/lib/format";

const DATA: Record<string, Record<Region, number[]>> = {
  main: mainRange,
  upper: upperRange,
  unqualified: unqualifiedRange,
};

const PREFIX: Record<string, string> = { main: "M", upper: "U", unqualified: "UQ" };

export default function PayScaleTable({
  scale,
  regions,
  caption,
}: {
  scale: Extract<ScaleId, "main" | "upper" | "unqualified">;
  regions: Region[];
  caption?: string;
}) {
  const data = DATA[scale];
  const cols = regions.filter((r) => (data[r] ?? []).length > 0);
  if (cols.length === 0) return null;
  const rowCount = Math.max(...cols.map((r) => data[r].length));

  return (
    <figure className="card overflow-hidden">
      {caption && (
        <figcaption className="border-b border-ink/10 px-4 py-2.5 text-sm font-medium">
          {caption}
        </figcaption>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-paper text-left">
            <tr>
              <th className="px-4 py-2.5 font-semibold">Point</th>
              {cols.map((r) => (
                <th key={r} className="px-4 py-2.5 text-right font-semibold">
                  {regionShort[r]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10">
            {Array.from({ length: rowCount }, (_, i) => (
              <tr key={i}>
                <th scope="row" className="px-4 py-2.5 text-left font-medium">
                  {PREFIX[scale]}{i + 1}
                </th>
                {cols.map((r) => (
                  <td key={r} className="px-4 py-2.5 text-right tabular text-ink/80">
                    {data[r][i] ? gbp(data[r][i]) : "—"}
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
