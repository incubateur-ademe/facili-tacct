import BookIcon from '@/assets/icons/book_icon_black.svg';
import ForwardArrow from '@/assets/icons/keyboard_arrow_next_icon_black.svg';
import LightbulbIcon from '@/assets/icons/lightbulb_icon_black.svg';
import EndPageTrigger from '@/hooks/EndPageTrigger';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './article.module.scss';

export const articleMetadata = {
  title: 'La facilitation d’ateliers : une démarche éprouvée d’engagement',
  description: 'Découvrez comment la facilitation d’ateliers peut renforcer l’engagement des parties prenantes dans l’adaptation.'
};

const FacilitationDateliers = () => {
  return (
    <div>
      <h1>La facilitation d’ateliers : une démarche éprouvée d’engagement</h1>
      <div className={styles.textBloc}>
        <p>
          Le 23.04.24, nous organisions un atelier autour du{' '}
          <b>rôle de la facilitation d’ateliers dans la mobilisation.</b>
        </p>
        <b>Nos intervenant-es :</b> Louis & Mathilde de Caluire-et-Cuire.
        <ul>
          <li>
            Mathilde est responsable du service Nature et Résilience (en charge
            de l'aménagement paysager du territoire et de la transition
            écologique).
          </li>
          <li>
            Louis est conseiller interne en organisation et s’occupe à 50% de
            missions d'organisation pour les services et à 50%, il accompagne
            des projets transversaux (accompagnement projet et méthodologique)
            pour les services de la ville.
          </li>
        </ul>
      </div>
      <div className={styles.blueWrapper}>
        <div className={styles.content}>
          <Image src={LightbulbIcon as StaticImageData} alt="" />
          <p>
            Voici la <b>définition de la facilitation</b> de la
            <Link href="https://www.modernisation.gouv.fr/outils-et-formations/quest-ce-que-la-facilitation">
              {' '}
              DITP{' '}
            </Link>
            (Direction Interministérielle de la Transformation Publique) :
            <br></br>
            <br></br>
            <b>
              La facilitation est la mise en place d’un cadre, de méthodes et de
              processus qui permettent à un groupe d’opérer en intelligence
              collective.
            </b>
          </p>
        </div>
      </div>
      <div className={styles.textBloc}>
        <h2>Comment concrètement faire de la facilitation ?</h2>
        <ul>
          <li>
            Bien définir l’objectif de la facilitation / participation pour vos
            participant-es :{' '}
            <b>Qu’est-ce que vous souhaitez atteindre collectivement ?</b>
            <ul style={{ listStyle: 'circle' }}>
              <li>
                <b>Information</b> : présenter pour compréhension collective ;
              </li>
              <li>
                <b>Consultation</b> : recueillir l’expression d’acteurs sur un
                sujet déjà instruit ;
              </li>
              <li>
                <b>Concertation</b> : faire contribuer des acteurs à
                l’élaboration d’un projet ;
              </li>
              <li>
                <b>Co-construction / décision</b> : partager les décisions et
                l’élaboration / mise en œuvre du projet.
              </li>
            </ul>
          </li>
          <li>
            Se questionner sur l’expérience des participant-es pour ne pas
            reproduire un déroulé ennuyeux ou frustrant. Par exemple : une
            conférence descendante de 1h a une plus forte probabilité de faire
            décrocher votre auditoire.
          </li>
          <li>
            Adapter le déroulé de votre atelier en fonction de votre contexte :
            nombre de participant-es, objectif, présentiel ou virtuel, etc.
          </li>
        </ul>
        <h2>
          Et pourquoi utiliser la facilitation dans votre démarche d’adaptation
          au changement climatique ?
        </h2>
        <ul>
          <li>
            Caluire-et-Cuire dans le cadre du label Territoire Engagé pour la
            Transition Ecologique a initié la définition de la stratégie
            climat-air-énergie. Point de départ des réflexions sur la
            vulnérabilité du territoire et a ressenti le besoin d’approfondir ce
            sujet.
          </li>
          <li>
            En faisant appel à un cabinet de conseil, le territoire a rapidement
            réalisé son diagnostic sur la base de la méthode TACCT. A la suite
            de ce travail, pour partager les enseignements et engager les DGS et
            cadres de tous les services autour du diagnostic, un atelier s’est
            tenu au mois d’avril avec 120 participant-es
          </li>
          <li>
            Les objectifs de l'atelier :
            <ul style={{ listStyle: 'circle' }}>
              <li>Partager et compléter le diagnostic ;</li>
              <li>
                Avoir un travail enthousiasmant et non « plombant » sur les
                récits de futur souhaitable ;
              </li>
              <li>Embarquer les cadres autour du travail effectué.</li>
            </ul>
          </li>
        </ul>
        <h2>Les apprentissages de cette session</h2>
        <h3>Ce qui a été réussi</h3>
        <ul>
          <li>
            La session de travail enthousiasmante via des modalités d’animation
            dynamiques ;
          </li>
          <li>
            La complétion du diagnostic de vulnérabilité avec les participant-es
            et la construction de récits souhaitables qui se croisent avec les
            vulnérabilités identifiées ;
          </li>
          <li>
            La forme qui a été importante : Donner la parole aux représentant-es
            des tables rondes pour partager de manière ludique leurs récits.
          </li>
        </ul>
        <h3>Ce qui aurait pu être amélioré</h3>
        <ul>
          <li>
            L’information préalable des participant-es avec une synthèse pour
            avoir un 1er vernis de connaissance en amont de l’atelier ;
          </li>
          👉 Caroline du SICOVAL nous rappelait lors de la session du 23.04
          qu’il y a toujours un risque que les documents ne soient pas consulté
          en amont de l’atelier.
          <li>
            Avoir un créneau de temps de travail plus important que les 1h15
            consacrées ;
          </li>
          <li>
            Avoir un cadre de travail moins traditionnel – pourquoi pas
            travailler à l’extérieur, avoir une présentation vidéo, avoir un
            grand témoin, etc.
          </li>
        </ul>
        <h2>En conclusion : la facilitation est un métier à part entière.</h2>
        <p>
          Vous l’aurez compris, il ne suffit pas simplement d’utiliser des
          post-it pour que l’intelligence collective puisse prendre. Tout ceci
          n’est pas inné, si vous avez une appétence pour la facilitation,
          formez-vous. Si ce n’est pas la cas, vous pouvez vous faire
          accompagner par des facilitateur-ices externes.
        </p>
      </div>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={BookIcon as StaticImageData} alt="" />
          <h2>Ressources liées</h2>
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <Link
              href="https://fertiles.co/nos-ressources/"
              target="_blank"
              rel="noreferrer"
            >
              L’espace des ressources Fertiles
            </Link>
          </div>
          <div className={styles.link}>
            <Link
              href="https://universite-du-nous.org/gouvernance-partagee-ressources"
              target="_blank"
              rel="noreferrer"
            >
              Les outils d’intelligence collective de l’Université du Nous
            </Link>
          </div>
          <div className={styles.link}>
            <Link
              href="https://lalicorne.buzzsprout.com/"
              target="_blank"
              rel="noreferrer"
            >
              La licorne, un podcast sur la facilitation
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={ForwardArrow as StaticImageData} alt="" />
          <h2>Pour aller plus loin</h2>
        </div>
        <ul className="mx-12">
          <li>
            Le lien vers la formation à l’intelligence collective pour les
            territoires proposée par l’ADEME.{' '}
            <Link
              href="https://formations.ademe.fr/formations_accompagner-le-changement-de-comportement_l-intelligence-collective-au-service-des-territoires_s4837.html"
              target="_blank"
              rel="noreferrer"
            >
              L'intelligence collective au service des Territoires - ADEME
              Formation
            </Link>
          </li>
          👉{' '}
          <i>
            Vérifier sur le site la disponibilité pour les sessions existantes
            dans votre région. Si il n’y en a pas, parlez-en directement avec
            vos DR pour planifier une nouvelle session.
          </i>
          <li>
            Intégrer la facilitation d’ateliers dans les attentes vis-à-vis d’un
            BE dans votre prochain cahier des charges, pour cela{' '}
            <Link
              href="/ressources/articles?title=Article%20CdC%20sur%20la%20facilitation"
              target="_blank"
              rel="noreferrer"
            >
              consultez cet article.
            </Link>
          </li>
        </ul>
      </div>
      <EndPageTrigger />
    </div>
  );
};

export default FacilitationDateliers;
