'use client';
import "@/styles/hero.css";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import avatar from "@/assets/avatar.jpg";
import Image from "next/image";
import { FileText, X } from "lucide-react";
import { motion } from 'framer-motion';
import Link from "next/link";

const statusMessages = [
	"Currently crafting digital experiences",
	"Building the future, one component at a time",
	"Transforming ideas into interactive realities",
	"Available for your next big project"
];

export default function Hero() {
	const [currentStatus, setCurrentStatus] = useState<string>(statusMessages[0]);
	const [showResume, setShowResume] = useState(false);
	const t = useTranslations('hero');
	const timer = useRef<NodeJS.Timeout | null>(null);

	const handleCardHover = useCallback(() => {
		if (timer.current) clearTimeout(timer.current);
		timer.current = setTimeout(() => {
			const randomIndex = Math.floor(Math.random() * statusMessages.length);
			setCurrentStatus(statusMessages[randomIndex]);
		}, 200);
	}, []);

	useEffect(() => {
		return () => { if (timer.current) clearTimeout(timer.current); }
	}, []);

	return (
		<section id="hero" className="min-h-20 flex flex-1 flex-wrap items-center justify-center gap-12 ">
			<div className="hero w-full max-w-md">
				<h2 className="sr-only">{t('header')}</h2>
				<h3 className="sr-only">{t('subtitle')}</h3>
				{/* Container */}
				<div className="relative group" onMouseLeave={handleCardHover}>
					{/* upper card */}
					<div className="upper-card  rounded-3xl px-6 py-4 min-h-20">
						<div className="flex flex-col justify-between gap-5">
							{/* status */}
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								<span className="text-sm">{t('status')}</span>
							</div>
							{/* Info */}
							<div className="flex gap-3 items-center h-auto">
								<div className="w-18">
									<Image src={avatar} alt="avatar" width={100} className="rounded-full w-full" />
								</div>
								<div className="flex flex-col w-full">
									<h4>Gerson Ortiz</h4>
									<h5>{t('subtitle')}</h5>
								</div>
							</div>
							{/* CTA */}
							<div className="flex gap-2 items-center justify-center">
								<Link href="#contact" className="btn-base btn-primary btn-link">{t('button1')}</Link>
								<button className="btn-base btn-secondary" onClick={() => setShowResume(!showResume)}>{t('button2')}</button>
							</div>
						</div>
					</div>
					{/* bottom card */}
					<div className="under-card flex flex-col justify-end absolute w-full bottom-0 transition-all duration-300 
					delay-75 ease-out group-hover:translate-y-1/2 -z-10 rounded-b-3xl px-2 pt-2 pb-1 min-h-14 ">
						<div className="flex items-center justify-center gap-2 text-gray-900">
							<span>{t(currentStatus)}</span>
						</div>
					</div>
				</div>

			</div>
			<div className={`${showResume ? 'flex' : 'hidden'} resume-card flex-col w-full max-w-xs`}			>
				<div className="card"	>
					<div className="py-1 px-4 flex flex-col gap-4 relative">
						<div className="absolute right-0">
							<button aria-label="Close resume card" className="bg-transparent hover:bg-gray-300" onClick={() => setShowResume(false)}>
								<X className="w-3 h-3 " />
							</button>
						</div>
						<h5 className="font-bold text-center">{t('resumeTitle')}</h5>
						<dl>
							<dt className="list-title">{t('resume1')}</dt>
							<dd className="ml-12 mb-4 flex gap-2 items-center">
								<a href="/Gerson_Ortiz.pdf" download>
									Gerson Resume.pdf
								</a>
								<FileText width={12} height={12} />
							</dd>
							<dt className="list-title">{t('resume2')}</dt>
							<dd className="ml-12 flex gap-2 items-center">
								<a href="/Gerson_Ortiz_CV.pdf" download>Gerson CV</a>
								<FileText width={12} height={12} />
							</dd>
						</dl>
					</div>
				</div>
			</div>


		</section>

	);
}