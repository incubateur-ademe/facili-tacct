"use client";

import WarningIcon from "@/assets/icons/exclamation_point_icon_black.png";
import { RgaEvolutionTooltip, RgaRepartitionTooltip } from "@/components/charts/ChartTooltips";
import { NivoBarChart } from '@/components/charts/NivoBarChart';
import { generateMapPngBlob } from "@/components/exports/ExportPng";
import { ZipExportButton } from "@/components/exports/ZipExportButton";
import { RgaEvolutionLegend, RgaRepartitionLegend } from '@/components/maps/legends/datavizLegends';
import SubTabs from '@/components/SubTabs';
import { CommunesIndicateursDto, RGADto } from '@/lib/dto';
import { RGAdb } from '@/lib/postgres/models';
import { RGAdbExport } from "@/lib/utils/export/exportTypes";
import { exportAsZip } from "@/lib/utils/export/exportZipGeneric";
import { Average } from '@/lib/utils/reusableFunctions/average';
import { BarDatum } from '@nivo/bar';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from "react";
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
  exportData: RGAdbExport[];
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
const barChartRepartition = (rgaFilteredByTerritory: RGAdb[]) => {
  const avant1975 = {
    nb_logement_alea_faible:
      rgaFilteredByTerritory.reduce(
        (sum, item) =>
          sum +
          Number(item.nb_logement_alea_faible_avant_1920) +
          Number(item.nb_logement_alea_faible_1920_1945) +
          Number(item.nb_logement_alea_faible_1945_1975),
        0
      ),
    nb_logement_alea_moyen_fort:
      rgaFilteredByTerritory.reduce(
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
    nb_logement_alea_faible: rgaFilteredByTerritory.reduce(
      (sum, item) => sum + Number(item.nb_logement_alea_faible_apres_1975),
      0
    ),
    nb_logement_alea_moyen_fort: rgaFilteredByTerritory.reduce(
      (sum, item) => sum + Number(item.nb_logement_alea_moyen_fort_apres_1975),
      0
    ),
    annee: "Après 1975"
  };
  return [avant1975, apres1975];
}
const barChartComparaison = (rga: RGAdb[], code: string, type: string) => {
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
    exportData
  } = props;
  const searchParams = useSearchParams();
  const type = searchParams.get('type')!;
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const mapRef = useRef<maplibregl.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const [multipleDepartements, setMultipleDepartements] = useState<string[]>([]);
  // options de filtre pour les départements (plusieurs départements possibles pour un EPCI)
  const departement = type === "epci" ? rga[0]?.libelle_departement : "";
  const rgaTerritoireSup = type === "epci" ? rga.filter(item => item.libelle_departement === departement) : rga
  const rgaFilteredByTerritory = type === "commune" ?
    rga.filter(item => item.code_geographique === code) :
    type === "epci" ?
      rga.filter(item => item.epci === code) :
      rga;

  // data pour les graphes    
  const evolutionRga = barChartRepartition(rgaFilteredByTerritory);
  const repartitionRga = barChartComparaison(rgaTerritoireSup, code, type);

  useEffect(() => {
    if (type === "epci" && code) {
      const departements = rga.map(item => item.departement);
      const uniqueDepartements = Array.from(new Set(departements));
      setMultipleDepartements(uniqueDepartements);
    }
  }, [type, code, rga]);

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.catnatGraphTitleWrapper}>
        <h2>Retrait-gonflement des argiles</h2>
        <SubTabs
          data={
            (type === "commune" || type === "epci") ?
              ['Comparaison', 'Répartition', 'Cartographie'] :
              ['Répartition', 'Cartographie']
          }
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Comparaison' ? (
        <>
          <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
            <NivoBarChart
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
              axisLeftLegend="Part du territoire (%)"
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
                <p style={{ fontSize: 12, margin: 0 }}>
                  L’EPCI sélectionné s’étend sur
                  plusieurs départements. La comparaison proposée est
                  effectuée avec : {departement}
                </p>
              </div>
            </div>
          }
        </>
      ) : datavizTab === 'Répartition' ? (
        <>
          <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
            <NivoBarChart
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
        </>
      ) : datavizTab === 'Cartographie' ? (
        <RGAMap
          rgaCarte={rgaCarte}
          carteCommunes={carteCommunes}
          mapRef={mapRef}
          mapContainer={mapContainer}
        />
      ) : (
        ''
      )}
      {/* Génère une map cachée pour l'export */}
      <RGAMap
        rgaCarte={rgaCarte}
        carteCommunes={carteCommunes}
        mapRef={mapRef}
        mapContainer={mapContainer}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '500px',
          height: '500px',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
      <div className={styles.sourcesExportWrapper}>
        <p>
          Source : BRGM, 2019 ; Fideli, 2017. Traitements : SDES, 2021
        </p>
        <ZipExportButton
          handleExport={async () => {
            const pngBlob = await generateMapPngBlob({
              mapRef,
              mapContainer,
              documentDiv: ".exportPNGWrapper",
            });
            if (!pngBlob) {
              alert("Erreur lors de la génération de l'image PNG.");
              return;
            }
            await exportAsZip({
              excelFiles: [{
                data: exportData,
                baseName: "rga",
                sheetName: "Retrait-gonflement des argiles",
                type,
                libelle
              }],
              blobFiles: [{
                blob: pngBlob,
                filename: `RGA_${type}_${libelle}.png`
              }],
              zipFilename: `rga_export_${new Date().toISOString().split('T')[0]}.zip`
            })
          }}
        >
          Exporter
        </ZipExportButton>
      </div>
    </div>
  );
};

export default RgaDataViz;
