import { useSearchParams } from "next/navigation";

import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { Legend } from "@/components/maps/legend";
import { Map } from "@/components/maps/map";
import { CustomTooltip } from "@/components/utils/CalculTooltip";
import { CommunesIndicateursMapper } from "@/lib/mapper/communes";
import { CarteCommunes } from "@/lib/postgres/models";
import styles from "./themes.module.scss";

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
        <div className={styles.container}>
          {carteCommunes.length ? (
            <>
              <div className="w-2/5">
                <div className={styles.explicationWrapper}>
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
              </div>
              <div className="w-3/5">
                <div className={styles.graphWrapper}>
                  <p style={{padding: "1em", margin: "0"}}>
                    <b>Répartition de la précarité énergétique logement par commune au sein de l'EPCI</b>
                  </p>
                  <Legend data={"precarite_log"} />
                  <Map data={"precarite_log"} carteCommunes={communesMap} />
                  <p style={{padding: "1em", margin: "0"}}>
                    Source : <b style={{ color: "#0063CB" }}>ONPE</b>
                  </p>
                </div>
              </div>
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
