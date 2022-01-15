import styled from "styled-components";
import { useEffect, useState, memo } from "react";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import {
  elderRay,
  ema,
  discontinuousTimeScaleProviderBuilder,
  Chart,
  ChartCanvas,
  CurrentCoordinate,
  BarSeries,
  CandlestickSeries,
  ElderRaySeries,
  LineSeries,
  MovingAverageTooltip,
  OHLCTooltip,
  SingleValueTooltip,
  mouseBasedZoomAnchor,
  XAxis,
  YAxis,
  CrossHairCursor,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
  ZoomButtons,
  withDeviceRatio,
  withSize,
} from "react-financial-charts";
import isEqual from "react-fast-compare";

import { color } from "shared/utils/styles";
import { fetchCsv } from "shared/utils/csv";

const St = {
  ChartContainer: styled.section`
    width: 100%;
    height: 500px;
    background-color: ${color.backgroundDark};
  `,
  HiddenH3: styled.h3`
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0, 0);
    clip-path: polygon(0, 0);
    overflow: hidden;
    text-indent: -9999px;
  `,
};

const barChartExtents = (row: Row) => {
  return row.volume;
};

const candleChartExtents = (row: Row) => {
  return [row.high, row.low];
};

const yEdgeIndicator = (row: Row) => {
  return row.close;
};

const volumeSeries = (row: Row) => {
  return row.volume;
};

const margin = { left: 10, right: 80, top: 20, bottom: 20 };
const minHeight = 350;

interface Row {
  date: Date;
  datetime: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

const MainChart = () => {
  const ratio = 1;
  const width = 950;
  const height = 500;
  const dateTimeFormat = "%y-%m-%d";
  const timeDisplayFormat = timeFormat(dateTimeFormat);
  const pricesDisplayFormat = format("");
  const [rows, setRows] = useState<Row[]>([]);

  const openCloseColor = (row: Row) => {
    return row.close > row.open ? color.green500 : color.red500;
  };

  const volumeColor = (row: Row) => {
    return row.close > row.open ? color.green500 : color.red500;
  };

  const xScaleProvider =
    discontinuousTimeScaleProviderBuilder().inputDateAccessor((d) => d.date);

  const ema12 = ema()
    .id(1)
    .options({ windowSize: 12 })
    .merge((d, c) => {
      d.ema12 = c;
    })
    .accessor((d) => d.ema12);

  const ema26 = ema()
    .id(2)
    .options({ windowSize: 26 })
    .merge((d, c) => {
      d.ema26 = c;
    })
    .accessor((d) => d.ema26);

  const elder = elderRay();

  const calculatedData = elder(ema26(ema12(rows)));

  const { data, xScale, xAccessor, displayXAccessor } =
    xScaleProvider(calculatedData);

  // 확대 축소 초기 범위를 정하는 xExtendts설정, max와 min이 변하면 새로운 데이터 추가시 줌 설정이 풀린다
  const max = xAccessor(data[Math.min(199, data.length - 1)]);
  const min = xAccessor(
    data.length < 50 ? 0 : data[Math.min(50, Math.floor(data.length / 2))]
  );
  const xExtents = [min, max + 5];

  const gridHeight = height - margin.top - margin.bottom;

  const elderRayHeight = 1;
  const elderRayOrigin = (_, h) => [0, h - elderRayHeight];
  const barChartHeight = gridHeight / 4;
  const barChartOrigin = (_, h) => [0, h - barChartHeight - elderRayHeight];
  const chartHeight = gridHeight - elderRayHeight;

  useEffect(() => {
    fetchCsv("/BTC_1d.csv").then((res) => {
      const [_, ...data] = res as any;
      const rows = data.map(
        (d) =>
          ({
            date: new Date(d[0]),
            datetime: d[0],
            open: Number(d[1]),
            high: Number(d[2]),
            low: Number(d[3]),
            close: Number(d[4]),
            volume: Number(d[5]),
          } as Row)
      );
      setRows(rows);
    });
  }, []);

  return (
    <St.ChartContainer>
      <St.HiddenH3>Candle Chart</St.HiddenH3>
      <ChartCanvas
        height={height}
        ratio={ratio}
        width={width}
        margin={margin}
        data={data}
        displayXAccessor={displayXAccessor}
        seriesName="Data"
        xScale={xScale}
        xAccessor={xAccessor}
        xExtents={xExtents}
        disableInteraction={false}
        zoomAnchor={mouseBasedZoomAnchor}
      >
        {/* <Chart
          id={2}
          height={barChartHeight}
          origin={barChartOrigin}
          yExtents={barChartExtents}
        >
          <BarSeries fillStyle={volumeColor} yAccessor={volumeSeries} />
        </Chart> */}
        <Chart id={3} height={chartHeight} yExtents={candleChartExtents}>
          <XAxis
            showGridLines
            gridLinesStrokeStyle={color.textDark}
            showTickLabel={false}
          />
          <YAxis
            showGridLines
            gridLinesStrokeStyle={color.textDark}
            tickFormat={pricesDisplayFormat}
          />
          <CandlestickSeries
            fill={openCloseColor}
            wickStroke={openCloseColor}
          />
          <LineSeries
            yAccessor={ema26.accessor()}
            strokeStyle={ema26.stroke()}
          />
          <CurrentCoordinate
            yAccessor={ema26.accessor()}
            fillStyle={ema26.stroke()}
          />
          <LineSeries
            yAccessor={ema12.accessor()}
            strokeStyle={ema12.stroke()}
          />
          <CurrentCoordinate
            yAccessor={ema12.accessor()}
            fillStyle={ema12.stroke()}
          />
          <MouseCoordinateY
            rectWidth={margin.right}
            displayFormat={pricesDisplayFormat}
          />
          <EdgeIndicator
            itemType="last"
            rectWidth={margin.right}
            fill={openCloseColor}
            lineStroke={openCloseColor}
            displayFormat={pricesDisplayFormat}
            yAccessor={yEdgeIndicator}
          />
          <MovingAverageTooltip
            origin={[8, 24]}
            options={[
              {
                yAccessor: ema26.accessor(),
                type: "EMA",
                stroke: ema26.stroke(),
                windowSize: ema26.options().windowSize,
              },
              {
                yAccessor: ema12.accessor(),
                type: "EMA",
                stroke: ema12.stroke(),
                windowSize: ema12.options().windowSize,
              },
            ]}
          />

          {/* <ZoomButtons /> */}
          <OHLCTooltip origin={[8, 16]} />
        </Chart>
        <Chart
          id={4}
          height={elderRayHeight}
          yExtents={[0, elder.accessor()]}
          origin={elderRayOrigin}
          padding={{ top: 8, bottom: 8 }}
        >
          <XAxis showGridLines gridLinesStrokeStyle={color.textMedum} />
          {/* <YAxis ticks={4} tickFormat={pricesDisplayFormat} /> */}

          <MouseCoordinateX displayFormat={timeDisplayFormat} />
          <MouseCoordinateY
            rectWidth={margin.right}
            displayFormat={pricesDisplayFormat}
          />

          {/* <ElderRaySeries yAccessor={elder.accessor()} /> */}

          {/* <SingleValueTooltip
            yAccessor={elder.accessor()}
            yLabel="Elder Ray"
            yDisplayFormat={(d) =>
              `${pricesDisplayFormat(d.bullPower)}, ${pricesDisplayFormat(
                d.bearPower
              )}`
            }
            origin={[8, 16]}
          /> */}
        </Chart>
        {/* <CrossHairCursor snapX={false} /> */}
      </ChartCanvas>
    </St.ChartContainer>
  );
};

export default withSize({
  style: {
    width: "100%",
    height: "500",
    minHeight,
  },
})(withDeviceRatio()(memo(MainChart, isEqual)));
