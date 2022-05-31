import { FC, useEffect, useState } from "react";

import * as S from "./Styles";
import { Table, THead, TBody, Panel, ButtonsTab } from "shared/components";

import { socketClient } from "shared/utils/client";
import { covertToKRW } from "shared/utils/convert";

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
        <ButtonsTab
          width="116px"
          height="24px"
          items={tabItems}
          onClick={() => null}
        />
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
                <td>{trading.bank.toUpperCase()}</td>
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
                <td>{trading.bank.toUpperCase()}</td>
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
