"use client";
import HautDePageIcon from '@/assets/icons/haut_de_page_icon_white.svg';
import { Body } from "@/design-system/base/Textes";
import Image from "next/image";
import styles from '../components.module.scss';

export const RetourHautDePage = () => {
  return (
    <div className={styles.retourHautDePageWrapper}>
        <div className={styles.retourHautDePageBouton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image
            src={HautDePageIcon}
            alt="Retour en haut de page"
            width={24}
            height={24}
          />
        </div>
        <Body size='sm'>
          Haut de page
        </Body>
      </div>
  );
};
