'use client'

interface CardProps {
	children: React.ReactNode;
}

export default function Card({ children }: CardProps) {

	return (<>
		<div className="card isolate relative min-h-24 w-full flex flex-col ring-2 ring-offset-1 p-3 lg:p-5">
			<span className="absolute inset-0 rounded-[inherit] ring-2 shadow-md shadow-slate-400/60 ring-white/60 mix-blend-overlay m-3 lg:m-5" />
			<div className="p-3 lg:p-4 z-10">
				{children}

			</div>
		</div>
	</>);

}