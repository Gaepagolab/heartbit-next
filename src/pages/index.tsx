import { FC, Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";

import { font, media } from "shared/utils/styles";

const HomePage: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Heartbit</title>
      </Head>
      <Root>안녕</Root>
    </Fragment>
  );
};

const Root = styled.div`
  /* padding: 24px; */
  height: 100vh;
  overflow-y: auto;
  ${font.regular}
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
