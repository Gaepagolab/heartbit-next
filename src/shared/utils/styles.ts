import { css } from "styled-components";

export const color = {
  green100: "#e6f7ef",
  green200: "#c2ead7",
  green300: "#88d6b2",
  green400: "#54c694", // primary hover
  green500: "#0fba7f", // primary, tagBorder active
  green600: "#05aa73",
  green700: "#008f60", // primary active
  green800: "#0f6e60",
  green900: "#114f53",

  grayWhite: "#ffffff",
  gray50: "#f9fafe",
  gray100: "#f2f4f8",
  gray200: "#dfe3ec",
  gray300: "#d1d7e7",
  gray400: "#8f98bb",
  gray500: "#636E96",
  gray600: "#48577e",
  gray700: "#303d5d",
  gray800: "#1c2742",
  gray900: "#0c142b",

  red500: "#ED605B",

  textWhite: "#ffffff",
  textLightest: "#b8bfd0",
  textLight: "#858d9e",
  textMedium: "#1d2024",
  textLightBlue: "#636E96",

  borderDark: "#858d9e",
  borderLightest: "#EBECF1",
  borderLight: "#dee0e5",
};

export const size = {
  navigationWidth: 240,
  foldednavigationWidth: 16,
};

export const zIndexValues = {
  navigation: 2,
  modal: 9999,
};

export const font = {
  regular: 'font-family: "InterRegular"; font-weight: normal;',
  medium: 'font-family: "InterMedium"; font-weight: normal;',
  bold: 'font-family: "InterBold"; font-weight: normal;',
  black: 'font-family: "InterBlack"; font-weight: normal;',
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
    background = color.gray200,
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
