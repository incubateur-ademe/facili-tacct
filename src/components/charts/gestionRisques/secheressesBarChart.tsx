"use client";

import { Body } from "@/design-system/base/Textes";
import { SecheressesParsed } from "@/lib/postgres/models";
import { useLayoutEffect, useState } from "react";
import { NivoBarChart } from "../NivoBarChart";

const AnneesSecheresses = [
  "restrictions_2013",
  "restrictions_2014",
  "restrictions_2015",
  "restrictions_2016",
  "restrictions_2017",
  "restrictions_2018",
  "restrictions_2019",
  "restrictions_2020",
  "restrictions_2021",
  "restrictions_2022",
  "restrictions_2023",
  "restrictions_2024"
];

export const SecheressesBarChart = (
  { secheresses }: { secheresses: SecheressesParsed[] }
) => {
  // Transformer les données pour avoir une entrée par année avec le nombre total de restrictions
  const graphData = AnneesSecheresses.map(yearKey => {
    const year = yearKey.replace('restrictions_', '');
    let totalRestrictions = 0;

    secheresses.forEach(secheresse => {
      const restrictions = secheresse[yearKey as keyof SecheressesParsed];
      if (restrictions && Array.isArray(restrictions)) {
        totalRestrictions += restrictions.length;
      }
    });

    return {
      annee: year,
      restrictions: totalRestrictions
    };
  });

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
          keys={["restrictions"]}
          indexBy="annee"
          showLegend={false}
          axisLeftLegend="Nombre de restrictions"
          bottomTickValues={
            minValueXTicks !== maxValueXTicks
              ? [`${minValueXTicks}`, `${maxValueXTicks}`]
              : [`${minValueXTicks}`]
          }
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
