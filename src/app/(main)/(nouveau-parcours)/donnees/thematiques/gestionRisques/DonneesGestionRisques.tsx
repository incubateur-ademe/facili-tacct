"use client";
import HautDePageIcon from '@/assets/icons/haut_de_page_icon_white.svg';
import DiagnoticImage from '@/assets/images/diagnostiquer_impacts.png';
import { BoutonPrimaireClassic } from "@/design-system/base/Boutons";
import { Body, H1, H2 } from "@/design-system/base/Textes";
import { handleRedirectionThematique } from "@/hooks/Redirections";
import { ArreteCatNat, CarteCommunes, ErosionCotiere, IncendiesForet } from "@/lib/postgres/models";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { sommaireThematiques } from "../../../roue-systemique/constantes/textesThematiques";
import styles from '../../explorerDonnees.module.scss';

interface Props {
  gestionRisques: ArreteCatNat[];
  carteCommunes: CarteCommunes[];
  erosionCotiere: ErosionCotiere[];
  incendiesForet: IncendiesForet[];
}

export const DonneesGestionRisques = ({
  carteCommunes,
  gestionRisques,
  erosionCotiere,
  incendiesForet
}: Props) => {
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as "Gestion des risques";
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
          {/* Arrêtés catnat */}
          <div id="Arrêtés catnat" className={styles.indicateurWrapper}>

          </div>
        </section>

        {/* Section  */}
        <section className={styles.sectionType}>
          <H2 style={{ color: "var(--principales-rouge)", textTransform: 'uppercase', fontSize: '1.75rem', margin: "0", padding: "2rem 2rem 0" }}>
            {ongletsMenu.thematiquesLiees[1].icone}{" "}{ongletsMenu.thematiquesLiees[1].thematique}
          </H2>
          {/* État  */}
          <div id="" className={styles.indicateurWrapper}>

          </div>
        </section>

        {/* Section  */}
        <section className={styles.sectionType}>
          <H2 style={{ color: "var(--principales-rouge)", textTransform: 'uppercase', fontSize: '1.75rem', margin: "0", padding: "2rem 2rem 0" }}>
            {ongletsMenu.thematiquesLiees[2].icone}{" "}{ongletsMenu.thematiquesLiees[2].thematique}
          </H2>
          {/*  */}
          <div id="" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>

          </div>
          {/*  */}
          <div id="" className={styles.indicateurWrapper}>

          </div>
        </section>
        <div className={styles.redirectionEtape2Wrapper} >
          <Image
            src={DiagnoticImage}
            alt=""
            style={{ width: '100%', height: 'auto', maxWidth: "180px" }}
          />
          <div className={styles.textBloc} >
            <Body style={{ fontSize: "20px", color: "var(--gris-dark)", fontWeight: 700, maxWidth: "700px" }}>
              Ces pistes d'investigation en main, partez découvrir sur le
              terrain comment votre territoire vit concrètement les enjeux des risques.
            </Body>
            <BoutonPrimaireClassic
              size='lg'
              text='Diagnostiquer les impacts'
              link={handleRedirectionThematique({
                code: code,
                libelle: libelle,
                type: type as 'epci' | 'commune' | 'pnr' | 'petr' | 'departement',
                page: 'impacts',
                thematique: "Biodiversité",
                anchor: ""
              })}
            />
          </div>
        </div>
      </div>
    </>
  );
};
