'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ArboviroseBarChart } from '@/components/charts/sante/arboviroseBarChart';
import { ExportButton } from '@/components/exports/ExportButton';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { MapJson } from '@/components/maps/mapFrance';
import { SliderAnnees } from '@/components/SliderAnnees';
import { Body } from '@/design-system/base/Textes';
import { ArboviroseModel } from '@/lib/postgres/models';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import styles from '../../explorerDonnees.module.scss';

export const Arbovirose = (props: {
  arbovirose: ArboviroseModel[];
}) => {
  const { arbovirose } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const mapRef1 = useRef<maplibregl.Map | null>(null);
  const mapContainer1 = useRef<HTMLDivElement>(null);
  const mapRef2 = useRef<maplibregl.Map | null>(null);
  const mapContainer2 = useRef<HTMLDivElement>(null);
  const [selectedAnnee, setSelectedAnnee] = useState(2022);
  const aggregatedArbovirose = Object.values(
    arbovirose.reduce<Record<string, { annee: string; nb_cas_importes: number; nb_cas_autochtones: number }>>(
      (acc, item) => {
        if (!acc[item.annee]) {
          acc[item.annee] = { annee: item.annee, nb_cas_importes: 0, nb_cas_autochtones: 0 };
        }
        acc[item.annee].nb_cas_importes += item.nb_cas_importes;
        acc[item.annee].nb_cas_autochtones += item.nb_cas_autochtones;
        return acc;
      },
      {}
    )
  );

  const totalCas2024 = arbovirose
    .filter(item => item.annee === '2024')
    .reduce((acc, item) => acc + item.nb_cas_importes + item.nb_cas_autochtones, 0);

  const casParDepartement = arbovirose
    .filter(item => item.annee === String(selectedAnnee))
    .reduce<Record<string, number>>((acc, item) => {
      acc[item.departement] = (acc[item.departement] ?? 0) + item.nb_cas_autochtones;
      return acc;
    }, {});

  const exportData = IndicatorExportTransformations.sante.Arbovirose(arbovirose);

  return (
    <>
      <div className={styles.datavizDoubleMapContainer}>
        <div className={styles.chiffreDynamiqueWrapper}>
          <Body>Texte Dynamique</Body>
        </div>
        <div className={styles.mapsWrapper}>
          <div className={styles.slider}>
            <SliderAnnees anneeDebut={2004} anneeFin={2024} onChange={setSelectedAnnee} />
          </div>
          <div className={styles.doubleMaps}>
            <div className={styles.singleMaps}>
              <Body size='sm' style={{ textAlign: "center" }}>
                Présence du moustique tigre par département par an (France métropolitaine)
              </Body>
              <MapJson
                mapRef={mapRef1}
                mapContainer={mapContainer1}
                annee={selectedAnnee}
              />
            </div>
            <div className={styles.singleMaps}>
              <Body size='sm' style={{ textAlign: "center" }}>
                Cas autochtones d’arbovirose par département par an (France métropolitaine)
              </Body>
              <MapJson
                mapRef={mapRef2}
                mapContainer={mapContainer2}
                annee={selectedAnnee}
                casParDepartement={casParDepartement}
              />
            </div>
          </div>

          <>
            {/* <div className={styles.text}>
                {
                  arbovirose.length > 1 ?
                    <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                      Votre territoire compte en 2024 {totalCas2024} cas d'arbovirose
                    </Body>
                    : <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                      Votre territoire ne compte aucun cas d'arbovirose référencé
                    </Body>
                }
                <CustomTooltipNouveauParcours
                  title={<>définition</>}
                  texte="Définition"
                />
              </div> */}
          </>
        </div>
      </div>
      <div className={styles.datavizWrapper} style={{ borderRadius: "1rem 0 0 1rem", height: "fit-content" }}>
        <div className={styles.dataWrapper}>
          {
            arbovirose.length > 0 ? (
              <ArboviroseBarChart arbovirose={aggregatedArbovirose} />
            ) : (
              <div className='p-10 flex flex-row justify-center'>
                <DataNotFoundForGraph image={DataNotFound} />
              </div>
            )
          }
        </div>
        <div
          className={styles.sourcesExportWrapper}
          style={{
            borderTop: "1px solid var(--gris-medium)",
            borderRadius: "0 0 0 1rem"
          }}
        >
          <Body size='sm' style={{ color: "var(--gris-dark)" }}>
            Source :
          </Body>
          <ExportButton
            data={exportData}
            baseName="arbovirose"
            type={type}
            libelle={libelle}
            code={code}
            sheetName="Arbovirose"
            anchor="Arbovirose"
          />
        </div>
      </div>
    </>
  );
};
