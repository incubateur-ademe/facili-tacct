import CheckedIcon from '@/assets/icons/checked_icon_black.svg';
import CogwheelIcon from '@/assets/icons/cogwheel_icon_black.svg';
import ThreePeopleIcon from '@/assets/icons/three_people_icon_black.svg';
import CommunauteImg from '@/assets/images/communaute_home.webp';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { Body, H2 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import Image from 'next/image';
import styles from '../main.module.scss';

export const CommunauteBloc = () => {
  return (
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
              posthogEventName='bouton_rejoindre_communaute_home'
            />
          </div>

        </div>
      </NewContainer>
    </div>
  )
};
