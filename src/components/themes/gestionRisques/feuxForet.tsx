'use client';

import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CarteCommunes, IncendiesForet } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import FeuxForetDataviz from './feuxForetDataviz';
import styles from './gestionRisques.module.scss';

export const FeuxForet = (props: {
  incendiesForet: IncendiesForet[];
  carteCommunes: CarteCommunes[];
}) => {
  const { incendiesForet, carteCommunes } = props;
  const [datavizTab, setDatavizTab] = useState<string>('Cartographie');
  const [sliderValue, setSliderValue] = useState<number[]>([2006, 2023]);
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const codepci = searchParams.get('codepci')!;

  const title = (
    <>
      <div></div>
      <br></br>
      <div></div>
    </>
  );
  return (
    <>
      {incendiesForet.length !== 0 ? (
        <div className={styles.container}>
          <div className="w-1/3">
            <div className={styles.explicationWrapper}>
              {codgeo ? (
                <p>Commune</p>
              ) : (
                <p style={{ color: '#161616', margin: '0 0 0.5em' }}>epci</p>
              )}
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?" />
            </div>
            <div className="px-4">
              <p>
                Un climat plus chaud et plus sec sont des conditions propices
                aux départs de feux et les vents potentiellement plus violents
                sont sources de propagation rapide. La saison des feux
                s’allonge. Elle débute désormais au printemps et se prolonge
                jusqu’à l’automne. Les incendies touchent des territoires
                considérés jusque-là comme épargnés. Ils ont de graves
                conséquences : destruction de la biodiversité, pollution de
                l’air et de l’eau, effets collatéraux sur d’autres aléas
                naturels (érosion, glissements de terrain, inondations…) et
                émissions massives de gaz à effet de serre, amplifiant le
                dérèglement climatique.
              </p>
              <p>⇒</p>
              <p>⇒</p>
            </div>
          </div>
          <div className="w-2/3">
            <FeuxForetDataviz
              carteCommunes={carteCommunes}
              datavizTab={datavizTab}
              setDatavizTab={setDatavizTab}
              setSliderValue={setSliderValue}
              sliderValue={sliderValue}
              incendiesForet={incendiesForet}
            />
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};
