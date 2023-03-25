import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUserNameProps {
  username: string,
  password: string,
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUserNameProps,
  { rejectValue: string }
>(
  'login/loginByUsername',
  async (data, thunkApi) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', data);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response.data));
      thunkApi.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkApi.rejectWithValue('error');
    }
  },
);
