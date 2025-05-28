import { BoundsFromCollection } from '@/components/maps/components/boundsFromCollection';
import { CommunesIndicateursDto } from '@/lib/dto';
import { mapStyles } from 'carte-facile';
import 'carte-facile/carte-facile.css';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

const RGAMap = (props: {
  carteCommunes: CommunesIndicateursDto[];
  rgaCarte: any;
}) => {
  const { carteCommunes, rgaCarte } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const carteCommunesFiltered = type === "ept"
    ? carteCommunes.filter(el => el.properties.ept === libelle)
    : carteCommunes
  const enveloppe = BoundsFromCollection(carteCommunesFiltered, type, code);
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });

    map.on('load', () => {
      // Compute bounding box from enveloppe polygon
      if (
        enveloppe &&
        Array.isArray(enveloppe) &&
        enveloppe.length > 1 &&
        Array.isArray(enveloppe[0]) &&
        enveloppe[0].length === 2
      ) {
        const lons = enveloppe.map(coord => coord[1]);
        const lats = enveloppe.map(coord => coord[0]);
        const minLng = Math.min(...lons);
        const maxLng = Math.max(...lons);
        const minLat = Math.min(...lats);
        const maxLat = Math.max(...lats);
        map.fitBounds(
          [ [minLng, minLat], [maxLng, maxLat] ],
          { padding: 20 }
        );
      }
      map.addSource('rgaCarte', {
        type: 'geojson',
        data: rgaCarte,
      });
      map.addLayer({
        id: 'rgaCarte-layer',
        type: 'fill',
        source: 'rgaCarte',
        paint: {
          'fill-color': [
            'match',
            ['get', 'alea'],
            'Moyen', 'orange',
            'Faible', 'green',
            'Fort', 'red',
            'white' 
          ],
          'fill-opacity': 0.15,
          'fill-outline-color': '#161616'
        },
      });
    });

    // Add navigation control
    map.addControl(new maplibregl.NavigationControl(), 'top-right');
    return () => map.remove();
  }, [rgaCarte, enveloppe]);

  return (
    <div ref={mapContainer} style={{ height: "500px", width: "100%" }} />
  );
};

export default RGAMap;
