import { CommunesContoursDto, CommunesIndicateursDto } from '../dto';
import { CarteCommunes } from '../postgres/models';

export const CommunesIndicateursMapper = (
  commune: CarteCommunes
): CommunesIndicateursDto => {
  const data = {
    type: 'Feature',
    properties: {
      catnat: commune.catnat,
      epci: commune.epci,
      libelle_epci: commune.libelle_epci,
      libelle_commune: commune.libelle_commune,
      code_commune: commune.code_commune,
      precarite_logement: commune.precarite_logement ?? NaN,
      densite_bati: commune.densite_bati ?? NaN,
      coordinates: commune.coordinates,
      naf: commune.naf
    },
    geometry: JSON.parse(commune.geometry)
  };
  return data;
};

export const CommunesContourMapper = (
  commune: CarteCommunes
): CommunesContoursDto => ({
  type: 'Feature',
  properties: {
    epci: commune.epci,
    libelle_epci: commune.libelle_epci,
    libelle_commune: commune.libelle_commune,
    code_commune: commune.code_commune,
    coordinates: commune.coordinates
  },
  geometry: JSON.parse(commune.geometry)
});

export const LCZBayonneMapper = (lcz: any): any => ({
  type: 'Feature',
  properties: {
    hre: lcz.hre,
    are: lcz.are,
    bur: lcz.bur,
    ror: lcz.ror,
    bsr: lcz.bsr,
    war: lcz.war,
    ver: lcz.ver,
    vhr: lcz.vhr,
    lcz: lcz.lcz,
    lcz_int: lcz.lcz_int
  },
  geometry: JSON.parse(lcz.geometry)
});
