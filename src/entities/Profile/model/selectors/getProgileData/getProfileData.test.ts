import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  const data = {
    age: 22,
    avatar: '',
    city: 'Moscow',
    country: Country.Armenia,
    currency: Currency.EUR,
    first: 'Abay',
    lastname: 'Kinayat',
    username: 'abay',
  };
  test('Should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('Should return default value', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toBe(undefined);
  });
});
