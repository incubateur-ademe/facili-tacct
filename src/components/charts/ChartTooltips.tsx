import { Round } from "@/lib/utils/reusableFunctions/round";
import { BarDatum, BarTooltipProps } from "@nivo/bar";
import { RgaEvolutionLegend, RgaRepartitionLegend } from "../maps/legends/datavizLegends";
import styles from './charts.module.scss';

export const RgaRepartitionTooltip = ({ data, type }: { data: BarTooltipProps<BarDatum>, type: string }) => {
  const dataArray = Object.entries(data.data).map(el => {
    return {
      titre: el[0] === "territoire" && type === "commune" ?
        "Commune" :
        el[0] === "territoire" && type === "epci" ?
          "EPCI" :
          el[0] === "territoireSup" && type === "commune" ?
            "EPCI" :
            el[0] === "territoireSup" && type === "epci" ?
              "Département" : "",
      value: el[1],
      color: RgaRepartitionLegend.find(e => e.variable === el[0])?.couleur
    }
  });
  return (
    <div className={styles.tooltipEvolutionWrapper}>
      <h3>{dataArray.at(-1)?.value}</h3>
      {
        dataArray.slice(0, -1).map((el, i) => {
          return (
            <div className={styles.itemWrapper} key={i}>
              <div className={styles.titre}>
                <div className={styles.colorSquare} style={{ background: el.color }} />
                <p>{el.titre}</p>
              </div>
              <div className={styles.value}>
                <p>{Round(Number(el.value), 1)} %</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export const RgaEvolutionTooltip = ({ data }: BarTooltipProps<BarDatum>) => {
    const dataArray = Object.entries(data).map(el => {
      return {
        titre: el[0] === "nb_logement_alea_faible" ? "Aléas faibles" : "Aléas moyens / forts",
        value: el[1],
        color: RgaEvolutionLegend.find(e => e.variable === el[0])?.couleur
      }
    });
    return (
      <div className={styles.tooltipEvolutionWrapper}>
        <h3>{dataArray.at(-1)?.value}</h3>
        {
          dataArray.slice(0, -1).map((el, i) => {
            return (
              <div className={styles.itemWrapper} key={i}>
                <div className={styles.titre}>
                  <div className={styles.colorSquare} style={{ background: el.color }} />
                  <p>{el.titre}</p>
                </div>
                <div className={styles.value}>
                  <p>{Round(Number(el.value), 0)} logements</p>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
