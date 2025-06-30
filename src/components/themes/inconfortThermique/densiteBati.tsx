import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { Loader } from '@/components/loader';
import { densiteBatiLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { Map } from '@/components/maps/map';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import TagInIndicator from '@/components/patch4/TagInIndicator';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { ExportButton } from '@/components/utils/ExportButton';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { densiteBatiTooltipText } from '@/lib/tooltipTexts';
import { IndicatorTransformations } from '@/lib/utils/export/environmentalDataExport';
import { eptRegex } from '@/lib/utils/regex';
import { Average } from '@/lib/utils/reusableFunctions/average';
import { FilterDataTerritory } from '@/lib/utils/reusableFunctions/filterDataTerritories';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './themes.module.scss';

export const DensiteBati = ({
  carteCommunes
}: {
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const exportData = IndicatorTransformations.inconfort_thermique.densiteBati(FilterDataTerritory(type, code, libelle, carteCommunes));
  const communesMap = carteCommunes
    .map(CommunesIndicateursMapper)
    .filter((e) => !isNaN(e.properties.densite_bati));

  const carteTerritoire =
    type === 'ept' && eptRegex.test(libelle)
      ? communesMap.filter((e) => e.properties.ept === libelle)
      : communesMap;

  const densiteTerritoire = type === 'ept' && eptRegex.test(libelle) && carteTerritoire.length ?
    Average(carteTerritoire.filter((e => e.properties.ept === libelle)).map((e) => e.properties.densite_bati))
    : type === 'commune'
      ? communesMap.find((obj) => obj.properties['code_geographique'] === code)?.properties.densite_bati
      : carteTerritoire.length
        ? Average(carteTerritoire.map((e) => e.properties.densite_bati))
        : undefined;

  const densiteTerritoireSup = carteTerritoire.length ?? Average(communesMap.map((e) => e.properties.densite_bati));

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci' || type === 'ept') {
        const temp = await GetPatch4(code, type, libelle);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4, 'fortes_chaleurs')
    : "null";

  return (
    <>
      {!isLoadingPatch4 ? (
        <div className={styles.container}>
          <div className="w-2/5">
            <div className="mb-4">
              <ExportButton
                data={exportData}
                baseName="densite_bati"
                type={type}
                libelle={libelle}
                sheetName="Densité du bâti"
              />
            </div>
            <div className={styles.explicationWrapper}>
              {communesMap.length && densiteTerritoire ? (
                <>
                  <p style={{ color: '#161616' }}>
                    Sur votre territoire, la densité moyenne du bâtiment est de
                    <b> {Round(densiteTerritoire, 2)}. </b>
                  </p>
                  {type === "commune" || eptRegex.test(libelle) && (
                    <p style={{ color: '#161616' }}>
                      À l'échelle de l'EPCI, ce taux est de
                      <b> {densiteTerritoireSup.toFixed(2)}.</b>
                    </p>
                  )}
                </>
              ) : ""
              }
              <TagInIndicator
                indice={["Fortes Chaleurs"]}
                icon={[fortesChaleursIcon]}
                tag={[fortesChaleurs]}
              />
              <CustomTooltip title={densiteBatiTooltipText} />
            </div>
            <div className="px-4">
              <p>
                Il existe de nombreux indicateurs pour mesurer la densité du
                bâti. La formule de calcul choisie ici est la suivante :{' '}
                <br></br>
                <br></br>
                <b>
                  (surface au sol de la construction x hauteur du bâtiment)
                  / surface totale de la commune
                </b>
              </p>
            </div>
          </div>
          <div className="w-3/5">
            <div className={styles.graphWrapper}>
              <p style={{ padding: '1em', margin: '0' }}>
                <b>
                  Densité du bâti par commune
                </b>
              </p>
              {
                densiteTerritoire ?
                  <>
                    <Map data={'densite_bati'} carteCommunes={carteTerritoire} />
                    <div
                      className={styles.legend}
                      style={{ width: 'auto', justifyContent: 'center' }}
                    >
                      <LegendCompColor legends={densiteBatiLegend} />
                    </div>
                    <p style={{ padding: '1em', margin: '0' }}>
                      Source : Base de Données Nationale Des Bâtiments – BDNB. Dernière mise à jour : juin 2025.
                    </p>
                  </>
                  : <DataNotFoundForGraph image={DataNotFound} />
              }
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
