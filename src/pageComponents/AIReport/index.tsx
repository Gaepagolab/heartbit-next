import * as S from "./Styles";
import { Candle } from "shared/types";
import useFetch from "shared/hooks/useFetch";
import { API_SERVER_ENDPOINT } from "shared/constants/env";

export default function AIReport() {
  const { data: candles = [], error } = useFetch<Candle[]>(
    `${API_SERVER_ENDPOINT}/candles?coinId=1`
  );

  return (
    <S.Root>
      <S.Header>
        <S.Title>AI Report</S.Title>
      </S.Header>
      <S.Body>
        <S.Banner>
          <S.Coin>비트 코인</S.Coin>
          <S.Actions>
            {candles.map((candle) => (
              <span key={candle.id}>{candle.type}</span>
            ))}
          </S.Actions>
        </S.Banner>
      </S.Body>
    </S.Root>
  );
}
