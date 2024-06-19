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

export const DensiteBati = (props: Props) => {
  const { data, activeDataTab } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const [epci_chosen, setEpci_chosen] = useState<EPCITypes>();
  const [communes_chosen, setCommunes_chosen] = useState<CommunesTypes[]>();

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
    {2<3 ? 
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
        <p>Dans l'EPCI, .................</p>
        <h4>EXPLICATION</h4>
        <p>
          {epci_chosen?.properties.EPCI} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis fermentum tortor. Sed pellentesque ultrices
          justo id laoreet. Etiam dui augue, semper non eleifend eget, mollis sed erat. Praesent sollicitudin venenatis
          placerat. Vivamus dignissim lorem nec mattis varius. Ut euismod placerat lacus, rutrum molestie leo ornare
          vitae. Pellentesque at neque tristique, lobortis nisl quis, vestibulum enim. Vestibulum tempus venenatis dui
          volutpat dignissim. Donec sit amet ante vel enim vestibulum placerat. Nunc volutpat urna in gravida volutpat.
          Donec cursus massa mollis mi egestas suscipit.
        </p>
      </GridCol>
      <GridCol lg={6}>
        <div className="flex flex-col justify-end">
          <p>Titre de la carte</p>
          <Legend />
          {epci_chosen && communes_chosen ? <Map epci={epci_chosen} communes={communes_chosen} /> : <Loader />}
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
