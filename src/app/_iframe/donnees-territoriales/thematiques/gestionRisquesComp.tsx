'use client';

import { fr } from '@codegouvfr/react-dsfr';
import { Tabs } from '@codegouvfr/react-dsfr/Tabs';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Catnat } from '@/components/themes/gestionRisques/catnat';
import ErosionCotes from '@/components/themes/gestionRisques/erosionCotiere';
import {
  CarteCommunes,
  EpciContours,
  ErosionCotiere,
  GestionRisques
} from '@/lib/postgres/models';
import { TabTooltip } from '@/lib/utils/TabTooltip';
import { useStyles } from 'tss-react/dsfr';
import styles from '../donnees.module.scss';

interface Props {
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  gestionRisques: GestionRisques[];
  carteCommunes: CarteCommunes[];
  erosionCotiere: ErosionCotiere[][];
  epciContours: EpciContours[];
}

const allComps = [
  {
    titre: 'catnat',
    Component: ({
      gestionRisques,
      data,
      carteCommunes
    }: Props & { activeDataTab: string }) => (
      <Catnat
        gestionRisques={gestionRisques}
        data={data}
        carteCommunes={carteCommunes}
      />
    )
  },
  {
    titre: 'Érosion côtière',
    Component: ({
      erosionCotiere,
      epciContours
    }: Props & { activeDataTab: string }) => (
      <ErosionCotes
        erosionCotiere={erosionCotiere[1]}
        epciContours={epciContours}
      />
    )
  }
];

const GestionRisquesComp = ({
  data,
  gestionRisques,
  carteCommunes,
  erosionCotiere,
  epciContours
}: Props) => {
  const [selectedTabId, setSelectedTabId] = useState(
    'Arrêtés catastrophes naturelles'
  );
  const [selectedSubTab, setSelectedSubTab] = useState('catnat');
  const searchParams = useSearchParams();
  const codepci = searchParams.get('codepci')!;
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
      data.filter((el) => el.facteur_sensibilite === selectedTabId)[0].titre
    );
  }, [selectedTabId, codepci]);

  return (
    <div className={styles.container}>
      <Tabs
        selectedTabId={selectedTabId}
        tabs={[
          {
            tabId: 'Arrêtés catastrophes naturelles',
            label: (
              <TabTooltip
                selectedTab={selectedTabId}
                tooltip="Pour une commune, la prise en charge des conséquences d’une catastrophe naturelle par un assureur au titre de la garantie « Cat-Nat »  est accordée par la publication d’un arrêté interministériel au Journal Officiel reconnaissant l’état de catastrophe naturelle de la commune concernée."
                titre="Arrêtés catastrophes naturelles"
              />
            )
          },
          ...(erosionCotiere[0].length > 0
            ? [
                {
                  tabId: 'Érosion côtière',
                  label: (
                    <TabTooltip
                      selectedTab={selectedTabId}
                      tooltip="Indicateur national de l’érosion côtière."
                      titre="Érosion côtière"
                    />
                  )
                }
              ]
            : [])
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
          {/* <div className={styles.titles}>
            {data
              .filter(el => el.facteur_sensibilite === selectedTabId)
              .map((element, i) => (
                <button
                  key={i}
                  className={selectedSubTab === element.titre ? styles.selectedButton : styles.button}
                  onClick={() => {
                    setSelectedSubTab(element.titre);
                  }}
                >
                  {element.titre}
                </button>
              ))}
          </div> */}
          <div className={styles.bubble}>
            <div className={styles.bubbleContent} style={darkClass}>
              {(() => {
                const Component = allComps.find(
                  (el) => el.titre === selectedSubTab
                )?.Component;
                if (!Component) return null;
                return (
                  <Component
                    data={data}
                    gestionRisques={gestionRisques}
                    activeDataTab={selectedSubTab}
                    carteCommunes={carteCommunes}
                    erosionCotiere={erosionCotiere}
                    epciContours={epciContours}
                  />
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
export default GestionRisquesComp;
