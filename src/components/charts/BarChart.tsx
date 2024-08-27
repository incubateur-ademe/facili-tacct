"use client";

import { ResponsiveBar } from "@/lib/nivo/bar";

type Props = {
  chartData: Array<{
    France: number;
    FranceColor: string;
    "Votre Collectivité"?: string;
    "Votre CollectiviteColor"?: string;
    periode: string;
  }>;
};

export const BarChart = ({ chartData }: Props) => {
  return (
    <div style={{ height: "500px", width: "100%", backgroundColor: "white" }}>
      <ResponsiveBar
        data={chartData}
        keys={["Votre Collectivité", "France"]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        label={d => `${d.value}%`}
        tooltip={({ id, value, color }) => (
          <div
            style={{
              padding: 8,
              background: "#FFF",
            }}
          >
            <strong>
              {id}: {value}%
            </strong>
          </div>
        )}
        groupMode="grouped"
        indexBy="periode"
        margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
        valueScale={{ type: "linear" }}
        colors={["rgba(242, 133, 2, 0.7)", "rgba(44, 170, 166, 0.7)"]} // F28502 "#2CAAA6"
        legends={[
          {
            dataFrom: "keys",
            anchor: "top-right",
            direction: "column",
            justify: false,
            translateX: -100,
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
