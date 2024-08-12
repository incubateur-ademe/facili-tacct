import { useSearchParams } from "next/navigation";

import { type DbFiltered } from "@/app/_searchBar/type";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { Legend } from "@/components/maps/legend";
import { Map } from "@/components/maps/map";
import { GridCol } from "@/dsfr/layout";

interface Props {
  db_filtered: DbFiltered[];
}

type Geometry = {
  coordinates: number[][][][];
  type: string;
};

const average = (array: number[]) => array.reduce((a: number, b: number) => a + b) / array.length;

export const DensiteBati = ({ db_filtered }: Props) => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const db_parsed = db_filtered.map(function (elem: DbFiltered) {
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

  return (
    <>
      {db_parsed ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {db_parsed.length ? (
            <>
              <GridCol lg={4}>
                <h4>LE CHIFFRE</h4>
                {densite_epci ? (
                  <p>
                    Dans l'EPCI {db_parsed[0]?.properties["libelle_epci"]}, la densité moyenne du bâtiment est de{" "}
                    <b>{average(densite_epci).toFixed(2)}</b>.
                  </p>
                ) : (
                  ""
                )}
                <h4>DÉFINITION</h4>
                <p>
                  Il existe de nombreux indicateurs pour mesurer la densité du bâti. La formule de calcul choisie ici
                  est la suivante : <br></br>
                  <br></br>
                  <b>(surface au sol de la construction x hauteur du bâtiment) / surface totale de la commune</b>
                </p>
              </GridCol>
              <GridCol lg={7}>
                <div className="flex flex-col justify-end">
                  <Legend data={"densite_bati"} />
                  <p>
                    <b>Répartition de la densité du bâti par commune au sein de l'EPCI</b>
                  </p>
                  <Map data={"densite_bati"} db_filtered={db_parsed} />
                  <p>
                    Source : <b>Base de Données Nationale Des Bâtiments – BDNB</b>
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
