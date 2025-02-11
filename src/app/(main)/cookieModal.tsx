import { ToggleSwitch } from '@codegouvfr/react-dsfr/ToggleSwitch';
import { useState } from 'react';

const CookieModal = ({ modal }: any) => {
  const [consentGiven, setConsentGiven] = useState('');
  const [areTermAccepted, setAreTermAccepted] = useState(true);
  const handleValidateCookies = () => {
    if (areTermAccepted) {
      localStorage.setItem('cookie_consent', 'yes');
      setConsentGiven('yes');
    } else {
      localStorage.setItem('cookie_consent', 'no');
      setConsentGiven('no');
    }
    modal.close();
  };

  return (
    <>
      {modal ? (
        <modal.Component title="Choix des préférences de cookies">
          <div>
            <h3>Cookies obligatoires</h3>
            <p>
              Ces cookies sont nécessaires au bon fonctionnement du site. Vous
              ne pouvez pas les désactiver.
            </p>
            <ToggleSwitch
              defaultChecked
              disabled
              helperText=""
              inputTitle="the-title"
              label="Cookies obligatoires"
              labelPosition="right"
              showCheckedHint
            />
          </div>
          <div>
            <h3>Cookies facultatifs</h3>
            <p>Cookies d'audience</p>
            <ToggleSwitch
              helperText=""
              inputTitle="the-title"
              label="Cookies de suivi avec PostHog"
              labelPosition="right"
              showCheckedHint
              checked={areTermAccepted}
              onChange={(checked) => {
                setAreTermAccepted(checked);
              }}
            />
          </div>
          <button type="button" onClick={handleValidateCookies} className="">
            Valider mes choix
          </button>
        </modal.Component>
      ) : (
        ''
      )}
    </>
  );
};

export default CookieModal;
