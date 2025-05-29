import { NewNivoBarChart } from '@/components/charts/NivoBarChart';
import SubTabs from '@/components/SubTabs';
import { CommunesIndicateursDto, RGADto } from '@/lib/dto';
import { RGAdb } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import CarteFacileTemplate from './CarteFacile';
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

const getBarChartData = (rga: RGAdb[]) => {
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

const legends = [
  {
    variable: "nb_logement_alea_faible",
    texte_raccourci: "Aléas faibles",
    couleur: "#FFCF5E"
  },
  {
    variable: "nb_logement_alea_moyen_fort",
    texte_raccourci: "Aléas moyens / forts",
    couleur: "#E8323B"
  },
];

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

  console.log("rga", rga)

  const evolutionRga = getBarChartData(rga);
  console.log("evolutionRga", evolutionRga);

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.catnatGraphTitleWrapper}>
        <h2>Retrait-gonflement des argiles</h2>
        <SubTabs
          data={['Répartition', 'Évolution', 'Cartographie']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Répartition' ? (
        <div>Répartition
          <p>
            comment faire la comparaison des territoires ? département ? epci ?
          </p>
        </div>
      ) : datavizTab === 'Évolution' ? (
        <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
          <NewNivoBarChart
            colors={legends.map(e => e.couleur)}
            graphData={evolutionRga}
            keys={legends.map(e => e.variable)}
            indexBy="annee"
            legendData={legends
              .map((legend, index) => ({
                id: index,
                label: legend.texte_raccourci,
                color: legend.couleur,
              }))}
            axisLeftLegend="Nombre de logements"
          />
        </div>
      ) : datavizTab === 'Cartographie' ? (
        <CarteFacileTemplate rgaCarte={rgaCarte} carteCommunes={carteCommunes} />
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
