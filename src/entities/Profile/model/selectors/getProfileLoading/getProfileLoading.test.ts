import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileLoading', () => {
  test('Should return profile loading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileLoading(state as StateSchema)).toBe(true);
  });

  test('Should return default value', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileLoading(state as StateSchema)).toBe(false);
  });
});
