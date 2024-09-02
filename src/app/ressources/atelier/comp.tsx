import BookIcon from "@/assets/icons/book_icon_black.svg";
import CursorDoubleIcon from "@/assets/icons/cursor_double_icon_black.svg";
import GroupIcon from "@/assets/icons/group_people_icon_black.svg";
import HourglassIcon from "@/assets/icons/hourglass_icon_black.svg";
import ForwardArrow from "@/assets/icons/keyboard_arrow_next_icon_black.svg";
import LinkIcon from "@/assets/icons/link_icon_blue.svg";
import ListIcon from "@/assets/icons/list_unordered_icon_black.svg";
import { NoticeComp } from "@/dsfr/base/Notice";
import ControlledAccordion from "@/dsfr/base/client/Accordion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./atelier.module.scss";

const AtelierComp = () => {
  
  return (
    <div>
      <h1>Atelier</h1>

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
        <p>  </p>

        <div className={styles.derouleWrapper}>
          <div className={styles.h2title}>
            <Image src={ListIcon as StaticImageData} alt="" />
            <h2>Déroulé de l'atelier</h2>
          </div>
          <div className={styles.contentWrapper}>
            <NoticeComp title="N’oubliez pas : le déroulé proposé par l’équipe Facili-TACCT est une inspiration qui est à adapter en fonction de votre contexte, de votre objectif et de vos participants." />
            <ControlledAccordion/>
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

export default AtelierComp;
