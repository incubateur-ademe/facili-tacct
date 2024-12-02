import { EpciContoursDto } from "../dto";
import { EpciContours } from "../postgres/models";

export const EpciContoursMapper = (epciContours: EpciContours): EpciContoursDto => {
  return ({
    type: "Feature",
    properties: {
      epci_code: epciContours.epci_code,
    },
    geometry: JSON.parse(epciContours.geometry),
  })
};
