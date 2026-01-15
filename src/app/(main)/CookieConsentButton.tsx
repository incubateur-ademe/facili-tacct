'use client';

import CookieModal from '@/app/(main)/cookieModal';
import { createModal } from '@codegouvfr/react-dsfr/Modal';
import { usePostHog } from 'posthog-js/react';
import { useCallback } from 'react';

const modal = createModal({
  id: 'cookie-modal',
  isOpenedByDefault: false
});

export const CookieConsentButton = () => {
  const posthog = usePostHog();

  const handleConsentChange = useCallback((consent: string) => {
    posthog.set_config({
      persistence: consent === 'yes' ? 'localStorage+cookie' : 'memory',
      disable_session_recording: consent !== 'yes'
    });

    if (consent === 'yes') {
      posthog.opt_in_capturing();
      posthog.startSessionRecording();
    } else {
      posthog.opt_out_capturing();
      posthog.stopSessionRecording();
    }
  }, [posthog]);

  return (
    <>
      <CookieModal modal={modal} setConsentGiven={handleConsentChange} />
      <button onClick={() => modal.open()}>ICI</button>
    </>
  );
};
