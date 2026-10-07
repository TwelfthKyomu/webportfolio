import clsx from 'clsx';
import type { FC } from 'react';

import { BeforePaintScript } from '@/components/BeforePaintScript';
import { LiveType } from '@/components/LiveType';
import { ScrollRail } from '@/components/ScrollRail';
import { bodyFont, displayFont, monoFont } from '@/styles/fonts';

import './globals.scss';

export { metadata, viewport } from './metadata';

const RootLayout: FC<LayoutProps<'/'>> = (props) => {
    const { children } = props;

    return (
        <html
            lang="ru"
            className={clsx(displayFont.variable, bodyFont.variable, monoFont.variable)}
            suppressHydrationWarning
        >
            <head>
                <BeforePaintScript />
            </head>
            <body>
                {children}
                <ScrollRail />
                <LiveType />
            </body>
        </html>
    );
};

export default RootLayout;
