import { GridCol } from "../../../dsfr/layout";
import { Box } from "../../../dsfr/server";
import GraphExample from "../../../assets/images/Group.svg"
import Image from "next/image";

const PageComp = (props: any) => {
	const { data } = props;
  return (
		<>
			<Box as="div">
				<Box as="div"  className="theme-page-titles">
    	  	<h3>{data.titre}</h3>
    	  	<Box as="div" className="sensibilite">
						<p>FACTEUR DE SENSIBILITÉ : <b>{data.facteur_sensibilite}</b></p>
						<p>NIVEAU DE RISQUE : <b>{data.risque}</b></p>
    	  	</Box>
    		</Box>
    		<Box as="div" className="data-bubble">
					<div style={{display:"flex", flexDirection:"row", gap: "1em", justifyContent: "space-between", alignItems:"center"}}>
						<GridCol lg={5}>
							<Box as="div" style={{marginBottom: "2rem"}}>
								<h4>Le saviez-vous ?</h4>
								<Box as="p">
									{data.donnee}
								</Box>
							</Box>
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
								<p>Source : Observatoire des territoires</p>
							</div>
						</GridCol>
					</div>
				</Box>
			</Box>
		</>
			
  )
}

export default PageComp;