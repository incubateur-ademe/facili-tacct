import { RGADto } from "../dto";
import { RGACarte } from "../postgres/models";

export const RGAMapper = (
  rga: RGACarte
): RGADto => {
  const data = {
    type: 'Feature',
    properties: {
      code_geographique: rga.code_geographique,
      alea: rga.alea,
    },
    geometry: JSON.parse(rga.geometry)
  };
  return data;
};
