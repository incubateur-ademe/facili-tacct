import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { MapErosionCotiere } from "@/components/maps/mapErosionCotiere";
import { EpciContoursMapper } from "@/lib/mapper/epci";
import { ErosionCotiereMapper } from "@/lib/mapper/erosionCotiere";
import { EpciContours, ErosionCotiere } from "@/lib/postgres/models";
import { CustomTooltip } from "@/lib/utils/CalculTooltip";
import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { LegendErosionCotiere } from "./erosionCotiere-legend";
import styles from "./gestionRisques.module.scss";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: theme.typography.pxToRem(12),
  },
}));

const ErosionCotes = (props: { erosionCotiere: ErosionCotiere[], epciContours: EpciContours[] }) => {
  const { erosionCotiere, epciContours } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;
  const erosionCotiereMap = erosionCotiere.map(ErosionCotiereMapper);
  const epciContoursMap = epciContours.map(EpciContoursMapper);
  const title = <>
    <div>
      Elaboré dans le cadre de la stratégie nationale de gestion intégrée du trait de côte, 
      cet indicateur national donne un aperçu quantifié des phénomènes d’érosion, 
      sur la base de la mobilité passée du trait de côte sur une période de 50 ans.   
    </div><br></br>
  </>
  return (
    <>
      {erosionCotiere ? (
        <div className={styles.container}>
          <div className="w-5/12">
            <div className={styles.explicationWrapper}>
              <p>
                 
              </p>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?"/>
            </div>
            <div className="px-4">
              <p>
                L'érosion grignote nos côtes : près de 20% du littoral français recule face à la mer. 
                Ce phénomène naturel s'accélère avec le changement climatique, la hausse du niveau des mers et la multiplication des tempêtes notamment. 
                Les chiffres sont alarmants. 37% des côtes sableuses s'érodent, soit 700 kilomètres - la distance Paris-Marseille - qui disparaissent peu à peu. 
                En 50 ans, la mer a englouti l'équivalent de la ville de La Rochelle : 30 km² de terres perdues.   
              </p>
                <p>
                  Impacts locaux sur les milieux : 
                  <li>Augmentation des intrusions salines des aquifères côtiers,</li>
                  <li>Modification des paysages (nouvelles lagunes…),</li>
                  <li>Appauvrissement des sols dû à la salinisation.</li>
                </p>
                <p>
                  Impacts locaux sur les activités humaines :
                  <li>Diminution de la disponibilité des eaux douces souterraines pour les différents usages,</li>
                  <li>Modification des marais salins avec conséquences sur les activités,</li>
                  <li>Salinisation et réduction des terres par submersion temporaire ou permanente.</li>
                </p>
              <p>
                ⇒ 523 communes touchées par le recul du littoral, dont 59 perdent plus d'1,5 mètre de littoral chaque année.
              </p>
              <p>
                ⇒ D'ici 2050 : 5200 logements et 1400 locaux d'activité seront menacés, pour un coût estimé à 1,2 milliard d'euros.
              </p>
              <p>- - - - <br></br>
                Plan National d'Adaptation au Changement Climatique - PNACC 3 :
                Accompagner l’adaptation du tourisme culturel, de montagne, littoral et nautique (mesure 35)
              </p>
            </div>
          </div>
          <div className="w-7/12">
            <div className={styles.graphWrapper}>
              <div className={styles.catnatGraphTitleWrapper} style={{ padding: "1rem" }}>
                <h2>Érosion du littoral</h2>
              </div>
                <HtmlTooltip title={<LegendErosionCotiere />} placement="left">
                  <div>
                    <MapErosionCotiere erosionCotiere={erosionCotiereMap} epciContours={epciContoursMap} />
                  </div>
                </HtmlTooltip>
              <p style={{ padding: "1em", margin: "0" }}>
                Source : CEREMA
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

export default ErosionCotes;
