"use client";

import { AgricultureBio } from "@/lib/postgres/models";
import { Sum } from "@/lib/utils/reusableFunctions/sum";
import { useEffect, useState } from "react";
import { agricultureBioBarChartTooltip } from "../ChartTooltips";
import { NivoBarChart } from "../NivoBarChart";

type GraphData = {
  "Surface certifiée agriculture biologique": number;
  "Surface en conversion agriculture biologique": number;
  annee: string;
}
const agricultureBioYears = ["surface_2019", "surface_2020", "surface_2021", "surface_2022"];

type Years = "surface_2019" | "surface_2020" | "surface_2021" | "surface_2022";

const graphDataFunct = (filteredYears: string[], data: AgricultureBio[]) => {
  const dataArr: GraphData[] = [];
  filteredYears.forEach((year) => {
    const genericObjects = (text: string, column: "LIBELLE_SOUS_CHAMP" | "VARIABLE") => data.filter(
      (item) => item[column]?.includes(text)
    ).map(
      e => e[year as Years]
    ).filter(
      (value): value is number => value !== null
    )
    const obj = {
      "Surface certifiée agriculture biologique": Sum(genericObjects("Surface certifiée", "LIBELLE_SOUS_CHAMP")),
      "Surface en conversion agriculture biologique": Sum(genericObjects("Surface en conversion", "LIBELLE_SOUS_CHAMP")),
      annee: year.split("_")[1],
    }
    const isNull = Sum(Object.values(obj).slice(0, -1) as number[]);
    isNull !== 0 ? dataArr.push(obj) : null;
  });

  return dataArr;
}

export const AgricultureBioBarChart = (
  { agricultureBio, sliderValue }: { agricultureBio: AgricultureBio[], sliderValue: number[] }
) => {
  const [selectedYears, setSelectedYears] = useState<string[]>(agricultureBioYears.map(year => year.split("_")[1]));
  const collectiviteName = agricultureBio[0].libelle_epci;
  const graphData = graphDataFunct(selectedYears, agricultureBio)

  useEffect(() => {
    setSelectedYears(
      agricultureBioYears.slice(
        agricultureBioYears.indexOf(`surface_${sliderValue[0]}`),
        agricultureBioYears.indexOf(`surface_${sliderValue[1]}`) + 1
      )
    )
  }, [sliderValue]);

  const legends = [
    {
      variable: "Surface certifiée agriculture biologique",
      texteRaccourci: "Surface certifiée",
      valeur: Sum(graphData.map(e => e["Surface certifiée agriculture biologique"])),
      couleur: "#00C2CC"
    },
    {
      variable: "Surface en conversion agriculture biologique",
      texteRaccourci: "Surface en conversion",
      valeur: Sum(graphData.map(e => e["Surface en conversion agriculture biologique"])),
      couleur: "#00949D"
    },
  ]

  return (
    <div style={{ height: "450px", minWidth: "450px", backgroundColor: "white" }}>
      {graphData && graphData.length ?
        <NivoBarChart
          colors={legends.map(e => e.couleur)}
          graphData={graphData}
          keys={legends.map(e => e.variable)}
          indexBy="annee"
          legendData={legends.filter(e => e.valeur != 0)
            .map((legend, index) => ({
              id: index,
              label: legend.texteRaccourci,
              color: legend.couleur,
            }))}
          tooltip={(tooltipProps) => agricultureBioBarChartTooltip({ data: tooltipProps, legends, collectiviteName })}
          axisLeftLegend="Surface en ha"
        />
        : <div
          style={{
            height: 'inherit',
            alignContent: 'center',
            textAlign: 'center'
          }}
        >
          <p>Aucune donnée disponible avec ces filtres</p>
        </div>
      }
    </div>
  )
};
