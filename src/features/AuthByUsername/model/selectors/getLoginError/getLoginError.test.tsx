import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return error value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };
    expect(getLoginError(state as StateSchema)).toBe('error');
  });

  test('default value should be ""', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
      },
    };
    expect(getLoginError(state as StateSchema)).toBe('');
  });
});
