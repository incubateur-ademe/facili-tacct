import { useSearchParams } from "next/navigation";

import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { Legend } from "@/components/maps/legend";
import { Map } from "@/components/maps/map";
import { CommunesIndicateursMapper } from "@/lib/mapper/communes";
import { CarteCommunes } from "@/lib/postgres/models";
import { CustomTooltip } from "@/utils/CalculTooltip";
import styles from "./themes.module.scss";

export const FragiliteEconomique = ({ carteCommunes }: {
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo");
  const codepci = searchParams.get("codepci")!;
  const communesMap = carteCommunes.map(CommunesIndicateursMapper);
  const commune = codgeo ? communesMap.find((obj) => obj.properties["code_commune"] === codgeo) : undefined;
  //Mean of all ratio_precarite_log of municipalities in epci
  const precariteLogEpci: number = Number(
    communesMap.reduce(function (a, b) {
      return a + b.properties["precarite_logement"];
    }, 0) / carteCommunes.length,
  );
  const precariteCommune: number = Number(
    commune ? commune.properties["precarite_logement"] : 0,
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
                  { commune ?
                    <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                      Dans la commune de {commune.properties.libelle_commune}, la part des ménages qui sont en situation de
                      précarité énergique logement est de <b>{(100 * precariteCommune).toPrecision(3)}%. </b> 
                      À l'échelle de l'EPCI, ce taux est de <b>{(100 * precariteLogEpci).toPrecision(3)}%.</b>
                    </p>
                    : 
                    <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                      Dans l'EPCI {communesMap[0]?.properties["libelle_epci"]}, la part des ménages qui sont en situation de
                      précarité énergique logement est de <b>{(100 * precariteLogEpci).toPrecision(3)}%.</b>
                    </p>
                  }
                  <CustomTooltip title={title} />
                </div>
                <div className="px-4">
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
            <GraphDataNotFound code={codgeo ? codgeo : codepci} />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
