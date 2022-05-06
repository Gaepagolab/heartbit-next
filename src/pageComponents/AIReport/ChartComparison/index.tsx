import qs from "qs";
import useSWR from "swr";
import moment from "moment";

import * as S from "./Styles";
import { MainChart } from "shared/components";
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
      <OHLCVChart candle={candle} type={CHART_TYPE.CURRENT} />
      <OHLCVChart candle={candle} type={CHART_TYPE.FIND} />
    </S.Root>
  );
}

function OHLCVChart({ candle, type }: { candle: Candle; type: CHART_TYPE }) {
  const extraDuration = 2000;
  const candleEnum = enumToArray(CandleType).find((c) => c === candle.type);

  const start = candle.result[`${type}Start`];
  const end = candle.result[`${type}End`];

  const extendedFrom = moment(start).subtract(
    CandleTypeAmount[candleEnum] * extraDuration,
    CandleTypeUnit[candleEnum]
  );
  const extendedTo = moment(end).add(
    CandleTypeAmount[candleEnum] * extraDuration,
    CandleTypeUnit[candleEnum]
  );

  const { data: ohlcvs, error } = useSWR<OHLCV[]>(
    [start, end].every((d) => d !== null)
      ? `/ohlcvs?${qs.stringify({
          candleId: candle.id,
          from: extendedFrom.format(),
          to: extendedTo.format(),
        })}`
      : null
  );

  return (
    <S.ChartWrapper>
      <S.ChartType>{CHART_TYPE_KR[type]}</S.ChartType>
      {Array.exists(ohlcvs) && (
        <MainChart ohlcvs={ohlcvs} start={start} end={end} />
      )}
      {error !== undefined && <S.Error>{JSON.stringify(error)}</S.Error>}
    </S.ChartWrapper>
  );
}
