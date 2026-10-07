import type { Metadata, Viewport } from 'next';

import { PROFILE } from '@/constants/profile';

export const metadata: Metadata = {
    title: { default: `${PROFILE.name} — портфолио`, template: `%s · ${PROFILE.name}` },
    description: PROFILE.description,
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ECEDEA' },
        { media: '(prefers-color-scheme: dark)', color: '#0E0F11' },
    ],
};
