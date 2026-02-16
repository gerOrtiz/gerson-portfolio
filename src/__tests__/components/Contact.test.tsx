import Contact from "@/components/sections/Contact";
import { createIntlWrapper } from "@/utils/test-utils";
import { cleanup, render, screen } from "@testing-library/react";


describe('Contact', () => {
  beforeEach(() => {
    render(<Contact />, { wrapper: createIntlWrapper('en') });
  });

  afterEach(() => {
    cleanup();
  });

  it('displays correct hrefs', () => {
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute('href', 'https://www.linkedin.com/in/gersonortizv/');
    expect(links[1]).toHaveAttribute('href', 'https://github.com/gerOrtiz');
    expect(links[2]).toHaveAttribute('href', 'mailto:contacto.gersonortiz@gmail.com');
  });

  it('has accessible link names', () => {
    expect(screen.getByRole('link', { name: 'Connect on LinkedIn' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View code on GitHub' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Email me at contacto.gersonortiz@gmail.com' })).toBeInTheDocument();
  });

  it('renders decorative images with empty alt text', () => {
    const images = screen.getAllByRole('presentation');
    //For images that are purely decorative, using an empty alt="" attribute tells the screen reader to ignore the image entirely and become presentation role
    images.forEach(image => {
      expect(image).toHaveAttribute('alt', '');
    });
  });

  it('has proper heading structure', () => {
    const mainHeading = screen.getByRole('heading', { level: 3 });
    const subHeading = screen.getByRole('heading', { level: 4 });

    expect(mainHeading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
  });

});