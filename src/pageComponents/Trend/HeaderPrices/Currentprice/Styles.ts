import styled from "styled-components";

import { font, mixin, color } from "shared/utils/styles";
import { CurrentPriceProps } from ".";

export const Root = styled.div`
  width: 100%;
  ${mixin.flexSet()}
  flex-direction: column;
`;

export const Name = styled.span`
  ${mixin.flexSet()}
  ${font.size(18)}
  ${font.bold}
  color: ${color.textDarkBlue};
  margin-bottom: 26px;

  > svg {
    margin-right: 12px;
  }
`;

export const Price = styled.span<{
  up: CurrentPriceProps["up"];
  empty: boolean;
}>`
  ${mixin.flexSet()}
  ${font.size(28)}
  color: ${({ up }) => (up ? `${color.green500};` : `${color.red500};`)}
  ${(props) => props.empty && `color: ${color.textMedium}; important;`}
  > svg {
    margin-left: 4px;
  }
`;
