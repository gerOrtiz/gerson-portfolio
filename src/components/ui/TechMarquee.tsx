// components/TechMarquee.tsx
import Image, { StaticImageData } from "next/image";
import styles from "@/styles/techMarquee.module.css";

export type TechLogo = {
	logo: StaticImageData;
	name: string;
};

type Props = {
	logos: TechLogo[];
	direction?: "left" | "right";
	speed?: number; // seconds for one full loop
};

export default function TechMarquee({ logos, direction = "left", speed = 25 }: Props) {
	return (
		<div data-testid="tech-marquee" className={styles.wrapper}>
			<div
				className={styles.track}
				style={{
					animationDirection: direction === "right" ? "reverse" : "normal",
					animationDuration: `${speed}s`,
				}}
			>
				{[...logos, ...logos].map((logo, i) => (
					<div key={`${logo.name}-${i}`} className={styles.pill}>
						<Image src={logo.logo} alt={logo.name} height={40} className={styles.logo} />
					</div>
				))}
			</div>
		</div>
	);
}