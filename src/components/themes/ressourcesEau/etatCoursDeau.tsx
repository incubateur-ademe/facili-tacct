import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
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
import { eptRegex } from '@/lib/utils/regex';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const [patch4, setPatch4] = useState<Patch4[]>();
  const etatCoursDeauMap = etatCoursDeau.map(EtatCoursDeauMapper);
  const carteCommunesMap = carteCommunes.map(CommunesIndicateursMapper);

  useEffect(() => {
    !(
      type === 'petr' ||
      type === 'pnr' ||
      type === 'departement' ||
      eptRegex.test(libelle)
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
        qualité sanitaire suffisante pour s’y baigner.
      </p>
      <br></br>
    </div>
  );
  return (
    <>
      {
        fortesChaleurs && precipitation ?
          <>
            {etatCoursDeau.length ? (
              <div className={styles.container}>
                <div className="w-5/12">
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
                      title={title}
                      texte="Sur quoi repose ce classement ?"
                    />
                  </div>
                  <div className="px-4">
                    <p>
                      Même pour des cours d’eau en bon état, les événements extrêmes
                      dus au changement climatique aggravent les pollutions : en
                      période de sécheresse, les polluants se concentrent ; lors des
                      crues, ils sont massivement charriés vers les captages,
                      augmentant la contamination.
                    </p>
                    <p>
                      Certaines activités sont directement affectées par la qualité
                      chimique des cours d’eau (pisciculture en eau douce, pêche
                      professionnelle ou de loisir, sports d’eau vive…). Par ailleurs,
                      48 % de l’eau prélevée pour les usages domestiques, agricoles et
                      industriels provient des eaux de surface. Une eau brute plus
                      polluée nécessite des traitements plus complexes, ce qui
                      augmente les coûts du service de l’eau.
                    </p>
                    <p>
                      Concernant spécifiquement l’eau potable, si 2/3 des prélèvement
                      sont fait sur des ressources souterraines, les prélèvements en
                      eaux de surface sont majoritaires en région parisienne, en
                      Bretagne, dans les Pays de la Loire, sur la Côte d’Azur et dans
                      l’ancienne région Midi-Pyrénées.
                    </p>
                  </div>
                </div>
                <div className="w-7/12">
                  <div className={styles.graphWrapper}>
                    <div
                      className={styles.ressourcesEauGraphTitleWrapper}
                      style={{ padding: '1rem' }}
                    >
                      <h2>État écologique des cours d’eau</h2>
                    </div>
                    <div>
                      <MapEtatCoursDeau
                        etatCoursDeau={etatCoursDeauMap}
                        carteCommunes={carteCommunesMap}
                      />
                    </div>
                    <div
                      className={styles.legend}
                      style={{ width: 'auto', justifyContent: 'center' }}
                    >
                      <LegendCompColor legends={etatCoursDeauLegends} />
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
