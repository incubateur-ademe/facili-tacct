//https://github.com/incubateur-ademe/pages-legales-faciles/blob/dev/next.config.mjs
import createMDX from '@next/mdx';
import { withSentryConfig } from '@sentry/nextjs';
import fs from 'fs';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const { version } = packageJson;
const isDeployment = !!process.env.SOURCE_VERSION;

const env = {
    NEXT_PUBLIC_APP_VERSION: version,
    NEXT_PUBLIC_APP_VERSION_COMMIT: isDeployment
        ? process.env.SOURCE_VERSION
        : 'dev'
};

const csp = {
    'default-src': ["'none'"],
    'connect-src': [
        '*',
        'https://*.gouv.fr',
        process.env.NEXT_PUBLIC_ENV === 'preprod' && 'https://vercel.live',
        process.env.NODE_ENV === 'development' && 'http://localhost'
    ],
    'font-src': ["'self'"],
    'media-src': ["'self'"],
    'img-src': ['*', "'self'", 'data:', 'https:'], //REPLACE (done to display map)
    'script-src': [
        "'self'",
        "'unsafe-inline'",
        'https://stats.beta.gouv.fr',
        process.env.NEXT_PUBLIC_ENV === 'preprod' && 'https://vercel.live',
        process.env.NODE_ENV === 'development' &&
            "'unsafe-eval' http://localhost",
        '*.posthog.com'
    ],
    'style-src': ["'self'", "'unsafe-inline'"],
    'object-src': ["'self'", 'data:'],
    'frame-ancestors': [
        "'none'",
        'http://localhost:5174/*',
        'http://localhost:5174',
        'http://localhost:5173/*',
        'http://localhost:5173',
        'https://mon-espace-collectivite-staging.osc-fr1.scalingo.io',
        'https://mon-espace-collectivite-demo.osc-secnum-fr1.scalingo.io',
        'https://les-communs-transition-ecologique-api-staging.osc-fr1.scalingo.io/sandbox/',
        'https://preprod-app.territoiresentransitions.fr',
        'https://staging-app.territoiresentransitions.fr',
    ],
    'base-uri': ["'self'", 'https://*.gouv.fr'],
    'form-action': ["'self'", 'https://*.gouv.fr'],
    'block-all-mixed-content': [],
    'upgrade-insecure-requests': [],
    'frame-src': [
        "'none'" // Iframe source
    ]
};

const ContentSecurityPolicy = Object.entries(csp)
    .map(([key, value]) => `${key} ${value.filter(Boolean).join(' ')};`)
    .join(' ');

/** @type {import('next').NextConfig} */
const config = {
    poweredByHeader: false,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(woff2|webmanifest)$/,
            type: 'asset/resource'
        });
        //config.infrastructureLogging = { debug: /PackFileCache/ };
        return config;
    },
    productionBrowserSourceMaps: false,
    experimental: {
        serverSourceMaps: false,
        serverActions: {
            allowedOrigins: ['*.beta.gouv.fr']
        }
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    output: 'standalone',
    env: {
        NEXT_TELEMETRY_DISABLED: '1',
        NEXT_PUBLIC_APP_VERSION: version,
        NEXT_PUBLIC_REPOSITORY_URL: isDeployment
            ? `https://github.com/${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`
            : (process.env.NEXT_PUBLIC_APP_REPOSITORY_URL ?? 'no repository'),
        NEXT_PUBLIC_SITE_URL: isDeployment
            ? (process.env.NEXT_PUBLIC_SITE_URL ??
              `https://facili-tacct-preprod.osc-fr1.scalingo.io`)
            : 'http://localhost:3000'
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: ContentSecurityPolicy
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'no-referrer, strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'fullscreen=(), display-capture=(), camera=(), microphone=(), geolocation=()'
                    },
                    {
                        key: 'Cross-Origin-Embedder-Policy',
                        value: 'credentialless'
                    },
                    {
                        key: 'Cross-Origin-Opener-Policy',
                        value: 'same-origin'
                    },
                    {
                        key: 'Cross-Origin-Resource-Policy',
                        value: 'cross-origin'
                    }
                ]
            }
        ];
    }
};

const withMDX = createMDX({
    extension: /\.mdx?$/
});

export default withSentryConfig(withMDX(config), {
    org: 'betagouv',
    project: 'facili-tacct',
    sentryUrl: 'https://sentry.incubateur.net',
    authToken: process.env.SENTRY_AUTH_TOKEN,
    silent: false,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Automatically annotate React components to show their full name in breadcrumbs and session replay
    reactComponentAnnotation: {
        enabled: true
    },

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
    automaticVercelMonitors: true
});
