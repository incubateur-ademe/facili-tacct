'use client';

import CommunauteImg from '@/assets/images/communaute_home.webp';
import Patch4Img from '@/assets/images/patch4_home.png';
import RessourcesImg from '@/assets/images/ressources_home.webp';
import { Loader } from '@/components/loader';
import OptimalParagraph from '@/components/utils/OptimalParagraph';
import { Body } from '@/design-system/base/Textes';
import MiddlePageTrigger from '@/hooks/MiddlePageTrigger';
import useWindowDimensions from '@/hooks/windowDimensions';
import { homeCards } from '@/lib/homaCards';
import Notice from '@codegouvfr/react-dsfr/Notice';
import Image from 'next/image';
import { lazy, useEffect, useState } from 'react';
import { Container } from '../../design-system/layout';
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
      <Notice
        className='notice'
        isClosable={true}
        onClose={() => setNoticeClosed(true)}
        title={"Découvrez les nouveautés de l'été !"}
        description={
          <>
            Explorez une page d’accueil entièrement repensée, accédez à notre nouvel indicateur Types de culture (thématique Agriculture) et exportez les données socio-économiques de votre territoire ! Ne manquez pas également nos nouvelles ressources sur les{' '}
            <a
              href="/ressources/articles/ilot-chaleur-urbain-erreurs-a-eviter/?utm_source=modalehome&utm_campaign=modale-home-icu"
              target="_blank"
              rel="noopener noreferrer"
            >
              îlots de chaleur urbains
            </a>
            {' '}et les {" "}
            <a
              href="/ressources/articles/stagiaire-diagnostic-vulnerabilite-climat/?utm_source=modalehome&utm_campaign=modale-home-stagiaire"
              target="_blank"
              rel="noopener noreferrer"
            >
              avantages et défis de l’arrivée d’un stagiaire sur le diagnostic de vulnérabilité
            </a>
            .
          </>
        }
      />
      <div className={styles.homePageTopWrapper}>
        <Container size="xl">
          <div className={styles.titles}>
            <h1>Le climat change. Et vous ?</h1>
            <OptimalParagraph>
              Avec Facili-TACCT, identifiez les vulnérabilités de votre territoire aux impacts du changement climatique.
            </OptimalParagraph>
          </div>
        </Container>
      </div>
      {
        window.width ? <CollectiviteSearch />
          : <div
            className={styles.collectiviteWrapper}
            style={{ height: "218px", top: "461px" }} // update top paramètre si la notice est modifiée (360px si pas de notice)
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
              <h2>
                Patch 4°C : intégrez la trajectoire de réchauffement de référence (TRACC) dans
                votre diagnostic de vulnérabilité climatique
              </h2>
              <Body>
                Le “patch 4°C” est une action du 3ème Plan national d’adaptation au changement
                climatique (2025). Il s’adresse <b>en priorité aux communes ou EPCI</b> qui
                viennent d’achever leurs études de vulnérabilité sur la base d’hypothèses de
                réchauffement différentes de celles de la TRACC.
              </Body>
              <p>
                Pour accéder aux données, saisissez le nom de votre territoire dans le champ ci-dessus.
              </p>
              <HomeButton
                link="/rechercher-son-territoire-patch4"
                borderColor="#0063CB"
                backgroundColor="#0063CB"
                textColor="#FFFFFF"
                text='Accéder au Patch 4°C'
              />
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.tacctContainer}>
        <Container size="xl">
          <div className={styles.tacctWrapper}>
            <h2>Pourquoi suivre la démarche TACCT ?</h2>
            <h3><span>TACCT</span> : <span>T</span>rajectoires d’<span>A</span>daptation au <span>C</span>hangement <span>C</span>limatique des <span>T</span>erritoires</h3>
            <OptimalParagraph>
              Vous avez des défis complexes à relever face au changement climatique et vous vous
              demandez par où commencer ? TACCT est la méthode qu’il vous faut.
            </OptimalParagraph>
            <MiddlePageTrigger />
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
                La communauté Facili-TACCT offre aux chargés de mission “Climat” un espace pour :
              </p>
              <ul>
                <li>participer à des webinaires sur des thématiques liées à l’adaptation au changement climatique</li>
                <li>faire connaissance de chargés de mission sur d’autres territoires, à d’autres échelles d’intervention</li>
                <li>accéder à l’intégralité des comptes rendus des webinaires passés</li>
                <li>poser des questions entre pairs</li>
                <li>participer à la construction du produit Facili-TACCT</li>
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
                text="Découvrir les ressources"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
