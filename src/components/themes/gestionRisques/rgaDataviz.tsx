"use client";

import WarningIcon from "@/assets/icons/exclamation_point_icon_black.png";
import { RgaEvolutionTooltip, RgaRepartitionTooltip } from "@/components/charts/ChartTooltips";
import { NewNivoBarChart } from '@/components/charts/NivoBarChart';
import { RgaEvolutionLegend, RgaMapLegend, RgaRepartitionLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import SubTabs from '@/components/SubTabs';
import { CommunesIndicateursDto, RGADto } from '@/lib/dto';
import { RGAdb } from '@/lib/postgres/models';
import { CheckMultipleDepartementsInEpci } from "@/lib/queries/checks";
import { Average } from '@/lib/utils/reusableFunctions/average';
import { BarDatum } from '@nivo/bar';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import RGAMap from '../../maps/mapRGA';
import styles from './gestionRisques.module.scss';

type Props = {
  rgaCarte: {
    type: string;
    features: RGADto[];
  };
  carteCommunes: CommunesIndicateursDto[];
  rga: RGAdb[];
  datavizTab: string;
  setDatavizTab: (value: string) => void;
};

const isRGAdb = (obj: unknown): obj is RGAdb => {
  return !!obj && typeof obj === "object" && !Array.isArray(obj)
    && typeof (obj as RGAdb).part_alea_moyen_fort_commune === "number"
    && typeof (obj as RGAdb).part_alea_faible_commune === "number";
}
const isRGAdbArray = (obj: unknown): obj is RGAdb[] => {
  return Array.isArray(obj) && obj.every(
    el => !!el && typeof el === "object"
      && typeof (el as RGAdb).part_alea_moyen_fort_commune === "number"
      && typeof (el as RGAdb).part_alea_faible_commune === "number"
  );
}
const barChartEvolution = (rga: RGAdb[]) => {
  const avant1975 = {
    nb_logement_alea_faible:
      rga.reduce(
        (sum, item) =>
          sum +
          Number(item.nb_logement_alea_faible_avant_1920) +
          Number(item.nb_logement_alea_faible_1920_1945) +
          Number(item.nb_logement_alea_faible_1945_1975),
        0
      ),
    nb_logement_alea_moyen_fort:
      rga.reduce(
        (sum, item) =>
          sum +
          Number(item.nb_logement_alea_moyen_fort_avant_1920) +
          Number(item.nb_logement_alea_moyen_fort_1920_1945) +
          Number(item.nb_logement_alea_moyen_fort_1945_1975),
        0
      ),
    annee: "Avant 1975"
  };
  const apres1975 = {
    nb_logement_alea_faible: rga.reduce(
      (sum, item) => sum + Number(item.nb_logement_alea_faible_apres_1975),
      0
    ),
    nb_logement_alea_moyen_fort: rga.reduce(
      (sum, item) => sum + Number(item.nb_logement_alea_moyen_fort_apres_1975),
      0
    ),
    annee: "Après 1975"
  };
  return [avant1975, apres1975];
}
const barChartRepartition = (rga: RGAdb[], code: string, type: string) => {
  const territoireAlea = type === "commune" ?
    rga.find(item => item.code_geographique === code) :
    type === "epci" ?
      rga.filter(item => item.epci === code) :
      undefined;

  const sansAlea = {
    territoire: type === "commune" && isRGAdb(territoireAlea) ?
      (100 -
        (territoireAlea?.part_alea_moyen_fort_commune) -
        (territoireAlea?.part_alea_faible_commune)
      ) : type === "epci" && isRGAdbArray(territoireAlea) ? (
        100 -
        Average(territoireAlea?.map(el => el.part_alea_moyen_fort_commune)) -
        Average(territoireAlea?.map(el => el.part_alea_faible_commune))
      ) : NaN,
    territoireSup: 100 -
      Average(rga.map(el => el.part_alea_moyen_fort_commune)) -
      Average(rga.map(el => el.part_alea_faible_commune)),
    alea: "Zone a priori non argileuse"
  };
  const aleaFaible = {
    territoire: type === "commune" && isRGAdb(territoireAlea) ?
      territoireAlea?.part_alea_faible_commune :
      type === "epci" && isRGAdbArray(territoireAlea) ? (
        Average(territoireAlea.map(el => el.part_alea_faible_commune))
      ) : NaN,
    territoireSup: Average(rga.map(el => el.part_alea_faible_commune)),
    alea: "Exposition faible",
  };
  const aleaMoyenFort = {
    territoire: type === "commune" && isRGAdb(territoireAlea) ?
      territoireAlea?.part_alea_moyen_fort_commune :
      type === "epci" && isRGAdbArray(territoireAlea) ? (
        Average(territoireAlea.map(el => el.part_alea_moyen_fort_commune))
      ) : NaN,
    territoireSup: Average(rga.map(el => el.part_alea_moyen_fort_commune)),
    alea: "Exposition moyenne / forte",
  };
  return [sansAlea, aleaFaible, aleaMoyenFort];
}

const RgaDataViz = (props: Props) => {
  const {
    rgaCarte,
    carteCommunes,
    rga,
    datavizTab,
    setDatavizTab,
  } = props;
  const searchParams = useSearchParams();
  const type = searchParams.get('type')!;
  const code = searchParams.get('code')!;
  const [multipleDepartements, setMultipleDepartements] = useState<string[]>([]);
  const evolutionRga = barChartEvolution(rga);
  const repartitionRga = barChartRepartition(rga, code, type);
  const departement = type === "epci" ? rga[0]?.libelle_departement : "";

  useEffect(() => {
    void (async () => {
      if (type === "epci" && code) {
        const value = await CheckMultipleDepartementsInEpci(code, type);
        setMultipleDepartements(value as string[]);
      }
    })();
  }, [type, code]);

  
  return (
    <div className={styles.graphWrapper}>
      <div className={styles.catnatGraphTitleWrapper}>
        <h2>Retrait-gonflement des argiles</h2>
        <SubTabs
          data={(type === "commune" || type === "epci") ? ['Répartition', 'Évolution', 'Cartographie'] : ['Évolution', 'Cartographie']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Répartition' ? (
        <>
          <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
            <NewNivoBarChart
              colors={RgaRepartitionLegend.map(e => e.couleur)}
              graphData={repartitionRga as BarDatum[]}
              keys={RgaRepartitionLegend.map(e => e.variable)}
              indexBy="alea"
              legendData={RgaRepartitionLegend
                .map((legend, index) => ({
                  id: index,
                  label: legend.variable === "territoire" && type === "commune" ?
                    "Commune" :
                    legend.variable === "territoire" && type === "epci" ?
                      "EPCI" :
                      legend.variable === "territoireSup" && type === "commune" ?
                        "EPCI" :
                        legend.variable === "territoireSup" && type === "epci" ?
                          "Département" : "",
                  color: legend.couleur,
                }))}
              axisLeftLegend="Part des logements (%)"
              groupMode="grouped"
              tooltip={(data) => RgaRepartitionTooltip({ data, type })}
            />
          </div>
          {
            multipleDepartements.length > 1 &&
            <div style={{ minWidth: "450px", backgroundColor: "white", padding: "1em" }}>
              <div className='flex flex-row items-center justify-center'>
                <Image
                  src={WarningIcon}
                  alt="Attention"
                  width={24}
                  height={24}
                  style={{ marginRight: '0.5em', alignItems: 'center' }}
                />
                <p style={{ fontSize: 12, margin: 0 }}>L’EPCI sélectionné s’étend sur plusieurs départements. La comparaison proposée est effectuée avec : {departement}</p>
              </div>
            </div>
          }
        </>
      ) : datavizTab === 'Évolution' ? (
        <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
          <NewNivoBarChart
            colors={RgaEvolutionLegend.map(e => e.couleur)}
            graphData={evolutionRga}
            keys={RgaEvolutionLegend.map(e => e.variable)}
            indexBy="annee"
            legendData={RgaEvolutionLegend
              .map((legend, index) => ({
                id: index,
                label: legend.texteRaccourci,
                color: legend.couleur,
              }))}
            axisLeftLegend="Nombre de logements"
            tooltip={RgaEvolutionTooltip}
          />
        </div>
      ) : datavizTab === 'Cartographie' ? (
        <>
          <RGAMap rgaCarte={rgaCarte} carteCommunes={carteCommunes} />
          <div
            className={styles.legend}
            style={{ width: 'auto', justifyContent: 'center' }}
          >
            <LegendCompColor legends={RgaMapLegend} />
          </div>
        </>
      ) : (
        ''
      )}
      <p style={{ padding: '1em', margin: '0' }}>
        Source : BRGM, 2019 ; Fideli, 2017. Traitements : SDES, 2021
      </p>
    </div>
  );
};

export default RgaDataViz;
