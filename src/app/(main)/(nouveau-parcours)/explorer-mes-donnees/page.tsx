import { ClientOnly } from '@/components/utils/ClientOnly';
import { H1 } from '@/design-system/base/Textes';
import { GetInconfortThermique } from '@/lib/queries/databases/inconfortThermique';
import { GetClcTerritoires, GetCommunes } from '@/lib/queries/postgis/cartographie';
import { notFound } from 'next/navigation';
import ExplorerConfortThermique from './components/ConfortThermique';
import styles from './explorerDonnees.module.scss';

const ExplorerTerritoirePage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type, thematique } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbInconfortThermique = await GetInconfortThermique(code, libelle, type);
  const clc = await GetClcTerritoires(libelle, type, code);

  // Si les données ne sont pas disponibles, on peut soit retourner notFound() soit un message d'erreur
  if (!clc || !clc.length || !dbInconfortThermique.length || !carteCommunes.length) {
    notFound();
  }

  return (
    <div className='min-h-screen'>
      <div className={styles.explorerMesDonneesContainer}>
        <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
          Ce que les données suggèrent sur votre territoire
        </H1>
        <ClientOnly>
          <ExplorerConfortThermique
            carteCommunes={carteCommunes}
            inconfortThermique={dbInconfortThermique}
            clc={clc}
          />
        </ClientOnly>
        <div style={{ marginTop: "0rem" }} />
      </div>
    </div>
  );
};

export default ExplorerTerritoirePage;
