"use client";

import { CountOcc } from '@/lib/utils/reusableFunctions/occurencesCount';
import { ResponsivePie } from '@nivo/pie';

type ArreteCatNat = {
  annee_arrete: number;
  lib_risque_jo: string | null;
  dat_pub_arrete: string | null;
  code_geographique: string | null;
  departement: string | null;
  epci: string | null;
  index: bigint | null;
  libelle_epci: string | null;
  libelle_geographique: string | null;
  region: number | null;
}

const colors: { [key: string]: string } = {
  'Innondations': '#206EB4',
  'Sécheresse': '#FF7700',
  'Mouvements de terrain': '#BE5415',
  'Retrait-gonflement des argiles': '#FFBC5C',
  'Cyclones / Tempêtes': '#82815A',
  'Grêle / neige': '#00A302',
  'Avalanches': '#723AA0',
};

const PieChartCatnat = (props: {gestionRisques: ArreteCatNat[]}) => {
  const { gestionRisques } = props;
  const countTypes = CountOcc(gestionRisques, "lib_risque_jo");
  const mapGraphData = gestionRisques?.map((el) => {
    return {
      id: el.lib_risque_jo ?? "",
      label: el.lib_risque_jo ?? "",
      value: countTypes[el.lib_risque_jo!],
    }
  })
  const graphData = mapGraphData.filter(
    (value, index, self) => index === self.findIndex(t => t.label === value.label),
  );
  return (
    <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
      <ResponsivePie
        data={graphData}
        margin={{ top: 60, right: 80, bottom: 60, left: 80 }}
        colors={graphData => colors[graphData.id]}
        isInteractive={true}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        arcLinkLabelsSkipAngle={7}
        sortByValue={false}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              0.2
            ]
          ]
        }}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLinkLabelsOffset={10}
        arcLinkLabelsDiagonalLength={16}
        arcLinkLabelsStraightLength={20}
      />
    </div>
  )
}

export default PieChartCatnat;
