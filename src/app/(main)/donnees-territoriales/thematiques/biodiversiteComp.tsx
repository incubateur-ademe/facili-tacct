'use client';

import AgricultureBiologique from '@/components/themes/biodiversite/agricultureBio';
import AOT40Dataviz from '@/components/themes/biodiversite/AOT40';
import { ConsommationEspacesNAF } from '@/components/themes/biodiversite/consommationEspacesNAF';
import EtatQualiteCoursDeau from '@/components/themes/biodiversite/etatCoursDeau';
import { TabTooltip } from '@/components/utils/Tooltips';
import {
  AgricultureBio,
  AOT40,
  CarteCommunes,
  ConsommationNAF,
  EtatCoursDeau,
  QualiteSitesBaignade
} from '@/lib/postgres/models';
import { Tabs } from '@codegouvfr/react-dsfr/Tabs';
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
  agricultureBio: AgricultureBio[];
  consommationNAF: ConsommationNAF[];
  aot40: AOT40[];
  etatCoursDeau: EtatCoursDeau[];
  qualiteEauxBaignade: QualiteSitesBaignade[];
  // surfacesProtegees: any[];
}

const allComps = [
  {
    titre: 'Surfaces en bio',
    Component: ({
      data,
      agricultureBio
    }: Props & { activeDataTab: string }) => (
      <AgricultureBiologique data={data} agricultureBio={agricultureBio} />
    )
  },
  {
    titre: "Consommation d'espaces NAF",
    Component: ({
      consommationNAF,
      carteCommunes
    }: Props & { activeDataTab: string }) => (
      <ConsommationEspacesNAF
        consommationNAF={consommationNAF}
        carteCommunes={carteCommunes}
      />
    )
  },
  {
    titre: "État écologique des cours d'eau",
    Component: ({
      etatCoursDeau,
      carteCommunes,
      qualiteEauxBaignade
    }: Props & { activeDataTab: string; etatCoursDeau: EtatCoursDeau[] }) => (
      <EtatQualiteCoursDeau
        etatCoursDeau={etatCoursDeau}
        carteCommunes={carteCommunes}
        qualiteEauxBaignade={qualiteEauxBaignade}
      />
    )
  },
  {
    titre: 'Ozone et végétation',
    Component: ({
      aot40,
      carteCommunes
    }: Props & { activeDataTab: string }) => (
      <AOT40Dataviz
        aot40={aot40}
        carteCommunes={carteCommunes}
      />
    )
  },
  // {
  //   titre: 'Surfaces protégées',
  //   Component: ({
  //     surfacesProtegees,
  //     carteCommunes
  //   }: Props & { activeDataTab: string }) => (
  //     <SurfacesProtegees
  //       surfacesProtegees={surfacesProtegees}
  //       carteCommunes={carteCommunes}
  //     />
  //   )
  // }
];

const BiodiversiteComp = ({
  data,
  carteCommunes,
  agricultureBio,
  consommationNAF,
  aot40,
  etatCoursDeau,
  qualiteEauxBaignade,
  // surfacesProtegees
}: Props) => {
  const [selectedTabId, setSelectedTabId] = useState(
    "Consommation d'espaces NAF"
  );
  const [selectedSubTab, setSelectedSubTab] = useState(
    "Consommation d'espaces NAF"
  );
  const { css } = useStyles();

  useEffect(() => {
    setSelectedSubTab(
      data.filter((el) => el.facteurSensibilite === selectedTabId)[0].titre
    );
  }, [selectedTabId]);

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
          },
          {
            tabId: 'Surfaces en bio',
            label: (
              <TabTooltip
                selectedTab={selectedTabId}
                tooltip="L’agriculture biologique fait partie d’un ensemble de pratiques agricoles respectueuses des équilibres écologiques qui contribue à la préservation des sols et des ressources naturelles. "
                titre="Surfaces en bio"
              />
            )
          },
          {
            tabId: 'Pollutions',
            label: (
              <TabTooltip
                selectedTab={selectedTabId}
                tooltip="La pollution de l’air et de l’eau par des substances dangereuses est l’une des cinq pressions responsables de l’effondrement de la biodiversité."
                titre="Pollutions"
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
          <div className={styles.titles}>
            {selectedTabId === 'Pollutions'
              ? data
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
                ))
              : ''}
          </div>
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
                      agricultureBio={agricultureBio}
                      consommationNAF={consommationNAF}
                      etatCoursDeau={etatCoursDeau || []}
                      qualiteEauxBaignade={qualiteEauxBaignade}
                      aot40={aot40}
                    // surfacesProtegees={surfacesProtegees}
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
export default BiodiversiteComp;
