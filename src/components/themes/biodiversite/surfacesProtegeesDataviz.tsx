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

const Filter = (
  sp: SurfacesProtegeesByCol[],
  filter: keyof SurfacesProtegeesByCol
): number => {
  const filtered = sp
    .filter((sp) => Number(sp[filter]) !== 0)
    .map((sp) => Number(sp[filter]))
    .reduce((a, b) => a + b, 0);
  return filtered;
};

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
    ? territoireContourMap.filter((e) => e.properties.code_commune === codgeo)
    : territoireContourMap;
  const surfaceTerritoire = codgeo
    ? carteCommunes.filter((e) => e.code_commune === codgeo)[0].surface
    : carteCommunes.map((el) => el.surface).reduce((a, b) => a + b, 0);
  const data = SurfacesProtegeesGraphMapper(filteredData);

  useEffect(() => {
    const surfaceTemp = data.children.map((e) => {
      const children = e.children!;
      return children.map((e) => e.loc).reduce((a, b) => a + b, 0);
    });
    const sum = surfaceTemp.reduce((a, b) => a + b, 0);
    setSurfacesProtegeesSurfaces(sum);
  }, []);

  const varSurfacesProtegees = codgeo
    ? Round(
        100 *
          (Filter(
            surfacesProtegees.filter((e) => e.code_geographique === codgeo),
            'TOU_PRO'
          ) /
            surfaceTerritoire),
        1
      )
    : Round(
        100 *
          (surfacesProtegees
            .map((e) => Number(e.TOU_PRO))
            .reduce((a, b) => a + (b || 0), 0) /
            surfaceTerritoire),
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
        <h2>Surfaces protégées</h2>
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
            {legends.map((e) => (
              <div key={e.name} className={styles.legend}>
                <div
                  className={styles.color}
                  style={{ backgroundColor: e.color }}
                />
                <p className="m-0 p-0" style={{ fontSize: '16px' }}>
                  {e.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : datavizTab === 'Cartographie' ? (
        <>
          <div
            style={{
              backgroundColor: 'white',
              height: '500px',
              width: '100%',
              display: 'flex',
              alignItems: 'end',
              flexDirection: 'column'
            }}
          >
            <MapContourTerritoire
              territoireContours={filteredTerritoire}
              pourcentage={varSurfacesProtegees}
            />
          </div>
        </>
      ) : (
        ''
      )}
      <p style={{ padding: '1em', margin: '0' }}>Source : SDES</p>
    </div>
  );
};

export default SurfacesProtegeesDataviz;
