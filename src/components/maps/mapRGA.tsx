import { BoundsFromCollection } from '@/components/maps/components/boundsFromCollection';
import { CommunesIndicateursDto, RGADto } from '@/lib/dto';
import { mapStyles } from 'carte-facile';
import 'carte-facile/carte-facile.css';
import { Feature, FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';
import html2canvas from 'html2canvas';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

const RGAMap = (props: {
  carteCommunes: CommunesIndicateursDto[];
  rgaCarte: {
    type: string;
    features: RGADto[];
  };
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
  const mapRef = useRef<maplibregl.Map | null>(null);

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

  const handleScreenshot = () => {
    console.log('Screenshot button clicked');
    if (mapRef.current && mapContainer.current) {
      const html = mapRef.current.getContainer();
      console.log("html", html);
      if (html) {
        let captureCompleted = false;
        
        // Try to trigger a render event, then capture
        mapRef.current.once('render', async () => {
          console.log('Map render event fired');
          captureCompleted = true;
          try {
            const canvas = await html2canvas(html, { useCORS: true });
            console.log('Canvas created:', canvas);
            canvas.toBlob((blob) => {
              if (blob) {
                console.log('Blob created, downloading...');
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'retrait-gonflement-argiles-carte.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
              }
            });
          } catch (error) {
            console.error('Error capturing canvas:', error);
          }
        });
        
        // Trigger a map repaint to ensure render event fires
        mapRef.current.triggerRepaint();
        
        // Fallback: if render event doesn't fire within 2 seconds, try direct capture
        // setTimeout(() => {
        //   if (!captureCompleted) {
        //     console.log('Fallback: attempting direct capture');
        //     html2canvas(html, { useCORS: true })
        //       .then((canvas) => {
        //         canvas.toBlob((blob) => {
        //           if (blob) {
        //             const url = URL.createObjectURL(blob);
        //             const link = document.createElement('a');
        //             link.href = url;
        //             link.download = 'retrait-gonflement-argiles-carte-fallback.png';
        //             document.body.appendChild(link);
        //             link.click();
        //             document.body.removeChild(link);
        //             URL.revokeObjectURL(url);
        //           }
        //         });
        //       })
        //       .catch((error) => {
        //         console.error('Fallback capture failed:', error);
        //       });
        //   } else {
        //     console.log('Render event already completed, skipping fallback');
        //   }
        // }, 2000);
      }
    } else {
      console.log('Map or container not found');
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mapContainer} style={{ height: "500px", width: "100%" }} />
      <button
        onClick={handleScreenshot}
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 1000,
          padding: '8px 12px',
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        📸 Exporter PNG
      </button>
    </div>
  );
};

export default RGAMap;
