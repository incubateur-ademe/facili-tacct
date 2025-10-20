import ForwardArrow from '@/assets/icons/keyboard_arrow_next_icon_black.svg';
import ArticleImage2 from '@/assets/images/article13.png';
import ArticleImage from '@/assets/images/article4.png';
import { RetourHautDePage } from '@/components/interactions/RetourHautDePage';
import ZoomOnClick from '@/components/utils/ZoomOnClick';
import EndPageTrigger from '@/hooks/EndPageTrigger';
import Image from 'next/image';
import Link from 'next/link';
import styles from './article.module.scss';

const PourquoiMobiliser = () => {
  return (
    <div>
      <RetourHautDePage />
      <h1>
        Comment mobiliser en interne et en externe pour la réalisation du diagnostic de
        vulnérabilité aux effets du changement climatique ? Retour d’expérience de la Vallée de Villé.
      </h1>
      <div className={styles.textBloc}>
        <p>
          <b>Mobiliser autour d’un diagnostic de vulnérabilité reste un défi</b> : entre les invitations
          sans réponse et les ateliers peu fréquentés, les obstacles sont fréquents. Incompréhensions,
          blocages ou manque d’adhésion expliquent souvent cette difficulté.
        </p>
        <p>
          À la communauté de communes de la Vallée de Villé (CCVV), <b>Jolet Van Kipshagen</b>, chargée de
          projet “Adaptation au changement climatique”, a, dès la phase d’élaboration du diagnostic,
          proposé pour validation à ses élus, un plan de mobilisation des acteurs.
        </p>
        <p>
          Ce retour d’expérience montre <b>comment elle s’y est prise</b>, <b>ce que cela a changé</b> et <b>les
            conditions à réunir pour reproduire la dynamique ailleurs.</b>
        </p>
      </div>
      <div className={styles.textBloc}>
        <h2>
          Comprendre les blocages pour mieux mobiliser
        </h2>
        <p>
          Avant même de mobiliser, <b>le vrai défi est que l’adaptation reste un concept flou</b> : beaucoup
          d’élus, de partenaires ou de collègues en interne ne perçoivent pas son lien direct avec leurs
          activités ou ne se sentent pas concernés. Le terme "adaptation" seul ne suffit pas à déclencher
          l’engagement – il faut l’ancrer dans des exemples tangibles, même si cela implique de sortir de
          son domaine d’expertise.
        </p>
        <p>
          Le dialogue tourne vite au <b>dialogue de sourds</b> si l’on ne part pas des réalités
          concrètes vécues localement.
        </p>
        <ZoomOnClick
          src={ArticleImage}
          alt="Dessin comique sur l'incompréhension du vocabulaire technique"
          sizes="100%"
        />
        <p style={{ marginTop: "1rem" }}>
          Dans ce contexte, le rôle du chargé de mission n’est pas d’être expert technique, mais
          de développer une expertise de la problématique : savoir expliquer, pour chaque domaine,
          en quoi la prise en compte des impacts du changement climatique est nécessaire.
        </p>
        <h2>
          Une mobilisation des acteurs pensée dès le départ
        </h2>
        <p>
          Dans le cadre du dispositif "Accélérateur de transitions", la CCVV a recruté Jolet Van
          Kipshagen pour mener notamment une démarche TACCT. Jolet entame sa prise de poste
          en rencontrant ses collègues et les vice-présidents du territoire.
        </p>
        <p>
          Avant même de lancer le diagnostic de vulnérabilité, elle fait valider par les
          élus un <b>plan de mobilisation des acteurs</b>, pour s’assurer que la démarche
          soit conduite sous le signe de la concertation.
        </p>
        <div className={styles.grayWrapper} style={{ margin: "2rem 0 2rem" }}>
          <h3 style={{ margin: 0 }}>En chiffres : une mobilisation structurée et progressive</h3>
          <ul style={{ margin: "0 0 2rem 2rem" }}>
            <li>
              <b>8 ateliers de sensibilisation</b> pour capter des retours croisés
              (élus, services, partenaires) → <b>100 personnes mobilisées</b>.
            </li>
            <li>
              <b>3 ateliers thématiques</b> avec des contributeurs ciblés pour affiner la
              lecture des enjeux prioritaires → environ <b>60 participants</b>.
            </li>
            <li>
              <b>10 entretiens individuels</b>, menés avec des partenaires indisponibles
              ou des experts techniques extérieurs à la CCVV.
            </li>
            <li>
              Une <b>session de restitution grand public</b>, à laquelle plus de 50 personnes ont participé.
            </li>
          </ul>
        </div>
        <p>
          Ce plan de mobilisation a permis d’organiser une concertation multiforme afin
          de <b>croiser les regards</b>, exercice incontournable pour favoriser ultérieurement
          l’adhésion aux orientations de la stratégie d’adaptation.
        </p>
        <p>
          Le diagnostic s’achève un an plus tard : un travail de fond mêlant recherches
          (littérature scientifique, interviews, articles de presse) et compilation de
          données et de travail en ateliers, avant d’aboutir à un document final.
        </p>
        <p>
          La réflexion sur la stratégie, elle, ne fait que commencer.
        </p>
        <h2>Ce que la mobilisation change concrètement</h2>
        <p>
          Les ateliers n’ont pas seulement produit des données : ils ont <b>donné la parole
            aux acteurs du territoire</b>.
        </p>
        <p>
          Leurs vécus et ressentis, habituellement absents des rapports de diagnostic, ont
          permis de <b>mettre en lumière des impacts concrets</b> du changement climatique.
        </p>
        <div className={styles.grayWrapper} style={{ margin: "2rem 0 2rem" }}>
          <p>Un exemple marquant :</p>
          <p>
            Pendant les périodes de sécheresse, <b>l’épicerie solidaire du territoire a constaté une hausse des demandes d’aide</b>,
            liée à la baisse de production dans les potagers familiaux. Sans interaction avec un acteur local,
            ce type d’impact serait passé inaperçu.
          </p>
        </div>
        <p>
          Au-delà des chiffres, ce <b>dialogue a fait émerger les vrais enjeux du territoire</b>.
        </p>
        <p>
          Résultat : un diagnostic <b>ancré dans le quotidien</b>, qui “<b>parle de nos forêts, de nos arbres</b>”, comme
          le résume Jolet.
        </p>
        <p>
          Un tel état des lieux, plus concret et plus proche du vécu local, <b>favorise l’adhésion</b> des acteurs
          aux prochaines étapes de la stratégie d’adaptation et du plan d’action.
        </p>
        <h2>Les leviers d’une mobilisation réussie</h2>
        <p>
          Au-delà des formats et outils utilisés, plusieurs choix stratégiques ont facilité la
          mobilisation des acteurs dans l’élaboration du diagnostic de vulnérabilité.
        </p>
        <p>
          Voici ce qui a permis, concrètement, de faire la différence dans la démarche conduite
          à la Vallée de Villé.
        </p>
        <h3>En amont : cadrer, inviter, rassurer</h3>
        <p>C’est dans la préparation que tout commence.</p>
        <p>
          Avant même les invitations, l’<b>alignement avec les élus</b>, la <b>clarté du message</b> et
          la <b>qualité des relais</b> jouent un rôle décisif.
        </p>
        <ul style={{ margin: "0 0 2rem 2rem" }}>
          <li>
            <b>Valider une vision commune avec les élus</b>, dès le départ, via un plan de
            mobilisation formalisé. Même avec des objectifs partagés, des divergences de
            méthode peuvent exister : mieux vaut les poser à plat sur un document de travail
            validé ensemble.
          </li>
          <li>
            <b>Impliquer les vice-présidents et les maires</b> dès cette phase : ce sont
            eux qui donnent le ton et permettent une mobilisation large, de l’intercommunalité
            jusqu’aux communes.
          </li>
          <li>
            <b>Personnaliser les invitations</b>, relancer par téléphone, proposer des rencontres
            individuelles. Ces gestes sont essentiels pour lever des freins fréquents : peur
            d’être jugé (ex. “je prends la voiture tous les jours”), ou crainte d’être
            mobilisé sur des tâches supplémentaires.
          </li>
          <li>
            <b>Faire appel au service communication</b>, si besoin, pour gagner en visibilité.
          </li>
          <li>
            <b>S’appuyer sur les services techniques</b>, déjà en lien avec de nombreuses
            parties prenantes, pour faciliter l’identification des bons contacts.
          </li>
        </ul>
        <h3>Pendant les temps collectifs : incarner, rythmer, écouter</h3>
        <p>Une fois les participants présents, encore faut-il qu’ils aient envie de rester, de contribuer, et de revenir.</p>
        <p>
          La façon dont se déroule un atelier, dans sa forme autant que dans son fond, conditionne
          la qualité de l’engagement.
        </p>
        <ul style={{ margin: "0 0 2rem 2rem" }}>
          <li>
            <b>Soigner la convivialité.</b> Un buffet paysan local, par exemple, a créé
            une cohérence entre le fond du message et la forme de l’accueil, tout en
            tissant des liens avec les agriculteurs (un public parfois difficile à mobiliser).
          </li>
          <li>
            <b>Limiter la durée à 2 h</b> : c’est un format acceptable
            pour un élu. Aller au-delà réduit significativement le taux de participation.
          </li>
          <li>
            <b>Tenir les horaires annoncés</b>, toujours.
          </li>
          <li>
            <b>Clore chaque atelier par une évaluation à chaud</b>, pour ajuster la suite en
            fonction des retours réels, et montrer que l’écoute continue.
          </li>
        </ul>
        <p>
          Pour aller plus loin sur l’animation d’ateliers courts, efficaces et engageants :{" "}
          <Link href="/ressources/articles/facilitation-ateliers-mobilisation">
            <i>
              La facilitation d’ateliers : une démarche éprouvée
              d’engagement.
            </i>
          </Link>
        </p>
        <h2>Prolonger la mobilisation : rendre visibles les résultats et enclencher la suite</h2>
        <p>
          À la Communauté de communes de la Vallée de Villé, la mobilisation ne s’est pas arrêtée
          une fois les ateliers terminés.
        </p>
        <p>
          Grâce à une <b>communication continue</b> et à l’<b>animation régulière d’un collectif local</b>, la
          dynamique s’est prolongée dans le temps, bien au-delà du diagnostic.
        </p>
        <p>
          Cette suite n’a rien d’automatique : elle repose sur la volonté de capitaliser sur le travail mené.
        </p>
        <h3>Communiquer après les ateliers</h3>
        <p>
          <b>Rendre visible le travail accompli</b> est essentiel pour entretenir l’intérêt des
          participants… et pour embarquer ceux qui n’étaient pas là.
        </p>
        <p>
          En Vallée de Villé, les comptes-rendus ont été centralisés sur le site de l’intercommunalité,
          avec un soin particulier porté à leur <b>lisibilité</b> : formulations claires, visuels,
          accès rapide.
        </p>
        <p>
          Résultat : les participants y reviennent facilement, et même les absents peuvent s’en emparer.
        </p>
        <p>
          <b>Bon à savoir</b> : un <b>compte-rendu illustré, partagé rapidement</b>, sert à la fois de <b>rappel
            collectif</b> et de <b>trace opérationnelle</b>.
        </p>
        <p>
          Il alimente la mémoire, la communication et la suite du processus.
        </p>
        <h3>Faire vivre la dynamique collective</h3>
        <p>
          La mobilisation a aussi fait émerger une <b>communauté locale active</b>, qui poursuit la dynamique engagée pendant le diagnostic.
        </p>
        <ul style={{ margin: "0 0 2rem 2rem" }}>
          <li>
            Elle se réunit <b>tous les six mois</b>,
          </li>
          <li>
            elle identifie des <b>actions concrètes</b> à lancer rapidement (ex. guide des aides locales),
          </li>
          <li>
            elle teste des <b>outils d’accompagnement du changement</b> pour toucher de nouveaux publics.
          </li>
        </ul>
        <p>
          Cette communauté permet de maintenir l’élan, d’enrichir les pratiques, et de faire avancer la stratégie.
        </p>
        <h3>Valoriser le rôle du ou de la chargé(e) de mission</h3>
        <p>
          Ce prolongement de la mobilisation a aussi eu un effet structurant sur le rôle de la personne qui la porte.
        </p>
        <p>
          La communication continue autour de la démarche a permis de faire émerger <b>Jolet comme référente
            reconnue</b> sur les sujets de transition écologique au sein de la commune.
        </p>
        <p>
          Elle a été <b>sollicitée à 11 reprises</b> par des partenaires extérieurs souhaitant relayer la
          dynamique ou demander conseil.
        </p>
        <p>
          Jolet a su transformer une phase de diagnostic en <b>levier d’action collective</b>.
        </p>
        <p>
          À travers une mobilisation <b>structurée</b>, elle a permis à la collectivité :
        </p>
        <ul style={{ margin: "0 0 2rem 2rem" }}>
          <li>
            d'identifier des <b>enjeux ancrés dans le vécu</b>
          </li>
          <li>
            de faire émerger des <b>actions concrètes</b>
          </li>
          <li>
            de construire une <b>adhésion durable</b>
          </li>
        </ul>
        <p>
          Les acteurs du territoire peuvent désormais <b>travailler collectivement</b>, avec une meilleure
          compréhension des priorités, en attendant la stratégie finalisée d’adaptation au changement
          climatique. Les plus motivés ont identifié des actions rapides et concrètes qu’ils souhaitaient
          mettre en place (par exemple, la rédaction d’un guide sur les aides locales).
        </p>
        <div className="flex flex-row gap-8" style={{ margin: "3rem 0 3rem" }}>
          <p style={{ fontSize: "14px" }}>
            Bravo à Jolet qui a su inspirer une communauté d'action sur son territoire, illustrant le rôle
            fondamental d'animation du ou de la chargé(e) de mission.
          </p>
          <Image
            src={ArticleImage2}
            alt="Dessin comique sur l'incompréhension du vocabulaire technique"
            width={0}
            height={0}
            style={{ width: '70%', height: 'auto' }}
          />
        </div>
        <p>
          Évidemment, ce <b>retour d’expérience n’est pas une recette toute faite</b>,
          mais il peut <b>inspirer d’autres territoires</b> pour enclencher une dynamique
          durable, et ce <b>dès la phase du diagnostic de vulnérabilité.</b>
        </p>

        <div className={styles.grayWrapper} style={{ margin: "4rem 0 2rem" }}>
          <div className={styles.h2title}>
            <Image src={ForwardArrow} alt="" />
            <h2>Pour aller plus loin</h2>
          </div>
          <ul>
            <li>
              <Link
                href="https://docs.google.com/document/d/1A5Ep7s2yAHLi3DxPANKpGTbeZctwRvDPYpK9KDsH_EI/edit?tab=t.0"
                target="_blank"
                rel="noreferrer"
              >
                1h pour animer un réseau, de Jean Michel Cornu
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <EndPageTrigger />
    </div>
  );
};

export default PourquoiMobiliser;
