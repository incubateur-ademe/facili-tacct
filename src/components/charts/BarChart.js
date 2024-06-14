"use client";

import { ResponsiveBar } from "@/lib/nivo/bar";

const BarChart = props => {
  const { chartData } = props;
  return (
    <div style={{ height: "500px", width: "500px" }}>
      <ResponsiveBar
        data={chartData}
        keys={["Votre EPCI", "France"]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        groupMode="grouped"
        indexBy="periode"
        margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
        valueScale={{ type: "linear" }}
        colors={["#ececfe", "#fcafaf"]}
        legends={[
          {
            dataFrom: "keys",
            anchor: "top-right",
            direction: "column",
            justify: false,
            translateX: -60,
            translateY: -20,
            itemsSpacing: 2,
            itemWidth: 0,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default BarChart;
