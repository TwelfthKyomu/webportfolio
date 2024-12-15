import type { Metadata } from "next";
import React from "react";

import "@/styles/_module.scss";
import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
import { Providers } from "@/context/Providers";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio",
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
        <body>
        <React.StrictMode>
            <Providers>
                <Header/>
                { children }
                <Footer/>
            </Providers>
        </React.StrictMode>
        </body>
        </html>
    );
}