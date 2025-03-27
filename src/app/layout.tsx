import './global.css';

import { DsfrHead } from '@codegouvfr/react-dsfr/next-appdir/DsfrHead';
import { DsfrProvider } from '@codegouvfr/react-dsfr/next-appdir/DsfrProvider';
import { getHtmlAttributes } from '@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes';
import { cx } from '@codegouvfr/react-dsfr/tools/cx';
import Link from 'next/link';
import { type PropsWithChildren } from 'react';
import { defaultColorScheme } from '../defaultColorScheme';
import { StartDsfr } from '../StartDsfr';
import { PHProvider } from './providers';
import styles from './root.module.scss';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html
      lang="fr"
      {...getHtmlAttributes({ defaultColorScheme, lang: 'fr' })}
      className={cx(styles.app)}
      title=''
    >
      <head>
        <StartDsfr />
        <DsfrHead
          Link={Link}
          preloadFonts={[
            'Marianne-Regular',
            'Spectral-Regular',
            'Spectral-ExtraBold'
          ]}
        />
      </head>
      <PHProvider>
        <body>
          <DsfrProvider lang="fr">{children}</DsfrProvider>
        </body>
      </PHProvider>
    </html>
  );
};

export default RootLayout;
