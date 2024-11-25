"use client";

import { SurfacesProtegeesDto } from '@/lib/dto';
import { SurfacesProtegeesGraphMapper } from '@/lib/mapper/biodiversite';
import { SurfacesProtegeesByCol } from '@/lib/postgres/models';
import { ResponsiveTreeMap } from '@nivo/treemap';
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
  }
) => {
  const { surfacesProtegees } = props;
  const data = SurfacesProtegeesGraphMapper(surfacesProtegees);

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.dataVizGraphTitleWrapper} style={{ padding: "1rem" }}>
        <h2>Surfaces protégées (zonages d’enjeux écologique et dispositifs de protection)</h2>
      </div>
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
      />
      </div>
      <p style={{ padding: "1em", margin: "0" }}>
        Source : <b style={{ color: "#0063CB" }}>SDES</b>
      </p>
    </div>
  );
};

export default SurfacesProtegeesDataviz;
