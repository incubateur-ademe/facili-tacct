import { MapErosionCotiere } from "@/components/maps/mapErosionCotiere";
import { EpciContoursMapper } from "@/lib/mapper/epci";
import { ErosionCotiereMapper } from "@/lib/mapper/erosionCotiere";
import { EpciContours, ErosionCotiere } from "@/lib/postgres/models";

const ErosionCotes = (props: { erosionCotiere: ErosionCotiere[], epciContours:EpciContours[] }) => {
  const { erosionCotiere, epciContours } = props;
  const erosionCotiereMap = erosionCotiere.map(ErosionCotiereMapper);
  const epciContoursMap = epciContours.map(EpciContoursMapper);
  return (
    <div>
      <h1>Erosion des côtes</h1>
      <MapErosionCotiere erosionCotiere={erosionCotiereMap} epciContours={epciContoursMap} />
    </div>
  );
};

export default ErosionCotes;
