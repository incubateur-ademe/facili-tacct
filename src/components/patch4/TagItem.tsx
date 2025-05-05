import { TagPatch4 } from '@/components/patch4/Tag';
import Image from 'next/image';
import styles from '../components.module.scss';

export const TagItem = ({
  icon,
  indice,
  tag
}: {
  icon: string;
  indice: string;
  tag: string;
}) => {
  return (
    <div className={styles.indiceItem}>
      <div className={styles.indiceLeft}>
        <Image src={icon} alt="" />
        <p>{indice}</p>
      </div>
      <TagPatch4>{tag}</TagPatch4>
    </div>
  );
};
