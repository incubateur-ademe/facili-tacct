"use client";
import GraphNotFound from '@/assets/images/no_data_on_territory.svg';
import { ExportPngMaplibreButtonNouveauParcours } from '@/components/exports/ExportPng';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { LegendErosionCotiere } from '@/components/maps/legends/legendErosionCotiere';
import { MapErosionCotiere } from '@/components/maps/mapErosionCotiere';
import { ReadMoreFade } from '@/components/utils/ReadMoreFade';
import { CustomTooltipNouveauParcours } from "@/components/utils/Tooltips";
import { Body } from "@/design-system/base/Textes";
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { ErosionCotiereMapper } from '@/lib/mapper/erosionCotiere';
import { CarteCommunes, ErosionCotiere } from "@/lib/postgres/models";
import { ErosionCotiereText } from '@/lib/staticTexts';
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
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const mapRef = useRef<maplibregl.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const erosionCotiereMap = erosionCotiere.map(ErosionCotiereMapper);
  const communesMap = carteCommunes.map(CommunesIndicateursMapper);

  return (
    <>
      <div className={styles.datavizMapContainer}>
        <ReadMoreFade maxHeight={250}>
          <Body weight='bold' style={{ color: "var(--gris-dark)" }} >
            L’érosion est un phénomène qui touche inégalement les côtes, en
            fonction de leur profil géologique. Elle s’observe sur des temps
            longs mais peut connaître des épisodes brutaux selon les
            endroits.
          </Body>
          <CustomTooltipNouveauParcours title={erosionCotiereTooltipText} texte="D'où vient ce chiffre ?" />
          <ErosionCotiereText />
        </ReadMoreFade>
        <div className={styles.mapWrapper} style={{ height: 'fit-content' }}>
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
        </div>
      </div>
      <div className={styles.sourcesExportMapWrapper}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : CEREMA, 2018.
        </Body>
        <ExportPngMaplibreButtonNouveauParcours
          mapRef={mapRef}
          mapContainer={mapContainer}
          documentDiv=".erosionCotiereLegendWrapper"
          fileName={`Erosion_cotiere_${type}_${libelle}`}
          anchor='Érosion côtière'
          type={type}
          libelle={libelle}
          code={code}
          thematique="Gestion des risques"
        />
      </div>
    </>
  );
};
