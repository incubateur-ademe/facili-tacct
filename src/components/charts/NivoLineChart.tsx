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
    -0.00171608 * Math.pow(dataLength, 5) +
    0.101171 * Math.pow(dataLength, 4) -
    2.31346 * Math.pow(dataLength, 3) +
    25.7411 * Math.pow(dataLength, 2) -
    143.533 * dataLength +
    458.873;
  const offset =
    -0.0017381 * Math.pow(dataLength, 5) +
    0.0996665 * Math.pow(dataLength, 4) -
    2.22964 * Math.pow(dataLength, 3) +
    24.5342 * Math.pow(dataLength, 2) -
    137.122 * dataLength +
    423.84;
  const marginX =
    -0.000876112 * Math.pow(dataLength, 5) +
    0.0629644 * Math.pow(dataLength, 4) -
    1.70081 * Math.pow(dataLength, 3) +
    21.6781 * Math.pow(dataLength, 2) -
    133.583 * dataLength +
    393.712;

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
