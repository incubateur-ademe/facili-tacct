import { ClcDto } from '../dto';
import { CLCTerritoires } from '../postgres/models';

export const ClcMapper = (clc: CLCTerritoires): ClcDto => ({
  type: 'Feature',
  properties: {
    label: clc.legend,
    centroid: clc.centroid
  },
  geometry: JSON.parse(clc.geometry)
});
