import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';
import { pages } from './Sidebar';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Sidebar test(s):', () => {
  it('renders the <nav> element', () => {
    render(<Sidebar />);

    const navElement = screen.getByTestId('sidebar');
    expect(navElement).toBeInTheDocument();
  });

  it('renders the sidebar header', async () => {
    render(<Sidebar />);
    const header = await screen.findByText(/Rick and Morty/i);

    expect(header).toBeInTheDocument();
  });

  it('renders the Sidebar links', async () => {
    render(<Sidebar />);

    expect(await screen.findByText(/Characters/i)).toBeInTheDocument();
    expect(await screen.findByText(/Episodes/i)).toBeInTheDocument();
    expect(await screen.findByText(/Locations/i)).toBeInTheDocument();
  });

  it('renders the <nav> element with aria-label', () => {
    render(<Sidebar />);

    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveAttribute('aria-label', 'Sidebar');
  });

  it('renders the links with correct href attributes', () => {
    render(<Sidebar />);

    pages.forEach((link) => {
      const linkElement = screen.getByText(link.name);
      expect(linkElement).toHaveAttribute('href', link.href);
    });
  });

  it('links are clickable and have correct href attributes', () => {
    render(<Sidebar />);
    pages.forEach((link) => {
      const linkElement = screen.getByText(link.name);
      fireEvent.click(linkElement);
      expect(linkElement).toHaveAttribute('href', link.href);
    });
  });
});
