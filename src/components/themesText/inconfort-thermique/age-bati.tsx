
import { GridCol } from "@/dsfr/layout";
import BarChart from "@/components/charts/BarChart";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dataAgeBati from "@/lib/utils/age_bati.json";

interface Row {
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
  activeDataTab: string;
}

function processData(allRows: Row[], code: string, setRow: (row:any) => void) {
  if (allRows.find(el => el['code_epci'] === Number(code))) {
    let row: any = dataAgeBati.find(el => el['code_epci'] === Number(code)) //REPLACE
    var x = Object.keys(row).slice(3, 10)
    var y = Object.values(row).slice(3, 10)
    setRow(row);
    return;
  }  
}

const AgeBati = (props: Props) => {
	const { data, activeDataTab } = props;
  const [row, setRow] = useState<Row>({
    "code_epci": 0,
    "part_rp_ach06p": 0,
    "part_rp_ach9105": 0,
    "part_rp_ach4690": 0,
    "part_rp_ach1945": 0,
    "part_rp_ach19": 0
  });
	const searchParams = useSearchParams();
  const code = searchParams.get("code")!;

  useEffect(() => {
    processData(dataAgeBati, code, setRow);
  }, [code]);


  return (
    <div style={{display:"flex", flexDirection:"row", gap: "1em", justifyContent: "space-between", alignItems:"center"}}>
			<GridCol lg={5}>
        <h4>LE CHIFFRE</h4>
			  	<p>Dans l'EPCI {row["code_epci"]}, Nb [ou %] de résidences principales construites avant 2018 selon leur période d'achèvement.</p>
			  <h4>EXPLICATION</h4>
			  <p>
          La robustesse des logements face aux températures élevées dépend leur qualité intrinsèque (inertie thermique, présence de volets extérieurs, 
          qualité des rénovations...). 
          Si vous ne disposez pas d'étude spécifique sur le sujet, la période de construction, 
          fournie par l'INSEE, vous donne une première approximation.
			  </p>
			</GridCol>
			<GridCol lg={6}>
				<div className="flex flex-col justify-end">
          <p style={{margin:"0 2em 0"}}>Titre</p>
          <BarChart/>
          <p>Source : <b>Observatoire des territoires</b></p>
				</div>
			</GridCol>
		</div>
  )
}

export default AgeBati;