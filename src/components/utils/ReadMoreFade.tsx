import useWindowDimensions from "@/hooks/windowDimensions";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ReadMoreFade.module.scss";

interface ReadMoreFadeProps {
  children: React.ReactNode;
  maxHeight?: number;
}

export const ReadMoreFade: React.FC<ReadMoreFadeProps> = ({ children, maxHeight = 400 }) => {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [currentHeight, setCurrentHeight] = useState<number | undefined>(maxHeight);
  const [overflow, setOverflow] = useState<'hidden' | 'visible'>('hidden');
  const [showFade, setShowFade] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [hasBeenExpanded, setHasBeenExpanded] = useState(false);
  const windowDimensions = useWindowDimensions();
  const contentRef = useRef<HTMLDivElement>(null);
  const transitionDuration = 1000; 

  useEffect(() => {
    if (contentRef.current && !hasBeenExpanded) {
      setShowButton(contentRef.current.scrollHeight > maxHeight);
      if (!expanded) {
        setCurrentHeight(maxHeight);
      }
    }
  }, [children, maxHeight, hasBeenExpanded, expanded]);

  // Animation ouverture/fermeture + gestion du fade
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (expanded && contentRef.current) {
      // OUVERTURE
      setHasBeenExpanded(true);
      setOverflow('hidden');
      setCurrentHeight(maxHeight); 
      setShowFade(true);
      setFadeOut(true);
      setTimeout(() => {
        if (contentRef.current) {
          setCurrentHeight(contentRef.current.scrollHeight);
        }
      }, 100);
      timer = setTimeout(() => {
        setOverflow('visible');
        setShowFade(false); 
        setFadeOut(false);
      }, transitionDuration + 20);
    } else if (!expanded && contentRef.current && hasBeenExpanded) {
      // FERMETURE
      setHasBeenExpanded(false);
      setOverflow('hidden');
      setCurrentHeight(contentRef.current.scrollHeight); 
      setShowFade(true);
      setFadeOut(false);
      setTimeout(() => {
        setCurrentHeight(maxHeight);
      }, 100);
    }
    return () => { if (timer) clearTimeout(timer); };
  }, [expanded, maxHeight, hasBeenExpanded, windowDimensions]);

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
                Voir moins
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
            Voir plus
          </button>
        </div>
      )}
    </>
  );
};
