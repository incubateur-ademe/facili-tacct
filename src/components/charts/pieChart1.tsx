"use client";

import { Loader } from "@/components/loader";
import { ResponsivePie } from "@/lib/nivo/pie";

type Props = {
  graphData: Array<{
    color: string;
    id: string;
    label: string;
    value: number | undefined;
    count: number;
  }>;
};

export const PieChart1 = ({ graphData }: Props) => {
  return (
    <>
      {graphData.length != 0 ? (
        <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
          <ResponsivePie
            data={graphData}
            margin={{ top: 85, right: 100, bottom: 80, left: -20 }}
            sortByValue={true}
            innerRadius={0.4}
            padAngle={0.8}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            colors={["rgba(44, 170, 166, 0.7)", "#E4FFE3", "rgba(242, 133, 2, 0.9)", "#FFF6E3", "#E3EDFF", "#f47560", "#e8c1a0"]}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.3]],
            }}
            enableArcLinkLabels={false}
            arcLabel={(d) => `${d.value}%`}
            // arcLinkLabelsTextColor="#333333"
            // arcLinkLabelsOffset={-10}
            // arcLinkLabelsDiagonalLength={8}
            // arcLinkLabelsColor={{ from: 'color' }}
            legends={[
              {
                anchor: "right",
                direction: "column",
                justify: false,
                translateX: -20,
                translateY: 0,
                itemsSpacing: 0,
                itemWidth: 30,
                itemHeight: 30,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 10,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
