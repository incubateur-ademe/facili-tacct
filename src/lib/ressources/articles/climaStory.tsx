import BookIcon from '@/assets/icons/book_icon_black.svg';
import ForwardArrow from '@/assets/icons/keyboard_arrow_next_icon_black.svg';
import BulbIcon from '@/assets/icons/lightbulb_icon_black.svg';
import ArticleImage from '@/assets/images/article10.png';
import ArticleImage2 from '@/assets/images/article11.jpg';
import ArticleImage3 from '@/assets/images/article12.png';
import { RetourHautDePage } from '@/components/interactions/RetourHautDePage';
import EndPageTrigger from '@/hooks/EndPageTrigger';
import Image from 'next/image';
import Link from 'next/link';
import styles from './article.module.scss';

const ClimaStory = () => {
  return (
    <div>
      <RetourHautDePage />
      <h1>ClimaSTORYⓇ, une cartographie pour sensibiliser</h1>
      <Image
        src={ArticleImage}
        alt="Logo ClimaStory"
        width={0}
        height={0}
        sizes="100%"
        style={{ width: '100%', height: 'auto' }}
      />
      <p className="flex justify-center">
        Qu’est-ce que c’est ? à quoi cela sert ?
      </p>
      <p>
        Cet article a été rédigé avec le témoignage d’Ombrie Gueidan, chargée de
        mission transition écologique à la Communauté de Communes des Baronnies
        en Drôme Provençale.
      </p>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={BulbIcon} alt="" />
          <h2>ClimaSTORYⓇ, une cartographie pour sensibiliser</h2>
        </div>
        <div>
          <ul>
            <li>
              Objectif : prendre conscience des effets en cascade du changement
              climatique en se projetant sur une cartographie du territoire.
            </li>
            <li>
              L’atelier peut servir d’introduction pour comprendre les enjeux
              d’adaptation au changement climatique et ne requiert pas de
              connaissances particulières de la part des participants.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.textBloc}>
        <h3>Concrètement, une session ClimaSTORYⓇ, ça se passe comment ?</h3>
        <div>
          <p>
            <b>
              <u>Il faut :</u>
            </b>
          </p>
          <ul>
            <li>
              Un animateur préalablement formé qui dispose de la boite du jeu.
            </li>
            <li>
              <b>2h30 à 4h00</b> de temps
            </li>
            <li>
              Entre <b>6 et 12</b> participants
            </li>
          </ul>
        </div>
        <Image
          src={ArticleImage2}
          alt="Photo du jeu ClimaStory"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto' }}
        />
        <br></br>
        <br></br>
        <div>
          <p>
            <b>
              <u>L'atelier se déroule en plusieurs temps :</u>
            </b>
          </p>
          <ul>
            <li>
              <b>
                Introduction à l’atelier et projection des participants via le
                récit du territoire
              </b>
            </li>
            <li>
              <b>Séquence 1 : REPERAGE DES EFFETS</b>
              <p>
                Cette phase permet aux participants de comprendre les effets du
                changement climatique sur le territoire, les impacts et
                conséquences socio-économiques.
              </p>
            </li>
            <li>
              <b>Séquence 2 : DETERMINATION DES ENJEUX</b>
              <p>
                Dans cette phase les participants déterminent les actions
                possibles et comprennent les liens entre les activités et
                compétences du territoire.
              </p>
            </li>
            <li>
              <b>Séquence 3 : CHOIX DES SOLUTIONS</b>
              <p>
                Durant ce temps, les participants se mettent d’accord sur les
                solutions envisageables et se mettent d’accord sur leur portage.
              </p>
            </li>
            <li>
              <b>Conclusion de l’atelier</b>
            </li>
          </ul>
        </div>
        <p>
          En fonction des participants, 3 protocoles, avec des objectifs
          différents, sont possibles :
        </p>
        <Image
          src={ArticleImage3}
          alt="Protocoles du jeu ClimaStory"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto' }}
        />
        <h2>
          Pourquoi la communauté de communes des Baronnies en Drôme Provençale a
          utilisé cet outil ?
        </h2>
        <p>
          À l’occasion d’une démarche TACCT accompagnée par l’ADEME, Laurence
          Monnet, chargée de mission Adaptation au changement climatique
          d’AURA-EE a pris contact avec la CCBDP pour présenter ClimaSTORYⓇ. A
          cette époque, les confusions entre atténuation et adaptation étaient
          fréquentes parmi les élus et les agents de la collectivité. Le besoin
          d’une culture commune s’est fait sentir, en préalable à l’élaboration
          d’une politique d’adaptation ambitieuse.
        </p>
        <h2>Comment s’est passé l’organisation de ClimaSTORYⓇ ?</h2>
        <p>
          Initialement, la directrice du pôle transition écologique de la CCBDP
          a été formée à l’atelier, mais se charger elle-même de la
          sensibilisation lui aurait pris beaucoup trop de temps. Aussi, pour
          l’organisation et l’animation des ateliers, la CCBDP s’est-elle
          appuyée sur l’association Carrefour des habitants, un acteur de
          l’action sociale, afin de bénéficier d’une véritable expertise de
          facilitation, tout en touchant des publics plus éloignés et en
          limitant le temps à y consacrer.
        </p>
        <p>
          Après avoir expérimenté 2 ateliers ClimaSTORYⓇ sur un territoire
          fictif, la CCBDP a souhaité aller plus loin en personnalisant
          l’atelier grâce aux résultats du diagnostic de vulnérabilité de son
          territoire, réalisé avec TACCT. Ce projet de personnalisation a été
          financé grâce au projet AdaptNow du programme Interreg Espace Alpin
          (fonds FEDER) dont AURA-EE est partenaire. Avantage escompté :
          disposer d’une carte reflétant les aléas et les enjeux réels du
          territoire, potentiellement plus mobilisateurs.
        </p>
        <p>
          A l’initiative d’Ombrie Gueidan de la CCBDP et de Tobias Sanchez, du
          Carrefour des habitants, un groupe de travail s’est constitué avec des
          partenaires connaissant bien le territoire, des chargés de missions et
          des élus. Ils ont construit un récit spécifique aux Baronnies sur la
          base du diagnostic de vulnérabilité, puis, ont travaillé sur la carte.
          Cet objectif a représenté environ 7 jours de travail.
        </p>
        <p>
          Le partenariat avec le Carrefour des habitants inclut la réalisation
          de 4 ateliers par an, sur inscription, mais sans publics cibles
          prédéfinis : ils sont réalisés sur demande. Ce mode de fonctionnement
          a permis de toucher différents publics : le pôle aménagement de la CC,
          un collectif de citoyens engagés, France Travail, etc.
        </p>
        <h2>Les apprentissages de nos échanges :</h2>
        <div>
          <ul>
            <li>
              L’utilisation d’un territoire fictif dépassionne les débats, mais
              peut aussi frustrer les participants, car certains enjeux ne
              s’appliquent pas au ‘vrai’ territoire ; les solutions réfléchies
              dans le jeu n’auront pas de traductions concrètes pour adapter le
              territoire. <br></br>
              Pour autant, démarrer avec une carte fictive permet à minima de
              tester l’intérêt de vos parties prenantes pour ce format
              d’atelier.
            </li>
            <li>
              Dans le cas de la CCBDP, les participants sont restés marqués par
              cette expérience, même plusieurs mois après. Le fait que le jeu
              propose de se mettre dans la peau d’un élu et de prendre des
              décisions engageantes permet de prendre la mesure du
              fonctionnement d’une collectivité et de ses contraintes. <br></br>
              Assurément, l’expérience sera d’autant plus marquante avec une
              vraie carte du territoire.
            </li>
            <li>
              Il est démotivant pour les participants de penser que leurs idées,
              émergeant lors de l’atelier, ne servent à rien. La CCBDP a donc
              prévu de récolter les résultats de chaque atelier et d’en
              présenter une synthèse aux élus, à l’occasion du COPIL annuel du
              PCAET, escomptant ainsi enrichir leurs réflexions sur l’adaptation
              au changement climatique.
            </li>
          </ul>
        </div>
        <h2>
          En conclusion : la sensibilisation, un préalable qui peut vous aider
          sur le temps long.
        </h2>
        <p>
          Se forger un socle commun de compréhension des enjeux du territoire
          face aux impacts du changement climatique est un préalable
          indispensable à toute mise en œuvre. Sans ce pré-requis d’une culture
          commune, tout chargé de mission peine à faire valoir l’importance de
          ce sujet qui touche tout le monde.
        </p>
        <div>
          <p>Avec ClimaSTORYⓇ, les participants repartent en ayant :</p>
          <ul>
            <li>Compris les impacts en chaîne du changement climatique,</li>
            <li>
              Identifié les tensions ou coopérations possibles entre acteurs du
              territoire,
            </li>
            <li>Choisi des solutions d’adaptation à prioriser,</li>
            <li>
              Défini un plan d’intervention pour le territoire et ses acteurs.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={BookIcon} alt="" />
          <h2>Ressources liées</h2>
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <div>
              <ul>
                <li>
                  Le site de{' '}
                  <Link
                    href="https://www.auvergnerhonealpes-ee.fr/passer-a-laction/adaptation-au-changement-climatique/climastory"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ClimaSTORYⓇ
                  </Link>
                  ;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={ForwardArrow} alt="" />
          <h2>Pour aller plus loin</h2>
        </div>
        <div>
          <ul>
            <li>
              Des retours d’expériences sur ClimaSTORYⓇ sont disponibles sur la{' '}
              <Link
                href="https://librairie.ademe.fr"
                target="_blank"
                rel="noreferrer"
              >
                librairie de l'ADEME
              </Link>
              .
            </li>
            <li>
              Prenez contact via{' '}
              <Link
                href="https://www.auvergnerhonealpes-ee.fr/fileadmin/user_upload/mediatheque/raee/Documents/Thematiques/Adaptation/liste_animateurs_Sept_2024.pdf"
                target="_blank"
                rel="noreferrer"
              >
                l'annuaire national
              </Link>{' '}
              des animateurs ClimaSTORYⓇ.
            </li>
          </ul>
        </div>
      </div>
      <EndPageTrigger />
    </div>
  );
};

export default ClimaStory;
