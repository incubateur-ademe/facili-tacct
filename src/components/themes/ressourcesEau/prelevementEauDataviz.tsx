import eclair_icon_black from "@/assets/icons/themes/eclair_icon_black.svg";
import flocon_icon_black from "@/assets/icons/themes/flocon_icon_black.svg";
import robinet_icon_black from "@/assets/icons/themes/robinet_icon_black.svg";
import tracteur_icon_black from "@/assets/icons/themes/tracteur_icon_black.svg";
import usine_icon_black from "@/assets/icons/themes/usine_icon_black.svg";
import vagues_icon_black from "@/assets/icons/themes/vagues_icon_black.svg";
import legendEpci from "@/assets/images/legend_prelevement_eau_epci.svg";
import SubTabs from "@/components/SubTabs";
import { RessourcesEau } from "@/lib/postgres/models";
import { SumByKey } from "@/lib/utils/reusableFunctions/sumByKey";
import { Progress } from "antd";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import styles from "./ressourcesEau.module.scss";

type Props = {
  ressourcesEau: RessourcesEau[];
  datavizTab: string;
  setDatavizTab: (value: string) => void;
}

const PrelevementEauDataViz = (props: Props) => {
  const { 
    ressourcesEau,
    datavizTab,
    setDatavizTab
  } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;

  const data = [
    {
      titre: "Agriculture",
      icon: <Image src={tracteur_icon_black} alt="" />,
      sumDptmt: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2020"),
      sumCollectivite: codgeo ? SumByKey(ressourcesEau
        .filter((obj) => obj.code_geographique === codgeo)
        .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2020") 
        : SumByKey(ressourcesEau
          .filter((obj) => obj.epci === codepci)
          .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("agriculture")), "A2020"),
      color: "#00C190"
    },
    {
      titre: "Eau potable",
      icon: <Image src={robinet_icon_black} alt="" />,
      sumDptmt: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2020"),
      sumCollectivite: codgeo ? SumByKey(ressourcesEau
        .filter((obj) => obj.code_geographique === codgeo)
        .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2020") 
        : SumByKey(ressourcesEau
          .filter((obj) => obj.epci === codepci)
          .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")), "A2020"),
      color: "#009ADC"
    },
    {
      titre: "Industrie et autres usages économiques",
      icon: <Image src={usine_icon_black} alt="" />,
      sumDptmt: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2020"),
      sumCollectivite: codgeo ? SumByKey(ressourcesEau
        .filter((obj) => obj.code_geographique === codgeo)
        .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2020") 
        : SumByKey(ressourcesEau
          .filter((obj) => obj.epci === codepci)
          .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("industrie")), "A2020"),
      color: "#7A49BE"
    },
    {
      titre: "Refroidissement des centrales électriques",
      icon: <Image src={flocon_icon_black} alt="" />,
      sumDptmt: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2020"),
      sumCollectivite: codgeo ? SumByKey(ressourcesEau
        .filter((obj) => obj.code_geographique === codgeo)
        .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2020") 
        : SumByKey(ressourcesEau
          .filter((obj) => obj.epci === codepci)
          .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("refroidissement")), "A2020"),
      color: "#BB43BD"
    },
    {
      titre: "Alimentation des canaux",
      icon: <Image src={vagues_icon_black} alt="" />,
      sumDptmt: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2020"),
      sumCollectivite: codgeo ? SumByKey(ressourcesEau
        .filter((obj) => obj.code_geographique === codgeo)
        .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2020") 
        : SumByKey(ressourcesEau
          .filter((obj) => obj.epci === codepci)
          .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("alimentation")), "A2020"),
      color: "#00C2CC"
    },
    {
      titre: "Production d'électricité (barrages hydro-électriques)",
      icon: <Image src={eclair_icon_black} alt="" />,
      sumDptmt: SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2020"),
      sumCollectivite: codgeo ? SumByKey(ressourcesEau
        .filter((obj) => obj.code_geographique === codgeo)
        .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2020") 
        : SumByKey(ressourcesEau
          .filter((obj) => obj.epci === codepci)
          .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("production")), "A2020"),
      color: "#FFCF5E"
    },
  ];

  const totalDptmt = SumByKey(ressourcesEau.filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("total")), "A2020");
  const total = codgeo ? SumByKey(ressourcesEau
    .filter((obj) => obj.code_geographique === codgeo)
    .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("total")), "A2020") 
    : SumByKey(ressourcesEau
      .filter((obj) => obj.epci === codepci)
      .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes("total")), "A2020");

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.prelevementEauGraphTitleWrapper}>
        <h2>Prélèvements en eau selon les grands usages</h2>
        <SubTabs data={["Répartition", "Évolution"]} defaultTab={datavizTab} setValue={setDatavizTab} />
      </div>
      <div className={styles.prelevementEauWrapper}>
      {
        datavizTab === "Répartition" ? (
          data.filter(e => e.sumCollectivite !== 0).sort((a, b) => b.sumCollectivite - a.sumCollectivite).map((item, index) => {
            return (
              <div key={index} className={styles.progressDataWrapper}>
                <div className={styles.progressDesign}>
                  {item.icon}
                  <div className={styles.progressBar}>
                    <p>{item.titre}</p>
                    <div className={styles.barMarker}>
                      <Progress 
                        percent={Number((100 * item.sumCollectivite / total))} 
                        showInfo={false}
                        status="normal"
                        strokeColor={item.color}
                        // size={[400, 8]}
                        style={{ width: "95%" }}
                        type="line"
                        trailColor="#F9F9FF"
                      />
                      <div style={{position: "relative", width: "100%", transform:`translateX(${95 * item.sumDptmt / totalDptmt}%) translateY(-1.1rem)`}}>
                        <div className={styles.marker}></div>
                        {/* <p>{Math.round(95 * item.sumDptmt / totalDptmt)}%</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.progressNumbers}>
                  <p><b>{(100 * item.sumCollectivite / total).toFixed(1)}%</b></p>
                  <p>{(item.sumCollectivite).toFixed(0)}m³</p>
                </div>
              </div>
            )
          })
        ) : ("")
      }
      <Image src={legendEpci} alt="" style={{alignSelf: "end"}}/>
      </div>
      <p style={{ padding: "1em", margin: "0" }}>
        Source : <b style={{ color: "#0063CB" }}>XXXXXXX</b>
      </p>
    </div>
  )
}

export default PrelevementEauDataViz;
