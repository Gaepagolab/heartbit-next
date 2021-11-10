import Head from "next/head";
import { Fragment, ReactElement } from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import { size } from "shared/utils/styles";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <Root>
      <Head>
        <title>Heartbit</title>
      </Head>
      <Fragment>
        <Navigation />
        <Page>{children}</Page>
      </Fragment>
    </Root>
  );
};

export default function withDefaultLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}

const Root = styled.main``;
const Page = styled.div`
  height: 100vh;
  margin-left: ${size.navigationWidth}px;
`;
