import { AbstractType, Candle } from ".";

export interface Coin extends AbstractType {
  name: string;
  candles?: Candle[];
}
