'use client';
import expensesApp from "@/assets/app.jpg";
import onboarding from "@/assets/onboarding-screen.jpg";
import mapScreen from "@/assets/map-screen.jpg";
import loginScreen from "@/assets/login-screen.jpg";
import Image from "next/image";
import nextIcon from "@/assets/next-icon.svg";
import typescriptIcon from "@/assets/typescript.png";
import mongoIcon from "@/assets/mongoDB-2.png";
import authLogo from "@/assets/auth-1.png";
import tailwindLogo from "@/assets/tailwindcss-logo.png";
import reactNative from "@/assets/react-native-logo.png";
import expoLogo from "@/assets/expo-logo.svg";
import paperLogo from "@/assets/paper.svg";
import firebaseLogo from "@/assets/firebase-logo.svg";
import { useTranslations } from "next-intl";
import { MoveRight } from "lucide-react";
import { motion } from 'framer-motion';

const expensesLogos = [{ logo: nextIcon, name: 'next logo' }, { logo: typescriptIcon, name: 'typescript logo' },
{ logo: mongoIcon, name: 'mongo db logo' }, { logo: tailwindLogo, name: 'tailwind logo' },
{ logo: authLogo, name: 'next auth logo' },
];

const frostLogos = [{ logo: reactNative, name: 'React Native logo' }, { logo: expoLogo, name: 'Expo logo' }, { logo: typescriptIcon, name: 'Typescript logo' },
{ logo: firebaseLogo, name: 'Firebase logo' }, { logo: paperLogo, name: 'React Native Paper logo' }
];

export default function Projects() {
	const t = useTranslations('projects');
	return (
		<section id="projects" className="px-0 lg:px-2 py-2 lg:py-4 flex flex-col gap-5">
			{/* Floating image card */}
			<div className="w-full flex flex-col px-0 lg:px-6 gap-8">
				<h2>{t('title')}</h2>
				{/* <div className="w-full min-h-10 relative -mt-20"> */}
				{/* Expenses app */}
				<motion.div data-testid="expenses project"
					className="w-full min-h-10 relative -mt-20"
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					<div data-testid="expenses image" className="w-11/12 lg:w-1/2 flex justify-center justify-self-center shadow-blue-200 shadow-md rounded-3xl translate-y-1/2 lg:translate-y-1/3
					 hover:shadow-lg hover:shadow-blue-300">
						<Image src={expensesApp} alt="expenses-app frontpage" className="w-full rounded-3xl" width={600} priority />
					</div>
					<div className="card w-full lg:w-[60%] flex flex-col justify-self-center justify-center items-center py-9 px-6 min-h-80" >
						<div className="py-2 pt-6 lg:py-6 px-1 lg:px-10 mt-14 lg:mt-20 flex flex-col gap-4">
							<div>
								<h3>Expenses App</h3>
								<h4>{t('expensesApp.subtitle')}</h4>
							</div>
							<p >{t('expensesApp.description')}</p>
							<div data-testid="logos" className="flex flex-1 flex-wrap w-full justify-center gap-2 lg:gap-4 lg:mt-2">
								{expensesLogos.map((logo) => (
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
				<motion.div data-testid="frost project"
					className="w-full min-h-10 relative"
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					<div className="card lg:w-[60%] flex flex-col justify-self-center items-center py-9 px-6 min-h-80 pb-20">
						<div className="py-2 pt-6 lg:py-6 px-1 lg:px-10 flex flex-col gap-4">
							<div>
								<h3>Frost find</h3>
								<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-0">
									<h4 className="w-full lg:w-4/5">{t('frostFind.subtitle')}</h4>
									<div className="w-full lg:w-1/5 flex justify-start lg:justify-end">
										<a className="btn-base btn-primary btn-link items-center group" href="https://expo.dev/accounts/gerortiz/projects/frost-find/builds/0360ce7f-954b-4aa1-8f68-6598128a5c86" target="_blank">
											{t('download')}
											<MoveRight className="mt-0.5 w-4 h-4 transition-transform delay-75 group-hover:translate-x-1" />
										</a>
									</div>

								</div>

							</div>
							<p >{t('frostFind.description')}</p>
							<div data-testid="logos" className="flex flex-1 flex-wrap w-full justify-center items-center gap-2 lg:gap-4 lg:mt-2">
								{frostLogos.map((logo) => (
									<Image key={logo.name} src={logo.logo} alt={logo.name} height={50} className="h-10 w-auto lg:h-14" />
								))}
							</div>
						</div>
					</div>
					{/* <button className="w-auto flex justify-evenly justify-self-center shadow-blue-200 shadow-md rounded-3xl hover:shadow-lg hover:shadow-blue-300 bg-white">
						<Image src={onboarding} alt="onboarding-screen" className="w-full max-h-[200px] lg:max-h-[350px] rounded-3xl object-contain" loading="lazy" />

					</button> */}
					<div data-testid="frost-find images" className="w-11/12 lg:w-1/2 flex justify-self-center justify-evenly -translate-y-1/4 lg:-translate-y-[20%]">
						<div data-testid="image container" className="w-auto flex  shadow-blue-200 shadow-md rounded-3xl
					 hover:shadow-lg hover:shadow-blue-300 bg-white">
							<Image src={onboarding} alt="onboarding-screen" className="w-full max-h-[250px] lg:max-h-[400px] rounded-3xl object-contain" loading="lazy" />
						</div>
						<div data-testid="image container" className="w-auto hidden lg:flex justify-evenly justify-self-center shadow-blue-200 shadow-md rounded-3xl
					 hover:shadow-lg hover:shadow-blue-300 bg-white">
							<Image src={loginScreen} alt="login-screen" className="w-full max-h-[250px] lg:max-h-[400px] rounded-3xl" loading="lazy" />
						</div>
						<div data-testid="image container" className="w-auto flex justify-evenly justify-self-center shadow-blue-200 shadow-md rounded-3xl
					 hover:shadow-lg hover:shadow-blue-300 bg-white">
							<Image src={mapScreen} alt="map-screen" className="w-full max-h-[250px] lg:max-h-[400px] rounded-3xl object-contain" loading="lazy" />
						</div>
					</div>

				</motion.div>
			</div>
		</section>
	);
}