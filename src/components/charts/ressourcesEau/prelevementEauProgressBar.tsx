'use client';

import eclair_icon_black from '@/assets/icons/themes/eclair_icon_black.svg';
import flocon_icon_black from '@/assets/icons/themes/flocon_icon_black.svg';
import robinet_icon_black from '@/assets/icons/themes/robinet_icon_black.svg';
import tracteur_icon_black from '@/assets/icons/themes/tracteur_icon_black.svg';
import usine_icon_black from '@/assets/icons/themes/usine_icon_black.svg';
import vagues_icon_black from '@/assets/icons/themes/vagues_icon_black.svg';
import GraphNotFound from '@/assets/images/data_not_found_prelevement.svg';
import legendEpci from '@/assets/images/legend_prelevement_eau_epci.svg';
import DataNotFound from '@/components/graphDataNotFound';
import styles from '@/components/themes/ressourcesEau/ressourcesEau.module.scss';
import { HtmlTooltip } from '@/components/utils/HtmlTooltip';
import { RessourcesEau } from '@/lib/postgres/models';
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
      color: '#00C190'
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
      color: '#009ADC'
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
      color: '#7A49BE'
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
      color: '#BB43BD'
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
      color: '#00C2CC'
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
      color: '#FFCF5E'
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
                    <h3>{item.titre}</h3>
                    <p>
                      {libelle} :{' '}
                      <b>
                        {((100 * item.sumTerritoire) / total).toFixed(2)}%
                      </b>{' '}
                      ({(item.sumTerritoire / 1000000).toFixed(2)} Mm³)
                    </p>
                    {
                      type !== 'departement' && (
                        <p>
                          Département ({departement}) :{' '}
                          <b>{((100 * item.sumDptmt) / totalDptmt).toFixed(2)} %</b>{' '}
                          ({(item.sumDptmt / 1000000).toFixed(2)} Mm³)
                        </p>
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
                        {((100 * item.sumTerritoire) / total).toFixed(2)}%
                      </b>
                    </p>
                    <p>{(item.sumTerritoire / 1000000).toFixed(2)} Mm³</p>
                  </div>
                </div>
              </HtmlTooltip>
            ))}
          <Image src={legendEpci} alt="" style={{ alignSelf: 'end' }} />
        </>
      ) : (
        <DataNotFound image={GraphNotFound} />
      )}
    </div>
  );
};

export default PrelevementEauProgressBars;
