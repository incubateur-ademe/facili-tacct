'use server';

import { LineChart } from '@/components/charts/stats/lineChart';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { GetUniqueUsersHogQL } from '../query';
import styles from '../stats.module.scss';

const UniqueUsers = async () => {
  // const uniqueUsers = await GetInsightById(620831);
  // const data = Array.isArray(uniqueUsers) ? uniqueUsers : undefined;
  let data = await GetUniqueUsersHogQL();
  return (
    <div className='my-12'>
      {data ? (
        <div
          style={{
            backgroundColor: 'white',
            height: '500px',
            width: '100%',
            margin: '0 0 15rem'
          }}
        >
          <h2>Utilisateurs uniques</h2>
          <div className={styles.graphWrapper}>
            <div
              className={styles.graphTitleWrapper}
              style={{ padding: '1rem' }}
            >
              <h2>
                Évolution du nombre d'utilisateurs uniques par mois
              </h2>
            </div>
            <div
              style={{
                backgroundColor: 'white',
                height: '500px',
                width: '100%',
                padding: '1rem',
                borderRadius: '0.5rem'
              }}
            >
              <LineChart rawData={data} />
            </div>
          </div>
          <p>
            Depuis le 1er novembre 2024, la somme
            totale d'utilisateurs uniques est de :{' '}
            {data ? Round(data[0].count, 0) : ''}.
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default UniqueUsers;
