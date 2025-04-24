import * as Sentry from '@sentry/nextjs';

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

const SENTRY_DSN = process.env.SENTRY_DSN;
const SENTRY_ENV = process.env.NODE_ENV;

Sentry.init({
  dsn: SENTRY_DSN ?? '',
  environment: SENTRY_ENV ?? 'development',
  enabled: process.env.NODE_ENV !== 'development',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.1,
  debug: false,
  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 1.0,

  // remove healthz probes
  beforeSendTransaction: (event, hint) => {
    if (event?.request?.url?.endsWith('/healthz')) {
      return null;
    }
    return event;
  }
});
