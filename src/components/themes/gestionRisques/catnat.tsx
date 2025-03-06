'use client';

import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, GestionRisques } from '@/lib/postgres/models';
import { CountOccByIndex } from '@/lib/utils/reusableFunctions/occurencesCount';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CatnatDataViz from './catnatDataviz';
import styles from './gestionRisques.module.scss';

export const Catnat = (props: {
  gestionRisques: GestionRisques[];
  carteCommunes: CarteCommunes[];
  data: Array<{
    donnee: string;
    facteurSensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
}) => {
  const { gestionRisques, carteCommunes } = props;
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const [sliderValue, setSliderValue] = useState<number[]>([1982, 2024]);
  const [typeRisqueValue, setTypeRisqueValue] =
    useState<CatnatTypes>('Tous types');
  const [arretesCatnatPieChart, setArretesCatnatPieChart] = useState<
    ArreteCatNat[]
  >([]);
  const [arretesCatnatBarChart, setArretesCatnatBarChart] = useState<
    ArreteCatNat[]
  >([]);
  const [catnatFilteredByType, setCatnatFilteredByType] =
    useState<GestionRisques[]>(gestionRisques);
  const typesRisques = gestionRisques
    ? [...new Set(gestionRisques.map((item) => item.lib_risque_jo))]
    : [''];

  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const codepci = searchParams.get('codepci')!;
  const dataByCodeGeographique = CountOccByIndex<GenericObject>(
    gestionRisques,
    'code_geographique',
    'lib_risque_jo'
  ).map((el) => {
    const sum = Sum(
      Object.values(el).filter((item) => typeof item === 'number') as number[]
    );
    return {
      ...(el as DataByCodeGeographique),
      sumCatnat: sum
    };
  });
  const carteCommunesEnriched = carteCommunes.map((el) => {
    return {
      ...el,
      catnat: dataByCodeGeographique.find(
        (item) => item.indexName === el.code_commune
      )
    };
  });
  const communesMap = carteCommunesEnriched.map(CommunesIndicateursMapper);

  useEffect(() => {
    const catnatFilteredByType =
      typeRisqueValue === 'Tous types'
        ? gestionRisques
        : gestionRisques.filter(
            (item) => item.lib_risque_jo === typeRisqueValue
          );
    setCatnatFilteredByType(catnatFilteredByType);
    const gestionRisquesEnrichBarChart = catnatFilteredByType
      ?.map((item) => {
        return {
          ...item,
          annee_arrete: Number(item.dat_pub_arrete?.split('-')[0])
        };
      })
      .filter(
        (el) =>
          el.annee_arrete >= sliderValue[0] && el.annee_arrete <= sliderValue[1]
      );
    const gestionRisquesEnrichPieChart = gestionRisques
      ?.map((item) => {
        return {
          ...item,
          annee_arrete: Number(item.dat_pub_arrete?.split('-')[0])
        };
      })
      .filter(
        (el) =>
          el.annee_arrete >= sliderValue[0] && el.annee_arrete <= sliderValue[1]
      );
    setArretesCatnatPieChart(gestionRisquesEnrichPieChart);
    setArretesCatnatBarChart(gestionRisquesEnrichBarChart);
  }, [sliderValue, typeRisqueValue, datavizTab]);

  const title = (
    <>
      <div>
        Il s’agit du nombre total d'arrêtés de catastrophes naturelles d’origine
        climatique publiés au Journal Officiel par commune depuis la création de
        la garantie Cat-Nat en 1982 (loi du 13 juillet 1982). Sont considérés
        comme risques naturels d’origine climatique : les avalanches, les
        phénomènes atmosphériques tels que les vents cycloniques, les tempêtes
        (exclues à partir de 1989), la grêle et la neige (exclues à partir de
        2010), les inondations (coulée de boue, inondations par remontée de
        nappe, et inondations par choc mécanique des vagues), les mouvements de
        terrain (regroupant les chocs mécaniques liés à l’action des vagues,
        l’éboulement rocheux, la chute de blocs, l’effondrement de terrain,
        l’affaissement et le glissement de terrain), la sécheresse (notamment le
        retrait-gonflement des argiles).
      </div>
      <br></br>
      <div>
        Les dommages dus aux vents cycloniques ne sont intégrés dans la garantie
        des catastrophes naturelles que depuis la fin de l'année 2000, lorsque
        la vitesse du vent dépasse 145 km/h pendant dix minutes, ou 215 km/h par
        rafale.
      </div>
      <div>
        Les catastrophes naturelles d’origine non climatiques (séismes,
        éruptions volcaniques, lave torrentielle, raz de marée) sont exclues du
        décompte.
      </div>
    </>
  );
  return (
    <>
      {gestionRisques.length !== 0 ? (
        <div className={styles.container}>
          <div className="w-1/3">
            <div className={styles.explicationWrapper}>
              {dataByCodeGeographique[0]?.sumCatnat === 0 ? (
                <p>
                  L’absence d’arrêté CatNat ne signifie pas que votre territoire
                  n’a jamais connu d’événements climatiques importants, ni subis
                  de dégâts significatifs.
                </p>
              ) : (
                <p style={{ color: '#161616', margin: '0 0 0.5em' }}>
                  Depuis 1982, <b>{gestionRisques.length}</b> événement(s)
                  climatique(s) sont à l’origine d’une reconnaissance de l'état
                  de catastrophe naturelle sur votre territoire.
                </p>
              )}
              <CustomTooltip title={title} texte="D'où vient ce chiffre ?" />
            </div>
            <div className="px-4">
              <p>
                Chaque hausse de 0,5 °C de la température mondiale est
                susceptible d’augmenter l'intensité et/ou la fréquence des
                phénomènes extrêmes. Entre 1900 et début 2022, la France
                métropolitaine a concentré 14 % des événements naturels très
                graves recensés en Europe, en particulier des inondations et des
                cyclones/tempêtes. Avec l’Italie, elle figure parmi les pays les
                plus touchés, loin devant les autres pays européens.
              </p>
              <p>
                ⇒ 257 500, c’est le nombre d'arrêtés liés aux événements
                climatiques depuis la création du régime CatNat en 1982. Les
                inondations représentent plus de 56 % du total.
              </p>
              <p>
                ⇒ 8 : c'est le nombre moyen d’arrêtés CatNat par commune entre
                1982 et septembre 2024. Mais une commune détient le triste
                record de 135 arrêtés sur cette période !
              </p>
              <p>
                ⇒ 10,6 milliards d’euros : c’est le coût d’indemnisations des
                dommages liés à des aléas climatiques en France en 2022.
              </p>
              <p>
                ⇒ 4,8 milliards d’euros : montant moyen annuel des pertes
                économiques directes attribuées aux événements naturels en
                France entre 2015 et 2019, soit : <br></br>- deux fois le budget
                annuel des Agences de l’eau, ou <br></br>- 20 fois les besoins
                annuels pour adapter les biens exposés au risque d’érosion en
                France au cours des 25 prochaines années (estimation de
                l’Inspection générale de l'environnement et du développement
                durable).
              </p>
            </div>
          </div>
          <div className="w-2/3">
            <CatnatDataViz
              carteCommunes={communesMap}
              datavizTab={datavizTab}
              setDatavizTab={setDatavizTab}
              typeRisqueValue={typeRisqueValue}
              gestionRisquesBarChart={arretesCatnatBarChart}
              gestionRisquesPieChart={arretesCatnatPieChart}
              typesRisques={typesRisques}
              setTypeRisqueValue={setTypeRisqueValue}
              setSliderValue={setSliderValue}
              sliderValue={sliderValue}
            />
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};
