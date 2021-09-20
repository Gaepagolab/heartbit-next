import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import { font, Color } from "utils/styles";
import { Table, THead, TBody } from "components/atoms";
import { socketClient } from "utils/client";

type WhaleType = {
  type: "ask" | "bid";
  krw: number;
  usdt: number;
  bank: string;
  coin: string;
};
export interface Props {}

const WhaleTradings: FC<Props> = () => {
  const [tradings, setTradings] = useState<WhaleType[]>([]);

  useEffect(() => {
    socketClient("whale_btc").on("message", (data: string) => {
      const obj = JSON.parse(data);
      setTradings((prev) => {
        if (prev.length < 15) return [obj, ...prev];
        else return [obj, ...prev].slice(0, prev.length);
      });
    });
  }, []);

  return (
    <Root>
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
        <TBody>
          {tradings.map((trading, index) => (
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
      </Table>
    </Root>
  );
};

const Root = styled.div`
  min-height: 500px;
  max-height: 500px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TradingType = styled.span<{ type: WhaleType["type"] }>`
  ${font.size(14)}
  ${(props) => props.type === "bid" && `color: ${Color.long}`}
  ${(props) =>
    props.type === "ask" && `color: ${Color.short}`}
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

  ${(props) => props.type === "bid" && `background-color: ${Color.long}`}
  ${(props) => props.type === "ask" && `background-color: ${Color.short}`}
`;

export default WhaleTradings;

function covertToKRW(number: number) {
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
