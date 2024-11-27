"use client";

import { MapContourTerritoire } from '@/components/maps/mapContourTerritoire';
import SubTabs from '@/components/SubTabs';
import { SurfacesProtegeesDto } from '@/lib/dto';
import { SurfacesProtegeesGraphMapper } from '@/lib/mapper/biodiversite';
import { CommunesContourMapper } from '@/lib/mapper/communes';
import { CarteCommunes, SurfacesProtegeesByCol } from '@/lib/postgres/models';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { ResponsiveTreeMap } from '@nivo/treemap';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  
  console.log("Carte communes", carteCommunes);
  const territoireContourMap = carteCommunes.map(CommunesContourMapper);
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const [datavizTab, setDatavizTab] = useState<string>("Chiffre");
  const [surfacesProtegeesSurfaces, setSurfacesProtegeesSurfaces] = useState<number>(0);
  const filteredData = codgeo ? surfacesProtegees.filter(e => e.code_geographique === codgeo) : surfacesProtegees;
  const filteredTerritoire = codgeo ? territoireContourMap.filter(e => e.properties.code_commune === codgeo) : territoireContourMap;
  const surfaceTerritoire = codgeo ? carteCommunes.filter(e => e.code_commune === codgeo)[0].surface : carteCommunes.map(el => el.surface).reduce((a, b) => a + b, 0);
  const data = SurfacesProtegeesGraphMapper(filteredData);

  console.log("surfaceTerritoire", surfaceTerritoire);
  console.log("surfacesProtegees", surfacesProtegees);
  console.log("surfacesProtegeesSurfaces", surfacesProtegeesSurfaces);

  // Calculer surfaces tou_pro
  console.log("Surfaces tou_pro", Filter(surfacesProtegees.filter(e => e.code_geographique === codgeo), "TOU_PRO"));

  useEffect(() => {
    const surfaceTemp = data.children.map(e => {
      const children = e.children!;
      return children.map(e => e.loc).reduce((a, b) => a + b, 0);
    });
    const sum = surfaceTemp.reduce((a, b) => a + b, 0);
    setSurfacesProtegeesSurfaces(sum);
  }, []);
  
  const varSurfacesProtegees = Round(100 * (Filter(surfacesProtegees.filter(e => e.code_geographique === codgeo), "TOU_PRO") / surfaceTerritoire), 1);

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.dataVizGraphTitleWrapper} >
        <h2>Surfaces protégées</h2>
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
              leavesOnly={false}
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
              <h4 style={{alignSelf: "center"}}>Pourcentage de surfaces protégées : {varSurfacesProtegees} %</h4>
              <MapContourTerritoire territoireContours={filteredTerritoire} pourcentage={varSurfacesProtegees}/>
            </div>
          </>
        )
      }
      
      <p style={{ padding: "1em", margin: "0" }}>
        Source : SDES
      </p>
    </div>
  );
};

export default SurfacesProtegeesDataviz;
