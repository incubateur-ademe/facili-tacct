import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/Tooltips';
import { AgricultureBio, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { multipleEpciBydepartementLibelle } from '@/lib/territoireData/multipleEpciBydepartement';
import { multipleEpciByPnrLibelle } from '@/lib/territoireData/multipleEpciByPnr';
import { agricultureBioTooltipText } from '@/lib/tooltipTexts';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { numberWithSpacesRegex } from '@/lib/utils/regex';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SurfacesEnBioText } from '../../../lib/staticTexts';
import AgricultureBioDataViz from './agricultureBioDataviz';
import styles from './biodiversite.module.scss';

const AgricultureBiologique = (props: {
  agricultureBio: AgricultureBio[];
  data: Array<{
    donnee: string;
    facteurSensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
}) => {
  const { agricultureBio } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const territoiresPartiellementCouverts = type === 'departement'
    ? multipleEpciBydepartementLibelle.find(dept => dept.departement === code)?.liste_epci_multi_dept
    : type === 'pnr'
      ? multipleEpciByPnrLibelle.find(pnr => pnr.libelle_pnr === libelle)?.liste_epci_multi_pnr
      : undefined;

  const nombreExploitations = agricultureBio.reduce((acc, obj) => {
    if (obj.VARIABLE === 'saue') {
      return acc + obj.nombre_2022!;
    }
    return acc;
  }, 0);
  const surfaceAgriBio = agricultureBio.reduce((acc, obj) => {
    if (obj.LIBELLE_SOUS_CHAMP === 'Surface totale') {
      return acc + obj.surface_2022!;
    }
    return acc;
  }, 0);

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
  const exportData = IndicatorExportTransformations.biodiversite.agricultureBio(agricultureBio)

  return (
    <>
      {
        !isLoadingPatch4 ?
          <div className={styles.container}>
            <div className="w-1/2">
              <div className={styles.explicationWrapper}>
                {agricultureBio.length ?
                  <>
                    {type === "commune" ? (
                      <p style={{ color: '#161616' }}>
                        Cette donnée n’est disponible qu’à l’échelle de votre EPCI.{' '}
                        <br></br>
                        Dans votre EPCI, <b>
                          {nombreExploitations} exploitations
                        </b>{' '}
                        sont en agriculture biologique ou en conversion, représentant
                        un total de <b>{Round(surfaceAgriBio, 0)} hectares</b>.
                      </p>
                    ) : type === "departement" || type === "pnr" || type === "petr" ? (
                      <>
                        <p style={{ color: '#161616' }}>
                          Cette donnée n’est disponible qu’à l’échelle de l'EPCI.
                          Sur votre territoire, <b>{numberWithSpacesRegex(nombreExploitations)} exploitations</b>{' '}
                          sont en agriculture biologique ou en conversion, représentant
                          un total de <b>{Round(surfaceAgriBio, 0)} hectares</b>.
                        </p>
                        {
                          territoiresPartiellementCouverts && (
                            <>
                              <p>
                                <br></br>Attention, <b>{territoiresPartiellementCouverts?.length} EPCI
                                </b> {territoiresPartiellementCouverts?.length === 1 ? "ne fait" : "ne font"} que
                                partiellement partie de votre territoire :
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
                    ) : (
                      <p style={{ color: '#161616' }}>
                        Dans votre {type === "epci" ? "EPCI" : "territoire"}, <b>{nombreExploitations} exploitations</b>{' '}
                        sont en agriculture biologique ou en conversion, représentant
                        un total de <b>{Round(surfaceAgriBio, 0)} hectares</b>.
                      </p>
                    )}
                  </>
                  : ""
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
                <CustomTooltip title={agricultureBioTooltipText} texte="D'où vient ce chiffre ?" />
              </div>
              <SurfacesEnBioText />
            </div>
            <div className="w-1/2">
              <AgricultureBioDataViz
                agricultureBio={agricultureBio}
                datavizTab={datavizTab}
                setDatavizTab={setDatavizTab}
                exportData={exportData}
              />
            </div>
          </div>
          : <Loader />
      }
    </>
  );
};

export default AgricultureBiologique;
