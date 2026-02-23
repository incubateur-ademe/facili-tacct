import { SearchParams } from '@/app/(main)/types';
import { GetO3 } from '@/lib/queries/databases/sante';
import { GetCommunesCoordinates } from '@/lib/queries/postgis/cartographie';
import { DonneesSante } from './DonneesSante';

const SanteServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const coordonneesCommunes = await GetCommunesCoordinates(code, libelle, type);
  const dbO3 = await GetO3();

  return <DonneesSante coordonneesCommunes={coordonneesCommunes} o3={dbO3} />;
};

export default SanteServerPage;
