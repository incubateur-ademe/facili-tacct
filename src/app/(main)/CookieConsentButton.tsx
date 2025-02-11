'use client';

import CookieModal from '@/app/(main)/cookieModal';
import { createModal } from '@codegouvfr/react-dsfr/Modal';

const modal = createModal({
  id: 'cookie-modal',
  isOpenedByDefault: false
});

export const CookieConsentButton = () => {
  return (
    <>
      <CookieModal modal={modal} />
      <button onClick={() => modal.open()}>ICI</button>
    </>
  );
};
