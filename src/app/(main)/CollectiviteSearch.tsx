import { SearchBarComp } from '@/components/searchbar/SearchBar';
import styles from './main.module.scss';

const CollectiviteSearch = () => {
  return (
    <div className={styles.collectiviteWrapper} >
      <h2 className="text-center text-[1rem] font-weight-700">
        Quel territoire représentez-vous ?
      </h2>
      <SearchBarComp />
    </div>
  );
};

export default CollectiviteSearch;
