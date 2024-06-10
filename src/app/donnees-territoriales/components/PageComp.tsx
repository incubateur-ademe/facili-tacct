import { GridCol } from "../../../dsfr/layout";
import GraphExample from "../../../assets/images/Group.svg";
import { fr } from "@codegouvfr/react-dsfr";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import dataTest from "../../../lib/utils/dataTest.json";
import { Button } from "@codegouvfr/react-dsfr/Button";
import styles from "./../donnees.module.scss";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react";
import GraphComp from "./GraphComp";

interface Props {
	data: {
		id: number;
		titre: string;
		facteur_sensibilite: string;
		risque: string;
		donnee: string;
		graph: any
	}[]
	activeTab: string;
	setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const PageComp = (props: Props) => {
	const { data, activeTab, setActiveTab } = props;
	const [activeData, setActiveData] = useState("");
	const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);

	const router = useRouter();
	const searchParams = useSearchParams();
  const code = searchParams.get("code");
	console.log('code', code)
  const themeUrl = searchParams.get("thematique");
	const { isDark } = useIsDark();
 	const darkClass = {
  		backgroundColor: fr.colors.getHex({isDark}).decisions.background.default.grey.active,
  		"&:hover": {
  		  backgroundColor: fr.colors.getHex({isDark}).decisions.background.alt.grey.hover
  	},
	}
	
  console.log('x in PAGECOMP', xData)
  console.log('y in PAGECOMP', yData)

  function processData(allRows: any) {
    //"Corbonod"
    if (allRows.find(el => el['EPCI - Métropole'] === code)) {
      console.log('allRows in PAGECOMP', allRows)
      let row = dataTest.find(el => el['EPCI - Métropole'] === Number(code))
      var x = Object.keys(row as any).slice(8, 16)
      var y = Object.values(row as any).slice(8, 16)
      // console.log('xPROCESS', x)
      // console.log('yPROCESS', y)
      setXData(x)
      setYData(y)
      return;
    }  
  }

	useEffect(() => {
		setActiveData(data.filter(el => el.facteur_sensibilite === activeTab)[0].titre)
		processData(dataTest);
  }, [activeTab]);



	const handleForward = () => {
			router.push(`/etape3?code=${code}&thematique=${themeUrl}`)
   }
  return (
		<>
			<div>
				<div className={styles.titles}>
					{data.filter(el => el.facteur_sensibilite === activeTab).map((element, i) => (
						<button 
							className={styles.button}
							onClick={() => {
								setActiveData(element.titre)
							}}>{element.titre}</button>
					))}
    		</div>
    		<div className={styles.bubble}>
					<div className={styles.bubbleContent} style={darkClass}>
						<div style={{display:"flex", flexDirection:"row", gap: "1em", justifyContent: "space-between", alignItems:"center"}}>
						<GridCol lg={5}>
							<div>
							<h4>LE CHIFFRE</h4>
								<p>A [LOCALISATION], les personnes de plus de 75 ans représentent XX% de la population</p>
							<h4>EXPLICATION</h4>
								<p>
									{data.find(el => el.titre === activeData)?.donnee}
								</p>
								
							</div>
						</GridCol>
						<GridCol lg={6}>
							<div className="flex flex-col justify-end"
      				>
								<GraphComp
									data={data}
									activeData={activeData}
								/>
								{/* {data.find(el => el.titre === activeData)?.graph} */}
							</div>
						</GridCol>
						</div>
					</div>
					<div className={styles.bottom}>
						<Button
          		priority="secondary"
          		linkProps={{
    		        href: `/etape2?code=${code}&thematique=${themeUrl}`
        		  }}
    	  		>
          		Étape précédente
    	  		</Button>
						<Button onClick={handleForward}>
          	  Découvrir qui et comment convaincre
          	</Button>
					</div>
				</div>
			</div>
		</>
			
  )
}

export default PageComp;