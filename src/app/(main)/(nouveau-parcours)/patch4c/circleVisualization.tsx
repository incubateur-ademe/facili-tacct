"use client";
import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import feuxForetIcon from '@/assets/icons/feu_foret_icon_black.svg';
import niveauxMarinsIcon from '@/assets/icons/niveau_marin_icon_black.svg';
import precipitationIcon from '@/assets/icons/precipitation_icon_black.svg';
import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import { Body } from '@/design-system/base/Textes';
import { Patch4 } from "@/lib/postgres/models";
import Image from 'next/image';
import { useState } from 'react';

const getItemPosition = (index: number, total: number) => {
  const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
  const radius = 100; // Distance from center
  const x = 160 + radius * Math.cos(angle);
  const y = 155 + radius * Math.sin(angle);
  return { x, y };
};

const getBackgroundColor = (value: string | null) => {
  if (value === null) return '#CCCCCC';
  switch (value) {
    case 'Aggravation très forte':
      return '#F80206';
    case 'Aggravation forte':
      return '#F66E19';
    case 'Aggravation modérée':
      return '#FFC03F';
    case "Pas d'évolution":
      return '#FFFFFF';
    default:
      return '#CCCCCC';
  }
};

const CircleVisualization = ({
  patch4
}: {
  patch4: Patch4;
}) => {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);
  const [showContent, setShowContent] = useState<boolean>(false);

  const allItems = [
    {
      key: 'fortes_chaleurs',
      value: AlgoPatch4(patch4, 'fortes_chaleurs'),
      icon: fortesChaleursIcon,
      label: 'Fortes chaleurs',
      text: "L’indice prend en compte la valeur de trois indicateurs : le nombre de jours par an à plus de 35°C, le nombre de nuits par an à plus de 20°C ainsi que le nombre annuel de jours en vagues de chaleur."
    },
    {
      key: 'fortes_precipitations',
      value: AlgoPatch4(patch4, 'fortes_precipitations'),
      icon: precipitationIcon,
      label: 'Fortes précipitations',
      text: "L’indice prend en compte la valeur maximale de deux indicateurs : l’évolution du nombre de jours par saison avec fortes précipitations, et l’évolution du cumul de précipitations quotidiennes remarquables."
    },
    {
      key: 'secheresse_sols',
      value: AlgoPatch4(patch4, 'secheresse_sols'),
      icon: secheresseIcon,
      label: 'Sécheresse des sols',
      text: "L’indice s’appuie sur l’indicateur d’évolution du nombre de jours par saison avec sol sec, lui-même basé sur le Soil Wetness Index (SWI04) représentant une humidité des sols inférieure à 0,4 (valeur définie comme seuil critique pour l’état de la réserve en eau du sol par rapport à la réserve utile disponible pour l’alimentation des plantes)."
    },
    {
      key: 'feux_foret',
      value: AlgoPatch4(patch4, 'feux_foret'),
      icon: feuxForetIcon,
      label: 'Feux de forêt',
      text: "L’indice s’appuie sur l’indicateur d’évolution du nombre annuel de jours en situation de risque significatif de feu de végétation. Il est basé sur l’Indice Forêt Météo (IFM) estimant le danger d’éclosion, de propagation et d’intensité à partir de différentes données météorologiques : température, humidité de l'air, vitesse du vent et précipitations."
    },
    {
      key: 'niveaux_marins',
      value: patch4.niveaux_marins !== null ? AlgoPatch4(patch4, 'niveaux_marins') : null,
      icon: niveauxMarinsIcon,
      label: 'Montée de la mer',
      text: "L’indice s’appuie sur l’indicateur d’évolution de l’élévation du niveau moyen de la mer."
    }
  ];
  const activeItems = patch4.niveaux_marins === null
    ? allItems.filter(item => item.key !== 'niveaux_marins')
    : allItems;

  const handleClick = (item: string) => {
    setSelectedItem(item);
    // Delay showing content until width transition is mostly complete
    setTimeout(() => setShowContent(true), 800);
  };

  const handleClose = () => {
    setShowContent(false);
    // Delay hiding the panel until content fades out
    setTimeout(() => setSelectedItem(undefined), 200);
  };

  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '400px' }}>
      <div
        style={{
          width: selectedItem ? '50%' : '100%',
          transition: 'width 1s ease-in-out',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '338px',
            height: '338px',
            border: '1px solid var(--gris-light)',
            borderRadius: '50%',
            position: 'relative'
          }}
        >
          {activeItems.map((item, index) => {
            const position = getItemPosition(index, activeItems.length);
            return (
              <div
                key={item.key}
                style={{
                  position: 'absolute',
                  left: position.x - 30,
                  top: position.y - 30,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                {/* Circle with icon */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: getBackgroundColor(item.value),
                    border: '1px solid #DDDDDD',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8px',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleClick(item.key)}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                  />
                </div>
                {/* Label */}
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#161616',
                    maxWidth: '82px',
                    lineHeight: '1.2'
                  }}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className='lateral-view'
        style={{
          width: selectedItem ? '50%' : '0%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: selectedItem ? 1 : 0,
          overflow: 'hidden',
          transition: 'width 1s ease-in-out, opacity 1s ease-in-out, padding 1s ease-in-out'
        }}
      >
        <div
          style={{
            display: 'flex',
            height: "225px",
            flexDirection: 'column',
            border: selectedItem ? '1px solid var(--gris-light)' : 'none',
            margin: selectedItem ? '3rem' : '0px',
            borderRadius: '1rem',
            padding: "1rem",
            position: 'relative'
          }}
        >
          <button
            onClick={handleClose}
            style={{
              width: "fit-content",
              color: 'var(--gris-dark)',
              borderRadius: '5px',
              cursor: 'pointer',
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              opacity: showContent ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
          >
            X
          </button>
          <div style={{
            opacity: showContent ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            transitionDelay: showContent ? '0s' : '0s'
          }}>
            <Body size='lg' weight='bold'>{allItems.find(item => item.key === selectedItem)?.label}</Body>
            <br></br>
            <Body size='sm' weight='regular'>
              {allItems.find(item => item.key === selectedItem)?.text}
            </Body>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircleVisualization;
