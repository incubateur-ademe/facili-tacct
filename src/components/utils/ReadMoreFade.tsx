import React, { useEffect, useRef, useState } from "react";
import styles from "./ReadMoreFade.module.scss";

interface ReadMoreFadeProps {
  children: React.ReactNode;
  maxHeight?: number; // in px
}

export const ReadMoreFade: React.FC<ReadMoreFadeProps> = ({ children, maxHeight = 400 }) => {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [currentHeight, setCurrentHeight] = useState<number | undefined>(maxHeight);
  const [overflow, setOverflow] = useState<'hidden' | 'visible'>('hidden');
  const [showFade, setShowFade] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const transitionDuration = 1000; // ms, doit matcher le CSS

  useEffect(() => {
    if (contentRef.current) {
      setShowButton(contentRef.current.scrollHeight > maxHeight);
      setCurrentHeight(maxHeight); // reset to maxHeight on children change
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, maxHeight]);

  // Animation ouverture/fermeture + gestion du fade
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (expanded && contentRef.current) {
      // OUVERTURE
      setOverflow('hidden');
      setCurrentHeight(maxHeight); // start from collapsed
      setShowFade(true);
      setFadeOut(true); // lance l'animation de disparition du fade
      setTimeout(() => {
        if (contentRef.current) {
          setCurrentHeight(contentRef.current.scrollHeight);
        }
      }, 20);
      timer = setTimeout(() => {
        setOverflow('visible');
        setCurrentHeight(undefined); // none
        setShowFade(false); // retire le fade du DOM
        setFadeOut(false);
      }, transitionDuration + 20);
    } else if (!expanded && contentRef.current) {
      // FERMETURE
      setOverflow('hidden');
      setCurrentHeight(contentRef.current.scrollHeight); // start from expanded
      setShowFade(true);
      setFadeOut(false);
      setTimeout(() => {
        setCurrentHeight(maxHeight);
      }, 20);
    }
    return () => { if (timer) clearTimeout(timer); };
  }, [expanded, maxHeight]);

  return (
    <>
      <div className={styles.readMoreFadeWrapper} style={{ position: 'relative' }}>
        <div
          ref={contentRef}
          className={styles.readMoreFadeContent}
          style={{
            maxHeight: currentHeight,
            overflow,
            transition: `max-height ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
          }}
        >
          {children}
          {expanded && showButton && (
            <div className={styles.reduceButtonWrapper}>
              <button className={styles.readMoreButton} onClick={() => setExpanded(false)}>
                Réduire
              </button>
            </div>
          )}
        </div>
        {showFade && showButton && (
          <div className={styles.fadeOverlay + (fadeOut ? ' ' + styles.fadeOverlayOut : '')} />
        )}
      </div>
      {!expanded && showButton && (
        <div className={styles.readMoreButtonWrapper}>
          <button className={styles.readMoreButton} onClick={() => setExpanded(true)}>
            Lire la suite
          </button>
        </div>
      )}
    </>
  );
};
