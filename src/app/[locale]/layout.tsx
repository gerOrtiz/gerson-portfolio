import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import "@/styles/theme.css";
import "@/styles/toggle-animations.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";


const geistSans = localFont({
	src: "../fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "../fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: 'Gerson Ortiz - Senior Frontend Developer',
	description: 'Senior Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Available for freelance projects.',
};

export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	if (!routing.locales.includes(params.locale as any)) { //eslint-disable-line
		notFound();
	}
	const messages = await getMessages();
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}
						disableTransitionOnChange>
						<Header />
						{children}
						{/* <Footer /> */}
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
