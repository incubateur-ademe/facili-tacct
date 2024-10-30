"use client";

import { RessourcesEau } from "@/lib/postgres/models";
import { SumByKey } from "@/lib/utils/reusableFunctions/sumByKey";
import { Any } from "@/lib/utils/types";
import { ResponsiveBar } from "@nivo/bar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type GraphData = {
  Agriculture: number;
  "Eau potable": number;
  "Industrie et autres usages économiques": number;
  "Refroidissement des centrales électriques": number;
  "Alimentation des canaux": number;
  "Production d'électricité (barrages hydro-électriques)": number;
  annee: string;
}

const ressourcesEauYears = ["A2008", "A2009", "A2010", "A2011", "A2012", "A2013", "A2014", "A2015", "A2016", "A2017", "A2018", "A2019", "A2020"];
const columns = ["LIBELLE_SOUS_CHAMP", "SOUS_CHAMP", "code_geographique", "departement", "epci", "index", "libelle_epci", "libelle_geographique", "region"]
const colors: { [key: string]: string } = {
  'Agriculture': '#00C190',
  'Eau potable': '#009ADC',
  'Industrie et autres usages économiques': '#7A49BE',
  'Refroidissement des centrales électriques': '#BB43BD',
  'Alimentation des canaux': '#00C2CC',
  'Production d\'électricité (barrages hydro-électriques)': '#FFCF5E',
};

const  ressourceEauFilter = (sliderValues: number[], allYears: string[], data: RessourcesEau[]) => {
  const values = [`A${sliderValues[0]}`, `A${sliderValues[1]}`];
  const newSelectedYears = allYears.slice(allYears.indexOf(values[0]), allYears.indexOf(values[1]) + 1);
  const newKeys = columns.concat(newSelectedYears);
  const newArray = data.map(item => {
    const newItem: any = {};
    newKeys.forEach(key => {
      newItem[key] = (item as any)[key];
    });
    return newItem;
  });
  return newArray;
}

const graphDataFunct = (filteredYears: string[], data: RessourcesEau[]) => {
  const dataArr: GraphData[] = [];
  const years = filteredYears.map((year) => year.split("A")[1]);
  years.forEach((year) => {
    const obj = {
      "Agriculture": SumByKey(data.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), `A${year}`),
      "Eau potable": SumByKey(data.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), `A${year}`),
      "Industrie et autres usages économiques": SumByKey(data.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), `A${year}`),
      "Refroidissement des centrales électriques": SumByKey(data.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), `A${year}`),
      "Alimentation des canaux": SumByKey(data.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), `A${year}`),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(data.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), `A${year}`),
      annee: year,
    }
    dataArr.push(obj);
  });
  return dataArr;
}

const PrelevementEauBarChart = (
  { ressourcesEau, sliderValue }: { ressourcesEau: RessourcesEau[], sliderValue: number[] }
) => {
  const [filteredRessourcesEau, setFilteredRessourcesEau] = useState(ressourcesEau);
  const [selectedYears, setSelectedYears] = useState<string[]>(ressourcesEauYears.map(year => year.split("A")[1]));
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;
  const collectiviteData = codgeo ? filteredRessourcesEau.filter((obj) => obj.code_geographique === codgeo) : filteredRessourcesEau.filter((obj) => obj.epci === codepci);
  const [graphData, setGraphData] = useState<GraphData[]>(graphDataFunct(selectedYears, collectiviteData));

  useEffect(() => {
    const values = [`A${sliderValue[0]}`, `A${sliderValue[1]}`];
    setSelectedYears(ressourcesEauYears.slice(ressourcesEauYears.indexOf(values[0]), ressourcesEauYears.indexOf(values[1]) + 1))
    setFilteredRessourcesEau(ressourceEauFilter(sliderValue, ressourcesEauYears, ressourcesEau));
    setGraphData(graphDataFunct(selectedYears, collectiviteData));
  }, [sliderValue, selectedYears]);

  return (
    <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
      <ResponsiveBar
        data={graphData as Any}
        keys={Object.keys(colors)}
        isFocusable={true}
        indexBy="annee"
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
        axisTop={null}
        axisRight={null}
        // axisBottom={{
        //     tickValues: [2019, 2020],
        //     tickSize: 0,
        //     tickPadding: 15,
        //     renderTick: (e) => {
        //       return (
        //         <g transform={`translate(${e.x},${e.y})`}>
        //           <text
        //             x={0}
        //             y={10}
        //             dy={16}
        //             textAnchor="middle"
        //             style={{
        //               fill: 'black',
        //               fontSize: 12,
        //               fontWeight: 400,
        //             }}
        //           >
        //             {e.value}
        //           </text>
        //         </g>
        //       );
        //     }
        // }}
        gridYValues={5}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Volumétrie en Mm³',
          legendPosition: 'middle',
          legendOffset: -50,
          truncateTickAt: 0,
          tickValues: 5, //number of tickvalues displayed along the ax
          renderTick: (e) => {
            return (
              <g transform={`translate(${e.x},${e.y})`}>
                <text
                  x={-20}
                  y={5}
                  textAnchor="middle"
                  style={{
                    fill: 'black',
                    fontSize: 12,
                    fontWeight: 400,
                  }}
                >
                  {e.value / 1000000}
                </text>
              </g>
            );
          }
        }}
        labelSkipWidth={40}
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
                style: { itemOpacity: 1 }
              }
            ]
          }
        ]}
        role="application"
        ariaLabel="........."
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in annee_arrete: "+e.indexValue}
      />
    </div>
  )
};

export default PrelevementEauBarChart;
