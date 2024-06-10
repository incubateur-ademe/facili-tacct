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
		graph: <LineChart1/>,
    },
	{
		id: 1,
		titre: "Fragilité économique",
		facteur_sensibilite: "Population",
		risque: "Élevé",
    	donnee: "LOREM IPSUM de la FRAGILITE ECONOMIQUE",
		graph: <LineChart1/>,
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
		graph: <LineChart1/>,
    },
	{
		id: 4,
		titre: "Densité",
		facteur_sensibilite: "Urbanisme",
		risque: "Moyen",
      	donnee: "LOREM IPSUM DE LA DENSITE DE BATIMENTS",
		graph: <LineChart1/>,
    },
	{
		id: 5,
		titre: "Végétalisation",
		facteur_sensibilite: "Urbanisme",
		risque: "Moyen",
      	donnee: "LOREM IPSUM DE LA VEGETALISATION",
		graph: <LineChart1/>,
    },
  ]
}

export default themes;