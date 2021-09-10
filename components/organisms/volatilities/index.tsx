import * as React from "react";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Row } from "reactstrap";

import { font, Color } from "utils/styles";
import { Table, THead, TBody } from "components/atoms";
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
    socketClient("three_min_transaction").on("message", (data) => {
      const obj = JSON.parse(data);
      const { top, down } = obj;
      setTopVolatilities(top);
      setDownVolatilities(down);
    });
  }, []);

  return (
    <Root>
      <Volatility>
        <Title>가격 변동성 상승 Top 5 (업비트 기준)</Title>
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

      <Volatility>
        <Title>가격 변동성 하락 Top 5 (업비트 기준)</Title>
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
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  ${font.size(18)}
  margin-bottom: 8px;
  padding: 0;
`;

const Volatility = styled(Row)`
  padding: 0 18px;
  &:first-of-type {
    margin-bottom: 24px;
  }
`;

export default Volatilities;
