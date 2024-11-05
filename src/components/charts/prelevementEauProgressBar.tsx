"use client";

import eclair_icon_black from "@/assets/icons/themes/eclair_icon_black.svg";
import flocon_icon_black from "@/assets/icons/themes/flocon_icon_black.svg";
import robinet_icon_black from "@/assets/icons/themes/robinet_icon_black.svg";
import tracteur_icon_black from "@/assets/icons/themes/tracteur_icon_black.svg";
import usine_icon_black from "@/assets/icons/themes/usine_icon_black.svg";
import vagues_icon_black from "@/assets/icons/themes/vagues_icon_black.svg";
import legendEpci from "@/assets/images/legend_prelevement_eau_epci.svg";
import styles from "@/components/themes/ressourcesEau/ressourcesEau.module.scss";
import { RessourcesEau } from "@/lib/postgres/models";
import { SumByKey } from "@/lib/utils/reusableFunctions/sumByKey";
import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import { Progress } from "antd";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    color: '#3a3a3a',
    maxWidth: 600,
    boxShadow: "0px 2px 6px 0px rgba(0, 0, 18, 0.16)",
    padding: "20px",
    fontFamily: "Marianne"
  },
}));

const Filter = (data: RessourcesEau[], codgeo: string, codepci: string, type: string, year: string) => {
  const sumFiltered = SumByKey(
    data.filter(
      obj => codgeo ? obj.code_geographique === codgeo : obj.epci === codepci
    ).filter(
        (item) => item.LIBELLE_SOUS_CHAMP?.includes(type)
      ), year
    );
  return sumFiltered;
}

const PrelevementEauProgressBars = ({ ressourcesEau }: { ressourcesEau: RessourcesEau[] }) => {
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;

  const data = [
    {
      titre: "Agriculture",
      icon: <Image src={tracteur_icon_black} alt="" />,
      sumDptmt: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2020"),
      sumCollectivite: Filter(ressourcesEau, codgeo, codepci, "agriculture", "A2020"),
      color: "#00C190"
    },
    {
      titre: "Eau potable",
      icon: <Image src={robinet_icon_black} alt="" />,
      sumDptmt: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2020"),
      sumCollectivite: Filter(ressourcesEau, codgeo, codepci, "potable", "A2020"),
      color: "#009ADC"
    },
    {
      titre: "Industrie et autres usages économiques",
      icon: <Image src={usine_icon_black} alt="" />,
      sumDptmt: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2020"),
      sumCollectivite: Filter(ressourcesEau, codgeo, codepci, "industrie", "A2020"),
      color: "#7A49BE"
    },
    {
      titre: "Refroidissement des centrales électriques",
      icon: <Image src={flocon_icon_black} alt="" />,
      sumDptmt: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2020"),
      sumCollectivite: Filter(ressourcesEau, codgeo, codepci, "refroidissement", "A2020"),
      color: "#BB43BD"
    },
    {
      titre: "Alimentation des canaux",
      icon: <Image src={vagues_icon_black} alt="" />,
      sumDptmt: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2020"),
      sumCollectivite: Filter(ressourcesEau, codgeo, codepci, "alimentation", "A2020"),
      color: "#00C2CC"
    },
    {
      titre: "Production d'électricité (barrages hydro-électriques)",
      icon: <Image src={eclair_icon_black} alt="" />,
      sumDptmt: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2020"),
      sumCollectivite: Filter(ressourcesEau, codgeo, codepci, "production", "A2020"),
      color: "#FFCF5E"
    },
  ];

  const totalDptmt = SumByKey(
    ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("total")), "A2020"
  ) === 0 ? 1 : SumByKey(
    ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("total")), "A2020"
  );
  const total = Filter(ressourcesEau, codgeo, codepci, "total", "A2020") === 0 ? 1 : Filter(ressourcesEau, codgeo, codepci, "total", "A2020");
  const collectivite = codgeo ? ressourcesEau.filter((obj) => obj.code_geographique === codgeo)[0]?.libelle_geographique : ressourcesEau.filter((obj) => obj.epci === codepci)[0]?.libelle_epci;
  const departement = ressourcesEau[0].departement

  return (
    <div className={styles.prelevementEauWrapper}>
      {
        data.find(e => e.sumCollectivite !== 0) ? (
          <>
            {
              data.sort((a, b) => b.sumCollectivite - a.sumCollectivite).map((item, index) => (
                <HtmlTooltip 
                  title={
                    <div className={styles.tooltip}>
                      <h3>{item.titre}</h3>
                      <p>
                        {collectivite} : {" "}
                        <b>{(100 * item.sumCollectivite / total).toFixed(1)}%</b> {" "}
                        ({(item.sumCollectivite/1000000).toFixed(1)} Mm³)
                      </p>
                      <p>
                        Département {departement} : {" "}
                        <b>{(100 * item.sumDptmt / totalDptmt).toFixed(1)}%</b> {" "}
                        ({(item.sumDptmt/1000000).toFixed(1)} Mm³)
                        </p>
                    </div>
                  }
                  placement="top"
                >
                  <div key={index} className={styles.progressDataWrapper}>
                    <div className={styles.progressDesign}>
                      {item.icon}
                      <div className={styles.progressBar}>
                        <p>{item.titre}</p>
                        <div className={styles.barMarker}>
                          <Progress 
                            percent={Number((100 * item.sumCollectivite / total))} 
                            showInfo={false}
                            strokeColor={item.color}
                            size={["100%", 12]}
                            style={{ width: "95%" }}
                            type="line"
                            trailColor="#F9F9FF"
                          />
                          <div style={{
                            position: "relative",
                            width: "100%",
                            transform:`translate(${95 * item.sumDptmt / totalDptmt}%, -1.25rem)`}}>
                            <div className={styles.marker}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.progressNumbers}>
                      <p><b>{(100 * item.sumCollectivite / total).toFixed(1)}%</b></p>
                      <p>{(item.sumCollectivite/1000000).toFixed(1)} Mm³</p>
                    </div>
                  </div>
                </HtmlTooltip>                
              ))
            }
            <Image src={legendEpci} alt="" style={{alignSelf: "end"}}/>
          </>
        ) : (
          <div style={{height:"inherit", alignContent: "center", textAlign:"center"}}>
            Aucun prélèvement en eau trouvé en 2020 pour cette collectivité : {collectivite}
          </div>
        )
      }
  </div>
)};

export default PrelevementEauProgressBars;
