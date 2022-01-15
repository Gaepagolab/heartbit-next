import { css } from "styled-components";

export const color = {
  green500: "#54AB87",
  red500: "#EB5356",
  grey500: "#1E2733",

  priceUp: "rgb(210, 79, 69)",
  priceDown: "rgb(18, 97, 196)",
  priceUpTrans: "rgba(210, 79, 69, 0.5)",
  priceDownTrans: "rgba(18, 97, 196, 0.5)",

  textWhite: "#ffffff",
  textMedum: "#8D97B1",
  textDarkBlue: "#6C789A",
  textDark: "#48516C",

  backgroundMedium: "#121821",
  backgroundDarkest: "#0C1117",
  backgroundDark: "#161E28",

  borderDark: "#858d9e",
  borderLightest: "#EBECF1",
  borderLight: "#dee0e5",
};

export const size = {
  navigationWidth: 140,
};

export const zIndexValues = {
  navigation: 2,
  modal: 9999,
};

export const font = {
  regular: 'font-family: "NotoSansRegular"; font-weight: normal;',
  medium: 'font-family: "NotoSansMedium"; font-weight: normal;',
  bold: 'font-family: "NotoSansBold"; font-weight: normal;',
  black: 'font-family: "NotoSansBlack"; font-weight: normal;',
  size: (size: number) => `font-size: ${size}px;`,
};

export const mixin = {
  flexSet: (justify = "center", align = "center") => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,
  placeholderColor: (colorValue: string) => css`
    ::-webkit-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    ::-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-ms-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
  `,
  customScrollbar: ({
    width = 6,
    height = 6,
    background = color.backgroundDark,
  } = {}) => css`
    &::-webkit-scrollbar {
      width: ${width}px;
      height: ${height}px;
    }
    &::-webkit-scrollbar-track {
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 99px;
      background: ${background};
    }
  `,
  boxShadow: css`
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
    pointer-events: all;
  `,
  unClickable: css`
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  `,
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
};

export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

export const media = {
  xxlarge: mediaQuery(1920),
  xlarge: mediaQuery(1440),
  large: mediaQuery(1200),
  medium: mediaQuery(1024),
  small: mediaQuery(768),
  xsmall: mediaQuery(375),
  custom: mediaQuery,
};
