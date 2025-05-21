import ForwardArrow from '@/assets/icons/keyboard_arrow_next_icon_black.svg';
import ArticleImage3 from '@/assets/images/article14.png';
import ArticleImage from '@/assets/images/article5.png';
import ArticleImage2 from '@/assets/images/article6.jpg';
import EndPageTrigger from '@/hooks/EndPageTrigger';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './article.module.scss';

export const articleMetadata = {
  title: 'Comment éviter de prêcher dans le désert ?',
  description: 'Conseils pour éviter de prêcher dans le désert et maximiser l’impact de vos actions d’adaptation.'
};

const EviterPrecherDesert = () => {
  return (
    <div>
      <h1>
        Comment éviter de prêcher dans le désert ? Les actions à réaliser pour
        bien mobiliser
      </h1>
      <div className={styles.textBloc}>
        <div className="flex justify-center mb-12 gap-4">
          <div>
            <p>
              Cet article a été rédigé avec Jolet Van Kipshagen, Tifaine Briand,
              Severine Bonnet et Aymeric Noel.
            </p>
            <p>
              Notre objectif était d’identifier les freins à la mobilisation et
              vous proposer un ensemble de solutions concrètes à réaliser pour
              plus efficacement aborder la mobilisation de vos parties
              prenantes.
            </p>
            <p>
              <i>
                Ce travail n’a pas de vocation à être exhaustif, il reflète les
                expériences vécues par les participants.
              </i>
            </p>
          </div>
          <Image
            src={ArticleImage}
            alt="Photo d'une visio entre les acteurs cités dans l'article"
            width={0}
            height={0}
            sizes="50%"
            style={{ width: '50%', height: 'auto' }}
          />
        </div>
        <h2>La mobilisation : 8 freins majeurs identifiés</h2>
        <div>
          <ul>
            <li>
              Ne pas avoir une <b>vision claire des objectifs</b> : qu'est-ce
              qu'on va faire et quand est-ce que ça sera finalisé ? ;
            </li>
            <li>
              Gouvernance adéquate pour capter et diffuser des informations
              régulièrement auprès des équipes internes et sortir de l'habituel{' '}
              <b>fonctionnement cloisonné</b> ;
            </li>
            <li>
              Manque de vision sur les <b>rôles et responsabilités de chacun</b>{' '}
              dans la démarche d'adaptation au changement climatique.
            </li>
            <li>
              <b>Manque de compréhension de l’adaptation</b> :{' '}
              <i>
                On parlait d'atténuation et maintenant il y a aussi l'adaptation
                ;
              </i>
            </li>
            <li>
              Ne pas avoir <b>accès aux bons contacts</b> et ne pas les
              mobiliser efficacement (aux moments propices) ;
            </li>
            <li>
              <b>Manque de compétences pour bien communiquer</b> ;
            </li>
            <li>
              <b>Manque de disponibilité</b> des élus et des services techniques
              liée à une <b>surmobilisation</b> ;
            </li>
            <li>
              <b>Ateliers manquants d'attractivités</b> et qui permettent des
              échanges et <b>pas uniquement de la validation</b>… ;
            </li>
          </ul>
        </div>
        <p>
          Ces blocages sont de différentes natures : logistique, compétence ou
          organisationnelle. Vous trouverez ci-dessous un diagramme qui cherche
          à vous apporter autant de réponses concrètes aux freins
          sus-mentionnés.
        </p>
        <Image
          src={ArticleImage2}
          alt="Schéma expliquant les freins à la mobilisation"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto' }}
        />
        <h2>Aborder l’adaptation au changement climatique stratégiquement</h2>
        <p>
          Pour autant, au-delà des actions concrètes pour favoriser la
          mobilisation, certains blocages sont profondément ancrés, ce qui
          nécessite d’aborder la mobilisation comme une approche de conduite du
          changement pour faire évoluer la culture et faire naitre le “
          <b>réflexe adaptation</b>”.
        </p>
        <p>
          Pour faire naitre cette nouvelle culture, le chargé de mission
          adaptation doit prendre un rôle de guide qui organise la conduite du
          changement, bien au-delà de l’information des parties prenantes du
          territoire.
        </p>
        <p>
          Pour comprendre les actions à entreprendre vous pouvez vous appuyer
          sur la courbe du deuil théorisée par Kubler Ross. Le principe clé est
          d’adapter votre posture et la manière dont vous intervenez en fonction
          de l’état émotionnel des parties prenantes que vous mobilisez.
        </p>
        <Image
          src={ArticleImage3}
          alt="Schéma expliquant les freins à la mobilisation"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto' }}
        />
        <div>
          <ul>
            <li>
              Les phases informatives sont nécessaires, mais peuvent mener à
              l’anxiété.
            </li>
            <li>
              Il faut créer des espaces pour inspirer en permettant de découvrir
              des alternatives mises en places ailleurs. Elles rendront plus
              acceptables les changements considérés.
            </li>
            <li>
              Enfin, pour favoriser l’intégration, vous pouvez vous appuyer sur
              des mécanismes de valorisation en montrant le chemin parcouru et
              en présentant à d’autres territoires les actions menées.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={ForwardArrow as StaticImageData} alt="" />
          <h2>Pour aller plus loin</h2>
        </div>
        <div>
          <p>
            Dans la continuité de cette conduite du changement, appuyez-vous sur
            d’autres outils, tel que :
          </p>
          <ul>
            <li>
              <b>La balance décisionnelle :</b> pour présenter les risques et
              avantages à agir et à ne pas agir. Agir maintenant est évidemment
              plus pertinent que d’agir dans l’urgence, voire ne pas agir du
              tout.
            </li>
            <li>
              <b>La spirale dynamique :</b> pour bien comprendre les valeurs de
              vos parties prenantes et discuter avec elles et eux, selon ce qui
              résonne le plus en eux, par exemple, sont-ils plus concernés par
              des chiffres ou bien par des faits?
            </li>
          </ul>
        </div>
        <p>
          Tout ceci est abordé lors de la{' '}
          <Link
            href="https://formations.ademe.fr/formations_accompagner-le-changement-de-comportement_l-intelligence-collective-au-service-des-territoires_s4837.html"
            target="_blank"
            rel="noreferrer"
          >
            formation “L'intelligence collective au service des Territoires”
          </Link>{' '}
          proposée par l’ADEME, parlez-en à votre Direction Régionale (DR).
        </p>
      </div>
      <div className={styles.textBloc}>
        <h2>En conclusion :</h2>
        <p>
          La mobilisation reste une activité compliquée car dépendante de
          dynamiques et de contextes qui vont différer d’un territoire à l’autre
          : analysez ces dynamiques qui ont lieu sur votre territoire pour faire
          avancer vos sujets progressivement.
        </p>
        <p>
          Soyez stratège en orientant votre énergie sur les leviers que vous
          maitrisez. Pour les identifier : ayez conscience de votre sphère
          d’influence. Vous avez accès à certaines parties prenantes, plus
          accessibles que d’autres, donc priorisez votre mobilisation sur ce qui
          vous est accessible.
        </p>
      </div>
      <EndPageTrigger />
    </div>
  );
};

export default EviterPrecherDesert;
