'use client';

import GraphNotFound from '@/assets/images/data_not_found_prelevement.png';
import DataNotFound from '@/components/graphDataNotFound';
import styles from '@/components/themes/ressourcesEau/ressourcesEau.module.scss';
import { HtmlTooltip } from '@/components/utils/HtmlTooltip';
import { ProgressBarsPNRDataPrelevementEau } from '@/lib/charts/ressourcesEau';
import { RessourcesEau } from '@/lib/postgres/models';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { Progress } from 'antd';
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

const PrelevementEauProgressBarsPNR = ({
  ressourcesEau
}: {
  ressourcesEau: RessourcesEau[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;

  const data = ProgressBarsPNRDataPrelevementEau({
    ressourcesEau,
    code,
    libelle,
    type
  });
  const total =
    SumFiltered(ressourcesEau, code, libelle, type, 'total') === 0
      ? 1
      : SumFiltered(ressourcesEau, code, libelle, type, 'total');

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
                        {Round((100 * item.sumTerritoire) / total, 2)} %
                      </b>{' '}
                      ({Round(item.sumTerritoire / 1000000, 2)} Mm3)
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
                          percent={Number((100 * item.sumTerritoire) / total)}
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
        <DataNotFound image={GraphNotFound} />
      )}
    </div>
  );
};

export default PrelevementEauProgressBarsPNR;
