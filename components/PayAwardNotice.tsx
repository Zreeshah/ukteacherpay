import {
  mainRange2027,
  regionLabel,
  type Region,
  unqualifiedRange2027,
  upperRange2027,
} from "@/data/teacher-pay-scales";

const englandPaySlugs = new Set([
  "teacher-pay-rise",
  "teacher-pay-rise-2026-27",
  "teacher-pay-scale",
  "teacher-pay-scale-2026-27",
  "main-pay-range",
  "upper-pay-range",
  "unqualified-teacher-pay-scale",
  "inner-london-teacher-pay-scale",
  "outer-london-teacher-pay-scale",
  "london-fringe-teacher-pay-scale",
  "teacher-pay-scale-london",
  "leadership-pay-scale",
  "lead-practitioner-pay-scale",
]);

const regionalSlugs: Record<string, Region> = {
  "inner-london-teacher-pay-scale": "inner-london",
  "outer-london-teacher-pay-scale": "outer-london",
  "london-fringe-teacher-pay-scale": "fringe",
};

const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);

export default function PayAwardNotice({ slug }: { slug: string }) {
  if (!englandPaySlugs.has(slug)) return null;

  const region = regionalSlugs[slug] ?? "england";
  const showProjection =
    slug !== "leadership-pay-scale" && slug !== "lead-practitioner-pay-scale";
  const labels = [
    "M1",
    "M2",
    "M3",
    "M4",
    "M5",
    "M6",
    "U1",
    "U2",
    "U3",
    "UQ1",
    "UQ2",
    "UQ3",
    "UQ4",
    "UQ5",
    "UQ6",
  ];
  const projectedValues = [
    ...mainRange2027[region],
    ...upperRange2027[region],
    ...unqualifiedRange2027[region],
  ];

  return (
    <section
      className="card mt-8 max-w-3xl p-5"
      aria-labelledby="pay-award-status"
    >
      <h2 id="pay-award-status" className="text-lg font-semibold">
        England pay award status
      </h2>
      <p className="mt-2 text-sm text-ink/80">
        The government has accepted advisory pay points:{" "}
        <strong>3.5% from September 2026</strong>, except for a{" "}
        <strong>5% increase to Rest-of-England UQ1</strong>. The STPCD 2026 Pay
        Order is due in October 2026. These are government-accepted advisory
        points, not described here as “in force” before that order is laid.
      </p>
      <p className="mt-2 text-sm text-ink/80">
        The accepted 2027 award is 3%, with an indicative 3% for September 2028
        subject to a future remit. Academy and free-school pay policies can
        differ.
      </p>
      {showProjection && (
        <div className="mt-4 overflow-x-auto">
          <p className="mb-2 text-sm font-medium">
            Projected 2027/28 advisory values: {regionLabel[region]}
          </p>
          <table className="w-full text-sm">
            <thead className="bg-paper text-left">
              <tr>
                <th className="px-3 py-2">Point</th>
                <th className="px-3 py-2 text-right">Projected salary</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {projectedValues.map((value, index) => (
                <tr key={labels[index]}>
                  <td className="px-3 py-2">{labels[index]}</td>
                  <td className="px-3 py-2 text-right tabular-nums">
                    {formatMoney(value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="mt-3 text-xs text-ink/60">
        Source:{" "}
        <a
          className="text-accent-strong underline"
          href="https://www.gov.uk/government/publications/school-teachers-review-body-thirty-sixth-report-2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          School Teachers’ Review Body, Thirty-Sixth Report (2026)
        </a>
        .
      </p>
    </section>
  );
}
