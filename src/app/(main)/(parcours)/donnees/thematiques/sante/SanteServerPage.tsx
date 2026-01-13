import { SearchParams } from "@/app/(main)/types";
import { GetCommunesCoordinates } from "@/lib/queries/postgis/cartographie";
import { DonneesSante } from "./DonneesSante";

const SanteServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const coordonneesCommunes = await GetCommunesCoordinates(code, libelle, type);

  return (
    <DonneesSante
      coordonneesCommunes={coordonneesCommunes}
    />
  );
};

export default SanteServerPage;
