import { GridCol } from "../../../dsfr/layout";
import GraphExample from "../../../assets/images/Group.svg";
import { fr } from "@codegouvfr/react-dsfr";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import Image from "next/image";
import { Button } from "@codegouvfr/react-dsfr/Button";
import styles from "./../donnees.module.scss";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react";

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

	useEffect(() => {
		setActiveData(data.filter(el => el.facteur_sensibilite === activeTab)[0].titre)
  }, [activeTab]);

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
								{data.find(el => el.titre === activeData)?.graph}
								{/* <Image
									src={GraphExample}
									alt=""
									width={0}
									height={0}
									sizes="50vw"
									style={{ width: '100%', height: 'auto' }}
								/> */}
								<p>Source : <b>Observatoire des territoires</b></p>
							</div>
						</GridCol>
						</div>
					</div>
					<div className={styles.bottom}>
						<Button onClick={handleForward}>
          	  {"Découvrir qui et comment convaincre"}
          	</Button>
					</div>
				</div>
			</div>
		</>
			
  )
}

export default PageComp;