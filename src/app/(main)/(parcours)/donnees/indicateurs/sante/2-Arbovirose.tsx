'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ArboviroseBarChart } from '@/components/charts/sante/arboviroseBarChart';
import { ExportButton } from '@/components/exports/ExportButton';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { CustomTooltipNouveauParcours } from '@/components/utils/Tooltips';
import { Body } from '@/design-system/base/Textes';
import { ArboviroseModel } from '@/lib/postgres/models';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { useSearchParams } from 'next/navigation';
import styles from '../../explorerDonnees.module.scss';

export const Arbovirose = (props: {
  arbovirose: ArboviroseModel[];
}) => {
  const { arbovirose } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;

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

  const exportData = IndicatorExportTransformations.sante.Arbovirose(arbovirose);

  return (
    <>
      <div className={styles.datavizContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            {/* <MicroNumberCircle valeur={arbovirose.length} arrondi={1} unite="" /> */}

            <>
              <div className={styles.text}>
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
              </div>
            </>
          </div>
          Texte arbovirose
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
      </div>
    </>
  );
};
