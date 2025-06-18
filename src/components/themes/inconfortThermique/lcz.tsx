import MapLCZ2 from "@/components/maps/mapLCZ2";
import { CarteCommunes } from "@/lib/postgres/models";

export const LCZ = ({
  carteCommunes
}: {
  carteCommunes: CarteCommunes[];
}) => {
  return (
    <div >
      <h2>Zones LCZ</h2>
      <MapLCZ2 carteCommunes={carteCommunes} />
      {/* <MapLCZ /> */}
    </div>
  )
}
