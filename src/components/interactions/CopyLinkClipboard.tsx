import ShareIcon from '@/assets/icons/share_icon_white.svg';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const CopyLinkClipboard = ({
  anchor
}: {
  anchor: string;
}) => {

  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = () => {
    const url = new URL(window.location.href);
    url.hash = `#${anchor}`;
    navigator.clipboard.writeText(url.toString());
    setCopied(true);
    setShow(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShow(false);
      setTimeout(() => setCopied(false), 400); // allow fade out
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <BoutonPrimaireClassic
        onClick={handleCopy}
        icone={ShareIcon}
        size='sm'
        text='Partager'
      />
      {copied && typeof window !== 'undefined' && createPortal(
        <div
          style={{
            position: 'fixed',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#FFF',
            color: "var(--principales-vert)",
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            opacity: show ? 1 : 0,
            transition: 'opacity 1s',
            pointerEvents: 'none',
            zIndex: 9999,
            boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
            border: '1px solid var(--gris-medium)',
          }}
        >
          Lien copié
        </div>,
        document.body
      )}
    </>
  );
}
