"use client";
import ScrollToHash from "@/components/interactions/ScrollToHash";
import { LoaderText } from "@/components/ui/loader";
import { Body, H1, H2, H3 } from "@/design-system/base/Textes";
import { ConsommationNAFEcolabApi } from "@/lib/postgres/EcolabApi";
import { CarteCommunes, ConsommationNAF } from "@/lib/postgres/models";
import { GetConsommationNAF } from "@/lib/queries/databases/biodiversite";
import { GetNAF } from "@/lib/queries/ecologieGouv/test";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import { useSearchParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { sommaireThematiques } from "../../../thematiques/constantes/textesThematiques";
import styles from '../../explorerDonnees.module.scss';
import { ConsommationEspacesNAFAmenagement } from '../../indicateurs/amenagement/1-ConsommationEspacesNAF';
import { ConsommationEspacesNAFAmenagementEcolab } from "../../indicateurs/amenagement/1-ConsommationEspacesNAFEcolab";
import { LCZ } from '../../indicateurs/amenagement/2-LCZ';

interface Props {
  carteCommunes: CarteCommunes[];
  consommationNAF: ConsommationNAF[];
  consommationNAFEcolab: ConsommationNAFEcolabApi[];
}

export const DonneesAmenagement = ({
  carteCommunes,
  consommationNAF,
  consommationNAFEcolab
}: Props) => {
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as "Aménagement";
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const code = searchParams.get('code')!;
  const ongletsMenu = sommaireThematiques[thematique];
  const [data, setData] = useState({
    carteCommunes,
    consommationNAF,
    consommationNAFEcolab
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useLayoutEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setIsLoading(true);
    void (async () => {
      const [newCarteCommunes, newConsommationNAF, newConsommationNAFEcolab] = await Promise.all([
        GetCommunes(code, libelle, type),
        GetConsommationNAF(code, libelle, type),
        GetNAF(code, libelle, type)
      ]);
      setData({ carteCommunes: newCarteCommunes, consommationNAF: newConsommationNAF, consommationNAFEcolab: newConsommationNAFEcolab });
      setIsLoading(false);
    })();
  }, [libelle]);

  return (
    isLoading ? <LoaderText text='Mise à jour des données' /> :
      <div className={styles.explorerMesDonneesContainer}>
        <ScrollToHash />
        <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
          Votre territoire a été aménagé pour un climat révolu. Découvrez cet héritage pour le réinventer, avant qu’il ne devienne un frein.
        </H1>
        {/* Introduction */}
        <section>
          <Body size='lg'>
            Ces quelques indicateurs vous aideront à poser les bonnes questions, le terrain vous donnera les vraies réponses.
          </Body>
        </section>

        {/* Section Aménagement */}
        <section className={styles.sectionType}>
          <H2 style={{
            color: "var(--principales-rouge)",
            textTransform: 'uppercase',
            fontSize: '1.75rem',
            margin: "0 0 -1rem 0",
            padding: "2rem 2rem 0",
            fontWeight: 400
          }}>
            {ongletsMenu.thematiquesLiees[0].icone}{" "}{ongletsMenu.thematiquesLiees[0].thematique}
          </H2>
          {/* Sols imperméabilisés */}
          <div id="Sols imperméabilisés" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Destination des surfaces imperméabilisées
              </H3>
            </div>
            <ConsommationEspacesNAFAmenagement
              consommationNAF={data.consommationNAF}
            />
          </div>

          {/* Sols imperméabilisés ECOLAB */}
          <div id="Sols imperméabilisés" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                NAF API ECOLAB
              </H3>
            </div>
            <ConsommationEspacesNAFAmenagementEcolab
              consommationNAF={data.consommationNAFEcolab}
            />
          </div>

          {/* État LCZ */}
          <div id="LCZ" className={styles.indicateurMapWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Cartographie des zones climatiques locales (LCZ)
              </H3>
            </div>
            <LCZ carteCommunes={data.carteCommunes} />
          </div>
        </section>
      </div>
  );
};
