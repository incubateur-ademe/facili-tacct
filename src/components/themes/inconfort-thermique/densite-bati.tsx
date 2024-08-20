import { useSearchParams } from "next/navigation";

import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { Legend } from "@/components/maps/legend";
import { Map } from "@/components/maps/map";
import { CustomTooltip } from "@/components/utils/CalculTooltip";
import { CommunesIndicateursMapper } from "@/lib/mapper/communes";
import { CarteCommunes } from "@/lib/postgres/models";
import styles from "./themes.module.scss";

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
        <div className={styles.container}>
          {communesMap.length ? (
            <>
              <div className="w-2/5">
                <div className={styles.explicationWrapper}>
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
              </div>
              <div className="w-3/5">
                <div className={styles.graphWrapper}>
                  <Legend data={"densite_bati"} />
                  <p style={{ padding: "1em", margin: "0" }}>
                    <b>Répartition de la densité du bâti par commune au sein de l'EPCI</b>
                  </p>
                  <Map data={"densite_bati"} carteCommunes={communesMap} />
                  <p style={{ padding: "1em", margin: "0" }}>
                    Source : <b style={{ color: "#0063CB" }}>Base de Données Nationale Des Bâtiments – BDNB</b>
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
