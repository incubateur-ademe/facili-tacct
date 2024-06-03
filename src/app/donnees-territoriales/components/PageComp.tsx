import { GridCol } from "../../../dsfr/layout";
import GraphExample from "../../../assets/images/Group.svg";
import { fr } from "@codegouvfr/react-dsfr";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import Image from "next/image";
import { Button } from "@codegouvfr/react-dsfr/Button";
import styles from "./../donnees.module.scss";
import { useRouter, useSearchParams } from 'next/navigation';


interface Props {
	data: {
		id: number;
		titre: string;
		facteur_sensibilite: string;
		risque: string;
		donnee: string;
	}[]
	activeTab: number
	setActiveTab: React.Dispatch<React.SetStateAction<number>>;
	toggle: (tab: number) => void;
}

const PageComp = (props: Props) => {
	const { data, activeTab, setActiveTab, toggle } = props;
	const router = useRouter();
	const searchParams = useSearchParams();
  const code = searchParams.get("code");
	const { isDark } = useIsDark();
 	const darkClass = {
  	backgroundColor: fr.colors.getHex({isDark}).decisions.background.default.grey.active,
  	"&:hover": {
  	  backgroundColor: fr.colors.getHex({isDark}).decisions.background.alt.grey.hover
  	},
	}
	console.log('data', data)
	const tab = activeTab;
	const handleForward = () => {
		if (data.length === tab + 1) {
			router.push(`/explication?code=${code}`)
		} else {
			setActiveTab(tab + 1);
			toggle(tab + 1);
		}
   }
  return (
		<>
			<div>
				<div className={styles.titles}>
    	  	<h3>{data[activeTab].titre}</h3>
    	  	<div className={styles.sensibilite}>
						<p>FACTEUR DE SENSIBILITÉ : <b>{data[activeTab].facteur_sensibilite}</b></p>
						<p>NIVEAU DE RISQUE : <b>{data[activeTab].risque}</b></p>
    	  	</div>
    		</div>
    		<div className={styles.bubble}>
					<div className={styles.bubbleContent} style={darkClass}>
						<div style={{display:"flex", flexDirection:"row", gap: "1em", justifyContent: "space-between", alignItems:"center"}}>
						<GridCol lg={5}>
							<div>
								<h4>Le saviez-vous ?</h4>
								<p>
									{data[activeTab].donnee}
								</p>
							</div>
						</GridCol>
						<GridCol lg={6}>
							<div className="flex flex-col justify-end"
      				>
								<Image
									src={GraphExample}
									alt=""
									width={0}
									height={0}
									sizes="50vw"
									style={{ width: '100%', height: 'auto' }}
								/>
								<p>Source : <b>Observatoire des territoires</b></p>
							</div>
						</GridCol>
						</div>
					</div>
					<div className={styles.bottom}>
						<Button onClick={handleForward}>
          	  {data.length === tab + 1 ? "Étape suivante" : "Continuer"}
          	</Button>
					</div>
				</div>
			</div>
		</>
			
  )
}

export default PageComp;