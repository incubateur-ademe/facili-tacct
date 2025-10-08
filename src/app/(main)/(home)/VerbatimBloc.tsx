import GuillemetIcon from '@/assets/icons/guillemet_icon_white.svg';
import { Body, H2 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import { verbatimCards } from '@/lib/homeCards';
import Image from 'next/image';
import styles from '../main.module.scss';

export const VerbatimBloc = () => {
  return (
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
  )
};
