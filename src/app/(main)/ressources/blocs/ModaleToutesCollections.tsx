"use client";

import { createModal } from "@codegouvfr/react-dsfr/Modal";
import { TuileHorizontaleCollection } from "@/components/Tuile";
import { StaticImageData } from "next/image";
import { useStyles } from 'tss-react/dsfr';
import styles from "./modaleToutesCollections.module.scss";
import { CollectionsData } from "../[collectionId]/collectionsData";

export const modaleToutesCollections = createModal({
  id: "toutes-collections-modal",
  isOpenedByDefault: false
});

export const ModaleToutesCollections = ({
  collectionsCartes
}: {
  collectionsCartes: {
    texte: string;
    image: StaticImageData;
    lien: string;
  }[]
}) => {
  const { css, cx } = useStyles();

  return (
    <modaleToutesCollections.Component
      title="Toutes les collections"
      className={cx(
        styles.modale,
        css({
          overflowX: 'hidden',
          overflowY: 'auto',
        })
      )}
      size="large"
    >
      <div className={styles.contenu}>
        {collectionsCartes.map((carte, index) => {
          const collection = CollectionsData.find(c => c.titre === carte.texte);
          const tempsLecture = collection?.articles.reduce((total, article) => total + article.tempsLecture, 0) || 0;
          return (
            <TuileHorizontaleCollection
              key={index}
              titre={carte.texte}
              image={carte.image}
              lien={carte.lien}
              nombreArticles={collection?.articles.length || 0}
              tempsLecture={collection?.titre === "Démarrer le diagnostic de vulnérabilité" ? 47 : tempsLecture}
            />
          )
        })}
      </div>
    </modaleToutesCollections.Component>
  );
};
