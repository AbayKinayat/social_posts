import { CounterSchema, counterReducer, counterActions } from 'entities/Counter';

describe('counterSlice', () => {
  test('increment', () => {
    const state: DeepPartial<CounterSchema> = {
      value: 10,
    };

    expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({
      value: 11,
    });
  });

  test('decrement', () => {
    const state: DeepPartial<CounterSchema> = {
      value: 10,
    };

    expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({
      value: 9,
    });
  });

  test('shoud be default value', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({
      value: 1,
    });
  });
});
