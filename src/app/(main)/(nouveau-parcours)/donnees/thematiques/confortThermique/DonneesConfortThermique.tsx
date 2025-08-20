'use client';
import DiagnoticImage from '@/assets/images/diagnostiquer_impacts.png';
import { RetourHautDePage } from '@/components/RetourHautDePage';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { Body, H1, H2 } from '@/design-system/base/Textes';
import { handleRedirectionThematique } from '@/hooks/Redirections';
import { CarteCommunes, CLCTerritoires, InconfortThermique } from '@/lib/postgres/models';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { sommaireThematiques } from '../../../thematiques/constantes/textesThematiques';
import styles from '../../explorerDonnees.module.scss';
import { GrandAge } from '../../indicateurs/confortThermique/1-GrandAge';
import { PrecariteEnergetique } from '../../indicateurs/confortThermique/2-PrecariteEnergetique';
import { EmploisEnExterieur } from '../../indicateurs/confortThermique/3-EmploisExterieurs';
import { DateConstructionResidences } from '../../indicateurs/confortThermique/4-DateConstructionResidences';
import { TypesDeSols } from '../../indicateurs/confortThermique/5-TypesDeSols';
import { LCZ } from '../../indicateurs/confortThermique/6-LCZ';

const DonneesConfortThermique = ({
  carteCommunes,
  inconfortThermique,
  clc
}: {
  carteCommunes: CarteCommunes[];
  inconfortThermique: InconfortThermique[];
  clc: CLCTerritoires[] | undefined;
}) => {
  const searchParams = useSearchParams();
  const params = usePathname();
  console.log("params", params)
  const thematique = searchParams.get('thematique') as "Confort thermique";
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
      <RetourHautDePage />
      <div className={styles.explorerMesDonneesContainer}>
        <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
          Ce que les données suggèrent sur votre territoire
        </H1>
        {/* Introduction */}
        <section>
          <Body size='lg'>
            Les indicateurs qui vont suivre vous orientent sur les typologies
            de personnes potentiellement impactées par l'inconfort thermique
            et les facteurs qui accentuent ce phénomène sur votre territoire.
            En revanche, seule votre enquête terrain vous révélera les impacts réels.
          </Body>
        </section>

        {/* Section Santé */}
        <section className={styles.sectionType}>
          <H2 style={{ color: "var(--principales-rouge)", textTransform: 'uppercase', fontSize: '1.75rem', margin: "0", padding: "2rem 2rem 0" }}>
            {ongletsMenu.thematiquesLiees[0].icone}{" "}{ongletsMenu.thematiquesLiees[0].thematique}
          </H2>
          {/* Grand âge */}
          <div id="Grand âge" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <GrandAge inconfortThermique={inconfortThermique} />
          </div>

          {/* Précarité énergétique */}
          <div id="Précarité énergétique" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <PrecariteEnergetique carteCommunes={carteCommunes} />
          </div>

          {/* Emplois en extérieur */}
          <div id="Emplois en extérieur" className={styles.indicateurWrapper}>
            <EmploisEnExterieur inconfortThermique={inconfortThermique} />
          </div>
        </section>

        {/* Section Bâtiment et logement */}
        <section className={styles.sectionType}>
          <H2 style={{ color: "var(--principales-rouge)", textTransform: 'uppercase', fontSize: '1.75rem', margin: "0", padding: "2rem 2rem 0" }}>
            {ongletsMenu.thematiquesLiees[1].icone}{" "}{ongletsMenu.thematiquesLiees[1].thematique}
          </H2>
          {/* Âge du bâtiment */}
          <div id="Âge du bâtiment" className={styles.indicateurWrapper}>
            <DateConstructionResidences inconfortThermique={inconfortThermique} />
          </div>
        </section>

        {/* Section Aménagement */}
        <section className={styles.sectionType}>
          <H2 style={{ color: "var(--principales-rouge)", textTransform: 'uppercase', fontSize: '1.75rem', margin: "0", padding: "2rem 2rem 0" }}>
            {ongletsMenu.thematiquesLiees[2].icone}{" "}{ongletsMenu.thematiquesLiees[2].thematique}
          </H2>
          {/* Types de sols */}
          <div id="Types de sols" className={styles.indicateurWrapper} style={{ borderBottom: '1px solid var(--gris-medium)' }}>
            <TypesDeSols inconfortThermique={inconfortThermique} carteCommunes={carteCommunes} clc={clc} />
          </div>
          {/* LCZ */}
          <div id="LCZ" className={styles.indicateurWrapper}>
            <LCZ
              carteCommunes={carteCommunes}
            />
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
              terrain comment votre territoire vit concrètement les enjeux de confort thermique.
            </Body>
            <BoutonPrimaireClassic
              size='lg'
              text='Diagnostiquer les impacts'
              link={handleRedirectionThematique({
                code: code,
                libelle: libelle,
                type: type as 'epci' | 'commune' | 'pnr' | 'petr' | 'departement',
                page: params === "/iframe/donnees" ? "iframe/impacts" : 'impacts',
                thematique: "Confort thermique",
                anchor: ""
              })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DonneesConfortThermique;
