"use client";

import ClockIcon from "@/assets/icons/clock_icon_white.png";
import DocIcon from '@/assets/icons/doc_icon_white.png';
import message3Icone from '@/assets/icons/message_3_icon_black.png';
import { TuileHorizontale } from '@/components/Tuile';
import { Body, H1, H2 } from '@/design-system/base/Textes';
import { NewContainer } from "@/design-system/layout";
import Image from "next/image";
import Link from "next/link";
import styles from "../ressources.module.scss";
import { CollectionsData } from './collectionsData';

type CollectionComponentProps = {
  collectionId: string;
};

export const CollectionComponent = ({ collectionId }: CollectionComponentProps) => {
  const collection = CollectionsData.find(c => c.slug === collectionId);
  return (
    <>
      <div className={styles.collectionTopBlocContainer}>
        <NewContainer size="xl" style={{ padding: "32px 0" }}>
          <div className={styles.collectionTopBlocWrapper}>
            <div className={styles.texteWrapper}>
              <Body style={{ color: "#ffffff" }}>Collection</Body>
              <H1 style={{ color: "#ffffff", margin: 0 }}>{collection?.titre}</H1>
              <div className={styles.collectionMeta}>
                <div className={styles.tempsLecture}>
                  <Image src={DocIcon} alt="Nombre de ressources" width={24} height={24} />
                  <Body size="lg" weight="bold" style={{ color: "#FFFFFF" }}>
                    {collection?.articles.length} ressources
                  </Body>
                </div>
                <div className={styles.tempsLecture}>
                  <Image src={ClockIcon} alt="Temps de lecture" width={24} height={24} />
                  <Body size="lg" weight="bold" style={{ color: "#FFFFFF" }}>
                    {collection?.articles.reduce((total, article) => total + article.tempsLecture, 0)} min
                  </Body>
                </div>
              </div>
              {collection?.texte}
            </div>
            <Image
              src={collection?.image!}
              alt=""
              width={350}
            />
          </div>
        </NewContainer>
      </div>
      <div className={styles.collectionArticlesContainer}>
        <NewContainer size="xl" style={{ padding: "32px 0" }}>
          <H2 style={{ color: "#161616", fontSize: "22px" }}>
            Notre sélection
          </H2>
          <div className={styles.separator} />
          <div className={styles.selections}>
            <div className={styles.collectionArticlesWrapper}>
              {
                collection?.articles.map((article) => (
                  <div key={article.id}>
                    {/* Tuile component */}
                    <TuileHorizontale
                      titre={article.titre}
                      image={article.image}
                      lien={article.lien}
                      tempsLecture={article.tempsLecture}
                    />
                  </div>
                ))
              }
              <div className={styles.question}>
                <div className={styles.titre}>
                  <Image src={message3Icone} alt="" width={24} />
                  <H2 style={{ fontSize: "20px", lineHeight: "28px" }}>
                    Une question, une suggestion ?
                  </H2>
                </div>
                <Body>
                  Notre produit est encore en construction : vos retours sont précieux !
                  N'hésitez pas à nous écrire pour nous en faire part.
                </Body>
                <Link href="https://tally.so/r/mJGELz" target="_blank" rel="noopener noreferrer" className={styles.contact}>
                  Nous contacter
                  <span className={`fr-icon-arrow-right-line ${styles.arrow}`} aria-hidden="true"></span>
                </Link>

              </div>
            </div>
            <div className={styles.blocDroit}>
              <div className={styles.seLancer}>
                Et si vous vous lanciez ?
              </div>
            </div>
          </div>
        </NewContainer>
      </div>
    </>
  );
}
