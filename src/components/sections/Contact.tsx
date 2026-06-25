'use client';
import { useTranslations } from "next-intl";
import SectionDivider from "../ui/SectionDivider";
import GitHubSVG from "../ui/GitHubSVG";
import LinkedinSVG from "../ui/LinkedinSVG";
import Envelope from "../ui/Envelope";

export default function Contact() {
	const t = useTranslations('contact');
	return (
		<section id="contact" className="w-full px-0  pb-10 lg:pb-20">
			<SectionDivider title={t('title')} />
			<div className="flex justify-center justify-self-center w-full lg:w-1/2 p-4 lg:p-0">
				<div className="flex flex-col items-center w-full gap-7 p-4 lg:p-8 rounded-3xl contactCard">
					<div className="flex items-center gap-2">
						<span data-testid="available-dot" className="w-3 h-3 bg-green-500 rounded-full available-dot" />
						<span className="text-lg">{`Available for new opportunities`}</span>
					</div>
					<h3 className="text-center">{t('subtitle')}</h3>

					<div className="flex w-full lg:w-5/6 justify-center gap-5 lg:gap-14">
						<div className="linkContainer flex items-center justify-center">
							<a aria-label={t('anchor1')} className="btn-link icon-link" href="https://www.linkedin.com/in/gersonortizv/"
								target="_blank"
								rel="noopener noreferrer">
								<LinkedinSVG />
							</a>
						</div>
						<div className="linkContainer flex items-center justify-center">
							<a aria-label={t('anchor2')} className="btn-link icon-link" href="https://github.com/gerOrtiz"
								target="_blank"
								rel="noopener noreferrer">
								<GitHubSVG />
							</a>
						</div>
						<div className="linkContainer flex items-center justify-center">
							<a aria-label={t('anchor3')} className="btn-link icon-link" href="mailto:contacto.gersonortiz@gmail.com">
								<Envelope />
							</a>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
}