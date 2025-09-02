"use client";

import { surfaceEnBioBarChartLegend } from "@/components/maps/legends/datavizLegends";
import { Body } from "@/design-system/base/Textes";
import { AgricultureBio } from "@/lib/postgres/models";
import { Sum } from "@/lib/utils/reusableFunctions/sum";
import { useEffect, useState } from "react";
import { simpleBarChartTooltip } from "../ChartTooltips";
import { NivoBarChart } from "../NivoBarChart";

type GraphData = {
  "Surface certifiée agriculture biologique": number;
  "Surface en conversion agriculture biologique": number;
  annee: string;
}
type Years = "surface_2019" | "surface_2020" | "surface_2021" | "surface_2022";

const agricultureBioYears = ["surface_2019", "surface_2020", "surface_2021", "surface_2022"];

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
  const graphData = graphDataFunct(selectedYears, agricultureBio)

  useEffect(() => {
    setSelectedYears(
      agricultureBioYears.slice(
        agricultureBioYears.indexOf(`surface_${sliderValue[0]}`),
        agricultureBioYears.indexOf(`surface_${sliderValue[1]}`) + 1
      )
    )
  }, [sliderValue]);

  return (
    <div style={{ height: "450px", minWidth: "450px", backgroundColor: "white" }}>
      {graphData && graphData.length ?
        <NivoBarChart
          colors={surfaceEnBioBarChartLegend.map(e => e.color)}
          graphData={graphData}
          keys={surfaceEnBioBarChartLegend.map(e => e.value)}
          indexBy="annee"
          showLegend={false}
          tooltip={({ data }) => simpleBarChartTooltip({ data, legende: surfaceEnBioBarChartLegend, unite: "ha", arrondi: 0 })}
          axisLeftLegend="Surface en ha"
        />
        : <div
          style={{
            height: 'inherit',
            alignContent: 'center',
            textAlign: 'center'
          }}
        >
          <Body>Aucune donnée disponible avec ces filtres</Body>
        </div>
      }
    </div>
  )
};
