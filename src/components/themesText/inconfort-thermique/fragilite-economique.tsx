
import { GridCol } from "@/dsfr/layout";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dataPrecariteLogMob_raw from "@/lib/utils/precarite-log-mob.json";
import Map from "@/components/maps/map";
import Legend from "@/components/maps/legend";

type DataEPCI = {
  type: string;
  features: EPCITypes[]
}

type EPCITypes = {
  type: string;  
  geometry: {
      type: string;
      coordinates: number[][][][];
  };
  properties: {
    EPCI_CODE: number;
    EPCI: string;
  };
}

type DataCommunes = {
  type: string;
  name: string;
  features: CommunesTypes[]
}

type CommunesTypes = {
  type: string;  
  geometry: {
      type: string;
      coordinates: number[][][][];
  };
  properties: {
    DCOE_C_COD: string;
    DDEP_C_COD: string;
    DCOE_L_LIB: string;
    REGION: string;
    REGION_COD: string;
    DEPARTEMEN: string;
    EPCI: string;
    EPCI_CODE: string;
    ratio_precarite: number;
  };
}

interface Row {
  "": number,
  "COMMUNE": string,
  "ratio_precarite_log": number,
  "TEE_log": number,
  "TEE_mob": number,
  "precarite_logement": number,
  "precarite_mobilite": number,
  "IPONDL_POUR_PRECA": number,
  "REG": number,
  "EPCI": number
}

interface Props {
	data: {
		id: number;
		titre: string;
		facteur_sensibilite: string;
		risque: string;
		donnee: string;
		graph: any;
	}[]
  activeDataTab: string;
  data_communes: DataCommunes;
  data_epci: DataEPCI;
}
const dataPrecariteLogMob = dataPrecariteLogMob_raw as Row[];

function processData(allRows: Row[], code: string, setRow: (row:any) => void) { 
  if (allRows.find(el => el.EPCI === Number(code))) {
    //console.log('allrows', allRows)
    let rows: any = dataPrecariteLogMob.filter(el => el["EPCI"] === Number(code)) //REPLACE
    setRow(rows);
    return;
  }  
}

const FragiliteEconomique = (props: Props) => {
	const { data, activeDataTab, data_communes, data_epci } = props;
	const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const [rows, setRow] = useState<Row[]>([]);

  //Sum of all ratio_precarite_log of municipalities in epci
  const ratio_precarite_log_epci: number = Number((rows.reduce( function(a, b) {
      return a + b['ratio_precarite_log'];
    }, 0) / rows.length))  
  
  //haute Sarthe : 200035103
  const epci_chosen = data_epci.features.find(el => el.properties.EPCI_CODE === Number(code))
  console.log('epci_chosen', epci_chosen)

  const commune_chosen = data_communes.features.filter(el => el.properties.EPCI_CODE === code)
  console.log('commune_chosen', commune_chosen)

  useEffect(() => {
    processData(dataPrecariteLogMob, code, setRow);
  }, [code]);
	

  return (
    <div style={{display:"flex", flexDirection:"row", gap: "1em", justifyContent: "space-between", alignItems:"center"}}>
			<GridCol lg={5}>
        <h4>LE CHIFFRE</h4>
			  	<p>Dans l'EPCI {epci_chosen?.properties["EPCI"]}, la part des ménages qui sont en situation de précarité énergique logement est de {(100 * ratio_precarite_log_epci).toPrecision(3)}%.</p>
			  <h4>EXPLICATION</h4>
			  <p>
          La précarité énergétique liée au logement concerne les ménages des 3 premiers déciles qui consacrent plus de 8% de leurs
				  revenus aux dépenses énergétiques liées à leur logement (chauffage, eau chaude, et ventilation).
          
			  </p>
			</GridCol>
			<GridCol lg={6}>
				<div className="flex flex-col justify-end">
          <p>Titre de la carte</p>
          <Legend/>
          <Map
            epci={epci_chosen}
            communes={commune_chosen}  
          />
          <p>Source : <b>INSEE</b></p>
				</div>
			</GridCol>
		</div>
  )
}

export default FragiliteEconomique;
