import { BoundsFromCollection } from '@/components/maps/components/boundsFromCollection';
import { CommunesIndicateursDto, RGADto } from '@/lib/dto';
import { mapStyles } from 'carte-facile';
import 'carte-facile/carte-facile.css';
import { Feature, FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { RefObject, useEffect } from 'react';
import { RgaMapLegend } from './legends/datavizLegends';
import { LegendCompColor } from './legends/legendComp';
import styles from './maps.module.scss';

const RGAMap = (props: {
  carteCommunes: CommunesIndicateursDto[];
  rgaCarte: {
    type: string;
    features: RGADto[];
  };
  mapRef: RefObject<maplibregl.Map | null>;
  mapContainer: RefObject<HTMLDivElement | null>;
  style?: React.CSSProperties;
}) => {
  const { carteCommunes, rgaCarte, mapRef, mapContainer, style } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const carteCommunesFiltered = type === "ept"
    ? carteCommunes.filter(el => el.properties.ept === libelle)
    : carteCommunes
  const enveloppe = BoundsFromCollection(carteCommunesFiltered, type, code);

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyles.desaturated,
      attributionControl: false,
    });
    mapRef.current = map;

    // addOverlay(map, Overlay.administrativeBoundaries);

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
          [[minLng, minLat], [maxLng, maxLat]],
          { padding: 20 }
        );
      }
      map.addSource('rgaCarte', {
        type: 'geojson',
        data: rgaCarte as FeatureCollection<Geometry, GeoJsonProperties>,
      });
      map.addSource('carteCommunes', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: carteCommunesFiltered as Feature<Geometry, GeoJsonProperties>[]
        }
      });
      map.addLayer({
        id: 'rgaCarte-layer',
        type: 'fill',
        source: 'rgaCarte',
        paint: {
          'fill-color': [
            'match',
            ['get', 'alea'],
            'Moyen', '#F66E19',
            'Faible', '#FFCF5E',
            'Fort', '#E8323B',
            'white'
          ],
          'fill-opacity': 0.45,
        },
      });
      map.addLayer({
        id: 'carteCommunes-outline',
        type: 'line',
        source: 'carteCommunes',
        paint: {
          'line-color': '#161616',
          'line-width': 1
        }
      });
    });

    // Add navigation control
    map.addControl(new maplibregl.NavigationControl(), 'top-right');
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [rgaCarte, enveloppe]);

  return (
    <div style={{ position: 'relative', ...style }}>
      <div ref={mapContainer} style={{ height: "500px", width: "100%" }} />
      <div className="exportPNGWrapper">
        <div
          className={styles.legendRGA}
          style={{ width: 'auto', justifyContent: 'center' }}
        >
          <LegendCompColor legends={RgaMapLegend} />
        </div>
      </div>
    </div>
  );
};

export default RGAMap;
