import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import { font, Color } from "utils/styles";
import { Table, THead, TBody, Panel } from "components/atoms";
import { socketClient } from "../../../utils/client";

export interface VolatilitiesProps {}

type Volatilty = {
  ko: string;
  price: number;
};

const Volatilities: FC<VolatilitiesProps> = ({}) => {
  const [topVolatilities, setTopVolatilities] = useState<Volatilty[]>([]);
  const [downVolatilities, setDownVolatilities] = useState<Volatilty[]>([]);

  useEffect(() => {
    socketClient("three_min_transaction").on("message", (data: string) => {
      const obj = JSON.parse(data);
      const { top, down } = obj;
      setTopVolatilities(top);
      setDownVolatilities(down);
    });
  }, []);

  return (
    <Root>
      <Panel title="가격 변동성 상승 TOP5 (Upbit기준)" width="100%">
        <Volatility>
          <Table>
            <THead>
              <tr>
                <th>코인명</th>
                <th>상승률</th>
              </tr>
            </THead>
            <TBody>
              {topVolatilities
                .sort((v1, v2) => v2.price - v1.price)
                .map((v) => (
                  <tr key={v.ko}>
                    <td>{v.ko}</td>
                    <td style={{ color: Color.long }}>{v.price}%</td>
                  </tr>
                ))}
            </TBody>
          </Table>
        </Volatility>
      </Panel>

      <Panel title="가격 변동성 하락 Top 5 (업비트 기준)" width="100%">
        <Volatility>
          <Table>
            <THead>
              <tr>
                <th>코인명</th>
                <th>하락률</th>
              </tr>
            </THead>
            <TBody>
              {downVolatilities
                .sort((v1, v2) => v1.price - v2.price)
                .map((v) => (
                  <tr key={v.ko}>
                    <td>{v.ko}</td>
                    <td style={{ color: Color.short }}>{v.price}%</td>
                  </tr>
                ))}
            </TBody>
          </Table>
        </Volatility>
      </Panel>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100%;

  div + div {
    margin-top: 8px;
  }
`;

const Volatility = styled.div`
  padding: 0 18px;
  min-height: 214px;
  ${font.size(12)};
`;

export default Volatilities;
