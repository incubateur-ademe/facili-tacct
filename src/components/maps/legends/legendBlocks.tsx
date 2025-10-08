import { Body } from '@/design-system/base/Textes';
import Image, { StaticImageData } from 'next/image';
import styles from './mapsComponents.module.scss';

export const LegendBlockColor: React.FC<{ color: string; value: string }> = ({
  color,
  value
}) => {
  return (
    <div className={styles.legendItem}>
      <div
        className={styles.legendColor}
        style={{ backgroundColor: color, opacity: '1' }}
      ></div>
      <Body size='sm'>{value}</Body>
    </div>
  );
};

export const LegendBlockIcons: React.FC<{
  icon: StaticImageData;
  value: string;
}> = ({ icon, value }) => {
  return (
    <div className={styles.legendItem}>
      <div className={styles.legenIcon}>
        <Image src={icon} alt="" />
      </div>
      <Body size='sm'>{value}</Body>
    </div>
  );
};
