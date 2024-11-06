"use client";

import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { RessourcesEau } from "@/lib/postgres/models";
import { CustomTooltip } from "@/lib/utils/CalculTooltip";
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

  const title = <>
    <div>
      L'indicateur représente le volume annuel d'eau prélevée (pour les prélèvements soumis à redevance), par grands usages. 
      Cependant, les usages exonérés de redevance (aquaculture, géothermie, lutte antigel de cultures pérennes, réalimentation de milieux naturels, etc.) 
      ne figurent pas dans la base de données.
    </div><br></br>
    <div>En outre-mer, la lutte contre les incendies et la production d’énergie renouvelable sont également exonérés.</div>
  </>

  return (
    <>
      {ressourcesEau ? (
        <div className={styles.container}>
          <div className="w-5/12">
            <div className={styles.explicationWrapper}>
              <p>
                Le volume total des prélèvements en eau de votre territoire en 2022 est de [X] m3, soit l’équivalent de [X] piscines olympiques.  
              </p>
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?"/>
            </div>
            <div className="px-4">
              <p>
                Les ressources en eau de la France s’épuisent. En 2021, 30 milliards de m3 d’eau douce, soit l’équivalent de plus d’un tiers du volume du Lac Léman, 
                ont été prélevés en France pour les besoins des activités humaines (hors production hydroélectrique). 82 % de ces prélèvements proviennent d’eaux 
                de surface et 18 % d’eaux souterraines. 48 % sont prélevés pour le refroidissement des centrales de production d’électricité, 18,5 % 
                pour l’alimentation des réseaux d’eau potable, 17 % pour l’alimentation des canaux de navigation, 9 % pour l’agriculture et 7,5 % pour les autres activités économiques.
                <br></br>
                Un prélèvement ne peut être réalisé qu'à condition de disposer d'une ressource suffisante !   
              </p>
              <p><u>Données chiffrées :</u></p>
              <p>
                - 20 % des prélèvements d’eau potable sont perdus à cause des fuites. 
              </p>
              <p>
                - 110 bassins versants sont déjà soumis à des tensions hydriques.
              </p>
              <p>
                - D’ici 2050, les précipitations devraient baisser de 16 à 23 % et les débits des cours d’eau diminuer de 10 à 40 %.
              </p>
              <p>
                *La mesure 9 du Plan Eau prévoit justement l’élaboration de plans d’adaptation pour chaque grand bassin versant, afin de réduire les prélèvements et mieux gérer les tensions hydriques locales.
              </p>
              <p>
                ** Afin de réduire les fuites d'eau potable et sécuriser l'approvisionnement, la mesure 14 du Plan Eau vise des investissements massifs  pour améliorer les infrastructures dans 170 collectivités, où les taux de fuites dépassent 50 %.
              </p>
            </div>
          </div>
          <div className="w-7/12">
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
