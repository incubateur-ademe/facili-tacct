import LineChart1 from "@/app/charts/lineChart1";
import PieChart1 from "@/app/charts/pieChart1";

const themes = {
  inconfort_thermique: [
    {
			id: 0,
			titre: "Grand âge et isolement",
			facteur_sensibilite: "Population",
			risque: "Élevé",
    	donnee: "En 2019, près de 65% de la population de mon EPCI a plus de et 2/3 \
    	sont des femmes. Un tiers de la surmortalité attribuable aux périodes de \
    	fortes chaleurs concerne des personnes de moins de 75 ans. En France \
    	en 2003, une surmortalité significative a été observée à partir de la \
    	classe d'âge 35-44 ans chez les hommes (+27%) et 45-54 chez les femmes (+23%)[2].​ \
    	L'exposition à la chaleur en dehors des périodes de canicule cause plus \
    	de décès que les vagues de chaleur extrêmes, qui sont plus dangereuses \
    	mais plus rares[1]. La culture du risque 'chaleur' peut atténuer le \
    	constat en limitant les comportements à risque (temps passé à \
    	l'extérieur, habillement, conscience des besoins hydriques, pratique \
    	de la sieste).",
			graph: "",
    },
		{
			id: 1,
			titre: "Fragilité économique",
			facteur_sensibilite: "Population",
			risque: "Élevé",
  	  donnee: "La précarité énergétique liée au logement concerne les ménages des 3 premiers déciles qui consacrent plus de 8% de leurs \
				revenus aux dépenses énergétiques liées à leur logement (chauffage, eau chaude, et ventilation). Nb ménages [ou % des ménages] \
				de votre territoire sont en situation de précarité énergique logement. \
				Ce chiffre est le Nb [ou %] dans votre département.",
			graph: "",
  	},
		{
			id: 2,
			titre: "Travail en extérieur",
			facteur_sensibilite: "Population",
			risque: "Moyen",
  	  donnee: "LOREM IPSUM du TRAVAIL EN EXTERIEUR",
			graph: <PieChart1/>,
  	},
		{
			id: 3,
			titre: "Age du bâtiment",
			facteur_sensibilite: "Bâtiment",
			risque: "Moyen",
  	  donnee: "LOREM IPSUM de L'AGE DU BATIMENT",
			graph: "",
  	},
		{
			id: 4,
			titre: "Densité",
			facteur_sensibilite: "Urbanisme",
			risque: "Moyen",
  	  donnee: "LOREM IPSUM DE LA DENSITE DE BATIMENTS",
			graph: "",
  	},
		{
			id: 5,
			titre: "Végétalisation",
			facteur_sensibilite: "Urbanisme",
			risque: "Moyen",
  	  donnee: "LOREM IPSUM DE LA VEGETALISATION",
			graph: "",
  	},
  ]
}

export default themes;