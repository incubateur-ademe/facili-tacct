"use client";

import { ResponsiveBar } from "@/lib/nivo/bar";
import { CountOccByIndex } from "@/lib/utils/reusableFunctions/occurencesCount";
import { Any } from "@/lib/utils/types";

const colors: { [key: string]: string } = {
  'Inondations': '#009ADC',
  'Sécheresse': '#FFCF5E',
  'Mouvements de terrain': '#F66E19',
  'Retrait-gonflement des argiles': '#BB43BD',
  'Cyclones / Tempêtes': '#00C2CC',
  'Grêle / neige': '#00C190',
  'Avalanche': '#7A49BE',
};

export const BarChartCatnat = (props: {gestionRisques: ArreteCatNat[]}) => {
  const { gestionRisques } = props;
  const typesRisques = [...new Set(gestionRisques.map(item => item.lib_risque_jo))].filter(item => item !== null).sort();
  const graphData = CountOccByIndex(gestionRisques, "annee_arrete", "lib_risque_jo");
  console.log("graphData", graphData);
  const minDate = Math.min(...gestionRisques.map(e => e.annee_arrete));
  const maxDate = Math.max(...gestionRisques.map(e => e.annee_arrete));
  return (
    <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
      {
        graphData.length === 0 ? 
        (
          <div style={{height:"inherit", alignContent: "center", textAlign:"center"}}>
            Aucun arrêté catnat avec ces filtres
          </div>
        ) :
        <ResponsiveBar
          data={graphData as Any}
          keys={typesRisques}
          isFocusable={true}
          indexBy="indexName"
          colors={bar => colors[bar.id]}
          margin={{ top: 40, right: 200, bottom: 80, left: 80 }}
          padding={0.3}
          innerPadding={2}
          borderRadius={1}
          valueScale={{
            type: "linear",
          }}
          indexScale={{ type: 'band', round: true }}
          borderColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                1.6
              ]
            ]
          }}
          tooltip={({
              id,
              value,
              color
            }) => <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
                background: '#FFFFFF',
                right: '8rem',
                fontSize: 'inherit',
                borderRadius: '2px',
                border: '1px solid #ccc',
                translate: "-80px"
              }}>
                  <div style={{height: "12px", width: "12px", backgroundColor: color, marginRight: "8px"}}/>
                  <span>
                      {id}: <strong>{value}</strong>
                  </span>
              </div>
          }     
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickValues: minDate != maxDate ? [minDate, maxDate] : [minDate],
            tickSize: 0,
            tickPadding: 15,
            renderTick: (e) => {
              return (
                <g transform={`translate(${e.x},${e.y})`}>
                  <text
                    x={0}
                    y={10}
                    dy={16}
                    textAnchor="middle"
                    style={{
                      fill: 'black',
                      fontSize: 12,
                      fontWeight: 400,
                    }}
                  >
                    {e.value}
                  </text>
                </g>
              );
            }
          }}
          gridYValues={5}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Nombre de catastrophes recensées',
            legendPosition: 'middle',
            legendOffset: -50,
            truncateTickAt: 0,
            tickValues: 5
          }}
          labelSkipWidth={15}
          labelSkipHeight={12}
          labelTextColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                1.6
              ]
            ]
          }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
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
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e=>e.id+": "+e.formattedValue+" in annee_arrete: "+e.indexValue}
        />
      }
    </div>
  )
}
