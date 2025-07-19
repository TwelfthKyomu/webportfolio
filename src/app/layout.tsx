import type { Metadata } from 'next';
import React, { ReactNode, StrictMode } from 'react';

import Footer from '@/app/layout/Footer';
import Header from '@/app/layout/Header';
import 'styles/_module.scss';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Portfolio',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="ru">
            <body>
                <StrictMode>
                    <Header />
                    { children }
                    <Footer />
                </StrictMode>
            </body>
        </html>
    );
}
