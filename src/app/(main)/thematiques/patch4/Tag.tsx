'use client';

import { Tag } from '@codegouvfr/react-dsfr/Tag';
import { ReactNode } from 'react';
import styles from '../thematiques.module.scss';

interface TagPatch4Props {
  children: ReactNode;
  style?: React.CSSProperties;
}

export const TagPatch4 = ({ children, style }: TagPatch4Props) => {
  return (
    <Tag className={styles.tag} style={style}>
      {children}
    </Tag>
  );
};
