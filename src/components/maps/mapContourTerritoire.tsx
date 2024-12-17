'use client';

import { CommunesContoursDto } from '@/lib/dto';
import { MapContainer } from '@/lib/react-leaflet';
import * as turf from '@turf/turf';
import { BBox, GeoJsonObject, Position } from 'geojson';
import L, { LatLngBoundsExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import { GeoJSON, Pane, Rectangle, TileLayer, useMap } from 'react-leaflet';

export const MapContourTerritoire = (props: {
  territoireContours: CommunesContoursDto[];
  pourcentage: number;
}) => {
  const { territoireContours, pourcentage } = props;
  const mapRef = useRef(null);
  const [data, setData] = useState<CommunesContoursDto[]>([]);
  // const [bounds, setBounds] = useState<number[]>();

  const rectBorders = [45.433554862, -1.243793323, 45.802437758, -0.707834253];
  const outer = [
    [45.433554862, -1.243793323],
    [45.802437758, -0.707834253]
  ];

  const littleRect = [
    [45.53, -1.0],
    [45.78, -0.6]
  ];

  var points = turf.featureCollection([
    turf.point([45.433554862, -1.243793323]),
    turf.point([45.433554862, -0.707834253]),
    turf.point([45.802437758, -0.707834253]),
    turf.point([45.802437758, -1.243793323])
  ]);

  var hull = turf.concave(points);

  // console.log("polygonClipping", polygonClipping.intersection([outer], territoireContours[0]?.geometry.coordinates[0]));

  // console.log("hull", hull);

  var rect = turf.square(rectBorders as BBox);

  const test_rect = turf.lineString(rectBorders as unknown as Position[]);
  const test_data = turf.polygon(
    territoireContours[0]?.geometry.coordinates[0]
  );

  // console.log("data", test_data);

  // console.log("intersect", turf.intersect(turf.featureCollection([hull, test_data])));

  // var intersection = turf.intersect(turf.featureCollection([data[0].geometry.coordinates[0], rect]));
  // console.log("intersection", intersection);

  const ContourTerritoire = () => {
    const map = useMap();

    useEffect(() => {
      setData(territoireContours);
    }, [territoireContours]);

    if (data.length > 0) {
      const geojsonObject = L.geoJSON(data as unknown as GeoJsonObject);
      map.fitBounds(geojsonObject.getBounds());
      // setBounds(geojsonObject.getBounds().toBBoxString().split(",").map(Number));
      return (
        <>
          <GeoJSON
            ref={mapRef}
            data={data as unknown as GeoJsonObject}
            style={style}
          />
        </>
      );
    } else {
      return null;
    }
  };

  const style = () => {
    return {
      fillColor: 'transparent',
      weight: 1,
      opacity: 1,
      color: '#161616',
      fillOpacity: 1
    };
  };

  return (
    <MapContainer
      ref={mapRef}
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(251, 251, 251)',
        display: 'flex'
      }}
      attributionControl={false}
      zoomControl={false}
      zoom={7}
      scrollWheelZoom={false}
      dragging={false}
      boundsOptions={{ padding: [0, 0] }}
    >
      <TileLayer
        attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=MBbcKi3EyFqyyHvvHVbfnE4iOJ34FiUs1yWbVID476VAReeeO0NdrKWg6FljGBIC"
      />
      <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
        <Rectangle
          bounds={outer as LatLngBoundsExpression}
          pathOptions={{ color: 'orange' }}
        />
        <Rectangle
          bounds={littleRect as LatLngBoundsExpression}
          pathOptions={{ color: 'cyan' }}
        />
      </Pane>
      {/* <div style={{backgroundColor: "lightblue", opacity: "0.5", height: `${pourcentage}%`, width: "100%", alignSelf: "end"}} /> */}
      <ContourTerritoire />
    </MapContainer>
  );
};
