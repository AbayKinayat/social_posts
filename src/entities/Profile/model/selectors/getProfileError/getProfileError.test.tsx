import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('Should return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error',
      },
    };

    expect(getProfileError(state as StateSchema)).toBe('error');
  });

  test('Should return default value', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toBe('');
  });
});
