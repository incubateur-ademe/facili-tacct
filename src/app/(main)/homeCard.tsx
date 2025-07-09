import Image, { StaticImageData } from 'next/image';
import styles from './../root.module.scss';

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
      <Image
        src={icone}
        alt="image-cartographie"
        className={styles.homeCardImage}
      />
      <h4>{titre}</h4>
      <p>{description}</p>
    </div>
  )
}
