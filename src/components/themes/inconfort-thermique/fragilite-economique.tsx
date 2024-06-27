import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Loader } from "@/app/donnees-territoriales/loader";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import Legend from "@/components/maps/legend";
// import dataPrecariteLogMob_raw from "@/lib/json-db/precarite-log-mob.json";
import Map from "@/components/maps/map";
import { GridCol } from "@/dsfr/layout";

import { getCommunesFromEPCI } from "./actions/commune";
import { getEPCI } from "./actions/epci";
import { getPrecariteLogMobsFromEPCI } from "./actions/precarite-log-mob";

type DataEPCI = {
  features: EPCITypes[];
  type: string;
};

type EPCITypes = {
  geometry: {
    coordinates: number[][][][];
    type: string;
  };
  properties: {
    EPCI: string;
    EPCI_CODE: number;
  };
  type: string;
};

type DataCommunes = {
  features: CommunesTypes[];
  name: string;
  type: string;
};

type CommunesTypes = {
  geometry: {
    coordinates: number[][][][];
    type: string;
  };
  properties: {
    DCOE_C_COD: string;
    DCOE_L_LIB: string;
    // DDEP_C_COD: string;
    // DEPARTEMEN: string;
    EPCI: string;
    EPCI_CODE: string;
    // REGION: string;
    // REGION_COD: string;
    ratio_precarite: number;
  };
  type: string;
};

interface Row {
  "": number;
  COMMUNE: string;
  EPCI: number;
  IPONDL_POUR_PRECA: number;
  REG: number;
  TEE_log: number;
  TEE_mob: number;
  precarite_logement: number;
  precarite_mobilite: number;
  ratio_precarite_log: number;
}

interface Props {
  activeDataTab: string;
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  // data_communes: DataCommunes;
  // data_epci: DataEPCI;
}
// const dataPrecariteLogMob = dataPrecariteLogMob_raw as Row[];

export const FragiliteEconomique = (props: Props) => {
  const { data, activeDataTab } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const [rows, setRows] = useState<Row[]>([]);
  const [epci_chosen, setEpci_chosen] = useState<EPCITypes>();
  const [communes_chosen, setCommunes_chosen] = useState<CommunesTypes[]>();

  //Sum of all ratio_precarite_log of municipalities in epci
  const ratio_precarite_log_epci: number = Number(
    rows.reduce(function (a, b) {
      return a + b["ratio_precarite_log"];
    }, 0) / rows.length,
  );

  useEffect(() => {
    void (async () => {
      const dataPLBrows = await getPrecariteLogMobsFromEPCI(Number(code));
      if (dataPLBrows.length) {
        setRows(dataPLBrows);
      }
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
          <GridCol lg={4}>
            <h4>LE CHIFFRE</h4>
            <p>
              Dans l'EPCI {epci_chosen?.properties["EPCI"]}, la part des ménages qui sont en situation de précarité
              énergique logement est de {(100 * ratio_precarite_log_epci).toPrecision(3)}%.
            </p>
            <h4>EXPLICATION</h4>
            <p>
              La précarité énergétique liée au logement concerne les ménages des 3 premiers déciles qui consacrent plus
              de 8% de leurs revenus aux dépenses énergétiques liées à leur logement (chauffage, eau chaude, et
              ventilation).
            </p>
          </GridCol>
          <GridCol lg={7}>
            <div className="flex flex-col justify-end">
              <p>
                <b>Répartition de la précarité énergétique logement par commune au sein de l'EPCI</b>
              </p>
              <Legend data={"precarite_log"} />
              {epci_chosen && communes_chosen ? (
                <Map epci={epci_chosen} communes={communes_chosen} data={"precarite_log"} />
              ) : (
                <Loader />
              )}
              <p>
                Source : <b>INSEE</b>
              </p>
            </div>
          </GridCol>
        </div>
      ) : (
        <GraphDataNotFound code={code} />
      )}
    </>
  );
};
