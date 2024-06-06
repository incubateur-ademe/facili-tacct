import inconfortIcon from "../../assets/icons/themes/inconfort_thermique_icon_green.svg";
import gestionRisqueIcon from "../../assets/icons/themes/gestionRisques_icon_grey.svg";
import amenagementIcon from "../../assets/icons/themes/amenagement_icon_grey.svg";
import batimentIcon from "../../assets/icons/themes/batiment_icon_grey.svg";
import gestionEauIcon from "../../assets/icons/themes/gestionEau_icon_grey.svg";
import infrastructureIcon from "../../assets/icons/themes/infrastructures_icon_grey.svg";
import mobiliteIcon from "../../assets/icons/themes/mobilite_icon_grey.svg";

const thematiques = {
	"Aménagement":
    	{
			id: 0,
    	  	icon: amenagementIcon,
		},
	"Bâtiment":
    	{
			id: 1,
    	  	icon: batimentIcon,
		},
	"Gestion de l'eau":
    	{
			id: 2,
    	  	icon: gestionEauIcon,
		},
	"Gestion des risques":
    	{
			id: 3,
    	  	icon: gestionRisqueIcon,
		},
	"Inconfort thermique":
    	{
			id: 4,
    	  	icon: inconfortIcon,
		},
	"Infrastructures":
    	{
			id: 5,
    	  	icon: infrastructureIcon,
		},
	"Mobilité":
    	{
			id: 6,
    	  	icon: mobiliteIcon,
		},
	
}

export default thematiques;