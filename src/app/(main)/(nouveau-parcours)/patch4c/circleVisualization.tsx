"use client";
import { Body } from '@/design-system/base/Textes';
import { Patch4 } from "@/lib/postgres/models";
import Image from 'next/image';
import { useState } from 'react';
import { getBackgroundColor, getItemPosition, patch4Indices } from './components/fonctions';
import styles from './patch4c.module.scss';

const CircleVisualization = ({
  patch4
}: {
  patch4: Patch4;
}) => {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);
  const [showContent, setShowContent] = useState<boolean>(false);
  const indices = patch4Indices(patch4);
  const activeItems = patch4.niveaux_marins === null
    ? indices.filter(item => item.key !== 'niveaux_marins')
    : indices;
  const handleClick = (item: string) => {
    setSelectedItem(item);
    setTimeout(() => setShowContent(true), 800);
  };
  const handleClose = () => {
    setShowContent(false);
    setTimeout(() => setSelectedItem(undefined), 200);
  };

  return (
    <div className={styles.CircleVisualizationContainer}>
      <div
        className={styles.CircleVisualizationWrapper}
        style={{
          width: selectedItem ? '50%' : '100%',
          paddingLeft: selectedItem ? '4rem' : '0',
        }}
      >
        <div className={styles.extCircle}>
          {activeItems.map((item, index) => {
            const position = getItemPosition(index, activeItems.length);
            return (
              <div
                key={item.key}
                className={styles.CircleItem}
                style={{
                  left: position.x - 35,
                  top: position.y - 30,
                }}
                onClick={() => handleClick(item.key)}
              >
                {/* Circle with icon */}
                <div
                  className={styles.CircleIcon}
                  style={{ backgroundColor: getBackgroundColor(item.value) }}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={34}
                    height={34}
                  />
                </div>
                {/* Label */}
                <Body
                  size='xs'
                  style={{
                    maxWidth: '88px',
                    lineHeight: '1.2'
                  }}>
                  {item.label}
                </Body>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={styles.lateralView}
        style={{
          width: selectedItem ? '50%' : '0%',
          opacity: selectedItem ? 1 : 0,
        }}
      >
        <div
          className={styles.lateralWrapper}
          style={{
            border: selectedItem ? '1px solid var(--gris-medium)' : 'none',
            margin: selectedItem ? '3rem' : '0px',
            boxShadow: selectedItem ? '0 2px 15px rgba(0, 0, 0, 0.08)' : 'none',
          }}
        >
          <button
            className={styles.closeBtn}
            onClick={handleClose}
            style={{ opacity: showContent ? 1 : 0 }}
          >
            ×
          </button>
          <div style={{
            opacity: showContent ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            transitionDelay: showContent ? '0s' : '0s'
          }}>
            <Body size='lg' weight='bold'>{indices.find(item => item.key === selectedItem)?.label}</Body>
            <br></br>
            <Body size='sm' weight='regular'>
              {indices.find(item => item.key === selectedItem)?.definition}
            </Body>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircleVisualization;
