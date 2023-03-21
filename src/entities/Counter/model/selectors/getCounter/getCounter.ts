import type { StateSchema } from 'app/providers/StoreProvider';

export function getCounter(state: StateSchema) {
  return state.counter;
}
