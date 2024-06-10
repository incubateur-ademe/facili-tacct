"use client"

import { ResponsiveLine } from '@nivo/line';
import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import dataTest from "../../lib/utils/dataTest.json";
import { useRouter, useSearchParams } from 'next/navigation';

// type dataObj = { category: string; value: number };
// type dataType = Array<dataObj>


const LineChart1 = () => {
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);

	const router = useRouter();
	const searchParams = useSearchParams();
  const code = searchParams.get("code");
	console.log('code LINE CHART', code)
  const themeUrl = searchParams.get("thematique");

  useEffect(() => {
    //d3.csv("./evol75.csv", function(data){ processData(data) } )
    processData(dataTest);
  }, []);
	

  function processData(allRows) {
    //"Corbonod"
    if (allRows.find(el => el['EPCI - Métropole'] === Number(code))) {
      let row = dataTest.find(el => el['EPCI - Métropole'] === Number(code))
      var x = Object.keys(row).slice(8, 16)
      var y = Object.values(row ).slice(8, 16)
      // console.log('xPROCESS', x)
      // console.log('yPROCESS', y)
      setXData(x)
      setYData(y)
      return;
    }  
  }


  return (
    <div>
      { xData.length > 0 && yData.length > 0 ? (
        <div style={{ height: '500px', minWidth: '600px'}}>
          <ResponsiveLine
            curve="monotoneX" data={[{
              id: 'Première courbe évolution',
              data: [
                {
                  x: xData.at(0).split(' ').at(-1),
                  y: yData.at(0)
                },
                {
                  x: xData.at(1).split(' ').at(-1),
                  y: yData.at(1)
                },
                {
                  x: xData.at(2).split(' ').at(-1),
                  y: yData.at(2)
                },
                {
                  x: xData.at(3).split(' ').at(-1),
                  y: yData.at(3)
                },
                {
                  x: xData.at(4).split(' ').at(-1),
                  y: yData.at(4)
                },
                {
                  x: xData.at(5).split(' ').at(-1),
                  y: yData.at(5)
                },
                {
                  x: xData.at(6).split(' ').at(-1),
                  y: yData.at(6)
                },
                {
                  x: xData.at(7).split(' ').at(-1),
                  y: yData.at(7)
                },
              ]
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
