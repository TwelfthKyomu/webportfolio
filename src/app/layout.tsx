import type { Metadata } from 'next';
import React from 'react';

import Footer from '@/app/layout/Footer';
import Header from '@/app/layout/Header';
import 'styles/_module.scss';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <React.StrictMode>
                    <Header />
                    { children }
                    <Footer />
                </React.StrictMode>
            </body>
        </html>
    );
}
