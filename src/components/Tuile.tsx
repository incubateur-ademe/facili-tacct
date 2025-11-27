"use client";

import ClockIcon from "@/assets/icons/clock_icon_black.png";
import LienExterneIcon from "@/assets/icons/fr-icon-external-link-line.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./Tuile.module.scss";

interface Props {
  titre: string;
  description?: string;
  image: StaticImageData;
  lien?: string;
  lienExterne?: boolean;
  tags?: React.ReactNode[];
  tempsLecture?: number;
}

export const TuileVerticale = ({
  titre,
  description,
  image,
  lien,
  lienExterne,
  tags = [],
  tempsLecture
}: Props) => {
  const content = (
    <div className={styles.tuile} tabIndex={lien ? -1 : 0} role="article">
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
        {
          lien && (
            <div className={styles.lien}>
              {
                lienExterne ? <Image src={LienExterneIcon} alt="" width={24} height={24} /> :
                  <span className={`fr-icon-arrow-right-line ${styles.arrow}`} aria-hidden="true"></span>
              }
            </div>
          )
        }
      </div>
    </div>
  );

  if (lien) {
    return (
      <Link
        href={lien}
        target={lienExterne ? "_blank" : "_self"}
        rel={lienExterne ? "noopener noreferrer" : undefined}
        className={styles.tuileLink}
      >
        {content}
      </Link>
    );
  }

  return content;
}

export const TuileHorizontale = ({
  titre,
  image,
  lien,
  tags = [],
  tempsLecture
}: Props) => {
  return (
    <div className={styles.tuileHorizontale} tabIndex={0} role="article">
      <div className={styles.imageContainer}>
        <Image src={image} alt={titre} fill />
      </div>

      <div className={styles.contenu}>
        <div className={styles.titre}>
          {titre}
        </div>

        <div className={styles.footer}>
          <div className={styles.leftSection}>
            {tags.length > 0 && (
              <div className={styles.tags}>
                {tags.map((tag, index) => (
                  <span key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {tempsLecture && (
              <div className={styles.tempsLecture}>
                <Image src={ClockIcon} alt="Temps de lecture" width={16} height={16} />
                <span>{tempsLecture} min</span>
              </div>
            )}
          </div>

          <span className={`fr-icon-arrow-right-line ${styles.arrow}`} aria-hidden="true"></span>
        </div>
      </div>
    </div>
  );
}
