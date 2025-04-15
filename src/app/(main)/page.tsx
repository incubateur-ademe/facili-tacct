'use client';

import { Loader } from '@/components/loader';
import useWindowDimensions from '@/hooks/windowDimensions';
import Notice from '@codegouvfr/react-dsfr/Notice';
import Image from 'next/image';
import { lazy, useEffect, useState } from 'react';
import { useStyles } from 'tss-react/dsfr';
import Constellation2Img from '../../assets/images/constellation2.png';
import Constellation3Img from '../../assets/images/constellation3.png';
import PeopleImg from '../../assets/images/landing-page-group.png';
import MapImg from '../../assets/images/landing-page-map.png';
import { Container } from '../../dsfr/layout';
import styles from '../root.module.scss';

const CollectiviteSearch = lazy(() => import('./CollectiviteSearch'));

const Home = () => {
  const [noticeClosed, setNoticeClosed] = useState(false);
  const { css } = useStyles();
  const window = useWindowDimensions();
  const heightTopBlock = typeof document !== 'undefined' ? document.querySelector(`.${styles.wrapper}`)?.clientHeight : 0;
  const heightNotice = typeof document !== 'undefined' ? document.querySelector(`.notice`)?.clientHeight : 0;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.documentElement.style;
      style.setProperty(
        '--height-notice', `${(noticeClosed ? 0 : (heightNotice ?? 0)) + (heightTopBlock ?? 0) + 32}px`
      );
    }
  }, [noticeClosed, heightTopBlock, heightNotice]);

  return (
    <div className={css({
      margin: '0 0 3em'
    })}>
      <Notice
        className='notice'
        description=""
        isClosable={true}
        onClose={() => setNoticeClosed(true)}
        title={
          <>
            <span>
              Facili-TACCT intègre un nouveau jeu de données créé par Météo-France. Il vise à montrer comment cinq aléas
              climatiques (fortes chaleurs, fortes pluies, sécheresse des sols, feux de forêt et niveaux marins) vont évoluer entre 2050 et 2100.
            </span>
            <br></br><br></br>
            <span>
              Retrouvez également de nouveaux indicateurs : “Surfaces irriguées” (et sa thématique Agriculture) et “Feux de forêt”.
            </span>
          </>
        }
      />
      <div className={styles.wrapper}>
        <Container size="xl">
          <div className={styles.titles}>
            <h1>Vulnérable aux impacts du changement climatique ?</h1>
            <p>
              <b>Objectivez votre diagnostic</b> avec les données
              socio-économiques qui rendent votre territoire unique et{' '}
              <b>découvrez des arguments et ressources pour mobiliser</b> vos
              collègues et partenaires externes sur l'adaptation au changement
              climatique
            </p>
          </div>
        </Container>
      </div>
      {
        window.width ? <CollectiviteSearch /> : <div className={styles.collectiviteWrapper} style={{height: "218px"}} ><Loader/></div>
      }
      <div className={styles.cardBackground}>
        <Container size="xl">
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <Image
                src={MapImg}
                alt="image-cartographie"
                className={styles.cardImage}
              />
              <div className={styles.cardDescription}>
                <h2>Evaluez la sensibilité de votre territoire</h2>
                <p>
                  Déchiffrez les données socio-économiques qui rendent votre
                  territoire unique
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                src={PeopleImg}
                alt="personne-dans-un-atelier"
                className={styles.cardImage}
              />
              <div className={styles.cardDescription}>
                <h2>Facilitez les conditions du dialogue</h2>
                <p>
                  Découvrez des ressources pour faciliter les conditions du
                  dialogue avec vos élus, services techniques et partenaires
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container size="xl">
        <div className={styles.constellationWrapper}>
          <div className={styles.constellationText}>
            <h3>L'adaptation n'est possible qu’en intelligence collective</h3>
            <p>
              Les initiatives d'adaptation au changement climatique réussissent
              lorsqu'elles sont abordées de manière{' '}
              <b>transversale et collaborative</b> en impliquant les élus et
              différentes expertises thématiques.
            </p>
          </div>
          {window.width && window.width < 1280 ? (
            <Image
              alt="constellation-de-problematiques"
              src={Constellation2Img}
              width={0}
              height={0}
              sizes="40vw"
              style={{
                position: 'relative',
                maxWidth: '40%',
                height: 'auto',
                right: '-3.5em'
              }}
            />
          ) : (
            <Image
              alt=""
              src={Constellation3Img}
              width={0}
              height={0}
              sizes="40vw"
              style={{ maxWidth: '40%', height: 'auto' }}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
