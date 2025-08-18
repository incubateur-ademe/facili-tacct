"use client";
import HautDePageIcon from '@/assets/icons/haut_de_page_icon_white.svg';
import { Body, H1, H2 } from "@/design-system/base/Textes";
import { CarteCommunes, ConsommationNAF } from "@/lib/postgres/models";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { sommaireThematiques } from "../../../roue-systemique/constantes/textesThematiques";
import styles from '../../explorerDonnees.module.scss';
import { ConsommationEspacesNAFAmenagement } from '../../indicateurs/amenagement/1-ConsommationEspacesNAF';
import { LCZ } from '../../indicateurs/amenagement/2-LCZ';

interface Props {
  carteCommunes: CarteCommunes[];
  consommationNAF: ConsommationNAF[];
}

export const DonneesAmenagement = ({
  carteCommunes,
  consommationNAF
}: Props) => {
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as "Aménagement";
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const ongletsMenu = sommaireThematiques[thematique];

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
        html {
          scroll-behavior: smooth;
        }
      `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <>
      <div className={styles.retourHautDePageWrapper}>
        <div className={styles.retourHautDePageBouton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image
            src={HautDePageIcon}
            alt="Retour en haut de page"
            width={24}
            height={24}
          />
        </div>
        <Body size='sm'>
          Haut de page
        </Body>
      </div>
      <div className={styles.explorerMesDonneesContainer}>
        <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
          Ce que les données suggèrent sur votre territoire
        </H1>
        {/* Introduction */}
        <section>
          <Body size='lg'>
            Les indicateurs qui vont suivre vous orientent ..............
            En revanche, seule votre enquête terrain vous révélera les impacts réels.
          </Body>
        </section>

        {/* Section Aménagement */}
        <section className={styles.sectionType}>
          <H2 style={{ color: "var(--principales-rouge)", textTransform: 'uppercase', fontSize: '1.75rem', margin: "0", padding: "2rem 2rem 0" }}>
            {ongletsMenu.thematiquesLiees[0].icone}{" "}{ongletsMenu.thematiquesLiees[0].thematique}
          </H2>
          {/* Consommation d'espaces NAF */}
          <div id="Consommation d'espaces NAF" className={styles.indicateurWrapper}>
            <ConsommationEspacesNAFAmenagement
              consommationNAF={consommationNAF}
              carteCommunes={carteCommunes}
            />
          </div>

          {/* État LCZ */}
          <div id="LCZ" className={styles.indicateurWrapper}>
            <LCZ
              carteCommunes={carteCommunes}
            />
          </div>
        </section>
      </div>
    </>
  );
};
