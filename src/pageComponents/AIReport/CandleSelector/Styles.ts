import styled, { css } from "styled-components";

import { color, font, mixin } from "shared/utils/styles";

export const Root = styled.div`
  ${mixin.flexSet()}
  height: 46px;
  background: ${color.backgroundDarkest};
  border-radius: 12px;
`;

export const CandleItem = styled.div<{ active: boolean }>`
  ${mixin.flexSet()}
  height: 100%;
  width: 80px;
  ${font.size(20)}
  ${font.bold}
${mixin.clickable}
color: ${color.textDark};
  line-height: 29px;
  border-radius: 12px;
  opacity: 0.5;

  ${(props) =>
    props.active &&
    css`
      border: 2px solid ${color.textWhite};
      color: ${color.primary};
      opacity: 1;
    `}
`;
