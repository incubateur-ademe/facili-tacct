// 'use client';
// import posthog from 'posthog-js';
// import { PostHogProvider } from 'posthog-js/react';
// import { ReactNode, useEffect } from 'react';
// import { cookieConsentGiven } from './(main)/cookieBanner';

// export const PHProvider = ({ children }: { children: ReactNode }) => {
//   useEffect(() => {
//     if (
//       !window.location.host.includes('127.0.0.1') &&
//       !window.location.host.includes('localhost')
//     ) {
//       const consent = cookieConsentGiven();
//       posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
//         api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
//         person_profiles: 'always',
//         persistence: consent === 'yes' ? 'localStorage+cookie' : 'memory',
//         capture_pageview: false,
//         disable_session_recording: consent !== 'yes',
//         opt_out_capturing_by_default: consent !== 'yes'
//       });

//       if (consent === 'yes') {
//         posthog.opt_in_capturing();
//         posthog.startSessionRecording();
//       } else if (consent === 'no') {
//         posthog.opt_out_capturing();
//       }
//     }
//   }, []);
//   return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
// };

'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { ReactNode, useEffect } from 'react';

export const PHProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if (
      !window.location.host.includes('127.0.0.1') &&
      !window.location.host.includes('localhost')
    ) {
      // const consent = cookieConsentGiven();
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: 'always',
        persistence: 'localStorage+cookie',
        capture_pageview: false,
        disable_session_recording: false,
        opt_out_capturing_by_default: false
      });

      posthog.opt_in_capturing();
      posthog.startSessionRecording();
    }
  }, []);
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};
