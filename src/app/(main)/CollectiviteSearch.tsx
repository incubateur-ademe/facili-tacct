import { SearchBarComp } from '@/components/searchbar/SearchBar';
import styles from '../root.module.scss';

const CollectiviteSearch = () => {
  return (
    <div className={styles.collectiviteWrapper} >
      <h2 className="text-center text-[1.5rem] font-bold">
        Sélectionnez votre territoire
      </h2>
      <SearchBarComp />
    </div>
  );
};

export default CollectiviteSearch;
