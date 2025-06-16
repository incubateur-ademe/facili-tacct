import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { RGAMapper } from '@/lib/mapper/gestionRisques';
import { CarteCommunes, RGACarte, RGAdb } from '@/lib/postgres/models';
import { rgaTooltipText } from '@/lib/tooltipTexts';
import { Average } from '@/lib/utils/reusableFunctions/average';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from '../agriculture/agriculture.module.scss';
import { RGAText } from '../inconfortThermique/staticTexts';
import RgaDataViz from './rgaDataviz';

export const RGA = ({
  carteCommunes,
  rgaCarte,
  rga
}: {
  carteCommunes: CarteCommunes[];
  rgaCarte: RGACarte[];
  rga: RGAdb[];
}) => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type')!;
  const [datavizTab, setDatavizTab] = useState<string>((type === "commune" || type === "epci") ? 'Répartition' : "Évolution");
  const carteCommunesEnriched = carteCommunes.map(CommunesIndicateursMapper);
  const communesMap = carteCommunesEnriched.map((el) => {
    return {
      ...el,
      rga:
        rgaCarte.find((item) => item.code_geographique === el.properties.code_geographique)
          ?.alea ?? NaN
    };
  });
  const rgaMap = rgaCarte.map(RGAMapper);
  const featureCollection = {
    type: "FeatureCollection",
    features: rgaMap
  };
  const partMoyenFort = rga.length > 0 && Round(Average(rga.map((el) => el.part_alea_moyen_fort_commune)), 1);
  const nbLogementsMoyenFort = rga.length > 0 && rga.map((el) => el.nb_logement_alea_moyen_fort).reduce((acc, value) => acc + (value ?? 0), 0);
  const partMoyenFortApres1975 = rga.length > 0 && Round(Average(rga.map((el) => el.part_logement_alea_moyen_fort_apres_1975)), 1);

  return (
    <>
      {communesMap ? (
        <div className={styles.container}>
          <>
            <div className={communesMap.length > 0 ? "w-2/5" : "w-1/2"}>
              <div className={styles.explicationWrapper}>
                {
                  communesMap.length > 0 ? (
                    <p>
                      <b>{partMoyenFort} %</b> de votre territoire est situé dans une zone où le niveau 
                      d’exposition au retrait gonflement des argiles est moyen ou fort. Cela 
                      concerne potentiellement <b>{nbLogementsMoyenFort} logements</b>, parmi 
                      lesquels <b>{partMoyenFortApres1975} %</b> sont considérés comme plus à 
                      risque car construits après 1975. 
                    </p>
                  ) : ""
                }
                <CustomTooltip title={rgaTooltipText} texte="D’où vient ce chiffre ?" />
              </div>
              <RGAText />
            </div>
            <div className={communesMap.length > 0 ? "w-3/5" : "w-1/2"}>
              {
                communesMap && rga.length && rgaCarte.length ?
                  <RgaDataViz
                    rgaCarte={featureCollection}
                    carteCommunes={communesMap}
                    rga={rga}
                    datavizTab={datavizTab}
                    setDatavizTab={setDatavizTab}
                  /> : (
                    <div className={styles.graphWrapper}>
                      <p style={{ padding: '1em', margin: '0' }}>
                        <b>Retrait-gonflement des argiles</b>
                      </p>
                      <DataNotFoundForGraph image={DataNotFound} />
                    </div>
                  )
              }
            </div>
          </>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
