jest.mock('next-themes', () => ({
	useTheme: jest.fn(),
}));
import '@testing-library/jest-dom';
import { useTheme } from 'next-themes';
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

const mockUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;


describe('ThemeToggleButton', () => {

	afterEach(() => {
		cleanup(); // Cleans up after EVERY test
		jest.clearAllMocks();
	});

	it('renders icons', () => {
		mockUseTheme.mockReturnValue({
			theme: 'light',
			setTheme: jest.fn(),
			themes: ['light', 'dark'],
		});
		render(<ThemeToggleButton />);
		const moonIcon = screen.getByRole('img', { name: 'Moon' });
		const sunIcon = screen.getByRole('img', { name: 'Sun' });
		expect(moonIcon).toBeInTheDocument();
		expect(sunIcon).toBeInTheDocument();
	});

	describe('Light theme', () => {
		beforeEach(() => {
			mockUseTheme.mockReturnValue({
				theme: 'light',
				setTheme: jest.fn(),
				themes: ['light', 'dark'],
			});
			render(<ThemeToggleButton />);
		});
		it('renders with correct aria-label for light theme', () => {
			const button = screen.getByRole('button', { name: 'Switch to dark theme' });
			expect(button).toBeInTheDocument();
		});

		it('renders with correct class for light theme', () => {
			const button = screen.getByRole('button', { name: 'Switch to dark theme' });
			expect(button).toHaveClass('light-theme');
		});

		it('renders visible sun icon in light theme', async () => {
			const moonIcon = screen.getByRole('img', { name: 'Moon' });
			const sunIcon = screen.getByRole('img', { name: 'Sun' });
			expect(moonIcon).toHaveClass('opacity-0');
			expect(sunIcon).toHaveClass('opacity-100');
		});
	});

	describe('Dark theme', () => {
		beforeEach(() => {
			mockUseTheme.mockReturnValue({
				theme: 'dark',
				setTheme: jest.fn(),
				themes: ['light', 'dark'],
			});
			render(<ThemeToggleButton />);
		});
		it('renders with correct aria-label for dark theme', async () => {
			// Check aria-label says "Switch to light theme"
			const button = screen.getByRole('button', { name: 'Switch to light theme' });
			expect(button).toBeInTheDocument();
		});
		it('renders with correct class for dark theme', async () => {
			const button = screen.getByRole('button', { name: 'Switch to light theme' });
			expect(button).toHaveClass('dark-theme');
		});
		it('renders visible moon icon in dark theme', async () => {
			const moonIcon = screen.getByRole('img', { name: 'Moon' });
			const sunIcon = screen.getByRole('img', { name: 'Sun' });
			expect(moonIcon).toHaveClass('opacity-100');
			expect(sunIcon).toHaveClass('opacity-0');
		});

	});

	describe('Interactions', () => {
		it('calls setTheme with dark when clicked in light mode', async () => {
			const mockSetTheme = jest.fn();
			mockUseTheme.mockReturnValue({
				theme: 'light',
				setTheme: mockSetTheme,
				themes: ['light', 'dark'],
			});
			render(<ThemeToggleButton />);
			const button = screen.getByRole('button', { name: 'Switch to dark theme' });
			await userEvent.click(button);
			expect(mockSetTheme).toHaveBeenCalledWith('dark');
		});

		it('calls setTheme with light when clicked in dark mode', async () => {
			const mockSetTheme = jest.fn();
			mockUseTheme.mockReturnValue({
				theme: 'dark',
				setTheme: mockSetTheme,
				themes: ['light', 'dark'],
			});
			render(<ThemeToggleButton />);
			const button = screen.getByRole('button', { name: 'Switch to light theme' });
			await userEvent.click(button);
			expect(mockSetTheme).toHaveBeenCalledWith('light');
		});
		// jest.useFakeTimers();
		it('adds and removes sparkle class after click', async () => {

			mockUseTheme.mockReturnValue({
				theme: 'dark',
				setTheme: jest.fn(),
				themes: ['light', 'dark'],
			});
			render(<ThemeToggleButton />);
			const button = screen.getByRole('button', { name: 'Switch to light theme' });
			expect(button).not.toHaveClass('sparkle');
			await userEvent.click(button);
			expect(button).toHaveClass('sparkle');
			// jest.advanceTimersByTime(1000);
			await waitFor(() => {
				expect(button).not.toHaveClass('sparkle');
			}, { timeout: 2000 });
		});
		// jest.useRealTimers();
	});


});
