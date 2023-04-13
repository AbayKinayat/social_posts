import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile, ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

const profileData: Profile = {
  age: 22,
  first: 'Abay',
  lastname: 'Kinayat',
  avatar: 'Test',
  city: 'Test',
  country: Country.Kazakhstan,
  currency: Currency.EUR,
  username: 'abay',
};

describe('validateProfileData', () => {
  test('validate success', () => {
    const result = validateProfileData(profileData);

    expect(result).toEqual([]);
  });

  test('validate age error', () => {
    const result = validateProfileData({ ...profileData, age: 0 });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('validate data error', () => {
    const result = validateProfileData({ ...profileData, first: '', lastname: '' });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('validate country error', () => {
    const result = validateProfileData({ ...profileData, country: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('validate no data error', () => {
    const result = validateProfileData();
    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('validate age and country error', () => {
    const result = validateProfileData({ ...profileData, country: undefined, age: undefined });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('validate all error', () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
