import { StepCard } from '@/app/(main)/home/StepCard';
import Etape1Background from "@/assets/svg/home/etape1background.svg";
import Etape1Contour from "@/assets/svg/home/etape1contour.svg";
import Etape1Foreground from "@/assets/svg/home/etape1foreground.svg";
import Etape1Image from "@/assets/svg/home/etape1Image.svg";
import Etape2Background from "@/assets/svg/home/etape2background.svg";
import Etape2Contour from "@/assets/svg/home/etape2contour.svg";
import Etape2Foreground from "@/assets/svg/home/etape2foreground.svg";
import Etape2Image from "@/assets/svg/home/etape2image.svg";
import Etape3Background from "@/assets/svg/home/etape3background.svg";
import Etape3Contour from "@/assets/svg/home/etape3contour.svg";
import Etape3Foreground from "@/assets/svg/home/etape3foreground.svg";
import Etape3Image from "@/assets/svg/home/etape3image.svg";
import Etape4Background from "@/assets/svg/home/etape4background.svg";
import Etape4Contour from "@/assets/svg/home/etape4contour.svg";
import Etape4Foreground from "@/assets/svg/home/etape4foreground.svg";
import Etape4Image from "@/assets/svg/home/etape4image.svg";
import LeftLine from "@/assets/svg/home/leftLine";
import { MiddleLine } from '@/assets/svg/home/middleLine';
import { RightLine } from '@/assets/svg/home/rightLine';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { Body, H2 } from '@/design-system/base/Textes';
import { NewContainer } from '@/design-system/layout';

export const DemarcheBloc = () => {
  return (
    <div style={{ backgroundColor: 'var(--boutons-primaire-2)' }}>
      <NewContainer size="xl">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <H2 style={{ textAlign: 'center', margin: 0 }}>
            Commencez votre démarche d'adaptation à votre rythme
          </H2>
          <BoutonPrimaireClassic
            size="lg"
            link="https://tally.so/r/n0LrEZ"
            text="M'inscrire à une session d'accueil"
            rel="noopener noreferrer"
            posthogEventName="bouton_inscription_session_home"
          />

          {/* Conteneur du stepper en vague */}
          <div style={{ position: 'relative', width: '100%', height: "700px" }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', height: '100%' }}>
              {/* Background + Image superposés */}
              <StepCard
                contour={Etape1Contour}
                image={Etape1Image}
                background={Etape1Background}
                foreground={Etape1Foreground}
                texte={
                  <Body>
                    Une visio d'1h pour savoir <b>par où commencer</b>
                  </Body>
                }
                numero={1}
                maxWidth={235}
                justifyContent="flex-start"
                label="Session d'accueil"
              />
              {/* Ligne : offsetX négatif pour superposer, offsetY pour décaler verticalement */}
              <div style={{ transform: 'translate(-40px, 115px)', flexShrink: 0 }}>
                <LeftLine />
              </div>
              <StepCard
                contour={Etape2Contour}
                image={Etape2Image}
                background={Etape2Background}
                foreground={Etape2Foreground}
                texte={
                  <Body>
                    Un démarrage à la carte, avec tous les liens utiles
                  </Body>
                }
                numero={2}
                maxWidth={235}
                justifyContent="center"
                label="Embarquement pas-à-pas"
                offsetX={-65}
                offsetY={60}
              />
              <div style={{ transform: 'translate(-25px, 240px)', flexShrink: 0 }}>
                <MiddleLine />
              </div>
              <StepCard
                contour={Etape3Contour}
                image={Etape3Image}
                background={Etape3Background}
                foreground={Etape3Foreground}
                texte={
                  <Body>
                    Chaque mois, un retour d’expérience et une discussion autour d’un sujet opérationnel
                  </Body>
                }
                numero={3}
                maxWidth={235}
                justifyContent="center"
                label="Webinaires thématiques"
                offsetX={-55}
                offsetY={-60}
              />
              <div style={{ transform: 'translate(-35px, 280px)', flexShrink: 0 }}>
                <RightLine />
              </div>
              <StepCard
                contour={Etape4Contour}
                image={Etape4Image}
                background={Etape4Background}
                foreground={Etape4Foreground}
                texte={
                  <Body>
                    Une communauté de 300 chargés de mission de tous types de territoires
                  </Body>
                }
                numero={4}
                maxWidth={235}
                justifyContent="flex-end"
                label="Échanges entre pairs"
                offsetX={-55}
                offsetY={-40}
              />
            </div>
          </div>
        </div>
      </NewContainer>
    </div>
  );
};
