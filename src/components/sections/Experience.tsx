'use client';

import { useTranslations } from "next-intl";
import SectionDivider from "../ui/SectionDivider";
import TimelineBeat from "../ui/TimelineBeat";



export default function Experience() {
	const t = useTranslations('experience');
	const beats = [
		{
			chapter: t('beat1.chapter'), title: t('beat1.title'),
			description: (t.raw('beat1.description') as string[]).join(' '),
			tags: ['AngularJS', 'Javascript']
		}, {
			chapter: t('beat2.chapter'), title: t('beat2.title'),
			description: (t.raw('beat2.description') as string[]).join(' ')
		}, {
			chapter: t('beat3.chapter'), title: t('beat3.title'),
			description: (t.raw('beat3.description') as string[]).join(' '),
			tags: ['React', 'Next.js', t('beat3.tag')]
		}, {
			chapter: t('beat4.chapter'), title: t('beat4.title'),
			description: (t.raw('beat4.description') as string[]).join(' '),
			tags: []
		}, {
			chapter: t('beat5.chapter'), title: t('beat5.title'),
			description: (t.raw('beat5.description') as string[]).join(' '),
			tags: ['React', 'Next.js', 'Typescript']
		}];
	return (
		<section id="experience" className="px-0 flex flex-col gap-5 pb-20 lg:pb-10">
			<SectionDivider title={t('title')} />
			<TimelineBeat beatsArray={beats} />
		</section>
	);
}