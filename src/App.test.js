// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Playlist component', () => {
  render(<App />);
  const playlistHeader = screen.getByText(/Playlist/i);
  expect(playlistHeader).toBeInTheDocument();
});
