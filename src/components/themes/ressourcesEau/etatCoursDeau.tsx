import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { etatCoursDeauLegends } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapEtatCoursDeau } from '@/components/maps/mapEtatCoursDeau';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { EtatCoursDeauMapper } from '@/lib/mapper/etatCoursDeau';
import {
  CarteCommunes,
  EtatCoursDeau,
  Patch4
} from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { etatCoursDeauTooltipTextEau } from '@/lib/tooltipTexts';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { EtatCoursEauRessourcesEauText } from '../inconfortThermique/staticTexts';
import styles from './ressourcesEau.module.scss';

const EtatQualiteCoursDeau = (props: {
  etatCoursDeau: EtatCoursDeau[];
  carteCommunes: CarteCommunes[];
}) => {
  const { etatCoursDeau, carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const etatCoursDeauMap = etatCoursDeau.map(EtatCoursDeauMapper);
  const carteCommunesMap = carteCommunes.map(CommunesIndicateursMapper);

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci' || type === 'ept') {
        const temp = await GetPatch4(code, type, libelle);
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
            <div className={etatCoursDeau.length ? "w-5/12" : "w-1/2"}>
              <div className={styles.explicationWrapper}>
                <p>
                  La carte ci-contre reflète l’état écologique des cours d’eau
                  présents sur votre territoire. Le bon fonctionnement des milieux
                  aquatiques est évalué à partir d’éléments physico-chimiques
                  (composition de l’eau, polluants…) mais aussi de la présence de
                  la faune et de la flore (poissons, invertébrés, plantes
                  aquatiques), ainsi que des propriétés hydromorphologiques (état
                  des berges, continuité de la rivière, etc.).
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
                  title={etatCoursDeauTooltipTextEau}
                  texte="Sur quoi repose ce classement ?"
                />
              </div>
              <EtatCoursEauRessourcesEauText />
            </div>
            <div className={etatCoursDeau.length ? "w-7/12" : "w-1/2"}>
              <div className={styles.graphWrapper}>
                <div
                  className={styles.ressourcesEauGraphTitleWrapper}
                  style={{ padding: '1rem' }}
                >
                  <h2>État écologique des cours d’eau</h2>
                </div>
                {etatCoursDeau.length ? (
                  <>
                    <MapEtatCoursDeau
                      etatCoursDeau={etatCoursDeauMap}
                      carteCommunes={carteCommunesMap}
                    />
                    <div
                      className={styles.legend}
                      style={{ width: 'auto', justifyContent: 'center' }}
                    >
                      <LegendCompColor legends={etatCoursDeauLegends} />
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
