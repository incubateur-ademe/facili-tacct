import { CommunesIndicateursDto } from "../dto";
import { CarteCommunes } from "../postgres/models";

export const CommunesIndicateursMapper = (commune: CarteCommunes): CommunesIndicateursDto => ({
  type: "Feature",
  properties: {
    epci: commune.epci,
    libelle_epci: commune.libelle_epci,
    libelle_commune: commune.libelle_commune,
    code_commune: commune.code_commune,
    precarite_logement: commune.precarite_logement,
    densite_bati: commune.densite_bati,
    coordinates: commune.coordinates,
  },
  geometry: JSON.parse(commune.geometry),
});
