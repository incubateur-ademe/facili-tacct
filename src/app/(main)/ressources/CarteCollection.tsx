import Image, { StaticImageData } from "next/image";
import styles from "./ressources.module.scss";

export const CarteCollection = ({
  texte,
  image,
}: {
  texte: string;
  image: StaticImageData;
}) => {
  return (
    <div className={styles.carteCollectionWrapper} tabIndex={0}>
      <Image src={image} alt={`icone carte ${texte}`} className={styles.carteCollectionImage} />
      <p>{texte}</p>
    </div>
  );
};
