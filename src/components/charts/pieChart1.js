"use client";

import { ResponsivePie } from "@/lib/nivo/pie";

// interface GraphData {
//   color: string;
//   id: string;
//   label: string;
//   value: number | undefined;
// }

export const PieChart1 = props => {
  const { graphData } = props;
  return (
    <div>
      <p style={{ margin: "0 2em 0" }}>Part dans la population selon les catégories socio-professionnelles</p>
      {graphData.length != 0 ? (
        <div style={{ height: "500px", minWidth: "450px" }}>
          <ResponsivePie
            data={graphData}
            margin={{ top: 85, right: 100, bottom: 80, left: -20 }}
            sortByValue={true}
            innerRadius={0.4}
            padAngle={0.8}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            colors={["#68D273", "#97e3d5", "#61cdbb", "#e8a838", "#f1e15b", "#f47560", "#e8c1a0"]}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.3]],
            }}
            enableArcLinkLabels={false}
            // arcLabel={(e) => {
            //   let v = e.value.toFixed(0)
            //   if (v != 0) {
            //     return v
            //   } else return ""
            // }}
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
        <h2>...loading</h2>
      )}
    </div>
  );
};
