import { Any } from '@/lib/utils/types';
import {
  BarDatum,
  BarLegendProps,
  BarTooltipProps,
  ResponsiveBar
} from '@nivo/bar';
import { JSX } from 'react';

type Datum = {
  id: string | number;
  label: string | number;
  hidden?: boolean;
  color?: string;
  fill?: string;
};

const legendProps: BarLegendProps = {
  dataFrom: 'keys',
  anchor: 'bottom-right',
  direction: 'column',
  justify: false,
  translateX: 120,
  translateY: 0,
  itemsSpacing: 2,
  itemWidth: 100,
  itemHeight: 25,
  itemDirection: 'left-to-right',
  itemOpacity: 0.85,
  symbolSize: 20
};

type NivoBarChartProps = {
  graphData: BarDatum[];
  keys: string[];
  indexBy: string;
  bottomTickValues?: string[];
  colors?: string[];
  legendData?: Datum[];
  tooltip?: ({ data }: BarTooltipProps<BarDatum>) => JSX.Element;
  axisLeftLegend?: string;
  axisBottomLegend?: string;
  axisLeftTickFactor?: number;
  groupMode?: 'grouped' | 'stacked' | undefined;
  showLegend?: boolean;
};

export const NivoBarChart = ({
  graphData,
  keys,
  indexBy,
  bottomTickValues,
  colors,
  legendData,
  tooltip,
  axisLeftLegend,
  axisBottomLegend,
  axisLeftTickFactor = 1,
  groupMode = 'stacked',
  showLegend = true
}: NivoBarChartProps) => {
  return (
    <ResponsiveBar
      data={graphData}
      keys={keys}
      isFocusable={true}
      indexBy={indexBy}
      colors={colors}
      margin={
        showLegend
          ? { top: 40, right: 200, bottom: 80, left: 80 }
          : { top: 40, right: 80, bottom: 80, left: 80 }
      }
      groupMode={groupMode}
      padding={0.3}
      innerPadding={2}
      borderRadius={1}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickValues: bottomTickValues,
        tickSize: 0,
        tickPadding: 15,
        legend: axisBottomLegend,
        legendOffset: 50,
        legendPosition: 'middle',
        renderTick: (e: Any) => {
          return (
            <g transform={`translate(${e.x},${e.y})`}>
              <text
                x={0}
                y={10}
                dy={16}
                textAnchor="middle"
                style={{
                  fill: 'black',
                  fontSize: 12,
                  fontWeight: 400
                }}
              >
                {e.value}
              </text>
            </g>
          );
        }
      }}
      gridYValues={5}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: axisLeftLegend,
        legendPosition: 'middle',
        legendOffset: -50,
        truncateTickAt: 0,
        tickValues: 5, //number of tickvalues displayed along the ax
        renderTick: (e) => {
          return (
            <g transform={`translate(${e.x},${e.y})`}>
              <text
                x={-20}
                y={5}
                textAnchor="middle"
                style={{
                  fill: 'black',
                  fontSize: 12,
                  fontWeight: 400
                }}
              >
                {(e.value / axisLeftTickFactor) % 1 != 0
                  ? ''
                  : e.value / axisLeftTickFactor}
              </text>
            </g>
          );
        }
      }}
      enableLabel={false}
      legends={
        showLegend
          ? [
            {
              ...legendProps,
              data: legendData,
            }
          ]
          : []
      }
      tooltip={tooltip}
      role="application"
    />
  );
};

export const NewNivoBarChart = ({
  graphData,
  keys,
  indexBy,
  bottomTickValues,
  colors,
  legendData,
  tooltip,
  axisLeftLegend,
  axisBottomLegend,
  axisLeftTickFactor = 1,
  groupMode = 'stacked',
  showLegend = true
}: NivoBarChartProps) => {
  return (
    <ResponsiveBar
      data={graphData}
      keys={keys}
      isFocusable={true}
      indexBy={indexBy}
      colors={colors}
      margin={
        showLegend
          ? { top: 40, right: 80, bottom: 80, left: 80 }
          : { top: 40, right: 80, bottom: 80, left: 80 }
      }
      groupMode={groupMode}
      padding={0.3}
      innerPadding={2}
      borderRadius={1}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickValues: bottomTickValues,
        tickSize: 0,
        tickPadding: 15,
        legend: axisBottomLegend,
        legendOffset: 50,
        legendPosition: 'middle',
        renderTick: (e: Any) => {
          return (
            <g transform={`translate(${e.x},${e.y})`}>
              <text
                x={0}
                y={10}
                dy={16}
                textAnchor="middle"
                style={{
                  fill: 'black',
                  fontSize: 12,
                  fontWeight: 400
                }}
              >
                {e.value}
              </text>
            </g>
          );
        }
      }}
      gridYValues={5}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: axisLeftLegend,
        legendPosition: 'middle',
        legendOffset: -50,
        truncateTickAt: 0,
        tickValues: 5, //number of tickvalues displayed along the ax
        renderTick: (e) => {
          return (
            <g transform={`translate(${e.x},${e.y})`}>
              <text
                x={-20}
                y={5}
                textAnchor="middle"
                style={{
                  fill: 'black',
                  fontSize: 12,
                  fontWeight: 400
                }}
              >
                {(e.value / axisLeftTickFactor) % 1 != 0
                  ? ''
                  : e.value / axisLeftTickFactor}
              </text>
            </g>
          );
        }
      }}
      enableLabel={false}
      legends={
        showLegend
          ? [
            {
              ...legendProps,
              data: legendData,
              direction: "row",
              anchor: "bottom",
              translateX: 0,
              translateY: 70,
              itemsSpacing: 50,
            }
          ]
          : []
      }
      tooltip={tooltip}
      role="application"
    />
  );
};
