'use client';

import eclair_icon_black from '@/assets/icons/themes/eclair_icon_black.svg';
import flocon_icon_black from '@/assets/icons/themes/flocon_icon_black.svg';
import robinet_icon_black from '@/assets/icons/themes/robinet_icon_black.svg';
import tracteur_icon_black from '@/assets/icons/themes/tracteur_icon_black.svg';
import usine_icon_black from '@/assets/icons/themes/usine_icon_black.svg';
import vagues_icon_black from '@/assets/icons/themes/vagues_icon_black.svg';
import GraphNotFound from '@/assets/images/data_not_found_prelevement.png';
import DataNotFound from '@/components/graphDataNotFound';
import styles from '@/components/themes/ressourcesEau/ressourcesEau.module.scss';
import { HtmlTooltip } from '@/components/utils/HtmlTooltip';
import { Body, H4 } from '@/design-system/base/Textes';
import couleurs from '@/design-system/couleurs';
import { RessourcesEau } from '@/lib/postgres/models';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { Progress } from 'antd';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

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
    : type === "pnr"
      ? "libelle_pnr"
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

const TotalSum = (
  data: RessourcesEau[],
  champ: string
) => {
  return Sum(
    data
      .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes(champ))
      .map((e) => e.A2020)
      .filter((value): value is number => value !== null)
  );
}

const PrelevementEauProgressBars = ({
  ressourcesEau
}: {
  ressourcesEau: RessourcesEau[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;

  const data = [
    {
      titre: 'Agriculture',
      icon: <Image src={tracteur_icon_black} alt="" />,
      sumDptmt: TotalSum(ressourcesEau, 'agriculture'),
      sumTerritoire: SumFiltered(
        ressourcesEau,
        code,
        libelle,
        type,
        'agriculture'
      ),
      color: couleurs.graphiques.vert[2]
    },
    {
      titre: 'Eau potable',
      icon: <Image src={robinet_icon_black} alt="" />,
      sumDptmt: TotalSum(ressourcesEau, 'potable'),
      sumTerritoire: SumFiltered(
        ressourcesEau,
        code,
        libelle,
        type,
        'potable'
      ),
      color: couleurs.graphiques.bleu[2]
    },
    {
      titre: 'Industrie et autres usages économiques',
      icon: <Image src={usine_icon_black} alt="" />,
      sumDptmt: TotalSum(ressourcesEau, 'industrie'),
      sumTerritoire: SumFiltered(
        ressourcesEau,
        code,
        libelle,
        type,
        'industrie'
      ),
      color: couleurs.graphiques.violet[2]
    },
    {
      titre: 'Refroidissement des centrales électriques',
      icon: <Image src={flocon_icon_black} alt="" />,
      sumDptmt: TotalSum(ressourcesEau, 'refroidissement'),
      sumTerritoire: SumFiltered(
        ressourcesEau,
        code,
        libelle,
        type,
        'refroidissement'
      ),
      color: couleurs.graphiques.rose[2]
    },
    {
      titre: 'Alimentation des canaux',
      icon: <Image src={vagues_icon_black} alt="" />,
      sumDptmt: TotalSum(ressourcesEau, 'alimentation'),
      sumTerritoire: SumFiltered(
        ressourcesEau,
        code,
        libelle,
        type,
        'alimentation'
      ),
      color: couleurs.graphiques.turquoise[2]
    },
    {
      titre: "Production d'électricité (barrages hydro-électriques)",
      icon: <Image src={eclair_icon_black} alt="" />,
      sumDptmt: TotalSum(ressourcesEau, 'production'),
      sumTerritoire: SumFiltered(
        ressourcesEau,
        code,
        libelle,
        type,
        'production'
      ),
      color: couleurs.graphiques.orange[2]
    }
  ];
  const totalDptmt =
    TotalSum(ressourcesEau, 'total') === 0
      ? 1
      : TotalSum(ressourcesEau, 'total');
  const total =
    SumFiltered(ressourcesEau, code, libelle, type, 'total') === 0
      ? 1
      : SumFiltered(ressourcesEau, code, libelle, type, 'total');
  const departement = ressourcesEau[0]?.libelle_departement;

  return (
    <div className={styles.ressourcesEauWrapper}>
      {libelle && data.find((e) => e.sumTerritoire !== 0) ? (
        <>
          {data
            .sort((a, b) => b.sumTerritoire - a.sumTerritoire)
            .map((item, index) => (
              <HtmlTooltip
                title={
                  <div className={styles.tooltip}>
                    <div className='flex flex-row g-4 items-center mb-2'>
                      <div className={styles.colorSquare} style={{ backgroundColor: item.color }} />
                      <H4 style={{ fontSize: '1rem', marginBottom: "0" }}>{item.titre}</H4>
                    </div>
                    <Body size='sm'>
                      {libelle} :{' '}
                      <b>
                        {Round((100 * item.sumTerritoire) / total, 2)} %
                      </b>{' '}
                      ({Round(item.sumTerritoire / 1000000, 2)} Mm3)
                    </Body>
                    {
                      type !== 'departement' && (
                        <Body size='sm'>
                          Département ({departement}) :{' '}
                          <b>{Round((100 * item.sumDptmt) / totalDptmt, 2)} %</b>{' '}
                          ({Round(item.sumDptmt / 1000000, 2)} Mm3)
                        </Body>
                      )
                    }
                  </div>
                }
                key={index}
                placement="top"
              >
                <div key={index} className={styles.progressDataWrapper}>
                  <div className={styles.progressDesign}>
                    {item.icon}
                    <div className={styles.progressBar}>
                      <p>{item.titre}</p>
                      <div className={styles.barMarker}>
                        <Progress
                          percent={Number((100 * item.sumTerritoire) / total)}
                          showInfo={false}
                          strokeColor={item.color}
                          size={['100%', 12]}
                          style={{ width: '95%' }}
                          type="line"
                          trailColor="#F9F9FF"
                        />
                        <div
                          style={{
                            position: 'relative',
                            width: '100%',
                            transform: `translate(${(95 * item.sumDptmt) / totalDptmt}%, -1.25rem)`
                          }}
                        >
                          <div className={styles.marker}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.progressNumbers}>
                    <p>
                      <b>
                        {Round((100 * item.sumTerritoire) / total, 2)} %
                      </b>
                    </p>
                    <p>{Round(item.sumTerritoire / 1000000, 2)} Mm3</p>
                  </div>
                </div>
              </HtmlTooltip>
            ))}
        </>
      ) : (
        <div className='p-10 flex flex-row justify-center'><DataNotFound image={GraphNotFound} /></div>
      )}
    </div>
  );
};

export default PrelevementEauProgressBars;
