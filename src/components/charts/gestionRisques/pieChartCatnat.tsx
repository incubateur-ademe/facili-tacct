// @ts-nocheck
'use client';

import { catnatPieChartLegend } from '@/components/maps/legends/datavizLegends';
import useWindowDimensions from '@/hooks/windowDimensions';
import { ArreteCatNat } from '@/lib/postgres/models';
import { CountOcc } from '@/lib/utils/reusableFunctions/occurencesCount';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { Any } from '@/lib/utils/types';
import { DefaultRawDatum, PieCustomLayerProps, ResponsivePie } from '@nivo/pie';
import { animated } from '@react-spring/web';
import styles from '../charts.module.scss';
import { simplePieChartTooltip } from '../ChartTooltips';

type ArreteCatNatEnriched = ArreteCatNat & {
  annee_arrete: number;
};

const PieChartCatnat = (props: { gestionRisques: ArreteCatNatEnriched[] }) => {
  const { gestionRisques } = props;
  const windowDimensions = useWindowDimensions();
  const countTypes = CountOcc(gestionRisques, 'lib_risque_jo');
  const mapGraphData = gestionRisques?.map((el) => {
    return {
      id: el.lib_risque_jo ?? '',
      label: el.lib_risque_jo ?? '',
      value: countTypes[el.lib_risque_jo!]
    };
  });
  const graphData = mapGraphData.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.label === value.label)
  );

  const CenteredMetric = ({
    dataWithArc,
    centerX,
    centerY
  }: PieCustomLayerProps<DefaultRawDatum>) => {
    let total = 0;
    dataWithArc.forEach((datum: { value: number }) => {
      total += datum.value;
    });
    const mainFontSize = windowDimensions?.width > 1248 ? 32 : windowDimensions?.width > 1024 ? 26 : 18;
    const subFontSize = Math.max(10, Math.round(mainFontSize / 3));
    const mainYOffset = -Math.round(mainFontSize / 2);
    const subYOffset = Math.round(subFontSize / 1.2);

    return (
      <>
        <text
          x={centerX}
          y={centerY + mainYOffset}
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fontSize: `${mainFontSize}px`,
            fontWeight: 700,
          }}
        >
          {total}
        </text>
        <text
          x={centerX}
          y={centerY + subYOffset}
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fontSize: `${subFontSize}px`,
            fontWeight: 400
          }}
        >
          arrêté(s) CatNat
        </text>
      </>
    );
  };

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
          <animated.tspan>{label} : </animated.tspan>
          <animated.tspan style={{ fontWeight: 600 }} x="0" dy="1.2em">
            {datum.value}{' '}
          </animated.tspan>
          <animated.tspan>
            ({Round((100 * datum.value) / Sum(Object.values(countTypes)), 1)} %)
          </animated.tspan>
        </animated.text>
      </animated.g>
    );
  };

  return (
    <div className={styles.responsivePieContainer}>
      <ResponsivePie
        data={graphData}
        margin={{ top: windowDimensions.width > 1248 ? 60 : 20, right: 10, bottom: windowDimensions.width > 1248 ? 60 : 20, left: 10 }}
        colors={(graphData) => catnatPieChartLegend.find(el => el.value === graphData.id)?.color}
        isInteractive={true}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        enableArcLinkLabels={windowDimensions.width > 1248 ? true : false}
        arcLinkLabelComponent={arcLabelsComponent}
        arcLinkLabel={({ id }) => `${id}`}
        arcLinkLabelsSkipAngle={10}
        sortByValue={false}
        layers={[
          'arcs',
          'arcLinkLabels',
          'legends',
          CenteredMetric
        ]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]]
        }}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLinkLabelsOffset={15}
        arcLinkLabelsDiagonalLength={12}
        arcLinkLabelsStraightLength={5}
        tooltip={({ datum }) => simplePieChartTooltip({ datum, unite: 'arrêté(s)' })}
      />
    </div>
  )
}

export default PieChartCatnat;
