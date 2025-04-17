'use client';

import { CommunesIndicateursDto } from '@/lib/dto';
import styles from '../../themes/gestionRisques/gestionRisques.module.scss';
import './legend.css';

interface Props {
  data: string;
  typeRisqueValue: string;
  carteCommunes: CommunesIndicateursDto[];
}

export const colorsCatnat: { [key: string]: string[] } = {
  'Tous types': ['#FFECEE', '#FF9699', '#E8323B', '#B5000E', '#680000'],
  Inondations: ['#D8EFFA', '#6EC7F7', '#009ADC', '#0072B5', '#003F70'],
  Sécheresse: ['#FFFBE8', '#FEE29C', '#FFCF5E', '#D19800', '#533B00'],
  'Mouvements de terrain': [
    '#FFEEE5',
    '#FFAF84',
    '#F66E19',
    '#B64800',
    '#5E2000'
  ],
  'Retrait-gonflement des argiles': [
    '#F8E0F8',
    '#DB7BDD',
    '#BB43BD',
    '#89078E',
    '#560057'
  ],
  'Cyclones / Tempêtes': [
    '#DAFDFF',
    '#5EEDF3',
    '#00C2CC',
    '#00949D',
    '#005055'
  ],
  'Grêle / neige': ['#EBFDF6', '#6AEEC6', '#00C190', '#009770', '#004F3D'],
  Avalanche: ['#E9E2FA', '#A67FE1', '#7A49BE', '#5524A0', '#270757']
};

const getIntegersBetweenFloats = (minValue: number, maxValue: number) => {
  var list = [];
  for (var i = minValue; i <= maxValue + 1; i++) {
    const rounded = Math.round(i);
    if (minValue <= rounded) {
      if (maxValue > rounded) {
        list.push(rounded);
      }
    } else {
    }
  }
  return list;
};

const LegendBlock: React.FC<{ color: string; value: number }> = ({
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

export const LegendCatnat = (props: Props) => {
  const { typeRisqueValue, carteCommunes } = props;

  const minMaxValue = () => {
    if (typeRisqueValue === 'Tous types') {
      const maxValue = Math.max(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.sumCatnat ? el.properties.catnat?.sumCatnat : 0
        )
      );
      const minValue = Math.min(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.sumCatnat ? el.properties.catnat?.sumCatnat : 0
        )
      );
      return [minValue, maxValue];
    } else if (typeRisqueValue === 'Sécheresse') {
      const maxValue = Math.max(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.['Sécheresse']
            ? el.properties.catnat?.['Sécheresse']
            : 0
        )
      );
      const minValue = Math.min(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.['Sécheresse']
            ? el.properties.catnat?.['Sécheresse']
            : 0
        )
      );
      return [minValue, maxValue];
    } else if (typeRisqueValue === 'Cyclones / Tempêtes') {
      const maxValue = Math.max(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.['Cyclones / Tempêtes']
            ? el.properties.catnat?.['Cyclones / Tempêtes']
            : 0
        )
      );
      const minValue = Math.min(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.['Cyclones / Tempêtes']
            ? el.properties.catnat?.['Cyclones / Tempêtes']
            : 0
        )
      );
      return [minValue, maxValue];
    } else if (typeRisqueValue === 'Retrait-gonflement des argiles') {
      const maxValue = Math.max(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.['Retrait-gonflement des argiles']
            ? el.properties.catnat?.['Retrait-gonflement des argiles']
            : 0
        )
      );
      const minValue = Math.min(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.['Retrait-gonflement des argiles']
            ? el.properties.catnat?.['Retrait-gonflement des argiles']
            : 0
        )
      );
      return [minValue, maxValue];
    } else if (typeRisqueValue === 'Mouvements de terrain') {
      const maxValue = Math.max(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.['Mouvements de terrain']
            ? el.properties.catnat?.['Mouvements de terrain']
            : 0
        )
      );
      const minValue = Math.min(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.['Mouvements de terrain']
            ? el.properties.catnat?.['Mouvements de terrain']
            : 0
        )
      );
      return [minValue, maxValue];
    } else if (typeRisqueValue === 'Inondations') {
      const maxValue = Math.max(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.Inondations
            ? el.properties.catnat?.Inondations
            : 0
        )
      );
      const minValue = Math.min(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.Inondations
            ? el.properties.catnat?.Inondations
            : 0
        )
      );
      return [minValue, maxValue];
    } else if (typeRisqueValue === 'Grêle / neige') {
      const maxValue = Math.max(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.['Grêle / neige']
            ? el.properties.catnat?.['Grêle / neige']
            : 0
        )
      );
      const minValue = Math.min(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.['Grêle / neige']
            ? el.properties.catnat?.['Grêle / neige']
            : 0
        )
      );
      return [minValue, maxValue];
    } else if (typeRisqueValue === 'Avalanche') {
      const maxValue = Math.max(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.Avalanche ? el.properties.catnat?.Avalanche : 0
        )
      );
      const minValue = Math.min(
        ...carteCommunes.map((el) =>
          el.properties.catnat?.Avalanche ? el.properties.catnat?.Avalanche : 0
        )
      );
      return [minValue, maxValue];
    } else {
      return [0, 0];
    }
  };
  const minMax = minMaxValue();
  const step0 = getIntegersBetweenFloats(0.1, (1 / 5) * minMax[1]);
  const step1 = getIntegersBetweenFloats(
    (1 / 5) * minMax[1],
    (2 / 5) * minMax[1]
  );
  const step2 = getIntegersBetweenFloats(
    (2 / 5) * minMax[1],
    (3 / 5) * minMax[1]
  );
  const step3 = getIntegersBetweenFloats(
    (3 / 5) * minMax[1],
    (4 / 5) * minMax[1]
  );
  const step4 = getIntegersBetweenFloats(
    (4 / 5) * minMax[1],
    (5 / 5) * minMax[1]
  );

  return (
    <div className={styles.legendItemsWrapper}>
      {minMax[1] > 5 ? (
        colorsCatnat[typeRisqueValue].map((color, index) => {
          return (
            <div className={styles.legendItem} key={index}>
              <div
                className={styles.legendColor}
                style={{ backgroundColor: color, opacity: '1' }}
              ></div>
              {index === 0 ? (
                step0.at(-1) === 1 ? (
                  <p>1</p>
                ) : (
                  <p>&#8804;{step0.at(-1)}</p>
                )
              ) : index === 1 ? (
                step1.at(0) === step1.at(-1) ? (
                  <p>{step1.at(0)}</p>
                ) : (
                  <p>
                    {step1.at(0)}-{step1.at(-1)}
                  </p>
                )
              ) : index === 2 ? (
                step2.at(0) === step2.at(-1) ? (
                  <p>{step2.at(0)}</p>
                ) : (
                  <p>
                    {step2.at(0)}-{step2.at(-1)}
                  </p>
                )
              ) : index === 3 ? (
                step3.at(0) === step3.at(-1) ? (
                  <p>{step3.at(0)}</p>
                ) : (
                  <p>
                    {step3.at(0)}-{step3.at(-1)}
                  </p>
                )
              ) : (
                <p>&#x2265;{step4.at(0)}</p>
              )}
            </div>
          );
        })
      ) : minMax[1] === 1 ? (
        <LegendBlock color={colorsCatnat[typeRisqueValue][2]} value={minMax[1]} />
      ) : minMax[1] === 2 ? (
        <>
          <LegendBlock color={colorsCatnat[typeRisqueValue][1]} value={1} />
          <LegendBlock color={colorsCatnat[typeRisqueValue][3]} value={2} />
        </>
      ) : minMax[1] === 3 ? (
        <>
          <LegendBlock color={colorsCatnat[typeRisqueValue][0]} value={1} />
          <LegendBlock color={colorsCatnat[typeRisqueValue][2]} value={2} />
          <LegendBlock color={colorsCatnat[typeRisqueValue][4]} value={3} />
        </>
      ) : minMax[1] === 4 ? (
        <>
          <LegendBlock color={colorsCatnat[typeRisqueValue][0]} value={1} />
          <LegendBlock color={colorsCatnat[typeRisqueValue][2]} value={2} />
          <LegendBlock color={colorsCatnat[typeRisqueValue][3]} value={3} />
          <LegendBlock color={colorsCatnat[typeRisqueValue][4]} value={4} />
        </>
      ) : (
        <>
          <LegendBlock color={colorsCatnat[typeRisqueValue][0]} value={1} />
          <LegendBlock color={colorsCatnat[typeRisqueValue][1]} value={2} />
          <LegendBlock color={colorsCatnat[typeRisqueValue][2]} value={3} />
          <LegendBlock color={colorsCatnat[typeRisqueValue][3]} value={4} />
          <LegendBlock color={colorsCatnat[typeRisqueValue][4]} value={5} />
        </>
      )}
    </div>
  );
};
