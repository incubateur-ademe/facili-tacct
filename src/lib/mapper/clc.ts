import { ClcDto } from "../dto";
import { CLC } from "../postgres/models";

export const ClcMapper = (clc: CLC): ClcDto => ({
  type: "Feature",
  properties: {
    label: clc.legend,
    centroid: clc.centroid,
  },
  geometry: JSON.parse(clc.geometry),
});
