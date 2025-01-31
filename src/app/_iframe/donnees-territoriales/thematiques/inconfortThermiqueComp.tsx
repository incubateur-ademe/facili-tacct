'use client';

import { fr } from '@codegouvfr/react-dsfr';
import { Tabs } from '@codegouvfr/react-dsfr/Tabs';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Loader } from '@/components/loader';
import { AgeBati } from '@/components/themes/inconfortThermique/age-bati';
import { DensiteBati } from '@/components/themes/inconfortThermique/densite-bati';
import { FragiliteEconomique } from '@/components/themes/inconfortThermique/fragilite-economique';
import { GrandAgeIsolement } from '@/components/themes/inconfortThermique/grand-age-isolement';
import LCZ from '@/components/themes/inconfortThermique/lcz';
import { TravailExterieur } from '@/components/themes/inconfortThermique/travail-exterieur';
import {
  CarteCommunes,
  CLC,
  CollectivitesSearchbar,
  InconfortThermique
} from '@/lib/postgres/models';
import { GetClcEpci } from '@/lib/queries/postgis/cartographie';
import { TabTooltip } from '@/lib/utils/TabTooltip';
import dynamic from 'next/dynamic';
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
  carteCommunes: CarteCommunes[];
  inconfortThermique: InconfortThermique[];
  collectivite: CollectivitesSearchbar[];
  departement?: InconfortThermique[];
}

interface VegetalisationProps {
  clc: CLC[];
}

const DynamicVegetalisation = dynamic(
  () =>
    import('../../../../components/themes/inconfortThermique/vegetalisation'),
  {
    loading: () => <Loader />
  }
);

const allComps = [
  {
    titre: 'Grand âge',
    Component: ({
      inconfortThermique,
      data
    }: Props & { activeDataTab: string }) => (
      <GrandAgeIsolement inconfortThermique={inconfortThermique} data={data} />
    )
  },
  {
    titre: 'Fragilité économique',
    Component: ({ carteCommunes }: Props & { activeDataTab: string }) => (
      <FragiliteEconomique carteCommunes={carteCommunes} />
    )
  },
  {
    titre: 'Travail en extérieur',
    Component: ({ inconfortThermique }: Props & { activeDataTab: string }) => (
      <TravailExterieur inconfortThermique={inconfortThermique} />
    )
  },
  {
    titre: 'Age du bâtiment',
    Component: ({ inconfortThermique }: Props & { activeDataTab: string }) => (
      <AgeBati inconfortThermique={inconfortThermique} />
    )
  },
  {
    titre: 'Densité du bâti',
    Component: ({ carteCommunes }: Props & { activeDataTab: string }) => (
      <DensiteBati carteCommunes={carteCommunes} />
    )
  },
  {
    titre: 'LCZ',
    Component: ({
      carteCommunes,
      collectivite
    }: Props & { activeDataTab: string }) => (
      <LCZ carteCommunes={carteCommunes} collectivite={collectivite} />
    )
  },
  {
    titre: 'Végétalisation',
    Component: ({
      clc,
      inconfortThermique
    }: Props & VegetalisationProps & { activeDataTab: string }) => (
      <DynamicVegetalisation
        inconfortThermique={inconfortThermique}
        clc={clc}
      />
    )
  }
];

const InconfortThermiqueComp = ({
  data,
  carteCommunes,
  inconfortThermique,
  collectivite,
  departement
}: Props) => {
  const [clc, setClc] = useState<CLC[]>();
  const [selectedTabId, setSelectedTabId] = useState('Population');
  const [selectedSubTab, setSelectedSubTab] = useState('Grand âge');
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
    void (async () => {
      const temp = await GetClcEpci(codepci);
      temp && codepci ? setClc(temp) : void 0;
    })();
  }, [selectedTabId, codepci]);

  return (
    <div className={styles.container}>
      <Tabs
        selectedTabId={selectedTabId}
        tabs={[
          {
            tabId: 'Population',
            label: (
              <TabTooltip
                selectedTab={selectedTabId}
                tooltip="Santé et emploi des populations sont des indicateurs de sensibilité aux fortes chaleurs."
                titre="Population"
              />
            )
          },
          {
            tabId: 'Bâtiment',
            label: 'Bâtiment'
          },
          {
            tabId: 'Urbanisme',
            label: 'Urbanisme'
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
              .filter((el) => el.facteur_sensibilite === selectedTabId)
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
                  <Component
                    data={data}
                    inconfortThermique={inconfortThermique}
                    carteCommunes={carteCommunes}
                    activeDataTab={selectedSubTab}
                    clc={clc || []}
                    collectivite={collectivite}
                    departement={departement}
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
export default InconfortThermiqueComp;
