import type { AppContext, AppInitialProps, AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
import { NextComponentType, NextPage } from "next";
import { ReactElement, ReactNode } from "react";

import {
  textSizeDefault,
  fontWeightDefault,
  letterSpacingDefault,
  Color,
  textSizeSecondary,
  fontWeightSecondary,
  letterSpacingSecondary,
} from "utils/styles";
import { AuthModal } from "components/organisms";
import { withDefaultLayout } from "../components/organisms/layout/defaultLayout";

const GlobalStyle = createGlobalStyle(
  {
    body: {
      fontSize: textSizeDefault,
      fontWeight: fontWeightDefault,
      letterSpacing: letterSpacingDefault,
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      backgroundColor: Color.backgroundDark,
    },
    "body, input, select, textarea": {
      fontFamily: `'Noto sans KR', sans-serif`,
      color: Color.textLight,
    },
    "p, span": {
      margin: "0",
      padding: "0",
      fontSize: textSizeSecondary,
      fontWeight: fontWeightSecondary,
      color: Color.secondary,
      letterSpacing: letterSpacingSecondary,
    },
    "h1, h2, h3": {
      margin: "0",
      padding: "0",
    },
  },
  normalize
);

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
      <AuthModal />
    </RecoilRoot>
  );
};

export default HeartbitApp;
