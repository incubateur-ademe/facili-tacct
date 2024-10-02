"use client";

import { ResponsiveLine } from "@/lib/nivo/line";
import { useEffect, useState } from "react";

type Props = {
  xData: Array<string | undefined>;
  yData: Array<number | null>;
};

type GraphData = {
  x: string | undefined;
  y: number | null | undefined;
};

export const LineChart1 = (props: Props) => {
  const { xData, yData } = props;
  const [children, setChildren] = useState<GraphData[]>([]);
  const tempChildren: GraphData[] = [];

  useEffect(() => {
    xData.forEach((item, id) => {
      const dict: GraphData = {
        x: item,
        y: yData.at(id),
      };
      tempChildren.push(dict);
      setChildren(tempChildren);
    });
  }, [yData]);

  console.log("children", children);
  return (
    <ResponsiveLine
      curve="linear"
      data={[
        {
          id: "Courbe évolution de l'âge",
          color: "hsl(284, 70%, 50%)",
          data: children,
        },
      ]}
      colors={"rgba(242, 133, 2, 0.9)"}
      isInteractive={true}
      useMesh={true}
      yScale={{
        type: "linear",
        min: 0,
        max: Math.max(...yData.filter(e => e != null)) + 1,
      }}
      margin={{
        top: 50,
        right: 20,
        bottom: 50,
        left: 60,
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Années de rencensement",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Pourcentage (%)",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
    />
  );
};
