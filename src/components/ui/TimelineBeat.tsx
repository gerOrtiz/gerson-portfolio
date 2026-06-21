import styles from "@/styles/timelineBeat.module.css";
import { motion } from 'framer-motion';
type beat = {
	chapter: string;
	title: string;
	description: string;
	tags?: string[]
}
interface TimelineBeatProps {
	beatsArray: beat[]
}

const cardVariants = {
	hidden: { y: 30, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1
	}
};

const transition = { duration: 0.7 };


const BeatCard = ({ beat, side }: { beat: beat, side: 'left' | 'right' }) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			variants={cardVariants}
			transition={transition}
			data-testid="beat"
			className={`${styles.beatCard} ${side === 'left' ? styles.crookedLeft : styles.crookedRight} flex-shrink-0 w-5/6 lg:w-[45%]`}>
			<div className="w-full flex flex-col gap-4 p-3">
				<span >{beat.chapter}</span>
				<h3 className={styles.title}>{beat.title}</h3>
				<p>{beat.description}</p>
				<div className="w-full flex gap-3">
					{beat.tags &&
						beat.tags.map((tag, index) => (
							<span key={tag + index} className={styles.tag}>{tag}</span>
						))
					}
				</div>
			</div>
		</motion.div>
	);
};

export default function TimelineBeat({ beatsArray }: TimelineBeatProps) {
	const last = beatsArray.length - 1;

	return (
		<div data-testid="beats-container" className="w-full px-4 lg:px-6 flex flex-col">
			{beatsArray.map((beat, index) => (
				<div data-testid="row" key={beat.chapter}
					className={`flex ${index % 2 === 0 ? 'flex-row-reverse lg:flex-row justify-end gap-8' : 'justify-start gap-4'} lg:justify-center lg:gap-4 my-5`}>
					{index % 2 === 0 ? (<>
						<BeatCard beat={beat} side="left" />
						<div data-testid="spine-container" className={`w-[5%] flex flex-col ${index === 0 ? 'justify-start' : index === last ? 'justify-end' : 'justify-center'}`}>
							<div data-testid="spine" className={`${styles.spine} basis-1/2 flex flex-col items-center`}>
								{index !== 0 && <span className={styles.spineLine} />}
								<span data-testid="dot" className={styles.spineDot} />
								{index !== last && <span className={styles.spineLine} />}
							</div>
						</div>
						<div data-testid="empty" className="w-0 hidden lg:flex lg:w-[45%] flex-shrink" />
					</>) : (<>
						<div data-testid="empty" className="w-0 hidden lg:flex lg:w-[45%] flex-shrink" />
						<div data-testid="spine-container" className={`w-[5%] flex flex-col ${index === 0 ? 'justify-start' : index === last ? 'justify-end' : 'justify-center'}`}>
							<div data-testid="spine" className={`${styles.spine} basis-1/2 flex flex-col items-center`}>
								{index !== 0 && <span className={styles.spineLine} />}
								<span data-testid="dot" className={styles.spineDot} />
								{index !== last && <span className={styles.spineLine} />}
							</div>
						</div>
						<BeatCard beat={beat} side="right" />
					</>)}
				</div>
			))}
		</div>
	);
}