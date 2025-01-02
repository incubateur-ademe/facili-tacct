import { EtatCoursDeauDto } from '../dto';
import { EtatCoursDeau } from '../postgres/models';

export const EtatCoursDeauMapper = (
  etatCoursDeau: EtatCoursDeau
): EtatCoursDeauDto => {
  return {
    type: 'Feature',
    properties: {
      name: etatCoursDeau.name,
      etateco: etatCoursDeau.etateco
    },
    geometry: JSON.parse(etatCoursDeau.geometry)
  };
};
