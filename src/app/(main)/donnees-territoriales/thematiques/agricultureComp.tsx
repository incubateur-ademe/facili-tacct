'use client';

import { CarteCommunes, EpciContours } from '@/lib/postgres/models';
import { fr } from '@codegouvfr/react-dsfr';
import { Tabs } from '@codegouvfr/react-dsfr/Tabs';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { useStyles } from 'tss-react/dsfr';
import styles from '../donnees.module.scss';

interface Props {
  data: Array<{
    donnee: string;
    facteurSensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  carteCommunes: CarteCommunes[];
  epciContours: EpciContours[];
}

const allComps = [
  {
    titre: "Chefs d'exploitation de plus de 55 ans",
    Component: ({ data }: Props & { activeDataTab: string }) => (
      <div>Chefs d'exploitation de plus de 55 ans</div>
    )
  },
  {
    titre: 'Surfaces irriguées SAU',
    Component: ({ data }: Props & { activeDataTab: string }) => (
      <div>Surfaces irriguées SAU</div>
    )
  }
];

const AgricultureComp = ({ data, carteCommunes, epciContours }: Props) => {
  const [selectedTabId, setSelectedTabId] = useState('Renouvellement agricole');
  const [selectedSubTab, setSelectedSubTab] = useState(
    "Chefs d'exploitation de plus de 55 ans"
  );
  const searchParams = useSearchParams();
  const codepci = searchParams.get('codepci')!;
  const codgeo = searchParams.get('codgeo')!;
  const { isDark } = useIsDark();
  const darkClass = {
    backgroundColor: fr.colors.getHex({ isDark }).decisions.background.default
      .grey.active,
    '&:hover': {
      backgroundColor: fr.colors.getHex({ isDark }).decisions.background.alt
        .grey.hover
    }
  };
  const { css } = useStyles();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    setSelectedSubTab(
      data.filter((el) => el.facteurSensibilite === selectedTabId)[0].titre
    );
  }, [selectedTabId, codepci]);

  return (
    <div className="w-full">
      <Tabs
        selectedTabId={selectedTabId}
        tabs={[
          {
            tabId: 'Renouvellement agricole',
            label: 'Renouvellement agricole'
          }
        ]}
        onTabChange={setSelectedTabId}
        className={css({
          boxShadow: 'none',
          '::before': {
            boxShadow:
              'inset 0 1px 0 0 var(--border-default-grey), inset 1px 0 0 0 transparent, inset -1px 0 0 0 transparent'
          },
          '.fr-tabs__tab[aria-selected=true]:not(:disabled)': {
            color: '#0063CB',
            backgroundImage:
              'linear-gradient(0deg, #0063CB, #0063CB), linear-gradient(0deg, var(--border-default-grey), var(--border-default-grey)), linear-gradient(0deg, var(--border-default-grey), var(--border-default-grey)), linear-gradient(0deg, var(--border-default-grey), var(--border-default-grey))'
          },
          '.fr-tabs__tab': {
            margin: '0 0.25em 0 0'
          },
          '.fr-tabs__tab:not([aria-selected=true])': {
            color: '#3A3A3A',
            backgroundColor: '#F9F9FF',
            '&:hover': {
              backgroundColor: '#e9e9ff'
            }
          },
          '.fr-tabs__panel': {
            padding: '1rem 0'
          },
          '.fr-tabs__list': {
            padding: '0',
            margin: '0'
          }
        })}
      >
        <div className={styles.formContainer}>
          <div className={styles.titles}>
            {data
              .filter((el) => el.facteurSensibilite === selectedTabId)
              .map((element, i) => (
                <button
                  key={i}
                  className={
                    selectedSubTab === element.titre
                      ? styles.selectedButton
                      : styles.button
                  }
                  onClick={() => {
                    setSelectedSubTab(element.titre);
                  }}
                >
                  {element.titre}
                </button>
              ))}
          </div>
          <div className={styles.bubble}>
            <div className={styles.bubbleContent} style={darkClass}>
              {(() => {
                const Component = allComps.find(
                  (el) => el.titre === selectedSubTab
                )?.Component;
                if (!Component) return null;
                return (
                  <Suspense>
                    <Component
                      data={data}
                      activeDataTab={selectedSubTab}
                      epciContours={epciContours}
                      carteCommunes={carteCommunes}
                    />
                  </Suspense>
                );
              })()}
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default AgricultureComp;
