import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-ink/70">
        That page does not exist. Try the teacher pay calculator or browse the
        pay scales.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/teacher-pay-calculator/" className="rounded-lg bg-accent-strong px-4 py-2 text-sm font-semibold text-white hover:bg-accent-deep">
          Teacher pay calculator
        </Link>
        <Link href="/teacher-pay-scale/" className="rounded-lg border border-ink/15 px-4 py-2 text-sm font-semibold hover:border-accent-strong">
          Teacher pay scales
        </Link>
      </div>
    </div>
  );
}
