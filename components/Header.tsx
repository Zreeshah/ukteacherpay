import Link from "next/link";

const NAV = [
  { href: "/teacher-pay-calculator/", label: "Pay calculator" },
  { href: "/teacher-pay-scale/", label: "Pay scales" },
  { href: "/teacher-pension/", label: "Pensions" },
  { href: "/teacher-salary-uk/", label: "Salaries" },
  { href: "/teacher-pay-rise/", label: "Pay rises" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="UK Teacher Pay — Home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-strong text-sm font-bold text-white">
            TP
          </span>
          <span className="text-[15px] font-semibold leading-tight">
            UK Teacher Pay
          </span>
        </Link>

        <details className="group relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-ink/15 px-3 py-1.5 text-sm font-medium">
            Menu
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 z-10 mt-2 w-56 rounded-xl border border-ink/10 bg-white p-2 shadow-lg"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm hover:bg-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
