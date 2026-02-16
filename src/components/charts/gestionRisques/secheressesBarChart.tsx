"use client";

import { Body } from "@/design-system/base/Textes";
import { useLayoutEffect, useState } from "react";
import { NivoBarChart } from "../NivoBarChart";

export const SecheressesBarChart = (
  {
    restrictionsParAnnee
  }: {
    restrictionsParAnnee: {
      annee: string;
      vigilance: number;
      alerte: number;
      alerte_renforcee: number;
      crise: number;
    }[]
  }
) => {
  const graphData = restrictionsParAnnee.filter(data => ['2020', '2021', '2022', '2023', '2024', '2025'].includes(data.annee));

  const minValueXTicks = graphData[0]?.annee;
  const maxValueXTicks = graphData[graphData.length - 1]?.annee;
  const [isTransitioning, setIsTransitioning] = useState(false);

  useLayoutEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(timer);
  }, [minValueXTicks, maxValueXTicks]);

  return (
    <div
      style={{
        height: "450px",
        minWidth: "450px",
        width: '100%',
        backgroundColor: "white",
        borderRadius: "1rem"
      }}>
      <style>{`
        .nivo-bar-chart-container .bottom-tick {
          opacity: ${isTransitioning ? '0' : '1'};
          transition: opacity 0.2s ease-in-out;
        }
      `}</style>
      {graphData && graphData.length ?
        <NivoBarChart
          graphData={graphData}
          keys={["vigilance", "alerte", "alerte_renforcee", "crise"]}
          indexBy="annee"
          showLegend={false}
          axisLeftLegend="Nombre de restrictions"
          bottomTickValues={
            minValueXTicks !== maxValueXTicks
              ? [`${minValueXTicks}`, `${maxValueXTicks}`]
              : [`${minValueXTicks}`]
          }
          colors={["#FFFF00", "#FF9900", "#EA4335", "#980000"]}
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
