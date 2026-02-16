'use client';

import Image from "next/image";
import linkedin from "@/assets/linkedin.png";
import envelope from "@/assets/envelope.png";
import git from "@/assets/github-mark.svg";
import { useTranslations } from "next-intl";

export default function Contact() {
	const t = useTranslations('contact');
	return (
		<section id="contact" className="w-full px-0 lg:px-2 py-2 lg:py-4">
			<div className="flex justify-center justify-self-center w-full lg:w-1/2 card">
				<div className="flex flex-col w-full gap-7 px-0 lg:px-3 py-2">
					<h3>{t('title')}</h3>
					<h4 className="text-center">{t('subtitle')}</h4>
					<div className="flex w-full lg:w-5/6 justify-center self-center gap-9 lg:gap-14">
						{/* <Image src={linkedin} alt="linkedin" height={100} />
						<Image src={github} alt="github" height={100} />
						<Image src={envelope} alt="mail" height={100} /> */}
						<a href="https://www.linkedin.com/in/gersonortizv/" aria-label="Connect on LinkedIn" className="flex flex-col items-center group">
							<Image src={linkedin} alt="" height={100} className="lg:group-hover:h-[105px] lg:group-hover:max-w-[110%] lg:group-hover:w-[102%]" />
							{t('anchor1')}
						</a>
						<a href="https://github.com/gerOrtiz" aria-label="View code on GitHub" className="flex flex-col items-center group">
							<Image src={git} alt="" height={100} className="lg:group-hover:h-[105px] lg:group-hover:max-w-[110%] lg:group-hover:w-[102%]" />
							{t('anchor2')}
						</a>
						<a href="mailto:contacto.gersonortiz@gmail.com" aria-label="Email me at contacto.gersonortiz@gmail.com" className="flex flex-col items-center group">
							<Image src={envelope} alt="" height={100} className="lg:group-hover:h-[105px] lg:group-hover:max-w-[110%] lg:group-hover:w-[102%]" />
							{t('anchor3')}
						</a>
					</div>
				</div>

			</div>
		</section>
	);
}