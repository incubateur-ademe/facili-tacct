import { ErosionCotiereDto } from "../dto";
import { ErosionCotiere } from "../postgres/models";

export const ErosionCotiereMapper = (erosionCotiere: ErosionCotiere): ErosionCotiereDto => ({
  type: "Feature",
  properties: {
    taux: erosionCotiere.taux,
  },
  geometry: JSON.parse(erosionCotiere.geometry),
});
