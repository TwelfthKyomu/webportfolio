import type { Metadata } from "next";
import React from "react";

import "@/styles/_module.scss";
import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";

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
			<Header/>
			{ children }
			<Footer/>
		</React.StrictMode>
		</body>
		</html>
	);
}