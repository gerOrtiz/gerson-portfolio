'use client';

import Image from "next/image";
import front from "@/assets/front.png";
import debug from "@/assets/debug-2.jpg";
import diagram from "@/assets/diagram.jpg";
import style from "@/styles/experience.module.css";
import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';
import { useMemo } from "react";

export default function Experience() {
	const t = useTranslations('experience');
	const cardVariants = useMemo(() => {
		return {
			hiddenLeft: { x: -100, opacity: 0 },
			hiddenRight: { x: 100, opacity: 0 },
			visible: {
				x: 0,
				opacity: 1
			}
		};
	}, []);

	const transition = useMemo(() => {
		return { duration: 0.7 };
	}, [])
	return (
		<section id="experience" className="flex flex-col gap-8 justify-center items-center w-full px-0 lg:px-2">
			<div className="w-full flex justify-start px-0 lg:px-6">
				<h2 >{t('title')}</h2>
			</div>

			{/* banner 1 */}
			{/* <div className="card flex flex-wrap w-full lg:w-5/6 "> */}
			<motion.div
				className="card flex flex-wrap w-full lg:w-5/6"
				initial="hiddenLeft"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={cardVariants}
				transition={transition}
			>
				<div className="w-full flex justify-center lg:w-[30%]">
					<Image alt="frontend banner" src={front} height={200} className={style.fit} />
				</div>
				<div className="w-full lg:w-[70%] px-3">
					<h3 className={style.title}>{t('banner1.title')}</h3>
					<p>{t('banner1.description')}</p>
				</div>
			</motion.div>
			{/* </div> */}

			{/* banner 2 */}
			{/* <div className="card flex flex-wrap w-full lg:w-5/6"> */}
			<motion.div
				className="card flex flex-wrap w-full lg:w-5/6"
				initial="hiddenRight"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={cardVariants}
				transition={transition}
			>
				<div className="w-full lg:w-2/3 px-3">
					<h3 className={style.title}>{t('banner2.title')}</h3>
					<p>{t('banner2.description')}</p>
				</div>
				<div className="w-full flex justify-center lg:w-1/3">
					<Image alt="diagram banner" src={diagram} height={200} className={style.fit} />
				</div>
			</motion.div>
			{/* </div> */}
			{/* banner 3 */}
			{/* <div className="card flex flex-wrap w-full lg:w-5/6"> */}
			<motion.div
				className="card flex flex-wrap w-full lg:w-5/6"
				initial="hiddenLeft"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={cardVariants}
				transition={transition}
			>
				<div className="w-full flex justify-center lg:w-1/3">
					<Image alt="debug banner" src={debug} height={200} className={style.fit} />
				</div>
				<div className="w-full lg:w-2/3 px-3">
					<h3 className={style.title}>{t('banner3.title')}</h3>
					<p>{t('banner3.description')}</p>
				</div>
			</motion.div>
			{/* </div> */}
		</section>
	);
}