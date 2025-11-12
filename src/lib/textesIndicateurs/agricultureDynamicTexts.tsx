import { Body } from "@/design-system/base/Textes";
import { TableCommuneModel } from "../postgres/models";
import { Round } from "../utils/reusableFunctions/round";

export const PartExploitationSeniorsDynamicText = ({
  partOver55,
  type,
}: {
  partOver55: TableCommuneModel[];
  type: string;
}) => {
  const nombreSecretStatistique = partOver55.filter(tc => tc.agriculture_part_over_55 === "NaN").length;
  const meanPartOver55 = type === "commune"
    ? Number(partOver55[0]?.agriculture_part_over_55)
    : partOver55.filter(
      tc => tc.agriculture_part_over_55 !== "NaN"
    ).reduce(
      (acc, curr) => acc + Number(curr.agriculture_part_over_55 || 0), 0
    ) / partOver55.length;

  return (
    <>
      {
        partOver55.length ? (
          <>
            {
              type === "commune" ? (
                isNaN(meanPartOver55) ?
                  <Body weight="bold" style={{ color: "var(--gris-dark)", paddingBottom: '1rem' }}>
                    Cette donnée est sous secret statistique. Cette règle s'applique aux statistiques agrégées si elles
                    rendent possible la déduction d'informations individuelles.
                  </Body>
                  : meanPartOver55 === 0 ?
                    <Body weight="bold" style={{ color: "var(--gris-dark)", paddingBottom: '1rem' }}>
                      D’après le recensement agricole de 2020, aucun chef d’exploitation n’a été identifié sur votre territoire.
                      Cette absence peut refléter une limite du recensement ou une réalité locale spécifique.
                    </Body>
                    : <Body weight="bold" style={{ color: "var(--gris-dark)", paddingBottom: '1rem' }}>
                      En 2020, {Round(meanPartOver55, 1)} % des exploitations de votre commune étaient dirigées par des agriculteurs
                      de plus de 55 ans – un enjeu clé pour l’avenir.
                    </Body>
              ) : type === "departement" ? (
                <Body weight="bold" style={{ color: "var(--gris-dark)" }}>
                  En 2020, {Round(meanPartOver55, 1)} % des exploitations de votre commune étaient dirigées par des agriculteurs
                  de plus de 55 ans – un enjeu clé pour l’avenir.
                </Body>
              ) : (
                <Body weight="bold" style={{ color: "var(--gris-dark)" }}>
                  Votre territoire comptait en moyenne {Round(meanPartOver55, 1)} % de chefs d’exploitation de plus de 55 ans en 2020.
                  {nombreSecretStatistique > 0 && (
                    <><br></br>À noter : {nombreSecretStatistique} donnée(s) communale(s), soumises au secret 
                    statistique, ne sont pas incluses dans ce calcul.</>
                  )}
                </Body>
              )
            }
          </>
        ) : <Body weight='bold' style={{ color: "var(--gris-dark)" }}>Il n’y a pas de données référencées sur le territoire que vous avez sélectionné</Body>
      }
    </>
  );
}
