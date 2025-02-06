'use client';

import qualiteInconnu from '@/assets/icons/marker_icon_blue.svg';
import qualiteBon from '@/assets/icons/qualite_baignade_bon.svg';
import qualiteExcellent from '@/assets/icons/qualite_baignade_excellent.svg';
import qualiteInsuffisant from '@/assets/icons/qualite_baignade_insuffisant.svg';
import qualiteSuffisant from '@/assets/icons/qualite_baignade_suffisant.svg';
import Image, { StaticImageData } from 'next/image';
import './legend.css';
import styles from './mapsComponents.module.scss';

const icons = [
  qualiteExcellent,
  qualiteBon,
  qualiteSuffisant,
  qualiteInsuffisant,
  qualiteInconnu
];

const LegendBlock: React.FC<{ icon: StaticImageData; value: string }> = ({
  icon,
  value
}) => {
  return (
    <div className={styles.legendItem}>
      <div className={styles.legenIcon}>
        <Image src={icon} alt="" />
      </div>
      <p>{value}</p>
    </div>
  );
};

export const LegendQualiteSitesBaignade = () => {
  return (
    <div className={styles.legendItemsWrapper}>
      <LegendBlock icon={icons[0]} value={'Excellent'} />
      <LegendBlock icon={icons[1]} value={'Bon'} />
      <LegendBlock icon={icons[2]} value={'Suffisant'} />
      <LegendBlock icon={icons[3]} value={'Insuffisant'} />
      <LegendBlock icon={icons[4]} value={'Pas de données dispo'} />
    </div>
  );
};
