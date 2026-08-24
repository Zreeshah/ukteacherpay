"use client";

import { useMemo, useState } from "react";

/**
 * Burgundy Book resignation dates. Teachers must resign by a fixed cut-off to
 * leave at the end of each term. Headteachers get longer notice periods.
 */
const TERMS = [
  { id: "autumn", leave: "31 December", teacher: "31 October", head: "30 September" },
  { id: "spring", leave: "30 April",    teacher: "28 February", head: "31 January" },
  { id: "summer", leave: "31 August",   teacher: "31 May",      head: "30 April" },
] as const;

export default function ResignationDeadline() {
  const [role, setRole] = useState<"teacher" | "head">("teacher");
  const [term, setTerm] = useState<(typeof TERMS)[number]["id"]>("summer");

  const active = TERMS.find((t) => t.id === term)!;
  const deadline = role === "head" ? active.head : active.teacher;

  const daysLeft = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const [d, monthName] = deadline.split(" ");
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const m = months.indexOf(monthName);
    let target = new Date(year, m, Number(d));
    if (target < now) target = new Date(year + 1, m, Number(d));
    return Math.ceil((target.getTime() - now.getTime()) / 86400000);
  }, [deadline]);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <form className="card p-5" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-lg font-semibold">When do you want to leave?</h2>
        <div className="mt-4 grid gap-4">
          <div>
            <label className="field-label" htmlFor="rd-role">Your role</label>
            <select id="rd-role" className="field-input" value={role} onChange={(e) => setRole(e.target.value as "teacher" | "head")}>
              <option value="teacher">Classroom teacher or middle leader</option>
              <option value="head">Headteacher, deputy or assistant head</option>
            </select>
          </div>
          <div>
            <label className="field-label" htmlFor="rd-term">Last day you want to work</label>
            <select id="rd-term" className="field-input" value={term} onChange={(e) => setTerm(e.target.value as typeof term)}>
              {TERMS.map((t) => (
                <option key={t.id} value={t.id}>End of {t.id} term — {t.leave}</option>
              ))}
            </select>
          </div>
        </div>
      </form>

      <div className="space-y-4">
        <div className="card number-box bg-ink p-6 text-white">
          <p className="text-sm text-white/70">You must resign in writing by</p>
          <p className="safe-number-sm mt-1 font-bold text-accent">{deadline}</p>
          <p className="mt-1 text-sm text-white/70">
            to leave on {active.leave} · about {daysLeft} days from today
          </p>
        </div>

        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-paper text-left">
              <tr>
                <th className="px-4 py-2.5 font-semibold">Leaving date</th>
                <th className="px-4 py-2.5 font-semibold">Teachers</th>
                <th className="px-4 py-2.5 font-semibold">Leadership</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {TERMS.map((t) => (
                <tr key={t.id} className={t.id === term ? "bg-accent-strong/5" : ""}>
                  <td className="px-4 py-2.5 text-ink/80">{t.leave}</td>
                  <td className="px-4 py-2.5 text-ink/80">{t.teacher}</td>
                  <td className="px-4 py-2.5 text-ink/80">{t.head}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold">Before you hand it in</h3>
          <ul className="mt-2 space-y-1.5 text-sm text-ink/75">
            <li>Resign in writing to the governing body or trust, not just your line manager.</li>
            <li>Keep a dated copy and get written acknowledgement.</li>
            <li>Summer resignation means you are normally paid to 31 August, covering the summer holiday.</li>
            <li>Missing the cut-off by even a day usually pushes you to the next term.</li>
          </ul>
        </div>
        <p className="text-xs text-ink/55">
          Burgundy Book dates for maintained schools in England and Wales.
          Academies, free schools and independent schools set their own notice
          periods — check your contract, which overrides these dates.
        </p>
      </div>
    </div>
  );
}
