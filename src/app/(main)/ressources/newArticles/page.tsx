import { NewContainer } from "@/design-system/layout";
import styles from './articles.module.scss';

export const PageArticleCustom = () => {
  return (
    <NewContainer size="xl">
      <div className={styles.articleTopBlocContainer}>
        <div className={styles.articleTopBlocMeta}>
          <h1>Titre de l'article</h1>

        </div>
        <div className={styles.articleTopBlocImage}>

        </div>


      </div>
      <div className={styles.articleContent}>
        <div className={styles.sommaire}>

        </div>
        <div className={styles.article}>

        </div>


      </div>

    </NewContainer>
  );
}
