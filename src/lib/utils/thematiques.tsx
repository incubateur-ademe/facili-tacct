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
  disponible: [
    {
      thematique: "Inconfort thermique",
      id: 0,
      category: "",
      icon: inconfortIcon,
      imageUrl: "./inconfortThermiqueIcon.svg"
    },
    // {
    //   thematique: "Biodiversité",
    //   id: 1,
    //   category: "",
    //   icon: biodiversiteIcon,
    //   imageUrl: "./biodiversiteIcon.svg"
    // },
    {
      thematique: "Gestion des risques",
      id: 2,
      category: "",
      icon: amenagementIcon,
      imageUrl: "./amenagementIcon.svg"
    },
    {
      thematique: "Ressources en eau",
      id: 3,
      category: "",
      icon: gestionEauIcon,
      imageUrl: "./eauIcon.svg"
    },
  ],
  bientot_disponible: [
    {
      thematique: "Espaces naturels",
      id: 2,
      category: "",
      icon: espacesNaturelsIcon,
      imageUrl: "./espacesNaturelsIcon.svg"
    },
    {
      thematique: "Biodiversité",
      id: 1,
      category: "",
      icon: biodiversiteIcon,
      imageUrl: "./biodiversiteIcon.svg"
    },
  ],
  futur: [
    {
      thematique: "Infrastructures",
      id: 0,
      category: "",
      icon: infrastructureIcon,
    },
    {
      thematique: "Mobilité / transport",
      id: 1,
      category: "",
      icon: mobiliteIcon,
    },
    {
      thematique: "Paysages",
      id: 2,
      category: "",
      icon: paysageIcon,
    },
    {
      thematique: "Gestion des risques",
      id: 3,
      category: "",
      icon: gestionRisqueIcon,
    },
    {
      thematique: "Agriculture",
      id: 11,
      category: "",
      icon: agricultureIcon,
    },
    {
      thematique: "Filière bois",
      id: 12,
      category: "",
      icon: filiereBoisIcon,
    },
    {
      thematique: "Tourisme",
      id: 13,
      category: "",
      icon: tourismeIcon,
    },
    {
      thematique: "Écosystèmes et biodiversité",
      id: 14,
      category: "",
      icon: biodiversiteIcon,
    },
    {
      thematique: "Ressources en eau",
      id: 15,
      category: "",
      icon: ressourcesEauIcon,
    },
    {
      thematique: "Forêt",
      id: 16,
      category: "",
      icon: foretIcon,
    },
    {
      thematique: "Santé",
      id: 4,
      category: "",
      icon: santeIcon,
    }
  ]
};
