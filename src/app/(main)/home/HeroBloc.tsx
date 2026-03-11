import TopImage from '@/assets/images/home_page1.png';
import { BoutonSecondaireClassic } from '@/design-system/base/Boutons';
import { Body, H1 } from '@/design-system/base/Textes';
import { NewContainer } from '@/design-system/layout';
import Image from 'next/image';

export const HeroBloc = () => {
  return (
    <div style={{ backgroundColor: 'var(--principales-vert)' }}>
      <NewContainer size="xl">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            padding: '0 2rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <H1 style={{ color: 'white' }}>
              Réussir la démarche d'adaptation de votre territoire
            </H1>
            <Body size="lg" style={{ color: 'white', margin: '2.5rem 0 2rem' }}>
              Avec TACCT, identifiez les vulnérabilités de votre territoire aux impacts du
              changement climatique.
            </Body>
            <BoutonSecondaireClassic
              size="lg"
              link="/recherche-territoire"
              text="Explorer les données de mon territoire"
            />
          </div>
          <div style={{ position: 'relative', width: '100%', maxWidth: '450px', flexShrink: 0 }}>
            <Image
              alt=""
              src={TopImage}
              width={0}
              height={0}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>
      </NewContainer>
    </div>
  );
};
