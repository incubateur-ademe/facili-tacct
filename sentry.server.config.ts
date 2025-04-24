import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN;
const SENTRY_ENV = process.env.SENTRY_ENV;

Sentry.init({
  dsn: SENTRY_DSN ?? '',
  environment: SENTRY_ENV ?? 'development',
  enabled: process.env.NODE_ENV !== 'development',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  debug: false,

  // remove healthz probes
  beforeSendTransaction: (event, hint) => {
    if (event?.request?.url?.endsWith('/healthz')) {
      return null;
    }
    return event;
  }
});
