import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import '../styles.css';

const lineData = [
  {
    id: 'Key 1',
    data: [
      {
        x: 'june',
        y: 31
      },
      {
        x: 'july',
        y: 50
      },
      {
        x: 'aug',
        y: 73
      }
    ]
  }
];

const barData = [
  {
    id: 'june',
    'Key 1': 67
  },
  {
    id: 'july',
    'Key 1': 142
  },
  {
    id: 'aug',
    'Key 1': 113
  }
];

const props = {
  keys: ['Key 1'],
  lineData: lineData,
  barData: barData,
  leftAxis: 'METRIC TONS',
  rightAxis: 'US$ PER TON',
  lineColors: ['#CD0D15', '#2A6800', 'purple', '#0092CC', '#2A6800'],
  barColors: ['#68A300', '#FFB100', '#0092CC', '#CD0D15', '#2A6800'],
  height: '500px'
};

const BarLineChart = () => {
  const {
    keys,
    lineData,
    barData,
    rightAxis,
    leftAxis,
    lineColors,
    barColors,
    height
  } = props;

  // lineData[0].data.unshift({ x: "", y: null });
  // lineData[0].data.push({ x: null, y: null });

  return (
    <div className="container" style={{ height: height }}>
      <div className="charts">
        <div className="bar">
          <ResponsiveBar
            data={barData}
            keys={keys}
            indexBy="id"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            groupMode="stacked"
            colors={barColors}
            enableLabel={false}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0
            }}
            axisLeft={{
              tickSize: 0,
              tickPadding: 3,
              tickRotation: 0,
              tickValues: 8,
              legendOffset: -50,
              legend: leftAxis,
              legendPosition: 'middle'
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={'{ from: "color", modifiers: [["darker", 1.6]] }'}
            animate={true}
            enableGridX={false}
            isInteractive={true}
          />
        </div>
        <div className="line">
          <ResponsiveLine
            data={lineData}
            margin={{ top: 47, right: 105, bottom: 50, left: 35 }}
            axisTop={null}
            axisBottom={null}
            axisRight={{
              tickSize: 0,
              tickPadding: -20,
              tickRotation: 0,
              tickValues: 8,
              legend: rightAxis,
              legendOffset: 50,
              legendPosition: 'middle'
            }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
            axisLeft={null}
            enableGridX={false}
            enableGridY={false}
            colors={lineColors}
          />
        </div>
      </div>
    </div>
  );
};

export default BarLineChart;
