import { BarChartCatnat } from "@/components/charts/catnat/BarChartCatnat";
import PieChartCatnat from "@/components/charts/catnat/pieChartCatnat";
import { LegendCatnat } from "@/components/maps/components/legendCatnat";
import { MapCatnat } from "@/components/maps/mapCatnat";
import RangeSlider from "@/components/Slider";
import SubTabs from "@/components/SubTabs";
import { CommunesIndicateursDto } from "@/lib/dto";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./gestionRisques.module.scss";

type Props = {
  carteCommunes: CommunesIndicateursDto[];
  typeRisqueValue: string;
  gestionRisquesPieChart: ArreteCatNat[];
  gestionRisquesBarChart: ArreteCatNat[];
  typesRisques: (string | null)[];
  setTypeRisqueValue: (value: string) => void;
  setSliderValue: (value: number[]) => void; 
}

const CatnatDataViz = (props: Props) => {
  const { 
    carteCommunes,
    typeRisqueValue,
    gestionRisquesPieChart,
    gestionRisquesBarChart,
    typesRisques,
    setTypeRisqueValue,
    setSliderValue
  } = props;
  const [datavizTab, setDatavizTab] = useState<string>("Répartition");
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  return (
    <div className={styles.graphWrapper}>
      <div className={styles.catnatGraphTitleWrapper}>
        <h2>Arrêtés CatNat par communes</h2>
        <SubTabs data={codgeo ? ["Répartition", "Évolution"] : ["Répartition", "Évolution", "Cartographie"]} defaultTab={datavizTab} setValue={setDatavizTab} />
      </div>
      {
        datavizTab === "Répartition" ? (
          <>
            <div className={styles.catnatGraphFiltersWrapper}>
              <RangeSlider
                firstValue={1982}
                lastValue={2024}
                minDist={1}
                setSliderValue={setSliderValue}
                width={750}
              />
            </div>
            <PieChartCatnat gestionRisques={gestionRisquesPieChart} />
          </>
        ) : datavizTab === "Évolution" ? (
          <>
            <div className={styles.catnatGraphFiltersWrapper}>
              <SubTabs 
                data={["Tous types", ...typesRisques]}
                defaultTab={typeRisqueValue}
                setValue={setTypeRisqueValue}
                maxWidth="60%"
                borderRight="solid 1px #D6D6F0"
              />
              <RangeSlider
                firstValue={1982}
                lastValue={2024}
                minDist={1}
                setSliderValue={setSliderValue}
                width={250}
              />
            </div>
            <BarChartCatnat gestionRisques={gestionRisquesBarChart} />
          </>
        ) : datavizTab === "Cartographie" ? (
          <>
            <div className={styles.catnatGraphFiltersWrapper}>
              <SubTabs
                data={["Tous types", ...typesRisques]}
                defaultTab={typeRisqueValue}
                setValue={setTypeRisqueValue}
              />
            </div>
            <MapCatnat carteCommunes={carteCommunes} typeRisqueValue={typeRisqueValue} />
            <div className={styles.legend} style={{ width:"auto", justifyContent:"center"}}>
              <LegendCatnat data={"catnat"} typeRisqueValue={typeRisqueValue} carteCommunes={carteCommunes} />
            </div>
          </>
        ) : ""
      }
      <p style={{ padding: "1em", margin: "0" }}>
        Source : <b style={{ color: "#0063CB" }}>XXXXXXX</b>
      </p>
    </div>
  )
}

export default CatnatDataViz;
