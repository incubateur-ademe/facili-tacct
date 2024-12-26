import EpciCount from './epciCount';
import RessourcesClicked from './ressourcesClicked';
import ThematiquesTypes from './thematiquesTypes';
import UniqueUsers from './uniqueUsers';

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
