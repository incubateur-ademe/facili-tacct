import BookIcon from '@/assets/icons/book_icon_black.svg';
import ForwardArrow from '@/assets/icons/keyboard_arrow_next_icon_black.svg';
import LinkIcon from '@/assets/icons/link_icon_blue.svg';
import AtelierImage from '@/assets/images/article3.png';
import EndPageTrigger from '@/hooks/EndPageTrigger';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './article.module.scss';

export const articleMetadata = {
  title: 'Mettre en récit mon territoire pour engager',
  description: 'Découvrez comment mettre en récit votre territoire pour engager les acteurs locaux dans l’adaptation au changement climatique.'
};

const MiseEnRecit = () => {
  return (
    <div>
      <h1>Mettre en récit mon territoire pour engager</h1>
      <p>
        Cet article a été rédigé avec les précieuses interventions de Violaine
        Magne (Clermont Auvergne Metropole) et d’Adam Gibaut (PNR du Pilat),
        merci à eux.
      </p>
      <div className={styles.textBloc}>
        <h2>Pourquoi faire la mise en récit de son territoire ?</h2>
        <p>
          <b>
            « L’humanité est une espèce fabulatrice qui, en se racontant des
            histoires de plus en plus complexes, développe des capacités de
            coopération »
          </b>{' '}
          - Nancy Huston et Yuval Noah Harrari, auteurs.
        </p>
        <p>
          Notre cerveau s’est développé selon “deux systèmes distincts de
          traitement de l’information”. L’un est analytique, logique et traduit
          la réalité en symboles abstraits, en mots et en chiffres. L’autre est
          orienté par les émotions (la peur, l’angoisse, la colère, la joie…),
          les images, l’intuition et l’expérience. (
          <i>Le syndrome de l’autruche</i> Georges Marshall, philosophe)
        </p>
        <p>
          Une émotion est ce qui met en mouvement, elle est source d’énergie.
          Faire appel aux émotions, c’est se donner la possibilité de faire
          bouger les gens, les points de vue.
        </p>
        <p>
          <i>
            Ex. la surprise m’informe que je ne suis plus en phase avec mon
            environnement, elle révèle un besoin d’ajustement pour me
            reconnecter ⇒ je dois bouger. L’éco-anxiété est une forme de peur
            qui informe d’un danger perçu, elle révèle un besoin de sécurité.
          </i>
        </p>
        <p>
          La mise en récit qui tisse des relations entre les événements et les
          personnes qui les vivent, permet d’en tirer une compréhension
          partagée. En suscitant des émotions, elle met les personnes en
          mouvement, les “embarque”. Nous partageons plus volontiers un récit
          que des « données brutes ».
        </p>
        <p>
          A retenir : <b>On ne s’approprie pas des données</b> (les résultats
          d’un diagnostic de vulnérabilité par exemple) en le lisant,
          <b> par simple transfert d’informations</b>. Il faut se poser soi-même
          des questions pour en faire des connaissances : se projeter dans des
          situations futures, associer des savoirs et donc embarquer ceux qui
          les portent, comprendre avec qui l’on partagera une même expérience
          des impacts.
        </p>
        <p>
          <u>
            La pyramide DICS (Donnée / Information / Connaissance / Sagesse)
            propose une image de processus d’appropriation d’une donnée :
          </u>
        </p>
        <div className="flex justify-center mb-12">
          <Image
            src={AtelierImage}
            alt=""
            width={0}
            height={0}
            sizes="100%"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <h2>
          Retour d’expérience : Violaine Magne (Clermont Auvergne Metropole) et
          d’Adam Gibaud (PNR du Pilat)
        </h2>
        <p>
          Les deux territoires sont dans une démarche TACCT. Avant de poursuivre
          avec TACCT Stratégie, ils ont tous deux organisé une restitution de
          leur diagnostic de vulnérabilité avec une mise en récit de leur
          territoire.
        </p>
        <h3>1️⃣ Pour la CAM :</h3>
        <p>
          Pour travailler à une stratégie permettant d’identifier des actions à
          court, moyen et long terme pour la ressource en eau et l’inconfort
          thermique, il fallait pouvoir démarrer avec une compréhension partagée
          de ces enjeux entre parties prenantes du territoire.
        </p>
        <p>
          L’atelier a démarré par un temps stimulant l’imaginaire grâce à une
          Une de journal fictive mettant en avant le territoire en 2044. Cette
          vision à la fois synthétique, imagée et appréhendable facilement, a
          offert une vision tangible, sensible et mobilisatrice du futur du
          territoire.
        </p>
        <p>
          Les participants ont ensuite été invité à travailler par thématique
          pour rappeler les actions déjà mises en place et celles qu’il faudrait
          mettre en œuvre au regard des impacts attendus du changement
          climatique.
        </p>
        <p style={{ color: 'grey' }}>
          👉{' '}
          <i>
            Pour en savoir plus sur cet atelier, consultez le retour
            d’expérience de Violaine{' '}
          </i>
          <Link href="https://librairie.ademe.fr/7215-questionner-l-imaginaire-pour-faire-reagir-en-atelier-tacct-retour-d-experience-de-clermont-auvergne-metropole-63.html">
            <i>sur la librairie Ademe.</i>
          </Link>
        </p>
        <h3>2️⃣ Pour le PNR Pilat :</h3>
        <p>
          A la suite du diagnostic de vulnérabilité et de l’identification d’un
          enjeu prioritaire sur la forêt, le PNR du Pilat a réalisé 2 ateliers
          stratégiques utilisant la mise en récit de leur territoire.
        </p>
        <ul>
          <li>
            Le 1er atelier a permit de déterminer des niveaux d’impacts et de
            séquencer des actions d'adaptation par niveau avec des experts de la
            forêt. Les données recueillies au cours de cet atelier ont été
            consolidées en interne pour produire un récit "si on ne fait rien".
          </li>
          <li>
            Un 2nd atelier a démarré par la lecture de ce récit pour susciter
            des proposition d'amélioration par les participants eux-mêmes. La
            ventilation des actions par niveau d'impact a elle aussi été
            améliorée et a donné lieu à un 2nd un récit traduisant la situation
            d’un PNR du Pilat ayant su adapter sa forêt et sa filière
            sylviculture au contexte climatique.
          </li>
          <li>
            Une synthèse issue de ces récits a été présentée en commission,
            réunissant élus et experts présents aux ateliers.
          </li>
        </ul>
        <p style={{ color: 'grey' }}>
          👉 <i>Pour en savoir plus sur ces récits, consultez</i>
          <Link href="https://collaboratif.ademe.fr/jcms/prod_1000406450/fr/communaute-adaptation-au-changement-climatique?documentKinds=&explorerCurrentCategory=prod_1000457459&mids=&portlet=prod_1000406449&types=ALL">
            <i> les fiches</i>
          </Link>
          <i> mises à disposition de la communauté par Adam.</i>
        </p>
      </div>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={ForwardArrow as StaticImageData} alt="" />
          <h2>Découvrez d'autres mises en récits</h2>
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <Link
              href="https://www.ouest-france.fr/environnement/eau/recit-une-douche-de-trois-minutes-tous-les-trois-jours-la-vie-imaginee-dune-nantaise-en-2048-f877d05a-36c5-11ee-a2d3-05324ea7f164"
              target="_blank"
              rel="noreferrer"
            >
              « Une douche de trois minutes tous les trois jours » : la vie
              imaginée d’une Nantaise en 2048
            </Link>
            <Image src={LinkIcon as StaticImageData} alt="" />
          </div>
          <div className={styles.link}>
            <Link
              href="https://www.audiar.org/publication/environnement/climat/laudiar-publie-recits-de-vies-en-2050-6-fictions-pour-incarner-ladaptation-au-changement-climatique/"
              target="_blank"
              rel="noreferrer"
            >
              L’Audiar publie “Récits de vies en 2050, 6 fictions pour incarner
              l’adaptation au changement climatique”
            </Link>
          </div>
          <div className={styles.link}>
            <Link
              href="https://lafrancea2degres.fr/"
              target="_blank"
              rel="noreferrer"
            >
              La France à +2°
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.textBloc}>
        <h2>Quelques apprentissages clés :</h2>
        <h3>Faire appel aux émotions : oui, mais comment?</h3>
        <p>
          Au delà d’une prise de conscience, les émotions sont des réactions qui
          suscitent une mise en mouvement.
        </p>
        <p>
          La mise en récit peut prendre plusieurs formes : texte écrit, images,
          BD, autres formes artistiques… Dans tous les cas, le récit transmet de
          véritables informations (issues du travail sur le diagnostic) et les
          émotions qu’il suscite donnent du sens à l’action commune à mettre en
          œuvre : le processus d’appropriation est en marche.
        </p>
        <p>
          Allant au-delà d’une simple compilation de données météorologiques, le
          récit illustre des conséquences tangibles du changement climatique sur
          le territoire. Pas d’auto-censure : Violaine a craint de choquer avec
          certains titres alors que des participants ont, au contraire, estimé
          que la réalité pourrait être pire. Vous pouvez montrer différentes
          hypothèses : si rien ne change ou ce qui pourrait advenir avec une
          action politique ambitieuse.
        </p>
        <h3>Mise en récit : quelques questions à se poser</h3>
        <p>
          En amont de cette présentation : réfléchissez clairement à votre rôle
          durant l’atelier. Démultiplier vos rôles : facilitateur de la session,
          expert technique, etc., peut créer de la confusion pour les
          participants. Pour y répondre un accompagnement externes simplifie
          souvent les choses.
        </p>
        <p>
          Enfin, ne sous-estimer pas le temps nécessaire pour produire des
          scénarios de qualité. Choisissez un format d’atelier en fonction de
          votre capacité à mener ce travail. Par exemple : Violaine, ancienne
          journaliste maitrisait déjà l’exercice de la rédaction d’une Une. Dans
          tous les cas, une bonne préparation est essentielle pour le succès de
          l'atelier, car il s’agit du point de départ pour de plus vastes
          échanges.
        </p>
        <h3>Comment exploiter efficacement les résultats ?</h3>
        <p>
          Avant même de lancer les ateliers, il est fondamental de se poser des
          questions sur leur finalité et l'exploitation des résultats. Cet
          élément est important, par exemple pour Clermont Auvergne Métropole,
          la diffusion de la Une à des non-participants à l’atelier n’est pas
          prévue : il s’agit d’un support de travail qui ne peut être sortie de
          son contexte et qui est à l’origine de réflexions.
        </p>
        <p>
          Dans tous les cas, un travail de consolidation rigoureux des échanges
          sera nécessaire à la suite de l’atelier et vous permettra d’avancer
          plus surement dans votre démarche d’adaptation au CC.
        </p>
        <h2>Conclusion</h2>
        <p>
          En conclusion, la mise en récit du territoire peut fournir un support
          à une traduction des conséquences du changement climatique dans un
          format qui parle à tous et où susciter l'émotion doit prendre le pas
          sur le fait d’être exhaustif ou “objectif”. Il est important toutefois
          que les données sous-jacentes soient issues d’un réel travail sur le
          diagnostic, validé par vos experts techniques, au risque d’être
          qualifiées de “science fiction”.
        </p>
        <p>
          La mise en récit est un concept qui peut s’appuyer sur différents
          outils. Au delà des 2 exemples proposés, il en existe bien d’autres.
          Assurez vous que l’outil choisi soit en cohérence avec votre public
          (capacité à recevoir le message), mais aussi à vos capacités de
          mobilisation et enfin de facilitation d’ateliers ; si vous êtes
          incertain sur ce dernier point, n’hésitez pas à vous faire
          accompagner.
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
              href="https://www.cerdd.org/Parcours-thematiques/Mise-en-recits"
              target="_blank"
              rel="noreferrer"
            >
              Le CERDD qui propose quelques ressources sur la mise en récit
            </Link>
          </div>
          <div className={styles.link}>
            <Link
              href="https://www.sustainable-everyday-project.net/boite-a-outils-visions-21/?p=1"
              target="_blank"
              rel="noreferrer"
            >
              Une autre boite à outils sur des méthodologies de mise en récit
            </Link>
          </div>
          <div className={styles.link}>
            <Link
              href="https://urbact.eu/toolbox-home/analysing-problems/newspaper-tomorrow"
              target="_blank"
              rel="noreferrer"
            >
              Newspaper from tomorrow - la méthodologie dont s’est inspirée
              Violaine pour réaliser cette Une du futur
            </Link>
          </div>
        </div>
      </div>
      <EndPageTrigger />
    </div>
  );
};

export default MiseEnRecit;
