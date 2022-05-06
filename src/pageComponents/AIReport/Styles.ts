import styled, { css } from "styled-components";

import { mixin, color, font } from "shared/utils/styles";

export const Root = styled.div`
  padding: 16px 32px;
`;

export const Header = styled.header`
  margin-bottom: 60px;
`;

export const Title = styled.h3`
  margin-bottom: 0;
  color: ${color.textDarkest};
  font-weight: 900;
  ${font.size(60)}
  line-height: 87px;
`;

export const Body = styled.div``;

export const Banner = styled.div`
  width: 100%;
  height: 80px;
  background: ${color.backgroundDark};
  box-shadow: 0px 8px 50px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  ${mixin.flexSet("space-between")}
  padding: 16px 48px;
`;

export const Coin = styled.div`
  ${font.bold}
  ${font.size(24)}
  line-height: 35px;
`;
