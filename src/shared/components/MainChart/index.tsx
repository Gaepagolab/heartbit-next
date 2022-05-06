import { Component, memo } from "react";
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
  BarSeries,
  mouseBasedZoomAnchor,
  XAxis,
  YAxis,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
  withDeviceRatio,
  withSize,
  WithSizeProps,
  WithRatioProps,
} from "react-financial-charts";

import { color } from "shared/utils/styles";
import { OHLCV } from "shared/types";

export type MainChartProps = {
  ohlcvs: OHLCV[];
  start?: Date;
  end?: Date;
  priceFormat?: string;
  dateTimeFormat?: string;
  margin?: { top: number; bottom: number; left: number; right: number };
} & WithSizeProps &
  WithRatioProps;

const axisStyles = {
  strokeStyle: "#383E55", // Color.GRAY
  strokeWidth: 2,
  tickLabelFill: "#9EAAC7", // Color.LIGHT_GRAY
  tickStrokeStyle: "#383E55",
  gridLinesStrokeStyle: "rgba(56, 62, 85, 0.5)", // Color.GRAY w Opacity
};

function MainChart({
  ohlcvs,
  end,
  start,
  width,
  height,
  ratio,
  dateTimeFormat,
  priceFormat,
  margin,
}: MainChartProps) {
  const priceDispalyFormat = format(priceFormat);
  const timeDisplayFormat = timeFormat(dateTimeFormat);

  const xScaleProvider =
    discontinuousTimeScaleProviderBuilder().inputDateAccessor(
      ({ datetime }) => new Date(datetime)
    );

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

  const calculatedData = elder(ema26(ema12(ohlcvs)));

  const { data, xScale, xAccessor, displayXAccessor } =
    xScaleProvider(calculatedData);

  const findMin = xAccessor(
    data.find(({ datetime }) => dateCompare(datetime, start))
  );
  const findMax = xAccessor(
    data.find(({ datetime }) => dateCompare(datetime, end))
  );

  const xExtents = [findMin - 5, findMax + 5];

  const max = xAccessor(data[data.length - 1]);
  const min = xAccessor(data[Math.max(0, data.length - 100)]);
  // const xExtents = [min, max + 5];

  const gridHeight = height - margin.top - margin.bottom;

  const elderRayHeight = 1;

  const chartHeight = gridHeight - elderRayHeight;
  const barChartHeight = gridHeight / 4;
  const barChartOrigin = (_, h) => [0, h - barChartHeight - elderRayHeight];

  return (
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
      <Chart
        id={2}
        height={barChartHeight}
        origin={barChartOrigin}
        yExtents={barChartExtents}
      >
        <BarSeries fillStyle={volumeColor} yAccessor={volumeSeries} />
      </Chart>
      <Chart id={3} height={chartHeight} yExtents={candleChartExtents}>
        <CandlestickSeries fill={openCloseColor} wickStroke={openCloseColor} />
        <XAxis showGridLines {...axisStyles} />
        <MouseCoordinateX displayFormat={timeDisplayFormat} />
        <YAxis showGridLines tickFormat={priceDispalyFormat} {...axisStyles} />
        <MouseCoordinateY
          rectWidth={margin.right}
          displayFormat={priceDispalyFormat}
        />
        <EdgeIndicator
          itemType="last"
          rectWidth={margin.right}
          fill={openCloseColor}
          lineStroke={openCloseColor}
          displayFormat={priceDispalyFormat}
          yAccessor={yEdgeIndicator}
        />
        <OHLCTooltip origin={[8, 16]} textFill={openCloseColor} />
        <CrossHairCursor snapX={false} />
      </Chart>
    </ChartCanvas>
  );
}

const candleChartExtents = (ohlcv: OHLCV) => {
  return [ohlcv.high, ohlcv.low];
};

const yEdgeIndicator = (ohlcv: OHLCV) => {
  return ohlcv.close;
};

const barChartExtents = (ohlcv: OHLCV) => {
  return ohlcv.volume;
};

const openCloseColor = (ohlcv: OHLCV) =>
  ohlcv.close > ohlcv.open ? color.green500 : color.red500;

const volumeColor = (ohlcv: OHLCV) => {
  return ohlcv.close > ohlcv.open ? `${color.green500}50` : `${color.red500}50`;
};

const volumeSeries = (ohlcv: OHLCV) => {
  return ohlcv.volume;
};

const dateCompare = (date1: Date, date2: Date) =>
  new Date(date1).getTime() === new Date(date2).getTime();

MainChart.defaultProps = {
  dateTimeFormat: "%d %b '%y",
  priceFormat: ".2f",
  margin: { left: 10, right: 80, top: 20, bottom: 20 },
  width: 0,
  height: 0,
  ratio: 0,
};

class MainChartClassComponent extends Component<MainChartProps> {
  render() {
    return <MainChart {...this.props} />;
  }
}

export default memo(
  withSize({ style: { minHeight: 280, maxHeight: 344 } })(
    withDeviceRatio()(MainChartClassComponent)
  )
);
