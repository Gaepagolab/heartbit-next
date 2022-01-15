import { QuoationService } from "node-upbit"; // 1.

export const getMarkets = async () => {
  const quoationService = new QuoationService();
  const { KRW } = await quoationService.getMarketAllInfo();
  const markets = KRW.map((info) => info.market);
  return markets;

  // for (const market of markets) {
  //   let data = {};
  //   const res = quoationService.getMinutesCandles({
  //     marketCoin: market,
  //     minutes: "1",
  //     count: 3,
  //   });
  //   console.log(res);
  // }

  // const res = await Promise.all(
  //   markets.map((market) =>
  //     quoationService.getMinutesCandles({
  //       marketCoin: market,
  //       minutes: "1",
  //       count: 3,
  //     })
  //   )
  // );

  // const OHLCV = await quoationService.getMinutesCandles({
  //   marketCoin: markets[0],
  //   minutes: "1",
  //   count: 3,
  // });
};
