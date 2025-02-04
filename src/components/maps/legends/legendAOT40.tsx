'use client';

import './legend.css';
import styles from './mapsComponents.module.scss';

const colors: string[] = [
  '#7A49BE',
  '#A67FE1',
  '#DB7BDD',
  '#FF9699',
  '#00C2CC',
  '#5EEDF3'
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

export const LegendAOT40 = () => {
  return (
    <div className={styles.legendItemsWrapper}>
      <LegendBlock color={colors[0]} value={'> 36000'} />
      <LegendBlock color={colors[1]} value={'36000 - 27000'} />
      <LegendBlock color={colors[2]} value={'27000 - 18000'} />
      <LegendBlock color={colors[3]} value={'18000 - 12000'} />
      <LegendBlock color={colors[4]} value={'12000 - 6000'} />
      <LegendBlock color={colors[5]} value={'< 6000'} />
    </div>
  );
};
