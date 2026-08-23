// Teachers' pay scales — STPCD 2026/27 (England), effective 1 September 2026.
// Source: STRB 36th Report (2026) and the School Teachers' Pay and Conditions
// Document 2026. A 3.5% award was applied to the 2025/26 figures.
//
// Wales negotiates via the IWPRB but currently mirrors the STPCD figures.
// Scotland uses the separate SNCT scale. Northern Ireland uses its own scale.
//
// Academies and free schools may set their own pay scales; these are the
// statutory reference points that most maintained schools follow.

export type Region =
  | "england"
  | "fringe"
  | "outer-london"
  | "inner-london"
  | "wales"
  | "scotland"
  | "northern-ireland";

export type ScaleId = "main" | "upper" | "unqualified" | "leadership" | "lead-practitioner";

export const regionLabel: Record<Region, string> = {
  england: "England (excluding London)",
  fringe: "London Fringe",
  "outer-london": "Outer London",
  "inner-london": "Inner London",
  wales: "Wales",
  scotland: "Scotland",
  "northern-ireland": "Northern Ireland",
};

export const regionShort: Record<Region, string> = {
  england: "Rest of England",
  fringe: "Fringe",
  "outer-london": "Outer London",
  "inner-london": "Inner London",
  wales: "Wales",
  scotland: "Scotland",
  "northern-ireland": "N. Ireland",
};

export const scaleLabel: Record<ScaleId, string> = {
  main: "Main Pay Range (M1–M6)",
  upper: "Upper Pay Range (U1–U3)",
  unqualified: "Unqualified Teacher Range",
  leadership: "Leadership Group (L1–L43)",
  "lead-practitioner": "Lead Practitioner Range",
};

/** Main Pay Range — points M1..M6 */
export const mainRange: Record<Region, number[]> = {
  england: [34068, 36042, 38400, 40940, 43529, 46939],
  fringe: [35602, 37646, 39979, 42513, 45069, 48478],
  "outer-london": [39195, 41246, 43403, 45672, 48438, 52241],
  "inner-london": [41728, 43712, 45786, 47961, 50665, 54131],
  wales: [34068, 36042, 38400, 40940, 43529, 46939],
  scotland: [34539, 36426, 38361, 42336, 45468, 48516],
  "northern-ireland": [32188, 34037, 36271, 38669, 41109, 44342],
};

/** Upper Pay Range — points U1..U3 */
export const upperRange: Record<Region, number[]> = {
  england: [49134, 50955, 52835],
  fringe: [50625, 52441, 54327],
  "outer-london": [54047, 56046, 58119],
  "inner-london": [59649, 62580, 64683],
  wales: [49134, 50955, 52835],
  scotland: [], // Scotland uses the Chartered Teacher route instead of UPS
  "northern-ireland": [46589, 48303, 50085],
};

/** Unqualified Teacher Range — points 1..6 */
export const unqualifiedRange: Record<Region, number[]> = {
  england: [23731, 26075, 28757, 31124, 33810, 36493],
  fringe: [24908, 27589, 30272, 32636, 35320, 38003],
  "outer-london": [27727, 30411, 33093, 35464, 38146, 40831],
  "inner-london": [29335, 32018, 34702, 37067, 39746, 42429],
  wales: [23731, 26075, 28757, 31124, 33810, 36493],
  scotland: [],
  "northern-ireland": [22478, 24698, 27239, 29480, 32023, 34565],
};

/** Scotland: Chartered Teacher (SNCT) */
export const scotlandChartered = 52539;

export interface PayRange {
  min: number;
  max: number;
}

/** Leadership Group spine endpoints (L1 and L43) */
export const leadershipRange: Partial<Record<Region, PayRange>> = {
  england: { min: 53585, max: 148829 },
  fringe: { min: 55060, max: 150301 },
  "outer-london": { min: 57837, max: 153041 },
  "inner-london": { min: 63708, max: 158862 },
  wales: { min: 53585, max: 148829 },
};

export const leadPractitionerRange: Partial<Record<Region, PayRange>> = {
  england: { min: 53847, max: 81860 },
  fringe: { min: 55331, max: 83346 },
  "outer-london": { min: 58119, max: 86136 },
  "inner-london": { min: 64023, max: 92043 },
  wales: { min: 53847, max: 81860 },
};

export const LEADERSHIP_POINTS = 43;

/**
 * The leadership group is a 43-point spine. The STPCD publishes the L1 and L43
 * endpoints; individual points sit on a broadly even percentage progression
 * between them. These interpolated points are indicative — your school's pay
 * policy sets the actual individual school range within the spine.
 */
export function leadershipSpine(region: Region): number[] {
  const range = leadershipRange[region];
  if (!range) return [];
  const steps = LEADERSHIP_POINTS - 1;
  const ratio = Math.pow(range.max / range.min, 1 / steps);
  return Array.from({ length: LEADERSHIP_POINTS }, (_, i) =>
    Math.round(range.min * Math.pow(ratio, i)),
  );
}

/** Allowances 2026/27 */
export const allowances = {
  tlr1: { min: 10530, max: 17819 },
  tlr2: { min: 3650, max: 8912 },
  tlr3: { min: 727, max: 3600 },
  sen: { min: 2885, max: 5689 },
};

export const payAward2026 = 0.035;

export interface PayPoint {
  id: string;
  label: string;
  scale: ScaleId;
  region: Region;
  salary: number;
}

export function pointsForScale(scale: ScaleId, region: Region): PayPoint[] {
  const make = (arr: number[], prefix: string): PayPoint[] =>
    arr.map((salary, i) => ({
      id: `${prefix}${i + 1}`,
      label: `${prefix}${i + 1}`,
      scale,
      region,
      salary,
    }));

  switch (scale) {
    case "main":
      return make(mainRange[region] ?? [], "M");
    case "upper":
      return make(upperRange[region] ?? [], "U");
    case "unqualified":
      return make(unqualifiedRange[region] ?? [], "UQ");
    case "leadership":
      return leadershipSpine(region).map((salary, i) => ({
        id: `L${i + 1}`,
        label: `L${i + 1}`,
        scale,
        region,
        salary,
      }));
    case "lead-practitioner": {
      const range = leadPractitionerRange[region];
      if (!range) return [];
      const steps = 17;
      const ratio = Math.pow(range.max / range.min, 1 / (steps - 1));
      return Array.from({ length: steps }, (_, i) => ({
        id: `LP${i + 1}`,
        label: `LP${i + 1}`,
        scale,
        region,
        salary: Math.round(range.min * Math.pow(ratio, i)),
      }));
    }
  }
}

export const englandRegions: Region[] = [
  "england",
  "fringe",
  "outer-london",
  "inner-london",
];

export const allRegions: Region[] = [
  "england",
  "fringe",
  "outer-london",
  "inner-london",
  "wales",
  "scotland",
  "northern-ireland",
];
