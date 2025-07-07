import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ExportButton } from '@/components/exports/ExportButton';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { RGAMapper } from '@/lib/mapper/gestionRisques';
import { CarteCommunes, Patch4, RGACarte, RGAdb } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { rgaTooltipText } from '@/lib/tooltipTexts';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { exportDatavizAsPNG } from '@/lib/utils/export/exportPng';
import { numberWithSpacesRegex } from '@/lib/utils/regex';
import { Average } from '@/lib/utils/reusableFunctions/average';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { RGAText } from '../inconfortThermique/staticTexts';
import styles from './gestionRisques.module.scss';
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
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const exportPNGRef = useRef(null);
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const [datavizTab, setDatavizTab] = useState<string>((type === "commune" || type === "epci") ? 'Comparaison' : "Répartition");
  const rgaFilteredByTerritory = type === "commune" ?
    rga.filter(item => item.code_geographique === code) :
    type === "epci" ?
      rga.filter(item => item.epci === code) :
      rga;

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

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci' || type === 'ept') {
        const temp = await GetPatch4(code, type, libelle);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const partMoyenFort = rgaFilteredByTerritory.length > 0
    ? Round(Average(rgaFilteredByTerritory.map((el) => el.part_alea_moyen_fort_commune)), 1)
    : 0;
  const nbLogementsMoyenFort = rgaFilteredByTerritory.length > 0
    ? Sum(rgaFilteredByTerritory.map((el) => el.nb_logement_alea_moyen_fort))
    : 0;
  const partMoyenFortApres1975 = rgaFilteredByTerritory.length > 0
    ? Round(
      100 * Sum(
        rgaFilteredByTerritory.map(
          (el) => el.nb_logement_alea_moyen_fort_apres_1975
        )
      ) / Sum(
        rgaFilteredByTerritory.map(
          (el) => el.nb_logement_alea_moyen_fort
        )
      ), 1)
    : 0;

  const secheresse = patch4 ? AlgoPatch4(patch4, 'secheresse_sols') : undefined;
  const precipitation = patch4
    ? AlgoPatch4(patch4, 'fortes_precipitations')
    : undefined;
  const exportData = IndicatorExportTransformations.gestionRisques.RGA(rgaFilteredByTerritory);

  return (
    <>
      {communesMap && !isLoadingPatch4 ? (
        <div className={styles.container}>
          <>
            <div className={communesMap.length > 0 ? "w-2/5" : "w-1/2"}>
              <div className="mb-4">
                <ExportButton
                  data={exportData}
                  baseName="retrait_gonflement_argiles"
                  type={type}
                  libelle={libelle}
                  code={code}
                  sheetName="Retrait-gonflement des argiles"
                />
              </div>
              <div className={styles.explicationWrapper}>
                {
                  communesMap.length > 0 && rga.length && rgaCarte.length ? (
                    <p>
                      <b>{partMoyenFort} %</b> de votre territoire est situé dans une zone où le niveau
                      d’exposition au retrait gonflement des argiles est moyen ou fort. Cela
                      concerne potentiellement <b>{numberWithSpacesRegex(nbLogementsMoyenFort)} logements</b>, parmi
                      lesquels <b>{nbLogementsMoyenFort === 0 ? 0 : partMoyenFortApres1975} %</b> sont considérés comme plus à
                      risque car construits après 1975.
                    </p>
                  ) : ""
                }
                <div className={styles.patch4Wrapper}>
                  {secheresse === 'Intensité très forte' ||
                    secheresse === 'Intensité forte' ? (
                    <TagItem
                      icon={secheresseIcon}
                      indice="Sécheresse des sols"
                      tag={secheresse}
                    />
                  ) : null}
                  {precipitation === 'Intensité très forte' ||
                    precipitation === 'Intensité forte' ? (
                    <TagItem
                      icon={precipitationIcon}
                      indice="Fortes précipitations"
                      tag={precipitation}
                    />
                  ) : null}
                </div>
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
                    exportPNGRef={exportPNGRef}
                  /> : (
                    <div className={styles.graphWrapper}>
                      <p style={{ padding: '1em', margin: '0' }}>
                        <b>Retrait-gonflement des argiles</b>
                      </p>
                      <DataNotFoundForGraph image={DataNotFound} />
                    </div>
                  )
              }
              <button onClick={() => exportDatavizAsPNG(exportPNGRef, 'Retrait-gonflement des argiles.png')}>Exporter PNG</button>
            </div>
          </>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
