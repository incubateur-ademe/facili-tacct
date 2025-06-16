'use client';

import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, Popup, TileLayer, useMapEvent, WMSTileLayer } from 'react-leaflet';

const ArcGISFeatureInfo = () => {
  const [popup, setPopup] = useState<null | { latlng: LatLngExpression; content: string }>(null);

  useMapEvent('click', async (e) => {
    // Convert latlng to EPSG:3857 (Web Mercator)
    const point = L.Projection.SphericalMercator.project(e.latlng);
    const size = 10; // envelope size in meters (adjust for sensitivity)
    const xmin = point.x - size / 2;
    const xmax = point.x + size / 2;
    const ymin = point.y - size / 2;
    const ymax = point.y + size / 2;

    const geometry = encodeURIComponent(JSON.stringify({
      spatialReference: { latestWkid: 3857, wkid: 102100 },
      xmin, ymin, xmax, ymax
    }));

    const url = `https://cartagene.cerema.fr/server/rest/services/l_lcz_spot_000_2022_mil/MapServer/0/query?f=json&geometry=${geometry}&maxAllowableOffset=4.777314267945864&outFields=are,bsr,bur,hre,identifier,lcz,ror,ver,vhr,war,FID&spatialRel=esriSpatialRelIntersects&where=1%3D1&geometryType=esriGeometryEnvelope&inSR=102100&outSR=102100`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const props = data.features[0].attributes;
        // Format the popup content as you wish
        const content = Object.entries(props)
          .map(([k, v]) => `<b>${k}</b>: ${v}`)
          .join('<br/>');
        setPopup({ latlng: e.latlng, content });
      } else {
        setPopup({ latlng: e.latlng, content: 'Aucune donnée.' });
      }
    } catch (err) {
      setPopup({ latlng: e.latlng, content: 'Erreur lors de la récupération des données.' });
    }
  });

  return popup ? (
    <Popup position={popup.latlng} eventHandlers={{ remove: () => setPopup(null) }}>
      <div dangerouslySetInnerHTML={{ __html: popup.content }} />
    </Popup>
  ) : null;
}

export const MapLCZ = () => {
  const center = [46.603354, 1.888334]; // Center of France, adjust as needed
  const zoom = 10;

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <MapContainer
        center={center as LatLngExpression }
        zoom={zoom}
        style={{ width: '100%', height: '100%' }}
        attributionControl={true}
        zoomControl={true}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <WMSTileLayer
          url="https://cartagene.cerema.fr/server/services/l_lcz_spot_000_2022_mil/MapServer/WMSServer"
          layers="0"
          format="image/png"
          transparent={true}
          version="1.3.0"
          attribution='&copy; <a href="https://cartagene.cerema.fr/">Cerema</a>'
          opacity={0.7}
        />
        <ArcGISFeatureInfo />
      </MapContainer>
    </div>
  );
};

export default MapLCZ;
