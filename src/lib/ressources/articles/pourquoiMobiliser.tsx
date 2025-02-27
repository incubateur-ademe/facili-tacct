import BookIcon from '@/assets/icons/book_icon_black.svg';
import ForwardArrow from '@/assets/icons/keyboard_arrow_next_icon_black.svg';
import ArticleImage2 from '@/assets/images/article13.png';
import ArticleImage from '@/assets/images/article4.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './article.module.scss';

const PourquoiMobiliser = () => {
  return (
    <div>
      <h1>Pourquoi mobiliser en interne et externe ?</h1>
      <div className={styles.textBloc}>
        <h2>
          Une mobilisation réussie : témoignage de Jolet Van Kipshagen (Vallée
          de Villé).
        </h2>
        <p>
          Combien de mails envoyés et restés sans réponse ? Combien d’ateliers
          avec un nombre de participants trop faible ? Mobiliser n’est pas
          simple et nécessite une expertise spécifique.
        </p>
        <p>
          <b>Notre vision de la problématique :</b>
        </p>
        <p>
          Adaptation au changement climatique : le concept reste mal compris. En
          conséquence, peu de personnes se sentent concernées ou ont conscience
          des interférences entre impacts du changement climatique et leurs
          activités : le concept ne mobilise pas.
        </p>
        <p>
          Pour les mobiliser, il est important de pouvoir aborder des sujets qui
          les concernent mais dont vous n’êtes pas expert. Cela peut vite
          tourner au “dialogue de sourd”.
        </p>
        <Image
          src={ArticleImage}
          alt="Dessin comique sur l'incompréhension du vocabulaire technique"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto' }}
        />
        <div>
          <p>Notre idée pour aider au dialogue :</p>
          <ul>
            <li>
              Vous aider à développer une expertise de la problématique, (par
              opposition à l’expert technique qui a l’expertise de la solution).
            </li>
            <li>
              Grâce à votre connaissance du contexte climatique, vous mettre en
              capacité d’expliquer à vos interlocuteurs le besoin d’adaptation
              sous jacent de chaque thématique.
            </li>
          </ul>
        </div>
        <h2>
          Retour d’expérience : Violaine Magne (Clermont Auvergne Metropole) et
          d’Adam Gibaud (PNR du Pilat)
        </h2>
        <p>
          Dans le cadre du dispositif "Accélérateur de transitions”, la CC de la
          Vallée de Villé mène une démarche TACCT. Le diagnostic de
          vulnérabilité vient de s’achever ; les réflexions sur la stratégie
          débutent.
        </p>
        <p>
          Cette première phase a nécessité plus d’un an de travail, alternant
          recherches (littérature scientifique, interviews, articles de presses,
          etc.), compilation de données et ateliers, pour finir par
          l’élaboration du document final.
        </p>
        <p>
          Jolet a initié sa prise de poste en rencontrant ses collègues et les
          VP du territoire. Avant de démarrer le diagnostic de vulnérabilité,
          elle fait valider par les élus un plan de mobilisation des acteurs
          afin de s’assurer que l’exercice sera mené sous le signe de la
          concertation.
        </p>
        <div>
          <p>Résultats :</p>
          <ul>
            <li>
              <b>8 ateliers de sensibilisation</b> afin de récolter des retours
              internes et externes : plus de 100 personnes consultées ;
            </li>
            <li>
              <b>3 ateliers thématiques</b> avec des contributeurs spécifiques
              pour définir la sensibilité des thématiques priorisées ; près
              d'une soixantaine de personnes présentes.
            </li>
            <li>
              <b>Une dizaine d'entretiens individuels</b> avec des partenaires
              indisponibles au moment des ateliers et des experts techniques non
              liés à la CCVV.
            </li>
            <li>
              Enfin, <b>une session de restitution grand public</b> avec plus de
              50 participants.
            </li>
          </ul>
        </div>
        <h2>Une mobilisation pour quels bénéfices ?</h2>
        <p>
          Le travail en ateliers vise à{' '}
          <b>valoriser le vécu et les ressentis de différents acteurs</b>,
          démocratisant ainsi les sujets liés à la transition écologique et
          sociale. Un exemple de vécu : l’épicerie solidaire de ce territoire
          rural constate une augmentation des demandes d’aide des habitants
          pendant les périodes de sécheresse, du fait de la baisse de production
          dans les potagers. Cet exemple met en lumière un impact local qui
          serait passé inaperçu si l’exercice de diagnostic avait été mené en
          chambre par la CCVV. Le dialogue fait émerger les “vrais” enjeux du
          territoire.
        </p>
        <p>
          Cette co-construction permet de rédiger un état des lieux ancré
          localement, dépassant les rapports plus globaux qui paraissent souvent
          déconnectés du territoire. Ce travail d’écoute permet d’aboutir à un
          diagnostic précis, pertinent et qui “parle” au territoire, “on y parle
          de nos forêts, de nos arbres” - Jolet Van Kipshagen. À terme ce
          fonctionnement favorise l’adhésion aux orientations de la stratégie et
          du plan d’actions qui suivront.
        </p>
        <h2>Les apprentissages clés partagés</h2>
        <h3>En amont :</h3>
        <div>
          <ul>
            <li>
              Un prérequis essentiel : la validation d’une vision commune avec
              les élus (via le plan de mobilisation). Malgré des objectifs
              globaux communs, des divergences sur les façons de faire ont
              persisté, d’où l’importance d’en discuter sur la base d’un
              document validé en amont.
            </li>
            <li>
              La mise à contribution des vice-présidents et des maires pour
              réaliser une large mobilisation à différentes échelles (de
              l’interco jusqu’aux communes).
            </li>
            <li>
              Invitations personnalisées, relances téléphoniques et rencontres
              individuelles sont incontournables pour surmonter les réticences.
              Vos interlocuteurs peuvent avoir des craintes à venir, par exemple
              la peur d’être jugé (je prends la voiture au quotidien), ou la
              crainte d’être solliciter pour faire plus ou différemment leur
              travail. Une prise de contact directe les rassure et contribue à
              une plus grande mobilisation. Le cas échéant, votre service
              Communication peut vous aider à améliorer votre visibilité.
            </li>
            <li>
              Enfin, s’appuyer sur les services techniques de votre collectivité
              qui travaillent déjà au quotidien avec nombre de parties
              prenantes, vous facilite l’obtention de contacts.
            </li>
          </ul>
        </div>
        <h3>Lors des temps collectifs :</h3>
        <div>
          <ul>
            <li>
              Mettre la convivialité au cœur des moments collectifs. Pour Jolet,
              un buffet paysan local a renforcé la cohérence entre les discours
              et les actes, tout en créant des synergies avec les agriculteurs
              (un public souvent compliqué à mobiliser).
            </li>
            <li>
              Limiter le temps d’ateliers (2h dans l’agenda d’un élu, c’est déjà
              bien !), des ateliers plus longs seront potentiellement plus
              difficiles à remplir. Respecter les temps annoncés.
            </li>
            <li>
              Finir par une évaluation à chaud avec les participants permet
              d'ajuster (ou non) les prochains événements, en fonction des
              retours reçus.
            </li>
            <li>
              <i>
                Pour rappel, sur ce que peut apporter la facilitation en
                intelligence collective :{' '}
                <Link href="/ressources/articles?title=La%20facilitation%20d’ateliers%20:%20une%20démarche%20éprouvée%20d’engagement">
                  <i>
                    La facilitation d’ateliers : une démarche éprouvée
                    d’engagement
                  </i>
                </Link>
              </i>
            </li>
          </ul>
        </div>
        <h3>À la suite de la mobilisation :</h3>
        <p>
          Communiquer, communiquer, communiquer : c’est-à-dire rendre visible le
          travail effectué lors des ateliers (en comprenant l’intérêt de leurs
          contributions, les participants seront d’autant plus enclins à
          revenir). Il faut permettre un accès simple à ces documents, par
          exemple via une centralisation des comptes-rendus sur le site web de
          l’intercommunalité. Des comptes-rendus illustrés peuvent servir de
          rappel visuel pour tous : les participants, comme les absents qui
          peuvent ainsi se rendre compte du travail effectué.
        </p>
      </div>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={ForwardArrow} alt="" />
          <h2>Pour aller plus loin</h2>
        </div>
        <p>
          En Vallée de Villé, la mobilisation dès la phase de diagnostic a fait
          émerger une communauté locale prête à agir sur le sujet et dont l’élan
          dépasse la capacité de la communauté de communes. En attendant la
          stratégie d’adaptation, les acteurs les plus motivés ont identifié des
          actions rapides et concrètes qu’ils souhaitaient mettre en place (par
          exemple, la rédaction d’un guide sur les aides locales).
        </p>
        <p>
          Cette communauté qui se réunit tous les 6 mois, permet aussi
          d’expérimenter les outils d’accompagnement du changement, pour les
          améliorer et ainsi toucher une audience plus difficile à mobiliser.
        </p>
        <p>
          En définitive, la communication continue a permis d’identifier Jolet
          comme point de contact sur les sujets de transition écologique au sein
          de l’interco : plus de 11 invitations tierces reçues pour continuer à
          porter ce sujet !
        </p>
      </div>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={BookIcon} alt="" />
          <h2>Ressources proposées</h2>
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <div>
              <ul>
                <li>
                  <Link
                    href="https://cornu.viabloga.com/texts/jean-michel-cornu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1 h pour animer un réseau, de Jean Michel Cornu
                  </Link>
                </li>
                <li>
                  Jolet, vous partage également, un nombre de ressources issues
                  de son travail, accessibles à ce lien :
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textBloc}>
        <h2>
          <u>En conclusion :</u>
        </h2>
        <div className="flex justify-center mb-12 gap-4">
          <p>
            Bravo à Jolet qui a su inspirer une communauté d’action sur son
            territoire, illustrant le rôle fondamental d’animation du chargé(e)
            de mission.
          </p>
          <Image
            src={ArticleImage2}
            alt="Dessin comique sur l'incompréhension du vocabulaire technique"
            width={0}
            height={0}
            sizes="70%"
            style={{ width: '70%', height: 'auto' }}
          />
        </div>
        <p>
          Les acteurs de la Vallée de Villé peuvent ainsi travailler
          collectivement sur des actions concrètes, issues de leurs besoins, et
          poursuivre leurs collaborations, en attendant la stratégie finalisée
          d’adaptation au changement climatique de leur collectivité.
        </p>
      </div>
    </div>
  );
};

export default PourquoiMobiliser;
