'use client';
import { RetourHautDePage } from '@/components/interactions/RetourHautDePage';
import couleurs from '@/design-system/couleurs';
import { cards, ressourcesTabs } from '@/lib/ressources/cards';
import { useState } from 'react';
import { CardComp } from './CustomCard';
import styles from './ressources.module.scss';
import { TabCompNouveauParcours } from './tabs';

const RessourcesCards = () => {
  const [selectedTabId, setSelectedTabId] = useState(
    'Vous voulez réviser un diagnostic connu'
  );
  const [selectedThemeId, setSelectedThemeId] = useState('Inconfort thermique');
  const handleTab = (tab: string) => {
    setSelectedTabId(tab);
  };
  const handleTheme = (tab: string) => {
    setSelectedThemeId(tab);
  };

  return (
    <>
      <RetourHautDePage />
      <div
        className={styles.ressourcesWrapper}
        style={{ padding: '0 0 4em 0' }}
      >
        <div className={styles.cardsWrapper}>
          {cards.cartesPermanentes.map((el, i) => (
            <CardComp
              key={i}
              description={el.description}
              titre={el.titre}
              link={el.link}
              backgroundColor={couleurs.boutons.primaire[2]}
              textColor="#161616"
              titleColor="#161616"
              logoColor={couleurs.principales.vert}
            />
          ))}
        </div>
      </div>
      <div className={styles.ressourcesWrapper} style={{ padding: '4em 0' }}>
        <TabCompNouveauParcours
          defaultTab="Vous voulez réviser un diagnostic connu"
          data={ressourcesTabs.diagnostic}
          handleTab={handleTab}
        />
        <div className={styles.cardsWrapper}>
          {cards.diagnostic.map((el, i) =>
            el.tab.includes(selectedTabId) ? (
              <CardComp
                key={i}
                description={el.description}
                tag={el.tag}
                titre={el.titre}
                link={el.link}
                titleColor={couleurs.boutons.primaire[1]}
              />
            ) : null
          )}
        </div>
      </div>
      <div className={styles.ressourcesWrapper}>
        <TabCompNouveauParcours
          defaultTab="Inconfort thermique"
          data={ressourcesTabs.themes}
          handleTab={handleTheme}
        />
        <div className={styles.cardsWrapper}>
          {cards.inconfortThermique.map((el, i) =>
            el.tab === selectedThemeId ? (
              <CardComp
                key={i}
                description={el.description}
                tag={el.tag}
                titre={el.titre}
                link={el.link + '?title=' + el.titre}
                titleColor={couleurs.boutons.primaire[1]}
              />
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default RessourcesCards;
