import Link from "next/link";

/**
 * Brand mark: a mortarboard. Drawn on a 64x64 grid with heavy, well-separated
 * shapes so it survives being rendered as a 16px favicon.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="13" fill="var(--color-accent-strong, #4338ca)" />
      {/* board */}
      <path d="M32 13 L59 25 L32 37 L5 25 Z" fill="#fff" />
      {/* cap body */}
      <path
        d="M18 30.5 L18 41 C18 45.4 24.3 48.5 32 48.5 C39.7 48.5 46 45.4 46 41 L46 30.5 L32 37 Z"
        fill="#fff"
        fillOpacity="0.88"
      />
    </svg>
  );
}

/**
 * Full lockup. The wordmark is real text, not an image, so it stays crisp at
 * every density, is selectable, and contributes the brand name to the page
 * for search engines.
 */
export default function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      aria-label="UK Teacher Pay — home"
      className="flex shrink-0 items-center gap-2.5 rounded-lg py-1 outline-none focus-visible:ring-2 focus-visible:ring-accent-strong/40"
    >
      <LogoMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight sm:text-base">
          <span className="text-ink/55">UK</span>{" "}
          <span className="text-ink">Teacher Pay</span>
        </span>
        <span className="mt-0.5 hidden text-[11px] font-medium text-ink/50 sm:block">
          Calculators &amp; pay scales
        </span>
      </span>
    </Link>
  );
}
