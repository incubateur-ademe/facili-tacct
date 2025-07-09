'use client';

import CommunauteImg from '@/assets/images/communaute_home.webp';
import Patch4Img from '@/assets/images/patch4_home.png';
import RessourcesImg from '@/assets/images/ressources_home.webp';
import { Loader } from '@/components/loader';
import useWindowDimensions from '@/hooks/windowDimensions';
import { homeCards } from '@/lib/homaCards';
import Image from 'next/image';
import { lazy, useEffect, useState } from 'react';
import { Container } from './../../dsfr/layout';
import { HomeButton } from './homeButton';
import { HomeCard } from './homeCard';
import styles from './main.module.scss';

const CollectiviteSearch = lazy(() => import('./CollectiviteSearch'));

const Home = () => {
  const [noticeClosed, setNoticeClosed] = useState(false);
  const window = useWindowDimensions();
  const heightTopBlock = typeof document !== 'undefined' ? document.querySelector(`.${styles.homePageTopWrapper}`)?.clientHeight : 0;
  const heightNotice = typeof document !== 'undefined' ? document.querySelector(`.notice`)?.clientHeight : 0;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.documentElement.style;
      style.setProperty(
        '--height-notice', `${(noticeClosed ? 0 : (heightNotice ?? 0)) + (heightTopBlock ?? 0) + 16}px`
      );
    }
  }, [noticeClosed, heightTopBlock, heightNotice]);

  return (
    <div>
      <div className={styles.homePageTopWrapper}>
        <Container size="xl">
          <div className={styles.titles}>
            <h1>Le climat change. Et vous ?</h1>
            <p>
              Avec Facili-TACCT, identifiez les vulnérabilités de votre territoire aux impacts du changement climatique.
            </p>
          </div>
        </Container>
      </div>
      {
        window.width ? <CollectiviteSearch />
          : <div
            className={styles.collectiviteWrapper}
            style={{ height: "218px", top: "323px" }} //REPLACE update top paramètre si la notice est modifiée 415px si pas de notice
          >
            <Loader />
          </div>
      }
      <div className={styles.patch4Container}>
        <Container
          size="xl"
        >
          <div className={styles.patch4Wrapper}>
            <div className={styles.patch4img}>
              <Image
                alt=""
                src={Patch4Img}
                width={0}
                height={0}
                sizes="40vw"
                style={{
                  position: 'relative',
                  height: 'auto',
                  margin: '2rem 0 0'
                }}
              />
            </div>
            <div className={styles.patch4Text}>
              <h2>Patch 4° : Pré-identifiez votre exposition future à l’horizon 2100</h2>
              <p>
                Météo France propose un nouveau jeu de données (Patch 4°) basé sur
                la trajectoire de réchauffement de référence pour l’adaptation au
                changement climatique (TRACC) disponible sur le service Climadiag Commune.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.tacctContainer}>
        <Container size="xl">
          <div className={styles.tacctWrapper}>
            <h2>Pourquoi suivre la démarche TACCT ?</h2>
            <h3>TACCT : Trajectoires d’Adaptation au Changement Climatique des Territoires</h3>
            <p>
              Vous avez des défis complexes à relever face au changement climatique et vous vous
              demandez par où commencer ? TACCT est la méthode qu’il vous faut.
            </p>
            <div className={styles.cardWrapper}>
              {homeCards.map((card, index) => (
                <HomeCard
                  key={index}
                  icone={card.icone}
                  titre={card.titre}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.communauteContainer}>
        <Container size="xl">
          <div className={styles.communauteWrapper}>
            <div className={styles.communauteText}>
              <h2>Rejoignez la communauté Facili-TACCT</h2>
              <p>
                La communauté Facili-TACCT offre aux Chargés de Mission Climat un espace pour :
              </p>
              <ul>
                <li>Partager des expériences avec des Chargés de Mission Climat d’autres territoires</li>
                <li>Participer à des webinaires sur des thématiques liées à l’adaptation au changement climatique.</li>
              </ul>
              <HomeButton
                borderColor="#0063CB"
                backgroundColor="#0063CB"
                textColor="#FFFFFF"
                link="https://tally.so/r/n0LrEZ"
                text="Rejoindre la communauté"
                target='_blank'
                rel="noopener noreferrer"
              />
            </div>
            <Image
              alt=""
              src={CommunauteImg}
              width={0}
              height={0}
              sizes="40vw"
              style={{
                position: 'relative',
                maxWidth: '40%',
                height: 'auto',
                margin: '2rem 0 0'
              }}
            />
          </div>
        </Container>
      </div>
      <div className={styles.diagnosticContainer}>
        <Container size="xl">
          <div className={styles.diagnosticWrapper}>
            <div className={styles.diagnosticText}>
              <h2>Besoin d’être guidé pour évaluer votre diagnostic ?</h2>
              <p>
                Votre territoire possède déjà un diagnostic de vulnérabilité 
                climatique ? Exploitez-le ! Évitez de repartir de zéro et gagnez 
                du temps et des ressources en évaluant d'abord le document existant.
              </p>
              <HomeButton
                borderColor="#FFFFFF"
                backgroundColor="#0063CB"
                textColor="#FFFFFF"
                link="https://tally.so/r/3Nx98W"
                text="J'évalue mon diagnostic"
                target='_blank'
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.ressourcesContainer}>
        <Container size="xl">
          <div className={styles.ressourcesWrapper}>
            <Image
              alt=""
              src={RessourcesImg}
              width={0}
              height={0}
              sizes="40vw"
              style={{ maxWidth: '40%', height: 'auto', margin: '0 0 2rem' }}
            />
            <div className={styles.ressourcesText}>
              <h2>Découvrez des ressources utiles</h2>
              <p>
                Bénéficiez d'actualités, de retours d'expériences et de bonnes
                pratiques pour vous accompagner dans la mise en place de votre
                démarche d’adaptation au changement climatique.
              </p>
              <HomeButton
                borderColor="#0063CB"
                backgroundColor="#0063CB"
                textColor="#FFFFFF"
                link="/ressources"
                text="Décrouvrir les ressources"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
