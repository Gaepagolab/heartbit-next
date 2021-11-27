import styled, { css } from "styled-components";

import { color, font, mixin, size } from "shared/utils/styles";

const textHover = css`
  &:hover {
    color: ${color.textMedium};
  }
`;

export const Root = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${size.navigationWidth}px;
`;

export const Header = styled.div`
  ${mixin.flexSet()}
  height: 64px;
`;
export const Body = styled.div`
  padding: 24px 0;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 24px;
  width: 100%;
  padding: 16px;
`;

export const Logo = styled.div`
  ${font.bold}
  ${font.size(22)}
`;

export const LinkItem = styled.div<{ active: boolean }>`
  height: 112px;
  color: ${color.textDark};
  ${mixin.flexSet()}
  flex-direction: column;
  ${textHover}

  ${(props) =>
    props.active &&
    css`
      color: ${color.textWhite} !important;
      ${font.bold}
    `}
`;

export const LinkText = styled.div`
  ${font.size(15)}
  line-height: 18px;
  margin-top: 10px;
`;

export const UserArea = styled.div`
  height: 88px;
  ${mixin.flexSet()}
  flex-direction: column;
  border-radius: 12px;
  background: ${color.backgroundMedium};
  color: ${color.textDark};
  ${mixin.clickable}
  ${textHover}
  > svg {
    margin-bottom: 10px;
  }
`;
