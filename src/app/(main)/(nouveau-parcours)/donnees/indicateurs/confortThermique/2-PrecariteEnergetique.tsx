"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { MicroRemplissageTerritoire } from '@/components/charts/MicroDataviz';
import { CopyLinkClipboard } from '@/components/CopyLinkClipboard';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { fragiliteEcoLegend } from "@/components/maps/legends/datavizLegends";
import { LegendCompColor } from "@/components/maps/legends/legendComp";
import { MapInconfortThermique } from '@/components/maps/mapInconfortThermique';
import { CustomTooltipNouveauParcours } from "@/components/utils/Tooltips";
import { Body } from "@/design-system/base/Textes";
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes } from "@/lib/postgres/models";
import { fragiliteEconomiqueTooltipText } from '@/lib/tooltipTexts';
import { eptRegex } from "@/lib/utils/regex";
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from "next/navigation";
import styles from '../../explorerDonnees.module.scss';

export const PrecariteEnergetique = ({
  carteCommunes
}: {
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const communesMap = carteCommunes
    .map(CommunesIndicateursMapper)
    .filter((e) => !isNaN(e.properties.precarite_logement));

  const carteTerritoire =
    type === 'ept' && eptRegex.test(libelle)
      ? communesMap.filter((e) => e.properties.ept === libelle)
      : communesMap;

  const territoireSeul = type === "commune"
    ? carteTerritoire.filter((e) => e.properties.code_geographique === code)
    : type === "epci"
      ? carteTerritoire.filter((e) => e.properties.epci === code)
      : carteTerritoire;

  const precariteLogTerritoire =
    type === 'commune'
      ? Number(
        carteTerritoire.find(
          (obj) => obj.properties['code_geographique'] === code
        )?.properties['precarite_logement']
      )
      : Number(
        carteTerritoire.reduce(function (a, b) {
          return a + b.properties['precarite_logement'];
        }, 0) / carteTerritoire.length
      );
  const precariteLogTerritoireSup = Number(
    carteTerritoire.reduce(function (a, b) {
      return a + b.properties['precarite_logement'];
    }, 0) / carteTerritoire.length
  );

  return (
    <>
      <div className={styles.datavizMapContainer}>
        <div className={styles.chiffreDynamiqueWrapper}>
          {
            !precariteLogTerritoire ? "" :
              <MicroRemplissageTerritoire
                pourcentage={100 * precariteLogTerritoire}
                territoireContours={territoireSeul}
                arrondi={1}
              />
          }
          <div className={styles.text}>
            {
              precariteLogTerritoire ? (
                <>
                  <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                    La précarité énergétique va au-delà du seul critère du revenu, elle inclut
                    les mauvaises conditions d’habitation ainsi que les évolutions du prix des énergies.
                    La part des ménages en situation de précarité énergétique
                    liée au logement sur votre territoire est de{' '}
                    <b>{Round((100 * precariteLogTerritoire), 1)} %. </b>
                  </Body>
                  {
                    type === "commune" && (
                      <Body weight='bold' style={{ color: "var(--gris-dark)", padding: '0.5rem 0' }}>
                        Ce taux est de {Round((100 * precariteLogTerritoireSup), 1)} % dans votre EPCI.
                      </Body>
                    )
                  }
                  <CustomTooltipNouveauParcours
                    title={fragiliteEconomiqueTooltipText}
                    texte="D'où vient ce chiffre ?"
                  />
                </>
              ) : ""
            }
          </div>
        </div>
        <div className={styles.mapWrapper}>
          {
            carteTerritoire.length > 0 && precariteLogTerritoire ? (
              <>
                <MapInconfortThermique carteCommunes={carteTerritoire} />
                <div
                  className={styles.legend}
                  style={{ width: 'auto', justifyContent: 'center' }}
                >
                  <LegendCompColor legends={fragiliteEcoLegend} />
                </div>
              </>
            ) : (
              <div className='p-10 flex flex-row justify-center'>
                <DataNotFoundForGraph image={DataNotFound} />
              </div>
            )
          }
        </div>
      </div>
      <div className={styles.sourcesExportMapWrapper}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : <a href="https://geodip.onpe.org/" target='_blank' rel='noopener noreferrer'>Observatoire de la précarité énergétique (ONPE), GEODIP</a>
          <br></br>Export indisponible : cette donnée est diffusée sur demande aux territoires par Geodip
        </Body>
        {(carteTerritoire.length > 0 && precariteLogTerritoire) ? <CopyLinkClipboard anchor={"Précarité énergétique"} /> : null}
      </div>
    </>
  );
};
