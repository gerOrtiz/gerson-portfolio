import Projects from '@/components/sections/Projects';
import { createIntlWrapper } from '@/utils/test-utils';

import { cleanup, render, screen, within } from '@testing-library/react';


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
			const expensesDiv = screen.getByTestId('expenses-app');
			expect(expensesDiv).toHaveClass('flex-col lg:flex-row px-4 lg:px-6 gap-20 lg:gap-3');
		});

		it('displays proper alt text for main image inside slider', () => {
			const imageDiv = screen.getAllByTestId('carousel-main-image');
			const image = within(imageDiv[0]).getByRole('img');
			expect(image).toHaveAttribute('alt', 'expenses app landing page main');
		});

		it('shows at least 5 thumnail images', () => {
			const expensesDiv = screen.getByTestId('expenses-app');
			const thumbnailsWrapper = within(expensesDiv).getByTestId('thumbnails');
			const thumbnailButtons = within(thumbnailsWrapper).getAllByRole('button');
			expect(thumbnailButtons.length).toBeGreaterThanOrEqual(5);
			for (let index = 0; index < thumbnailButtons.length; index++) {
				const imageButton = thumbnailButtons[index];
				const image = within(imageButton).getByRole('img');
				expect(image).toBeInTheDocument();
				expect(image).toHaveAccessibleName();
			}
		});

		it('displays correct number of logos', () => {
			const techMarquee = screen.getAllByTestId('tech-marquee');
			const logos = within(techMarquee[0]).getAllByRole('img');
			// Base number of logos should be 8, tech marquee doubles that
			expect(logos.length).toBeGreaterThanOrEqual(16);
			for (let index = 0; index < logos.length; index++) {
				const image = logos[index];
				expect(image).toHaveAccessibleName();
			}
		});

		it('renders correct navigation link', () => {
			const expensesDiv = screen.getByTestId('expenses-app');
			const link = within(expensesDiv).getByRole('link', { name: /go to website/i });
			expect(link).toHaveAttribute('href', 'https://expenses-app-2.vercel.app');
		});
	});

	describe('Frost find', () => {
		it('has responsive classes', () => {
			const frostFindDiv = screen.getByTestId('frost-find');
			expect(frostFindDiv).toHaveClass('flex-col lg:flex-row px-4 lg:px-6 gap-6 lg:gap-3');
		});

		it('displays proper alt text for main image inside slider', () => {
			const imageDiv = screen.getAllByTestId('carousel-main-image');
			const image = within(imageDiv[1]).getByRole('img');
			expect(image).toHaveAttribute('alt', 'frost find onboarding main');
		});
		it('shows at least 5 thumnail images', () => {
			const frostFindDiv = screen.getByTestId('frost-find');
			const thumbnailsWrapper = within(frostFindDiv).getByTestId('thumbnails');
			const thumbnailButtons = within(thumbnailsWrapper).getAllByRole('button');
			expect(thumbnailButtons.length).toBeGreaterThanOrEqual(5);
			for (let index = 0; index < thumbnailButtons.length; index++) {
				const imageButton = thumbnailButtons[index];
				const image = within(imageButton).getByRole('img');
				expect(image).toBeInTheDocument();
				expect(image).toHaveAccessibleName();
			}
		});
		it('displays correct number of logos', () => {
			const techMarquee = screen.getAllByTestId('tech-marquee');
			const logos = within(techMarquee[1]).getAllByRole('img');
			// Base number of logos should be 5, tech marquee doubles that
			expect(logos.length).toBeGreaterThanOrEqual(10);
			for (let index = 0; index < logos.length; index++) {
				const image = logos[index];
				expect(image).toHaveAccessibleName();
			}
		});

		it('renders correct navigation link', () => {
			const frostFindDiv = screen.getByTestId('frost-find');
			const link = within(frostFindDiv).getByRole('link', { name: /view code/i });
			expect(link).toHaveAttribute('href', 'https://github.com/gerOrtiz/my-map-app');
		});
	});


});