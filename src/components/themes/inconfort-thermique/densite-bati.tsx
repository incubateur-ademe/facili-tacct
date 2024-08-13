import { useSearchParams } from "next/navigation";

import { type CarteCommunes } from "@/app/donnees-territoriales/type";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { Legend } from "@/components/maps/legend";
import { Map } from "@/components/maps/map";
import { CustomTooltip } from "@/components/utils/Tooltip";
import { GridCol } from "@/dsfr/layout";

interface Props {
  carteCommunes: CarteCommunes[];
}

type Geometry = {
  coordinates: number[][][][];
  type: string;
};

const average = (array: number[]) => array.reduce((a: number, b: number) => a + b) / array.length;

export const DensiteBati = ({ carteCommunes }: Props) => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const db_parsed = carteCommunes.map(function (elem: CarteCommunes) {
    return {
      type: "Feature",
      properties: {
        epci: elem.epci,
        libelle_epci: elem.libelle_epci,
        libelle_commune: elem.libelle_commune,
        code_commune: elem.code_commune,
        precarite_logement: elem.precarite_logement,
        densite_bati: elem.densite_bati,
        coordinates: elem.coordinates,
      },
      geometry: JSON.parse(elem.geometry) as Geometry,
    };
  });
  const densite_epci = db_parsed.map((el, i) => el.properties.densite_bati);

  const title = "(surface au sol de la construction x hauteur du bâtiment) / surface totale de la commune";
  return (
    <>
      {db_parsed ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {db_parsed.length ? (
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
                    <p>
                      Dans l'EPCI {db_parsed[0]?.properties["libelle_epci"]}, la densité moyenne du bâtiment est de{" "}
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
                  <Map data={"densite_bati"} carteCommunes={db_parsed} />
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
