import { css } from "styled-components";

export enum Size {
  SMALL = 1,
  MEDIUM,
  LARGE,
}

export interface SizeProps {
  size: Size;
}

export const Color = {
  primary: "#A16EFF", // purple
  secondary: "#9595BD", // blue
  long: "#2E7D31", // green
  short: "#D3302F", // red
  warning: "#F89C1C", // orange
  white: "#ffffff", // white
  black: "#050505", // black
  textDarkest: "#1C273C",
  textDark: "#172b4d",
  textMedium: "#8993a4",
  textLight: "#f0ffff",

  backgroundDark: "#0C0C12",
  backgroundMedium: "#262A3C",
  backgroundLight: "#252C38",
  backgroundModal: "#222222",

  borderDark: "#1c273c",
  borderMedium: "#8993a4",

  transparncy: "rgba(0, 0, 0, 0.4)",
};

export const font = {
  regular: 'font-family: "CircularStdBook"; font-weight: normal;',
  medium: 'font-family: "CircularStdMedium"; font-weight: normal;',
  bold: 'font-family: "CircularStdBold"; font-weight: normal;',
  black: 'font-family: "CircularStdBlack"; font-weight: normal;',
  size: (size: number) => `font-size: ${size}px;`,
};

export const zIndexValues = {
  modal: 1000,
  dropdown: 101,
  header: 100,
  sidbar: 99,
};

export const SizeDefault: number = 16;

export const textSizeDefault: number = 16;
export const textSizeHeader: number = textSizeDefault * 1.125;
export const textSizeSecondary: number = textSizeDefault * 0.8125;

export const letterSpacingDefault: string = "-0.5px";
export const letterSpacingSecondary: string = "-0.2px";

export const fontWeightHeader: number = 700;
export const fontWeightDefault: number = 500;
export const fontWeightSecondary: number = 400;

export const navbarHeight = 64;
export const sidebarWidth = 248;

export const mixin = {
  boxShadowMedium: css`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  `,
  boxShadowLarge: css`
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  `,
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  hardwareAccelerate: css`
    transform: translateZ(0);
  `,
  cover: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  link: (colorValue = Color.textMedium) => css`
    cursor: pointer;
    color: ${colorValue};
    text-decoration: none;
    &:hover,
    &:visited,
    &:active {
      color: ${colorValue};
    }
    &:hover {
      color: ${Color.textDark};
    }
  `,
  backgroundImage: (imageURL: string) => css`
    background-image: url("${imageURL}");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${Color.backgroundDark};
  `,
};

const mediaQuery = (maxWidth: number) => `
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
