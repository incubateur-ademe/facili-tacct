
import { GridCol } from "@/dsfr/layout";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dataAgeBati from "@/lib/utils/age_bati.json";
import Map from "@/components/maps/map";
import Legend from "@/components/maps/legend";
import data_epci from "@/lib/utils/maps/epci.json";
import data_communes from "@/lib/utils/maps/commune.json";


type moule = {
  type: string;
  name: string;
  features: communesTypes[]
}

type communesTypes = {
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
} | {
  type: string;
  geometry: {
    type: string;
    coordinates: number[][][];
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
} | undefined


interface row {
  "code_epci": number,
  "part_rp_ach06p": number,
  "part_rp_ach9105": number,
  "part_rp_ach4690": number,
  "part_rp_ach1945": number,
  "part_rp_ach19": number
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
  activeData: string;
  row: any; //REPLACE
}

const FragiliteEconomique = (props: Props) => {
	const { data, activeData, row } = props;
	const searchParams = useSearchParams();
  const code = searchParams.get("code");

  //haute Sarthe : 200035103
  const epci_chosen = data_epci.features.find(el => el.properties.EPCI_CODE === Number(code))
  console.log('epci_chosen', epci_chosen)

  const commune_chosen: moule = data_communes.features.filter(el => el.properties.EPCI_CODE === code)
  console.log('commune_chosen', commune_chosen)

  useEffect(() => {
    processData(dataAgeBati);
  }, []);
	

  function processData(allRows: row[]) {
    if (allRows.find(el => el['code_epci'] === Number(code))) {
      let row: any = dataAgeBati.find(el => el['code_epci'] === Number(code)) //REPLACE
      var x = Object.keys(row).slice(3, 10)
      var y = Object.values(row).slice(3, 10)
      return;
    }  
  }

  return (
    <div style={{display:"flex", flexDirection:"row", gap: "1em", justifyContent: "space-between", alignItems:"center"}}>
			<GridCol lg={5}>
        <h4>LE CHIFFRE</h4>
			  	<p>Dans l'EPCI {row["code_epci"]}, </p>
			  <h4>EXPLICATION</h4>
			  <p>
			  	{data.find(el => el.titre === activeData)?.donnee}
			  </p>
			</GridCol>
			<GridCol lg={6}>
				<div className="flex flex-col justify-end">
          <Legend/>
          <Map
            epci={epci_chosen}
            communes={commune_chosen}  
          />
          <p>Source : <b>??????</b></p>
				</div>
			</GridCol>
		</div>
  )
}

export default FragiliteEconomique;