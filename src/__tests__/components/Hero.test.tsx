import '@testing-library/jest-dom';
import Hero from '@/components/sections/Hero';
import { cleanup, render, screen, waitFor, within } from '@testing-library/react';
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
		const titles = screen.getAllByRole('heading', { level: 1 });
		const subtitle = screen.getByRole('heading', { level: 2 });
		expect(titles.length).toBe(2);
		expect(titles[0]).toHaveTextContent(/portfolio - gerson ortiz/i);
		expect(titles[1]).toHaveTextContent(/gerson ortiz/i);
		expect(titles[1].style.fontFamily).toBe('var(--font-display)');
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
		const resumeDialog = screen.queryByRole('dialog', { name: /my resume/i });
		expect(resumeDialog).not.toBeInTheDocument();
	});

	it('shows resume dialog after click', async () => {
		const resumeBtn = screen.getByRole('button', { name: /my resume/i });
		await userEvent.click(resumeBtn);
		const resumeDialog = await screen.findByRole('dialog', { name: /my resume/i });
		expect(resumeDialog).toBeInTheDocument();
		const links = within(resumeDialog).getAllByRole('link');
		expect(links.length).toBe(2);
		expect(links[0]).toHaveAttribute('download');
		expect(links[0]).toHaveAttribute('href', '/Gerson_Ortiz_resume.pdf');
		expect(links[1]).toHaveAttribute('download');
		expect(links[1]).toHaveAttribute('href', '/Gerson_Ortiz.pdf');
	});

	it('hides resume card after click icon', async () => {
		const resumeBtn = screen.getByRole('button', { name: /my resume/i });
		await userEvent.click(resumeBtn);
		const resumeDialog = await screen.findByRole('dialog');

		const closeBtn = within(resumeDialog).getByRole('button', { name: /close resume modal/i });
		await userEvent.click(closeBtn);
		expect(screen.queryByRole('dialog', { name: /my resume/i })).not.toBeInTheDocument();
	});

});

