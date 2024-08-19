import { useSearchParams } from "next/navigation";

import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { Legend } from "@/components/maps/legend";
import { Map } from "@/components/maps/map";
import { CustomTooltip } from "@/components/utils/Tooltip";
import { GridCol } from "@/dsfr/layout";
import { CommunesIndicateursMapper } from "@/lib/mapper/communes";
import { CarteCommunes } from "@/lib/postgres/models";

export const FragiliteEconomique = ({ carteCommunes }: {
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const communesMap = carteCommunes.map(CommunesIndicateursMapper);

  //Mean of all ratio_precarite_log of municipalities in epci
  const precarite_log_epci: number = Number(
    communesMap.reduce(function (a, b) {
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
                  <p style={{color: "#161616"}}>
                    Dans l'EPCI {communesMap[0]?.properties["libelle_epci"]}, la part des ménages qui sont en situation de
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
                  <Map data={"precarite_log"} carteCommunes={communesMap} />
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
