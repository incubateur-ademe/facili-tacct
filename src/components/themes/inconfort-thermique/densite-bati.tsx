import { useSearchParams } from "next/navigation";

import { GridCol } from "@/dsfr/layout";
import { Suspense, useEffect, useState } from "react";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { getEPCI } from "./actions/epci";
import { getCommunesFromEPCI } from "./actions/commune";
import Legend from "@/components/maps/legend";
import Map from "@/components/maps/map";
import { Loader } from "@/app/donnees-territoriales/loader";

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
  const densite_epci = communes_chosen?.map((el, i) => el.properties.densite_bati)

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
    {epci_chosen ? 
      <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1em",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <GridCol lg={5}>
        <h4>LE CHIFFRE</h4>
        {densite_epci ? 
          <p>Dans l'EPCI {epci_chosen?.properties.EPCI}, la densité moyenne du bâtiment est de {average(densite_epci).toFixed(2)}.</p>
          : ""
        }
        <h4>EXPLICATION</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis fermentum tortor. Sed pellentesque ultrices
          justo id laoreet. Etiam dui augue, semper non eleifend eget, mollis sed erat. Praesent sollicitudin venenatis
          placerat. Vivamus dignissim lorem nec mattis varius. Ut euismod placerat lacus, rutrum molestie leo ornare
          vitae. Pellentesque at neque tristique, lobortis nisl quis, vestibulum enim. Vestibulum tempus venenatis dui
          volutpat dignissim. Donec sit amet ante vel enim vestibulum placerat. Nunc volutpat urna in gravida volutpat.
          Donec cursus massa mollis mi egestas suscipit.
        </p>
      </GridCol>
      <GridCol lg={6}>
        <div className="flex flex-col justify-end">
          <p>Répartition de la densité du bâti par commune au sein de l'EPCI</p>
          <Legend data={"densite_bati"} />
          {epci_chosen && communes_chosen ? <Map epci={epci_chosen} communes={communes_chosen} data={"densite_bati"}/> : <Loader />}
          <p>
            Source : <b>INSEE</b>
          </p>
        </div>
      </GridCol>
    </div>
    : <GraphDataNotFound epci_chosen={epci_chosen} />
  }</>

  );
};
