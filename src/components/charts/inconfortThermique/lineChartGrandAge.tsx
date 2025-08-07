'use client';

import couleurs from '@/design-system/couleurs';
import { ResponsiveLine } from '@/lib/nivo/line';
import { useEffect, useState } from 'react';

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
        y: yData.at(id)
      };
      tempChildren.push(dict);
      setChildren(tempChildren);
    });
  }, [yData]);

  return (
    <ResponsiveLine
      curve="linear"
      data={[
        {
          id: "Courbe évolution de l'âge",
          color: 'hsl(284, 70%, 50%)',
          data: children
        }
      ]}
      colors={couleurs.graphiques.bleu[2]}
      isInteractive={true}
      useMesh={true}
      tooltip={({ point }) => {
        return (
          <div
            style={{
              background: 'white',
              padding: '0.5rem',
              position: 'relative',
              right: '4rem',
              boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
            }}
          >
            {point.data.xFormatted} : <b>{point.data.yFormatted}%</b>
          </div>
        );
      }}
      yScale={{
        type: 'linear',
        min: 0,
        max: Math.max(...yData.filter((e) => e != null)) + 1
      }}
      margin={{
        top: 30,
        right: 30,
        bottom: 60,
        left: 60
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Années de recensement',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0,
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
  );
};
