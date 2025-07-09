'use client';

import GraphNotFound from '@/assets/images/data_not_found_prelevement.png';
import DataNotFound from '@/components/graphDataNotFound';
import styles from '@/components/themes/ressourcesEau/ressourcesEau.module.scss';
import { SurfacesAgricolesModel } from '@/lib/postgres/models';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { Progress } from 'antd';
import { useSearchParams } from 'next/navigation';

const SurfacesAgricolesProgressBar = ({
  surfacesAgricoles
}: {
  surfacesAgricoles: SurfacesAgricolesModel[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;

  const data = [
    {
      titre: 'Cultures permanentes',
      sumTerritoire: Sum(surfacesAgricoles.map(el => el.superficie_sau_cultures_permanentes)),
      color: '#00C190'
    },
    {
      titre: 'Surfaces toujours en herbe',
      sumTerritoire: Sum(surfacesAgricoles.map(el => el.superficie_sau_herbe)),
      color: '#009ADC'
    },
    {
      titre: 'Terres arables',
      sumTerritoire: Sum(surfacesAgricoles.map(el => el.superficie_sau_terres_arables)),
      color: '#7A49BE'
    },
    {
      titre: 'Jardin',
      sumTerritoire: Sum(surfacesAgricoles.map(el => el.superficie_sau_jardins)),
      color: '#BB43BD'
    },
  ];


  return (
    <div className={styles.surfacesAgricolesWrapper}>
      {libelle ? (
        <>
          {data
            .map((item, index) => (
              // <HtmlTooltip
              //   title={
              //     <div className={styles.tooltip}>
              //       <h3>{item.titre}</h3>
              //       <p>
              //         {libelle} :{' '}
              //         <b>
              //           {((100 * item.sumTerritoire) / total).toFixed(2)}%
              //         </b>{' '}
              //         ({(item.sumTerritoire / 1000000).toFixed(2)} Mm³)
              //       </p>
              //     </div>
              //   }
              //   key={index}
              //   placement="top"
              // >
                <div key={index} className={styles.progressDataWrapper}>
                  <div className={styles.progressDesign}>
                    <div className={styles.progressBar}>
                      <p>{item.titre}</p>
                      <div className={styles.barMarker}>
                        <Progress
                          percent={Number((item.sumTerritoire))}
                          showInfo={false}
                          strokeColor={item.color}
                          size={['100%', 12]}
                          style={{ width: '95%' }}
                          type="line"
                          trailColor="#F9F9FF"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.progressNumbers}>
                    <p>
                      <b>
                        {((item.sumTerritoire)).toFixed(2)}%
                      </b>
                    </p>
                    <p>{(item.sumTerritoire / 1000000).toFixed(2)} Mm³</p>
                  </div>
                </div>
              // </HtmlTooltip>
            ))}
        </>
      ) : (
        <DataNotFound image={GraphNotFound} />
      )}
    </div>
  );
};

export default SurfacesAgricolesProgressBar;
