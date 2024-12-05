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
  const { agricultureBio } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;
  const [datavizTab, setDatavizTab] = useState<string>("Répartition");

  const title = <>
    <div>
      Les superficies totales en agriculture biologique comprennent : 
    </div>
    <div>
      <ul>
        <li>les surfaces « certifiées bio » qui rassemblent les parcelles dont la période de conversion est terminée et dont la production peut être commercialisée avec la mention « agriculture biologique » ;</li>
        <li>les superficies en conversion (la durée de conversion variant de 2 ans pour les cultures annuelles à 3 ans pour les cultures pérennes).</li>
      </ul>
    </div>
  </>;

  return (
    <>
      {agricultureBio[0] ? (
        <div className={styles.container}>
          <div className="w-1/3">
            <div className={styles.explicationWrapper}>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?"/>
            </div>
            <div className="px-4">
              <p>
                Cet indicateur fait partie du kit des indicateurs de développement durable fourni dans le cadre de l’Agenda 2030 et 
                des 17 Objectifs de Développement Durable (ODD)
              </p>
              <p>
                L’agriculture biologique regroupe un ensemble de pratiques agricoles respectueuses des équilibres écologiques qui 
                contribue à la préservation des sols et des ressources naturelles (non-utilisation de produits chimiques de synthèse, 
                la non-utilisation d'OGM, le recyclage des matières organiques, la rotation des cultures et la lutte biologique). 
                L'agriculture biologique apporte une réponse essentielle à la préservation de notre environnement. 
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
