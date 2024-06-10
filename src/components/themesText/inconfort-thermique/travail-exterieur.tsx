
import { GridCol } from "@/dsfr/layout";
import PieChart1 from "@/app/charts/pieChart1";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dataSocioEco from "@/lib/utils/cat_sociopro.json";

interface row {
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
  activeData: string;
  row: any; //REPLACE
}

const TravailExterieur = (props: Props) => {
	const { data, activeData, row } = props;

  const [values, setValues] = useState<number[] | unknown[]>([0, 0, 0, 0, 0, 0, 0]);
  const [graphData, setGraphData] = useState<graphData[]>([]);

	const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    //d3.csv("./evol75.csv", function(data){ processData(data) } )
    processData(dataSocioEco as any);
  }, []);
	

  function processData(allRows: row[]) {
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
			  	<p>Dans l'EPCI {row["Libellé de l'EPCI / Métropole"]}, la part des travailleurs en extérieur représente {row["75 ans et plus 2020"]} personnes dans la population</p>
			  <h4>EXPLICATION</h4>
			  <p>
			  	{data.find(el => el.titre === activeData)?.donnee}
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