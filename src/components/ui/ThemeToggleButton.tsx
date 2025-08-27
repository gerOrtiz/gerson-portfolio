'use client';
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";


export default function ThemeToggleButton() {
	const [mounted, setMouted] = useState(false);
	const [sparkClass, setSparkClass] = useState('');
	const { theme, setTheme } = useTheme();
	const timer = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		setMouted(true);
		return () => { if (timer.current) clearTimeout(timer.current); }
	}, []);

	const isDark = useMemo(() => theme === 'dark', [theme]);

	const handleSwitchClick = useCallback(() => {
		setTheme(() => isDark ? 'light' : 'dark');
		setSparkClass('sparkle');
		if (timer.current) clearTimeout(timer.current);
		timer.current = setTimeout(() => {
			setSparkClass('');
		}, 1000);
	}, [isDark, setTheme]);

	if (!mounted) return <div className="w-14 h-7" />;

	return (
		<button onClick={handleSwitchClick}
			aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
			className={`theme-toggle ${isDark ? 'dark-theme' : 'light-theme'} ${sparkClass}`}
		>
			<div
				className="circle"
			/>
			<span className="spark spark-1"></span>
			<span className="spark spark-2"></span>
			<span className="spark spark-3"></span>
			<Sun className={`absolute right-1 w-4 h-4 text-amber-800 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`} />
			<Moon className={`absolute left-1 w-4 h-4 text-blue-100 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`} />
		</button>);
}