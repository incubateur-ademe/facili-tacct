import Image, { ImageProps } from "next/image";
import React, { CSSProperties, useState } from "react";

interface ZoomOnClickProps extends Omit<ImageProps, "ref"> {
  wrapperStyle?: CSSProperties;
}

const ZoomOnClick: React.FC<ZoomOnClickProps> = ({ wrapperStyle, ...imgProps }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div style={{ position: 'relative', ...wrapperStyle }}>
      <div style={{ cursor: 'zoom-in', width: '100%' }} onClick={() => setShowModal(true)}>
        <Image {...imgProps} style={{ width: '100%', height: 'auto', ...imgProps.style }} />
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
            overflow: 'auto',
            padding: 0,
            margin: 0,
            textAlign: 'center',
          }}
        >
          <Image
            {...imgProps}
            style={{
              width: 'auto',
              height: 'auto',
              boxShadow: '0 0 24px #000',
              background: '#fff',
              borderRadius: '8px',
              display: 'inline-block',
              margin: '40px auto',
              maxWidth: '90dvw',
              maxHeight: '90dvh',
              ...imgProps.style,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ZoomOnClick;
