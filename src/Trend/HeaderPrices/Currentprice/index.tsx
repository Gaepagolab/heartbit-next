import { FC } from "react";

import { Icon, IconType } from "shared/components";
import { Name, Price, Root } from "./Styles";

export interface CurrentPriceProps {
  coinName: IconType;
  price: number;
  up: boolean;
}

const CurrentPrice: FC<CurrentPriceProps> = ({ coinName, price, up }) => {
  return (
    <Root>
      <Name>
        <Icon name={coinName} />
        {coinName}USD
      </Name>
      <Price up={up}>
        {up ? "+" : "-"}
        {price}
        {up ? <Icon name="arrow_up" /> : <Icon name="arrow_down" />}
      </Price>
    </Root>
  );
};

export default CurrentPrice;
