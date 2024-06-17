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
  
  console.log('children', children)
  useEffect(() => {
    xData.forEach((item, id) => {
      const dict: GraphData = {
        "x": item,
        "y": yData.at(id),
      };
      tempChildren.push(dict);
      setChildren(tempChildren);
    });
  }, [xData]);

  return (
    <div>
      <p style={{ margin: "0 2em 0" }}>Évolution de la population</p>
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
              min: Math.min(...yData),
              max: Math.max(...yData) + 5,
            }}
            margin={{
              top: 50,
              right: 130,
              bottom: 50,
              left: 60,
            }}
          />
        </div>
    </div>
  );
};

export default LineChart1;
