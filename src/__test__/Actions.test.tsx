import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../pages/Dashboard/Dashboard';

test('Info cards are displayed in Dashboard page', () => {
  render(<Dashboard />);
  const infoCardElement = screen.getByTestId('info-card') as HTMLElement;
  expect(infoCardElement).toBeInTheDocument();
});



