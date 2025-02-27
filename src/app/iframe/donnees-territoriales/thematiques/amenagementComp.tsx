'use client';

import { Tabs } from '@codegouvfr/react-dsfr/Tabs';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import { ConsommationEspacesNAF } from '@/components/themes/amenagement/consommationEspacesNAF';
import { TabTooltip } from '@/components/utils/TabTooltip';
import { CarteCommunes, ConsommationNAF } from '@/lib/postgres/models';
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
  consommationNAF: ConsommationNAF[];
  carteCommunes: CarteCommunes[];
}

const allComps = [
  {
    titre: "Consommation d'espaces NAF",
    Component: ({
      data,
      consommationNAF,
      carteCommunes
    }: Props & { activeDataTab: string }) => (
      <ConsommationEspacesNAF
        data={data}
        consommationNAF={consommationNAF}
        carteCommunes={carteCommunes}
      />
    )
  }
];

const AmenagementComp = ({ data, carteCommunes, consommationNAF }: Props) => {
  const [selectedTabId, setSelectedTabId] = useState(
    "Consommation d'espaces NAF"
  );
  const [selectedSubTab, setSelectedSubTab] = useState(
    "Consommation d'espaces NAF"
  );
  const searchParams = useSearchParams();
  const codepci = searchParams.get('codepci')!;
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
            tabId: "Consommation d'espaces NAF",
            label: (
              <TabTooltip
                selectedTab={selectedTabId}
                tooltip="La consommation d’un espace naturel, agricole ou forestier (ENAF) désigne sa conversion en surface artificialisée, le rendant indisponible pour des usages tels que l’agriculture, la foresterie ou les habitats naturels."
                titre="Consommation d'espaces NAF"
              />
            )
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
          <div className={styles.bubble}>
            <div className={styles.bubbleContent}>
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
                      carteCommunes={carteCommunes}
                      consommationNAF={consommationNAF}
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
export default AmenagementComp;
