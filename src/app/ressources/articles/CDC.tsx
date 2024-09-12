import BookIcon from "@/assets/icons/book_icon_black.svg";
import ForwardArrow from "@/assets/icons/keyboard_arrow_next_icon_black.svg";
import LinkIcon from "@/assets/icons/link_icon_blue.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./article.module.scss";

const CDC = () => {
  
  return (
    <div>
      <h1>Article CdC sur la facilitation</h1>
        
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

export default CDC;
