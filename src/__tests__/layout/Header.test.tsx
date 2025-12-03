import Header from '@/components/layout/Header';
import { createIntlWrapper } from '@/utils/test-utils';
import '@testing-library/jest-dom';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('../../components/ui/LanguageToggle', () => {
  return function MockLanguageToggle() {
    return <div data-testid="language toggle" />
  }
});

jest.mock('../../components/ui/ThemeToggleButton', () => {
  return function MockThemeToggleButton() {
    return <div data-testid="theme toggle" />
  }
});

describe('Header', () => {

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  describe('English locale', () => {
    beforeEach(() => {
      render(<Header />, {
        wrapper: createIntlWrapper('en')
      });
    });
    it('renders with correct header classes', () => {
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('main-header sticky');
    });

    describe('Desktop navigation', () => {
      it('has responsive classes', () => {
        const desktopNav = screen.getByTestId('desktop-nav');
        expect(desktopNav).toHaveClass('hidden', 'md:flex');
      });
      it('renders correct navigation links', () => {
        const desktopWrapper = screen.getByTestId('desktop-nav');
        const links = within(desktopWrapper).getAllByRole('link');

        expect(links).toHaveLength(3);
        expect(links[0]).toHaveAttribute('href', '#projects');
        expect(links[0]).toHaveTextContent('Projects');
        expect(links[1]).toHaveAttribute('href', '#experience');
        expect(links[1]).toHaveTextContent('Experience');
        expect(links[2]).toHaveAttribute('href', '#contact');
        expect(links[2]).toHaveTextContent('Contact');
      });
    });

    describe('Mobile navigation', () => {
      it('is hidden by default', () => {
        expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
      });

      it('opens when hamburger button is clicked', async () => {
        const button = screen.getByRole('button', { name: /open main menu/i });
        await userEvent.click(button);
        const mobileWrapper = screen.getByTestId('mobile-menu');
        expect(mobileWrapper).toHaveClass('md:hidden');
      });

      it('closes mobile menu when clicking outside', async () => {
        const button = screen.getByRole('button', { name: /open main menu/i });
        await userEvent.click(button);
        const mobileWrapper = screen.queryByTestId('mobile-menu');
        expect(mobileWrapper).toBeInTheDocument();

        await userEvent.click(document.body);
        expect(mobileWrapper).not.toBeInTheDocument();
      });

      it('display correct navigation links when open', async () => {
        const button = screen.getByRole('button', { name: /open main menu/i });
        await userEvent.click(button);
        const mobileWrapper = screen.getByTestId('mobile-menu');
        const links = within(mobileWrapper).getAllByRole('link');
        expect(links).toHaveLength(3);
        expect(links[0]).toHaveAttribute('href', '#projects');
        expect(links[0]).toHaveTextContent('Projects');
        expect(links[1]).toHaveAttribute('href', '#experience');
        expect(links[1]).toHaveTextContent('Experience');
        expect(links[2]).toHaveAttribute('href', '#contact');
        expect(links[2]).toHaveTextContent('Contact');
      });
    });
  });

  describe('Spanish locale', () => {
    beforeEach(() => {
      render(<Header />, {
        wrapper: createIntlWrapper('es')
      });
    });


    it('displays correct texts in desktop', () => {
      const desktopWrapper = screen.getByTestId('desktop-nav');
      const links = within(desktopWrapper).getAllByRole('link');

      expect(links[0]).toHaveTextContent('Proyectos');
      expect(links[1]).toHaveTextContent('Experiencia');
      expect(links[2]).toHaveTextContent('Contacto');
    });

    it('display correct texts in mobile', async () => {
      const button = screen.getByRole('button', { name: /abrir menú principal/i });
      await userEvent.click(button);
      const mobileWrapper = screen.getByTestId('mobile-menu');
      const links = within(mobileWrapper).getAllByRole('link');
      expect(links[0]).toHaveTextContent('Proyectos');
      expect(links[1]).toHaveTextContent('Experiencia');
      expect(links[2]).toHaveTextContent('Contacto');
    });

  });

});