import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUserNameProps {
  username: string,
  password: string,
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUserNameProps,
  ThunkConfig<string>
>(
  'login/loginByUsername',
  async (data, thunkApi) => {
    try {
      const response = await thunkApi.extra.api.post<User>('/login', data);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response.data));
      thunkApi.dispatch(userActions.setAuthData(response.data));

      thunkApi?.extra?.navigate?.('/about');

      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue('error');
    }
  },
);
