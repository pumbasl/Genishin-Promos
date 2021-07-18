import { render, screen } from '@testing-library/react';
import App from './App';

test('рендер сайта', () => {
  render(<App />);
  const linkElement = screen.getByText(/о нас/i);
  expect(linkElement).toBeInTheDocument();
});
