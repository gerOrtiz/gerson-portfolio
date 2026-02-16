import Experience from "@/components/sections/Experience";
import { createIntlWrapper } from "@/utils/test-utils";
import { cleanup, getByRole, render, screen, within } from "@testing-library/react";


describe('Experience section', () => {
	beforeEach(() => {
		render(<Experience />, { wrapper: createIntlWrapper('en') });
	});
	afterEach(() => {
		cleanup();
	});

	it('displays proper headind title', () => {
		const title = screen.getByRole('heading', { level: 2 });
		expect(title).toHaveTextContent('Experience');
	});

	describe('banner 1', () => {
		it('render with responsive classes', () => {
			const banner1 = screen.getByTestId('banner 1');
			expect(banner1).toHaveClass('w-full lg:w-5/6');
		});

		it('displays correct heading title', () => {
			const banner1 = screen.getByTestId('banner 1');
			const heading = within(banner1).getByRole('heading', { level: 3 });
			expect(heading).toHaveTextContent('From AngularJS to Modern React');
		});

		it('has correct alt for image', () => {
			const banner1 = screen.getByTestId('banner 1');
			const image = within(banner1).getByRole('img');
			expect(image).toHaveAttribute('alt', 'frontend banner');
		});
	});

	describe('banner 2', () => {
		it('render with responsive classes', () => {
			const banner2 = screen.getByTestId('banner 2');
			expect(banner2).toHaveClass('w-full lg:w-5/6');
		});

		it('displays correct heading title', () => {
			const banner2 = screen.getByTestId('banner 2');
			const heading = within(banner2).getByRole('heading', { level: 3 });
			expect(heading).toHaveTextContent('Building Complex Business Features');
		});

		it('has correct alt for image', () => {
			const banner2 = screen.getByTestId('banner 2');
			const image = within(banner2).getByRole('img');
			expect(image).toHaveAttribute('alt', 'diagram banner');
		});
	});

	describe('banner 3', () => {
		it('render with responsive classes', () => {
			const banner3 = screen.getByTestId('banner 3');
			expect(banner3).toHaveClass('w-full lg:w-5/6');
		});

		it('displays correct heading title', () => {
			const banner3 = screen.getByTestId('banner 3');
			const heading = within(banner3).getByRole('heading', { level: 3 });
			expect(heading).toHaveTextContent('Self-Taught Quality Assurance');
		});

		it('has correct alt for image', () => {
			const banner3 = screen.getByTestId('banner 3');
			const image = within(banner3).getByRole('img');
			expect(image).toHaveAttribute('alt', 'debug banner');
		});
	});



});

