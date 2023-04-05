import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { Profile } from '../../model/types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, getState, rejectWithValue } = thunkApi;
    try {
      const formData = getProfileForm(getState());

      const response = await extra.api.put('/profile', formData);

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
