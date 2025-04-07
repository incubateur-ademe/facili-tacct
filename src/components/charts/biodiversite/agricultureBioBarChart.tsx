"use client";

import styles from "@/components/themes/biodiversite/biodiversite.module.scss";
import { AgricultureBio } from "@/lib/postgres/models";
import { Round } from "@/lib/utils/reusableFunctions/round";
import { Sum } from "@/lib/utils/reusableFunctions/sum";
import { BarDatum, BarTooltipProps } from "@nivo/bar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GraphDataNotFound } from "../../graph-data-not-found";
import { NivoBarChart } from "../NivoBarChart";

type GraphData = {
  "Surface certifiée agriculture biologique": number;
  "Surface en conversion agriculture biologique": number;
  // "Surface totale agriculture biologique": number;
  // "Surface agricole totale": number;
  // "Surface restante à convertir": number;
  // "part_agribio": number;
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
      // "Surface totale agriculture biologique": Sum(genericObjects("Surface totale", "LIBELLE_SOUS_CHAMP")),
      // "Surface agricole totale": Sum(genericObjects("saue", "VARIABLE")),
      // "Surface restante à convertir": Sum(genericObjects("saue", "VARIABLE")) - Sum(genericObjects("Surface totale", "LIBELLE_SOUS_CHAMP")),
      // "part_agribio": Sum(genericObjects("part_agribio_surf")),
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
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
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
      texte_raccourci: "Surface certifiée",
      valeur: Sum(graphData.map(e => e["Surface certifiée agriculture biologique"])),
      couleur: "#00C2CC"
    },
    {
      variable: "Surface en conversion agriculture biologique",
      texte_raccourci: "Surface en conversion",
      valeur: Sum(graphData.map(e => e["Surface en conversion agriculture biologique"])),
      couleur: "#00949D"
    },
  ]

  const CustomTooltip = ({ data }: BarTooltipProps<BarDatum>) => {
    const dataArray = Object.entries(data).map(el => {
      return {
        titre: el[0],
        value: el[1],
        color: legends.find(e => e.variable === el[0])?.couleur
      }
    });

    return (
      <div className={styles.tooltipEvolutionWrapper}>
        <h3>{collectiviteName} ({dataArray.at(-1)?.value})</h3>
        {
          dataArray.slice(0, -1).map((el, i) => {
            return (
              <div className={styles.itemWrapper} key={i}>
                <div className={styles.titre}> 
                  <div className={styles.colorSquare} style={{background: el.color}}/>
                  <p>{el.titre}</p>
                </div>
                <div className={styles.value}>
                  <p>{Round(Number(el.value), 0)} ha</p>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }

  return (
    graphData && graphData.length ? (
      <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
        <NivoBarChart
          colors={legends.map(e => e.couleur)}
          graphData={graphData}
          keys={legends.map(e => e.variable)}
          indexBy="annee"
          legendData={legends.filter(e => e.valeur != 0)
            .map((legend, index) => ({
              id: index, 
              label: legend.texte_raccourci,
              color: legend.couleur,
            }))}
          tooltip={CustomTooltip}
          axisLeftLegend="Surface en ha"
        />
      </div>
    ) : <GraphDataNotFound code={code ?? libelle} />
  )
};
