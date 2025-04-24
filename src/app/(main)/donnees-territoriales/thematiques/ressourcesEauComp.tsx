'use client';

import { Loader } from '@/components/loader';
import { PrelevementEau } from '@/components/themes/ressourcesEau/prelevementEau';
import { TabTooltip } from '@/components/utils/TabTooltip';
import {
  CarteCommunes,
  EtatCoursDeau,
  RessourcesEauNew
} from '@/lib/postgres/models';
import { GetEtatCoursDeau } from '@/lib/queries/postgis/etatCoursDeau';
import { fr } from '@codegouvfr/react-dsfr';
import { Tabs } from '@codegouvfr/react-dsfr/Tabs';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';
import dynamic from 'next/dynamic';
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
  ressourcesEau: RessourcesEauNew[];
  carteCommunes: CarteCommunes[];
}

const DynamicCoursDeau = dynamic(
  () => import('../../../../components/themes/ressourcesEau/etatCoursDeau'),
  {
    loading: () => <Loader />
  }
);

const allComps = [
  {
    titre: 'Prélèvements en eau',
    Component: ({ data, ressourcesEau }: Props & { activeDataTab: string }) => (
      <PrelevementEau data={data} ressourcesEau={ressourcesEau} />
    )
  },
  {
    titre: 'Qualité de l’eau',
    Component: ({
      etatCoursDeau,
      carteCommunes
    }: Props & { activeDataTab: string; etatCoursDeau: EtatCoursDeau[] }) => (
      <DynamicCoursDeau
        etatCoursDeau={etatCoursDeau}
        carteCommunes={carteCommunes}
      />
    )
  }
];

const RessourcesEauComp = ({
  data,
  ressourcesEau,
  carteCommunes,
}: Props) => {
  const [selectedTabId, setSelectedTabId] = useState('Prélèvements en eau');
  const [selectedSubTab, setSelectedSubTab] = useState('Prélèvements en eau');
  const [etatCoursDeau, setEtatCoursDeau] = useState<EtatCoursDeau[]>();
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
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
    void (async () => {
      const temp = await GetEtatCoursDeau(code, libelle, type);
      temp ? setEtatCoursDeau(temp) : void 0;
    })();
  }, [selectedTabId]);

  return (
    <div className="w-full">
      <Tabs
        selectedTabId={selectedTabId}
        tabs={[
          {
            tabId: 'Prélèvements en eau',
            label: (
              <TabTooltip
                selectedTab={selectedTabId}
                tooltip="Les prélèvements correspondent à l’eau douce extraite des eaux souterraines et des eaux de surface pour les besoins des activités humaines."
                titre="Prélèvements en eau"
              />
            )
          },
          {
            tabId: 'Qualité de l’eau',
            label: 'Qualité de l’eau'
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
                      ressourcesEau={ressourcesEau}
                      activeDataTab={selectedSubTab}
                      carteCommunes={carteCommunes}
                      etatCoursDeau={etatCoursDeau || []}
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
export default RessourcesEauComp;
