import * as React from "react";
import { FC } from "react";
import styled from "styled-components";

import { font, Color, fontWeightHeader } from "utils/styles";

export interface CurrentPriceProps {
  coinName: string;
  price: number;
  up: boolean;
}

const CurrentPrice: FC<CurrentPriceProps> = ({ coinName, price, up }) => {
  return (
    <Root>
      <Name>{coinName}</Name>
      <Price up={up}>
        {price} <small>USD</small>
      </Price>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 96px;
  border-right: 1px solid ${Color.borderMedium};
`;

const Name = styled.span`
  ${font.size(14)}
  font-weight: ${fontWeightHeader};
  color: ${Color.textMedium};
`;
const Price = styled.span<{ up: CurrentPriceProps["up"] }>`
  margin-top: 4px;
  ${font.size(14)}
  color: ${Color.short};
  ${(props) => props.up && `color: ${Color.long};`}
`;

export default CurrentPrice;
