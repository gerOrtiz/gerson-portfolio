'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggleButton from '../ui/ThemeToggleButton';
import { useTranslations } from 'next-intl';
import LanguageToggle from '../ui/LanguageToggle';


export default function Header() {
	const t = useTranslations('header');
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="main-header sticky top-0 w-full z-50">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<h1 className="text-2xl font-bold">Gerson Ortiz</h1>
					</div>

					{/* Desktop language button */}

					<div>
						<LanguageToggle />
					</div>
					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link href="#about">{t('about')}</Link>
						<Link href="#services">{t('services')}</Link>
						<Link href="#projects">{t('projects')}</Link>
						<Link href="#contact">{t('contact')}</Link>
						{/* Theme toggle placeholder */}
						<div className="w-full shadow-sm">
							<ThemeToggleButton />
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<span className="sr-only">{t('main-menu')}</span>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile menu */}
				{isMenuOpen && (
					<div className="md:hidden border-t border-gray-200">
						<div className="px-2 pt-2 pb-3 space-y-1">
							<a href="#about" className="block px-3 py-2">{t('about')}</a>
							<a href="#services" className="block px-3 py-2">{t('services')}</a>
							<a href="#projects" className="block px-3 py-2">{t('projects')}</a>
							<a href="#contact" className="block px-3 py-2">{t('contact')}</a>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
