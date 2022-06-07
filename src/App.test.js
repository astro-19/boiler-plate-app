import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders react', () => {
  render(<App />);
  // const linkElement = screen.getByRole('div')
  // expect(linkElement).toHaveTextContent('It\'s working...')

  const element = screen.getByRole('div')
  expect(element).toHaveTextContent('It\'s working...')
});
