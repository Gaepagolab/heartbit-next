import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { NextComponentType, NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import "bootstrap/dist/css/bootstrap.css";

import { withDefaultLayout } from "components/organisms/layout/defaultLayout";
import { GlobalStyle } from "utils/styles";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const HeartbitApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component: Page,
  pageProps,
}: AppPropsWithLayout) => {
  const getLayout = Page.getLayout || withDefaultLayout;

  return (
    <RecoilRoot>
      <GlobalStyle />
      {getLayout(<Page {...pageProps} />)}
    </RecoilRoot>
  );
};

export default HeartbitApp;
