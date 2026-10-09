// Teachers' pay scales — government-accepted advisory points for England from
// September 2026. Source: STRB 36th Report (2026). The STPCD 2026 Pay Order is
// due in October 2026, so do not describe these figures as "in force" until it
// has been laid. The 3.5% award applies to every point except Rest-of-England
// UQ1, which receives 5%.
//
// Wales negotiates via the IWPRB. Only use Wales figures that are separately
// verified in the source ledger; never infer Welsh leadership points from England.
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
  main: "Main Pay Range",
  upper: "Upper Pay Range (U1–U3)",
  unqualified: "Unqualified Teacher Range",
  leadership: "Leadership Group (L1–L43)",
  "lead-practitioner": "Lead Practitioner Range",
};

/** Main Pay Range — England M1..M6; Wales M2..M6 */
export const mainRange: Record<Region, number[]> = {
  england: [34069, 36042, 38400, 40941, 43529, 46940],
  fringe: [35602, 37647, 39979, 42513, 45070, 48479],
  "outer-london": [39196, 41246, 43403, 45673, 48438, 52241],
  "inner-london": [41729, 43713, 45787, 47961, 50666, 54131],
  wales: [34912, 37717, 40623, 43821, 48226],
  scotland: [34539, 36426, 38361, 42336, 45468, 48516],
  "northern-ireland": [32188, 34037, 36271, 38669, 41109, 44342],
};

/** Upper Pay Range — points U1..U3 */
export const upperRange: Record<Region, number[]> = {
  england: [49134, 50956, 52835],
  fringe: [50625, 52442, 54328],
  "outer-london": [54047, 56047, 58120],
  "inner-london": [59650, 62581, 64684],
  wales: [49995, 51849, 53760],
  scotland: [], // Scotland uses the Chartered Teacher route instead of UPS
  "northern-ireland": [46589, 48303, 50085],
};

/** Unqualified Teacher Range — points 1..6 */
export const unqualifiedRange: Record<Region, number[]> = {
  england: [23732, 26075, 28758, 31124, 33811, 36494],
  fringe: [24909, 27589, 30272, 32636, 35321, 38004],
  "outer-london": [27727, 30412, 33094, 35465, 38146, 40831],
  "inner-london": [29336, 32018, 34702, 37068, 39747, 42429],
  wales: [23820, 26589, 29358, 32126, 34900, 37669],
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
  wales: { min: 54524, max: 151434 },
};

export const leadPractitionerRange: Partial<Record<Region, PayRange>> = {
  england: { min: 53847, max: 81861 },
  fringe: { min: 55332, max: 83347 },
  "outer-london": { min: 58120, max: 86136 },
  "inner-london": { min: 64024, max: 92043 },
  wales: { min: 54792, max: 83295 },
};

export const LEADERSHIP_POINTS = 43;

/**
 * Government-accepted 2026/27 advisory leadership points. England values are
 * transcribed from NEU joint-union advice; Wales values from NASUWT's published
 * advisory table. The school pay policy still determines the individual school
 * range, but calculators must use published point values.
 */
const leadershipPoints: Partial<Record<Region, number[]>> = {
  england: [53586, 54927, 56298, 57699, 59137, 60619, 62251, 63688, 65278, 66956, 68691, 70275, 72032, 73827, 75664, 77676, 79460, 81457, 83478, 85547, 87664, 89842, 92065, 94349, 96694, 99086, 101540, 104059, 106637, 109291, 111990, 114774, 117624, 120532, 123528, 126587, 129733, 132943, 136184, 139581, 143069, 146653, 148829],
  fringe: [55060, 56404, 57776, 59185, 60624, 62102, 63738, 65166, 66758, 68435, 70169, 71759, 73517, 75310, 77141, 79158, 80953, 82939, 84957, 87036, 89153, 91326, 93545, 95836, 98174, 100571, 103021, 105536, 108119, 110764, 113475, 116260, 119111, 122018, 125014, 128068, 131218, 134426, 137662, 141070, 144551, 148138, 150301],
  "outer-london": [57837, 59182, 60545, 61955, 63393, 64871, 66509, 67940, 69529, 71207, 72940, 74530, 76288, 78074, 79912, 81928, 83715, 85715, 87736, 89801, 91921, 94088, 96314, 98602, 100945, 103335, 105791, 108311, 110884, 113539, 116247, 119021, 121880, 124786, 127778, 130834, 133988, 137197, 140432, 143839, 147322, 150901, 153042],
  "inner-london": [63709, 65057, 66434, 67832, 69278, 70754, 72390, 73824, 75409, 77086, 78820, 80411, 82164, 83960, 85790, 87811, 89596, 91594, 93612, 95683, 97799, 99975, 102193, 104485, 106824, 109215, 111668, 114189, 116772, 119421, 122125, 124902, 127759, 130666, 133661, 136716, 139871, 143074, 146313, 149719, 153209, 156785, 158863],
  wales: [54524, 55887, 57283, 58709, 60171, 61683, 63340, 64804, 66421, 68126, 69895, 71507, 73293, 75120, 76988, 79037, 80851, 82883, 84940, 87044, 89200, 91414, 93677, 96001, 98386, 100820, 103318, 105880, 108502, 111203, 113951, 116782, 119683, 122642, 125691, 128802, 132004, 135271, 138568, 142024, 145573, 149220, 151434],
};

export function leadershipSpine(region: Region): number[] {
  return leadershipPoints[region] ?? [];
}

/** Published Wales 2026/27 lead-practitioner points; England publishes a range only. */
const leadPractitionerPoints: Partial<Record<Region, number[]>> = {
  wales: [54792, 56166, 57567, 58999, 60467, 61986, 63655, 65121, 66748, 68464, 70240, 71858, 73653, 75490, 77369, 79425, 81248, 83295],
};

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
  const make = (arr: number[], prefix: string, startAt = 1): PayPoint[] =>
    arr.map((salary, i) => ({
      id: `${prefix}${i + startAt}`,
      label: `${prefix}${i + startAt}`,
      scale,
      region,
      salary,
    }));

  switch (scale) {
    case "main":
      return make(mainRange[region] ?? [], "M", region === "wales" ? 2 : 1);
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
      const publishedPoints = leadPractitionerPoints[region];
      if (publishedPoints) return make(publishedPoints, "LP");
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
