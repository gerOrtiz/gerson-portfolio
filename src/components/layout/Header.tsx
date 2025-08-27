'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import ThemeToggleButton from '../ui/ThemeToggleButton';
import { useTranslations } from 'next-intl';
import LanguageToggle from '../ui/LanguageToggle';


export default function Header() {
	const t = useTranslations('header');
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	const handleClickOutside = useCallback((event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsMenuOpen(false);
		}
	}, []);

	useEffect(() => {
		if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isMenuOpen]);

	return (
		<header className="main-header sticky top-0 w-full z-50">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Mobile menu button */}
					<div ref={ref} className="md:hidden flex flex-col items-center mt-0.5">
						<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<span className="sr-only">{t('main-menu')}</span>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
					{/* Logo */}
					<div className="flex-shrink-0 ml-3 lg:ml-0">
						<h1 className="text-2xl font-bold">Gerson Ortiz</h1>
					</div>

					{/* Mobile theme button */}
					<div className="flex md:hidden">
						<ThemeToggleButton />
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link href="#projects">{t('projects')}</Link>
						<Link href="#experience">{t('experience')}</Link>
						<Link href="#contact">{t('contact')}</Link>
						{/* Theme toggle placeholder */}
						<div className="w-full flex justify-center items-center gap-2 ">
							<LanguageToggle />
							<ThemeToggleButton />
						</div>
					</div>


				</div>

				{/* Mobile menu */}
				{isMenuOpen && (
					<div className="md:hidden border-t border-gray-200 pb-4 z-10">
						<div className="px-2 pt-2 space-y-1">
							<a href="#projects" className="block px-3 py-2">{t('projects')}</a>
							<a href="#experience" className="block px-3 py-2">{t('experience')}</a>
							<a href="#contact" className="block px-3 py-2">{t('contact')}</a>
						</div>
						<div className="px-5 pt-2 space-y-1 pb-3">
							<LanguageToggle />
						</div>

					</div>
				)}
			</nav>
		</header>
	);
}
