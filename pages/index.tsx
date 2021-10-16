import { FC, Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import { Container } from "reactstrap";

import { media } from "utils/styles";
import {
  HeaderPrices,
  Volatilities,
  WhaleTradings,
} from "components/organisms";
import { Kimp, Panel } from "components/atoms";

const HomePage: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Heartbit</title>
        <link rel="preload" href="/assets/images/ad_afreeca.png" as="image" />
        <link rel="preload" href="/assets/images/ad_funding.png" as="image" />
      </Head>
      <Root fluid>
        <FirstRow>
          <AdWrapper>
            <AdImage src="/assets/images/ad_afreeca.png" />
          </AdWrapper>
          <Panel width="100%" height="100%">
            {/* <HeaderPrices /> */}
          </Panel>
          <Panel width="100%" height="100%">
            {/* <Kimp /> */}
          </Panel>
          <AdWrapper>
            <AdImage src="/assets/images/ad_funding.png" />
          </AdWrapper>
        </FirstRow>

        <SecondRow>
          {/* <Volatilities /> */}
          {/* <WhaleTradings /> */}
          <Iframe src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_627c9&symbol=UPBIT%3ABTCKRW&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=RSI%40tv-basicstudies%1F&theme=dark&style=1&timezone=Asia%2FSeoul&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=kr&utm_source=sigbtc.pro&utm_medium=widget&utm_campaign=chart&utm_term=UPBIT%3ABTCKRW" />
        </SecondRow>

        <ThirdRow>
          <Panel
            title="공포 & 탐욕지수 그래프"
            description="공포 & 탐욕지수에 대한 정보를 제공합니다."
            width="100%"
            height="100%"
          >
            <Iframe
              maxHeight={320}
              src="https://heartbit-gaepago.s3.ap-northeast-2.amazonaws.com/fear_and_greed.html"
            />
          </Panel>
          <Panel
            title="BTC HashRate"
            description="BTC HashRate에 대한 정보를 제공합니다."
            width="100%"
            height="100%"
          >
            <Iframe
              maxHeight={320}
              src="https://heartbit-gaepago.s3.ap-northeast-2.amazonaws.com/Hash_rate.html"
            />
          </Panel>
        </ThirdRow>

        <ForthRow>
          <Panel
            title="Pi Cycle"
            description="Pi Cycle에 대한 정보를 제공합니다."
            width="100%"
            height="100%"
          >
            <Iframe
              referrerPolicy="no-referrer"
              maxHeight={320}
              src="https://heartbit-gaepago.s3.ap-northeast-2.amazonaws.com/pi_cycle.html"
            />
          </Panel>
        </ForthRow>
      </Root>
    </Fragment>
  );
};

const Root = styled(Container)`
  padding: 24px;
  height: 100vh;
  overflow-y: auto;
`;

const AdWrapper = styled.div`
  height: inherit;
`;

const AdImage = styled.img`
  width: 100%;
  height: 100%;
`;

const FirstRow = styled.div`
  display: grid;
  grid-template-columns: 224px 4fr 1fr 224px;
  grid-template-rows: 168px;
  column-gap: 8px;

  ${media.large} {
    row-gap: 8px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 168px);
  }

  ${media.medium} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 168px);
  }
`;

const Iframe = styled.iframe<{ maxHeight?: number }>`
  width: 100%;
  height: 100%;
  ${(props) => `max-height: ${props.maxHeight}px;`}
`;

const SecondRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 548px;
  column-gap: 8px;
  margin-top: 8px;

  ${media.large} {
    row-gap: 8px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 548px);
  }

  ${media.small} {
    row-gap: 8px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 548px);
  }
`;

const ThirdRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px;
  column-gap: 8px;
  margin-top: 8px;

  ${media.medium} {
    row-gap: 8px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 400px);
  }
`;

const ForthRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 400px;
  margin-top: 8px;
`;

export default HomePage;
