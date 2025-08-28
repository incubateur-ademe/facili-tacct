import { GetInconfortThermique } from "@/lib/queries/databases/inconfortThermique";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import DonneesConfortThermique from "./DonneesConfortThermique";

const ConfortThermiqueServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbInconfortThermique = await GetInconfortThermique(code, libelle, type);

  return (
    <DonneesConfortThermique
      carteCommunes={carteCommunes}
      inconfortThermique={dbInconfortThermique}
    />
  );
};

export default ConfortThermiqueServerPage;
