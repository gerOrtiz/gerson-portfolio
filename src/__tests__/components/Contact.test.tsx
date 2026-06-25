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
    expect(screen.getByRole('link', { name: `Let's connect on LinkedIn` })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View code on GitHub' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Email me at contacto.gersonortiz@gmail.com' })).toBeInTheDocument();
  });

  it('renders decorative images with empty alt text', () => {
    const linkedin = screen.queryByTitle(/linkedin icon/i);
    expect(linkedin).toBeInTheDocument();
    const github = screen.queryByTitle(/github icon/i);
    expect(github).toBeInTheDocument();
    const envelope = screen.queryByTitle(/envelope icon/i);
    expect(envelope).toBeInTheDocument();
  });

  it('renders available dot', () => {
    const dot = screen.getByTestId('available-dot');
    expect(dot).toBeInTheDocument();
    expect(dot).toHaveClass('available-dot');
  });

});