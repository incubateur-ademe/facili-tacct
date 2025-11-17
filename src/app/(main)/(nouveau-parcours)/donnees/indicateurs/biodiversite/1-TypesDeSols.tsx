"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { MicroRemplissageTerritoire } from '@/components/charts/MicroDataviz';
import { generateMapPngBlob } from '@/components/exports/ExportPng';
import { ZipExportButtonNouveauParcours } from '@/components/exports/ZipExportButton';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { vegetalisationLegend } from "@/components/maps/legends/datavizLegends";
import { LegendCompColor } from "@/components/maps/legends/legendComp";
import { MapCLCTiles } from '@/components/maps/mapCLCTiles';
import { Body } from "@/design-system/base/Textes";
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { vegetalisationMapper } from '@/lib/mapper/inconfortThermique';
import { CarteCommunes, ConfortThermique } from "@/lib/postgres/models";
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { exportAsZip } from '@/lib/utils/export/exportZipGeneric';
import { eptRegex } from "@/lib/utils/regex";
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from "next/navigation";
import { useRef } from 'react';
import styles from '../../explorerDonnees.module.scss';
import { sumProperty } from '../fonctions';

export const TypesDeSols = ({
  confortThermique,
  carteCommunes,
}: {
  confortThermique: ConfortThermique[];
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const guyaneConditions = code && !(
    code.startsWith("973") ||
    (type === "epci" && code.startsWith("24973")) ||
    (type === "epci" && code === "200027548") ||
    (type === "pnr" && code === "FR8000040")
  )
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const legendRef = useRef<HTMLDivElement>(null);
  const vegetalisationMapped = confortThermique.map(vegetalisationMapper);
  const vegetalisationTerritoire =
    type === 'commune'
      ? vegetalisationMapped.filter((e) => e.code_geographique === code)
      : type === 'ept' && eptRegex.test(libelle)
        ? vegetalisationMapped.filter((e) => e.ept === libelle)
        : type === 'epci' && !eptRegex.test(libelle)
          ? vegetalisationMapped.filter((e) => e.epci === code)
          : vegetalisationMapped;
  const carteContours = carteCommunes.map(CommunesIndicateursMapper);

  const foretSum = sumProperty(
    vegetalisationTerritoire,
    'clc_3_foret_semiNaturel'
  );
  const foretPercent = (100 * foretSum) /
    (100 * sumProperty(vegetalisationTerritoire, 'superf_choro'));
  const exportData = IndicatorExportTransformations.inconfort_thermique.vegetalisation(vegetalisationTerritoire);
  return (
    <>
      <div className={styles.datavizMapContainer}>
        {/* Pour exclure la Guyane, si le code commence par "973" (communes et département), on l'exclut
        Pour les EPCI qui commencent par 24973, un PNR en Guyane avec code FR8000040, l'EPCI
        des Savanes qui est le code 200027548 */}
        {
          guyaneConditions &&
          <div className={styles.chiffreDynamiqueWrapper} style={{ alignItems: 'center' }}>
            {
              isNaN(foretPercent) ? "" : (
                <>
                  <MicroRemplissageTerritoire
                    pourcentage={foretPercent}
                    territoireContours={carteContours}
                    arrondi={1}
                  />
                  <div className={styles.text}>
                    <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                      {foretPercent == Infinity ? 0 : Round(foretPercent, 1)} % de votre territoire est
                      recouvert par de la forêt ou des espaces semi-naturels.
                    </Body>
                  </div>
                </>
              )
            }
          </div>
        }
        <Body size='sm' style={{ marginTop: isNaN(foretPercent) || !guyaneConditions ? '0rem' : '1rem' }}>
          Les forêts et les espaces semi-naturels constituent des refuges essentiels
          pour la biodiversité, abritant 80 % des espèces terrestres. Ces milieux
          offrent habitat, nourriture et corridors de circulation pour la faune et
          la flore. Plus leur surface est importante et connectée, plus l'écosystème
          résiste aux pressions climatiques et humaines.
        </Body>
        <div className={styles.mapWrapper}>
          {
            confortThermique && confortThermique.length ? (
              <>
                {/* <MapCLC clc={clc} mapRef={mapRef} mapContainer={mapContainer} /> */}
                <MapCLCTiles carteContours={carteContours} mapRef={mapRef} mapContainer={mapContainer} />
                <div
                  ref={legendRef}
                  className={styles.legendTypesDeSols}
                  style={{ width: 'auto', justifyContent: 'center' }}
                >
                  <LegendCompColor legends={vegetalisationLegend} />
                </div>
              </>
            ) : <div className='p-10 flex flex-row justify-center'><DataNotFoundForGraph image={DataNotFound} /></div>
          }
        </div>
      </div>
      {
        confortThermique && confortThermique.length &&
        <div className={styles.sourcesExportMapWrapper}>
          <Body size='sm' style={{ color: "var(--gris-dark)" }}>
            Source : CORINE Land Cover, 2018.
          </Body>
          <ZipExportButtonNouveauParcours
            anchor='Types de sols'
            handleExport={async () => {
              const pngBlob = await generateMapPngBlob({
                mapRef,
                mapContainer,
                documentDiv: legendRef.current!,
              });
              if (!pngBlob) {
                alert("Erreur lors de la génération de l'image PNG.");
                return;
              }
              await exportAsZip({
                excelFiles: [{
                  data: exportData,
                  baseName: "vegetalisation",
                  sheetName: "Végétalisation",
                  type,
                  libelle
                }],
                blobFiles: [{
                  blob: pngBlob,
                  filename: `Carte_Vegetalisation_${type}_${libelle}.png`
                }],
                zipFilename: `vegetalisation_export_${new Date().toISOString().split('T')[0]}.zip`
              })
            }}
            code={code}
            libelle={libelle}
            type={type}
            thematique="Biodiversité"
          >
            Exporter
          </ZipExportButtonNouveauParcours>
        </div>
      }
    </>
  );
};
