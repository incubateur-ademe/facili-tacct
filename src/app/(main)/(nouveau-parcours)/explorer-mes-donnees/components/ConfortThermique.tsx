'use client';

import HautDePageIcon from '@/assets/icons/haut_de_page_icon_white.svg';
import { Body, H2 } from '@/design-system/base/Textes';
import { CarteCommunes, CLCTerritoires, InconfortThermique } from '@/lib/postgres/models';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { sommaireThematiques } from '../../roue-systemique/constantes/textesThematiques';
import styles from '../explorerDonnees.module.scss';
import { GrandAge } from '../thematiques/1-GrandAge';
import { PrecariteEnergetique } from '../thematiques/2-PrecariteEnergetique';
import { EmploisEnExterieur } from '../thematiques/3-EmploisExterieurs';
import { DateConstructionResidences } from '../thematiques/4-DateConstructionResidences';
import { TypesDeSols } from '../thematiques/5-TypesDeSols';
import { LCZ } from '../thematiques/6-LCZ';

const ExplorerConfortThermique = ({
  carteCommunes,
  inconfortThermique,
  clc
}: {
  carteCommunes: CarteCommunes[];
  inconfortThermique: InconfortThermique[];
  clc: CLCTerritoires[] | undefined;
}) => {
  const searchParams = useSearchParams();
  const thematique = searchParams.get('thematique') as "Confort thermique";
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

      {/* Section Tourisme */}
      <section className={styles.sectionType}>
        <H2 style={{ color: "var(--principales-rouge)", textTransform: 'uppercase', fontSize: '1.75rem', margin: "0", padding: "2rem 2rem 0" }}>
          {ongletsMenu.thematiquesLiees[3].icone}{" "}{ongletsMenu.thematiquesLiees[3].thematique}
        </H2>
        {/* Septième élément */}
        <div id="Indicateur tourisme" className={styles.indicateurWrapper} >

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Indicateur tourisme
          </h3>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Contenu du septième élément. Eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text-gray-700">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExplorerConfortThermique;
