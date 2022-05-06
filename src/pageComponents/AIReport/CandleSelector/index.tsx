import { Fragment } from "react";

import * as S from "./Styles";
import { Candle } from "shared/types";

interface CandleSelectorProps {
  candles?: Candle[];
  activeCandle?: Candle;
  onClick: (candle: Candle) => void;
}

function CandleSelector({
  candles,
  activeCandle,
  onClick,
}: CandleSelectorProps) {
  return (
    <Fragment>
      {Array.exists(candles) && (
        <S.Root>
          {candles.map((candle) => (
            <S.CandleItem
              key={candle.id}
              active={activeCandle?.id === candle.id}
              onClick={() => onClick(candle)}
            >
              {candle.type}
            </S.CandleItem>
          ))}
        </S.Root>
      )}
    </Fragment>
  );
}

export default CandleSelector;
