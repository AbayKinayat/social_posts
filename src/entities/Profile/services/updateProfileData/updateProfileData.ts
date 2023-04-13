import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileError } from '../../model/types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile, void, ThunkConfig<ValidateProfileError[]>
>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, getState, rejectWithValue } = thunkApi;
    try {
      const formData = getProfileForm(getState());

      const errors = validateProfileData(formData);

      if (errors.length) {
        return thunkApi.rejectWithValue(errors);
      }

      const response = await extra.api.put('/profile', formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
