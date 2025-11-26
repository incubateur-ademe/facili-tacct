import { CarteCollection } from "@/design-system/base/CarteCollection";
import { ressourcesCartes } from "@/lib/ressources/cartes";
import styles from "./ressources.module.scss";

export const SliderCollections = () => {
  return (
    <div className={styles.sliderContainer}>
      {
        ressourcesCartes.map((carte, index) => (
          <CarteCollection
            key={index}
            texte={carte.texte}
            image={carte.image}
          />
        ))
      }
    </div>
  );
}
