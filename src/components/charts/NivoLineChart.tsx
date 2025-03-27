import { PointTooltip, ResponsiveLine, Serie } from '@nivo/line';

type NivoLiveChartProps = {
  graphData: readonly Serie[];
  bottomTickValues?: string[];
  colors?: string[];
  tooltip?: PointTooltip;
  axisRightLegend?: string;
  axisBottomLegend?: string;
  axisRightTickFactor?: number;
  dataLength: number;
};

export const NivoLineChart = ({
  graphData,
  bottomTickValues,
  colors,
  tooltip,
  axisRightLegend,
  dataLength,
  axisRightTickFactor = 1
}: NivoLiveChartProps) => {
  // Polynôme pour calculer les margins autour du LineGraph
  const margins =
    -0.00158153 * Math.pow(dataLength, 5) +
    0.091504 * Math.pow(dataLength, 4) -
    2.03904 * Math.pow(dataLength, 3) +
    22.1197 * Math.pow(dataLength, 2) -
    121.577 * dataLength +
    403.657;
  const offset =
    -0.00113423 * Math.pow(dataLength, 5) +
    0.0713663 * Math.pow(dataLength, 4) -
    1.72579 * Math.pow(dataLength, 3) +
    20.137 * Math.pow(dataLength, 2) -
    116.472 * dataLength +
    373.599;
  const marginX =
    -0.00112558 * Math.pow(dataLength, 5) +
    0.0717194 * Math.pow(dataLength, 4) -
    1.75742 * Math.pow(dataLength, 3) +
    20.7823 * Math.pow(dataLength, 2) -
    121.556 * dataLength +
    347.038;

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
      crosshairType="bottom"
      axisRight={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: axisRightLegend,
        legendPosition: 'middle',
        legendOffset: offset,
        truncateTickAt: 0,
        tickValues: 10, //number of tickvalues displayed along the ax
        renderTick: (e) => {
          return (
            <g transform={`translate(${e.x},${e.y})`}>
              <text
                x={marginX}
                y={0}
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
