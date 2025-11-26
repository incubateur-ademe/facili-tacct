import { Body, H2 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import styles from '../ressources.module.scss';

export const BlocAutresOutils = () => {
  return (
    <div className={styles.ressourcesAutresOutilsContainer}>
      <NewContainer size="xl">
        <div className={styles.ressourcesAutresOutilsWrapper}>
          <div className={styles.titles}>
            <H2 style={{ color: "#038278", marginBottom: "0.5rem" }}>
              Découvrez nos autres outils
            </H2>
            <Body style={{ color: "#3D3D3D" }}>
              Des réponses à vos questions, un appui méthodologique et une communauté d’entraide,
              pour accompagner votre démarche d’adaptation.
            </Body>
          </div>
        </div>
      </NewContainer>
    </div>
  )
};
