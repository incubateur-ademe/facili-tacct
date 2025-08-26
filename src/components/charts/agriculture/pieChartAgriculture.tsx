// @ts-nocheck
'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import ZeroData from '@/assets/images/zero_data_found.png';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import styles from '@/components/themes/gestionRisques/gestionRisques.module.scss';
import useWindowDimensions from '@/hooks/windowDimensions';
import { PieChartDataSurfacesAgricoles } from '@/lib/charts/surfacesAgricoles';
import { ResponsivePie } from '@/lib/nivo/pie';
import { SurfacesAgricolesModel } from '@/lib/postgres/models';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Any } from '@/lib/utils/types';
import { animated } from '@react-spring/web';

export const PieChartAgriculture = ({ surfacesAgricoles }: { surfacesAgricoles: SurfacesAgricolesModel[] }) => {
  const graphData = PieChartDataSurfacesAgricoles(surfacesAgricoles);
  const sumAllCount = graphData.reduce((sum, item) => sum + (item.count || 0), 0);
  const windowDimensions = useWindowDimensions();

  const arcLabelsComponent = ({ datum, label, style }: Any) => {
    return (
      <animated.g style={style}>
        <animated.path
          fill="none"
          stroke={datum.color}
          strokeWidth={style.thickness}
          d={style.path}
        />
        <animated.text
          transform={style.textPosition}
          dominantBaseline="central"
          style={{
            fontSize: 12,
            fontWeight: 400
          }}
        >
          <animated.tspan>
            {(() => {
              if (label.length <= 15) {
                return label;
              }
              // Trouver le dernier espace avant ou à la position 15
              const breakPoint = label.lastIndexOf(' ', 15);
              // Si aucun espace n'est trouvé dans les 15 premiers caractères, chercher le premier espace après
              if (breakPoint === -1) {
                const nextSpace = label.indexOf(' ', 15);
                if (nextSpace === -1) {
                  // Pas d'espace trouvé, retourner le label complet
                  return label;
                }
                return (
                  <>
                    {label.slice(0, nextSpace)}
                    <tspan x="0" dy="1.2em">{label.slice(nextSpace + 1)}</tspan>
                  </>
                );
              }
              return (
                <>
                  {label.slice(0, breakPoint)}
                  <tspan x="0" dy="1.2em">{label.slice(breakPoint + 1)}</tspan>
                </>
              );
            })()}
          </animated.tspan>
          <animated.tspan style={{ fontWeight: 600 }} x="0" dy="1.2em">
            {Round(datum.data.count, 1)}{' '}ha
          </animated.tspan>
        </animated.text>
      </animated.g>
    );
  };

  return (
    <div className={styles.responsivePieContainer}>
      {sumAllCount > 0 ?
        <ResponsivePie
          data={graphData}
          margin={{ top: windowDimensions.width > 1248 ? 60 : 20, right: 10, bottom: windowDimensions.width > 1248 ? 60 : 20, left: 10 }}
          sortByValue={true}
          innerRadius={0.4}
          padAngle={0.8}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          colors={[
            '#91D1CC',
            '#095D55',
            '#05413B',
            '#D3EDEB',
          ]}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.3]]
          }}
          enableArcLabels={false}
          enableArcLinkLabels={windowDimensions.width > 1248 ? true : false}
          arcLinkLabelComponent={arcLabelsComponent}
          arcLinkLabelsSkipAngle={7}
          arcLinkLabelsDiagonalLength={32}
          arcLinkLabelsStraightLength={24}
          tooltip={({ datum: { id, value, color } }) => (
            <div className={styles.tooltipEvolutionWrapper}>
              <div className={styles.itemWrapper}>
                <div className={styles.titre}>
                  <div
                    className={styles.colorSquare}
                    style={{ background: color }}
                  />
                  <p>{id}</p>
                </div>
                <div className={styles.value}>
                  <p>{Round(value, 1)} %</p>
                </div>
              </div>
            </div>
          )}
        />
        : <DataNotFoundForGraph image={surfacesAgricoles.length === 0 ? DataNotFound : ZeroData} />
      }
    </div>
  );
};
