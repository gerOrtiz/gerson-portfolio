'use client';
import "@/styles/hero.css";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import avatar from "@/assets/avatar.jpg";
import Image from "next/image";
import Link from "next/link";
import BlobBackground from "../ui/BlobBackground";
import Modal from "../ui/Modal";

const statusMessages = [
	"Currently crafting digital experiences",
	"Building the future, one component at a time",
	"Transforming ideas into interactive realities",
	"Available for your next big project"
];

export default function Hero() {
	const [currentStatus, setCurrentStatus] = useState<string>(statusMessages[0]);
	const [openModal, setOpenModal] = useState(false);
	const t = useTranslations('hero');
	const timer = useRef<NodeJS.Timeout | null>(null);

	const onCloseModal = useCallback(() => {
		setOpenModal(false);
	}, []);

	const handleCardHover = useCallback(() => {
		if (timer.current) clearTimeout(timer.current);
		timer.current = setTimeout(() => {
			const randomIndex = Math.floor(Math.random() * statusMessages.length);
			setCurrentStatus(prev => {
				let newIndex = randomIndex;
				if (statusMessages[randomIndex] === prev) {
					newIndex = randomIndex === 0 ? 1 : randomIndex === statusMessages.length - 1 ? statusMessages.length - 2 : randomIndex;
				}
				return statusMessages[newIndex];
			});
		}, 200);
	}, []);

	useEffect(() => {
		return () => { if (timer.current) clearTimeout(timer.current); }
	}, []);

	return (
		<section id="hero" className="min-h-dvh w-full flex items-center px-6 lg:px-4 py-20 lg:py-24">
			<h1 className="sr-only">{t('header')}</h1>
			{/* Hero */}
			<div className="hero w-full flex justify-center">
				{/* Container */}
				<div data-testid="container" className="relative min-w-[80%] max-w-[100%] lg:max-w-[85%] group" onMouseLeave={handleCardHover}>
					{/* upper card */}
					<div className="upper-card relative rounded-3xl px-5 lg:px-6 py-4 min-h-80 w-full">
						<BlobBackground />
						<div className="flex flex-col justify-between gap-5">
							{/* status */}
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 bg-green-500 rounded-full available-dot"></div>
								<span className="text-lg">{t('status')}</span>
							</div>
							{/* Info */}
							<div className="flex lg:flex-col gap-2 lg:gap-3 items-center h-auto">
								<div className="w-32 lg:w-80 h-32 lg:h-80 ring ring-blue-300 shadow-lg shadow-sky-700 p-0 lg:p-2 rounded-full">
									<Image src={avatar} alt="avatar" width={300} className="rounded-full w-full h-full" />
								</div>
								<div className="flex flex-col w-3/5 lg:w-full items-center text-center ">
									<h1 style={{ fontFamily: 'var(--font-display)' }} className="shine-text">Gerson Ortiz</h1>
									<h2>{t('subtitle')}</h2>
								</div>
							</div>
							{/* Sales pitch */}
							<div className="w-full rounded-lg p-0 lg:p-5">
								<p className="text-xl lg:text-2xl font-medium textShadow italic">
									{`"9 years of frontend experience taught me one thing above all: the best solution is the one that actually fits the problem. 
						Whether you need a landing page, a dashboard, a performance audit, or a full SaaS,
						I bring the same approach: clean, pragmatic code that solves the real problem without unnecessary complexity"`}
								</p>
							</div>
							{/* CTA */}
							<div className="flex gap-2 items-center justify-end">
								<Link href="#contact" className="btn-base btn-primary btn-link text-lg">{t('button1')}</Link>
								<button className="btn-base btn-secondary text-lg" onClick={() => setOpenModal(true)}>{t('button2')}</button>
							</div>
						</div>
					</div>
					{/* bottom card */}
					<div role="status" aria-live="polite" className="under-card flex flex-col justify-end absolute w-full bottom-0 transition-all duration-300 
					delay-75 ease-out group-hover:translate-y-2/3 rounded-b-3xl px-2 pt-2 pb-1 min-h-16 ">
						<div className="flex items-center justify-center pb-1 text-gray-900">
							<span>{t(currentStatus)}</span>
						</div>
					</div>
				</div>
			</div>
			{openModal && (
				<Modal isOpen={openModal} onClose={onCloseModal} />
			)}
		</section>

	);
}