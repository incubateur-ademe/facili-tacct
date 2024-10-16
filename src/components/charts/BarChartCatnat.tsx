"use client";

import { ResponsiveBar } from "@/lib/nivo/bar";
import { CountOccByIndex } from "@/lib/utils/reusableFunctions/occurencesCount";
import { Any } from "@/lib/utils/types";

type ArreteCatNat = {
  annee_arrete: number;
  lib_risque_jo: string | null;
  dat_pub_arrete: string | null;
  code_geographique: string | null;
  departement: string | null;
  epci: string | null;
  index: bigint | null;
  libelle_epci: string | null;
  libelle_geographique: string | null;
  region: number | null;
}

export const BarChartCatnat = (props: {gestionRisques: ArreteCatNat[]}) => {
  const { gestionRisques } = props;
  const typesRisques = [...new Set(gestionRisques.map(item => item.lib_risque_jo))].filter(item => item !== null).sort();
  const graphData = CountOccByIndex(gestionRisques, "annee_arrete", "lib_risque_jo");

    return (
      <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
        <ResponsiveBar
          data={graphData as Any}
          keys={typesRisques}
          isFocusable={true}
          indexBy="indexName"
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          padding={0.3}
          valueScale={{
            type: "linear",
          }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          borderColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                1.6
              ]
            ]
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Années des arrêtés Catnat',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
          }}
          gridYValues={5}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Nombre de catastrphes recensées',
            legendPosition: 'middle',
            legendOffset: -50,
            truncateTickAt: 0,
            tickValues: 5
          }}
          labelSkipWidth={12}
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
    </div>
  )
}
