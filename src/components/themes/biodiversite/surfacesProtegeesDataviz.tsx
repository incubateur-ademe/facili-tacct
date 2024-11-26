"use client";

import { MapContourTerritoire } from '@/components/maps/mapContourEpci';
import SubTabs from '@/components/SubTabs';
import { SurfacesProtegeesDto } from '@/lib/dto';
import { SurfacesProtegeesGraphMapper } from '@/lib/mapper/biodiversite';
import { CommunesContourMapper } from '@/lib/mapper/communes';
import { CarteCommunes, SurfacesProtegeesByCol } from '@/lib/postgres/models';
import { ResponsiveTreeMap } from '@nivo/treemap';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from "./biodiversite.module.scss";

type GraphData = {
  name: string;
  color: string;
  children: {
    name: string;
    color: string;
    loc: number;
  }[];
}

const Filter = (sp: SurfacesProtegeesByCol[], filter: keyof SurfacesProtegeesByCol): number => {
  const filtered = sp.filter(sp => Number(sp[filter]) !== 0).map(sp => Number(sp[filter])).reduce((a, b) => a + b, 0);
  return filtered;
};

const filterNullValues = (data: SurfacesProtegeesDto) => {
  const tempEntries = Object.entries(data)[2][1] as GraphData[];
  const tempFiltered = tempEntries.map(e => {
    if (e.children.filter(el => el.loc !== 0).length != 0) {
      return {
        name: e.name,
        color: e.color,
        children: e.children.filter(el => el.loc !== 0)
      }
    } else return {}
  })
  const newEntries = [["name", "Surfaces protégées"], ["color", "hsl(271, 70%, 50%)"], ["children", tempFiltered]];
  return Object.fromEntries(newEntries);
}

const SurfacesProtegeesDataviz = (
  props: {
    surfacesProtegees: SurfacesProtegeesByCol[];
    carteCommunes: CarteCommunes[];
  }
) => {
  const { surfacesProtegees, carteCommunes } = props;
  const territoireContourMap = carteCommunes.map(CommunesContourMapper);
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const [datavizTab, setDatavizTab] = useState<string>("Répartition");
  const filteredData = codgeo ? surfacesProtegees.filter(e => e.code_geographique === codgeo) : surfacesProtegees;
  const filteredTerritoire = codgeo ? territoireContourMap.filter(e => e.properties.code_commune === codgeo) : territoireContourMap;
  const data = SurfacesProtegeesGraphMapper(filteredData);
  console.log("surfacesProtegees", 100 * (Filter(surfacesProtegees, "ZNIEFF1")/156465));

  const varTest = 100 * (Filter(surfacesProtegees, "ZNIEFF1")/156465)
  return (
    <div className={styles.graphWrapper}>
      <div className={styles.dataVizGraphTitleWrapper} style={{ padding: "1rem" }}>
        <h2>Surfaces protégées (zonages d’enjeux écologique et dispositifs de protection)</h2>
        <SubTabs data={["Répartition", "Chiffre"]} defaultTab={datavizTab} setValue={setDatavizTab} />
      </div>
      {
        datavizTab === "Répartition" ? (
          <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
            <ResponsiveTreeMap
              data={filterNullValues(data)}
              identity="name"
              value="loc"
              valueFormat=">-.0f"
              tile="squarify"
              leavesOnly={true}
              margin={{ top: 30, right: 50, bottom: 30, left: 30 }}
              labelSkipSize={12}
              label={e => {
                const maxWidth = e.width / 6;
                return e.id?.length > maxWidth ? e.id?.slice(0, maxWidth - 1) + '...' : e.id + " : " + e.formattedValue + " ha";
              }}
              orientLabel={false}
              nodeOpacity={0.05}
              parentLabelTextColor={"#000000"}
              parentLabelSize={25}
              labelTextColor={"#000000"}
              borderColor={{
                from: 'color',
                modifiers: [[ 'darker', 0.1 ]]
              }}
              tooltip={({ node }) => (
                <div className={styles.tooltipSurfacesProtegeesWrapper}>
                  <div className={styles.color} style={{ backgroundColor: node.color }}></div>
                  <p>
                    <b>{node.id}</b> : {node.formattedValue} ha
                  </p>
                </div>
            )}
          />
        </div>
        ) : (
          <>
            <div style={{backgroundColor: "white", height: "500px", width: "100%", display: "flex", alignItems: "end", flexDirection: "column"}}>
              <h2>{varTest}%</h2>
              <MapContourTerritoire territoireContours={filteredTerritoire} pourcentage={varTest}/>
            </div>
          </>
        )
      }
      
      <p style={{ padding: "1em", margin: "0" }}>
        Source : <b style={{ color: "#0063CB" }}>SDES</b>
      </p>
    </div>
  );
};

export default SurfacesProtegeesDataviz;
