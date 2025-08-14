import { Body } from "@/design-system/base/Textes";
import { Round } from "@/lib/utils/reusableFunctions/round";
import { BarDatum, BarTooltipProps } from "@nivo/bar";
import { espacesNAFBarChartLegend, RgaEvolutionLegend, RgaRepartitionLegend } from "../maps/legends/datavizLegends";
import styles from './charts.module.scss';

type AgricultureBioLegends = {
  variable: string;
  texteRaccourci: string;
  valeur: number;
  couleur: string;
}[];

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
      titre: el[0] === "nb_logement_alea_faible" ? "Exposition faible" : "Exposition moyenne / forte",
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

export const espacesNAFBarChartTooltip = ({ data }: BarTooltipProps<BarDatum>) => {
  const dataArray = Object.entries(data).map(el => {
    return {
      titre: el[0],
      value: el[1],
      color: espacesNAFBarChartLegend.find(e => e.value === el[0])?.color
    };
  });
  return (
    <div className={styles.tooltipEvolutionWrapper}>
      <Body weight='bold' size='sm' style={{ marginBottom: '0.5rem' }}>
        Années {dataArray.at(-1)?.value}
      </Body>
      {dataArray.slice(0, -1).map((el, i) => {
        return (
          <div className={styles.itemWrapper} key={i}>
            <div className={styles.titre}>
              <div
                className={styles.colorSquare}
                style={{ background: el.color }}
              />
              <p>{el.titre}</p>
            </div>
            <div className={styles.value}>
              <p>{Round(Number(el.value), 1)} ha</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const agricultureBioBarChartTooltip = (
  {
    data,
    legends,
    collectiviteName
  }: {
    data: BarTooltipProps<BarDatum>,
    legends: AgricultureBioLegends,
    collectiviteName: string
  }) => {
  const dataArray = Object.entries(data.data).map(el => {
    return {
      titre: el[0],
      value: el[1],
      color: legends.find(e => e.variable === el[0])?.couleur
    }
  });
  return (
    <div className={styles.tooltipEvolutionWrapper}>
      <h3>{collectiviteName} ({dataArray.at(-1)?.value})</h3>
      {
        dataArray.slice(0, -1).map((el, i) => {
          return (
            <div className={styles.itemWrapper} key={i}>
              <div className={styles.titre}>
                <div className={styles.colorSquare} style={{ background: el.color }} />
                <p>{el.titre}</p>
              </div>
              <div className={styles.value}>
                <p>{Round(Number(el.value), 0)} ha</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
