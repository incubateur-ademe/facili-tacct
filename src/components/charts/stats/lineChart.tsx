'use client';

import { ResponsiveLine } from '@/lib/nivo/line';
import { useEffect, useState } from 'react';

type GraphData = {
  x: string;
  y: number;
};

type rawData = {
  data: number[];
  labels: string[];
  count: number;
  aggregated_value: number;
  label: string;
  breakdown_value: string[];
  action: {
    math: string;
    type: string;
  };
};

type Props = {
  rawData: rawData[];
};

export const LineChart = (props: Props) => {
  const { data, labels } = props.rawData[0];
  const [children, setChildren] = useState<GraphData[]>([]);

  useEffect(() => {
    const tempChildren: GraphData[] = [];
    for (let i = 0; i < data.length; i++) {
      tempChildren.push({ x: labels[i], y: data[i] });
    }
    setChildren(tempChildren);
  }, []);

  return (
    <ResponsiveLine
      curve="linear"
      data={[
        {
          id: "Évolution du nombre d'utilisateurs",
          color: 'hsl(284, 70%, 50%)',
          data: children.slice(-30).filter((e) => !e.x.includes('Nov'))
        }
      ]}
      colors={'rgba(242, 133, 2, 0.9)'}
      useMesh={true}
      tooltip={({ point }) => {
        return (
          <div
            style={{
              backgroundColor: '#ffffff',
              color: 'black',
              maxWidth: 600,
              boxShadow: "0px 2px 6px 0px rgba(0, 0, 18, 0.16)",
              padding: '0.5rem 0.75rem',
              fontFamily: 'Marianne',
              fontSize: '0.875rem',
              borderRadius: '6px',
              lineHeight: '1.25rem',
              fontWeight: 400
            }}
          >
            {point.data.xFormatted} : <b>{point.data.yFormatted}</b>
          </div>
        );
      }}
      // yScale={{
      //   type: 'linear',
      //   min: 0
      //   // max: Math.max(...yData.filter(e => e != null)) + 1,
      // }}
      margin={{
        top: 50,
        right: 60,
        bottom: 70,
        left: 60
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 35,
        // legend: "Date",
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0
      }}
    // axisLeft={{
    //   tickSize: 5,
    //   tickPadding: 5,
    //   tickRotation: 0,
    //   legend: "Pourcentage (%)",
    //   legendOffset: -40,
    //   legendPosition: "middle",
    //   truncateTickAt: 0,
    // }}
    />
  );
};
