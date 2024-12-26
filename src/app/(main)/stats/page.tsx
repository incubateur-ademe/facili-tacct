import EpciCount from './metrics/epciCount';
import RessourcesClicked from './metrics/ressourcesClicked';
import ThematiquesTypes from './metrics/thematiquesTypes';
import UniqueUsers from './metrics/uniqueUsers';

const Page = async () => {
  return (
    <div>
      <UniqueUsers />
      <EpciCount />
      <ThematiquesTypes />
      <RessourcesClicked />
    </div>
  );
};

export default Page;
