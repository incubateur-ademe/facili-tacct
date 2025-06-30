import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { ExportButton } from '@/components/utils/ExportButton';
import { AgricultureBio, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { agricultureBioTooltipText } from '@/lib/tooltipTexts';
import { IndicatorTransformations } from '@/lib/utils/export/environmentalDataExport';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SurfacesEnBioAgricultureText } from '../inconfortThermique/staticTexts';
import styles from './agriculture.module.scss';
import AgricultureBioDataViz from './agricultureBioDataviz';

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
  console.log('AgricultureBiologique props:', agricultureBio);
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');

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

  const exportData = IndicatorTransformations.agriculture.agricultureBio(agricultureBio);

  return (
    <>
      {
        !isLoadingPatch4 ?
          <div className={styles.container}>
            <div className="w-1/2">
              <div className="mb-4">
                <ExportButton
                  data={exportData}
                  baseName="agriculture_biologique"
                  type={type}
                  libelle={libelle}
                  sheetName="Agriculture bio"
                />
              </div>
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
                    ) : (
                      <p style={{ color: '#161616' }}>
                        Dans votre territoire, <b>{nombreExploitations} exploitations</b>{' '}
                        sont en agriculture biologique ou en conversion, représentant
                        un total de <b>{Round(surfaceAgriBio, 0)} hectares</b>.
                      </p>
                    )}
                  </>
                  : ""
                }
                <div className={styles.patch4Wrapper}>
                  {secheresse === 'Intensité très forte' ||
                    secheresse === 'Intensité forte' ? (
                    <TagItem
                      icon={secheresseIcon}
                      indice="Sécheresse des sols"
                      tag={secheresse}
                    />
                  ) : null}
                </div>
                <CustomTooltip title={agricultureBioTooltipText} texte="D'où vient ce chiffre ?" />
              </div>
              <SurfacesEnBioAgricultureText />
            </div>
            <div className="w-1/2">
              <AgricultureBioDataViz
                agricultureBio={agricultureBio}
                datavizTab={datavizTab}
                setDatavizTab={setDatavizTab}
              />
            </div>
          </div>
          : <Loader />
      }
    </>
  );
};

export default AgricultureBiologique;
