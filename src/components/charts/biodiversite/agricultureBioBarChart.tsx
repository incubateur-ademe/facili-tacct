"use client";

import { surfaceEnBioBarChartLegend } from "@/components/maps/legends/datavizLegends";
import { Body } from "@/design-system/base/Textes";
import { AgricultureBio } from "@/lib/postgres/models";
import { Sum } from "@/lib/utils/reusableFunctions/sum";
import { useEffect, useLayoutEffect, useState } from "react";
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const graphData = graphDataFunct(selectedYears, agricultureBio)
  const minValueXTicks = graphData.map(e => e.annee).at(0);
  const maxValueXTicks = graphData.map(e => e.annee).at(-1);

  useEffect(() => {
    setSelectedYears(
      agricultureBioYears.slice(
        agricultureBioYears.indexOf(`surface_${sliderValue[0]}`),
        agricultureBioYears.indexOf(`surface_${sliderValue[1]}`) + 1
      )
    )
  }, [sliderValue]);

  useLayoutEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(timer);
  }, [minValueXTicks, maxValueXTicks]);

  return (
    <div style={{ height: "450px", minWidth: "450px", backgroundColor: "white" }}>
      <style>{`
        .nivo-bar-chart-container .bottom-tick {
          opacity: ${isTransitioning ? '0' : '1'};
          transition: opacity 0.2s ease-in-out;
        }
      `}</style>
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
