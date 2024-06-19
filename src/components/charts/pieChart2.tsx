"use client";

import { Loader } from "@/app/donnees-territoriales/loader";
import { ResponsivePie } from "@/lib/nivo/pie";

type Props = {
  PieData: Array<{
    color: string;
    id: string;
    label: string;
    value: number;
  }>;
}

export const PieChart2 = ({ PieData }: Props) => {
  return (
    <div>
      {PieData ? (
        <div style={{ height: "500px", minWidth: "450px" }}>
          <ResponsivePie
            data={PieData}
            margin={{ top: 85, right: 100, bottom: 80, left: -20 }}
            sortByValue={true}
            innerRadius={0.4}
            padAngle={0.8}
            cornerRadius={3}
            activeOuterRadiusOffset={9}
            borderWidth={1}
            colors={["#F2F2F2", "#FFF4E7", "#68D273", "#FCF7CD", "#EEFBFF"]}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.3]],
            }}
            enableArcLinkLabels={false}
            //arcLabel={d => `${d.value}`}
            arcLabel={e => {
              let v = e.value.toFixed(0);
              if (Number(v) != 0) {
                return v;
              } else return "";
            }}
            //   tooltip={(el) => (
            //     <div
            //         style={{
            //             padding: 12,
            //             color: '#000791',
            //             background: '#222222',
            //         }}
            //     >
            //       <p>
            //           {el.value}
            //       </p>
            //     </div>
            // )}
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
    </div>
  );
};
