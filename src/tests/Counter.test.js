import { render, screen , fireEvent} from '@testing-library/react';
import App from '../components/App';
import Counter from '../components/App';
beforeEach(() => {
  render(<Counter />);
 
})

test('renders counter message', () => {
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const testInt=screen.getByTestId('count');
  expect(testInt).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const test = screen.getByTestId('count');
  const increase = screen.getByText('+');
  fireEvent.click(increase);
  expect(test).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const test = screen.getByTestId('count');
  const decrease = screen.getByText('-');
  fireEvent.click(decrease);
  expect(test).toHaveTextContent('-1');
});
