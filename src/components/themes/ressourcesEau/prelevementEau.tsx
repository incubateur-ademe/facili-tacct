"use client";

import eclair_icon_black from "@/assets/icons/themes/eclair_icon_black.svg";
import flocon_icon_black from "@/assets/icons/themes/flocon_icon_black.svg";
import robinet_icon_black from "@/assets/icons/themes/robinet_icon_black.svg";
import tracteur_icon_black from "@/assets/icons/themes/tracteur_icon_black.svg";
import usine_icon_black from "@/assets/icons/themes/usine_icon_black.svg";
import vagues_icon_black from "@/assets/icons/themes/vagues_icon_black.svg";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { RessourcesEau } from "@/lib/postgres/models";
import { SumByKey } from "@/lib/utils/reusableFunctions/sumByKey";
import { Box, Slider } from "@mui/material";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
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

  const data = [
    {
      titre: "Agriculture",
      icon: <Image src={tracteur_icon_black} alt="" />,
      sum: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2020"),
    },
    {
      titre: "Eau potable",
      icon: <Image src={robinet_icon_black} alt="" />,
      sum: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("eau potable")), "A2020"),
    },
    {
      titre: "Industrie et autres usages économiques",
      icon: <Image src={usine_icon_black} alt="" />,
      sum: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie et autres usages économiques")), "A2020"),
    },
    {
      titre: "Refroidissement des centrales électriques",
      icon: <Image src={flocon_icon_black} alt="" />,
      sum: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2020"),
    },
    {
      titre: "Alimentation des canaux",
      icon: <Image src={vagues_icon_black} alt="" />,
      sum: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2020"),
    },
    {
      titre: "Production d'électricité (barrages hydro-électriques)",
      icon: <Image src={eclair_icon_black} alt="" />,
      sum: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2020"),
    },
  ];

  const total = SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("total")), "A2020");


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
                <div className={styles.slidersWrapper}>
                  {
                    data.map((item, index) => {
                      return (
                        <div key={index} className={styles.sliderDataWrapper}>
                          {item.icon}
                          <p>{item.titre}</p>
                          <Box sx={{width: "300px"}} >
                            <Slider
                              sx={{ flexGrow: 1 }}
                              value={item.sum}
                              valueLabelDisplay="off"
                              max={total}
                              min={0}
                            />
                          </Box>
                          <p>{(100 * item.sum / total).toFixed(2)}%</p>
                          <p>{(item.sum).toFixed(0)} m3</p>
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
