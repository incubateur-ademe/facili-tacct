"use client";
import GraphNotFound from '@/assets/images/no_data_on_territory.svg';
import { ExportPngMaplibreButtonNouveauParcours } from '@/components/exports/ExportPng';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { LegendErosionCotiere } from '@/components/maps/legends/legendErosionCotiere';
import { MapErosionCotiere } from '@/components/maps/mapErosionCotiere';
import { ErosionCotiereText } from '@/components/themes/inconfortThermique/staticTexts';
import { CustomTooltipNouveauParcours } from "@/components/utils/CalculTooltip";
import { ReadMoreFade } from '@/components/utils/ReadMoreFade';
import { Body } from "@/design-system/base/Textes";
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { ErosionCotiereMapper } from '@/lib/mapper/erosionCotiere';
import { CarteCommunes, ErosionCotiere } from "@/lib/postgres/models";
import { erosionCotiereTooltipText } from '@/lib/tooltipTexts';
import { useSearchParams } from "next/navigation";
import { useRef } from 'react';
import styles from '../../explorerDonnees.module.scss';

export const ErosionCotiereComp = ({
  erosionCotiere,
  carteCommunes
}: {
  erosionCotiere: ErosionCotiere[];
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const mapRef = useRef<maplibregl.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const erosionCotiereMap = erosionCotiere.map(ErosionCotiereMapper);
  const communesMap = carteCommunes.map(CommunesIndicateursMapper);

  return (
    <>
      <div className={styles.datavizContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            <Body weight='bold' style={{ color: "var(--gris-dark)" }} >
              L’érosion est un phénomène qui touche inégalement les côtes, en
              fonction de leur profil géologique. Elle s’observe sur des temps
              longs mais peut connaître des épisodes brutaux selon les
              endroits.
            </Body>
            <CustomTooltipNouveauParcours title={erosionCotiereTooltipText} texte="D'où vient ce chiffre ?" />
          </div>
          <ReadMoreFade maxHeight={640}>
            <ErosionCotiereText />
          </ReadMoreFade>
        </div>
        <div className={styles.datavizWrapper} style={{ height: 'fit-content' }}>
          {
            erosionCotiere.length > 0 ?
              <>
                <MapErosionCotiere
                  erosionCotiere={erosionCotiereMap}
                  carteCommunes={communesMap}
                  mapRef={mapRef}
                  mapContainer={mapContainer}
                />
                <div className='erosionCotiereLegendWrapper'>
                  <LegendErosionCotiere />
                </div>
              </>
              : <div className='p-10 flex flex-row justify-center'><DataNotFoundForGraph image={GraphNotFound} /></div>
          }
          <div className={styles.sourcesExportWrapper} style={{ borderTop: '1px solid var(--gris-medium)', borderBottom: '1px solid var(--gris-medium)' }}>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>
              Source : CEREMA
            </Body>
            <ExportPngMaplibreButtonNouveauParcours
              mapRef={mapRef}
              mapContainer={mapContainer}
              documentDiv=".erosionCotiereLegendWrapper"
              fileName={`Erosion_cotiere_${type}_${libelle}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};
