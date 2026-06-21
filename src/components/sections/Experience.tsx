'use client';

import { useTranslations } from "next-intl";
import SectionDivider from "../ui/SectionDivider";
import TimelineBeat from "../ui/TimelineBeat";

const beats = [
	{
		chapter: 'Chapter 1 · First job', title: 'How a friend got me in the door',
		description: `
		A friend who already worked there knew my background, not my stack, and mentioned an opening might open up. 
		I spent a few weeks studying JavaScript and CSS just to understand what his team was actually building and got hooked on what was possible with just JavaScript alone, even if my view of it was still narrow. 
		When he told me I'd help him finish the project once I was in, that sealed it. 
		The interview confirmed it: meeting the team, seeing not just what they'd built but where they wanted to go, made me want to learn AngularJS fast enough to build alongside them. 
		I started full-stack training almost immediately. 
		Before I knew it, I'd built the coupon and discount system end to end.
		`,
		tags: ['AngularJS', 'Javascript']
	}, {
		chapter: 'Chapter 2 · Trust', title: 'Becoming the one new hires got sent to',
		description: `
		I don't know exactly why I became the one new hires got sent to, maybe it was trust, since I was already shipping features end to end by then. 
		Maybe it was simpler than that: I'd been there longest, I knew the system inside out, and someone needed to onboard the first new dev. 
		Whatever the reason, I did it well enough that it stopped being a one-time favor and became my job. 
		Every new hire after that came to me not just to learn the codebase, but to learn how to ask questions instead of assuming.
		`
	}, {
		chapter: 'Chapter 3 · The pivot', title: 'Migrating under pressure',
		description: `
		Six years in, the product hit its ceiling, a legacy stack with nowhere left to grow, every client wanting something custom, costs that stopped making sense.
		When the company merged with a larger platform, I didn't see it as an exit, I saw one more problem worth solving.
		I led the migration myself, learning React and Next.js in real time, and shipped things like schema-level SEO, the bigger platform hadn't even gotten to.
		The name changed, the scope changed, the product evolved and so did I.
		`,
		tags: ['React', 'Next.js', 'Migration']
	}, {
		chapter: `Chapter 4 · What it's really about`, title: `If I can't explain it to my grandma...`,
		description: `
		Somewhere along the way, I ended up doing more backend than frontend. 
		It paid off, I understood systems end to end, but I missed it. 
		Backend logic can be solid and invisible, the proof is in the absence of bugs. 
		Frontend is where I can point at something and say "I built that." 
		If I can't explain what I'm working on to my grandma, I don't feel the satisfaction. 
		So when the chance came to go back to it, fully, I took it.
		`,
		tags: []
	}, {
		chapter: `Chapter 5 · Now`, title: `Senior, full-stack capable, available`,
		description: `
		All of that; the migration, the mentorship, the years of choosing frontend over everything else, shaped how I build now: modern stack, accessibility-first, shipping tested production code. 
		Now I'm available, looking for the next problem worth solving.
		`,
		tags: ['React', 'Next.js', 'Typescript']
	}];

export default function Experience() {
	const t = useTranslations('experience');

	return (
		<section id="experience" className="px-0 flex flex-col gap-5 pb-20 lg:pb-10">
			<SectionDivider title={t('title')} />
			{/* <div className="w-full flex justify-start px-0 lg:px-6">
				<h2 >{t('title')}</h2>
			</div> */}
			<TimelineBeat beatsArray={beats} />

			{/* <div className="flex flex-col gap-8 justify-center items-center w-full px-0 lg:px-2">
				<motion.div data-testid="banner 1"
					className="card flex flex-wrap w-full lg:w-5/6"
					initial="hiddenLeft"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={cardVariants}
					transition={transition}
				>
					<div className="w-full flex justify-center lg:w-[30%]">
						<Image alt="frontend banner" src={front} height={200} className="fit" />
					</div>
					<div className="w-full lg:w-[70%] px-3">
						<h3 className="title">{t('banner1.title')}</h3>
						<p>{t('banner1.description')}</p>
					</div>
				</motion.div>
			</div> */}

		</section>
	);
}