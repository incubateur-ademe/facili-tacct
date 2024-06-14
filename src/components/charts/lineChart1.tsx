//line chart with string data on x axis and values on y axis. Used for evolution across dates

"use client"

import { ResponsiveLine } from '@/lib/nivo/line';
import { useEffect } from 'react';


type Props = {
  xData: (string | undefined)[];
  yData: number[];
}

type GraphData = {
  x: string | undefined;
  y: number | undefined;
}

const LineChart1 = (props: Props) => {
  const { xData, yData } = props;
  const children: GraphData[] = [];

  useEffect(() => {
    xData.forEach((item, id) => {
      var dict: GraphData = {
         x: item,
         y: yData.at(id),
      }
      children.push(dict);
    });
  }, [xData])
  

  return (
    <div>
      <p style={{margin:"0 2em 0"}}>Évolution de la population</p>
      { xData.length > 0 && yData.length > 0 ? (
        <div style={{ height: '500px', minWidth: '600px'}}>
          <ResponsiveLine
            curve="monotoneX" 
            data={[{
              id: 'Première courbe évolution',
              data: children
            }]} 
            yScale={{
              type: 'linear',
              min: Math.min(...yData),
              max: Math.max(...yData) + 5,
            }}
            margin={
              {
                top: 50,
                right: 130,
                bottom: 50,
                left: 60,
              }}
          />
        </div>
      ) : (
        <h2>...loading</h2>
      )
    }
    </div>
  );
};

export default LineChart1;
