import { PointTooltip, ResponsiveLine, Serie } from '@nivo/line';

type NivoLiveChartProps = {
  graphData: readonly Serie[];
  bottomTickValues?: string[];
  colors?: string[];
  tooltip?: PointTooltip;
  axisRightLegend?: string;
  axisBottomLegend?: string;
  axisRightTickFactor?: number;
  margins?: number;
};

export const NivoLineChart = ({
  graphData,
  bottomTickValues,
  colors,
  tooltip,
  axisRightLegend,
  margins,
  axisRightTickFactor = 1
}: NivoLiveChartProps) => {
  return (
    <ResponsiveLine
      data={graphData}
      isInteractive={true}
      useMesh={true}
      colors={colors}
      margin={{ top: 40, right: margins, bottom: 80, left: margins }}
      axisTop={null}
      axisLeft={null}
      axisBottom={null}
      lineWidth={3}
      pointColor="#ED8DAE"
      pointBorderColor="#FFF"
      pointBorderWidth={2}
      pointSize={8}
      enableGridX={false}
      enableGridY={false}
      yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
      enableCrosshair={true}
      crosshairType="bottom-right"
      axisRight={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: axisRightLegend,
        legendPosition: 'middle',
        legendOffset: 80,
        truncateTickAt: 0,
        tickValues: 5, //number of tickvalues displayed along the ax
        renderTick: (e) => {
          return (
            <g transform={`translate(${e.x},${e.y})`}>
              <text
                x={50}
                y={5}
                textAnchor="middle"
                style={{
                  fill: 'black',
                  fontSize: 12,
                  fontWeight: 400
                }}
              >
                {(e.value / axisRightTickFactor) % 1 != 0
                  ? ''
                  : e.value / axisRightTickFactor}
              </text>
            </g>
          );
        }
      }}
      tooltip={tooltip}
      role="application"
    />
  );
};
