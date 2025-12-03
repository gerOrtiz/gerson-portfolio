import { ReactNode } from "react";
import enMessages from '../../public/locales/en.json';
import esMessages from '../../public/locales/es.json';
import { NextIntlClientProvider } from "next-intl";

type Locale = 'en' | 'es';

export function createIntlWrapper(locale: Locale = 'en') {
	const messages = locale === 'en' ? enMessages : esMessages;

	return function IntlWrapper({ children }: { children: ReactNode }) {
		return (
			<NextIntlClientProvider locale={locale} messages={messages}>
				{children}
			</NextIntlClientProvider>
		);
	}
}

