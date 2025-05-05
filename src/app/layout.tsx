import './global.css';

import { DsfrProvider, StartDsfrOnHydration } from '@/dsfr';
import { DsfrHead, getHtmlAttributes } from '@/dsfr/server-only-index';
import { cx } from '@codegouvfr/react-dsfr/tools/cx';
import { type PropsWithChildren } from 'react';
import { PHProvider } from './providers';
import styles from './root.module.scss';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html
      lang="fr"
      {...getHtmlAttributes({ lang: 'fr' })}
      className={cx(styles.app)}
      title=""
    >
      <head>
        <DsfrHead
          preloadFonts={[
            'Marianne-Regular',
            'Spectral-Regular',
            'Spectral-ExtraBold'
          ]}
        />
      </head>
      <PHProvider>
        <body>
          <DsfrProvider lang="fr">
            <StartDsfrOnHydration />
            {children}
          </DsfrProvider>
        </body>
      </PHProvider>
    </html>
  );
};

export default RootLayout;
