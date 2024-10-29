"use client";

import eclair_icon_black from "@/assets/icons/themes/eclair_icon_black.svg";
import flocon_icon_black from "@/assets/icons/themes/flocon_icon_black.svg";
import robinet_icon_black from "@/assets/icons/themes/robinet_icon_black.svg";
import tracteur_icon_black from "@/assets/icons/themes/tracteur_icon_black.svg";
import usine_icon_black from "@/assets/icons/themes/usine_icon_black.svg";
import vagues_icon_black from "@/assets/icons/themes/vagues_icon_black.svg";
import styles from "@/components/themes/ressourcesEau/ressourcesEau.module.scss";
import { RessourcesEau } from "@/lib/postgres/models";
import { SumByKey } from "@/lib/utils/reusableFunctions/sumByKey";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  ressourcesEau: RessourcesEau[];
  sliderValue: number[];
}

const ressourcesEauYears = ["A2008", "A2009", "A2010", "A2011", "A2012", "A2013", "A2014", "A2015", "A2016", "A2017", "A2018", "A2019", "A2020"];
const columns = ["LIBELLE_SOUS_CHAMP", "SOUS_CHAMP", "code_geographique", "departement", "epci", "index", "libelle_epci", "libelle_geographique", "region"]


const  ressourceEauFilter = (sliderValues: number[], allYears: string[], data: RessourcesEau[]) => {
  const values = [`A${sliderValues[0]}`, `A${sliderValues[1]}`];
  const newSelectedYears = allYears.slice(allYears.indexOf(values[0]), allYears.indexOf(values[1]) + 1);
  const newKeys = columns.concat(newSelectedYears);
  const newArray = data.map(item => {
    const newItem: any = {};
    newKeys.forEach(key => {
      newItem[key] = (item as any)[key];
    });
    return newItem;
  });

  return newArray;
}

const PrelevementEauBarChart = (props: Props) => {
  const { ressourcesEau, sliderValue } = props;
  const [filteredRessourcesEau, setFilteredRessourcesEau] = useState(ressourcesEau);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;
  const collectiviteData = codgeo ? filteredRessourcesEau.filter((obj) => obj.code_geographique === codgeo) : filteredRessourcesEau.filter((obj) => obj.epci === codepci);

  useEffect(() => {
    const values = [`A${sliderValue[0]}`, `A${sliderValue[1]}`];
    setSelectedYears(ressourcesEauYears.slice(ressourcesEauYears.indexOf(values[0]), ressourcesEauYears.indexOf(values[1]) + 1))
    setFilteredRessourcesEau(ressourceEauFilter(sliderValue, ressourcesEauYears, ressourcesEau));
  }, [sliderValue]);

  console.log("ressourcesEau", collectiviteData);


  const data = [
    {
      titre: "Agriculture",
      icon: <Image src={tracteur_icon_black} alt="" />,
      graphData: collectiviteData.filter(
        (item) => item.LIBELLE_SOUS_CHAMP?.includes("potable")).map(
          (item) => Object.keys(item).filter(
            key => selectedYears.includes(key))),
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

  console.log("data", data);
  return (
    <div className={styles.prelevementEauWrapper}>

    {
      data.filter(e => e.sumCollectivite !== 0).sort((a, b) => b.sumCollectivite - a.sumCollectivite).map((item, index) => (
        <div key={index} className={styles.progressDataWrapper}>
          <div className={styles.progressDesign}>
            {item.icon}
            <div className={styles.progressBar}>
              <p>{item.titre}</p>
              <div className={styles.barMarker}>

              </div>
            </div>
          </div>
        </div>
      ))
    }
    </div>
  )
};

export default PrelevementEauBarChart;
