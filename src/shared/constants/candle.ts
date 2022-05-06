import { CandleType } from "../types";

export const CandleTypeAmount = {
  [CandleType.OneMiniute]: 1,
  [CandleType.ThreeMiniute]: 3,
  [CandleType.FiveMiniute]: 5,
  [CandleType.FifteenMiniute]: 15,
  [CandleType.ThirtyMiniute]: 30,
  [CandleType.OneHour]: 1,
  [CandleType.TwoHour]: 2,
  [CandleType.FourHour]: 4,
  [CandleType.SixHour]: 6,
  [CandleType.EightHour]: 8,
  [CandleType.TwelveHour]: 12,
  [CandleType.OneDay]: 1,
  [CandleType.ThreeDay]: 3,
  [CandleType.OneWeek]: 1,
  [CandleType.OneMonth]: 1,
};

export const CandleTypeUnit = {
  [CandleType.OneMiniute]: "m",
  [CandleType.ThreeMiniute]: "m",
  [CandleType.FiveMiniute]: "m",
  [CandleType.FifteenMiniute]: "m",
  [CandleType.ThirtyMiniute]: "m",
  [CandleType.OneHour]: "h",
  [CandleType.TwoHour]: "h",
  [CandleType.FourHour]: "h",
  [CandleType.SixHour]: "h",
  [CandleType.EightHour]: "h",
  [CandleType.TwelveHour]: "h",
  [CandleType.OneDay]: "d",
  [CandleType.ThreeDay]: "d",
  [CandleType.OneWeek]: "w",
  [CandleType.OneMonth]: "M",
};
