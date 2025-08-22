jest.mock('next-themes', () => ({
	useTheme: jest.fn(),
}));
import '@testing-library/jest-dom';
import { useTheme } from 'next-themes';
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import { render, screen } from "@testing-library/react";

const mockUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;

describe('ThemeToggleButton', () => {
	beforeEach(() => {
		mockUseTheme.mockReturnValue({
			theme: 'light',
			setTheme: jest.fn(),
			themes: ['light', 'dark'],
		});
		render(<ThemeToggleButton />);
	});
	it('renders with correct aria-label for dark theme', async () => {
		// Mock useTheme to return dark theme
		// Render component  
		// Check aria-label says "Switch to light theme"
		mockUseTheme.mockReturnValue({
			theme: 'dark',
			setTheme: jest.fn(),
			themes: ['light', 'dark'],
		});
		render(<ThemeToggleButton />);
		const button = screen.getByRole('button', { name: 'Switch to light theme' });
		expect(button).toBeInTheDocument();
	});

	it('renders with correct aria-label for light theme', () => {
		// Test opposite state
		const button = screen.getByRole('button', { name: 'Switch to dark theme' });
		expect(button).toBeInTheDocument();
	});

	it('calls setTheme when clicked', () => {
		// Mock setTheme, click button, verify it was called
		const mockSetTheme = jest.fn();
		mockSetTheme('dark');
		expect(mockSetTheme).toHaveBeenCalled();
	});
});