'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { ReactNode, useEffect } from 'react';
import { cookieConsentGiven } from './(main)/banner';

export const PHProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if (
      !window.location.host.includes('127.0.0.1') &&
      !window.location.host.includes('localhost')
    ) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: 'always',
        persistence:
          cookieConsentGiven() === 'yes' ? 'localStorage+cookie' : 'memory',
        capture_pageview: false
      });
    }
  }, []);
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};
