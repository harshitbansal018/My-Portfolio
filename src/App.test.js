import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio owner heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /harshit bansal/i })).toBeInTheDocument();
});
