"use client";

import { EpciContoursDto, ErosionCotiereDto } from "@/lib/dto";
import { GeoJSON, MapContainer, TileLayer } from "@/lib/react-leaflet";
import { Any } from "@/lib/utils/types";
import { StyleFunction } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

const getCentroid = (arr: number[][]) => {
  return arr?.reduce(
    (x: number[], y: number[]) => {
      return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
    },
    [0, 0],
  );
};


export const MapErosionCotiere = (props: {
  erosionCotiere: ErosionCotiereDto[];
  epciContours: EpciContoursDto[];
}) => {
  const { erosionCotiere, epciContours } = props;
  const searchParams = useSearchParams();
  const codepci = searchParams.get("codepci")!;  
  const mapRef = useRef(null);
  const centerCoord: number[] = getCentroid(epciContours[0].geometry.coordinates[0][0]);

  const getColor = (d: number) => {
    if (d >= 3) {
      return "#046803";
    } else if (d < 3 && d >= 1.5) {
      return "#1DA546";
    } else if (d < 1.5 && d >= 0.5) {
      return "#86CD63";
    } else if (d < 0.5 && d >= 0.1) {
      return "#DCEE9F";
    } else if (d < 0.1 && d > -0.1) {
      return "#AFF7F1";
    } else if (d <= -0.1 && d > -0.5) {
      return "#FEDD9A";
    } else if (d <= -0.5 && d > -1.5) {
      return "#F59550";
    } else if (d <= -1.5 && d > -3) {
      return "#B87830";
    } else if (d <= -3) {
      return "#A74E10";
    } else {
      return "#9D9C9C";
    }
  }

  const style: StyleFunction<Any> = feature => {
    const typedFeature = feature as ErosionCotiereDto;
    return {
      fillColor: getColor(typedFeature?.properties.taux),
      weight: 5,
      opacity: 1,
      color: getColor(typedFeature?.properties.taux),
      fillOpacity: 0.95,
    };
  };

  const epciStyle: StyleFunction<Any> = () => {
    return {
      weight: 1,
      opacity: 1,
      color: "#161616",
      fillOpacity: 0,
    };
  };

  return (
    <MapContainer
      center={[centerCoord[1], centerCoord[0]]}
      zoom={10}
      ref={mapRef}
      style={{ height: "500px", width: "100%" }}
      attributionControl={false}
      zoomControl={false}
      minZoom={9}
    >
      <TileLayer
	      attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=MBbcKi3EyFqyyHvvHVbfnE4iOJ34FiUs1yWbVID476VAReeeO0NdrKWg6FljGBIC"
      />
      <GeoJSON ref={mapRef} data={erosionCotiere as Any} style={style} />
      <GeoJSON ref={mapRef} data={epciContours as Any} style={epciStyle}/>
      {/* <div className={styles.ErosionCotiereLegendButton}>
        <Image src={MapIcon} alt="" width={48} height={48}/>
      </div> */}
    </MapContainer>
  );
};
