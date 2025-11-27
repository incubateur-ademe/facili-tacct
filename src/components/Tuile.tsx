"use client";

import ClockIcon from "@/assets/icons/clock_icon_black.png";
import TestImageTuile from "@/assets/images/test_tuile.png";
import Image, { StaticImageData } from "next/image";
import styles from "./Tuile.module.scss";

interface Props {
  titre: string;
  description: string;
  image?: StaticImageData;
  lien?: string;
  tags?: React.ReactNode[];
  tempsLecture?: number;
}

export const Tuile = ({
  titre,
  description,
  image = TestImageTuile,
  lien,
  tags = [],
  tempsLecture
}: Props) => {
  return (
    <div className={styles.tuile} tabIndex={0} role="article">
      <div className={styles.imageContainer}>
        <Image src={image} alt={titre} fill />
      </div>
      <div className={styles.contenu}>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className={styles.titre}>
          {titre.length > 80 ? `${titre.substring(0, 70)}...` : titre}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.footer}>
        {tempsLecture && (
          <div className={styles.tempsLecture}>
            <Image src={ClockIcon} alt="Temps de lecture" width={16} height={16} />
            <span>{tempsLecture} min</span>
          </div>
        )}
        <span className={`fr-icon-arrow-right-line ${styles.arrow}`} aria-hidden="true"></span>
      </div>
    </div>
  );
}
