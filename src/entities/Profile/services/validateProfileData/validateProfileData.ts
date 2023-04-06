import { Profile, ValidateProfileError } from '../../model/types/profile';

export function validateProfileData(profile?: Profile) {
  const errors: ValidateProfileError[] = [];

  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    first, lastname, age, country,
  } = profile;

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
}
