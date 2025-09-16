"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ExportPngMaplibreButtonNouveauParcours } from '@/components/exports/ExportPng';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import MapLCZNouveauParcours from '@/components/maps/mapLCZNouveauParcours';
import { ReadMoreFade } from '@/components/utils/ReadMoreFade';
import { CustomTooltipNouveauParcours } from '@/components/utils/Tooltips';
import { Body } from "@/design-system/base/Textes";
import { CarteCommunes } from "@/lib/postgres/models";
import { GetLczCouverture } from '@/lib/queries/databases/inconfortThermique';
import { LCZCeremaText1, LCZText, LCZText2 } from '@/lib/staticTexts';
import { LCZTooltipText } from '@/lib/tooltipTexts';
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from 'react';
import styles from '../../explorerDonnees.module.scss';

export const LCZ = ({
  carteCommunes,
}: {
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const exportPNGRef = useRef<HTMLDivElement | null>(null);
  const [isLczCovered, setIsLczCovered] = useState<boolean | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void (async () => {
      const temp = await GetLczCouverture(code, libelle, type);
      setIsLczCovered(temp);
      setIsLoading(false);
    })()
  }, [code]);

  return (
    <>
      <div className={styles.datavizMapContainer}>
        <ReadMoreFade maxHeight={350}>
          {isLczCovered ? <LCZCeremaText1 /> : <LCZText2 />}
          <CustomTooltipNouveauParcours title={LCZTooltipText} texte='Que sont les LCZ ?' />
          <LCZText />
        </ReadMoreFade>
        <div className={styles.mapWrapper}>
          {
            carteCommunes.length > 0 ? (
              <div ref={exportPNGRef}>
                <MapLCZNouveauParcours
                  carteCommunes={carteCommunes}
                  isLoading={isLoading}
                  isLczCovered={isLczCovered}
                  mapRef={mapRef}
                  mapContainer={mapContainer}
                />
              </div>
            ) : <div className='p-10 flex flex-row justify-center'><DataNotFoundForGraph image={DataNotFound} /></div>
          }
        </div>
      </div>
      <div className={styles.sourcesExportMapWrapper}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : {
            isLczCovered
              ? "CEREMA"
              : <a
                href="https://doi.org/10.5194/essd-14-3835-2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                Matthias Demuzere et al. 2022
              </a>}
        </Body>
        <ExportPngMaplibreButtonNouveauParcours
          mapRef={mapRef}
          mapContainer={mapContainer}
          documentDiv=".lczLegendWrapper"
          fileName={`LCZ_${type}_${libelle}`}
          style={{ backgroundColor: 'var(--principales-vert)' }}
          anchor='LCZ'
          type={type}
          libelle={libelle}
          code={code}
          thematique="Aménagement"
        />
      </div>
    </>
  );
};
