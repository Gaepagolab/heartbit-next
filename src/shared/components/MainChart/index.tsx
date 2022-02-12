import { memo } from "react";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import {
  elderRay,
  ema,
  discontinuousTimeScaleProviderBuilder,
  Chart,
  ChartCanvas,
  CandlestickSeries,
  CrossHairCursor,
  OHLCTooltip,
  mouseBasedZoomAnchor,
  XAxis,
  YAxis,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
  withDeviceRatio,
  withSize,
} from "react-financial-charts";
import isEqual from "react-fast-compare";

import * as S from "./Styles";
import { color } from "shared/utils/styles";

interface Row {
  date: Date;
  datetime: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface Criterion {
  current_end: Date;
  current_start: Date;
  find_end: Date;
  find_start: Date;
}

const candleChartExtents = (row: Row) => {
  return [row.high, row.low];
};

const yEdgeIndicator = (row: Row) => {
  return row.close;
};

const barChartExtents = (row: Row) => {
  return row.volume;
};

const volumeColor = (row: Row) => {
  return row.close > row.open
    ? "rgba(38, 166, 154, 0.3)"
    : "rgba(239, 83, 80, 0.3)";
};

const volumeSeries = (data) => {
  return data.volume;
};

const margin = { left: 10, right: 80, top: 20, bottom: 20 };
const minHeight = 350;

export interface MainChartProps {
  rows: Array<Row>;
  end: string;
  start: string;
}

const MainChart = ({ rows, end, start }: MainChartProps) => {
  const ratio = 1;
  const width = 840;
  const height = 500;
  const dateTimeFormat = "%y-%m-%d";
  const timeDisplayFormat = timeFormat(dateTimeFormat);
  const pricesDisplayFormat = format("");

  const openCloseColor = (row: Row) =>
    row.close > row.open ? color.green500 : color.red500;

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

  const findMax = xAccessor(data.find((d) => d.datetime.split(" ")[0] === end));
  const findMin = xAccessor(
    data.find((d) => d.datetime.split(" ")[0] === start)
  );

  const xExtents = [findMin - 5, findMax + 5];

  const gridHeight = height - margin.top - margin.bottom;

  const elderRayHeight = 1;

  const chartHeight = gridHeight - elderRayHeight;
  const barChartHeight = gridHeight / 4;
  const barChartOrigin = (_, h) => [0, h - barChartHeight - elderRayHeight];

  return (
    <S.Root>
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
          <CandlestickSeries
            fill={openCloseColor}
            wickStroke={openCloseColor}
          />
          <XAxis
            showGridLines
            tickLabelFill={color.textWhite}
            gridLinesStrokeStyle={color.textMedium}
          />
          <MouseCoordinateX displayFormat={timeDisplayFormat} />
          <YAxis
            showGridLines
            tickLabelFill={color.textWhite}
            gridLinesStrokeStyle={color.textDark}
            tickFormat={pricesDisplayFormat}
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
          <OHLCTooltip origin={[8, 16]} textFill={color.textWhite} />
          <CrossHairCursor snapX={false} />
        </Chart>
      </ChartCanvas>
    </S.Root>
  );
};

export default withSize({
  style: {
    width: "100%",
    height: "500",
    minHeight,
  },
})(withDeviceRatio()(memo(MainChart, isEqual)));