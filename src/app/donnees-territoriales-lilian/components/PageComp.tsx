"use client";

import { fr } from "@codegouvfr/react-dsfr";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import dataTest from "../../../lib/utils/dataTest.json";
import { Button } from "@codegouvfr/react-dsfr/Button";
import styles from "./../donnees.module.scss";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react";
import FragiliteEconomique from "@/components/themesText/inconfort-thermique/fragilite-economique";
import { DataCommune } from '../type';

interface Props {
	data: {
		id: number;
		titre: string;
		facteur_sensibilite: string;
		risque: string;
		donnee: string;
		graph: any
	}[],
  dataCommune: DataCommune;
	// activeTab: string;
	// setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const allComps = [
		// {
		// 	titre: "Grand âge et isolement",
		// 	component: <GrandAgeIsolement
		// 		data={data}
		// 		activeData={activeData}
		// 		row={row}
		// 	/>
		// },
		{
			titre: "Fragilité économique",
			Component: (props: Props & { activeData: string, row: {} }) => <FragiliteEconomique
				{...props}
			/>
		},
		// {
		// 	titre: "Travail en extérieur",
		// 	component: <TravailExterieur
		// 		data={data}
		// 		activeData={activeData}
		// 		row={row}
		// 	/>
		// },
		// {
		// 	titre: "Age du bâtiment",
		// 	component: <AgeBati
		// 		data={data}
		// 		activeData={activeData}
		// 		row={row}
		// 	/>
		// },
	];

const PageComp = ({ data, dataCommune }: Props) => {
	const [activeData, setActiveData] = useState("");
	const [row, setRow] = useState({});
	// const [xData, setXData] = useState([]);
  // const [yData, setYData] = useState([]);

	const router = useRouter();
	const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const themeUrl = searchParams.get("thematique");
	const { isDark } = useIsDark();
 	const darkClass = {
  		backgroundColor: fr.colors.getHex({isDark}).decisions.background.default.grey.active,
  		"&:hover": {
  		  backgroundColor: fr.colors.getHex({isDark}).decisions.background.alt.grey.hover
  	},
	}
	

  function processData(allRows: any) {
    if (allRows.find((el: any) => el['EPCI - Métropole'] === Number(code))) {  //REPLACE
      let row: any = dataTest.find(el => el['EPCI - Métropole'] === Number(code)) //REPLACE
      var x: any = Object.keys(row as any).slice(8, 16) //REPLACE
      var y: any = Object.values(row as any).slice(8, 16) //REPLACE
      // console.log('xPROCESS', x)
      // console.log('yPROCESS', y)
			setRow(row)
      // setXData(x)
      // setYData(y)
      return ;
    }  
  }

	// useEffect(() => {
	// 	setActiveData(data.filter(el => el.facteur_sensibilite === activeTab)[0].titre)
	// 	processData(dataTest);
  // }, [activeTab]);

	const handleForward = () => {
			router.push(`/etape3?code=${code}&thematique=${themeUrl}`)
   }

  return (
		<>
			<div>
				<div className={styles.titles}>
					{data.filter((el) => el.facteur_sensibilite === activeTab)
          .map((element, i) => (
						<button
							key={i}
							className={styles.button}
							onClick={() => {
								setActiveData(element.titre)
							}}>{element.titre}</button>
					))}
    		</div>
    		<div className={styles.bubble}>
					<div className={styles.bubbleContent} style={darkClass}>
						{(() => {
              const Component = allComps.find((el) => el.titre === activeData)?.Component;
              if (!Component) return null;
              return <Component
                data={data}
                activeData={activeData}
                row={row}
                dataCommune={dataCommune} />
            })()}
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
