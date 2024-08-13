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

export const FragiliteEconomique = ({ carteCommunes }: Props) => {
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
  //Mean of all ratio_precarite_log of municipalities in epci
  const precarite_log_epci: number = Number(
    db_parsed.reduce(function (a, b) {
      return a + b.properties["precarite_logement"];
    }, 0) / carteCommunes.length,
  );

  const title =
    "La précarité énergétique liée au logement concerne les ménages des 3 premiers déciles qui consacrent plus de 8% de leurs revenus aux dépenses énergétiques liées à leur logement (chauffage, eau chaude, et ventilation).";

  return (
    <>
      {carteCommunes ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {carteCommunes.length ? (
            <>
              <GridCol lg={5}>
                <div
                  style={{
                    backgroundColor: "#F9F9FF",
                    margin: "1em 0",
                    padding: "1em",
                    borderRadius: "0.5em",
                  }}
                >
                  <p>
                    Dans l'EPCI {db_parsed[0]?.properties["libelle_epci"]}, la part des ménages qui sont en situation de
                    précarité énergique logement est de <b>{(100 * precarite_log_epci).toPrecision(3)}%.</b>
                  </p>
                  <CustomTooltip title={title} />
                </div>
                <div>
                  <p>
                    La précarité énergétique liée au logement concerne les ménages des 3 premiers déciles qui consacrent
                    plus de 8% de leurs revenus aux dépenses énergétiques liées à leur logement (chauffage, eau chaude,
                    et ventilation).
                  </p>
                </div>
              </GridCol>
              <GridCol lg={7}>
                <div className="flex flex-col">
                  <p>
                    <b>Répartition de la précarité énergétique logement par commune au sein de l'EPCI</b>
                  </p>
                  <Legend data={"precarite_log"} />
                  <Map data={"precarite_log"} carteCommunes={db_parsed} />
                  <p>
                    Source : <b style={{ color: "#0063CB" }}>ONPE</b>
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
