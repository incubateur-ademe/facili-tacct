import { Input } from "@codegouvfr/react-dsfr/Input";
import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";
import { Container, Grid, GridCol } from "../../../dsfr/layout";
import { Box } from "../../../dsfr/server";
import GraphExample from "../../../assets/images/Group.svg"
import Image from "next/image";

const Bubble = () => {
  return (
		<div style={{display:"flex", flexDirection:"row", gap: "1em", justifyContent: "space-between", alignItems:"center"}}>
			<GridCol lg={6}>
				<Box as="div" style={{marginBottom: "2rem"}}>
					<h4>Le saviez-vous ?</h4>
					<Box as="p">
						65% de la population de votre collectivité a plus de 75 ans et court le risque d'avoir particulièrement chaud en cas de fortes chaleurs.
					</Box>
				</Box>
				<div
				  className="container"
				  style={{
				    width: "100%"
				  }}
				>
					<h4>Qu'en pensez-vous ?</h4>
					<Input
					  label=""
					  textArea
						nativeTextAreaProps={{
							placeholder: `Dans cet espace, notez : \n
	• Vos pensées sur la base de cette information
	• Les témoignages que vous avez entendus à ce sujet
	• Les considérations importantes pour vos partenaires`,
							style: {height: "150px", backgroundColor: "#fff", maxWidth: "100%", margin: "0 0 2rem"}
						}}
					/>
				</div>
				<ButtonsGroup
			    buttons={[
			      {
			        children: 'Ajouter aux favoris',
			        iconId: 'fr-icon-add-line',
			        linkProps: {
			          href: '#'
			        }
			      },
			      {
			        children: 'Partager',
			        iconId: 'fr-icon-mail-fill',
			        linkProps: {
			          href: '#'
			        },
			        priority: 'secondary'
			      },
			    ]}
			    inlineLayoutWhen="always"
			  />
			</GridCol>
			<GridCol lg={6}>
				<div
      	  style={{
      	    display: "flex",
      	    justifyContent: "flex-end",
      	  }}
      	>
					<Image
						src={GraphExample}
						alt=""
					/>
				</div>
			</GridCol>
		</div>
  )
}

export default Bubble;