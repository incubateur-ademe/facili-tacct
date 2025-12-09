import { ClcDto } from '../dto';
import { CLCTerritoires } from '../postgres/models';

export const ClcMapper = (clc: CLCTerritoires): ClcDto => {
  if (!clc.geometry) {
    throw new Error('CLC geometry is null or undefined');
  }
  return {
    type: 'Feature',
    properties: {
      label: clc.legend,
      centroid: clc.centroid
    },
    geometry: JSON.parse(clc.geometry)
  };
};
