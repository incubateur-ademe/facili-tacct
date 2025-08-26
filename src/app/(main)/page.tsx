'use client';

import CheckedIcon from '@/assets/icons/checked_icon_black.svg';
import CogwheelIcon from '@/assets/icons/cogwheel_icon_black.svg';
import GuillemetIcon from '@/assets/icons/guillemet_icon_white.svg';
import ThreePeopleIcon from '@/assets/icons/three_people_icon_black.svg';
import CommunauteImg from '@/assets/images/communaute_home.webp';
import TopImage from '@/assets/images/home_page1.png';
import Patch4Img from '@/assets/images/patch4_home.png';
import RessourcesImg from '@/assets/images/ressources_home.png';
import OptimalParagraph from '@/components/utils/OptimalParagraph';
import { BoutonPrimaireClassic, BoutonSecondaireClassic } from '@/design-system/base/Boutons';
import { Body, H1, H2, H3 } from '@/design-system/base/Textes';
import MiddlePageTrigger from '@/hooks/MiddlePageTrigger';
import { homeCards, verbatimCards } from '@/lib/homeCards';
import Image from 'next/image';
import { useState } from 'react';
import { NewContainer } from './../../design-system/layout';
import { HomeCard } from './homeCard';
import styles from './main.module.scss';

const Home = () => {
  const [noticeClosed, setNoticeClosed] = useState(false);

  return (
    <div>
      {/* <Notice
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
      /> */}
      <div className={styles.homePageTopContainer}>
        <NewContainer size="xl">
          <div className={styles.homePageTopWrapper}>
            <div className={styles.titles}>
              <H1 style={{ color: "white" }}>
                Le climat change. Et vous ?
              </H1>
              <Body size='lg' style={{ color: "white", margin: "2.5rem 0 2rem" }}>
                Avec Facili-TACCT, identifiez les vulnérabilités de votre territoire aux impacts du changement climatique.
              </Body>
              {/* <Body size='lg' style={{ color: "white", margin: "0 0 2rem" }}>
                Explorez les données climatiques, socio-économiques et environnementales, apprenez à
                identifier les impacts réels sur le terrain, hiérarchisez vos enjeux d'adaptation
                et enfin déployez votre plan d’action.
              </Body> */}
              <BoutonSecondaireClassic
                size='lg'
                link="/recherche-territoire"
                text='Explorer les données de mon territoire'
              />
            </div>
            <div className={styles.topImage}>
              <Image
                alt=""
                src={TopImage}
                width={0}
                height={0}
                // sizes="(max-width: 768px) 0, (max-width: 1200px) 50vw, 40vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </NewContainer>
      </div>
      <div className={styles.patch4Container}>
        <NewContainer size="xl">
          <div className={styles.patch4Wrapper}>
            <div className={styles.patch4img}>
              <Image
                alt=""
                src={Patch4Img}
              />
            </div>
            <div className={styles.patch4Text}>
              <H2>
                Avec le patch 4°C : intégrez la trajectoire de réchauffement de référence dans votre diagnostic existant
              </H2>
              <Body>
                Le “patch 4°C” est une action du 3ème Plan national d’adaptation au changement
                climatique (2025). Il s’adresse en priorité aux communes ou EPCI qui
                viennent d’achever leurs études de vulnérabilité sur la base d’hypothèses de
                réchauffement différentes de celles de la TRACC.
              </Body>
              <BoutonPrimaireClassic
                size='lg'
                link="/recherche-territoire-patch4"
                text='Accéder au patch 4°C'
              />
            </div>
          </div>
        </NewContainer>
      </div>
      <div className={styles.tacctContainer}>
        <NewContainer size="xl">
          <div className={styles.tacctWrapper}>
            <H2 style={{ color: "white", margin: 0, textAlign: "center" }}>Pourquoi suivre la démarche TACCT ?</H2>
            <H3 style={{ color: "white", fontSize: "1.25rem", fontWeight: 400, marginBottom: "2.5rem", textAlign: "center" }}>
              <span>TACCT</span> : <span>T</span>rajectoires d’<span>A</span>daptation
              au <span>C</span>hangement <span>C</span>limatique des <span>T</span>erritoires
            </H3>
            <OptimalParagraph style={{ color: "white", textAlign: "center" }}>
              Face aux défis du changement climatique, vous cherchez une méthode concrète pour
              agir ? TACCT vous accompagne étape par étape dans votre démarche d'adaptation territoriale.
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
        </NewContainer>
      </div>
      <div className={styles.communauteContainer}>
        <NewContainer size="xl">
          <div className={styles.communauteWrapper}>
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
            <div className={styles.communauteText}>
              <H2>Facili-TACCT, c’est aussi une communauté de près de 300 chargés de mission climat pour :</H2>
              <div className='flex flex-row align-center'>
                <Image
                  alt=""
                  src={ThreePeopleIcon}
                  width={24}
                  height={24}
                  style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}
                />
                <Body style={{ fontSize: "1.25rem" }}>
                  Apprendre entre pairs
                </Body>
              </div>
              <ul style={{ margin: '-0.5rem 1rem 0 0' }}>
                <li>Participer à nos webinaires thématiques sur l’adaptation</li>
                <li>Accéder aux articles capitalisant les échanges depuis la création de la communauté</li>
                <li>Questionner d’autres territoires, de la commune au département !</li>
              </ul>
              <div className='flex flex-row align-center'>
                <Image
                  alt=""
                  src={CheckedIcon}
                  width={24}
                  height={24}
                  style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}
                />
                <Body style={{ fontSize: "1.25rem" }}>
                  Être accompagné dans votre diagnostic
                </Body>
              </div>
              <div className='flex flex-row align-center'>
                <Image
                  alt=""
                  src={CogwheelIcon}
                  width={24}
                  height={24}
                  style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}
                />
                <Body style={{ fontSize: "1.25rem" }}>
                  Contribuer à l'amélioration de l'outil
                </Body>
              </div>
              <BoutonPrimaireClassic
                size='lg'
                link="https://tally.so/r/n0LrEZ"
                text="Rejoindre la communauté"
                rel="noopener noreferrer"
              />
            </div>

          </div>
        </NewContainer>
      </div>
      <div className={styles.diagnosticContainer}>
        <NewContainer size="xl">
          <div className={styles.diagnosticWrapper}>
            <div className={styles.diagnosticText}>
              <H2 style={{ color: 'white' }}>Besoin d’être guidé pour évaluer votre diagnostic ?</H2>
              <Body style={{ color: 'white' }}>
                Votre territoire possède déjà un diagnostic de vulnérabilité
                climatique ? Exploitez-le ! Évitez de repartir de zéro et gagnez
                du temps et des ressources en évaluant d'abord le document existant.
              </Body>
              <BoutonSecondaireClassic
                size='lg'
                link="https://tally.so/r/3Nx98W"
                text="J'évalue mon diagnostic"
                rel="noopener noreferrer"
                style={{ marginTop: '2rem' }}
              />
            </div>
          </div>
        </NewContainer>
      </div>
      <div className={styles.ressourcesContainer}>
        <NewContainer size="xl">
          <div className={styles.ressourcesWrapper}>
            <div className={styles.ressourcesText}>
              <H2>Découvrez des ressources utiles</H2>
              <Body>
                Bénéficiez d'articles et de retours d'expériences pour vous
                accompagner dans la mise en place de votre démarche d’adaptation
                au changement climatique.
              </Body>
              <BoutonPrimaireClassic
                size='lg'
                link="/ressources"
                text="Découvrir les ressources"
                style={{ marginTop: '2rem' }}
              />
            </div>
            <Image
              alt=""
              src={RessourcesImg}
              className={styles.ressourcesImage}
            />
          </div>
        </NewContainer>
      </div>
      <div className={styles.verbatimContainer}>
        <NewContainer size="xl">
          <H2 style={{ color: 'white' }}>Facili-TACCT : qu’est-ce qu’on en dit ?</H2>
          <div className={styles.verbatimCardsWrapper}>
            {verbatimCards.map((card, index) => (
              <div key={index} className={styles.verbatimCard}>
                <div className={styles.quote}>
                  <Image
                    src={GuillemetIcon}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.guillemetIcon}
                  />
                  <Body style={{ color: 'white' }}>
                    {card.description}
                  </Body>
                </div>
                <Body
                  size='sm'
                  style={{
                    color: 'white',
                    textAlign: 'right',
                    fontStyle: 'italic',
                  }}>
                  {card.personne}
                </Body>
              </div>
            ))}
          </div>
        </NewContainer>
      </div>
    </div>
  );
};

export default Home;
