'use client';

import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
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
import { CatNatText } from '../inconfortThermique/staticTexts';
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
      if (type === 'commune' || type === 'epci') {
        const temp = await GetPatch4(code, type);
        setPatch4(temp);
      }
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

            <div className={styles.container}>
              <div className="w-1/3">
                <div className={styles.explicationWrapper}>
                  {gestionRisques.length !== 0 ? (
                    <>
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
                    </>
                  ) : ""
                  }
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
                <CatNatText />
              </div>
              <div className="w-2/3">
                {
                  gestionRisques.length !== 0 ?
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
                    /> : (
                      <div className={styles.graphWrapper}>
                        <p style={{ padding: '1em', margin: '0' }}>
                          <b>Arrêtés de catastrophes naturelles</b>
                        </p>
                        <DataNotFoundForGraph image={DataNotFound} />
                        <p style={{ padding: '1em', margin: '0' }}>
                          Source : Base nationale de Gestion ASsistée des Procédures
                          Administratives relatives aux Risques (GASPAR). Dernière mise à jour :
                          septembre 2024.
                        </p>
                      </div>
                    )
                }
              </div>
            </div>
          </>
          : <Loader />
      }
    </>
  );
};
