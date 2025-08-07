import { ClientOnly } from '@/components/utils/ClientOnly';
import { H1 } from '@/design-system/base/Textes';
import { GetCommunes } from '@/lib/queries/postgis/cartographie';
import ExplorerConfortThermique from './components/ConfortThermique';
import styles from './explorerDonnees.module.scss';

const ExplorerTerritoirePage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type, thematique } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);

  return (
    <div className={styles.explorerMesDonneesContainer}>
      <H1 style={{ color: "var(--principales-vert)", fontSize: '2rem' }}>
        Ce que les données suggèrent sur votre territoire
      </H1>
      <ClientOnly>
        <ExplorerConfortThermique carteCommunes={carteCommunes} />
      </ClientOnly>
      <div style={{ marginTop: "0rem" }} />
    </div>
  );
};

export default ExplorerTerritoirePage;
