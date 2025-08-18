"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { MicroRemplissageTerritoire } from "@/components/charts/MicroDataviz";
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { fragiliteEcoLegend } from "@/components/maps/legends/datavizLegends";
import { LegendCompColor } from "@/components/maps/legends/legendComp";
import { MapInconfortThermique } from "@/components/maps/mapInconfortThermique";
import { CustomTooltipNouveauParcours } from "@/components/utils/CalculTooltip";
import { Body, H3 } from "@/design-system/base/Textes";
import { CommunesContourMapper, CommunesIndicateursMapper } from '@/lib/mapper/communes';
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
  const territoireContourMap = carteCommunes.map(CommunesContourMapper);
  const communesMap = carteCommunes
    .map(CommunesIndicateursMapper)
    .filter((e) => !isNaN(e.properties.precarite_logement));

  const carteTerritoire =
    type === 'ept' && eptRegex.test(libelle)
      ? communesMap.filter((e) => e.properties.ept === libelle)
      : communesMap;

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

  return (
    <>
      <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
        Part des ménages en situation de précarité énergétique liée au logement
      </H3>
      <div className={styles.datavizMapContainer}>
        <div className={styles.chiffreDynamiqueWrapper}>
          <MicroRemplissageTerritoire
            territoireContours={territoireContourMap}
            pourcentage={100 * precariteLogTerritoire}
            arrondi={1}
            height={155}
          />
          <div className={styles.text}>
            {
              precariteLogTerritoire ? (
                <Body size="sm">
                  La précarité énergétique va au delà du seul critère du revenu, elle inclue
                  les mauvaises conditions d’habitation ainsi que les évolutions du prix des énergies.
                  La part des ménages en situation de précarité énergétique
                  liée au logement sur votre territoire est de{' '}
                  <b>{Round((100 * precariteLogTerritoire), 1)} %. </b>
                </Body>
              ) : ""
            }
            <CustomTooltipNouveauParcours
              title={fragiliteEconomiqueTooltipText}
              texte="D'où vient ce chiffre ?"
            />
          </div>
        </div>
        <div className={styles.mapWrapper}>
          {
            carteTerritoire.length > 0 ? (
              <>
                <MapInconfortThermique
                  carteCommunes={carteTerritoire}
                  data={'precarite_log'}
                />
                <div
                  className={styles.legend}
                  style={{ width: 'auto', justifyContent: 'center' }}
                >
                  <LegendCompColor legends={fragiliteEcoLegend} />
                </div>
              </>
            ) : <div className='p-10 flex flex-row justify-center'><DataNotFoundForGraph image={DataNotFound} /></div>
          }
        </div>
      </div>
      <div className={styles.sourcesExportWrapper} style={{ marginLeft: '-2rem', borderTop: '1px solid var(--gris-medium)' }}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : Observatoire de la précarité énergétique (ONPE), GEODIP
        </Body>
      </div>
    </>
  );
};
