
// Mock the useRouter hook
jest.mock('../../i18n/navigation', () => ({
	useRouter: jest.fn(),
	usePathname: jest.fn()
}));

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { cleanup, render, screen } from '@testing-library/react';
import { useRouter, usePathname } from '@/i18n/navigation'; // Import from your navigation config
import { createIntlWrapper } from '@/utils/test-utils';


const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;
const mockReplace = jest.fn();

describe('Language toggle', () => {
	beforeEach(() => {
		(usePathname as jest.Mock).mockReturnValue('/');
		mockUseRouter.mockReturnValue({
			push: jest.fn(),
			replace: mockReplace,
			prefetch: jest.fn(),
			back: jest.fn(),
			forward: jest.fn(),
			refresh: jest.fn()
		});
	});

	afterEach(() => {
		cleanup(); // Cleans up after EVERY test
		jest.clearAllMocks();
	});

	describe('English locale tests', () => {
		beforeEach(() => {
			render(<LanguageToggle />, {
				wrapper: createIntlWrapper('en')
			});
		});

		it('button is enabled and clickable', () => {
			const button = screen.getByRole('button', { name: 'Select language' });
			expect(button).toBeEnabled();
		});

		it('renders English language acronym', () => {
			const button = screen.getByRole('button', { name: 'Select language' });
			expect(button).toHaveTextContent('EN');
		});
		it('replaces English locale', async () => {
			const button = screen.getByRole('button', { name: 'Select language' });
			await userEvent.click(button);

			expect(mockReplace).toHaveBeenCalledWith('/', { locale: 'es' });
		});

	});

	describe('Spanish locale tests', () => {
		beforeEach(() => {
			render(<LanguageToggle />, {
				wrapper: createIntlWrapper('es')
			});
		});
		it('renders Spanish language acronym', () => {
			const button = screen.getByRole('button', { name: 'Elige el idioma' });
			expect(button).toHaveTextContent('ES');
		});
		it('replaces Spanish locale', async () => {
			const button = screen.getByRole('button', { name: 'Elige el idioma' });
			await userEvent.click(button);
			expect(mockReplace).toHaveBeenCalledWith('/', { locale: 'en' });
		});
	});

});