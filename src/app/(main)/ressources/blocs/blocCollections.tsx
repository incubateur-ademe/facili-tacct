import { Body, H2 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import { StaticImageData } from "next/image";
import styles from '../ressources.module.scss';
import { SliderCollections } from "../sliderCollections";

export const BlocCollections = ({
  collectionsCartes
}: {
  collectionsCartes: {
    texte: string;
    image: StaticImageData;
    lien: string;
  }[]
}) => {
  return (
    <div className={styles.ressourcesCollectionContainer}>
      <NewContainer size="xl">
        <div className={styles.ressourcesCollectionWrapper}>
          <div className={styles.titles}>
            <H2 style={{ color: "#2B4B49", marginBottom: "0.5rem" }}>
              Explorez nos collections
            </H2>
            <Body style={{ color: "#3D3D3D" }}>Une sélection de ressources pour chaque situation</Body>
          </div>
          <SliderCollections collectionsCartes={collectionsCartes} />
        </div>
      </NewContainer>
    </div>
  )
};
