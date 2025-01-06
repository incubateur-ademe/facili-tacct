'use client';

import activiteIconBlack from '@/assets/icons/activite_icon_black.svg';
import activiteIconWhite from '@/assets/icons/activite_icon_white.svg';
import camembertIconBlack from '@/assets/icons/camembert_icon_black.svg';
import camembertIconWhite from '@/assets/icons/camembert_icon_white.svg';
import cartographieIconBlack from '@/assets/icons/cartographie_icon_black.svg';
import cartographieIconWhite from '@/assets/icons/cartographie_icon_white.svg';
import evolutionIconBlack from '@/assets/icons/evolution_icon_black.svg';
import evolutionIconWhite from '@/assets/icons/evolution_icon_white.svg';
import habitatIconBlack from '@/assets/icons/habitat_icon_black.svg';
import habitatIconWhite from '@/assets/icons/habitat_icon_white.svg';
import inconnuIconBlack from '@/assets/icons/inconnu_icon_black.svg';
import inconnuIconWhite from '@/assets/icons/inconnu_icon_white.svg';
import mixteIconBlack from '@/assets/icons/mixte_icon_black.svg';
import mixteIconWhite from '@/assets/icons/mixte_icon_white.svg';
import routesIconBlack from '@/assets/icons/route_icon_black.svg';
import routesIconWhite from '@/assets/icons/route_icon_white.svg';
import ferroviaireIconBlack from '@/assets/icons/train_icon_black.svg';
import ferroviaireIconhite from '@/assets/icons/train_icon_white.svg';
import Image from 'next/image';
import { useState } from 'react';
import styles from './components.module.scss';

interface Props {
  data: Array<string | null>;
  defaultTab: string;
  setValue: (value: string & CatnatTypes) => void;
  maxWidth?: string;
  borderRight?: string;
}

const tabIcons = [
  {
    name: 'Répartition',
    iconNotSelected: camembertIconBlack,
    iconSelected: camembertIconWhite
  },
  {
    name: 'Évolution',
    iconNotSelected: evolutionIconBlack,
    iconSelected: evolutionIconWhite
  },
  {
    name: 'Cartographie',
    iconNotSelected: cartographieIconBlack,
    iconSelected: cartographieIconWhite
  },
  {
    name: 'Tous types',
    iconNotSelected: null,
    iconSelected: null
  },
  {
    name: 'Habitat',
    iconNotSelected: habitatIconBlack,
    iconSelected: habitatIconWhite
  },
  {
    name: 'Activité',
    iconNotSelected: activiteIconBlack,
    iconSelected: activiteIconWhite
  },
  {
    name: 'Mixte',
    iconNotSelected: mixteIconBlack,
    iconSelected: mixteIconWhite
  },
  {
    name: 'Routes',
    iconNotSelected: routesIconBlack,
    iconSelected: routesIconWhite
  },
  {
    name: 'Ferroviaire',
    iconNotSelected: ferroviaireIconBlack,
    iconSelected: ferroviaireIconhite
  },
  {
    name: 'Inconnu',
    iconNotSelected: inconnuIconBlack,
    iconSelected: inconnuIconWhite
  }
];

const tabsWithIcons = (
  tabIcons: TabIcons[],
  name: string,
  selectedSubTab: string
) => {
  const obj =
    tabIcons.filter((tab) => tab.name === name).length > 0
      ? tabIcons.filter((tab) => tab.name === name)[0]
      : null;
  if (selectedSubTab === name) {
    return obj?.iconSelected;
  } else return obj?.iconNotSelected;
};

const SubTabs = ({
  data,
  defaultTab,
  setValue,
  maxWidth = '100%',
  borderRight = 'none'
}: Props) => {
  const [selectedSubTab, setSelectedSubTab] = useState(defaultTab);

  return (
    <div
      className={styles.titles}
      style={{ maxWidth: maxWidth, borderRight: borderRight }}
    >
      {data.map((element, i) => (
        <button
          key={i}
          className={
            selectedSubTab === element
              ? styles.selectedTabButton
              : styles.tabButton
          }
          onClick={() => {
            setSelectedSubTab(element ? element : '');
            setValue(element ? (element as CatnatTypes) : 'Tous types');
          }}
        >
          {element && tabsWithIcons(tabIcons, element, selectedSubTab) ? (
            <Image
              src={tabsWithIcons(tabIcons, element, selectedSubTab)!}
              alt=""
            />
          ) : null}
          {element}
        </button>
      ))}
    </div>
  );
};

export default SubTabs;
