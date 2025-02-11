'use client';
import { createModal } from '@codegouvfr/react-dsfr/Modal';
import { useIsModalOpen } from '@codegouvfr/react-dsfr/Modal/useIsModalOpen';
import { ToggleSwitch } from '@codegouvfr/react-dsfr/ToggleSwitch';
import { usePostHog } from 'posthog-js/react';
import { useEffect, useState } from 'react';
import styles from '../root.module.scss';

export const cookieConsentGiven = () => {
  if (!localStorage.getItem('cookie_consent')) {
    return 'undecided';
  }
  return localStorage.getItem('cookie_consent') ?? 'undecided';
};

const modal = createModal({
  id: 'foo-modal',
  isOpenedByDefault: false
});

export const CookieBanner = () => {
  const [consentGiven, setConsentGiven] = useState('');
  const [areTermAccepted, setAreTermAccepted] = useState(true);
  const posthog = usePostHog();
  const isOpen = useIsModalOpen(modal);

  useEffect(() => {
    setConsentGiven(cookieConsentGiven());
  }, []);

  useEffect(() => {
    if (consentGiven !== '') {
      posthog.set_config({
        persistence: consentGiven === 'yes' ? 'localStorage+cookie' : 'memory'
      });
    }
  }, [consentGiven]);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie_consent', 'yes');
    setConsentGiven('yes');
  };

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

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'no');
    setConsentGiven('no');
  };

  return (
    <div>
      {consentGiven === 'undecided' && (
        <div className={styles.cookieConsentWrapper}>
          <p>
            Ce site utilise des cookies nécessaires à son bon fonctionnement.
            Pour améliorer votre expérience, d’autres fonctionnalités (listées
            ci-dessous) s’appuient sur des services proposés par des tiers. Via
            ces cookies, ces tiers collecteront et utiliseront vos données de
            navigation pour des finalités qui leur sont propres, conformément à
            leur politique de confidentialité.
          </p>
          <button
            type="button"
            onClick={handleValidateCookies}
            className={styles.acceptCookieBtn}
          >
            Accepter
          </button>
          <button
            type="button"
            onClick={() => modal.open()}
            className={styles.modifyCookieBtn}
          >
            Choisir mes préférences
          </button>
          <button
            type="button"
            onClick={handleDeclineCookies}
            className={styles.declineCookieBtn}
          >
            Tout refuser
          </button>
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
              <p>Cookies d'audience et de performance</p>
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
        </div>
      )}
    </div>
  );
};
