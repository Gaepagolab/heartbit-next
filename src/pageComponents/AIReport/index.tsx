import { useCallback, useEffect, useState } from "react";

import * as S from "./Styles";
import { Candle, Coin } from "shared/types";
import useFetch from "shared/hooks/useFetch";
import { API_SERVER_ENDPOINT } from "shared/constants/env";
import ChartComparison from "./ChartComparison";
import { CoinKR } from "../../shared/constants/coin";
import CandleSelector from "./CandleSelector";

const PROTOTYPE_COIN = "BTC";

export default function AIReport() {
  const { data: coin, error } = useFetch<Coin>(
    `${API_SERVER_ENDPOINT}/coins/${PROTOTYPE_COIN}`
  );

  const [activeCandle, setActiveCandle] = useState<Candle>();

  const handleActiveCandle = useCallback((candle: Candle) => {
    setActiveCandle(candle);
  }, []);

  useEffect(() => {
    if (Array.exists(coin?.candles)) {
      setActiveCandle(coin?.candles[0]);
    }
  }, [coin]);

  return (
    <S.Root>
      <S.Header>
        <S.Title>AI Report</S.Title>
      </S.Header>
      <S.Body>
        {coin !== undefined && (
          <S.Banner>
            <S.Coin>{CoinKR[coin.name]}</S.Coin>
            <CandleSelector
              candles={coin.candles}
              onClick={handleActiveCandle}
              activeCandle={activeCandle}
            />
          </S.Banner>
        )}
        {activeCandle !== undefined && (
          <ChartComparison candle={activeCandle} />
        )}
      </S.Body>
    </S.Root>
  );
}
