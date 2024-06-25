import agricultureIcon from "../../assets/icons/themes/agriculture_icon_teal.svg";
import amenagementIcon from "../../assets/icons/themes/amenagement_icon_teal.svg";
import batimentIcon from "../../assets/icons/themes/batiment_icon_teal.svg";
import biodiversiteIcon from "../../assets/icons/themes/biodiversite_icon_teal.svg";
import filiereBoisIcon from "../../assets/icons/themes/bois_icon_teal.svg";
import espacesNaturelsIcon from "../../assets/icons/themes/espacesNaturels_icon_teal.svg";
import foretIcon from "../../assets/icons/themes/foret_icon_teal.svg";
import gestionEauIcon from "../../assets/icons/themes/gestionEau_icon_teal.svg";
import gestionRisqueIcon from "../../assets/icons/themes/gestionRisques_icon_teal.svg";
import inconfortIcon from "../../assets/icons/themes/inconfort_thermique_icon_teal.svg";
import infrastructureIcon from "../../assets/icons/themes/infrastructures_icon_teal.svg";
import mobiliteIcon from "../../assets/icons/themes/mobilite_icon_teal.svg";
import paysageIcon from "../../assets/icons/themes/paysages_icon_teal.svg";
import qualiteAirEauIcon from "../../assets/icons/themes/qualiteAirEau_icon_teal.svg";
import ressourcesEauIcon from "../../assets/icons/themes/ressourcesEau_icon_teal.svg";
import santeIcon from "../../assets/icons/themes/sante_icon_teal.svg";
import securiteIcon from "../../assets/icons/themes/securite_icon_teal.svg";
import tourismeIcon from "../../assets/icons/themes/tourisme_icon_teal.svg";

const thematiques = {
  Aménagement: {
    id: 0,
    category: "Regroupement 2",
    icon: amenagementIcon,
  },
  Bâtiment: {
    id: 1,
    category: "Regroupement 2",
    icon: batimentIcon,
  },
  // "Développement économique": {
  //   id: ,
  //   category: "Regroupement 2",
  //   icon: batimentIcon,
  // },
  "Gestion de l'eau": {
    id: 2,
    category: "Regroupement 2",
    icon: gestionEauIcon,
  },
  "Gestion des risques": {
    id: 3,
    category: "Regroupement 2",
    icon: gestionRisqueIcon,
  },
  "Inconfort thermique": {
    id: 4,
    category: "Cadre de vie",
    icon: inconfortIcon,
  },
  Infrastructures: {
    id: 5,
    category: "Cadre de vie",
    icon: infrastructureIcon,
  },
  "Mobilité/transport": {
    id: 6,
    category: "Regroupement 2",
    icon: mobiliteIcon,
  },
  Paysages: {
    id: 7,
    category: "Cadre de vie",
    icon: paysageIcon,
  },
  "Qualité de l'air et de l'eau": {
    id: 8,
    category: "Cadre de vie",
    icon: qualiteAirEauIcon,
  },
  Santé: {
    id: 9,
    category: "Cadre de vie",
    icon: santeIcon,
  },
  "Sécurité (sinistralité)": {
    id: 10,
    category: "Cadre de vie",
    icon: securiteIcon,
  },
  Agriculture: {
    id: 11,
    category: "Ressources économiques locales",
    icon: agricultureIcon,
  },
  "Filière bois": {
    id: 12,
    category: "Ressources économiques locales",
    icon: filiereBoisIcon,
  },
  Tourisme: {
    id: 13,
    category: "Ressources économiques locales",
    icon: tourismeIcon,
  },
  "Écosystèmes et biodiversité": {
    id: 14,
    category: "Ressources naturelles",
    icon: biodiversiteIcon,
  },
  "Ressources en eau": {
    id: 15,
    category: "Ressources naturelles",
    icon: ressourcesEauIcon,
  },
  Forêt: {
    id: 16,
    category: "Ressources naturelles",
    icon: foretIcon,
  },
  "Espaces naturels": {
    id: 17,
    category: "Ressources naturelles",
    icon: espacesNaturelsIcon,
  },
};

export default thematiques;
