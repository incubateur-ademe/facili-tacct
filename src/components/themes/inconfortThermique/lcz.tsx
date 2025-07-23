import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import { default as DataNotFound } from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from "@/components/loader";
import { MapLCZ } from '@/components/maps/mapLCZ';
import { AlgoPatch4 } from "@/components/patch4/AlgoPatch4";
import TagInIndicator from "@/components/patch4/TagInIndicator";
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CarteCommunes, Patch4 } from "@/lib/postgres/models";
import { GetLczCouverture } from '@/lib/queries/databases/inconfortThermique';
import { GetPatch4 } from "@/lib/queries/patch4";
import { LCZTooltipText } from '@/lib/tooltipTexts';
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LCZText } from './staticTexts';
import styles from './themes.module.scss';

export const LCZ = ({
  carteCommunes
}: {
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const exportPNGRef = useRef<HTMLDivElement | null>(null);
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const [isLczCovered, setIsLczCovered] = useState<Boolean | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci' || type === 'ept') {
        const temp = await GetPatch4(code, type, libelle);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
      const tempLCZ = await GetLczCouverture(code, libelle, type);
      setIsLczCovered(tempLCZ);
      setIsLoading(false);
    })()
  }, [code]);

  const fortesChaleurs = patch4 ? AlgoPatch4(patch4, 'fortes_chaleurs') : "null";

  return (
    <>
      {!isLoadingPatch4 ? (
        <div className={styles.container}>
          <div className="w-2/5">
            <div className={styles.explicationWrapper}>

              {
                isLczCovered ? (
                  <>
                    <p style={{ color: '#161616' }}>
                      <b>Comment lire cette carte ?</b>
                    </p>
                    <p>
                      Les zones climatiques locales (LCZ en anglais) montrent comment
                      un territoire réagit aux vagues de chaleur estivales. Les
                      17 types de zones aident à identifier les zones qui peuvent
                      potentiellement devenir très chaudes.
                      <br />
                      Bien que basée sur l’occupation du sol et la forme des
                      villes, <b>cette cartographie n’est pas une modélisation
                        de l’îlot de chaleur urbain.</b> Ces données, fournies par le CEREMA,
                      couvrent 88 aires urbaines en France métropolitaine. Sur
                      les 12 000 communes étudiées, plus de 5 millions d’habitants
                      vivent dans des quartiers très sensibles aux fortes chaleurs.
                    </p>
                    <br />
                    <p>
                      Pour en savoir plus sur la méthodologie scientifique utilisée,&nbsp;
                      <a
                        href="https://www.cerema.fr/fr/actualites/cerema-publie-nouvelles-donnees-surchauffe-urbaine"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        rendez-vous sur le site du Cerema
                      </a>.
                    </p>
                    <TagInIndicator
                      indice={["Fortes chaleurs"]}
                      icon={[fortesChaleursIcon]}
                      tag={[fortesChaleurs]}
                    />
                  </>
                ) : (
                  <>
                    <p style={{ color: '#161616' }}>
                      <b>Comment lire cette carte ?</b>
                    </p>
                    <p>
                      Cette carte, issue de multiples jeux de données d'observation de la Terre,
                      vous permet d'explorer votre territoire à 100 m de résolution spatiale.
                      Les zones climatiques locales (LCZ en anglais) montrent comment
                      un territoire réagit aux vagues de chaleur estivales. Les 17
                      types de zones aident à identifier les zones qui peuvent
                      potentiellement devenir très chaudes.
                      <br />
                      Bien que basée sur l’occupation du sol et la forme des
                      villes, <b>cette cartographie n’est pas une modélisation
                        de l’îlot de chaleur urbain.</b>
                    </p>
                    <br />
                    <p>
                      Pour en savoir plus sur la méthodologie scientifique utilisée pour élaborer la carte,
                      consultez l’article&nbsp;
                      <a
                        href="https://essd.copernicus.org/articles/14/3835/2022/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        A global map of local climate zones to support earth system modelling
                        and urban-scale environmental science
                      </a>.
                    </p>

                  </>
                )
              }
              {
                fortesChaleurs === "null" ? "" : <TagInIndicator
                  indice={["Fortes chaleurs"]}
                  icon={[fortesChaleursIcon]}
                  tag={[fortesChaleurs]}
                />
              }
              <CustomTooltip title={LCZTooltipText} texte="D'où vient cette carte ?" />
            </div>
            <LCZText />
          </div>
          <div className="w-3/5">
            <div className={styles.graphWrapper}>
              <p style={{ padding: '1em', margin: '0' }}>
                <b>Cartographie des Zones Climatiques Locales (LCZ)</b>
              </p>
              {
                carteCommunes ? (
                  <div ref={exportPNGRef}>
                    <MapLCZ carteCommunes={carteCommunes} />
                  </div>
                ) : <DataNotFoundForGraph image={DataNotFound} />
              }
            </div>
            {/* <button onClick={() => exportDatavizAsPNG(exportPNGRef, 'lcz.png')}>Exporter PNG</button> */}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>

  )
}
