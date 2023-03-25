import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUsername/services/loginByUsername';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
  extraReducers(builder) {
    return builder
      .addCase(
        loginByUsername.fulfilled,
        (state, action) => {
          state.username = action.payload.username;
          state.isLoading = false;
          state.error = '';
        },
      )
      .addCase(
        loginByUsername.pending,
        (state) => {
          state.isLoading = true;
          state.error = '';
        },
      )
      .addCase(
        loginByUsername.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        },
      );
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
