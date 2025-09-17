"use client";
import ExporterIcon from '@/assets/icons/export_icon_white.svg';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import Image from 'next/image';
import { usePostHog } from 'posthog-js/react';
import { useEffect, useState } from 'react';
import styles from "../components.module.scss";
import { CopyLinkClipboard } from '../CopyLinkClipboard';

interface ZipExportButtonProps {
  handleExport: () => Promise<void>;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  anchor?: string;
  code?: string;
  libelle?: string;
  type?: string;
  thematique?: string;
}

export const ZipExportButton = ({
  handleExport,
  children = 'Exporter',
  style,
}: ZipExportButtonProps) => {
  const posthog = usePostHog();
  const [isExporting, setIsExporting] = useState(false);
  // posthog.capture('export_xlsx_bouton', {
  //   thematique: baseName,
  //   code: code,
  //   libelle: libelle,
  //   type: type,
  //   date: new Date()
  // });

  useEffect(() => {
    if (isExporting) {
      document.body.style.setProperty('cursor', 'wait', 'important');
      const overlay = document.createElement('div');
      overlay.id = 'export-loading-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: transparent;
        cursor: wait !important;
        z-index: 9999;
        pointer-events: auto;
      `;
      document.body.appendChild(overlay);
      document.body.classList.add('export-loading');
    } else {
      document.body.style.removeProperty('cursor');
      const overlay = document.getElementById('export-loading-overlay');
      if (overlay) {
        overlay.remove();
      }
      document.body.classList.remove('export-loading');
    }
    return () => {
      document.body.style.removeProperty('cursor');
      const overlay = document.getElementById('export-loading-overlay');
      if (overlay) {
        overlay.remove();
      }
      document.body.classList.remove('export-loading');
    };
  }, [isExporting]);

  const handleClick = async () => {
    setIsExporting(true);
    try {
      await handleExport();
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      className={styles.exportIndicatorButton}
      onClick={handleClick}
      disabled={isExporting}
      style={{ ...style }}
    >
      {isExporting ? 'Export en cours...' : children}
      <Image
        alt="Exporter les données"
        src={ExporterIcon}
        width={16}
        height={16}
      />
    </button>
  );
};

export const ZipExportButtonNouveauParcours = ({
  handleExport,
  children = 'Exporter',
  style,
  anchor,
  code,
  libelle,
  type,
  thematique
}: ZipExportButtonProps) => {
  const posthog = usePostHog();
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    if (isExporting) {
      document.body.style.setProperty('cursor', 'wait', 'important');
      const overlay = document.createElement('div');
      overlay.id = 'export-loading-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: transparent;
        cursor: wait !important;
        z-index: 9999;
        pointer-events: auto;
      `;
      document.body.appendChild(overlay);
      document.body.classList.add('export-loading');
    } else {
      document.body.style.removeProperty('cursor');
      const overlay = document.getElementById('export-loading-overlay');
      if (overlay) {
        overlay.remove();
      }
      document.body.classList.remove('export-loading');
    }
    return () => {
      document.body.style.removeProperty('cursor');
      const overlay = document.getElementById('export-loading-overlay');
      if (overlay) {
        overlay.remove();
      }
      document.body.classList.remove('export-loading');
    };
  }, [isExporting]);

  const handleClick = async () => {
    posthog.capture('export_zip_bouton', {
      thematique: thematique,
      code: code,
      libelle: libelle,
      type: type,
      date: new Date()
    });
    setIsExporting(true);
    try {
      await handleExport();
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className={styles.exportShareWrapper}>
      {anchor && <CopyLinkClipboard anchor={anchor} />}
      <BoutonPrimaireClassic
        onClick={handleClick}
        disabled={isExporting}
        icone={ExporterIcon}
        size='sm'
        text={isExporting ? 'Export en cours...' : children as string}
        style={{
          cursor: isExporting ? 'wait' : 'pointer',
          ...style,
        }}
      />
    </div>
  );
};
