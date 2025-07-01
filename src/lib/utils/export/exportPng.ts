import { toPng } from 'html-to-image';
import { RefObject } from 'react';
import { Any } from '../types';

export const exportDatavizAsPNG = (
  ref: RefObject<Any>,
  filename = 'chart.png'
) => {
  toPng(ref.current, {
    quality: 1,
    pixelRatio: 1,
    width: ref.current.offsetWidth * 2,
    height: ref.current.offsetHeight * 2,
    style: {
      transform: 'scale(2)',
      transformOrigin: 'top left'
    },
    cacheBust: true,
    onImageErrorHandler: (error) => {
      console.error('Error exporting image:', error);
      alert(
        "Une erreur est survenue lors de l'exportation de l'image. Veuillez réessayer."
      );
    }
  })
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      link.click();
    })
    .catch((error) => {
      console.error('Error exporting PNG:', error);
    });
};
