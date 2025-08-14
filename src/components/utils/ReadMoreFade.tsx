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
  const contentRef = useRef<HTMLDivElement>(null);
  const transitionDuration = 2000; // ms, doit matcher le CSS

  useEffect(() => {
    if (contentRef.current) {
      setShowButton(contentRef.current.scrollHeight > maxHeight);
      setCurrentHeight(maxHeight); // reset to maxHeight on children change
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, maxHeight]);

  // Animation ouverture/fermeture
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (expanded && contentRef.current) {
      // OUVERTURE
      setOverflow('hidden');
      setCurrentHeight(maxHeight); // start from collapsed
      setTimeout(() => {
        if (contentRef.current) {
          setCurrentHeight(contentRef.current.scrollHeight);
        }
      }, 20);
      timer = setTimeout(() => {
        setOverflow('visible');
        setCurrentHeight(undefined); // none
      }, transitionDuration + 20);
    } else if (!expanded && contentRef.current) {
      // FERMETURE
      setOverflow('hidden');
      setCurrentHeight(contentRef.current.scrollHeight); // start from expanded
      setTimeout(() => {
        setCurrentHeight(maxHeight);
        // attendre la fin de la transition avant de toucher à overflow/maxHeight
        timer = setTimeout(() => {
          setCurrentHeight(maxHeight);
        }, transitionDuration + 20);
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
            transition: 'max-height 1s cubic-bezier(0.4,0,0.2,1)'
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
        {!expanded && showButton && (
          <div className={styles.fadeOverlay} />
        )}
      </div>
      {!expanded && showButton && (
        <button className={styles.readMoreButton} onClick={() => setExpanded(true)}>
          Lire la suite
        </button>
      )}
    </>
  );
};
