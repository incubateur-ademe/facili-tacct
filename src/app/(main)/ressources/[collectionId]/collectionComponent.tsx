"use client";

import ClockIcon from "@/assets/icons/clock_icon_white.png";
import DocIcon from '@/assets/icons/doc_icon_white.png';
import FlagIcon from '@/assets/icons/flag_icon_orange.png';
import message3Icone from '@/assets/icons/message_3_icon_black.png';
import ShareIcon from '@/assets/icons/share_icon_white.svg';
import { TuileHorizontale } from '@/components/Tuile';
import { BoutonPrimaireClassic } from "@/design-system/base/Boutons";
import { Body, H1, H2 } from '@/design-system/base/Textes';
import { NewContainer } from "@/design-system/layout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../ressources.module.scss";
import { CollectionsData } from './collectionsData';

type CollectionComponentProps = {
  collectionId: string;
};

export const CollectionComponent = ({ collectionId }: CollectionComponentProps) => {
  const collection = CollectionsData.find(c => c.slug === collectionId);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    const url = new URL(window.location.href);
    navigator.clipboard.writeText(url.toString());
    setCopied(true);
    e.currentTarget.blur();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setTimeout(() => setCopied(false), 100); // allow fade out
    }, 700);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
          <div className="flex flex-row justify-between items-center">
            <H2 style={{ color: "#161616", fontSize: "22px", marginBottom: 8 }}>
              Notre sélection
            </H2>
            <BoutonPrimaireClassic
              onClick={handleCopy}
              icone={copied ? null : ShareIcon}
              size='sm'
              text={copied ? 'Lien copié' : 'Partager la collection'}
              disabled={copied}
            />
          </div>
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
                  Notre produit est encore en construction : vos retours sont précieux !
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
                <div className={styles.titre}>
                  <Image src={FlagIcon} alt="" width={24} />
                  <Body weight="bold" style={{ fontSize: "20px", lineHeight: "28px", margin: 0, color: "#7E5202" }}>
                    Et si vous vous lanciez ?
                  </Body>
                </div>
                <Body style={{ color: "#7E5202", padding: "1rem 0 1rem 2rem" }}>
                  Si ces ressources vous ont été utiles, vous pouvez dès maintenant commencer votre diagnostic de vulnérabilité !
                </Body>
                <Link href="/recherche-territoire" className={styles.bouton}>
                  Explorer les données
                  <span className={`fr-icon-arrow-right-line ${styles.arrow}`} aria-hidden="true"></span>
                </Link>
              </div>
            </div>
          </div>
        </NewContainer>
      </div>
    </>
  );
}
