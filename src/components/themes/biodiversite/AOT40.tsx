import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { LegendAOT40 } from '@/components/maps/legends/legendAOT40';
import { MapAOT40 } from '@/components/maps/mapAOT40';
import { AOT40 } from '@/lib/postgres/models';
import { CustomTooltip } from '@/lib/utils/CalculTooltip';
import { useSearchParams } from 'next/navigation';
import styles from './biodiversite.module.scss';

const AOT40Dataviz = (props: { aot40: AOT40[] }) => {
  const { aot40 } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const codepci = searchParams.get('codepci')!;
  const title = (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam
    </div>
  );
  return (
    <>
      {aot40.length ? (
        <div className={styles.container}>
          <div className="w-5/12">
            <div className={styles.explicationWrapper}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                diam
              </p>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?" />
            </div>
            <div className="px-4">
              <p>
                ⇒ En 2022, 25 agglomérations françaises ont dépassé les seuils
                réglementaires européens pour au moins un de ces quatre
                polluants : dioxyde d’azote, PM10, ozone troposphérique,
                monoxyde d'azote. Mais si les valeurs guides de l’OMS avaient
                été appliquées, la quasi-totalité des agglomérations françaises
                auraient été en dépassement : - 95% des agglomérations pour
                l’ozone ⇒ En 2010, les pertes de rendement en France : * -15%
                pour le blé tendre (1 milliard € de pertes), * -11% pour les
                prairies (plus d'1 milliard €) * -11% pour les pommes de terre
                (plus de 200 millions €) ⇒ Les projections 2030 sont
                inquiétantes : 760 millions € de pertes pour le blé tendre, 920
                millions € pour les prairies, 210 millions € pour les pommes de
                terre (retrouver où j’avais vu cette donnée..⇒librairie Ademe ?)
                ⇒ Dans certaines régions françaises, des arbres comme le hêtre
                et l'épicéa enregistrent des pertes de biomasse (infobulle)
                allant jusqu'à 22%
              </p>
              <p>
                - - - - <br></br>
              </p>
            </div>
          </div>
          <div className="w-7/12">
            <div className={styles.graphWrapper}>
              <div
                className={styles.biodiversiteGraphTitleWrapper}
                style={{ padding: '1rem' }}
              >
                <h2>AOT 40 O3 végétation 5 ans</h2>
              </div>
              <div>
                <MapAOT40 aot40={aot40} />
              </div>
              <div
                className={styles.legend}
                style={{ width: 'auto', justifyContent: 'center' }}
              >
                <LegendAOT40 />
              </div>
              <p style={{ padding: '1em', margin: '0' }}>Source : Géodair</p>
            </div>
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};

export default AOT40Dataviz;
