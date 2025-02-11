import { fr } from '@codegouvfr/react-dsfr';
import { CookiesPolicy } from '@incubateur-ademe/legal-pages-react/CookiesPolicy';

import { CookieConsentButton } from '../CookieConsentButton';

const CookiePolicyPage = () => {
  return (
    <div className={fr.cx('fr-container', 'fr-my-4w')}>
      <CookiesPolicy
        analyticTool={{
          name: 'Potshog',
          cookieListUrl: 'https://posthog.com/docs/privacy/gdpr-compliance',
          policyUrl: ''
        }}
        cookieConsentButton={<CookieConsentButton />}
        siteName="Facili-TACCT"
      />
    </div>
  );
};

export default CookiePolicyPage;
