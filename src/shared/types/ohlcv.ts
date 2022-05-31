import { AbstractType } from ".";

export interface OHLCV extends AbstractType {
  close: number;
  datetime: string;
  high: number;
  low: number;
  open: number;
  volume: number;
}
