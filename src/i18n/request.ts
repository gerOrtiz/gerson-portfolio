import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
	// This corresponds to the [locale] segment
	let locale = await requestLocale;

	// Ensure that the incoming locale is valid
	if (!locale || !routing.locales.includes(locale as any)) { //eslint-disable-line
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: (await import(`../../public/locales/${locale}.json`)).default
	};
});