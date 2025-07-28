'use client';

import { Tag } from '@codegouvfr/react-dsfr/Tag';
import { ReactNode } from 'react';
import styles from '../components.module.scss';

interface TagPatch4Props {
  children: ReactNode;
}

export const TagPatch4 = ({ children }: TagPatch4Props) => {
  const color =
    children === 'Aggravation très forte'
      ? '#DA1B5C'
      : children === 'Aggravation forte'
        ? '#F66E19'
        : children === 'Aggravation modérée'
          ? '#FFCF5E'
          : '#FFF';
  const textColor = children === 'Aggravation très forte' ? 'white' : 'black';
  return (
    <Tag
      className={styles.tag}
      style={{
        backgroundColor: color,
        color: textColor,
        lineHeight: '12px',
        border: color === '#FFF' ? '1px solid #161616' : 'none'
      }}
    >
      {children}
    </Tag>
  );
};
