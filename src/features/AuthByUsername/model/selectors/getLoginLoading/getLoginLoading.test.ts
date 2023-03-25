import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginLoading(state as StateSchema)).toBe(true);
  });

  test('defaul value should be false', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
      },
    };
    expect(getLoginLoading(state as StateSchema)).toBe(false);
  });
});
