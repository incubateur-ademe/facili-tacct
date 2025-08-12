import { fr } from '@codegouvfr/react-dsfr';
import { PrivacyPolicy } from '@incubateur-ademe/legal-pages-react/PrivacyPolicy';

import { Suspense } from 'react';
import { CookieConsentButton } from '../CookieConsentButton';

const PrivacyPolicyPage = () => {
  return (
    <div className={fr.cx('fr-container', 'fr-my-4w')}>
      <Suspense>
        <PrivacyPolicy
          includeBetaGouv
          cookieConsentButton={<CookieConsentButton />}
          siteName="Facilit-TACCT"
          cookies={[]}
          thirdParties={[
            {
              name: 'Scalingo',
              country: 'France',
              hostingCountry: 'France - Paris',
              serviceType: 'Hébergement',
              policyUrl: 'https://scalingo.com/data-processing-agreement'
            }
          ]}
        />
      </Suspense>
    </div>
  );
};

export default PrivacyPolicyPage;
