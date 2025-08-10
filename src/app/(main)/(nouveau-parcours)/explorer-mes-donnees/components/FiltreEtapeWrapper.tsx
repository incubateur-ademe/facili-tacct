'use client';

import { ClientOnly } from '@/components/utils/ClientOnly';
import { H1 } from '@/design-system/base/Textes';
import { CarteCommunes, CLCTerritoires, InconfortThermique } from '@/lib/postgres/models';
import { useExplorer } from '../contexts/ExplorerContext';
import styles from '../explorerDonnees.module.scss';
import { DiagnostiquerImpacts } from './2-DiagnostiquerImpacts';
import ExplorerConfortThermique from './ConfortThermique';

const FiltreEtapeWrapper = ({
  // children,
  carteCommunes,
  inconfortThermique,
  clc
}: {
  // children: React.ReactNode;
  carteCommunes: CarteCommunes[];
  inconfortThermique: InconfortThermique[];
  clc: CLCTerritoires[] | undefined;
}) => {
  const { showEtape } = useExplorer();

  return (
    <div className='min-h-screen'>
      <div className={styles.explorerMesDonneesContainer}>
        {showEtape === 1 && (
          <ClientOnly>
            <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
              Ce que les données suggèrent sur votre territoire
            </H1>
            <ExplorerConfortThermique
              carteCommunes={carteCommunes}
              inconfortThermique={inconfortThermique}
              clc={clc}
            />
          </ClientOnly>
        )}
        {
          showEtape === 2 && (
            <ClientOnly>
              <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
                Les données vous montrent des pistes, le terrain lui, vous montre la réalité !
              </H1>
              <DiagnostiquerImpacts />
            </ClientOnly>
          )
        }
        <div style={{ marginTop: "0rem" }} />
      </div>
    </div>
  );
};

export default FiltreEtapeWrapper;
