import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return password132', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'password132',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toBe('password132');
  });

  test('default value should be to ""', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
      },
    };
    expect(getLoginPassword(state as StateSchema)).toBe('');
  });
});
