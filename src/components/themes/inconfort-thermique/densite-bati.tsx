import { useSearchParams } from "next/navigation";

import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { Legend } from "@/components/maps/legend";
import { Map } from "@/components/maps/map";
import { CustomTooltip } from "@/components/utils/Tooltip";
import { GridCol } from "@/dsfr/layout";
import { CommunesIndicateursMapper } from "@/lib/mapper/communes";
import { CarteCommunes } from "@/lib/postgres/models";

const average = (array: number[]) => array.reduce((a: number, b: number) => a + b) / array.length;

export const DensiteBati = ({ carteCommunes }: {carteCommunes: CarteCommunes[]}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const communesMap = carteCommunes.map(CommunesIndicateursMapper);
  const densite_epci = communesMap.map((el, i) => el.properties.densite_bati);

  const title = "(surface au sol de la construction x hauteur du bâtiment) / surface totale de la commune";
  return (
    <>
      {communesMap ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {communesMap.length ? (
            <>
              <GridCol lg={4}>
                <div
                  style={{
                    backgroundColor: "#F9F9FF",
                    margin: "1em 0",
                    padding: "1em",
                    borderRadius: "0.5em",
                  }}
                >
                  {densite_epci ? (
                    <p style={{color: "#161616"}}>
                      Dans l'EPCI {communesMap[0]?.properties["libelle_epci"]}, la densité moyenne du bâtiment est de{" "}
                      <b>{average(densite_epci).toFixed(2)}</b>.
                    </p>
                  ) : (
                    ""
                  )}
                  <CustomTooltip title={title} />
                </div>
                <p>
                  Il existe de nombreux indicateurs pour mesurer la densité du bâti. La formule de calcul choisie ici
                  est la suivante : <br></br>
                  <br></br>
                  <b>(surface au sol de la construction x hauteur du bâtiment) / surface totale de la commune</b>
                </p>
              </GridCol>
              <GridCol lg={7}>
                <div className="flex flex-col">
                  <Legend data={"densite_bati"} />
                  <p>
                    <b>Répartition de la densité du bâti par commune au sein de l'EPCI</b>
                  </p>
                  <Map data={"densite_bati"} carteCommunes={communesMap} />
                  <p>
                    Source : <b style={{ color: "#0063CB" }}>Base de Données Nationale Des Bâtiments – BDNB</b>
                  </p>
                </div>
              </GridCol>
            </>
          ) : (
            <GraphDataNotFound code={code} />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
