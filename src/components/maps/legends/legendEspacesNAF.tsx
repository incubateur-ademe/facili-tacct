'use client';

import styles from '../../themes/gestionRisques/gestionRisques.module.scss';
import './legend.css';

const colors: string[] = [
  '#D8EFFA',
  '#FFECEE',
  '#FF9699',
  '#E8323B',
  '#B5000E',
  '#680000'
];

const LegendBlock: React.FC<{ color: string; value: string }> = ({
  color,
  value
}) => {
  return (
    <div className={styles.legendItem}>
      <div
        className={styles.legendColor}
        style={{ backgroundColor: color, opacity: '1' }}
      ></div>
      <p>{value} ha</p>
    </div>
  );
};

export const LegendEspacesNAF = () => {
  return (
    <div className={styles.legendItemsWrapper}>
      <LegendBlock color={colors[0]} value={'0-1'} />
      <LegendBlock color={colors[1]} value={'1-2'} />
      <LegendBlock color={colors[2]} value={'2-5'} />
      <LegendBlock color={colors[3]} value={'5-10'} />
      <LegendBlock color={colors[4]} value={'10-20'} />
      <LegendBlock color={colors[5]} value={'> 20'} />
    </div>
  );
};
