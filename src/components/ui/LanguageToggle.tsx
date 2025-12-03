'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { LanguagesIcon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useCallback } from 'react';
import style from "@/styles/language-button.module.css";

export default function LanguageToggle() {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();
	const t = useTranslations('language-button');

	const switchLanguage = useCallback(() => {
		const newLocale = locale === 'es' ? 'en' : 'es';
		router.replace(pathname, { locale: newLocale });
		//setOpenMenu(false);
	}, [locale, pathname, router]);

	// const handleOpenMenu = useCallback(() => {
	// 	setOpenMenu(!openMenu);
	// }, []);

	// const handleClickOutside = useCallback((event: MouseEvent) => {
	// 	if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
	// 		setOpenMenu(false);
	// 	}
	// }, []);
	// useEffect(() => {
	// 	if (openMenu) document.addEventListener('mousedown', handleClickOutside)
	// 	return () => document.removeEventListener('mousedown', handleClickOutside);
	// }, [openMenu])

	return (
		<button
			onClick={switchLanguage}
			// aria-expanded={openMenu}
			// aria-haspopup="listbox"
			aria-label={t('label')}
			className={`${style.toggle} px-3 py-3 text-sm rounded-xl`}
		>
			<div className="flex w-full items-center gap-2">
				<LanguagesIcon className={`w-4 h-4 ${style.text}`} />
				<span className={style.text}>{locale.toUpperCase()}</span>
			</div>

		</button>
		// <div className="relative" ref={menuRef}>
		// 	<button
		// 		onClick={handleOpenMenu}
		// 		aria-expanded={openMenu}
		// 		aria-haspopup="listbox"
		// 		aria-label={t('label')}
		// 		className="px-3 py-3 text-sm rounded-xl shadow shadow-gray-300 bg-gray-100 hover:bg-gray-300 hover:shadow-gray-400"
		// 	>
		// 		<div className="flex w-full items-center gap-2">
		// 			<LanguagesIcon className="w-4 h-4" />
		// 			<span>{locale === 'en' ? 'EN' : 'ES'}</span>
		// 		</div>

		// 	</button>
		// 	{openMenu && (<ul role="listbox" className={`${style.menu} absolute mt-2 bg-white rounded-lg shadow shadow-gray-400 z-10 min-w-full`}>
		// 		<li role="option" >
		// 			<button className={`${locale === 'es' ? 'bg-gray-300' : ''} w-full p-1 text-center hover:bg-gray-300`} disabled={locale === 'es'} onClick={() => switchLanguage('es')}>
		// 				ES
		// 			</button>
		// 		</li>
		// 		<li role="option">
		// 			<button className={`${locale === 'en' ? 'bg-gray-300' : ''} w-full p-1 text-center hover:bg-gray-300`} disabled={locale === 'en'} onClick={() => switchLanguage('en')}>
		// 				EN
		// 			</button>
		// 		</li>
		// 	</ul>)}
		// </div>


	);
}