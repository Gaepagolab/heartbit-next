import { AbstractType } from ".";

export enum CandleType {
  OneMiniute = "1m",
  ThreeMiniute = "3m",
  FiveMiniute = "5m",
  FifteenMiniute = "15m",
  ThirtyMiniute = "30m",
  OneHour = "1h",
  TwoHour = "2h",
  FourHour = "4h",
  SixHour = "6h",
  EightHour = "8h",
  TwelveHour = "12h",
  OneDay = "1d",
  ThreeDay = "3d",
  OneWeek = "1w",
  OneMonth = "1M",
}

export interface Candle extends AbstractType {
  type: CandleType;
  ohlcvs?: any[];
}
