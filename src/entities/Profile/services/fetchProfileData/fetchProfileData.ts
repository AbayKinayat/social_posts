import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../../../../app/providers/StoreProvider/config/StateSchema';
import { Profile } from '../../model/types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'fetchProfileData',
  async (profileId, thunkApi) => {
    try {
      const response = await thunkApi.extra.api.get<Profile>(`/profile/${profileId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue('error');
    }
  },
);
