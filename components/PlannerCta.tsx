"use client";

import { useEffect, useState } from "react";

export const PLANNER_GUMROAD_URL =
  "https://thisisabuzarnaqvi.gumroad.com/l/teacher-take-home-planner";

type Placement = "result_box" | "homepage_banner" | "sticky_bar";

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

function trackBuyClick(placement: Placement) {
  if (typeof window === "undefined") return;
  try {
    (window as GtagWindow).gtag?.("event", "gumroad_buy_click", {
      product: "teacher_planner",
      placement,
    });
  } catch {
    // Analytics must never break the page.
  }
}

const BULLETS = [
  "England, Wales & Scotland 2026/27 pay scales",
  "Payslip check — spot when your pay is wrong",
  "Monthly budget, annual planner & scenario comparison",
  "Works in Google Sheets + Excel",
];

function BuyButton({
  placement,
  className,
}: {
  placement: Placement;
  className?: string;
}) {
  return (
    <a
      href={PLANNER_GUMROAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackBuyClick(placement)}
      className={
        className ??
        "inline-block rounded-lg bg-accent-strong px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-deep"
      }
    >
      Get the planner — $19
    </a>
  );
}

function ResultCta() {
  return (
    <section
      className="card border-accent-strong/30 bg-accent-strong/5 p-5"
      aria-labelledby="planner-cta-heading"
    >
      <h2
        id="planner-cta-heading"
        className="text-lg font-semibold text-ink"
      >
        Get the full Teacher Take-Home &amp; Budget Planner 2026/27 — $19
      </h2>
      <ul className="mt-3 space-y-1.5 text-sm text-ink/80">
        {BULLETS.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <BuyButton placement="result_box" />
      </div>
      <p className="mt-3 text-xs text-ink/60">
        Northern Ireland not included — no 2026/27 award agreed yet.
        Estimate only, not financial advice.
      </p>
    </section>
  );
}

function BannerCta() {
  return (
    <section
      className="border-b border-ink/10 bg-white"
      aria-labelledby="planner-banner-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6">
        <div className="max-w-2xl">
          <h2
            id="planner-banner-heading"
            className="text-xl font-semibold text-ink"
          >
            Teacher Take-Home &amp; Budget Planner 2026/27 — $19
          </h2>
          <p className="mt-1 text-sm text-ink/70">
            Your whole year, planned: take-home pay, payslip check, monthly
            budget and scenarios — in Google Sheets + Excel.
          </p>
        </div>
        <BuyButton placement="homepage_banner" />
      </div>
    </section>
  );
}

const DISMISS_KEY = "planner-cta-dismissed";
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000;

function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = Number(
        window.localStorage.getItem(DISMISS_KEY) ?? 0,
      );
      if (dismissed && Date.now() - dismissed < DISMISS_MS) return;
    } catch {
      // localStorage unavailable — still show the bar.
    }

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.4) {
        setVisible(true);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      // Ignore storage failures.
    }
    setVisible(false);
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white shadow-[0_-4px_16px_rgba(15,23,42,0.08)]"
      role="region"
      aria-label="Teacher planner offer"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <p className="text-sm font-medium text-ink">
          Teacher Take-Home &amp; Budget Planner 2026/27 — $19
        </p>
        <div className="flex items-center gap-2">
          <BuyButton
            placement="sticky_bar"
            className="inline-block rounded-lg bg-accent-strong px-4 py-2 text-sm font-semibold text-white hover:bg-accent-deep"
          />
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss planner offer"
            className="rounded-lg border border-ink/15 px-3 py-2 text-sm font-medium text-ink/70 hover:border-accent-strong"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PlannerCta({
  variant,
}: {
  variant: "result" | "banner" | "sticky";
}) {
  if (variant === "banner") return <BannerCta />;
  if (variant === "sticky") return <StickyCta />;
  return <ResultCta />;
}
