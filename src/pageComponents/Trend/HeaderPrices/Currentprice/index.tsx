import { FC } from "react";

import { Icon, IconType } from "shared/components";
import * as S from "./Styles";

export interface CurrentPriceProps {
  coinName: IconType;
  price: number;
  up: boolean;
}

const CurrentPrice: FC<CurrentPriceProps> = ({ coinName, price, up }) => {
  return (
    <S.Root>
      <S.Name>
        <Icon name={coinName} />
        {coinName}USD
      </S.Name>
      <S.Price up={up} empty={price === 0}>
        {up ? "+" : "-"}
        {price}
        {up ? <Icon name="arrow_up" /> : <Icon name="arrow_down" />}
      </S.Price>
    </S.Root>
  );
};

export default CurrentPrice;
