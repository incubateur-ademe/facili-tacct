"use client";

import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { PieChartDataSurfacesAgricoles } from '@/lib/charts/surfacesAgricoles';
import { Patch4, SurfacesAgricolesModel } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { multipleEpciBydepartementLibelle } from '@/lib/territoireData/multipleEpciBydepartement';
import { multipleEpciByPnrLibelle } from '@/lib/territoireData/multipleEpciByPnr';
import { surfacesAgricolesTooltipText } from '@/lib/tooltipTexts';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { numberWithSpacesRegex } from '@/lib/utils/regex';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SurfacesAgricolesText } from '../inconfortThermique/staticTexts';
import styles from './agriculture.module.scss';
import SurfacesAgricolesDataviz from './surfacesAgricolesDataviz';

export const SurfacesAgricoles = ({
  surfacesAgricoles
}: {
  surfacesAgricoles: SurfacesAgricolesModel[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const categoriesData = PieChartDataSurfacesAgricoles(surfacesAgricoles);
  const maxCategory = categoriesData.reduce(
    (max, item) => (item.count > max.count ? item : max),
    categoriesData[0]
  );
  const sommeToutesSuperficies = Sum(surfacesAgricoles.map(el => el.superficie_sau))
  const territoiresPartiellementCouverts = type === 'departement'
    ? multipleEpciBydepartementLibelle.find(dept => dept.departement === code)?.liste_epci_multi_dept
    : type === 'pnr'
      ? multipleEpciByPnrLibelle.find(pnr => pnr.libelle_pnr === libelle)?.liste_epci_multi_pnr
      : undefined;

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci' || type === 'ept') {
        const temp = await GetPatch4(code, type, libelle);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const secheresse = patch4 ? AlgoPatch4(patch4, 'secheresse_sols') : undefined;
  const exportData = IndicatorExportTransformations.agriculture.surfacesAgricoles(surfacesAgricoles);

  return (
    <>
      {!isLoadingPatch4 && surfacesAgricoles ? (
        <div className={styles.container}>
          <>
            <div className={surfacesAgricoles.length > 0 ? "w-2/5" : "w-1/2"}>
              <div className={styles.explicationWrapper}>
                {
                  surfacesAgricoles.length ? (
                    <>
                      <p style={{ color: '#161616' }}>
                        Pour le recensement de 2020, les informations détaillées sur les types
                        de cultures ne sont disponibles qu'au niveau des EPCI.
                      </p>
                      <br></br>
                      <p>
                        Sur votre {type === "commune" ? "EPCI" : "territoire"}, le type de surface
                        prédominant est constitué de <b>{maxCategory.id.toLowerCase()}</b>,
                        couvrant <b>{numberWithSpacesRegex(maxCategory.count)} hectares</b>, ce qui
                        représente <b>{Round((maxCategory.count / sommeToutesSuperficies) * 100, 1)} %</b> de
                        la surface agricole utile.
                      </p>
                      {
                        (type === "departement" || type === "pnr") && territoiresPartiellementCouverts && (
                          <>
                            <p style={{ color: '#3a3a3a' }}>
                              <br></br>
                              Sur votre territoire, <b>{territoiresPartiellementCouverts?.length} EPCI</b> {territoiresPartiellementCouverts?.length === 1 ? "est" : "sont"} à
                              cheval sur plusieurs {type !== "pnr" ? "départements" : "PNR"} :

                            </p>
                            <ul style={{ margin: "0.5rem 0 0 1.5rem" }}>
                              {territoiresPartiellementCouverts?.map((epci, index) => (
                                <li key={index} style={{ fontSize: "1rem" }}>{epci}</li>
                              ))}
                            </ul>
                          </>
                        )
                      }
                    </>
                  ) : <p>Il n’y a pas de données référencées sur le territoire que vous avez sélectionné</p>
                }
                <div className={styles.patch4Wrapper}>
                  {secheresse === 'Aggravation très forte' ||
                    secheresse === 'Aggravation forte' ? (
                    <TagItem
                      icon={secheresseIcon}
                      indice="Sécheresse des sols"
                      tag={secheresse}
                    />
                  ) : null}
                </div>
                <CustomTooltip title={surfacesAgricolesTooltipText} texte="D'où vient ce chiffre ?" />
              </div>
              <SurfacesAgricolesText />
            </div>
            <div className={surfacesAgricoles.length > 0 ? "w-3/5" : "w-1/2"}>
              {
                surfacesAgricoles.length > 0 ? (
                  <>
                    <SurfacesAgricolesDataviz
                      surfacesAgricoles={surfacesAgricoles}
                      datavizTab={datavizTab}
                      setDatavizTab={setDatavizTab}
                      exportData={exportData}
                    />
                  </>
                ) : (
                  <div className={styles.graphWrapper}>
                    <p style={{ padding: '1em', margin: '0' }}>
                      <b>Surface agricole par type de culture</b>
                    </p>
                    <DataNotFoundForGraph image={DataNotFound} />
                  </div>
                )
              }
            </div>
          </>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
