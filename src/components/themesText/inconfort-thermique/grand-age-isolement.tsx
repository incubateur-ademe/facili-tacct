
import { GridCol } from "@/dsfr/layout";
import LineChart1 from "@/app/charts/lineChart1";

interface row {
  "": string,
  "Libellé de commune": string,
  "Code géographique": string,
  "Libellé géographique": string,
  "EPCI - Métropole": number,
  "Libellé de l'EPCI / Métropole": string,
  "Département": number,
  "Région": number,
  "75 ans et plus 1968": number,
  "75 ans et plus 1975": number,
  "75 ans et plus 1982": number,
  "75 ans et plus 1990": number,
  "75 ans et plus 1999": number,
  "75 ans et plus 2009": number,
  "75 ans et plus 2014": number,
  "75 ans et plus 2020": number
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
  row: any;
}

const GrandAgeIsolement = (props: Props) => {
	const { data, activeData, row } = props;

  return (
    <div style={{display:"flex", flexDirection:"row", gap: "1em", justifyContent: "space-between", alignItems:"center"}}>
			<GridCol lg={5}>
        <h4>LE CHIFFRE</h4>
			  	<p>Dans l'EPCI {row["Libellé de l'EPCI / Métropole"]}, les personnes de plus de 75 ans représentent {row["75 ans et plus 2020"]} personnes dans la population</p>
			  <h4>EXPLICATION</h4>
			  <p>
			  	{data.find(el => el.titre === activeData)?.donnee}
			  </p>
			</GridCol>
			<GridCol lg={6}>
				<div className="flex flex-col justify-end">
          <LineChart1/>
          <p>Source : <b>Observatoire des territoires</b></p>
				</div>
			</GridCol>
		</div>
  )
}

export default GrandAgeIsolement;