import { fr } from '@codegouvfr/react-dsfr';
import { PrivacyPolicy } from '@incubateur-ademe/legal-pages-react/PrivacyPolicy';

import { CookieConsentButton } from '../CookieConsentButton';

const PrivacyPolicyPage = () => {
  return (
    <div className={fr.cx('fr-container', 'fr-my-4w')}>
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
    </div>
  );
};

export default PrivacyPolicyPage;
