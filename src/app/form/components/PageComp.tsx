import { GridCol } from "../../../dsfr/layout";
import GraphExample from "../../../assets/images/Group.svg"
import Image from "next/image";
import { Button } from "@codegouvfr/react-dsfr/Button";
import styles from "./../form.module.scss";


interface Props {
	data: {
		id: number;
		titre: string;
		facteur_sensibilite: string;
		risque: string;
		donnee: string;
	}
	activeTab: number
	setActiveTab: React.Dispatch<React.SetStateAction<number>>;
	toggle: (tab: number) => void;
}

const PageComp = (props: Props) => {
	const { data, activeTab, setActiveTab, toggle } = props;
	const tab = activeTab;
	const handleForward = () => {
    setActiveTab(tab + 1);
		toggle(tab + 1);
   }
  return (
		<>
			<div>
				<div className={styles.titles}>
    	  	<h3>{data.titre}</h3>
    	  	<div className={styles.sensibilite}>
						<p>FACTEUR DE SENSIBILITÉ : <b>{data.facteur_sensibilite}</b></p>
						<p>NIVEAU DE RISQUE : <b>{data.risque}</b></p>
    	  	</div>
    		</div>
    		<div className={styles.bubble}>
					<div className={styles.bubbleContent}>
						<div style={{display:"flex", flexDirection:"row", gap: "1em", justifyContent: "space-between", alignItems:"center"}}>
						<GridCol lg={5}>
							<div>
								<h4>Le saviez-vous ?</h4>
								<p>
									{data.donnee}
								</p>
							</div>
						</GridCol>
						<GridCol lg={6}>
							<div
      				  style={{
      				    display: "flex",
									flexDirection: "column",
      				    justifyContent: "flex-end",
      				  }}
      				>
								<Image
									src={GraphExample}
									alt=""
								/>
								<p>Source : <b>Observatoire des territoires</b></p>
							</div>
						</GridCol>
						</div>
					</div>
					<div className={styles.bottom}>
						<Button
          	  onClick={handleForward}
          	>
          	  Continuer
          	</Button>
					</div>
				</div>
			</div>
		</>
			
  )
}

export default PageComp;