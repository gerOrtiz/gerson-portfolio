'use client';
import expensesApp from "@/assets/app.jpg";
import Image from "next/image";
import nextIcon from "@/assets/next-icon.svg";
import typescriptIcon from "@/assets/typescript.png";
import mongoIcon from "@/assets/mongoDB-2.png";
import authLogo from "@/assets/auth-1.png";
import tailwindLogo from "@/assets/tailwindcss-logo.png";
import { useTranslations } from "next-intl";
import { MoveRight } from "lucide-react";
import { motion } from 'framer-motion';

const logos = [{ logo: nextIcon, name: 'next logo' }, { logo: typescriptIcon, name: 'typescript logo' },
{ logo: mongoIcon, name: 'mongo db logo' }, { logo: tailwindLogo, name: 'tailwind logo' },
{ logo: authLogo, name: 'next auth logo' },
];

export default function Projects() {
	const t = useTranslations('projects');
	return (
		<section id="projects" className="px-0 lg:px-2 py-2 lg:py-4">
			{/* Floating image card */}
			<div className="w-full flex flex-col px-0 lg:px-6">
				<h2>{t('title')}</h2>
				{/* <div className="w-full min-h-10 relative -mt-20"> */}
				<motion.div
					className="w-full min-h-10 relative -mt-20"
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					<div className="w-11/12 lg:w-1/2 flex justify-center justify-self-center shadow-blue-200 shadow-md rounded-3xl translate-y-2/3 lg:translate-y-1/3
					 hover:shadow-lg hover:shadow-blue-300">
						<Image src={expensesApp} alt="expenses-app" className="w-full rounded-3xl" width={600} priority />
					</div>
					<div className="card w-full lg:w-[60%] flex flex-col justify-self-center justify-center items-center py-9 px-6 min-h-80" >
						<div className="py-2 pt-6 lg:py-6 px-1 lg:px-10 mt-14 lg:mt-20 flex flex-col gap-3">
							<div>
								<h3>Expenses App</h3>
								<h4>{t('expensesApp.subtitle')}</h4>
							</div>
							<p >{t('expensesApp.description')}</p>
							<div className="flex flex-1 flex-wrap w-full justify-center gap-2 lg:gap-4">
								{logos.map((logo) => (
									<Image key={logo.name} src={logo.logo} alt={logo.name} height={50} className="h-10 w-auto lg:h-14" />
								))}
							</div>
							<div className="flex justify-center items-center lg:mt-2 lg:justify-end">
								<a className="btn-base btn-primary btn-link items-center group" href="https://expenses-app-2.vercel.app" target="_blank">
									{t('action')}
									<MoveRight className="mt-0.5 w-4 h-4 transition-transform delay-75 group-hover:translate-x-1" />
								</a>
							</div>

						</div>
					</div>
				</motion.div>
				{/* </div> */}
			</div>
		</section>
	);
}