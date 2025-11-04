// @ts-nocheck
'use client';

import useWindowDimensions from '@/hooks/windowDimensions';
import { IncendiesForet } from '@/lib/postgres/models';
import { CountOcc } from '@/lib/utils/reusableFunctions/occurencesCount';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { DefaultRawDatum, PieCustomLayerProps } from '@nivo/pie';
import { animated } from '@react-spring/web';
import styles from '../charts.module.scss';
import { simplePieChartTooltip } from '../ChartTooltips';
import NivoPieChart from '../NivoPieChart';

const colors: { [key: string]: string } = {
  Malveillance: '#91D1CC',
  Accidentelle: '#038278',
  'Involontaire (particulier)': '#095D55',
  'Involontaire (travaux)': '#05413B',
  Naturelle: '#D3EDEB',
  Inconnue: '#d7f8ff'
};

const PieChartFeuxForet = (props: { incendiesForet: IncendiesForet[] }) => {
  const { incendiesForet } = props;
  const windowDimensions = useWindowDimensions();
  const countTypes = CountOcc(incendiesForet, 'nature');
  countTypes['Inconnue'] = countTypes['null'] ?? 0;
  const causesInconnues = countTypes['null'];
  delete countTypes['null'];

  const graphData = Object.entries(countTypes).map(([id, value]) => ({
    id,
    count: value,
    value: value / Sum(Object.values(countTypes)) * 100
  }));

  const CenteredMetric = ({
    dataWithArc,
    centerX,
    centerY
  }: PieCustomLayerProps<DefaultRawDatum>) => {
    return (
      <>
        <text
          x={centerX}
          y={centerY - 10}
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fontSize: '36px',
            fontWeight: 700
          }}
        >
          {causesInconnues ?? '0'}
        </text>
        <text
          x={centerX}
          y={centerY + 20}
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fontSize: '12px',
            fontWeight: 400
          }}
        >
          {causesInconnues ? 'Causes inconnues' : 'Cause inconnue'}
        </text>
      </>
    );
  };

  const arcLabelsComponent = ({ datum, label, style }: ArcLinkLabelComponent<ComputedDatum<{
    id: string;
    value: number;
  }>>) => {
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
            {datum.value}{' '}
          </animated.tspan>
          <animated.tspan>
            ({((100 * datum.value) / Sum(Object.values(countTypes))).toFixed(1)}
            %)
          </animated.tspan>
        </animated.text>
      </animated.g>
    );
  };

  return (
    <div className={styles.responsivePieContainer}>
      <NivoPieChart
        graphData={graphData}
        colors={(graphData) => colors[graphData.id]}
        tooltip={({ datum }) => simplePieChartTooltip({ datum, unite: 'ha' })}
      />
      {/* <ResponsivePie
        data={graphData}
        margin={{ top: windowDimensions.width > 1248 ? 60 : 20, right: 10, bottom: windowDimensions.width > 1248 ? 60 : 20, left: 10 }}
        colors={(graphData) => colors[graphData.id]}
        isInteractive={true}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        arcLinkLabelComponent={arcLabelsComponent}
        enableArcLinkLabels={windowDimensions.width > 1248 ? true : false}
        sortByValue={false}
        layers={['arcs', 'arcLinkLabels', 'legends']} //, CenteredMetric
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]]
        }}
        arcLinkLabelsSkipAngle={15}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLinkLabelsOffset={10}
        arcLinkLabelsDiagonalLength={12}
        arcLinkLabelsStraightLength={20}
        tooltip={({ datum }) => simplePieChartTooltip({ datum, unite: 'ha' })}
      /> */}
    </div>
  );
};

export default PieChartFeuxForet;
