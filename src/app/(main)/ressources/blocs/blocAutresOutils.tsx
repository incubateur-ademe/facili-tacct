import { CarteHoverLink } from "@/components/Cartes";
import { H2 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import { autresOutilsCartes } from "@/lib/ressources/cartes";
import styles from '../ressources.module.scss';

export const BlocAutresOutils = () => {
  return (
    <div className={styles.ressourcesAutresOutilsContainer}>
      <NewContainer size="xl" style={{ padding: "40px 0" }}>
        <div className={styles.ressourcesAutresOutilsWrapper}>
          <div className={styles.titles}>
            <H2 style={{ color: "#038278", marginBottom: "0.5rem" }}>
              Découvrez nos autres outils
            </H2>
            <p className={styles.subtitle}>
              Des réponses à vos questions, un appui méthodologique et une communauté d'entraide,
              pour accompagner votre démarche d'adaptation.
            </p>
          </div>
          <div className={styles.cartesWrapper}>
            {
              autresOutilsCartes.map((carte, index) => (
                <CarteHoverLink
                  key={index}
                  titre={carte.titre}
                  description={carte.description}
                  icone={carte.icone}
                  lien={carte.lien}
                />
              ))
            }
          </div>
        </div>
      </NewContainer>
    </div>
  )
};
