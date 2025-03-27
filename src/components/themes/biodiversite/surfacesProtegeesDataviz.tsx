'use client';

import { SurfacesProtegeesTreeMap } from '@/components/charts/biodiversite/surfacesProtegeesTreeMap';
import { MapContourTerritoire } from '@/components/maps/mapContourTerritoire';
import SubTabs from '@/components/SubTabs';
import { SurfacesProtegeesGraphMapper } from '@/lib/mapper/biodiversite';
import { CommunesContourMapper } from '@/lib/mapper/communes';
import { CarteCommunes, SurfacesProtegeesByCol } from '@/lib/postgres/models';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './biodiversite.module.scss';

const SurfacesProtegeesDataviz = (props: {
  surfacesProtegees: SurfacesProtegeesByCol[];
  carteCommunes: CarteCommunes[];
}) => {
  const { surfacesProtegees, carteCommunes } = props;
  const territoireContourMap = carteCommunes.map(CommunesContourMapper);
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const [datavizTab, setDatavizTab] = useState<string>('Cartographie');
  const [surfacesProtegeesSurfaces, setSurfacesProtegeesSurfaces] =
    useState<number>(0);
  const filteredData = codgeo
    ? surfacesProtegees.filter((e) => e.code_geographique === codgeo)
    : surfacesProtegees;
  const filteredTerritoire = codgeo
    ? territoireContourMap.filter(
        (e) => e.properties.code_geographique === codgeo
      )
    : territoireContourMap;
  const surfaceTerritoire = codgeo
    ? carteCommunes.filter((e) => e.code_geographique === codgeo)[0].surface
    : carteCommunes.map((el) => el.surface).reduce((a, b) => a + b, 0);
  const data = SurfacesProtegeesGraphMapper(filteredData);
  const sommeSurfaces = filteredData
    .map((e) => {
      return {
        FOR_PRO: Number(e.FOR_PRO),
        TOU_PRO: Number(e.TOU_PRO),
        NATURA: Number(e.NATURA),
        CELRL: Number(e.CELRL),
        ZZZ: Number(e.ZZZ)
      };
    })
    .map((e) => e.CELRL + e.FOR_PRO + e.NATURA + e.TOU_PRO + e.ZZZ)
    .reduce((a, b) => a + b, 0);

  useEffect(() => {
    const surfaceTemp = data.children.map((e) => {
      const children = e.children!;
      return children.map((e) => e.loc).reduce((a, b) => a + b, 0);
    });
    const sum = surfaceTemp.reduce((a, b) => a + b, 0);
    setSurfacesProtegeesSurfaces(sum);
  }, []);

  const varSurfacesProtegees = Round(
    100 * (sommeSurfaces / surfaceTerritoire),
    1
  );
  const legends = data.children.map((e) => {
    return {
      name: e.name,
      color: e.color
    };
  });

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.dataVizGraphTitleWrapper}>
        <h2>Espaces d’intérêt écologique ou protégés</h2>
        <SubTabs
          data={['Cartographie', 'Répartition']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Répartition' ? (
        <div>
          <SurfacesProtegeesTreeMap data={data} />
          <div className={styles.treemapLegendWrapper}>
            {legends.map((e, i) => (
              <div key={i} className={styles.legendTreeMap}>
                <div
                  className={styles.colorTreeMap}
                  style={{ backgroundColor: e.color }}
                />
                <p className={styles.legendText}>{e.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : datavizTab === 'Cartographie' ? (
        <>
          <div className={styles.surfacesProtegeesMapWrapper}>
            <MapContourTerritoire
              territoireContours={filteredTerritoire}
              pourcentage={varSurfacesProtegees}
            />
          </div>
        </>
      ) : (
        ''
      )}
      <p className="m-0 p-4">
        Source : SDES d’après Muséum national d’histoire naturelle dans
        Catalogue DiDo (Indicateurs territoriaux de développement durable -
        ITDD)
      </p>
    </div>
  );
};

export default SurfacesProtegeesDataviz;
