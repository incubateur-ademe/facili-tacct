'use client'
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';

import { ReactNode } from 'react';
import { cookieConsentGiven } from './banner';

export const PHProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    posthog.init('phc_nsb48oCvlg6fbb8KXqc9VHKB5LeA6ep3l4HMJfECv8R', {
      api_host: 'https://eu.i.posthog.com',
      person_profiles: 'identified_only',
      persistence: cookieConsentGiven() === 'yes' ? 'localStorage+cookie' : 'memory'
    })
  }, []);
  return (
    <PostHogProvider client={posthog}>{children}</PostHogProvider>
  )
}
