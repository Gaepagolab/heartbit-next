import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";

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

const GlobalStyle = createGlobalStyle(
  {
    body: {
      fontSize: textSizeDefault,
      fontWeight: fontWeightDefault,
      letterSpacing: letterSpacingDefault,
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
      <AuthModal />
    </RecoilRoot>
  );
}
export default MyApp;
