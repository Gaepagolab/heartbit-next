import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Spinner } from "reactstrap";

import { font, mixin } from "shared/utils/styles";
import { Table, THead, TBody, Panel, Button } from "shared/components/atoms";
import { socketClient } from "shared/utils/client";

export interface VolatilitiesProps {}

type Volatilty = {
  ko: string;
  price: number;
};

const TERM_MAP = {
  THREE: "three_min_transaction",
  FIVE: "five_min_transaction",
};

const Volatilities: FC<VolatilitiesProps> = ({}) => {
  const [topVolatilities, setTopVolatilities] = useState<Volatilty[]>([]);
  const [downVolatilities, setDownVolatilities] = useState<Volatilty[]>([]);

  const [term, setTerm] = useState(TERM_MAP.THREE);

  const renderSelector = () => (
    <Selector>
      <Button
        selected={term === TERM_MAP.THREE}
        onClick={() => setTerm(TERM_MAP.THREE)}
      >
        3 min
      </Button>
      <Button
        selected={term === TERM_MAP.FIVE}
        onClick={() => setTerm(TERM_MAP.FIVE)}
      >
        5 min
      </Button>
    </Selector>
  );

  useEffect(() => {
    socketClient(term).on("message", (data: string) => {
      const obj = JSON.parse(data);
      const { top, down } = obj;

      setTopVolatilities(top);
      setDownVolatilities(down);
    });
  }, [term]);

  return (
    <Root>
      <Panel
        width="100%"
        height="100%"
        title="가격 변동성 상승 TOP5 (업비트 기준)"
        renderSelector={renderSelector}
      >
        <Volatility>
          {topVolatilities.length === 0 ? (
            <LoadingWrapper>
              <Spinner />
            </LoadingWrapper>
          ) : (
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
                      <td>{v.price}%</td>
                    </tr>
                  ))}
              </TBody>
            </Table>
          )}
        </Volatility>

        <Divider />

        <Volatility>
          <Title>가격 변동성 하락 Top 5 (업비트 기준)</Title>
          {downVolatilities.length === 0 ? (
            <LoadingWrapper>
              <Spinner />
            </LoadingWrapper>
          ) : (
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
                      <td>{v.price}%</td>
                    </tr>
                  ))}
              </TBody>
            </Table>
          )}
        </Volatility>
      </Panel>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100%;
  min-height: 548px;
`;

const Volatility = styled.div`
  padding: 0 18px;
  min-height: 40%;
  ${font.size(12)};
`;

const Title = styled.div`
  ${font.size(15)}
`;

const Divider = styled.div`
  height: 1px;
  ${mixin.flexSet()}
  width: 100%;
  margin: 2px 0 8px 0;
`;

const Selector = styled.div`
  display: flex;
  ${font.size(12)}
  &> button + button {
    margin-left: 4px;
  }
`;

const LoadingWrapper = styled.div`
  height: 180px;
  ${mixin.flexSet()}
  span {
    display: none;
  }
`;

export default Volatilities;
