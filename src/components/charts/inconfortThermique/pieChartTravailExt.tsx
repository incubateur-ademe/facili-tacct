// @ts-nocheck
'use client';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import ZeroData from '@/assets/images/zero_data_found.png';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import couleurs from '@/design-system/couleurs';
import { travailExtDto } from '@/lib/dto';
import { ResponsivePie } from '@/lib/nivo/pie';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { animated } from '@react-spring/web';
import { simplePieChartTooltip } from '../ChartTooltips';
import styles from './inconfortThermiqueCharts.module.scss';

type Props = {
  graphData: Array<{
    id: string;
    label: string;
    value: number | undefined;
    count: number;
  }>;
  travailExterieurTerritoire: travailExtDto[];
};

export const colors: { [key: string]: string } = {
  Agriculture: couleurs.graphiques.jaune[4],
  Industries: couleurs.graphiques.orange[3],
  Construction: couleurs.graphiques.violet[2],
  "Commerces et transports": couleurs.graphiques.vert[1],
  Administrations: couleurs.graphiques.bleu[5]
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
          : {Round(datum.data.count, 0)}{' '}
        </animated.tspan>
      </animated.text>
    </animated.g>
  );
};


export const PieChartTravailExt = ({ graphData, travailExterieurTerritoire }: Props) => {
  const sumAllCount = graphData.reduce((sum, item) => sum + (item.count || 0), 0);
  return (
    <div className={styles.responsivePieContainer}>
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
          tooltip={({ datum }) => simplePieChartTooltip({ datum, unite: '%' })}
        />
        : (
          <div className='p-10 flex flex-row justify-center'>
            <DataNotFoundForGraph image={travailExterieurTerritoire.length === 0 ? DataNotFound : ZeroData} />
          </div>
        )
      }
    </div>
  );
};
