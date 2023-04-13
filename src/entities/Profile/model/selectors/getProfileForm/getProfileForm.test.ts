import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  const state: DeepPartial<StateSchema> = {
    profile: {
      form: {
        age: 22,
        avatar: '',
        city: 'Moscow',
        country: Country.Armenia,
        currency: Currency.EUR,
        first: 'Abay',
        lastname: 'Kinayat',
        username: 'abay',
      },
    },
  };
  test('should return profile form', () => {
    expect(getProfileForm(state as StateSchema)).toEqual(state.profile?.form);
  });

  test('should return default value', () => {
    const stateDefault: DeepPartial<StateSchema> = {};

    expect(getProfileForm(stateDefault as StateSchema)).toEqual(undefined);
  });
});
