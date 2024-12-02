import BookIcon from "@/assets/icons/book_icon_black.svg";
import CursorDoubleIcon from "@/assets/icons/cursor_double_icon_black.svg";
import GroupIcon from "@/assets/icons/group_people_icon_black.svg";
import HourglassIcon from "@/assets/icons/hourglass_icon_black.svg";
import ForwardArrow from "@/assets/icons/keyboard_arrow_next_icon_black.svg";
import LightbulbIcon from "@/assets/icons/lightbulb_icon_black.svg";
import ListIcon from "@/assets/icons/list_unordered_icon_black.svg";
import WarningIcon from "@/assets/icons/warning_icon_black.svg";
import ControlledAccordion from "@/dsfr/base/client/Accordion";
import Notice from "@codegouvfr/react-dsfr/Notice";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./atelier.module.scss";


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

const AtelierComp = () => {
  
  return (
    <div>
      <h1>Atelier mémoire de territoire</h1>
      <div className={styles.introduction}>
        <p>
          Dans le cadre du diagnostic de vulnérabilité engager les parties prenantes avant la restitution est essentiel. 
          Par manque d’implication des parties prenantes lors de sa production, 
          son contenu ne débouche pas sur la mise en place d’une stratégie d’adaptation à la hauteur des enjeux. 
        </p>
        <p>
          En réponse, nous vous proposons l’atelier mémoire de territoire pour déterminer collectivement l’exposition du 
          territoire aux aléas climatiques en partant de la connaissance des évènements passés et des probabilités d’occurrences futures. 
          La liste se construit grâce aux arrêtés Cat Nat et aux parties prenantes du territoire. 
          L’atelier permet d’engager vos parties prenantes en les positionnant dans un rôle de réelle contribution au diagnostic de vulnérabilité. 
        </p>
        <div className={styles.blueWrapper}>
          <div className={styles.content}>
            <Image src={HourglassIcon as StaticImageData} alt="" />
            <p>2 heures ou plus</p>
          </div>
          <div className={styles.content}>
            <Image src={GroupIcon as StaticImageData} alt="" />
            <p>Jusqu'à 12 participants par animateur</p>
          </div>
          <div className={styles.content}>
            <Image src={CursorDoubleIcon as StaticImageData} alt="" />
            <p>Élus, services techniques et experts dans la connaissance du territoire</p>
          </div>
        </div>
      </div>
      <div className={styles.conseils}>
        <div className={styles.animation}>
          <div className={styles.h2title}>
            <Image src={LightbulbIcon as StaticImageData} alt="" />
            <h2>Conseils d'animation</h2>
          </div>
          <ul className="mx-12">
            <li>
              Natoque penatibus et magnis dis parturient montes ;
            </li>
            <li>
              Nascetur ridiculus mus ;
            </li>
            <li>
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem ;
            </li>
          </ul>
        </div>
        <div className={styles.vigilance}>
          <div className={styles.h2title}>
            <Image src={WarningIcon as StaticImageData} alt="" />
            <h2>Points de vigilance</h2>
          </div>
          <ul className="mx-12">
            <li>
              S’assurer que les acteurs en présence aient une bonne vision de l’historique du territoire ;
            </li>
            <li>
              Mêler les points de vues et des expertises différentes en associant aussi différents acteurs du territoire
               (société civile, organisations privées, etc.)            
            </li>
            <li>
              Bien expliquer l’objectif de l’atelier et s’assurer que les acteurs aient bien compris comment les résultats seront utilisés.
            </li>
            <li>
              Pour mobiliser dans la durée, captez des retours des participant-es, ils serviront pour améliorer votre déroulé, etc.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.deroule}>
        <div className={styles.h2title}>
          <Image src={ListIcon as StaticImageData} alt="" />
          <h2>Déroulé de l'atelier</h2>
        </div>
        <div className={styles.contentWrapper}>
          <Notice 
            isClosable={true} 
            title="N’oubliez pas : le déroulé proposé par l’équipe Facili-TACCT est une 
            inspiration qui est à adapter en fonction de votre contexte, de votre objectif et de vos participants."
          />
          <ControlledAccordion accordionData={accordionData} />
        </div>
      </div>

        <p>  </p>
      <div className={styles.grayWrapper}>
        <div className={styles.h2title}>
          <Image src={ForwardArrow as StaticImageData} alt="" />
          <h2>Et ensuite ?</h2>
        </div>
        <ul className="mx-12">
          <li>
            Synthétisez les résultats et poursuivre via un travail sur l’exposition future de votre territoire ;
          </li>
          <li>
            Si vous utilisez la plateforme TACCT ajouter vos résultats sur la plateforme pour conserver les connaissances ;
          </li>
          <li>
            Noter et commenter l’apport de cette fiche atelier sur Facili-TACCT ;
          </li>
          <li>
            Garder contact avec les participants pour les informer de l’avancée et les garder mobilisé ;
          </li>
          <li>
            Organiser un atelier sur la sensibilité
          </li>
          <li>
            Consulter la plateforme TACCT pour comprendre les prochaines étapes pour créer une démarche d’adaptation au changement climatique de votre territoire.
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
            <Link 
              href="/ressources/articles?title=La%20facilitation%20d’ateliers%20:%20une%20démarche%20éprouvée%20d’engagement"
              target="_blank"
              rel="noreferrer"
            >
              Atelier sensibilité du territoire
            </Link>
            {/* <Image src={LinkIcon as StaticImageData} alt="" /> */}
          </div>
          <div className={styles.link}>
            <Link 
              href="https://tacct.ademe.fr/"
              target="_blank"
              rel="noreferrer"
            >
              Découvrez la méthode TACCT
            </Link>
            {/* <Image src={LinkIcon as StaticImageData} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtelierComp;
