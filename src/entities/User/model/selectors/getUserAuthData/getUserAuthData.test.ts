import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
  test('should return user auth data value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: 1,
          username: 'abay',
        },
      },
    };

    expect(getUserAuthData(state as StateSchema)).toEqual({
      id: 1,
      username: 'abay',
    });
  });
});
