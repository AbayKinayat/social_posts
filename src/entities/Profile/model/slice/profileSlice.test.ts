import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from 'entities/Profile/services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const profileData = {
  age: 22,
  avatar: '',
  city: 'Moscow',
  country: Country.Armenia,
  currency: Currency.EUR,
  first: 'Abay',
  lastname: 'Kinayat',
  username: 'abay',
};

describe('profileSlice', () => {
  test('setReadonly action should return { readonly: true }', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('resetForm action testing', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { age: 10, avatar: 'avatar', first: 'Test' },
      data: profileData,
      validateErrors: [
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.NO_DATA,
      ],
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.resetForm(),
    )).toEqual({
      form: profileData,
      data: profileData,
      validateErrors: undefined,
    });
  });

  test('patchProfile testing', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: profileData,
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.patchProfile({
        age: 18,
        lastname: 'test',
      }),
    )).toEqual({
      form: {
        ...profileData,
        age: 18,
        lastname: 'test',
      },
    });
  });

  test('updateProfileData pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.NO_DATA],
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
      readonly: true,
    });
  });

  test('updateProfileData fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(profileData, '', '1'),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      data: profileData,
      form: profileData,
      readonly: true,
    });
  });

  test('updateProfileData rejected', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.rejected(new Error(), '', '1', [ValidateProfileError.NO_DATA]),
      ),
    ).toEqual({
      isLoading: false,
      readonly: false,
      validateErrors: [ValidateProfileError.NO_DATA],
    });
  });
});
