'use client';
import { usePostHog } from 'posthog-js/react';
import { useEffect, useState } from 'react';
import styles from '../root.module.scss';

export const cookieConsentGiven = () => {
  if (!localStorage.getItem('cookie_consent')) {
    return 'undecided';
  }
  return localStorage.getItem('cookie_consent') ?? 'undecided';
};

export const Banner = () => {
  const [consentGiven, setConsentGiven] = useState('');
  const posthog = usePostHog();

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
            onClick={handleAcceptCookies}
            className={styles.acceptCookieBtn}
          >
            Accepter
          </button>
          <span> </span>
          <button
            type="button"
            onClick={handleDeclineCookies}
            className={styles.declineCookieBtn}
          >
            Refuser
          </button>
        </div>
      )}
    </div>
  );
};
