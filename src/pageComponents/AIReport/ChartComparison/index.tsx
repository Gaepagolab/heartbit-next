import qs from "qs";
import useSWR from "swr";
import moment from "moment";

import * as S from "./Styles";
import { MainChart, Loading } from "shared/components";
import { Candle, CandleType, OHLCV } from "shared/types";

import { CandleTypeAmount, CandleTypeUnit } from "shared/constants/candle";
import { enumToArray } from "shared/utils/convert";
import { CHART_TYPE, CHART_TYPE_KR } from "shared/constants/chart";

interface ChartComparisonProps {
  candle: Candle;
}

export default function ChartComparison({ candle }: ChartComparisonProps) {
  return (
    <S.Root>
      <S.ChartWrapper>
        <S.ChartType>{CHART_TYPE_KR[CHART_TYPE.CURRENT]}</S.ChartType>
        <OHLCVChart candle={candle} type={CHART_TYPE.CURRENT} />
      </S.ChartWrapper>
      <S.ChartWrapper>
        <S.ChartType>{CHART_TYPE_KR[CHART_TYPE.FIND]}</S.ChartType>
        <OHLCVChart candle={candle} type={CHART_TYPE.FIND} />
      </S.ChartWrapper>
    </S.Root>
  );
}

function OHLCVChart({ candle, type }: { candle: Candle; type: CHART_TYPE }) {
  const extraDuration = 2000;
  const candleEnum = enumToArray(CandleType).find((c) => c === candle.type);

  const start = candle.result[`${type}Start`];
  const end = candle.result[`${type}End`];
  console.log(start);
  const extendedFrom = moment(start).subtract(
    CandleTypeAmount[candleEnum] * extraDuration,
    CandleTypeUnit[candleEnum]
  );
  const extendedTo = moment(end).add(
    CandleTypeAmount[candleEnum] * extraDuration,
    CandleTypeUnit[candleEnum]
  );

  const validToFetch = [start, end].every((d) => d !== null);

  const { data: ohlcvs, error } = useSWR<OHLCV[]>(
    validToFetch
      ? `/ohlcvs?${qs.stringify({
          candleId: candle.id,
          from: extendedFrom.format(),
          to: extendedTo.format(),
        })}`
      : null
  );

  if (!validToFetch) return <S.Empty>유사한 구간을 찾지 못하였습니다.</S.Empty>;
  if (ohlcvs === undefined) return <Loading />;

  return (
    <S.ChartWrapper>
      {ohlcvs.exists() && <MainChart ohlcvs={ohlcvs} start={start} end={end} />}
      {error !== undefined && <S.Error>{JSON.stringify(error)}</S.Error>}
    </S.ChartWrapper>
  );
}
