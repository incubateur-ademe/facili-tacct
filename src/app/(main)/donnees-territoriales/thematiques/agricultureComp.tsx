'use client';

import AgricultureBiologique from '@/components/themes/agriculture/agricultureBio';
import { SurfacesAgricoles } from '@/components/themes/agriculture/surfacesAgricoles';
import { SurfacesIrriguees } from '@/components/themes/agriculture/surfacesIrriguees';
import { TabTooltip } from '@/components/utils/TabTooltip';
import {
  Agriculture,
  AgricultureBio,
  CarteCommunes,
  SurfacesAgricolesModel
} from '@/lib/postgres/models';
import { fr } from '@codegouvfr/react-dsfr';
import { Tabs } from '@codegouvfr/react-dsfr/Tabs';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';
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
  agriculture: Agriculture[];
  surfacesAgricoles: SurfacesAgricolesModel[];
  agricultureBio: AgricultureBio[];

}

const allComps = [
  // {
  //   titre: "Chefs d'exploitation",
  //   Component: ({
  //     agriculture,
  //     carteCommunes
  //   }: Props & { activeDataTab: string }) => (
  //     <ChefsExploitation
  //       agriculture={agriculture}
  //       carteCommunes={carteCommunes}
  //     />
  //   )
  // },
  {
    titre: 'Superficies irriguées',
    Component: ({
      agriculture,
      carteCommunes
    }: Props & { activeDataTab: string }) => (
      <SurfacesIrriguees
        agriculture={agriculture}
        carteCommunes={carteCommunes}
      />
    )
  },
  {
    titre: 'Surfaces agricoles',
    Component: ({
      agriculture,
      surfacesAgricoles
    }: Props & { activeDataTab: string }) => (
      <SurfacesAgricoles
        surfacesAgricoles={surfacesAgricoles}
      />
    )
  },
  {
    titre: 'Surfaces en bio',
    Component: ({
      data,
      agricultureBio
    }: Props & { activeDataTab: string }) => (
      <AgricultureBiologique data={data} agricultureBio={agricultureBio} />
    )
  },
];

const AgricultureComp = ({
  data,
  carteCommunes,
  agriculture,
  surfacesAgricoles,
  agricultureBio
}: Props) => {
  console.log("agricultureBio", agricultureBio);
  console.log("agriculture", agriculture);
  const [selectedTabId, setSelectedTabId] = useState('Superficies irriguées');
  const [selectedSubTab, setSelectedSubTab] = useState('Superficies irriguées');
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
  }, [selectedTabId]);

  return (
    <div className="w-full">
      <Tabs
        selectedTabId={selectedTabId}
        tabs={[
          {
            tabId: 'Superficies irriguées',
            label: (
              <TabTooltip
                selectedTab={selectedTabId}
                tooltip="Une surface est dite « irriguée » si elle a été arrosée, au moins une fois au cours de la campagne agricole, par un apport d'eau volontaire venant en complément des pluies."
                titre="Superficies irriguées"
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
            tabId: 'Surfaces agricoles',
            label: "Surfaces agricoles",
          },
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
                      carteCommunes={carteCommunes}
                      agriculture={agriculture}
                      surfacesAgricoles={surfacesAgricoles}
                      agricultureBio={agricultureBio}
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
