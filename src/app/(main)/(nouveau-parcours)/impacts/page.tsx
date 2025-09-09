import { ErrorDisplay } from '@/app/ErrorDisplay';
import { ClientOnly } from '@/components/utils/ClientOnly';
import { H1 } from '@/design-system/base/Textes';
import { SearchParams } from '../../types';
import styles from '../donnees/explorerDonnees.module.scss';
import { DiagnostiquerImpactsConfortThermique } from './thematiques/confortThermique/ImpactsConfortThermique';

const ImpactsTerritoirePage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type, thematique } = await props.searchParams;
  return (
    <div className='min-h-screen'>
      <div className={styles.explorerMesDonneesContainer}>
        {
          ((code || libelle) && type) ?
            <ClientOnly>
              <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
                Les données vous montrent des pistes, le terrain lui, vous montre la réalité !
              </H1>
              {
                thematique === 'Confort thermique' ? (
                  <DiagnostiquerImpactsConfortThermique />
                ) : ""
              }
            </ClientOnly>
            : <ErrorDisplay code="404" />
        }
      </div>
    </div>
  );
};

export default ImpactsTerritoirePage;
