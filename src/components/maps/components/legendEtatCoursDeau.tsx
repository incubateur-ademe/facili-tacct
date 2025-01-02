'use client';

import './legend.css';
import styles from './mapsComponents.module.scss';

const colors: string[] = [
  '#0095C8',
  '#AFD018',
  '#FEE556',
  '#FF9935',
  '#D61E28',
  '#9D9C9C'
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
      <p>{value}</p>
    </div>
  );
};

export const LegendEtatCoursDeau = () => {
  return (
    <div className={styles.legendItemsWrapper}>
      <LegendBlock color={colors[0]} value={'Très bon état'} />
      <LegendBlock color={colors[1]} value={'Bon état'} />
      <LegendBlock color={colors[2]} value={'État moyen'} />
      <LegendBlock color={colors[3]} value={'État médiocre'} />
      <LegendBlock color={colors[4]} value={'État mauvais'} />
      <LegendBlock color={colors[5]} value={'Indéterminé/pas de données'} />
    </div>
  );
};
