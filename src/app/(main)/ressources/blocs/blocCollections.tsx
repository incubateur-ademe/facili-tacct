import { Body, H2 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import styles from '../ressources.module.scss';
import { SliderCollections } from "../sliderCollections";

export const BlocCollections = () => {
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
          <SliderCollections />
        </div>
      </NewContainer>
    </div>
  )
};
