import { Body } from "@/design-system/base/Textes";
import { AtlasBiodiversiteModel, SurfacesAgricolesModel } from "../postgres/models";
import { Round } from "../utils/reusableFunctions/round";

{/* Biodiversité */ }
export const SolsImpermeabilisesBiodiversiteDynamicText = ({
  sumNaf,
  atlasBiodiversite,
  type
}: {
  sumNaf: number | undefined;
  atlasBiodiversite: AtlasBiodiversiteModel[];
  type: string;
}) => {
  return (
    <>
      {
        sumNaf && sumNaf !== 0 && atlasBiodiversite.length === 0 ? (
          <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
            Entre 2009 et 2023, {Round(sumNaf / 10000, 1)} hectare(s) d'espaces naturels,
            agricoles ou forestiers ont été consommés sur votre territoire.
          </Body>
        ) : sumNaf && sumNaf !== 0 && atlasBiodiversite.length > 0 && type !== "commune" ? (
          <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
            Entre 2009 et 2023, {Round(sumNaf / 10000, 1)} hectare(s) d'espaces naturels,
            agricoles ou forestiers ont été consommés sur votre territoire. Face à ce constat,
            les Atlas de la biodiversité communale (ABC) apportent un outil
            précieux : {atlasBiodiversite.length} communes disposent (ou disposeront
            sous peu) d'un inventaire cartographié de leur faune, flore et habitats.
            Cet outil d'aide à la décision leur permet d'intégrer concrètement la biodiversité
            dans leurs politiques d'aménagement et constitue un levier privilégié pour limiter
            l'artificialisation des sols.
          </Body>
        ) : sumNaf && sumNaf !== 0 && atlasBiodiversite.length > 0 && type === "commune" ? (
          <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
            Entre 2009 et 2023, {Round(sumNaf / 10000, 1)} hectare(s) d'espaces naturels, agricoles
            ou forestiers ont été consommés sur votre commune. Face à cet enjeu, l'Atlas de
            la biodiversité communale lancé en {atlasBiodiversite[0].annee_debut}{" "}
            {atlasBiodiversite[0].avancement === "Fini" ? "apporte" : "apportera"} une réponse
            concrète : un inventaire cartographié détaillé de la faune, la flore et des habitats
            qui vous {atlasBiodiversite[0].avancement === "Fini" ? "permet" : "permettra"} d'intégrer
            concrètement la biodiversité dans votre politique d'aménagement et{" "}
            {atlasBiodiversite[0].avancement === "Fini" ? "constitue" : "constituera"} un levier
            privilégié pour limiter l'artificialisation des sols.
          </Body>
        ) : ""
      }
    </>
  );
};

export const SurfacesEnHerbeSynamicText = ({
  surfacesAgricoles,
  pourcentageSurfacesToujoursEnHerbe,
  type,
  territoiresPartiellementCouverts
}: {
  surfacesAgricoles: SurfacesAgricolesModel[];
  pourcentageSurfacesToujoursEnHerbe: number;
  type: string;
  territoiresPartiellementCouverts: string[] | undefined;
}) => {
  return (
    <>
      {
        surfacesAgricoles.length ? (
          <>
            {
              type === "commune" ? (
                <Body weight="bold" style={{ color: "var(--gris-dark)", paddingBottom: '1rem' }}>
                  Bien que cette donnée ne soit disponible qu'à l'échelle intercommunale,
                  elle reste révélatrice : avec {Round(pourcentageSurfacesToujoursEnHerbe, 1)} % de
                  surfaces toujours en herbe, votre EPCI dispose d'un indicateur clé de l'état
                  de sa biodiversité : plus cette part est élevée, plus les écosystèmes sont préservés
                </Body>
              ) : <Body weight="bold" style={{ color: "var(--gris-dark)" }}>
                Avec {Round(pourcentageSurfacesToujoursEnHerbe, 1)} % de surfaces toujours en herbe, votre territoire
                dispose d'un indicateur clé de l'état de sa biodiversité : plus cette part est élevée, plus
                les écosystèmes sont préservés.
              </Body>
            }
            {
              territoiresPartiellementCouverts && (type === "departement" || type === "pnr") && (
                <>
                  <Body style={{ color: "var(--gris-dark)" }}>
                    <br></br><b>À noter</b> : Ces données ne sont disponibles qu’à l’échelle
                    intercommunale. Ces {territoiresPartiellementCouverts?.length} EPCI débordent de
                    votre périmètre :
                    <ul style={{ margin: "0.5rem 0 0 1.5rem" }}>
                      {territoiresPartiellementCouverts?.map((epci, index) => (
                        <li key={index}><Body style={{ color: "var(--gris-dark)" }}>{epci}</Body></li>
                      ))}
                    </ul>
                  </Body>
                </>
              )
            }
          </>
        ) : <Body weight='bold' style={{ color: "var(--gris-dark)" }}>Il n’y a pas de données référencées sur le territoire que vous avez sélectionné</Body>
      }
    </>
  );
}

export const EtatCoursDeauDynamicText = () => {
  return (
    <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
      La carte ci-contre illustre l’état écologique des cours d’eau de votre territoire.
      Elle intègre aussi la qualité des sites de baignade dont les usages récréatifs (baignade,
      kayak, etc.) affectent les écosystèmes aquatiques.
    </Body>
  );
}
