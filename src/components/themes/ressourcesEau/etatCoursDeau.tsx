import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapEtatCoursDeau } from '@/components/maps/mapEtatCoursDeau';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { EpciContoursMapper } from '@/lib/mapper/epci';
import { EtatCoursDeauMapper } from '@/lib/mapper/etatCoursDeau';
import {
  CarteCommunes,
  EpciContours,
  EtatCoursDeau
} from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import styles from './ressourcesEau.module.scss';

const legends = [
  {
    value: 'Très bon état',
    color: '#0095C8'
  },
  {
    value: 'Bon état',
    color: '#00C190'
  },
  {
    value: 'État moyen',
    color: '#FFCF5E'
  },
  {
    value: 'État médiocre',
    color: '#F66E19'
  },
  {
    value: 'État mauvais',
    color: '#B5000E'
  },
  {
    value: 'Indéterminé/pas de données',
    color: '#9D9C9C'
  }
];

const EtatQualiteCoursDeau = (props: {
  etatCoursDeau: EtatCoursDeau[];
  epciContours: EpciContours[];
  carteCommunes: CarteCommunes[];
}) => {
  const { etatCoursDeau, epciContours, carteCommunes } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const codepci = searchParams.get('codepci')!;
  const etatCoursDeauMap = etatCoursDeau.map(EtatCoursDeauMapper);
  const epciContoursMap = epciContours.map(EpciContoursMapper);
  const carteCommunesMap = carteCommunes.map(CommunesIndicateursMapper);
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
              <CustomTooltip
                title={title}
                texte="Sur quoi repose ce classement ?"
              />
            </div>
            <div className="px-4">
              <p>
                En 2023, 1 Français sur 4 a consommé une eau contaminée aux
                pesticides. Les métabolites de pesticides sont aujourd’hui la
                principale cause de pollution de l’eau potable. Le changement
                climatique aggrave les déséquilibres en cours ; en période de
                sécheresse, les polluants se concentrent dans les cours d’eau et
                les nappes phréatiques, rendant l’eau plus difficile à traiter.
                Lors des crues, ils sont massivement charriés vers les captages,
                augmentant la contamination et forçant certaines communes à
                restreindre l’usage de l’eau potable.
              </p>
              <p>
                Face à cette pollution croissante et aux effets du changement
                climatique, les collectivités doivent mieux protéger les
                ressources en eau et adapter leur gestion. Certaines sources
                deviennent temporairement inutilisables, obligeant à intensifier
                les traitements et à rechercher de nouveaux captages. Ces
                adaptations impliquent des investissements lourds, notamment
                pour améliorer la filtration et sécuriser l’approvisionnement.
                L’accès à une eau potable conforme aux normes est de plus en
                plus menacé.
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
                  epciContours={epciContoursMap}
                  carteCommunes={carteCommunesMap}
                />
              </div>
              <div
                className={styles.legend}
                style={{ width: 'auto', justifyContent: 'center' }}
              >
                <LegendCompColor legends={legends} />
              </div>
              <p style={{ padding: '1em', margin: '0' }}>
                Source : Agences de l'eau
              </p>
            </div>
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};

export default EtatQualiteCoursDeau;
