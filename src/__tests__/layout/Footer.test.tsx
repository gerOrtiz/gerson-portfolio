import Footer from '@/components/layout/Footer';
import '@testing-library/jest-dom';
import { cleanup, render, screen, within } from '@testing-library/react';

describe('Footer', () => {
	beforeEach(() => {
		render(<Footer />);
	});

	afterEach(() => {
		cleanup();
	});

	it('displays correct class name', () => {
		const footer = screen.getByRole('contentinfo');
		expect(footer).toHaveClass('main-footer');
	});

	it('renders with correct class', () => {
		const footer = screen.getByRole('contentinfo');
		const section = within(footer).getByTestId('footer-section');
		expect(section).toHaveClass('sm:px-6 lg:px-8');
	});

	it('display correct text content', () => {
		const footer = screen.getByRole('contentinfo');
		const paragraph = within(footer).getByRole('paragraph');
		expect(paragraph).toHaveTextContent('© 2025 Gerson Ortiz. All rights reserved.');
	});
});