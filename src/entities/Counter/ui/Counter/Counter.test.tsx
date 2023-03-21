import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/renderComponent/renderComponent';
import { Counter } from './Counter';

describe('Counter', () => {
  test('value should be 10', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });

    expect(screen.getByTestId('value')).toHaveTextContent('10');
  });

  test('increment', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });

    fireEvent.click(screen.getByTestId('increment'));

    expect(screen.getByTestId('value')).toHaveTextContent('11');
  });

  test('decrement', () => {
    renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });

    fireEvent.click(screen.getByTestId('decrement'));

    expect(screen.getByTestId('value')).toHaveTextContent('9');
  });
});
