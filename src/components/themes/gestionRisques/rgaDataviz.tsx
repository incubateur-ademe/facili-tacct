import { NewNivoBarChart } from '@/components/charts/NivoBarChart';
import { RgaEvolutionLegend, RgaMapLegend, RgaRepartitionLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import SubTabs from '@/components/SubTabs';
import { CommunesIndicateursDto, RGADto } from '@/lib/dto';
import { RGAdb } from '@/lib/postgres/models';
import { Average } from '@/lib/utils/reusableFunctions/average';
import { CapitalizeFirstLetter } from '@/lib/utils/reusableFunctions/capitalize';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { BarDatum, BarTooltipProps } from '@nivo/bar';
import { useSearchParams } from 'next/navigation';
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
const barChartRepartition = (rga: RGAdb[], code: string) => {
  const communeAlea = rga.find(item => item.code_geographique === code);
  const sansAlea = {
    commune:
      100 -
      (communeAlea?.part_alea_moyen_fort_commune ?? 0) -
      (communeAlea?.part_alea_faible_commune ?? 0),
    epci: 100 -
      Average(rga.map(el => el.part_alea_moyen_fort_commune)) -
      Average(rga.map(el => el.part_alea_faible_commune)),
    alea: "Sans aléa",
  };
  const aleaFaible = {
    commune: communeAlea?.part_alea_faible_commune,
    epci: Average(rga.map(el => el.part_alea_faible_commune)),
    alea: "Aléas faibles",
  };
  const aleaMoyenFort = {
    commune: communeAlea?.part_alea_moyen_fort_commune,
    epci: Average(rga.map(el => el.part_alea_moyen_fort_commune)),
    alea: "Aléas moyens / forts",
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
  const evolutionRga = barChartEvolution(rga);
  const repartitionRga = barChartRepartition(rga, code);

  const CustomTooltip = ({ data }: BarTooltipProps<BarDatum>) => {
    const dataArray = Object.entries(data).map(el => {
      return {
        titre: CapitalizeFirstLetter(el[0]),
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

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.catnatGraphTitleWrapper}>
        <h2>Retrait-gonflement des argiles</h2>
        <SubTabs
          data={type === "commune" ? ['Répartition', 'Évolution', 'Cartographie'] : ['Évolution', 'Cartographie']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Répartition' ? (
        <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
          <NewNivoBarChart
            colors={RgaRepartitionLegend.map(e => e.couleur)}
            graphData={repartitionRga as BarDatum[]}
            keys={RgaRepartitionLegend.map(e => e.variable)}
            indexBy="alea"
            legendData={RgaRepartitionLegend
              .map((legend, index) => ({
                id: index,
                label: legend.texteRaccourci,
                color: legend.couleur,
              }))}
            axisLeftLegend="Part des logements (%)"
            groupMode="grouped"
            tooltip={CustomTooltip}
          />
        </div>
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
        Source : XXXXXXXXXXXXXXX
      </p>
    </div>
  );
};

export default RgaDataViz;
