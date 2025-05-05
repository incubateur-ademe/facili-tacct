'use client';
import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import { GraphDataNotFound } from '@/components/graph-data-not-found';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { ArreteCatNat, CarteCommunes, GestionRisques, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { catnatTooltipText } from '@/lib/tooltipTexts';
import { CountOccByIndex } from '@/lib/utils/reusableFunctions/occurencesCount';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CatnatDataViz from './catnatDataviz';
import styles from './gestionRisques.module.scss';

type ArreteCatNatEnriched = ArreteCatNat & {
  annee_arrete: number;
};

export const Catnat = (props: {
  gestionRisques: ArreteCatNat[];
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
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const [sliderValue, setSliderValue] = useState<number[]>([1982, 2024]);
  const [typeRisqueValue, setTypeRisqueValue] =
    useState<CatnatTypes>('Tous types');
  const [arretesCatnatPieChart, setArretesCatnatPieChart] = useState<
    ArreteCatNatEnriched[]
  >([]);
  const [arretesCatnatBarChart, setArretesCatnatBarChart] = useState<
    ArreteCatNatEnriched[]
  >([]);
  const [catnatFilteredByType, setCatnatFilteredByType] =
    useState<GestionRisques[]>(gestionRisques);
  const typesRisques = gestionRisques
    ? [...new Set(gestionRisques.map((item) => item.lib_risque_jo))]
    : [''];

  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
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
        (item) => item.indexName === el.code_geographique
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

  useEffect(() => {
    void (async () => {
      const temp = await GetPatch4(code, type);
      setPatch4(temp);
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const secheresse = patch4 ? AlgoPatch4(patch4, 'secheresse_sols') : undefined;
  const precipitation = patch4
    ? AlgoPatch4(patch4, 'fortes_precipitations')
    : undefined;

  return (
    <>
      {
        !isLoadingPatch4 ?
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
                      <p style={{ color: '#161616' }}>
                        Depuis 1982, <b>{gestionRisques.length}</b> événement(s)
                        climatique(s) sont à l’origine d’une reconnaissance de l'état
                        de catastrophe naturelle sur votre territoire.
                      </p>
                    )}
                    <div className={styles.patch4Wrapper}>
                      {secheresse === 'Intensité très forte' ||
                        secheresse === 'Intensité forte' ? (
                        <TagItem
                          icon={secheresseIcon}
                          indice="Fortes chaleurs"
                          tag={secheresse}
                        />
                      ) : null}
                      {precipitation === 'Intensité très forte' ||
                        precipitation === 'Intensité forte' ? (
                        <TagItem
                          icon={precipitationIcon}
                          indice="Fortes précipitations"
                          tag={precipitation}
                        />
                      ) : null}
                    </div>
                    <CustomTooltip title={catnatTooltipText} texte="D'où vient ce chiffre ?" />
                  </div>
                  <div className="px-4">
                    <p>
                      Les phénomènes extrêmes s'intensifient. Leur fréquence augmente
                      à chaque hausse de 0,5°C de la température mondiale. La France
                      est particulièrement exposée : depuis 1900, elle a subi 14 % des
                      catastrophes naturelles majeures en Europe. Inondations, cyclones
                      et tempêtes y sont les plus dévastateurs. La France et l'Italie
                      sont les pays européens les plus touchés, loin devant les autres.
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
              <GraphDataNotFound code={code} libelle={libelle} />
            )}
          </>
          : <Loader />
      }
    </>
  );
};
