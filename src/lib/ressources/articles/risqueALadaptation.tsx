import ForwardArrow from '@/assets/icons/keyboard_arrow_next_icon_black.svg';
import ArticleImage1 from '@/assets/images/article16.png';
import { RetourHautDePage } from "@/components/interactions/RetourHautDePage";
import ZoomOnClick from '@/components/utils/ZoomOnClick';
import { H2, H3 } from '@/design-system/base/Textes';
import Image from 'next/image';
import Link from 'next/link';
import styles from './article.module.scss';

const RisqueALadaptation = () => {
  return (
    <>
      <RetourHautDePage />
      <h1>
        De la gestion du risque à l'adaptation : le cas de la relocalisation de Miquelon
      </h1>
      <div className={styles.textBloc}>
        <p>
          Quand tout un village devient <b>inconstructible</b>, que faire ? À Miquelon-Langlade,
          petite commune insulaire de 600 habitants, la <b>gestion du risque littoral</b> a donné
          naissance à une stratégie d'adaptation ambitieuse.
        </p>
        <p>
          Un cas extrême, mais <b>riche d'enseignements</b> pour d'autres territoires confrontés à des freins similaires.
        </p>
        <p>
          Lors de l'atelier CDM Success du mois d'octobre 2025, <b>Quentin Lucas</b>, chargé
          de mission adaptation aux changements climatiques à la mairie de Miquelon-Langlade,
          et <b>Xénia Philippenko</b>, chercheuse et autrice d'une thèse sur l'adaptation au changement
          climatique dans l'archipel, sont revenus sur les coulisses d'un projet aussi ambitieux
          que nécessaire : la <b>relocalisation progressive d'un village entier</b> menacé par la submersion.
        </p>
        <p>
          <b>Retour sur un changement de cap collectif</b> qui éclaire les enjeux de recomposition territoriale.
        </p>
        <h2>Quand l’État déclare un village inconstructible : le début d’une bascule</h2>
        <div className="flex flex-col-reverse sm:flex-row gap-8" style={{ margin: "3rem 0 0rem" }}>
          <div>
            <p>
              Miquelon est une commune doublement insulaire de 600 habitants, isolée dans un archipel
              lui-même isolé, au large du Canada.
            </p>
            <p>
              À Miquelon, on construit entre voisins, de génération en génération. La construction repose
              presque exclusivement sur l’auto-construction, seules les voiries et réseaux sont externalisés.
              Le code de l’urbanisme national ne s’applique pas : ici, c’est le Schéma Territorial d’Aménagement
              et d’Urbanisme (STAU) qui fait foi.
            </p>
            <p>
              Pendant longtemps, les tempêtes faisaient partie du quotidien. On s’adaptait sans vraiment parler de risque.
            </p>
          </div>
          <div>
            <ZoomOnClick
              src={ArticleImage1}
              alt="Dessin comique sur l'incompréhension du vocabulaire technique"
              sizes="100%"
              wrapperStyle={{ width: "300px", maxWidth: "100%" }}
            />
            <p style={{ fontSize: "12px", color: "var(--gris-medium-dark)", paddingLeft: "14px" }}>Source : Gifex.com</p>
          </div>
        </div>
        <H3>Le choc du PPRL : incompréhension et tensions</H3>
        <p>
          Puis vient le basculement. En 2018, l'adoption du Plan de Prévention des Risques Littoraux (PPRL),
          porté par l'État, vient bouleverser les règles du jeu : une large partie des parcelles est classée
          inconstructible. Cette décision s'inscrit dans le contexte post-Xynthia, marqué par un durcissement
          des politiques de prévention du risque littoral après la tempête de 2010.
          Pour les habitants, c'est un choc. La décision est mal comprise, parfois vécue comme brutale :
          "pourquoi interdire de construire là où on a toujours vécu ?" Pourquoi remettre en cause l'ancrage
          familial et social qui fait l'identité du village ?
        </p>
        <H3>Le déni, puis le réveil du risque</H3>
        <p>
          Le refus, parfois le déni, domine. L’adhésion est loin d’être acquise. Il faudra un Programme d’Actions
          de Prévention des Inondations (PAPI), puis une démarche de co-construction amorcée dans le cadre du
          programme national “Atelier des territoires” (piloté par la Direction générale de l'aménagement,
          du logement et de la nature), pour que le récit évolue vers une stratégie d’adaptation. Peu à peu,
          la relocalisation entre dans les discussions.
        </p>
        <p>
          Mais ce sont les tempêtes de 2018, puis celle de 2021, qui réveillent la mémoire du risque. Les habitants
          prennent conscience que les modes de construction ont changé : les maisons sont plus grandes, moins résilientes.
          L’étalement urbain a accru la vulnérabilité du village au fil des générations.
        </p>
        <H3>Quand la contrainte devient projet collectif</H3>
        <p>
          C’est là que l’engagement politique local devient décisif. L’équipe municipale prend position et transforme
          la contrainte en opportunité. Le récit change : relocaliser, oui, mais <b>sans déraciner</b>. Le projet est
          retravaillé collectivement : quelle identité pour le nouveau lieu ? Quel lien avec l’ancien village ?
          Comment recréer une communauté ?
        </p>
        <div className={styles.quoteBloc}>
          <p><i>“Ce n’est pas parce qu’un habitant dit oui qu’il est enthousiaste. Il faut maintenir la confiance
            dans le temps.”</i> - Xénia Philippenko, chercheuse
          </p>
        </div>
        <H2>Du risque à l’adaptation : bascule stratégique à Miquelon</H2>
        <p>
          C’est un glissement progressif mais décisif. <b>D’abord imaginé par les habitants comme un simple quartier “à côté”</b>, le
          projet prend de l’ampleur avec l’arrivée du Fonds Barnier. Ce financement permet de racheter et
          déconstruire des maisons situées en zone à risque, puis de reconstruire sur un site plus sûr,
          éloigné des zones exposées à la submersion.
        </p>
        <p>
          <b>L’objectif ? Projeter la commune à long terme, en s’alignant sur les scénarios climatiques
            à l’horizon 2100.</b> Le Plan de Prévention des Risques Littoraux (PPRL) intègre en effet
          une cartographie spécifique pour cet horizon, prenant en compte l’élévation du niveau marin
          et l’affaissement du sol. Une façon d’anticiper, dès aujourd’hui, les risques de demain.
        </p>
        <p>
          La stratégie repose sur une coordination étroite entre l’État, la mairie de Miquelon-Langlade
          et le Conseil territorial de Saint-Pierre-et-Miquelon. Une charte d’engagement, signée à
          l’issue de l’atelier des territoires, vient ancrer cette coopération dans la durée.
        </p>
        <p>
          Et au cœur du projet, un principe : <b>penser la relocalisation comme une transformation
            du territoire</b>, pas comme une simple opération foncière.
        </p>
        <div className={styles.quoteBloc}>
          <p>
            <i>“Ce n’est pas juste un projet d’aménagement, c’est une manière de reposer la question de l’avenir du
              territoire.”</i> - Quentin Lucas, chargé de mission climat à Miquelon
          </p>
        </div>
        <p>
          <b>Mais une stratégie, même ambitieuse, ne suffit pas.</b>
        </p>
        <p>
          Pour qu’elle tienne dans le temps, encore faut-il qu’elle soit partagée. Et à Miquelon, l’adhésion
          ne s’est pas construite en un jour.
        </p>
        <H2>Ce que Miquelon nous apprend sur les freins et les leviers d’un projet de délocalisation face au changement climatique</H2>
        <p>
          La relocalisation d’un village entier ne se décrète pas. À Miquelon, elle a mis en lumière
          plusieurs freins que des chargés de mission climat reconnaîtront peut-être, et des leviers
          activés localement pour les contourner.
        </p>
        <H3>Frein politique-institutionnel : se projeter au-delà d’un mandat</H3>
        <p>
          À Miquelon, la relocalisation est pensée à 75 ans, alignée sur l’horizon climatique de 2100.
          Mais comment embarquer des élus dont l’horizon est souvent limité par un cycle électoral ?
          C’est l’un des freins majeurs soulevés par Xénia : difficile pour un maire ou une équipe technique
          de porter un projet qu’ils ne verront peut-être pas aboutir.
        </p>
        <p>
          À Miquelon, la charte d’engagement, signée à l’issue de l’atelier, a permis de clarifier les rôles
          de chacun et de structurer une trajectoire commune à long terme.
        </p>
        <H3>Frein financier : un puzzle au cas par cas</H3>
        <p>
          Le modèle de financement classique, basé sur l’acquisition et la déconstruction des biens menacés
          via le Fonds Barnier, ne colle pas à la réalité locale.
        </p>
        <p>
          À Miquelon, les maisons sont en bois et historiquement déplaçables, mais ce type de relocalisation
          n’est pas prévu dans le cadre actuel. Résultat : des tensions, des lenteurs, et un besoin constant
          d’ingéniosité pour combiner les financements (État, Banque des territoires, Europe...).
        </p>
        <H3>Frein foncier : tout ne se construit pas partout</H3>
        <p>
          Choisir un nouveau site, ce n’est pas qu’une affaire de carte. Pollution, contraintes environnementales,
          archéologie préventive, renaturation de l’ancien site… les embûches sont nombreuses.
        </p>
        <p>
          À Miquelon, certaines parcelles ont dû être réétudiées ou abandonnées. <b>Enseignement</b> : anticiper
          les études (environnement, sol, archéo) est un gain de temps à long terme.
        </p>
        <H3>Frein social : accepter ≠ consentir</H3>
        <p>
          Obtenir un “oui” ne suffit pas. L’<b>acceptabilité</b> est un processus fragile, évolutif, qu’il faut entretenir dans le temps.
          À Miquelon, le refus initial a laissé place à un “on fait avec”, plus résigné qu’enthousiaste. L’atelier des territoires a joué un rôle clé pour transformer la contrainte en récit collectif, en posant des questions simples : “Que gardons-nous de notre identité ? Comment relier l’ancien lieu au nouveau ?” <b>Enseignement</b> : co-construire le sens du projet est aussi important que ses aspects techniques.
        </p>
        <H3>Frein temporel : gérer les décalages de rythmes</H3>
        <p>
          Le temps administratif, politique, social, humain… ne suit jamais la même cadence.
          À Miquelon, il faut concilier le court terme d’un PAPI avec la stratégie de long terme de relocalisation,
          faire vivre la participation dans la durée malgré l’essoufflement du groupe moteur des débuts composé des
          premiers relogés, résister aux aléas politiques (élections à venir).
        </p>
        <H2>Et ailleurs ? Quand l’adaptation passe par des reculs ciblés</H2>
        <p>
          Miquelon n’est pas une exception. Comme le souligne Xénia Philippenko, d’<b>autres territoires amorcent
            eux aussi des formes de recul stratégique</b>, à des échelles plus ponctuelles :
        </p>
        <ul>
          <li>Une route déplacée sur la côte basque,</li>
          <li>Un camping relocalisé en Bretagne,</li>
          <li>Des équipements repensés en Aquitaine.</li>
        </ul>
        <p>
          Ces projets n’impliquent pas toujours une relocalisation complète, mais tous rappellent que face à des
          risques croissants, <b>penser le temps long devient indispensable.</b>
        </p>
        <p>
          Passer de la gestion du risque à une véritable stratégie d’adaptation suppose d’anticiper l’évolution des aléas,
          d’associer les habitants, et parfois, d’imaginer une recomposition du territoire.
        </p>
        <p>
          Pour Quentin Lucas, l’adaptation au changement climatique est aussi une opportunité : celle de rouvrir des discussions
          profondes sur l’organisation, les usages et l’avenir du territoire.
        </p>
      </div>
      <div className={styles.grayWrapper} style={{ margin: "2rem 0 2rem" }}>
        <H2 style={{ margin: 0, fontSize: "22px", lineHeight: "30px" }}>5 enseignements concrets à tirer du projet de relocalisation de Miquelon</H2>
        <ol style={{ margin: "0 0 0 1rem" }}>
          <li>
            <b>Le risque peut être un déclencheur, mais seul le temps long permet une adaptation pérenne.</b>
            <br />
            Agir sous la contrainte est parfois nécessaire, mais l'impact durable vient d'une vision projetée au-delà des cycles politiques ou budgétaires.
          </li>
          <li>
            <b>La co-construction n'est pas une option.</b>
            <br />
            Ce n'est pas en cherchant à convaincre qu'on avance, mais en posant des questions, en écoutant les usages, en composant avec les attachements.
          </li>
          <li>
            <b>Une démarche de co-construction peut jouer un rôle clé.</b>
            <br />
            À Miquelon, l'appui méthodologique apporté via le programme national "Atelier des territoires" a permis de relancer le dialogue entre habitants, élus et institutions, en réancrant le projet dans une histoire collective et en alignant les acteurs sur une trajectoire commune.
          </li>
          <li>
            <b>Ancrer un projet dans le temps, c'est aussi une affaire d'ingénierie.</b>
            <br />
            À Miquelon, la mairie compte peu d'agents dédiés à ce projet majeur. Porter seul une stratégie de relocalisation sur 75 ans est tout simplement irréaliste.
            Sans structure dédiée, gouvernance claire et financement dans la durée, même un projet bien amorcé peut s'éroder.
          </li>
          <li>
            <b>La relocalisation n'est pas toujours nécessaire, mais l'adaptation, elle, l'est.</b>
            <br />
            Chaque territoire doit interroger sa vulnérabilité et construire une réponse à la hauteur de ses enjeux. Cela peut passer par une recomposition plus ponctuelle (à l'échelle d'un quartier, d'une route, d'un équipement) mais toujours sur la base d'un diagnostic territorial solide, qui articule risques présents et futurs.
          </li>
        </ol>
      </div>
      <H2>Conclusion</H2>
      <div className={styles.quoteBloc}>
        <p>
          <i>“Plus on tarde à s’adapter, plus les solutions deviennent complexes à mettre en œuvre.”</i><br></br>
          <i>“L’adaptation, c’est aussi une opportunité pour questionner collectivement nos territoires.”</i><br></br>
          Xénia Philippenko et Quentin Lucas
        </p>
      </div>
      <p>
        Aujourd’hui, 14 projets de relocalisation sont en cours à Miquelon, et une nouvelle consultation
        a été lancée pour autant de parcelles. Une dynamique bien réelle, même si encore fragile, qui montre
        qu’un territoire isolé et peu doté peut amorcer une recomposition profonde.
      </p>
      <p>
        À Miquelon, la relocalisation n’a pas été un simple déplacement de maisons : elle a ouvert un débat
        collectif sur l’avenir du territoire.
      </p>
      <p>
        Pour d’autres territoires, elle montre qu’un cap commun peut émerger, même dans l’incertitude !
      </p>
      <p>
        <i>
          Cet article restitue les témoignages de Xénia Philippenko et Quentin Lucas lors du CDM Success d’octobre 2025.
        </i>
      </p>
      <div className={styles.grayWrapper} style={{ margin: "4rem 0 2rem" }}>
        <div className={styles.h2title}>
          <Image src={ForwardArrow} alt="" />
          <h2>Pour aller plus loin</h2>
        </div>
        <p>
          L’économiste Hélène Rey-Valette étudie les recompositions territoriales face au changement climatique.
          Son travail, cité lors de l’atelier, éclaire les transitions d’usage, de gouvernance et d’identité.
        </p>
        <p>
          Explorer sa bibliographie via{" "}
          <Link
            href="https://www.researchgate.net/profile/Helene-Rey-Valette"
            target="_blank"
            rel="noreferrer"
          >
            ResearchGate
          </Link>
          , notamment son dernier ouvrage :{" "}
          <Link
            href="https://hal.inrae.fr/hal-04984812v1/file/guide%20agir%20autrement-final%20en%20ligneV2.pdf"
            target="_blank"
            rel="noreferrer"
          >
            “Agir autrement. Guide pour co-construire des trajectoires d'adaptation des territoires littoraux”
          </Link>
        </p>
      </div>
    </>
  );
};

export default RisqueALadaptation;
