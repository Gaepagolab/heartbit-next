import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import NormalizeStyles from "core/styles/NormalizeStyles";
import BaseStyles from "core/styles/BaseStyles";
import "core/styles/fontStyles.css";

import recoilInitializer from "shared/atoms/recoilInitializer";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function ZoomableApp({
  Component: Page,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout = Page.getLayout ?? ((page) => page);

  return (
    <RecoilRoot initializeState={recoilInitializer}>
      {getLayout(<Page {...pageProps} />)}
      <NormalizeStyles />
      <BaseStyles />
    </RecoilRoot>
  );
}
