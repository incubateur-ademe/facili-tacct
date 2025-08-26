import ShareIcon from '@/assets/icons/partage_icon_black.svg';
import Image from "next/image";
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
      <Image
        src={ShareIcon}
        alt="Partage de l'url"
        width={24}
        height={24}
        style={{
          cursor: 'pointer',
          marginTop: '0.2rem'
        }}
        onClick={handleCopy}
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
