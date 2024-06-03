import { Input } from "@codegouvfr/react-dsfr/Input";
import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";
import { Container, Grid, GridCol } from "../../../dsfr/layout";
import { Box } from "../../../dsfr/server";
import GraphExample from "../../../assets/images/Group.svg"
import Image from "next/image";

const Bubble = () => {
  return (
		<div style={{display:"flex", flexDirection:"row", gap: "1em", justifyContent: "space-between", alignItems:"center"}}>
			<GridCol lg={5}>
				<Box as="div" style={{marginBottom: "2rem"}}>
					<h4>Le saviez-vous ?</h4>
					<Box as="p">
					En 2019, près de 65% de la population de mon EPCI a plus de                      et 2/3 sont des femmes. 

Un tiers de la surmortalité attribuable aux périodes de fortes chaleurs concerne des personnes de moins de 75 ans1​.
En France en 2003, une surmortalité significative a été observée à partir de la classe d'âge 35-44 ans chez les hommes (+27%) et 45-54 chez les femmes (+23%)2.​

L'exposition à la chaleur en dehors des périodes de canicule cause plus de décès que les vagues de chaleur extrêmes, qui sont plus dangereuses mais plus rares1.
La culture du risque "chaleur" peut atténuer le constat en limitant les comportements à risque (temps passé à l'extérieur, habillement, conscience des besoins hydriques, pratique de la sieste).​
					</Box>
				</Box>
				{/* <div
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
				</div> */}
				{/* <ButtonsGroup
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
			  /> */}
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
  )
}

export default Bubble;