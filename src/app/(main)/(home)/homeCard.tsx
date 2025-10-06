import { H4 } from '@/design-system/base/Textes';
import Image, { StaticImageData } from 'next/image';
import styles from '../main.module.scss';

type HomeCardProps = {
  icone: StaticImageData;
  titre: string;
  description: string;
}

export const HomeCard = ({
  icone,
  titre,
  description
}: HomeCardProps) => {
  return (
    <div className={styles.homeCard}>
      <div className={styles.homeCardIcon}>
        <Image
          src={icone}
          alt="image-cartographie"
          className={styles.homeCardImage}
        />
      </div>
      <H4 style={{ color: "var(--principales-vert)", margin: "0.5rem 0 1rem", fontSize: "1rem" }}>{titre}</H4>
      <p>{description}</p>
    </div>
  )
}
