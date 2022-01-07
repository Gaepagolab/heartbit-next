import ccxt from "ccxt";
import moment from "moment";
import { useEffect } from "react";

export default function Indicator() {
  useEffect(() => {
    fetch_ohlcv();
  });
  return <div>Indicator</div>;
}

const fetch_ohlcv = async () => {
  const binance = new ccxt.binance();
  const ohlcvs = await binance.fetchOHLCV("BTC/USDT", "1d");
  const btc_arr = [];
  const dateTime = [];

  ohlcvs.forEach((ohlcvs) => {
    btc_arr.push(ohlcvs[4]);
    dateTime.push(moment(ohlcvs[0]).format("YYYY-MM-DD"));
  });

  const btc_arr_350 = [];
  const btc_arr_111 = [];

  for (let i = 0; i < btc_arr.length - 350; i++) {
    btc_arr_350.push(average(btc_arr.slice(i, i + 350)));
  }

  for (let i = 0; i < btc_arr.length - 111; i++) {
    btc_arr_111.push(average(btc_arr.slice(i, i + 111)));
  }

  const max_rows = btc_arr_350.length;
};

const average = (arr: number[]) =>
  arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
