import EpciCount from './epciCount';
import ThematiquesTypes from './thematiquesTypes';
import UniqueUsers from './uniqueUsers';

const Page = async () => {
  return (
    <div>
      <UniqueUsers />
      <EpciCount />
      <ThematiquesTypes />
    </div>
  );
};

export default Page;
