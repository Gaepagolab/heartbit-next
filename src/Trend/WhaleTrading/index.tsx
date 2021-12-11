import { FC, useEffect, useState } from "react";

import * as S from "./Styles";
import { Table, THead, TBody, Panel, ButtonsTab } from "shared/components";
import { socketClient } from "shared/utils/client";

export type WhaleType = {
  type: "ask" | "bid";
  krw: number;
  usdt: number;
  bank: string;
  coin: string;
};

const WHALTE_TYPE_MAP = {
  BTC: "whale_btc",
  ETH: "whale_eth",
};

const tabItems = [
  { id: WHALTE_TYPE_MAP.BTC, name: "BTC" },
  { id: WHALTE_TYPE_MAP.ETH, name: "ETH" },
];

export interface Props {}

const WhaleTradings: FC<Props> = () => {
  const [BTCtradings, setBTCTradings] = useState<WhaleType[]>([]);
  const [ETHtradings, setETHTradings] = useState<WhaleType[]>([]);
  const [whaleType, setWhaleType] = useState(WHALTE_TYPE_MAP.BTC);

  // useEffect(() => {
  //   socketClient(WHALTE_TYPE_MAP.BTC).on("message", (data: string) => {
  //     const obj = JSON.parse(data);

  //     setBTCTradings((prev) => {
  //       if (prev.length < 15) return [obj, ...prev];
  //       else return [obj, ...prev].slice(0, prev.length);
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   socketClient(WHALTE_TYPE_MAP.ETH).on("message", (data: string) => {
  //     const obj = JSON.parse(data);

  //     setETHTradings((prev) => {
  //       if (prev.length < 15) return [obj, ...prev];
  //       else return [obj, ...prev].slice(0, prev.length);
  //     });
  //   });
  // }, []);

  return (
    <Panel
      title="실시간 고래 거래체결"
      renderSelector={() => (
        <ButtonsTab width="116px" height="24px" items={tabItems} />
      )}
    >
      <Table>
        <THead>
          <S.Tr>
            <th>상태</th>
            <th>
              금액<small>(원화)</small>
            </th>
            <th>
              금액<small>(달러)</small>
            </th>
          </S.Tr>
        </THead>
        {whaleType === WHALTE_TYPE_MAP.BTC && (
          <TBody>
            {BTCtradings.map((trading, index) => (
              <S.Tr key={index} type={trading.type}>
                <td>
                  {trading.bank}
                  <S.TradingType type={trading.type}>
                    {trading.type === "bid" ? "롱" : "숏"}
                  </S.TradingType>
                </td>
                <td>{covertToKRW(trading.krw)}원</td>
                <td>{parseInt(String(trading.usdt))}$</td>
              </S.Tr>
            ))}
          </TBody>
        )}

        {whaleType === WHALTE_TYPE_MAP.ETH && (
          <TBody>
            {ETHtradings.map((trading, index) => (
              <S.Tr key={index} type={trading.type}>
                <td>
                  {trading.bank}
                  <S.TradingType type={trading.type}>
                    {trading.type === "bid" ? "롱" : "숏"}
                  </S.TradingType>
                </td>
                <td>{covertToKRW(trading.krw)}원</td>
                <td>{parseInt(String(trading.usdt))}$</td>
              </S.Tr>
            ))}
          </TBody>
        )}
      </Table>
    </Panel>
  );
};

export default WhaleTradings;

function covertToKRW(number: number): string {
  const inputNumber = number < 0 ? false : number;
  if (!inputNumber) return;
  const unitWords = ["", "만", "억", "조", "경"];
  const splitUnit = 10000;
  const splitCount = unitWords.length;
  const resultArray: number[] = [];
  let resultString = "";

  for (let i = 0; i < splitCount; i++) {
    let unitResult =
      (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }

  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = String(resultArray[i]) + unitWords[i] + resultString;
  }

  return resultString;
}
