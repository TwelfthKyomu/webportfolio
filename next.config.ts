import type { NextConfig } from 'next';

const csp = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self'",
].join('; ');

const nextConfig: NextConfig = {
    poweredByHeader: false,
    images: { formats: ['image/webp'] },
    headers: async () => [
        {
            source: '/(.*)',
            headers: [
                { key: 'Content-Security-Policy', value: csp },
                { key: 'X-Frame-Options', value: 'DENY' },
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
            ],
        },
    ],
};

export default nextConfig;
