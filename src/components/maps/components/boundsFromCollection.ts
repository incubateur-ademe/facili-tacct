import { CommunesIndicateursDto } from '@/lib/dto';
import { Any } from '@/lib/utils/types';
import * as turf from '@turf/turf';

export const BoundsFromCollection = (
  collection: CommunesIndicateursDto[],
  type: string,
  code: string
) => {
  const boundsData = type === "commune" 
    ? collection.filter(el => el.properties.code_geographique === code)
    : collection;
  const featureCollection = turf.featureCollection(boundsData as Any);
  const bbox = turf.bboxPolygon(turf.bbox(featureCollection))
  const enveloppe = bbox.geometry.coordinates[0].map(
    ([lng, lat]) => [lat, lng]
  );
  return enveloppe;
}
