"use client";

import { RessourcesEau } from "@/lib/postgres/models";
import { SumByKey } from "@/lib/utils/reusableFunctions/sumByKey";
import { Any } from "@/lib/utils/types";
import { ResponsiveBar } from "@nivo/bar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  ressourcesEau: RessourcesEau[];
  sliderValue: number[];
}

const colors: { [key: string]: string } = {
  'Agriculture': '#00C190',
  'Eau potable': '#009ADC',
  'Industrie et autres usages économiques': '#7A49BE',
  'Refroidissement des centrales électriques': '#BB43BD',
  'Alimentation des canaux': '#00C2CC',
  'Production d\'électricité (barrages hydro-électriques)': '#FFCF5E',
};

const ressourcesEauYears = ["A2008", "A2009", "A2010", "A2011", "A2012", "A2013", "A2014", "A2015", "A2016", "A2017", "A2018", "A2019", "A2020"];
const columns = ["LIBELLE_SOUS_CHAMP", "SOUS_CHAMP", "code_geographique", "departement", "epci", "index", "libelle_epci", "libelle_geographique", "region"]


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

const PrelevementEauBarChart = (props: Props) => {
  const { ressourcesEau, sliderValue } = props;
  const [filteredRessourcesEau, setFilteredRessourcesEau] = useState(ressourcesEau);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;
  const collectiviteData = codgeo ? filteredRessourcesEau.filter((obj) => obj.code_geographique === codgeo) : filteredRessourcesEau.filter((obj) => obj.epci === codepci);

  useEffect(() => {
    const values = [`A${sliderValue[0]}`, `A${sliderValue[1]}`];
    setSelectedYears(ressourcesEauYears.slice(ressourcesEauYears.indexOf(values[0]), ressourcesEauYears.indexOf(values[1]) + 1))
    setFilteredRessourcesEau(ressourceEauFilter(sliderValue, ressourcesEauYears, ressourcesEau));
  }, [sliderValue]);

  console.log("ressourcesEau", collectiviteData);

  const graphData = [
    {
      "Agriculture": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2008"),
      "Eau potable": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2008"),
      "Industrie et autres usages économiques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2008"),
      "Refroidissement des centrales électriques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2008"),
      "Alimentation des canaux": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2008"),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2008"),
      annee: 2008,
    },
    {
      "Agriculture": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2009"),
      "Eau potable": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2009"),
      "Industrie et autres usages économiques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2009"),
      "Refroidissement des centrales électriques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2009"),
      "Alimentation des canaux": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2009"),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2009"),
      annee: 2009,
    },
    {
      "Agriculture": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2010"),
      "Eau potable": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2010"),
      "Industrie et autres usages économiques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2010"),
      "Refroidissement des centrales électriques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2010"),
      "Alimentation des canaux": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2010"),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2010"),
      annee: 2010,
    },
    {
      "Agriculture": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2011"),
      "Eau potable": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2011"),
      "Industrie et autres usages économiques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2011"),
      "Refroidissement des centrales électriques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2011"),
      "Alimentation des canaux": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2011"),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2011"),
      annee: 2011,
    },
    {
      "Agriculture": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2012"),
      "Eau potable": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2012"),
      "Industrie et autres usages économiques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2012"),
      "Refroidissement des centrales électriques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2012"),
      "Alimentation des canaux": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2012"),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2012"),
      annee: 2012,
    },
    {
      "Agriculture": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2013"),
      "Eau potable": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2013"),
      "Industrie et autres usages économiques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2013"),
      "Refroidissement des centrales électriques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2013"),
      "Alimentation des canaux": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2013"),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2013"),
      annee: 2013,
    },
    {
      "Agriculture": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2014"),
      "Eau potable": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2014"),
      "Industrie et autres usages économiques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2014"),
      "Refroidissement des centrales électriques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2014"),
      "Alimentation des canaux": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2014"),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2014"),
      annee: 2014,
    },
    {
      "Agriculture": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2015"),
      "Eau potable": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2015"),
      "Industrie et autres usages économiques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2015"),
      "Refroidissement des centrales électriques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2015"),
      "Alimentation des canaux": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2015"),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2015"),
      annee: 2015,
    },
    {
      "Agriculture": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2016"),
      "Eau potable": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2016"),
      "Industrie et autres usages économiques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2016"),
      "Refroidissement des centrales électriques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2016"),
      "Alimentation des canaux": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2016"),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2016"),
      annee: 2016,
    },
    {
      "Agriculture": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2017"),
      "Eau potable": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2017"),
      "Industrie et autres usages économiques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2017"),
      "Refroidissement des centrales électriques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2017"),
      "Alimentation des canaux": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2017"),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2017"),
      annee: 2017,
    },
    {
      "Agriculture": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2018"),
      "Eau potable": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2018"),
      "Industrie et autres usages économiques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2018"),
      "Refroidissement des centrales électriques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2018"),
      "Alimentation des canaux": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2018"),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2018"),
      annee: 2018,
    },
    {
      "Agriculture": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2019"),
      "Eau potable": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2019"),
      "Industrie et autres usages économiques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2019"),
      "Refroidissement des centrales électriques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2019"),
      "Alimentation des canaux": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2019"),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2019"),
      annee: 2019,
    },
    {
      "Agriculture": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2020"),
      "Eau potable": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2020"),
      "Industrie et autres usages économiques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2020"),
      "Refroidissement des centrales électriques": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2020"),
      "Alimentation des canaux": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2020"),
      "Production d'électricité (barrages hydro-électriques)": SumByKey(collectiviteData.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2020"),
      annee: 2020,
    },
  ];

  console.log("data", graphData);
  const keys = [
    "Eau potable",
    "Agriculture",
    "Industrie et autres usages économiques",
    "Refroidissement des centrales électriques",
    "Alimentation des canaux",
    "Production d'électricité (barrages hydro-électriques)"
  ];
  return (
    <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
      <ResponsiveBar
        data={graphData as Any}
        keys={keys}
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
          legend: 'Nombre de ...................',
          legendPosition: 'middle',
          legendOffset: -50,
          truncateTickAt: 0,
          tickValues: 5
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
