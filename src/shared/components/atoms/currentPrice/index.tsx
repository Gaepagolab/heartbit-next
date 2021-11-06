import { FC } from "react";
import styled from "styled-components";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

import { font, mixin, media } from "shared/utils/styles";

export interface CurrentPriceProps {
  coinName: string;
  price: number;
  up: boolean;
}

const CurrentPrice: FC<CurrentPriceProps> = ({ coinName, price, up }) => {
  return (
    <Root>
      <Name>{coinName}USD</Name>
      <Price up={up}>
        {up ? <BsCaretUpFill /> : <BsCaretDownFill />}
        {price}
      </Price>
    </Root>
  );
};

const Root = styled.div`
  ${mixin.flexSet()}
  flex-direction: column;
`;

const Name = styled.span`
  ${font.size(24)}
`;

const Price = styled.span<{ up: CurrentPriceProps["up"] }>`
  margin-top: 4px;
  ${font.size(22)}

  > svg {
    margin-right: 6px;
  }
`;

export default CurrentPrice;
