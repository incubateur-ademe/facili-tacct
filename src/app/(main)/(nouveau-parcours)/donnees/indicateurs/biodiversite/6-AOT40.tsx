"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ExportButtonNouveauParcours } from '@/components/exports/ExportButton';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { aot40Legends } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapAOT40 } from '@/components/maps/mapAOT40';
import { Body } from "@/design-system/base/Textes";
import { AOT40 } from "@/lib/postgres/models";
import { AOT40Text } from '@/lib/staticTexts';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { useSearchParams } from "next/navigation";
import styles from '../../explorerDonnees.module.scss';

const getInverseCentroid = (arr: number[][]) => {
  const centroid = arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
  );
  return [centroid[1], centroid[0]];
};

const getNormalCentroid = (arr: number[][]) => {
  const centroid = arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
  );
  return centroid;
};

const getCoordinates = (coords: number[][][]) => {
  const coords_arr = [];
  for (let i = 0; i < coords.length; i++) {
    const center = getInverseCentroid(coords[i]);
    coords_arr.push(center);
  }
  return getNormalCentroid(coords_arr);
};

export const OzoneEtVegetation = (props: {
  aot40: AOT40[];
  contoursCommunes: { geometry: string } | null;
  communesCodes: string[];
}) => {
  const { aot40, contoursCommunes, communesCodes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const exportData = IndicatorExportTransformations.biodiversite.aot40(aot40);
  return (
    <>
      <div className={styles.datavizMapContainer}>
        <div className='pr-5 pt-8'>
          <AOT40Text />
        </div>
        <div className={styles.mapWrapper}>
          {
            aot40.length && contoursCommunes ? (
              <>
                <MapAOT40
                  aot40={aot40}
                  contoursCommunes={contoursCommunes}
                  communesCodes={communesCodes}
                />
                <div
                  className={styles.legend}
                  style={{ width: 'auto', justifyContent: 'center' }}
                >
                  <LegendCompColor legends={aot40Legends} />
                </div>
              </>
            ) : <div className='p-10 flex flex-row justify-center'><DataNotFoundForGraph image={DataNotFound} /></div>
          }
        </div>
      </div>
      <div className={styles.sourcesExportMapWrapper}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : Geod’air (2024).
        </Body>
        {
          aot40.length && contoursCommunes && (
            <ExportButtonNouveauParcours
              data={exportData}
              baseName="aot_40"
              type={type}
              libelle={libelle}
              code={code}
              sheetName="AOT 40"
              anchor='Ozone et végétation'
            />
          )}
      </div>
    </>
  );
};
