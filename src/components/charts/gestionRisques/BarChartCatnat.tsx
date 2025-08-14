'use client';

import styles from '@/components/themes/gestionRisques/gestionRisques.module.scss';
import { BarDatum } from '@/lib/nivo/bar';
import { ArreteCatNat } from '@/lib/postgres/models';
import { CountOccByIndex } from '@/lib/utils/reusableFunctions/occurencesCount';
import { NivoBarChartCatnat } from '../NivoBarChart';

const colors: { [key: string]: string } = {
  Inondations: '#009ADC',
  Sécheresse: '#FFCF5E',
  'Mouvements de terrain': '#F66E19',
  'Retrait-gonflement des argiles': '#BB43BD',
  'Cyclones / Tempêtes': '#00C2CC',
  'Grêle / neige': '#00C190',
  Avalanche: '#7A49BE'
};

const legends = [
  {
    texte: 'Inondations',
    couleur: '#009ADC',
  },
  {
    texte: 'Sécheresse',
    couleur: '#FFCF5E',
  },
  {
    texte: 'Mouvements de terrain',
    couleur: '#F66E19',
  },
  {
    texte: 'Retrait-gonflement des argiles',
    couleur: '#BB43BD',
  },
  {
    texte: 'Cyclones / Tempêtes',
    couleur: '#00C2CC',
  },
  {
    texte: 'Grêle / neige',
    couleur: '#00C190',
  },
  {
    texte: 'Avalanche',
    couleur: '#7A49BE',
  }
];

type ArreteCatNatEnriched = ArreteCatNat & {
  annee_arrete: number;
};

type GraphData = {
  indexName: number;
  [key: string]: number;
};

export const BarChartCatnat = (props: { gestionRisques: ArreteCatNatEnriched[] }) => {
  const { gestionRisques } = props;
  const typesRisques = [
    ...new Set(gestionRisques.map((item) => item.lib_risque_jo))
  ]
    .filter((item) => item !== null)
    .sort();
  const graphData = CountOccByIndex(
    gestionRisques,
    'annee_arrete',
    'lib_risque_jo'
  ) as unknown as GraphData[];
  const minDate = Math.min(...gestionRisques.map((e) => e.annee_arrete));
  const maxDate = Math.max(...gestionRisques.map((e) => e.annee_arrete));
  return (
    <div
      style={{ height: '450px', width: '100%', backgroundColor: 'white' }}
    >
      {graphData.length === 0 ? (
        <div
          style={{
            height: 'inherit',
            alignContent: 'center',
            textAlign: 'center'
          }}
        >
          Aucun arrêté catnat avec ces filtres
        </div>
      ) : (
        <NivoBarChartCatnat
          graphData={graphData as unknown as BarDatum[]}
          keys={legends.map((e) => e.texte)}
          indexBy="indexName"
          colors={legends.map((e) => e.couleur)}
          tooltip={({ data }) => {
            const dataArray = Object.entries(data).map((el) => {
              return {
                titre: el[0],
                value: el[1],
                color: colors[el[0]]
              };
            });
            return (
              <div className={styles.tooltipEvolutionWrapper}>
                <h3>{dataArray.at(-1)?.value}</h3>
                {dataArray.slice(0, -1).map((el, i) => {
                  return (
                    <div className={styles.itemWrapper} key={i}>
                      <div className={styles.titre}>
                        <div
                          className={styles.colorSquare}
                          style={{ background: el.color }}
                        />
                        <p>{el.titre}</p>
                      </div>
                      <div className={styles.value}>
                        <p>{el.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }}
          axisLeftLegend="Nombre de catastrophes recensées"
          legendData={legends
            .map((legend, index) => ({
              id: index,
              label: legend.texte,
              color: legend.couleur
            }))}
          bottomTickValues={minDate != maxDate
            ? [minDate, maxDate]
            : [minDate]}
        />
      )}
    </div>
  );
};
