'use client';

import { X } from "lucide-react";
import Portal from "../layout/Portal";
import { useEffect, useRef } from "react";
import classes from '@/styles/modal.module.css';
import PdfIcon from "./PdfIcon";
import { useTranslations } from "next-intl";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
	const dialogRef = useRef<HTMLDivElement>(null);
	const t = useTranslations('hero');

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' || e.key === 'Esc') {
				console.log('esc was pressed');
				onClose();
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [onClose]);

	useEffect(() => {
		dialogRef.current?.focus();
		document.body.style.overflow = 'hidden';
		document.documentElement.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
			document.documentElement.style.overflow = '';
		}
	}, []);

	if (!isOpen) return null;
	return (
		<Portal selector="portal-root">
			<div
				className="isolate overflow-hidden fixed inset-0 backdrop-blur-sm bg-black/50 z-[100] flex items-center justify-center max-w-[100dvw] min-h-dvh"
				onClick={onClose}
			>
				<div
					role="dialog"
					ref={dialogRef} tabIndex={-1}
					aria-labelledby="title"
					aria-describedby="subtitle"
					aria-modal={true}
					className={`${classes.modal} p-6 rounded-xl max-w-[90dvw] lg:max-w-[50dvw] w-full relative`}
					onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
				>
					<div className="absolute right-1 top-1">
						<button aria-label={t('resumeModalCloseBtn')} className="p-1 rounded-md bg-transparent  hover:bg-blue-100" onClick={onClose}>
							<X size={18} />
						</button>
					</div>
					<h4 id="title" className="mb-4">{t('resumeModalTitle')}</h4>
					<p id="subtitle" className="mb-4">{t('resumeModalSubtitle')}</p>
					<div className="flex flex-col lg:flex-row my-8 justify-between gap-6 lg:gap-0">
						<div className="w-full lg:w-2/5 flex flex-col items-center gap-4">
							<PdfIcon size={100} />
							<span>{t('resume1')}</span>
							<a href="/Gerson_Ortiz_resume.pdf" download>
								{t('download')}
							</a>
						</div>
						<hr className="h-0 lg:h-auto w-auto lg:w-[1px] bg-sky-500" />
						<div className="w-full lg:w-2/5 flex flex-col items-center gap-4">
							<PdfIcon size={100} />
							<span>{t('resume2')}</span>
							<a href="/Gerson_Ortiz.pdf" download>
								{t('download')}
							</a>
						</div>

					</div>
					<div className="flex justify-end mt-6">
						<button
							className="btn-base btn-primary"
							onClick={onClose}
						>
							{t('close')}
						</button>
					</div>

				</div>
			</div >
		</Portal >
	);
}