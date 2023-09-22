import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pay with credit card/i);
  expect(linkElement).toBeInTheDocument();
});

