import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";

import { font, fontWeightHeader } from "utils/styles";
import {
  HeaderPrices,
  Volatilities,
  WhaleTradings,
} from "components/organisms";
import { Panel, Page } from "components/atoms";

const IndexPage: FC = () => {
  return (
    <Page>
      <Header>
        <HeaderInfo>
          <Title>Heartbit</Title>
          <Desciption>실시간 코인 트렌트 및 정보를 제공합니다.</Desciption>
        </HeaderInfo>
        <HeaderPrices />
      </Header>

      <Row>
        <Column xs={12} md={12} lg={8} xl={8}>
          <Panel
            width="100%"
            title="공포 & 탐욕지수 그래프"
            description="공포 & 탐욕지수에 대한 정보를 제공합니다."
          >
            <IFrame src="https://heartbit-0931.s3.ap-northeast-2.amazonaws.com/fear_and_greed_0821_2.html" />
          </Panel>
          <Panel
            width="100%"
            title="BTC Pi Cycle"
            description="BTC Pi Cycle에 대한 정보를 제공합니다."
          >
            <IFrame src="https://heartbit-0931.s3.ap-northeast-2.amazonaws.com/pi_cycle_0821_2.html" />
          </Panel>
          <Panel
            width="100%"
            title="BTC HashRate"
            description="BTC HashRate에 대한 정보를 제공합니다."
          >
            <IFrame src="https://heartbit-0931.s3.ap-northeast-2.amazonaws.com/hash_rate_0821_2.html" />
          </Panel>
        </Column>

        <Column xs={12} md={12} lg={4} xl={4}>
          <Panel width="100%">
            <Volatilities />
          </Panel>

          <Panel width="100%" noPadding>
            <WhaleTradings />
          </Panel>
        </Column>
      </Row>
    </Page>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
`;
const HeaderInfo = styled.div``;

const Title = styled.h2`
  margin-bottom: 16px;
  ${font.size(22)};
  font-weight: ${fontWeightHeader};
`;

const Desciption = styled.h3`
  ${font.size(13)}
`;

const IFrame = styled.iframe`
  width: 100%;
  min-height: 354px;
  border: none;
`;

const Column = styled(Col)`
  & > div + div {
    margin: 24px 0;
  }
`;

export default IndexPage;
