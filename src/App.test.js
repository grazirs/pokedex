import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the texts', () => {
  render(<App />);
  const selectText = screen.getByText(/select the pokémons by type:/i)
  const searchText = screen.getByText(/or search your favorite pokémon by name or id:/i)
  expect(selectText).toBeInTheDocument();
  expect(searchText).toBeInTheDocument();
});
