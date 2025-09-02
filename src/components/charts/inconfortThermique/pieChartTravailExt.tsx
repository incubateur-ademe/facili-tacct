// @ts-nocheck
'use client';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import ZeroData from '@/assets/images/zero_data_found.png';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import couleurs from '@/design-system/couleurs';
import { travailExtDto } from '@/lib/dto';
import { simplePieChartTooltip } from '../ChartTooltips';
import NivoPieChart from '../NivoPieChart';

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

export const PieChartTravailExt = ({ graphData, travailExterieurTerritoire }: Props) => {
  const sumAllCount = graphData.reduce((sum, item) => sum + (item.count || 0), 0);
  return (
    <div >
      {sumAllCount > 0 ?
        <NivoPieChart
          graphData={graphData}
          colors={(graphData) => colors[graphData.label]}
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
