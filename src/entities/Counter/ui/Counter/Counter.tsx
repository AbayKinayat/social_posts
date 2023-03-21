import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../../model/slice/CounterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <button onClick={increment} data-testid="increment">
        +
      </button>
      <div data-testid="value">
        {counterValue}
      </div>
      <button onClick={decrement} data-testid="decrement">
        -
      </button>
    </div>
  );
};
