'use client';
import { createModal } from '@codegouvfr/react-dsfr/Modal';
import { useIsModalOpen } from '@codegouvfr/react-dsfr/Modal/useIsModalOpen';
import { usePostHog } from 'posthog-js/react';
import { useEffect, useState } from 'react';
import CookieModal from './cookieModal';
import styles from './main.module.scss';

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
            ci-dessous) s’appuient sur des services proposés par des tiers. Pour
            toute information supplémentaire, veuillez consulter notre{' '}
            <a
              href="/politique-des-cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              politique des cookies
            </a>
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
          <CookieModal modal={modal} setConsentGiven={setConsentGiven} />
        </div>
      )}
    </div>
  );
};
