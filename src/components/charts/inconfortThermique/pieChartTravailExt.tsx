// @ts-nocheck
'use client';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import ZeroData from '@/assets/images/zero_data_found.png';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { travailExtDto } from '@/lib/dto';
import { ResponsivePie } from '@/lib/nivo/pie';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { animated } from '@react-spring/web';
import styles from './inconfortThermiqueCharts.module.scss';

type Props = {
  graphData: Array<{
    color: string;
    id: string;
    label: string;
    value: number | undefined;
    count: number;
  }>;
  travailExterieurTerritoire: travailExtDto[];
};

export const colors: { [key: string]: string } = {
  Agriculture: 'rgba(44, 170, 166, 0.7)',
  Industries: '#E4FFE3',
  Construction: 'rgba(242, 133, 2, 0.9)',
  "Commerces et transports": '#FFF6E3',
  Administrations: '#E3EDFF'
};

const arcLabelsComponent = ({ datum, label, style, id }: Any) => {
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
        <animated.tspan>{(() => {
          if (datum.label.length <= 15) {
            return datum.label;
          }
          // Trouver le dernier espace avant ou à la position 15
          const breakPoint = datum.label.lastIndexOf(' ', 15);
          // Si aucun espace n'est trouvé dans les 15 premiers caractères, chercher le premier espace après
          if (breakPoint === -1) {
            const nextSpace = datum.label.indexOf(' ', 15);
            if (nextSpace === -1) {
              // Pas d'espace trouvé, retourner le datum.label complet
              return datum.label;
            }
            return (
              <>
                {datum.label.slice(0, nextSpace)}{" "}
                <tspan x="0" dy="1.2em">{datum.label.slice(nextSpace + 1)}</tspan>
              </>
            );
          }
          return (
            <>
              {datum.label.slice(0, breakPoint)}
              <tspan x="0" dy="1.2em">{datum.label.slice(breakPoint + 1)}</tspan>
            </>
          );
        })()}</animated.tspan>
        <animated.tspan style={{ fontWeight: 600 }}>
          {" "}:{" "}{Round(datum.data.count, 0)}{' '}
        </animated.tspan>
      </animated.text>
    </animated.g>
  );
};


export const PieChartTravailExt = ({ graphData, travailExterieurTerritoire }: Props) => {
  const sumAllCount = graphData.reduce((sum, item) => sum + (item.count || 0), 0);
  return (
    <div
      style={{
        height: '430px',
        minWidth: '450px',
        backgroundColor: 'white'
      }}
    >
      {sumAllCount > 0 ?
        <ResponsivePie
          data={graphData}
          margin={{ top: 60, right: 70, bottom: 60, left: 70 }}
          sortByValue={true}
          isInteractive={true}
          innerRadius={0.5}
          padAngle={1}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          colors={(graphData) => colors[graphData.label]}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.3]]
          }}
          arcLinkLabelComponent={arcLabelsComponent}
          arcLinkLabelsSkipAngle={20}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.2]]
          }}
          layers={['arcs', 'arcLinkLabels']}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLinkLabelsOffset={15}
          arcLinkLabelsDiagonalLength={20}
          arcLinkLabelsStraightLength={5}
          tooltip={({ datum: { id, value, color, data, label } }) => (
            <div className={styles.tooltipEvolutionWrapper}>
              <div className={styles.itemWrapper}>
                <div className={styles.titre} style={{ gap: "0" }}>
                  <div
                    className={styles.colorSquare}
                    style={{ background: color }}
                  />
                  <p>{id} : </p>
                </div>
                <p><b>{Round(data.count, 0)} personnes </b></p>
                <p>({Round(value, 1)} %)</p>
              </div>
            </div>
          )}
        />
        : <DataNotFoundForGraph image={travailExterieurTerritoire.length === 0 ? DataNotFound : ZeroData} />
      }
    </div>
  );
};
