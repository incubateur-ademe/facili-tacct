"use client";

import eclair_icon_black from "@/assets/icons/themes/eclair_icon_black.svg";
import flocon_icon_black from "@/assets/icons/themes/flocon_icon_black.svg";
import robinet_icon_black from "@/assets/icons/themes/robinet_icon_black.svg";
import tracteur_icon_black from "@/assets/icons/themes/tracteur_icon_black.svg";
import usine_icon_black from "@/assets/icons/themes/usine_icon_black.svg";
import vagues_icon_black from "@/assets/icons/themes/vagues_icon_black.svg";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { RessourcesEau } from "@/lib/postgres/models";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import styles from "./ressourcesEau.module.scss";

const data = [
  {
    titre: "Agriculture",
    icon: <Image src={tracteur_icon_black} alt="" />,
  },
  {
    titre: "Eau potable",
    icon: <Image src={robinet_icon_black} alt="" />,
  },
  {
    titre: "Industrie et autres usages économiques",
    icon: <Image src={usine_icon_black} alt="" />,
  },
  {
    titre: "Refroidissement des centrales électriques",
    icon: <Image src={flocon_icon_black} alt="" />,
  },
  {
    titre: "Alimentation des canaux",
    icon: <Image src={vagues_icon_black} alt="" />,
  },
  {
    titre: "Production d'électricité (barrages hydro-électriques)",
    icon: <Image src={eclair_icon_black} alt="" />,
  }
]



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

  console.log("ressourcesEau", ressourcesEau);
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
            <div className={styles.graphWrapper}>
              <p style={{ padding: "1em", margin: "0" }}>
                <b>Titre</b>
              </p>
              <div className={styles.prelevementEauWrapper}>
                <div className={styles.sliderDataWrapper}>
                  {
                    data.map((item, index) => {
                      return (
                        <div key={index} className={styles.sliderDataItem}>
                          {item.icon}
                          <p>{item.titre}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <p style={{ padding: "1em", margin: "0" }}>
                Source : <b style={{ color: "#0063CB" }}>XXXXXXX</b>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};
