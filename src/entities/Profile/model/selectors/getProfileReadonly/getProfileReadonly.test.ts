import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('Should return readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toBe(true);
  });

  test('Should return default value', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
  });
});
