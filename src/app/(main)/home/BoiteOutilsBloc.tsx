import RessourcesImg from '@/assets/images/ressources_home.webp';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { Body, H2 } from '@/design-system/base/Textes';
import { NewContainer } from '@/design-system/layout';
import Image from 'next/image';

export const BoiteOutilsBloc = () => {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <NewContainer size="xl">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '4rem',
            padding: '0 2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              flex: 1,
            }}
          >
            <H2>Trouvez les réponses à vos questions sur l'adaptation</H2>
            <Body>
              Notre sélection d'outils pratiques : retours d'expériences d'autres territoires,
              conseils sur l'approche et bonnes pratiques pour votre démarche d'adaptation au
              changement climatique.
            </Body>
            <BoutonPrimaireClassic
              size="lg"
              link="/ressources"
              text="Accéder aux ressources"
              style={{ marginTop: '1rem' }}
              posthogEventName="bouton_acceder_ressources_home_tacct"
            />
          </div>
          <Image
            alt=""
            src={RessourcesImg}
            style={{
              minWidth: '300px',
              maxWidth: '400px',
              maxHeight: '350px',
              objectFit: 'contain',
            }}
          />
        </div>
      </NewContainer>
    </div>
  );
};
