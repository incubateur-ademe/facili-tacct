// @ts-nocheck
'use client';

import { ArreteCatNat } from '@/lib/postgres/models';
import { CountOcc } from '@/lib/utils/reusableFunctions/occurencesCount';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { Any } from '@/lib/utils/types';
import { DefaultRawDatum, PieCustomLayerProps, ResponsivePie } from '@nivo/pie';
import { animated } from '@react-spring/web';

const colors: { [key: string]: string } = {
  Inondations: '#009ADC',
  Sécheresse: '#FFCF5E',
  'Mouvements de terrain': '#F66E19',
  'Retrait-gonflement des argiles': '#BB43BD',
  'Cyclones / Tempêtes': '#00C2CC',
  'Grêle / neige': '#00C190',
  Avalanche: '#7A49BE'
};

type ArreteCatNatEnriched = ArreteCatNat & {
  annee_arrete: number;
};

const PieChartCatnat = (props: { gestionRisques: ArreteCatNatEnriched[] }) => {
  const { gestionRisques } = props;
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
          {total}
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
          <animated.tspan style={{ fontWeight: 600 }}>
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
    <div
      style={{ height: '400px', minWidth: '450px', backgroundColor: 'white' }}
    >
      <ResponsivePie
        data={graphData}
        margin={{ top: 60, right: 80, bottom: 60, left: 80 }}
        colors={(graphData) => colors[graphData.id]}
        isInteractive={true}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        arcLinkLabelComponent={arcLabelsComponent}
        arcLinkLabel={({ id }) => `${id}`}
        arcLinkLabelsSkipAngle={10}
        sortByValue={false}
        layers={[
          'arcs',
          'arcLabels',
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
        arcLinkLabelsDiagonalLength={20}
        arcLinkLabelsStraightLength={5}
        // tooltip={({ datum: { id, value } }: PieTooltipProps<DefaultRawDatum>) => (
        //   <div
        //     style={{
        //       padding: '12px',
        //       color: 'white',
        //       background: 'rgba(0, 0, 0, 0.7)',
        //       borderRadius: '3px'
        //     }}
        //   >
        //     <strong>{id}</strong>
        //     <br />
        //     {value} arrêté(s)
        //   </div>
        // )}
      />
    </div>
  );
};

export default PieChartCatnat;
