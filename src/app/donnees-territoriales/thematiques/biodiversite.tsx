import { Loader } from '@/components/loader';
import { GetCommunes } from '@/lib/queries/postgis/cartographie';
import { GetAgricultureBio, GetBiodiversite } from '@/lib/queries/thematiques';
import { themes } from "@/lib/utils/themes";
import dynamic from 'next/dynamic';
import styles from "../donnees.module.scss";

const DynamicPageComp = dynamic(() => import("./biodiversiteComp"), {
  ssr: false,
  loading: () => <Loader />,
});

const Biodiversite = async (searchParams: SearchParams) => {
  const theme = themes.biodiversite;
  const codepci = searchParams.searchParams.codepci;
  const codgeo = searchParams.searchParams.codgeo;
  const dbBiodiversite = await GetBiodiversite(codepci);
  const carteCommunes = await GetCommunes(codepci);
  const dbAgricultureBio = await GetAgricultureBio(codepci);

  return (
    <div>
      <div className={styles.container}>
        <DynamicPageComp
          data={theme}
          biodiversite={dbBiodiversite!}
          carteCommunes={carteCommunes}
          agricultureBio={dbAgricultureBio!}
        />
      </div>
    </div>
  );
};

export default Biodiversite;
