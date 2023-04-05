import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfileData } from '../../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  error: '',
  isLoading: false,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly(state, action: PayloadAction<boolean>) {
      state.readonly = action.payload;
    },
    patchProfile(state, action: PayloadAction<Profile>) {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    resetForm(state) {
      state.form = state.data;
    },
  },
  extraReducers(builder) {
    return builder
      .addCase(
        fetchProfileData.pending,
        (state) => {
          state.isLoading = true;
          state.error = '';
        },
      )
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.data = action.payload;
          state.form = action.payload;
          state.error = '';
          state.isLoading = false;
        },
      )
      .addCase(
        fetchProfileData.rejected,
        (state, action) => {
          state.error = action.payload || '';
          state.isLoading = false;
        },
      )
      .addCase(
        updateProfileData.pending,
        (state) => {
          state.isLoading = true;
          state.error = '';
          state.readonly = true;
        },
      )
      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.data = action.payload;
          state.form = action.payload;
          state.error = '';
          state.isLoading = false;
          state.readonly = true;
        },
      )
      .addCase(
        updateProfileData.rejected,
        (state, action) => {
          state.error = action.payload || '';
          state.isLoading = false;
          state.readonly = false;
        },
      );
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
