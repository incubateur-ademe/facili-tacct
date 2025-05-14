'use client';
import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { TagItem } from '@/components/patch4/TagItem';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { Patch4, RessourcesEau } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { prelevementEauTooltipText } from '@/lib/tooltipTexts';
import { numberWithSpacesRegex } from '@/lib/utils/regex';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PrelevementEauText } from '../inconfortThermique/staticTexts';
import PrelevementEauDataViz from './prelevementEauDataviz';
import styles from './ressourcesEau.module.scss';

const SumFiltered = (
  data: RessourcesEau[],
  code: string,
  libelle: string,
  type: string,
  champ: string
) => {
  const columnCode = type === 'epci'
    ? 'epci'
    : type === 'commune'
      ? 'code_geographique'
      : type === "departement"
        ? "departement"
        : undefined

  const columnLibelle = type === "petr"
    ? "libelle_petr"
    : "ept"

  return Sum(
    data
      .filter((obj) => columnCode ? obj[columnCode] === code : obj[columnLibelle] === libelle
      )
      .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes(champ))
      .map((e) => e.A2020)
      .filter((value): value is number => value !== null)
  );
};

export const PrelevementEau = (props: {
  data: Array<{
    donnee: string;
    facteurSensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  ressourcesEau: RessourcesEau[];
}) => {

  const { ressourcesEau } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const volumePreleveTerritoire = (SumFiltered(ressourcesEau, code, libelle, type, 'total') / 1000000).toFixed(3);
  const dataParMaille = type === 'epci'
    ? ressourcesEau.filter((obj) => obj.epci === code)
    : type === 'commune'
      ? ressourcesEau.filter((obj) => obj.code_geographique === code)
      : type === 'petr'
        ? ressourcesEau.filter((obj) => obj.libelle_petr === libelle)
        : type === 'ept'
          ? ressourcesEau.filter((obj) => obj.ept === libelle)
          : ressourcesEau;

  const sumAllYears = dataParMaille.map((year) =>
    Array.from({ length: 13 }, (_, i) => Number(year[`A${2008 + i}` as PrelevementsEauYears]) || 0)
      .reduce((a, b) => a + b, 0)
  ).reduce((a, b) => a + b, 0);;

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci' || type === 'ept') {
        const temp = await GetPatch4(code, type, libelle);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const fortesChaleurs = patch4
    ? AlgoPatch4(patch4, 'fortes_chaleurs')
    : undefined;

  return (
    <>
      {
        !isLoadingPatch4 ?
          <div className={styles.container}>
            <div className={ressourcesEau.length > 0 ? "w-5/12" : "w-1/2"}>
              <div className={styles.explicationWrapper}>
                {dataParMaille.length !== 0 ? (
                  <p>
                    Le volume total des prélèvements en eau de votre territoire en
                    2020 est de <b>{numberWithSpacesRegex(volumePreleveTerritoire)} Mm3</b>, soit l’équivalent
                    de <b>{Round((1000000 * Number(volumePreleveTerritoire)) / 3750, 0)}</b>{' '}
                    piscines olympiques.
                  </p>
                ) : ""
                }
                <div className={styles.patch4Wrapper}>
                  {fortesChaleurs === 'Intensité très forte' ||
                    fortesChaleurs === 'Intensité forte' ? (
                    <TagItem
                      icon={fortesChaleursIcon}
                      indice="Fortes chaleurs"
                      tag={fortesChaleurs}
                    />
                  ) : null}
                </div>
                <CustomTooltip title={prelevementEauTooltipText} texte="D'où vient ce chiffre ?" />
              </div>
              <PrelevementEauText />
            </div>
            <div className={ressourcesEau.length > 0 ? "w-7/12" : "w-1/2"}>
              <PrelevementEauDataViz
                ressourcesEau={ressourcesEau}
                datavizTab={datavizTab}
                setDatavizTab={setDatavizTab}
              />
            </div>
          </div>
          : <Loader />
      }
    </>
  );
};
