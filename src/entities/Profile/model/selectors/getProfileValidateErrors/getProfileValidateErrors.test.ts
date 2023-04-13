import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
  test('Should return validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.INCORRECT_COUNTRY,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('Should return default value', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
  });
});
