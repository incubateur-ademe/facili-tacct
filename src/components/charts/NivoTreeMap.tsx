import { SurfacesProtegeesDto } from '@/lib/dto';
import { Any } from '@/lib/utils/types';
import { ResponsiveTreeMap } from '@nivo/treemap';
import styles from '../themes/biodiversite/biodiversite.module.scss';
import './nivo.scss';

type GraphData = {
  name: string;
  color: string;
  children: {
    name: string;
    color: string;
    loc: number;
  }[];
};

const filterNullValues = (data: SurfacesProtegeesDto) => {
  const tempEntries = Object.entries(data)[2][1] as GraphData[];
  const tempFiltered = tempEntries.map((e) => {
    if (e.children.filter((el) => el.loc !== 0).length != 0) {
      return {
        name: e.name,
        color: e.color,
        children: e.children.filter((el) => el.loc !== 0)
      };
    } else return {};
  });
  const newEntries = [
    ['name', 'Surfaces protégées'],
    ['color', 'hsl(271, 70%, 50%)'],
    ['children', tempFiltered]
  ];
  return Object.fromEntries(newEntries);
};

export const NivoTreeMap = ({ data }: { data: SurfacesProtegeesDto }) => {
  return (
    <div
      style={{
        height: '500px',
        minWidth: '450px',
        backgroundColor: 'white'
      }}
    >
      <ResponsiveTreeMap
        data={filterNullValues(data)}
        nodeComponent={(e: Any) => {
          return (
            <g transform={`translate(${e.node.x},${e.node.y})`}>
              <rect
                className="nivo_tree_map_rect"
                rx={8}
                width={e.node.width}
                height={e.node.height}
                fill={e.node.data.color}
                fillOpacity={1}
              />
              {e.node.height > 20 && e.node.width > 48 ? (
                <>
                  <text
                    x={e.node.width / 2}
                    y={e.node.height / 2 - 12}
                    textAnchor="middle"
                    dominantBaseline="central"
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      fill: '#FFFFFF',
                      fontFamily: 'Marianne'
                    }}
                  >
                    {e.node.formattedValue?.length > e.node.width / 6
                      ? e.node.formattedValue?.slice(0, e.node.width / 6 - 1) +
                        '...'
                      : e.node.formattedValue + ' ha'}
                  </text>
                  <text
                    x={e.node.width / 2}
                    y={e.node.height / 2 + 12}
                    textAnchor="middle"
                    dominantBaseline="central"
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      fill: '#FFFFFF',
                      fontFamily: 'Marianne'
                    }}
                  >
                    {e.node.id?.length > e.node.width / 8
                      ? e.node.id?.slice(0, e.node.width / 8 - 1) + '...'
                      : e.node.id}
                  </text>
                </>
              ) : (
                ''
              )}
            </g>
          );
        }}
        onMouseEnter={(e) => {
          console.log(e);
        }}
        onClick={(e) => {
          console.log(e);
        }}
        identity="name"
        value="loc"
        valueFormat=">-.0f"
        tile="squarify"
        leavesOnly={true}
        margin={{ top: 30, right: 50, bottom: 30, left: 30 }}
        // labelSkipSize={12}
        // label={(e) => {
        //   const maxWidth = e.width / 6;
        //   return e.id?.length > maxWidth
        //     ? e.id?.slice(0, maxWidth - 1) + '...'
        //     : e.id + ' : ' + e.formattedValue + ' ha';
        // }}
        // orientLabel={false}
        innerPadding={4}
        nodeOpacity={1}
        // parentLabelTextColor={'#000000'}
        parentLabelSize={25}
        labelTextColor={'#FFFFFF'}
        borderColor={{
          from: 'color'
        }}
        tooltip={({ node }) => (
          <div className={styles.tooltipSurfacesProtegeesWrapper}>
            <div
              className={styles.color}
              style={{ backgroundColor: node.color }}
            ></div>
            <p>
              <b>{node.id}</b> : {node.formattedValue} ha
            </p>
          </div>
        )}
      />
    </div>
  );
};
