import { type StaticImageData } from "next/image";

import _agricultureIcon from "../../assets/icons/themes/agriculture_icon_teal.svg";
import _amenagementIcon from "../../assets/icons/themes/amenagement_icon_teal.svg";
import _batimentIcon from "../../assets/icons/themes/batiment_icon_teal.svg";
import _biodiversiteIcon from "../../assets/icons/themes/biodiversite_icon_teal.svg";
import _filiereBoisIcon from "../../assets/icons/themes/bois_icon_teal.svg";
import _espacesNaturelsIcon from "../../assets/icons/themes/espacesNaturels_icon_teal.svg";
import _foretIcon from "../../assets/icons/themes/foret_icon_teal.svg";
import _gestionEauIcon from "../../assets/icons/themes/gestionEau_icon_teal.svg";
import _gestionRisqueIcon from "../../assets/icons/themes/gestionRisques_icon_teal.svg";
import _inconfortIcon from "../../assets/icons/themes/inconfort_thermique_icon_teal.svg";
import _infrastructureIcon from "../../assets/icons/themes/infrastructures_icon_teal.svg";
import _mobiliteIcon from "../../assets/icons/themes/mobilite_icon_teal.svg";
import _paysageIcon from "../../assets/icons/themes/paysages_icon_teal.svg";
import _ressourcesEauIcon from "../../assets/icons/themes/ressourcesEau_icon_teal.svg";
import _santeIcon from "../../assets/icons/themes/sante_icon_teal.svg";
import _tourismeIcon from "../../assets/icons/themes/tourisme_icon_teal.svg";

const agricultureIcon = _agricultureIcon as StaticImageData;
const amenagementIcon = _amenagementIcon as StaticImageData;
const batimentIcon = _batimentIcon as StaticImageData;
const biodiversiteIcon = _biodiversiteIcon as StaticImageData;
const filiereBoisIcon = _filiereBoisIcon as StaticImageData;
const espacesNaturelsIcon = _espacesNaturelsIcon as StaticImageData;
const foretIcon = _foretIcon as StaticImageData;
const gestionEauIcon = _gestionEauIcon as StaticImageData;
const gestionRisqueIcon = _gestionRisqueIcon as StaticImageData;
const inconfortIcon = _inconfortIcon as StaticImageData;
const infrastructureIcon = _infrastructureIcon as StaticImageData;
const mobiliteIcon = _mobiliteIcon as StaticImageData;
const paysageIcon = _paysageIcon as StaticImageData;
const ressourcesEauIcon = _ressourcesEauIcon as StaticImageData;
const santeIcon = _santeIcon as StaticImageData;
const tourismeIcon = _tourismeIcon as StaticImageData;

export const thematiques = {
  Aménagement: {
    id: 0,
    category: "Compétences",
    icon: amenagementIcon,
  },
  Bâtiment: {
    id: 1,
    category: "Compétences",
    icon: batimentIcon,
  },
  // "Développement économique": {
  //   id: ,
  //   category: "Compétences",
  //   icon: batimentIcon,
  // },
  "Gestion de l'eau": {
    id: 2,
    category: "Compétences",
    icon: gestionEauIcon,
  },
  "Gestion des risques": {
    id: 3,
    category: "Compétences",
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
  "Mobilité / transport": {
    id: 6,
    category: "Compétences",
    icon: mobiliteIcon,
  },
  Paysages: {
    id: 7,
    category: "Cadre de vie",
    icon: paysageIcon,
  },
  Santé: {
    id: 9,
    category: "Cadre de vie",
    icon: santeIcon,
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
