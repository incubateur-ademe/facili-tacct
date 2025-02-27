'use client';
import { cards, ressourcesTabs } from '@/lib/ressources/cards';
import { useState } from 'react';
import { CardComp } from './CustomCard';
import styles from './ressources.module.scss';
import { TabComp } from './tabs';

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
    <div>
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
              backgroundColor="#E3E3FD"
              textColor="#161616"
              titleColor="#161616"
              logoColor="#000091"
            />
          ))}
        </div>
      </div>
      <div className={styles.ressourcesWrapper} style={{ padding: '4em 0' }}>
        <TabComp
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
                link={el.link + '?title=' + el.titre}
              />
            ) : null
          )}
        </div>
      </div>
      <div className={styles.ressourcesWrapper}>
        <TabComp
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
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default RessourcesCards;
