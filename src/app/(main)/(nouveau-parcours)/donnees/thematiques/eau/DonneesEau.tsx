"use client";
import ScrollToHash from "@/components/interactions/ScrollToHash";
import { LoaderText } from "@/components/ui/loader";
import { Body, H1, H2, H3 } from "@/design-system/base/Textes";
import { CarteCommunes, EtatCoursDeau, RessourcesEau } from "@/lib/postgres/models";
import { GetRessourceEau } from "@/lib/queries/databases/ressourcesEau";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import { GetEtatCoursDeau } from "@/lib/queries/postgis/etatCoursDeau";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { sommaireThematiques } from "../../../thematiques/constantes/textesThematiques";
import styles from '../../explorerDonnees.module.scss';
import { EtatEcoCoursDeau } from '../../indicateurs/eau/1-EtatCoursDeau';
import { PrelevementsEnEau } from '../../indicateurs/eau/2-PrelevementsEnEau';

interface Props {
  carteCommunes: CarteCommunes[];
  ressourcesEau: RessourcesEau[];
  etatCoursDeau: EtatCoursDeau[];
}

export const DonneesEau = ({
  carteCommunes,
  ressourcesEau,
  etatCoursDeau
}: Props) => {
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as "Eau";
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const code = searchParams.get('code')!;
  const ongletsMenu = sommaireThematiques[thematique];
  const [data, setData] = useState({
    carteCommunes,
    ressourcesEau,
  etatCoursDeau
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setIsLoading(true);
    void (async () => {
      const [newCarteCommunes, newRessourcesEau, newEtatCoursDeau] = await Promise.all([
        GetCommunes(code, libelle, type),
        GetRessourceEau(code, libelle, type),
        GetEtatCoursDeau(code, libelle, type)
      ]);
      setData({ carteCommunes: newCarteCommunes, ressourcesEau: newRessourcesEau, etatCoursDeau: newEtatCoursDeau });
      setIsLoading(false);
    })();
  }, [libelle]);

  return (
    isLoading ? <LoaderText text='Mise à jour des données' /> :
      <div className={styles.explorerMesDonneesContainer}>
        <ScrollToHash />
        <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
          Trop ou pas assez d’eau ? Explorer des facteurs déterminants pour l’avenir de la ressource en eau à l’ère du changement climatique
        </H1>
        {/* Introduction */}
        <section>
          <Body size='lg'>
            Ces quelques indicateurs vous aideront à poser les bonnes questions, le terrain vous donnera les vraies réponses.
          </Body>
        </section>

        {/* Section Biodiversité */}
        <section className={styles.sectionType}>
          <H2 style={{
            color: "var(--principales-rouge)",
            textTransform: 'uppercase',
            fontSize: '1.75rem',
            margin: "0 0 -1rem 0",
            padding: "2rem 2rem 0",
            fontWeight: 400
          }}>            {ongletsMenu.thematiquesLiees[0].icone}{" "}{ongletsMenu.thematiquesLiees[0].thematique}
          </H2>
          {/* Ressources en eau */}
          <div id="Ressources en eau" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                Répartition des prélèvements d’eau par usage
              </H3>
            </div>
            <PrelevementsEnEau ressourcesEau={data.ressourcesEau} />
          </div>

          {/* État écologique des cours d'eau */}
          <div id="État des cours d'eau" className={styles.indicateurMapWrapper}>
            <div className={styles.h3Titles}>
              <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
                État écologique des cours d’eau
              </H3>
            </div>
            <EtatEcoCoursDeau
              etatCoursDeau={data.etatCoursDeau}
              carteCommunes={data.carteCommunes}
            />
          </div>
        </section>
      </div>
  );
};
