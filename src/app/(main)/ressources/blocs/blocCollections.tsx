import { H2 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import styles from '../ressources.module.scss';

export const BlocCollections = () => {
  return (
    <div className={styles.ressourcesCollectionContainer}>
      <NewContainer size="xl">
        <div className={styles.ressourcesCollectionWrapper}>
          <div className={styles.titles}>
            <H2 style={{ color: "#2B4B49" }}>
              Explorez nos collections
            </H2>
          </div>
        </div>
      </NewContainer>
    </div>
  )
};
