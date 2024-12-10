import { fr } from '@codegouvfr/react-dsfr';
import { CookiesPolicy } from '@incubateur-ademe/legal-pages-react/CookiesPolicy';

import { CookieConsentButton } from '../CookieConsentButton';

const CookiePolicyPage = () => {
  return (
    <div className={fr.cx('fr-container', 'fr-my-4w')}>
      <CookiesPolicy
        analyticTool={{
          name: 'None',
          cookieListUrl: '',
          policyUrl: ''
        }}
        cookieConsentButton={<CookieConsentButton>CLICK</CookieConsentButton>}
        siteName="Facili-TACCT"
      />
    </div>
  );
};

export default CookiePolicyPage;
