import { SearchParams } from "@/app/(main)/types";
import { TableCommuneModel } from "@/lib/postgres/models";
import { GetConfortThermique, GetInconfortThermique } from "@/lib/queries/databases/inconfortThermique";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import DonneesConfortThermique from "./DonneesConfortThermique";

const ConfortThermiqueServerPage = async (props: {
  searchParams: SearchParams
  tableCommune: TableCommuneModel[]
}) => {
  const { code, libelle, type } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbInconfortThermique = await GetInconfortThermique(code, libelle, type);
  const dbConfortThermique = await GetConfortThermique(code, libelle, type);

  return (
    <DonneesConfortThermique
      carteCommunes={carteCommunes}
      inconfortThermique={dbInconfortThermique}
      confortThermique={dbConfortThermique}
      tableCommune={props.tableCommune}
    />
  );
};

export default ConfortThermiqueServerPage;
