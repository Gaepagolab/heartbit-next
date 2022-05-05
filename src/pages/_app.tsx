import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import NormalizeStyles from "core/styles/NormalizeStyles";
import BaseStyles from "core/styles/BaseStyles";
import "core/styles/fontStyles.css";

import "shared/utils/array";
import recoilInitializer from "shared/atoms/recoilInitializer";
import withDefaultLayout from "core/layout/withDefaultLayout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function HeartbitApp({
  Component: Page,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout = Page.getLayout || withDefaultLayout;

  return (
    <RecoilRoot initializeState={recoilInitializer}>
      <NormalizeStyles />
      <BaseStyles />
      {getLayout(<Page {...pageProps} />)}
    </RecoilRoot>
  );
}
