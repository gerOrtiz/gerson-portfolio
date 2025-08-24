'use client';
import "@/styles/hero.css";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import avatar from "@/assets/avatar.jpg";
import Image from "next/image";
import { X } from "lucide-react";

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

	const handleCardHover = useCallback(() => {
		setCurrentStatus('');
		const randomIndex = Math.floor(Math.random() * statusMessages.length);
		setCurrentStatus(statusMessages[randomIndex]);
	}, []);

	return (
		<section id="hero" className="min-h-20 flex flex-1 flex-wrap items-center justify-center gap-12 px-4 py-20">
			<div className="hero w-full max-w-md">
				{/* Container */}
				<div className="relative group" onMouseEnter={handleCardHover}>
					{/* upper card */}
					<div className="upper-card  rounded-3xl px-6 py-4 min-h-20">
						<div className="flex flex-col justify-between gap-5">
							{/* status */}
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								<span className="text-sm">{'Available'}</span>
							</div>
							{/* Info */}
							<div className="flex gap-3 items-center h-auto">
								<div className="w-18">
									<Image src={avatar} alt="avatar" width={100} className="rounded-full w-full" />
								</div>
								<div className="flex flex-col w-full">
									<h4>Gerson Ortiz</h4>
									<h5>Frontend Developer</h5>
								</div>
							</div>
							{/* CTA */}
							<div className="flex gap-2 items-center justify-center">
								<button className="btn-base btn-primary">Let's Talk</button>
								<button className="btn-base btn-secondary" onClick={() => setShowResume(!showResume)}>Resume</button>
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
			{showResume && <div className={`${showResume ? 'open' : ''} resume-card flex flex-col w-full max-w-xs`}>
				<div className="card">
					<div className="py-1 px-4 flex flex-col gap-4 relative">
						<div className="absolute right-0">
							<button aria-label="Close resume card" className="bg-transparent hover:bg-gray-300" onClick={() => setShowResume(false)}>
								<X className="w-3 h-3 " />
							</button>

						</div>
						<h5 className="text-blue-600 font-bold">My resume</h5>
						<dl>
							<dt>English resume</dt>
							<dd className="ml-12 mb-4">
								<a href="">Gerson Resume</a>
							</dd>
							<dt>Spanish resume</dt>
							<dd className="ml-12"><a href="">Gerson CV</a></dd>
						</dl>
					</div>
				</div>
			</div>}

		</section>

	);
}