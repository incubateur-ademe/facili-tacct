'use client';

import eclair_icon_black from '@/assets/icons/themes/eclair_icon_black.svg';
import flocon_icon_black from '@/assets/icons/themes/flocon_icon_black.svg';
import robinet_icon_black from '@/assets/icons/themes/robinet_icon_black.svg';
import tracteur_icon_black from '@/assets/icons/themes/tracteur_icon_black.svg';
import usine_icon_black from '@/assets/icons/themes/usine_icon_black.svg';
import vagues_icon_black from '@/assets/icons/themes/vagues_icon_black.svg';
import legendEpci from '@/assets/images/legend_prelevement_eau_epci.svg';
import styles from '@/components/themes/ressourcesEau/ressourcesEau.module.scss';
import { RessourcesEau } from '@/lib/postgres/models';
import { HtmlTooltip } from '@/lib/utils/HtmlTooltip';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { Progress } from 'antd';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const SumFiltered = (
  data: RessourcesEau[],
  codgeo: string,
  codepci: string,
  type: string,
  collectivite: boolean = false
) => {
  if (collectivite) {
    return Sum(
      data
        .filter((obj) =>
          codgeo ? obj.code_geographique === codgeo : obj.epci === codepci
        )
        .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes(type))
        .map((e) => e.A2020)
        .filter((value): value is number => value !== null)
    );
  } else {
    return Sum(
      data
        .filter((item) => item.LIBELLE_SOUS_CHAMP?.includes(type))
        .map((e) => e.A2020)
        .filter((value): value is number => value !== null)
    );
  }
};

const PrelevementEauProgressBars = ({
  ressourcesEau
}: {
  ressourcesEau: RessourcesEau[];
}) => {
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;
  const codepci = searchParams.get('codepci')!;

  const data = [
    {
      titre: 'Agriculture',
      icon: <Image src={tracteur_icon_black} alt="" />,
      sumDptmt: SumFiltered(ressourcesEau, codgeo, codepci, 'agriculture'),
      sumCollectivite: SumFiltered(
        ressourcesEau,
        codgeo,
        codepci,
        'agriculture',
        true
      ),
      color: '#00C190'
    },
    {
      titre: 'Eau potable',
      icon: <Image src={robinet_icon_black} alt="" />,
      sumDptmt: SumFiltered(ressourcesEau, codgeo, codepci, 'potable'),
      sumCollectivite: SumFiltered(
        ressourcesEau,
        codgeo,
        codepci,
        'potable',
        true
      ),
      color: '#009ADC'
    },
    {
      titre: 'Industrie et autres usages économiques',
      icon: <Image src={usine_icon_black} alt="" />,
      sumDptmt: SumFiltered(ressourcesEau, codgeo, codepci, 'industrie'),
      sumCollectivite: SumFiltered(
        ressourcesEau,
        codgeo,
        codepci,
        'industrie',
        true
      ),
      color: '#7A49BE'
    },
    {
      titre: 'Refroidissement des centrales électriques',
      icon: <Image src={flocon_icon_black} alt="" />,
      sumDptmt: SumFiltered(ressourcesEau, codgeo, codepci, 'refroidissement'),
      sumCollectivite: SumFiltered(
        ressourcesEau,
        codgeo,
        codepci,
        'refroidissement',
        true
      ),
      color: '#BB43BD'
    },
    {
      titre: 'Alimentation des canaux',
      icon: <Image src={vagues_icon_black} alt="" />,
      sumDptmt: SumFiltered(ressourcesEau, codgeo, codepci, 'alimentation'),
      sumCollectivite: SumFiltered(
        ressourcesEau,
        codgeo,
        codepci,
        'alimentation',
        true
      ),
      color: '#00C2CC'
    },
    {
      titre: "Production d'électricité (barrages hydro-électriques)",
      icon: <Image src={eclair_icon_black} alt="" />,
      sumDptmt: SumFiltered(ressourcesEau, codgeo, codepci, 'production'),
      sumCollectivite: SumFiltered(
        ressourcesEau,
        codgeo,
        codepci,
        'production',
        true
      ),
      color: '#FFCF5E'
    }
  ];
  const totalDptmt =
    SumFiltered(ressourcesEau, codgeo, codepci, 'total') === 0
      ? 1
      : SumFiltered(ressourcesEau, codgeo, codepci, 'total');
  const total =
    SumFiltered(ressourcesEau, codgeo, codepci, 'total', true) === 0
      ? 1
      : SumFiltered(ressourcesEau, codgeo, codepci, 'total', true);
  const collectivite = codgeo
    ? ressourcesEau.filter((obj) => obj.code_geographique === codgeo)[0]
        ?.libelle_geographique
    : ressourcesEau.filter((obj) => obj.epci === codepci)[0]?.libelle_epci;
  const departement = ressourcesEau[0].departement;

  return (
    <div className={styles.prelevementEauWrapper}>
      {collectivite && data.find((e) => e.sumCollectivite !== 0) ? (
        <>
          {data
            .sort((a, b) => b.sumCollectivite - a.sumCollectivite)
            .map((item, index) => (
              <HtmlTooltip
                title={
                  <div className={styles.tooltip}>
                    <h3>{item.titre}</h3>
                    <p>
                      {collectivite} :{' '}
                      <b>
                        {((100 * item.sumCollectivite) / total).toFixed(1)}%
                      </b>{' '}
                      ({(item.sumCollectivite / 1000000).toFixed(1)} Mm³)
                    </p>
                    <p>
                      Département {departement} :{' '}
                      <b>{((100 * item.sumDptmt) / totalDptmt).toFixed(1)}%</b>{' '}
                      ({(item.sumDptmt / 1000000).toFixed(1)} Mm³)
                    </p>
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
                          percent={Number((100 * item.sumCollectivite) / total)}
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
                        {((100 * item.sumCollectivite) / total).toFixed(1)}%
                      </b>
                    </p>
                    <p>{(item.sumCollectivite / 1000000).toFixed(1)} Mm³</p>
                  </div>
                </div>
              </HtmlTooltip>
            ))}
          <Image src={legendEpci} alt="" style={{ alignSelf: 'end' }} />
        </>
      ) : (
        <div
          style={{
            height: 'inherit',
            alignContent: 'center',
            textAlign: 'center'
          }}
          key="noData"
        >
          Aucun prélèvement en eau trouvé en 2020 pour cette collectivité :{' '}
          {collectivite}
        </div>
      )}
    </div>
  );
};

export default PrelevementEauProgressBars;
