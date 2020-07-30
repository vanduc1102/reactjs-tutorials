import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders `Next player` text', () => {
  const { getByText } = render(<App />);
  const nextPlayerTextElement = getByText(/Next player/i);
  const initialGameBtnElement = getByText(/Go to game start/i);
  expect(nextPlayerTextElement).toBeInTheDocument();
  expect(initialGameBtnElement).toBeInTheDocument();
});
