
import { GridCol } from "@/dsfr/layout";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dataSocioEco from "@/lib/json-db/cat-sociopro.json";
import PieChart1 from "@/components/charts/pieChart1"

interface Row {
  "Code": number,
  "Libellé": string,
  "Nombre de personnes en âge de travailler (15-64 ans) 2020": number,
  "Part des \"agriculteurs exploitants\" dans la population 2020": number,
  "Part des \"artisans, commerçants, chefs d'entreprise\" dans la population 2020": number,
  "Part des \"ouvriers\" dans la population 2020": number,
  "Part des \"employés\" dans la population 2020": number,
  "Part des \"professions intermédiaires\" dans la population 2020": number,
  "Part des \"cadres et professions intellectuelles supérieures\" dans la population 2020": number,
  "Part des \"retraités\" dans la population 2020": number,
  "Nombre d'actifs de 15-64 ans 2020": number,
  "Nombre d'inactifs de 15-64 ans 2020": number,
  "Taux d'activité des 15-64 ans 2020": number
}

interface graphData {
  "id": string,
  "label": string,
  "value": number | undefined,
  "color": string
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

const TravailExterieur = (props: Props) => {
	const { data, activeDataTab, data_communes, data_epci } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const epci_chosen = data_epci.features.find(el => el.properties.EPCI_CODE === Number(code));
  const commune_chosen = data_communes.features.filter(el => el.properties.EPCI_CODE === code);
  const [values, setValues] = useState<number[] | unknown[]>([0, 0, 0, 0, 0, 0, 0]);
  const [graphData, setGraphData] = useState<graphData[]>([]);


  useEffect(() => {
    processData(dataSocioEco as any);
  }, []);
	

  function processData(allRows: Row[]) {
    if (allRows.find(el => el['Code'] === Number(code))) {
      let row: any = dataSocioEco.find(el => el['Code'] === Number(code)) //REPLACE
      var x = Object.keys(row).slice(3, 10)
      var y = Object.values(row).slice(3, 10)
      setValues(y);
      var sum = y.reduce((partialSum: number, a: any) => partialSum + a, 0); //REPLACE
      var travailExt = Number(y.at(0)) + Number(y.at(2))
      
      setGraphData([
        {
          "id": "Artisans, commerçants, chefs d'entreprise",
          "label": "Commerçants",
          "value": Number(y.at(1)),
          "color": "#68D273"
        },
        {
          "id": "Travail en extérieur (Ouvriers et agriculteurs)",
          "label": "Travail en extérieur",
          "value": Number(travailExt.toFixed(1)),
          "color": "#97e3d5"
        },
        {
          "id": "Employés",
          "label": "Employés",
          "value": Number(y.at(3)),
          "color": "#61cdbb"
        },
        {
          "id": "Professions intermédiaires",
          "label": "Professions intermédiaires",
          "value": Number(y.at(4)),
          "color": "#e8a838"
        },
        {
          "id": "Cadres",
          "label": "Cadres",
          "value": Number(y.at(5)),
          "color": "#f1e15b"
        },
        {
          "id": "Retraités",
          "label": "Retraités",
          "value": Number(y.at(6)),
          "color": "#f47560"
        },
        {
          "id": "Autre",
          "label": "Autre",
          "value": Number((100 - sum).toFixed(1)),
          "color": "#e8c1a0"
        }
      ])
      return;
    }  
  }

  return (
    <div style={{display:"flex", flexDirection:"row", gap: "1em", justifyContent: "space-between", alignItems:"center"}}>
			<GridCol lg={5}>
        <h4>LE CHIFFRE</h4>
			  	<p>Dans l'EPCI {epci_chosen?.properties.EPCI}, la part des travailleurs en extérieur représente {["75 ans et plus 2020"]} personnes dans la population</p>
			  <h4>EXPLICATION</h4>
			  <p>
			  	{data.find(el => el.titre === activeDataTab)?.donnee}
			  </p>
			</GridCol>
			<GridCol lg={6}>
				<div className="flex flex-col justify-end">
          <PieChart1/>
          <p>Source : <b>Observatoire des territoires</b></p>
				</div>
			</GridCol>
		</div>
  )
}

export default TravailExterieur;