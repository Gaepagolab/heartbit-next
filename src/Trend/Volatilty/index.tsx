import { FC } from "react";

import * as S from "./Styles";
import { ButtonsTab } from "shared/components";

export interface VolatiltyProps {
  type: "up" | "down";
}

export const VoltalityType = {
  up: "상승",
  down: "하락",
};

const tabItems = [
  { id: 1, name: "3min" },
  { id: 2, name: "5min" },
];

const Volatilty: FC<VolatiltyProps> = ({ type }) => {
  const handleTabClick = () => {};

  return (
    <S.Root>
      <S.Header>
        <S.Title>
          가격 변동성 {VoltalityType[type]} TOP5 <br />
          <small>(업비트 기준)</small>
        </S.Title>
        <ButtonsTab
          width="116px"
          height="24px"
          items={tabItems}
          onClick={handleTabClick}
        />
      </S.Header>
      <S.Content></S.Content>
    </S.Root>
  );
};

export default Volatilty;
