"use client";

import styles from "@/components/themes/ressourcesEau/ressourcesEau.module.scss";
import { RessourcesEau } from "@/lib/postgres/models";
import { Sum } from "@/lib/utils/reusableFunctions/sum";
import { SumByKey } from "@/lib/utils/reusableFunctions/sumByKey";
import { BarDatum, BarLegendProps, BarTooltipProps } from "@nivo/bar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GraphDataNotFound } from "../graph-data-not-found";
import { NivoBarChart } from "./NivoBarChart";

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

const legendProps: BarLegendProps = {
  dataFrom: 'keys',
  anchor: 'bottom-right',
  direction: 'column',
  justify: false,
  translateX: 120,
  translateY: 0,
  itemsSpacing: 2,
  itemWidth: 100,
  itemHeight: 25,
  itemDirection: 'left-to-right',
  itemOpacity: 0.85,
  symbolSize: 20,
};

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
    // const sorted = Object.entries(obj).sort(([,a],[,b]) => a-b).reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
    const isNull = Sum(Object.values(obj).slice(0, -1))
    isNull != 0 ? dataArr.push(obj) : null;
  });
  return dataArr;
}

const PrelevementEauBarChart = (
  { ressourcesEau, sliderValue }: { ressourcesEau: RessourcesEau[], sliderValue: number[] }
) => {
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;
  const dataParMaille = codgeo ? ressourcesEau.filter((obj) => obj.code_geographique === codgeo) : ressourcesEau.filter((obj) => obj.epci === codepci);
  const [selectedYears, setSelectedYears] = useState<string[]>(ressourcesEauYears.map(year => year.split("A")[1]));
  const graphData = graphDataFunct(selectedYears, dataParMaille)
  const collectiviteName = codgeo ? dataParMaille[0].libelle_geographique : dataParMaille[0].libelle_epci; 

  useEffect(() => {
    setSelectedYears(ressourcesEauYears.slice(ressourcesEauYears.indexOf(`A${sliderValue[0]}`), ressourcesEauYears.indexOf(`A${sliderValue[1]}`) + 1))
  }, [sliderValue]);

  const legends = [
    {
      texte_complet: "Agriculture",
      texte_raccourci: "Agriculture",
      valeur: SumByKey(graphData, 'Agriculture'),
      couleur: "#00C190"
    },
    {
      texte_complet: "Alimentation des canaux",
      texte_raccourci: "Alimentation des canaux",
      valeur: SumByKey(graphData, 'Alimentation des canaux'),
      couleur: "#00C2CC"
    },
    {
      texte_complet: "Eau potable",
      texte_raccourci: "Eau potable",
      valeur: SumByKey(graphData, 'Eau potable'),
      couleur: "#009ADC"
    },
    {
      texte_complet: "Industrie et autres usages économiques",
      texte_raccourci: "Industrie",
      valeur: SumByKey(graphData, 'Industrie et autres usages économiques'),
      couleur: "#7A49BE"
    },
    {
      texte_complet: "Production d'électricité (barrages hydro-électriques)",
      texte_raccourci: "Barrages hydro-électriques",
      valeur: SumByKey(graphData, 'Production d\'électricité (barrages hydro-électriques)'),
      couleur: "#FFCF5E"
    },
    {
      texte_complet: "Refroidissement des centrales électriques",
      texte_raccourci: "Refroidissement des centrales",
      valeur: SumByKey(graphData, 'Refroidissement des centrales électriques'),
      couleur: "#BB43BD"
    }
  ]
  const minValueXTicks = Math.min(...graphData.map(e => Number(e.annee)))
  const maxValueXTicks = Math.max(...graphData.map(e => Number(e.annee)))

  const CustomTooltip = ({ data }: BarTooltipProps<BarDatum>) => {
    const dataArray = Object.entries(data).map(el => {
      return {
        titre: el[0],
        value: el[1],
        color: legends.find(e => e.texte_complet === el[0])?.couleur
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
                  <p>{(Number(el.value) / 1000000).toFixed(2)}Mm³</p>
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
          bottomTickValues={minValueXTicks != maxValueXTicks ? [`${minValueXTicks}`, `${maxValueXTicks}`] : [`${minValueXTicks}`]}
          colors={legends.map(e => e.couleur)}
          graphData={graphData}
          keys={legends.map(e => e.texte_complet)}
          indexBy="annee"
          legendData={legends.filter(e => e.valeur != 0)
            .map((legend, index) => ({
              id: index, 
              label: legend.texte_raccourci,
              color: legend.couleur,
            }))}
          tooltip={CustomTooltip}
          axisLeftLegend="Volumétrie en Mm³"
          axisLeftTickFactor={1000000}
        />
      </div>
    ) : <GraphDataNotFound code={codgeo ? codgeo : codepci} />
  )
};

export default PrelevementEauBarChart;
