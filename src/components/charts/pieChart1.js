"use client"

import { ResponsivePie } from '@nivo/pie'
import { useEffect, useState } from 'react';
import dataSocioEco from "../../lib/utils/cat_sociopro.json";
import { useSearchParams } from 'next/navigation';


const PieChart1 = () => {
  const [values, setValues] = useState([0, 0, 0, 0, 0, 0, 0])
  const [data, setData] = useState([]);

	const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    processData(dataSocioEco);
  }, []);
	

  function processData(allRows) {
    if (allRows.find(el => el['Code'] === Number(code))) {
      let row = dataSocioEco.find(el => el['Code'] === Number(code))
      var x = Object.keys(row).slice(3, 10)
      var y = Object.values(row).slice(3, 10)
      setValues(y);
      var sum = y.reduce((partialSum, a) => partialSum + a, 0);
      setData([
    // {
    //   "id": "Agriculteurs",
    //   "label": "Agriculteurs",
    //   "value": 0.7,
    //   "color": "#7AC4A5" 
    // },
    {
      "id": "Artisans, commerçants, chefs d'entreprise",
      "label": "Commerçants",
      "value": y.at(1),
      "color": "#68D273"
    },
    {
      "id": "Travail en extérieur (Ouvriers et agriculteurs)",
      "label": "Travail en extérieur",
      "value": (y.at(0) + y.at(2)).toFixed(1),
      "color": "#97e3d5"
    },
    {
      "id": "Employés",
      "label": "Employés",
      "value": y.at(3),
      "color": "#61cdbb"
    },
    {
      "id": "Professions intermédiaires",
      "label": "Professions intermédiaires",
      "value": y.at(4),
      "color": "#e8a838"
    },
    {
      "id": "Cadres",
      "label": "Cadres",
      "value": y.at(5),
      "color": "#f1e15b"
    },
    {
      "id": "Retraités",
      "label": "Retraités",
      "value": y.at(6),
      "color": "#f47560"
    },
    {
      "id": "Autre",
      "label": "Autre",
      "value": (100 - sum).toFixed(1),
      "color": "#e8c1a0"
    }
  ])
      return;
    }  
  }


  return (
    <div>
      <p style={{margin:"0 2em 0"}}>Part dans la population selon les catégories socio-professionnelles</p>
      { data.length != 0 ? (
        <div style={{ height: '500px', minWidth: '450px'}}>
          <ResponsivePie
            data={data}
            margin={{ top: 85, right: 100, bottom: 80, left: -20 }}
            sortByValue={true}
            innerRadius={0.4}
            padAngle={0.8}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            colors={["#68D273", "#97e3d5", "#61cdbb", "#e8a838", "#f1e15b", "#f47560", "#e8c1a0"]}
            borderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      0.3
                  ]
              ]
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
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: -20,
                translateY: 0,
                itemsSpacing: 0,
                itemWidth: 30,
                itemHeight: 30,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 10,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
          ]}
          />
        </div>
      ) : (
        <h2>...loading</h2>
      )
    }
    </div>
  );
};

export default PieChart1;
