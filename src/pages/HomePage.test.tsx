import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './index';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('HomePage', () => {
  it('renders title', async () => {
    render(<HomePage />);

    const title = await screen.findByText(/Rick and Morty Test/i);
    expect(title).toBeInTheDocument();
  });
});
