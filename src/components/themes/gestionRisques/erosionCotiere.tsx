import { MapErosionCotiere } from "@/components/maps/mapErosionCotiere";
import { ErosionCotiereMapper } from "@/lib/mapper/erosionCotiere";
import { ErosionCotiere } from "@/lib/postgres/models";

const ErosionCotes = (props: { erosionCotiere: ErosionCotiere[] }) => {
  const { erosionCotiere } = props;
  const erosionCotiereMap = erosionCotiere.map(ErosionCotiereMapper);

  return (
    <div>
      <h1>ErosionCotes</h1>
      <MapErosionCotiere erosionCotiere={erosionCotiereMap} />
    </div>
  );
};

export default ErosionCotes;
