'use client';

import qualiteBon from '@/assets/icons/qualite_baignade_bon.svg';
import qualiteExcellent from '@/assets/icons/qualite_baignade_excellent.svg';
import qualiteInsuffisant from '@/assets/icons/qualite_baignade_insuffisant.svg';
import qualiteManquePrelevement from '@/assets/icons/qualite_baignade_manque_prelevement.svg';
import qualiteNonClasse from '@/assets/icons/qualite_baignade_non_classe.svg';
import qualiteSuffisant from '@/assets/icons/qualite_baignade_suffisant.svg';
import { QualiteSitesBaignade } from '@/lib/postgres/models';
import { Marker, Popup } from '@/lib/react-leaflet';
import { Any } from '@/lib/utils/types';
import L, { LatLngExpression, LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';
import { useRef } from 'react';
import MarkerClusterGroup from 'react-leaflet-cluster';
import styles from '../maps.module.scss';
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
            ? '/qualite_baignade_manque_prelevement.svg'
            : '/qualite_baignade_non_classe.svg';
};

const SitesBaignadeMarkers = (props: {
  qualiteEauxBaignade: QualiteSitesBaignade[];
}) => {
  const { qualiteEauxBaignade } = props;
  const markerRef = useRef(null);

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
        iconSize: [18, 18],
        iconAnchor: [9, 9]
      })
    };
  });

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
    <MarkerClusterGroup
      chunkedLoading
      removeOutsideVisibleBounds={true}
      maxClusterRadius={20}
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
                                : el.qualite2020 === 'P'
                                  ? qualiteManquePrelevement
                                  : qualiteNonClasse
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
                                : el.qualite2020 === 'P'
                                  ? 'Insuffisamment de prélèvement'
                                  : 'Site non classé'}
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
  );
};

export default SitesBaignadeMarkers;
