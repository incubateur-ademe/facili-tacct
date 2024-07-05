import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Loader } from "@/app/donnees-territoriales/loader";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import Legend from "@/components/maps/legend";
import Map from "@/components/maps/map";
import { GridCol } from "@/dsfr/layout";

import { getCommunesFromEPCI } from "./actions/commune";
import { getEPCI } from "./actions/epci";

interface Props {
  activeDataTab: string;
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
}

const average = (array: number[]) => array.reduce((a: number, b: number) => a + b) / array.length;

export const DensiteBati = (props: Props) => {
  const { data, activeDataTab } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const [epci_chosen, setEpci_chosen] = useState<EPCITypes>();
  const [communes_chosen, setCommunes_chosen] = useState<CommunesTypes[]>();
  const densite_epci = communes_chosen?.map((el, i) => el.properties.densite_bati);

  useEffect(() => {
    void (async () => {
      // const dataPLBrows = await getPrecariteLogMobsFromEPCI(Number(code));
      // if (dataPLBrows.length) {
      //   setRows(dataPLBrows);
      // }
      setEpci_chosen(await getEPCI(Number(code)));
      setCommunes_chosen(await getCommunesFromEPCI(code));
    })();
  }, [code]);

  return (
    <>
      {epci_chosen ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {epci_chosen && communes_chosen ? (
            <>
              <GridCol lg={4}>
                <h4>LE CHIFFRE</h4>
                {densite_epci ? (
                  <p>
                    Dans l'EPCI {epci_chosen?.properties.EPCI}, la densité moyenne du bâtiment est de <b>{average(densite_epci).toFixed(2)}</b>.
                  </p>
                ) : (
                  ""
                )}
                <h4>DÉFINITION</h4>
                <p>
                  Il existe de nombreux indicateurs pour mesurer la densité du bâti.
                  La formule de calcul choisie ici est la suivante : <br></br><br></br>
                  <b>(surface au sol de la construction x hauteur du bâtiment) / surface totale de la commune</b>
                </p>
              </GridCol>
              <GridCol lg={7}>
                <div className="flex flex-col justify-end">
                  <Legend data={"densite_bati"} />
                  <p>
                    <b>Répartition de la densité du bâti par commune au sein de l'EPCI</b>
                  </p>
                    <Map epci={epci_chosen} communes={communes_chosen} data={"densite_bati"} />
                  <p>
                    Source : <b>Base de Données Nationale Des Bâtiments – BDNB</b>
                  </p>
                </div>
              </GridCol>
            </>
          ) : (
            <Loader />
          )}
        </div>
      ) : (
        <GraphDataNotFound code={code} />
      )}
    </>
  );
};
