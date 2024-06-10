import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import dataAgeBati from "@/lib/utils/age_bati.json";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const BarChart = () => {

  const [data, setData] = useState([]);
	const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    processData(dataAgeBati);
  }, []);
	

  function processData(allRows) {
    if (allRows.find(el => el['code_epci'] === Number(code))) {
      let row = dataAgeBati.find(el => el['code_epci'] === Number(code))
      setData([
        {
          "periode": "Avant 1919",
          "Votre EPCI": row['part_rp_ach19'].toFixed(1),
          "Votre EPCIColor": "#ececfe",
          "France": 21.3,
          "FranceColor": "hsl(125, 70%, 50%)",
        },
        {
          "periode": "1919-1945",
          "Votre EPCI": row['part_rp_ach1945'].toFixed(1),
          "Votre EPCIColor": "#ececfe",
          "France": 5.3,
          "FranceColor": "hsl(125, 70%, 50%)",
        },
        {
          "periode": "1946-1990",
          "Votre EPCI": row['part_rp_ach4690'].toFixed(1),
          "Votre EPCIColor": "#ececfe",
          "France": 38.3,
          "FranceColor": "hsl(125, 70%, 50%)",
        },
        {
          "periode": "1991-2005",
          "Votre EPCI": row['part_rp_ach9105'].toFixed(1),
          "Votre EPCIColor": "#ececfe",
          "France": 20,
          "FranceColor": "hsl(125, 70%, 50%)",
        },
        {
          "periode": "Après 2006",
          "Votre EPCI": row['part_rp_ach06p'].toFixed(1),
          "Votre EPCIColor": "#ececfe",
          "France": 15,
          "FranceColor": "hsl(125, 70%, 50%)",
        },
      ])

      return;
    }  
  }
  return (
    <div style={{ height: '500px', width: '500px' }}>
      <ResponsiveBar
        data={data}
        keys={[
          'Votre EPCI',
          'France',
        ]}
        borderColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  1.6
              ]
          ]
        }}
        groupMode="grouped"
        indexBy="periode"
        margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
        valueScale={{ type: 'linear' }}
        colors={["#ececfe", "#fcafaf"]}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'top-right',
            direction: 'column',
            justify: false,
            translateX: -60,
            translateY: -20,
            itemsSpacing: 2,
            itemWidth: 0,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
      ]}
      />
    </div>
  );
};

export default BarChart;