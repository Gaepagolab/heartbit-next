import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import { font } from "shared/utils/styles";
import { Table, THead, TBody, Panel, Button } from "shared/components/atoms";
import { socketClient } from "shared/utils/client";

type WhaleType = {
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

export interface Props {}

const WhaleTradings: FC<Props> = () => {
  const [BTCtradings, setBTCTradings] = useState<WhaleType[]>([]);
  const [ETHtradings, setETHTradings] = useState<WhaleType[]>([]);
  const [whaleType, setWhaleType] = useState(WHALTE_TYPE_MAP.BTC);

  const renderSelector = () => (
    <Selector>
      <Button
        selected={whaleType === WHALTE_TYPE_MAP.BTC}
        onClick={() => setWhaleType(WHALTE_TYPE_MAP.BTC)}
      >
        BTC
      </Button>
      <Button
        selected={whaleType === WHALTE_TYPE_MAP.ETH}
        onClick={() => setWhaleType(WHALTE_TYPE_MAP.ETH)}
      >
        ETH
      </Button>
    </Selector>
  );

  useEffect(() => {
    socketClient(WHALTE_TYPE_MAP.BTC).on("message", (data: string) => {
      const obj = JSON.parse(data);

      setBTCTradings((prev) => {
        if (prev.length < 15) return [obj, ...prev];
        else return [obj, ...prev].slice(0, prev.length);
      });
    });
  }, []);

  useEffect(() => {
    socketClient(WHALTE_TYPE_MAP.ETH).on("message", (data: string) => {
      const obj = JSON.parse(data);

      setETHTradings((prev) => {
        if (prev.length < 15) return [obj, ...prev];
        else return [obj, ...prev].slice(0, prev.length);
      });
    });
  }, []);

  return (
    <Root>
      <Panel
        width="100%"
        height="100%"
        title="실시간 고래 거래체결"
        renderSelector={renderSelector}
      >
        <Table>
          <THead>
            <Tr>
              <th>상태</th>
              <th>
                금액<small>(원화)</small>
              </th>
              <th>
                금액<small>(달러)</small>
              </th>
            </Tr>
          </THead>
          {whaleType === WHALTE_TYPE_MAP.BTC && (
            <TBody>
              {BTCtradings.map((trading, index) => (
                <Tr key={index} type={trading.type}>
                  <td>
                    {trading.bank}
                    <TradingType type={trading.type}>
                      {trading.type === "bid" ? "롱" : "숏"}
                    </TradingType>
                  </td>
                  <td>{covertToKRW(trading.krw)}원</td>
                  <td>{parseInt(String(trading.usdt))}$</td>
                </Tr>
              ))}
            </TBody>
          )}

          {whaleType === WHALTE_TYPE_MAP.ETH && (
            <TBody>
              {ETHtradings.map((trading, index) => (
                <Tr key={index} type={trading.type}>
                  <td>
                    {trading.bank}
                    <TradingType type={trading.type}>
                      {trading.type === "bid" ? "롱" : "숏"}
                    </TradingType>
                  </td>
                  <td>{covertToKRW(trading.krw)}원</td>
                  <td>{parseInt(String(trading.usdt))}$</td>
                </Tr>
              ))}
            </TBody>
          )}
        </Table>
      </Panel>
    </Root>
  );
};

const Root = styled.div`
  min-height: 548px;
  max-height: 548px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TradingType = styled.span<{ type: WhaleType["type"] }>`
  ${font.size(14)}
`;

const Tr = styled.tr<{ type?: WhaleType["type"] }>`
  th:first-of-type,
  td:first-of-type {
    padding-left: 20px;
  }
  th:last-of-type,
  td:last-of-type {
    padding-right: 20px;
  }

  &:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const Selector = styled.div`
  display: flex;
  ${font.size(12)}
  &> button + button {
    margin-left: 4px;
  }
`;

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
