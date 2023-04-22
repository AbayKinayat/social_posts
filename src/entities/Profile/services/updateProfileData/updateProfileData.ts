import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileError } from '../../model/types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile, string, ThunkConfig<ValidateProfileError[]>
>(
  'profile/updateProfileData',
  async (profileId, thunkApi) => {
    const { extra, getState, rejectWithValue } = thunkApi;
    try {
      const formData = getProfileForm(getState());

      const errors = validateProfileData(formData);

      if (errors.length) {
        return thunkApi.rejectWithValue(errors);
      }

      const response = await extra.api.put(`/profile/${profileId}`, formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
