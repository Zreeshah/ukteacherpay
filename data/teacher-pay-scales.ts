// Teachers' pay scales — government-accepted advisory points for England from
// September 2026. Source: STRB 36th Report (2026). The STPCD 2026 Pay Order is
// due in October 2026, so do not describe these figures as "in force" until it
// has been laid. The 3.5% award applies to every point except Rest-of-England
// UQ1, which receives 5%.
//
// Wales negotiates via the IWPRB but currently mirrors the STPCD figures.
// Scotland uses the separate SNCT scale. Northern Ireland uses its own scale.
//
// Academies and free schools may set their own pay scales; maintained-school
// implementation is subject to the Pay Order.

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
  england: [34069, 36042, 38400, 40941, 43529, 46940],
  fringe: [35602, 37647, 39979, 42513, 45070, 48479],
  "outer-london": [39196, 41246, 43403, 45673, 48438, 52241],
  "inner-london": [41729, 43713, 45787, 47961, 50666, 54131],
  wales: [34068, 36042, 38400, 40940, 43529, 46939],
  scotland: [34539, 36426, 38361, 42336, 45468, 48516],
  "northern-ireland": [32188, 34037, 36271, 38669, 41109, 44342],
};

/** Upper Pay Range — points U1..U3 */
export const upperRange: Record<Region, number[]> = {
  england: [49134, 50956, 52835],
  fringe: [50625, 52442, 54328],
  "outer-london": [54047, 56047, 58120],
  "inner-london": [59650, 62581, 64684],
  wales: [49134, 50955, 52835],
  scotland: [], // Scotland uses the Chartered Teacher route instead of UPS
  "northern-ireland": [46589, 48303, 50085],
};

/** Unqualified Teacher Range — points 1..6 */
export const unqualifiedRange: Record<Region, number[]> = {
  england: [23732, 26075, 28758, 31124, 33811, 36494],
  fringe: [24909, 27589, 30272, 32636, 35321, 38004],
  "outer-london": [27727, 30412, 33094, 35465, 38146, 40831],
  "inner-london": [29336, 32018, 34702, 37068, 39747, 42429],
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
  england: { min: 53586, max: 148829 },
  fringe: { min: 55060, max: 150301 },
  "outer-london": { min: 57837, max: 153042 },
  "inner-london": { min: 63709, max: 158863 },
  wales: { min: 53585, max: 148829 },
};

export const leadPractitionerRange: Partial<Record<Region, PayRange>> = {
  england: { min: 53847, max: 81861 },
  fringe: { min: 55332, max: 83347 },
  "outer-london": { min: 58120, max: 86136 },
  "inner-london": { min: 64024, max: 92043 },
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
  tlr1: { min: 10531, max: 17819 },
  tlr2: { min: 3651, max: 8913 },
  tlr3: { min: 727, max: 3600 },
  sen: { min: 2885, max: 5690 },
};

export const payAward2026 = 0.035;
export const payAward2027 = 0.03;

/** STRB's government-accepted 2027/28 advisory points, rounded up to £1. */
export const mainRange2027: Record<Region, number[]> = {
  england: [35092, 37124, 39552, 42170, 44835, 48349],
  fringe: [36671, 38777, 41179, 43789, 46423, 49934],
  "outer-london": [40372, 42484, 44706, 47044, 49892, 53809],
  "inner-london": [42981, 45025, 47161, 49400, 52186, 55755],
  wales: [], scotland: [], "northern-ireland": [],
};

export const upperRange2027: Record<Region, number[]> = {
  england: [50609, 52485, 54421],
  fringe: [52144, 54016, 55958],
  "outer-london": [55669, 57729, 59864],
  "inner-london": [61440, 64459, 66625],
  wales: [], scotland: [], "northern-ireland": [],
};

export const unqualifiedRange2027: Record<Region, number[]> = {
  england: [24444, 26858, 29621, 32058, 34826, 37589],
  fringe: [25657, 28417, 31181, 33616, 36381, 39145],
  "outer-london": [28559, 31325, 34087, 36529, 39291, 42056],
  "inner-london": [30217, 32979, 35744, 38181, 40940, 43702],
  wales: [], scotland: [], "northern-ireland": [],
};

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
