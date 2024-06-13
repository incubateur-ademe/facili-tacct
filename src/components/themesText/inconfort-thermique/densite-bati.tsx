
import { GridCol } from "@/dsfr/layout";
import BarChart from "@/components/charts/BarChart";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dataDensiteBati from "@/lib/utils/age_bati.json";


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

// function processData(allRows: Row[], code: string, setRow: (row:any) => void) {
//   if (allRows.find(el => el['code_epci'] === Number(code))) {
//     let row: any = dataDensiteBati.find(el => el['code_epci'] === Number(code)) //REPLACE
//     var x = Object.keys(row).slice(3, 10)
//     var y = Object.values(row).slice(3, 10)
//     setRow(row);
//     return;
//   }  
// }

const DensiteBati = (props: Props) => {
	const { data, activeDataTab } = props;
	const searchParams = useSearchParams();
  const code = searchParams.get("code")!;

  // useEffect(() => {
  //   processData(dataDensiteBati, code, setRow);
  // }, [code]);


  return (
    <div style={{display:"flex", flexDirection:"row", gap: "1em", justifyContent: "space-between", alignItems:"center"}}>
			<GridCol lg={5}>
        <h4>LE CHIFFRE</h4>
			  	<p>Dans l'EPCI, .................</p>
			  <h4>EXPLICATION</h4>
			  <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis fermentum tortor. 
        Sed pellentesque ultrices justo id laoreet. Etiam dui augue, semper non eleifend eget, mollis sed erat. Praesent sollicitudin venenatis placerat. 
        Vivamus dignissim lorem nec mattis varius. Ut euismod placerat lacus, rutrum molestie leo ornare vitae. Pellentesque at neque tristique, 
        lobortis nisl quis, vestibulum enim. Vestibulum tempus venenatis dui volutpat dignissim. Donec sit amet ante vel enim vestibulum placerat. 
        Nunc volutpat urna in gravida volutpat. Donec cursus massa mollis mi egestas suscipit.
			  </p>
			</GridCol>
			<GridCol lg={6}>
				<div className="flex flex-col justify-end">
          <p style={{margin:"0 2em 0"}}>Titre</p>
          <h3>GRAPH</h3>
          <p>Source : <b>INSEE</b></p>
				</div>
			</GridCol>
		</div>
  )
}

export default DensiteBati;