import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return ""', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'abay' },
    };
    expect(getLoginUsername(state as StateSchema)).toBe('abay');
  });

  test('default value should be', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { },
    };
    expect(getLoginUsername(state as StateSchema)).toBe('');
  });
});
