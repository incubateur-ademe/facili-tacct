import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import {
  etatCoursDeauLegends,
  qualiteEauxBaignadelegends
} from '@/components/maps/legends/datavizLegends';
import {
  LegendCompColor,
  LegendCompIcons
} from '@/components/maps/legends/legendComp';
import { MapEtatCoursDeau } from '@/components/maps/mapEtatCoursDeau';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { EtatCoursDeauMapper } from '@/lib/mapper/etatCoursDeau';
import {
  CarteCommunes,
  EtatCoursDeau,
  Patch4,
  QualiteSitesBaignade
} from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { etatCoursDeauTooltipTextBiodiv } from '@/lib/tooltipTexts';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { EtatsCoursEauBiodiversiteText } from '../inconfortThermique/staticTexts';
import styles from './biodiversite.module.scss';

const EtatQualiteCoursDeau = (props: {
  etatCoursDeau: EtatCoursDeau[];
  carteCommunes: CarteCommunes[];
  qualiteEauxBaignade: QualiteSitesBaignade[];
}) => {
  const { etatCoursDeau, carteCommunes, qualiteEauxBaignade } =
    props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const re = new RegExp('T([1-9]|1[0-2])\\b');
  const etatCoursDeauMap = etatCoursDeau.map(EtatCoursDeauMapper);
  const carteCommunesMap = carteCommunes.map(CommunesIndicateursMapper);

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci') {
        const temp = await GetPatch4(code, type);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4, 'fortes_chaleurs')
    : undefined;
  const precipitation = patch4
    ? AlgoPatch4(patch4, 'fortes_precipitations')
    : undefined;

  return (
    <>
      {
        !isLoadingPatch4 ?
          <div className={styles.container}>
            <div className="w-5/12">
              <div className={styles.explicationWrapper}>
                <p>
                  La biodiversité en eau douce est particulièrement menacée. La
                  carte ci-contre reflète l’état écologique des cours d’eau
                  présents sur votre territoire.
                </p>
                <div className={styles.patch4Wrapper}>
                  {fortesChaleurs === 'Intensité très forte' ||
                    fortesChaleurs === 'Intensité forte' ? (
                    <TagItem
                      icon={fortesChaleursIcon}
                      indice="Fortes chaleurs"
                      tag={fortesChaleurs}
                    />
                  ) : null}
                  {precipitation === 'Intensité très forte' ||
                    precipitation === 'Intensité forte' ? (
                    <TagItem
                      icon={precipitationIcon}
                      indice="Fortes précipitations"
                      tag={precipitation}
                    />
                  ) : null}
                </div>
                <CustomTooltip
                  title={etatCoursDeauTooltipTextBiodiv}
                  texte="Sur quoi repose ce classement ?"
                />
              </div>
              <EtatsCoursEauBiodiversiteText />
            </div>
            <div className="w-7/12">
              <div className={styles.graphWrapper}>
                <div
                  className={styles.biodiversiteGraphTitleWrapper}
                  style={{ padding: '1rem' }}
                >
                  <h2>État écologique des cours d’eau et des plans d’eau</h2>
                </div>
                {etatCoursDeau.length || qualiteEauxBaignade.length ? (
                  <>
                    <MapEtatCoursDeau
                      etatCoursDeau={etatCoursDeauMap}
                      carteCommunes={carteCommunesMap}
                      qualiteEauxBaignade={qualiteEauxBaignade}
                    />
                    <div
                      className={styles.legendCoursDeau}
                      style={{ margin: '0 1em' }}
                    >
                      <h3>- État des cours d'eau -</h3>
                      <LegendCompColor legends={etatCoursDeauLegends} />
                    </div>
                    <div className={styles.legendCoursDeau}>
                      <h3>- Plans d'eau -</h3>
                      <LegendCompIcons legends={qualiteEauxBaignadelegends} />
                    </div>
                  </>
                ) : <DataNotFoundForGraph image={DataNotFound} />
                }
                <p style={{ padding: '1em', margin: '0' }}>
                  Source : Agences de l'eau
                </p>
              </div>
            </div>
          </div>
          : <Loader />
      }
    </>
  );
};

export default EtatQualiteCoursDeau;
