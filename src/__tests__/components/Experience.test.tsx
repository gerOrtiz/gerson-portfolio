import Experience from "@/components/sections/Experience";
import { createIntlWrapper } from "@/utils/test-utils";
import { cleanup, render, screen, within } from "@testing-library/react";


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

	describe('TimelineBeat', () => {
		it('should display a column at all times', () => {
			const timeline = screen.getByTestId('beats-container');
			expect(timeline).toBeInTheDocument();
			expect(timeline).toHaveClass('flex flex-col');
		});
		it('should display at least 3 beats', () => {
			const timeline = screen.getByTestId('beats-container');
			const rows = within(timeline).getAllByTestId('row');
			expect(rows.length).toBeGreaterThanOrEqual(3);
		});
		it('should have mobile classes to handle spine placement', () => {
			const timeline = screen.getByTestId('beats-container');
			const rows = within(timeline).getAllByTestId('row');
			for (let index = 0; index < rows.length; index++) {
				const row = rows[index];
				if (index % 2 === 0) {
					expect(row).toHaveClass('flex-row-reverse lg:flex-row justify-end gap-8');
				} else {
					expect(row).toHaveClass('justify-start gap-4');
				}
			}
		});
		it('should show alternate crooked positions for beats', () => {
			const timeline = screen.getByTestId('beats-container');
			const rows = within(timeline).getAllByTestId('row');
			for (let index = 0; index < rows.length; index++) {
				const row = rows[index];
				const beat = within(row).getByTestId('beat');
				if (index % 2 === 0) {
					expect(beat).toHaveClass('crookedLeft');
				} else {
					expect(beat).toHaveClass('crookedRight');
				}
			}
		});
		it('should show a spine on each row', () => {
			const timeline = screen.getByTestId('beats-container');
			const rows = within(timeline).getAllByTestId('row');
			for (let index = 0; index < rows.length; index++) {
				const row = rows[index];
				const container = within(row).getByTestId('spine-container');
				expect(container).toBeInTheDocument();
				if (index === 0) {
					expect(container).toHaveClass('justify-start');
				} else if (index === rows.length - 1) {
					expect(container).toHaveClass('justify-end');
				} else expect(container).toHaveClass('justify-center');
			}
		});
		it('should a dot on each spine', () => {
			const timeline = screen.getByTestId('beats-container');
			const rows = within(timeline).getAllByTestId('row');
			for (let index = 0; index < rows.length; index++) {
				const row = rows[index];
				const container = within(row).getByTestId('spine-container');
				const dot = within(container).getByTestId('dot');
				expect(dot).toBeInTheDocument();
				expect(dot).toHaveClass('spineDot');
			}
		});
		it('should have an empty div in each row', () => {
			const timeline = screen.getByTestId('beats-container');
			const rows = within(timeline).getAllByTestId('row');
			for (let index = 0; index < rows.length; index++) {
				const row = rows[index];
				const emptySpace = within(row).getByTestId('empty');
				expect(emptySpace).toBeInTheDocument();
				expect(emptySpace).toHaveClass('w-0 hidden lg:flex lg:w-[45%] flex-shrink');
			}
		});

	});



});

