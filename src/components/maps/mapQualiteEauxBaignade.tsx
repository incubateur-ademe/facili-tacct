'use client';

import qualiteInconnu from '@/assets/icons/marker_icon_blue.svg';
import qualiteBon from '@/assets/icons/qualite_baignade_bon.svg';
import qualiteExcellent from '@/assets/icons/qualite_baignade_excellent.svg';
import qualiteInsuffisant from '@/assets/icons/qualite_baignade_insuffisant.svg';
import qualiteSuffisant from '@/assets/icons/qualite_baignade_suffisant.svg';
import { CommunesIndicateursDto, EpciContoursDto } from '@/lib/dto';
import { QualiteSitesBaignade } from '@/lib/postgres/models';
import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer
} from '@/lib/react-leaflet';
import { Any } from '@/lib/utils/types';
import { GeoJsonObject } from 'geojson';
import L, { LatLngExpression, LeafletMouseEvent, StyleFunction } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './maps.css';
import styles from './maps.module.scss';
// documentation : https://akursat.gitbook.io/marker-cluster/api

const qualiteIcon = (qualite: string | undefined) => {
  return qualite === 'E'
    ? '/qualite_baignade_excellent.svg'
    : qualite === 'B'
      ? '/qualite_baignade_bon.svg'
      : qualite === 'S'
        ? '/qualite_baignade_suffisant.svg'
        : qualite === 'I'
          ? '/qualite_baignade_insuffisant.svg'
          : qualite === 'P'
            ? '/marker_icon_blue.svg'
            : '/marker_icon_blue.svg';
};

const getCentroid = (arr: number[][]) => {
  const centroid = arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0]
  );
  return [centroid[1], centroid[0]];
};

export const MapQualiteEauxBaignade = (props: {
  qualiteEauxBaignade: QualiteSitesBaignade[];
  epciContours: EpciContoursDto[];
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { qualiteEauxBaignade, epciContours, carteCommunes } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const commune = carteCommunes.find(
    (commune) => commune.properties.code_commune === codgeo
  );
  const centerCoord: number[] = commune
    ? commune.properties.coordinates.split(',').map(Number)
    : getCentroid(epciContours[0]?.geometry?.coordinates[0][0]);

  const qualiteEauxmap = qualiteEauxBaignade.map((qualite) => {
    return {
      coordinates: [qualite.LAT, qualite.LONG],
      nomSite: qualite.POINT,
      qualite2013: qualite.QEB_2013?.slice(-1),
      qualite2014: qualite.QEB_2014?.slice(-1),
      qualite2015: qualite.QEB_2015?.slice(-1),
      qualite2016: qualite.QEB_2016?.slice(-1),
      qualite2017: qualite.QEB_2017?.slice(-1),
      qualite2018: qualite.QEB_2018?.slice(-1),
      qualite2019: qualite.QEB_2019?.slice(-1),
      qualite2020: qualite.QEB_2020?.slice(-1),
      icon: L.divIcon({
        html: `<div><img src=${qualiteIcon(qualite.QEB_2020?.slice(-1))} /></div>`,
        className: 'svg-marker',
        iconSize: [24, 24],
        iconAnchor: [0, 0]
        // shadowUrl: "marker_icon_blue.svg",
        // popupAnchor: [-3, -76],
        // shadowSize: [0, 0],
        // shadowAnchor: [22, 94],
      })
    };
  });

  const territoireStyle: StyleFunction<L.PathOptions> = () => {
    return {
      weight: 1,
      opacity: 1,
      color: '#161616',
      fillOpacity: 0
    };
  };

  const createClusterCustomIcon = function (cluster: Any) {
    const number = cluster.getChildCount();
    const size = number < 4 ? 40 : 40 + number > 65 ? 65 : 40 + number;
    return L.divIcon({
      html: `<span>${number}</span>`,
      className: 'custom-marker-cluster',
      iconSize: L.point(size, size, true)
      // iconSize: [45, 45],
      // iconAnchor: [15, 15]
    });
  };

  const CustomTooltip = (sitesInCluster: string[]) => {
    const displayedSites = sitesInCluster.slice(0, 10);
    return `<div style="padding: 0.25rem;">
        <div style="font-size: 0.75rem; font-family: Marianne; font-weight: 400; border-bottom: 1px solid #B8B8B8; margin-bottom: 0.5rem;">
          Dans ce regroupement :
        </div>
        <div style="display: flex; flex-direction: column; font-size: 10px; font-family: Marianne; font-weight: 700;">
          ${displayedSites.map((site) => `<div>${site}</div>`).join('')}
          ${sitesInCluster.length > 10 ? '<div>...</div>' : ''}
        </div>
      </div>`;
  };

  return (
    <MapContainer
      center={
        commune
          ? (centerCoord as LatLngExpression)
          : [centerCoord[0], centerCoord[1]]
      }
      zoom={commune ? 11 : 9}
      ref={mapRef}
      style={{ height: '500px', width: '100%', cursor: 'pointer' }}
      attributionControl={false}
      zoomControl={false}
    >
      {process.env.NEXT_PUBLIC_ENV === 'preprod' ? (
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      ) : (
        <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
      )}
      <GeoJSON
        data={
          (commune as GeoJsonObject) ??
          (epciContours as unknown as GeoJsonObject)
        }
        style={territoireStyle}
      />
      <MarkerClusterGroup
        chunkedLoading
        removeOutsideVisibleBounds={true}
        maxClusterRadius={30}
        iconCreateFunction={createClusterCustomIcon}
        polygonOptions={{
          color: 'transparent',
          fillOpacity: 0
        }}
        onMouseOver={(e: LeafletMouseEvent) => {
          const sitesInCluster = e.propagatedFrom
            .getAllChildMarkers()
            .map((el: { options: { title: string } }) => el.options.title);
          e.propagatedFrom.bindTooltip(CustomTooltip(sitesInCluster), {
            opacity: 0.97,
            direction: e.originalEvent.layerY > 250 ? 'top' : 'bottom',
            offset: [0, e.originalEvent.layerY > 250 ? -25 : 25]
          });
          e.propagatedFrom.openTooltip();
        }}
      >
        {qualiteEauxmap.map((el, i) => {
          return (
            <Marker
              key={i}
              keyboard={true}
              title={el.nomSite!}
              icon={el.icon}
              position={el.coordinates as LatLngExpression}
              ref={markerRef}
              eventHandlers={{
                mouseover: (event) => {
                  event.target.openPopup();
                },
                mouseout: (event) => {
                  event.target.closePopup();
                }
              }}
            >
              <style>
                {`
                .leaflet-popup-content {
                  margin: 0 !important;
                  width: fit-content !important;
                }
                .leaflet-popup-content p {
                  margin: 0 !important;
                }
                .leaflet-popup-close-button {
                  display: none !important;
                }
                .leaflet-interactive {
                  cursor: pointer;
                }
                `}
                <Popup offset={[6, 8]}>
                  <div className="p-[0.75rem]">
                    <div className={styles.qualiteSitesBaignadePopupWrapper}>
                      <Image
                        src={
                          el.qualite2020 === 'E'
                            ? qualiteExcellent
                            : el.qualite2020 === 'B'
                              ? qualiteBon
                              : el.qualite2020 === 'S'
                                ? qualiteSuffisant
                                : el.qualite2020 === 'I'
                                  ? qualiteInsuffisant
                                  : qualiteInconnu
                        }
                        alt=""
                      />
                      <div className={styles.qualiteSitesBaignadePopupText}>
                        <p style={{ fontWeight: 400 }}>{el.nomSite}</p>
                        <p style={{ fontWeight: 700 }}>
                          {el.qualite2020 === 'E'
                            ? 'Excellent'
                            : el.qualite2020 === 'B'
                              ? 'Bon'
                              : el.qualite2020 === 'S'
                                ? 'Suffisant'
                                : el.qualite2020 === 'I'
                                  ? 'Insuffisant'
                                  : 'Pas de données disponibles'}
                        </p>
                      </div>
                    </div>
                  </div>
                </Popup>
              </style>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};
