import { useSearchParams } from "next/navigation";

import { Loader } from "@/components/loader";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import Legend from "@/components/maps/legend";
import Map from "@/components/maps/map";
import { GridCol } from "@/dsfr/layout";

interface Props {
  activeDataTab: string;
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  db_filtered: Array<{
    type: string;
    geometry: any;
    properties:any;
  }>
  // data_communes: DataCommunes;
  // data_epci: DataEPCI;
}
// const dataPrecariteLogMob = dataPrecariteLogMob_raw as Row[];

export const FragiliteEconomique = (props: Props) => {
  const { db_filtered } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;

  //Mean of all ratio_precarite_log of municipalities in epci
  const precarite_log_epci: number = Number(
    db_filtered.reduce(function (a, b) {
      return a + b.properties["precarite_logement"];
    }, 0) / db_filtered.length,
  );
  // console.log('db_filtered', precarite_log_epci)

  return (
    <>
      {db_filtered ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {db_filtered.length ? (
            <>
              <GridCol lg={4}>
                <h4>LE CHIFFRE</h4>
                <p>
                  Dans l'EPCI {db_filtered[0]?.properties["libelle_epci"]}, la part des ménages qui sont en situation de précarité
                  énergique logement est de <b>{(100 * precarite_log_epci).toPrecision(3)}%.</b>
                </p>
                <h4>EXPLICATION</h4>
                <p>
                  La précarité énergétique liée au logement concerne les ménages des 3 premiers déciles qui consacrent
                  plus de 8% de leurs revenus aux dépenses énergétiques liées à leur logement (chauffage, eau chaude, et
                  ventilation).
                </p>
              </GridCol>
              <GridCol lg={7}>
                <div className="flex flex-col justify-end">
                  <p>
                    <b>Répartition de la précarité énergétique logement par commune au sein de l'EPCI</b>
                  </p>
                  <Legend data={"precarite_log"} />
                  <Map data={"precarite_log"} db_filtered={db_filtered} />
                  <p>
                    Source : <b>ONPE</b>
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
