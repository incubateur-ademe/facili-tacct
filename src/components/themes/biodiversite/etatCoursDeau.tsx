import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
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
import { DefinitionTooltip } from '@/components/utils/HtmlTooltip';
import { eutrophisation } from '@/lib/definitions';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { EtatCoursDeauMapper } from '@/lib/mapper/etatCoursDeau';
import {
  CarteCommunes,
  EtatCoursDeau,
  Patch4,
  QualiteSitesBaignade
} from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const [patch4, setPatch4] = useState<Patch4[]>();
  const re = new RegExp('T([1-9]|1[0-2])\\b');
  const etatCoursDeauMap = etatCoursDeau.map(EtatCoursDeauMapper);
  const carteCommunesMap = carteCommunes.map(CommunesIndicateursMapper);

  useEffect(() => {
    !(
      type === 'petr' ||
      type === 'pnr' ||
      type === 'departement' ||
      re.test(libelle)
    )
      ? void (async () => {
        const temp = await GetPatch4(code);
        setPatch4(temp);
      })()
      : void 0;
  }, [code, libelle]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4[0], 'fortes_chaleurs')
    : null;
  const precipitation = patch4
    ? AlgoPatch4(patch4[0], 'fortes_precipitations')
    : null;

  const title = (
    <div>
      <p>
        En application de la directive-cadre européenne sur l’eau, l’état
        écologique global de chaque rivière est évalué tous les 6 ans par les
        agences de l’eau, à partir de relevés sur 3 ans (N-1, N-2, N-3) issus
        des stations de mesure de la qualité de l’eau (par modélisation en leur
        absence). Plusieurs critères concourent à cette évaluation :
      </p>
      <ul>
        <li>température et acidité de l’eau,</li>
        <li>bilan de l’oxygène,</li>
        <li>hydro-morphologie du cours d’eau,</li>
        <li>
          présence de poissons, de plantes aquatiques, de microalgues, de
          micropolluants, de nutriments (eutrophisation), etc.
        </li>
      </ul>
      <p>
        Attention, le bon état écologique d’une rivière ne signifie pas une
        qualité sanitaire suffisante pour s’y baigner. Cette évaluation se
        fait en fonction de données microbiologiques. Le classement des
        eaux de qualité insuffisante, suffisante, bonne ou excellente est
        établi conformément aux critères de l’annexe II de la directive
        2006/7/CE concernant la gestion de la qualité des eaux de baignade.
      </p>
      <br></br>
    </div>
  );

  return (
    <>
      {
        (fortesChaleurs && precipitation) ||
          type === 'pnr' ||
          type === 'petr' ||
          type === 'departement' ||
          type === 'ept' ?
          <>
            {etatCoursDeau.length || qualiteEauxBaignade.length ? (
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
                      title={title}
                      texte="Sur quoi repose ce classement ?"
                    />
                  </div>
                  <div className="px-4">
                    <p>
                      Seuls 43 % des cours d’eau français sont en bon état écologique.
                      Si les principaux facteurs de dégradation de la qualité des eaux
                      sont les pollutions (nitrates, pesticides) et les altérations
                      physiques des rivières (seuils et barrages, endiguement….), le
                      réchauffement climatique aggrave les déséquilibres en cours. La
                      hausse des températures et les sécheresses prolongées entraînent
                      la chute des débits, voire assecs, la prolifération d'espèces
                      exotiques envahissantes, la concentration des polluants
                      (massivement relâchés lors des crues) ; la hausse des
                      température de l’eau et l’ensoleillement sont des conditions
                      favorables à{' '}
                      <DefinitionTooltip title={eutrophisation}>
                        l’eutrophisation
                      </DefinitionTooltip>
                      .
                    </p>
                    <p>
                      Un mauvais état écologique a des impacts graves sur la
                      biodiversité : il perturbe les conditions de vie des espèces
                      aquatiques et dégrade leurs habitats. En 20 ans :
                    </p>
                    <ul className="text-[1rem] leading-[1.5rem]">
                      <li>
                        Les populations de truites de rivière ont diminué de 44 %.
                      </li>
                      <li>
                        L’abondance de l’anguille européenne est tombée à 10 % de son
                        niveau historique.
                      </li>
                    </ul>
                    <p>
                      - - - - <br></br>
                      L’objectif de la Directive Cadre sur l’Eau (2000) était
                      d’atteindre un bon état général des eaux d’ici 2027 : il semble
                      hors d’atteinte désormais.
                    </p>
                  </div>
                </div>
                <div className="w-7/12">
                  <div className={styles.graphWrapper}>
                    <div
                      className={styles.biodiversiteGraphTitleWrapper}
                      style={{ padding: '1rem' }}
                    >
                      <h2>État écologique des cours d’eau</h2>
                    </div>
                    <div>
                      <MapEtatCoursDeau
                        etatCoursDeau={etatCoursDeauMap}
                        carteCommunes={carteCommunesMap}
                        qualiteEauxBaignade={qualiteEauxBaignade}
                      />
                    </div>
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
                    <p style={{ padding: '1em', margin: '0' }}>
                      Source : Agences de l'eau
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <GraphDataNotFound code={code ?? libelle} />
            )}
          </>
          : <Loader />
      }
    </>
  );
};

export default EtatQualiteCoursDeau;
