import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render a header component', () => {
  render(<App />);

  const h1Element = screen.getByRole('heading');
  expect(h1Element).toBeInTheDocument();
});
