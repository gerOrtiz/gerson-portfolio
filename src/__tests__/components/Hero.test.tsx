import '@testing-library/jest-dom';
import Hero from '@/components/sections/Hero';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { createIntlWrapper } from '@/utils/test-utils';
import userEvent from '@testing-library/user-event';

describe('Hero', () => {
	beforeEach(() => {
		render(<Hero />, { wrapper: createIntlWrapper('en') });
	});

	afterEach(() => {
		cleanup();
	});

	it('renders correct header and subtitle', () => {
		const header = screen.getByRole('heading', { level: 2 });
		const subtitle = screen.getByRole('heading', { level: 3 });
		expect(header).toHaveTextContent(/portfolio - gerson ortiz/i);
		expect(subtitle).toHaveTextContent(/frontend developer/i);
	});

	it('changes bottom card text after mouse over', async () => {
		const container = screen.getByTestId('container');
		const bottomCard = screen.getByRole('status');
		const initialMessage = bottomCard.textContent;
		await userEvent.hover(container);
		await userEvent.unhover(container);
		await waitFor(() => {
			const newMessage = bottomCard.textContent;
			expect(newMessage).not.toBe(initialMessage);
			expect(bottomCard).not.toHaveTextContent('Currently crafting digital experiences');
		}, { timeout: 500 });

	});

	it('has correct href attribute', () => {
		const link = screen.getByRole('link', { name: /let's talk/i });
		expect(link).toHaveAttribute('href', '#contact');
	});

	it('has hidden card', () => {
		const resumeCard = screen.getByTestId('resume-card');
		expect(resumeCard).toHaveClass('hidden');
	});

	it('shows resume card after click', async () => {
		const resumeCard = screen.getByTestId('resume-card');
		const resumeBtn = screen.getByRole('button', { name: /my resume/i });
		await userEvent.click(resumeBtn);
		expect(resumeCard).toHaveClass('flex');
	});

	it('hides resume card after click icon', async () => {
		const resumeCard = screen.getByTestId('resume-card');
		const resumeBtn = screen.getByRole('button', { name: /my resume/i });
		await userEvent.click(resumeBtn);
		const closeBtn = screen.getByRole('button', { name: /close resume card/i });
		await userEvent.click(closeBtn);
		expect(resumeCard).toHaveClass('hidden');
	});

});

