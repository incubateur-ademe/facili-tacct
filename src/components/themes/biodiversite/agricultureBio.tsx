import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { AgricultureBio } from "@/lib/postgres/models";
import { CustomTooltip } from "@/lib/utils/CalculTooltip";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import AgricultureBioDataViz from "./agricultureBioDataviz";
import styles from "./biodiversite.module.scss";

const AgricultureBiologique = (props: {
  agricultureBio: AgricultureBio[];
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
}) => {
  const { agricultureBio, data } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;
  const [datavizTab, setDatavizTab] = useState<string>("Répartition");

  const title = "Coucou";
  return (
    <>
      {agricultureBio ? (
        <div className={styles.container}>
          <div className="w-1/3">
            <div className={styles.explicationWrapper}>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?"/>
            </div>
            <div className="px-4">
              <p>
                Integer ac diam. Nullam porttitor dolor eget metus. Nulla sed metus quis tortor lacinia tempor. 
                Mauris mauris dui, faucibus vitae, aliquet sit amet, placerat a, ante. Nunc placerat tincidunt neque. 
                Mauris egestas dolor ut ipsum cursus malesuada. Curabitur odio. Nunc lobortis. Sed mattis tempor felis.
                 Mauris dolor quam, facilisis at, bibendum sit amet, rutrum ornare, pede. Suspendisse accumsan sagittis velit. 
                 Pellentesque varius laoreet lorem. Vivamus egestas sapien id diam.
              </p>
            </div>
          </div>
          <div className="w-2/3">              
            <AgricultureBioDataViz 
              agricultureBio={agricultureBio}
              datavizTab={datavizTab}
              setDatavizTab={setDatavizTab}
            />
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};

export default AgricultureBiologique;
