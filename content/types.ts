import type { ReactNode } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface KeyTakeaway {
  text: string;
}

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string; id?: string }
  | { kind: "h3"; text: string; id?: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "callout"; tone: "info" | "warn" | "tip"; title: string; text: string }
  | { kind: "table"; caption?: string; head: string[]; rows: string[][] }
  | { kind: "quote"; text: string; source?: string };

export type CalculatorKind =
  | "take-home"
  | "pay-scale"
  | "pension-care"
  | "avc"
  | "early-retirement"
  | "redundancy"
  | "student-loan"
  | "part-time"
  | "pay-rise"
  | "none";

export interface SourceRef {
  label: string;
  url: string;
}

export interface PageContent {
  slug: string;
  title: string;             // H1
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** Hub this page belongs to — drives breadcrumbs and clustering */
  hub: HubId;
  /** true when this page is the hub pillar */
  isPillar?: boolean;
  calculator: CalculatorKind;
  /** Optional preset passed to the calculator */
  calculatorPreset?: Record<string, string | number | boolean>;
  keyTakeaways: string[];
  blocks: Block[];
  faq: FaqItem[];
  sources: SourceRef[];
  updated: string;
  /** Primary keyword this page owns — enforces one page per keyword */
  primaryKeyword: string;
  secondaryKeywords: string[];
}

export type HubId =
  | "calculator"
  | "pay-scales"
  | "leadership"
  | "pensions"
  | "salaries"
  | "policy"
  | "planning";

export interface Hub {
  id: HubId;
  label: string;
  pillarSlug: string;
  blurb: string;
}

export const hubs: Record<HubId, Hub> = {
  calculator: {
    id: "calculator",
    label: "Pay Calculators",
    pillarSlug: "teacher-pay-calculator",
    blurb: "Work out your take-home pay, part-time pay and tax as a teacher.",
  },
  "pay-scales": {
    id: "pay-scales",
    label: "Pay Scales",
    pillarSlug: "teacher-pay-scale",
    blurb: "Every STPCD and devolved-nation teacher pay scale for 2026/27.",
  },
  leadership: {
    id: "leadership",
    label: "Leadership Pay",
    pillarSlug: "leadership-pay-scale",
    blurb: "Leadership group, head, deputy and lead practitioner pay ranges.",
  },
  pensions: {
    id: "pensions",
    label: "Teachers' Pensions",
    pillarSlug: "teacher-pension",
    blurb: "CARE benefits, contributions, AVCs and retirement modelling.",
  },
  salaries: {
    id: "salaries",
    label: "Salary Guides",
    pillarSlug: "teacher-salary-uk",
    blurb: "What teachers actually earn by role, phase, subject and region.",
  },
  policy: {
    id: "policy",
    label: "Pay Rises & Policy",
    pillarSlug: "teacher-pay-rise",
    blurb: "Pay awards, STRB recommendations and what they mean for you.",
  },
  planning: {
    id: "planning",
    label: "Financial Planning",
    pillarSlug: "teacher-financial-planning",
    blurb: "Redundancy, student loans, budgeting and leaving teaching.",
  },
};
