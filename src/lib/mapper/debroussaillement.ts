import { DebroussaillementDto } from '../dto';
import { DebroussaillementModel } from '../postgres/models';

export const DebroussaillementMapper = (
  debroussaillement: DebroussaillementModel
): DebroussaillementDto => ({
  type: 'Feature',
  properties: {},
  geometry: JSON.parse(debroussaillement.geometry)
});
