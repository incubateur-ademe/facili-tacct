'use client';

import { Button } from '@codegouvfr/react-dsfr/Button';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { themes } from '@/lib/utils/themes';

import Constellation from './constellation';
import styles from './explication.module.scss';
import { FilterState } from './filterState';

export const ExplicationComp = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const themeUrl = searchParams.get('thematique');

  const [activeTab, setActiveTab] = useState(0);
  const [selected, setSelected] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const theme = themes.inconfortThermique;

  const [selectedCircle, setSelectedCircle] = useState({
    Bâtiment: selected.at(0),
    Tourisme: selected.at(1),
    Santé: selected.at(2),
    Aménagement: selected.at(3),
    'Espaces naturels': selected.at(4),
    "Gestion de l'eau": selected.at(5)
  });

  const toggle = (tab: number) => {
    [];
    if (activeTab !== tab) {
      setActiveTab(tab);
      setSelected(selected.map((val, i) => (i === tab ? true : false)));
    }
  };

  const dimensions = {
    width: 700,
    height: 500,
    margin: { top: 16, right: 16, bottom: 16, left: 16 }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.explication}>
        <div className={styles.constellation}>
          <Constellation
            dimensions={dimensions}
            states={selected}
            setSelected={setSelected}
          />
        </div>
        <FilterState states={selected} />
      </div>
      {/* <Explications/> */}
      <div className={styles.bottom}>
        <Button
          priority="secondary"
          linkProps={{
            href: `/etape3?code=${code}&thematique=${themeUrl}`
          }}
        >
          Étape précédente
        </Button>
        <Button
          linkProps={{
            href: `/ressources?code=${code}&thematique=${themeUrl}`
          }}
        >
          Voir les ressources
        </Button>
      </div>
    </div>
  );
};
