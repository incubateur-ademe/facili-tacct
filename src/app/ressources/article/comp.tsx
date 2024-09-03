import BookIcon from "@/assets/icons/book_icon_black.svg";
import ForwardArrow from "@/assets/icons/keyboard_arrow_next_icon_black.svg";
import LightbulbIcon from "@/assets/icons/lightbulb_icon_black.svg";
import LinkIcon from "@/assets/icons/link_icon_blue.svg";
import AtelierImg from "@/assets/images/article1.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./article.module.scss";


const accordionData = [
  {
    title: "Introduction",
    time: "20 minutes",
    content: [
      "Présenter : Objectif de la session, cadre de travail, vision globale de la démarche et organiser un brise-glace ;",
    ]
  },
  {
    title: "Arpentage",
    time: "10 minutes",
    content: [
      "Demander aux participants de se déplacer devant la frise des évènements Cat Nat (tous les aléas n’apparaissent pas : pas d’arrêtés ou de mention catastrophes naturelles) ;",
      "Vous pouvez prendre quelques réactions de la part des participants ;",
    ]
  },
  {
    title: "Temps de réflexion",
    time: "10 minutes",
    content: [
      "Proposer de prendre un temps individuel pour rédiger sur un post-it les évènements qui n’apparaitraient pas sur la frise mentionnée (type d’évènement, date, etc.) ;",
    ]
  },
  {
    title: "Partage en groupe",
    time: "20 minutes",
    content: [
      "Partager avec le reste du groupe les évènements ajoutés. Si des mêmes évènements ont été mentionnés les regrouper ;",
    ]
  },
  {
    title: "Compléter les événements",
    time: "20 minutes",
    content: [
      "Pour chaque évènement marquant qui a été vécu, ajouter les impacts qui ont été perçus (humain, matériel, symbolique, etc.) par votre territoire ;",
    ]
  },
  {
    title: "Positionnement sur la frise",
    time: "15 minutes",
    content: [
      "Positionner sur la frise temporelle les évènements qui ont été mentionnés par les participants et les laisser commenter.",
      "Introduire la question : “Dans un climat qui change, quel est l’impact sur ces évènements : sont-ils plus fréquents?” et faire écrire la réponse sur les évènements mentionnés.",
    ]
  },
  {
    title: "Ressentis",
    time: "15 minutes",
    content: [
      "Poser la question “Qu’est-ce que vous évoque cette frise territoriale?” et faire un tour auprès des participants.",
    ]
  },
  {
    title: "Conclusion",
    time: "10 minutes",
    content: [
      "Expliquer comment vous aller utiliser les résultats de l’atelier et présenter les prochaines étapes aux participants.",
    ]
  },
]

const ArticleComp = () => {
  
  return (
    <div>
      <h1>Lire un diagnostic en 10 min</h1>
      <div className={styles.introduction}>
        <div>
          <p>
            Le diagnostic de vulnérabilité est un document clé pour comprendre le territoire et ses spécificités au regard du changement climatique. 
            Son appropriation est un point de départ essentiel à la mise en œuvre d’une stratégie concertée d’adaptation. 
            Pourtant, il parvient rarement à convaincre de son intérêt.
          </p>
          <p>Les difficultés que vous nous avez remontées :</p> 
          <ul>
            <li>
              Ce document est complexe et long à produire, tout en étant difficile à lire ;
            </li>
            <li>
              Le document parait souvent léger, voire superficiel ;
            </li>
            <li>
              Il ne parvient pas à mobiliser ou embarquer les parties prenantes à un niveau à la hauteur des enjeux.
            </li>
          </ul>
        </div>
        <div className={styles.blueWrapper}>
          <div className={styles.content}>
            <Image src={LightbulbIcon as StaticImageData} alt="" />
            <p>
              Comment objectiver vos ressentis par rapport aux contenus de ce document ? Voici quelques clefs 
              pour (re)lire rapidement (10 minutes) votre diagnostic avec un œil neuf. Bonne lecture !
            </p>
          </div>
        </div>
      </div>
      <Image src={AtelierImg} alt="" />




      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={ForwardArrow as StaticImageData} alt="" />
          <h2>Et ensuite ?</h2>
        </div>
        <ul className="mx-12">
          <li>
            Compléter les données “manquantes” si vous en avez identifié. Réunissez les services et partenaires si les enjeux ne sont pas priorisés.
          </li>
          <li>
            Le travail de diagnostic ne fournit pas des listes d’actions à mener : ce travail reste à faire ! Heureusement les enjeux prioritaires vous permettent d’identifier rapidement des **leviers** d’actions qui pourront faire l’objet de discussion.
          </li>
          <li>
            Le diagnostic de vulnérabilité va devoir évoluer dans le temps en fonction de ce qui se passe sur votre territoire. Définir des niveaux d’impact (à évaluer par des indicateurs à suivre) vous permettra de situer la collectivité par rapport à des conséquences que vous avez définies ; cela facilitera sa mise à jour.
          </li>
          <li>
            Enfin entamer (ou poursuivre) une démarche collaborative c’est réussir à créer de la confiance entre les acteurs du territoire. Lorsqu’elle est là, votre collectivité sera d’autant plus capable d’agir à la hauteur des enjeux.
          </li>
        </ul>
      </div>

      <p>  </p>

      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={BookIcon as StaticImageData} alt="" />
          <h2>Ressources liées</h2>
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <Link href="/">Atelier sensibilité du territoire</Link>
            <Image src={LinkIcon as StaticImageData} alt="" />
          </div>
          <div className={styles.link}>
            <Link href="/">Découvrez la méthode TACCT</Link>
            <Image src={LinkIcon as StaticImageData} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleComp;
