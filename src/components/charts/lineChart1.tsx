//line chart with string data on x axis and values on y axis. Used for evolution across dates

"use client";

import { useEffect, useState } from "react";

import { ResponsiveLine } from "@/lib/nivo/line";

type Props = {
  xData: Array<string | undefined>;
  yData: number[];
};

type GraphData = {
  x: string | undefined;
  y: number | undefined;
};

const LineChart1 = (props: Props) => {
  const { xData, yData } = props;
  const [children, setChildren] = useState<GraphData[]>([]);
  const tempChildren: GraphData[] = [];
  // console.log('xData', xData)
  // console.log('yData', yData)
  useEffect(() => {
    xData.forEach((item, id) => {
      const dict: GraphData = {
        "x": item,
        "y": yData.at(id),
      };
      tempChildren.push(dict);
      setChildren(tempChildren);
    });
  }, [yData]);

  return (
    <div>
      <p style={{ margin: "0 2em 0" }}><b>Évolution de la part de population de plus de 75 ans depuis 1968</b></p>
        <div style={{ height: "500px", minWidth: "600px" }}>
          <ResponsiveLine
            curve="monotoneX"
            data={[
              {
                "id": "Première courbe évolution",
                "color": "hsl(284, 70%, 50%)",
                "data": children
              },
            ]}
            yScale={{
              type: "linear",
              min: Math.min(...yData) - 1,
              max: Math.max(...yData) + 1,
            }}
            margin={{
              top: 50,
              right: 130,
              bottom: 50,
              left: 60,
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Années de rencensement',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Pourcentage (%)',
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
          />
        </div>
    </div>
  );
};

export default LineChart1;
