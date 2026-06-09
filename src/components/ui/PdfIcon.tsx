export default function PdfIcon({ size = 40 }: { size?: number }) {
	return (
		<svg width={size} height={size} viewBox="0 0 40 48"
			fill="none" xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path d="M6 0 H26 L38 12 V48 H6 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
			<path d="M26 0 L38 12 H26 Z" fill="#cbd5e1" />
			<rect x="4" y="22" width="28" height="16" rx="2" fill="#dc2626" />
			<text x="18" y="34"
				fontFamily="sans-serif"
				fontSize="9"
				fontWeight="700"
				fill="white"
				textAnchor="middle"
			>PDF</text>
		</svg>
	)
}