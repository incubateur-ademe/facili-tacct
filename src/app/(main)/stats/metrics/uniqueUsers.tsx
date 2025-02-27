'use server';

import { LineChart } from '@/components/charts/stats/lineChart';
import { Container } from '@/dsfr/layout';
import GetInsights from '../query';
import styles from '../stats.module.scss';

const UniqueUsers = async () => {
  const uniqueUsers = await GetInsights('XZ6d0n8p');
  return (
    <Container m="4w">
      {uniqueUsers ? (
        <div
          style={{
            backgroundColor: 'white',
            height: '500px',
            width: '100%',
            margin: '0 0 15rem'
          }}
        >
          <h2>Utilsateurs uniques</h2>
          <div className={styles.graphWrapper}>
            <div
              className={styles.graphTitleWrapper}
              style={{ padding: '1rem' }}
            >
              <h2>
                Évolution des utilisateurs uniques sur les 30 derniers jours
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
              <LineChart rawData={uniqueUsers} />
            </div>
          </div>
          <p>
            Depuis le {uniqueUsers ? uniqueUsers[0].labels[0] : ''}, la somme
            totale d'utilisateurs uniques est de :{' '}
            {uniqueUsers ? uniqueUsers[0].count : ''}.
          </p>
        </div>
      ) : (
        ''
      )}
    </Container>
  );
};

export default UniqueUsers;
