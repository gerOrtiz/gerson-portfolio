import Projects from '@/components/sections/Projects';
import { createIntlWrapper } from '@/utils/test-utils';

import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('Projects', () => {
	beforeEach(() => {
		render(<Projects />, { wrapper: createIntlWrapper('en') });
	});

	afterEach(() => {
		cleanup();
	});

	it('displays proper title', () => {
		const title = screen.getByRole('heading', { level: 2 });
		expect(title).toHaveTextContent('Recent Projects');
	});
	// Test aria label once it has one
	// it('animates from bottom to center', () => {
	// 	const expensesDiv = screen.getByTestId('expenses project');
	// });
	describe('Expenses app', () => {
		it('has responsive classes', () => {
			const imageDiv = screen.getByTestId('expenses image');
			expect(imageDiv).toHaveClass('w-11/12 lg:w-1/2 translate-y-1/2 lg:translate-y-1/3 hover:shadow-lg hover:shadow-blue-300');
		});

		it('image has proper alt text', () => {
			const imageDiv = screen.getByTestId('expenses image');
			const image = within(imageDiv).getByRole('img');
			expect(image).toHaveAttribute('alt', 'expenses-app frontpage');
		});

		it('displays correct number of logos', () => {
			const container = screen.getByTestId('expenses project');
			const logosContainer = within(container).getByTestId('logos');
			const logos = within(logosContainer).queryAllByRole('img');
			expect(logos).toHaveLength(5);
		});

		it('renders correct navigation link', () => {
			const container = screen.getByTestId('expenses project');
			const link = within(container).getByRole('link', { name: /go to website/i });
			expect(link).toHaveAttribute('href', 'https://expenses-app-2.vercel.app');
		});
	});

	describe('Frost find', () => {
		it('displays correct number of logos', () => {
			const container = screen.getByTestId('frost project');
			const logosContainer = within(container).getByTestId('logos');
			const logos = within(logosContainer).queryAllByRole('img');
			expect(logos).toHaveLength(5);
		});

		it('renders correct navigation link', () => {
			const container = screen.getByTestId('frost project');
			const link = within(container).getByRole('link', { name: /download/i });
			expect(link).toHaveAttribute('href', 'https://expo.dev/accounts/gerortiz/projects/frost-find/builds/0360ce7f-954b-4aa1-8f68-6598128a5c86');
		});
		it('has responsive classes', () => {
			const imageDiv = screen.getByTestId('frost-find images');
			expect(imageDiv).toHaveClass('w-11/12 lg:w-1/2 -translate-y-1/4 lg:-translate-y-[20%]');
			const imageContainers = within(imageDiv).queryAllByTestId('image container');
			expect(imageContainers.length).toBeGreaterThan(0);

			imageContainers.forEach(imageContainer =>
				expect(imageContainer).toHaveClass('hover:shadow-lg hover:shadow-blue-300 bg-white')
			);
		});

		it('displays at least 2 images', () => {
			const imageDiv = screen.getByTestId('frost-find images');
			const images = within(imageDiv).queryAllByRole('img');
			const length = images.length;
			expect(length).toBeGreaterThanOrEqual(2);
		});

	});


});