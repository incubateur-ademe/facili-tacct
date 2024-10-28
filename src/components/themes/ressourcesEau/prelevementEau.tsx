"use client";

import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { RessourcesEau } from "@/lib/postgres/models";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import PrelevementEauDataViz from "./prelevementEauDataviz";
import styles from "./ressourcesEau.module.scss";

export const PrelevementEau = (props: {
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  ressourcesEau: RessourcesEau[];
}) => {
  const { ressourcesEau } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;
  const [datavizTab, setDatavizTab] = useState<string>("Répartition");

  return (
    <>
      {1 === 1 ? (
        <div className={styles.container}>
          <div className="w-1/3">
            <div className={styles.explicationWrapper}>
              { codgeo ?
                <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                  Dans la commune de , {" "}
                  <b>XXXX%</b> .
                </p>
                : 
                <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                  Dans l'EPCI , {" "}
                  <b>XXXXX%</b> .
                </p>
              }
            </div>
            <div className="px-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inchoavit, et
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inchoavit, et
              </p>
              <p>Lorem </p>
            </div>
          </div>
          <div className="w-2/3">
            <PrelevementEauDataViz 
              ressourcesEau={ressourcesEau}
              datavizTab={datavizTab}
              setDatavizTab={setDatavizTab}/>
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};
