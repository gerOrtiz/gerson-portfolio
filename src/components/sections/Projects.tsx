'use client';
import '@/styles/projects.css';
// expenses app screenshots
import expensesLanding from "@/assets/expenses-app/new-expenses-landing.png";
import expensesDashboard from "@/assets/expenses-app/dashboard.png";
import emptyState from "@/assets/expenses-app/empty-state.png";
import expensesDesktop from "@/assets/expenses-app/expenses-desktop1.png";
import expensesReports from "@/assets/expenses-app/reports.png";
//expenses app tech stack logos
import nextIcon from "@/assets/tech-stack/next-icon.svg";
import typescript from "@/assets/tech-stack/typescript.svg";
import mongo from "@/assets/tech-stack/mongodb-icon-dark.svg";
import tailwindcss from "@/assets/tech-stack/tailwindcss.svg";
import auth from "@/assets/tech-stack/authjs.svg";
import jest from "@/assets/tech-stack/jest.svg";
import tanstack from "@/assets/tech-stack/tanstack.svg";
import forms from "@/assets/tech-stack/react-hook-form-logo-only.svg";
// frost find screenshots
import onboarding from "@/assets/frost-find/onboarding-screen.jpg";
import mapScreen from "@/assets/frost-find/map-screen.jpg";
import loginScreen from "@/assets/frost-find/login-screen.jpg";
import register from "@/assets/frost-find/register-screeen.jpg";
import dashboard from "@/assets/frost-find/dashboard-screen.jpg";
// frost find tech stack logos
import reactNative from "@/assets/tech-stack/react_dark.svg";
import expo from "@/assets/tech-stack/expo.svg";
import firebase from "@/assets/tech-stack/firebase.svg";
import paper from "@/assets/tech-stack/paper.svg";
//
import { useTranslations } from "next-intl";
import { MoveRight } from "lucide-react";
// import { motion } from 'framer-motion';
import SectionDivider from "../ui/SectionDivider";
import ProjectCarousel from '../ui/ProjectsCarousel';
import Card from '../ui/Card';
import TechMarquee from '../ui/TechMarquee';

const expensesLogos = [{ logo: nextIcon, name: 'Next.js logo' }, { logo: typescript, name: 'Typescript logo' },
{ logo: mongo, name: 'Mongo DB logo' }, { logo: tailwindcss, name: 'Tailwind CSS logo' },
{ logo: auth, name: 'Auth logo' }, { logo: jest, name: 'Jest logo' },
{ logo: forms, name: 'React Hook Forms logo' }, { logo: tanstack, name: 'Tanstack Query logo' }
];

const expensesScreenshots = [{ ...expensesLanding, name: 'expenses app landing page' }, { ...expensesDashboard, name: 'expenses app dashboard' }, { ...emptyState, name: 'expenses app empty state' },
{ ...expensesDesktop, name: 'expenses app daily expenses' }, { ...expensesReports, name: 'expenses app reports' }];

const frostLogos = [{ logo: reactNative, name: 'React Native logo' }, { logo: expo, name: 'Expo logo' }, { logo: typescript, name: 'Typescript logo' },
{ logo: firebase, name: 'Firebase logo' }, { logo: paper, name: 'React Native Paper logo' }
];

const frostScreenshots = [{ ...onboarding, name: 'frost find onboarding' }, { ...loginScreen, name: 'frost find login' },
{ ...register, name: 'frost find register screen' }, { ...dashboard, name: 'frost find dashboard' }, { ...mapScreen, name: 'frost find map screen' }];

export default function Projects() {
	const t = useTranslations('projects');
	return (
		<section id="projects" className="px-0 flex flex-col gap-5 pb-20 lg:pb-10">
			<SectionDivider title={t('title')} color="#312e81" />
			{/* Expenses App */}
			<div data-testid="expenses-app" className="w-full flex flex-col lg:flex-row px-4 lg:px-6 gap-20 lg:gap-3 items-center mb-3">
				<div className="w-full lg:w-2/5">
					<ProjectCarousel images={expensesScreenshots} />
				</div>
				<div className="w-full lg:w-3/5">
					<Card >
						<div className="w-full flex-col gap-3 mb-2">
							<h3>Expenses App</h3>
							<h4>{t('expensesApp.subtitle')}</h4>
						</div>
						<div className="mt-2">
							<p >{t('expensesApp.description')}</p>
							<div className="w-full my-8">
								<TechMarquee logos={expensesLogos} direction="left" />
							</div>
							<div className="flex justify-center items-center lg:mt-2 lg:justify-end">
								<a className="btn-base btn-primary btn-link items-center group" href="https://expenses-app-2.vercel.app" target="_blank">
									{t('action')}
									<MoveRight className="mt-0.5 w-4 h-4 transition-transform delay-75 group-hover:translate-x-1" />
								</a>
							</div>
						</div>
					</Card>
				</div>
			</div>
			{/* Frost find */}
			<div data-testid="frost-find" className="w-full flex flex-col lg:flex-row px-4 lg:px-6 gap-6 lg:gap-3 items-center mt-6">
				<div className="w-full lg:w-3/5">
					<Card>
						<div className="w-full flex-col gap-3 mb-2">
							<h3>Frost Find</h3>
							<h4>{t('frostFind.subtitle')}</h4>
						</div>
						<div className="mt-2">
							<p >{t('frostFind.description')}</p>
							{/* <div data-testid="logos" className="flex flex-wrap w-full justify-center gap-2 lg:gap-4 lg:my-8">
								{expensesLogos.map((logo) => (
									<Image key={logo.name} src={logo.logo} alt={logo.name} height={50} className="h-10 w-auto lg:h-14" />
								))}
							</div> */}
							<div className="flex justify-self-center w-full lg:w-4/5 my-8">
								<TechMarquee logos={frostLogos} direction="right" />
							</div>
							<div className="flex justify-center items-center lg:mt-2 lg:justify-end">
								<a className="btn-base btn-primary btn-link items-center group" href="https://expo.dev/accounts/gerortiz/projects/frost-find/builds/0360ce7f-954b-4aa1-8f68-6598128a5c86" target="_blank">
									{t('download')}
									<MoveRight className="mt-0.5 w-4 h-4 transition-transform delay-75 group-hover:translate-x-1" />
								</a>
							</div>
						</div>
					</Card>
				</div>
				<div className="w-full lg:w-2/5">
					<ProjectCarousel images={frostScreenshots} />
				</div>
			</div>
		</section>
	);
}