'use client';
import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface CarouselImage extends StaticImageData {
	name: string;
}

interface ProjectCarouselProps {
	images: CarouselImage[];
	aspectRatio?: string;
}

const FULL_ASPECT_RATIO = 16 / 9;
const GAP = 2;

function Thumbnails({
	images,
	setIndex,

}: {
	images: CarouselImage[];
	setIndex: (i: number) => void;
}) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div data-testid="thumbnails"
			className="flex w-full h-auto justify-center overflow-hidden absolute isolate z-10 -bottom-20"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<motion.div
				style={{
					aspectRatio: FULL_ASPECT_RATIO,
					gap: isHovered ? `${GAP}%` : '0%',
				}}
				className="flex h-32 items-center isolate"
			>
				{images.map((image, i) => {
					const isActive = isHovered;
					const rotation = isHovered ? 0 : i % 2 === 0 ? -12 : 12;
					const z = i;
					const mid = Math.floor((images.length - 1) / 2);
					const translate = i === 0 ? 40 : i < mid ? i * 20 : -(i * 10);
					const xTranslate = isHovered || i === mid ? 0 : translate;

					return (
						<motion.button
							key={i}
							onClick={() => setIndex(i)}
							initial={false}
							animate={isActive ? 'active' : 'inactive'}
							variants={{
								active: {
									aspectRatio: FULL_ASPECT_RATIO,
									rotate: 0,
									x: 0,
									zIndex: 0
								},
								inactive: {
									aspectRatio: FULL_ASPECT_RATIO,
									rotate: rotation,
									x: xTranslate,
									zIndex: z
								},
							}}
							transition={{ duration: 0.4, ease: 'easeInOut' }}
							className="h-16 lg:h-20 w-16 lg:w-20 shrink-0 overflow-hidden rounded-xl 
							border-4 border-white shadow-md shadow-blue-400 hover:!-translate-y-2 hover:!scale-90 hover:!-rotate-2"
						>
							<Image
								src={image}
								alt={image.name}
								width={300}
								height={500}
								className="h-full w-full object-cover pointer-events-none select-none "
							/>
						</motion.button>
					);
				})}
			</motion.div>
		</div>
	);
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
	const [index, setIndex] = useState(0);

	return (
		<div className="w-full">
			<div className="relative w-full flex justify-center gap-3">
				{/* Main image */}
				<div data-testid="carousel-main-image"
					className="flex justify-center w-fit bg-slate-50 rounded-3xl border-4 border-white shadow-lg"
				>
					<Image
						src={images[index]}
						alt={images[index].name + ' main'}
						height={500}
						className="object-contain rounded-2xl border border-white"
					/>

				</div>
				{/* Thumbnail strip */}
				<Thumbnails
					images={images}
					setIndex={setIndex}
				/>
			</div>
		</div>
	);
}