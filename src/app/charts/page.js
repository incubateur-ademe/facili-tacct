"use client"

import { ResponsiveLine } from '@nivo/line';
import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import dataTest from "../../lib/utils/dataTest.json";

// type dataObj = { category: string; value: number };
// type dataType = Array<dataObj>


const Carte = () => {
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);

  console.log('x', xData)
  console.log('y', yData)
  useEffect(() => {
    //d3.csv("./evol75.csv", function(data){ processData(data) } )
    processData2(dataTest);
  }, []);
  

  function processData2(allRows) {
    //"Corbonod"
    if (allRows.find(el => el['Libellé de commune'] === 'Corbonod')) {
      console.log('allRows', allRows)
      let row = dataTest.find(el => el['Libellé de commune'] === 'Corbonod')
      var x = Object.keys(row).slice(8, 16)
      var y = Object.values(row).slice(8, 16)
      // console.log('xPROCESS', x)
      // console.log('yPROCESS', y)
      setXData(x)
      setYData(y)
      return;
    }  
  }

  // function processData(allRows) {
  //   //"Corbonod"

  //   if (Object.values(allRows)[3] === 'Corbonod') {
  //     console.log('allRows', allRows)

  //     var x = Object.keys(allRows).slice(8, 16)
  //     var y = Object.values(allRows).slice(8, 16)
  //     // console.log('x', x)
  //     // console.log('y', y)
  //     setXData(x)
  //     setYData(y)
  //     return;
  //   }  
  // }

  return (
    <div>
      { xData && yData ? (
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
              min: 50,
              max: 160
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

export default Carte;
