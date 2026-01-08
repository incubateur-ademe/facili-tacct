"use client";
import Image, { ImageProps } from "next/image";
import React, { CSSProperties, useState } from "react";

interface ZoomOnClickProps extends Omit<ImageProps, "ref"> {
  wrapperStyle?: CSSProperties;
}

const ZoomOnClick: React.FC<ZoomOnClickProps> = ({ wrapperStyle, style, ...imgProps }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div style={{ position: 'relative', ...wrapperStyle }}>
      <div style={{ cursor: 'zoom-in', width: '100%' }} onClick={() => setShowModal(true)}>
        <Image {...imgProps} unoptimized style={{ width: 'auto', height: 'auto', ...style }} />
      </div>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.8)',
            zIndex: 1000,
            cursor: 'zoom-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <img
            src={imgProps.src as string}
            alt={imgProps.alt}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              minWidth: '60vw',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              boxShadow: '0 0 24px #000',
              background: '#fff',
              borderRadius: '8px',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ZoomOnClick;
