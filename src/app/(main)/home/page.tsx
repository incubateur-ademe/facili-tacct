'use client';

import { Loader } from '@/components/loader';
import useWindowDimensions from '@/hooks/windowDimensions';
import Image from 'next/image';
import { lazy, useEffect, useState } from 'react';
import { useStyles } from 'tss-react/dsfr';
import Card3Icon from '../../../assets/icons/cast_for_education_icon_orange.png';
import Card4Icon from '../../../assets/icons/library_books_icon_orange.png';
import Card1Icon from '../../../assets/icons/menu_book_icon_orange.png';
import Card2Icon from '../../../assets/icons/team_meeting_icon_orange.png';
import CommunauteImg from '../../../assets/images/communaute_home.webp';
import Patch4Img from '../../../assets/images/patch4_home.png';
import RessourcesImg from '../../../assets/images/ressources_home.webp';
import { Container } from '../../../dsfr/layout';
import styles from '../../root.module.scss';
import { HomeButton } from './homeButton';
import { HomeCard } from './homeCard';

const CollectiviteSearch = lazy(() => import('../CollectiviteSearch'));

const homeCards = [
  {
    icone: Card1Icon,
    titre: 'Un mode d’emploi pour l’adaptation au changement climatique',
    description: "TACCT propose un cheminement méthodologique pas à pas et structuré pour aider les collectivités à s’adapter aux impacts du changement climatique. Plus qu’un outil, c’est une véritable démarche. De l’identification des impacts climatiques à la mise en œuvre et au suivi des actions, TACCT propose un cadre complet, adaptable à toutes les réalités territoriales, quelles que soient la taille, la localisation ou les spécificités des collectivités."
  },
  {
    icone: Card2Icon,
    titre: "Une démarche nécessairement collaborative",
    description: "Sur un sujet aussi transversal que l’adaptation, il s’agit de ne pas laisser un chargé de mission travailler seul derrière son ordinateur. Seule une dynamique collective, au sein de la collectivité et avec les acteurs locaux permet de parvenir à une vision partagée du devenir du territoire."
  },
  {
    icone: Card3Icon,
    titre: "Monter en compétence et gagner en autonomie",
    description: "La démarche permet d’acculturer les acteurs impliqués, en les rendant plus autonomes face aux enjeux climatiques. Dans un contexte où l’adaptation devient incontournable, cette capacité est essentielle pour répondre aux défis d’un climat en constante évolution."
  },
  {
    icone: Card4Icon,
    titre: "Un cadre méthodologique de référence",
    description: "Dans le cadre du PNACC3, TACCT est désormais reconnu comme la méthode de référence pour accompagner les collectivités locales dans l’élaboration de leur stratégie d’adaptation. Accompagné par l’ADEME ou le CEREMA, en autonomie ou assisté d’un bureau d’étude, rejoignez la communauté !"
  }
]

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
        '--height-notice', `${(noticeClosed ? 0 : (heightNotice ?? 0)) + (heightTopBlock ?? 0) + 16}px`
      );
    }
  }, [noticeClosed, heightTopBlock, heightNotice]);

  return (
    <div>
      <div className={styles.wrapper}>
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
                link="/home"
                text="Rejoindre la communauté"
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
                blabalabla
              </p>
              <HomeButton
                borderColor="#FFFFFF"
                backgroundColor="#0063CB"
                textColor="#FFFFFF"
                link="/home"
                text="J'évalue mon diagnostic"
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
                link="/home"
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
