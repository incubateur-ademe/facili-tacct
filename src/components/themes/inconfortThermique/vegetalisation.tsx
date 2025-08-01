'use client';
import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import { default as DataNotFound } from '@/assets/images/no_data_on_territory.svg';
import { ZipExportButton } from '@/components/exports/ZipExportButton';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { CLCMap } from '@/components/maps/CLC';
import { vegetalisationLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import TagInIndicator from '@/components/patch4/TagInIndicator';
import { VegetalisationDto } from '@/lib/dto';
import { vegetalisationMapper } from '@/lib/mapper/inconfortThermique';
import { CLCTerritoires, InconfortThermique, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { exportAsZip } from '@/lib/utils/export/exportZipGeneric';
import { eptRegex } from '@/lib/utils/regex';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { VegetalisationText } from './staticTexts';
import styles from './themes.module.scss';

const sumProperty = (
  items: VegetalisationDto[],
  property:
    | 'clc_1_artificialise'
    | 'clc_2_agricole'
    | 'clc_3_foret_semiNaturel'
    | 'clc_4_humide'
    | 'clc_5_eau'
    | 'superf_choro'
) => {
  return items.reduce(function (a, b) {
    return a + b[property];
  }, 0);
};

const Vegetalisation = (props: {
  clc: CLCTerritoires[] | undefined;
  inconfortThermique: InconfortThermique[];
}) => {
  const { inconfortThermique, clc } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const exportPNGRef = useRef<HTMLDivElement | null>(null);
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);

  const vegetalisationMapped = inconfortThermique.map(vegetalisationMapper);
  const vegetalisationTerritoire =
    type === 'commune'
      ? vegetalisationMapped.filter((e) => e.code_geographique === code)
      : type === 'ept' && eptRegex.test(libelle)
        ? vegetalisationMapped.filter((e) => e.ept === libelle)
        : type === 'epci' && !eptRegex.test(libelle)
          ? vegetalisationMapped.filter((e) => e.epci === code)
          : vegetalisationMapped;
  const exportData = IndicatorExportTransformations.inconfort_thermique.vegetalisation(vegetalisationTerritoire);
  const foretSum = sumProperty(
    vegetalisationTerritoire,
    'clc_3_foret_semiNaturel'
  );
  const foretPercent = (100 * foretSum) /
    (100 * sumProperty(vegetalisationTerritoire, 'superf_choro'));

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci' || type === 'ept') {
        const temp = await GetPatch4(code, type, libelle);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const secheresse = patch4 ? AlgoPatch4(patch4, 'secheresse_sols') : "null";

  return (
    <>
      {!isLoadingPatch4 ? (
        <div className={styles.container}>
          <div className="w-2/5">
            <div className={styles.explicationWrapper}>
              {isNaN(foretPercent) ? "" :
                foretPercent == Infinity ? (
                  <p style={{ color: '#161616' }}>
                    Sur le territoire, la forêt et les espaces semi-naturels
                    recouvrent <b>{Round(foretSum, 1)}</b> hectares.
                  </p>
                ) : (
                  <p style={{ color: '#161616' }}>
                    Sur votre territoire, <b>{Round(foretPercent, 1)} %</b> est
                    recouvert par de la forêt ou des espaces semi-naturels. Cela correspond à
                    <b> {Round(foretSum, 1)}</b> hectares.
                  </p>
                )}
              <TagInIndicator
                indice={["Sécheresse des sols"]}
                icon={[secheresseIcon]}
                tag={[secheresse]}
              />
            </div>
            <VegetalisationText />
          </div>
          <div className="w-3/5">
            <div className={styles.graphWrapper}>
              <p style={{ padding: '1em', margin: '0' }}>
                <b>Cartographie des différents types de sols</b>
              </p>
              {
                clc && clc.length ? (
                  <div ref={exportPNGRef}>
                    <CLCMap clc={clc} />
                    <div
                      className={styles.legend}
                      style={{ width: 'auto', justifyContent: 'center' }}
                    >
                      <LegendCompColor legends={vegetalisationLegend} />
                    </div>
                  </div>
                ) : <DataNotFoundForGraph image={DataNotFound} />
              }
              <div className={styles.sourcesExportWrapper}>
                <p>
                  Source : CORINE Land Cover
                </p>
                <ZipExportButton
                  handleExport={() => exportAsZip({
                    excelFiles: [{
                      data: exportData,
                      baseName: "vegetalisation",
                      sheetName: "Végétalisation",
                      type,
                      libelle
                    }],
                    pngFiles: [{
                      ref: exportPNGRef,
                      filename: 'végétalisation.png'
                    }],
                    zipFilename: `vegetalisation_export_${new Date().toISOString().split('T')[0]}.zip`
                  })}
                >
                  Exporter
                </ZipExportButton>
              </div>
            </div>
            {/* <button onClick={() => exportDatavizAsPNG(exportPNGRef, 'végétalisation.png')}>Exporter PNG</button> */}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Vegetalisation;
